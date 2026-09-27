(ns tetris.scenes.gameplay.game-view-data
  (:require
    [tetris.core.board :as b]
    [tetris.core.game :as game]
    [tetris.core.piece :as p]
    [tetris.render.constants :refer [design-height design-width]]))

(defn container-layout-schema [& more]
  (into [:map
         [:x :int]
         [:y :int]
         [:width :int]
         [:height :int]]
        more))

(def Layout
  (container-layout-schema
    [:hold (container-layout-schema)]
    [:board (container-layout-schema
              [:skyline-height :int]
              [:border-width :int]
              [:cell-offset :int]
              [:cell-size :int])]
    [:next (container-layout-schema)]))

(def DisplayPiece
  [:map
   [:color-index :int]
   [:visible :boolean]
   [:cells
    [:vector
     [:map
      [:x :int]
      [:y :int]]]]])

(def GameViewData
  [:map
   [:layout Layout]
   [:piece-style :string]
   [:current DisplayPiece]
   [:ghost DisplayPiece]
   [:hold DisplayPiece]
   [:next-queue [:vector DisplayPiece]]
   [:blocks
    [:vector
     [:map
      [:id :int]
      [:color-index :int]
      [:x :int]
      [:y :int]]]]])

(defn calc-layout
  {:malli.core/schema [:=> [:cat :int] Layout]}
  [preview-count]
  (let [screen-w design-width
        screen-h design-height
        cell-size 38
        board-border-w 3
        board-padding 2
        skyline-height (* b/skyline-rows cell-size)
        board-w (+ (* b/board-cols cell-size) board-border-w (* 2 board-padding))
        board-h (+ (- (* b/board-rows cell-size) skyline-height) board-border-w (* 2 board-padding))
        gap cell-size
        hold-w (* cell-size 4)
        hold-h (* cell-size 4)
        next-w (* cell-size 4)
        next-h (* cell-size 4 preview-count)
        game-view-w (+ hold-w gap board-w gap next-w)
        game-view-h board-h]
    {:x (/ (- screen-w game-view-w) 2)
     :y (/ (- screen-h game-view-h) 2)
     :width game-view-w
     :height game-view-h
     :hold {:x 0
            :y 0
            :width hold-w
            :height hold-h}
     :board {:x (+ hold-w gap)
             :y skyline-height
             :width board-w
             :height board-h
             :skyline-height skyline-height
             :border-width board-border-w
             :cell-offset (+ (/ board-border-w 2) board-padding)
             :cell-size cell-size}
     :next {:x (+ hold-w gap board-w gap)
            :y 0
            :width next-w
            :height next-h}}))

(defn- cell-position-in-board [layout row col]
  (let [board-layout (get-in layout [:board])
        offset-x (:cell-offset board-layout)
        offset-y (- (:cell-offset board-layout) (:skyline-height board-layout))
        cell-size (:cell-size board-layout)]
    {:x (+ offset-x (* cell-size col))
     :y (+ offset-y (* cell-size row))}))

(defn- piece-position-in-board [layout piece row col]
  (vec (for [[cr cc] (:cells piece)
             :let [row (+ row cr)
                   col (+ col cc)]]
         (cell-position-in-board layout row col))))

(defn modern-color [kind]
  (+ 2 (first (keep-indexed
                (fn [i k] (when (= k kind) i))
                p/piece-kinds))))

(defn blocks [layout game-state]
  (for [[r xs] (map-indexed vector (:board game-state))
        [c cell] (map-indexed vector xs)
        :when cell]
    (conj {:id (:id cell)
           :color-index (modern-color (:kind cell))}
          (cell-position-in-board layout r c))))

(defn current [layout game-state]
  {:color-index (modern-color (get-in game-state [:current :kind]))
   :visible (:current game-state)
   :cells (piece-position-in-board
            layout
            (:current game-state)
            (:row game-state)
            (:col game-state))})

(defn- ghost [layout game-state]
  {:color-index 0
   :visible (:current game-state)
   :cells (piece-position-in-board
            layout
            (:current game-state)
            (get-in game-state [:ghost :row])
            (get-in game-state [:ghost :col]))})

(defn render-data
  {:malli.core/schema [:=> [:cat Layout game/State] GameViewData]}
  [layout game-state]
  {:blocks (blocks layout game-state)
   :current (current layout game-state)
   :ghost (ghost layout game-state)
   :hold nil
   :next-queue []})
