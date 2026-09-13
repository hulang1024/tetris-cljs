(ns tetris.main
  (:require ["excalibur" :as ex]
            [malli.dev.cljs :as md]
            [tetris.render :refer [game-height game-width]]
            [tetris.resources :refer [loader]]
            [tetris.scenes.gameplay.scene :refer [GameplayScene]]))

(def game
  (ex/Engine.
    #js {:width game-width
         :height game-height
         :displayMode ex/DisplayMode.FitScreen
         :pixelRatio 2 ; 提升内部渲染分辨率，让缩放更平滑
         :antialiasing false ; 关闭抗锯齿
         :suppressHiDPIScaling true ; 禁止 HiDPI 自动缩放，避免二次模糊
         :backgroundColor ex/Color.Transparent
         :piexelArt true
         :scenes #js {:start GameplayScene}}))


(.start game "start"
        #js {:loader loader
             :inTransition
             (ex/FadeInOut. #js {:duration 200
                                 :direction "in"
                                 :color ex/Color.Gray})})

(defn ^:dev/after-load init []
  (println "init")
  (when ^boolean goog/DEBUG
    (md/start!)))
