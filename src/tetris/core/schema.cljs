(ns tetris.core.schema)

; 表示旋转的方向
(def Dir 
  [:enum 0 1 2 3])

(def PieceType [:enum :s :z :l :j :i :o :t])

; 01矩阵
(def BitMatrix
  [:vector {:min 4}
   [:vector {:min 4}
    [:enum 0 1]]])

(def Cell [:enum 0 1 2 3 4 5 6 7])
(def Row [:vector Cell])
(def Board [:vector Row])

