(ns tetris.core.ruleset.pgen-7bag 
  (:require
    [tetris.core.game :as game]))

(defn make-piece-generator []
  {:type :7-bag})

(defmethod game/next-piece :7-bag [gen] gen)
