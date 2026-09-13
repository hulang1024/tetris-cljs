(ns tetris.debug 
  (:require [clojure.string :as str]))

(defn- sym->str [sym]
  (if (nil? sym) "." (name sym)))

(defn- row->str [row]
  (apply str (map sym->str row)))

(defn matrix->string [matrix]
  (str/join "\n" (map row->str matrix)))

(defn prow [label & content]
  (str label "   " (apply str content) "\n"))

(defn state->text [state]
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
    (prow "fall-timer" (:fall-timer state))
    (prow "lock-timer" (:lock-timer state))
    (prow "events" (:events state))
    "\n"
    (prow "current" "\n" (matrix->string (get-in state [:current :shape])))
    "\n"
    (prow "next   " "\n" (matrix->string (get-in state [:next :shape]))) 
    "\n"
    (prow "board  " "\n" (matrix->string (:board state)))))
