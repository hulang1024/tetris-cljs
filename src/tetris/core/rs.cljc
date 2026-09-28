(ns tetris.core.rs)

(def rotation-systems [:srs :nrs-nes :nrs-game-boy :nrs-dx])

(def RotationSystem (into [:enum] rotation-systems))

(def ^:const cell-filled true)
(def ^:const cell-empty  false)

(def ShapeMatrix
  [:vector {:min 3 :max 4}
   [:vector {:min 3 :max 4}
    [:enum cell-empty cell-filled]]])

;; [:=> [:cat [game/State Turn] game/State]]
(defmulti rotate (fn [state _turn] (:rotation-system state)))

;; [:=> [:cat [Piece] ShapeMatrix]]
(defmulti shape :rs)

;; [:=> [:cat [Piece] [:vector [:cat :int :int]]]]
(defmulti cells :rs)

(defmethod cells :default [piece]
  (vec (for [[r row] (map-indexed vector (shape piece))
             [c v]   (map-indexed vector row)
             :when (= v cell-filled)]
         [r c])))

