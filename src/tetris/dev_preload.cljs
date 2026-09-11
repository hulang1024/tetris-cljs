(ns tetris.dev-preload
  {:dev/always true}
  (:require [tetris.main]
            [malli.dev.cljs :as dev]))

(dev/start!)
