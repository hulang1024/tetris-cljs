(ns tetris.scenes.gameplay.scene
  (:require-macros [shadow.cljs.modern :refer [defclass]])
  (:require ["excalibur" :as ex]
            [tetris.core.game :as game]
            [tetris.core.input :as input]
            [tetris.scenes.gameplay.board :refer [Board]]))

(defclass GameplayScene (extends ex/Scene)
  (field input-state)
  (field state)
  (field board)

  (constructor [this]
    (super))

  Object
  (onInitialize [this ^js engine]
    (set! (.-input-state this) (input/initial-state))
    (let [random (ex/Random. 777)
          rand-range (fn [min max] (ex/randomIntInRange min max random))]
      (set! (.-state this) (game/initial-state rand-range)))
    (set! (.-board this) (Board.))
    (.add this (.-board this))
    (.toggleDebug engine))
  
  (onPostUpdate [this ^js engine delta-ms]
    (let [pressed-keys (js->clj (.. engine -input -keyboard (getKeys)))
          input-state (input/handle-keyboard (.-input-state this) pressed-keys)
          state (game/tick (.-state this) input-state delta-ms)]
      (.render-game-state ^js (.-board this) state)
      (set! (.-state this) state)
      (set! (.-input-state this) input-state))))

