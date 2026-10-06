(ns tetris.core.rs)

(def rotation-systems [:srs :nrs-nes :nrs-game-boy :nrs-dx])

(def RotationSystem (into [:enum] rotation-systems))

(def ^:const cell-filled true)
(def ^:const cell-empty  false)

(def ShapeMatrix
  [:vector {:min 3 :max 4}
   [:vector {:min 3 :max 4}
    [:enum cell-empty cell-filled]]])

;; [:=> [:cat game/State Turn] [:maybe game/State]]]
(defmulti rotate (fn [state _turn] (:rotation-system state)))

;; [:=> [:cat Piece] ShapeMatrix]]
(defmulti shape :rs)

(defn shape->cell-indices [shape]
  (vec (for [[r row] (map-indexed vector shape)
             [c v]   (map-indexed vector row)
             :when (= v cell-filled)]
         [r c])))

;; [:=> [:cat Piece] [:vector [:cat :int :int]]]
(defn cell-indices [piece]
  (shape->cell-indices (shape piece)))

(defn trimed-shape [piece]
  (let [shape (shape piece)]
    (->> (if (= (:kind piece) :o)
           (mapv #(subvec % 1 3) shape)
           shape)
         (filterv #(some true? %)))))


