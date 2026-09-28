(ns tetris.scenes.gameplay
  (:require [tetris.assets :as assets]
            [tetris.core.game :as game]
            [tetris.core.ruleset.classic :refer [classic-ruleset]]
            [tetris.core.ruleset.modern :refer [modern-ruleset]]
            [tetris.core.tick :as tick]
            [tetris.debug :as debug]
            [tetris.input.keyboard :as keyboard]
            [tetris.scenes.gameplay.game-view :as game-view]))

(defn initial-scene []
  (let [state (-> modern-ruleset
                  (tick/initial-state)
                  (game/initial-state))]
    {:game-status :playing ; [:enum :playing :pause :game-over :options]
     :game-state state
     :game-view (atom nil)}))

(defn reset-scene [game-view]
  (tap> "reset scene")
  (assoc (initial-scene) :game-view game-view))

(def scene-state (atom (initial-scene)))

(defn tick [_]
  (swap! scene-state
         (fn [scene-state]
           (let [{:keys [game-status game-state game-view]} scene-state
                 ok-pressed? (some #(= :ok %) (keyboard/just-pressed-buttons))
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
                 (reset-scene game-view)
                 (let [game-state (-> (if-not (game/started? game-state)
                                        (game/handle-command game-state :start)
                                        (assoc game-state :events []))
                                      (tick/step @keyboard/keyboard-state game/handle-command))
                       game-status (if (game/find-event :game-over (:events game-state))
                                     :game-over
                                     game-status)]
                   (assoc scene-state
                          :game-status game-status
                          :game-state game-state)))
               (assoc scene-state :game-status game-status)))))
  (debug/draw-debug @scene-state)
  (let [{:keys [game-status game-state game-view]} @scene-state]
    (when (contains? #{:playing :game-over} game-status)
      (game-view/render! game-view game-state))
    (when (= game-status :game-over)
      (swap! scene-state assoc :game-status :options))))

(defn ^:async start [^js app]
  (let [stage (.-stage app)
        options {:piece-style "b11"}]
    (await (assets/load-piece-styles (:piece-style options)))
    (let [view (game-view/create stage options)]
      (.addChild stage (:container view))
      (reset! (:game-view @scene-state) view)
      (.. app -ticker (add tick)))))
