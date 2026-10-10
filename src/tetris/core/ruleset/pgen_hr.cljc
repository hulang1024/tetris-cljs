(ns tetris.core.ruleset.pgen-hr 
  (:require
    [tetris.core.piece :as p]
    [tetris.core.ruleset.random :as random]
    [tetris.core.ruleset :refer [next-piece]]))

(defn make [seed history-length roll]
  {:type :hr
   :random (random/init seed)
   :history (vec (repeat history-length nil))
   :roll roll})

(defmethod next-piece :hr [state]
  (let [{:keys [roll history]} state
        g1h2r? (and (= (count history) 1) (= roll 2))
        [kind random] (loop [random (:random state)
                             times 0
                             roll roll
                             history history]
                        (let [times (inc times)
                              [rn random] (random/next-int random)
                              kind-n (mod rn (if (and g1h2r? (= times 1)) 8 7)) 
                              kind (get p/piece-kinds kind-n)]
                          (if (and kind (or (>= times roll)
                                            (not-any? #(= kind %) history)))
                            [kind random]
                            (recur random times roll history))))]
    [kind
     (assoc state
            :history (conj (vec (rest history)) kind)
            :random random)]))
