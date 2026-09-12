(ns tetris.scenes.gameplay.board
  (:require-macros [shadow.cljs.modern :refer [defclass]])
  (:require ["excalibur" :as ex]
            [tetris.scenes.gameplay.piece :refer [Piece]]
            [tetris.core.render :as r]))

(defclass Board (extends ex/Actor)
  (field piece)

  (constructor [this]
    (super #js {:x (/ (- r/game-width r/board-width) 2)
                :y (/ (- r/game-height r/board-height) 2)
                :anchor ex/Vector.Zero}))

  Object
  (onInitialize [this]
    (set! (.-piece this) nil)
    (let [rect (ex/Rectangle.
                 #js {:width r/board-width
                      :height r/board-height
                      :color (ex/Color.fromHex "#111111")})]
      (.add (.-graphics this) rect)))

  (render-game-state [this state]
    (when-not (.-piece this)
      (let [^js piece (Piece. :l 0)]
        (.addChild this piece)
        (set! (.-piece this) piece)))

    (let [{:keys [row col current]} state]
      (set! (.-pos piece) (r/cell->pos row col))
      (.set-dir ^js piece (:dir current)))))

