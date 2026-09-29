(ns tetris.render.gameplay.piece 
  (:require
    ["pixi.js" :as pixi]))

(defn create-piece-cell-textures [style] 
  (let [sheet-texture (pixi/Assets.get (str "gameplay/" style))
        cell-count (+ 7 2)
        fw (/ (.-width sheet-texture) cell-count)
        fh (.-height sheet-texture)]
    (set! (.. sheet-texture -source -scaleMode) "nearest")
    (mapv (fn [i]
            (pixi/Texture.
              #js {:source (.-source sheet-texture)
                   :frame (pixi/Rectangle. (* i fw) 0 fw fh)}))
          (range cell-count))))

(defn create-piece-cell-sprite [size]
  (pixi/Sprite.
    #js {:label "piecel-cell"
         :x 0
         :y 0
         :width size
         :height size}))
