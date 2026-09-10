(ns tetris.scenes.gameplay.piece
  (:require-macros [shadow.cljs.modern :refer [defclass]])
  (:require [malli.core :as m]
            ["excalibur" :refer [Actor Color Vector Rectangle]]
            [tetris.core.schema :as s]
            [tetris.core.logic :refer [get-piece-shape]]
            [tetris.scenes.gameplay.constants :refer [cell-size]]))

(defn- get-positions
  {:malli/schema [:=> [:cat s/BitMatrix] [:sequential :some?]]}
  [shape]
  (let [gap 1
        step (+ cell-size gap)]
    (for [[r row] (map-indexed vector shape)
          [c b]   (map-indexed vector row)
          :when   (not= b 0)]
      (Vector. (* c step) (* r step)))))

(defn- create-blocks
  {:malli/schema [:=> [:cat s/PieceType s/BitMatrix] [:sequential :some?]]}
  [piece-type shape]
  (let [colors {:s "#59b101"
                :z "#d71037"
                :l "#e35b03"
                :j "#2242c6"
                :i "#0f9bd7"
                :o "#e39f04"
                :t "#af298a"}
        rect (Rectangle.
               #js {:width cell-size
                    :height cell-size
                    :color (Color.fromHex (colors piece-type))})]
    (map (fn [pos]
           (Actor. #js {:pos pos
                        :graphic rect}))
         (get-positions shape))))

(defclass Piece (extends Actor)
  ;; Actor[]
  (field blocks)
  ;; PieceType
  (field piece-type)

  (constructor [this piece-type dir]
    (super)
    (m/assert s/PieceType piece-type)
    (m/assert s/Dir dir)
    (set! (.-piece-type this) piece-type)
    (set! (.-blocks this) (create-blocks piece-type (get-piece-shape piece-type dir)))
    (doseq [b (.-blocks this)]
      (.addChild this b)))

  Object
  (set-dir [this dir]
    (m/assert s/Dir dir)
    (let [shape (get-piece-shape (.-piece-type this) dir)
          positions (get-positions shape)]
    (doseq [[b pos] (map vector (.-blocks this) positions)]
      (set! (.-pos b) pos)))))

