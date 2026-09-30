(ns tetris.core.game 
  (:require
    [tetris.core.board :as b :refer [Board Cell]]
    [tetris.core.piece :as p :refer [->piece Piece]]
    [tetris.core.rs :as rs]
    [tetris.core.ruleset :as ruleset]))

(def Command
  [:enum
   :start
   :spawn
   :fall
   :move-down
   :move-left
   :move-right
   :rotate-cw
   :rotate-ccw
   :rotate-180
   :hard-drop
   :lock
   :clear-lines
   :hold])

(defn event-schema [type & fields]
  [type (into [:map [:type [:= type]]] fields)])

(def Event
  [:multi {:dispatch :type}
   (event-schema :spawned)
   (event-schema :moved
                 [:dir [:enum :down :left :right]])
   (event-schema :landed)
   (event-schema :down-blocked)
   (event-schema :shift-blocked
                 [:dir :int])
   (event-schema :rotated)
   (event-schema :hard-dropped)
   (event-schema :locked
                 [:row :int]
                 [:col :int]
                 [:last Piece])
   (event-schema :held
                 [:action [:enum :swap :put]])
   (event-schema :line-clearing
                 [:row-indices [:set :int]])
   (event-schema :line-cleared
                 [:cells [:vector Cell]]
                 [:row-indices [:set :int]])
   (event-schema :game-over)])

(def EventType (into [:enum] (map first (drop 2 Event))))

(def State
  [:map
   [:rotation-system rs/RotationSystem]
   [:piece-generator ruleset/PieceGenerator]
   [:ghost-enabled? :boolean]
   [:preview-count [:int {:min 1}]]
   [:board Board]
   [:row :int]
   [:col :int]
   [:current [:maybe Piece]]
   [:hold [:maybe Piece]]
   [:next-queue [:seqable Piece]]
   [:next-piece-id [:int {:min 1}]]
   [:event-id :int]
   [:events [:vector Event]]])

(def CommandHandler [:=> [:cat State Command] State])

