(ns tetris.core.ruleset.pgen-7bag 
  (:require
    [tetris.core.piece :as p]
    [tetris.core.ruleset :refer [next-piece]]))

(defn make-piece-generator []
  {:type :7-bag :seq 0})

(defmethod next-piece :7-bag [gen]
  (let [seq (inc (:seq gen))]
    [(p/piece-kinds (mod seq 7)) (assoc gen :seq seq)]))
