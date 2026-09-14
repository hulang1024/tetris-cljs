(ns tetris.main
  (:require [tetris.engine :as engine]
            [tetris.resources :refer [loader]]
            [tetris.scenes.gameplay.scene :refer [GameplayScene]]))

(defn ^:dev/after-load init []
  (println "init")
  (.add engine/game "start" GameplayScene)
  (.start engine/game "start"
          #js {:loader loader}))
