goog.provide('tetris.core.speedlv');
tetris.core.speedlv.SpeedLevelSystem = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null)], null);
if((typeof tetris !== 'undefined') && (typeof tetris.core !== 'undefined') && (typeof tetris.core.speedlv !== 'undefined') && (typeof tetris.core.speedlv.update_level !== 'undefined')){
} else {
tetris.core.speedlv.update_level = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__39625 = cljs.core.get_global_hierarchy;
return (fexpr__39625.cljs$core$IFn$_invoke$arity$0 ? fexpr__39625.cljs$core$IFn$_invoke$arity$0() : fexpr__39625.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tetris.core.speedlv","update-level"),(function (state,_game_state){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(state);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}
tetris.core.speedlv.frame_ms = 16.67;
tetris.core.speedlv.ms__GT_frames = (function tetris$core$speedlv$ms__GT_frames(ms){
return cljs.math.round((ms / 16.67));
});
tetris.core.speedlv.frames__GT_ms = (function tetris$core$speedlv$frames__GT_ms(frames){
return cljs.math.round((frames * 16.67));
});

//# sourceMappingURL=tetris.core.speedlv.js.map
