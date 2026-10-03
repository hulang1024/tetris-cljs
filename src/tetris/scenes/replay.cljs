(ns tetris.scenes.replay
  (:require [tetris.assets :as assets]
            [tetris.core.game :as game]
            [tetris.core.ruleset.modern :refer [modern-ruleset]]
            [tetris.core.ruleset.rotation-nrs]
            [tetris.core.ruleset.rotation-srs]
            [tetris.core.tick :as tick]
            [tetris.core.replay :as replay]
            [tetris.debug :as debug]
            [tetris.input.keyboard :as keyboard]
            [tetris.render.gameplay.game-view :as game-view]
            [tetris.render.gameplay.sound-effect :as sound-effect]))

(defn- initial-scene []
  (let [state (-> modern-ruleset
                  (assoc :speed-level 1)
                  (tick/initial-state)
                  (game/initial-state))]
    {:game-status :playing ; [:enum :playing :pause :game-over :options]
     :game-state state
     :replayer nil
     :game-view (atom nil)}))

(def scene-state (atom (initial-scene)))

(defn- tick [_]
  (keyboard/handle (keyboard/key->buttons @keyboard/pressed-keys))
  (swap! scene-state
         (fn [scene-state]
           (let [{:keys [game-status game-state replayer]} scene-state
                 ok-pressed? (some #(= :ok %) (:just-pressed-buttons @keyboard/state))
                 game-status (if ok-pressed? 
                               (case game-status
                                 :playing :pause
                                 :pause :playing
                                 :options :playing
                                 game-status)
                               game-status)]
             (if (= game-status :playing)
               (let [[replay-input-states replayer] (replay/step replayer)
                     game-state (reduce
                                  (fn [game-state [frame input-state]]
                                    (tap> (str "replaying - " "frame#"
                                               frame ": " input-state))
                                    (-> (assoc game-state :events [])
                                        (tick/step input-state)))
                                  game-state
                                  replay-input-states)
                     game-status (if (game/find-event :game-over (:events game-state))
                                   :game-over
                                   game-status)]
                 (assoc scene-state
                        :game-status game-status
                        :game-state game-state
                        :replayer replayer))
               (assoc scene-state :game-status game-status)))))
  (debug/draw-debug @scene-state)
  (let [{:keys [game-status game-state replayer game-view]} @scene-state]
    (when (contains? #{:playing :game-over} game-status)
      (game-view/render! game-view game-state (:input-state replayer))
      (sound-effect/handle game-state))
    (when (= game-status :game-over)
      (swap! scene-state assoc :game-status :options))))

(defn ^:async start [^js app replay-records]
  (tap> (str "replay records:\n" replay-records))
  (tap> "replay started")
  (let [stage (.-stage app)
        options (merge (:game-state @scene-state) {:piece-style "b11"})]
    (await (assets/load-piece-styles (:piece-style options)))
    (let [view (game-view/create stage options)]
      (.addChild stage (:container view))
      (reset! (:game-view @scene-state) view)
      (swap! scene-state assoc :replayer (replay/make-replayer replay-records))
      (.. app -ticker (add tick)))))
