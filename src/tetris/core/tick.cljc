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
   [:initial-hold-enabled? :boolean]
   [:initial-rotation-enabled? :boolean]
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
   [:dcd [:int {:min 0}]] ; TODO: DCD
   [:sdf [:int {:min 1}]]])

(def State
  [:map
   [:options GameOptions]
   [:frame [:int {:min 0}]]
   [:shift-blocked? :boolean]
   [:landed? :boolean]
   [::gravity-acc number?]
   [::lock-timer :int]
   [::das-timer :int]
   [::arr-timer :int]
   [::dcd-timer :int]
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
        (assoc ::soft-dropping? true
               ::gravity-acc 0))
    state))

(defn- apply-gravity [state]
  (if (not (:current state))
    state
    (let [[g command]
          (if (::soft-dropping? state)
            [(ruleset/soft-drop-speed state) :move-down]
            [(ruleset/fall-speed state) :fall])
          acc (+ (::gravity-acc state) g)]
      (loop [acc acc state state]
        (if (>= acc 1)
          (recur (dec acc)
                 (if (game/can-move-down? state)
                   (handle state command)
                   state))
          (assoc state ::gravity-acc acc))))))

(defn- spawn [state]
  (-> (handle state :spawn)
      (assoc :shift-blocked? false
             :landed? false
             ::gravity-acc 0
             ::soft-dropping? false
             ::phase :controlling)))

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
                max-times (get-in state [:options :lock-reset-max-times])]
            (if (and max-times
                     (or (game/find-event :shifted (:events state))
                         (game/find-event :rotated (:events state))))
              (reset-lock state max-times)
              state)))
        (assoc state ::lock-timer 0)))))

(defn update-line-clear [state]
  (let [t (inc (::line-clear-timer state))]
    (if (>= t (ruleset/line-clear-delay state))
      (-> state
          (handle :clear-lines)
          (assoc ::phase :spawning
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
       ::lock-timer 0
       ::das-timer 0
       ::arr-timer 0
       ::dcd-timer 0
       ::gravity-acc 0
       ::line-clear-timer 0
       ::lock-reset-count 0
       ::soft-dropping? false
       ::das-button nil
       ::phase :spawning
       ::commands []}
      (game/initial-state
        (select-keys options game-option-keys)))))

(defn step
  {:malli/schema [:=> [:cat State input/InputState] game/State]}
  [state input]
  (let [{:keys [pressed-buttons just-pressed-buttons]} input
        {:keys [hard-drop-allowed? hold-allowed? rotate-180-allowed?]} (:options state)
        just-pressed-buttons (set just-pressed-buttons)
        state (-> (update state :frame inc)
                  (assoc ::commands []))]
    (when (get-in state [:options :debug?])
      (tap> (str "tick - " (:frame state))))
    (case (::phase state)
      :controlling
      (let [state (case (last (filter #{:move-left :move-right} pressed-buttons))
                    :move-left (on-shift-pressed state :move-left)
                    :move-right (on-shift-pressed state :move-right)
                    (reset-das state))
            state (if (some #(= % :soft-drop) pressed-buttons)
                    (on-soft-drop-pressed state)
                    (assoc state ::soft-dropping? false))
            state
            (cond
              (contains? just-pressed-buttons :rotate-cw)
              (handle state :rotate-cw)

              (contains? just-pressed-buttons :rotate-ccw)
              (handle state :rotate-ccw)

              (and rotate-180-allowed? (contains? just-pressed-buttons :rotate-180))
              (handle state :rotate-180)

              (and hard-drop-allowed? (contains? just-pressed-buttons :hard-drop))
              (-> (handle state :hard-drop)
                  (handle :lock))

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
                        (assoc state ::gravity-acc 0)
                        (apply-gravity state))
                      (update-lock))]
        (cond
          (game/find-event :game-over (:events state))
          (assoc state ::phase :game-over)

          (game/find-event :line-clearing (:events state))
          (assoc state
                 ::phase :line-clearing
                 ::line-clear-timer 0)

          (game/find-event :locked (:events state))
          (-> (if (get-in state [:options :das-cancel-on-lock?])
                (reset-das state)
                state)
              (assoc ::phase :spawning))

          :else state))
      :line-clearing (update-line-clear state)
      :spawning
      (let [{:keys [initial-rotation-enabled?
                    initial-hold-enabled?]} (:options state)
            state (spawn state)]
        (cond
          (and initial-hold-enabled?
               hold-allowed? (contains? just-pressed-buttons :hold))
          (handle state :hold)

          (and initial-rotation-enabled? (contains? just-pressed-buttons :rotate-cw))
          (handle state :rotate-cw)

          (and initial-rotation-enabled? (contains? just-pressed-buttons :rotate-ccw))
          (handle state :rotate-ccw)

          (and initial-rotation-enabled?
               rotate-180-allowed? (contains? just-pressed-buttons :rotate-180))
          (handle state :rotate-180)

          :else state))
      :game-over state)))
