(ns tetris.core.board 
  (:require [cljs.core :as c]
            [tetris.core.piece :refer [Piece Kind]]))

(def Board [:vector [:vector [:maybe Kind]]])

(def ^:const board-rows 20)
(def ^:const board-cols 10)
(def ^:const hidden-rows 4)

(defn empty-board
  {:malli/schema [:=> [:cat] Board]}
  [] (vec (repeat board-rows
                  (vec (repeat board-cols nil)))))

(defn collide?
  {:malli/schema [:=> [:cat Board Piece :int :int] :boolean]}
  [board piece row col]
  (boolean
    (some false?
          (for [[r coll] (map-indexed vector (:shape piece))
                [c cell] (map-indexed vector coll)
                :when (some? cell)
                :let [br (+ row r)
                      bc (+ col c)]]
            (and (<= (- hidden-rows) br (dec board-rows))
                 (<= 0 bc (dec board-cols))
                 (nil? (get-in board [br bc])))))))

(defn lock-piece
  {:malli/schema [:=> [:cat Board Piece :int :int] Board]}
  [board piece row col]
  (->> (for [[r coll] (map-indexed vector board)
             [c cell] (map-indexed vector coll)]
         (if (and (< (dec row) r (+ row (:size piece)))
                  (< (dec col) c (+ col (:size piece))))
           (let [v (((:shape piece) (- r row)) (- c col))]
             (if cell cell v))
           cell))
       (partition board-cols)
       (mapv vec)))

(defn find-full-row-indices
  {:malli/schema [:=> [:cat Board] [:set :int]]}
  [board]
  (set (for [[r coll] (map-indexed vector board)
             :when (every? some? coll)]
         r)))

(defn clear-rows
  {:malli/schema [:=> [:cat Board [:set :int]] Board]}
  [board row-indices]
  (let [rest-rows
        (mapv vec (for [[r coll] (map-indexed vector board)
                        :when (not (contains? row-indices r))]
                    coll))
        empty-rows (vec (repeat board-cols nil))]
    (into (vec (repeat (count row-indices) empty-rows)) rest-rows)))

(defn lock-out?
  {:malli/schema [:=> [:cat Board Piece :int :int] :boolean]}
  [board piece row col]
  (< row 0))
