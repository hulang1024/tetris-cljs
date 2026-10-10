(ns tetris.screens.main-menu 
  (:require-macros [cljss.core])
  (:require
    [cljss.core :as css :refer-macros [defstyles]]
    [tetris.screens.menu-system :as menu-sys]
    [tetris.screens.screen :as screen]
    [tetris.screens.screen-stack :as screen-stack]
    [tetris.screens.gameplay-menu :as gameplay-menu]))

(defmethod screen/init :main-menu []
  (menu-sys/make-menu-system
    [(menu-sys/item :solo nil 1)
     (menu-sys/item :multiplayer nil 2 {:screen :multiplayer})
     (menu-sys/item :options nil 3)
     (menu-sys/item :marathon :solo 1 {:screen :solo :mode :marathon})
     (menu-sys/item :classic :solo 2 {:screen :solo :mode :classic})
     (menu-sys/item :40L :solo 3 {:screen :solo :mode :40L})
     (menu-sys/item :controls :options 1 {:screen :controls})
     (menu-sys/item :gameplay :options 2 {:screen :gameplay})
     (menu-sys/item :audio :options 3 {:screen :audio})]
    :solo))

(defstyles menu-item-class [item-id]
  {:margin-top (if (= item-id :back) "1em" 0)
   :font-size "2rem"
   :color "#aaa"})

(defstyles menu-item-hover-class [item-id]
  {:color "#fff"})

(defmethod screen/render :main-menu [this]
  (gameplay-menu/menu-overlay @this {:menu-item-class menu-item-class
                                     :menu-item-hover-class menu-item-hover-class}))

(defmethod screen/on-keydown :main-menu [this event]
  (gameplay-menu/handle-key-event
    @this
    event
    {:on-update #(reset! this %)
     :on-enter
     (fn [item]
       (when-let [data (:data item)]
         (if (= (:mode data) :40L)
           (js/alert "未开发")
           (screen-stack/push-screen!
             (:screen data)
             (dissoc data :screen)))))})
  true)
