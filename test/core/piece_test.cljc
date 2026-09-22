(ns core.piece-test 
 (:require
   [clojure.test :refer [are deftest is testing]]
   [tetris.core.piece
     :refer  [cell-empty cell-filled ->piece reset-rotation rotate]
     :rename {cell-empty _ cell-filled o}]))

(def ^:private shapes
  {:t [[[_ o _] [o o o] [_ _ _]]
       [[_ o _] [_ o o] [_ o _]]
       [[_ _ _] [o o o] [_ o _]]
       [[_ o _] [o o _] [_ o _]]]

   :o [[[_ o o _] [_ o o _] [_ _ _ _]]
       [[_ o o _] [_ o o _] [_ _ _ _]]
       [[_ o o _] [_ o o _] [_ _ _ _]]
       [[_ o o _] [_ o o _] [_ _ _ _]]]})

(deftest piece-test
  (testing "旋转方向值"
   (are [turn rot expected] (= expected (rotate turn rot))
        :cw  0 1  :cw  1 2  :cw  2 3  :cw  3 0
        :ccw 0 3  :ccw 3 2  :ccw 2 1  :ccw 1 0
        :180 0 2  :180 1 3  :180 2 0  :180 3 1))

  (testing "重置方向值"
   (is (= {:rot 0} (reset-rotation {:rot 3}))))

  (testing "创建方块"
    (is o)
    (is (not _))
    (is (= {:kind :t
            :rot 3
            :rows 3
            :cols 3
            :cells [[0 1] [1 0] [1 1] [2 1]]
            :shape ((:t shapes) 3)}
           (->piece :t 3 shapes)))
    (is (= {:kind :o
            :rot 2
            :rows 3
            :cols 4
            :cells [[0 1] [0 2] [1 1] [1 2]]
            :shape ((:o shapes) 2)}
           (->piece :o 2 shapes)))))
