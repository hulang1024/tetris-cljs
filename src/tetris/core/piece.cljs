(ns tetris.core.piece)

;; 表示旋转的方向 上右下左
(def Dir [:enum 0 1 2 3])

(def Kind [:enum :s :z :l :j :i :o :t])

(defn- Matrix-of [elem]
  [:vector {:min 4}
   [:vector {:min 4} elem]])

(def Shape (Matrix-of [:maybe Kind]))

(def BitMatrix (Matrix-of [:enum 0 1]))

(def Piece
  [:map
   [:kind Kind]
   [:dir Dir]
   [:shape Shape]])

;; 各个种类方块四个方向的编码，高16位编码旋转掩码，低16位编码形状扫描码
(def ^:private pieces
  {:s [0xee206c00 0x66e04620 0x8ee006c0 0xecc08c40]
   :z [0xe660c600 0x2ee02640 0xee800c60 0xcce04c80]
   :l [0xecc088c0 0xee20e800 0x66e06220 0x8ee002e0]
   :j [0x2ee02260 0xcce008e0 0xee80c880 0xe660e200]
   :i [0x7fcc4444 0xef330f00 0x33fe2222 0xccf700f0]
   :o [0xcc00cc00 0xcc00cc00 0xcc00cc00 0xcc00cc00]
   :t [0xe620e400 0x26e02620 0x8ce004e0 0xec808c80]})

(defn- ->matrix [code zero one]
  (->> (range 16)
       (map #(if (bit-test code %) one zero))
       (partition 4)
       (mapv vec)))

(defn get-shape
  "查找方块形状矩阵，根据类型和方向"
  {:malli/schema [:=> [:cat Kind Dir] Shape]}
  [kind dir]
  (->matrix (bit-and ((kind pieces) dir) 0xffff) nil kind))

(defn get-rotate-mask
  "查找方块旋转碰撞检测掩码矩阵，根据类型和方向"
  {:malli/schema [:=> [:cat Kind Dir] BitMatrix]}
  [kind dir]
  (->matrix (bit-and ((kind pieces) dir) 0xffff) 0 1))

(defn make-piece
  {:malli/schema [:=> [:cat Kind Dir] Piece]}
  [kind dir]
  {:kind kind
   :dir dir
   :shape (get-shape kind dir)})

(defn rand-kind
  "返回随机种类形状"
  [rand-range]
  (nth (keys pieces) (rand-range 0 7)))

(defn rand-dir
  "返回随机方向"
  [rand-range]
  (rand-range 0 4))

(defn rotate
  "返回旋转后的方向" 
  {:malli/schema [:=> [:cat [:enum :cw :ccw] Dir] Dir]}
  [clockwise dir]
  (if (= clockwise :cw)
    (mod (+ dir 1) 4)
    (if (> dir 0) (- dir 1) 3)))
