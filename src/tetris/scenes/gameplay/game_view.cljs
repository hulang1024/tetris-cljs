(ns tetris.scenes.gameplay.game-view
  (:require
    ["pixi.js" :as pixi]
    [clojure.set :as set]
    [tetris.scenes.gameplay.game-view-data :refer [calc-layout render-data]]
    [tetris.scenes.gameplay.piece :refer [create-piece-cell-sprite
                                          create-piece-cell-textures]]))

(defn- create-board [{:keys [x y width height border-width]}]
  (let [container (pixi/Container. #js {:label "board"})
        g (pixi/Graphics. #js {:label "board"})]
    (doto g
      (.rect 0 0 width height)
      (.fill #js {:color 0x111111})
      (.stroke #js {:width border-width :color 0xeeeeee}))
    (set! (.-alpha g) 1)
    (.. container -position (set x y))
    (.addChild container g)
    container))

(defn create [^js scene options]
  (let [layout (calc-layout (:preview-count options))
        ^js game-view (pixi/Container.
                        #js {:label "game-view"
                             :x (:x layout)
                             :y (:y layout)})
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
     :next-queue []}))

(defn- add-piece-cell [view]
  (let [cell-size (get-in @view [:layout :board :cell-size])
        sprite (create-piece-cell-sprite cell-size)]
    (.addChild ^js (:board @view) sprite)))

(defn- add-piece [view cell-count]
  (vec (map (fn [_] (add-piece-cell view))
            (range cell-count))))

(defn- render-piece! [view display-piece piece-state]
  (doseq [[cell-sprite cell-pos] (map vector
                                      display-piece
                                      (:cells piece-state))]
    (set! (.-texture cell-sprite) (get (:piece-cell-textures @view)
                                       (:color-index piece-state)))
    (set! (.-visible cell-sprite) (:visible piece-state))
    (.. cell-sprite -position (set (:x cell-pos) (:y cell-pos)))))

(defn render! [view game-state]
  (let [data (render-data (:layout @view) game-state)
        piece-cell-count (count (get-in data [:current :cells]))]
    (when (:ghost-enabled? game-state)
      (when-not (:ghost @view)
        (swap! view assoc :ghost (add-piece view piece-cell-count)))
      (render-piece! view (:ghost @view) (:ghost data)))

    (when-not (:current @view)
      (swap! view assoc :current (add-piece view piece-cell-count)))
    (render-piece! view (:current @view) (:current data))

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
                 (add-piece-cell view)))
        (when-let [cell-sprite (get-in @view [:blocks (:id cell)])]
          (set! (.-texture cell-sprite) (get (:piece-cell-textures @view)
                                             (:color-index cell)))
          (.. cell-sprite -position (set (:x cell) (:y cell))))))))
