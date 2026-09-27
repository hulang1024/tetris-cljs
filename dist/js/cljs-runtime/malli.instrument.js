goog.provide('malli.instrument');
goog.scope(function(){
  malli.instrument.goog$module$goog$object = goog.module.get('goog.object');
});
malli.instrument._ns_js_path = (function malli$instrument$_ns_js_path(ns){
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.munge,clojure.string.split.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)),/\./)));
});
malli.instrument._prop_js_path = (function malli$instrument$_prop_js_path(ns,prop){
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.munge,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(clojure.string.split.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)),/\./),cljs.core.name(prop))));
});
malli.instrument._get_prop = (function malli$instrument$_get_prop(ns,prop){
return malli.instrument.goog$module$goog$object.getValueByKeys(goog.global,malli.instrument._prop_js_path(ns,prop));
});
malli.instrument._get_ns = (function malli$instrument$_get_ns(ns){
return malli.instrument.goog$module$goog$object.getValueByKeys(goog.global,malli.instrument._ns_js_path(ns));
});
malli.instrument._find_var = (function malli$instrument$_find_var(n,s){
return malli.instrument._get_prop(n,s);
});
malli.instrument._original = (function malli$instrument$_original(f){
return malli.instrument.goog$module$goog$object.get(f,"malli$instrument$original");
});
malli.instrument._instrumented_QMARK_ = (function malli$instrument$_instrumented_QMARK_(f){
return malli.instrument.goog$module$goog$object.get(f,"malli$instrument$instrumented?") === true;
});
malli.instrument.meta_fn = (function malli$instrument$meta_fn(f,m){
var new_f = goog.bind(f,({}));
Object.assign(new_f,f);

var x59396_60506 = new_f;
(x59396_60506.cljs$core$IMeta$ = cljs.core.PROTOCOL_SENTINEL);

(x59396_60506.cljs$core$IMeta$_meta$arity$1 = (function (_){
var ___$1 = this;
return m;
}));


return new_f;
});
malli.instrument._filter_ns = (function malli$instrument$_filter_ns(var_args){
var args__5903__auto__ = [];
var len__5897__auto___60507 = arguments.length;
var i__5898__auto___60508 = (0);
while(true){
if((i__5898__auto___60508 < len__5897__auto___60507)){
args__5903__auto__.push((arguments[i__5898__auto___60508]));

var G__60509 = (i__5898__auto___60508 + (1));
i__5898__auto___60508 = G__60509;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return malli.instrument._filter_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(malli.instrument._filter_ns.cljs$core$IFn$_invoke$arity$variadic = (function (ns){
return (function (n,_,___$1){
var fexpr__59402 = cljs.core.set(ns);
return (fexpr__59402.cljs$core$IFn$_invoke$arity$1 ? fexpr__59402.cljs$core$IFn$_invoke$arity$1(n) : fexpr__59402.call(null,n));
});
}));

(malli.instrument._filter_ns.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.instrument._filter_ns.cljs$lang$applyTo = (function (seq59399){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59399));
}));

malli.instrument._filter_var = (function malli$instrument$_filter_var(f){
return (function (n,s,d){
var G__59405 = (new cljs.core.Var(cljs.core.constantly(malli.instrument._find_var(n,s)),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(n,s),d));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__59405) : f.call(null,G__59405));
});
});
malli.instrument._filter_schema = (function malli$instrument$_filter_schema(f){
return (function (_,___$1,p__59412){
var map__59414 = p__59412;
var map__59414__$1 = cljs.core.__destructure_map(map__59414);
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59414__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(schema) : f.call(null,schema));
});
});
malli.instrument._arity__GT_schema = (function malli$instrument$_arity__GT_schema(fn_schema){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (schema){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"arity","arity",-1808556135).cljs$core$IFn$_invoke$arity$1(malli.core._function_info(malli.core.schema.cljs$core$IFn$_invoke$arity$1(schema))),schema], null);
}),cljs.core.rest(fn_schema)));
});
malli.instrument._variadic_QMARK_ = (function malli$instrument$_variadic_QMARK_(f){
return malli.instrument.goog$module$goog$object.get(f,"cljs$core$IFn$_invoke$arity$variadic");
});
malli.instrument._max_fixed_arity = (function malli$instrument$_max_fixed_arity(f){
return malli.instrument.goog$module$goog$object.get(f,"cljs$lang$maxFixedArity");
});
malli.instrument._pure_variadic_QMARK_ = (function malli$instrument$_pure_variadic_QMARK_(f){
var max_fixed_arity = malli.instrument._max_fixed_arity(f);
var and__5160__auto__ = max_fixed_arity;
if(cljs.core.truth_(and__5160__auto__)){
var and__5160__auto____$1 = malli.instrument._variadic_QMARK_(f);
if(cljs.core.truth_(and__5160__auto____$1)){
return cljs.core.every_QMARK_((function (p1__59442_SHARP_){
return (!(cljs.core.fn_QMARK_(malli.instrument.goog$module$goog$object.get(f,(""+"cljs$core$IFn$_invoke$arity$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__59442_SHARP_))))));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((20)));
} else {
return and__5160__auto____$1;
}
} else {
return and__5160__auto__;
}
});
malli.instrument._replace_variadic_fn = (function malli$instrument$_replace_variadic_fn(original_fn,n,s,opts){
var accessor = "cljs$core$IFn$_invoke$arity$variadic";
var arity_fn = malli.instrument.goog$module$goog$object.get(original_fn,accessor);
if(cljs.core.truth_(arity_fn)){
malli.instrument.goog$module$goog$object.set(original_fn,"malli$instrument$instrumented?",true);

var max_fixed_arity = malli.instrument._max_fixed_arity(original_fn);
var instrumented_variadic_fn = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(opts,(function() { 
var G__60512__delegate = function (args){
var vec__59471 = cljs.core.split_at(max_fixed_arity,cljs.core.vec(args));
var fixed_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59471,(0),null);
var rest_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59471,(1),null);
var final_args = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(fixed_args),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(rest_args)], null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(arity_fn,final_args);
};
var G__60512 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60516__i = 0, G__60516__a = new Array(arguments.length -  0);
while (G__60516__i < G__60516__a.length) {G__60516__a[G__60516__i] = arguments[G__60516__i + 0]; ++G__60516__i;}
  args = new cljs.core.IndexedSeq(G__60516__a,0,null);
} 
return G__60512__delegate.call(this,args);};
G__60512.cljs$lang$maxFixedArity = 0;
G__60512.cljs$lang$applyTo = (function (arglist__60517){
var args = cljs.core.seq(arglist__60517);
return G__60512__delegate(args);
});
G__60512.cljs$core$IFn$_invoke$arity$variadic = G__60512__delegate;
return G__60512;
})()
);
var instrumented_wrapper = (function() { 
var G__60518__delegate = function (args){
var vec__59475 = cljs.core.split_at(max_fixed_arity,cljs.core.vec(args));
var fixed_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59475,(0),null);
var rest_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59475,(1),null);
var final_args = cljs.core.vec(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list_STAR_,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(fixed_args),cljs.core.not_empty(rest_args))));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(instrumented_variadic_fn,final_args);
};
var G__60518 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60519__i = 0, G__60519__a = new Array(arguments.length -  0);
while (G__60519__i < G__60519__a.length) {G__60519__a[G__60519__i] = arguments[G__60519__i + 0]; ++G__60519__i;}
  args = new cljs.core.IndexedSeq(G__60519__a,0,null);
} 
return G__60518__delegate.call(this,args);};
G__60518.cljs$lang$maxFixedArity = 0;
G__60518.cljs$lang$applyTo = (function (arglist__60520){
var args = cljs.core.seq(arglist__60520);
return G__60518__delegate(args);
});
G__60518.cljs$core$IFn$_invoke$arity$variadic = G__60518__delegate;
return G__60518;
})()
;
malli.instrument.goog$module$goog$object.set(instrumented_wrapper,"malli$instrument$original",arity_fn);

malli.instrument.goog$module$goog$object.set(malli.instrument._get_prop(n,s),"malli$instrument$instrumented?",true);

