(ns tetris.core.ruleset.pgen-seq
  (:require
    [tetris.core.piece :as p]
    [tetris.core.ruleset :refer [next-piece]]))

(defn make-piece-generator []
  {:type :seq
   :seq 0})

(defmethod next-piece :seq [gen]
  (let [seq (inc (:seq gen))]
    [(p/piece-kinds (mod seq 7)) (assoc gen :seq seq)]))
