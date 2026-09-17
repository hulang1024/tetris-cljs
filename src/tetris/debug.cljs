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

(defn state->text [state input-state]
  (str
    (prow "DAS" (:das state))
    (prow "ARR" (:arr state))
    (prow "DCD" (:dcd state))
    (prow "SDF" (:sdf state))
    (prow "Lock Delay" (:lock-delay state))
    "\n"
    (prow "frame" (:frame state))
    (prow "status" (:status state))
    (prow "row,col" (str (:row state) "," (:col state)))
    (prow "ghost row,col" (str (get-in state [:ghost :row])
                                  ","
                                  (get-in state [:ghost :col])))
    (when input-state
      (str
        (prow "level" (:level state))
        (prow "pressed-buttons" (pr-str (:pressed-buttons input-state)))
        (prow "just-pressed-buttons" (pr-str (:just-pressed-buttons input-state)))
        (prow "fall interval" (rules/fall-interval (:level state)))
        (prow "soft drop interval" (rules/soft-drop-interval (:level state) (:sdf state)))
        (prow "fall-timer" (:fall-timer state))
        (prow "lock-timer" (:lock-timer state))
        (prow "das-timer" (:das-timer state))
        (prow "arr-timer" (:arr-timer state))
        (prow "dcd-timer" (:dcd-timer state))
        (prow "sdf-timer" (:sdf-timer state))
        (prow "line-clearing?" (:line-clearing? state))
        (prow "line-clear-timer" (:line-clear-timer state))
        (prow "das-button" (:das-button state))))
    "\n"
    (prow "hold" (get-in state [:hold :kind]))
    "\n"
    (prow "current" "\n" (matrix->string (get-in state [:current :shape])))
    "\n"
    (prow "next" "\n" (str/join " " (map :kind (:next-queue state))))
    "\n"
    (prow "board" "\n" (matrix->string (:board state)))))

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

(defn draw-debug [state input-state]
  (when debug-el-ref
    (set! (.-textContent @debug-el-ref)
          (clj->js (state->text state input-state)))))

(defn handler [command state state']
  (println (str "frame " (:frame state)))
  (println (str "command " command))
  (when (seq (:events state'))
    (println (clj->js (select-keys state' [:events])))))