malli.instrument.goog$module$goog$object.set(malli.instrument._get_prop(n,s),accessor,instrumented_wrapper);

return malli.instrument.goog$module$goog$object.set(malli.instrument._get_ns(n),s,malli.instrument.meta_fn(original_fn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"instrumented-symbol","instrumented-symbol",-216975268),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(n,s)], null)));
} else {
return null;
}
});
malli.instrument._replace_multi_arity = (function malli$instrument$_replace_multi_arity(original_fn,n,s,opts){
var schema = new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(opts);
malli.instrument.goog$module$goog$object.set(original_fn,"malli$instrument$instrumented?",true);

malli.instrument.goog$module$goog$object.set(malli.instrument._get_ns(n),s,malli.instrument.meta_fn(original_fn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"instrumented-symbol","instrumented-symbol",-216975268),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(n,s)], null)));

var seq__59490 = cljs.core.seq(malli.instrument._arity__GT_schema(schema));
var chunk__59491 = null;
var count__59492 = (0);
var i__59493 = (0);
while(true){
if((i__59493 < count__59492)){
var vec__59510 = chunk__59491.cljs$core$IIndexed$_nth$arity$2(null,i__59493);
var arity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59510,(0),null);
var f_schema = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59510,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arity,new cljs.core.Keyword(null,"varargs","varargs",1030150858))){
malli.instrument._replace_variadic_fn(original_fn,n,s,opts);
} else {
var accessor_60527 = (""+"cljs$core$IFn$_invoke$arity$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity));
var arity_fn_60528 = malli.instrument.goog$module$goog$object.get(original_fn,accessor_60527);
if(cljs.core.truth_(arity_fn_60528)){
var instrumented_fn_60529 = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"schema","schema",-1582001791),f_schema),arity_fn_60528);
malli.instrument.goog$module$goog$object.set(instrumented_fn_60529,"malli$instrument$original",arity_fn_60528);

malli.instrument.goog$module$goog$object.set(instrumented_fn_60529,"malli$instrument$instrumented?",true);

malli.instrument.goog$module$goog$object.set(malli.instrument._get_prop(n,s),accessor_60527,instrumented_fn_60529);
} else {
}
}


var G__60530 = seq__59490;
var G__60531 = chunk__59491;
var G__60532 = count__59492;
var G__60533 = (i__59493 + (1));
seq__59490 = G__60530;
chunk__59491 = G__60531;
count__59492 = G__60532;
i__59493 = G__60533;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__59490);
if(temp__5825__auto__){
var seq__59490__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59490__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__59490__$1);
var G__60534 = cljs.core.chunk_rest(seq__59490__$1);
var G__60535 = c__5694__auto__;
var G__60536 = cljs.core.count(c__5694__auto__);
var G__60537 = (0);
seq__59490 = G__60534;
chunk__59491 = G__60535;
count__59492 = G__60536;
i__59493 = G__60537;
continue;
} else {
var vec__59525 = cljs.core.first(seq__59490__$1);
var arity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59525,(0),null);
var f_schema = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59525,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arity,new cljs.core.Keyword(null,"varargs","varargs",1030150858))){
malli.instrument._replace_variadic_fn(original_fn,n,s,opts);
} else {
var accessor_60538 = (""+"cljs$core$IFn$_invoke$arity$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity));
var arity_fn_60539 = malli.instrument.goog$module$goog$object.get(original_fn,accessor_60538);
if(cljs.core.truth_(arity_fn_60539)){
var instrumented_fn_60540 = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"schema","schema",-1582001791),f_schema),arity_fn_60539);
malli.instrument.goog$module$goog$object.set(instrumented_fn_60540,"malli$instrument$original",arity_fn_60539);

malli.instrument.goog$module$goog$object.set(instrumented_fn_60540,"malli$instrument$instrumented?",true);

malli.instrument.goog$module$goog$object.set(malli.instrument._get_prop(n,s),accessor_60538,instrumented_fn_60540);
} else {
}
}


