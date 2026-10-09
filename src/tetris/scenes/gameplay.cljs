(ns tetris.scenes.gameplay
  (:require [tetris.assets :as assets]
            [tetris.core.game :as game]
            [tetris.core.replay :as replay]
            [tetris.core.ruleset.rotation-nrs]
            [tetris.core.ruleset.rotation-srs]
            [tetris.core.tick :as tick]
            [tetris.scenes.debug :as debug]
            [tetris.input.keyboard :as keyboard]
            [tetris.scenes.render.gameplay.game-view :as game-view]
            [tetris.scenes.render.gameplay.sound-effect :as sound-effect]))

(defn- initial-scene [game-state]
  {:game-state game-state
   :status :playing ; :playing :pause :game-over
   :replay-recorder (replay/make-recorder)
   :game-view nil
   :app nil})

(def scene-state (atom nil))

(defn- tick []
  (let [pressed-buttons (keyboard/key->buttons @keyboard/pressed-keys)
        input-state (keyboard/handle pressed-buttons)]
    (swap! scene-state
           (fn [scene-state]
             (let [{:keys [status game-state]} scene-state]
               (case status
                 :game-over
                 (assoc scene-state
                        :game-state (assoc game-state :events []))

                 :playing
                 (let [game-state (-> (assoc game-state :events [])
                                      (tick/step input-state))
                       status (if (game/find-event :game-over (:events game-state))
                                :game-over
                                status)]
                   (when (and (:debug? game-state)
                              (seq (:pressed-buttons input-state)))
                     (tap> (str "recording - " "frame#"
                                (:frame game-state) ": " input-state)))
                   (assoc scene-state
                          :status status
                          :game-state game-state
                          :replay-recorder (replay/append-record
                                             (:replay-recorder scene-state)
                                             (:frame game-state)
                                             pressed-buttons)))

                 scene-state))))
    (debug/draw-debug @scene-state)
    (let [{:keys [game-state game-view]} @scene-state]
      (game-view/render! game-view game-state input-state)
      (sound-effect/handle game-state))))

(defn ^:async start [^js app game-state]
  (let [options (merge game-state {:piece-style "b11"})]
    (await (assets/load-piece-styles (:piece-style options)))
    (let [view (game-view/create options)]
      (.addChild (.-stage app) (:container view))
      (reset! scene-state
              (assoc (initial-scene game-state)
                     :game-view (atom view)
                     :app app))
      (.. app -ticker (add tick))
      (debug/toggle true)
      scene-state)))

(defn destroy []
  (debug/toggle false))
