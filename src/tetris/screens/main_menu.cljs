(ns tetris.screens.main-menu 
  (:require-macros [cljss.core])
  (:require
    [cljss.core :as css :refer-macros [defstyles]]
    [tetris.audio :as audio]
    [tetris.screens.menu :as menu]
    [tetris.screens.menu-overlay :refer [menu-overlay]]
    [tetris.screens.screen :as screen]
    [tetris.screens.screen-stack :as screen-stack]
    [tetris.screens.tip-buttons-overlay :as tip-buttons-overlay]))

(defstyles menu-item-class [item-id]
  {:margin-top (if (= item-id :back) "1em" 0)
   :font-size "2rem"
   :color "#aaa"})

(defstyles menu-item-hover-class [item-id]
  {:color "#fff"})

(defmethod screen/render :main-menu [_]
  [:div
   [menu-overlay
    {:menu-items
     [(menu/item :solo nil 1)
      (menu/item :multiplayer nil 2 {:screen :multiplayer})
      (menu/item :options nil 3)
      (menu/item :marathon :solo 1 {:screen :solo :mode :marathon})
      (menu/item :classic :solo 2 {:screen :solo :mode :classic})
      (menu/item :40L :solo 3 {:screen :solo :mode :40L})
      (menu/item :controls-options :options 1 {:screen :controls-options})
      (menu/item :gameplay-options :options 2 {:screen :gameplay-options})
      (menu/item :audio-options :options 3 {:screen :audio-options})]
     :default-hover :solo
     :on-enter (fn [item]
                 (when (contains? #{:marathon :classic :40L} (:id item))
                   (audio/play :gameplay))
                 (when-let [data (:data item)]
                   (if (= (:mode data) :40L)
                     (js/alert "未开发")
                     (screen-stack/push-screen!
                       (:screen data)
                       (dissoc data :screen))))) 
     :menu-item-class menu-item-class
     :menu-item-hover-class menu-item-hover-class}]
   (tip-buttons-overlay/render)])
