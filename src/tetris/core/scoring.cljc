(ns tetris.core.scoring)

(def ScoringSystem
  [:map [:type :keyword]])

;; [:=> [:cat [ScoringSystem game/State ScoringAction]] [:int ScoringSystem]]
(defmulti action-score (fn [state _game-state _action] (:type state)))
