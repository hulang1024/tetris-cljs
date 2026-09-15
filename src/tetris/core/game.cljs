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
   :lock])

(def Event
  [:multi {:dispatch :type}
   [:hard-drop
    [:map
     [:type [:= :hard-drop]]
     [:pos [:sequential :int]]]]
   [:spawn-piece
    [:map
     [:type [:= :spawn-piece]]]]
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
   [:next     p/Piece]
   [:ghost    [:map
               [:row :int]
               [:col :int]]]
   [:events   [:vector Event]]
   [:status   Status]])

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
  (let [{:keys [board current row col]} state]
    (assoc state :board (b/lock-piece board current row col))))

(defn- clear-full-rows [state]
  (let [board (:board state)
        full-row-indices (b/full-row-indices board)]
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

(defn- random-piece [state]
  (let [n ((:random-int-fn state) (:time state)) 
        kind (p/kind-at (mod n 7))
        dir (mod n 4)]
    (p/->piece kind dir)))

(defn- spawn-piece [state]
  (-> (assoc state :current (:next state)
             :row (- b/hidden-rows)
             :col 3
             :next (random-piece state))
      (update :events #(conj % {:type :spawn-piece}))))

(defn- lock-and-advance [state]
  (let [state (-> state
                  lock-piece
                  clear-full-rows
                  check-game-over)]
    (if (= (:status state) :game-over)
      state
      (spawn-piece state))))

(defn- hard-drop [state]
  (let [{:keys [board row col current events]} state
        [ghost-row] (ghost-position board current row col)]
    (-> (assoc state
               :row ghost-row
               :events (conj events {:type :hard-drop
                                     :pos [ghost-row col]}))
        lock-and-advance)))

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
                  :ghost   nil
                  :events  []
                  :status  :playing}
        state (merge defaults overrides)]
    (-> state
        (assoc :next (random-piece state))
        (spawn-piece)
        (update-ghost))))

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
          state)
        (update-ghost)
        (update :time inc))
    state))
