(ns tetris.debug 
  (:require [cljs.pprint :as pprint]
            [clojure.string :as str]
            [goog.dom :as gdom]
            [goog.style :as gstyle]
            [tetris.core.ruleset :as ruleset]
            [tetris.core.ruleset.classic]
            [tetris.core.ruleset.modern]
            [tetris.core.tick :as tick]))

(defn matrix->string [matrix]
  (letfn [(->str [v]
            (if v (if (boolean? v) "o" (name (:kind v))) "."))
          (row->str [row]
            (apply str (map ->str row)))]
    (str/join "\n" (map row->str matrix))))

(defn prow [label & content]
  (str label "   " (apply str content) "\n"))

(defn state->text [{:keys [game-status game-state]}]
  #_(println (with-out-str
             (pprint/pprint (:board state))))
  (str
    (prow "DAS" (:das game-state))
    (prow "ARR" (:arr game-state))
    (prow "DCD" (:dcd game-state))
    (prow "SDF" (:sdf game-state))
    (prow "Lock Delay" (ruleset/lock-delay game-state))
    "\n"
    (prow "frame" (:frame game-state))
    (prow "game status" game-status)
    (prow "row,col" (str (:row game-state) "," (:col game-state)))
    (when (:ghost-enabled? game-state)
      (prow "ghost" (and (:ghost game-state)
                         (str (get-in game-state [:ghost :row])
                              ","
                              (get-in game-state [:ghost :col])))))
    (prow "level" (:level game-state))
    (prow "fall interval" (ruleset/fall-interval game-state))
    (prow "soft drop interval" (ruleset/soft-drop-interval game-state))
    (prow "fall-timer" (::tick/fall-timer game-state))
    (prow "lock-timer" (::tick/lock-timer game-state))
    (prow "das-timer" (::tick/das-timer game-state))
    (prow "arr-timer" (::tick/arr-timer game-state))
    (prow "dcd-timer" (::tick/dcd-timer game-state))
    (prow "sdf-timer" (::tick/sdf-timer game-state))
    (prow "das-button" (::tick/das-button game-state))
    (prow "line-clearing?" (::tick/line-clearing? game-state))
    (prow "line-clear-timer" (::tick/line-clear-timer game-state))
    "\n"
    (prow "hold" (get-in game-state [:hold :kind]))
    "\n"
    (prow "current" "\n" (matrix->string (get-in game-state [:current :shape])))
    "\n"
    (prow "next" "\n" (str/join " " (map :kind (:next-queue game-state))))
    "\n"
    (prow "next-piece-id" (:next-piece-id game-state))
    "\n"
    (prow "board" "\n" (matrix->string (:board game-state)))))

(def debug-overlay
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
      el)))

(defn draw-debug [states]
  (when debug-overlay
    (set! (.-textContent debug-overlay)
          (clj->js (state->text states)))))

(defn handler [command state state']
  (println (str "frame " (:frame state)))
  (println (str "command " command))
  (when (seq (:events state'))
    (println (clj->js (select-keys state' [:events])))))


