(ns core.tick-test 
  (:require
    [clojure.test :refer [deftest is]]
    [core.input-test-util :as util]
    [tetris.core.game :as game]
    [tetris.core.input :as input]
    [tetris.core.ruleset.classic :refer [classic-ruleset]]
    [tetris.core.tick :as tick]))

(deftest tick-test
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

        expected-frame->action-per-frame
        [[1 :move-left]
         []]

        actual-frame->action-per-frame (atom [])

        mock-command-handler
        (fn [state command]
          (swap! actual-frame->action-per-frame conj [(:frame state) command])
          state)

        _ (reduce (fn [state input]
                    (tick/step state input mock-command-handler))
                  (merge (game/initial-state (tick/initial-state classic-ruleset)))
                  (util/reduce-input (input/initial-state) pressed-buttons-per-frame))]
    (is (= expected-frame->action-per-frame @actual-frame->action-per-frame))))
