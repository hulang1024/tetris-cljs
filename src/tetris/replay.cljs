(ns tetris.replay
  (:require [clojure.string :as str]
            [clojure.set :as set]))

(defn make-recorder [records] (atom records))

(defn records [recorder] @recorder)

(defn make-recorder-command-handler [recorder] 
  (fn [command game-state]
    (swap! recorder conj [(:frame game-state) command])))

(defn make-replayer [records]
  {:frame 0
   :records records})

(defn step [replayer]
  (let [frame (inc (:frame replayer))
        records (:records replayer)
        commands (map second (filter #(>= frame (first %)) records))]
    [(assoc replayer
            :frame frame
            :records (drop (count commands) records))
     commands]))

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
