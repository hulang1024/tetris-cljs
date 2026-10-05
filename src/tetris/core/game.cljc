(ns tetris.core.game 
  (:require
    [tetris.core.board :as b :refer [Board Cell]]
    [tetris.core.piece :as p :refer [->piece Piece]]
    [tetris.core.rs :as rs]
    [tetris.core.scoring :as scoring]
    [tetris.core.speedlv :as speedlv]
    [tetris.core.ruleset :as ruleset]))

(def Command
  [:enum
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
   (event-schema :fallen)
   (event-schema :moved-down)
   (event-schema :shifted [:dir :int])
   (event-schema :rotated)
   (event-schema :hard-dropped)
   (event-schema :landed)
   (event-schema :shift-blocked [:dir :int])
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
   [:scoring scoring/ScoringSystem]
   [:speed-level-system speedlv/SpeedLevelSystem]
   [:ghost-enabled? :boolean]
   [:preview-count [:int {:min 1}]]
   [:board Board]
   [:row :int]
   [:col :int]
   [:current [:maybe Piece]]
   [:hold [:maybe Piece]]
   [:next-queue [:seqable Piece]]
   [:next-piece-id [:int {:min 1}]]
   [:lines-cleared [:int {:min 0}]]
   [:combo-count [:int {:min 0}]]
   [:score [:int {:min 0}]]
   [:speed-level [:int {:min 0}]]
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

(defn- blocked? [state offset-row offset-col]
  (assert (:current state))
  (let [{:keys [board row col current]} state
        row (+ row offset-row)
        col (+ col offset-col)]
    (and current (b/collide? board current row col))))

(defn can-move-down?
  {:malli/schema [:=> [:cat State] :boolean]}
  [state]
  (not (blocked? state 1 0)))

(defn- try-move-down [state event]
  (if (blocked? state 1 0)
    state
    (-> (update state :row inc)
        (emit-event event))))

(defn- try-shift [state dir]
  (if (blocked? state 0 dir)
    (emit-event state {:type :shift-blocked :dir dir})
    (-> (update state :col + dir)
        (emit-event {:type :shifted :dir dir}))))

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
        full-row-indices (b/find-full-row-indices board)
        n (count full-row-indices)
        clear? (pos? n)
        [score-delta scoring]
        (scoring/action-score (:scoring state)
                              state
                              (if clear?
                                {:type :clear :lines n}
                                {:type :no-clear}))]
    (-> (if clear?
          (-> state
              (update :lines-cleared + n)
              (emit-event {:type :line-clearing
                           :row-indices full-row-indices}))
          state)
        (update :score + score-delta)
        (assoc :scoring scoring)
        (update :combo-count (if clear? inc (constantly 0))))))

(defn clear-lines [state]
  (let [board (:board state)
        full-row-indices (b/find-full-row-indices board)
        [speed-level speed-level-system]
        (speedlv/update-level (:speed-level-system state) state)]
    (-> (assoc state :board (b/clear-rows board full-row-indices))
        (assoc :speed-level speed-level)
        (assoc :speed-level-system speed-level-system)
        (emit-event {:type :line-cleared
                     :line-count (count full-row-indices)
                     :cells (b/find-cells-to-clear board full-row-indices)
                     :row-indices full-row-indices}))))
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
               :held? false
               :next-queue (conj (vec (rest q)) next-piece)
               :next-piece-id (+ next-piece-id (count (rs/cell-indices piece)))))
      (top-position)
      (emit-event :spawned)))

(defn- try-lock [state]
  (assert (:current state))
  (if (can-move-down? state)
    state
    (-> state
        lock-piece
        clear-full-rows
        check-game-over
        (assoc :current nil))))

(defn- hard-drop [state]
  (assert (:current state))
  (let [{:keys [board row col current]} state
        [ghost-row] (ghost-position board current row col)]
    (-> (assoc state :row ghost-row)
        (emit-event :hard-dropped)
        try-lock)))

(defn- hold [state]
  (assert (:current state))
  (if (:held? state)
    state
    (if (:hold state)
      (-> (assoc state
                 :current (:hold state)
                 :hold (p/reset-rotation (:current state))
                 :held? true)
          top-position
          (emit-event {:type :held :action :swap}))
      (-> (assoc state
                 :current nil
                 :hold (p/reset-rotation (:current state)))
          (spawn-piece)
          (assoc :held? true)
          (emit-event {:type :held :action :put})))))

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
         :held? false
         :next-queue []
         :next-piece-id 1
         :lines-cleared 0
         :combo-count 0
         :score 0
         :speed-level 0
         :event-id 0
         :events []}]
    (-> (merge defaults overrides)
        (initial-next-queue))))

(defn started? [state]
  (> (:event-id state) 0))

(defn handle-command
  {:malli/schema CommandHandler}
  [state command]
  (tap> (str "game - command " command))
  (-> (case command
        :fall (try-move-down state :fallen)
        :move-down (try-move-down state :moved-down)
        :move-left (try-shift state -1)
        :move-right (try-shift state 1)
        :rotate-cw (try-rotate state :cw)
        :rotate-ccw (try-rotate state :ccw)
        :rotate-180 (try-rotate state :180)
        :hard-drop (hard-drop state)
        :lock (try-lock state)
        :clear-lines (clear-lines state)
        :spawn (spawn-piece state)
        :hold (hold state)
        state)))
