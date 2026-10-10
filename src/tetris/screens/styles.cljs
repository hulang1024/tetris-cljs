(ns tetris.screens.styles
  (:require [cljss.core :as css]))

(defn load []
  (css/font-face
    {:font-family "zpix"
     :font-style "normal"
     :font-weight 400
     :font-display "block"
     :src [{:url "assets/zpix.woff2"
            :format "woff2"}]})

  (css/inject-global
    {:* {:margin 0
         :padding 0}
     :html {:font-size "1em"}
     :body {:width "100%"
            :height "100%"
            :display "flex"
            :justify-content "center"
            :align-items "center"
            :overflow "hidden"
            :font-family "zpix"}
     :canvas {:z-index 2}
     "#app" {:position "absolute"
             :top 0
             :left 0
             :z-index 3
             :width "100%"
             :height "100%"
             :display "flex"
             :justify-content "center"
             :align-items "center"
             :color "#ffffff"}}))
