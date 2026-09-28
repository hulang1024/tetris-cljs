(ns tetris.scenes.gameplay.game-view
  (:require
    ["pixi.js" :as pixi]
    [clojure.set :as set]
    [tetris.render.constants :refer [v-screen-height v-screen-width]]
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
     :next-queue nil}))

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

(defn render! [view game-state]
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
          (.. cell-sprite -position (set (:x cell) (:y cell))))))))
