(ns tetris.screens.gameplay-options
  (:require-macros [cljss.core])
  (:require
    ["@base-ui/react/slider" :refer [Slider]]
    [tetris.screens.styles.slider :as slider.styles]
    [cljss.core :as css :refer-macros [defstyles]]
    [tetris.screens.tip-buttons-overlay :as tip-buttons-overlay]
    [tetris.screens.screen :as screen]))

(defmethod screen/init :gameplay-options []
  {:das 16
   :arr 6
   :sdf 1})

(defn option-slider [this label key min max]
  [:> Slider.Root
   {:key (name key)
    :className (slider.styles/root)
    :defaultValue (key @this)
    :min min
    :max max
    :step 1
    :onValueChange #(swap! this assoc key %)}
   [:> Slider.Label {:className (slider.styles/label)} label]
   [:> Slider.Value {:className (slider.styles/value)}]
   [:> Slider.Control {:className (slider.styles/control)}
    [:> Slider.Track {:className (slider.styles/track)}
     [:> Slider.Indicator {:className (slider.styles/indicator)}]
     [:> Slider.Thumb {:className (slider.styles/thumb)}]]]])

(defmethod screen/render :gameplay-options [this]
  [:div
   "TODO"
   #_(option-slider this "DAS" :das 1 20)
   #_(option-slider this "ARR" :arr 0 6)
   #_(option-slider this "SDF" :sdf 5 40)
   (tip-buttons-overlay/render)])

(defmethod screen/on-keydown :gameplay-options [this event]
  nil)
