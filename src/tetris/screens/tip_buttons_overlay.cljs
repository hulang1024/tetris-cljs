(ns tetris.screens.tip-buttons-overlay
  (:require-macros [cljss.core])
  (:require
    [cljss.core :refer-macros [defstyles]]))

(defstyles tip-buttons-overlay-class []
  {:position "absolute"
   :bottom "2rem"
   :display "flex"
   :justify-content "space-between"
   :width "100%"
   :z-index 2})

(defstyles left-class []
  {:margin-left "4rem"})

(defstyles right-class []
  {:margin-right "4rem"
   :display "inherit"})

(defstyles button-class [button disabled?]
  {:font-size "1rem"
   :margin-right (if (= button "Esc") 0 "2rem")
   :color (if disabled? "#666" "#fff")})

(defstyles key-class []
  {:margin-right "0.2em"
   :border "1px solid"
   :padding "4px 2px"
   :min-width "30px"
   :display "inline-block"
   :text-align "center"})

(defn tip-button [[key label {:keys [disabled?]}]]
  [:div {:key key :class (button-class key disabled?)}
   [:span {:class (key-class)} key]
   [:span label]])

(defn render [& more-buttons]
  [:div {:key "tip-buttons-overlay"
         :class (tip-buttons-overlay-class)}
   [:div {:class (left-class)}
    (tip-button ["Enter" "选择"])]
   [:div {:class (right-class)}
    (for [button (concat (filter some? more-buttons) [["Esc" "返回"]])]
      (tip-button button))]])
