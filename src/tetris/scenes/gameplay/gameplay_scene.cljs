(ns tetris.scenes.gameplay.gameplay-scene
  (:require-macros [shadow.cljs.modern :refer [defclass]])
  (:require ["excalibur" :as ex]
            [tetris.core.logic :refer [rotate]]
            [tetris.scenes.gameplay.piece :refer [Piece]]))

(defclass GameplayScene (extends ex/Scene)
  (field input-state)
  (field game-state)
  (field falling-piece)

  (constructor [this]
    (super)
    (set! (.-input-state this) nil)
    (set! (.-game-state this) (atom {:dir 0}))
    (set! (.-falling-piece this) nil))

  Object
  (onInitialize [this ^js engine]
    (.toggleDebug engine))
  
  (onPostUpdate [this ^js engine dt]
    (when-not (.-falling-piece this)
      (let [^js piece (Piece. :l 0)]
        (.add engine piece)
        (.setTo (.-pos piece) 100 70)
        (set! (.-falling-piece this) piece)))
    (let [^js piece (.-falling-piece this)
          ^js pos (.-pos piece)
          pressed-key (first (.. engine -input -keyboard (getKeys)))
          step 10]
      (when (= pressed-key "ArrowUp")
        (js/console.log "Rotate")
        (let [game-state (.-game-state this)
              new-dir (rotate true (:dir @game-state))]
        (.set-dir piece new-dir)
        (swap! (.-game-state this) assoc :dir new-dir))))))

