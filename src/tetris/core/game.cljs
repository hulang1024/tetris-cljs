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
   [:fall-timer :float]
   [:lock-timer :float]
   [:phase      [:maybe [:enum :hard-drop]]]
   [:events     [:vector Event]]
   [:status     [:enum :playing :paused :gameover]]])

(defn- rand-piece [rand-range]
  (let [kind (p/rand-kind rand-range)
        dir (p/rand-dir rand-range)]
    (p/make-piece kind dir)))

(defn initial-state [rand-range]
  {:settings {:das 333
              :arr 83
              :dcd 333
              :sdf 6
              :lock-delay 500}
   :level       6
   :board       (b/empty-board)
   :row         0
   :col         3
   :current     (rand-piece rand-range)
   :next        (rand-piece rand-range)
   :fall-timer  0
   :lock-timer  0
   :phase       nil
   :events      [{:type :spawn-piece}]
   :rand-range  rand-range
   :status      :playing})

(defn can-down? [state]
  (let [{:keys [board row col current]} state
        row' (inc row)]
    (not (b/collide? board row' col current))))

(defn calc-fall-speed [level]
  (* (math/pow (- 0.8 (* (dec level) 0.007)) (dec level)) 1000))

(defn- try-move-down [state]
  (if (and (not= (:phase state) :hard-drop)
           (can-down? state))
    (update state :row inc)
    state))

(defn- try-move-x [state vx]
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
  (let [state' (try-move-down state)]
    (if (= state state')
      (assoc state'
             :phase :hard-drop
             :events (conj (:events state)
                           {:type :hard-drop
                            :pos [(:row state) (:col state)]}))
      (hard-drop state'))))

(defn- lock-and-next [state]
  (let [board (b/lock-piece (:board state)
                            (:current state)
                            (:row state)
                            (:col state))
        full-rows (b/find-full-rows board)
        has-clear? (seq full-rows)]
    (-> (assoc state
               :board (if has-clear? (b/clear-lines board) board))
        (update :events
                (if has-clear?
                  #(conj % {:type :line-clear :rows full-rows})
                  identity))
        (assoc :current (:next state)
               :row 0
               :col 3
               :next (rand-piece (:rand-range state))
               :fall-timer 0
               :phase nil)
        (update :events #(conj % {:type :spawn-piece})))))

(defn handle-command
  {:malli/schema [:=> [:cat State Command] State]}
  [state command]
  (if (= (:status state) :playing)
    (case command
      :move-down  (try-move-down state)
      :move-left  (try-move-x state -1)
      :move-right (try-move-x state +1)
      :rotate-cw  (try-rotate state :cw)
      :rotate-ccw (try-rotate state :ccw)
      :hard-drop  (hard-drop state)
      :lock       (lock-and-next state)
      state)
    state))
