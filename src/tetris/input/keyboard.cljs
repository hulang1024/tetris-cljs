(ns tetris.input.keyboard
  (:require [tetris.input.base :as input]))

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
                     :KeyC         :hold
                     :ShiftRight   :hold
                     :ShiftLeft    :hold
                     :Enter :ok 
                     :Esc :ok}))

(defn handle-keyboard
  {:malli/schema [:=> [:cat input/InputState [:sequential :string]] input/InputState]}
  [input-state pressed-keys]
  (let [pressed-buttons (filter some? (map key->button pressed-keys))]
    (input/handle input-state (set pressed-buttons))))

