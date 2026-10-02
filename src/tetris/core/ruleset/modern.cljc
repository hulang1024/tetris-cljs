(ns tetris.core.ruleset.modern 
  (:require
    [clojure.math :as math]
    [tetris.core.ruleset :refer [fall-interval line-clear-delay lock-delay
                                 soft-drop-interval]]
    [tetris.core.ruleset.pgen-7bag :as pgen-7bag]
    [tetris.core.ruleset.scoring-nes :as scoring-nes]
    [tetris.core.ruleset.speedlv-nes :as speedlv-nes]
    [tetris.core.speedlv :refer [ms->frames]]))

(def modern-ruleset
  {:ruleset :modern
   :rotation-system :srs
   :piece-generator (pgen-7bag/make)
   :scoring (scoring-nes/make)
   :speed-level-system (speedlv-nes/make)
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
   :sdf 24})

(defmethod fall-interval :modern [state]
  (let [level (dec (:speed-level state))]
    (ms->frames
      (* 1000 (math/pow (- 0.8 (* level 0.007)) level)))))

(defmethod soft-drop-interval :modern [state] (/ (fall-interval state) (:sdf state)))

(defmethod line-clear-delay :modern [_] 0)

(defmethod lock-delay :modern [_] 30)
