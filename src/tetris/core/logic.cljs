(ns tetris.core.logic 
  (:require
    [tetris.core.schema :as s]))

;; 各个种类方块四个方向的编码，高16位编码旋转掩码，低16位编码形状扫描码
(def ^:private piece-matrixs
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

(defn get-piece-shape
  "查找方块形状矩阵，根据类型和方向"
  {:malli/schema [:=> [:cat s/PieceType s/Dir] s/PieceShapeMatrix]}
  [piece-type dir]
  (->matrix (bit-and ((piece-type piece-matrixs) dir) 0xffff) nil piece-type))

(defn get-piece-rotate-mask
  "查找方块旋转碰撞检测掩码矩阵，根据类型和方向"
  {:malli/schema [:=> [:cat s/PieceType s/Dir] s/BitMatrix]}
  [piece-type dir]
  (->matrix (bit-and ((piece-type piece-matrixs) dir) 0xffff) 0 1))

(defn rotate
  "返回旋转后的方向" 
  [closewise? dir]
  (if closewise?
    (mod (+ dir 1) 4)
    (if (> dir 0) (- dir 1) 3)))

