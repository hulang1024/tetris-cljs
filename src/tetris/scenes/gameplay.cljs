(ns tetris.scenes.gameplay
  (:require [tetris.assets :as assets]
            [tetris.core.game :as game]
            [tetris.core.ruleset.modern :refer [modern-ruleset]]
            [tetris.core.ruleset.rotation-nrs]
            [tetris.core.ruleset.rotation-srs]
            [tetris.core.tick :as tick]
            [tetris.core.replay :as replay]
            [tetris.debug :as debug]
            [tetris.input.keyboard :as keyboard]
            [tetris.scenes.replay :as scenes.replay]
            [tetris.render.gameplay.game-view :as game-view]
            [tetris.render.gameplay.sound-effect :as sound-effect]))

(defn- initial-scene []
  (let [state (-> modern-ruleset
                  (assoc :speed-level 1)
                  (tick/initial-state)
                  (game/initial-state))]
    {:game-status :playing ; [:enum :playing :pause :game-over :options :exit]
     :game-state state
     :replay-recorder (replay/make-recorder)
     :game-view (atom nil)
     :app (atom nil)}))

(defn- reset-scene [game-view]
  (tap> "reset scene")
  (assoc (initial-scene)
         :game-view game-view))

(def scene-state (atom (initial-scene)))

(defn- go-replay [scene-state tick]
  (let [game-view (deref (:game-view scene-state))
        app (deref (:app scene-state))]
    (.. app -ticker (remove tick))
    (.destroy (:container game-view) true)
    (scenes.replay/start app (:replay-recorder scene-state))
    (assoc scene-state :game-status :exit)))

(defn- tick [_]
  (let [pressed-buttons (keyboard/key->buttons @keyboard/pressed-keys)
        input-state (keyboard/handle pressed-buttons)]
    (swap! scene-state
           (fn [scene-state]
             (let [{:keys [game-status game-state game-view]} scene-state
                   ok-pressed? (some #(= :Enter %) (:just-pressed-buttons input-state))
                   prev-game-status game-status
                   game-status (if ok-pressed? 
                                 (case game-status
                                   :playing :pause
                                   :pause :playing
                                   :options :playing
                                   game-status)
                                 game-status)]
               (if (= game-status :playing)
                 (if (= prev-game-status :options)
                   #_(reset-scene game-view)
                   (go-replay scene-state tick)
                   (let [game-state (-> (assoc game-state :events [])
                                        (tick/step input-state))
                         game-status (if (game/find-event :game-over (:events game-state))
                                       :game-over
                                       game-status)]
                     (when (seq (:pressed-buttons input-state))
                       (tap> (str "recording - " "frame#"
                                  (:frame game-state) ": " input-state)))
                     (assoc scene-state
                            :game-status game-status
                            :game-state game-state
                            :replay-recorder (replay/append-record
                                               (:replay-recorder scene-state)
                                               (:frame game-state)
                                               pressed-buttons))))
                 (assoc scene-state :game-status game-status)))))
    (debug/draw-debug @scene-state)
    (let [{:keys [game-status game-state game-view]} @scene-state]
      (when (contains? #{:playing :game-over} game-status)
        (game-view/render! game-view game-state input-state)
        (sound-effect/handle game-state))
      (when (= game-status :game-over)
        (swap! scene-state assoc :game-status :options)))))

(defn ^:async start [^js app]
  (let [options (merge (:game-state @scene-state) {:piece-style "b11"})]
    (await (assets/load-piece-styles (:piece-style options)))
    (let [view (game-view/create options)]
      (.addChild (.-stage app) (:container view))
      (reset! (:app @scene-state) app)
      (reset! (:game-view @scene-state) view)
      (.. app -ticker (add tick)))))
