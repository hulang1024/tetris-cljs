(ns core.input-test 
  (:require
    [clojure.test :refer [deftest is]]
    [tetris.core.input :as input]
    [core.input-test-util :as util]))

(deftest input-test
  (let [pressed-buttons-per-frame
        [[:move-left]
         []
         [:move-left]
         [:move-left :move-right]
         []
         [:move-right]
         []
         [:move-right]
         [:move-right]
         [:move-right]
         [:soft-drop]
         []
         []]

        expected-states-per-frame
        [[[:move-left] [:move-left]]
         [[] []]
         [[:move-left] [:move-left]]
         [[:move-left :move-right] [:move-right]]
         [[] []]
         [[:move-right] [:move-right]]
         [[] []]
         [[:move-right] [:move-right]]
         [[:move-right] []]
         [[:move-right] []]
         [[:soft-drop] [:soft-drop]]
         [[] []]
         [[] []]]

        actual-states-per-frame
        (->> (util/reduce-input (input/initial-state) pressed-buttons-per-frame)
             (map #(vector (:pressed-buttons %) (:just-pressed-buttons %))))]

    (is (= expected-states-per-frame actual-states-per-frame))))
