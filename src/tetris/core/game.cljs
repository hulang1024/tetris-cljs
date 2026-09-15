(ns tetris.core.game 
  (:require
    [tetris.core.board :as b]
    [tetris.core.piece :as p]))

(def Command
  [:enum
   :fall
   :move-down
   :move-left
   :move-right
   :rotate-cw
   :rotate-ccw
   :hard-drop
   :lock
   :hold])

(def EventType
  [:enum :spawn-piece :hold :lock :line-clear :game-over])

(def Event
  [:multi {:dispatch :type}
   [:spawn-piece
    [:map
     [:type [:= :spawn-piece]]
     [:cause [:enum :lock :hold]]]]
   [:hold
    [:map
     [:type [:= :hold]]
     [:action [:enum :swap :put]]]]
   [:lock
    [:map
     [:type [:= :lock]]
     [:position
      [:map
       [:row :int]
       [:col :int]]]]]
   [:line-clear
    [:map
     [:type [:= :line-clear]]
     [:last-board b/Board]
     [:row-indices [:set :int]]]]
   [:game-over
    [:map
     [:type [:= :game-over]]]]])

(def RandomIntFn [:=> [:cat :int] :int])

(def Status
  [:enum :playing :paused :game-over])

(def State
  [:map
   [:random-int-fn RandomIntFn]
   [:time :int]
   [:level    :int]
   [:board    b/Board]
   [:row      :int]
   [:col      :int]
   [:current  p/Piece]
   [:hold     [:maybe p/Piece]]
   [:next     p/Piece]
   [:ghost    [:map
               [:row :int]
               [:col :int]]]
   [:events   [:vector Event]]
   [:status   Status]])

(defn find-event
  {:malli/schema [:=> [:cat EventType [:sequential Event]] [:maybe Event]]}
  [event-type events]
  (first (filter #(= (:type %) event-type) events)))

(defn- ghost-position [board piece row col]
  (letfn [(down [row]
            (if (b/collide? board piece (inc row) col)
              row
              (down (inc row))))]
    [(down row) col]))

(defn- update-ghost [state]
  (let [{:keys [board row col current]} state
        [ghost-row ghost-col] (ghost-position board current row col)]
    (assoc state :ghost {:row ghost-row :col ghost-col})))

(defn- move [state offset-row offset-col]
  (let [{:keys [board row col current]} state
        row' (+ row offset-row)
        col' (+ col offset-col)]
    (if (b/collide? board current row' col')
      state
      (assoc state :row row' :col col'))))

(defn- rotate [state turn]
  (let [{:keys [board row col current]} state
        {:keys [kind dir]} current
        rotated (p/->piece kind (p/rotate turn dir))]
    (if (b/collide? board rotated row col)
      state
      (assoc state :current rotated))))

(defn- lock-piece [state]
  (let [{:keys [board current row col events]} state]
    (assoc state
           :board (b/lock-piece board current row col)
           :events (conj events {:type :lock
                                 :position {:row row :col col}}))))

(defn- clear-full-rows [state]
  (let [board (:board state)
        full-row-indices (b/find-full-row-indices board)]
    (if (seq full-row-indices)
      (-> (assoc state :board (b/clear-rows board full-row-indices))
          (update :events #(conj % {:type :line-clear
                                    :last-board board
                                    :row-indices full-row-indices})))
      state)))

(defn- check-game-over [state]
  (let [{:keys [board current row col]} state]
    (if (b/lock-out? board current row col)
      (-> (assoc state :status :game-over)
          (update :events #(conj % {:type :game-over})))
      state)))

(defn- next-piece [state]
  (let [n ((:random-int-fn state) (:time state)) 
        kind (p/kind-at (mod n 7))
        dir (mod n 4)]
    (p/->piece kind dir)))

(defn- top-position [state]
  (assoc state
         :row (- b/hidden-rows)
         :col 3))

(defn- spawn-piece [state cause]
  (-> (assoc state
             :current (:next state)
             :next (next-piece state))
      top-position
      (update :events #(conj % {:type :spawn-piece
                                :cause cause}))))

(defn- lock-and-advance [state]
  (let [state (-> state
                  lock-piece
                  clear-full-rows
                  check-game-over)]
    (if (= (:status state) :game-over)
      state
      (spawn-piece state :lock))))

(defn- hard-drop [state]
  (let [{:keys [board row col current]} state
        [ghost-row] (ghost-position board current row col)]
    (-> (assoc state :row ghost-row)
        lock-and-advance)))

(defn- hold [state]
  (-> (if (:hold state)
        (-> (assoc state
                   :current (:hold state)
                   :hold (:current state))
            top-position
            (update :events #(conj % {:type :hold :action :swap})))
        (-> (assoc state
                   :current nil
                   :hold (:current state))
            (spawn-piece :hold)
            (update :events #(conj % {:type :hold :action :put}))))))

(defn can-move-down?
  {:malli/schema [:=> [:cat State] :boolean]}
  [state]
  (let [{:keys [board row col current]} state]
    (not (b/collide? board current (inc row) col))))

(defn initial-state [overrides]
  (let [defaults {:time    0
                  :level   2
                  :board   (b/empty-board)
                  :row     0
                  :col     0
                  :current nil
                  :hold    nil
                  :ghost   nil
                  :events  []
                  :status  :playing}
        state (merge defaults overrides)]
    (-> state
        (assoc :next (next-piece state))
        (spawn-piece :lock)
        update-ghost)))

(defn handle-command
  {:malli/schema [:=> [:cat State Command] State]}
  [state command]
  (if (= (:status state) :playing)
    (-> (case command
          :fall       (move state +1 0)
          :move-down  (move state +1 0)
          :move-left  (move state 0 -1)
          :move-right (move state 0 +1)
          :rotate-cw  (rotate state :cw)
          :rotate-ccw (rotate state :ccw)
          :hard-drop  (hard-drop state)
          :lock       (lock-and-advance state)
          :hold       (hold state)
          state)
        (update-ghost)
        (update :time inc))
    state))
