goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5903__auto__ = [];
var len__5897__auto___37960 = arguments.length;
var i__5898__auto___37961 = (0);
while(true){
if((i__5898__auto___37961 < len__5897__auto___37960)){
args__5903__auto__.push((arguments[i__5898__auto___37961]));

var G__37962 = (i__5898__auto___37961 + (1));
i__5898__auto___37961 = G__37962;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+"%cshadow-cljs: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+"shadow-cljs: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg))], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37670){
var G__37671 = cljs.core.first(seq37670);
var seq37670__$1 = cljs.core.next(seq37670);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37671,seq37670__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37675 = cljs.core.seq(sources);
var chunk__37676 = null;
var count__37677 = (0);
var i__37678 = (0);
while(true){
if((i__37678 < count__37677)){
var map__37685 = chunk__37676.cljs$core$IIndexed$_nth$arity$2(null,i__37678);
var map__37685__$1 = cljs.core.__destructure_map(map__37685);
var src = map__37685__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37685__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37685__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37685__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37685__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js)+"\n//# sourceURL="+cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)));
}catch (e37686){var e_37963 = e37686;
if(shadow.cljs.devtools.client.env.log){
console.error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)),e_37963);
} else {
}

throw (new Error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37963.message))));
}

var G__37964 = seq__37675;
var G__37965 = chunk__37676;
var G__37966 = count__37677;
var G__37967 = (i__37678 + (1));
seq__37675 = G__37964;
chunk__37676 = G__37965;
count__37677 = G__37966;
i__37678 = G__37967;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__37675);
if(temp__5825__auto__){
var seq__37675__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37675__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__37675__$1);
var G__37968 = cljs.core.chunk_rest(seq__37675__$1);
var G__37969 = c__5694__auto__;
var G__37970 = cljs.core.count(c__5694__auto__);
var G__37971 = (0);
seq__37675 = G__37968;
chunk__37676 = G__37969;
count__37677 = G__37970;
i__37678 = G__37971;
continue;
} else {
var map__37687 = cljs.core.first(seq__37675__$1);
var map__37687__$1 = cljs.core.__destructure_map(map__37687);
var src = map__37687__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37687__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37687__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37687__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37687__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js)+"\n//# sourceURL="+cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)));
}catch (e37688){var e_37972 = e37688;
if(shadow.cljs.devtools.client.env.log){
console.error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)),e_37972);
} else {
}

throw (new Error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37972.message))));
}

