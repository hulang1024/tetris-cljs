(ns core.game-test 
  (:require
    [clojure.test :refer [deftest]]
    [tetris.core.game :as game]
    [tetris.core.ruleset.pgen-seq :as pgen-seq]
    [tetris.core.ruleset.rotation-nrs :as nrs]))

(deftest game-test
  (let [state (game/initial-state
                {:rotation-system {:type :nrs
                                   :piece-shapes nrs/nes-piece-shapes}
                 :piece-generator (pgen-seq/make-piece-generator)})]
    (game/handle-command state :move-left)))
