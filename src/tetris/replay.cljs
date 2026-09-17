(ns tetris.replay)

(defn make-recorder [] (atom []))

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
