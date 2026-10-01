(ns tetris.render.gameplay.matrix 
  (:require
    ["@tweenjs/tween.js" :as tw]
    ["pixi.js" :as pixi]
    [clojure.set :as set]
    [tetris.core.game :as game]
    [tetris.render.gameplay.piece :refer [add-cells render-piece]]
    [tetris.render.gameplay.tween-mgr :as tm]))

(def matrix-bounce-dx-max 6)
(def matrix-bounce-dy-max 10)

(defn create [{:keys [x y width height border-width]}]
  (let [container (pixi/Container. #js {:label "board"})
        g (pixi/Graphics. #js {:label "board"})]
    (doto g
      (.moveTo 0 0)
      (.lineTo 0 height)
      (.lineTo width height)
      (.lineTo width 0)
      (.stroke #js {:width border-width :color 0xcccccc})
      (.rect 4 4 (- width 8) (- height 9))
      (.fill #js {:color 0x000000 :alpha 0.2}))
    (set! (.-alpha g) 1)
    (.. container -position (set x y))
    (.addChild container g)
    container))

(defn- start-bounce-tween!
  ([view id to-values]
   (start-bounce-tween! view id to-values nil nil nil))
  ([view id to-values cb]
   (start-bounce-tween! view id to-values nil nil cb))
  ([view id to-values easing duration cb]
   (when-not (get-in @view [:tweens id])
     (let [tween (doto (tw/Tween. (.-pivot (:board @view)))
                   (.to (clj->js to-values) (or duration 344))
                   (.easing (or easing tw/Easing.Cubic.Out))
                   (.start)
                   (.onComplete
                     (fn [] (swap! view assoc-in [:tweens id] nil)
                       (when cb (cb))))
                   (.onStop
                     #(swap! view assoc-in [:tweens id] nil)))]
       (swap! view assoc-in [:tweens id] tween)))))

(defn- apply-bounce [view game-state input]
  (when (:shift-blocked? game-state)
    (let [pressed-buttons (set (:pressed-buttons input))
          [button dir] (first (filter (fn [[b]] (contains? pressed-buttons b))
                                      [[:move-left 1] [:move-right -1]]))]
      (if button
        (do
          (tm/stop-tween! view :board-bounce-shift)
          (let [px (+ (.. (:board @view) -pivot -x) (* dir 2))]
            (when (<= (abs px) matrix-bounce-dx-max)
              (set! (.. (:board @view) -pivot -x) px)
              (set! (.. ^js (:board @view) (getChildAt 0) -tint) 0xffeeee))))
        (do
          (set! (.. ^js (:board @view) (getChildAt 0) -tint) 0xffffff)
          (start-bounce-tween! view :board-bounce-shift {:x 0})))))

  (when (game/find-event :locked (:events game-state))
    (tm/stop-tween! view :board-bounce-bottom)
    (let [py (- (.. (:board @view) -pivot -y) matrix-bounce-dy-max)]
      (start-bounce-tween!
        view
        :board-bounce-bottom
        {:y py} tw/Easing.Cubic.Out 167
        (fn []
          (start-bounce-tween!
            view
            :board-bounce-bottom
            {:y 0} tw/Easing.Cubic.Out 344 nil))))))

(defn add-board-cells [view cell-count]
  (add-cells (:board view)
             cell-count
             (get-in view [:layout :board :cell :size])))

(defn- render-ghost [view data]
  (when (and (seq (get-in data [:ghost :cells]))
             (not (:ghost @view)))
    (swap! view assoc :ghost (add-board-cells @view 4)))
  (render-piece view (:ghost @view) (:ghost data) true))

(defn- render-current [view data]
  (when (and (seq (get-in data [:current :cells]))
             (not (:current @view)))
    (swap! view assoc :current (add-board-cells @view 4)))
  (render-piece view (:current @view) (:current data)))

(defn- render-blocks [view data]
  (let [state-cell-ids (set (map :id (:blocks data)))
        view-cell-ids (set (keys (:blocks @view)))
        cell-ids-to-remove (set/difference view-cell-ids state-cell-ids)]
    (doseq [id cell-ids-to-remove]
      (when-let [cell-sprite (get-in @view [:blocks id])]
        (.removeChild (:board @view) cell-sprite)
        (swap! view update :blocks dissoc id)))
    (doseq [cell (:blocks data)]
      (when-not (get (:blocks @view) (:id cell))
        (swap! view assoc-in
               [:blocks (:id cell)]
               (first (add-board-cells @view 1))))
      (when-let [cell-sprite (get-in @view [:blocks (:id cell)])]
        (set! (.-texture cell-sprite) (get (:piece-cell-textures @view)
                                           (:color-index cell)))
        (.. cell-sprite -position (set (:x cell) (:y cell)))))))

(defn render! [view data game-state input]
  (render-blocks view data)
  (render-ghost view data)
  (render-current view data)
  (apply-bounce view game-state input))