var G__37973 = cljs.core.next(seq__37675__$1);
var G__37974 = null;
var G__37975 = (0);
var G__37976 = (0);
seq__37675 = G__37973;
chunk__37676 = G__37974;
count__37677 = G__37975;
i__37678 = G__37976;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg((""+"call async "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)));
})], 0)),(function (next){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__37691 = cljs.core.seq(js_requires);
var chunk__37692 = null;
var count__37693 = (0);
var i__37694 = (0);
while(true){
if((i__37694 < count__37693)){
var js_ns = chunk__37692.cljs$core$IIndexed$_nth$arity$2(null,i__37694);
var require_str_37977 = (""+"var "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+" = shadow.js.require(\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+"\");");
shadow.cljs.devtools.client.browser.script_eval(require_str_37977);


var G__37978 = seq__37691;
var G__37979 = chunk__37692;
var G__37980 = count__37693;
var G__37981 = (i__37694 + (1));
seq__37691 = G__37978;
chunk__37692 = G__37979;
count__37693 = G__37980;
i__37694 = G__37981;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__37691);
if(temp__5825__auto__){
var seq__37691__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37691__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__37691__$1);
var G__37982 = cljs.core.chunk_rest(seq__37691__$1);
var G__37983 = c__5694__auto__;
var G__37984 = cljs.core.count(c__5694__auto__);
var G__37985 = (0);
seq__37691 = G__37982;
chunk__37692 = G__37983;
count__37693 = G__37984;
i__37694 = G__37985;
continue;
} else {
var js_ns = cljs.core.first(seq__37691__$1);
var require_str_37986 = (""+"var "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+" = shadow.js.require(\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+"\");");
shadow.cljs.devtools.client.browser.script_eval(require_str_37986);


var G__37987 = cljs.core.next(seq__37691__$1);
var G__37988 = null;
var G__37989 = (0);
var G__37990 = (0);
seq__37691 = G__37987;
chunk__37692 = G__37988;
count__37693 = G__37989;
i__37694 = G__37990;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__37696){
var map__37697 = p__37696;
var map__37697__$1 = cljs.core.__destructure_map(map__37697);
var msg = map__37697__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37697__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37697__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5649__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37698(s__37699){
return (new cljs.core.LazySeq(null,(function (){
var s__37699__$1 = s__37699;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__37699__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var map__37704 = cljs.core.first(xs__6385__auto__);
var map__37704__$1 = cljs.core.__destructure_map(map__37704);
var src = map__37704__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37704__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37704__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5645__auto__ = ((function (s__37699__$1,map__37704,map__37704__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__37697,map__37697__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37698_$_iter__37700(s__37701){
return (new cljs.core.LazySeq(null,((function (s__37699__$1,map__37704,map__37704__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__37697,map__37697__$1,msg,info,reload_info){
return (function (){
var s__37701__$1 = s__37701;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__37701__$1);
if(temp__5825__auto____$1){
var s__37701__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37701__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__37701__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__37703 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__37702 = (0);
while(true){
if((i__37702 < size__5648__auto__)){
var warning = cljs.core._nth(c__5647__auto__,i__37702);
cljs.core.chunk_append(b__37703,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37991 = (i__37702 + (1));
i__37702 = G__37991;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37703),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37698_$_iter__37700(cljs.core.chunk_rest(s__37701__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37703),null);
}
} else {
var warning = cljs.core.first(s__37701__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37698_$_iter__37700(cljs.core.rest(s__37701__$2)));
}
} else {
return null;
}
break;
}
});})(s__37699__$1,map__37704,map__37704__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__37697,map__37697__$1,msg,info,reload_info))
,null,null));
});})(s__37699__$1,map__37704,map__37704__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__37697,map__37697__$1,msg,info,reload_info))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__(warnings));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37698(cljs.core.rest(s__37699__$1)));
} else {
var G__37992 = cljs.core.rest(s__37699__$1);
s__37699__$1 = G__37992;
continue;
}
} else {
var G__37993 = cljs.core.rest(s__37699__$1);
s__37699__$1 = G__37993;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__37705_37994 = cljs.core.seq(warnings);
var chunk__37706_37995 = null;
var count__37707_37996 = (0);
var i__37708_37997 = (0);
while(true){
if((i__37708_37997 < count__37707_37996)){
var map__37711_37998 = chunk__37706_37995.cljs$core$IIndexed$_nth$arity$2(null,i__37708_37997);
var map__37711_37999__$1 = cljs.core.__destructure_map(map__37711_37998);
var w_38000 = map__37711_37999__$1;
var msg_38001__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37711_37999__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_38002 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37711_37999__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_38003 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37711_37999__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_38004 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37711_37999__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn((""+"BUILD-WARNING in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_38004)+" at ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_38002)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_38003)+"]\n\t"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_38001__$1)));


var G__38005 = seq__37705_37994;
var G__38006 = chunk__37706_37995;
var G__38007 = count__37707_37996;
var G__38008 = (i__37708_37997 + (1));
seq__37705_37994 = G__38005;
chunk__37706_37995 = G__38006;
count__37707_37996 = G__38007;
i__37708_37997 = G__38008;
continue;
} else {
var temp__5825__auto___38009 = cljs.core.seq(seq__37705_37994);
if(temp__5825__auto___38009){
var seq__37705_38010__$1 = temp__5825__auto___38009;
if(cljs.core.chunked_seq_QMARK_(seq__37705_38010__$1)){
var c__5694__auto___38011 = cljs.core.chunk_first(seq__37705_38010__$1);
var G__38012 = cljs.core.chunk_rest(seq__37705_38010__$1);
var G__38013 = c__5694__auto___38011;
var G__38014 = cljs.core.count(c__5694__auto___38011);
var G__38015 = (0);
seq__37705_37994 = G__38012;
chunk__37706_37995 = G__38013;
count__37707_37996 = G__38014;
i__37708_37997 = G__38015;
continue;
} else {
var map__37712_38016 = cljs.core.first(seq__37705_38010__$1);
var map__37712_38017__$1 = cljs.core.__destructure_map(map__37712_38016);
var w_38018 = map__37712_38017__$1;
var msg_38019__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37712_38017__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_38020 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37712_38017__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_38021 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37712_38017__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_38022 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37712_38017__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn((""+"BUILD-WARNING in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_38022)+" at ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_38020)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_38021)+"]\n\t"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_38019__$1)));


