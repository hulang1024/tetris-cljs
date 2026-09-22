(ns tetris.core.board 
  (:require [tetris.core.piece :refer [Piece PieceKind]]))

(def Board [:vector [:vector [:maybe PieceKind]]])

(def ^:const skyline-rows 2)
(def ^:const board-rows (+ 20 skyline-rows))
(def ^:const board-cols 10)

(def empty-line (vec (repeat board-cols nil)))
(def empty-board (vec (repeat board-rows empty-line)))

(defn filled? [board r c]
  (get-in board [r c]))

(defn valid-position? [row col]
  (and (<= 0 row (dec board-rows))
       (<= 0 col (dec board-cols))))

(defn collide?
  {:malli/schema [:=> [:cat Board Piece :int :int] :boolean]}
  [board piece row col]
  (boolean
    (some (fn [[cr cc]]
            (let [r (+ row cr)
                  c (+ col cc)]
              (or (not (valid-position? r c))
                  (filled? board r c))))
          (:cells piece))))

(defn lock-piece
  {:malli/schema [:=> [:cat Board Piece :int :int] Board]}
  [board piece row col]
  (vec (map-indexed
         (fn [r xs]
           (if (<= row r (dec (+ row (:rows piece))))
             (vec (map-indexed
                    (fn [c v]
                      (or (and (<= col c (dec (+ col (:cols piece))))
                               (get-in (:shape piece) [(- r row) (- c col)])
                               (:kind piece))
                          v))
                    xs))
             xs))
         board)))

(defn find-full-row-indices
  {:malli/schema [:=> [:cat Board] [:set :int]]}
  [board]
  (set (for [[r row] (map-indexed vector board)
             :when (every? some? row)]
         r)))

(defn clear-rows
  {:malli/schema [:=> [:cat Board [:set :int]] Board]}
  [board row-indices]
  (vec (map-indexed
         (fn [r xs]
           (if (contains? row-indices r) empty-line xs))
         board)))

(defn lock-out?
  {:malli/schema [:=> [:cat :int] :boolean]}
  [row] (<= row 0))
