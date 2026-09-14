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

var x39171_39479 = new_f;
(x39171_39479.cljs$core$IMeta$ = cljs.core.PROTOCOL_SENTINEL);

(x39171_39479.cljs$core$IMeta$_meta$arity$1 = (function (_){
var ___$1 = this;
return m;
}));


return new_f;
});
malli.instrument._filter_ns = (function malli$instrument$_filter_ns(var_args){
var args__5903__auto__ = [];
var len__5897__auto___39480 = arguments.length;
var i__5898__auto___39481 = (0);
while(true){
if((i__5898__auto___39481 < len__5897__auto___39480)){
args__5903__auto__.push((arguments[i__5898__auto___39481]));

var G__39482 = (i__5898__auto___39481 + (1));
i__5898__auto___39481 = G__39482;
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
var fexpr__39173 = cljs.core.set(ns);
return (fexpr__39173.cljs$core$IFn$_invoke$arity$1 ? fexpr__39173.cljs$core$IFn$_invoke$arity$1(n) : fexpr__39173.call(null,n));
});
}));

(malli.instrument._filter_ns.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.instrument._filter_ns.cljs$lang$applyTo = (function (seq39172){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39172));
}));

malli.instrument._filter_var = (function malli$instrument$_filter_var(f){
return (function (n,s,d){
var G__39174 = (new cljs.core.Var(cljs.core.constantly(malli.instrument._find_var(n,s)),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(n,s),d));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__39174) : f.call(null,G__39174));
});
});
malli.instrument._filter_schema = (function malli$instrument$_filter_schema(f){
return (function (_,___$1,p__39175){
var map__39176 = p__39175;
var map__39176__$1 = cljs.core.__destructure_map(map__39176);
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39176__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
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
return cljs.core.every_QMARK_((function (p1__39177_SHARP_){
return (!(cljs.core.fn_QMARK_(malli.instrument.goog$module$goog$object.get(f,(""+"cljs$core$IFn$_invoke$arity$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__39177_SHARP_))))));
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
var G__39485__delegate = function (args){
var vec__39178 = cljs.core.split_at(max_fixed_arity,cljs.core.vec(args));
var fixed_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39178,(0),null);
var rest_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39178,(1),null);
var final_args = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(fixed_args),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(rest_args)], null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(arity_fn,final_args);
};
var G__39485 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39486__i = 0, G__39486__a = new Array(arguments.length -  0);
while (G__39486__i < G__39486__a.length) {G__39486__a[G__39486__i] = arguments[G__39486__i + 0]; ++G__39486__i;}
  args = new cljs.core.IndexedSeq(G__39486__a,0,null);
} 
return G__39485__delegate.call(this,args);};
G__39485.cljs$lang$maxFixedArity = 0;
G__39485.cljs$lang$applyTo = (function (arglist__39488){
var args = cljs.core.seq(arglist__39488);
return G__39485__delegate(args);
});
G__39485.cljs$core$IFn$_invoke$arity$variadic = G__39485__delegate;
return G__39485;
})()
);
var instrumented_wrapper = (function() { 
var G__39489__delegate = function (args){
var vec__39181 = cljs.core.split_at(max_fixed_arity,cljs.core.vec(args));
var fixed_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39181,(0),null);
var rest_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39181,(1),null);
var final_args = cljs.core.vec(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list_STAR_,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(fixed_args),cljs.core.not_empty(rest_args))));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(instrumented_variadic_fn,final_args);
};
var G__39489 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39492__i = 0, G__39492__a = new Array(arguments.length -  0);
while (G__39492__i < G__39492__a.length) {G__39492__a[G__39492__i] = arguments[G__39492__i + 0]; ++G__39492__i;}
  args = new cljs.core.IndexedSeq(G__39492__a,0,null);
} 
return G__39489__delegate.call(this,args);};
G__39489.cljs$lang$maxFixedArity = 0;
G__39489.cljs$lang$applyTo = (function (arglist__39493){
var args = cljs.core.seq(arglist__39493);
return G__39489__delegate(args);
});
G__39489.cljs$core$IFn$_invoke$arity$variadic = G__39489__delegate;
return G__39489;
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

var seq__39184 = cljs.core.seq(malli.instrument._arity__GT_schema(schema));
var chunk__39185 = null;
var count__39186 = (0);
var i__39187 = (0);
while(true){
if((i__39187 < count__39186)){
var vec__39194 = chunk__39185.cljs$core$IIndexed$_nth$arity$2(null,i__39187);
var arity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39194,(0),null);
var f_schema = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39194,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arity,new cljs.core.Keyword(null,"varargs","varargs",1030150858))){
malli.instrument._replace_variadic_fn(original_fn,n,s,opts);
} else {
var accessor_39497 = (""+"cljs$core$IFn$_invoke$arity$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity));
var arity_fn_39498 = malli.instrument.goog$module$goog$object.get(original_fn,accessor_39497);
if(cljs.core.truth_(arity_fn_39498)){
var instrumented_fn_39500 = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"schema","schema",-1582001791),f_schema),arity_fn_39498);
malli.instrument.goog$module$goog$object.set(instrumented_fn_39500,"malli$instrument$original",arity_fn_39498);

malli.instrument.goog$module$goog$object.set(instrumented_fn_39500,"malli$instrument$instrumented?",true);

malli.instrument.goog$module$goog$object.set(malli.instrument._get_prop(n,s),accessor_39497,instrumented_fn_39500);
} else {
}
}


var G__39503 = seq__39184;
var G__39504 = chunk__39185;
var G__39505 = count__39186;
var G__39506 = (i__39187 + (1));
seq__39184 = G__39503;
chunk__39185 = G__39504;
count__39186 = G__39505;
i__39187 = G__39506;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__39184);
if(temp__5825__auto__){
var seq__39184__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39184__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__39184__$1);
var G__39508 = cljs.core.chunk_rest(seq__39184__$1);
var G__39509 = c__5694__auto__;
var G__39510 = cljs.core.count(c__5694__auto__);
var G__39511 = (0);
seq__39184 = G__39508;
chunk__39185 = G__39509;
count__39186 = G__39510;
i__39187 = G__39511;
continue;
} else {
var vec__39197 = cljs.core.first(seq__39184__$1);
var arity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39197,(0),null);
var f_schema = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39197,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arity,new cljs.core.Keyword(null,"varargs","varargs",1030150858))){
malli.instrument._replace_variadic_fn(original_fn,n,s,opts);
} else {
var accessor_39512 = (""+"cljs$core$IFn$_invoke$arity$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity));
var arity_fn_39513 = malli.instrument.goog$module$goog$object.get(original_fn,accessor_39512);
if(cljs.core.truth_(arity_fn_39513)){
var instrumented_fn_39514 = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"schema","schema",-1582001791),f_schema),arity_fn_39513);
malli.instrument.goog$module$goog$object.set(instrumented_fn_39514,"malli$instrument$original",arity_fn_39513);

malli.instrument.goog$module$goog$object.set(instrumented_fn_39514,"malli$instrument$instrumented?",true);

