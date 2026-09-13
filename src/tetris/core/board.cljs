(ns tetris.core.board 
  (:require [cljs.core :as c]
            [tetris.core.piece :as p]))

(def Board [:vector [:vector [:maybe p/Kind]]])

(def ^:const board-rows 20)
(def ^:const board-cols 10)

(defn empty-board []
  (vec (repeat board-rows
               (vec (repeat board-cols nil)))))

(defn empty-cell? [board row col]
  (nil? ((board row) col)))

(defn collide? [board row col piece]
  (some false?
        (for [[r coll] (map-indexed vector (:shape piece))
              [c cell] (map-indexed vector coll)
              :when (some? cell)
              :let [br (+ row r)
                    bc (+ col c)]]
          (and (<= 0 br (dec board-rows))
               (<= 0 bc (dec board-cols))
               (empty-cell? board br bc)))))

(defn lock-piece [board piece row col]
  (let [shape (:shape piece)]
    (->> (for [[r coll] (map-indexed vector board)
               [c cell] (map-indexed vector coll)]
           (if (and (< (dec row) r (+ row 4))
                    (< (dec col) c (+ col 4)))
             (let [v ((shape (- r row)) (- c col))]
               (if cell cell v))
             cell))
         (partition board-cols)
         (mapv vec))))

(defn find-full-rows [board]
  (for [[r coll] (map-indexed vector board)
        :when (every? some? coll)]
    r))

(defn clear-lines [board]
  (let [clear-rows (set (find-full-rows board))]
    (if (seq clear-rows)
      (let [rest-rows
            (mapv vec 
                  (for [[r coll] (map-indexed vector board)
                        :when (not (contains? clear-rows r))]
                    coll))
            empty-lns (vec (repeat board-cols nil))]
        (into (vec (repeat (count clear-rows) empty-lns)) rest-rows))
      board)))

