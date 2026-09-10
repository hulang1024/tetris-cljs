(ns tetris.scenes.gameplay.gameplay-scene
  (:require-macros [shadow.cljs.modern :refer [defclass]])
  (:require ["excalibur" :refer [Scene]]
            [tetris.scenes.gameplay.piece :refer [Piece]]))

(defclass GameplayScene (extends Scene)
  (field input-state)
  (field game-state)
  (field falling-piece)

  (constructor [this]
    (super)
    (set! (.-input-state this) nil)
    (set! (.-game-state this) nil)
    (set! (.-falling-piece this) nil))

  Object
  (onInitialize [this ^js engine]
    (.toggleDebug engine))
  
  (onPostUpdate [this ^js engine dt]
    (when-not (.-falling-piece this)
      (let [^js piece (Piece. :s 0)]
        (.add engine piece)
        (.setTo (.-pos piece) 100 70)
        (set! (.-falling-piece this) piece)))
    (let [^js piece (.-falling-piece this)
          ^js pos (.-pos piece)
          [vx vy] (case (first (.. engine -input -keyboard (getKeys)))
                    "ArrowUp"    [0 -1]
                    "ArrowRight" [1 0]
                    "ArrowDown"  [0 1]
                    "ArrowLeft"  [-1 0]
                    [0 0])
          step 10]
      (if (not= (+ vx vy) 0)
        (.setTo pos
                (+ (* vx step) (.-x pos))
                (+ (* vy step) (.-y pos)))))))

