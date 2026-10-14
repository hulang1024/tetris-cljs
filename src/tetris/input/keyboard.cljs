(ns tetris.input.keyboard
  (:require
    [tetris.core.input :as input]
    [tetris.options-store :as options-store]))

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

(defn- key->button [key]
  (let [buttons (filter
                  (fn [[_ buttons]]
                    (contains?
                      (->> buttons
                           (filter #(= (:type %) :keyboard))
                           (map :button)
                           (set))
                      key))
                  (:controls @options-store/options))]
    (first (first buttons))))

(defn key->buttons [keys]
  (filterv some? (map key->button keys)))

(def state (atom input/initial-state))

(defn handle [pressed-buttons]
  (reset! state (input/handle @state pressed-buttons)))
