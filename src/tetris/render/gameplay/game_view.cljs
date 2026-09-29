(ns tetris.render.gameplay.game-view
  (:require
    ["@tweenjs/tween.js" :as tw]
    ["pixi.js" :as pixi]
    [clojure.set :as set]
    [tetris.core.game :as game]
    [tetris.core.input :as input]
    [tetris.render.constants :refer [v-screen-height v-screen-width]]
    [tetris.render.gameplay.game-view-data :refer [calc-layout render-data]]
    [tetris.render.gameplay.piece :refer [create-piece-cell-sprite
                                          create-piece-cell-textures]]))

(def board-bounce-dx-max 6)
(def board-bounce-dy-max 8)

(defn- create-board [{:keys [x y width height border-width]}]
  (let [container (pixi/Container. #js {:label "board"})
        g (pixi/Graphics. #js {:label "board"})]
    (doto g
      (.rect 0 0 width height)
      (.fill #js {:color 0x101010})
      (.stroke #js {:width border-width :color 0xeeeeee}))
    (set! (.-alpha g) 1)
    (.. container -position (set x y))
    (.addChild container g)
    container))

(defn create [^js scene options]
  (let [layout (calc-layout (:preview-count options))
        ^js game-view (pixi/Container.
                        #js {:label "game-view"
                             :x (/ (- v-screen-width (:width layout)) 2)
                             :y (/ (- v-screen-height (:height layout)) 2)})
        board (create-board (:board layout))]
    (.addChild game-view board)
    (.addChild scene game-view)
    {:layout layout
     :container game-view
     :board board
     :blocks {}
     :piece-cell-textures (create-piece-cell-textures (:piece-style options))
     :current nil
     :ghost nil
     :hold nil
     :next-queue nil
     :tweens {}}))

(defn- add-piece-cell [container cell-size]
  (let [sprite (create-piece-cell-sprite cell-size)]
    (.addChild ^js container sprite)))

(defn add-piece [container piece cell-size]
  (vec (for [_ (range (count (:cells piece)))]
         (add-piece-cell container cell-size))))

(defn- add-board-piece-cell [view]
  (add-piece-cell (:board view)
                  (get-in view [:layout :board :cell-size])))

(defn- add-board-piece [view piece]
  (add-piece (:board view)
             piece
             (get-in view [:layout :board :cell-size])))

(defn- render-piece! [view display-piece piece-state & ghost?]
  (doseq [[^js cell-sprite cell-pos] (map vector
                                          display-piece
                                          (:cells piece-state))]
    (set! (.-texture cell-sprite) (get (:piece-cell-textures @view)
                                       (:color-index piece-state)))
    (set! (.-visible cell-sprite) (:visible piece-state))
    (set! (.-alpha cell-sprite) (if ghost? 0.2 1))
    (.. cell-sprite -position (set (:x cell-pos) (:y cell-pos)))))

(defn- update-tweens [view]
  (doseq [[_ tween] (:tweens @view)]
    (when tween
      (.update tween))))

(defn- stop-tween! [view id]
  (when-let [tween (get-in @view [:tweens id])]
    (.stop tween)
    (swap! view assoc-in [:tweens id] nil)))

(defn- start-board-bounce-tween!
  ([view id to-values]
   (start-board-bounce-tween! view id to-values nil nil nil))
  ([view id to-values cb]
   (start-board-bounce-tween! view id to-values nil nil cb))
  ([view id to-values easing duration cb]
   (when-not (get-in @view [:tweens id])
     (let [tween (doto (tw/Tween. (.-pivot (:board @view)))
                   (.to (clj->js to-values) (or duration 167))
                   (.easing (or easing tw/Easing.Quintic.Out))
                   (.start)
                   (.onComplete
                     (fn [] (swap! view assoc-in [:tweens id] nil)
                       (when cb (cb))))
                   (.onStop
                     #(swap! view assoc-in [:tweens id] nil)))]
       (swap! view assoc-in [:tweens id] tween)))))

(defn- render-board-bounce! [view game-state input]
  (if (some #(= % :move-left) (:pressed-buttons input))
    (when (game/shift-blocked? game-state -1)
      (stop-tween! view :board-bounce-shift)
      (let [px (- (.. (:board @view) -pivot -x) (- 1))]
        (when (<= (abs px) board-bounce-dx-max)
          (set! (.. (:board @view) -pivot -x) px))))
    (start-board-bounce-tween! view :board-bounce-shift {:x 0}))

  (if (some #(= % :move-right) (:pressed-buttons input))
    (when (game/shift-blocked? game-state 1)
      (stop-tween! view :board-bounce-shift)
      (let [px (- (.. (:board @view) -pivot -x) 1)]
        (when (<= (abs px) board-bounce-dx-max)
          (set! (.. (:board @view) -pivot -x) px))))
    (start-board-bounce-tween! view :board-bounce-shift {:x 0}))

  (if (some #(= % :soft-drop) (:pressed-buttons input))
    (when (game/down-blocked? game-state)
      (stop-tween! view :board-bounce-down)
      (let [py (- (.. (:board @view) -pivot -y) 1)]
        (when (<= (abs py) board-bounce-dy-max)
          (set! (.. (:board @view) -pivot -y) py))))
    (start-board-bounce-tween! view :board-bounce-down {:y 0}))

  (when (game/find-event :locked (:events game-state))
    (stop-tween! view :board-bounce-bottom)
    (let [py (- (.. (:board @view) -pivot -y) board-bounce-dy-max)]
      (when (<= (abs py) board-bounce-dy-max)
        (start-board-bounce-tween!
          view
          :board-bounce-bottom
          {:y py} tw/Easing.Cubic.Out 83
          (fn []
            (start-board-bounce-tween!
              view
              :board-bounce-bottom
              {:y 0} tw/Easing.Cubic.Out 344 nil)))))))

(defn render!
  {:malli/schema [:=> [:cat some? game/State input/InputState] nil?]}
  [view game-state input]
  (let [data (render-data (:layout @view) game-state)]

    (when (seq (get-in data [:hold :cells]))
      (when-not (:hold @view)
        (let [piece (add-piece (:container @view)
                               (:hold data)
                               (get-in @view [:layout :hold :cell-size]))]
          (swap! view assoc :hold piece)))
      (render-piece! view (:hold @view) (:hold data)))

    (when (seq (:next-queue data))
      (when-not (:next-queue @view)
        (let [display-pieces
              (vec (for [piece (:next-queue data)]
                     (add-piece (:container @view)
                                piece
                                (get-in @view [:layout :next :cell-size]))))]
          (swap! view assoc :next-queue display-pieces)))
      (doseq [[piece-v piece-d]
              (map vector (:next-queue @view) (:next-queue data))]
        (render-piece! view piece-v piece-d)))

    (when (seq (get-in data [:ghost :cells]))
      (when-not (:ghost @view)
        (swap! view assoc :ghost (add-board-piece @view (:ghost data))))
      (render-piece! view (:ghost @view) (:ghost data) true))

    (when (seq (get-in data [:current :cells]))
      (when-not (:current @view)
        (swap! view assoc :current (add-board-piece @view (:current data))))
      (render-piece! view (:current @view) (:current data)))

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
                 (add-board-piece-cell @view)))
        (when-let [cell-sprite (get-in @view [:blocks (:id cell)])]
          (set! (.-texture cell-sprite) (get (:piece-cell-textures @view)
                                             (:color-index cell)))
          (.. cell-sprite -position (set (:x cell) (:y cell))))))

    (render-board-bounce! view game-state input)

    (update-tweens view)))
