(ns tetris.global 
  (:require
    [reagent.core :as r]))

(defonce app
  (r/atom {:online-state :offline ; offline | logging-in | online
           :api-token nil
           :user nil
           :stack []}))
