(ns tetris.audio
  (:require ["howler" :as howler]))

(def sounds (atom {}))

(defn sound [id] (id @sounds))

(defn- log [s]
  (tap> (str "aduio - " s)))

(defn- effect-list []
  (for [name (into ["rotate" "land" "hard-drop" "lock" "hold"]
                   (map #(str "clear-" %) (range 1 7)))
        :let [id (keyword (str "effect/" name))
              src (str "assets/gameplay/effect/chiptune/" name ".ogg")]]
    [id src]))

(defn- sample-list [sample-type]
  (for [name (mapv #(str %) (range 1 29))
        :let [id (keyword (str "sample/" sample-type "-" name))
              src (str "assets/gameplay/sample/" sample-type "/" name ".ogg")]]
    [id src]))

(defn load-sounds []
  (tap> "load sounds")
  (doseq [[id src] (concat (effect-list) (sample-list "bass"))
          :let [sound (howler/Howl. (clj->js {:src [src]
                                              :volume 0.1}))]]
    (.once sound "load" (fn [_] (log (str "loaded: " id " -> " src))))
    (.on sound "play" (fn [_] (log (str "played: " id ))))
    (swap! sounds assoc id sound)))
