(ns tetris.core.rules 
  (:require
    [cljs.math :as math]))

(defn- snap-to-frame [x]
  (let [f 16.66]
    (* (math/floor (/ x f)) f)))

(defn fall-speed
  {:malli/schema [:=> [:cat :int] number?]}
  [level]
  (snap-to-frame (* (math/pow (- 0.8 (* (dec level) 0.007))
                              (dec level))
                    1000)))

(defn soft-drop-speed
  {:malli/schema [:=> [:cat :int number?] number?]}
  [level sdf]
  (snap-to-frame (/ (fall-speed level) sdf)))

