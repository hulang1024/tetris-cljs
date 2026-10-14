(ns tetris.screens.replay
  (:require-macros [cljss.core])
  (:require [cljss.core :as css :refer-macros [defstyles]]
            [tetris.assets :as assets]
            [tetris.core.ruleset.classic :refer [make-classic-ruleset]]
            [tetris.core.ruleset.modern :refer [make-modern-ruleset]]
            [tetris.core.tick :as tick]
            [tetris.input.keyboard :as keyboard]
            [tetris.scenes.replay :as replay]
            [tetris.scenes.render.pixi-app :as app]
            [tetris.screens.menu-overlay :refer [menu-overlay]]
            [tetris.screens.menu :as menu]
            [tetris.screens.screen :as screen]
            [tetris.screens.screen-stack :as screen-stack]))

(def pixi-app (atom nil))

(defn- destroy-scene []
  (when @pixi-app
    (.destroy @pixi-app #js {:removeView true})
    (reset! pixi-app nil)))

(defn- ^:async load-scene [{:keys [mode seed options replay-events]}]
  (destroy-scene)
  (keyboard/init)
  (await (assets/load))
  (reset! pixi-app (await (app/init)))
  (.appendChild js/document.body (.-canvas @pixi-app))
  (let [game-state (tick/initial-game 
                     (merge (case mode
                              :marathon (make-modern-ruleset seed 1)
                              :classic (make-classic-ruleset seed 0))
                            options))]
    (await (replay/start @pixi-app game-state replay-events))))

(defmethod screen/init :replay [_ replay]
  {:loading? true
   :replay replay
   :scene-state nil
   :game-status :playing})

(defmethod screen/on-entering :replay [this] 
  (when (contains? #{:marathon :classic} (get-in @this [:replay :mode]))
    (let [scene-state-promise (load-scene (:replay @this))]
      (.then scene-state-promise
             (fn [scene-state]
               (swap! this assoc
                      :loading? false
                      :scene-state scene-state)
               (add-watch
                 scene-state
                 :sync
                 (fn [_key _ref old new]
                   (let [listen-keys [:status]
                         old (select-keys old listen-keys)
                         new (select-keys new listen-keys)]
                     (when (not= old new)
                       (swap! this
                              (fn [screen]
                                (assoc screen
                                       :game-status (:status new)))))))))))))

(defmethod screen/on-exiting :replay []
  (destroy-scene))

(defstyles gameplay-menu-class []
  {:background "rgba(0, 0, 0, 0.6)"
   :backdrop-filter "blur(0.1em)"
   :padding "1em 2em"})

(defn- loading-overlay []
  [:div {:style {:z-index 3
                 :font-size 24}}
   "加载中..."])

(defmethod screen/render :replay [this]
  [:div
   [:div {:style {:position "absolute"
                  :top "1rem"}}
    (if (= (:game-status @this) :ended) "回放结束" "回放中")]
   (cond
     (:loading? @this) [loading-overlay]
     (contains? #{:pause :game-over :ended} (:game-status @this))
     [menu-overlay
      {:menu-items
       [(menu/item :start-over nil 1)
        (menu/item :continue-replay nil 2)
        (menu/item :exit-replay nil 3)]
       :default-hover :exit-replay
       :on-enter
       (fn [item]
         (case (:id item)
           :continue-replay (do (swap! this assoc :game-status :playing)
                                (swap! (:scene-state @this) assoc :status :playing))
           :start-over (screen-stack/replace-screen!
                         :replay
                         (select-keys (:replay @this) [:mode :seed :replay-events]))
           :exit-replay (screen-stack/pop-screen!)
           nil))
       :menu-class gameplay-menu-class}]
     :else nil)])

(defmethod screen/on-keydown :replay [this event]
  (when (= (.-code event) "Escape")
    (if (= (:status @(:scene-state @this)) :game-over)
      (screen-stack/pop-screen!)
      (let [{:keys [game-status]} @this
            new-game-status (case game-status
                              :playing :pause
                              :pause :playing
                              game-status)]
        (swap! this assoc :game-status new-game-status)
        (swap! (:scene-state @this) assoc :status new-game-status))))
  true)