malli.instrument.goog$module$goog$object.set(malli.instrument._get_prop(n,s),accessor_39512,instrumented_fn_39514);
} else {
}
}


var G__39515 = cljs.core.next(seq__39184__$1);
var G__39516 = null;
var G__39517 = (0);
var G__39518 = (0);
seq__39184 = G__39515;
chunk__39185 = G__39516;
count__39186 = G__39517;
i__39187 = G__39518;
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
}catch (e39200){var e = e39200;
if((e instanceof cljs.core.ExceptionInfo)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Schema error when instrumenting function: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(n),cljs.core.name(s)))+" - "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ex_message(e))),cljs.core.ex_data(e));
} else {
throw (new Error((""+"Schema error when instrumenting function: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(n),cljs.core.name(s)))+". "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e))));
}
}});
malli.instrument._strument_BANG_ = (function malli$instrument$_strument_BANG_(var_args){
var G__39203 = arguments.length;
switch (G__39203) {
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

(malli.instrument._strument_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (p__39204){
var map__39205 = p__39204;
var map__39205__$1 = cljs.core.__destructure_map(map__39205);
var options = map__39205__$1;
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39205__$1,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39205__$1,new cljs.core.Keyword(null,"data","data",-232669377),malli.core.function_schemas.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"cljs","cljs",1492417629)));
var filters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39205__$1,new cljs.core.Keyword(null,"filters","filters",974726919));
var gen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39205__$1,new cljs.core.Keyword(null,"gen","gen",142575302));
var report = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39205__$1,new cljs.core.Keyword(null,"report","report",1394055010));
var skip_instrumented_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39205__$1,new cljs.core.Keyword(null,"skip-instrumented?","skip-instrumented?",1366613843),false);
var seq__39206 = cljs.core.seq(data);
var chunk__39211 = null;
var count__39212 = (0);
var i__39213 = (0);
while(true){
if((i__39213 < count__39212)){
var vec__39344 = chunk__39211.cljs$core$IIndexed$_nth$arity$2(null,i__39213);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39344,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39344,(1),null);
var seq__39214_39524 = cljs.core.seq(d);
var chunk__39215_39525 = null;
var count__39216_39526 = (0);
var i__39217_39527 = (0);
while(true){
if((i__39217_39527 < count__39216_39526)){
var vec__39377_39528 = chunk__39215_39525.cljs$core$IIndexed$_nth$arity$2(null,i__39217_39527);
var s_39529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39377_39528,(0),null);
var d_39530__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39377_39528,(1),null);
var temp__5825__auto___39531 = malli.instrument._find_var(n,s_39529);
if(cljs.core.truth_(temp__5825__auto___39531)){
var v_39532 = temp__5825__auto___39531;
if(cljs.core.truth_((function (){var or__5162__auto__ = cljs.core.not(filters);
if(or__5162__auto__){
return or__5162__auto__;
} else {
return cljs.core.some(((function (seq__39214_39524,chunk__39215_39525,count__39216_39526,i__39217_39527,seq__39206,chunk__39211,count__39212,i__39213,or__5162__auto__,v_39532,temp__5825__auto___39531,vec__39377_39528,s_39529,d_39530__$1,vec__39344,n,d,map__39205,map__39205__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (p1__39201_SHARP_){
return (p1__39201_SHARP_.cljs$core$IFn$_invoke$arity$3 ? p1__39201_SHARP_.cljs$core$IFn$_invoke$arity$3(n,s_39529,d_39530__$1) : p1__39201_SHARP_.call(null,n,s_39529,d_39530__$1));
});})(seq__39214_39524,chunk__39215_39525,count__39216_39526,i__39217_39527,seq__39206,chunk__39211,count__39212,i__39213,or__5162__auto__,v_39532,temp__5825__auto___39531,vec__39377_39528,s_39529,d_39530__$1,vec__39344,n,d,map__39205,map__39205__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
,filters);
}
})())){
var G__39380_39534 = mode;
var G__39380_39535__$1 = (((G__39380_39534 instanceof cljs.core.Keyword))?G__39380_39534.fqn:null);
switch (G__39380_39535__$1) {
case "instrument":
var original_fn_39538 = (function (){var or__5162__auto__ = malli.instrument._original(v_39532);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return v_39532;
}
})();
var dgen_39539 = (function (){var $ = cljs.core.select_keys(options,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scope","scope",-439358418),new cljs.core.Keyword(null,"report","report",1394055010),new cljs.core.Keyword(null,"gen","gen",142575302)], null));
var $__$1 = (function (){var G__39381 = $;
if(cljs.core.truth_(report)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__39381,new cljs.core.Keyword(null,"report","report",1394055010),((function (seq__39214_39524,chunk__39215_39525,count__39216_39526,i__39217_39527,seq__39206,chunk__39211,count__39212,i__39213,G__39381,$,original_fn_39538,G__39380_39534,G__39380_39535__$1,v_39532,temp__5825__auto___39531,vec__39377_39528,s_39529,d_39530__$1,vec__39344,n,d,map__39205,map__39205__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (r){
return ((function (seq__39214_39524,chunk__39215_39525,count__39216_39526,i__39217_39527,seq__39206,chunk__39211,count__39212,i__39213,G__39381,$,original_fn_39538,G__39380_39534,G__39380_39535__$1,v_39532,temp__5825__auto___39531,vec__39377_39528,s_39529,d_39530__$1,vec__39344,n,d,map__39205,map__39205__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (t,data__$1){
var G__39382 = t;
var G__39383 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__$1,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(n),cljs.core.name(s_39529)));
return (r.cljs$core$IFn$_invoke$arity$2 ? r.cljs$core$IFn$_invoke$arity$2(G__39382,G__39383) : r.call(null,G__39382,G__39383));
});
;})(seq__39214_39524,chunk__39215_39525,count__39216_39526,i__39217_39527,seq__39206,chunk__39211,count__39212,i__39213,G__39381,$,original_fn_39538,G__39380_39534,G__39380_39535__$1,v_39532,temp__5825__auto___39531,vec__39377_39528,s_39529,d_39530__$1,vec__39344,n,d,map__39205,map__39205__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
});})(seq__39214_39524,chunk__39215_39525,count__39216_39526,i__39217_39527,seq__39206,chunk__39211,count__39212,i__39213,G__39381,$,original_fn_39538,G__39380_39534,G__39380_39535__$1,v_39532,temp__5825__auto___39531,vec__39377_39528,s_39529,d_39530__$1,vec__39344,n,d,map__39205,map__39205__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
);
} else {
return G__39381;
}
})();
var $__$2 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$__$1,d_39530__$1], 0));
if(cljs.core.truth_((function (){var and__5160__auto__ = gen;
if(cljs.core.truth_(and__5160__auto__)){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(d_39530__$1) === true;
} else {
return and__5160__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($__$2,new cljs.core.Keyword(null,"gen","gen",142575302),gen);
} else {
if(new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(d_39530__$1) === true){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($__$2,new cljs.core.Keyword(null,"gen","gen",142575302));
} else {
return $__$2;

}
}
})();
if(cljs.core.truth_((function (){var and__5160__auto__ = original_fn_39538;
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core.not((function (){var and__5160__auto____$1 = skip_instrumented_QMARK_;
if(cljs.core.truth_(and__5160__auto____$1)){
return malli.instrument._instrumented_QMARK_(v_39532);
} else {
return and__5160__auto____$1;
}
})());
} else {
return and__5160__auto__;
}
})())){
malli.instrument._replace_fn(original_fn_39538,n,s_39529,dgen_39539);
} else {
}

break;
case "unstrument":
if(malli.instrument._instrumented_QMARK_(v_39532)){
var original_fn_39542 = (function (){var or__5162__auto__ = malli.instrument._original(v_39532);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return v_39532;
}
})();
if(cljs.core.truth_(malli.instrument._pure_variadic_QMARK_(original_fn_39542))){
var accessor_39543 = "cljs$core$IFn$_invoke$arity$variadic";
var variadic_fn_39544 = malli.instrument.goog$module$goog$object.get(v_39532,accessor_39543);
var orig_variadic_fn_39545 = malli.instrument.goog$module$goog$object.get(variadic_fn_39544,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_39542,accessor_39543,orig_variadic_fn_39545);
} else {
if(cljs.core.truth_(malli.instrument._max_fixed_arity(original_fn_39542))){
var seq__39384_39546 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.range.cljs$core$IFn$_invoke$arity$1((20)),"variadic"));
var chunk__39387_39547 = null;
var count__39388_39548 = (0);
var i__39389_39549 = (0);
while(true){
if((i__39389_39549 < count__39388_39548)){
var arity_39550 = chunk__39387_39547.cljs$core$IIndexed$_nth$arity$2(null,i__39389_39549);
var accessor_39552 = (""+"cljs$core$IFn$_invoke$arity$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity_39550));
var arity_fn_39553 = malli.instrument.goog$module$goog$object.get(original_fn_39542,accessor_39552);
if(cljs.core.truth_(arity_fn_39553)){
var orig_39555 = malli.instrument.goog$module$goog$object.get(arity_fn_39553,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_39542,accessor_39552,orig_39555);


var G__39556 = seq__39384_39546;
var G__39557 = chunk__39387_39547;
var G__39558 = count__39388_39548;
var G__39559 = (i__39389_39549 + (1));
seq__39384_39546 = G__39556;
chunk__39387_39547 = G__39557;
count__39388_39548 = G__39558;
i__39389_39549 = G__39559;
continue;
} else {
var G__39560 = seq__39384_39546;
var G__39561 = chunk__39387_39547;
var G__39562 = count__39388_39548;
var G__39563 = (i__39389_39549 + (1));
seq__39384_39546 = G__39560;
chunk__39387_39547 = G__39561;
count__39388_39548 = G__39562;
i__39389_39549 = G__39563;
continue;
}
} else {
var temp__5825__auto___39565__$1 = cljs.core.seq(seq__39384_39546);
if(temp__5825__auto___39565__$1){
var seq__39384_39567__$1 = temp__5825__auto___39565__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39384_39567__$1)){
var c__5694__auto___39568 = cljs.core.chunk_first(seq__39384_39567__$1);
var G__39569 = cljs.core.chunk_rest(seq__39384_39567__$1);
var G__39570 = c__5694__auto___39568;
var G__39571 = cljs.core.count(c__5694__auto___39568);
var G__39572 = (0);
seq__39384_39546 = G__39569;
chunk__39387_39547 = G__39570;
count__39388_39548 = G__39571;
i__39389_39549 = G__39572;
continue;
} else {
var arity_39573 = cljs.core.first(seq__39384_39567__$1);
var accessor_39574 = (""+"cljs$core$IFn$_invoke$arity$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity_39573));
var arity_fn_39575 = malli.instrument.goog$module$goog$object.get(original_fn_39542,accessor_39574);
if(cljs.core.truth_(arity_fn_39575)){
var orig_39577 = malli.instrument.goog$module$goog$object.get(arity_fn_39575,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_39542,accessor_39574,orig_39577);


var G__39578 = cljs.core.next(seq__39384_39567__$1);
var G__39579 = null;
var G__39580 = (0);
var G__39581 = (0);
seq__39384_39546 = G__39578;
chunk__39387_39547 = G__39579;
count__39388_39548 = G__39580;
i__39389_39549 = G__39581;
continue;
} else {
var G__39583 = cljs.core.next(seq__39384_39567__$1);
var G__39584 = null;
var G__39585 = (0);
var G__39586 = (0);
seq__39384_39546 = G__39583;
chunk__39387_39547 = G__39584;
count__39388_39548 = G__39585;
i__39389_39549 = G__39586;
continue;
}
}
} else {
}
}
break;
}
} else {
malli.instrument.goog$module$goog$object.set(malli.instrument._get_ns(n),cljs.core.munge(cljs.core.name(s_39529)),original_fn_39542);

}
}
} else {
}

break;
default:
(mode.cljs$core$IFn$_invoke$arity$2 ? mode.cljs$core$IFn$_invoke$arity$2(v_39532,d_39530__$1) : mode.call(null,v_39532,d_39530__$1));

}
} else {
}
} else {
}


