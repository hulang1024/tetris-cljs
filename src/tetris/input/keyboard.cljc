(ns tetris.input.keyboard
  (:require [tetris.core.input :refer [handle InputState]]))

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

