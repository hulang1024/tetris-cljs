(ns core.board-test
  (:require
    [clojure.test :refer [deftest is testing]]
    [tetris.core.board :refer [board-cols board-rows clear-rows collide?
                               empty-board filled? find-full-row-indices
                               lock-piece valid-position?]]
    [tetris.core.piece
     :refer  [->piece cell-empty cell-filled]
     :rename {cell-empty _ cell-filled o}]))

(def ^:private piece-shapes
  {:t [[[_ o _] [o o o] [_ _ _]]
       [[_ o _] [_ o o] [_ o _]]
       [[_ _ _] [o o o] [_ o _]]
       [[_ o _] [o o _] [_ o _]]]

   :o [[[_ o o _] [_ o o _] [_ _ _ _]]
       [[_ o o _] [_ o o _] [_ _ _ _]]
       [[_ o o _] [_ o o _] [_ _ _ _]]
       [[_ o o _] [_ o o _] [_ _ _ _]]]})

(defn- filled-cells [matrix]
  (for [[r xs] (map-indexed vector matrix)
        [c v]  (map-indexed vector xs)
        :when v]
    [r c]))

(defn- add-cell [cell-0 cell-1]
  (mapv + cell-0 cell-1))

(deftest board-test
  (is (and (valid-position? 0 0)
           (not (valid-position? -1 -1))
           (not (valid-position? board-rows board-cols))))

  (is (empty? (filled-cells empty-board)))

  (is (not (filled? empty-board 0 0)))

  (testing "锁定"
    ;; 填充方格
    (doseq [[kind shapes] piece-shapes
            [rot _] (map-indexed vector shapes)
            :let [row 4 col 3
                  piece (->piece kind rot piece-shapes)
                  board (lock-piece empty-board piece row col)]]
      (is (= (map add-cell
                  (repeat (count (:cells piece)) [row col])
                  (:cells piece))
             (filled-cells board))))
    ;; 与已有方格重叠时不填充空白
    (let [t0-piece (->piece :t 0 piece-shapes)
          t1-piece (->piece :t 1 piece-shapes)
          t2-piece (->piece :t 2 piece-shapes)
          t3-piece (->piece :t 3 piece-shapes)
          board (-> empty-board
                    (lock-piece t0-piece 3 0)
                    (lock-piece t1-piece 1 -1)
                    (lock-piece t2-piece 0 1)
                    (lock-piece t3-piece 2 2))]
      (is (= (for [r (range 1 5) c (range 4)] [r c])
             (filled-cells board)))))

  (testing "碰撞"
    ;; 允许空白超出范围
    (let [o-piece (->piece :o 0 piece-shapes)]
      (is (and (collide? empty-board o-piece 5 -2)
               (not (collide? empty-board o-piece 5 -1))
               (collide? empty-board o-piece 5 (- board-cols 2))
               (not (collide? empty-board o-piece 5 (- board-cols 3))))))
    ;; 与已有方格重叠
    (let [o-piece (->piece :o 0 piece-shapes)
          o-row 3 o-col 4
          board (lock-piece empty-board o-piece o-row o-col)]
      (doseq [offset-r (range 2)
              offset-c (range 2)]
        (is (collide? board o-piece (+ o-row offset-r) (+ o-col offset-c))))))

  (testing "查找满行"
    (is (empty? (find-full-row-indices empty-board)))
    (is (= #{3} (find-full-row-indices
                  (assoc empty-board 3 (vec (repeat board-cols :s)))))))

  (testing "清空行"
    (is (empty? (find-full-row-indices
                  (clear-rows
                    (assoc empty-board
                           3 (vec (repeat board-cols :s))
                           9 (vec (repeat board-cols :l)))
                    #{3 9}))))))
