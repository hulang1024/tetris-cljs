(ns tetris.screens.gameplay-options
  (:require-macros [cljss.core])
  (:require
    ["@base-ui/react/slider" :refer [Slider]]
    [cljss.core :as css :refer-macros [defstyles]]
    [tetris.options-store :as options-store]
    [tetris.screens.i18n :as i18n]
    [tetris.screens.screen :as screen]
    [tetris.screens.styles.slider :as slider.styles]
    [tetris.screens.tip-buttons-overlay :as tip-buttons-overlay]))

(defmethod screen/init :gameplay-options []
  {:handling (options-store/get-options :handling)})

(defn- option-slider [this label key min max]
  [:> Slider.Root
   {:key (name key)
    :className (slider.styles/root)
    :defaultValue (get-in @this [:handling key])
    :min min
    :max max
    :step 1
    :style {:padding "16px 0"}
    :onValueChange (fn [value]
                     (swap! this assoc-in [:handling key] value)
                     (options-store/save-options! :handling (:handling @this)))}
   [:> Slider.Label {:className (slider.styles/label)} label]
   [:> Slider.Value {:className (slider.styles/value)}]
   [:> Slider.Control {:className (slider.styles/control)}
    [:> Slider.Track {:className (slider.styles/track)}
     [:> Slider.Indicator {:className (slider.styles/indicator)}]
     [:> Slider.Thumb {:className (slider.styles/thumb)}]]]])

(defmethod screen/render :gameplay-options [this]
  [:div {:style {:max-width "60rem"
                 :min-width "20rem"
                 :width "50%"}}
   [:h1 (i18n/text :screen-title :gameplay)]
   (option-slider this "DAS" :das 1 20)
   (option-slider this "ARR" :arr 0 6)
   (option-slider this "SDF" :sdf 2 40)
   (tip-buttons-overlay/render)])
