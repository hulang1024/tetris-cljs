(ns tetris.core.game 
  (:require
    [tetris.core.board :as b :refer [Board Cell]]
    [tetris.core.piece :as p :refer [->piece Piece]]
    [tetris.core.rs :as rs]
    [tetris.core.ruleset :as ruleset]))

(def Command
  [:enum
   :start
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
   :spawn
   :hold])

(def EventType
  [:enum
   :spawn-piece
   :hold
   :lock
   :line-clearing
   :line-cleared
   :game-over])

(def Event
  [:multi {:dispatch :type}
   [:spawn-piece
    [:map
     [:type [:= :spawn-piece]]]]
   [:hold
    [:map
     [:type [:= :hold]]
     [:action [:enum :swap :put]]]]
   [:lock
    [:map
     [:type [:= :lock]]
     [:row :int]
     [:col :int]
     [:last Piece]]]
   [:line-clearing
    [:map
     [:type [:= :line-clearing]]
     [:row-indices [:set :int]]]]
   [:line-cleared
    [:map
     [:type [:= :line-cleared]]
     [:cells [:vector Cell]]
     [:row-indices [:set :int]]]]
   [:game-over
    [:map
     [:type [:= :game-over]]]]])

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
   [:ghost
    [:maybe
     [:map
      [:row :int]
      [:col :int]]]]
   [:event-id :int]
   [:events [:vector Event]]])

(def CommandHandler [:=> [:cat State Command] State])

(defn find-event
  {:malli/schema [:=> [:cat EventType [:sequential Event]] [:maybe Event]]}
  [event-type events]
  (first (filter #(= (:type %) event-type) events)))

(defn- emit-event [state event]
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

(defn- update-ghost [state]
  (if (and (:ghost-enabled? state) (:current state)) 
    (let [{:keys [board row col current]} state
          [ghost-row ghost-col] (ghost-position board current row col)]
      (assoc state :ghost {:row ghost-row :col ghost-col}))
    (assoc state :ghost nil)))

(defn- try-move [state offset-row offset-col]
  (assert (:current state))
  (let [{:keys [board row col current]} state
        row (+ row offset-row)
        col (+ col offset-col)]
    (if (b/collide? board current row col)
      state
      (assoc state :row row :col col))))

(defn- try-rotate [state turn]
  (assert (:current state))
  (rs/rotate state turn))

(defn- lock-piece [state]
  (assert (:current state))
  (let [{:keys [board current row col]} state]
    (-> (assoc state :board (b/lock-piece board current row col))
        (emit-event {:type :lock
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
               :next-piece-id (+ next-piece-id (count (rs/cells piece)))))
      (top-position)
      (emit-event :spawn-piece)))

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
        lock)))

(defn- hold [state]
  (assert (:current state))
  (if (:hold state)
    (-> (assoc state
               :current (:hold state)
               :hold (p/reset-rotation (:current state)))
        top-position
        (emit-event {:type :hold :action :swap}))
    (-> (assoc state
               :current nil
               :hold (p/reset-rotation (:current state)))
        (spawn-piece)
        (emit-event {:type :hold :action :put}))))

(defn can-move-down?
  {:malli/schema [:=> [:cat State] :boolean]}
  [state]
  (assert (:current state))
  (let [{:keys [board row col current]} state]
    (not (b/collide? board current (inc row) col))))

(defn- initial-next-queue [state]
  (let [{:keys [rotation-system preview-count piece-generator next-piece-id]} state
        [pieces piece-generator next-piece-id]
        (reduce (fn [[pieces gen, next-piece-id] _]
                  (let [[piece-type gen] (ruleset/next-piece gen)
                        piece (->piece next-piece-id piece-type 0 rotation-system)]
                    [(conj pieces piece) gen (+ next-piece-id (count (rs/cells piece)))]))
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
         :ghost nil
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
        :fall (try-move state 1 0)
        :move-down (try-move state 1 0)
        :move-left (try-move state 0 -1)
        :move-right (try-move state 0 1)
        :rotate-cw (try-rotate state :cw)
        :rotate-ccw (try-rotate state :ccw)
        :rotate-180 (try-rotate state :180)
        :hard-drop (hard-drop state)
        :lock (lock state)
        :clear-lines (clear-lines state)
        :spawn (spawn-piece state)
        :hold (hold state)
        state)
      (update-ghost)))
