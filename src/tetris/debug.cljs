(ns tetris.debug 
  (:require [clojure.string :as str]
            [cljs.pprint :refer [cl-format]]
            [tetris.core.game :as game]))

(defn matrix->string [matrix]
  (letfn [(sym->str [sym]
            (if (nil? sym) "." (name sym)))
          (row->str [row]
            (apply str (map sym->str row)))]
    (str/join "\n" (map row->str matrix))))

(defn prow [label & content]
  (str label "   " (apply str content) "\n"))

(defn fixed-num [x]
  (cl-format nil "~,2f" x))

(defn state->text [state input-state delta-ms]
  (str
    (prow "DAS" (get-in state [:settings :das]))
    (prow "ARR" (get-in state [:settings :arr]))
    (prow "DCD" (get-in state [:settings :dcd]))
    (prow "SDF" (get-in state [:settings :sdf]))
    (prow "Lock Delay" (get-in state [:settings :lock-delay]))
    "\n"
    (prow "status    " (:status state))
    (prow "level     " (:level state))
    (prow "row,col   " (str (:row state) "," (:col state)))
    (prow "ghost row,col   " (str (get-in state [:ghost :row])
                                  ","
                                  (get-in state [:ghost :col])))
    (prow "delta time" (fixed-num delta-ms))
    (prow "fall speed" (fixed-num (game/calc-fall-speed (:level state))))
    (prow "soft drop speed" (fixed-num (game/calc-soft-drop-speed state)))
    (prow "fall-timer" (fixed-num (:fall-timer state)))
    (prow "lock-timer" (fixed-num (:lock-timer state)))
    (prow "das-timer" (fixed-num (:das-timer state)))
    (prow "arr-timer" (fixed-num (:arr-timer state)))
    (prow "dcd-timer" (fixed-num (:dcd-timer state)))
    (prow "sdf-timer" (fixed-num (:sdf-timer state)))
    (prow "das-button" (:das-button state))
    (prow "events" (:events state))
    "\n"
    (prow "pressed-buttons" (pr-str (:pressed-buttons input-state)))
    (prow "just-pressed-buttons" (pr-str (:just-pressed-buttons input-state)))
    "\n"
    (prow "current" "\n" (matrix->string (get-in state [:current :shape])))
    "\n"
    (prow "next   " "\n" (matrix->string (get-in state [:next :shape]))) 
    "\n"
    (prow "board  " "\n" (matrix->string (:board state)))))
