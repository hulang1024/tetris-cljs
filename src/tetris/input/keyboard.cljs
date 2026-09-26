(ns tetris.input.keyboard
  (:require [tetris.core.input :refer [handle InputState]]))

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

(defn init []
  (reset! pressed-keys [])
  (set! (.-onkeydown js/window) #(on-key-event % true))
  (set! (.-onkeyup js/window) #(on-key-event % false)))

(defn- key->button [button]
  ((keyword button) {:ArrowDown    :soft-drop
                     :ArrowLeft    :move-left
                     :ArrowRight   :move-right
                     :ArrowUp      :rotate-cw
                     :Space        :hard-drop
                     :ControlRight :rotate-ccw
                     :ControlLeft  :rotate-ccw
                     :KeyZ         :rotate-cw
                     :KeyX         :rotate-ccw
                     :KeyV         :rotate-180
                     :KeyC         :hold
                     :ShiftRight   :hold
                     :ShiftLeft    :hold
                     :Enter :ok 
                     :Esc :ok}))

(defn handle-keyboard
  {:malli/schema [:=> [:cat InputState [:sequential :string]] InputState]}
  [input-state pressed-keys]
  (let [pressed-buttons (filterv some? (map key->button pressed-keys))]
    (handle input-state pressed-buttons)))

