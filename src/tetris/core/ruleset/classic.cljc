(ns tetris.core.ruleset.classic
  (:require
    [tetris.core.ruleset :refer [fall-interval line-clear-delay lock-delay
                                 soft-drop-interval]]
    [tetris.core.ruleset.pgen-seq :as pgen-seq]
    [tetris.core.ruleset.scoring-nes :as scoring-nes]
    [tetris.core.ruleset.speedlv-nes :as speedlv-nes]))

(def classic-ruleset
  {:ruleset :classic
   :rotation-system :nrs-nes
   :piece-generator (pgen-seq/make)
   :scoring (scoring-nes/make)
   :speed-level-system (speedlv-nes/make)
   :preview-count 1
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
  (get level-fall-interval-table (:speed-level state) 1))

(defmethod soft-drop-interval :classic [state]
  (/ 2 (get-in state [:options :sdf])))

(defmethod line-clear-delay :classic [_] 4)

(defmethod lock-delay :classic [_] 10)