var G__38023 = cljs.core.next(seq__37705_38010__$1);
var G__38024 = null;
var G__38025 = (0);
var G__38026 = (0);
seq__37705_37994 = G__38023;
chunk__37706_37995 = G__38024;
count__37707_37996 = G__38025;
i__37708_37997 = G__38026;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__37695_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37695_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new)+"?"))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5160__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5160__auto__){
var and__5160__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5160__auto____$1){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__37713 = node_uri;
G__37713.setQuery(null);

G__37713.setPath(new$);

return G__37713;
})()));
} else {
return and__5160__auto____$1;
}
} else {
return and__5160__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__37714){
var map__37715 = p__37714;
var map__37715__$1 = cljs.core.__destructure_map(map__37715);
var msg = map__37715__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37715__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37715__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__37716 = cljs.core.seq(updates);
var chunk__37718 = null;
var count__37719 = (0);
var i__37720 = (0);
while(true){
if((i__37720 < count__37719)){
var path = chunk__37718.cljs$core$IIndexed$_nth$arity$2(null,i__37720);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37830_38027 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37834_38028 = null;
var count__37835_38029 = (0);
var i__37836_38030 = (0);
while(true){
if((i__37836_38030 < count__37835_38029)){
var node_38031 = chunk__37834_38028.cljs$core$IIndexed$_nth$arity$2(null,i__37836_38030);
if(cljs.core.not(node_38031.shadow$old)){
var path_match_38032 = shadow.cljs.devtools.client.browser.match_paths(node_38031.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38032)){
var new_link_38033 = (function (){var G__37862 = node_38031.cloneNode(true);
G__37862.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38032)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__37862;
})();
(node_38031.shadow$old = true);

(new_link_38033.onload = ((function (seq__37830_38027,chunk__37834_38028,count__37835_38029,i__37836_38030,seq__37716,chunk__37718,count__37719,i__37720,new_link_38033,path_match_38032,node_38031,path,map__37715,map__37715__$1,msg,updates,reload_info){
return (function (e){
var seq__37863_38034 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37865_38035 = null;
var count__37866_38036 = (0);
var i__37867_38037 = (0);
while(true){
if((i__37867_38037 < count__37866_38036)){
var map__37871_38038 = chunk__37865_38035.cljs$core$IIndexed$_nth$arity$2(null,i__37867_38037);
var map__37871_38039__$1 = cljs.core.__destructure_map(map__37871_38038);
var task_38040 = map__37871_38039__$1;
var fn_str_38041 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37871_38039__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38042 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37871_38039__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38043 = goog.getObjectByName(fn_str_38041,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38042)));

(fn_obj_38043.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38043.cljs$core$IFn$_invoke$arity$2(path,new_link_38033) : fn_obj_38043.call(null,path,new_link_38033));


var G__38044 = seq__37863_38034;
var G__38045 = chunk__37865_38035;
var G__38046 = count__37866_38036;
var G__38047 = (i__37867_38037 + (1));
seq__37863_38034 = G__38044;
chunk__37865_38035 = G__38045;
count__37866_38036 = G__38046;
i__37867_38037 = G__38047;
continue;
} else {
var temp__5825__auto___38048 = cljs.core.seq(seq__37863_38034);
if(temp__5825__auto___38048){
var seq__37863_38049__$1 = temp__5825__auto___38048;
if(cljs.core.chunked_seq_QMARK_(seq__37863_38049__$1)){
var c__5694__auto___38050 = cljs.core.chunk_first(seq__37863_38049__$1);
var G__38051 = cljs.core.chunk_rest(seq__37863_38049__$1);
var G__38052 = c__5694__auto___38050;
var G__38053 = cljs.core.count(c__5694__auto___38050);
var G__38054 = (0);
seq__37863_38034 = G__38051;
chunk__37865_38035 = G__38052;
count__37866_38036 = G__38053;
i__37867_38037 = G__38054;
continue;
} else {
var map__37872_38055 = cljs.core.first(seq__37863_38049__$1);
var map__37872_38056__$1 = cljs.core.__destructure_map(map__37872_38055);
var task_38057 = map__37872_38056__$1;
var fn_str_38058 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37872_38056__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38059 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37872_38056__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38060 = goog.getObjectByName(fn_str_38058,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38059)));

(fn_obj_38060.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38060.cljs$core$IFn$_invoke$arity$2(path,new_link_38033) : fn_obj_38060.call(null,path,new_link_38033));


var G__38061 = cljs.core.next(seq__37863_38049__$1);
var G__38062 = null;
var G__38063 = (0);
var G__38064 = (0);
seq__37863_38034 = G__38061;
chunk__37865_38035 = G__38062;
count__37866_38036 = G__38063;
i__37867_38037 = G__38064;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38031);
});})(seq__37830_38027,chunk__37834_38028,count__37835_38029,i__37836_38030,seq__37716,chunk__37718,count__37719,i__37720,new_link_38033,path_match_38032,node_38031,path,map__37715,map__37715__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38032], 0));

goog.dom.insertSiblingAfter(new_link_38033,node_38031);


var G__38065 = seq__37830_38027;
var G__38066 = chunk__37834_38028;
var G__38067 = count__37835_38029;
var G__38068 = (i__37836_38030 + (1));
seq__37830_38027 = G__38065;
chunk__37834_38028 = G__38066;
count__37835_38029 = G__38067;
i__37836_38030 = G__38068;
continue;
} else {
var G__38069 = seq__37830_38027;
var G__38070 = chunk__37834_38028;
var G__38071 = count__37835_38029;
var G__38072 = (i__37836_38030 + (1));
seq__37830_38027 = G__38069;
chunk__37834_38028 = G__38070;
count__37835_38029 = G__38071;
i__37836_38030 = G__38072;
continue;
}
} else {
var G__38073 = seq__37830_38027;
var G__38074 = chunk__37834_38028;
var G__38075 = count__37835_38029;
var G__38076 = (i__37836_38030 + (1));
seq__37830_38027 = G__38073;
chunk__37834_38028 = G__38074;
count__37835_38029 = G__38075;
i__37836_38030 = G__38076;
continue;
}
} else {
var temp__5825__auto___38077 = cljs.core.seq(seq__37830_38027);
if(temp__5825__auto___38077){
var seq__37830_38078__$1 = temp__5825__auto___38077;
if(cljs.core.chunked_seq_QMARK_(seq__37830_38078__$1)){
var c__5694__auto___38079 = cljs.core.chunk_first(seq__37830_38078__$1);
var G__38080 = cljs.core.chunk_rest(seq__37830_38078__$1);
var G__38081 = c__5694__auto___38079;
var G__38082 = cljs.core.count(c__5694__auto___38079);
var G__38083 = (0);
seq__37830_38027 = G__38080;
chunk__37834_38028 = G__38081;
count__37835_38029 = G__38082;
i__37836_38030 = G__38083;
continue;
} else {
var node_38084 = cljs.core.first(seq__37830_38078__$1);
if(cljs.core.not(node_38084.shadow$old)){
var path_match_38085 = shadow.cljs.devtools.client.browser.match_paths(node_38084.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38085)){
var new_link_38086 = (function (){var G__37873 = node_38084.cloneNode(true);
G__37873.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38085)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__37873;
})();
(node_38084.shadow$old = true);

(new_link_38086.onload = ((function (seq__37830_38027,chunk__37834_38028,count__37835_38029,i__37836_38030,seq__37716,chunk__37718,count__37719,i__37720,new_link_38086,path_match_38085,node_38084,seq__37830_38078__$1,temp__5825__auto___38077,path,map__37715,map__37715__$1,msg,updates,reload_info){
return (function (e){
var seq__37874_38087 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37876_38088 = null;
var count__37877_38089 = (0);
var i__37878_38090 = (0);
while(true){
if((i__37878_38090 < count__37877_38089)){
var map__37882_38091 = chunk__37876_38088.cljs$core$IIndexed$_nth$arity$2(null,i__37878_38090);
var map__37882_38092__$1 = cljs.core.__destructure_map(map__37882_38091);
var task_38093 = map__37882_38092__$1;
var fn_str_38094 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37882_38092__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38095 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37882_38092__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38096 = goog.getObjectByName(fn_str_38094,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38095)));

(fn_obj_38096.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38096.cljs$core$IFn$_invoke$arity$2(path,new_link_38086) : fn_obj_38096.call(null,path,new_link_38086));


var G__38097 = seq__37874_38087;
var G__38098 = chunk__37876_38088;
var G__38099 = count__37877_38089;
var G__38100 = (i__37878_38090 + (1));
seq__37874_38087 = G__38097;
chunk__37876_38088 = G__38098;
count__37877_38089 = G__38099;
i__37878_38090 = G__38100;
continue;
} else {
var temp__5825__auto___38101__$1 = cljs.core.seq(seq__37874_38087);
if(temp__5825__auto___38101__$1){
var seq__37874_38102__$1 = temp__5825__auto___38101__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37874_38102__$1)){
var c__5694__auto___38103 = cljs.core.chunk_first(seq__37874_38102__$1);
var G__38104 = cljs.core.chunk_rest(seq__37874_38102__$1);
var G__38105 = c__5694__auto___38103;
var G__38106 = cljs.core.count(c__5694__auto___38103);
var G__38107 = (0);
seq__37874_38087 = G__38104;
chunk__37876_38088 = G__38105;
count__37877_38089 = G__38106;
i__37878_38090 = G__38107;
continue;
} else {
var map__37883_38108 = cljs.core.first(seq__37874_38102__$1);
var map__37883_38109__$1 = cljs.core.__destructure_map(map__37883_38108);
var task_38110 = map__37883_38109__$1;
var fn_str_38111 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37883_38109__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38112 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37883_38109__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38113 = goog.getObjectByName(fn_str_38111,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38112)));

(fn_obj_38113.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38113.cljs$core$IFn$_invoke$arity$2(path,new_link_38086) : fn_obj_38113.call(null,path,new_link_38086));


var G__38114 = cljs.core.next(seq__37874_38102__$1);
var G__38115 = null;
var G__38116 = (0);
var G__38117 = (0);
seq__37874_38087 = G__38114;
chunk__37876_38088 = G__38115;
count__37877_38089 = G__38116;
i__37878_38090 = G__38117;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38084);
});})(seq__37830_38027,chunk__37834_38028,count__37835_38029,i__37836_38030,seq__37716,chunk__37718,count__37719,i__37720,new_link_38086,path_match_38085,node_38084,seq__37830_38078__$1,temp__5825__auto___38077,path,map__37715,map__37715__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38085], 0));

goog.dom.insertSiblingAfter(new_link_38086,node_38084);


var G__38118 = cljs.core.next(seq__37830_38078__$1);
var G__38119 = null;
var G__38120 = (0);
var G__38121 = (0);
seq__37830_38027 = G__38118;
chunk__37834_38028 = G__38119;
count__37835_38029 = G__38120;
i__37836_38030 = G__38121;
continue;
} else {
var G__38122 = cljs.core.next(seq__37830_38078__$1);
var G__38123 = null;
var G__38124 = (0);
var G__38125 = (0);
seq__37830_38027 = G__38122;
chunk__37834_38028 = G__38123;
count__37835_38029 = G__38124;
i__37836_38030 = G__38125;
continue;
}
} else {
var G__38126 = cljs.core.next(seq__37830_38078__$1);
var G__38127 = null;
var G__38128 = (0);
var G__38129 = (0);
seq__37830_38027 = G__38126;
chunk__37834_38028 = G__38127;
count__37835_38029 = G__38128;
i__37836_38030 = G__38129;
continue;
}
}
} else {
}
}
break;
}


