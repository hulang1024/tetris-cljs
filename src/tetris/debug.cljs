(ns tetris.debug 
  (:require [clojure.string :as str]
            [tetris.core.rules :as rules]
            [goog.dom :as gdom]
            [goog.style :as gstyle]))

(defn matrix->string [matrix]
  (letfn [(sym->str [sym]
            (if (nil? sym) "." (name sym)))
          (row->str [row]
            (apply str (map sym->str row)))]
    (str/join "\n" (map row->str matrix))))

(defn prow [label & content]
  (str label "   " (apply str content) "\n"))

(defn fixed-num [x]
  (.toFixed x 2))

(defn state->text [state input-state delta-ms]
  (str
    (prow "DAS" (:das state))
    (prow "ARR" (:arr state))
    (prow "DCD" (:dcd state))
    (prow "SDF" (:sdf state))
    (prow "Lock Delay" (:lock-delay state))
    "\n"
    (prow "status    " (:status state))
    (prow "level     " (:level state))
    (prow "row,col   " (str (:row state) "," (:col state)))
    (prow "ghost row,col   " (str (get-in state [:ghost :row])
                                  ","
                                  (get-in state [:ghost :col])))
    (prow "delta time" (fixed-num delta-ms))
    (prow "fall interval" (fixed-num (rules/fall-interval (:level state))))
    (prow "soft drop interval" (fixed-num (rules/soft-drop-interval (:level state) (:sdf state))))
    (prow "fall-timer" (fixed-num (:fall-timer state)))
    (prow "lock-timer" (fixed-num (:lock-timer state)))
    (prow "das-timer" (fixed-num (:das-timer state)))
    (prow "arr-timer" (fixed-num (:arr-timer state)))
    (prow "dcd-timer" (fixed-num (:dcd-timer state)))
    (prow "sdf-timer" (fixed-num (:sdf-timer state)))
    (prow "line-clearing?" (:line-clearing? state))
    (prow "line-clear-timer" (fixed-num (:line-clear-timer state)))
    (prow "das-button" (:das-button state))
    "\n"
    (prow "pressed-buttons" (pr-str (:pressed-buttons input-state)))
    (prow "just-pressed-buttons" (pr-str (:just-pressed-buttons input-state)))
    "\n"
    (prow "hold" (get-in state [:hold :shape :kind]))
    "\n"
    (prow "current" "\n" (matrix->string (get-in state [:current :shape])))
    "\n"
    (prow "next   " "\n" (str/join " " (map :kind (:next-queue state))))
    "\n"
    (prow "board  " "\n" (matrix->string (:board state)))))

(def debug-el-ref
  (atom 
    (when ^boolean goog/DEBUG
      (let [el (gdom/createDom "pre" "debug" "")]
        (gstyle/setStyle el #js {:position "absolute"
                                 :top 20
                                 :right 0
                                 :width 240
                                 :font-size 13
                                 :font-family "monospace"
                                 :whiteSpace "pre-wrap"
                                 :color "white"})
        (gdom/appendChild (.-body (gdom/getDocument)) el)
        el))))

(defn draw-debug [state input-state dt]
  (when debug-el-ref
    (set! (.-textContent @debug-el-ref)
          (clj->js (state->text state input-state dt)))))

(defn command-handler [command state state']
  (println (str "command " command))
  (when (seq (:events state'))
    (println (clj->js (select-keys state' [:events])))))


