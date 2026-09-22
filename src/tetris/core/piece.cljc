(ns tetris.core.piece)

(def Rotation [:enum 0 1 2 3])

(def Turn [:enum :cw :ccw :180])

(def PieceKind [:enum :s :z :l :j :i :o :t])

(def ^:const cell-filled true)
(def ^:const cell-empty  false)

(def ^:const piece-kinds [:s :z :l :j :t :i :o])

(def ShapeMatrix
  [:vector {:min 3 :max 4}
   [:vector {:min 3 :max 4}
    [:enum cell-empty cell-filled]]])

(def Piece
  [:map
   [:kind PieceKind]
   [:rot Rotation]
   [:rows :int]
   [:cols :int]
   [:shape ShapeMatrix]])

(def Orientations
  [:tuple ShapeMatrix ShapeMatrix ShapeMatrix ShapeMatrix])

(def PieceShapes
  [:map
   [:s Orientations]
   [:z Orientations]
   [:l Orientations]
   [:j Orientations]
   [:t Orientations]
   [:i Orientations]
   [:o Orientations]])

(defn rotate
  {:malli/schema [:=> [:cat Turn Rotation] Rotation]}
  [turn rot]
  (case turn
    :cw  (mod (inc rot) 4)
    :ccw (mod (dec rot) 4)
    :180 (mod (+ rot 2) 4)))

(defn reset-rotation
  {:malli/schema [:=> [:cat Piece] Piece]}
  [piece]
  (assoc piece :rot 0))

(defn- filled-cells [shape]
  (vec (for [[r row] (map-indexed vector shape)
             [c v]   (map-indexed vector row)
             :when (= v cell-filled)]
         [r c])))

(defn ->piece
  {:malli/schema [:=> [:cat PieceKind Rotation PieceShapes] Piece]}
  [kind rot piece-shapes]
  (let [shape ((piece-shapes kind) rot)]
    {:kind kind
     :rot rot
     :rows (count shape)
     :cols (count (first shape))
     :cells (filled-cells shape)
     :shape shape}))
