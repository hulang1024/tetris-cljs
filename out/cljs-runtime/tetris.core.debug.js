goog.provide('tetris.core.debug');
tetris.core.debug.sym__GT_str = (function tetris$core$debug$sym__GT_str(sym){
if((sym == null)){
return ".";
} else {
return cljs.core.name(sym);
}
});
tetris.core.debug.row__GT_str = (function tetris$core$debug$row__GT_str(row){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(tetris.core.debug.sym__GT_str,row));
});
tetris.core.debug.matrix__GT_string = (function tetris$core$debug$matrix__GT_string(matrix){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(tetris.core.debug.row__GT_str,matrix));
});
tetris.core.debug.prow = (function tetris$core$debug$prow(var_args){
var args__5903__auto__ = [];
var len__5897__auto___43035 = arguments.length;
var i__5898__auto___43036 = (0);
while(true){
if((i__5898__auto___43036 < len__5897__auto___43035)){
args__5903__auto__.push((arguments[i__5898__auto___43036]));

var G__43037 = (i__5898__auto___43036 + (1));
i__5898__auto___43036 = G__43037;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return tetris.core.debug.prow.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(tetris.core.debug.prow.cljs$core$IFn$_invoke$arity$variadic = (function (label,content){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)+"   "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,content))+"\n");
}));

(tetris.core.debug.prow.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tetris.core.debug.prow.cljs$lang$applyTo = (function (seq43033){
var G__43034 = cljs.core.first(seq43033);
var seq43033__$1 = cljs.core.next(seq43033);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43034,seq43033__$1);
}));

tetris.core.debug.state__GT_text = (function tetris$core$debug$state__GT_text(state){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tetris.core.debug.prow.cljs$core$IFn$_invoke$arity$variadic("DAS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"das","das",-1801456200)], null))], 0)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tetris.core.debug.prow.cljs$core$IFn$_invoke$arity$variadic("ARR",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"arr","arr",474961448)], null))], 0)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tetris.core.debug.prow.cljs$core$IFn$_invoke$arity$variadic("DCD",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"dcd","dcd",594655109)], null))], 0)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tetris.core.debug.prow.cljs$core$IFn$_invoke$arity$variadic("SDF",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"sdf","sdf",-844168232)], null))], 0)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tetris.core.debug.prow.cljs$core$IFn$_invoke$arity$variadic("Lock Delay",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"lock-delay","lock-delay",-611157928)], null))], 0)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tetris.core.debug.prow.cljs$core$IFn$_invoke$arity$variadic("status    ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(state)], 0)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tetris.core.debug.prow.cljs$core$IFn$_invoke$arity$variadic("level     ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(state)], 0)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tetris.core.debug.prow.cljs$core$IFn$_invoke$arity$variadic("row/col   ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(state))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(state)))], 0)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tetris.core.debug.prow.cljs$core$IFn$_invoke$arity$variadic("fall-timer",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fall-timer","fall-timer",1803266707).cljs$core$IFn$_invoke$arity$1(state)], 0)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tetris.core.debug.prow.cljs$core$IFn$_invoke$arity$variadic("lock-timer",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"lock-timer","lock-timer",-721365577).cljs$core$IFn$_invoke$arity$1(state)], 0)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tetris.core.debug.prow.cljs$core$IFn$_invoke$arity$variadic("events",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(state)], 0)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tetris.core.debug.prow.cljs$core$IFn$_invoke$arity$variadic("current",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\n",tetris.core.debug.matrix__GT_string(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"shape","shape",1190694006)], null)))], 0)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tetris.core.debug.prow.cljs$core$IFn$_invoke$arity$variadic("next   ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\n",tetris.core.debug.matrix__GT_string(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.Keyword(null,"shape","shape",1190694006)], null)))], 0)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tetris.core.debug.prow.cljs$core$IFn$_invoke$arity$variadic("board  ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\n",tetris.core.debug.matrix__GT_string(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(state))], 0))));
});

//# sourceMappingURL=tetris.core.debug.js.map