var G__39587 = seq__39214_39524;
var G__39588 = chunk__39215_39525;
var G__39589 = count__39216_39526;
var G__39590 = (i__39217_39527 + (1));
seq__39214_39524 = G__39587;
chunk__39215_39525 = G__39588;
count__39216_39526 = G__39589;
i__39217_39527 = G__39590;
continue;
} else {
var temp__5825__auto___39591 = cljs.core.seq(seq__39214_39524);
if(temp__5825__auto___39591){
var seq__39214_39592__$1 = temp__5825__auto___39591;
if(cljs.core.chunked_seq_QMARK_(seq__39214_39592__$1)){
var c__5694__auto___39593 = cljs.core.chunk_first(seq__39214_39592__$1);
var G__39594 = cljs.core.chunk_rest(seq__39214_39592__$1);
var G__39595 = c__5694__auto___39593;
var G__39596 = cljs.core.count(c__5694__auto___39593);
var G__39597 = (0);
seq__39214_39524 = G__39594;
chunk__39215_39525 = G__39595;
count__39216_39526 = G__39596;
i__39217_39527 = G__39597;
continue;
} else {
var vec__39392_39598 = cljs.core.first(seq__39214_39592__$1);
var s_39599 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39392_39598,(0),null);
var d_39600__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39392_39598,(1),null);
var temp__5825__auto___39601__$1 = malli.instrument._find_var(n,s_39599);
if(cljs.core.truth_(temp__5825__auto___39601__$1)){
var v_39602 = temp__5825__auto___39601__$1;
if(cljs.core.truth_((function (){var or__5162__auto__ = cljs.core.not(filters);
if(or__5162__auto__){
return or__5162__auto__;
} else {
return cljs.core.some(((function (seq__39214_39524,chunk__39215_39525,count__39216_39526,i__39217_39527,seq__39206,chunk__39211,count__39212,i__39213,or__5162__auto__,v_39602,temp__5825__auto___39601__$1,vec__39392_39598,s_39599,d_39600__$1,seq__39214_39592__$1,temp__5825__auto___39591,vec__39344,n,d,map__39205,map__39205__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (p1__39201_SHARP_){
return (p1__39201_SHARP_.cljs$core$IFn$_invoke$arity$3 ? p1__39201_SHARP_.cljs$core$IFn$_invoke$arity$3(n,s_39599,d_39600__$1) : p1__39201_SHARP_.call(null,n,s_39599,d_39600__$1));
});})(seq__39214_39524,chunk__39215_39525,count__39216_39526,i__39217_39527,seq__39206,chunk__39211,count__39212,i__39213,or__5162__auto__,v_39602,temp__5825__auto___39601__$1,vec__39392_39598,s_39599,d_39600__$1,seq__39214_39592__$1,temp__5825__auto___39591,vec__39344,n,d,map__39205,map__39205__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
,filters);
}
})())){
var G__39395_39603 = mode;
var G__39395_39604__$1 = (((G__39395_39603 instanceof cljs.core.Keyword))?G__39395_39603.fqn:null);
switch (G__39395_39604__$1) {
case "instrument":
var original_fn_39606 = (function (){var or__5162__auto__ = malli.instrument._original(v_39602);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return v_39602;
}
})();
var dgen_39607 = (function (){var $ = cljs.core.select_keys(options,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scope","scope",-439358418),new cljs.core.Keyword(null,"report","report",1394055010),new cljs.core.Keyword(null,"gen","gen",142575302)], null));
var $__$1 = (function (){var G__39396 = $;
if(cljs.core.truth_(report)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__39396,new cljs.core.Keyword(null,"report","report",1394055010),((function (seq__39214_39524,chunk__39215_39525,count__39216_39526,i__39217_39527,seq__39206,chunk__39211,count__39212,i__39213,G__39396,$,original_fn_39606,G__39395_39603,G__39395_39604__$1,v_39602,temp__5825__auto___39601__$1,vec__39392_39598,s_39599,d_39600__$1,seq__39214_39592__$1,temp__5825__auto___39591,vec__39344,n,d,map__39205,map__39205__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (r){
return ((function (seq__39214_39524,chunk__39215_39525,count__39216_39526,i__39217_39527,seq__39206,chunk__39211,count__39212,i__39213,G__39396,$,original_fn_39606,G__39395_39603,G__39395_39604__$1,v_39602,temp__5825__auto___39601__$1,vec__39392_39598,s_39599,d_39600__$1,seq__39214_39592__$1,temp__5825__auto___39591,vec__39344,n,d,map__39205,map__39205__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (t,data__$1){
var G__39397 = t;
var G__39398 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__$1,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(n),cljs.core.name(s_39599)));
return (r.cljs$core$IFn$_invoke$arity$2 ? r.cljs$core$IFn$_invoke$arity$2(G__39397,G__39398) : r.call(null,G__39397,G__39398));
});
;})(seq__39214_39524,chunk__39215_39525,count__39216_39526,i__39217_39527,seq__39206,chunk__39211,count__39212,i__39213,G__39396,$,original_fn_39606,G__39395_39603,G__39395_39604__$1,v_39602,temp__5825__auto___39601__$1,vec__39392_39598,s_39599,d_39600__$1,seq__39214_39592__$1,temp__5825__auto___39591,vec__39344,n,d,map__39205,map__39205__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
});})(seq__39214_39524,chunk__39215_39525,count__39216_39526,i__39217_39527,seq__39206,chunk__39211,count__39212,i__39213,G__39396,$,original_fn_39606,G__39395_39603,G__39395_39604__$1,v_39602,temp__5825__auto___39601__$1,vec__39392_39598,s_39599,d_39600__$1,seq__39214_39592__$1,temp__5825__auto___39591,vec__39344,n,d,map__39205,map__39205__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
);
} else {
return G__39396;
}
})();
var $__$2 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$__$1,d_39600__$1], 0));
if(cljs.core.truth_((function (){var and__5160__auto__ = gen;
if(cljs.core.truth_(and__5160__auto__)){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(d_39600__$1) === true;
} else {
return and__5160__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($__$2,new cljs.core.Keyword(null,"gen","gen",142575302),gen);
} else {
if(new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(d_39600__$1) === true){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($__$2,new cljs.core.Keyword(null,"gen","gen",142575302));
} else {
return $__$2;

}
}
})();
if(cljs.core.truth_((function (){var and__5160__auto__ = original_fn_39606;
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core.not((function (){var and__5160__auto____$1 = skip_instrumented_QMARK_;
if(cljs.core.truth_(and__5160__auto____$1)){
return malli.instrument._instrumented_QMARK_(v_39602);
} else {
return and__5160__auto____$1;
}
})());
} else {
return and__5160__auto__;
}
})())){
malli.instrument._replace_fn(original_fn_39606,n,s_39599,dgen_39607);
} else {
}

break;
case "unstrument":
if(malli.instrument._instrumented_QMARK_(v_39602)){
var original_fn_39614 = (function (){var or__5162__auto__ = malli.instrument._original(v_39602);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return v_39602;
}
})();
if(cljs.core.truth_(malli.instrument._pure_variadic_QMARK_(original_fn_39614))){
var accessor_39615 = "cljs$core$IFn$_invoke$arity$variadic";
var variadic_fn_39616 = malli.instrument.goog$module$goog$object.get(v_39602,accessor_39615);
var orig_variadic_fn_39617 = malli.instrument.goog$module$goog$object.get(variadic_fn_39616,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_39614,accessor_39615,orig_variadic_fn_39617);
} else {
if(cljs.core.truth_(malli.instrument._max_fixed_arity(original_fn_39614))){
var seq__39399_39618 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.range.cljs$core$IFn$_invoke$arity$1((20)),"variadic"));
var chunk__39402_39619 = null;
var count__39403_39620 = (0);
var i__39404_39621 = (0);
while(true){
if((i__39404_39621 < count__39403_39620)){
var arity_39623 = chunk__39402_39619.cljs$core$IIndexed$_nth$arity$2(null,i__39404_39621);
var accessor_39624 = (""+"cljs$core$IFn$_invoke$arity$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity_39623));
var arity_fn_39625 = malli.instrument.goog$module$goog$object.get(original_fn_39614,accessor_39624);
if(cljs.core.truth_(arity_fn_39625)){
var orig_39626 = malli.instrument.goog$module$goog$object.get(arity_fn_39625,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_39614,accessor_39624,orig_39626);


var G__39627 = seq__39399_39618;
var G__39628 = chunk__39402_39619;
var G__39629 = count__39403_39620;
var G__39630 = (i__39404_39621 + (1));
seq__39399_39618 = G__39627;
chunk__39402_39619 = G__39628;
count__39403_39620 = G__39629;
i__39404_39621 = G__39630;
continue;
} else {
var G__39632 = seq__39399_39618;
var G__39633 = chunk__39402_39619;
var G__39634 = count__39403_39620;
var G__39635 = (i__39404_39621 + (1));
seq__39399_39618 = G__39632;
chunk__39402_39619 = G__39633;
count__39403_39620 = G__39634;
i__39404_39621 = G__39635;
continue;
}
} else {
var temp__5825__auto___39637__$2 = cljs.core.seq(seq__39399_39618);
if(temp__5825__auto___39637__$2){
var seq__39399_39638__$1 = temp__5825__auto___39637__$2;
if(cljs.core.chunked_seq_QMARK_(seq__39399_39638__$1)){
var c__5694__auto___39639 = cljs.core.chunk_first(seq__39399_39638__$1);
var G__39640 = cljs.core.chunk_rest(seq__39399_39638__$1);
var G__39641 = c__5694__auto___39639;
var G__39642 = cljs.core.count(c__5694__auto___39639);
var G__39643 = (0);
seq__39399_39618 = G__39640;
chunk__39402_39619 = G__39641;
count__39403_39620 = G__39642;
i__39404_39621 = G__39643;
continue;
} else {
var arity_39644 = cljs.core.first(seq__39399_39638__$1);
var accessor_39645 = (""+"cljs$core$IFn$_invoke$arity$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity_39644));
var arity_fn_39646 = malli.instrument.goog$module$goog$object.get(original_fn_39614,accessor_39645);
if(cljs.core.truth_(arity_fn_39646)){
var orig_39648 = malli.instrument.goog$module$goog$object.get(arity_fn_39646,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_39614,accessor_39645,orig_39648);


var G__39649 = cljs.core.next(seq__39399_39638__$1);
var G__39650 = null;
var G__39651 = (0);
var G__39652 = (0);
seq__39399_39618 = G__39649;
chunk__39402_39619 = G__39650;
count__39403_39620 = G__39651;
i__39404_39621 = G__39652;
continue;
} else {
var G__39653 = cljs.core.next(seq__39399_39638__$1);
var G__39654 = null;
var G__39655 = (0);
var G__39656 = (0);
seq__39399_39618 = G__39653;
chunk__39402_39619 = G__39654;
count__39403_39620 = G__39655;
i__39404_39621 = G__39656;
continue;
}
}
} else {
}
}
break;
}
} else {
malli.instrument.goog$module$goog$object.set(malli.instrument._get_ns(n),cljs.core.munge(cljs.core.name(s_39599)),original_fn_39614);

}
}
} else {
}

break;
default:
(mode.cljs$core$IFn$_invoke$arity$2 ? mode.cljs$core$IFn$_invoke$arity$2(v_39602,d_39600__$1) : mode.call(null,v_39602,d_39600__$1));

}
} else {
}
} else {
}


