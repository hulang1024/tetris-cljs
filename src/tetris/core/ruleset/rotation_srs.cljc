(ns tetris.core.ruleset.rotation-srs
  (:require
    [tetris.core.piece
     :refer  [cell-empty cell-filled]
     :rename {cell-empty _ cell-filled o}]))

(def piece-shapes
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
