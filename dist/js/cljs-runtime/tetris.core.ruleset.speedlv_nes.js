goog.provide('tetris.core.ruleset.speedlv_nes');
tetris.core.ruleset.speedlv_nes.make = (function tetris$core$ruleset$speedlv_nes$make(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"nes","nes",1892284268)], null);
});
tetris.core.speedlv.update_level.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"nes","nes",1892284268),(function (state,game_state){
var curr_level = new cljs.core.Keyword(null,"speed-level","speed-level",-256559849).cljs$core$IFn$_invoke$arity$1(game_state);
var curr_lines = new cljs.core.Keyword(null,"lines-cleared","lines-cleared",1628289668).cljs$core$IFn$_invoke$arity$1(game_state);
var next_level_lines = ((curr_level + (1)) * (10));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((curr_lines >= next_level_lines))?(curr_level + (1)):curr_level),state], null);
}));

//# sourceMappingURL=tetris.core.ruleset.speedlv_nes.js.map
