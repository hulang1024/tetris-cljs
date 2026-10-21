(ns tetris.screens.controls-options
  (:require-macros [cljss.core])
  (:require
    [cljss.core :as css :refer-macros [defstyles]]
    [tetris.options-store :as options-store]
    [tetris.i18n.core :as i18n]
    [tetris.screens.screen :as screen]
    [tetris.screens.tip-buttons-overlay :as tip-buttons-overlay]
    [clojure.string :as s]))

(defstyles container-class []
  {:max-width "60rem"
   :min-width "28rem"
   :width "50%"})

(defstyles control-item-class []
  {:display "flex"
   :justify-content "space-between"
   :align-items "center"
   :width "100%"
   :line-height "1rem"
   :padding "0.5em 0"
   :border-bottom "1px solid #666"})

(defstyles action-title-class [] {})

(defstyles button-slots-class []
  {:display "flex"})

(defstyles button-slot-class [focused?]
  {:margin-left "1rem"
   :padding "8px 0"
   "&:hover" {:background "rgba(111,111,111,0.1)"}
   :background (if focused? "rgba(111,111,111,0.1)" "transparent")
   :transition "background 0.1s"})

(defstyles button-text-class []
  {:width "4rem"
   :display "inline-block"})

(defstyles bracket-class [focused?]
  {:color (if focused? "#111" "rgba(111,111,111,0.45)")})

(defn button-display [{:keys [button]}]
  (cond
    (s/starts-with? button "Key") (.substr button 3)
    (s/starts-with? button "Arrow") ({"ArrowLeft" "←"
                                      "ArrowRight" "→"
                                      "ArrowUp" "↑"
                                      "ArrowDown" "↓"} button)
    (s/starts-with? button "Control") (str (.substr button 7 1) " Ctrl")
    (s/starts-with? button "Shift") (str (.substr button 5 1) " Shift")
    :else button))

(defn- button-slot [key button focused? on-focus on-select]
  [:div {:key key
         :class (button-slot-class focused?)
         :on-click (if focused? on-select on-focus)}
   [:span {:class (bracket-class focused?)} "〖"]
   [:span {:class (button-text-class)} (and button (button-display button))] 
   [:span {:class (bracket-class focused?)} "〗"]])

(defn- button-receive-overlay []
  [:div
   {:style
    {:z-index 3
     :position "absolute"
     :top "50%"
     :left "50%"
     :transform "translate(-50%, -50%)"
     :background "rgb(0, 0, 0, 0.2)"
     :width "100%"
     :height "100%"
     :text-lign "center"
     :display "flex"
     :flex-direction "column"
     :align-items "center"
     :justify-content "center"}}
   [:p "输入任意想要配置的按键"]
   [:p {:style {:margin-top "8px"}} "按Esc键取消"]])

(def ^:private ordered-actions
  [:move-left
   :move-right
   :rotate-cw
   :rotate-ccw
   :rotate-180
   :soft-drop
   :hard-drop
   :hold])

(defn- change-button [state action slot-index button]
  (assoc state
         :controls (assoc-in (:controls state) [action slot-index] button)
         :button-receiving? false))

(defn- save-controls! [this controls]
  (options-store/save-options! :controls controls)
  (swap! this assoc :controls-unchanged controls))

(defn- reset-controls! [this]
  (let [controls (options-store/slotify-controls
                   (:controls options-store/default-options))]
    (swap! this assoc :controls controls)
    (save-controls! this controls)))

(defn- move-focus! [this dir]
  (if-not (:focused @this)
    (swap! this assoc :focused [(ordered-actions 0) 0])
    (let [[action slot-index] (:focused @this)
          action-index (first (keep-indexed #(when (= %2 action) %1)
                                            ordered-actions))
          [action-index slot-index]
          (case dir
            :left [action-index (max 0 (dec slot-index))]
            :right [action-index (min 2 (inc slot-index))]
            :up [(max (dec action-index) 0) slot-index]
            :down [(min (inc action-index) (dec (count ordered-actions))) slot-index])]
      (swap! this assoc :focused [(ordered-actions action-index) slot-index]))))

(defmethod screen/init :controls-options []
  (let [controls (options-store/slotify-controls
                   (options-store/get-options :controls))]
    {:controls-unchanged controls
     :controls controls
     :focused nil
     :button-receiving? false}))

(defmethod screen/render :controls-options [this]
  [:div
   [:h1 (i18n/text [:screen-title :custom-controls])]
   [:div {:class (container-class)}
    (for [action ordered-actions]
      [:div {:key action :class (control-item-class)}
       [:div {:class (action-title-class)}
        (i18n/text [:controls-action action])]
       [:div {:class (button-slots-class)}
        (for [[slot-index button] (map-indexed
                                    vector
                                    (get-in @this [:controls action]))]
          (button-slot [action slot-index]
                       button
                       (= (:focused @this) [action slot-index])
                       #(swap! this assoc :focused [action slot-index])
                       #(swap! this assoc :button-receiving? true)))]])]
   [:div {:style {:margin-top "32px"
                  :visibility (if (and (not (:button-receiving? @this))
                                       (:focused @this)) "visible" "hidden")}}
    "再次点击以配置按键"]
   (when (:button-receiving? @this)
     (button-receive-overlay))
   (tip-buttons-overlay/render
     ["Del" "清除" {:disabled? (or (not (:focused @this))
                                   (not (get-in @this
                                                (into [:controls] (:focused @this)))))}]
     ["R" "重置"]
     ["A" "保存" {:disabled? (= (:controls-unchanged @this) (:controls @this))}])])

(defmethod screen/on-keydown :controls-options [this event]
  (let [key (.-code event)
        button {:type :keyboard :button key}
        [action slot-index] (:focused @this)]
    (cond
      (:button-receiving? @this)
      (if (= key "Escape")
        (swap! this assoc :button-receiving? false)
        (swap! this change-button action slot-index button))

      (:focused @this)
      (case key
        "Enter" (swap! this assoc :button-receiving? true)
        "Delete" (swap! this change-button action slot-index nil)
        "Escape" false
        "KeyA" (save-controls! this (:controls @this))
        "KeyR" (reset-controls! this)
        "ArrowUp" (move-focus! this :up)
        "ArrowRight" (move-focus! this :right)
        "ArrowDown" (move-focus! this :down)
        "ArrowLeft" (move-focus! this :left)
        true)

      (= key "KeyA") (save-controls! this (:controls @this))
      (= key "KeyR") (reset-controls! this)
      (= key "ArrowUp") (move-focus! this :up)
      (= key "ArrowRight") (move-focus! this :right)
      (= key "ArrowDown") (move-focus! this :down)
      (= key "ArrowLeft") (move-focus! this :left)

      :else false)))
