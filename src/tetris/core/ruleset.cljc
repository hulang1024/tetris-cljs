(ns tetris.core.ruleset
  (:require
    [tetris.core.piece :refer [PieceShapes]]))

(def RotationSystem
  [:map
   [:type :symbol]
   [:piece-shapes PieceShapes]])

(def PieceGenerator
  [:map [:type :symbol]])

;; [:=> [:cat [PieceGenerator] [PieceKind PieceGenerator]]]
(defmulti next-piece :type)

;; [:=> [:cat [game/State Turn] game/State]]
(defmulti rotate (fn [state _turn] (get-in state [:rotation-system :type])))

;; [:=> [:cat State] number?]
(defmulti fall-interval :ruleset)

;; [:=> [:cat State] number?]
(defmulti soft-drop-interval :ruleset)

;; [:=> [:cat State] number?]
(defmulti line-clear-delay :ruleset)

;; [:=> [:cat State] number?]
(defmulti lock-delay :ruleset)
