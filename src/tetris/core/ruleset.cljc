(ns tetris.core.ruleset)

(def PieceGenerator
  [:map [:type :keyword]])

;; [:=> [:cat PieceGenerator] [PieceKind PieceGenerator]]
(defmulti next-piece :type)

;; [:=> [:cat game/State] number?]
(defmulti fall-speed :ruleset)

;; [:=> [:cat game/State] number?]
(defmulti soft-drop-speed :ruleset)

;; [:=> [:cat game/State] :int]
(defmulti line-clear-delay :ruleset)

;; [:=> [:cat game/State] :int]
(defmulti lock-delay :ruleset)
