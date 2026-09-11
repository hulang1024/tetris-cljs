(ns tetris.core.schema)

; 表示旋转的方向 上右下左
(def Dir [:enum 0 1 2 3])

(def PieceType [:enum :s :z :l :j :i :o :t])

(defn- Matrix-of [elem]
  [:vector {:min 4}
   [:vector {:min 4} elem]])

(def BitMatrix (Matrix-of [:enum 0 1]))
(def PieceShapeMatrix (Matrix-of [:maybe PieceType]))

(def Cell [:enum 0 1 2 3 4 5 6 7])
(def Row [:vector Cell])
(def Board [:vector Row])