var G__38130 = seq__37716;
var G__38131 = chunk__37718;
var G__38132 = count__37719;
var G__38133 = (i__37720 + (1));
seq__37716 = G__38130;
chunk__37718 = G__38131;
count__37719 = G__38132;
i__37720 = G__38133;
continue;
} else {
var G__38134 = seq__37716;
var G__38135 = chunk__37718;
var G__38136 = count__37719;
var G__38137 = (i__37720 + (1));
seq__37716 = G__38134;
chunk__37718 = G__38135;
count__37719 = G__38136;
i__37720 = G__38137;
continue;
}
} else {
var temp__5825__auto__ = cljs.core.seq(seq__37716);
if(temp__5825__auto__){
var seq__37716__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37716__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__37716__$1);
var G__38138 = cljs.core.chunk_rest(seq__37716__$1);
var G__38139 = c__5694__auto__;
var G__38140 = cljs.core.count(c__5694__auto__);
var G__38141 = (0);
seq__37716 = G__38138;
chunk__37718 = G__38139;
count__37719 = G__38140;
i__37720 = G__38141;
continue;
} else {
var path = cljs.core.first(seq__37716__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37884_38142 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37888_38143 = null;
var count__37889_38144 = (0);
var i__37890_38145 = (0);
while(true){
if((i__37890_38145 < count__37889_38144)){
var node_38146 = chunk__37888_38143.cljs$core$IIndexed$_nth$arity$2(null,i__37890_38145);
if(cljs.core.not(node_38146.shadow$old)){
var path_match_38147 = shadow.cljs.devtools.client.browser.match_paths(node_38146.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38147)){
var new_link_38148 = (function (){var G__37916 = node_38146.cloneNode(true);
G__37916.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38147)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__37916;
})();
(node_38146.shadow$old = true);

(new_link_38148.onload = ((function (seq__37884_38142,chunk__37888_38143,count__37889_38144,i__37890_38145,seq__37716,chunk__37718,count__37719,i__37720,new_link_38148,path_match_38147,node_38146,path,seq__37716__$1,temp__5825__auto__,map__37715,map__37715__$1,msg,updates,reload_info){
return (function (e){
var seq__37917_38149 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37919_38150 = null;
var count__37920_38151 = (0);
var i__37921_38152 = (0);
while(true){
if((i__37921_38152 < count__37920_38151)){
var map__37925_38153 = chunk__37919_38150.cljs$core$IIndexed$_nth$arity$2(null,i__37921_38152);
var map__37925_38154__$1 = cljs.core.__destructure_map(map__37925_38153);
var task_38155 = map__37925_38154__$1;
var fn_str_38156 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37925_38154__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38157 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37925_38154__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38158 = goog.getObjectByName(fn_str_38156,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38157)));

(fn_obj_38158.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38158.cljs$core$IFn$_invoke$arity$2(path,new_link_38148) : fn_obj_38158.call(null,path,new_link_38148));


var G__38159 = seq__37917_38149;
var G__38160 = chunk__37919_38150;
var G__38161 = count__37920_38151;
var G__38162 = (i__37921_38152 + (1));
seq__37917_38149 = G__38159;
chunk__37919_38150 = G__38160;
count__37920_38151 = G__38161;
i__37921_38152 = G__38162;
continue;
} else {
var temp__5825__auto___38163__$1 = cljs.core.seq(seq__37917_38149);
if(temp__5825__auto___38163__$1){
var seq__37917_38164__$1 = temp__5825__auto___38163__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37917_38164__$1)){
var c__5694__auto___38165 = cljs.core.chunk_first(seq__37917_38164__$1);
var G__38166 = cljs.core.chunk_rest(seq__37917_38164__$1);
var G__38167 = c__5694__auto___38165;
var G__38168 = cljs.core.count(c__5694__auto___38165);
var G__38169 = (0);
seq__37917_38149 = G__38166;
chunk__37919_38150 = G__38167;
count__37920_38151 = G__38168;
i__37921_38152 = G__38169;
continue;
} else {
var map__37926_38170 = cljs.core.first(seq__37917_38164__$1);
var map__37926_38171__$1 = cljs.core.__destructure_map(map__37926_38170);
var task_38172 = map__37926_38171__$1;
var fn_str_38173 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37926_38171__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38174 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37926_38171__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38175 = goog.getObjectByName(fn_str_38173,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38174)));

(fn_obj_38175.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38175.cljs$core$IFn$_invoke$arity$2(path,new_link_38148) : fn_obj_38175.call(null,path,new_link_38148));


var G__38176 = cljs.core.next(seq__37917_38164__$1);
var G__38177 = null;
var G__38178 = (0);
var G__38179 = (0);
seq__37917_38149 = G__38176;
chunk__37919_38150 = G__38177;
count__37920_38151 = G__38178;
i__37921_38152 = G__38179;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38146);
});})(seq__37884_38142,chunk__37888_38143,count__37889_38144,i__37890_38145,seq__37716,chunk__37718,count__37719,i__37720,new_link_38148,path_match_38147,node_38146,path,seq__37716__$1,temp__5825__auto__,map__37715,map__37715__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38147], 0));

goog.dom.insertSiblingAfter(new_link_38148,node_38146);


var G__38180 = seq__37884_38142;
var G__38181 = chunk__37888_38143;
var G__38182 = count__37889_38144;
var G__38183 = (i__37890_38145 + (1));
seq__37884_38142 = G__38180;
chunk__37888_38143 = G__38181;
count__37889_38144 = G__38182;
i__37890_38145 = G__38183;
continue;
} else {
var G__38184 = seq__37884_38142;
var G__38185 = chunk__37888_38143;
var G__38186 = count__37889_38144;
var G__38187 = (i__37890_38145 + (1));
seq__37884_38142 = G__38184;
chunk__37888_38143 = G__38185;
count__37889_38144 = G__38186;
i__37890_38145 = G__38187;
continue;
}
} else {
var G__38188 = seq__37884_38142;
var G__38189 = chunk__37888_38143;
var G__38190 = count__37889_38144;
var G__38191 = (i__37890_38145 + (1));
seq__37884_38142 = G__38188;
chunk__37888_38143 = G__38189;
count__37889_38144 = G__38190;
i__37890_38145 = G__38191;
continue;
}
} else {
var temp__5825__auto___38192__$1 = cljs.core.seq(seq__37884_38142);
if(temp__5825__auto___38192__$1){
var seq__37884_38193__$1 = temp__5825__auto___38192__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37884_38193__$1)){
var c__5694__auto___38194 = cljs.core.chunk_first(seq__37884_38193__$1);
var G__38195 = cljs.core.chunk_rest(seq__37884_38193__$1);
var G__38196 = c__5694__auto___38194;
var G__38197 = cljs.core.count(c__5694__auto___38194);
var G__38198 = (0);
seq__37884_38142 = G__38195;
chunk__37888_38143 = G__38196;
count__37889_38144 = G__38197;
i__37890_38145 = G__38198;
continue;
} else {
var node_38199 = cljs.core.first(seq__37884_38193__$1);
if(cljs.core.not(node_38199.shadow$old)){
var path_match_38200 = shadow.cljs.devtools.client.browser.match_paths(node_38199.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38200)){
var new_link_38201 = (function (){var G__37927 = node_38199.cloneNode(true);
G__37927.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38200)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__37927;
})();
(node_38199.shadow$old = true);

(new_link_38201.onload = ((function (seq__37884_38142,chunk__37888_38143,count__37889_38144,i__37890_38145,seq__37716,chunk__37718,count__37719,i__37720,new_link_38201,path_match_38200,node_38199,seq__37884_38193__$1,temp__5825__auto___38192__$1,path,seq__37716__$1,temp__5825__auto__,map__37715,map__37715__$1,msg,updates,reload_info){
return (function (e){
var seq__37928_38202 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37930_38203 = null;
var count__37931_38204 = (0);
var i__37932_38205 = (0);
while(true){
if((i__37932_38205 < count__37931_38204)){
var map__37936_38206 = chunk__37930_38203.cljs$core$IIndexed$_nth$arity$2(null,i__37932_38205);
var map__37936_38207__$1 = cljs.core.__destructure_map(map__37936_38206);
var task_38208 = map__37936_38207__$1;
var fn_str_38209 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37936_38207__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38210 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37936_38207__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38211 = goog.getObjectByName(fn_str_38209,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38210)));

(fn_obj_38211.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38211.cljs$core$IFn$_invoke$arity$2(path,new_link_38201) : fn_obj_38211.call(null,path,new_link_38201));


var G__38212 = seq__37928_38202;
var G__38213 = chunk__37930_38203;
var G__38214 = count__37931_38204;
var G__38215 = (i__37932_38205 + (1));
seq__37928_38202 = G__38212;
chunk__37930_38203 = G__38213;
count__37931_38204 = G__38214;
i__37932_38205 = G__38215;
continue;
} else {
var temp__5825__auto___38216__$2 = cljs.core.seq(seq__37928_38202);
if(temp__5825__auto___38216__$2){
var seq__37928_38217__$1 = temp__5825__auto___38216__$2;
if(cljs.core.chunked_seq_QMARK_(seq__37928_38217__$1)){
var c__5694__auto___38218 = cljs.core.chunk_first(seq__37928_38217__$1);
var G__38219 = cljs.core.chunk_rest(seq__37928_38217__$1);
var G__38220 = c__5694__auto___38218;
var G__38221 = cljs.core.count(c__5694__auto___38218);
var G__38222 = (0);
seq__37928_38202 = G__38219;
chunk__37930_38203 = G__38220;
count__37931_38204 = G__38221;
i__37932_38205 = G__38222;
continue;
} else {
var map__37937_38223 = cljs.core.first(seq__37928_38217__$1);
var map__37937_38224__$1 = cljs.core.__destructure_map(map__37937_38223);
var task_38225 = map__37937_38224__$1;
var fn_str_38226 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37937_38224__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38227 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37937_38224__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38228 = goog.getObjectByName(fn_str_38226,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38227)));

(fn_obj_38228.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38228.cljs$core$IFn$_invoke$arity$2(path,new_link_38201) : fn_obj_38228.call(null,path,new_link_38201));


var G__38229 = cljs.core.next(seq__37928_38217__$1);
var G__38230 = null;
var G__38231 = (0);
var G__38232 = (0);
seq__37928_38202 = G__38229;
chunk__37930_38203 = G__38230;
count__37931_38204 = G__38231;
i__37932_38205 = G__38232;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38199);
});})(seq__37884_38142,chunk__37888_38143,count__37889_38144,i__37890_38145,seq__37716,chunk__37718,count__37719,i__37720,new_link_38201,path_match_38200,node_38199,seq__37884_38193__$1,temp__5825__auto___38192__$1,path,seq__37716__$1,temp__5825__auto__,map__37715,map__37715__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38200], 0));

