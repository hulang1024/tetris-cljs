(ns tetris.core.piece)

;; 表示旋转的方向 上右下左
(def Dir [:enum 0 1 2 3])

(def Kind [:enum :s :z :l :j :i :o :t])

(def Shape
  [:vector {:min 3 :max 4}
   [:vector {:min 3 :max 4}
    [:maybe Kind]]])

(def Piece
  [:map
   [:kind Kind]
   [:dir Dir]
   [:size :int]
   [:shape Shape]])

;; 各个种类方块四个方向的形状
(def ^:private pieces
  {:s [[".##"
        "##."
        "..."]  
       [".#."
        ".##"
        "..#"]  
       ["...."
        ".##"
        "##."]  
       ["#.."
        "##."
        ".#."]]

   :z [["##."
        ".##"
        "..."]  
       ["..#"
        ".##"
        ".#."]  
       ["..."
        "##."
        ".##"]  
       [".#."
        "##."
        "#.."]]

   :l [["..#"
        "###"
        "..."]
       [".#."
        ".#."
        ".##"]  
       ["..."
        "###"
        "#.."]  
       ["##."
        ".#."
        ".#."]]

   :j [["#.."
        "###"
        "..."]  
       [".##"
        ".#."
        ".#."]  
       ["..."
        "###"
        "..#"]  
       [".#."
        ".#."
        "##."]]

   :t [[".#."  
        "###"  
        "..."] 
       [".#."  
        ".##"  
        ".#."] 
       ["..."  
        "###"  
        ".#."] 
       [".#."  
        "##."  
        ".#."]]

   :i [["...."
        "####"
        "...."
        "...."]
       ["..#."
        "..#."
        "..#."
        "..#."]  
       ["...."
        "...."
        "####"
        "...."]  
       [".#.."
        ".#.."
        ".#.."
        ".#.."]]

   :o [[".##."
        ".##."
        "...."]  
       [".##."
        ".##."
        "...."]  
       [".##."
        ".##."
        "...."]  
       [".##."
        ".##."
        "...."]]})

(defn rotate
  {:malli/schema [:=> [:cat [:enum :cw :ccw] Dir] Dir]}
  [turn dir]
  (case turn
    :cw  (mod (inc dir) 4)
    :ccw (mod (dec dir) 4)))

(defn kind-at
  {:malli/schema [:=> [:cat :int] Kind]}
  [index]
  (nth (keys pieces) index))

(defn shape
  {:malli/schema [:=> [:cat Kind Dir] Shape]}
  [kind dir]
  (mapv #(mapv {"." nil "#" kind} %) ((kind pieces) dir)))

(defn ->piece
  {:malli/schema [:=> [:cat Kind Dir] Piece]}
  [kind dir]
  (let [shape (shape kind dir)]
    {:kind kind
     :dir dir
     :size (count shape)
     :shape shape}))
