goog.provide('clojure.core.rrb_vector');
/**
 * Concatenates the given vectors in logarithmic time.
 */
clojure.core.rrb_vector.catvec = (function clojure$core$rrb_vector$catvec(var_args){
var G__32067 = arguments.length;
switch (G__32067) {
case 0:
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__5922__auto__ = [];
var len__5897__auto___32111 = arguments.length;
var i__5898__auto___32112 = (0);
while(true){
if((i__5898__auto___32112 < len__5897__auto___32111)){
args_arr__5922__auto__.push((arguments[i__5898__auto___32112]));

var G__32113 = (i__5898__auto___32112 + (1));
i__5898__auto___32112 = G__32113;
continue;
} else {
}
break;
}

var argseq__5923__auto__ = ((((4) < args_arr__5922__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5922__auto__.slice((4)),(0),null)):null);
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5923__auto__);

}
});

(clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$1 = (function (v1){
return v1;
}));

(clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$2 = (function (v1,v2){
return clojure.core.rrb_vector.protocols._splicev(v1,v2);
}));

(clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$3 = (function (v1,v2,v3){
return clojure.core.rrb_vector.protocols._splicev(clojure.core.rrb_vector.protocols._splicev(v1,v2),v3);
}));

(clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$4 = (function (v1,v2,v3,v4){
return clojure.core.rrb_vector.protocols._splicev(clojure.core.rrb_vector.protocols._splicev(v1,v2),clojure.core.rrb_vector.protocols._splicev(v3,v4));
}));

(clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$variadic = (function (v1,v2,v3,v4,vn){
return clojure.core.rrb_vector.protocols._splicev(clojure.core.rrb_vector.protocols._splicev(clojure.core.rrb_vector.protocols._splicev(v1,v2),clojure.core.rrb_vector.protocols._splicev(v3,v4)),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.core.rrb_vector.catvec,vn));
}));

/** @this {Function} */
(clojure.core.rrb_vector.catvec.cljs$lang$applyTo = (function (seq32062){
var G__32063 = cljs.core.first(seq32062);
var seq32062__$1 = cljs.core.next(seq32062);
var G__32064 = cljs.core.first(seq32062__$1);
var seq32062__$2 = cljs.core.next(seq32062__$1);
var G__32065 = cljs.core.first(seq32062__$2);
var seq32062__$3 = cljs.core.next(seq32062__$2);
var G__32066 = cljs.core.first(seq32062__$3);
var seq32062__$4 = cljs.core.next(seq32062__$3);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32063,G__32064,G__32065,G__32066,seq32062__$4);
}));

(clojure.core.rrb_vector.catvec.cljs$lang$maxFixedArity = (4));

/**
 * Returns a new vector containing the elements of the given vector v
 *   lying between the start (inclusive) and end (exclusive) indices in
 *   logarithmic time. end defaults to end of vector. The resulting
 *   vector shares structure with the original, but does not hold on to
 *   any elements of the original vector lying outside the given index
 *   range.
 */
clojure.core.rrb_vector.subvec = (function clojure$core$rrb_vector$subvec(var_args){
var G__32083 = arguments.length;
switch (G__32083) {
case 2:
return clojure.core.rrb_vector.subvec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.rrb_vector.subvec.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(clojure.core.rrb_vector.subvec.cljs$core$IFn$_invoke$arity$2 = (function (v,start){
return clojure.core.rrb_vector.protocols._slicev(v,start,cljs.core.count(v));
}));

(clojure.core.rrb_vector.subvec.cljs$core$IFn$_invoke$arity$3 = (function (v,start,end){
return clojure.core.rrb_vector.protocols._slicev(v,start,end);
}));

(clojure.core.rrb_vector.subvec.cljs$lang$maxFixedArity = 3);

/**
 * Creates a new vector containing the args.
 */
clojure.core.rrb_vector.vector = (function clojure$core$rrb_vector$vector(var_args){
var G__32093 = arguments.length;
switch (G__32093) {
case 0:
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__5922__auto__ = [];
var len__5897__auto___32121 = arguments.length;
var i__5898__auto___32122 = (0);
while(true){
if((i__5898__auto___32122 < len__5897__auto___32121)){
args_arr__5922__auto__.push((arguments[i__5898__auto___32122]));

var G__32123 = (i__5898__auto___32122 + (1));
i__5898__auto___32122 = G__32123;
continue;
} else {
}
break;
}

var argseq__5923__auto__ = ((((4) < args_arr__5922__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5922__auto__.slice((4)),(0),null)):null);
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5923__auto__);

}
});

(clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$0 = (function (){
var arr__32099 = [];
return (new clojure.core.rrb_vector.rrbt.Vector(0,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__32099,null,null));
}));

(clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$1 = (function (x1){
var arr__32102 = [null];
(arr__32102[(0)] = x1);

return (new clojure.core.rrb_vector.rrbt.Vector(1,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__32102,null,null));
}));

(clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$2 = (function (x1,x2){
var arr__32103 = [null,null];
(arr__32103[(0)] = x1);

(arr__32103[(1)] = x2);

return (new clojure.core.rrb_vector.rrbt.Vector(2,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__32103,null,null));
}));

(clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$3 = (function (x1,x2,x3){
var arr__32104 = [null,null,null];
(arr__32104[(0)] = x1);

(arr__32104[(1)] = x2);

(arr__32104[(2)] = x3);

return (new clojure.core.rrb_vector.rrbt.Vector(3,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__32104,null,null));
}));

(clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$4 = (function (x1,x2,x3,x4){
var arr__32105 = [null,null,null,null];
(arr__32105[(0)] = x1);

(arr__32105[(1)] = x2);

(arr__32105[(2)] = x3);

(arr__32105[(3)] = x4);

return (new clojure.core.rrb_vector.rrbt.Vector(4,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__32105,null,null));
}));

(clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$variadic = (function (x1,x2,x3,x4,xn){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$4(x1,x2,x3,x4),xn);
}));

/** @this {Function} */
(clojure.core.rrb_vector.vector.cljs$lang$applyTo = (function (seq32088){
var G__32089 = cljs.core.first(seq32088);
var seq32088__$1 = cljs.core.next(seq32088);
var G__32090 = cljs.core.first(seq32088__$1);
var seq32088__$2 = cljs.core.next(seq32088__$1);
var G__32091 = cljs.core.first(seq32088__$2);
var seq32088__$3 = cljs.core.next(seq32088__$2);
var G__32092 = cljs.core.first(seq32088__$3);
var seq32088__$4 = cljs.core.next(seq32088__$3);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32089,G__32090,G__32091,G__32092,seq32088__$4);
}));

(clojure.core.rrb_vector.vector.cljs$lang$maxFixedArity = (4));

/**
 * Returns a vector containing the contents of coll.
 * 
 *   If coll is a vector, returns an RRB vector using the internal tree
 *   of coll.
 */
clojure.core.rrb_vector.vec = (function clojure$core$rrb_vector$vec(coll){
if(cljs.core.vector_QMARK_(coll)){
return clojure.core.rrb_vector.rrbt._as_rrbt(coll);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.core.rrb_vector.vector,coll);
}
});

//# sourceMappingURL=clojure.core.rrb_vector.js.map
