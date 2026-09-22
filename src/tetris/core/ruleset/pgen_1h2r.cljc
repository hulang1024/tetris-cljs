(ns tetris.core.ruleset.pgen-1h2r 
  (:require
    [tetris.core.game :as game]))

(defn make-piece-generator [seed]
  {:type :1h2r})

(defmethod game/next-piece :1h2r [gen] gen)
