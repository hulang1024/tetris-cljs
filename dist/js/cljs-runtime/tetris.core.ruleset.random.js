goog.provide('tetris.core.ruleset.random');
tetris.core.ruleset.random.init = (function tetris$core$ruleset$random$init(seed){
return seed;
});
tetris.core.ruleset.random.next_int = (function tetris$core$ruleset$random$next_int(state){
var state__$1 = cljs.core.mod((state * (16807)),(2147483647));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__$1,state__$1], null);
});

//# sourceMappingURL=tetris.core.ruleset.random.js.map
