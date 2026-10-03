(ns tetris.core.replay
  (:require [clojure.string :as str]
            [clojure.set :as set]
            [tetris.core.input :as input]))

(defn append-records [records frame pressed-buttons]
  (if (seq pressed-buttons)
    (conj records [frame pressed-buttons])
    records))

(defn make-replayer [records]
  {:frame 0
   :records records
   :input-state (input/initial-state)})

(defn step [replayer]
  (let [{:keys [records input-state]} replayer
        frame (inc (:frame replayer))
        step-records (filter #(>= frame (first %)) records)
        frame-input-states (if (seq step-records)
                             (drop 1 (reduce
                                       (fn [xs [frame pressed-buttons]]
                                         (conj xs
                                               [frame
                                                (input/handle (second (last xs))
                                                              pressed-buttons)]))
                                       [[frame input-state]]
                                       step-records))
                             [[frame (input/handle input-state [])]])]
    [frame-input-states
     (assoc replayer
            :frame frame
            :records (drop (count step-records) records)
            :input-state (second (last frame-input-states)))]))

(def ^:private encode-command-map
  {:fall :f
   :move-down :d
   :move-left :l
   :move-right :r
   :rotate-cw :c
   :rotate-ccw :C
   :hard-drop :h
   :lock :L
   :spawn :s
   :hold :H})

(defn records->url [records]
  (->> records
       (map #(str (first %) "-" (name ((second %) encode-command-map))))
       (str/join ",")))

(defn url->records [url]
  (if (seq url)
    (let [command-map (set/map-invert encode-command-map)]
      (->> (str/split url ",")
           (map #(str/split % "-"))
           (map #(vector (parse-long (first %))
                         ((keyword (second %)) command-map)))))
    []))
