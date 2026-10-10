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
;; 1 = 初始态顺时针旋转（右转）后的状态
;; 2 = 初始态旋转 180° 后的状态
;; 3 = 初始态逆时针旋转（左转）后的状态
;; [x y] +x=right +y=up
;; Z S J L T
(def ^:private wall-tick-table-standard
  {[0 1] [[0  0] [-1  0] [-1 +1] [ 0 -2] [-1 -2]]
   [1 0] [[0  0] [+1  0] [+1 -1] [ 0 +2] [+1 +2]]
   [1 2] [[0  0] [+1  0] [+1 -1] [ 0 +2] [+1 +2]]
   [2 1] [[0  0] [-1  0] [-1 +1] [ 0 -2] [-1 -2]]
   [2 3] [[0  0] [+1  0] [+1 +1] [ 0 -2] [+1 -2]]
   [3 2] [[0  0] [-1  0] [-1 -1] [ 0 +2] [-1 +2]]
   [3 0] [[0  0] [-1  0] [-1 -1] [ 0 +2] [-1 +2]]
   [0 3] [[0  0] [+1  0] [+1 +1] [ 0 -2] [+1 -2]]})
;; I
(def ^:private wall-tick-table-i
  {[0 1] [[0  0] [-2  0] [+1  0] [-2 -1] [+1 +2]]
   [1 0] [[0  0] [+2  0] [-1  0] [+2 +1] [-1 -2]]
   [1 2] [[0  0] [-1  0] [+2  0] [-1 +2] [+2 -1]]
   [2 1] [[0  0] [+1  0] [-2  0] [+1 -2] [-2 +1]]
   [2 3] [[0  0] [+2  0] [-1  0] [+2 +1] [-1 -2]]
   [3 2] [[0  0] [-2  0] [+1  0] [-2 -1] [+1 +2]]
   [3 0] [[0  0] [+1  0] [-2  0] [+1 -2] [-2 +1]]
   [0 3] [[0  0] [-1  0] [+2  0] [-1 +2] [+2 -1]]})

(defn- wall-tick-tests [piece-kind rot target-rot]
  (case piece-kind
    :o [[0 0]]
    (let [table (if (= piece-kind :i)
                  wall-tick-table-i
                  wall-tick-table-standard)]
      (get table [rot target-rot]))))

(defmethod rs/shape :srs [piece]
  ((piece-shapes (:kind piece)) (:rot piece)))

(defmethod rs/rotate :srs [state turn]
  (let [{:keys [board row col current]} state
        rotated (p/rotate current turn)
        tests (wall-tick-tests (:kind current)
                               (:rot current)
                               (:rot rotated))]
    (when-let [[row col]
               (loop [tests tests]
                 (when tests
                   (let [[offset-c offset-r] (first tests)
                         row (- row offset-r)
                         col (+ col offset-c)]
                     (if (b/collide? board rotated row col)
                       (recur (next tests))
                       [row col]))))]
      (assoc state
             :current rotated
             :row row
             :col col))))
