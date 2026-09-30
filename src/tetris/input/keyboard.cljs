(ns tetris.input.keyboard
  (:require [tetris.core.input :as input :refer [handle InputState]]))

(def ^:private pressed-keys (atom []))

(defn- on-key-event [event pressed?]
  (let [key (.-code event)]
    (swap! pressed-keys
           (fn [keys]
             (if pressed?
               (if (some #{key} keys)
                 keys
                 (conj keys key))
               (filterv #(not= key %) keys))))))

(defn init []
  (reset! pressed-keys [])
  (set! (.-onkeydown js/window) #(on-key-event % true))
  (set! (.-onkeyup js/window) #(on-key-event % false)))

(defn- key->button [button]
  ((keyword button) {:ArrowDown    :soft-drop
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
                     :ShiftLeft    :hold
                     :Enter :ok 
                     :Esc :ok}))

(def keyboard-state (atom (input/initial-state)))

(defn- read-raw! []
  (let [pressed-buttons (filterv some? (map key->button @pressed-keys))]
    (swap! keyboard-state handle pressed-buttons)))

(defn pressed-buttons []
  (read-raw!)
  (:pressed-buttons @keyboard-state))

(defn just-pressed-buttons []
  (read-raw!)
  (:just-pressed-buttons @keyboard-state))

