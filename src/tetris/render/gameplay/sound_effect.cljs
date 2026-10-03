(ns tetris.render.gameplay.sound-effect
  (:require
    [tetris.audio :as audio]
    [tetris.core.game :as game]))

(defn- play [id]
  (.play (audio/sound (keyword id))))

(defn handle [game-state]
  (let [events (:events game-state)]
    (cond
      (game/find-event :game-over events)
      (play :effect/fail)

      (game/find-event :line-cleared events)
      (let [event (game/find-event :line-cleared events)]
        (play (str "effect/clear-" (count (:row-indices event))))
        (when (> (:combo-count game-state) 1)
          (play (str "sample/bass-"
                     (mod (+ 3 (:combo-count game-state)) 29)))))

      (and (game/find-event :hard-dropped events)
           (not (game/find-event :line-clearing events)))
      (play :effect/hard-drop)

      (and (game/find-event :locked events)
           (not (game/find-event :line-clearing events)))
      (play :effect/lock)

      (and (game/find-event :shifted events) (:landed? game-state))
      (play :effect/land)

      (game/find-event :landed events)
      (play :effect/land)

      (game/find-event :rotated events)
      (play :effect/rotate)

      (game/find-event :held events)
      (play :effect/hold))))
