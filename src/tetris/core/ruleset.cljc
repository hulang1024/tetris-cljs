(ns tetris.core.ruleset)

(def PieceGenerator
  [:map [:type :keyword]])

;; [:=> [:cat [PieceGenerator] [PieceKind PieceGenerator]]]
(defmulti next-piece :type)

;; [:=> [:cat game/State] :int]
(defmulti fall-interval :ruleset)

;; [:=> [:cat game/State] :int]
(defmulti soft-drop-interval :ruleset)

;; [:=> [:cat game/State] :int]
(defmulti line-clear-delay :ruleset)

;; [:=> [:cat game/State] :int]
(defmulti lock-delay :ruleset)
