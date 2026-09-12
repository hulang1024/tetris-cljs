(ns tetris.core.game 
  (:require [cljs.math :as math]
            [tetris.core.board :as b]
            [tetris.core.piece :as p]
            [tetris.core.input :as input]))

(def State
  [:map
   [:level      :int]
   [:board      b/Board]
   [:row        :int]
   [:col        :int]
   [:current    p/Piece]
   [:next       p/Piece]
   [:fall-timer :float]
   [:status     [:enum :playing :paused :gameover]]])

(def Event
  [:enum
   :move-down
   :move-left
   :move-right
   :rotate-cw
   :rotate-ccw
   :hard-drop
   :lock
   :spawn])

(defn rand-spawn-piece [rand-range]
  (let [kind (p/rand-kind rand-range)
        dir (p/rand-dir rand-range)]
    (p/make-piece kind dir)))

(defn initial-state [rand-range]
  {:level      1
   :board      (b/empty-board)
   :row        0
   :col        3
   :current    (rand-spawn-piece rand-range)
   :next       (rand-spawn-piece rand-range)
   :fall-timer 0
   :status     :playing})

(defn- try-move-down [state]
  (update state :row inc))

(defn- try-move-x [state vx]
  (update state :col (partial + vx)))

(defn- try-rotate [state clockwise]
  (let [{:keys [kind dir]} (:current state)
        rotated (p/make-piece kind (p/rotate clockwise dir))]
    (assoc state :current rotated)))

(defn- hard-drop [state]
  (assoc state :row (dec b/board-rows)))

(defn- lock-and-next [state]
  state)

(defn- calc-fall-speed [level]
  (* (math/pow (- 0.8 (* (dec level) 0.007)) (dec level)) 1000))

(defn handle-event
  {:malli/schema [:=> [:cat State Event] State]}
  [state event]
  (case event
    :move-down  (try-move-down state)
    :move-left  (try-move-x state -1)
    :move-right (try-move-x state +1)
    :rotate-cw  (try-rotate state :cw)
    :rotate-ccw (try-rotate state :ccw)
    :hard-drop  (hard-drop state)
    :lock       (lock-and-next state)
    state))

(defn- apply-gravity [state delta-ms]
  (let [t (+ (:fall-timer state) delta-ms)]
    (if (>= t (calc-fall-speed (:level state)))
      (-> state
          (assoc :fall-timer 0)
          (handle-event :move-down))
      (assoc state :fall-timer t))))

(defn tick
  {:malli/schema [:=> [:cat State input/InputState :float] State]}
  [state input delta-ms]
  (let [{:keys [pressed-buttons just-pressed-buttons]} input]
    (-> (cond
          (contains? pressed-buttons :soft-drop) (handle-event state :move-down)
          (contains? pressed-buttons :move-left) (handle-event state :move-left)
          (contains? pressed-buttons :move-right) (handle-event state :move-right)
          (contains? pressed-buttons :hard-drop) (handle-event state :hard-drop)
          (contains? just-pressed-buttons :rotate-cw) (handle-event state :rotate-cw)
          (contains? just-pressed-buttons :rotate-ccw) (handle-event state :rotate-ccw)
          :else state)
        (apply-gravity delta-ms))))
