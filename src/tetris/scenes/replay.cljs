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

(defn- initial-game-state []
  (-> modern-ruleset
      (assoc :speed-level 1)
      (tick/initial-state)
      (game/initial-state)))

(def scene-state
  (atom {:game-status :playing ; [:enum :playing :pause :game-over :options]
         :game-state (initial-game-state)
         :replayer nil
         :game-view (atom nil)}))

(defn- handle-keyboard [scene-state]
  (let [{:keys [game-status replayer]} scene-state
        {:keys [just-pressed-buttons]} @keyboard/state
        replay-delta (get-in scene-state [:replayer :delta])]
    (cond
      (some #(= :Enter %) just-pressed-buttons)
      (case game-status
        :playing (assoc scene-state :game-status :pause)
        :pause (assoc scene-state :game-status :playing)
        :options (assoc scene-state
                        :game-status :playing
                        :replayer (replay/start replayer)
                        :game-state (initial-game-state))
        scene-state)

      (some #(= :Equal %) just-pressed-buttons)
      (update scene-state :replayer replay/adjust-delta (* replay-delta 2))

      (some #(= :Minus %) just-pressed-buttons)
      (update scene-state :replayer replay/adjust-delta (/ replay-delta 2))

      :else scene-state)))

(defn- tick [_]
  (keyboard/handle (keyboard/key->buttons @keyboard/pressed-keys))
  (swap! scene-state
         (fn [scene-state]
           (let [scene-state (handle-keyboard scene-state)
                 {:keys [game-status game-state replayer]} scene-state]
             (if (= game-status :playing)
               (let [[inputs replayer] (replay/step replayer)
                     [game-state game-status]
                     (reduce
                       (fn [[game-state game-status] input-state]
                         (let [game-state (-> (assoc game-state :events [])
                                              (tick/step input-state))]
                           (tap> (str "record : frame#" (:frame game-state) ","
                                      (select-keys input-state [:pressed-buttons])))
                           [game-state
                            (if (game/find-event :game-over (:events game-state))
                              :game-over
                              game-status)]))
                       [game-state game-status]
                       inputs)]
                 (assoc scene-state
                        :game-status game-status
                        :game-state game-state
                        :replayer replayer))
               scene-state))))
  (debug/draw-debug @scene-state)
  (let [{:keys [game-status game-state replayer game-view]} @scene-state]
    (when (and (contains? #{:playing :game-over} game-status)
               (replay/current-changed? replayer))
      (game-view/render! game-view game-state (:last-input replayer))
      (sound-effect/handle game-state))
    (when (= game-status :game-over)
      (swap! scene-state assoc :game-status :options))))

(defn ^:async start [^js app replay-recorder]
  (tap> (str "replay records:\n" replay-recorder))
  (tap> "replay started")
  (let [options (merge (:game-state @scene-state) {:piece-style "b11"})]
    (await (assets/load-piece-styles (:piece-style options)))
    (let [view (game-view/create options)]
      (.addChild (.-stage app) (:container view))
      (reset! (:game-view @scene-state) view)
      (swap! scene-state assoc :replayer (replay/make-replayer replay-recorder))
      (tap> (get-in @scene-state [:replayer :inputs]))
      (.. app -ticker (add tick)))))
