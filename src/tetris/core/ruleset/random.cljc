(ns tetris.core.ruleset.random)

(defn init [seed]
  seed)

(defn next-int [state]
  (let [state (mod (* state 16807) 2147483647)]
    [state state]))
