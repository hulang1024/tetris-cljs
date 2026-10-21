(ns tetris.dev-server
  (:require [clojure.string :as str]) 
  (:import
    [io.undertow.server HttpServerExchange]))

(defn api-request? [^HttpServerExchange exchange _config]
  (let [path (.getRequestPath exchange)]
    (str/starts-with? path "/api/")))
