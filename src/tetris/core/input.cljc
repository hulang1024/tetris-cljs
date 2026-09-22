(ns tetris.core.input)

(def Button
  [:enum
   :ok
   :soft-drop
   :move-left
   :move-right
   :rotate-cw
   :rotate-ccw
   :rotate-180
   :hard-drop
   :hold])

(def InputState
  [:map
   [:pressed-buttons [:vector Button]]
   [:just-pressed-buttons [:vector Button]]
   [::last-pressed-buttons [:vector Button]]])

(defn initial-state []
  {:pressed-buttons []
   :just-pressed-buttons []
   ::last-pressed-buttons []})

(defn handle
  {:malli/schema [:=> [:cat InputState [:vector some?]] InputState]}
  [input-state pressed-buttons]
  (let [just-pressed-buttons (vec (remove (set (::last-pressed-buttons input-state))
                                          pressed-buttons))]
    (assoc input-state
           :pressed-buttons pressed-buttons
           :just-pressed-buttons just-pressed-buttons
           ::last-pressed-buttons pressed-buttons)))

