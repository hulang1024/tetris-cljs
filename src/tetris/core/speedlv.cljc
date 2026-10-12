(ns tetris.core.speedlv)

(def SpeedLevelSystem
  [:map [:type :keyword]])

;; [:=> [:cat SpeedSystem game/State] [:int SpeedSystem]]
(defmulti update-level (fn [state _game-state] (:type state)))

(def ^:const frame-ms 16.67)
