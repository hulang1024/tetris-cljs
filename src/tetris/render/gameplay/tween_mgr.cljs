(ns tetris.render.gameplay.tween-mgr)

(defn update-tweens [view]
  (doseq [[_ tween] (:tweens @view)]
    (when tween
      (.update tween))))

(defn stop-tween! [view id]
  (when-let [tween (get-in @view [:tweens id])]
    (.stop tween)
    (swap! view assoc-in [:tweens id] nil)))
