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
   [:line-clear-delay :int]
   [:fall-timer number?]
   [:lock-timer number?]
   [:das-timer  number?]
   [:arr-timer  number?]
   [:dcd-timer  number?]
   [:sdf-timer  number?]
   [:line-clear-timer number?]
   [:line-clearing? :boolean]
   [:das-button [:maybe input/Button]]
   [:level      :int]
   [:status     game/Status]])

(defn- on-shift-pressed [state dt command command-handler]
  (if (< (:lock-timer state) (:lock-delay state))
    (let [{:keys [das arr]} state
          das-timer (+ (:das-timer state) dt)]
      (cond 
        ;; DAS未充能
        (nil? (:das-button state))
        (-> (command-handler state command)
            (assoc :das-button command))
        ;; DAS充能中
        (< das-timer das)
        (assoc state
               :das-timer das-timer
               ;; 充能完立即进入ARR
               :arr-timer arr)
        ;; DAS充能完
        :else
        (let [t (+ dt (:arr-timer state))]
          (if (>= t arr)
            (-> (command-handler state command)
                (assoc :arr-timer 0))
            (assoc state :arr-timer t)))))
    state))

(defn- handle-shift-released [state input]
  (if-not (contains? (:pressed-buttons input) (:das-button state))
    (assoc state 
           :das-button nil
           :das-timer 0
           :arr-timer 0)
    state))

(defn- on-soft-drop-pressed [state dt command-handler]
  (if (>= (+ (:sdf-timer state) dt)
          (rules/soft-drop-interval (:level state) (:sdf state)))
    (-> (command-handler state :move-down)
        (assoc :fall-timer 0
               :sdf-timer 0))
    (update state :sdf-timer + dt)))

(defn- handle-soft-drop-released [state input]
  (if-not (contains? (:pressed-buttons input) :soft-drop)
    (let [sdf-timer (:sdf-timer state)
          sds (rules/soft-drop-interval (:level state) (:sdf state))]
      (if (< sdf-timer sds)
        (assoc state :sdf-timer sds) ; 为下次触发立即进入软降
        state))
    state))

(defn- start-lock-timer [state dt command-handler]
  (let [t (+ (:lock-timer state) dt)]
    (if (>= t (:lock-delay state))
      (-> (command-handler state :lock)
          (assoc :lock-timer 0))
      (assoc state :lock-timer t))))

(defn- fall [state input dt command-handler]
  (if (and (not (:line-clearing? state))
           (not (contains? (:pressed-buttons input) :soft-drop)))
    (let [t (+ (:fall-timer state) dt)]
      (if (>= t (rules/fall-interval (:level state)))
        (if (game/can-move-down? state)
          (-> (command-handler state :fall)
              (assoc :fall-timer 0))
          state)
        (assoc state :fall-timer t)))
    state))

(defn- try-lock [state dt command-handler]
  (if (game/can-move-down? state)
    state
    (start-lock-timer state dt command-handler)))

(defn- handle-line-clear-event [state dt command-handler]
  (let [state (if (game/find-event :line-clear (:events state))
                (assoc state :line-clearing? true)
                state)]
    (if (:line-clearing? state)
      (let [t (+ dt (:line-clear-timer state))]
        (if (>= t (:line-clear-delay state))
          (-> (command-handler state :spawn)
              (assoc :line-clearing? false
                     :line-clear-timer 0))
          (assoc state :line-clear-timer t)))
      state)))

(defn- handle-lock-event [state command-handler]
  (if (and (game/find-event :lock (:events state))
           (not (:line-clearing? state)))
    (-> (command-handler state :spawn)
        (assoc :fall-timer 0))
    state))

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
          :line-clear-delay 500
          :fall-timer 0
          :lock-timer 0
          :das-timer 0
          :arr-timer 0
          :dcd-timer 0
          :sdf-timer 0
          :line-clear-timer 0
          :line-clearing? false
          :das-button nil}
         overrides))

(defn step
  {:malli/schema [:=> [:cat State input/InputState :float game/CommandHandler] game/State]}
  [state input delta-ms command-handler]
  (cond
    (contains? (:just-pressed-buttons input) :ok) (handle-ok state)
    (= (:status state) :playing)
    (let [{:keys [pressed-buttons just-pressed-buttons]} input
          last-pressed-button (last pressed-buttons) ; 最晚按下的按键
          state (cond
                  (= last-pressed-button :move-left)  (on-shift-pressed state delta-ms :move-left command-handler)
                  (= last-pressed-button :move-right) (on-shift-pressed state delta-ms :move-right command-handler)
                  (= last-pressed-button :soft-drop)  (on-soft-drop-pressed state delta-ms command-handler)
                  :else state)]
      (-> (cond
            (contains? just-pressed-buttons :hard-drop)  (command-handler state :hard-drop)
            (contains? just-pressed-buttons :rotate-cw)  (command-handler state :rotate-cw)
            (contains? just-pressed-buttons :rotate-ccw) (command-handler state :rotate-ccw)
            (contains? just-pressed-buttons :hold)       (command-handler state :hold)
            :else state)
          (fall input delta-ms command-handler)
          (try-lock delta-ms command-handler)
          (handle-shift-released input)
          (handle-soft-drop-released input)
          (handle-line-clear-event delta-ms command-handler)
          (handle-lock-event command-handler)))
    :else state))
