(ns tetris.i18n.zh-cn)

(def locale
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
                     :hold "保持"}
   :tip-button {:enter "选择"
                :back "返回"}
   :click-login "点击登录"
   :login {:username "用户名"
           :password "密码"
           :button "登录"}
   :register {:button "注册"}
   :login-message {"format-error" "用户名至少{u}位，密码至少{p}位"
                   "failed" "用户名或密码错误"}
   :register-message {"format-error" "用户名至少{u}位，密码至少{p}位"
                      "username-exists" "用户名已存在"
                      "failed" "注册失败"}})

