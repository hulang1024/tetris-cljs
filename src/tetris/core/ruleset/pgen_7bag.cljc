(ns tetris.core.ruleset.pgen-7bag 
  (:require
    [tetris.core.piece :as p]
    [tetris.core.ruleset :refer [next-piece]]))

(defn make []
  {:type :7-bag :seq 0})

(defmethod next-piece :7-bag [state]
  (let [seq (inc (:seq state))]
    [(p/piece-kinds (mod seq 7)) (assoc state :seq seq)]))
