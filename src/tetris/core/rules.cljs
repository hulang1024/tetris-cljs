(ns tetris.core.rules 
  (:require
    [cljs.math :as math]))

(def ^:const frame-ms 16.67)

(defn ms->frames [ms]
  (math/round (/ ms frame-ms)))

(defn frames->ms [frames]
  (math/round (* frames frame-ms)))

(defn fall-interval
  {:malli/schema [:=> [:cat :int] number?]}
  [level]
  (ms->frames (* (math/pow (- 0.8 (* (dec level) 0.007)) (dec level)) 1000)))

(defn soft-drop-interval
  {:malli/schema [:=> [:cat :int number?] number?]}
  [level sdf]
  (/ (fall-interval level) sdf))

(defn line-clear-delay []
  30)


(def classic
  {:das 16
   :arr 6
   :dcd 16
   :sdf 2
   :lock-delay 30
   :line-clear-delay 17})

(def modern 
  {:das 10
   :arr 2
   :dcd 1
   :sdf 6
   :lock-delay 30
   :line-clear-delay 17})
