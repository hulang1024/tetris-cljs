(ns tetris.core.input)

(def actions
  #{:soft-drop
    :move-left
    :move-right
    :rotate-cw
    :rotate-ccw
    :rotate-180
    :hard-drop
    :hold})

(def ActionButton (into [:enum] actions))

(def InputState
  [:map
   [:pressed-buttons [:vector :keyword]]
   [:just-pressed-buttons [:vector :keyword]]
   [::last-pressed-buttons [:vector :keyword]]])

(def initial-state
  {:pressed-buttons []
   :just-pressed-buttons []
   ::last-pressed-buttons []})

(def empty-state initial-state)

(defn handle
  {:malli/schema [:=> [:cat InputState [:vector some?]] InputState]}
  [input-state pressed-buttons]
  (let [just-pressed-buttons (vec (remove (set (::last-pressed-buttons input-state))
                                          pressed-buttons))]
    (assoc input-state
           :pressed-buttons pressed-buttons
           :just-pressed-buttons just-pressed-buttons
           ::last-pressed-buttons pressed-buttons)))

