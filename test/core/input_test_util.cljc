(ns core.input-test-util 
  (:require
    [tetris.core.input :as input]))

(defn reduce-input [initial-state pressed-buttons-per-frame] 
  (drop 1
        (reduce (fn [states pressed-buttons]
                  (conj states (input/handle (last states) pressed-buttons)))
                [initial-state]
                pressed-buttons-per-frame)))
