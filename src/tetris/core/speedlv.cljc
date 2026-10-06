(ns tetris.core.speedlv 
  (:require
    [clojure.math :as math]))

(def SpeedLevelSystem
  [:map [:type :keyword]])

;; [:=> [:cat SpeedSystem game/State] [:int SpeedSystem]]
(defmulti update-level (fn [state _game-state] (:type state)))

(def ^:const frame-ms 16.67)

(defn ms->frames [ms]
  (math/round (/ ms frame-ms)))

(defn frames->ms [frames]
  (math/round (* frames frame-ms)))

