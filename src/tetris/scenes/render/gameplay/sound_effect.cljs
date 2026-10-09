(ns tetris.scenes.render.gameplay.sound-effect
  (:require
    [tetris.audio :as audio]
    [tetris.core.game :as game]))

(defn handle [game-state]
  (let [events (:events game-state)]
    (cond
      (game/find-event :game-over events)
      (audio/play :effect/fail)

      (game/find-event :line-cleared events)
      (let [event (game/find-event :line-cleared events)]
        (audio/play (str "effect/clear-" (count (:row-indices event))))
        (when (> (:combo-count game-state) 1)
          (audio/play (str "sample/bass-"
                           (mod (+ 3 (:combo-count game-state)) 29)))))

      (and (game/find-event :hard-dropped events)
           (not (game/find-event :line-clearing events)))
      (audio/play :effect/hard-drop)

      (and (game/find-event :locked events)
           (not (game/find-event :line-clearing events)))
      (audio/play :effect/lock)

      (and (game/find-event :shifted events) (:landed? game-state))
      (audio/play :effect/land)

      (game/find-event :landed events)
      (audio/play :effect/land)

      (game/find-event :rotated events)
      (audio/play :effect/rotate)

      (game/find-event :held events)
      (audio/play :effect/hold))))
