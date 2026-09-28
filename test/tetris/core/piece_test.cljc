(ns tetris.core.piece-test 
  (:require
    [clojure.test :refer [are deftest is testing]]
    [tetris.core.piece :refer [->piece reset-rotation rotate]]))

(deftest piece-test
  (testing "旋转方向值"
    (are [turn rot expected] (= expected
                                (:rot (rotate (->piece 1 :t rot :srs) turn)))
         :cw  0 1  :cw  1 2  :cw  2 3  :cw  3 0
         :ccw 0 3  :ccw 3 2  :ccw 2 1  :ccw 1 0
         :180 0 2  :180 1 3  :180 2 0  :180 3 1))

  (testing "重置方向值"
    (is (= 0 (:rot (reset-rotation (->piece 1 :t 2 :nrs-nes))))))

  (testing "创建方块"
    (is (= {:id 1
            :kind :t
            :rot 3
            :rs :nrs-nes}
           (->piece 1 :t 3 :nrs-nes)))))