var G__39657 = cljs.core.next(seq__39214_39592__$1);
var G__39658 = null;
var G__39659 = (0);
var G__39660 = (0);
seq__39214_39524 = G__39657;
chunk__39215_39525 = G__39658;
count__39216_39526 = G__39659;
i__39217_39527 = G__39660;
continue;
}
} else {
}
}
break;
}

var G__39661 = seq__39206;
var G__39662 = chunk__39211;
var G__39663 = count__39212;
var G__39664 = (i__39213 + (1));
seq__39206 = G__39661;
chunk__39211 = G__39662;
count__39212 = G__39663;
i__39213 = G__39664;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__39206);
if(temp__5825__auto__){
var seq__39206__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39206__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__39206__$1);
var G__39665 = cljs.core.chunk_rest(seq__39206__$1);
var G__39666 = c__5694__auto__;
var G__39667 = cljs.core.count(c__5694__auto__);
var G__39668 = (0);
seq__39206 = G__39665;
chunk__39211 = G__39666;
count__39212 = G__39667;
i__39213 = G__39668;
continue;
} else {
var vec__39407 = cljs.core.first(seq__39206__$1);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39407,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39407,(1),null);
var seq__39207_39669 = cljs.core.seq(d);
var chunk__39208_39670 = null;
var count__39209_39671 = (0);
var i__39210_39672 = (0);
while(true){
if((i__39210_39672 < count__39209_39671)){
var vec__39440_39674 = chunk__39208_39670.cljs$core$IIndexed$_nth$arity$2(null,i__39210_39672);
var s_39675 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39440_39674,(0),null);
var d_39676__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39440_39674,(1),null);
var temp__5825__auto___39678__$1 = malli.instrument._find_var(n,s_39675);
if(cljs.core.truth_(temp__5825__auto___39678__$1)){
var v_39679 = temp__5825__auto___39678__$1;
if(cljs.core.truth_((function (){var or__5162__auto__ = cljs.core.not(filters);
if(or__5162__auto__){
return or__5162__auto__;
} else {
return cljs.core.some(((function (seq__39207_39669,chunk__39208_39670,count__39209_39671,i__39210_39672,seq__39206,chunk__39211,count__39212,i__39213,or__5162__auto__,v_39679,temp__5825__auto___39678__$1,vec__39440_39674,s_39675,d_39676__$1,vec__39407,n,d,seq__39206__$1,temp__5825__auto__,map__39205,map__39205__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (p1__39201_SHARP_){
return (p1__39201_SHARP_.cljs$core$IFn$_invoke$arity$3 ? p1__39201_SHARP_.cljs$core$IFn$_invoke$arity$3(n,s_39675,d_39676__$1) : p1__39201_SHARP_.call(null,n,s_39675,d_39676__$1));
});})(seq__39207_39669,chunk__39208_39670,count__39209_39671,i__39210_39672,seq__39206,chunk__39211,count__39212,i__39213,or__5162__auto__,v_39679,temp__5825__auto___39678__$1,vec__39440_39674,s_39675,d_39676__$1,vec__39407,n,d,seq__39206__$1,temp__5825__auto__,map__39205,map__39205__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
,filters);
}
})())){
var G__39443_39680 = mode;
var G__39443_39681__$1 = (((G__39443_39680 instanceof cljs.core.Keyword))?G__39443_39680.fqn:null);
switch (G__39443_39681__$1) {
case "instrument":
var original_fn_39684 = (function (){var or__5162__auto__ = malli.instrument._original(v_39679);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return v_39679;
}
})();
var dgen_39685 = (function (){var $ = cljs.core.select_keys(options,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scope","scope",-439358418),new cljs.core.Keyword(null,"report","report",1394055010),new cljs.core.Keyword(null,"gen","gen",142575302)], null));
var $__$1 = (function (){var G__39444 = $;
if(cljs.core.truth_(report)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__39444,new cljs.core.Keyword(null,"report","report",1394055010),((function (seq__39207_39669,chunk__39208_39670,count__39209_39671,i__39210_39672,seq__39206,chunk__39211,count__39212,i__39213,G__39444,$,original_fn_39684,G__39443_39680,G__39443_39681__$1,v_39679,temp__5825__auto___39678__$1,vec__39440_39674,s_39675,d_39676__$1,vec__39407,n,d,seq__39206__$1,temp__5825__auto__,map__39205,map__39205__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (r){
return ((function (seq__39207_39669,chunk__39208_39670,count__39209_39671,i__39210_39672,seq__39206,chunk__39211,count__39212,i__39213,G__39444,$,original_fn_39684,G__39443_39680,G__39443_39681__$1,v_39679,temp__5825__auto___39678__$1,vec__39440_39674,s_39675,d_39676__$1,vec__39407,n,d,seq__39206__$1,temp__5825__auto__,map__39205,map__39205__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (t,data__$1){
var G__39445 = t;
var G__39446 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__$1,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(n),cljs.core.name(s_39675)));
return (r.cljs$core$IFn$_invoke$arity$2 ? r.cljs$core$IFn$_invoke$arity$2(G__39445,G__39446) : r.call(null,G__39445,G__39446));
});
;})(seq__39207_39669,chunk__39208_39670,count__39209_39671,i__39210_39672,seq__39206,chunk__39211,count__39212,i__39213,G__39444,$,original_fn_39684,G__39443_39680,G__39443_39681__$1,v_39679,temp__5825__auto___39678__$1,vec__39440_39674,s_39675,d_39676__$1,vec__39407,n,d,seq__39206__$1,temp__5825__auto__,map__39205,map__39205__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
});})(seq__39207_39669,chunk__39208_39670,count__39209_39671,i__39210_39672,seq__39206,chunk__39211,count__39212,i__39213,G__39444,$,original_fn_39684,G__39443_39680,G__39443_39681__$1,v_39679,temp__5825__auto___39678__$1,vec__39440_39674,s_39675,d_39676__$1,vec__39407,n,d,seq__39206__$1,temp__5825__auto__,map__39205,map__39205__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
);
} else {
return G__39444;
}
})();
var $__$2 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$__$1,d_39676__$1], 0));
if(cljs.core.truth_((function (){var and__5160__auto__ = gen;
if(cljs.core.truth_(and__5160__auto__)){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(d_39676__$1) === true;
} else {
return and__5160__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($__$2,new cljs.core.Keyword(null,"gen","gen",142575302),gen);
} else {
if(new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(d_39676__$1) === true){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($__$2,new cljs.core.Keyword(null,"gen","gen",142575302));
} else {
return $__$2;

}
}
})();
if(cljs.core.truth_((function (){var and__5160__auto__ = original_fn_39684;
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core.not((function (){var and__5160__auto____$1 = skip_instrumented_QMARK_;
if(cljs.core.truth_(and__5160__auto____$1)){
return malli.instrument._instrumented_QMARK_(v_39679);
} else {
return and__5160__auto____$1;
}
})());
} else {
return and__5160__auto__;
}
})())){
malli.instrument._replace_fn(original_fn_39684,n,s_39675,dgen_39685);
} else {
}

break;
case "unstrument":
if(malli.instrument._instrumented_QMARK_(v_39679)){
var original_fn_39701 = (function (){var or__5162__auto__ = malli.instrument._original(v_39679);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return v_39679;
}
})();
if(cljs.core.truth_(malli.instrument._pure_variadic_QMARK_(original_fn_39701))){
var accessor_39702 = "cljs$core$IFn$_invoke$arity$variadic";
var variadic_fn_39703 = malli.instrument.goog$module$goog$object.get(v_39679,accessor_39702);
var orig_variadic_fn_39704 = malli.instrument.goog$module$goog$object.get(variadic_fn_39703,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_39701,accessor_39702,orig_variadic_fn_39704);
} else {
if(cljs.core.truth_(malli.instrument._max_fixed_arity(original_fn_39701))){
var seq__39447_39705 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.range.cljs$core$IFn$_invoke$arity$1((20)),"variadic"));
var chunk__39450_39706 = null;
var count__39451_39707 = (0);
var i__39452_39708 = (0);
while(true){
if((i__39452_39708 < count__39451_39707)){
var arity_39709 = chunk__39450_39706.cljs$core$IIndexed$_nth$arity$2(null,i__39452_39708);
var accessor_39710 = (""+"cljs$core$IFn$_invoke$arity$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity_39709));
var arity_fn_39711 = malli.instrument.goog$module$goog$object.get(original_fn_39701,accessor_39710);
if(cljs.core.truth_(arity_fn_39711)){
var orig_39712 = malli.instrument.goog$module$goog$object.get(arity_fn_39711,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_39701,accessor_39710,orig_39712);


var G__39714 = seq__39447_39705;
var G__39715 = chunk__39450_39706;
var G__39716 = count__39451_39707;
var G__39717 = (i__39452_39708 + (1));
seq__39447_39705 = G__39714;
chunk__39450_39706 = G__39715;
count__39451_39707 = G__39716;
i__39452_39708 = G__39717;
continue;
} else {
var G__39718 = seq__39447_39705;
var G__39719 = chunk__39450_39706;
var G__39720 = count__39451_39707;
var G__39721 = (i__39452_39708 + (1));
seq__39447_39705 = G__39718;
chunk__39450_39706 = G__39719;
count__39451_39707 = G__39720;
i__39452_39708 = G__39721;
continue;
}
} else {
var temp__5825__auto___39722__$2 = cljs.core.seq(seq__39447_39705);
if(temp__5825__auto___39722__$2){
var seq__39447_39723__$1 = temp__5825__auto___39722__$2;
if(cljs.core.chunked_seq_QMARK_(seq__39447_39723__$1)){
var c__5694__auto___39724 = cljs.core.chunk_first(seq__39447_39723__$1);
var G__39725 = cljs.core.chunk_rest(seq__39447_39723__$1);
var G__39726 = c__5694__auto___39724;
var G__39727 = cljs.core.count(c__5694__auto___39724);
var G__39728 = (0);
seq__39447_39705 = G__39725;
chunk__39450_39706 = G__39726;
count__39451_39707 = G__39727;
i__39452_39708 = G__39728;
continue;
} else {
var arity_39729 = cljs.core.first(seq__39447_39723__$1);
var accessor_39730 = (""+"cljs$core$IFn$_invoke$arity$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity_39729));
var arity_fn_39731 = malli.instrument.goog$module$goog$object.get(original_fn_39701,accessor_39730);
if(cljs.core.truth_(arity_fn_39731)){
var orig_39734 = malli.instrument.goog$module$goog$object.get(arity_fn_39731,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_39701,accessor_39730,orig_39734);


var G__39736 = cljs.core.next(seq__39447_39723__$1);
var G__39737 = null;
var G__39738 = (0);
var G__39739 = (0);
seq__39447_39705 = G__39736;
chunk__39450_39706 = G__39737;
count__39451_39707 = G__39738;
i__39452_39708 = G__39739;
continue;
} else {
var G__39740 = cljs.core.next(seq__39447_39723__$1);
var G__39741 = null;
var G__39742 = (0);
var G__39743 = (0);
seq__39447_39705 = G__39740;
chunk__39450_39706 = G__39741;
count__39451_39707 = G__39742;
i__39452_39708 = G__39743;
continue;
}
}
} else {
}
}
break;
}
} else {
malli.instrument.goog$module$goog$object.set(malli.instrument._get_ns(n),cljs.core.munge(cljs.core.name(s_39675)),original_fn_39701);

}
}
} else {
}

break;
default:
(mode.cljs$core$IFn$_invoke$arity$2 ? mode.cljs$core$IFn$_invoke$arity$2(v_39679,d_39676__$1) : mode.call(null,v_39679,d_39676__$1));

}
} else {
}
} else {
}