goog.dom.insertSiblingAfter(new_link_38201,node_38199);


var G__38233 = cljs.core.next(seq__37884_38193__$1);
var G__38234 = null;
var G__38235 = (0);
var G__38236 = (0);
seq__37884_38142 = G__38233;
chunk__37888_38143 = G__38234;
count__37889_38144 = G__38235;
i__37890_38145 = G__38236;
continue;
} else {
var G__38237 = cljs.core.next(seq__37884_38193__$1);
var G__38238 = null;
var G__38239 = (0);
var G__38240 = (0);
seq__37884_38142 = G__38237;
chunk__37888_38143 = G__38238;
count__37889_38144 = G__38239;
i__37890_38145 = G__38240;
continue;
}
} else {
var G__38241 = cljs.core.next(seq__37884_38193__$1);
var G__38242 = null;
var G__38243 = (0);
var G__38244 = (0);
seq__37884_38142 = G__38241;
chunk__37888_38143 = G__38242;
count__37889_38144 = G__38243;
i__37890_38145 = G__38244;
continue;
}
}
} else {
}
}
break;
}


var G__38245 = cljs.core.next(seq__37716__$1);
var G__38246 = null;
var G__38247 = (0);
var G__38248 = (0);
seq__37716 = G__38245;
chunk__37718 = G__38246;
count__37719 = G__38247;
i__37720 = G__38248;
continue;
} else {
var G__38249 = cljs.core.next(seq__37716__$1);
var G__38250 = null;
var G__38251 = (0);
var G__38252 = (0);
seq__37716 = G__38249;
chunk__37718 = G__38250;
count__37719 = G__38251;
i__37720 = G__38252;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null))))))))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)+" ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM)+"]"),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__37939 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__37939) : success.call(null,G__37939));
}catch (e37938){var e = e37938;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__37940,success,fail){
var map__37941 = p__37940;
var map__37941__$1 = cljs.core.__destructure_map(map__37941);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37941__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__37943 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__37943) : success.call(null,G__37943));
}catch (e37942){var e = e37942;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__37944,done,error){
var map__37945 = p__37944;
var map__37945__$1 = cljs.core.__destructure_map(map__37945);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37945__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__37946,done,error){
var map__37947 = p__37946;
var map__37947__$1 = cljs.core.__destructure_map(map__37947);
var msg = map__37947__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37947__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37947__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37947__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__37948){
var map__37949 = p__37948;
var map__37949__$1 = cljs.core.__destructure_map(map__37949);
var src = map__37949__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37949__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5160__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5160__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__37950 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__37950) : done.call(null,G__37950));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__37951){
var map__37952 = p__37951;
var map__37952__$1 = cljs.core.__destructure_map(map__37952);
var msg__$1 = map__37952__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37952__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e37953){var ex = e37953;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__37954){
var map__37955 = p__37954;
var map__37955__$1 = cljs.core.__destructure_map(map__37955);
var env = map__37955__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37955__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg((""+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))+" ready!"));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error((""+"Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."+" Is the watch for this build running?"));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__37956){
var map__37957 = p__37956;
var map__37957__$1 = cljs.core.__destructure_map(map__37957);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37957__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37957__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__37958){
var map__37959 = p__37958;
var map__37959__$1 = cljs.core.__destructure_map(map__37959);
var svc = map__37959__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37959__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
