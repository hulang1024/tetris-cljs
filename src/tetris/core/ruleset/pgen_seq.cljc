(ns tetris.core.ruleset.pgen-seq
  (:require
    [tetris.core.piece :as p]
    [tetris.core.ruleset :refer [next-piece]]))

(defn make []
  {:type :seq
   :seq 0})

(defmethod next-piece :seq [state]
  (let [seq (inc (:seq state))]
    [(p/piece-kinds (mod seq 7)) (assoc state :seq seq)]))
