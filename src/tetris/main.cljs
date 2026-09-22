(ns tetris.main
  (:require ["pixi.js" :as pixi]))

(defn ^:dev/after-load ^:async init []
  (println "init")
  (let [app (pixi/Application.)]
    (await (.init app #js {:background "#1099bb"
                           :resizeTo js/window}))
    (.appendChild js/document.body (.-canvas app))
    
    (let [texture (await (pixi/Assets.load "bunny.png"))
          bunny (pixi/Sprite. texture)]
      (.. app -stage (addChild bunny))
      (.. bunny -anchor (set 0.5))
      (.. bunny -position
          (set (/ (.. app -screen -width) 2)
               (/ (.. app -screen -height) 2)))
      
      (.. app -ticker
          (add (fn [time]
                 (set! (.-rotation bunny)
                       (+ (.-rotation bunny) (* 0.1 (.-deltaTime time))))))))))
