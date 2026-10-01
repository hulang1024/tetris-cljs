(ns tetris.render.gameplay.sound-effect
  (:require
    [tetris.audio :as audio]
    [tetris.core.game :as game]))

(defn- play [id]
  (.play (audio/sound id)))

(defn handle [game-state]
  (let [events (:events game-state)]
    (cond
      (game/find-event :line-cleared events)
      (play :effect/clear-1)

      (and (game/find-event :hard-dropped events)
           (not (game/find-event :line-clearing events)))
      (play :effect/hard-drop)

      (and (game/find-event :locked events)
           (not (game/find-event :line-clearing events)))
      (play :effect/lock)

      (and (game/find-event :moved events)
           (:down-blocked? game-state))
      (play :effect/land)

      (game/find-event :landed events)
      (play :effect/land)

      (game/find-event :rotated events)
      (play :effect/rotate)

      (game/find-event :held events)
      (play :effect/hold))))
