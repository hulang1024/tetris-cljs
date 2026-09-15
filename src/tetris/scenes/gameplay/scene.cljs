(ns tetris.scenes.gameplay.scene
  (:require-macros [shadow.cljs.modern :refer [defclass]])
  (:require ["excalibur" :as ex]
            [tetris.scenes.gameplay.game-view :refer [GameView]]
            [tetris.engine :as engine]))

(defclass GameplayScene (extends ex/Scene)
  (constructor [^js this]
    (super))

  Object
  (onInitialize [^js this ^js engine]
    (.add this (GameView.))))
