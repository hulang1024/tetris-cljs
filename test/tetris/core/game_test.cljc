(ns tetris.core.game-test 
  (:require
    [clojure.test :refer [deftest]]
    [tetris.core.game :as game]
    [tetris.core.ruleset.rotation-nrs]
    [tetris.core.ruleset.pgen-seq :as pgen-seq]))

(deftest game-test
  (let [state (game/initial-state
                {:rotation-system :nrs-nes
                 :piece-generator (pgen-seq/make)})]
    (-> (game/handle-command state :spawn)
        (game/handle-command :move-left))))
