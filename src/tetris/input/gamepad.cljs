(ns tetris.input.gamepad
  (:require ["excalibur" :as ex]
            [tetris.core.input :refer [handle InputState]]))

(def gamepad-buttons
  {ex/Buttons.Face1 :rotate-ccw
   ex/Buttons.Face2 :rotate-cw
   #_ex/Buttons.Face3
   #_ex/Buttons.Face4
   ex/Buttons.DpadUp :rotate-cw
   ex/Buttons.DpadDown :soft-drop
   ex/Buttons.DpadLeft :move-left
   ex/Buttons.DpadRight :move-right
   ex/Buttons.LeftBumper :hard-drop
   ex/Buttons.RightBumper :hold
   #_ex/Buttons.LeftTrigger
   #_ex/Buttons.RightTrigger
   #_ex/Buttons.Select
   ex/Buttons.Start :ok
   #_ex/Buttons.LeftStick
   #_ex/Buttons.RightStick
   #_ex/Buttons.CenterButton
   #_ex/Buttons.MiscButton1})

(defn- gamepad-button->button [button]
  (gamepad-buttons button))

(defn handle
  {:malli/schema [:=> [:cat InputState some?] InputState]}
  [input-state ^js gamepad]
  (let [pressed-game-buttons (filterv #(.isButtonHeld ^js gamepad %) (keys gamepad-buttons))
        pressed-buttons (mapv gamepad-button->button pressed-game-buttons)]
    (handle input-state pressed-buttons)))
