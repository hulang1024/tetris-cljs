(ns tetris.core.tick-test 
  (:require
    [clojure.pprint :refer [pprint print-table]]
    [clojure.test :refer [deftest is testing]]
    [tetris.core.input-test-util :as util]
    [tetris.core.game :as game]
    [tetris.core.input :as input]
    [tetris.core.ruleset.rotation-nrs]
    [tetris.core.ruleset.pgen-seq :as pgen-seq]
    [tetris.core.ruleset.scoring-nes]
    [tetris.core.ruleset.classic]
    [tetris.core.tick :as tick]
    [tetris.core.ruleset :as ruleset]
    [tetris.core.ruleset.scoring-nes :as scoring-nes]))

(def ^:dynamic *debug?* false)

(defn- test-frames [ruleset pressed-buttons-per-frame expected-command-per-frame]
  (let [initial-state (-> (tick/initial-state ruleset)
                          (game/initial-state))
        inputs (util/reduce-input input/initial-state
                                  (cons [[]] pressed-buttons-per-frame))

        [frame-snapshots _]
        (reduce (fn [[frame-snapshots state] input]
                  (let [state (tick/step state input)
                        frame (:frame state)]
                    (when *debug?*
                      (println (str "frame#" frame ": " input)))
                    [(assoc frame-snapshots frame (assoc state :input input))
                     (assoc state :events [])]))
                [{} initial-state]
                inputs)

        actual-command-per-frame
        (->> (vals frame-snapshots)
             (filter (comp seq ::tick/commands))
             (map (fn [state]
                    (let [frame (:frame state)
                          commands (::tick/commands state)]
                      (vector frame
                              (if (> (count commands) 1)
                                commands
                                (first commands)))))))]
    (is (= expected-command-per-frame actual-command-per-frame))
    (when *debug?* 
      (print-table inputs))
    (vals frame-snapshots)))

(defn- print-frame-snapshots [frame-snapshots & cols]
  (when *debug?*
    (print-table (flatten
                   (concat [:frame :pressed-buttons :just-pressed-buttons]
                           cols
                           [::tick/commands]))
                 (map
                   (fn [snapshot]
                     (let [{:keys [pressed-buttons just-pressed-buttons]} (:input snapshot)]
                       (assoc snapshot 
                              :pressed-buttons pressed-buttons
                              :just-pressed-buttons just-pressed-buttons)))
                   frame-snapshots))))

(deftest tick-test
  (testing "Basic just pressed"
    (let [test-ruleset
          {:ruleset :classic
           :rotation-system :nrs-nes
           :piece-generator (pgen-seq/make)
           :scoring (scoring-nes/make)
           :preview-count 1
           :ghost-enabled? false
           :hold-allowed? true
           :hard-drop-allowed? true
           :rotate-180-allowed? true
           :das 2
           :arr 1
           :sdf 1}
          pressed-buttons-per-frame
          [[:soft-drop]
           [:move-left]
           [:move-right]
           []
           [:rotate-cw]
           [:rotate-ccw]
           [:rotate-180]
           [:hard-drop]
           [:hold]]]
      (binding [*debug?* false]
        (let [frame-snapshots
              (test-frames
                test-ruleset
                pressed-buttons-per-frame
                [[1 :spawn]
                 [2 :move-down]
                 [3 :move-left]
                 [4 :move-right]
                 [6 :rotate-cw]
                 [7 :rotate-ccw]
                 [8 :rotate-180]
                 [9 [:hard-drop :spawn]]
                 [10 :hold]])]
          (print-frame-snapshots frame-snapshots)))))

  (testing "Soft Drop"
    (let [test-ruleset
          {:ruleset :classic
           :rotation-system :nrs-nes
           :piece-generator (pgen-seq/make)
           :scoring (scoring-nes/make)
           :sdf 1}
          pressed-buttons-per-frame
          [[:soft-drop]
           [:soft-drop]
           [:soft-drop]
           [:soft-drop]
           [:soft-drop]
           [:move-left]
           [:soft-drop]
           [:soft-drop]]]
      (binding [*debug?* false]
        (let [frame-snapshots
              (test-frames
                test-ruleset
                pressed-buttons-per-frame
                [[1 :spawn]
                 [2 :move-down]
                 [4 :move-down]
                 [6 :move-down]
                 [7 :move-left]
                 [8 :move-down]])]
          (print-frame-snapshots frame-snapshots [::tick/sdf-timer ::tick/soft-dropping?])))))

  (testing "Fall"
    (let [test-ruleset
          {:ruleset :classic
           :rotation-system :nrs-nes
           :piece-generator (pgen-seq/make)
           :scoring (scoring-nes/make)
           :hard-drop-allowed? true
           :hold-allowed? true
           :sdf 1
           :speed-level 20}
          pressed-buttons-per-frame
          [[] [] [] [] [] [] [] [] []
           [:move-left] [] [:hard-drop] [] [:hold] [] []]]
      (is (= (ruleset/fall-interval test-ruleset) 2))
      (binding [*debug?* true]
        (let [frame-snapshots
              (test-frames
                test-ruleset
                pressed-buttons-per-frame
                [[1 :spawn]
                 [3 :fall]
                 [5 :fall]
                 [7 :fall]
                 [9 :fall]
                 [11 [:move-left :fall]]
                 [13 [:hard-drop :spawn]]
                 [15 :hold]
                 [17 :fall]])]
          (print-frame-snapshots frame-snapshots [::tick/fall-timer :event-id])))))

  (testing "Delay Auto Shift & Auto Repeat Rate"
    (let [das 6
          arr 2
          test-ruleset
          {:ruleset :classic
           :rotation-system :nrs-nes
           :piece-generator (pgen-seq/make)
           :scoring (scoring-nes/make)
           :preview-count 1
           :ghost-enabled? false
           :hold-allowed? false
           :hard-drop-allowed? false
           :rotate-180-allowed? false
           :das das
           :arr arr
           :sdf 1}
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
            (test-frames
              (assoc test-ruleset :das-cancel-on-direction-change? false)
              pressed-buttons-per-frame
              [[1 :spawn]
               [3 :move-right]
               [5 :move-right]  ; 遵循按下就会响应，进入DAS阶段之前移动一次
               [11 :move-right] ; DAS充能完成，立即移动一次
               [13 :move-right] ; ARR 1充能完成
               [15 :move-right] ; ARR 2充能完成
               [17 :move-right] ; ARR 3充能完成
               [18 :move-left]
               [20 :move-left]
               [21 :move-down]])]
        (print-frame-snapshots frame-snapshots [::tick/das-button ::tick/das-timer ::tick/arr-timer]))
      (let [frame-snapshots
            (test-frames
              (assoc test-ruleset :das-cancel-on-direction-change? true)
              pressed-buttons-per-frame
              [[1 :spawn]
               [3 :move-right]
               [5 :move-right]
               [11 :move-right]
               [13 :move-right]
               [15 :move-right]
               [17 :move-right]
               [18 :move-left]
               [21 :move-down]])]
        (print-frame-snapshots frame-snapshots [::tick/das-button ::tick/das-timer ::tick/arr-timer])))))
