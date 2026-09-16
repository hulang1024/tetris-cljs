(ns tetris.render 
  (:require ["excalibur" :as ex]
            [tetris.core.board :as b]))

;; NES画布尺寸（逻辑像素）
(def ^:const game-width 256)
(def ^:const game-height 224)

(def ^:const cell-size 8)

(def ^:const board-width (* b/board-cols cell-size))
(def ^:const board-height (* b/board-rows cell-size))

(defn cell-pos [cell-size x]
  (* x cell-size))

(defn cell->pos [cell-size row col]
  (ex/vec (* col cell-size)
          (* row cell-size)))

(defn pos->cell [pos cell-size]
  [(/ (.-y pos) cell-size)
   (/ (.-x pos) cell-size)])

(defn line-clear-drop-moves
  "计算清行后剩余行的移动目标位置,
  返回一个向量，每个元素为[源行索引 目标位置索引] 
  参数为清行之前的board状态，和要清的行索引集合"
  [board full-rows]
  (let [xs (->> (map-indexed vector board)
                (filter #(not-every? nil? (second %)))
                (filter #(not (contains? full-rows (first %)))))]
    (map #(vector (first %1) %2)
         xs
         (range (- b/board-rows (count xs)) b/board-rows))))
