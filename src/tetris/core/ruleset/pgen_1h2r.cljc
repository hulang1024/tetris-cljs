(ns tetris.core.ruleset.pgen-1h2r 
  (:require
    [tetris.core.ruleset :refer [next-piece]]))

(defn make-piece-generator [seed]
  {:type :1h2r})

(defmethod next-piece :1h2r [gen] gen)