var G__39746 = seq__39207_39669;
var G__39747 = chunk__39208_39670;
var G__39748 = count__39209_39671;
var G__39749 = (i__39210_39672 + (1));
seq__39207_39669 = G__39746;
chunk__39208_39670 = G__39747;
count__39209_39671 = G__39748;
i__39210_39672 = G__39749;
continue;
} else {
var temp__5825__auto___39750__$1 = cljs.core.seq(seq__39207_39669);
if(temp__5825__auto___39750__$1){
var seq__39207_39751__$1 = temp__5825__auto___39750__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39207_39751__$1)){
var c__5694__auto___39752 = cljs.core.chunk_first(seq__39207_39751__$1);
var G__39753 = cljs.core.chunk_rest(seq__39207_39751__$1);
var G__39754 = c__5694__auto___39752;
var G__39755 = cljs.core.count(c__5694__auto___39752);
var G__39756 = (0);
seq__39207_39669 = G__39753;
chunk__39208_39670 = G__39754;
count__39209_39671 = G__39755;
i__39210_39672 = G__39756;
continue;
} else {
var vec__39455_39757 = cljs.core.first(seq__39207_39751__$1);
var s_39758 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39455_39757,(0),null);
var d_39759__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39455_39757,(1),null);
var temp__5825__auto___39760__$2 = malli.instrument._find_var(n,s_39758);
if(cljs.core.truth_(temp__5825__auto___39760__$2)){
var v_39761 = temp__5825__auto___39760__$2;
if(cljs.core.truth_((function (){var or__5162__auto__ = cljs.core.not(filters);
if(or__5162__auto__){
return or__5162__auto__;
} else {
return cljs.core.some(((function (seq__39207_39669,chunk__39208_39670,count__39209_39671,i__39210_39672,seq__39206,chunk__39211,count__39212,i__39213,or__5162__auto__,v_39761,temp__5825__auto___39760__$2,vec__39455_39757,s_39758,d_39759__$1,seq__39207_39751__$1,temp__5825__auto___39750__$1,vec__39407,n,d,seq__39206__$1,temp__5825__auto__,map__39205,map__39205__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (p1__39201_SHARP_){
return (p1__39201_SHARP_.cljs$core$IFn$_invoke$arity$3 ? p1__39201_SHARP_.cljs$core$IFn$_invoke$arity$3(n,s_39758,d_39759__$1) : p1__39201_SHARP_.call(null,n,s_39758,d_39759__$1));
});})(seq__39207_39669,chunk__39208_39670,count__39209_39671,i__39210_39672,seq__39206,chunk__39211,count__39212,i__39213,or__5162__auto__,v_39761,temp__5825__auto___39760__$2,vec__39455_39757,s_39758,d_39759__$1,seq__39207_39751__$1,temp__5825__auto___39750__$1,vec__39407,n,d,seq__39206__$1,temp__5825__auto__,map__39205,map__39205__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
,filters);
}
})())){
var G__39458_39763 = mode;
var G__39458_39764__$1 = (((G__39458_39763 instanceof cljs.core.Keyword))?G__39458_39763.fqn:null);
switch (G__39458_39764__$1) {
case "instrument":
var original_fn_39766 = (function (){var or__5162__auto__ = malli.instrument._original(v_39761);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return v_39761;
}
})();
var dgen_39767 = (function (){var $ = cljs.core.select_keys(options,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scope","scope",-439358418),new cljs.core.Keyword(null,"report","report",1394055010),new cljs.core.Keyword(null,"gen","gen",142575302)], null));
var $__$1 = (function (){var G__39459 = $;
if(cljs.core.truth_(report)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__39459,new cljs.core.Keyword(null,"report","report",1394055010),((function (seq__39207_39669,chunk__39208_39670,count__39209_39671,i__39210_39672,seq__39206,chunk__39211,count__39212,i__39213,G__39459,$,original_fn_39766,G__39458_39763,G__39458_39764__$1,v_39761,temp__5825__auto___39760__$2,vec__39455_39757,s_39758,d_39759__$1,seq__39207_39751__$1,temp__5825__auto___39750__$1,vec__39407,n,d,seq__39206__$1,temp__5825__auto__,map__39205,map__39205__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (r){
return ((function (seq__39207_39669,chunk__39208_39670,count__39209_39671,i__39210_39672,seq__39206,chunk__39211,count__39212,i__39213,G__39459,$,original_fn_39766,G__39458_39763,G__39458_39764__$1,v_39761,temp__5825__auto___39760__$2,vec__39455_39757,s_39758,d_39759__$1,seq__39207_39751__$1,temp__5825__auto___39750__$1,vec__39407,n,d,seq__39206__$1,temp__5825__auto__,map__39205,map__39205__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_){
return (function (t,data__$1){
var G__39460 = t;
var G__39461 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__$1,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(n),cljs.core.name(s_39758)));
return (r.cljs$core$IFn$_invoke$arity$2 ? r.cljs$core$IFn$_invoke$arity$2(G__39460,G__39461) : r.call(null,G__39460,G__39461));
});
;})(seq__39207_39669,chunk__39208_39670,count__39209_39671,i__39210_39672,seq__39206,chunk__39211,count__39212,i__39213,G__39459,$,original_fn_39766,G__39458_39763,G__39458_39764__$1,v_39761,temp__5825__auto___39760__$2,vec__39455_39757,s_39758,d_39759__$1,seq__39207_39751__$1,temp__5825__auto___39750__$1,vec__39407,n,d,seq__39206__$1,temp__5825__auto__,map__39205,map__39205__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
});})(seq__39207_39669,chunk__39208_39670,count__39209_39671,i__39210_39672,seq__39206,chunk__39211,count__39212,i__39213,G__39459,$,original_fn_39766,G__39458_39763,G__39458_39764__$1,v_39761,temp__5825__auto___39760__$2,vec__39455_39757,s_39758,d_39759__$1,seq__39207_39751__$1,temp__5825__auto___39750__$1,vec__39407,n,d,seq__39206__$1,temp__5825__auto__,map__39205,map__39205__$1,options,mode,data,filters,gen,report,skip_instrumented_QMARK_))
);
} else {
return G__39459;
}
})();
var $__$2 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([$__$1,d_39759__$1], 0));
if(cljs.core.truth_((function (){var and__5160__auto__ = gen;
if(cljs.core.truth_(and__5160__auto__)){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(d_39759__$1) === true;
} else {
return and__5160__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($__$2,new cljs.core.Keyword(null,"gen","gen",142575302),gen);
} else {
if(new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(d_39759__$1) === true){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($__$2,new cljs.core.Keyword(null,"gen","gen",142575302));
} else {
return $__$2;

}
}
})();
if(cljs.core.truth_((function (){var and__5160__auto__ = original_fn_39766;
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core.not((function (){var and__5160__auto____$1 = skip_instrumented_QMARK_;
if(cljs.core.truth_(and__5160__auto____$1)){
return malli.instrument._instrumented_QMARK_(v_39761);
} else {
return and__5160__auto____$1;
}
})());
} else {
return and__5160__auto__;
}
})())){
malli.instrument._replace_fn(original_fn_39766,n,s_39758,dgen_39767);
} else {
}

break;
case "unstrument":
if(malli.instrument._instrumented_QMARK_(v_39761)){
var original_fn_39771 = (function (){var or__5162__auto__ = malli.instrument._original(v_39761);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return v_39761;
}
})();
if(cljs.core.truth_(malli.instrument._pure_variadic_QMARK_(original_fn_39771))){
var accessor_39772 = "cljs$core$IFn$_invoke$arity$variadic";
var variadic_fn_39773 = malli.instrument.goog$module$goog$object.get(v_39761,accessor_39772);
var orig_variadic_fn_39774 = malli.instrument.goog$module$goog$object.get(variadic_fn_39773,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_39771,accessor_39772,orig_variadic_fn_39774);
} else {
if(cljs.core.truth_(malli.instrument._max_fixed_arity(original_fn_39771))){
var seq__39462_39777 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.range.cljs$core$IFn$_invoke$arity$1((20)),"variadic"));
var chunk__39465_39778 = null;
var count__39466_39779 = (0);
var i__39467_39780 = (0);
while(true){
if((i__39467_39780 < count__39466_39779)){
var arity_39782 = chunk__39465_39778.cljs$core$IIndexed$_nth$arity$2(null,i__39467_39780);
var accessor_39783 = (""+"cljs$core$IFn$_invoke$arity$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity_39782));
var arity_fn_39784 = malli.instrument.goog$module$goog$object.get(original_fn_39771,accessor_39783);
if(cljs.core.truth_(arity_fn_39784)){
var orig_39785 = malli.instrument.goog$module$goog$object.get(arity_fn_39784,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_39771,accessor_39783,orig_39785);


var G__39787 = seq__39462_39777;
var G__39788 = chunk__39465_39778;
var G__39789 = count__39466_39779;
var G__39790 = (i__39467_39780 + (1));
seq__39462_39777 = G__39787;
chunk__39465_39778 = G__39788;
count__39466_39779 = G__39789;
i__39467_39780 = G__39790;
continue;
} else {
var G__39792 = seq__39462_39777;
var G__39793 = chunk__39465_39778;
var G__39794 = count__39466_39779;
var G__39795 = (i__39467_39780 + (1));
seq__39462_39777 = G__39792;
chunk__39465_39778 = G__39793;
count__39466_39779 = G__39794;
i__39467_39780 = G__39795;
continue;
}
} else {
var temp__5825__auto___39796__$3 = cljs.core.seq(seq__39462_39777);
if(temp__5825__auto___39796__$3){
var seq__39462_39797__$1 = temp__5825__auto___39796__$3;
if(cljs.core.chunked_seq_QMARK_(seq__39462_39797__$1)){
var c__5694__auto___39798 = cljs.core.chunk_first(seq__39462_39797__$1);
var G__39799 = cljs.core.chunk_rest(seq__39462_39797__$1);
var G__39800 = c__5694__auto___39798;
var G__39801 = cljs.core.count(c__5694__auto___39798);
var G__39802 = (0);
seq__39462_39777 = G__39799;
chunk__39465_39778 = G__39800;
count__39466_39779 = G__39801;
i__39467_39780 = G__39802;
continue;
} else {
var arity_39803 = cljs.core.first(seq__39462_39797__$1);
var accessor_39804 = (""+"cljs$core$IFn$_invoke$arity$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity_39803));
var arity_fn_39805 = malli.instrument.goog$module$goog$object.get(original_fn_39771,accessor_39804);
if(cljs.core.truth_(arity_fn_39805)){
var orig_39806 = malli.instrument.goog$module$goog$object.get(arity_fn_39805,"malli$instrument$original");
malli.instrument.goog$module$goog$object.set(original_fn_39771,accessor_39804,orig_39806);


var G__39807 = cljs.core.next(seq__39462_39797__$1);
var G__39808 = null;
var G__39809 = (0);
var G__39810 = (0);
seq__39462_39777 = G__39807;
chunk__39465_39778 = G__39808;
count__39466_39779 = G__39809;
i__39467_39780 = G__39810;
continue;
} else {
var G__39811 = cljs.core.next(seq__39462_39797__$1);
var G__39812 = null;
var G__39813 = (0);
var G__39814 = (0);
seq__39462_39777 = G__39811;
chunk__39465_39778 = G__39812;
count__39466_39779 = G__39813;
i__39467_39780 = G__39814;
continue;
}
}
} else {
}
}
break;
}
} else {
malli.instrument.goog$module$goog$object.set(malli.instrument._get_ns(n),cljs.core.munge(cljs.core.name(s_39758)),original_fn_39771);

}
}
} else {
}

break;
default:
(mode.cljs$core$IFn$_invoke$arity$2 ? mode.cljs$core$IFn$_invoke$arity$2(v_39761,d_39759__$1) : mode.call(null,v_39761,d_39759__$1));

}
} else {
}
} else {
}


