(ns tetris.core.ruleset.rotation-nrs 
  (:require
    [tetris.core.board :as b]
    [tetris.core.piece :as p]
    [tetris.core.rs
     :as rs
     :refer  [cell-empty cell-filled]
     :rename {cell-empty _ cell-filled o}]))

(def ^:private j-shapes
  [[[_ _ _] [o o o] [_ _ o]]
   [[_ o _] [_ o _] [o o _]]
   [[o _ _] [o o o] [_ _ _]]
   [[_ o o] [_ o _] [_ o _]]])

(def ^:private l-shapes
  [[[_ _ _] [o o o] [o _ _]]
   [[o o _] [_ o _] [_ o _]]
   [[_ _ o] [o o o] [_ _ _]]
   [[_ o _] [_ o _] [_ o o]]])

(def ^:private t-shapes
  [[[_ _ _]  [o o o]  [_ o _]]
   [[_ o _]  [o o _]  [_ o _]]
   [[_ o _]  [o o o]  [_ _ _]]
   [[_ o _]  [_ o o]  [_ o _]]])

(def ^:private nes-piece-shapes
  {:l l-shapes
   :j j-shapes
   :t t-shapes
   :s [[[_ _ _] [_ o o] [o o _]]
       [[_ o _] [_ o o] [_ _ o]]
       [[_ _ _] [_ o o] [o o _]]
       [[_ o _] [_ o o] [_ _ o]]]

   :z [[[_ _ _] [o o _] [_ o o]]
       [[_ _ o] [_ o o] [_ o _]]
       [[_ _ _] [o o _] [_ o o]]
       [[_ _ o] [_ o o] [_ o _]]]

   :i [[[_ _ _ _] [_ _ _ _] [o o o o] [_ _ _ _]]
       [[_ _ o _] [_ _ o _] [_ _ o _] [_ _ o _]]
       [[_ _ _ _] [_ _ _ _] [o o o o] [_ _ _ _]]
       [[_ _ o _] [_ _ o _] [_ _ o _] [_ _ o _]]]

   :o [[[_ _ _ _] [_ o o _] [_ o o _] [_ _ _ _]]
       [[_ _ _ _] [_ o o _] [_ o o _] [_ _ _ _]]
       [[_ _ _ _] [_ o o _] [_ o o _] [_ _ _ _]]
       [[_ _ _ _] [_ o o _] [_ o o _] [_ _ _ _]]]})

(def ^:private game-boy-piece-shapes
  {:l l-shapes
   :j j-shapes
   :t t-shapes
   :s [[[_ _ _] [_ o o] [o o _]]
       [[o _ _] [o o _] [_ o _]]
       [[_ _ _] [_ o o] [o o _]]
       [[o _ _] [o o _] [_ o _]]]

   :z [[[_ _ _] [o o _] [_ o o]]
       [[_ o _] [o o _] [o _ _]]
       [[_ _ _] [o o _] [_ o o]]
       [[_ o _] [o o _] [o _ _]]]

   :i [[[_ _ _ _] [_ _ _ _] [o o o o] [_ _ _ _]]
       [[_ o _ _] [_ o _ _] [_ o _ _] [_ o _ _]]
       [[_ _ _ _] [_ _ _ _] [o o o o] [_ _ _ _]]
       [[_ o _ _] [_ o _ _] [_ o _ _] [_ o _ _]]]

   :o [[[_ _ _ _] [_ o o _] [_ o o _] [_ _ _ _]]
       [[_ _ _ _] [_ o o _] [_ o o _] [_ _ _ _]]
       [[_ _ _ _] [_ o o _] [_ o o _] [_ _ _ _]]
       [[_ _ _ _] [_ o o _] [_ o o _] [_ _ _ _]]]})

(def ^:private dx-piece-shapes
  {:l l-shapes
   :j j-shapes
   :t t-shapes
   :s [[[_ o o] [o o _] [_ _ _]]
       [[_ o _] [_ o o] [_ _ o]]
       [[_ _ _] [_ o o] [o o _]]
       [[o _ _] [o o _] [_ o _]]]

   :z [[[o o _] [_ o o] [_ _ _]]
       [[_ _ o] [_ o o] [_ o _]]
       [[_ _ _] [o o _] [_ o o]]
       [[_ o _] [o o _] [o _ _]]]

   :i [[[_ _ _ _] [o o o o] [_ _ _ _] [_ _ _ _]]
       [[_ _ o _] [_ _ o _] [_ _ o _] [_ _ o _]]
       [[_ _ _ _] [_ _ _ _] [o o o o] [_ _ _ _]]
       [[_ o _ _] [_ o _ _] [_ o _ _] [_ o _ _]]]

   :o [[[_ o o _] [_ o o _] [_ _ _ _]]
       [[_ o o _] [_ o o _] [_ _ _ _]]
       [[_ o o _] [_ o o _] [_ _ _ _]]
       [[_ o o _] [_ o o _] [_ _ _ _]]]})

(defn- shape [piece shape-table]
  ((shape-table (:kind piece)) (:rot piece)))

(defn- rotate [state turn]
  (let [{:keys [board row col current]} state
        rotated (p/rotate current turn)]
    (if (b/collide? board rotated row col)
      state
      (assoc state :current rotated))))

(defmethod rs/shape :nrs-nes [piece]
  (shape piece nes-piece-shapes))

(defmethod rs/shape :nrs-game-boy [piece]
  (shape piece game-boy-piece-shapes))

(defmethod rs/shape :nrs-dx [piece]
  (shape piece dx-piece-shapes))

(defmethod rs/rotate :nrs-nes [state turn] (rotate state turn))
(defmethod rs/rotate :nrs-game-boy [state turn] (rotate state turn))
(defmethod rs/rotate :nrs-dx [state turn] (rotate state turn))

