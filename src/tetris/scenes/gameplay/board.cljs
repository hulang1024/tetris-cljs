(ns tetris.scenes.gameplay.board
  (:require-macros [shadow.cljs.modern :refer [defclass]])
  (:require ["excalibur" :as ex]
            [tetris.scenes.gameplay.piece :refer [Piece]]
            [tetris.render :as r]
            [tetris.core.board :as b]))

(defn find-cells-in-row [row pieces]
  (->> pieces
       (map #(.get-cells ^js %))
       (flatten)
       (filter #(let [[pr _] (r/pos->cell (.-pos (.-parent %)))
                      [r _] (r/pos->cell (.-pos %))]
                  (= row (+ pr r))))))

(defn empty-row? [row pieces]
  (empty? (find-cells-in-row row pieces)))

(defn drop-row [row to-pos-row pieces]
  ;; FIXME: cell是相对定位无法修改
  (run! #(set! (.-y (.-pos %)) (r/row->pos to-pos-row)) (find-cells-in-row row pieces)))

(defclass Board (extends ex/Actor)
  (field pieces)
  (field piece)

  (constructor [this]
    (super #js {:x (/ (- r/game-width r/board-width) 2)
                :y (/ (- r/game-height r/board-height) 2)
                :anchor ex/Vector.Zero}))

  Object
  (onInitialize [this]
    (set! (.-pieces this) [])
    (set! (.-piece this) nil)
    (let [rect (ex/Rectangle.
                 #js {:width r/board-width
                      :height r/board-height
                      :color (ex/Color.fromHex "#111111")})]
      (.add (.-graphics this) rect)))

  (spawn-piece [this state]
    (let [{:keys [row col current]} state
          ^js piece (Piece. (:kind current) (:dir current))]
      (.addChild this piece)
      (when-let [prev-piece (.-piece this)]
        (set! (.-pieces this) (conj (.-pieces this) prev-piece)))
      (set! (.-piece this) piece)))
  
  (clear-lines [this line-clear-event]
    (let [pieces (.-pieces this)
          cells-clear (find-cells-in-row (:rows line-clear-event) pieces)]
      (run! #(.removeChild (.-parent %) %) cells-clear)
      (run! (fn [empty-r]
              (letfn [(find-drop-row [r]
                        (if (and (<= 0 r)
                                 (empty-row? r pieces))
                          (recur (dec r))
                          r))]
                (let [row (find-drop-row (dec empty-r))]
                  (when (>= row 0)
                    (drop-row row empty-r pieces)))))
            (:rows line-clear-event))))

  (render-game-state [this state]
    (let [events (set (:events state))]
      (when-let [event (first (filter #(= (:type %) :hard-drop) events))]
        (let [[row col] (:pos event)]
          (set! (.-pos piece) (r/cell->pos row col))))
      (when (contains? events {:type :spawn-piece})
        (.spawn-piece this state))
      (when-let [event (first (filter #(= (:type %) :line-clear) events))]
        (.clear-lines this event))
      (set! (.-pos piece) (r/cell->pos (:row state) (:col state)))
      (.set-dir ^js piece (get-in state [:current :dir])))))

