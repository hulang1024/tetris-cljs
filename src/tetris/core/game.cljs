(ns tetris.core.game 
  (:require [cljs.math :as math]
            [tetris.core.board :as b]
            [tetris.core.piece :as p]
            [tetris.core.input :as input]))

(def PhaseTag
  [:enum :hard-drop :clear-lines])

(def Phase
  [:or
   PhaseTag
   [:tuple PhaseTag map?]])

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
   [:phase      [:maybe Phase]]
   [:status     [:enum :playing :paused :gameover]]])

(def Event
  [:enum
   :move-down
   :move-left
   :move-right
   :rotate-cw
   :rotate-ccw
   :hard-drop
   :lock])

(defn rand-piece [rand-range]
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
   :piece-count 1
   :current     (rand-piece rand-range)
   :next        (rand-piece rand-range)
   :fall-timer  0
   :lock-timer  0
   :phase       nil
   :rand-range  rand-range
   :status      :playing})

(defn- can-down? [state]
  (let [{:keys [board row col current]} state
        row' (inc row)]
    (not (b/collide? board row' col current))))

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
      (assoc state' :phase :hard-drop)
      (hard-drop state'))))

(defn- calc-fall-speed [level]
  (* (math/pow (- 0.8 (* (dec level) 0.007)) (dec level)) 1000))

(defn- lock-and-next [state]
  (let [board (b/lock-piece (:board state)
                            (:current state)
                            (:row state)
                            (:col state))
        full-lines (b/full-lines board)
        full-lines? (seq full-lines)]
    (assoc state
           :full-lines full-lines
           :board (if full-lines? (b/clear-lines board) board)
           :current (:next state)
           :row 0
           :col 3
           :next (rand-piece (:rand-range state))
           :piece-count (inc (:piece-count state))
           :fall-timer 0
           :phase (when full-lines?
                    [:clear-lines {:lines full-lines}]))))

(defn handle-event
  {:malli/schema [:=> [:cat State Event] State]}
  [state event]
  (if (= (:status state) :playing)
    (case event
      :move-down  (try-move-down state)
      :move-left  (try-move-x state -1)
      :move-right (try-move-x state +1)
      :rotate-cw  (try-rotate state :cw)
      :rotate-ccw (try-rotate state :ccw)
      :hard-drop  (hard-drop state)
      :lock       (lock-and-next state)
      state)
    state))

(defn handle-ok [state]
  (update state
          :status #(case %
                     :playing :paused
                     :paused :playing
                     state)))

(defn- start-lock-timer [state delta-ms]
  (if (not= (:phase state) :hard-drop)
    (let [t (+ (:lock-timer state) delta-ms)]
      (if (>= t (get-in state [:settings :lock-delay]))
        (-> (handle-event state :lock)
            (assoc :lock-timer 0))
        (assoc state :lock-timer t)))
    (handle-event state :lock)))

(defn- apply-gravity [state delta-ms]
  (let [t (+ (:fall-timer state)
             (if (= (:status state) :playing) delta-ms 0))]
    (if (>= t (calc-fall-speed (:level state)))
      (if (can-down? state)
        (-> state
            (assoc :fall-timer 0)
            (handle-event :move-down))
        (start-lock-timer state delta-ms))
      (assoc state :fall-timer t))))

(defn tick
  {:malli/schema [:=> [:cat State input/InputState :float] State]}
  [state input delta-ms]
  (let [{:keys [pressed-buttons just-pressed-buttons]} input]
    (-> (cond
          (contains? just-pressed-buttons :soft-drop)  (handle-event state :move-down)
          (contains? just-pressed-buttons :move-left)  (handle-event state :move-left)
          (contains? just-pressed-buttons :move-right) (handle-event state :move-right)
          (contains? just-pressed-buttons :hard-drop)  (handle-event state :hard-drop)
          (contains? just-pressed-buttons :rotate-cw)  (handle-event state :rotate-cw)
          (contains? just-pressed-buttons :rotate-ccw) (handle-event state :rotate-ccw)
          (contains? just-pressed-buttons :ok) (handle-ok state)
          :else state)
        (apply-gravity delta-ms))))
