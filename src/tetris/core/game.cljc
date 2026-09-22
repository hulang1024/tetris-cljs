(ns tetris.core.game 
  (:require
    [tetris.core.board :as b :refer [Board]]
    [tetris.core.piece :as p :refer [->piece Piece Rotation]]
    [tetris.core.ruleset :as ruleset]))

(def Command
  [:enum
   :fall
   :move-down
   :move-left
   :move-right
   :rotate-cw
   :rotate-ccw
   :rotate-180
   :hard-drop
   :lock
   :spawn
   :hold])

(def EventType
  [:enum
   :spawn-piece
   :hold
   :lock
   :line-clear
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
     [:rot Rotation]]]
   [:line-clear
    [:map
     [:type [:= :line-clear]]
     [:last-board Board]
     [:row-indices [:set :int]]]]
   [:game-over
    [:map
     [:type [:= :game-over]]]]])

(def Status
  [:enum :playing :paused :game-over])

(def State
  [:map
   [:rotation-system ruleset/RotationSystem]
   [:piece-generator ruleset/PieceGenerator]
   [:ghost-enabled? :boolean]
   [:preview-count [:int {:min 1}]]
   [:board Board]
   [:row [:int {:min 0}]]
   [:col [:int {:min 0}]]
   [:current [:maybe Piece]]
   [:hold [:maybe Piece]]
   [:next-queue [:seqable Piece]]
   [:ghost
    [:maybe
     [:map
      [:row :int]
      [:col :int]]]]
   [:events [:vector Event]]
   [:status Status]])

(def CommandHandler [:=> [:cat State Command] State])

(defn find-event
  {:malli/schema [:=> [:cat EventType [:sequential Event]] [:maybe Event]]}
  [event-type events]
  (first (filter #(= (:type %) event-type) events)))

(defn emit-event [state event]
  (let [event (if (symbol? event) {:type event} event)]
    (update state :events conj event)))

(defn- ghost-position [board piece row col]
  (letfn [(down [row]
            (if (b/collide? board piece (inc row) col)
              row
              (down (inc row))))]
    [(down row) col]))

(defn- update-ghost [state]
  (if (and (:ghost-enabled? state) (:current state)) 
    (let [{:keys [board row col current]} state
          [ghost-row ghost-col] (ghost-position board current row col)]
      (assoc state :ghost {:row ghost-row :col ghost-col}))
    state))

(defn- try-move [state offset-row offset-col]
  (if-not (:current state) 
    state
    (let [{:keys [board row col current]} state
          row (+ row offset-row)
          col (+ col offset-col)]
      (if (b/collide? board current row col)
        state
        (assoc state :row row :col col)))))

(defn- try-rotate [state turn]
  (if-not (:current state) 
    state
    (ruleset/rotate state turn)))

(defn- lock-piece [state]
  (let [{:keys [board current row col]} state]
    (-> (assoc state :board (b/lock-piece board current row col))
        (emit-event {:type :lock
                     :row row
                     :col col
                     :rot (:rot current)}))))

(defn- clear-full-rows [state]
  (let [board (:board state)
        full-row-indices (b/find-full-row-indices board)]
    (if (seq full-row-indices)
      (-> (assoc state :board (b/clear-rows board full-row-indices))
          (emit-event {:type :line-clear
                       :last-board board
                       :row-indices full-row-indices}))
      state)))

(defn- check-game-over [state]
  (if (b/lock-out? (:row state))
    (-> (assoc state :status :game-over)
        (emit-event :game-over))
    state))

(defn- top-position [state]
  (assoc state :row 0 :col 3))

(defn- spawn-piece [state]
  (if (:current state) 
    state
    (-> (let [q (:next-queue state)
              [piece-type piece-generator] (ruleset/next-piece (:piece-generator state))
              piece (->piece piece-type 0 (get-in state [:rotation-system :piece-shapes]))]
          (assoc state
                 :current (first q)
                 :piece-generator piece-generator
                 :next-queue (conj (vec (rest q)) piece)))
        (top-position)
        (emit-event :spawn-piece))))

(defn- lock-and-advance [state]
  (if-not (:current state) 
    state
    (-> state
        lock-piece
        clear-full-rows
        check-game-over
        (assoc :current nil
               :ghost nil))))

(defn- hard-drop [state]
  (if-not (:current state) 
    state
    (let [{:keys [board row col current]} state
          [ghost-row] (ghost-position board current row col)]
      (-> (assoc state :row ghost-row)
          lock-and-advance))))

(defn- hold [state]
  (if-not (:current state) 
    state
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
          (emit-event {:type :hold :action :put})))))

(defn can-move-down?
  {:malli/schema [:=> [:cat State] :boolean]}
  [state]
  (let [{:keys [board row col current]} state]
    (and (boolean current) (not (b/collide? board current (inc row) col)))))

(defn- initial-next-queue [state]
  (let [{:keys [rotation-system preview-count piece-generator]} state
        piece-shapes (:piece-shapes rotation-system)
        [pieces piece-generator]
        (reduce (fn [[pieces gen] _]
                  (let [[piece-type gen] (ruleset/next-piece gen)
                        piece (->piece piece-type 0 piece-shapes)]
                    [(conj pieces piece) gen]))
                [[] piece-generator]
                (range preview-count))]
    (assoc state
           :piece-generator piece-generator
           :next-queue pieces)))

(defn initial-state [overrides]
  (let [defaults
        {:preview-count 4
         :ghost-enabled? true
         :board b/empty-board
         :row 0
         :col 0
         :current nil
         :hold nil
         :ghost nil
         :events []
         :status :playing}
        state (merge defaults overrides)]
    (-> state
        (initial-next-queue)
        (spawn-piece)
        (update-ghost))))

(defn handle-command
  {:malli/schema CommandHandler}
  [state command]
  (if (= (:status state) :playing)
    (-> (case command
          :fall (try-move state 1 0)
          :move-down (try-move state 1 0)
          :move-left (try-move state 0 -1)
          :move-right (try-move state 0 1)
          :rotate-cw (try-rotate state :cw)
          :rotate-ccw (try-rotate state :ccw)
          :rotate-180 (try-rotate state :180)
          :hard-drop (hard-drop state)
          :lock (lock-and-advance state)
          :spawn (spawn-piece state)
          :hold (hold state)
          state)
        (update-ghost))
    state))
