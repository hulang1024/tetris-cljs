(ns tetris.scenes.gameplay.scene
  (:require-macros [shadow.cljs.modern :refer [defclass]])
  (:require ["excalibur" :as ex]
            [goog.dom :as gdom]
            [goog.style :as gstyle]
            [tetris.core.game :as game]
            [tetris.local-frame :as local-frame]
            [tetris.debug :as debug]
            [tetris.input :as input]
            [tetris.scenes.gameplay.board :refer [Board]]
            [tetris.engine :as engine]))

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
                               :width 240
                               :font-size 13
                               :font-family "monospace"
                               :whiteSpace "pre-wrap"
                               :color "white"})
      (gdom/appendChild (.-body (gdom/getDocument)) el)
      (set! (.-debug-el this) el))
    (set! (.-board this) (Board.))
    (.add this (.-board this))
    (.reset-game this))

  (reset-game [this]
    (.reset (.-board this))
    (set! (.-input-state this) (input/initial-state))
    (let [random (ex/Random. (rand-int 30))
          rand-range (fn [min max] (ex/randomIntInRange min max random))]
      (set! (.-state this) (game/initial-state (local-frame/initial-state) rand-range))))

  (draw-debug [this text]
    (set! (.. this -debug-el -textContent) (clj->js text)))
  
  (onPostUpdate [this ^js engine delta-ms]
    (when ^boolean goog/DEBUG
      (.draw-debug this (debug/state->text (.-state this) input-state delta-ms)))
    (let [pressed-keys (js->clj (.. engine -input -keyboard (getKeys)))
          input-state (input/handle-keyboard (.-input-state this) pressed-keys)
          state (local-frame/step (.-state this) input-state delta-ms)]
      (.render-game-state ^js (.-board this) state)
      (when (contains? (set (:events state)) {:type :game-over})
        (js/setTimeout #(.reset-game this) 1000))
      (set! (.-state this) (assoc state :events []))
      (set! (.-input-state this) input-state))))
