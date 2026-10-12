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

(defstyles button-class [button]
  {:font-size "1rem"
   :margin-right (if (= button "Esc") 0 "2rem")})

(defn tip-button [button text]
  [:div {:key button :class (button-class button)}
   [:span {:style {:margin-right "0.1em"}} (str "[" button "]")]
   [:span text]])

(defn render [& more-buttons]
  [:div {:key "tip-buttons-overlay"
         :class (tip-buttons-overlay-class)}
   [:div {:class (left-class)}
    (tip-button "Enter" "选择")]
   [:div {:class (right-class)}
    (concat (for [[button text] more-buttons]
              (tip-button button text))
            (list (tip-button "Esc" "返回")))]])
