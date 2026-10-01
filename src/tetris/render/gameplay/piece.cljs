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

(defn add-cells [container cell-count cell-size]
  (vec (for [_ (range cell-count)]
         (let [sprite (create-piece-cell-sprite cell-size)]
           (.addChild ^js container sprite)))))

(defn render-piece [view display-cells piece-state & ghost?]
  (if (:visible piece-state)
    (doseq [[^js cell-sprite cell-pos]
            (map vector display-cells (:cells piece-state))]
      (set! (.-texture cell-sprite)
            (get (:piece-cell-textures @view)
                 (:color-index piece-state)))
      (set! (.-visible cell-sprite) true)
      (set! (.-alpha cell-sprite) (if ghost? 0.2 1))
      (.. cell-sprite -position (set (:x cell-pos) (:y cell-pos))))
    (doseq [cell-sprite display-cells]
      (set! (.-visible cell-sprite) false))))

