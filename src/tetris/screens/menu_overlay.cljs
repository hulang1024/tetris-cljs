(ns tetris.screens.menu-overlay
  (:require-macros [cljss.core])
  (:require
    [cljss.core :as css :refer-macros [defstyles]]
    [reagent.core :as r]
    [tetris.audio :as audio]
    [tetris.screens.menu :as menu]))

(defstyles base-item-class [item-id]
  {:padding "0.5em 0"
   :font-size "1.5rem"
   :text-align "center"
   :user-select "none"
   :color "#aaa"})

(defstyles base-item-hover-class [item-id]
  {:color "#fff"
   :text-shadow "0 0 0.2em #fee"})

(def zh-cn
  {:back "返回"
   :solo "单人"
   :multiplayer "多人"
   :40L "40行"
   :classic "经典"
   :marathon "马拉松"
   :options "选项"
   :controls-options "控制"
   :gameplay-options "游戏"
   :audio-options "音频"
   :start-over "重新开始"
   :back-to-main-menu "返回到主菜单"
   :continue-game "继续游戏"
   :exit-game "退出游戏"
   :continue-replay "继续回放"
   :exit-replay "退出回放"
   :replay "观看回放"})

(defn- handle-enter [state on-enter on-update]
  (let [item-id (:hover state)
        item (or (menu/find-item state item-id) {:id :back})
        trigger-enter (fn [new-state item]
                        (when on-enter (on-enter item new-state))
                        (on-update new-state))]
    (cond
      (= item-id :back)
      (do (audio/play :menu-back)
          (trigger-enter (menu/back-to-parent state) item))

      (menu/menu? state item-id)
      (do (audio/play :menu-enter)
          (trigger-enter (menu/enter-hover-menu state) item))

      :else (trigger-enter state item))))

(defn- handle-hover [state on-select on-update]
  (audio/play :menu-hover)
  (when on-select (on-select state))
  (on-update state))

(defn- handle-keydown [state event on-select on-enter on-update]
  (let [key (.-code event)
        trigger-hover (fn [new-state]
                        (audio/play :menu-hover)
                        (on-update new-state)
                        (when on-select (on-select new-state)))]
    (case key
      "ArrowDown" (trigger-hover (menu/move-hover state +1))
      "ArrowUp" (trigger-hover (menu/move-hover state -1))
      "Escape" (do (when (:active state)
                     (audio/play :menu-back))
                   (on-update (menu/back-to-parent state)))
      "Enter" (handle-enter state on-enter on-update)
      nil)))

(defn menu-overlay [{:keys [key
                            menu-items
                            default-hover
                            menu-class
                            menu-item-class
                            menu-item-hover-class
                            on-select
                            on-enter]}]
  (r/with-let [state (r/atom (menu/make menu-items default-hover))
               update-state #(reset! state %)
               keydown-event-listener (fn [event]
                                        (handle-keydown
                                          @state
                                          event
                                          on-select on-enter update-state))]
    (js/document.addEventListener "keydown" keydown-event-listener)
    [:div {:key (or key "menu")
           :class ["menu-overlay"
                   (when menu-class (menu-class))]}
     (doall
       (map
         (fn [item]
           [:div
            {:key (:id item)
             :class (into
                      [(base-item-class (:id item))
                       (when menu-item-class
                         (menu-item-class (:id item)))]
                      (when (= (:hover @state) (:id item))
                        [(base-item-hover-class (:id item))
                         (when menu-item-hover-class
                           (menu-item-hover-class (:id item)))]))
             :on-mouse-over #(handle-hover
                               (menu/change-hover @state (:id item))
                               on-select
                               update-state)
             :on-click #(handle-enter @state on-enter update-state)}
            (get zh-cn (:id item) (:id item))])
         (menu/show-active-menu-items @state)))]
    (finally
      (js/document.removeEventListener "keydown" keydown-event-listener))))
