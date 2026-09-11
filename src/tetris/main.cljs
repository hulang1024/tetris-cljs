(ns tetris.main
  (:require ["excalibur" :as ex]
            [malli.dev.cljs :as md]
            [tetris.core.constants :refer [screen-height screen-width]]
            [tetris.resources :refer [loader]]
            [tetris.scenes.gameplay.gameplay-scene :refer [GameplayScene]]))

(def game
  (ex/Engine.
    #js {:width screen-width
         :height screen-height
         :displayMode ex/DisplayMode.FitScreenAndFill
         :backgroundColor ex/Color.Transparent
         :piexelArt true
         :scenes #js {:start GameplayScene}}))


(.start game "start"
        #js {:loader loader
             :inTransition
             (ex/FadeInOut. #js {:duration 1000
                                 :direction "in"
                                 :color ex/Color.White})})

(defn ^:dev/after-load init []
  (println "init")
  (when ^boolean goog/DEBUG
    (md/start!)))