var G__60541 = cljs.core.next(seq__59490__$1);
var G__60542 = null;
var G__60543 = (0);
var G__60544 = (0);
seq__59490 = G__60541;
chunk__59491 = G__60542;
count__59492 = G__60543;
i__59493 = G__60544;
continue;
}
} else {
return null;
}
}
break;
}
});
malli.instrument._replace_fn = (function malli$instrument$_replace_fn(original_fn,n,s,opts){
try{if(cljs.core.truth_(malli.instrument._pure_variadic_QMARK_(original_fn))){
return malli.instrument._replace_variadic_fn(original_fn,n,s,opts);
} else {
if(cljs.core.truth_(malli.instrument._max_fixed_arity(original_fn))){
return malli.instrument._replace_multi_arity(original_fn,n,s,opts);
} else {
var instrumented_fn = malli.instrument.meta_fn(malli.core._instrument.cljs$core$IFn$_invoke$arity$2(opts,original_fn),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"instrumented-symbol","instrumented-symbol",-216975268),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(n),cljs.core.name(s))], null));
malli.instrument.goog$module$goog$object.set(original_fn,"malli$instrument$instrumented?",true);

malli.instrument.goog$module$goog$object.set(instrumented_fn,"malli$instrument$instrumented?",true);

malli.instrument.goog$module$goog$object.set(instrumented_fn,"malli$instrument$original",original_fn);

return malli.instrument.goog$module$goog$object.set(malli.instrument._get_ns(n),cljs.core.munge(cljs.core.name(s)),instrumented_fn);

}
}
}catch (e59544){var e = e59544;
if((e instanceof cljs.core.ExceptionInfo)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Schema error when instrumenting function: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(n),cljs.core.name(s)))+" - "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ex_message(e))),cljs.core.ex_data(e));
} else {
throw (new Error((""+"Schema error when instrumenting function: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(n),cljs.core.name(s)))+". "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e))));
}
}});
malli.instrument._strument_BANG_ = (function malli$instrument$_strument_BANG_(var_args){
var G__59559 = arguments.length;
switch (G__59559) {
case 0:
return malli.instrument._strument_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return malli.instrument._strument_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(malli.instrument._strument_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return malli.instrument._strument_BANG_.cljs$core$IFn$_invoke$arity$1(null);
}));

(malli.instrument._strument_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (p__59564){
var map__59565 = p__59564;
var map__59565__$1 = cljs.core.__destructure_map(map__59565);
var options = map__59565__$1;
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__59565__$1,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__59565__$1,new cljs.core.Keyword(null,"data","data",-232669377),malli.core.function_schemas.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"cljs","cljs",1492417629)));
var filters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59565__$1,new cljs.core.Keyword(null,"filters","filters",974726919));
var gen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59565__$1,new cljs.core.Keyword(null,"gen","gen",142575302));
var report = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59565__$1,new cljs.core.Keyword(null,"report","report",1394055010));
var skip_instrumented_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__59565__$1,new cljs.core.Keyword(null,"skip-instrumented?","skip-instrumented?",1366613843),false);
var seq__59567 = cljs.core.seq(data);
var chunk__59572 = null;
var count__59573 = (0);
var i__59574 = (0);
while(true){
if((i__59574 < count__59573)){
var vec__59955 = chunk__59572.cljs$core$IIndexed$_nth$arity$2(null,i__59574);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59955,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59955,(1),null);
var seq__59575_60546 = cljs.core.seq(d);
var chunk__59576_60547 = null;
var count__59577_60548 = (0);
var i__59578_60549 = (0);
while(true){
if((i__59578_60549 < count__59577_60548)){
var vec__60085_60550 = chunk__59576_60547.cljs$core$IIndexed$_nth$arity$2(null,i__59578_60549);
var s_60551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60085_60550,(0),null);
var d_60552__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60085_60550,(1),null);
var temp__5825__auto___60553 = malli.instrument._find_var(n,s_60551);
if(cljs.core.truth_(temp__5825__auto___60553)){
var v_60554 = temp__5825__auto___60553;
if(cljs.core.truth_((function (){var or__5162__auto__ = cljs.core.not(filters);
if(or__5162__auto__){
return or__5162__auto__;
} else {
return cljs.core.some(((function (seq__59575_60546,chunk__59576_60547,count__59577_60548,i__59578_60549,seq__59567,chunk__59572,count__59573,i__59574,or__5162__auto__,v_60554,temp__5825__auto___60553,vec__60085_60550,s_60551,d_60552__$1,vec__59955,n,d,map__59565,map__59565__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (p1__59552_SHARP_){
return (p1__59552_SHARP_.cljs$core$IFn$_invoke$arity$3 ? p1__59552_SHARP_.cljs$core$IFn$_invoke$arity$3(n,s_60551,d_60552__$1) : p1__59552_SHARP_.call(null,n,s_60551,d_60552__$1));
});})(seq__59575_60546,chunk__59576_60547,count__59577_60548,i__59578_60549,seq__59567,chunk__59572,count__59573,i__59574,or__5162__auto__,v_60554,temp__5825__auto___60553,vec__60085_60550,s_60551,d_60552__$1,vec__59955,n,d,map__59565,map__59565__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
,filters);
}
})())){
var G__60095_60555 = mode;
var G__60095_60556__$1 = (((G__60095_60555 instanceof cljs.core.Keyword))?G__60095_60555.fqn:null);
switch (G__60095_60556__$1) {
case "instrument":
var original_fn_60558 = (function (){var or__5162__auto__ = malli.instrument._original(v_60554);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return v_60554;
}
})();
var dgen_60559 = (function (){var $ = cljs.core.select_keys(options,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scope","scope",-439358418),new cljs.core.Keyword(null,"report","report",1394055010),new cljs.core.Keyword(null,"gen","gen",142575302)], null));
var $__$1 = (function (){var G__60101 = $;
if(cljs.core.truth_(report)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__60101,new cljs.core.Keyword(null,"report","report",1394055010),((function (seq__59575_60546,chunk__59576_60547,count__59577_60548,i__59578_60549,seq__59567,chunk__59572,count__59573,i__59574,G__60101,$,original_fn_60558,G__60095_60555,G__60095_60556__$1,v_60554,temp__5825__auto___60553,vec__60085_60550,s_60551,d_60552__$1,vec__59955,n,d,map__59565,map__59565__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (r){
return ((function (seq__59575_60546,chunk__59576_60547,count__59577_60548,i__59578_60549,seq__59567,chunk__59572,count__59573,i__59574,G__60101,$,original_fn_60558,G__60095_60555,G__60095_60556__$1,v_60554,temp__5825__auto___60553,vec__60085_60550,s_60551,d_60552__$1,vec__59955,n,d,map__59565,map__59565__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (t,data__$1){
var G__60104 = t;
var G__60105 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__$1,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(n),cljs.core.name(s_60551)));
return (r.cljs$core$IFn$_invoke$arity$2 ? r.cljs$core$IFn$_invoke$arity$2(G__60104,G__60105) : r.call(null,G__60104,G__60105));
});
;})(seq__59575_60546,chunk__59576_60547,count__59577_60548,i__59578_60549,seq__59567,chunk__59572,count__59573,i__59574,G__60101,$,original_fn_60558,G__60095_60555,G__60095_60556__$1,v_60554,temp__5825__auto___60553,vec__60085_60550,s_60551,d_60552__$1,vec__59955,n,d,map__59565,map__59565__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
});})(seq__59575_60546,chunk__59576_60547,count__59577_60548,i__59578_60549,seq__59567,chunk__59572,count__59573,i__59574,G__60101,$,original_fn_60558,G__60095_60555,G__60095_60556__$1,v_60554,temp__5825__auto___60553,vec__60085_60550,s_60551,d_60552__$1,vec__59955,n,d,map__59565,map__59565__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
);
} else {
return G__60101;
}
})();
var $__$2 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$__$1,d_60552__$1], 0));
if(cljs.core.truth_((function (){var and__5160__auto__ = gen;
if(cljs.core.truth_(and__5160__auto__)){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(d_60552__$1) === true;
} else {
return and__5160__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($__$2,new cljs.core.Keyword(null,"gen","gen",142575302),gen);
} else {
if(new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(d_60552__$1) === true){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($__$2,new cljs.core.Keyword(null,"gen","gen",142575302));
} else {
return $__$2;

}
}
})();
if(cljs.core.truth_((function (){var and__5160__auto__ = original_fn_60558;
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core.not((function (){var and__5160__auto____$1 = skip_instrumented_QMARK_;
if(cljs.core.truth_(and__5160__auto____$1)){
return malli.instrument._instrumented_QMARK_(v_60554);
} else {
return and__5160__auto____$1;
}
})());
} else {
return and__5160__auto__;
}
})())){
malli.instrument._replace_fn(original_fn_60558,n,s_60551,dgen_60559);
} else {
}

break;
case "unstrument":
if(malli.instrument._instrumented_QMARK_(v_60554)){
var original_fn_60561 = (function (){var or__5162__auto__ = malli.instrument._original(v_60554);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return v_60554;
}
})();
if(cljs.core.truth_(malli.instrument._pure_variadic_QMARK_(original_fn_60561))){
var accessor_60563 = "cljs$core$IFn$_invoke$arity$variadic";
var variadic_fn_60564 = malli.instrument.goog$module$goog$object.get(v_60554,accessor_60563);
var orig_variadic_fn_60565 = malli.instrument.goog$module$goog$object.get(variadic_fn_60564,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_60561,accessor_60563,orig_variadic_fn_60565);
} else {
if(cljs.core.truth_(malli.instrument._max_fixed_arity(original_fn_60561))){
var seq__60120_60569 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.range.cljs$core$IFn$_invoke$arity$1((20)),"variadic"));
var chunk__60123_60570 = null;
var count__60124_60571 = (0);
var i__60125_60572 = (0);
while(true){
if((i__60125_60572 < count__60124_60571)){
var arity_60573 = chunk__60123_60570.cljs$core$IIndexed$_nth$arity$2(null,i__60125_60572);
var accessor_60574 = (""+"cljs$core$IFn$_invoke$arity$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity_60573));
var arity_fn_60575 = malli.instrument.goog$module$goog$object.get(original_fn_60561,accessor_60574);
if(cljs.core.truth_(arity_fn_60575)){
var orig_60576 = malli.instrument.goog$module$goog$object.get(arity_fn_60575,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_60561,accessor_60574,orig_60576);


var G__60577 = seq__60120_60569;
var G__60578 = chunk__60123_60570;
var G__60579 = count__60124_60571;
var G__60580 = (i__60125_60572 + (1));
seq__60120_60569 = G__60577;
chunk__60123_60570 = G__60578;
count__60124_60571 = G__60579;
i__60125_60572 = G__60580;
continue;
} else {
var G__60581 = seq__60120_60569;
var G__60582 = chunk__60123_60570;
var G__60583 = count__60124_60571;
var G__60584 = (i__60125_60572 + (1));
seq__60120_60569 = G__60581;
chunk__60123_60570 = G__60582;
count__60124_60571 = G__60583;
i__60125_60572 = G__60584;
continue;
}
} else {
var temp__5825__auto___60585__$1 = cljs.core.seq(seq__60120_60569);
if(temp__5825__auto___60585__$1){
var seq__60120_60586__$1 = temp__5825__auto___60585__$1;
if(cljs.core.chunked_seq_QMARK_(seq__60120_60586__$1)){
var c__5694__auto___60587 = cljs.core.chunk_first(seq__60120_60586__$1);
var G__60591 = cljs.core.chunk_rest(seq__60120_60586__$1);
var G__60592 = c__5694__auto___60587;
var G__60593 = cljs.core.count(c__5694__auto___60587);
var G__60594 = (0);
seq__60120_60569 = G__60591;
chunk__60123_60570 = G__60592;
count__60124_60571 = G__60593;
i__60125_60572 = G__60594;
continue;
} else {
var arity_60595 = cljs.core.first(seq__60120_60586__$1);
var accessor_60596 = (""+"cljs$core$IFn$_invoke$arity$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity_60595));
var arity_fn_60597 = malli.instrument.goog$module$goog$object.get(original_fn_60561,accessor_60596);
if(cljs.core.truth_(arity_fn_60597)){
var orig_60598 = malli.instrument.goog$module$goog$object.get(arity_fn_60597,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_60561,accessor_60596,orig_60598);


var G__60599 = cljs.core.next(seq__60120_60586__$1);
var G__60600 = null;
var G__60601 = (0);
var G__60602 = (0);
seq__60120_60569 = G__60599;
chunk__60123_60570 = G__60600;
count__60124_60571 = G__60601;
i__60125_60572 = G__60602;
continue;
} else {
var G__60603 = cljs.core.next(seq__60120_60586__$1);
var G__60604 = null;
var G__60605 = (0);
var G__60606 = (0);
seq__60120_60569 = G__60603;
chunk__60123_60570 = G__60604;
count__60124_60571 = G__60605;
i__60125_60572 = G__60606;
continue;
}
}
} else {
}
}
break;
}
} else {
malli.instrument.goog$module$goog$object.set(malli.instrument._get_ns(n),cljs.core.munge(cljs.core.name(s_60551)),original_fn_60561);

}
}
} else {
}

break;
default:
(mode.cljs$core$IFn$_invoke$arity$2 ? mode.cljs$core$IFn$_invoke$arity$2(v_60554,d_60552__$1) : mode.call(null,v_60554,d_60552__$1));

}
} else {
}
} else {
}


