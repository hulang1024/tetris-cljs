(ns tetris.core.util 
  (:require
    [clojure.math :as math]))

(def ^:const frame-ms 16.67)

(defn ms->frames [ms]
  (math/round (/ ms frame-ms)))

(defn frames->ms [frames]
  (math/round (* frames frame-ms)))

