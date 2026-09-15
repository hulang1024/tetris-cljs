(ns tetris.debug 
  (:require [clojure.string :as str]
            [tetris.core.rules :as rules]))

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
    (prow "time      " (:time state))
    (prow "level     " (:level state))
    (prow "row,col   " (str (:row state) "," (:col state)))
    (prow "ghost row,col   " (str (get-in state [:ghost :row])
                                  ","
                                  (get-in state [:ghost :col])))
    (prow "delta time" (fixed-num delta-ms))
    (prow "fall speed" (fixed-num (rules/fall-speed (:level state))))
    (prow "soft drop speed" (fixed-num (rules/soft-drop-speed (:level state) (:sdf state))))
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
    (prow "hold" "\n" (matrix->string (get-in state [:hold :shape])))
    "\n"
    (prow "current" "\n" (matrix->string (get-in state [:current :shape])))
    "\n"
    (prow "next   " "\n" (matrix->string (get-in state [:next :shape]))) 
    "\n"
    (prow "board  " "\n" (matrix->string (:board state)))))
