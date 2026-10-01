(ns tetris.render.gameplay.hud 
  (:require
    ["pixi.js" :as pixi]
    [tetris.render.gameplay.piece :refer [add-cells render-piece]]))

(defn hold [layout]
  (pixi/Container.
    #js {:label "hold"
         :x (:x layout)
         :y (:y layout)}))

(defn preview [layout]
  (pixi/Container.
    #js {:label "next"
         :x (:x layout)
         :y (:y layout)}))

(defn- render-hold [view data]
  (when (and (seq (get-in data [:hold :cells]))
             (not (:hold @view)))
    (let [piece (add-cells (:hold-container @view)
                           4
                           (get-in @view [:layout :hold :cell :size]))]
      (swap! view assoc :hold piece)))
  (render-piece view (:hold @view) (:hold data)))

(defn- render-next [view data]
  (when (and (seq (:next data)) (not (:next @view)))
    (let [display-pieces
          (vec (for [_ (range (count (:next data)))]
                 (add-cells (:next-container @view)
                            4
                            (get-in @view [:layout :next :cell :size]))))]
      (swap! view assoc :next display-pieces)))
  (doseq [[piece-v piece-d] (map vector (:next @view) (:next data))]
    (render-piece view piece-v piece-d)))

(defn render! [view data]
  (render-hold view data)
  (render-next view data))