var G__60607 = seq__59575_60546;
var G__60608 = chunk__59576_60547;
var G__60609 = count__59577_60548;
var G__60610 = (i__59578_60549 + (1));
seq__59575_60546 = G__60607;
chunk__59576_60547 = G__60608;
count__59577_60548 = G__60609;
i__59578_60549 = G__60610;
continue;
} else {
var temp__5825__auto___60611 = cljs.core.seq(seq__59575_60546);
if(temp__5825__auto___60611){
var seq__59575_60612__$1 = temp__5825__auto___60611;
if(cljs.core.chunked_seq_QMARK_(seq__59575_60612__$1)){
var c__5694__auto___60613 = cljs.core.chunk_first(seq__59575_60612__$1);
var G__60614 = cljs.core.chunk_rest(seq__59575_60612__$1);
var G__60615 = c__5694__auto___60613;
var G__60616 = cljs.core.count(c__5694__auto___60613);
var G__60617 = (0);
seq__59575_60546 = G__60614;
chunk__59576_60547 = G__60615;
count__59577_60548 = G__60616;
i__59578_60549 = G__60617;
continue;
} else {
var vec__60160_60618 = cljs.core.first(seq__59575_60612__$1);
var s_60619 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60160_60618,(0),null);
var d_60620__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60160_60618,(1),null);
var temp__5825__auto___60621__$1 = malli.instrument._find_var(n,s_60619);
if(cljs.core.truth_(temp__5825__auto___60621__$1)){
var v_60622 = temp__5825__auto___60621__$1;
if(cljs.core.truth_((function (){var or__5162__auto__ = cljs.core.not(filters);
if(or__5162__auto__){
return or__5162__auto__;
} else {
return cljs.core.some(((function (seq__59575_60546,chunk__59576_60547,count__59577_60548,i__59578_60549,seq__59567,chunk__59572,count__59573,i__59574,or__5162__auto__,v_60622,temp__5825__auto___60621__$1,vec__60160_60618,s_60619,d_60620__$1,seq__59575_60612__$1,temp__5825__auto___60611,vec__59955,n,d,map__59565,map__59565__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (p1__59552_SHARP_){
return (p1__59552_SHARP_.cljs$core$IFn$_invoke$arity$3 ? p1__59552_SHARP_.cljs$core$IFn$_invoke$arity$3(n,s_60619,d_60620__$1) : p1__59552_SHARP_.call(null,n,s_60619,d_60620__$1));
});})(seq__59575_60546,chunk__59576_60547,count__59577_60548,i__59578_60549,seq__59567,chunk__59572,count__59573,i__59574,or__5162__auto__,v_60622,temp__5825__auto___60621__$1,vec__60160_60618,s_60619,d_60620__$1,seq__59575_60612__$1,temp__5825__auto___60611,vec__59955,n,d,map__59565,map__59565__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
,filters);
}
})())){
var G__60164_60623 = mode;
var G__60164_60624__$1 = (((G__60164_60623 instanceof cljs.core.Keyword))?G__60164_60623.fqn:null);
switch (G__60164_60624__$1) {
case "instrument":
var original_fn_60626 = (function (){var or__5162__auto__ = malli.instrument._original(v_60622);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return v_60622;
}
})();
var dgen_60627 = (function (){var $ = cljs.core.select_keys(options,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scope","scope",-439358418),new cljs.core.Keyword(null,"report","report",1394055010),new cljs.core.Keyword(null,"gen","gen",142575302)], null));
var $__$1 = (function (){var G__60166 = $;
if(cljs.core.truth_(report)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__60166,new cljs.core.Keyword(null,"report","report",1394055010),((function (seq__59575_60546,chunk__59576_60547,count__59577_60548,i__59578_60549,seq__59567,chunk__59572,count__59573,i__59574,G__60166,$,original_fn_60626,G__60164_60623,G__60164_60624__$1,v_60622,temp__5825__auto___60621__$1,vec__60160_60618,s_60619,d_60620__$1,seq__59575_60612__$1,temp__5825__auto___60611,vec__59955,n,d,map__59565,map__59565__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (r){
return ((function (seq__59575_60546,chunk__59576_60547,count__59577_60548,i__59578_60549,seq__59567,chunk__59572,count__59573,i__59574,G__60166,$,original_fn_60626,G__60164_60623,G__60164_60624__$1,v_60622,temp__5825__auto___60621__$1,vec__60160_60618,s_60619,d_60620__$1,seq__59575_60612__$1,temp__5825__auto___60611,vec__59955,n,d,map__59565,map__59565__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (t,data__$1){
var G__60167 = t;
var G__60168 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__$1,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(n),cljs.core.name(s_60619)));
return (r.cljs$core$IFn$_invoke$arity$2 ? r.cljs$core$IFn$_invoke$arity$2(G__60167,G__60168) : r.call(null,G__60167,G__60168));
});
;})(seq__59575_60546,chunk__59576_60547,count__59577_60548,i__59578_60549,seq__59567,chunk__59572,count__59573,i__59574,G__60166,$,original_fn_60626,G__60164_60623,G__60164_60624__$1,v_60622,temp__5825__auto___60621__$1,vec__60160_60618,s_60619,d_60620__$1,seq__59575_60612__$1,temp__5825__auto___60611,vec__59955,n,d,map__59565,map__59565__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
});})(seq__59575_60546,chunk__59576_60547,count__59577_60548,i__59578_60549,seq__59567,chunk__59572,count__59573,i__59574,G__60166,$,original_fn_60626,G__60164_60623,G__60164_60624__$1,v_60622,temp__5825__auto___60621__$1,vec__60160_60618,s_60619,d_60620__$1,seq__59575_60612__$1,temp__5825__auto___60611,vec__59955,n,d,map__59565,map__59565__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
);
} else {
return G__60166;
}
})();
var $__$2 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$__$1,d_60620__$1], 0));
if(cljs.core.truth_((function (){var and__5160__auto__ = gen;
if(cljs.core.truth_(and__5160__auto__)){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(d_60620__$1) === true;
} else {
return and__5160__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($__$2,new cljs.core.Keyword(null,"gen","gen",142575302),gen);
} else {
if(new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(d_60620__$1) === true){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($__$2,new cljs.core.Keyword(null,"gen","gen",142575302));
} else {
return $__$2;

}
}
})();
if(cljs.core.truth_((function (){var and__5160__auto__ = original_fn_60626;
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core.not((function (){var and__5160__auto____$1 = skip_instrumented_QMARK_;
if(cljs.core.truth_(and__5160__auto____$1)){
return malli.instrument._instrumented_QMARK_(v_60622);
} else {
return and__5160__auto____$1;
}
})());
} else {
return and__5160__auto__;
}
})())){
malli.instrument._replace_fn(original_fn_60626,n,s_60619,dgen_60627);
} else {
}

break;
case "unstrument":
if(malli.instrument._instrumented_QMARK_(v_60622)){
var original_fn_60632 = (function (){var or__5162__auto__ = malli.instrument._original(v_60622);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return v_60622;
}
})();
if(cljs.core.truth_(malli.instrument._pure_variadic_QMARK_(original_fn_60632))){
var accessor_60633 = "cljs$core$IFn$_invoke$arity$variadic";
var variadic_fn_60634 = malli.instrument.goog$module$goog$object.get(v_60622,accessor_60633);
var orig_variadic_fn_60635 = malli.instrument.goog$module$goog$object.get(variadic_fn_60634,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_60632,accessor_60633,orig_variadic_fn_60635);
} else {
if(cljs.core.truth_(malli.instrument._max_fixed_arity(original_fn_60632))){
var seq__60183_60636 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.range.cljs$core$IFn$_invoke$arity$1((20)),"variadic"));
var chunk__60186_60637 = null;
var count__60187_60638 = (0);
var i__60188_60639 = (0);
while(true){
if((i__60188_60639 < count__60187_60638)){
var arity_60640 = chunk__60186_60637.cljs$core$IIndexed$_nth$arity$2(null,i__60188_60639);
var accessor_60641 = (""+"cljs$core$IFn$_invoke$arity$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity_60640));
var arity_fn_60642 = malli.instrument.goog$module$goog$object.get(original_fn_60632,accessor_60641);
if(cljs.core.truth_(arity_fn_60642)){
var orig_60643 = malli.instrument.goog$module$goog$object.get(arity_fn_60642,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_60632,accessor_60641,orig_60643);


var G__60644 = seq__60183_60636;
var G__60645 = chunk__60186_60637;
var G__60646 = count__60187_60638;
var G__60647 = (i__60188_60639 + (1));
seq__60183_60636 = G__60644;
chunk__60186_60637 = G__60645;
count__60187_60638 = G__60646;
i__60188_60639 = G__60647;
continue;
} else {
var G__60648 = seq__60183_60636;
var G__60649 = chunk__60186_60637;
var G__60650 = count__60187_60638;
var G__60651 = (i__60188_60639 + (1));
seq__60183_60636 = G__60648;
chunk__60186_60637 = G__60649;
count__60187_60638 = G__60650;
i__60188_60639 = G__60651;
continue;
}
} else {
var temp__5825__auto___60652__$2 = cljs.core.seq(seq__60183_60636);
if(temp__5825__auto___60652__$2){
var seq__60183_60653__$1 = temp__5825__auto___60652__$2;
if(cljs.core.chunked_seq_QMARK_(seq__60183_60653__$1)){
var c__5694__auto___60654 = cljs.core.chunk_first(seq__60183_60653__$1);
var G__60655 = cljs.core.chunk_rest(seq__60183_60653__$1);
var G__60656 = c__5694__auto___60654;
var G__60657 = cljs.core.count(c__5694__auto___60654);
var G__60658 = (0);
seq__60183_60636 = G__60655;
chunk__60186_60637 = G__60656;
count__60187_60638 = G__60657;
i__60188_60639 = G__60658;
continue;
} else {
var arity_60659 = cljs.core.first(seq__60183_60653__$1);
var accessor_60660 = (""+"cljs$core$IFn$_invoke$arity$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity_60659));
var arity_fn_60661 = malli.instrument.goog$module$goog$object.get(original_fn_60632,accessor_60660);
if(cljs.core.truth_(arity_fn_60661)){
var orig_60662 = malli.instrument.goog$module$goog$object.get(arity_fn_60661,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_60632,accessor_60660,orig_60662);


var G__60663 = cljs.core.next(seq__60183_60653__$1);
var G__60664 = null;
var G__60665 = (0);
var G__60666 = (0);
seq__60183_60636 = G__60663;
chunk__60186_60637 = G__60664;
count__60187_60638 = G__60665;
i__60188_60639 = G__60666;
continue;
} else {
var G__60667 = cljs.core.next(seq__60183_60653__$1);
var G__60668 = null;
var G__60669 = (0);
var G__60670 = (0);
seq__60183_60636 = G__60667;
chunk__60186_60637 = G__60668;
count__60187_60638 = G__60669;
i__60188_60639 = G__60670;
continue;
}
}
} else {
}
}
break;
}
} else {
malli.instrument.goog$module$goog$object.set(malli.instrument._get_ns(n),cljs.core.munge(cljs.core.name(s_60619)),original_fn_60632);

}
}
} else {
}

break;
default:
(mode.cljs$core$IFn$_invoke$arity$2 ? mode.cljs$core$IFn$_invoke$arity$2(v_60622,d_60620__$1) : mode.call(null,v_60622,d_60620__$1));

}
} else {
}
} else {
}


