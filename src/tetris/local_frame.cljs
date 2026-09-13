(ns tetris.local-frame 
  (:require
    [malli.util :as mu]
    [tetris.core.game :as game]
    [tetris.input :as input]))

(def State
  (mu/merge
    [:map
     [:fall-timer :float]
     [:lock-timer :float]]
    (mu/select-keys game/State [:settings :level :phase :status])))

(defn initial-state []
  {:fall-timer 0
   :lock-timer 0})

(defn- start-lock-timer [state delta-ms]
  (if (not= (:phase state) :hard-drop)
    (let [t (+ (:lock-timer state) delta-ms)]
      (if (>= t (get-in state [:settings :lock-delay]))
        (-> (game/handle-command state :lock)
            (assoc :lock-timer 0))
        (assoc state :lock-timer t)))
    (game/handle-command state :lock)))

(defn- apply-gravity [state delta-ms]
  (let [t (+ (:fall-timer state)
             (if (= (:status state) :playing) delta-ms 0))]
    (if (>= t (game/calc-fall-speed (:level state)))
      (if (game/can-down? state)
        (-> state
            (assoc :fall-timer 0)
            (game/handle-command :move-down))
        (start-lock-timer state delta-ms))
      (assoc state :fall-timer t))))

(defn handle-ok [state]
  (update state
          :status #(case %
                     :playing :paused
                     :paused :playing
                     state)))

(defn step
  {:malli/schema [:=> [:cat State input/InputState :float] game/State]}
  [state input delta-ms]
  (let [{:keys [pressed-buttons just-pressed-buttons]} input]
    (-> (cond
          (contains? just-pressed-buttons :soft-drop)  (game/handle-command state :move-down)
          (contains? just-pressed-buttons :move-left)  (game/handle-command state :move-left)
          (contains? just-pressed-buttons :move-right) (game/handle-command state :move-right)
          (contains? just-pressed-buttons :hard-drop)  (game/handle-command state :hard-drop)
          (contains? just-pressed-buttons :rotate-cw)  (game/handle-command state :rotate-cw)
          (contains? just-pressed-buttons :rotate-ccw) (game/handle-command state :rotate-ccw)
          (contains? just-pressed-buttons :ok) (handle-ok state)
          :else state)
        (apply-gravity delta-ms))))
