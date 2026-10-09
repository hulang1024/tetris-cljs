(ns tetris.replay.codec)

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
