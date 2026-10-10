(ns tetris.core.ruleset.pgen-7bag 
  (:require
    [tetris.core.piece :as p]
    [tetris.core.ruleset :refer [next-piece]]
    [tetris.core.ruleset.random :as random]))

(defn random-7bag [random-state]
  (loop [v (vec p/piece-kinds)
         i (dec (count v))
         random-state random-state]
    (if (pos? i)
      (let [[rn random-state] (random/next-int random-state)
            j  (mod rn (inc i))
            vi (v i)
            vj (v j)]
        (recur (assoc v i vj j vi) (dec i) random-state))
      [v random-state])))

(defn make [seed]
  (let [random (random/init seed)
        [bag random] (random-7bag random)]
    {:type :7-bag
     :random random
     :bag bag
     :index -1}))

(defmethod next-piece :7-bag [state]
  (let [{:keys [random bag index]} state
        [bag random] (if (= index 6) (random-7bag random) [bag random])
        curr-index (mod (inc index) 7)]
    [(nth bag curr-index)
     (assoc state
            :random random
            :bag bag
            :index curr-index)]))
