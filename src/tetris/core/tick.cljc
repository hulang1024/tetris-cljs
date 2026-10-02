(ns tetris.core.tick 
  (:require
    [tetris.core.game :as game]
    [tetris.core.input :as input]
    [tetris.core.ruleset :as ruleset]))

(def State
  [:map
   [:ruleset :keyword]
   [:hold-allowed? :boolean]
   [:hard-drop-allowed? :boolean]
   [:rotate-180-allowed? :boolean]
   [:das-cancel-on-direction-change? :boolean]
   [:das-cancel-on-lock? :boolean]
   [:lock-reset-max-times :int]
   [:das [:int {:min 1}]]
   [:arr [:int {:min 1}]]
   [:dcd [:int {:min 1}]]
   [:sdf [:int {:min 1}]]
   [:frame [:int {:min 0}]]
   [:shift-blocked? :boolean]
   [:down-blocked? :boolean]
   [::fall-timer :int]
   [::lock-timer :int]
   [::das-timer :int]
   [::arr-timer :int]
   [::dcd-timer :int]
   [::sdf-timer :int]
   [::line-clear-timer :int]
   [::lock-reset-count :int]
   [::soft-dropping? :boolean]
   [::line-clearing? :boolean]
   [::das-button [:maybe input/Button]]])

(defn- reset-das [state]
  (assoc state 
         ::das-button nil
         ::das-timer 0
         ::arr-timer 0))

(defn- reset-fall-timer [state]
  (assoc state ::fall-timer 0))

(defn- lock [state command-handler]
  (-> (command-handler state :lock)
      (assoc ::lock-timer 0)))

(defn- reset-lock [state command-handler]
  (let [cnt (inc (::lock-reset-count state))]
    (if (>= cnt (:lock-reset-max-times state))
      (lock state command-handler)
      (assoc state
             ::lock-reset-count cnt
             ::lock-timer 0))))

(defn- locking? [state]
  (:down-blocked? state))

(defn- on-shift-pressed [state command command-handler]
  (if (< (::lock-timer state) (ruleset/lock-delay state))
    (let [{:keys [das-cancel-on-direction-change? das arr]} state
          das-timer (inc (::das-timer state))
          state
          (cond 
            ;; DAS未充能
            (nil? (::das-button state))
            (-> (command-handler state command)
                (assoc ::das-button command
                       ::das-timer 0))
            ;; 切换方向
            (not= command (::das-button state))
            (-> (if das-cancel-on-direction-change?
                  (reset-das state)
                  state)
                (assoc ::arr-timer 0
                       ::das-button command)
                (command-handler command))
            ;; DAS充能中
            (< das-timer das)
            (assoc state ::das-timer das-timer)
            ;; DAS充能完
            (= das-timer das)
            (-> (command-handler state command)
                (assoc ::das-timer das-timer
                       ::arr-timer 0))
            ;; ARR阶段
            :else
            (let [t (inc (::arr-timer state))]
              (if (>= t arr)
                (-> (command-handler state command)
                    (assoc ::arr-timer 0))
                (assoc state ::arr-timer t))))]
      (if (and (locking? state)
               (game/find-event :moved (:events state)))
        (reset-lock state command-handler)
        state))
    state))

(defn- on-soft-drop-pressed [state command-handler]
  (if-not (::soft-dropping? state)
    (-> (command-handler state :move-down)
        (assoc ::soft-dropping? true)
        (reset-fall-timer))
    (let [t (inc (::sdf-timer state))]
      (if (>= t (ruleset/soft-drop-interval state))
        (-> (command-handler state :move-down)
            (reset-fall-timer)
            (assoc ::sdf-timer 0
                   ::soft-dropping? true))
        (assoc state ::sdf-timer t)))))

(defn- handle-buttons-released [state input]
  (let [pressed-buttons (set (:pressed-buttons input))]
    (cond
      (and (::das-button state)
           (not (contains? pressed-buttons (::das-button state))))
      (reset-das state)

      (not (contains? pressed-buttons :soft-drop))
      (assoc state
             ::sdf-timer 0
             ::soft-dropping? false)
      :else state)))

(defn- do-lock-timer [state command-handler]
  (let [t (inc (::lock-timer state))]
    (if (>= t (ruleset/lock-delay state))
      (lock state command-handler)
      (assoc state ::lock-timer t))))

(defn- fall [state command-handler]
  (if (not (:current state))
    state
    (let [t (inc (::fall-timer state))]
      (if (>= t (ruleset/fall-interval state))
        (if (game/can-move-down? state)
          (-> (command-handler state :fall)
              (reset-fall-timer)
              (assoc ::lock-reset-count 0))
          state)
        (assoc state ::fall-timer t)))))

