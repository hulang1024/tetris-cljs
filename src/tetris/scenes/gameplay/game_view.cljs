(ns tetris.scenes.gameplay.game-view
  (:require-macros [shadow.cljs.modern :refer [defclass]])
  (:require ["excalibur" :as ex]
            [tetris.core.game :as game]
            [tetris.core.local-frame :as local-frame]
            [tetris.debug :as debug]
            [tetris.input.base :as input]
            [tetris.input.gamepad :as gamepad]
            [tetris.input.keyboard :as keyboard]
            [tetris.replay :as replay]
            [tetris.scenes.gameplay.board :refer [Board]]
            [tetris.scenes.gameplay.piece :refer [create-piece set-cell-pos]]
            [tetris.engine :as engine]
            [tetris.core.rules :as rules]))

(defn handler-chain [main-handler & handlers]
  (fn [game-state command]
    (let [game-state' (main-handler game-state command)]
      (doseq [handler handlers]
        (handler command game-state game-state'))
      game-state')))

(defclass GameView (extends ex/Actor)
  (field input-state)
  (field state)
  (field board)
  (field hold)
  (field next-queue)
  (field replay-mode?)
  (field play-command-handler)
  (field recorder)
  (field replayer)

  (constructor [^js this]
    (super))

  Object
  (onInitialize [^js this ^js engine]
    (set! (.-board this) (Board.))
    (set! (.-hold this) nil)
    (set! (.-next-queue this) [])
    (set! (.-replay-mode? this) false)
    (set! (.-recorder this) (replay/make-recorder))
    (.addChild this (.-board this))
    (let [handler (handler-chain
                    game/handle-command
                    debug/handler
                    (replay/make-recorder-command-handler (.-recorder this)))]
      (set! (.-play-command-handler this) handler))
    (.reset-game this))

  (set-hold [^js this state event]
    (let [{:keys [kind dir]} (:hold state)
          ^js hold (create-piece kind dir false 4)
          ^js board (.-board this)]
      (set-cell-pos hold 10 17)
      (.remove-current board)
      (when (= (:action event) :swap)
        (.spawn-piece board state))
      (when (.-hold this)
        (run! #(.kill ^js %) (:cells (.-hold this))))
      (run! #(.addChild this %) (:cells hold))
      (set! (.-hold this) hold)))

  (advance-next-queue [^js this state]
    (run! #(.kill ^js %) (filter some? (flatten (map :cells (.-next-queue this)))))
    (set! (.-next-queue this) [])
    (doseq [[n piece] (map-indexed vector (:next-queue state))]
      (let [^js r-piece (create-piece (:kind piece) (:dir piece) false 4)]
        (set-cell-pos r-piece (+ 10 (* n 4)) 44)
        (run! #(.addChild this %) (:cells r-piece))
        (set! (.-next-queue this) (conj (.-next-queue this) r-piece)))))

  (reset-game [^js this]
    (.reset (.-board this))
    (run! #(.kill ^js %) (:cells (.-hold this)))
    (set! (.-input-state this) (input/initial-state))
    (let [^js random (ex/Random. 30)
          next-int (memoize (fn [t] (.nextInt random)))]
      (set! (.-state this) (game/initial-state
                             (merge {:randomizer next-int}
                                    (local-frame/initial-state rules/modern))))))

  (render-state [^js this state]
    (let [events (:events state)
          ^js board (.-board this)]
      (when-let [event (game/find-event :hold (:events state))]
        (.set-hold this state event))
      (when-let [event (game/find-event :lock events)]
        (.lock board state event))
      (when-let [event (game/find-event :spawn-piece events)]
        (.spawn-piece board state)
        (.advance-next-queue this state))
      (when-let [event (game/find-event :line-clear events)]
        (.clear-lines board state event))
      (when (game/find-event :game-over events)
        (println "game over!")
        (js/setTimeout
          (fn []
            (set! (.-replay-mode? this) true)
            (set! (.-replayer this)
                  (replay/make-replayer (replay/records (.-recorder this))))
            (.reset-game this)
            (debug/draw-debug (.-state this) nil))
          1000))
      (.update-current board state)))

  (on-play-update [^js this ^js engine]
    (let [input-state (.-input-state this)
          pressed-keys (js->clj (.. engine -input -keyboard (getKeys)))
          input-state (keyboard/handle-keyboard input-state pressed-keys)
          ; input-state (gamepad/handle-gamepad (.-input-state this) (.at ^js (.. engine -input -gamepads) 0))
          state (local-frame/step (.-state this) input-state (.-play-command-handler this))]
      (debug/draw-debug state input-state)
      (set! (.-input-state this) input-state)
      state))

  (on-replay-update [^js this ^js engine]
    (let [state (.-state this)
          [replayer commands] (replay/step (.-replayer this))]
      (set! (.-replayer this) replayer)
      (if (seq commands)
        (let [state (reduce (fn [state command]
                              (game/handle-command state command))
                            (.-state this)
                            commands)]
          (debug/draw-debug state nil)
          state)
        state)))

  (onPostUpdate [^js this ^js engine]
    (let [state (.-state this)
          state (if (.-replay-mode? this)
                  (.on-replay-update this engine)
                  (.on-play-update this engine))]
      (.render-state this state)
      (set! (.-state this) (assoc state :events [])))))
