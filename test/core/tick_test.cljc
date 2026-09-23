(ns core.tick-test 
  (:require
    [clojure.pprint :refer [print-table]]
    [clojure.test :refer [deftest is testing]]
    [core.input-test-util :as util]
    [tetris.core.game :as game]
    [tetris.core.input :as input]
    [tetris.core.ruleset.pgen-seq :as pgen-seq]
    [tetris.core.ruleset.rotation-nrs :as nrs]
    [tetris.core.ruleset.classic]
    [tetris.core.tick :as tick]))

(def debug? false)

(defn- test-tick [ruleset pressed-buttons-per-frame expected-command-per-frame]
  (let [initial-state (-> ruleset
                          (tick/initial-state)
                          (game/initial-state))
        frame-snapshots (atom {0 initial-state})
        mock-command-handler (fn [state command]
                               (let [state (assoc state :command command)]
                                 (swap! frame-snapshots
                                        assoc (:frame state) state)
                                 state))
        inputs (util/reduce-input (input/initial-state) pressed-buttons-per-frame)
        _ (reduce (fn [state input]
                    (let [state (-> (dissoc state :command)
                                    (tick/step input mock-command-handler))]
                      (swap! frame-snapshots
                             assoc (:frame state) (assoc state :input input))
                      state))
                  initial-state
                  inputs)
        actual-command-per-frame (->> (vals @frame-snapshots)
                                      (filter :command)
                                      (map #(vector (:frame %) (:command %))))]
    (is (= expected-command-per-frame actual-command-per-frame))
    (vals @frame-snapshots)))

(defn- print-frame-snapshots [frame-snapshots]
  (when debug?
    (print-table [:frame :pressed-buttons :just-pressed-buttons
                  :das-button :das-timer :arr-timer :command]
                 (map
                   (fn [snapshot]
                     (let [{::tick/keys [das-button das-timer arr-timer]} snapshot
                           {:keys [pressed-buttons just-pressed-buttons]} (:input snapshot)]
                       (assoc snapshot 
                              :das-button das-button
                              :das-timer das-timer
                              :arr-timer arr-timer
                              :pressed-buttons pressed-buttons
                              :just-pressed-buttons just-pressed-buttons)))
                   frame-snapshots))))

(deftest tick-test
  (testing "Delay Auto Shift & Auto Repeat Rate"
    (let [das 6
          arr 2
          test-ruleset {:ruleset :classic
                        :rotation-system {:type :nrs
                                          :piece-shapes nrs/nes-piece-shapes}
                        :piece-generator (pgen-seq/make-piece-generator)
                        :preview-count 1
                        :ghost-enabled? false
                        :hold-enabled? false
                        :hard-drop-enabled? false
                        :rotate-180-enabled? false
                        :das das
                        :arr arr
                        :dcd 16
                        :sdf 2}
          pressed-buttons-per-frame
          (concat [[]]
                  [[:move-right]]
                  [[]]
                  (repeat das [:move-right])
                  (repeat (* arr 3) [:move-right])
                  [[:move-right]]
                  [[:move-right :move-left]]
                  [[:move-right :move-left]]
                  [[:move-right :move-left]]
                  [[:soft-drop]])]
      (let [frame-snapshots
            (test-tick
              (assoc test-ruleset :das-cancel-on-direction-change? false)
              pressed-buttons-per-frame
              [[2 :move-right]
               [4 :move-right]  ; 遵循按下就会响应，进入DAS阶段之前移动一次
               [10 :move-right] ; DAS充能完成，立即移动一次
               [12 :move-right] ; ARR 1充能完成
               [14 :move-right] ; ARR 2充能完成
               [16 :move-right] ; ARR 3充能完成
               [17 :move-left]
               [19 :move-left]
               [20 :move-down]])]
        (print-frame-snapshots frame-snapshots))
      (let [frame-snapshots
            (test-tick
              (assoc test-ruleset :das-cancel-on-direction-change? true)
              pressed-buttons-per-frame
              [[2 :move-right]
               [4 :move-right]
               [10 :move-right]
               [12 :move-right]
               [14 :move-right]
               [16 :move-right]
               [17 :move-left]
               [20 :move-down]])]
        (print-frame-snapshots frame-snapshots)))))
