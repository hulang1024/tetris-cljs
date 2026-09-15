(ns tetris.input.keyboard
  (:require [tetris.input.base :as input]))

(defn- key->button [button]
  ((keyword button) {:Enter :ok
                     :ArrowDown :soft-drop
                     :ArrowLeft :move-left
                     :ArrowRight :move-right
                     :ArrowUp :rotate-cw
                     :ControlRight :rotate-ccw
                     :ControlLeft  :rotate-ccw
                     :KeyH :hold
                     :Space :hard-drop}))

(defn handle-keyboard
  {:malli/schema [:=> [:cat input/InputState [:sequential :string]] input/InputState]}
  [input-state pressed-keys]
  (let [pressed-buttons (filter some? (map key->button pressed-keys))]
    (input/handle input-state (set pressed-buttons))))

