goog.provide('tetris.core.scoring');
tetris.core.scoring.ScoringSystem = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null)], null);
if((typeof tetris !== 'undefined') && (typeof tetris.core !== 'undefined') && (typeof tetris.core.scoring !== 'undefined') && (typeof tetris.core.scoring.action_score !== 'undefined')){
} else {
tetris.core.scoring.action_score = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__40441 = cljs.core.get_global_hierarchy;
return (fexpr__40441.cljs$core$IFn$_invoke$arity$0 ? fexpr__40441.cljs$core$IFn$_invoke$arity$0() : fexpr__40441.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tetris.core.scoring","action-score"),(function (state,_game_state,_action){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(state);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}

//# sourceMappingURL=tetris.core.scoring.js.map
