(ns tetris.input.base 
  (:require [clojure.set :as set]))

(def Button
  [:enum
   :ok
   :soft-drop
   :move-left
   :move-right
   :rotate-cw
   :rotate-ccw
   :hard-drop
   :hold])

(def InputState
  [:map
   [:pressed-buttons [:set Button]]
   [:last-pressed-buttons [:set Button]]
   [:just-pressed-buttons [:set Button]]])

(defn initial-state []
  {:pressed-buttons #{}
   :last-pressed-buttons #{}
   :just-pressed-buttons #{}})

(defn handle
  {:malli/schema [:=> [:cat InputState [:set some?]] InputState]}
  [input-state pressed-buttons]
  (let [just-pressed-buttons (set/difference pressed-buttons
                                             (:last-pressed-buttons input-state))]
    (assoc input-state
           :pressed-buttons pressed-buttons
           :last-pressed-buttons pressed-buttons
           :just-pressed-buttons just-pressed-buttons)))

