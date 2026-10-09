(ns tetris.scenes.render.gameplay.matrix 
  (:require
    ["@tweenjs/tween.js" :as tw]
    ["pixi.js" :as pixi]
    [clojure.set :as set]
    [tetris.core.game :as game]
    [tetris.core.ruleset :as ruleset]
    [tetris.core.tick :as tick]
    [tetris.scenes.render.gameplay.piece :refer [add-cells piece-container
                                          render-piece]]
    [tetris.scenes.render.gameplay.tween-mgr :as tm]
    [tetris.core.board :as b]))

(def matrix-bounce-max-dx 10)
(def matrix-bounce-max-dy 10)

(defn- draw-frame [g {:keys [width height border-width]}]
  (doto g
    (.moveTo 0 0)
    (.lineTo 0 height)
    (.lineTo width height)
    (.lineTo width 0)
    (.stroke #js {:width border-width :color 0xaaaaaa :join "bevel"})
    (.rect (/ border-width 2) 0
           (- width border-width)
           (- height (/ border-width 2)))
    (.fill #js {:color 0x111111 :alpha 0.3})))

(defn- draw-grid [g {:keys [width height border-width padding cell]}]
  (doseq [r (range 1 (- b/board-rows b/skyline-rows))]
    (let [y (* r (:size cell))]
      (.moveTo g (:base-x cell) y)
      (.lineTo g (- width (/ border-width 2) padding) y)))
  (doseq [c (range 1 b/board-cols)]
    (let [x (+ (* c (:size cell)) (:base-x cell))]
      (.moveTo g x 0)
      (.lineTo g x (- height (/ border-width 2) padding))))
  (.stroke g #js {:pixelLine true :color 0xeeeeee :alpha 0.1}))

(defn create [matrix-layout]
  (let [{:keys [x y cell]} matrix-layout
        container (pixi/Container. #js {:label "matrix"
                                        :sortableChildren true})
        g (pixi/Graphics. #js {:label "matrix"})]
    (draw-grid g matrix-layout)
    (draw-frame g matrix-layout)
    (.. container -position (set x y))
    (.addChild container g)
    (.addChild container (piece-container {:label "ghost"
                                           :cell-size (:size cell)
                                           :zIndex 2
                                           :ghost? true}))
    (.addChild container (piece-container {:label "current"
                                           :cell-size (:size cell)}))
    container))

(defn- start-bounce-tween!
  ([view id to-values]
   (start-bounce-tween! view id to-values nil nil nil))
  ([view id to-values cb]
   (start-bounce-tween! view id to-values nil nil cb))
  ([view id to-values easing duration cb]
   (when-not (get-in @view [:tweens id])
     (let [tween (doto (tw/Tween. (.-pivot (:matrix @view)))
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
          (let [px (+ (.. (:matrix @view) -pivot -x) (* dir 2))]
            (when (<= (abs px) matrix-bounce-max-dx)
              (set! (.. (:matrix @view) -pivot -x) px))))
        (start-bounce-tween! view :board-bounce-shift {:x 0}))))

  (when (game/find-event :locked (:events game-state))
    (tm/stop-tween! view :board-bounce-bottom)
    (let [py (- (.. (:matrix @view) -pivot -y) matrix-bounce-max-dy)]
      (start-bounce-tween!
        view
        :board-bounce-bottom
        {:y py} tw/Easing.Cubic.Out 167
        (fn []
          (start-bounce-tween!
            view
            :board-bounce-bottom
            {:y 0} tw/Easing.Cubic.Out 344 nil))))))

(defn add-matrix-cells [view cell-count]
  (add-cells (:matrix view)
             cell-count
             (get-in view [:layout :matrix :cell :size])))

(defn- render-ghost [view data game-state]
  (let [ghost (.getChildByLabel ^js (:matrix @view) "ghost")]
    (render-piece @view ghost (:ghost data))
    (set! (.-color (aget (.-filters ghost) 0)) 0xffffff)
    (set! (.-alpha (aget (.-filters ghost) 0))
          (- 1 (/ (::tick/lock-timer game-state)
                  (ruleset/lock-delay game-state))))))

(defn- render-current [view data]
  (let [current (.getChildByLabel ^js (:matrix @view) "current")]
    (render-piece @view current (:current data))))

(defn- render-blocks [view data]
  (let [state-cell-ids (set (map :id (:blocks data)))
        view-cell-ids (set (keys (:blocks @view)))
        cell-ids-to-remove (set/difference view-cell-ids state-cell-ids)]
    (doseq [id cell-ids-to-remove]
      (when-let [cell-sprite (get-in @view [:blocks id])]
        (.removeChild (:matrix @view) cell-sprite)
        (swap! view update :blocks dissoc id)))
    (doseq [cell (:blocks data)]
      (when-not (get (:blocks @view) (:id cell))
        (swap! view assoc-in
               [:blocks (:id cell)]
               (first (add-matrix-cells @view 1))))
      (when-let [cell-sprite (get-in @view [:blocks (:id cell)])]
        (set! (.-texture cell-sprite) (get (:piece-cell-textures @view)
                                           (:color-index cell)))
        (.. cell-sprite -position (set (:x cell) (:y cell)))))))

(defn render! [view data game-state input]
  (render-blocks view data)
  (render-ghost view data game-state)
  (render-current view data)
  (apply-bounce view game-state input))

