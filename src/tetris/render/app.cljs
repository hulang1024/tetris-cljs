(ns tetris.render.app 
  (:require
    ["pixi.js" :as pixi]
    [tetris.render.constants :refer [v-screen-height v-screen-width]]
    [tetris.scenes.gameplay :as gameplay]))

(defn- fit-stage-to-screen [^js app design-width design-height]
  (let [screen-w (.. app -screen -width)
        screen-h (.. app -screen -height)
        ;; 计算宽高缩放比例，取较小值以保证完整显示（保持宽高比）
        scale-x (/ screen-w design-width)
        scale-y (/ screen-h design-height)
        scale (min scale-x scale-y)
        ;; 计算居中偏移量
        scaled-w (* design-width scale)
        scaled-h (* design-height scale)
        offset-x (/ (- screen-w scaled-w) 2)
        offset-y (/ (- screen-h scaled-h) 2)]
    ;; 缩放
    (.. app -stage -scale (set scale))
    ;; 居中
    (.. app -stage -position (set offset-x offset-y))))

(defn ^:async init []
  (let [app (pixi/Application.)]
    (set! js/window.__PIXI_APP__ app)
    (await (.init app #js {:background "#131313"
                           :resolution (or js/window.devicePixelRatio 1)
                           :autoDensity true
                           :antialias true
                           :resizeTo js/window}))
    (.appendChild js/document.body (.-canvas app))
    (set! (.-maxFPS (.-ticker app)) 60)
    (set! (.-minFPS (.-ticker app)) 60)
    (.addEventListener js/window
                       "resize"
                       #(js/requestAnimationFrame
                          (fn [] (fit-stage-to-screen app v-screen-width v-screen-height))))
    (fit-stage-to-screen app v-screen-width v-screen-height)

    (gameplay/start app)))
