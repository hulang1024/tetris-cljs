(ns tetris.scenes.gameplay.game-view-data
  (:require
    [tetris.core.board :as b]
    [tetris.core.game :as game]
    [tetris.core.piece :as p]
    [tetris.core.rs :as rs]))

(defn container-layout-schema [& more]
  (into [:map
         [:x :int]
         [:y :int]
         [:width :int]
         [:height :int]]
        more))

(def Layout
  (container-layout-schema
    [:hold (container-layout-schema
             [:cell-size :int])]
    [:board (container-layout-schema
              [:skyline-height :int]
              [:border-width :int]
              [:cell-offset :int]
              [:cell-size :int])]
    [:next (container-layout-schema
             [:cell-size :int])]))

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
  (let [cell-size 38
        board-border-w 2
        board-padding 2
        skyline-height (* b/skyline-rows cell-size)
        board-w (+ (* b/board-cols cell-size) board-border-w (* 2 board-padding))
        board-h (+ (- (* b/board-rows cell-size) skyline-height) board-border-w (* 2 board-padding))
        gap cell-size
        hud-cell-size 26
        hold-w (* hud-cell-size 4)
        hold-h (* hud-cell-size 4)
        next-w (* hud-cell-size 4)
        next-h (* hud-cell-size 4 preview-count)
        game-view-w (+ hold-w gap board-w gap next-w)
        game-view-h board-h]
    {:width game-view-w
     :height game-view-h
     :hold {:x 0
            :y (+ cell-size skyline-height)
            :width hold-w
            :height hold-h
            :cell-size hud-cell-size}
     :board {:x (+ hold-w gap)
             :y skyline-height
             :width board-w
             :height board-h
             :skyline-height skyline-height
             :border-width board-border-w
             :cell-offset-x (+ (/ board-border-w 2) board-padding)
             :cell-offset-y (- (+ (/ board-border-w 2) board-padding)
                               skyline-height)
             :cell-size cell-size}
     :next {:x (+ hold-w gap board-w gap)
            :y (+ cell-size skyline-height)
            :width next-w
            :height next-h
            :cell-size hud-cell-size}}))

(defn- piece-cell-position [offset-x offset-y cell-size row col]
  {:x (+ offset-x (* cell-size col))
   :y (+ offset-y (* cell-size row))})

(defn- piece-position [offset-x offset-y cell-size piece row col]
  (vec (for [[cr cc] (and piece (rs/cells piece))
             :let [row (+ row cr)
                   col (+ col cc)]]
         (piece-cell-position offset-x offset-y cell-size row col))))

(defn- piece-cell-position-in-board [layout row col]
  (piece-cell-position (get-in layout [:board :cell-offset-x])
                       (get-in layout [:board :cell-offset-y])
                       (get-in layout [:board :cell-size])
                       row col))

(defn- piece-position-in-board [layout piece row col]
  (piece-position (get-in layout [:board :cell-offset-x])
                  (get-in layout [:board :cell-offset-y])
                  (get-in layout [:board :cell-size])
                  piece row col))

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
          (piece-cell-position-in-board layout r c))))

(defn current [layout game-state]
  {:color-index (modern-color (get-in game-state [:current :kind]))
   :visible (boolean (:current game-state))
   :cells (piece-position-in-board
            layout
            (:current game-state)
            (:row game-state)
            (:col game-state))})

(defn- ghost [layout game-state]
  {:color-index (modern-color (get-in game-state [:current :kind]))
   :visible (boolean (:ghost game-state))
   :cells (piece-position-in-board
            layout
            (:current game-state)
            (get-in game-state [:ghost :row])
            (get-in game-state [:ghost :col]))})

(defn hold [layout game-state]
  {:color-index (modern-color (get-in game-state [:hold :kind]))
   :visible (boolean (:hold game-state))
   :cells (piece-position
            (get-in layout [:hold :x])
            (get-in layout [:hold :y])
            (get-in layout [:hold :cell-size])
            (:hold game-state)
            (get-in game-state [:hold :row])
            (get-in game-state [:hold :col]))})

(defn next-queue [layout game-state]
  (vec (for [[i piece] (map-indexed vector (:next-queue game-state))]
         {:color-index (modern-color (:kind piece))
          :visible true
          :cells (piece-position
                   (get-in layout [:next :x])
                   (+ (get-in layout [:next :y])
                      (* i (get-in layout [:next :cell-size]) 4))
                   (get-in layout [:next :cell-size])
                   piece
                   (:row piece)
                   (:col piece))})))

(defn render-data
  {:malli.core/schema [:=> [:cat Layout game/State] GameViewData]}
  [layout game-state]
  {:blocks (blocks layout game-state)
   :current (current layout game-state)
   :ghost (ghost layout game-state)
   :hold (hold layout game-state)
   :next-queue (next-queue layout game-state)})
