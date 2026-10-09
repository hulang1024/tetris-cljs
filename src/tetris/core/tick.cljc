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
   [:ruleset :keyword]
   [:rotation-system rs/RotationSystem]
   [:piece-generator ruleset/PieceGenerator]
   [:scoring scoring/ScoringSystem]
   [:speed-level-system speedlv/SpeedLevelSystem]
   [:ghost-enabled? :boolean]
   [:preview-count [:int {:min 1}]]
   [:speed-level [:int {:min 0}]]
   [:hold-allowed? :boolean]
   [:hard-drop-allowed? :boolean]
   [:rotate-180-allowed? :boolean]
   [:das-cancel-on-direction-change? :boolean]
   [:das-cancel-on-lock? :boolean]
   [:lock-reset-max-times [:maybe [:int {:min 1}]]]
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
   [::phase [:enum :controlling :line-clearing :spawning :game-over]]
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
      (assoc ::lock-reset-count 0
             ::lock-timer 0)))

(defn- reset-lock [state max-times]
  (let [cnt (inc (::lock-reset-count state))]
    (if (>= cnt max-times)
      (lock state)
      (assoc state
             ::lock-reset-count cnt
             ::lock-timer 0))))

(defn- on-shift-pressed [state command]
  (if (< (::lock-timer state) (ruleset/lock-delay state))
    (let [{:keys [das-cancel-on-direction-change? das arr]} (:options state)
          das-timer (inc (::das-timer state))]
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
            (assoc state ::arr-timer t)))))
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

(defn- fall [state]
  (if (not (:current state))
    state
    (let [t (inc (::fall-timer state))]
      (if (>= t (ruleset/fall-interval state))
        (if (game/can-move-down? state)
          (-> (handle state :fall)
              (assoc ::fall-timer 0))
          state)
        (assoc state ::fall-timer t)))))

(defn- spawn [state]
  (-> (handle state :spawn)
      (assoc :shift-blocked? false
             :landed? false
             ::fall-timer 0)))

(defn- update-lock [state]
  (if-not (:current state)
    state
    (let [now-landed? (not (game/can-move-down? state))
          changed? (not= (:landed? state) now-landed?) 
          state (assoc state :landed? now-landed?)]
      (if now-landed?
        (if changed?
          (-> (game/emit-event state :landed)
              (assoc ::lock-timer 0
                     ::lock-reset-count 0))
          (let [state (let [t (inc (::lock-timer state))]
                        (if (>= t (ruleset/lock-delay state))
                          (lock state)
                          (assoc state ::lock-timer t)))
                max-times (get-in state [:options :lock-reset-max-times])
                state (if (and max-times
                               (or (game/find-event :shifted (:events state))
                                   (game/find-event :rotated (:events state))))
                        (reset-lock state max-times)
                        state)
                locked? (game/find-event :locked (:events state))
                state (if (and locked?
                               (get-in state [:options :das-cancel-on-lock?]))
                        (reset-das state)
                        state)]
            (if (and locked?
                     (not (game/find-event :line-clearing (:events state))))
              (spawn state)
              state)))
        (assoc state ::lock-timer 0)))))

(defn update-line-clear [state]
  (let [t (inc (::line-clear-timer state))]
    (if (>= t (ruleset/line-clear-delay state))
      (-> state
          (handle :clear-lines)
          (spawn)
          (assoc ::phase :controlling
                 ::line-clear-timer 0))
      (assoc state ::line-clear-timer t))))

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
       :frame 0
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
       ::phase :controlling
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
          pressed-move-button (last (filter #{:move-left :move-right :soft-drop} pressed-buttons))
          state (-> (update state :frame inc)
                    (assoc ::commands []))]
      (when (get-in state [:options :debug?])
        (tap> (str "tick - " (:frame state))))
      (case (::phase state)
        :controlling
        (let [state
              (cond
                (= pressed-move-button :move-left) (on-shift-pressed state :move-left)
                (= pressed-move-button :move-right) (on-shift-pressed state :move-right)
                (= pressed-move-button :soft-drop) (on-soft-drop-pressed state)
                :else (-> (reset-das state)
                          (assoc ::sdf-timer 0
                                 ::soft-dropping? false)))
              state
              (cond
                (contains? just-pressed-buttons :rotate-cw)
                (handle state :rotate-cw)

                (contains? just-pressed-buttons :rotate-ccw)
                (handle state :rotate-ccw)

                (and rotate-180-allowed? (contains? just-pressed-buttons :rotate-180))
                (handle state :rotate-180)

                (and hard-drop-allowed? (contains? just-pressed-buttons :hard-drop))
                (let [state (handle state :hard-drop)]
                  (if-not (game/find-event :line-clearing (:events state))
                    (spawn state)
                    state))

                (and hold-allowed? (contains? just-pressed-buttons :hold))
                (handle state :hold)

                :else state)
              state (cond
                      (or (game/find-event :shifted (:events state))
                          (game/find-event :hard-dropped (:events state))
                          (game/find-event :held (:events state)))
                      (assoc state :shift-blocked? false)

                      (game/find-event :shift-blocked (:events state))
                      (assoc state :shift-blocked? true)

                      :else state)
              state (-> (if (or (game/find-event :moved-down (:events state))
                                (game/find-event :hard-dropped (:events state))
                                (game/find-event :locked (:events state))
                                (game/find-event :held (:events state)))
                          (assoc state ::fall-timer -1)
                          state)
                        (fall)
                        (update-lock))]
          (cond
            (game/find-event :game-over (:events state))
            (assoc state ::phase :game-over)

            (game/find-event :line-clearing (:events state))
            (assoc state
                   ::phase :line-clearing
                   ::line-clear-timer 0)

            :else state))
        :line-clearing (update-line-clear state)
        :spawning state
        :game-over state))))
