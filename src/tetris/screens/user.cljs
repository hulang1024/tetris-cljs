(ns tetris.screens.user
  (:require-macros [cljss.core])
  (:require
    ["@base-ui/react/button" :refer [Button]]
    ["@base-ui/react/input" :refer [Input]]
    [cljss.core :as css :refer-macros [defstyles]]
    [reagent.core :as r]
    [tetris.api :as api]
    [tetris.global :refer [app]]
    [tetris.i18n.core :as i18n]))

(defstyles display-user-class []
  {:width "6rem"
   :height "100%"
   :display "flex"
   :text-align "center"
   :background "rgba(0,0,0,0.1)"
   "&:hover" {:background "rgba(0,0,0,0.2)"}})

(defstyles logic-overlay-class []
  {:position "fixed"
   :top "50%"
   :left "50%"
   :transform "translate(-50%,-50%)"
   :min-width "18rem"
   :padding "2rem"
   :display "flex"
   :flex-direction "column"
   :justify-content "center"
   :background "#eee"
   :text-align "left"
   :border-radius "1px"
   "label" {:margin-bottom "1rem" :width "100%"}
   "label input" {:margin-top "0.4rem"
                  :width "100%"
                  :padding "0.2rem"
                  :font-size "1rem"}
   "button" {:margin-top "1rem"
             :padding "0.2rem"
             :font-size "1rem"}})

(defn- ^:async handle-login [user-form on-success messager]
  (swap! app assoc :online-state :loggin-in)
  (let [res (await (api/post "/login" user-form))]
    (if (= (:code res) "ok")
      (let [{:keys [token user]} (:data res)]
        (on-success)
        (swap! app assoc
               :online-state :online
               :user user
               :api-token token))
      (do (swap! app assoc :online-state :offline)
          (messager
            (if (= (:code res) "error")
              (i18n/format [:login-message "format-error"] {:u 3 :p 6})
              (i18n/text [:login-message "failed"])))))))

(defn- ^:async handle-register [user-form on-success messager]
  (let [res (await (api/post "/register" user-form))]
    (if (= (:code res) "ok")
      (on-success (:data res))
      (messager
        (if (= (:code res) "error")
          (i18n/format [:register-message "format-error"] {:u 3 :p 6})
          (i18n/text [:register-message (:code res)]))))))

(defn logic-overlay [on-done]
  (r/with-let [state (r/atom {:username ""
                              :password ""
                              :message nil})
               set-message (fn [s] (swap! state assoc :message s))
               keydown-event-listener (fn [event]
                                        (when (= (.-code event) "Escape")
                                          (on-done))) ]
    (js/document.addEventListener "keydown" keydown-event-listener)
    [:div {:class (logic-overlay-class)}
     [:label (i18n/text [:login :username])
      [:> Input {:type "text"
                 :autoFocus true
                 :on-value-change #(swap! state assoc :username %)}]]
     [:label (i18n/text [:login :password])
      [:> Input {:type "password"
                 :on-value-change #(swap! state assoc :password %)}]]
     [:span {:style {:min-height "1rem"
                     :color "orangered"}} (:message @state)]
     [:> Button {:class "login"
                 :on-click (fn []
                             (set-message nil)
                             (handle-login @state on-done set-message))}
      (i18n/text [:login :button]) ]
     [:> Button {:class "register"
                 :on-click (fn []
                             (set-message nil)
                             (handle-register @state
                                              (fn [user]
                                                (swap! state conj user)
                                                (on-done))
                                              set-message))}
      (i18n/text [:register :button])]]
    (finally
      (js/document.removeEventListener "keydown" keydown-event-listener))))

(defn display-user [{:keys [on-click]}]
  [:div {:class (display-user-class)}
   (case (:online-state @app)
     :offline
     [:span {:style {:width "100%"
                     :justify-self "center"
                     :align-self "center"
                     :font-size "1rem"}
             :on-click on-click}
      (i18n/text :click-login)]

     :online
     [:div (get-in @app [:user :username])]

     nil)])

