(ns tetris.main
  (:require [malli.dev.cljs :as m]
            ["excalibur" :refer [ Engine DisplayMode Color FadeInOut ]]
            [tetris.scenes.gameplay.gameplay-scene :refer [GameplayScene]]))

(def game
  (Engine.
    #js {:width 800
         :height 600
         :displayMode DisplayMode.FitScreenAndFill
         :piexelArt true
         :scenes #js {:start GameplayScene}}))

(.start game "start" #js {:inTransition
                          (FadeInOut. #js {:duration 1000
                                           :direction "in"
                                           :color Color.ExcaliburBlue})})

(defn ^:dev/after-load init []
  (when ^boolean goog/DEBUG
    (println "reload: m/start!")
    (m/start!)))
