(ns tetris.scenes.gameplay.piece
  (:require-macros [shadow.cljs.modern :refer [defclass]])
  (:require ["excalibur" :as ex]
            [tetris.core.piece :as p]
            [tetris.engine :as engine]
            [tetris.render :as r]
            [tetris.resources :refer [resources]]))

(def grayscale-material-ref (atom nil))
(defn create-grayscale-material! []
  (or @grayscale-material-ref
      (let [source
            "#version 300 es
            precision mediump float;
            in vec2 v_uv;
            uniform sampler2D u_graphic;
            uniform float u_alpha;
            out vec4 fragColor;
            void main() {
                         vec4 tex = texture(u_graphic, v_uv);
                         float avg = 0.2126 * tex.r + 0.7152 * tex.g + 0.0722 * tex.b;
                         float a = tex.a * u_alpha;
                         fragColor = vec4(avg * a, avg * a, avg * a, a);
                         }"
            material (.createMaterial (.-graphicsContext engine/game)
                                      #js {:name "grayscale"
                                           :fragmentSource source})]
        (reset! grayscale-material-ref material))))

(defclass Cell (extends ex/Actor)
  (field sprite)
  (field ghost?)

  (constructor [this pos sprite ghost?]
    (super #js {:pos pos
                :z (if ghost? 0 1)
                :anchor ex/Vector.Zero})
    (set! (.-sprite this) sprite)
    (set! (.-ghost? this) ghost?))

  Object
  (onInitialize [this]
    (.add (.-graphics this) (.-sprite this))
    (when (.-ghost? this)
      (let [material (create-grayscale-material!)]
        (.update material
                 (fn [^js shader]
                   (.setUniformFloat shader "u_alpha" 0.3)))
        (set! (.. this -graphics -material) material)))))

(defn- get-positions [piece]
  (for [[r row]  (map-indexed vector
                              (p/get-shape (:kind piece) (:dir piece)))
        [c cell] (map-indexed vector row)
        :when (some? cell)]
    (r/cell->pos (+ (:row piece) r) (+ (:col piece) c))))

(defn- create-cells [piece ghost?]
  (let [^js piece-src ((:kind piece) (:tetr resources))
        sprite (ex/Sprite.
                 #js {:image piece-src
                      :destSize #js {:width r/cell-size
                                     :height r/cell-size}})]
    (map (fn [pos] (Cell. pos sprite ghost?))
         (get-positions piece))))

(defn- set-positions [piece cells]
  (let [positions (get-positions piece)]
    (doseq [[cell pos] (map vector cells positions)]
      (set! (.-pos cell) pos))
    piece))

(def Piece
  [:map
   [:kind p/Kind]
   [:dir p/Dir]
   [:row :int]
   [:col :int]
   [:cells [:sequential some?]]])

(defn create-piece
  {:malli/schema [:function
                  [:=> [:cat p/Kind p/Dir] Piece]
                  [:=> [:cat p/Kind p/Dir :boolean] Piece]]}
  ([kind dir] (create-piece kind dir false))
  ([kind dir ghost?]
   (let [piece {:kind kind
                :dir dir
                :row 0
                :col 0}]
     (assoc piece :cells (create-cells piece ghost?)))))

(defn set-dir
  {:malli/schema [:=> [:cat Piece p/Dir] Piece]}
  [piece dir]
  (if (not= (:dir piece) dir)
    (set-positions (assoc piece :dir dir) (:cells piece))
    piece))

(defn set-pos
  {:malli/schema [:=> [:cat Piece :int :int] Piece]}
  [piece row col]
  (if (or (not= (:row piece) row) (not= (:col piece) col))
    (set-positions (assoc piece :row row :col (or col (:col piece)))
                   (:cells piece))
    piece))
