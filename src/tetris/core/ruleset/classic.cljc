(ns tetris.core.ruleset.classic
  (:require
    [clojure.math :as math]
    [tetris.core.ruleset :refer [fall-interval line-clear-delay lock-delay
                                 soft-drop-interval]]
    [tetris.core.ruleset.pgen-seq :as pgen-seq]
    [tetris.core.ruleset.rotation-nrs :as nrs]
    [tetris.core.util :refer [ms->frames]]))

(def classic-ruleset
  {:ruleset :classic
   :rotation-system {:type :nrs
                     :piece-shapes nrs/nes-piece-shapes}
   :piece-generator (pgen-seq/make-piece-generator)
   :preview-count 1
   :ghost-enabled? false
   :hold-enabled? false
   :hard-drop-enabled? false
   :rotate-180-enabled? false
   :das 16
   :arr 6
   :dcd 16
   :sdf 2})

(defmethod fall-interval :classic [state]
  (let [{:keys [level]} state]
    (ms->frames (* (math/pow (- 0.8 (* (dec level) 0.007)) (dec level)) 1000))))

(defmethod soft-drop-interval :classic [state]
  (let [{:keys [sdf]} state]
    (/ (fall-interval state) sdf)))

(defmethod line-clear-delay :classic [_] 4)

(defmethod lock-delay :classic [_] 10)
