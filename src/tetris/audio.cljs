(ns tetris.audio
  (:require ["howler" :as howler]))

(def sounds (atom {}))

(defn sound [id] (id @sounds))

(defn- log [s]
  (tap> (str "aduio - " s)))

(defn load-sounds []
  (tap> "load sounds")
  (doseq [name ["rotate" "land" "hard-drop" "lock" "hold" "clear-1"]
          :let [id (keyword (str "effect/" name))
                src (str "assets/gameplay/effect/chiptune/" name ".ogg")
                sound (howler/Howl. (clj->js {:src [src]
                                              :volume 0.1}))]]
    (.once sound "load" (fn [_] (log (str src " loaded"))))
    (.on sound "play" (fn [_] (log (str id " played"))))
    (swap! sounds assoc id sound)))
