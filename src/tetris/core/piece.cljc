(ns tetris.core.piece 
  (:require
    [tetris.core.rs :refer [RotationSystem]]))

(def Rotation [:enum 0 1 2 3])

(def Turn [:enum :cw :ccw :180])

;; NES序，0-6对应
(def piece-kinds [:i :o :t :s :z :j :l])

(def PieceKind (into [:enum] piece-kinds))

(def Piece
  [:map
   [:id :int]
   [:kind PieceKind]
   [:rot Rotation]
   [:rs RotationSystem]])

(defn rotate
  {:malli/schema [:=> [:cat Piece Turn] Piece]}
  [piece turn]
  (let [rot (:rot piece)
        rot (case turn
              :cw  (mod (inc rot) 4)
              :ccw (mod (dec rot) 4)
              :180 (mod (+ rot 2) 4))]
    (assoc piece :rot rot)))

(defn reset-rotation
  {:malli/schema [:=> [:cat Piece] Piece]}
  [piece]
  (assoc piece :rot 0))

(defn ->piece
  {:malli/schema [:=> [:cat [:int {:min 1}] PieceKind Rotation RotationSystem] Piece]}
  [id kind rot rs]
  {:id id
   :kind kind
   :rot rot
   :rs rs})
