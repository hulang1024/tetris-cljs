goog.provide('tetris.core.ruleset.pgen_7bag');
tetris.core.ruleset.pgen_7bag.make = (function tetris$core$ruleset$pgen_7bag$make(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"7-bag","7-bag",-920897735),new cljs.core.Keyword(null,"seq","seq",-1817803783),(0)], null);
});
tetris.core.ruleset.next_piece.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"7-bag","7-bag",-920897735),(function (state){
var seq = (new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(state) + (1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__39736 = cljs.core.mod(seq,(7));
return (tetris.core.piece.piece_kinds.cljs$core$IFn$_invoke$arity$1 ? tetris.core.piece.piece_kinds.cljs$core$IFn$_invoke$arity$1(G__39736) : tetris.core.piece.piece_kinds.call(null,G__39736));
})(),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"seq","seq",-1817803783),seq)], null);
}));

//# sourceMappingURL=tetris.core.ruleset.pgen_7bag.js.map
