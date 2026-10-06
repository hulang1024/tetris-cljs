(ns tetris.core.tick 
  (:require
    [tetris.core.game :as game]
    [tetris.core.input :as input]
    [tetris.core.rs :as rs]
    [tetris.core.ruleset :as ruleset]
    [tetris.core.scoring :as scoring]
    [tetris.core.speedlv :as speedlv]))

(def GameOptions
  [:map
   [:rotation-system rs/RotationSystem]
   [:piece-generator ruleset/PieceGenerator]
   [:scoring scoring/ScoringSystem]
   [:speed-level-system speedlv/SpeedLevelSystem]
   [:ruleset :keyword]
   [:ghost-enabled? :boolean]
   [:preview-count [:int {:min 1}]]
   [:speed-level [:int {:min 0}]]
   [:hold-allowed? :boolean]
   [:hard-drop-allowed? :boolean]
   [:rotate-180-allowed? :boolean]
   [:das-cancel-on-direction-change? :boolean]
   [:das-cancel-on-lock? :boolean]
   [:lock-reset-max-times [:int {:min 1}]]
   [:das [:int {:min 0}]]
   [:arr [:int {:min 0}]]
   [:dcd [:int {:min 0}]]
   [:sdf [:int {:min 1}]]])

(def State
  [:map
   [:options GameOptions]
   [:frame [:int {:min 0}]]
   [:shift-blocked? :boolean]
   [:landed? :boolean]
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
   [::das-button [:maybe input/ActionButton]]
   [::commands [:vector :keyword]]])

(defn- handle [state command]
  (-> (game/handle-command state command)
      (update ::commands conj command)))

(defn- reset-das [state]
  (assoc state 
         ::das-button nil
         ::das-timer 0
         ::arr-timer 0))

(defn- lock [state]
  (-> (handle state :lock)
      (assoc ::lock-timer 0)))

(defn- reset-lock [state]
  (let [cnt (inc (::lock-reset-count state))]
    (if (>= cnt (get-in state [:options :lock-reset-max-times]))
      (lock state)
      (assoc state
             ::lock-reset-count cnt
             ::lock-timer 0))))

(defn- locking? [state]
  (:landed? state))

(defn- on-shift-pressed [state command]
  (if (< (::lock-timer state) (ruleset/lock-delay state))
    (let [{:keys [das-cancel-on-direction-change? das arr]} (:options state)
          das-timer (inc (::das-timer state))
          state
          (cond 
            ;; DAS未充能
            (nil? (::das-button state))
            (-> (handle state command)
                (assoc ::das-button command
                       ::das-timer 0))
            ;; 切换方向
            (not= command (::das-button state))
            (-> (if das-cancel-on-direction-change?
                  (reset-das state)
                  state)
                (assoc ::arr-timer 0
                       ::das-button command)
                (handle command))
            ;; DAS充能中
            (< das-timer das)
            (assoc state ::das-timer das-timer)
            ;; DAS充能完
            (= das-timer das)
            (-> (handle state command)
                (assoc ::das-timer das-timer
                       ::arr-timer 0))
            ;; ARR阶段
            :else
            (let [t (inc (::arr-timer state))]
              (if (>= t arr)
                (-> (handle state command)
                    (assoc ::arr-timer 0))
                (assoc state ::arr-timer t))))]
      (if (and (locking? state)
               (or (game/find-event :moved-down (:events state))
                   (game/find-event :shifted (:events state))))
        (reset-lock state)
        state))
    state))

