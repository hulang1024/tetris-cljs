(ns tetris.assets 
  (:require
    ["pixi.js" :as pixi]))

(defn ^:async load-piece-styles [styles]
  (doseq [piece-style (if (string? styles) [styles] styles)
          :let [alias (str "gameplay" "/" piece-style)
                src (str "/assets/" alias ".png")]]
    (await (pixi/Assets.load #js {:alias alias :src src}))))

(defn ^:async load []
  (load-piece-styles "b11"))

