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
   [:das [:int {:min 1}]]
   [:arr [:int {:min 1}]]
   [:dcd [:int {:min 1}]]
   [:sdf [:int {:min 1}]]
   [:frame [:int {:min 0}]]
   [:level [:int {:min 1}]]
   [:shift-blocked? :boolean]
   [:down-blocked? :boolean]
   [::fall-timer number?]
   [::lock-timer number?]
   [::das-timer number?]
   [::arr-timer number?]
   [::dcd-timer number?]
   [::sdf-timer number?]
   [::soft-dropping? :boolean]
   [::line-clear-timer number?]
   [::line-clearing? :boolean]
   [::das-button [:maybe input/Button]]])

(defn- reset-das [state]
  (assoc state 
         ::das-button nil
         ::das-timer 0
         ::arr-timer 0))

(defn- reset-fall-timer [state]
  (assoc state ::fall-timer 0))

(defn- on-shift-pressed [state command command-handler]
  (if (< (::lock-timer state) (ruleset/lock-delay state))
    (let [{:keys [das-cancel-on-direction-change? das arr]} state
          das-timer (inc (::das-timer state))]
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
            (assoc state ::arr-timer t)))))
    state))

(defn- handle-shift-released [state input]
  (if (and (::das-button state)
           (not (contains? (set (:pressed-buttons input)) (::das-button state))))
    (reset-das state)
    state))

(defn- on-soft-drop-pressed [state command-handler]
  (if-not (::soft-dropping? state)
    (-> (command-handler state :move-down)
        (assoc ::soft-dropping? true))
    (let [t (inc (::sdf-timer state))]
      (if (>= t (ruleset/soft-drop-interval state))
        (-> (command-handler state :move-down)
            (reset-fall-timer)
            (assoc ::sdf-timer 0
                   ::soft-dropping? true))
        (assoc state ::sdf-timer t)))))

(defn- handle-soft-drop-released [state input]
  (if-not (contains? (set (:pressed-buttons input)) :soft-drop)
    (assoc state
           ::sdf-timer 0
           ::soft-dropping? false)
    state))

(defn- do-lock-timer [state command-handler]
  (let [t (inc (::lock-timer state))]
    (if (>= t (ruleset/lock-delay state))
      (-> (command-handler state :lock)
          (assoc ::lock-timer 0))
      (assoc state ::lock-timer t))))

(defn- fall [state command-handler]
  (if (not (:current state))
    state
    (let [t (inc (::fall-timer state))]
      (if (>= t (ruleset/fall-interval state))
        (if (game/can-move-down? state)
          (-> (command-handler state :fall)
              (reset-fall-timer))
          state)
        (assoc state ::fall-timer t)))))

(defn- try-lock [state command-handler]
  (if (or (not (:current state)) (game/can-move-down? state))
    state
    (-> (if (= (::lock-timer state) 0)
          (game/emit-event state :landed)
          state)
        (do-lock-timer command-handler))))

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
     :das 0
     :arr 0
     :dcd 0
     :sdf 1
     :frame 0
     :level 1
     :shift-blocked? false
     :down-blocked? false
     ::fall-timer 0
     ::lock-timer 0
     ::das-timer 0
     ::arr-timer 0
     ::dcd-timer 0
     ::sdf-timer 0
     ::soft-dropping? false
     ::das-button nil
     ::line-clear-timer 0
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
                  (= pressed-button :move-left) (on-shift-pressed state :move-left command-handler)
                  (= pressed-button :move-right) (on-shift-pressed state :move-right command-handler)
                  (= pressed-button :soft-drop) (-> (on-soft-drop-pressed state command-handler)
                                                    (reset-fall-timer))
                  :else state)
                state)]
    (tap> (str "tick - " (:frame state)))
    (-> (if (:current state)
          (cond
            (contains? just-pressed-buttons :rotate-cw) (command-handler state :rotate-cw)
            (contains? just-pressed-buttons :rotate-ccw) (command-handler state :rotate-ccw)
            (and rotate-180-allowed?
                 (contains? just-pressed-buttons :rotate-180)) (command-handler state :rotate-180)
            (and hard-drop-allowed?
                 (contains? just-pressed-buttons :hard-drop)) (-> (command-handler state :hard-drop)
                                                                  (reset-fall-timer))
            (and hold-allowed?
                 (contains? just-pressed-buttons :hold)) (-> (command-handler state :hold)
                                                             (reset-fall-timer))
            :else state)
          state)
        (fall command-handler)
        (try-lock command-handler)
        (handle-shift-released input)
        (handle-soft-drop-released input)
        (handle-events command-handler))))
