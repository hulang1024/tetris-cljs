goog.provide('tetris.core.ruleset.pgen_seq');
tetris.core.ruleset.pgen_seq.make_piece_generator = (function tetris$core$ruleset$pgen_seq$make_piece_generator(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"seq","seq",-1817803783),new cljs.core.Keyword(null,"seq","seq",-1817803783),(0)], null);
});
tetris.core.ruleset.next_piece.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"seq","seq",-1817803783),(function (gen){
var seq = (new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(gen) + (1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__38249 = cljs.core.mod(seq,(7));
return (tetris.core.piece.piece_kinds.cljs$core$IFn$_invoke$arity$1 ? tetris.core.piece.piece_kinds.cljs$core$IFn$_invoke$arity$1(G__38249) : tetris.core.piece.piece_kinds.call(null,G__38249));
})(),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(gen,new cljs.core.Keyword(null,"seq","seq",-1817803783),seq)], null);
}));

//# sourceMappingURL=tetris.core.ruleset.pgen_seq.js.map
