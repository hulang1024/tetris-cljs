(ns tetris.scenes.gameplay.game-view
  (:require-macros [shadow.cljs.modern :refer [defclass]])
  (:require ["excalibur" :as ex]
            [goog.dom :as gdom]
            [goog.style :as gstyle]
            [tetris.core.game :as game]
            [tetris.core.local-frame :as local-frame]
            [tetris.debug :as debug]
            [tetris.input.base :as input]
            [tetris.input.gamepad :as gamepad]
            [tetris.input.keyboard :as keyboard]
            [tetris.scenes.gameplay.board :refer [Board]]
            [tetris.scenes.gameplay.piece :refer [create-piece set-cell-pos]]
            [tetris.engine :as engine]))

(defclass GameView (extends ex/Actor)
  (field input-state)
  (field state)
  (field board)
  (field hold)
  (field next-queue)
  (field debug-el)

  (constructor [^js this]
    (super))

  Object
  (onInitialize [^js this ^js engine]
    (when ^boolean goog/DEBUG
      (let [el (gdom/createDom "pre" "debug" "Debug")]
        (gstyle/setStyle el #js {:position "absolute"
                                 :top 20
                                 :right 0
                                 :width 240
                                 :font-size 13
                                 :font-family "monospace"
                                 :whiteSpace "pre-wrap"
                                 :color "white"})
        (gdom/appendChild (.-body (gdom/getDocument)) el)
        (set! (.-debug-el this) el)))
    (set! (.-board this) (Board.))
    (set! (.-hold this) nil)
    (set! (.-next-queue this) [])
    (.addChild this (.-board this))
    (.reset-game this))

  (set-hold [^js this state event]
    (let [{:keys [kind dir]} (:hold state)
          ^js hold (create-piece kind dir false 4)
          ^js board (.-board this)]
      (set-cell-pos hold 10 17)
      (.remove-current board)
      (.spawn-piece board state)
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
    (set! (.-input-state this) (input/initial-state))
    (let [^js random (ex/Random. (rand-int 30))
          next-int (memoize (fn [t] (.nextInt random)))]
      (set! (.-state this) (game/initial-state
                             (merge {:randomizer next-int}
                                    (local-frame/initial-state
                                      {:das 167
                                       :arr 32
                                       :dcd 17
                                       :sdf 6
                                       :lock-delay 500}))))))

  (draw-debug [^js this state input-state delta-ms]
    (let [text (debug/state->text (.-state this) input-state delta-ms)]
      (set! (.. this -debug-el -textContent) (clj->js text))))
  
  (onPostUpdate [^js this ^js engine delta-ms]
    (let [pressed-keys (js->clj (.. engine -input -keyboard (getKeys)))
          input-state (keyboard/handle-keyboard (.-input-state this) pressed-keys)
          ; input-state (gamepad/handle-gamepad (.-input-state this) (.at ^js (.. engine -input -gamepads) 0))
          state (local-frame/step (.-state this) input-state delta-ms)]
      (when ^boolean goog/DEBUG
        (.draw-debug this state input-state delta-ms))
      (let [events (:events state)
            ^js board (.-board this)]
        (when-let [event (game/find-event :hold (:events state))]
          (.set-hold this state event))
        (when-let [event (game/find-event :lock events)]
          (.lock board state event))
        (when-let [event (game/find-event :spawn-piece events)]
          (when (= (:cause event) :lock)
            (.spawn-piece board state))
          (.advance-next-queue this state))
        (when-let [event (game/find-event :line-clear events)]
          (.clear-lines board state event))
        (when (game/find-event :game-over events)
          (js/setTimeout #(.reset-game this) 1000))
        (.update-current board state))
      (set! (.-state this) (assoc state :events []))
      (set! (.-input-state this) input-state))))
