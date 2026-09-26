(ns tetris.core.ruleset.classic
  (:require
    [tetris.core.ruleset :refer [fall-interval line-clear-delay lock-delay
                                 soft-drop-interval]]
    [tetris.core.ruleset.pgen-seq :as pgen-seq]
    [tetris.core.ruleset.rotation-nrs :as nrs]))

(def classic-ruleset
  {:ruleset :classic
   :rotation-system {:type :nrs
                     :piece-shapes nrs/nes-piece-shapes}
   :piece-generator (pgen-seq/make-piece-generator)
   :preview-count 1
   :pause-allowed? true
   :ghost-enabled? false
   :hold-allowed? false
   :hard-drop-allowed? false
   :rotate-180-allowed? false
   :das-cancel-on-direction-change? false
   :das-cancel-on-lock? false
   :das 16
   :arr 6
   :dcd 16
   :sdf 1})

(def ^:private level-fall-interval-table
  [48 43 38 33 28 23 18 13 8 6
   5 5 5 4 4 4 3 3 3 2
   2 2 2 2 2 2 2 2 2 1])

(defmethod fall-interval :classic [state]
  (get level-fall-interval-table (:level state) 1))

(defmethod soft-drop-interval :classic [state] (/ 2 (:sdf state)))

(defmethod line-clear-delay :classic [_] 4)

(defmethod lock-delay :classic [_] 10)
