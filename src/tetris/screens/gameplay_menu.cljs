(ns tetris.screens.gameplay-menu
  (:require-macros [cljss.core])
  (:require
    [cljss.core :as css :refer-macros [defstyles]]
    [tetris.audio :as audio]
    [tetris.screens.menu-system :as menu-sys]))

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

(defn- enter [menu-system on-update on-enter]
  (let [item-id (:hover menu-system)
        item (or (menu-sys/find-item menu-system item-id) {:id :back})
        trigger-enter (fn [new-state item]
                        (when on-update (on-update new-state))
                        (when on-enter (on-enter item new-state)))]
    (cond
      (= item-id :back)
      (do (audio/play :menu-back)
          (trigger-enter (menu-sys/back-to-parent menu-system) item))

      (menu-sys/menu? menu-system item-id)
      (do (audio/play :menu-enter)
          (trigger-enter (menu-sys/enter-hover-menu menu-system) item))

      :else (do (when (contains? #{:marathon :classic :40L :start-over} (:id item))
                  (audio/play :gameplay))
                (trigger-enter menu-system item)))))


(defn menu-overlay [state {:keys [menu-class
                                  menu-item-class
                                  menu-item-hover-class
                                  on-update on-select on-enter]}]
  (let [trigger-hover (fn [new-state]
                        (audio/play :menu-hover)
                        (when on-update (on-update new-state))
                        (when on-select (on-select new-state)))]
    [:div {:key "menu-overlay"
           :class ["gameplay-menu" (when menu-class (menu-class))]}
     (map-indexed
       (fn [index item]
         [:div
          {:key (:id item)
           :class (into
                    [(base-item-class (:id item))
                     (when menu-item-class
                       (menu-item-class (:id item)))]
                    (when (= (:hover state) (:id item))
                      [(base-item-hover-class (:id item))
                       (when menu-item-hover-class
                         (menu-item-hover-class (:id item)))]))
           ; :onMouseOver #(trigger-hover (menu-sys/change-hover state index))
           ; :on-click #(enter state on-update on-enter)
           }
          (get zh-cn (:id item) (:id item))])
       (menu-sys/show-active-menu-items state))]))

(defn handle-key-event [menu-system
                        event
                        {:keys [on-update on-select on-enter]}]
  (tap> menu-system)
  (let [key (.-code event)
        trigger-hover (fn [new-state]
                        (audio/play :menu-hover)
                        (when on-update (on-update new-state))
                        (when on-select (on-select new-state)))]
    (case key
      "ArrowDown" (trigger-hover (menu-sys/move-hover menu-system +1))
      "ArrowUp" (trigger-hover (menu-sys/move-hover menu-system -1))
      "Escape" (when on-update
                 (when (:active menu-system)
                   (audio/play :menu-back))
                 (on-update (menu-sys/back-to-parent menu-system)))
      "Enter" (enter menu-system on-update on-enter)
      nil)))
