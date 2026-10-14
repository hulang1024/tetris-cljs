(ns tetris.screens.i18n)

(def zh-cn
  {:menu {:back "返回"
          :solo "单人"
          :multiplayer "多人"
          :40L "40行"
          :classic "经典"
          :marathon "马拉松"
          :options "选项"
          :controls-options "控制"
          :custom-controls "控制设置"
          :gameplay-options "游戏"
          :audio-options "音频"
          :start-over "重新开始"
          :back-to-main-menu "返回到主菜单"
          :continue-game "继续游戏"
          :exit-game "退出游戏"
          :continue-replay "继续回放"
          :exit-replay "退出回放"
          :replay "观看回放"}
   :screen-title {:custom-controls "自定义控制"
                  :gameplay "游戏"}
   :controls-action {:soft-drop "软降"
                     :move-left "向左移动"
                     :move-right "向右移动"
                     :rotate-cw "向右转"
                     :rotate-ccw "向左转"
                     :rotate-180 "向右转180"
                     :hard-drop "硬降"
                     :hold "保持"}})

(defn text [& id]
  (get-in zh-cn id))
