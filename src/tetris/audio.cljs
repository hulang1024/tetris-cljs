(ns tetris.audio
  (:require ["howler" :as howler]))

(def ^:private cached-sounds (atom {}))

(defn sound [id] (id @cached-sounds))

(defn play [id]
  (.play (sound (keyword id))))

(defn- log [s]
  (tap> (str "aduio - " s)))

(defn- effect-list []
  (for [name (into ["rotate" "land" "hard-drop" "lock" "hold" "fail"]
                   (map #(str "clear-" %) (range 1 7)))
        :let [id (keyword (str "effect/" name))
              src (str "assets/gameplay/effect/chiptune/" name ".ogg")]]
    [id src]))

(defn- sample-list [sample-type]
  (for [name (mapv #(str %) (range 1 29))
        :let [id (keyword (str "sample/" sample-type "-" name))
              src (str "assets/gameplay/sample/" sample-type "/" name ".ogg")]]
    [id src]))

(defn ui-list []
  (for [name ["menu-hover"
              "menu-enter"
              "menu-back"
              "gameplay"
              "screen-back"]
        :let [id (keyword name)
              src (str "assets/" name ".mp3")]]
    [id src]))

(defn load-sounds [sounds]
  (tap> "load sounds")
  (doseq [[id src] (filter #(not ((first %) @cached-sounds))
                           (if (= :all sounds)
                             (concat (effect-list)
                                     (sample-list "bass")
                                     (ui-list))
                             sounds))
          :let [sound (howler/Howl. (clj->js {:src [src]
                                              :volume 0.1}))]]
    (.once sound "load" (fn [_] (log (str "loaded: " id " -> " src))))
    (.on sound "play" (fn [_] (log (str "played: " id ))))
    (swap! cached-sounds assoc id sound)))
