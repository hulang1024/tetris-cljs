(ns tetris.options-store)

(def Handling
  [:map
   [:das [:int {:min 0}]]
   [:arr [:int {:min 0}]]
   [:sdf [:int {:min 1}]]])

(def Button
  [:map
   [:type [:enum :keyboard :mouse :gamepad]]
   [:button :string]])

(def ButtonSlots [:vector [:maybe Button]])

(def Controls
  [:map
   [:soft-drop ButtonSlots] 
   [:move-left ButtonSlots] 
   [:move-right ButtonSlots] 
   [:rotate-cw ButtonSlots] 
   [:rotate-ccw ButtonSlots] 
   [:rotate-180 ButtonSlots] 
   [:hard-drop ButtonSlots] 
   [:hold ButtonSlots]])

(def Options
  [:map
   [:handling Handling]
   [:controls Controls]])

(def default-options
  {:handling {:das 8
              :arr 2
              :sdf 8}
   :controls {:soft-drop  [{:type :keyboard :button "ArrowDown"}]
              :move-left  [{:type :keyboard :button "ArrowLeft"}
                           {:type :keyboard :button "Num4"}]
              :move-right [{:type :keyboard :button "ArrowRight"}
                           {:type :keyboard :button "Num6"}]
              :rotate-cw  [{:type :keyboard :button "KeyX"}
                           {:type :keyboard :button "ArrowUp"}]
              :rotate-ccw [{:type :keyboard :button "KeyZ"}
                           {:type :keyboard :button "ControlLeft"}]
              :rotate-180 [{:type :keyboard :button "KeyV"}]
              :hard-drop  [{:type :keyboard :button "Space"}]
              :hold       [{:type :keyboard :button "KeyC"}
                           {:type :keyboard :button "ShiftLeft"}]}})

(defn slotify-controls [controls]
  (reduce-kv
    (fn [m k v]
      (assoc m k (vec (take 3 (into v (repeat 2 nil))))))
    {}
    controls))

(defn- read-options []
  (let [object (js/JSON.parse (js/localStorage.getItem "tetris"))]
    (if object
      (-> (js->clj object {:keywordize-keys true})
          (update :controls
                  (fn [cs]
                    (update-vals 
                      cs
                      (fn [v]
                        (mapv #(when % (update % :type keyword)) v))))))
      default-options)))

(def options (atom (read-options)))

(defn get-options
  {:malli/schema [:function
                  [:=> [:cat] Options]
                  [:=> [:cat [:enum :handling :controls]] [:or Handling Controls]]]}
  ([] (read-options))
  ([category] (get (read-options) category)))

(defn save-options!
  {:malli/schema [:=> [:cat [:enum :handling :controls]
                       [:or Handling Controls]] Options]}
  [category sub-options]
  (let [opts (assoc (get-options) category sub-options)
        json (js/JSON.stringify (clj->js opts))]
    (js/localStorage.setItem "tetris" json)
    (reset! options opts)))
