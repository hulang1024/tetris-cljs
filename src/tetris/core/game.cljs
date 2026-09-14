(ns tetris.core.game 
  (:require [cljs.math :as math]
            [tetris.core.board :as b]
            [tetris.core.piece :as p]))

(def Command
  [:enum
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
     [:full-rows [:set :int]]]]
   [:game-over
    [:map
     [:type [:= :game-over]]]]])

(def Settings
  [:map
   [:das :int]
   [:arr :int]
   [:dcd :int]
   [:sdf :int]
   [:lock-delay :int]])

(def Status
  [:enum :playing :paused :game-over])

(def State
  [:map
   [:settings Settings]
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

(defn- align-frames [x]
  (let [f 16.66]
    (* (math/floor (/ x f)) f)))

(defn calc-fall-speed
  {:malli/schema [:=> [:cat :int] number?]}
  [level]
  (align-frames (* (math/pow (- 0.8 (* (dec level) 0.007)) (dec level)) 1000)))

(defn- get-ghost-position [board piece row col]
  (letfn [(down [row]
            (if (b/collide? board (inc row) col piece)
              row
              (down (inc row))))]
    [(down row) col]))

(defn- update-ghost [state]
  (let [{:keys [board row col current]} state
        [ghost-row ghost-col] (get-ghost-position board current row col)]
    (assoc state :ghost {:row ghost-row :col ghost-col})))

(defn- move [state offset-row offset-col]
  (let [{:keys [board row col current]} state
        row' (+ row offset-row)
        col' (+ col offset-col)]
    (if (b/collide? board row' col' current)
      state
      (assoc state :row row' :col col'))))

(defn- rotate [state clockwise]
  (let [{:keys [board row col current]} state
        {:keys [kind dir]} current
        rotated (p/make-piece kind (p/rotate clockwise dir))]
    (if (b/collide? board row col rotated)
      state
      (assoc state :current rotated))))

(defn- lock-current-piece [state]
  (let [{:keys [board current row col]} state]
    (assoc state :board (b/lock-piece board current row col))))

(defn- clear-full-lines [state]
  (let [board (:board state)
        full-rows (b/find-full-rows board)
        has-clear? (seq full-rows)]
    (if has-clear?
      (-> (assoc state :board (b/clear-lines board))
          (update :events #(conj % {:type :line-clear
                                    :last-board board
                                    :full-rows (set full-rows)})))
      state)))

(defn- check-game-over [state]
  (let [{:keys [board current row col]} state]
    (if (b/lock-out? board current row col)
      (-> (assoc state :status :game-over)
          (update :events #(conj % {:type :game-over})))
      state)))

(defn- rand-piece [rand-range]
  (let [kind (p/rand-kind rand-range)
        dir (p/rand-dir rand-range)]
    (p/make-piece kind dir)))

(defn- spawn-piece [state]
  (-> (assoc state :current (:next state)
             :row (- b/hidden-rows)
             :col 3
             :next (rand-piece (:rand-range state)))
      (update :events #(conj % {:type :spawn-piece}))))

(defn- lock-and-advance [state]
  (let [state (-> state
                  lock-current-piece
                  clear-full-lines
                  check-game-over)]
    (if (= (:status state) :game-over)
      state
      (spawn-piece state))))

(defn- hard-drop [state]
  (let [{:keys [board row col current events]} state
        [ghost-row] (get-ghost-position board current row col)]
    (-> (assoc state
               :row ghost-row
               :events (conj events {:type :hard-drop
                                     :pos [ghost-row col]}))
        lock-and-advance)))

(defn can-down?
  {:malli/schema [:=> [:cat State] :boolean]}
  [state]
  (let [{:keys [board row col current]} state]
    (not (b/collide? board (inc row) col current))))

(defn calc-soft-drop-speed
  {:malli/schema [:=> [:cat State] number?]}
  [state]
  (align-frames (/ (calc-fall-speed (:level state))
                   (get-in state [:settings :sdf]))))

(defn initial-state [state rand-range]
  (-> {:settings {:das 167
                  :arr 32
                  :dcd 17
                  :sdf 6
                  :lock-delay 500}
       :level       2
       :board       (b/empty-board)
       :row         0
       :col         0
       :current     nil
       :next        (rand-piece rand-range)
       :ghost       nil
       :events      []
       :rand-range  rand-range
       :status      :playing}
      (merge state)
      (spawn-piece)
      (update-ghost)))

(defn handle-command
  {:malli/schema [:=> [:cat State Command] State]}
  [state command]
  (if (= (:status state) :playing)
    (-> (case command
          :move-down  (move state +1 0)
          :move-left  (move state 0 -1)
          :move-right (move state 0 +1)
          :rotate-cw  (rotate state :cw)
          :rotate-ccw (rotate state :ccw)
          :hard-drop  (hard-drop state)
          :lock       (lock-and-advance state)
          state)
        (update-ghost))
    state))
