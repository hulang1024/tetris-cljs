(ns tetris.screens.solo
  (:require-macros [cljss.core])
  (:require [cljss.core :as css :refer-macros [defstyles]]
            [goog.style :as gstyle]
            [tetris.assets :as assets]
            [tetris.audio :as audio]
            [tetris.core.ruleset.classic :refer [make-classic-ruleset]]
            [tetris.core.ruleset.modern :refer [make-modern-ruleset]]
            [tetris.core.tick :as tick]
            [tetris.input.keyboard :as keyboard]
            [tetris.scenes.gameplay :as gameplay]
            [tetris.scenes.render.pixi-app :as app]
            [tetris.screens.menu :as menu]
            [tetris.screens.menu-overlay :refer [menu-overlay]]
            [tetris.screens.screen :as screen]
            [tetris.screens.screen-stack :as screen-stack]
            [tetris.options-store :as options-store]))

(def pixi-app (atom nil))

(defn- destroy-scene []
  (when @pixi-app
    (gameplay/destroy)
    (.destroy @pixi-app #js {:removeView true})
    (reset! pixi-app nil)))

(defn- ^:async load-scene [{:keys [mode seed options]}]
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
    (await (gameplay/start @pixi-app game-state))))

(defmethod screen/init :solo [_ {:keys [mode]}]
  {:loading? true
   :settings {:mode mode
              :seed (+ (js/Date.now))
              :options (if (not= mode :classic)
                         (options-store/get-options :handling)
                         {})} 
   :scene-state nil
   :game-status :playing})

(defmethod screen/on-entering :solo [this] 
  (when (contains? #{:marathon :classic} (get-in @this [:settings :mode]))
    (let [scene-state-promise (load-scene (:settings @this))]
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

(defmethod screen/on-suspending :solo [_]
  (gstyle/setStyle (.-canvas @pixi-app) #js {:display "none"})) 

(defmethod screen/on-resuming :solo [_]
  (gstyle/setStyle (.-canvas @pixi-app) #js {:display "block"})) 

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

     (contains? #{:pause :game-over} (:game-status @this))
     [menu-overlay
      {:menu-items
       (->> [(menu/item :start-over nil 1)
             (menu/item :continue-game nil 2)
             (menu/item :custom-controls nil 3)
             (menu/item :replay nil 4)
             (menu/item :exit-game nil 5)]
            (filterv (if (= (:game-status @this) :game-over)
                       #(not= (:id %) :continue-game)
                       identity)))
       :default-hover :continue-game
       :on-enter
       (fn [item]
         (when (contains? #{:start-over} (:id item))
           (audio/play :gameplay))
         (case (:id item)
           :continue-game (do (swap! this assoc :game-status :playing)
                              (swap! (:scene-state @this) assoc :status :playing))
           :start-over (screen-stack/replace-screen!
                         :solo
                         (select-keys (:settings @this) [:mode]))
           :custom-controls (screen-stack/push-screen! :controls-options)
           :exit-game (screen-stack/pop-screen!)
           :replay (screen-stack/push-screen!
                     :replay
                     (assoc (:settings @this)
                            :replay-events (:replay-recorder @(:scene-state @this))))
           nil))
       :menu-class gameplay-menu-class}]

     :else nil)])

(defmethod screen/on-keydown :solo [this event]
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
