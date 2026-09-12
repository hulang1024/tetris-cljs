(ns tetris.core.render 
  (:require ["excalibur" :as ex]
            [tetris.core.board :refer [board-cols board-rows]]))

;; NES画布尺寸（逻辑像素）
(def ^:const game-width 256)
(def ^:const game-height 224)

(def ^:const cell-size 8)

(def ^:const board-width (* board-cols cell-size))
(def ^:const board-height (* board-rows cell-size))

(defn cell->pos [row col]
  (ex/vec (* col cell-size)
          (* row cell-size)))

