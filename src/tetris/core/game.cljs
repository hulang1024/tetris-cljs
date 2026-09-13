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
     [:rows [:sequential :int]]]]])

(def State
  [:map
   [:settings   [:map
                 [:das :int]
                 [:arr :int]
                 [:dcd :int]
                 [:sdf :int]
                 [:lock-delay :int]]]
   [:level      :int]
   [:board      b/Board]
   [:row        :int]
   [:col        :int]
   [:current    p/Piece]
   [:next       p/Piece]
   [:ghost      [:map
                 [:row :int]
                 [:col :int]]]
   [:phase      [:maybe [:enum :hard-drop]]]
   [:events     [:vector Event]]
   [:status     [:enum :playing :paused :gameover]]])

(defn can-down? [state]
  (let [{:keys [board row col current]} state]
    (not (b/collide? board (inc row) col current))))

(defn- move-down [state]
  (if (and (not= (:phase state) :hard-drop)
           (can-down? state))
    (update state :row inc)
    state))

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

(defn- move-x [state vx]
  (let [{:keys [board row col current]} state
        col' (+ col vx)]
    (if (or (= (:phase state) :hard-drop)
            (b/collide? board row col' current))
      state
      (assoc state :col col'))))

(defn- try-rotate [state clockwise]
  (let [{:keys [board row col current]} state
        {:keys [kind dir]} current
        rotated (p/make-piece kind (p/rotate clockwise dir))]
    (if (or (= (:phase state) :hard-drop)
            (b/collide? board row col rotated))
      state
      (assoc state :current rotated))))

(defn- hard-drop [state]
  (let [{:keys [board row col current]} state
        [ghost-row] (get-ghost-position board current row col)]
    (assoc state
           :phase :hard-drop
           :row ghost-row
           :events (conj (:events state)
                         {:type :hard-drop
                          :pos [ghost-row col]}))))

(defn- clear-lines [state]
  (let [board (:board state)
        full-rows (b/find-full-rows board)
        has-clear? (seq full-rows)]
    (if has-clear?
      (-> (assoc state :board (b/clear-lines board))
          (update :events #(conj % {:type :line-clear :rows full-rows})))
      state)))

(defn- rand-piece [rand-range]
  (let [kind (p/rand-kind rand-range)
        dir (p/rand-dir rand-range)]
    (p/make-piece kind dir)))

(defn- spawn-piece [state]
  (-> (assoc state :current (:next state)
             :row 0
             :col 3
             :next (rand-piece (:rand-range state))
             :fall-timer 0
             :phase nil)
      (update :events #(conj % {:type :spawn-piece}))))

(defn- lock [state]
  (-> (assoc state
             :board (b/lock-piece (:board state)
                                  (:current state)
                                  (:row state)
                                  (:col state)))
      (clear-lines)
      (spawn-piece)))

(defn initial-state [state rand-range]
  (-> {:settings {:das 333
                  :arr 83
                  :dcd 333
                  :sdf 6
                  :lock-delay 500}
       :level       6
       :board       (b/empty-board)
       :row         0
       :col         3
       :current     nil
       :next        (rand-piece rand-range)
       :ghost       nil
       :phase       nil
       :events      []
       :rand-range  rand-range
       :status      :playing}
      (merge state)
      (spawn-piece)
      (update-ghost)))

(defn calc-fall-speed [level]
  (* (math/pow (- 0.8 (* (dec level) 0.007)) (dec level)) 1000))

(defn handle-command
  {:malli/schema [:=> [:cat State Command] State]}
  [state command]
  (if (= (:status state) :playing)
    (-> (case command
          :move-down  (move-down state)
          :move-left  (move-x state -1)
          :move-right (move-x state +1)
          :rotate-cw  (try-rotate state :cw)
          :rotate-ccw (try-rotate state :ccw)
          :hard-drop  (hard-drop state)
          :lock       (lock state)
          state)
        (update-ghost))
    state))