(defn- on-soft-drop-pressed [state]
  (if-not (::soft-dropping? state)
    (-> (handle state :move-down)
        (assoc ::soft-dropping? true))
    (let [t (inc (::sdf-timer state))]
      (if (>= t (ruleset/soft-drop-interval state))
        (-> (handle state :move-down)
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

(defn- do-lock-timer [state]
  (let [t (inc (::lock-timer state))]
    (if (>= t (ruleset/lock-delay state))
      (lock state)
      (assoc state ::lock-timer t))))

(defn- fall [state]
  (if (not (:current state))
    state
    (let [events (:events state)
          state (if (or (game/find-event :moved-down events)
                        (game/find-event :hard-dropped events)
                        (game/find-event :locked events)
                        (game/find-event :held events)
                        (game/find-event :spawned events))
                  (assoc state ::fall-timer -1)
                  state)
          t (inc (::fall-timer state))]
      (if (>= t (ruleset/fall-interval state))
        (if (game/can-move-down? state)
          (-> (handle state :fall)
              (assoc ::fall-timer 0
                     ::lock-reset-count 0))
          state)
        (assoc state ::fall-timer t)))))

(defn- try-lock [state]
  (if (or (not (:current state)) (game/can-move-down? state))
    (assoc state ::lock-timer 0)
    (-> (if (and (not (locking? state)) (= (::lock-timer state) 0))
          (game/emit-event state :landed)
          state)
        (do-lock-timer))))

(defn- handle-rotate [state command]
  (let [state (handle state command)]
    (if (and (locking? state)
             (game/find-event :rotated (:events state)))
      (reset-lock state)
      state)))

(defn- handle-hard-drop [state]
  (handle state :hard-drop))

(defn- handle-hold [state]
  (handle state :hold))

(defn- handle-events [state]
  (let [events (:events state)
        state (cond-> state
                (or (game/find-event :fallen events)
                    (game/find-event :moved-down events))
                (assoc :shift-blocked? false)

                (game/find-event :shifted events)
                (assoc :shift-blocked? false)

                (game/find-event :shift-blocked events)
                (assoc :shift-blocked? true)

                (game/find-event :landed events)
                (assoc :landed? true))]
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
              (handle :clear-lines)
              (handle :spawn)
              (assoc ::line-clearing? false
                     ::line-clear-timer 0))
          (assoc state ::line-clear-timer t)))

      (game/find-event :locked events)
      (-> (if (get-in state [:options :das-cancel-on-lock?])
            (reset-das state)
            state)
          (assoc :shift-blocked? false
                 :landed? false)
          (handle :spawn)
          (assoc ::fall-timer 0))
      :else state)))

(defn initial-game
  {:malli/schema [:=> [:cat GameOptions] State]}
  [options]
  (let [game-option-keys
        [:rotation-system
         :piece-generator
         :scoring
         :speed-level-system
         :ruleset
         :ghost-enabled?
         :preview-count
         :speed-level]]
    (merge
      {:options (dissoc options game-option-keys)
       :shift-blocked? false
       :landed? false
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
       ::line-clearing? false
       ::commands []}
      (game/initial-state
        (select-keys options game-option-keys)))))

(defn step
  {:malli/schema [:=> [:cat State input/InputState] game/State]}
  [state input]
  (if-not (game/started? state)
    (-> (update state :frame inc)
        (handle :spawn))
    (let [{:keys [pressed-buttons just-pressed-buttons]} input
          {:keys [hard-drop-allowed? hold-allowed? rotate-180-allowed?]} (:options state)
          just-pressed-buttons (set just-pressed-buttons)
          pressed-button (last pressed-buttons)
          state (-> (update state :frame inc)
                    (assoc ::commands []))
          state (if (:current state)
                  (cond
                    (= pressed-button :move-left) 
                    (on-shift-pressed state :move-left)

                    (= pressed-button :move-right)
                    (on-shift-pressed state :move-right)

                    (= pressed-button :soft-drop)
                    (on-soft-drop-pressed state)

                    :else state)
                  state)]
      (tap> (str "tick - " (:frame state)))
      (-> (if (:current state)
            (cond
              (contains? just-pressed-buttons :rotate-cw)
              (handle-rotate state :rotate-cw)

              (contains? just-pressed-buttons :rotate-ccw)
              (handle-rotate state :rotate-ccw)

              (and rotate-180-allowed? (contains? just-pressed-buttons :rotate-180))
              (handle-rotate state :rotate-180)

              (and hard-drop-allowed? (contains? just-pressed-buttons :hard-drop))
              (handle-hard-drop state)

              (and hold-allowed? (contains? just-pressed-buttons :hold))
              (handle-hold state)

              :else state)
            state)
          (fall)
          (try-lock)
          (handle-buttons-released input)
          (handle-events)))))
