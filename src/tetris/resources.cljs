(ns tetris.resources
  (:require ["excalibur" :as ex]))

(defn- get-tetr-sources [skin-name]
  (let [->url #(str "skins/" skin-name "/tetr/" (name %) ".png")]
    (into {}
          (map (fn [t] [t (ex/ImageSource. (->url t))])
               [:z :l :o :s :i :j :t]))))

(def resources
  {:tetr (get-tetr-sources "basic")})

(def loader (ex/Loader.))

(defn- add-resources! [sources]
  (run! #(.addResource loader %) sources))

(add-resources! (vals (:tetr resources)))