var G__60671 = cljs.core.next(seq__59575_60612__$1);
var G__60672 = null;
var G__60673 = (0);
var G__60674 = (0);
seq__59575_60546 = G__60671;
chunk__59576_60547 = G__60672;
count__59577_60548 = G__60673;
i__59578_60549 = G__60674;
continue;
}
} else {
}
}
break;
}

var G__60675 = seq__59567;
var G__60676 = chunk__59572;
var G__60677 = count__59573;
var G__60678 = (i__59574 + (1));
seq__59567 = G__60675;
chunk__59572 = G__60676;
count__59573 = G__60677;
i__59574 = G__60678;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__59567);
if(temp__5825__auto__){
var seq__59567__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59567__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__59567__$1);
var G__60679 = cljs.core.chunk_rest(seq__59567__$1);
var G__60680 = c__5694__auto__;
var G__60681 = cljs.core.count(c__5694__auto__);
var G__60682 = (0);
seq__59567 = G__60679;
chunk__59572 = G__60680;
count__59573 = G__60681;
i__59574 = G__60682;
continue;
} else {
var vec__60226 = cljs.core.first(seq__59567__$1);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60226,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60226,(1),null);
var seq__59568_60683 = cljs.core.seq(d);
var chunk__59569_60684 = null;
var count__59570_60685 = (0);
var i__59571_60686 = (0);
while(true){
if((i__59571_60686 < count__59570_60685)){
var vec__60369_60688 = chunk__59569_60684.cljs$core$IIndexed$_nth$arity$2(null,i__59571_60686);
var s_60689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60369_60688,(0),null);
var d_60690__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60369_60688,(1),null);
var temp__5825__auto___60694__$1 = malli.instrument._find_var(n,s_60689);
if(cljs.core.truth_(temp__5825__auto___60694__$1)){
var v_60695 = temp__5825__auto___60694__$1;
if(cljs.core.truth_((function (){var or__5162__auto__ = cljs.core.not(filters);
if(or__5162__auto__){
return or__5162__auto__;
} else {
return cljs.core.some(((function (seq__59568_60683,chunk__59569_60684,count__59570_60685,i__59571_60686,seq__59567,chunk__59572,count__59573,i__59574,or__5162__auto__,v_60695,temp__5825__auto___60694__$1,vec__60369_60688,s_60689,d_60690__$1,vec__60226,n,d,seq__59567__$1,temp__5825__auto__,map__59565,map__59565__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (p1__59552_SHARP_){
return (p1__59552_SHARP_.cljs$core$IFn$_invoke$arity$3 ? p1__59552_SHARP_.cljs$core$IFn$_invoke$arity$3(n,s_60689,d_60690__$1) : p1__59552_SHARP_.call(null,n,s_60689,d_60690__$1));
});})(seq__59568_60683,chunk__59569_60684,count__59570_60685,i__59571_60686,seq__59567,chunk__59572,count__59573,i__59574,or__5162__auto__,v_60695,temp__5825__auto___60694__$1,vec__60369_60688,s_60689,d_60690__$1,vec__60226,n,d,seq__59567__$1,temp__5825__auto__,map__59565,map__59565__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
,filters);
}
})())){
var G__60382_60696 = mode;
var G__60382_60697__$1 = (((G__60382_60696 instanceof cljs.core.Keyword))?G__60382_60696.fqn:null);
switch (G__60382_60697__$1) {
case "instrument":
var original_fn_60699 = (function (){var or__5162__auto__ = malli.instrument._original(v_60695);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return v_60695;
}
})();
var dgen_60700 = (function (){var $ = cljs.core.select_keys(options,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scope","scope",-439358418),new cljs.core.Keyword(null,"report","report",1394055010),new cljs.core.Keyword(null,"gen","gen",142575302)], null));
var $__$1 = (function (){var G__60394 = $;
if(cljs.core.truth_(report)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__60394,new cljs.core.Keyword(null,"report","report",1394055010),((function (seq__59568_60683,chunk__59569_60684,count__59570_60685,i__59571_60686,seq__59567,chunk__59572,count__59573,i__59574,G__60394,$,original_fn_60699,G__60382_60696,G__60382_60697__$1,v_60695,temp__5825__auto___60694__$1,vec__60369_60688,s_60689,d_60690__$1,vec__60226,n,d,seq__59567__$1,temp__5825__auto__,map__59565,map__59565__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (r){
return ((function (seq__59568_60683,chunk__59569_60684,count__59570_60685,i__59571_60686,seq__59567,chunk__59572,count__59573,i__59574,G__60394,$,original_fn_60699,G__60382_60696,G__60382_60697__$1,v_60695,temp__5825__auto___60694__$1,vec__60369_60688,s_60689,d_60690__$1,vec__60226,n,d,seq__59567__$1,temp__5825__auto__,map__59565,map__59565__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (t,data__$1){
var G__60395 = t;
var G__60396 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__$1,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(n),cljs.core.name(s_60689)));
return (r.cljs$core$IFn$_invoke$arity$2 ? r.cljs$core$IFn$_invoke$arity$2(G__60395,G__60396) : r.call(null,G__60395,G__60396));
});
;})(seq__59568_60683,chunk__59569_60684,count__59570_60685,i__59571_60686,seq__59567,chunk__59572,count__59573,i__59574,G__60394,$,original_fn_60699,G__60382_60696,G__60382_60697__$1,v_60695,temp__5825__auto___60694__$1,vec__60369_60688,s_60689,d_60690__$1,vec__60226,n,d,seq__59567__$1,temp__5825__auto__,map__59565,map__59565__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
});})(seq__59568_60683,chunk__59569_60684,count__59570_60685,i__59571_60686,seq__59567,chunk__59572,count__59573,i__59574,G__60394,$,original_fn_60699,G__60382_60696,G__60382_60697__$1,v_60695,temp__5825__auto___60694__$1,vec__60369_60688,s_60689,d_60690__$1,vec__60226,n,d,seq__59567__$1,temp__5825__auto__,map__59565,map__59565__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
);
} else {
return G__60394;
}
})();
var $__$2 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$__$1,d_60690__$1], 0));
if(cljs.core.truth_((function (){var and__5160__auto__ = gen;
if(cljs.core.truth_(and__5160__auto__)){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(d_60690__$1) === true;
} else {
return and__5160__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($__$2,new cljs.core.Keyword(null,"gen","gen",142575302),gen);
} else {
if(new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(d_60690__$1) === true){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($__$2,new cljs.core.Keyword(null,"gen","gen",142575302));
} else {
return $__$2;

}
}
})();
if(cljs.core.truth_((function (){var and__5160__auto__ = original_fn_60699;
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core.not((function (){var and__5160__auto____$1 = skip_instrumented_QMARK_;
if(cljs.core.truth_(and__5160__auto____$1)){
return malli.instrument._instrumented_QMARK_(v_60695);
} else {
return and__5160__auto____$1;
}
})());
} else {
return and__5160__auto__;
}
})())){
malli.instrument._replace_fn(original_fn_60699,n,s_60689,dgen_60700);
} else {
}

break;
case "unstrument":
if(malli.instrument._instrumented_QMARK_(v_60695)){
var original_fn_60707 = (function (){var or__5162__auto__ = malli.instrument._original(v_60695);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return v_60695;
}
})();
if(cljs.core.truth_(malli.instrument._pure_variadic_QMARK_(original_fn_60707))){
var accessor_60708 = "cljs$core$IFn$_invoke$arity$variadic";
var variadic_fn_60709 = malli.instrument.goog$module$goog$object.get(v_60695,accessor_60708);
var orig_variadic_fn_60710 = malli.instrument.goog$module$goog$object.get(variadic_fn_60709,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_60707,accessor_60708,orig_variadic_fn_60710);
} else {
if(cljs.core.truth_(malli.instrument._max_fixed_arity(original_fn_60707))){
var seq__60401_60711 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.range.cljs$core$IFn$_invoke$arity$1((20)),"variadic"));
var chunk__60404_60712 = null;
var count__60405_60713 = (0);
var i__60406_60714 = (0);
while(true){
if((i__60406_60714 < count__60405_60713)){
var arity_60715 = chunk__60404_60712.cljs$core$IIndexed$_nth$arity$2(null,i__60406_60714);
var accessor_60716 = (""+"cljs$core$IFn$_invoke$arity$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity_60715));
var arity_fn_60717 = malli.instrument.goog$module$goog$object.get(original_fn_60707,accessor_60716);
if(cljs.core.truth_(arity_fn_60717)){
var orig_60718 = malli.instrument.goog$module$goog$object.get(arity_fn_60717,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_60707,accessor_60716,orig_60718);


var G__60723 = seq__60401_60711;
var G__60724 = chunk__60404_60712;
var G__60725 = count__60405_60713;
var G__60726 = (i__60406_60714 + (1));
seq__60401_60711 = G__60723;
chunk__60404_60712 = G__60724;
count__60405_60713 = G__60725;
i__60406_60714 = G__60726;
continue;
} else {
var G__60727 = seq__60401_60711;
var G__60728 = chunk__60404_60712;
var G__60729 = count__60405_60713;
var G__60730 = (i__60406_60714 + (1));
seq__60401_60711 = G__60727;
chunk__60404_60712 = G__60728;
count__60405_60713 = G__60729;
i__60406_60714 = G__60730;
continue;
}
} else {
var temp__5825__auto___60731__$2 = cljs.core.seq(seq__60401_60711);
if(temp__5825__auto___60731__$2){
var seq__60401_60732__$1 = temp__5825__auto___60731__$2;
if(cljs.core.chunked_seq_QMARK_(seq__60401_60732__$1)){
var c__5694__auto___60733 = cljs.core.chunk_first(seq__60401_60732__$1);
var G__60734 = cljs.core.chunk_rest(seq__60401_60732__$1);
var G__60735 = c__5694__auto___60733;
var G__60736 = cljs.core.count(c__5694__auto___60733);
var G__60737 = (0);
seq__60401_60711 = G__60734;
chunk__60404_60712 = G__60735;
count__60405_60713 = G__60736;
i__60406_60714 = G__60737;
continue;
} else {
var arity_60738 = cljs.core.first(seq__60401_60732__$1);
var accessor_60739 = (""+"cljs$core$IFn$_invoke$arity$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity_60738));
var arity_fn_60740 = malli.instrument.goog$module$goog$object.get(original_fn_60707,accessor_60739);
if(cljs.core.truth_(arity_fn_60740)){
var orig_60741 = malli.instrument.goog$module$goog$object.get(arity_fn_60740,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_60707,accessor_60739,orig_60741);


var G__60746 = cljs.core.next(seq__60401_60732__$1);
var G__60747 = null;
var G__60748 = (0);
var G__60749 = (0);
seq__60401_60711 = G__60746;
chunk__60404_60712 = G__60747;
count__60405_60713 = G__60748;
i__60406_60714 = G__60749;
continue;
} else {
var G__60750 = cljs.core.next(seq__60401_60732__$1);
var G__60751 = null;
var G__60752 = (0);
var G__60753 = (0);
seq__60401_60711 = G__60750;
chunk__60404_60712 = G__60751;
count__60405_60713 = G__60752;
i__60406_60714 = G__60753;
continue;
}
}
} else {
}
}
break;
}
} else {
malli.instrument.goog$module$goog$object.set(malli.instrument._get_ns(n),cljs.core.munge(cljs.core.name(s_60689)),original_fn_60707);

}
}
} else {
}

break;
default:
(mode.cljs$core$IFn$_invoke$arity$2 ? mode.cljs$core$IFn$_invoke$arity$2(v_60695,d_60690__$1) : mode.call(null,v_60695,d_60690__$1));

}
} else {
}
} else {
}


