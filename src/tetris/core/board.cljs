(ns tetris.core.board 
  (:require [cljs.core :as c]
            [tetris.core.piece :as p]))

(def Board [:vector [:vector [:maybe p/Kind]]])

(def ^:const board-rows 20)
(def ^:const board-cols 10)

(defn empty-board []
  (vec (repeat board-rows
               (vec (repeat board-cols nil)))))
