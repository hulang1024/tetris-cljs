(ns tetris.core.ruleset.rotation-srs
  (:require
    [tetris.core.board :as b]
    [tetris.core.piece
     :as p
     :refer  [->piece cell-empty cell-filled]
     :rename {cell-empty _ cell-filled o}]
    [tetris.core.ruleset :refer [rotate]]))

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

(defmethod rotate :srs [state turn]
  (let [{:keys [rotation-system board row col current]} state
        piece-shapes (:piece-shapes rotation-system)
        {:keys [id kind rot]} current
        rotated (->piece id kind (p/rotate turn rot) piece-shapes)]
    (if (b/collide? board rotated row col)
      state
      (assoc state :current rotated))))

