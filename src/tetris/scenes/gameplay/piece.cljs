(ns tetris.scenes.gameplay.piece
  (:require-macros [shadow.cljs.modern :refer [defclass]])
  (:require ["excalibur" :as ex]
            [malli.core :as m]
            [tetris.core.logic :refer [get-piece-shape]]
            [tetris.core.constants :refer [cell-size]]
            [tetris.core.schema :as s]
            [tetris.resources :refer [resources]]))

(defclass Cell (extends ex/Actor)
  (field sprite)
  (constructor [this opts sprite]
    (super (clj->js opts))
    (set! (.-sprite this) sprite))
  Object
  (onInitialize [this]
    (.add (.-graphics this) (.-sprite this))))

(defn- get-positions
  "返回一个方格位置的Vector(相对父实体的位置)列表，根据方块形状矩阵"
  [shape]
  (for [[r row] (map-indexed vector shape)
        [c blk] (map-indexed vector row)
        :when   (some? blk)]
    (ex/Vector. (* c cell-size) (* r cell-size))))

(defn- create-cells
  "创建一组方格，根据方块种类和形状矩阵"
  [piece-type shape]
  (let [^js piece-src (piece-type (:tetr resources))
        sprite (ex/Sprite.
                 #js {:image piece-src
                      :destSize #js {:width cell-size
                                     :height cell-size}})]
    (map (fn [pos] (Cell. {:pos pos} sprite))
         (get-positions shape))))

(defclass Piece (extends ex/Actor)
  (field cells)
  (field piece-type)

  (constructor [this piece-type dir]
    (super)
    (m/assert s/PieceType piece-type)
    (m/assert s/Dir dir)
    (set! (.-piece-type this) piece-type)
    (let [cells (create-cells piece-type (get-piece-shape piece-type dir))]
      (set! (.-cells this) cells)
      (doseq [b cells]
        (.addChild this b))))

  Object
  (set-dir [this dir]
    (m/assert s/Dir dir)
    (let [shape (get-piece-shape (.-piece-type this) dir)
          positions (get-positions shape)]
    (doseq [[b pos] (map vector (.-cells this) positions)]
      (set! (.-pos b) pos)))))