var G__39815 = cljs.core.next(seq__39207_39751__$1);
var G__39816 = null;
var G__39817 = (0);
var G__39818 = (0);
seq__39207_39669 = G__39815;
chunk__39208_39670 = G__39816;
count__39209_39671 = G__39817;
i__39210_39672 = G__39818;
continue;
}
} else {
}
}
break;
}

var G__39819 = cljs.core.next(seq__39206__$1);
var G__39820 = null;
var G__39821 = (0);
var G__39822 = (0);
seq__39206 = G__39819;
chunk__39211 = G__39820;
count__39212 = G__39821;
i__39213 = G__39822;
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
var G__39471 = arguments.length;
switch (G__39471) {
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
malli.instrument._strument_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"mode","mode",654403691),(function (v,p__39472){
var map__39473 = p__39472;
var map__39473__$1 = cljs.core.__destructure_map(map__39473);
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39473__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39473__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39473__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var G__39474 = malli.generator.check.cljs$core$IFn$_invoke$arity$2(schema,malli.instrument._original(v));
if((G__39474 == null)){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(res_STAR_,cljs.core.assoc,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(ns,name),G__39474);
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
var G__39476 = arguments.length;
switch (G__39476) {
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
var G__39478 = arguments.length;
switch (G__39478) {
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
