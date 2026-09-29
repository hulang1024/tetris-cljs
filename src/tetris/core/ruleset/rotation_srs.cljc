(ns tetris.core.ruleset.rotation-srs
  (:require
    [tetris.core.board :as b]
    [tetris.core.piece :as p]
    [tetris.core.rs
     :as rs
     :refer  [cell-empty cell-filled]
     :rename {cell-empty _ cell-filled o}]))

(def ^:private piece-shapes
  {:s [[[_ o o] [o o _] [_ _ _]]
       [[_ o _] [_ o o] [_ _ o]]
       [[_ _ _] [_ o o] [o o _]]
       [[o _ _] [o o _] [_ o _]]]

   :z [[[o o _] [_ o o] [_ _ _]]
       [[_ _ o] [_ o o] [_ o _]]
       [[_ _ _] [o o _] [_ o o]]
       [[_ o _] [o o _] [o _ _]]]

   :l [[[_ _ o] [o o o] [_ _ _]]
       [[_ o _] [_ o _] [_ o o]]
       [[_ _ _] [o o o] [o _ _]]
       [[o o _] [_ o _] [_ o _]]]

   :j [[[o _ _] [o o o] [_ _ _]]
       [[_ o o] [_ o _] [_ o _]]
       [[_ _ _] [o o o] [_ _ o]]
       [[_ o _] [_ o _] [o o _]]]

   :t [[[_ o _]  [o o o]  [_ _ _]]
       [[_ o _]  [_ o o]  [_ o _]]
       [[_ _ _]  [o o o]  [_ o _]]
       [[_ o _]  [o o _]  [_ o _]]]

   :i [[[_ _ _ _] [o o o o] [_ _ _ _] [_ _ _ _]]
       [[_ _ o _] [_ _ o _] [_ _ o _] [_ _ o _]]
       [[_ _ _ _] [_ _ _ _] [o o o o] [_ _ _ _]]
       [[_ o _ _] [_ o _ _] [_ o _ _] [_ o _ _]]]

   :o [[[_ o o] [_ o o] [_ _ _]]
       [[_ o o] [_ o o] [_ _ _]]
       [[_ o o] [_ o o] [_ _ _]]
       [[_ o o] [_ o o] [_ _ _]]]})

(defmethod rs/shape :srs [piece]
  ((piece-shapes (:kind piece)) (:rot piece)))

(defmethod rs/rotate :srs [state turn]
  (let [{:keys [board row col current]} state
        rotated (p/rotate current turn)]
    (when-not (b/collide? board rotated row col)
      (assoc state :current rotated))))