var G__60755 = seq__59568_60683;
var G__60756 = chunk__59569_60684;
var G__60757 = count__59570_60685;
var G__60758 = (i__59571_60686 + (1));
seq__59568_60683 = G__60755;
chunk__59569_60684 = G__60756;
count__59570_60685 = G__60757;
i__59571_60686 = G__60758;
continue;
} else {
var temp__5825__auto___60759__$1 = cljs.core.seq(seq__59568_60683);
if(temp__5825__auto___60759__$1){
var seq__59568_60760__$1 = temp__5825__auto___60759__$1;
if(cljs.core.chunked_seq_QMARK_(seq__59568_60760__$1)){
var c__5694__auto___60761 = cljs.core.chunk_first(seq__59568_60760__$1);
var G__60762 = cljs.core.chunk_rest(seq__59568_60760__$1);
var G__60763 = c__5694__auto___60761;
var G__60764 = cljs.core.count(c__5694__auto___60761);
var G__60765 = (0);
seq__59568_60683 = G__60762;
chunk__59569_60684 = G__60763;
count__59570_60685 = G__60764;
i__59571_60686 = G__60765;
continue;
} else {
var vec__60425_60766 = cljs.core.first(seq__59568_60760__$1);
var s_60767 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60425_60766,(0),null);
var d_60768__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60425_60766,(1),null);
var temp__5825__auto___60769__$2 = malli.instrument._find_var(n,s_60767);
if(cljs.core.truth_(temp__5825__auto___60769__$2)){
var v_60772 = temp__5825__auto___60769__$2;
if(cljs.core.truth_((function (){var or__5162__auto__ = cljs.core.not(filters);
if(or__5162__auto__){
return or__5162__auto__;
} else {
return cljs.core.some(((function (seq__59568_60683,chunk__59569_60684,count__59570_60685,i__59571_60686,seq__59567,chunk__59572,count__59573,i__59574,or__5162__auto__,v_60772,temp__5825__auto___60769__$2,vec__60425_60766,s_60767,d_60768__$1,seq__59568_60760__$1,temp__5825__auto___60759__$1,vec__60226,n,d,seq__59567__$1,temp__5825__auto__,map__59565,map__59565__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (p1__59552_SHARP_){
return (p1__59552_SHARP_.cljs$core$IFn$_invoke$arity$3 ? p1__59552_SHARP_.cljs$core$IFn$_invoke$arity$3(n,s_60767,d_60768__$1) : p1__59552_SHARP_.call(null,n,s_60767,d_60768__$1));
});})(seq__59568_60683,chunk__59569_60684,count__59570_60685,i__59571_60686,seq__59567,chunk__59572,count__59573,i__59574,or__5162__auto__,v_60772,temp__5825__auto___60769__$2,vec__60425_60766,s_60767,d_60768__$1,seq__59568_60760__$1,temp__5825__auto___60759__$1,vec__60226,n,d,seq__59567__$1,temp__5825__auto__,map__59565,map__59565__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
,filters);
}
})())){
var G__60432_60780 = mode;
var G__60432_60781__$1 = (((G__60432_60780 instanceof cljs.core.Keyword))?G__60432_60780.fqn:null);
switch (G__60432_60781__$1) {
case "instrument":
var original_fn_60786 = (function (){var or__5162__auto__ = malli.instrument._original(v_60772);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return v_60772;
}
})();
var dgen_60787 = (function (){var $ = cljs.core.select_keys(options,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scope","scope",-439358418),new cljs.core.Keyword(null,"report","report",1394055010),new cljs.core.Keyword(null,"gen","gen",142575302)], null));
var $__$1 = (function (){var G__60433 = $;
if(cljs.core.truth_(report)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__60433,new cljs.core.Keyword(null,"report","report",1394055010),((function (seq__59568_60683,chunk__59569_60684,count__59570_60685,i__59571_60686,seq__59567,chunk__59572,count__59573,i__59574,G__60433,$,original_fn_60786,G__60432_60780,G__60432_60781__$1,v_60772,temp__5825__auto___60769__$2,vec__60425_60766,s_60767,d_60768__$1,seq__59568_60760__$1,temp__5825__auto___60759__$1,vec__60226,n,d,seq__59567__$1,temp__5825__auto__,map__59565,map__59565__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (r){
return ((function (seq__59568_60683,chunk__59569_60684,count__59570_60685,i__59571_60686,seq__59567,chunk__59572,count__59573,i__59574,G__60433,$,original_fn_60786,G__60432_60780,G__60432_60781__$1,v_60772,temp__5825__auto___60769__$2,vec__60425_60766,s_60767,d_60768__$1,seq__59568_60760__$1,temp__5825__auto___60759__$1,vec__60226,n,d,seq__59567__$1,temp__5825__auto__,map__59565,map__59565__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (t,data__$1){
var G__60434 = t;
var G__60435 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__$1,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(n),cljs.core.name(s_60767)));
return (r.cljs$core$IFn$_invoke$arity$2 ? r.cljs$core$IFn$_invoke$arity$2(G__60434,G__60435) : r.call(null,G__60434,G__60435));
});
;})(seq__59568_60683,chunk__59569_60684,count__59570_60685,i__59571_60686,seq__59567,chunk__59572,count__59573,i__59574,G__60433,$,original_fn_60786,G__60432_60780,G__60432_60781__$1,v_60772,temp__5825__auto___60769__$2,vec__60425_60766,s_60767,d_60768__$1,seq__59568_60760__$1,temp__5825__auto___60759__$1,vec__60226,n,d,seq__59567__$1,temp__5825__auto__,map__59565,map__59565__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
});})(seq__59568_60683,chunk__59569_60684,count__59570_60685,i__59571_60686,seq__59567,chunk__59572,count__59573,i__59574,G__60433,$,original_fn_60786,G__60432_60780,G__60432_60781__$1,v_60772,temp__5825__auto___60769__$2,vec__60425_60766,s_60767,d_60768__$1,seq__59568_60760__$1,temp__5825__auto___60759__$1,vec__60226,n,d,seq__59567__$1,temp__5825__auto__,map__59565,map__59565__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
);
} else {
return G__60433;
}
})();
var $__$2 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$__$1,d_60768__$1], 0));
if(cljs.core.truth_((function (){var and__5160__auto__ = gen;
if(cljs.core.truth_(and__5160__auto__)){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(d_60768__$1) === true;
} else {
return and__5160__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($__$2,new cljs.core.Keyword(null,"gen","gen",142575302),gen);
} else {
if(new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(d_60768__$1) === true){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($__$2,new cljs.core.Keyword(null,"gen","gen",142575302));
} else {
return $__$2;

}
}
})();
if(cljs.core.truth_((function (){var and__5160__auto__ = original_fn_60786;
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core.not((function (){var and__5160__auto____$1 = skip_instrumented_QMARK_;
if(cljs.core.truth_(and__5160__auto____$1)){
return malli.instrument._instrumented_QMARK_(v_60772);
} else {
return and__5160__auto____$1;
}
})());
} else {
return and__5160__auto__;
}
})())){
malli.instrument._replace_fn(original_fn_60786,n,s_60767,dgen_60787);
} else {
}

break;
case "unstrument":
if(malli.instrument._instrumented_QMARK_(v_60772)){
var original_fn_60797 = (function (){var or__5162__auto__ = malli.instrument._original(v_60772);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return v_60772;
}
})();
if(cljs.core.truth_(malli.instrument._pure_variadic_QMARK_(original_fn_60797))){
var accessor_60798 = "cljs$core$IFn$_invoke$arity$variadic";
var variadic_fn_60799 = malli.instrument.goog$module$goog$object.get(v_60772,accessor_60798);
var orig_variadic_fn_60800 = malli.instrument.goog$module$goog$object.get(variadic_fn_60799,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_60797,accessor_60798,orig_variadic_fn_60800);
} else {
if(cljs.core.truth_(malli.instrument._max_fixed_arity(original_fn_60797))){
var seq__60437_60810 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.range.cljs$core$IFn$_invoke$arity$1((20)),"variadic"));
var chunk__60440_60811 = null;
var count__60441_60812 = (0);
var i__60442_60813 = (0);
while(true){
if((i__60442_60813 < count__60441_60812)){
var arity_60815 = chunk__60440_60811.cljs$core$IIndexed$_nth$arity$2(null,i__60442_60813);
var accessor_60816 = (""+"cljs$core$IFn$_invoke$arity$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity_60815));
var arity_fn_60817 = malli.instrument.goog$module$goog$object.get(original_fn_60797,accessor_60816);
if(cljs.core.truth_(arity_fn_60817)){
var orig_60818 = malli.instrument.goog$module$goog$object.get(arity_fn_60817,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_60797,accessor_60816,orig_60818);


var G__60819 = seq__60437_60810;
var G__60820 = chunk__60440_60811;
var G__60821 = count__60441_60812;
var G__60822 = (i__60442_60813 + (1));
seq__60437_60810 = G__60819;
chunk__60440_60811 = G__60820;
count__60441_60812 = G__60821;
i__60442_60813 = G__60822;
continue;
} else {
var G__60823 = seq__60437_60810;
var G__60824 = chunk__60440_60811;
var G__60825 = count__60441_60812;
var G__60826 = (i__60442_60813 + (1));
seq__60437_60810 = G__60823;
chunk__60440_60811 = G__60824;
count__60441_60812 = G__60825;
i__60442_60813 = G__60826;
continue;
}
} else {
var temp__5825__auto___60833__$3 = cljs.core.seq(seq__60437_60810);
if(temp__5825__auto___60833__$3){
var seq__60437_60834__$1 = temp__5825__auto___60833__$3;
if(cljs.core.chunked_seq_QMARK_(seq__60437_60834__$1)){
var c__5694__auto___60838 = cljs.core.chunk_first(seq__60437_60834__$1);
var G__60839 = cljs.core.chunk_rest(seq__60437_60834__$1);
var G__60840 = c__5694__auto___60838;
var G__60841 = cljs.core.count(c__5694__auto___60838);
var G__60842 = (0);
seq__60437_60810 = G__60839;
chunk__60440_60811 = G__60840;
count__60441_60812 = G__60841;
i__60442_60813 = G__60842;
continue;
} else {
var arity_60843 = cljs.core.first(seq__60437_60834__$1);
var accessor_60845 = (""+"cljs$core$IFn$_invoke$arity$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity_60843));
var arity_fn_60846 = malli.instrument.goog$module$goog$object.get(original_fn_60797,accessor_60845);
if(cljs.core.truth_(arity_fn_60846)){
var orig_60847 = malli.instrument.goog$module$goog$object.get(arity_fn_60846,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_60797,accessor_60845,orig_60847);


var G__60848 = cljs.core.next(seq__60437_60834__$1);
var G__60849 = null;
var G__60850 = (0);
var G__60851 = (0);
seq__60437_60810 = G__60848;
chunk__60440_60811 = G__60849;
count__60441_60812 = G__60850;
i__60442_60813 = G__60851;
continue;
} else {
var G__60852 = cljs.core.next(seq__60437_60834__$1);
var G__60853 = null;
var G__60854 = (0);
var G__60855 = (0);
seq__60437_60810 = G__60852;
chunk__60440_60811 = G__60853;
count__60441_60812 = G__60854;
i__60442_60813 = G__60855;
continue;
}
}
} else {
}
}
break;
}
} else {
malli.instrument.goog$module$goog$object.set(malli.instrument._get_ns(n),cljs.core.munge(cljs.core.name(s_60767)),original_fn_60797);

}
}
} else {
}

break;
default:
(mode.cljs$core$IFn$_invoke$arity$2 ? mode.cljs$core$IFn$_invoke$arity$2(v_60772,d_60768__$1) : mode.call(null,v_60772,d_60768__$1));

}
} else {
}
} else {
}


