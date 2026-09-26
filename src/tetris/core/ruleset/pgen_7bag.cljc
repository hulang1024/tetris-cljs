(ns tetris.core.ruleset.pgen-7bag 
  (:require
    [tetris.core.ruleset :refer [next-piece]]))

(defn make-piece-generator []
  {:type :7-bag})

(defmethod next-piece :7-bag [gen] gen)
