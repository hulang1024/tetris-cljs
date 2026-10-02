goog.provide('tetris.core.ruleset.scoring_nes');
tetris.core.ruleset.scoring_nes.lines_score_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(40),(100),(300),(1200)], null);
tetris.core.ruleset.scoring_nes.make = (function tetris$core$ruleset$scoring_nes$make(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"nes","nes",1892284268)], null);
});
tetris.core.scoring.action_score.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"nes","nes",1892284268),(function (state,game_state,action){
var score = (function (){var G__37929 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(action);
var G__37929__$1 = (((G__37929 instanceof cljs.core.Keyword))?G__37929.fqn:null);
switch (G__37929__$1) {
case "clear":
return ((new cljs.core.Keyword(null,"speed-level","speed-level",-256559849).cljs$core$IFn$_invoke$arity$1(game_state) + (1)) * cljs.core.get.cljs$core$IFn$_invoke$arity$3(tetris.core.ruleset.scoring_nes.lines_score_table,(new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(action) - (1)),(0)));

break;
default:
return (0);

}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [score,state], null);
}));

//# sourceMappingURL=tetris.core.ruleset.scoring_nes.js.map
