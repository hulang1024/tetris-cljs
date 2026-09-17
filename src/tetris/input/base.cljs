(ns tetris.input.base)

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
   [:pressed-buttons [:sequential Button]]
   [:last-pressed-buttons [:sequential Button]]
   [:just-pressed-buttons [:sequential Button]]])

(defn initial-state []
  {:pressed-buttons []
   :last-pressed-buttons []
   :just-pressed-buttons []})

(defn handle
  {:malli/schema [:=> [:cat InputState [:sequential some?]] InputState]}
  [input-state pressed-buttons]
  (let [just-pressed-buttons (remove (set (:last-pressed-buttons input-state))
                                     pressed-buttons)]
    (assoc input-state
           :pressed-buttons pressed-buttons
           :last-pressed-buttons pressed-buttons
           :just-pressed-buttons just-pressed-buttons)))

