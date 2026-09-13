(ns tetris.engine 
  (:require
    ["excalibur" :as ex]
    [tetris.render :refer [game-height game-width]]))

(def game
  (ex/Engine.
    #js {:width game-width
         :height game-height
         :displayMode ex/DisplayMode.FitScreen
         :pixelRatio 2 ; 提升内部渲染分辨率，让缩放更平滑
         :antialiasing false ; 关闭抗锯齿
         :suppressHiDPIScaling true ; 禁止 HiDPI 自动缩放，避免二次模糊
         :backgroundColor ex/Color.Transparent
         :piexelArt true}))


