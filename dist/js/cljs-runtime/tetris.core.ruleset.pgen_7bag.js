goog.provide('tetris.core.ruleset.pgen_7bag');
tetris.core.ruleset.pgen_7bag.random_7bag = (function tetris$core$ruleset$pgen_7bag$random_7bag(random_state){
var v = cljs.core.vec(tetris.core.piece.piece_kinds);
var i = (cljs.core.count(v) - (1));
var random_state__$1 = random_state;
while(true){
if((i > (0))){
var vec__42444 = tetris.core.ruleset.random.next_int(random_state__$1);
var rn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42444,(0),null);
var random_state__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42444,(1),null);
var j = cljs.core.mod(rn,(i + (1)));
var vi = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
var vj = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(j) : v.call(null,j));
var G__42454 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(v,i,vj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([j,vi], 0));
var G__42455 = (i - (1));
var G__42456 = random_state__$2;
v = G__42454;
i = G__42455;
random_state__$1 = G__42456;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,random_state__$1], null);
}
break;
}
});
tetris.core.ruleset.pgen_7bag.make = (function tetris$core$ruleset$pgen_7bag$make(seed){
var random = tetris.core.ruleset.random.init(seed);
var vec__42447 = tetris.core.ruleset.pgen_7bag.random_7bag(random);
var bag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42447,(0),null);
var random__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42447,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"7-bag","7-bag",-920897735),new cljs.core.Keyword(null,"random","random",-557811113),random__$1,new cljs.core.Keyword(null,"bag","bag",389447970),bag,new cljs.core.Keyword(null,"index","index",-1531685915),(-1)], null);
});
tetris.core.ruleset.next_piece.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"7-bag","7-bag",-920897735),(function (state){
var map__42450 = state;
var map__42450__$1 = cljs.core.__destructure_map(map__42450);
var random = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42450__$1,new cljs.core.Keyword(null,"random","random",-557811113));
var bag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42450__$1,new cljs.core.Keyword(null,"bag","bag",389447970));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42450__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var vec__42451 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,(6)))?tetris.core.ruleset.pgen_7bag.random_7bag(random):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bag,random], null));
var bag__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42451,(0),null);
var random__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42451,(1),null);
var curr_index = cljs.core.mod((index + (1)),(7));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.cljs$core$IFn$_invoke$arity$2(bag__$1,curr_index),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"random","random",-557811113),random__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"bag","bag",389447970),bag__$1,new cljs.core.Keyword(null,"index","index",-1531685915),curr_index], 0))], null);
}));

//# sourceMappingURL=tetris.core.ruleset.pgen_7bag.js.map
