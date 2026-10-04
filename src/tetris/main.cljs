(ns tetris.main
  (:require [tetris.input.keyboard :as keyboard]
            [tetris.assets :as assets]
            [tetris.render.app :as app]))

(defonce game-app (atom nil))

(defn ^:async init []
  (println "init")
  (when ^boolean goog/DEBUG
    (add-tap println))
  (keyboard/init)
  (when-not @game-app
    (await (assets/load))
    (reset! game-app (await (app/init)))))

(defn ^:async ^:dev/after-load reload []
  (when-let [app @game-app]
    (.destroy app #js {:removeView true})
    (reset! game-app nil))
  (reset! game-app (await (app/init))))
