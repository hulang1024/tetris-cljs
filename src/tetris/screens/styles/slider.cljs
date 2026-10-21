(ns tetris.screens.styles.slider
  (:require-macros [cljss.core])
  (:require [cljss.core :refer [defstyles]]))

(defstyles root []
  {:width "100%"})

(defstyles label []
  {:cursor "default"
   :font-size "0.875rem"
   :line-height "1.25rem"
   ::media {[:prefers-color-scheme :dark]
                {:color "white"}}})

(defstyles value []
  {:font-size "0.875rem"
   :line-height "1.25rem"
   :text-align "end"
   ::media {[:prefers-color-scheme :dark]
                {:color "white"}}})

(defstyles control []
  {:box-sizing "border-box"
   :display "flex"
   :align-items "center"
   :width "100%"
   :padding-block "0.75rem"
   :touch-action "none"
   :-webkit-user-select "none"
   :user-select "none"})

(defstyles track []
  {:width "100%"
   :height "0.25rem"
   :background-color "oklch(92.2% 0 0deg)"
   :-webkit-user-select "none"
   :user-select "none"
   ::media {[:prefers-color-scheme :dark]
                {:background-color "oklch(26.9% 0 0deg)"}}})

(defstyles indicator []
  {:background-color "oklch(34.5% 0 0deg)"
   :-webkit-user-select "none"
   :user-select "none"
   ::media {[:prefers-color-scheme :dark]
                {:background-color "white"}}})

(defstyles thumb []
  {:box-sizing "border-box"
   :width "1rem"
   :height "1rem"
   :border "1px solid oklch(14.5% 0 0deg)"
   :background-color "white"
   :-webkit-user-select "none"
   :user-select "none"
   ::media {[:prefers-color-scheme :dark]
                {:border "1px solid white"
                 :background-color "oklch(14.5% 0 0deg)"}}
   "&:has(:focus-visible)"
   {:outline "2px solid oklch(14.5% 0 0deg)"
    :outline-offset "2px"
    ::media {[:prefers-color-scheme :dark]
                 {:outline-color "white"}}}})