(defn- try-lock [state command-handler]
  (if (or (not (:current state)) (game/can-move-down? state))
    (assoc state ::lock-timer 0)
    (-> (if (and (not (locking? state)) (= (::lock-timer state) 0))
          (game/emit-event state :landed)
          state)
        (do-lock-timer command-handler))))

(defn- handle-rotate [state command command-handler]
  (let [state (command-handler state command)]
    (if (and (locking? state)
             (game/find-event :rotated (:events state)))
      (reset-lock state command-handler)
      state)))

(defn- handle-hard-drop [state command-handler]
  (let [state (command-handler state :hard-drop)]
    (if (game/find-event :hard-dropped (:events state))
      (reset-fall-timer state)
      state)))

(defn- handle-hold [state command-handler]
  (let [state (command-handler state :hold)]
    (if (game/find-event :held (:events state))
      (reset-fall-timer state)
      state)))

(defn- handle-events [state command-handler]
  (let [events (:events state)
        state (case (:dir (game/find-event :moved events))
                :down (assoc state :down-blocked? false)
                :left (assoc state :shift-blocked? false)
                :right (assoc state :shift-blocked? false)
                state)
        state (cond
                (game/find-event :shift-blocked events)
                (assoc state :shift-blocked? true)
                (game/find-event :down-blocked events)
                (assoc state :down-blocked? true)
                (game/find-event :landed events)
                (assoc state :down-blocked? true)
                :else state)]
    (cond
      (game/find-event :game-over events) state

      (game/find-event :line-clearing events)
      (assoc state
             ::line-clearing? true
             ::line-clear-timer 0)

      (::line-clearing? state)
      (let [t (inc (::line-clear-timer state))]
        (if (>= t (ruleset/line-clear-delay state))
          (-> state
              (command-handler :clear-lines)
              (command-handler :spawn)
              (assoc ::line-clearing? false
                     ::line-clear-timer 0))
          (assoc state ::line-clear-timer t)))

      (game/find-event :locked events)
      (-> (if (:das-cancel-on-lock? state)
            (reset-das state)
            state)
          (assoc :shift-blocked? false
                 :down-blocked? false)
          (command-handler :spawn)
          (reset-fall-timer))
      :else state)))

(defn initial-state [overrides]
  (merge
    {:hold-allowed? true
     :hard-drop-allowed? true
     :rotate-180-allowed? true
     :das-cancel-on-direction-change? false
     :das-cancel-on-lock? false
     :lock-reset-max-times 15
     :das 0
     :arr 0
     :dcd 0
     :sdf 1
     :frame 0
     :shift-blocked? false
     :down-blocked? false
     ::fall-timer 0
     ::lock-timer 0
     ::das-timer 0
     ::arr-timer 0
     ::dcd-timer 0
     ::sdf-timer 0
     ::line-clear-timer 0
     ::lock-reset-count 0
     ::soft-dropping? false
     ::das-button nil
     ::line-clearing? false}
    overrides))

(defn step
  {:malli/schema [:=> [:cat State input/InputState game/CommandHandler] game/State]}
  [state input command-handler]
  (let [{:keys [pressed-buttons just-pressed-buttons]} input
        {:keys [hard-drop-allowed? hold-allowed? rotate-180-allowed?]} state
        pressed-buttons (filterv
                          (fn [button]
                            (case button
                              :rotate-180 (:rotate-180-allowed? state)
                              :hard-drop (:hard-drop-allowed? state)
                              :hold (:hold-allowed? state)
                              true))
                          pressed-buttons)
        input (assoc input :pressed-buttons pressed-buttons)
        just-pressed-buttons (set just-pressed-buttons)
        pressed-button (last pressed-buttons)
        state (update state :frame inc)
        state (if (:current state)
                (cond
                  (= pressed-button :move-left) 
                  (on-shift-pressed state :move-left command-handler)

                  (= pressed-button :move-right)
                  (on-shift-pressed state :move-right command-handler)

                  (= pressed-button :soft-drop)
                  (on-soft-drop-pressed state command-handler)

                  :else state)
                state)]
    (tap> (str "tick - " (:frame state)))
    (-> (if (:current state)
          (cond
            (contains? just-pressed-buttons :rotate-cw)
            (handle-rotate state :rotate-cw command-handler)

            (contains? just-pressed-buttons :rotate-ccw)
            (handle-rotate state :rotate-ccw command-handler)

            (and rotate-180-allowed? (contains? just-pressed-buttons :rotate-180))
            (handle-rotate state :rotate-180 command-handler)

            (and hard-drop-allowed? (contains? just-pressed-buttons :hard-drop))
            (handle-hard-drop state command-handler)

            (and hold-allowed? (contains? just-pressed-buttons :hold))
            (handle-hold state command-handler)

            :else state)
          state)
        (fall command-handler)
        (try-lock command-handler)
        (handle-buttons-released input)
        (handle-events command-handler))))
