(ns tetris.screens.screen 
  (:require
    [reagent.core :as r]))

(def get-id (comp :id deref))

(defmulti init identity)

(defmulti render get-id)

(defmulti on-entering get-id)

(defmulti on-exiting get-id)

(defmulti on-resuming get-id)

(defmulti on-keydown get-id)

(defmulti on-update get-id)

;;;; default
(defmethod on-entering :default [_] nil)

(defmethod on-exiting :default [_] nil)

(defmethod on-resuming :default [_] nil)

(defmethod on-keydown :default [_] false)

(defmethod on-update :default [_] nil)

(defmethod init :default [id & _args] (r/atom {:id id}))

(defmethod render :default [screen]
  (tap> (str "render " (get-id screen)))
  [:div (str "id: "(name (get-id screen)))])
