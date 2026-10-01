(ns tetris.render.gameplay.game-view
  (:require
    ["@tweenjs/tween.js" :as tw]
    ["pixi.js" :as pixi]
    [clojure.set :as set]
    [tetris.audio :as audio]
    [tetris.core.game :as game]
    [tetris.core.input :as input]
    [tetris.render.constants :refer [v-screen-height v-screen-width]]
    [tetris.render.gameplay.game-view-data :refer [calc-layout render-data]]
    [tetris.render.gameplay.piece :refer [create-piece-cell-sprite
                                          create-piece-cell-textures]]))

(def board-bounce-dx-max 6)
(def board-bounce-dy-max 6)

(defn- create-board [{:keys [x y width height border-width]}]
  (let [container (pixi/Container. #js {:label "board"})
        g (pixi/Graphics. #js {:label "board"})]
    (doto g
      (.moveTo 0 0)
      (.lineTo 0 height)
      (.lineTo width height)
      (.lineTo width 0)
      (.stroke #js {:width border-width :color 0xcccccc})
      (.rect 4 4 (- width 8) (- height 9))
      (.fill #js {:color 0x000000 :alpha 0.2}))
    (set! (.-alpha g) 1)
    (.. container -position (set x y))
    (.addChild container g)
    container))

(defn create [^js scene options]
  (let [layout (calc-layout (:preview-count options))
        ^js game-view (pixi/Container.
                        #js {:label "game-view"
                             :x (/ (- v-screen-width (:width layout)) 2)
                             :y (/ (- v-screen-height (:height layout)) 2)})
        board (create-board (:board layout))
        hold-container (pixi/Container.
                         #js {:label "hold"
                              :x (get-in layout [:hold :x])
                              :y (get-in layout [:hold :y])})
        next-container (pixi/Container.
                         #js {:label "next"
                              :x (get-in layout [:next :x])
                              :y (get-in layout [:next :y])})]
    (.addChild game-view board)
    (.addChild game-view hold-container)
    (.addChild game-view next-container)
    (.addChild scene game-view)
    {:layout layout
     :container game-view
     :board board
     :hold-container hold-container
     :next-container next-container
     :piece-cell-textures (create-piece-cell-textures (:piece-style options))
     :blocks {}
     :ghost nil
     :current nil
     :hold nil
     :next nil
     :tweens {}}))

(defn- add-piece-cell [container cell-size]
  (let [sprite (create-piece-cell-sprite cell-size)]
    (.addChild ^js container sprite)))

(defn add-piece [container piece cell-size]
  (vec (for [_ (range (count (:cells piece)))]
         (add-piece-cell container cell-size))))

(defn- add-board-piece-cell [view]
  (add-piece-cell (:board view)
                  (get-in view [:layout :board :cell :size])))

(defn- add-board-piece [view piece]
  (add-piece (:board view)
             piece
             (get-in view [:layout :board :cell :size])))

(defn- render-piece! [view display-piece piece-state & ghost?]
  (if (:visible piece-state)
    (doseq [[^js cell-sprite cell-pos]
            (map vector display-piece (:cells piece-state))]
      (set! (.-texture cell-sprite)
            (get (:piece-cell-textures @view)
                 (:color-index piece-state)))
      (set! (.-visible cell-sprite) true)
      (set! (.-alpha cell-sprite) (if ghost? 0.2 1))
      (.. cell-sprite -position (set (:x cell-pos) (:y cell-pos))))
    (doseq [cell-sprite display-piece]
      (set! (.-visible cell-sprite) false))))

(defn- update-tweens [view]
  (doseq [[_ tween] (:tweens @view)]
    (when tween
      (.update tween))))

(defn- stop-tween! [view id]
  (when-let [tween (get-in @view [:tweens id])]
    (.stop tween)
    (swap! view assoc-in [:tweens id] nil)))

(defn- start-board-bounce-tween!
  ([view id to-values]
   (start-board-bounce-tween! view id to-values nil nil nil))
  ([view id to-values cb]
   (start-board-bounce-tween! view id to-values nil nil cb))
  ([view id to-values easing duration cb]
   (when-not (get-in @view [:tweens id])
     (let [tween (doto (tw/Tween. (.-pivot (:board @view)))
                   (.to (clj->js to-values) (or duration 344))
                   (.easing (or easing tw/Easing.Cubic.Out))
                   (.start)
                   (.onComplete
                     (fn [] (swap! view assoc-in [:tweens id] nil)
                       (when cb (cb))))
                   (.onStop
                     #(swap! view assoc-in [:tweens id] nil)))]
       (swap! view assoc-in [:tweens id] tween)))))

(defn- render-board-bounce! [view game-state input]
  (doseq [[button dir] [[:move-left -1] [:move-right 1]]]
    (if (some #(= % button) (:pressed-buttons input))
      (when (:shift-blocked? game-state)
        (stop-tween! view :board-bounce-shift)
        (let [px (- (.. (:board @view) -pivot -x) (* dir 2))]
          (when (<= (abs px) board-bounce-dx-max)
            (set! (.. (:board @view) -pivot -x) px))))
      (start-board-bounce-tween! view :board-bounce-shift {:x 0})))

  (when (game/find-event :locked (:events game-state))
    (stop-tween! view :board-bounce-bottom)
    (let [py (- (.. (:board @view) -pivot -y) board-bounce-dy-max)]
      (start-board-bounce-tween!
        view
        :board-bounce-bottom
        {:y py} tw/Easing.Cubic.Out 167
        (fn []
          (start-board-bounce-tween!
            view
            :board-bounce-bottom
            {:y 0} tw/Easing.Cubic.Out 344 nil))))))

(defn- play-sounds! [game-state]
  (let [events (:events game-state)]
    (cond
      (game/find-event :line-cleared events)
      (.play (audio/sound :effect/clear-1))

      (and (game/find-event :hard-dropped events)
           (not (game/find-event :line-clearing events)))
      (.play (audio/sound :effect/hard-drop))

      (and (game/find-event :locked events)
           (not (game/find-event :line-clearing events)))
      (.play (audio/sound :effect/lock))

      (and (game/find-event :moved events)
           (:down-blocked? game-state))
      (.play (audio/sound :effect/land))

      (game/find-event :landed events)
      (.play (audio/sound :effect/land))

      (game/find-event :rotated events)
      (.play (audio/sound :effect/rotate))

      (game/find-event :held events)
      (.play (audio/sound :effect/hold)))))

(defn render!
  {:malli/schema [:=> [:cat some? game/State input/InputState] :any]}
  [view game-state input]
  (let [data (render-data (:layout @view) game-state)]
    (when (and (seq (get-in data [:hold :cells]))
               (not (:hold @view)))
      (let [piece (add-piece (:hold-container @view)
                             (:hold data)
                             (get-in @view [:layout :hold :cell :size]))]
        (swap! view assoc :hold piece)))
    (render-piece! view (:hold @view) (:hold data))

    (when (and (seq (:next data)) (not (:next @view)))
      (let [display-pieces
            (vec (for [piece (:next data)]
                   (add-piece (:next-container @view)
                              piece
                              (get-in @view [:layout :next :cell :size]))))]
        (swap! view assoc :next display-pieces)))
    (doseq [[piece-v piece-d] (map vector (:next @view) (:next data))]
      (render-piece! view piece-v piece-d))

    (when (and (seq (get-in data [:ghost :cells]))
               (not (:ghost @view)))
      (swap! view assoc :ghost (add-board-piece @view (:ghost data))))
    (render-piece! view (:ghost @view) (:ghost data) true)

    (when (and (seq (get-in data [:current :cells]))
               (not (:current @view)))
      (swap! view assoc :current (add-board-piece @view (:current data))))
    (render-piece! view (:current @view) (:current data))

    (let [state-cell-ids (set (map :id (:blocks data)))
          view-cell-ids (set (keys (:blocks @view)))
          cell-ids-to-remove (set/difference view-cell-ids state-cell-ids)]
      (doseq [id cell-ids-to-remove]
        (when-let [cell-sprite (get-in @view [:blocks id])]
          (.removeChild (:board @view) cell-sprite)
          (swap! view update :blocks dissoc id)))
      (doseq [cell (:blocks data)]
        (when-not (get (:blocks @view) (:id cell))
          (swap! view assoc-in
                 [:blocks (:id cell)]
                 (add-board-piece-cell @view)))
        (when-let [cell-sprite (get-in @view [:blocks (:id cell)])]
          (set! (.-texture cell-sprite) (get (:piece-cell-textures @view)
                                             (:color-index cell)))
          (.. cell-sprite -position (set (:x cell) (:y cell))))))

    (render-board-bounce! view game-state input)

    (update-tweens view)

    (play-sounds! game-state)))
