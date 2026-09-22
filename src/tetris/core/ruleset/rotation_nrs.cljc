(ns tetris.core.ruleset.rotation-nrs 
  (:require
    [tetris.core.board :as b]
    [tetris.core.piece
     :as p
     :refer  [->piece cell-empty cell-filled]
     :rename {cell-empty _ cell-filled o}]
    [tetris.core.ruleset :refer [rotate]]))

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

(def nes-piece-shapes
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

(def game-boy-piece-shapes
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

(def dx-piece-shapes
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

(defmethod rotate :nrs [state turn]
  (let [{:keys [this board row col current]} state
        piece-shapes (:piece-shapes this)
        {:keys [kind rot]} current
        rotated (->piece kind (p/rotate turn rot) piece-shapes)]
    (if (b/collide? board rotated row col)
      state
      (assoc state :current rotated))))

