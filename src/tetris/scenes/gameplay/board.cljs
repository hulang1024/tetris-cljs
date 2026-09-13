(ns tetris.scenes.gameplay.board
  (:require-macros [shadow.cljs.modern :refer [defclass]])
  (:require ["excalibur" :as ex]
            [tetris.render :as r]
            [tetris.scenes.gameplay.piece :refer [create-piece set-pos set-dir]]))

(defn find-cells [rows cells]
  (filter #(let [[r _] (r/pos->cell (.-pos %))] (contains? (set rows) r))
          cells))

(defn empty-row? [row cells]
  (empty? (find-cells [row] cells)))

(defn drop-row [row to-pos-row cells]
  (run! #(.moveTo (.delay (.-actions ^js %) 300)
                  (ex/vec (.. ^js % -pos -x) (r/cell-pos to-pos-row))
                  800)
        (find-cells [row] cells)))

(defclass Board (extends ex/Actor)
  (field cells)
  (field piece)
  (field ghost)

  (constructor [this]
    (super #js {:x (/ (- r/game-width r/board-width) 2)
                :y (/ (- r/game-height r/board-height) 2)
                :anchor ex/Vector.Zero}))

  Object
  (onInitialize [this]
    (set! (.-cells this) [])
    (set! (.-piece this) nil)
    (set! (.-ghost this) nil)
    (let [rect (ex/Rectangle.
                 #js {:width r/board-width
                      :height r/board-height
                      :color (ex/Color.fromHex "#111111")})]
      (.add (.-graphics this) rect)))

  (spawn-piece [this state]
    (when-let [piece (.-piece this)]
      (set! (.-cells this) (into (.-cells this) (:cells piece))))
    (when-let [ghost (.-ghost this)]
      (run! #(.kill ^js %) (:cells ghost)))
    (let [{:keys [row col current]} state
          {:keys [kind dir]} current
          piece (create-piece kind dir)
          ghost (create-piece kind dir true)]
      (run! #(.addChild this %) (:cells piece))
      (run! #(.addChild this %) (:cells ghost))
      (set! (.-piece this) piece)
      (set! (.-ghost this) ghost)))
  
  (clear-lines [this line-clear-event]
    (let [cells (.-cells this)
          cells-clear (find-cells (:rows line-clear-event) cells)]
      (run! #(.die (.blink (.-actions ^js %) 33 33 2))
            cells-clear)))

  (render-game-state [this state]
    (let [events (set (:events state))]
      (when-let [event (first (filter #(= (:type %) :hard-drop) events))]
        (let [[row col] (:pos event)]
          (set! (.-piece this) (set-pos (.-piece this) row col))))
      (when (contains? events {:type :spawn-piece})
        (.spawn-piece this state))
      (when-let [event (first (filter #(= (:type %) :line-clear) events))]
        (.clear-lines this event))

      (set! (.-piece this) (set-pos (.-piece this) (:row state) (:col state)))
      (set! (.-piece this) (set-dir (.-piece this) (get-in state [:current :dir])))
      (set! (.-ghost this) (set-pos (.-ghost this)
                                    (get-in state [:ghost :row])
                                    (get-in state [:ghost :col])))
      (set! (.-ghost this) (set-dir (.-ghost this) (get-in state [:current :dir]))))))

