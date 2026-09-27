(ns tetris.core.ruleset.modern 
  (:require
    [tetris.core.ruleset :refer [fall-interval line-clear-delay lock-delay
                                 soft-drop-interval]]
    [tetris.core.ruleset.pgen-7bag :as pgen-7bag]
    [tetris.core.ruleset.rotation-srs :as srs]))

(def modern-ruleset
  {:ruleset :modern
   :rotation-system {:type :srs
                     :piece-shapes srs/piece-shapes}
   :piece-generator (pgen-7bag/make-piece-generator)
   :preview-count 4
   :ghost-enabled? true
   :hold-allowed? true
   :hard-drop-allowed? true
   :rotate-180-allowed? true
   :das-cancel-on-direction-change? true
   :das-cancel-on-lock? true
   :das 10
   :arr 2
   :dcd 1
   :sdf 6})

(defmethod fall-interval :modern [_state] 48)

(defmethod soft-drop-interval :modern [state] (/ (fall-interval state) (:sdf state)))

(defmethod line-clear-delay :modern [_] 17)

(defmethod lock-delay :modern [_] 30)
