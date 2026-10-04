(ns tetris.core.replay
  (:require [clojure.math :as math]
            [tetris.core.input :as input]))

(defn make-recorder [] [])

(defn append-record [recorder frame pressed-buttons]
  (let [pressed-actions (filterv #(contains? input/actions %) pressed-buttons)]
    (if (seq pressed-actions)
      (conj recorder [frame pressed-actions])
      recorder)))

(defn ->input-states [records]
  (let [xs (reduce
             (fn [xs n]
               (let [[records input] (last xs)
                     [frame pressed-buttons] (first records)]
                 (conj xs [(if (= n frame) (rest records) records)
                           (input/handle input
                                         (if (= n frame) pressed-buttons []))])))
             [[records input/initial-state]]
             (range (inc (first (last records)))))]
    (vec (drop 1 (map second xs)))))

(defn make-replayer [recorder]
  {:current 0 ; 当前(逻辑)帧号
   :last 0
   :delta 1   ; 增量(1/8 1/4 1/2 1 2 4 8)，实现回放速率
   :acc 0
   :inputs (->input-states recorder)
   :last-input input/empty-state})

(defn adjust-delta [replayer v]
  (assoc replayer :delta (max (min v 8) (/ 1 8))))

(defn start [replayer]
  (assoc replayer :current 0 :acc 0))

(defn current-changed? [replayer]
  (not= (:current replayer) (:last replayer)))

(defn step [replayer]
  (let [{:keys [current delta acc inputs]} replayer
        acc (+ acc delta)
        step-frames (int (math/floor acc))
        acc' (- acc step-frames)
        step-inputs (if (>= current (count inputs))
                      [input/empty-state]
                      (vec (take step-frames (drop current inputs))))]
    [step-inputs
     (assoc replayer
            :last current
            :current (+ current step-frames)
            :acc acc'
            :last-input (or (last step-inputs) (:last-input replayer)))]))