var G__60856 = cljs.core.next(seq__59568_60760__$1);
var G__60857 = null;
var G__60858 = (0);
var G__60859 = (0);
seq__59568_60683 = G__60856;
chunk__59569_60684 = G__60857;
count__59570_60685 = G__60858;
i__59571_60686 = G__60859;
continue;
}
} else {
}
}
break;
}

var G__60860 = cljs.core.next(seq__59567__$1);
var G__60861 = null;
var G__60862 = (0);
var G__60863 = (0);
seq__59567 = G__60860;
chunk__59572 = G__60861;
count__59573 = G__60862;
i__59574 = G__60863;
continue;
}
} else {
return null;
}
}
break;
}
}));

(malli.instrument._strument_BANG_.cljs$lang$maxFixedArity = 1);

/**
 * Checks all registered function schemas using generative testing.
 * Returns nil or a map of symbol -> explanation in case of errors.
 */
malli.instrument.check = (function malli$instrument$check(var_args){
var G__60489 = arguments.length;
switch (G__60489) {
case 0:
return malli.instrument.check.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return malli.instrument.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(malli.instrument.check.cljs$core$IFn$_invoke$arity$0 = (function (){
return malli.instrument.check.cljs$core$IFn$_invoke$arity$1(null);
}));

(malli.instrument.check.cljs$core$IFn$_invoke$arity$1 = (function (options){
var res_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
malli.instrument._strument_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"mode","mode",654403691),(function (v,p__60491){
var map__60492 = p__60491;
var map__60492__$1 = cljs.core.__destructure_map(map__60492);
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60492__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60492__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60492__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var G__60493 = malli.generator.check.cljs$core$IFn$_invoke$arity$2(schema,malli.instrument._original(v));
if((G__60493 == null)){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(res_STAR_,cljs.core.assoc,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(ns,name),G__60493);
}
})));

return cljs.core.not_empty(cljs.core.deref(res_STAR_));
}));

