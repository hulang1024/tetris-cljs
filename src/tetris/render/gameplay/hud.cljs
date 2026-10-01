(ns tetris.render.gameplay.hud 
  (:require
    ["pixi.js" :as pixi]
    [tetris.render.gameplay.piece :refer [piece-container render-piece]]))

(defn hold [layout]
  (let [piece (piece-container
                {:label "hold"
                 :x (:x layout)
                 :y (:y layout)
                 :cell-size (get-in layout [:cell :size])})]
    piece))

(defn preview [layout preview-count]
  (let [container (pixi/Container. #js {:label "next"
                                        :x (:x layout)
                                        :y (:y layout)})]
    (dotimes [n preview-count]
      (.addChild container
                 (piece-container {:label (str "preview-" n)
                                   :cell-size (get-in layout [:cell :size])})))
    container))

(defn lines-view [layout]
  (let [view (pixi/Container. #js {:label "lines"
                                   :x 0
                                   :y (get-in layout [:lines :y])})
        title (pixi/Text.
                #js {:label "title"
                     :x 0
                     :y 0
                     :text "LINES"
                     :style #js {:fontFamily "Arial"
                                 :fontSize 30
                                 :fill "#cccccc"}})
        number (pixi/Text.
                 #js {:label "number"
                      :x (get-in layout [:hud :lines :number-x])
                      :y (+ 30 16)
                      :text "0"
                      :style #js {:fontFamily "Arial"
                                  :fontWeight "bold"
                                  :fontSize 30
                                  :fill "#cccccc"}})]
    (.addChild view title)
    (.addChild view number)
    view))

(defn create [layout options]
  (let [hud (pixi/Container. #js {:label "hub"})
        hold (hold (:hold layout))
        preview (preview (:next layout) (:preview-count options))
        lines-view (lines-view layout)]
    (.addChild hud hold)
    (.addChild hud preview)
    (.addChild hud lines-view)
    hud))

(defn- render-hold [view data]
  (when (seq (get-in data [:hold :cells]))
    (render-piece @view
                  (.getChildByLabel ^js (:hud @view) "hold")
                  (:hold data))))

(defn- render-next [view data]
  (when (seq (:next data))
    (doseq [[piece-v piece-d]
            (map vector
                 (.-children (.getChildByLabel ^js (:hud @view) "next"))
                 (:next data))]
      (render-piece @view piece-v piece-d))))

(defn- render-lines [view game-state]
  (let [lines-view (.getChildByLabel ^js (:hud @view) "lines")
        number-view (.getChildByLabel lines-view "number")]
    (set! (.-text number-view) (:lines-cleared game-state))))

(defn render! [view data game-state]
  (render-hold view data)
  (render-next view data)
  (render-lines view game-state))

