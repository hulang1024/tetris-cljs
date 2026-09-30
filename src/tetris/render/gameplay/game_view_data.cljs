(ns tetris.render.gameplay.game-view-data
  (:require
    [clojure.math :as math]
    [tetris.core.board :as b]
    [tetris.core.game :as game]
    [tetris.core.piece :as p]
    [tetris.core.rs :as rs]))

(defn container-schema [& more]
  (into [:map
         [:x number?]
         [:y number?]
         [:width :int]
         [:height :int]]
        more))

(def Cell
  [:map
   [:base-x number?]
   [:base-y number?]
   [:size :int]
   [:gap :int]])

(def Layout
  [:map
   [:width :int]
   [:height :int]
   [:hold
    (container-schema
      [:cell Cell])]
   [:board
    (container-schema
      [:skyline-height :int]
      [:border-width :int]
      [:cell Cell])]
   [:next
    (container-schema
      [:cell Cell])]])

(def DisplayPiece
  [:map
   [:color-index :int]
   [:visible :boolean]
   [:cells
    [:vector
     [:map
      [:x number?]
      [:y number?]]]]])

(def GameViewData
  [:map
   [:current DisplayPiece]
   [:ghost DisplayPiece]
   [:hold DisplayPiece]
   [:next [:vector DisplayPiece]]
   [:blocks
    [:vector
     [:map
      [:id :int]
      [:color-index :int]
      [:x number?]
      [:y number?]]]]])

(defn calc-layout
  {:malli/schema [:=> [:cat :int] Layout]}
  [preview-count]
  (let [cell-size 32
        cell-gap 2
        board-padding cell-gap
        board-border-w 3
        skyline-height (+ (* b/skyline-rows cell-size)
                          (* b/skyline-rows cell-gap))
        board-w (+ (* b/board-cols cell-size)
                   (* (dec b/board-cols) cell-gap)
                   board-border-w
                   (* 2 board-padding))
        board-h (+ (- (* b/board-rows cell-size) skyline-height)
                   (* (dec b/board-rows) cell-gap) 
                   board-border-w
                   (* 2 board-padding))
        area-gap cell-size
        hud-cell-scale 0.6
        hud-cell-size (math/floor (* cell-size hud-cell-scale))
        hud-cell-gap (math/floor (* cell-gap hud-cell-scale)) 
        hold-w (+ (* hud-cell-size 4) (* hud-cell-gap 3))
        hold-h (+ (* hud-cell-size 4) (* hud-cell-gap 3))
        next-w (+ (* hud-cell-size 4) (* hud-cell-gap 3))
        next-h (+ (* hud-cell-size 4 preview-count) (* hud-cell-gap 3))
        game-view-w (+ hold-w area-gap board-w area-gap next-w)
        game-view-h board-h]
    {:width game-view-w
     :height game-view-h
     :board {:x (+ hold-w area-gap)
             :y 0
             :width board-w
             :height board-h
             :skyline-height skyline-height
             :border-width board-border-w
             :cell {:base-x (+ (/ board-border-w 2) board-padding)
                    :base-y (- (+ (/ board-border-w 2) board-padding)
                               skyline-height)
                    :size cell-size
                    :gap cell-gap}}
     :hold {:x 0
            :y cell-size
            :width hold-w
            :height hold-h
            :cell {:base-x 0
                   :base-y 0
                   :size hud-cell-size
                   :gap hud-cell-gap}}
     :next {:x (+ hold-w area-gap board-w area-gap)
            :y cell-size
            :width next-w
            :height next-h
            :cell {:base-x 0
                   :base-y 0
                   :size hud-cell-size
                   :gap hud-cell-gap}}}))

(defn- piece-cell-position [cell-config row col]
  (let [{:keys [base-x base-y size gap]} cell-config]
    {:x (+ base-x (* col gap) (* size col))
     :y (+ base-y (* row gap) (* size row))}))

(defn- piece-position [cell-config cell-indices row col]
  (vec (for [[cr cc] cell-indices
             :let [row (+ row cr)
                   col (+ col cc)]]
         (piece-cell-position cell-config row col))))

(defn modern-color [kind]
  (+ 2 (first (keep-indexed
                (fn [i k] (when (= k kind) i))
                p/piece-kinds))))

(defn blocks [layout game-state]
  (vec (for [[r xs] (map-indexed vector (:board game-state))
             [c cell] (map-indexed vector xs)
             :when cell]
         (conj {:id (:id cell)
                :color-index (modern-color (:kind cell))}
               (piece-cell-position (get-in layout [:board :cell]) r c)))))

(defn current [layout game-state]
  {:color-index (modern-color (get-in game-state [:current :kind]))
   :visible (boolean (:current game-state))
   :cells (piece-position
            (get-in layout [:board :cell])
            (and (:current game-state)
                 (rs/cell-indices (:current game-state)))
            (:row game-state)
            (:col game-state))})

(defn- ghost [layout game-state]
  (let [ghost (game/ghost game-state)]
    {:color-index (modern-color (get-in game-state [:current :kind]))
     :visible (boolean ghost)
     :cells (piece-position
              (get-in layout [:board :cell])
              (and (:current game-state)
                   (rs/cell-indices (:current game-state)))
              (:row ghost)
              (:col ghost))}))

(defn center-hud-piece [container-width cell-config piece]
  (if piece
    (let [shape (rs/trimed-shape piece)
          cell-indices (rs/shape->cell-indices shape)
          cols (count (first shape))
          base-x (/ (- container-width (* cols (:size cell-config))) 2)]
      [(assoc cell-config :base-x base-x) cell-indices])
    [nil []]))

(defn hold [layout game-state]
  (let [[cell-config cell-indices] (center-hud-piece
                                     (get-in layout [:hold :width])
                                     (get-in layout [:hold :cell])
                                     (:hold game-state))
        cells (piece-position cell-config cell-indices 0 0)]
    {:color-index (modern-color (get-in game-state [:hold :kind]))
     :visible (boolean (:hold game-state))
     :cells cells}))

(defn next-queue [layout game-state]
  (vec (for [[r piece] (map-indexed vector (:next-queue game-state))
             :let [[cell-config cell-indices] (center-hud-piece
                                                (get-in layout [:next :width])
                                                (get-in layout [:next :cell])
                                                piece)]]
         {:color-index (modern-color (:kind piece))
          :visible true
          :cells (piece-position cell-config cell-indices (* r 4) 0)})))

(defn render-data
  {:malli/schema [:=> [:cat Layout game/State] GameViewData]}
  [layout game-state]
  {:blocks (blocks layout game-state)
   :current (current layout game-state)
   :ghost (ghost layout game-state)
   :hold (hold layout game-state)
   :next (next-queue layout game-state)})
