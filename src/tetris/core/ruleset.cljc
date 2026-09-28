(ns tetris.core.ruleset)

(def PieceGenerator
  [:map [:type :keyword]])

;; [:=> [:cat [PieceGenerator] [PieceKind PieceGenerator]]]
(defmulti next-piece :type)

;; [:=> [:cat game/State] number?]
(defmulti fall-interval :ruleset)

;; [:=> [:cat game/State] number?]
(defmulti soft-drop-interval :ruleset)

;; [:=> [:cat game/State] number?]
(defmulti line-clear-delay :ruleset)

;; [:=> [:cat game/State] number?]
(defmulti lock-delay :ruleset)
