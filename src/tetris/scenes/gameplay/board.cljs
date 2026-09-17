(ns tetris.scenes.gameplay.board
  (:require-macros [shadow.cljs.modern :refer [defclass]])
  (:require ["excalibur" :as ex]
            [tetris.render :as r]
            [tetris.core.rules :as rules]
            [tetris.scenes.gameplay.piece :refer [create-piece set-cell-pos set-dir]]))

(defn find-cells [rows cells]
  (filter #(let [[r _] (r/pos->cell (.-pos %) r/cell-size)] (contains? (set rows) r))
          cells))

(defclass Board (extends ex/Actor)
  (field cells)
  (field current)
  (field ghost)

  (constructor [^js this]
    (super #js {:x (/ (- r/game-width r/board-width) 2)
                :y (/ (- r/game-height r/board-height) 2)
                :anchor ex/Vector.Zero}))

  Object
  (onInitialize [^js this]
    (.reset this)
    (let [rect (ex/Rectangle.
                 #js {:width r/board-width
                      :height r/board-height
                      :color (ex/Color.fromHex "#111111")})]
      (.add (.-graphics this) rect)))

  (reset [^js this]
    (run! #(.kill ^js %)
          (concat (.-cells this)
                  (:cells (.-current this))
                  (:cells (.-ghost this))))
    (set! (.-cells this) [])
    (set! (.-current this) nil)
    (set! (.-ghost this) nil))

  (lock [^js this state event]
    (let [{:keys [row col dir]} event]
      (set! (.-current this)( set-cell-pos (.-current this) row col))
      (set! (.-current this) (set-dir (.-current this) dir)))
    (set! (.-cells this) (into (.-cells this) (:cells (.-current this)))))

  (remove-current [^js this]
    (when (.-current this)
      (run! #(.kill ^js %) (:cells (.-current this))))
    (when (.-ghost this)
      (run! #(.kill ^js %) (:cells (.-ghost this)))))

  (spawn-piece [^js this state]
    (when-let [ghost (.-ghost this)]
      (run! #(.kill ^js %) (:cells ghost)))
    (let [{:keys [row col current]} state
          {:keys [kind dir]} current
          current (create-piece kind dir)
          ghost (create-piece kind dir true)]
      (run! #(.addChild this %) (:cells current))
      (run! #(.addChild this %) (:cells ghost))
      (set! (.-current this) current)
      (set! (.-ghost this) ghost)))
  
  (clear-lines [^js this state event]
    (let [{:keys [last-board row-indices]} event
          drop-moves (r/line-clear-drop-moves last-board row-indices)
          cells (.-cells this)
          cells-to-die (find-cells row-indices cells)
          delay-ms (rules/line-clear-delay)]
      (run! #(.kill ^js %) (:cells (.-ghost this)))
      (run! #(.kill ^js %) cells-to-die)
      (doseq [[from-row to-row] drop-moves]
        (run! #(.easeTo (.delay (.-actions ^js %) (* delay-ms 0.9))
                        (ex/vec (.. ^js % -pos -x) (r/cell-pos r/cell-size to-row))
                        (* delay-ms 0.1)
                        ex/EasingFunctions.EaseOutQuint)
              (find-cells [from-row] cells)))))

  (update-current [^js this state]
    (when (and (:current state))
      (when (.-current this)
        (set! (.-current this)
              (set-cell-pos (.-current this) (:row state) (:col state)))
        (set! (.-current this)
              (set-dir (.-current this)
                       (get-in state [:current :dir]))))
      (when (.-ghost this)
        (set! (.-ghost this)
              (set-cell-pos (.-ghost this)
                            (get-in state [:ghost :row])
                            (get-in state [:ghost :col])))
        (set! (.-ghost this)
              (set-dir (.-ghost this)
                       (get-in state [:current :dir])))))))

