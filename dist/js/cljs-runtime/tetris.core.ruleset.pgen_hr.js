goog.provide('tetris.core.ruleset.pgen_hr');
tetris.core.ruleset.pgen_hr.make = (function tetris$core$ruleset$pgen_hr$make(seed,history_length,roll){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"hr","hr",1377740067),new cljs.core.Keyword(null,"random","random",-557811113),tetris.core.ruleset.random.init(seed),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(history_length,null)),new cljs.core.Keyword(null,"roll","roll",11266999),roll], null);
});
tetris.core.ruleset.next_piece.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"hr","hr",1377740067),(function (state){
var map__42830 = state;
var map__42830__$1 = cljs.core.__destructure_map(map__42830);
var roll = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42830__$1,new cljs.core.Keyword(null,"roll","roll",11266999));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42830__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var g1h2r_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(history__$1),(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(roll,(2))));
var vec__42831 = (function (){var random = new cljs.core.Keyword(null,"random","random",-557811113).cljs$core$IFn$_invoke$arity$1(state);
var times = (0);
var roll__$1 = roll;
var history__$2 = history__$1;
while(true){
var times__$1 = (times + (1));
var vec__42837 = tetris.core.ruleset.random.next_int(random);
var rn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42837,(0),null);
var random__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42837,(1),null);
var kind_n = cljs.core.mod(rn,((((g1h2r_QMARK_) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(times__$1,(1)))))?(8):(7)));
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(tetris.core.piece.piece_kinds,kind_n);
if(cljs.core.truth_((function (){var and__5160__auto__ = kind;
if(cljs.core.truth_(and__5160__auto__)){
return (((times__$1 >= roll__$1)) || (cljs.core.not_any_QMARK_(((function (random,times,roll__$1,history__$2,and__5160__auto__,times__$1,vec__42837,rn,random__$1,kind_n,kind,map__42830,map__42830__$1,roll,history__$1,g1h2r_QMARK_){
return (function (p1__42829_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,p1__42829_SHARP_);
});})(random,times,roll__$1,history__$2,and__5160__auto__,times__$1,vec__42837,rn,random__$1,kind_n,kind,map__42830,map__42830__$1,roll,history__$1,g1h2r_QMARK_))
,history__$2)));
} else {
return and__5160__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind,random__$1], null);
} else {
var G__42844 = random__$1;
var G__42845 = times__$1;
var G__42846 = roll__$1;
var G__42847 = history__$2;
random = G__42844;
times = G__42845;
roll__$1 = G__42846;
history__$2 = G__42847;
continue;
}
break;
}
})();
var kind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42831,(0),null);
var random = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42831,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.rest(history__$1)),kind),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"random","random",-557811113),random], 0))], null);
}));

//# sourceMappingURL=tetris.core.ruleset.pgen_hr.js.map
