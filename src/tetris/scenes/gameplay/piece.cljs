(ns tetris.scenes.gameplay.piece
  (:require-macros [shadow.cljs.modern :refer [defclass]])
  (:require ["excalibur" :as ex]
            [malli.core :as m]
            [tetris.core.piece :as p]
            [tetris.core.render :refer [cell-size cell->pos]]
            [tetris.resources :refer [resources]]))

(defclass Cell (extends ex/Actor)
  (field sprite)
  (constructor [this pos sprite]
    (super #js {:pos pos :anchor ex/Vector.Zero})
    (set! (.-sprite this) sprite))
  Object
  (onInitialize [this]
    (.add (.-graphics this) (.-sprite this))))

(defn- get-positions
  "返回一个方格位置的Vector(相对父实体的位置)列表，根据方块形状矩阵"
  [shape]
  (for [[r row]  (map-indexed vector shape)
        [c cell] (map-indexed vector row)
        :when (some? cell)]
    (cell->pos r c)))

(defn- create-cells
  "创建一组方格，根据方块种类和形状矩阵"
  [kind shape]
  (let [^js piece-src (kind (:tetr resources))
        sprite (ex/Sprite.
                 #js {:image piece-src
                      :destSize #js {:width cell-size
                                     :height cell-size}})]
    (map (fn [pos] (Cell. pos sprite))
         (get-positions shape))))

(defclass Piece (extends ex/Actor)
  (field cells)
  (field kind)
  (field dir)

  (constructor [this kind dir]
    (super {:anchor ex/Vector.Zero})
    (m/assert p/Kind kind)
    (m/assert p/Dir dir)
    (set! (.-kind this) kind)
    (set! (.-dir this) dir)
    (let [cells (create-cells kind (p/get-shape kind dir))]
      (set! (.-cells this) cells)
      (doseq [b cells]
        (.addChild this b))))

  Object
  (set-dir [this dir]
    (m/assert p/Dir dir)
    (when (not= (.-dir this) dir)
      (set! (.-dir this) dir)
      (let [shape (p/get-shape (.-kind this) dir)
            positions (get-positions shape)]
        (doseq [[b pos] (map vector (.-cells this) positions)]
          (set! (.-pos b) pos))))))

