(ns tetris.core.ruleset.modern 
  (:require
    [clojure.math :as math]
    [tetris.core.ruleset :refer [fall-speed line-clear-delay lock-delay
                                 soft-drop-speed]]
    [tetris.core.ruleset.pgen-7bag :as pgen-7bag]
    [tetris.core.ruleset.scoring-nes :as scoring-nes]
    [tetris.core.ruleset.speedlv-nes :as speedlv-nes]))

(defn make-modern-ruleset [seed speed-level]
  {:ruleset :modern
   :rotation-system :srs
   :piece-generator (pgen-7bag/make seed)
   :scoring (scoring-nes/make)
   :speed-level-system (speedlv-nes/make)
   :preview-count 5
   :ghost-enabled? true
   :initial-hold-enabled? true
   :initial-rotation-enabled? true
   :hold-allowed? true
   :hard-drop-allowed? true
   :rotate-180-allowed? true
   :das-cancel-on-direction-change? true
   :das-cancel-on-lock? true
   :lock-reset-max-times 15
   :speed-level (max 1 speed-level)
   :das 10
   :arr 2
   :dcd 1
   :sdf 24})

(defmethod fall-speed :modern [state]
  (let [level (dec (:speed-level state))
        seconds (math/pow (- 0.8 (* level 0.007)) level)
        frames (* 60 seconds)]
    (/ 1 frames)))

(defmethod soft-drop-speed :modern [state]
  (* (fall-speed state) (get-in state [:options :sdf])))

(defmethod line-clear-delay :modern [_] 0)

(defmethod lock-delay :modern [_] 30)
