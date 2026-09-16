(ns tetris.resources
  (:require-macros [shadow.cljs.modern :refer [defclass]])
  (:require ["excalibur" :as ex]))

(defn- get-tetr-sources [skin-name]
  (let [->url #(str "skins/" skin-name "/tetr/" (name %) ".png")]
    (into {}
          (map (fn [t] [t (ex/ImageSource. (->url t) #js {:filtering ex/ImageFiltering.Pixel})])
               [:z :l :o :s :i :j :t]))))

(def resources
  {:tetr (get-tetr-sources "basic")})

(defclass SilentLoader (extends ex/DefaultLoader)
  (constructor [this]
    (super))
  Object
  (onDraw [this _ctx])
  (onUserAction [this]
    (js/Promise.resolve)))

(def ^js loader (SilentLoader.))

(defn- add-resources! [sources]
  (run! #(.addResource ^js loader %) sources))

(add-resources! (vals (:tetr resources)))
