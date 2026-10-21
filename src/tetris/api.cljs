(ns tetris.api
  (:require [ajax.core :refer [ajax-request]]
            [tetris.global :refer [app]]))

(defn- request [req]
  (js/Promise.
    (fn [resolve reject]
      (ajax-request
        (assoc req
               :handler (comp resolve second)
               :error-handler reject)))))

(defn post [path data]
  (request
    {:method :post
     :uri (str "/api" path)
     :headers {"Content-Type" "application/json"
               "Authorization" (str "Bearer " (:api-token @app))}
     :body (js/JSON.stringify (clj->js data))
     :response-format (ajax.core/json-response-format {:keywords? true})}))
