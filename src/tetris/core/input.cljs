(ns tetris.core.input 
  (:require [clojure.set :as set]))

(def Button
  [:enum
   :ok
   :soft-drop
   :move-left
   :move-right
   :rotate-cw
   :rotate-ccw
   :hard-drop])

(def InputState
  [:map
   [:pressed-buttons [:set Button]]
   [:last-pressed-buttons [:set Button]]
   [:just-pressed-buttons [:set Button]]])

(defn initial-state []
  {:pressed-buttons #{}
   :last-pressed-buttons #{}
   :just-pressed-buttons #{}})

(defn- key->button [button]
  ((keyword button) {:Enter :ok
                     :ArrowDown :soft-drop
                     :ArrowLeft :move-left
                     :ArrowRight :move-right
                     :ArrowUp :rotate-cw
                     :ControlRight :rotate-ccw
                     :Space :hard-drop}))

(defn handle-keyboard
  {:malli/schema [:=> [:cat InputState [:sequential :string]] InputState]}
  [input-state pressed-keys]
  (let [pressed-buttons (set (filter some? (map key->button pressed-keys)))
        just-pressed-buttons (set/difference pressed-buttons
                                             (:last-pressed-buttons input-state))]
    (assoc input-state
           :pressed-buttons pressed-buttons
           :last-pressed-buttons pressed-buttons
           :just-pressed-buttons just-pressed-buttons)))