(defn find-event
  {:malli/schema [:=> [:cat EventType [:sequential Event]] [:maybe Event]]}
  [event-type events]
  (first (filter #(= (:type %) event-type) events)))

(defn emit-event [state event]
  (let [state (update state :event-id inc)
        event (-> (if (keyword? event) {:type event} event)
                  (assoc :id (:event-id state)))]
    (tap> (str "game - event " event))
    (update state :events conj event)))

(defn- ghost-position [board piece row col]
  (letfn [(down [row]
            (if (b/collide? board piece (inc row) col)
              row
              (recur (inc row))))]
    [(down row) col]))

(defn ghost
  {:malli/schema [:=> [:cat State] [:maybe [:map [:row :int] [:col :int]]]]}
  [state]
  (when (and (:ghost-enabled? state) (:current state))
    (let [{:keys [board row col current]} state
          [r c] (ghost-position board current row col)]
      {:row r :col c})))

(defn- blocked?
  {:malli/schema [:=> [:cat State] :boolean]}
  [state offset-row offset-col]
  (assert (:current state))
  (let [{:keys [board row col current]} state
        row (+ row offset-row)
        col (+ col offset-col)]
    (and current (b/collide? board current row col))))

(defn can-move-down?
  {:malli/schema [:=> [:cat State] :boolean]}
  [state]
  (not (blocked? state 1 0)))

(defn- try-move-down [state]
  (if (blocked? state 1 0)
    (emit-event state :down-blocked)
    (-> (update state :row inc)
        (emit-event {:type :moved :dir :down}))))

(defn- try-shift [state dir]
  (if (blocked? state 0 dir)
    (emit-event state {:type :shift-blocked :dir dir})
    (-> (update state :col (partial + dir))
        (emit-event {:type :moved
                     :dir (if (pos? dir) :right :left)}))))

(defn- try-rotate [state turn]
  (assert (:current state))
  (if-let [state' (rs/rotate state turn)]
    (emit-event state' :rotated)
    state))

(defn- lock-piece [state]
  (assert (:current state))
  (let [{:keys [board current row col]} state]
    (-> (assoc state :board (b/lock-piece board current row col))
        (emit-event {:type :locked
                     :row row
                     :col col
                     :last current}))))

(defn- clear-full-rows [state]
  (let [board (:board state)
        full-row-indices (b/find-full-row-indices board)]
    (if (seq full-row-indices)
      (emit-event state {:type :line-clearing
                         :row-indices full-row-indices})
      state)))

(defn- check-game-over [state]
  (if (b/lock-out? (:row state))
    (emit-event state :game-over)
    state))

(defn- top-position [state]
  (assoc state :row 0 :col 3))

(defn- spawn-piece [state]
  (assert (not (:current state)))
  (-> (let [q (:next-queue state)
            piece (first q)
            next-piece-id (:next-piece-id state)
            [piece-type piece-generator] (ruleset/next-piece (:piece-generator state))
            next-piece (->piece next-piece-id piece-type 0 (:rotation-system state))]
        (assoc state
               :current piece
               :piece-generator piece-generator
               :next-queue (conj (vec (rest q)) next-piece)
               :next-piece-id (+ next-piece-id (count (rs/cell-indices piece)))))
      (top-position)
      (emit-event :spawned)))

(defn- lock [state]
  (assert (:current state))
  (-> state
      lock-piece
      clear-full-rows
      check-game-over
      (assoc :current nil)))

(defn clear-lines [state]
  (let [board (:board state)
        full-row-indices (b/find-full-row-indices board)]
    (-> (assoc state :board (b/clear-rows board full-row-indices))
        (emit-event {:type :line-cleared
                     :cells (b/find-cells-to-clear board full-row-indices)
                     :row-indices full-row-indices}))))

(defn- hard-drop [state]
  (assert (:current state))
  (let [{:keys [board row col current]} state
        [ghost-row] (ghost-position board current row col)]
    (-> (assoc state :row ghost-row)
        (emit-event {:type :moved :dir :down})
        (emit-event :hard-dropped)
        (emit-event :landed)
        lock)))

(defn- hold [state]
  (assert (:current state))
  (if (:hold state)
    (-> (assoc state
               :current (:hold state)
               :hold (p/reset-rotation (:current state)))
        top-position
        (emit-event {:type :held :action :swap}))
    (-> (assoc state
               :current nil
               :hold (p/reset-rotation (:current state)))
        (spawn-piece)
        (emit-event {:type :held :action :put}))))

(defn- initial-next-queue [state]
  (let [{:keys [rotation-system preview-count piece-generator next-piece-id]} state
        [pieces piece-generator next-piece-id]
        (reduce (fn [[pieces gen, next-piece-id] _]
                  (let [[piece-type gen] (ruleset/next-piece gen)
                        piece (->piece next-piece-id piece-type 0 rotation-system)]
                    [(conj pieces piece) gen (+ next-piece-id (count (rs/cell-indices piece)))]))
                [[] piece-generator next-piece-id]
                (range preview-count))]
    (assoc state
           :piece-generator piece-generator
           :next-queue pieces
           :next-piece-id next-piece-id)))

(defn initial-state [overrides]
  (let [defaults
        {:ghost-enabled? true
         :preview-count 4
         :board b/empty-board
         :row 0
         :col 0
         :current nil
         :hold nil
         :next-queue []
         :next-piece-id 1
         :event-id 0
         :events []}]
    (-> (merge defaults overrides)
        (initial-next-queue))))

(defn started? [state]
  (> (:event-id state) 0))

(defn- start [state]
  (if-not (started? state)
    (spawn-piece state)
    state))

(defn handle-command
  {:malli/schema CommandHandler}
  [state command]
  (tap> (str "game - command " command))
  (assert (or (started? state) (= command :start)))
  (-> (case command
        :start (start state)
        :fall (try-move-down state)
        :move-down (try-move-down state)
        :move-left (try-shift state -1)
        :move-right (try-shift state 1)
        :rotate-cw (try-rotate state :cw)
        :rotate-ccw (try-rotate state :ccw)
        :rotate-180 (try-rotate state :180)
        :hard-drop (hard-drop state)
        :lock (lock state)
        :clear-lines (clear-lines state)
        :spawn (spawn-piece state)
        :hold (hold state)
        state)))
