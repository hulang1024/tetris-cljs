(ns tetris.main
  (:require [tetris.input.keyboard :as keyboard]
            [tetris.assets :as assets]
            [tetris.render.app :as app]))

(println "init")
(when ^boolean goog/DEBUG
  (add-tap println))
(keyboard/init)

(defn ^:async ^:dev/after-load init []
  (await (assets/load))
  (app/init))
