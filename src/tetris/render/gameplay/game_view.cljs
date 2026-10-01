(ns tetris.render.gameplay.game-view
  (:require
    ["pixi.js" :as pixi]
    [tetris.core.game :as game]
    [tetris.core.input :as input]
    [tetris.render.constants :refer [v-screen-height v-screen-width]]
    [tetris.render.gameplay.game-view-data :refer [calc-layout render-data]]
    [tetris.render.gameplay.piece :refer [create-piece-cell-textures]]
    [tetris.render.gameplay.matrix :as matrix]
    [tetris.render.gameplay.hud :as hud]
    [tetris.render.gameplay.tween-mgr :as tm]))

(defn create [^js scene options]
  (let [layout (calc-layout (:preview-count options))
        ^js game-view (pixi/Container.
                        #js {:label "game-view"
                             :x (/ (- v-screen-width (:width layout)) 2)
                             :y (/ (- v-screen-height (:height layout)) 2)})
        board (matrix/create (:board layout))
        hold (hud/hold (:hold layout))
        preview (hud/preview (:next layout))]
    (.addChild game-view board)
    (.addChild game-view hold)
    (.addChild game-view preview)
    (.addChild scene game-view)
    {:layout layout
     :container game-view
     :board board
     :hold-container hold
     :next-container preview
     :piece-cell-textures (create-piece-cell-textures (:piece-style options))
     :blocks {}
     :ghost nil
     :current nil
     :hold nil
     :next nil
     :tweens {}}))

(defn render!
  {:malli/schema [:=> [:cat some? game/State input/InputState] :any]}
  [view game-state input]
  (let [data (render-data (:layout @view) game-state)]
    (tm/update-tweens view)
    (matrix/render! view data game-state input)
    (hud/render! view data)))
