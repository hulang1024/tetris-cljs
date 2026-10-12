(ns tetris.main
  (:require
    [cljss.core :as css]
    [tetris.audio :as audio]
    [tetris.screens.main-menu]
    [tetris.screens.gameplay-options]
    [tetris.screens.solo]
    [tetris.screens.replay]
    [tetris.screens.screen-stack :as screen-stack]
    [tetris.screens.styles :as styles]))

(defn ^:async init []
  (when ^boolean goog/DEBUG
    (add-tap println))
  (styles/load-global)
  (await (audio/load-sounds (audio/ui-list)))
  (screen-stack/render)
  (screen-stack/push-screen! :main-menu))

(defn ^:async ^:dev/after-load reload []
  (tap> "reload")
  (css/remove-styles!)
  (styles/load-global)
  (screen-stack/render))
