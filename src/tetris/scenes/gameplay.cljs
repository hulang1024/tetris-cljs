(ns tetris.scenes.gameplay
  (:require [tetris.assets :as assets]
            [tetris.core.game :as game]
            [tetris.core.ruleset.modern :refer [modern-ruleset]]
            [tetris.core.ruleset.rotation-nrs]
            [tetris.core.ruleset.rotation-srs]
            [tetris.core.tick :as tick]
            [tetris.core.input :as input]
            [tetris.debug :as debug]
            [tetris.input.keyboard :as keyboard]
            [tetris.render.gameplay.game-view :as game-view]
            [tetris.render.gameplay.sound-effect :as sound-effect]))

(defn initial-scene []
  (let [state (-> modern-ruleset
                  (assoc :speed-level 1)
                  (tick/initial-state)
                  (game/initial-state))]
    {:input-state (input/initial-state)
     :game-status :playing ; [:enum :playing :pause :game-over :options]
     :game-state state
     :game-view (atom nil)}))

(defn reset-scene [input-state game-view]
  (tap> "reset scene")
  (assoc (initial-scene)
         :input-state input-state
         :game-view game-view))

(def scene-state (atom (initial-scene)))

(defn tick [_]
  (swap! scene-state
         (fn [scene-state]
           (let [{:keys [input-state game-status game-state game-view]} scene-state
                 pressed-buttons (keyboard/key->buttons @keyboard/pressed-keys)
                 input-state (input/handle input-state pressed-buttons)
                 ok-pressed? (some #(= :ok %) (:just-pressed-buttons input-state))
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
                 (reset-scene input-state game-view)
                 (let [game-state (-> (if-not (game/started? game-state)
                                        (game/handle-command game-state :start)
                                        (assoc game-state :events []))
                                      (tick/step input-state game/handle-command))
                       game-status (if (game/find-event :game-over (:events game-state))
                                     :game-over
                                     game-status)]
                   (assoc scene-state
                          :input-state input-state
                          :game-status game-status
                          :game-state game-state)))
               (assoc scene-state
                      :input-state input-state
                      :game-status game-status)))))
  (debug/draw-debug @scene-state)
  (let [{:keys [input-state game-status game-state game-view]} @scene-state]
    (when (contains? #{:playing :game-over} game-status)
      (game-view/render! game-view game-state input-state)
      (sound-effect/handle game-state))
    (when (= game-status :game-over)
      (swap! scene-state assoc :game-status :options))))

(defn ^:async start [^js app]
  (let [stage (.-stage app)
        options (merge (:game-state @scene-state) {:piece-style "b11"})]
    (await (assets/load-piece-styles (:piece-style options)))
    (let [view (game-view/create stage options)]
      (.addChild stage (:container view))
      (reset! (:game-view @scene-state) view)
      (.. app -ticker (add tick)))))
