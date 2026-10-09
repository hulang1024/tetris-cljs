(ns tetris.input.keyboard
  (:require
    [tetris.core.input :as input]))

(def pressed-keys (atom []))

(defn- on-key-event [event pressed?]
  (let [key (.-code event)]
    (swap! pressed-keys
           (fn [keys]
             (if pressed?
               (if (some #{key} keys)
                 keys
                 (conj keys key))
               (filterv #(not= key %) keys))))))

(defn- on-key-down [event] (on-key-event event true))
(defn- on-key-up [event] (on-key-event event false))

(defn init []
  (reset! pressed-keys [])
  (.removeEventListener js/window "keydown" on-key-down)
  (.removeEventListener js/window "keyup" on-key-up)
  (.addEventListener js/window "keydown" on-key-down)
  (.addEventListener js/window "keyup" on-key-up))

(defn- key->button [button]
  (get {:ArrowDown    :soft-drop
        :ArrowLeft    :move-left
        :ArrowRight   :move-right
        :ArrowUp      :rotate-cw
        :KeyK         :soft-drop
        :KeyJ         :move-left
        :KeyL         :move-right
        :Space        :hard-drop
        :ControlRight :rotate-ccw
        :ControlLeft  :rotate-ccw
        :KeyZ         :rotate-ccw
        :KeyX         :rotate-cw
        :KeyV         :rotate-180
        :KeyC         :hold
        :ShiftRight   :hold
        :ShiftLeft    :hold}
       (keyword button)
       (keyword button)))

(defn key->buttons [keys]
  (filterv some? (map key->button keys)))

(def state (atom input/initial-state))

(defn handle [pressed-buttons]
  (reset! state (input/handle @state pressed-buttons)))
