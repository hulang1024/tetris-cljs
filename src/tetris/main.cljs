(ns tetris.main
  (:require ["excalibur" :as ex]
            [malli.dev.cljs :as md]
            [tetris.engine :as engine]
            [tetris.resources :refer [loader]]
            [tetris.scenes.gameplay.scene :refer [GameplayScene]]))

(defn ^:dev/after-load init []
  (println "init")
  (.add engine/game "start" GameplayScene)
  (.start engine/game "start"
          #js {:loader loader
               :inTransition
               (ex/FadeInOut. #js {:duration 200
                                   :direction "in"
                                   :color ex/Color.Gray})})

  (when ^boolean goog/DEBUG
    (md/start!)))
