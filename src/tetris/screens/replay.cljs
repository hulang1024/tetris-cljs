(ns tetris.screens.replay
  (:require-macros [cljss.core])
  (:require [cljss.core :as css :refer-macros [defstyles]]
            [reagent.core :as r]
            [tetris.assets :as assets]
            [tetris.core.ruleset.classic :refer [make-classic-ruleset]]
            [tetris.core.ruleset.modern :refer [make-modern-ruleset]]
            [tetris.core.tick :as tick]
            [tetris.input.keyboard :as keyboard]
            [tetris.scenes.replay :as replay]
            [tetris.scenes.render.pixi-app :as app]
            [tetris.screens.gameplay-menu :as gameplay-menu]
            [tetris.screens.menu-system :as menu-sys]
            [tetris.screens.screen :as screen]
            [tetris.screens.screen-stack :as screen-stack]))

(def pixi-app (atom nil))

(defn- destroy-scene []
  (when @pixi-app
    (.destroy @pixi-app #js {:removeView true})
    (reset! pixi-app nil)))

(defn- ^:async load-scene [mode seed replay-recorder]
  (destroy-scene)
  (keyboard/init)
  (await (assets/load))
  (reset! pixi-app (await (app/init)))
  (.appendChild js/document.body (.-canvas @pixi-app))
  (let [game-state (tick/initial-game 
                     (case mode
                       :marathon (make-modern-ruleset seed 1)
                       :classic (make-classic-ruleset seed 0)))]
    (await (replay/start @pixi-app game-state replay-recorder))))

(defmethod screen/init :replay [_ {:keys [mode seed replay-recorder]}]
  (let [screen-state (r/atom {:loading? true
                              :mode mode
                              :seed seed
                              :replay-recorder replay-recorder
                              :scene-state nil
                              :game-status :playing})
        pause-menu (menu-sys/make-menu-system
                     [(menu-sys/item :start-over nil 1)
                      (menu-sys/item :continue-replay nil 2)
                      (menu-sys/item :exit-replay nil 3)]
                     :start-over)]
    (swap! screen-state assoc :pause-menu pause-menu)))

(defmethod screen/on-entering :replay [this] 
  (when (contains? #{:marathon :classic} (:mode @this))
    (let [scene-state-promise (load-scene (:mode @this)
                                          (:seed @this)
                                          (:replay-recorder @this))]
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
                                       :game-status (:status new)
                                       :pause-menu
                                       (update (:pause-menu screen) :items
                                               #(mapv
                                                  (fn [item]
                                                    (assoc item :visible?
                                                           (or (= (:status new) :pause)
                                                               (contains? #{:start-over :exit-replay} (:id item)))))
                                                  %))))))))))))))

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
    "回放中"]
   (cond
     (:loading? @this) [loading-overlay]
     :else (case (:game-status @this)
             :pause [gameplay-menu/menu-overlay
                     (:pause-menu @this)
                     {:menu-class gameplay-menu-class}]
             :game-over [gameplay-menu/menu-overlay
                         (:pause-menu @this)
                         {:menu-class gameplay-menu-class}]
             nil))])

(defmethod screen/on-keydown :replay [this event]
  (when (= (.-code event) "Escape")
    (if (= (:status @(:scene-state @this)) :game-over)
      (screen-stack/pop-screen!)
      (let [{:keys [game-status pause-menu]} @this
            new-game-status (case game-status
                              :playing :pause
                              :pause :playing
                              game-status)
            changed? (not= game-status new-game-status)
            pause-menu (if changed?
                         (menu-sys/hover-first pause-menu)
                         pause-menu)]
        (swap! this assoc
               :game-status new-game-status
               :pause-menu pause-menu)
        (swap! (:scene-state @this) assoc :status new-game-status))))

  (when (not= (:game-status @this) :playing)
    (gameplay-menu/handle-key-event
      (:pause-menu @this)
      event
      {:on-update #(swap! this assoc :pause-menu %)
       :on-enter
       (fn [item]
         (case (:id item)
           :continue-replay (do (swap! this assoc :game-status :playing)
                                (swap! (:scene-state @this) assoc :status :playing))
           :start-over (screen-stack/replace-screen!
                         :replay
                         (select-keys @this [:mode :seed :replay-recorder]))
           :exit-replay (screen-stack/pop-screen!)
           nil))}))
  true)
