(ns tetris.scenes.gameplay.scene
  (:require-macros [shadow.cljs.modern :refer [defclass]])
  (:require ["excalibur" :as ex]
            [goog.dom :as gdom]
            [goog.style :as gstyle]
            [tetris.core.game :as game]
            [tetris.core.debug :as debug]
            [tetris.core.input :as input]
            [tetris.scenes.gameplay.board :refer [Board]]))

(defclass GameplayScene (extends ex/Scene)
  (field input-state)
  (field state)
  (field board)
  (field debug-el)

  (constructor [this]
    (super))

  Object
  (onInitialize [this ^js engine]
    (let [el (gdom/createDom "pre" "debug" "Debug")]
      (gstyle/setStyle el #js {:position "absolute"
                               :top 20
                               :right 0
                               :width 300
                               :font-size 13
                               :font-family "monospace"
                               :whiteSpace "pre-wrap"
                               :color "white"})
      (gdom/appendChild (.-body (gdom/getDocument)) el)
      (set! (.-debug-el this) el))

    (set! (.-input-state this) (input/initial-state))
    (let [random (ex/Random. (rand-int 30))
          rand-range (fn [min max] (ex/randomIntInRange min max random))]
      (set! (.-state this) (game/initial-state rand-range)))
    (set! (.-board this) (Board.))
    (.add this (.-board this))
    (.toggleDebug engine))

  (draw-debug [this text]
    (set! (.. this -debug-el -textContent) (clj->js text)))
  
  (onPostUpdate [this ^js engine delta-ms]
    (let [pressed-keys (js->clj (.. engine -input -keyboard (getKeys)))
          input-state (input/handle-keyboard (.-input-state this) pressed-keys)
          state (game/tick (.-state this) input-state delta-ms)]
      (when (= (:status state) :playing)
        (.render-game-state ^js (.-board this) state))
      (.draw-debug this (debug/state->text state))
      (set! (.-state this) state)
      (set! (.-input-state this) input-state))))
