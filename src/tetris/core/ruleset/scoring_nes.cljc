(ns tetris.core.ruleset.scoring-nes 
  (:require
    [tetris.core.scoring :refer [action-score]]))

(def lines-score-table [40 100 300 1200])

(defn make [] {:type :nes})

(defmethod action-score :nes [state game-state action]
  (let [score
        (case (:type action)
          :clear
          (* (inc (:speed-level game-state))
             (get lines-score-table (dec (:lines action)) 0))
          0)]
    [score state]))