(malli.instrument.check.cljs$lang$maxFixedArity = 1);

/**
 * Applies instrumentation for a filtered set of function Vars (e.g. `defn`s).
 * See [[malli.core/-instrument]] for possible options.
 */
malli.instrument.instrument_BANG_ = (function malli$instrument$instrument_BANG_(var_args){
var G__60499 = arguments.length;
switch (G__60499) {
case 0:
return malli.instrument.instrument_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return malli.instrument.instrument_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(malli.instrument.instrument_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return malli.instrument.instrument_BANG_.cljs$core$IFn$_invoke$arity$1(null);
}));

(malli.instrument.instrument_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (options){
return malli.instrument._strument_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"instrument","instrument",-960698844)));
}));

(malli.instrument.instrument_BANG_.cljs$lang$maxFixedArity = 1);

/**
 * Removes instrumentation from a filtered set of function Vars (e.g. `defn`s).
 * See [[malli.core/-instrument]] for possible options.
 */
malli.instrument.unstrument_BANG_ = (function malli$instrument$unstrument_BANG_(var_args){
var G__60501 = arguments.length;
switch (G__60501) {
case 0:
return malli.instrument.unstrument_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return malli.instrument.unstrument_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(malli.instrument.unstrument_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return malli.instrument.unstrument_BANG_.cljs$core$IFn$_invoke$arity$1(null);
}));

(malli.instrument.unstrument_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (options){
return malli.instrument._strument_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"unstrument","unstrument",-312041116)));
}));

(malli.instrument.unstrument_BANG_.cljs$lang$maxFixedArity = 1);


//# sourceMappingURL=malli.instrument.js.map
