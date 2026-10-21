(ns tetris.i18n.core 
  (:require
    [clojure.string :as str]
    [tetris.i18n.zh-cn :as zh-cn]))

(defn text
  ([id] (text id nil))
  ([id not-found]
   (let [ks (cond
              (string? id) [(keyword id)]
              (coll? id) id
              :else [id])]
     (get-in zh-cn/locale ks not-found))))

(defn format [id env]
  (reduce-kv (fn [s k v]
               (str/replace s (str "{" (name k) "}") v))
             (text id)
             env))

