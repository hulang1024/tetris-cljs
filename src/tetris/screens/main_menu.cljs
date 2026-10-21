(ns tetris.screens.main-menu 
  (:require-macros [cljss.core])
  (:require
    [cljss.core :as css :refer-macros [defstyles]]
    [reagent.core :as r]
    [tetris.audio :as audio]
    [tetris.screens.menu :as menu]
    [tetris.screens.menu-overlay :refer [menu-overlay]]
    [tetris.screens.screen :as screen]
    [tetris.screens.screen-stack :as screen-stack]
    [tetris.screens.tip-buttons-overlay :as tip-buttons-overlay]
    [tetris.screens.user :refer [display-user logic-overlay]]))

(defstyles menu-item-class [item-id]
  {:margin-top (if (= item-id :back) "1em" 0)
   :font-size "2rem"
   :color "#999"})

(defstyles menu-item-hover-class [item-id]
  {:color "#111"})

(defstyles header-class []
  {:position "absolute"
   :top 0
   :width "100%"
   :height "40px"})

(defmethod screen/init :main-menu [_]
  {:menu-state
   (r/atom
     (menu/make
       [(menu/item :solo nil 1)
        #_(menu/item :multiplayer nil 2 {:screen :multiplayer})
        (menu/item :options nil 3)
        (menu/item :marathon :solo 1 {:screen :solo :mode :marathon})
        (menu/item :classic :solo 2 {:screen :solo :mode :classic})
        #_(menu/item :40L :solo 3 {:screen :solo :mode :40L})
        (menu/item :controls-options :options 1 {:screen :controls-options})
        (menu/item :gameplay-options :options 2 {:screen :gameplay-options})
        #_(menu/item :audio-options :options 3 {:screen :audio-options})]
       :solo))
   :login-opened false})

(defmethod screen/render :main-menu [this]
  [:div
   [:div {:class (header-class)}
    [display-user {:on-click #(swap! this update :login-opened not)}]
    (when (:login-opened @this)
      [logic-overlay #(swap! this assoc :login-opened false)])]

   [menu-overlay
    {:state (:menu-state @this)
     :on-enter (fn [item]
                 (when (contains? #{:marathon :classic :40L} (:id item))
                   (audio/play :gameplay))
                 (when-let [data (:data item)]
                   (screen-stack/push-screen!
                     (:screen data)
                     (dissoc data :screen))))
     :menu-item-class menu-item-class
     :menu-item-hover-class menu-item-hover-class}]
   (tip-buttons-overlay/render)])
