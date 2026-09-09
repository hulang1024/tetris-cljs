(ns tetr.main
  (:require [goog.dom :as gdom]))

(defn ^:dev/after-load init []
  (.appendChild js/document.body (gdom/createDom "div" "" "Tetr")))
