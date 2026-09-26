(ns tetris.core.ruleset.modern 
  (:require
    [tetris.core.ruleset :refer [line-clear-delay lock-delay]]
    [tetris.core.ruleset.rotation-srs :as srs]
    [tetris.core.ruleset.pgen-7bag :as pgen-7bag]))

(def modern-ruleset
  {:ruleset :modern
   :rotation-system {:type :srs
                     :piece-shapes srs/piece-shapes}
   :piece-generator (pgen-7bag/make-piece-generator)
   :preview-count 4
   :pause-allowed? true
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

(defmethod line-clear-delay :classic [_] 17)

(defmethod lock-delay :classic [_] 30)

