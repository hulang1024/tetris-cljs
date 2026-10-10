(ns tetris.screens.solo
  (:require-macros [cljss.core])
  (:require [cljss.core :as css :refer-macros [defstyles]]
            [reagent.core :as r]
            [tetris.assets :as assets]
            [tetris.core.ruleset.classic :refer [classic-ruleset]]
            [tetris.core.ruleset.modern :refer [modern-ruleset]]
            [tetris.core.ruleset.pgen-7bag :as pgen-7bag]
            [tetris.core.ruleset.pgen-hr :as pgen-hr]
            [tetris.core.tick :as tick]
            [tetris.input.keyboard :as keyboard]
            [tetris.scenes.gameplay :as gameplay]
            [tetris.scenes.render.pixi-app :as app]
            [tetris.screens.gameplay-menu :as gameplay-menu]
            [tetris.screens.menu-system :as menu-sys]
            [tetris.screens.screen :as screen]
            [tetris.screens.screen-stack :as screen-stack]))

(def pixi-app (atom nil))

(defn- destroy-scene []
  (when @pixi-app
    (gameplay/destroy)
    (.destroy @pixi-app #js {:removeView true})
    (reset! pixi-app nil)))

(defn- ^:async load-scene [mode]
  (destroy-scene)
  (keyboard/init)
  (await (assets/load))
  (reset! pixi-app (await (app/init)))
  (.appendChild js/document.body (.-canvas @pixi-app))
  (let [seed (+ (js/Date.now))
        game-state (tick/initial-game
                     (case mode
                       :marathon (assoc modern-ruleset
                                        :speed-level 1
                                        :piece-generator (pgen-7bag/make seed))
                       :classic (assoc classic-ruleset
                                       :speed-level 0
                                       :piece-generator (pgen-hr/make seed 1 2))))]
    (await (gameplay/start @pixi-app game-state))))

(defmethod screen/init :solo [_ {:keys [mode]}]
  (let [screen-state (r/atom {:loading? true
                              :mode mode
                              :scene-state nil
                              :game-status :playing})
        pause-menu (menu-sys/make-menu-system
                     [(menu-sys/item :start-over nil 1)
                      (menu-sys/item :continue-game nil 2)
                      (menu-sys/item :exit-game nil 3)]
                     :start-over)]
    (swap! screen-state assoc :pause-menu pause-menu)))

(defmethod screen/on-entering :solo [this] 
  (when (contains? #{:marathon :classic} (:mode @this))
    (let [scene-state-promise (load-scene (:mode @this))]
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
                                                               (contains? #{:start-over :exit-game} (:id item)))))
                                                  %))))))))))))))

(defmethod screen/on-exiting :solo []
  (destroy-scene))

(defstyles gameplay-menu-class []
  {:background "rgba(0, 0, 0, 0.6)"
   :backdrop-filter "blur(0.1em)"
   :padding "1em 2em"})

(defn- loading-overlay []
  [:div {:style {:z-index 3
                 :font-size 24}}
   "加载中..."])

(defmethod screen/render :solo [this]
  [:div
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

(defmethod screen/on-keydown :solo [this event]
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
           :continue-game (do (swap! this assoc :game-status :playing)
                              (swap! (:scene-state @this) assoc :status :playing))
           :start-over (screen-stack/replace-screen! :solo (select-keys @this [:mode]))
           :exit-game (screen-stack/pop-screen!)
           :replay (screen-stack/replace-screen!
                     :replay
                     (get-in @this [:game-state :options])
                     (get-in @this [:scene-state :replay-recorder]))
           nil))}))
  true)
