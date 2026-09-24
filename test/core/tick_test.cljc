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

(def ^:dynamic *debug?* false)

(defn- test-frames [ruleset pressed-buttons-per-frame expected-command-per-frame]
  (let [initial-state (-> ruleset
                          (tick/initial-state)
                          (game/initial-state))
        frame-snapshots (atom {0 initial-state})

        mock-command-handler
        (fn [state command]
          (let [state (update state
                              :command (fn [v]
                                         (cond
                                           (nil? v) command
                                           (seq? v) (conj v command)
                                           :else [v command])))]
            (swap! frame-snapshots
                   assoc (:frame state) state)
            state))

        inputs (util/reduce-input (input/initial-state)
                                  pressed-buttons-per-frame)

        _ (reduce (fn [state input]
                    (let [state (-> (dissoc state :command)
                                    (tick/step input mock-command-handler))]
                      (when *debug?*
                        (println (str "frame#" (:frame state) ": " input)))
                      (swap! frame-snapshots
                             assoc (:frame state) (assoc state :input input))
                      state))
                  initial-state
                  inputs)

        actual-command-per-frame
        (->> (vals @frame-snapshots)
             (filter :command)
             (map #(vector (:frame %) (:command %))))]
    (is (= expected-command-per-frame actual-command-per-frame))
    (when *debug?* 
     (print-table inputs))
    (vals @frame-snapshots)))

(defn- print-frame-snapshots [frame-snapshots & cols]
  (when *debug?*
    (print-table (flatten
                   (concat [:frame :pressed-buttons :just-pressed-buttons]
                           cols
                           [:command]))
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
  (testing "Basic just pressed"
    (let [test-ruleset
          {:ruleset :classic
           :rotation-system {:type :nrs
                             :piece-shapes nrs/nes-piece-shapes}
           :piece-generator (pgen-seq/make-piece-generator)
           :preview-count 1
           :ghost-enabled? false
           :pause-allowed? true
           :hold-allowed? true
           :hard-drop-allowed? true
           :rotate-180-allowed? true
           :das 2
           :arr 1
           :sdf 1}
          pressed-buttons-per-frame
          [[:ok]
           []
           [:ok]
           [:soft-drop]
           [:move-left]
           [:move-right]
           [:ok]
           []
           [:ok]
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
                [[4 :move-down]
                 [5 :move-left]
                 [6 :move-right]
                 [10 :rotate-cw]
                 [11 :rotate-ccw]
                 [12 :rotate-180]
                 [13 :hard-drop]
                 [14 :hold]])]
          (print-frame-snapshots frame-snapshots [:status])))))

  (testing "Soft Drop"
    (let [test-ruleset
          {:ruleset :classic
           :rotation-system {:type :nrs
                             :piece-shapes nrs/nes-piece-shapes}
           :piece-generator (pgen-seq/make-piece-generator)
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
                [[1 :move-down]
                 [3 :move-down]
                 [5 :move-down]
                 [6 :move-left]
                 [7 :move-down]])]
          (print-frame-snapshots frame-snapshots [::tick/sdf-timer ::tick/soft-dropping?])))))

  (testing "Fall"
    (let [test-ruleset
          {:ruleset :classic
           :rotation-system {:type :nrs
                             :piece-shapes nrs/nes-piece-shapes}
           :piece-generator (pgen-seq/make-piece-generator)
           :sdf 1
           :level 20} ; fall-interval = 2
          pressed-buttons-per-frame
          [[] [] [] [] [] [] [] [] [] [:move-left] [] [:hard-drop] [] [:hold] [] []]]
      (binding [*debug?* true]
        (let [frame-snapshots
              (test-frames
                test-ruleset
                pressed-buttons-per-frame
                [[2 :fall]
                 [4 :fall]
                 [6 :fall]
                 [8 :fall]
                 [10 [:move-left :fall]]
                 [12 :hard-drop]
                 [14 :hold]
                 [16 :fall]])]
          (print-frame-snapshots frame-snapshots [::tick/fall-timer])))))

  (testing "Delay Auto Shift & Auto Repeat Rate"
    (let [das 6
          arr 2
          test-ruleset
          {:ruleset :classic
           :rotation-system {:type :nrs
                             :piece-shapes nrs/nes-piece-shapes}
           :piece-generator (pgen-seq/make-piece-generator)
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
              [[2 :move-right]
               [4 :move-right]  ; 遵循按下就会响应，进入DAS阶段之前移动一次
               [10 :move-right] ; DAS充能完成，立即移动一次
               [12 :move-right] ; ARR 1充能完成
               [14 :move-right] ; ARR 2充能完成
               [16 :move-right] ; ARR 3充能完成
               [17 :move-left]
               [19 :move-left]
               [20 :move-down]])]
        (print-frame-snapshots frame-snapshots [:das-button :das-timer :arr-timer]))
      (let [frame-snapshots
            (test-frames
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
        (print-frame-snapshots frame-snapshots [:das-button :das-timer :arr-timer])))))
