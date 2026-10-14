(ns tetris.scenes.replay
  (:require [tetris.assets :as assets]
            [tetris.core.game :as game]
            [tetris.core.ruleset.rotation-nrs]
            [tetris.core.ruleset.rotation-srs]
            [tetris.core.tick :as tick]
            [tetris.core.replay :as replay]
            [tetris.scenes.debug :as debug]
            [tetris.input.keyboard :as keyboard]
            [tetris.scenes.render.gameplay.game-view :as game-view]
            [tetris.scenes.render.gameplay.sound-effect :as sound-effect]))

(def scene-state (atom nil))

(defn- handle-keyboard [scene-state]
  (let [{:keys [status replayer]} scene-state
        {:keys [just-pressed-buttons]} @keyboard/state
        replay-delta (get-in scene-state [:replayer :delta])]
    (cond
      (some #(= :Enter %) just-pressed-buttons)
      (case status
        :playing (assoc scene-state :status :pause)
        :pause (assoc scene-state :status :playing)
        :options (assoc scene-state
                        :status :playing
                        :replayer (replay/start replayer)
                        :game-state (:initial-game-state scene-state))
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
                 {:keys [status game-state replayer]} scene-state]
             (case status
               :game-over
               (assoc scene-state
                      :game-state (assoc game-state :events []))

               :playing
               (let [[inputs replayer] (replay/step replayer)
                     [game-state status]
                     (reduce
                       (fn [[game-state status] input-state]
                         (let [game-state (-> (assoc game-state :events [])
                                              (tick/step input-state))]
                           (tap> (str "record : frame#" (:frame game-state) ","
                                      (select-keys input-state [:pressed-buttons])))
                           [game-state
                            (if (game/find-event :game-over (:events game-state))
                              :game-over
                              status)]))
                       [game-state status]
                       inputs)]
                 (assoc scene-state
                        :status (if (replay/ended? replayer) :ended status)
                        :game-state game-state
                        :replayer replayer))

               scene-state))))
  (debug/draw-debug @scene-state)
  (let [{:keys [status game-state replayer game-view]} @scene-state]
    (when (and (contains? #{:playing :game-over :ended} status)
               (replay/current-changed? replayer))
      (game-view/render! game-view game-state (:last-input replayer))
      (sound-effect/handle game-state))))

(defn ^:async start [^js app game-state replay-events]
  (tap> (str "replay events\n" replay-events))
  (let [options (merge game-state {:piece-style "b11"})]
    (await (assets/load-piece-styles (:piece-style options)))
    (let [view (game-view/create options)]
      (.addChild (.-stage app) (:container view))
      (reset! scene-state
              {:status :playing ; [:enum :playing :pause :game-over]
               :game-state game-state
               :initial-game-state game-state
               :game-view (atom view)
               :app app
               :replayer (replay/make-replayer replay-events)})
      (.. app -ticker (add tick))
      scene-state)))
