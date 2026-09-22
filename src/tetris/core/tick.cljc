(ns tetris.core.tick 
  (:require
    [tetris.core.game :as game]
    [tetris.core.input :as input]
    [tetris.core.ruleset :as ruleset]))

(def State
  [:map
   [:ruleset :symbol]
   [:hold-enabled? :boolean]
   [:hard-drop-enabled? :boolean]
   [:rotate-180-enabled? :boolean]
   [:das [:int {:min 1}]]
   [:arr [:int {:min 1}]]
   [:dcd [:int {:min 1}]]
   [:sdf [:int {:min 1}]]
   [:frame [:int {:min 0}]]
   [:level [:int {:min 1}]]
   [::fall-timer number?]
   [::lock-timer number?]
   [::das-timer number?]
   [::arr-timer number?]
   [::dcd-timer number?]
   [::sdf-timer number?]
   [::line-clear-timer number?]
   [::line-clearing? :boolean]
   [::das-button [:maybe input/Button]]
   [:status game/Status]])

(defn- on-shift-pressed [state command command-handler]
  (if (< (::lock-timer state) (ruleset/lock-delay state))
    (let [{:keys [das arr]} state
          das-timer (inc (::das-timer state))]
      (cond 
        ;; DAS未充能
        (nil? (::das-button state))
        (-> (command-handler state command)
            (assoc ::das-button command))
        ;; DAS充能中
        (< das-timer das)
        (assoc state
               ::das-timer das-timer
               ;; 充能完立即进入ARR
               ::arr-timer arr)
        ;; DAS充能完
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
    (assoc state 
           ::das-button nil
           ::das-timer 0
           ::arr-timer 0)
    state))

(defn- on-soft-drop-pressed [state command-handler]
  (let [t (inc (::sdf-timer state))]
    (if (>= t (ruleset/soft-drop-interval state))
      (-> (command-handler state :move-down)
          (assoc ::fall-timer 0
                 ::sdf-timer 0))
      (assoc state ::sdf-timer t))))

(defn- handle-soft-drop-released [state input]
  (if-not (contains? (set (:pressed-buttons input)) :soft-drop)
    (let [sdf-timer (::sdf-timer state)
          sds (ruleset/soft-drop-interval state)]
      (if (< sdf-timer sds)
        (assoc state ::sdf-timer sds) ; 为下次触发立即进入软降
        state))
    state))

(defn- start-lock-timer [state command-handler]
  (let [t (inc (::lock-timer state))]
    (if (>= t (:lock-delay state))
      (-> (command-handler state :lock)
          (assoc ::lock-timer 0))
      (assoc state ::lock-timer t))))

(defn- fall [state input command-handler]
  (if (and (not (::line-clearing? state))
           (not (contains? (set (:pressed-buttons input)) :soft-drop)))
    (let [t (inc (::fall-timer state))]
      (if (>= t (ruleset/fall-interval state))
        (if (game/can-move-down? state)
          (-> (command-handler state :fall)
              (assoc ::fall-timer 0))
          state)
        (assoc state ::fall-timer t)))
    state))

(defn- try-lock [state command-handler]
  (if (game/can-move-down? state)
    state
    (start-lock-timer state command-handler)))

(defn- handle-line-clear-event [state command-handler]
  (let [state (if (game/find-event :line-clear (:events state))
                (assoc state ::line-clearing? true)
                state)]
    (if (::line-clearing? state)
      (let [t (inc (:line-clear-timer state))]
        (if (>= t (ruleset/line-clear-delay state))
          (-> (command-handler state :spawn)
              (assoc ::line-clearing? false
                     :line-clear-timer 0))
          (assoc state :line-clear-timer t)))
      state)))

(defn- handle-lock-event [state command-handler]
  (if (and (game/find-event :lock (:events state))
           (not (::line-clearing? state)))
    (-> (command-handler state :spawn)
        (assoc ::fall-timer 0))
    state))

(defn- handle-ok [state]
  (update state
          :status #(case %
                     :playing :paused
                     :paused :playing
                     state)))

(defn initial-state [overrides]
  (merge
    {:hold-enabled? true
     :hard-drop-enabled? true
     :rotate-180-enabled? true
     :frame 0
     :level 1
     :das 0
     :arr 0
     :dcd 0
     :sdf 0
     ::fall-timer 0
     ::lock-timer 0
     ::das-timer 0
     ::arr-timer 0
     ::dcd-timer 0
     ::sdf-timer 0
     ::das-button nil
     ::line-clear-timer 0
     ::line-clearing? false}
    overrides))

(defn step
  {:malli/schema [:=> [:cat State input/InputState game/CommandHandler] game/State]}
  [state input command-handler]
  (cond
    (contains? (set (:just-pressed-buttons input)) :ok) (handle-ok state)

    (= (:status state) :playing)
    (let [{:keys [pressed-buttons just-pressed-buttons]} input
          {:keys [hard-drop-enabled? hold-enabled? rotate-180-enabled?]} state
          now-pressed-button (last pressed-buttons)
          just-pressed-buttons (set just-pressed-buttons)
          state (update state :frame inc)
          state (cond
                  (= now-pressed-button :move-left) (on-shift-pressed state :move-left command-handler)
                  (= now-pressed-button :move-right) (on-shift-pressed state :move-right command-handler)
                  (= now-pressed-button :soft-drop) (on-soft-drop-pressed state command-handler)
                  :else state)]
      (-> (cond
            (contains? just-pressed-buttons :rotate-cw) (command-handler state :rotate-cw)
            (contains? just-pressed-buttons :rotate-ccw) (command-handler state :rotate-ccw)
            (and hard-drop-enabled?
                 (contains? just-pressed-buttons :hard-drop)) (command-handler state :hard-drop)
            (and hold-enabled?
                 (contains? just-pressed-buttons :hold)) (command-handler state :hold)
            (and rotate-180-enabled?
                 (contains? just-pressed-buttons :rotate-180)) (command-handler state :rotate-180)
            :else state)
          (fall input command-handler)
          (try-lock command-handler)
          (handle-shift-released input)
          (handle-soft-drop-released input)
          (handle-line-clear-event command-handler)
          (handle-lock-event command-handler)))

    :else state))
