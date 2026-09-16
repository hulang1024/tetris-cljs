(ns tetris.core.local-frame 
  (:require
    [tetris.core.game :as game]
    [tetris.core.rules :as rules]
    [tetris.input.base :as input]))

(def State
  [:map
   [:das :int]
   [:arr :int]
   [:dcd :int]
   [:sdf :int]
   [:lock-delay :int]
   [:fall-timer number?]
   [:lock-timer number?]
   [:das-timer  number?]
   [:arr-timer  number?]
   [:dcd-timer  number?]
   [:sdf-timer  number?]
   [:das-button [:maybe input/Button]]
   [:level      :int]
   [:status     game/Status]])

(defn- on-soft-drop-pressed [state dt]
  (if (>= (+ (:sdf-timer state) dt)
          (rules/soft-drop-speed (:level state) (:sdf state)))
    (-> (game/handle-command state :move-down)
        (assoc :sdf-timer 0))
    (update state :sdf-timer + dt)))

(defn- handle-soft-drop-released [state input]
  (if-not (contains? (:pressed-buttons input) :soft-drop)
    (assoc state
           :sdf-timer
           (rules/soft-drop-speed (:level state) (:sdf state)))
    state))

(defn- das-not-charged? [state]
  (nil? (:das-button state)))

(defn- das-charging? [state dt]
  (and (:das-button state)
       (< (+ (:das-timer state) dt) (:das state))))

(defn- das-charged? [state dt]
  (and (:das-button state)
       (>= (+ (:das-timer state) dt) (:das state))))

(defn- on-shift-pressed [state dt command]
  (if (< (:lock-timer state) (:lock-delay state))
    (cond 
      (das-not-charged? state) (-> (game/handle-command state command)
                                   (assoc :das-button command))
      (das-charging? state dt) (-> (update state :das-timer + dt)
                                   (assoc :arr-timer (:arr state)))
      (das-charged? state dt) (if (>= (+ dt (:arr-timer state)) (:arr state))
                                (-> (game/handle-command state command)
                                    (assoc :arr-timer 0))
                                (update state :arr-timer + dt)))
    state))

(defn- handle-shift-released [state input]
  (if-not (contains? (:pressed-buttons input) (:das-button state))
    (assoc state 
           :das-button nil
           :das-timer 0
           :arr-timer 0)
    state))

(defn- start-lock-timer [state dt]
  (let [t (+ (:lock-timer state) dt)]
    (if (>= t (:lock-delay state))
      (-> (game/handle-command state :lock)
          (assoc :lock-timer 0
                 :fall-timer (rules/fall-speed (:level state))))
      (assoc state :lock-timer t))))

(defn- do-gravity [state dt]
  (let [t (+ (:fall-timer state)
             (if (= (:status state) :playing) dt 0))]
    (if (>= t (rules/fall-speed (:level state)))
      (if (game/can-move-down? state)
        (-> state
            (assoc :fall-timer 0)
            (game/handle-command :fall))
        (start-lock-timer state dt))
      (assoc state :fall-timer t))))

(defn- handle-ok [state]
  (update state
          :status #(case %
                     :playing :paused
                     :paused :playing
                     state)))

(defn initial-state [overrides]
  (merge {:das 167
          :arr 32
          :dcd 17
          :sdf 6
          :lock-delay 500
          :fall-timer 0
          :lock-timer 0
          :das-timer 0
          :arr-timer 0
          :dcd-timer 0
          :sdf-timer 0
          :das-button nil}
         overrides))

(defn step
  {:malli/schema [:=> [:cat State input/InputState :float] game/State]}
  [state input delta-ms]
  (let [{:keys [pressed-buttons just-pressed-buttons]} input
        last-pressed-button (last pressed-buttons) ; 最晚按下的按键
        state (cond
                (= last-pressed-button :move-left)  (on-shift-pressed state delta-ms :move-left)
                (= last-pressed-button :move-right) (on-shift-pressed state delta-ms :move-right)
                (= last-pressed-button :soft-drop)  (on-soft-drop-pressed state delta-ms)
                :else state)]
    (-> (cond
          (contains? just-pressed-buttons :hard-drop)  (game/handle-command state :hard-drop)
          (contains? just-pressed-buttons :rotate-cw)  (game/handle-command state :rotate-cw)
          (contains? just-pressed-buttons :rotate-ccw) (game/handle-command state :rotate-ccw)
          (contains? just-pressed-buttons :hold)       (game/handle-command state :hold)
          (contains? just-pressed-buttons :ok) (handle-ok state)
          :else state)
        (handle-shift-released input)
        (handle-soft-drop-released input)
        (do-gravity delta-ms))))
