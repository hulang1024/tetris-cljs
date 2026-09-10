(ns tetris.dev-preload
  {:dev/always true}   ; 确保每次热重载都重新编译，使宏重新运行
  (:require [tetris.main]
            [malli.dev.cljs :as m]))

(m/start!)
(println "m/start!")
