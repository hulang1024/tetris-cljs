(ns tetris.scenes.gameplay.board
  (:require-macros [shadow.cljs.modern :refer [defclass]])
  (:require ["excalibur" :as ex]
            [tetris.scenes.gameplay.piece :refer [Piece]]
            [tetris.core.render :as r]))

(defclass Board (extends ex/Actor)
  (field piece)
  (field piece-count)

  (constructor [this]
    (super #js {:x (/ (- r/game-width r/board-width) 2)
                :y (/ (- r/game-height r/board-height) 2)
                :anchor ex/Vector.Zero}))

  Object
  (onInitialize [this]
    (set! (.-piece this) nil)
    (set! (.-piece-count this) 0)
    (let [rect (ex/Rectangle.
                 #js {:width r/board-width
                      :height r/board-height
                      :color (ex/Color.fromHex "#111111")})]
      (.add (.-graphics this) rect)))

  (spawn-piece [this state]
    (let [{:keys [row col current]} state
          ^js piece (Piece. (:kind current) (:dir current))]
      (.addChild this piece)
      (set! (.-piece this) piece)))

  (render-game-state [this state]
    (let [{:keys [piece-count row col current]} state]
      (when (< (.-piece-count this) piece-count)
        (.spawn-piece this state)
        (set! (.-piece-count this) piece-count))
      (set! (.-pos piece) (r/cell->pos row col))
      (.set-dir ^js piece (:dir current)))))

