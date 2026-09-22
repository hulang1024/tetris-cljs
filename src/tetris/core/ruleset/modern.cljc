(ns tetris.core.ruleset.modern 
  (:require
    [tetris.core.rs-srs :as srs]
    [tetris.core.ruleset :refer [line-clear-delay lock-delay]]
    [tetris.core.ruleset.pgen-7bag :as pgen-7bag]))

(def modern-ruleset
  {:ruleset :modern
   :rotation-system {:type :srs
                     :piece-shapes srs/piece-shapes}
   :piece-generator (pgen-7bag/make-piece-generator)
   :das 10
   :arr 2
   :dcd 1
   :sdf 6})

(defmethod line-clear-delay :classic [_] 17)

(defmethod lock-delay :classic [_] 30)

