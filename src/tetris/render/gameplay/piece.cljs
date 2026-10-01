(ns tetris.render.gameplay.piece 
  (:require
    ["pixi.js" :as pixi]
    ["pixi-filters" :as pixi-filters]))

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
    #js {:label "piece-cell"
         :x 0
         :y 0
         :width size
         :height size}))

(defn add-cells [container cell-count cell-size]
  (vec (for [_ (range cell-count)]
         (let [sprite (create-piece-cell-sprite cell-size)]
           (.addChild ^js container sprite)))))

(defn piece-container [{:keys [label zIndex x y cell-size ghost?]}]
  (let [container (pixi/Container.
                    #js {:label label
                         :zIndex (or zIndex 0)
                         :x (or x 0)
                         :y (or y 0)})]
    (add-cells container 4 cell-size)
    (when ghost?
      (set! (.-filters container)
            #js [(pixi-filters/OutlineFilter.
                   #js {:thickness 2
                        :color 0xeeeeee
                        :knockout true})]))
    container))

(defn render-piece [view piece piece-data]
  (set! (.-visible piece) (:visible piece-data))
  (doseq [[^js cell-sprite cell-pos]
          (map vector (.-children piece) (:cells piece-data))]
    (set! (.-texture cell-sprite)
          (get (:piece-cell-textures view)
               (:color-index piece-data)))
    (.. cell-sprite -position (set (:x cell-pos) (:y cell-pos)))))

