(ns tetris.screens.screen-stack
  (:require
    [reagent.core :as r]
    [reagent.ratom :as ratom]
    [reagent.dom.client :as rd]
    [tetris.screens.screen :as screen]
    [tetris.audio :as audio]))

(defn- make-screen-stack []
  {:stack []})

(defn- push-screen [state screen]
  (update state :stack conj screen))

(defn- pop-screen [state]
  (update state :stack pop))

(defn- replace-screen [state screen]
  (update state :stack #(conj (pop %) screen)))

(defn- active-screen [state]
  (peek (:stack state)))

(defonce ^:private app
  (r/atom (make-screen-stack)))

(defonce ^:private root
  (delay (rd/create-root (.getElementById js/document "app"))))

(defn- add-class [view class-name]
  (let [[tag attrs & children] view]
    (into [tag]
          (if (map? attrs)
            [(merge {:class (conj (flatten [(:class attrs)]) class-name)}
                    (dissoc attrs :class))
             children]
            [{:class class-name} attrs children]))))

(defn- render-screen []
  (when-let [screen-state (active-screen @app)]
    (when-let [view (screen/render screen-state)]
      (add-class view
                 (str "screen-" (name (:id @screen-state)))))))

(defn- ^:async init-screen [screen-id init-args]
  (let [screen-state (await (apply screen/init screen-id init-args))
        with-id (fn [m] (assoc (or m {}) :id screen-id))]
    (if (instance? ratom/RAtom screen-state)
      (do (swap! screen-state with-id)
          screen-state)
      (r/atom (with-id screen-state)))))

(defn push-screen! [screen-id & init-args]
  (tap> (str "push screen: " screen-id ", init args: " init-args))
  (when-let [screen (active-screen @app)]
    (screen/on-exiting screen))
  (.then (init-screen screen-id init-args)
         (fn [screen]
           (swap! app push-screen screen)
           (screen/on-entering screen)
           (tap> @app))))

(defn pop-screen! []
  (tap> "back screen")
  (when-let [screen (active-screen @app)]
    (screen/on-exiting screen))
  (swap! app pop-screen)
  (screen/on-resuming (active-screen @app))
  (audio/play :screen-back)
  (tap> @app))

(defn replace-screen! [screen-id & init-args]
  (tap> (str "replace screen: " screen-id ", init args: " init-args))
  (when-let [screen (active-screen @app)]
    (screen/on-exiting screen))
  (.then (init-screen screen-id init-args)
         (fn [screen]
           (swap! app replace-screen screen)
           (screen/on-entering screen)
           (tap> @app))))

(defn- on-keydown [event]
  (when-let [screen (active-screen @app)]
    (let [handled? (screen/on-keydown screen event)]
      (when (and (not handled?) (= (.-code event) "Escape"))
        (pop-screen!)))))

(defn render []
  (.removeEventListener js/window "keydown" on-keydown)
  (.addEventListener js/window "keydown" on-keydown)
  (rd/render @root [render-screen]))

