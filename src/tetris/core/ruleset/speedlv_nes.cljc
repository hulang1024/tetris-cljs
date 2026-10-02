(ns tetris.core.ruleset.speedlv-nes 
  (:require
    [tetris.core.speedlv :refer [update-level]]))

(defn make [] {:type :nes})

(defmethod update-level :nes [state game-state]
  (let [curr-level (:speed-level game-state)
        curr-lines (:lines-cleared game-state)
        next-level-lines (* (inc curr-level) 10)]
    [(if (>= curr-lines next-level-lines)
       (inc curr-level)
       curr-level)
     state]))

