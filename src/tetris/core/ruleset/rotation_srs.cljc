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

;; 0 = 初始态
;; R = 初始态顺时针旋转（右转）后的状态
;; 2 = 初始态旋转 180° 后的状态
;; L = 初始态逆时针旋转（左转）后的状态
;; [x y] +x=right +y=up
(def R 1)
(def L 3)
;; Z S J L T
(def ^:private wall-tick-table-o
  {[0 R] [[0  0] [-1  0] [-1 +1] [ 0 -2] [-1 -2]]
   [R 0] [[0  0] [+1  0] [+1 -1] [ 0 +2] [+1 +2]]
   [R 2] [[0  0] [+1  0] [+1 -1] [ 0 +2] [+1 +2]]
   [2 R] [[0  0] [-1  0] [-1 +1] [ 0 -2] [-1 -2]]
   [2 L] [[0  0] [+1  0] [+1 +1] [ 0 -2] [+1 -2]]
   [L 2] [[0  0] [-1  0] [-1 -1] [ 0 +2] [-1 +2]]
   [L 0] [[0  0] [-1  0] [-1 -1] [ 0 +2] [-1 +2]]
   [0 L] [[0  0] [+1  0] [+1 +1] [ 0 -2] [+1 -2]]})
;; I
(def ^:private wall-tick-table-i
  {[0 R] [[0  0] [-2  0] [+1  0] [-2 -1] [+1 +2]]
   [R 0] [[0  0] [+2  0] [-1  0] [+2 +1] [-1 -2]]
   [R 2] [[0  0] [-1  0] [+2  0] [-1 +2] [+2 -1]]
   [2 R] [[0  0] [+1  0] [-2  0] [+1 -2] [-2 +1]]
   [2 L] [[0  0] [+2  0] [-1  0] [+2 +1] [-1 -2]]
   [L 2] [[0  0] [-2  0] [+1  0] [-2 -1] [+1 +2]]
   [L 0] [[0  0] [+1  0] [-2  0] [+1 -2] [-2 +1]]
   [0 L] [[0  0] [-1  0] [+2  0] [-1 +2] [+2 -1]]})

(defn- wall_tick_tests [piece-kind rot target-rot]
  (let [table (if (= piece-kind :i)
                wall-tick-table-i
                wall-tick-table-o)
        k [rot target-rot]]
    (get table k)))

(defmethod rs/shape :srs [piece]
  ((piece-shapes (:kind piece)) (:rot piece)))

(defmethod rs/rotate :srs [state turn]
  (let [{:keys [board row col current]} state
        rotated (p/rotate current turn)
        tests (wall_tick_tests (:kind current)
                               (:rot current)
                               (:rot rotated))]
    (letfn [(test [tests]
              (when tests
                (let [[offset-c offset-r] (first tests)
                      row (- row offset-r)
                      col (+ col offset-c)]
                  (if (b/collide? board rotated row col)
                    (recur (next tests))
                    [row col]))))]
      (when-let [[row col] (test tests)]
        (assoc state
               :current rotated
               :row row
               :col col)))))

