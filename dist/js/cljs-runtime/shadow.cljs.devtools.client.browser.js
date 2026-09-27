goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5903__auto__ = [];
var len__5897__auto___66177 = arguments.length;
var i__5898__auto___66178 = (0);
while(true){
if((i__5898__auto___66178 < len__5897__auto___66177)){
args__5903__auto__.push((arguments[i__5898__auto___66178]));

var G__66179 = (i__5898__auto___66178 + (1));
i__5898__auto___66178 = G__66179;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq65892){
var G__65893 = cljs.core.first(seq65892);
var seq65892__$1 = cljs.core.next(seq65892);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65893,seq65892__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__65894 = cljs.core.seq(sources);
var chunk__65895 = null;
var count__65896 = (0);
var i__65897 = (0);
while(true){
if((i__65897 < count__65896)){
var map__65904 = chunk__65895.cljs$core$IIndexed$_nth$arity$2(null,i__65897);
var map__65904__$1 = cljs.core.__destructure_map(map__65904);
var src = map__65904__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65904__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65904__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65904__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65904__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js)+"\n//# sourceURL="+cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)));
}catch (e65905){var e_66180 = e65905;
if(shadow.cljs.devtools.client.env.log){
console.error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)),e_66180);
} else {
}

throw (new Error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_66180.message))));
}

var G__66181 = seq__65894;
var G__66182 = chunk__65895;
var G__66183 = count__65896;
var G__66184 = (i__65897 + (1));
seq__65894 = G__66181;
chunk__65895 = G__66182;
count__65896 = G__66183;
i__65897 = G__66184;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65894);
if(temp__5825__auto__){
var seq__65894__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65894__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__65894__$1);
var G__66185 = cljs.core.chunk_rest(seq__65894__$1);
var G__66186 = c__5694__auto__;
var G__66187 = cljs.core.count(c__5694__auto__);
var G__66188 = (0);
seq__65894 = G__66185;
chunk__65895 = G__66186;
count__65896 = G__66187;
i__65897 = G__66188;
continue;
} else {
var map__65906 = cljs.core.first(seq__65894__$1);
var map__65906__$1 = cljs.core.__destructure_map(map__65906);
var src = map__65906__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65906__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65906__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65906__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65906__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js)+"\n//# sourceURL="+cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)));
}catch (e65907){var e_66189 = e65907;
if(shadow.cljs.devtools.client.env.log){
console.error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)),e_66189);
} else {
}

throw (new Error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_66189.message))));
}

var G__66190 = cljs.core.next(seq__65894__$1);
var G__66191 = null;
var G__66192 = (0);
var G__66193 = (0);
seq__65894 = G__66190;
chunk__65895 = G__66191;
count__65896 = G__66192;
i__65897 = G__66193;
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
var seq__65908 = cljs.core.seq(js_requires);
var chunk__65909 = null;
var count__65910 = (0);
var i__65911 = (0);
while(true){
if((i__65911 < count__65910)){
var js_ns = chunk__65909.cljs$core$IIndexed$_nth$arity$2(null,i__65911);
var require_str_66194 = (""+"var "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+" = shadow.js.require(\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+"\");");
shadow.cljs.devtools.client.browser.script_eval(require_str_66194);


var G__66195 = seq__65908;
var G__66196 = chunk__65909;
var G__66197 = count__65910;
var G__66198 = (i__65911 + (1));
seq__65908 = G__66195;
chunk__65909 = G__66196;
count__65910 = G__66197;
i__65911 = G__66198;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65908);
if(temp__5825__auto__){
var seq__65908__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65908__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__65908__$1);
var G__66199 = cljs.core.chunk_rest(seq__65908__$1);
var G__66200 = c__5694__auto__;
var G__66201 = cljs.core.count(c__5694__auto__);
var G__66202 = (0);
seq__65908 = G__66199;
chunk__65909 = G__66200;
count__65910 = G__66201;
i__65911 = G__66202;
continue;
} else {
var js_ns = cljs.core.first(seq__65908__$1);
var require_str_66203 = (""+"var "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+" = shadow.js.require(\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+"\");");
shadow.cljs.devtools.client.browser.script_eval(require_str_66203);


var G__66204 = cljs.core.next(seq__65908__$1);
var G__66205 = null;
var G__66206 = (0);
var G__66207 = (0);
seq__65908 = G__66204;
chunk__65909 = G__66205;
count__65910 = G__66206;
i__65911 = G__66207;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__65913){
var map__65914 = p__65913;
var map__65914__$1 = cljs.core.__destructure_map(map__65914);
var msg = map__65914__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65914__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65914__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5649__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__65915(s__65916){
return (new cljs.core.LazySeq(null,(function (){
var s__65916__$1 = s__65916;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__65916__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var map__65921 = cljs.core.first(xs__6385__auto__);
var map__65921__$1 = cljs.core.__destructure_map(map__65921);
var src = map__65921__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65921__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65921__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5645__auto__ = ((function (s__65916__$1,map__65921,map__65921__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__65914,map__65914__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__65915_$_iter__65917(s__65918){
return (new cljs.core.LazySeq(null,((function (s__65916__$1,map__65921,map__65921__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__65914,map__65914__$1,msg,info,reload_info){
return (function (){
var s__65918__$1 = s__65918;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__65918__$1);
if(temp__5825__auto____$1){
var s__65918__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__65918__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__65918__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__65920 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__65919 = (0);
while(true){
if((i__65919 < size__5648__auto__)){
var warning = cljs.core._nth(c__5647__auto__,i__65919);
cljs.core.chunk_append(b__65920,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__66208 = (i__65919 + (1));
i__65919 = G__66208;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65920),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__65915_$_iter__65917(cljs.core.chunk_rest(s__65918__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65920),null);
}
} else {
var warning = cljs.core.first(s__65918__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__65915_$_iter__65917(cljs.core.rest(s__65918__$2)));
}
} else {
return null;
}
break;
}
});})(s__65916__$1,map__65921,map__65921__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__65914,map__65914__$1,msg,info,reload_info))
,null,null));
});})(s__65916__$1,map__65921,map__65921__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__65914,map__65914__$1,msg,info,reload_info))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__(warnings));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__65915(cljs.core.rest(s__65916__$1)));
} else {
var G__66209 = cljs.core.rest(s__65916__$1);
s__65916__$1 = G__66209;
continue;
}
} else {
var G__66210 = cljs.core.rest(s__65916__$1);
s__65916__$1 = G__66210;
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
var seq__65922_66211 = cljs.core.seq(warnings);
var chunk__65923_66212 = null;
var count__65924_66213 = (0);
var i__65925_66214 = (0);
while(true){
if((i__65925_66214 < count__65924_66213)){
var map__65928_66215 = chunk__65923_66212.cljs$core$IIndexed$_nth$arity$2(null,i__65925_66214);
var map__65928_66216__$1 = cljs.core.__destructure_map(map__65928_66215);
var w_66217 = map__65928_66216__$1;
var msg_66218__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65928_66216__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_66219 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65928_66216__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_66220 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65928_66216__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_66221 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65928_66216__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn((""+"BUILD-WARNING in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_66221)+" at ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_66219)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_66220)+"]\n\t"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_66218__$1)));


var G__66222 = seq__65922_66211;
var G__66223 = chunk__65923_66212;
var G__66224 = count__65924_66213;
var G__66225 = (i__65925_66214 + (1));
seq__65922_66211 = G__66222;
chunk__65923_66212 = G__66223;
count__65924_66213 = G__66224;
i__65925_66214 = G__66225;
continue;
} else {
var temp__5825__auto___66226 = cljs.core.seq(seq__65922_66211);
if(temp__5825__auto___66226){
var seq__65922_66227__$1 = temp__5825__auto___66226;
if(cljs.core.chunked_seq_QMARK_(seq__65922_66227__$1)){
var c__5694__auto___66228 = cljs.core.chunk_first(seq__65922_66227__$1);
var G__66229 = cljs.core.chunk_rest(seq__65922_66227__$1);
var G__66230 = c__5694__auto___66228;
var G__66231 = cljs.core.count(c__5694__auto___66228);
var G__66232 = (0);
seq__65922_66211 = G__66229;
chunk__65923_66212 = G__66230;
count__65924_66213 = G__66231;
i__65925_66214 = G__66232;
continue;
} else {
var map__65929_66233 = cljs.core.first(seq__65922_66227__$1);
var map__65929_66234__$1 = cljs.core.__destructure_map(map__65929_66233);
var w_66235 = map__65929_66234__$1;
var msg_66236__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65929_66234__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_66237 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65929_66234__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_66238 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65929_66234__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_66239 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65929_66234__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn((""+"BUILD-WARNING in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_66239)+" at ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_66237)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_66238)+"]\n\t"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_66236__$1)));


var G__66240 = cljs.core.next(seq__65922_66227__$1);
var G__66241 = null;
var G__66242 = (0);
var G__66243 = (0);
seq__65922_66211 = G__66240;
chunk__65923_66212 = G__66241;
count__65924_66213 = G__66242;
i__65925_66214 = G__66243;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__65912_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__65912_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__65930 = node_uri;
G__65930.setQuery(null);

G__65930.setPath(new$);

return G__65930;
})()));
} else {
return and__5160__auto____$1;
}
} else {
return and__5160__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__65931){
var map__65932 = p__65931;
var map__65932__$1 = cljs.core.__destructure_map(map__65932);
var msg = map__65932__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65932__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65932__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__65933 = cljs.core.seq(updates);
var chunk__65935 = null;
var count__65936 = (0);
var i__65937 = (0);
while(true){
if((i__65937 < count__65936)){
var path = chunk__65935.cljs$core$IIndexed$_nth$arity$2(null,i__65937);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__66047_66244 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__66051_66245 = null;
var count__66052_66246 = (0);
var i__66053_66247 = (0);
while(true){
if((i__66053_66247 < count__66052_66246)){
var node_66248 = chunk__66051_66245.cljs$core$IIndexed$_nth$arity$2(null,i__66053_66247);
if(cljs.core.not(node_66248.shadow$old)){
var path_match_66249 = shadow.cljs.devtools.client.browser.match_paths(node_66248.getAttribute("href"),path);
if(cljs.core.truth_(path_match_66249)){
var new_link_66250 = (function (){var G__66079 = node_66248.cloneNode(true);
G__66079.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_66249)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__66079;
})();
(node_66248.shadow$old = true);

(new_link_66250.onload = ((function (seq__66047_66244,chunk__66051_66245,count__66052_66246,i__66053_66247,seq__65933,chunk__65935,count__65936,i__65937,new_link_66250,path_match_66249,node_66248,path,map__65932,map__65932__$1,msg,updates,reload_info){
return (function (e){
var seq__66080_66251 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__66082_66252 = null;
var count__66083_66253 = (0);
var i__66084_66254 = (0);
while(true){
if((i__66084_66254 < count__66083_66253)){
var map__66088_66255 = chunk__66082_66252.cljs$core$IIndexed$_nth$arity$2(null,i__66084_66254);
var map__66088_66256__$1 = cljs.core.__destructure_map(map__66088_66255);
var task_66257 = map__66088_66256__$1;
var fn_str_66258 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66088_66256__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_66259 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66088_66256__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_66260 = goog.getObjectByName(fn_str_66258,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_66259)));

(fn_obj_66260.cljs$core$IFn$_invoke$arity$2 ? fn_obj_66260.cljs$core$IFn$_invoke$arity$2(path,new_link_66250) : fn_obj_66260.call(null,path,new_link_66250));


var G__66261 = seq__66080_66251;
var G__66262 = chunk__66082_66252;
var G__66263 = count__66083_66253;
var G__66264 = (i__66084_66254 + (1));
seq__66080_66251 = G__66261;
chunk__66082_66252 = G__66262;
count__66083_66253 = G__66263;
i__66084_66254 = G__66264;
continue;
} else {
var temp__5825__auto___66265 = cljs.core.seq(seq__66080_66251);
if(temp__5825__auto___66265){
var seq__66080_66266__$1 = temp__5825__auto___66265;
if(cljs.core.chunked_seq_QMARK_(seq__66080_66266__$1)){
var c__5694__auto___66267 = cljs.core.chunk_first(seq__66080_66266__$1);
var G__66268 = cljs.core.chunk_rest(seq__66080_66266__$1);
var G__66269 = c__5694__auto___66267;
var G__66270 = cljs.core.count(c__5694__auto___66267);
var G__66271 = (0);
seq__66080_66251 = G__66268;
chunk__66082_66252 = G__66269;
count__66083_66253 = G__66270;
i__66084_66254 = G__66271;
continue;
} else {
var map__66089_66272 = cljs.core.first(seq__66080_66266__$1);
var map__66089_66273__$1 = cljs.core.__destructure_map(map__66089_66272);
var task_66274 = map__66089_66273__$1;
var fn_str_66275 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66089_66273__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_66276 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66089_66273__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_66277 = goog.getObjectByName(fn_str_66275,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_66276)));

(fn_obj_66277.cljs$core$IFn$_invoke$arity$2 ? fn_obj_66277.cljs$core$IFn$_invoke$arity$2(path,new_link_66250) : fn_obj_66277.call(null,path,new_link_66250));


var G__66278 = cljs.core.next(seq__66080_66266__$1);
var G__66279 = null;
var G__66280 = (0);
var G__66281 = (0);
seq__66080_66251 = G__66278;
chunk__66082_66252 = G__66279;
count__66083_66253 = G__66280;
i__66084_66254 = G__66281;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_66248);
});})(seq__66047_66244,chunk__66051_66245,count__66052_66246,i__66053_66247,seq__65933,chunk__65935,count__65936,i__65937,new_link_66250,path_match_66249,node_66248,path,map__65932,map__65932__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_66249], 0));

goog.dom.insertSiblingAfter(new_link_66250,node_66248);


var G__66282 = seq__66047_66244;
var G__66283 = chunk__66051_66245;
var G__66284 = count__66052_66246;
var G__66285 = (i__66053_66247 + (1));
seq__66047_66244 = G__66282;
chunk__66051_66245 = G__66283;
count__66052_66246 = G__66284;
i__66053_66247 = G__66285;
continue;
} else {
var G__66286 = seq__66047_66244;
var G__66287 = chunk__66051_66245;
var G__66288 = count__66052_66246;
var G__66289 = (i__66053_66247 + (1));
seq__66047_66244 = G__66286;
chunk__66051_66245 = G__66287;
count__66052_66246 = G__66288;
i__66053_66247 = G__66289;
continue;
}
} else {
var G__66290 = seq__66047_66244;
var G__66291 = chunk__66051_66245;
var G__66292 = count__66052_66246;
var G__66293 = (i__66053_66247 + (1));
seq__66047_66244 = G__66290;
chunk__66051_66245 = G__66291;
count__66052_66246 = G__66292;
i__66053_66247 = G__66293;
continue;
}
} else {
var temp__5825__auto___66294 = cljs.core.seq(seq__66047_66244);
if(temp__5825__auto___66294){
var seq__66047_66295__$1 = temp__5825__auto___66294;
if(cljs.core.chunked_seq_QMARK_(seq__66047_66295__$1)){
var c__5694__auto___66296 = cljs.core.chunk_first(seq__66047_66295__$1);
var G__66297 = cljs.core.chunk_rest(seq__66047_66295__$1);
var G__66298 = c__5694__auto___66296;
var G__66299 = cljs.core.count(c__5694__auto___66296);
var G__66300 = (0);
seq__66047_66244 = G__66297;
chunk__66051_66245 = G__66298;
count__66052_66246 = G__66299;
i__66053_66247 = G__66300;
continue;
} else {
var node_66301 = cljs.core.first(seq__66047_66295__$1);
if(cljs.core.not(node_66301.shadow$old)){
var path_match_66302 = shadow.cljs.devtools.client.browser.match_paths(node_66301.getAttribute("href"),path);
if(cljs.core.truth_(path_match_66302)){
var new_link_66303 = (function (){var G__66090 = node_66301.cloneNode(true);
G__66090.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_66302)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__66090;
})();
(node_66301.shadow$old = true);

(new_link_66303.onload = ((function (seq__66047_66244,chunk__66051_66245,count__66052_66246,i__66053_66247,seq__65933,chunk__65935,count__65936,i__65937,new_link_66303,path_match_66302,node_66301,seq__66047_66295__$1,temp__5825__auto___66294,path,map__65932,map__65932__$1,msg,updates,reload_info){
return (function (e){
var seq__66091_66304 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__66093_66305 = null;
var count__66094_66306 = (0);
var i__66095_66307 = (0);
while(true){
if((i__66095_66307 < count__66094_66306)){
var map__66099_66308 = chunk__66093_66305.cljs$core$IIndexed$_nth$arity$2(null,i__66095_66307);
var map__66099_66309__$1 = cljs.core.__destructure_map(map__66099_66308);
var task_66310 = map__66099_66309__$1;
var fn_str_66311 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66099_66309__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_66312 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66099_66309__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_66313 = goog.getObjectByName(fn_str_66311,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_66312)));

(fn_obj_66313.cljs$core$IFn$_invoke$arity$2 ? fn_obj_66313.cljs$core$IFn$_invoke$arity$2(path,new_link_66303) : fn_obj_66313.call(null,path,new_link_66303));


var G__66314 = seq__66091_66304;
var G__66315 = chunk__66093_66305;
var G__66316 = count__66094_66306;
var G__66317 = (i__66095_66307 + (1));
seq__66091_66304 = G__66314;
chunk__66093_66305 = G__66315;
count__66094_66306 = G__66316;
i__66095_66307 = G__66317;
continue;
} else {
var temp__5825__auto___66318__$1 = cljs.core.seq(seq__66091_66304);
if(temp__5825__auto___66318__$1){
var seq__66091_66319__$1 = temp__5825__auto___66318__$1;
if(cljs.core.chunked_seq_QMARK_(seq__66091_66319__$1)){
var c__5694__auto___66320 = cljs.core.chunk_first(seq__66091_66319__$1);
var G__66321 = cljs.core.chunk_rest(seq__66091_66319__$1);
var G__66322 = c__5694__auto___66320;
var G__66323 = cljs.core.count(c__5694__auto___66320);
var G__66324 = (0);
seq__66091_66304 = G__66321;
chunk__66093_66305 = G__66322;
count__66094_66306 = G__66323;
i__66095_66307 = G__66324;
continue;
} else {
var map__66100_66325 = cljs.core.first(seq__66091_66319__$1);
var map__66100_66326__$1 = cljs.core.__destructure_map(map__66100_66325);
var task_66327 = map__66100_66326__$1;
var fn_str_66328 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66100_66326__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_66329 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66100_66326__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_66330 = goog.getObjectByName(fn_str_66328,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_66329)));

(fn_obj_66330.cljs$core$IFn$_invoke$arity$2 ? fn_obj_66330.cljs$core$IFn$_invoke$arity$2(path,new_link_66303) : fn_obj_66330.call(null,path,new_link_66303));


var G__66331 = cljs.core.next(seq__66091_66319__$1);
var G__66332 = null;
var G__66333 = (0);
var G__66334 = (0);
seq__66091_66304 = G__66331;
chunk__66093_66305 = G__66332;
count__66094_66306 = G__66333;
i__66095_66307 = G__66334;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_66301);
});})(seq__66047_66244,chunk__66051_66245,count__66052_66246,i__66053_66247,seq__65933,chunk__65935,count__65936,i__65937,new_link_66303,path_match_66302,node_66301,seq__66047_66295__$1,temp__5825__auto___66294,path,map__65932,map__65932__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_66302], 0));

goog.dom.insertSiblingAfter(new_link_66303,node_66301);


var G__66335 = cljs.core.next(seq__66047_66295__$1);
var G__66336 = null;
var G__66337 = (0);
var G__66338 = (0);
seq__66047_66244 = G__66335;
chunk__66051_66245 = G__66336;
count__66052_66246 = G__66337;
i__66053_66247 = G__66338;
continue;
} else {
var G__66339 = cljs.core.next(seq__66047_66295__$1);
var G__66340 = null;
var G__66341 = (0);
var G__66342 = (0);
seq__66047_66244 = G__66339;
chunk__66051_66245 = G__66340;
count__66052_66246 = G__66341;
i__66053_66247 = G__66342;
continue;
}
} else {
var G__66343 = cljs.core.next(seq__66047_66295__$1);
var G__66344 = null;
var G__66345 = (0);
var G__66346 = (0);
seq__66047_66244 = G__66343;
chunk__66051_66245 = G__66344;
count__66052_66246 = G__66345;
i__66053_66247 = G__66346;
continue;
}
}
} else {
}
}
break;
}


var G__66347 = seq__65933;
var G__66348 = chunk__65935;
var G__66349 = count__65936;
var G__66350 = (i__65937 + (1));
seq__65933 = G__66347;
chunk__65935 = G__66348;
count__65936 = G__66349;
i__65937 = G__66350;
continue;
} else {
var G__66351 = seq__65933;
var G__66352 = chunk__65935;
var G__66353 = count__65936;
var G__66354 = (i__65937 + (1));
seq__65933 = G__66351;
chunk__65935 = G__66352;
count__65936 = G__66353;
i__65937 = G__66354;
continue;
}
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65933);
if(temp__5825__auto__){
var seq__65933__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65933__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__65933__$1);
var G__66355 = cljs.core.chunk_rest(seq__65933__$1);
var G__66356 = c__5694__auto__;
var G__66357 = cljs.core.count(c__5694__auto__);
var G__66358 = (0);
seq__65933 = G__66355;
chunk__65935 = G__66356;
count__65936 = G__66357;
i__65937 = G__66358;
continue;
} else {
var path = cljs.core.first(seq__65933__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__66101_66359 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__66105_66360 = null;
var count__66106_66361 = (0);
var i__66107_66362 = (0);
while(true){
if((i__66107_66362 < count__66106_66361)){
var node_66363 = chunk__66105_66360.cljs$core$IIndexed$_nth$arity$2(null,i__66107_66362);
if(cljs.core.not(node_66363.shadow$old)){
var path_match_66364 = shadow.cljs.devtools.client.browser.match_paths(node_66363.getAttribute("href"),path);
if(cljs.core.truth_(path_match_66364)){
var new_link_66365 = (function (){var G__66133 = node_66363.cloneNode(true);
G__66133.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_66364)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__66133;
})();
(node_66363.shadow$old = true);

(new_link_66365.onload = ((function (seq__66101_66359,chunk__66105_66360,count__66106_66361,i__66107_66362,seq__65933,chunk__65935,count__65936,i__65937,new_link_66365,path_match_66364,node_66363,path,seq__65933__$1,temp__5825__auto__,map__65932,map__65932__$1,msg,updates,reload_info){
return (function (e){
var seq__66134_66366 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__66136_66367 = null;
var count__66137_66368 = (0);
var i__66138_66369 = (0);
while(true){
if((i__66138_66369 < count__66137_66368)){
var map__66142_66370 = chunk__66136_66367.cljs$core$IIndexed$_nth$arity$2(null,i__66138_66369);
var map__66142_66371__$1 = cljs.core.__destructure_map(map__66142_66370);
var task_66372 = map__66142_66371__$1;
var fn_str_66373 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66142_66371__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_66374 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66142_66371__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_66375 = goog.getObjectByName(fn_str_66373,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_66374)));

(fn_obj_66375.cljs$core$IFn$_invoke$arity$2 ? fn_obj_66375.cljs$core$IFn$_invoke$arity$2(path,new_link_66365) : fn_obj_66375.call(null,path,new_link_66365));


var G__66376 = seq__66134_66366;
var G__66377 = chunk__66136_66367;
var G__66378 = count__66137_66368;
var G__66379 = (i__66138_66369 + (1));
seq__66134_66366 = G__66376;
chunk__66136_66367 = G__66377;
count__66137_66368 = G__66378;
i__66138_66369 = G__66379;
continue;
} else {
var temp__5825__auto___66380__$1 = cljs.core.seq(seq__66134_66366);
if(temp__5825__auto___66380__$1){
var seq__66134_66381__$1 = temp__5825__auto___66380__$1;
if(cljs.core.chunked_seq_QMARK_(seq__66134_66381__$1)){
var c__5694__auto___66382 = cljs.core.chunk_first(seq__66134_66381__$1);
var G__66383 = cljs.core.chunk_rest(seq__66134_66381__$1);
var G__66384 = c__5694__auto___66382;
var G__66385 = cljs.core.count(c__5694__auto___66382);
var G__66386 = (0);
seq__66134_66366 = G__66383;
chunk__66136_66367 = G__66384;
count__66137_66368 = G__66385;
i__66138_66369 = G__66386;
continue;
} else {
var map__66143_66387 = cljs.core.first(seq__66134_66381__$1);
var map__66143_66388__$1 = cljs.core.__destructure_map(map__66143_66387);
var task_66389 = map__66143_66388__$1;
var fn_str_66390 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66143_66388__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_66391 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66143_66388__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_66392 = goog.getObjectByName(fn_str_66390,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_66391)));

(fn_obj_66392.cljs$core$IFn$_invoke$arity$2 ? fn_obj_66392.cljs$core$IFn$_invoke$arity$2(path,new_link_66365) : fn_obj_66392.call(null,path,new_link_66365));


var G__66393 = cljs.core.next(seq__66134_66381__$1);
var G__66394 = null;
var G__66395 = (0);
var G__66396 = (0);
seq__66134_66366 = G__66393;
chunk__66136_66367 = G__66394;
count__66137_66368 = G__66395;
i__66138_66369 = G__66396;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_66363);
});})(seq__66101_66359,chunk__66105_66360,count__66106_66361,i__66107_66362,seq__65933,chunk__65935,count__65936,i__65937,new_link_66365,path_match_66364,node_66363,path,seq__65933__$1,temp__5825__auto__,map__65932,map__65932__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_66364], 0));

goog.dom.insertSiblingAfter(new_link_66365,node_66363);


var G__66397 = seq__66101_66359;
var G__66398 = chunk__66105_66360;
var G__66399 = count__66106_66361;
var G__66400 = (i__66107_66362 + (1));
seq__66101_66359 = G__66397;
chunk__66105_66360 = G__66398;
count__66106_66361 = G__66399;
i__66107_66362 = G__66400;
continue;
} else {
var G__66401 = seq__66101_66359;
var G__66402 = chunk__66105_66360;
var G__66403 = count__66106_66361;
var G__66404 = (i__66107_66362 + (1));
seq__66101_66359 = G__66401;
chunk__66105_66360 = G__66402;
count__66106_66361 = G__66403;
i__66107_66362 = G__66404;
continue;
}
} else {
var G__66405 = seq__66101_66359;
var G__66406 = chunk__66105_66360;
var G__66407 = count__66106_66361;
var G__66408 = (i__66107_66362 + (1));
seq__66101_66359 = G__66405;
chunk__66105_66360 = G__66406;
count__66106_66361 = G__66407;
i__66107_66362 = G__66408;
continue;
}
} else {
var temp__5825__auto___66409__$1 = cljs.core.seq(seq__66101_66359);
if(temp__5825__auto___66409__$1){
var seq__66101_66410__$1 = temp__5825__auto___66409__$1;
if(cljs.core.chunked_seq_QMARK_(seq__66101_66410__$1)){
var c__5694__auto___66411 = cljs.core.chunk_first(seq__66101_66410__$1);
var G__66412 = cljs.core.chunk_rest(seq__66101_66410__$1);
var G__66413 = c__5694__auto___66411;
var G__66414 = cljs.core.count(c__5694__auto___66411);
var G__66415 = (0);
seq__66101_66359 = G__66412;
chunk__66105_66360 = G__66413;
count__66106_66361 = G__66414;
i__66107_66362 = G__66415;
continue;
} else {
var node_66416 = cljs.core.first(seq__66101_66410__$1);
if(cljs.core.not(node_66416.shadow$old)){
var path_match_66417 = shadow.cljs.devtools.client.browser.match_paths(node_66416.getAttribute("href"),path);
if(cljs.core.truth_(path_match_66417)){
var new_link_66418 = (function (){var G__66144 = node_66416.cloneNode(true);
G__66144.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_66417)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__66144;
})();
(node_66416.shadow$old = true);

(new_link_66418.onload = ((function (seq__66101_66359,chunk__66105_66360,count__66106_66361,i__66107_66362,seq__65933,chunk__65935,count__65936,i__65937,new_link_66418,path_match_66417,node_66416,seq__66101_66410__$1,temp__5825__auto___66409__$1,path,seq__65933__$1,temp__5825__auto__,map__65932,map__65932__$1,msg,updates,reload_info){
return (function (e){
var seq__66145_66419 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__66147_66420 = null;
var count__66148_66421 = (0);
var i__66149_66422 = (0);
while(true){
if((i__66149_66422 < count__66148_66421)){
var map__66153_66423 = chunk__66147_66420.cljs$core$IIndexed$_nth$arity$2(null,i__66149_66422);
var map__66153_66424__$1 = cljs.core.__destructure_map(map__66153_66423);
var task_66425 = map__66153_66424__$1;
var fn_str_66426 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66153_66424__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_66427 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66153_66424__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_66428 = goog.getObjectByName(fn_str_66426,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_66427)));

(fn_obj_66428.cljs$core$IFn$_invoke$arity$2 ? fn_obj_66428.cljs$core$IFn$_invoke$arity$2(path,new_link_66418) : fn_obj_66428.call(null,path,new_link_66418));


var G__66429 = seq__66145_66419;
var G__66430 = chunk__66147_66420;
var G__66431 = count__66148_66421;
var G__66432 = (i__66149_66422 + (1));
seq__66145_66419 = G__66429;
chunk__66147_66420 = G__66430;
count__66148_66421 = G__66431;
i__66149_66422 = G__66432;
continue;
} else {
var temp__5825__auto___66433__$2 = cljs.core.seq(seq__66145_66419);
if(temp__5825__auto___66433__$2){
var seq__66145_66434__$1 = temp__5825__auto___66433__$2;
if(cljs.core.chunked_seq_QMARK_(seq__66145_66434__$1)){
var c__5694__auto___66435 = cljs.core.chunk_first(seq__66145_66434__$1);
var G__66436 = cljs.core.chunk_rest(seq__66145_66434__$1);
var G__66437 = c__5694__auto___66435;
var G__66438 = cljs.core.count(c__5694__auto___66435);
var G__66439 = (0);
seq__66145_66419 = G__66436;
chunk__66147_66420 = G__66437;
count__66148_66421 = G__66438;
i__66149_66422 = G__66439;
continue;
} else {
var map__66154_66440 = cljs.core.first(seq__66145_66434__$1);
var map__66154_66441__$1 = cljs.core.__destructure_map(map__66154_66440);
var task_66442 = map__66154_66441__$1;
var fn_str_66443 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66154_66441__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_66444 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66154_66441__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_66445 = goog.getObjectByName(fn_str_66443,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_66444)));

(fn_obj_66445.cljs$core$IFn$_invoke$arity$2 ? fn_obj_66445.cljs$core$IFn$_invoke$arity$2(path,new_link_66418) : fn_obj_66445.call(null,path,new_link_66418));


var G__66446 = cljs.core.next(seq__66145_66434__$1);
var G__66447 = null;
var G__66448 = (0);
var G__66449 = (0);
seq__66145_66419 = G__66446;
chunk__66147_66420 = G__66447;
count__66148_66421 = G__66448;
i__66149_66422 = G__66449;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_66416);
});})(seq__66101_66359,chunk__66105_66360,count__66106_66361,i__66107_66362,seq__65933,chunk__65935,count__65936,i__65937,new_link_66418,path_match_66417,node_66416,seq__66101_66410__$1,temp__5825__auto___66409__$1,path,seq__65933__$1,temp__5825__auto__,map__65932,map__65932__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_66417], 0));

goog.dom.insertSiblingAfter(new_link_66418,node_66416);


var G__66450 = cljs.core.next(seq__66101_66410__$1);
var G__66451 = null;
var G__66452 = (0);
var G__66453 = (0);
seq__66101_66359 = G__66450;
chunk__66105_66360 = G__66451;
count__66106_66361 = G__66452;
i__66107_66362 = G__66453;
continue;
} else {
var G__66454 = cljs.core.next(seq__66101_66410__$1);
var G__66455 = null;
var G__66456 = (0);
var G__66457 = (0);
seq__66101_66359 = G__66454;
chunk__66105_66360 = G__66455;
count__66106_66361 = G__66456;
i__66107_66362 = G__66457;
continue;
}
} else {
var G__66458 = cljs.core.next(seq__66101_66410__$1);
var G__66459 = null;
var G__66460 = (0);
var G__66461 = (0);
seq__66101_66359 = G__66458;
chunk__66105_66360 = G__66459;
count__66106_66361 = G__66460;
i__66107_66362 = G__66461;
continue;
}
}
} else {
}
}
break;
}


var G__66462 = cljs.core.next(seq__65933__$1);
var G__66463 = null;
var G__66464 = (0);
var G__66465 = (0);
seq__65933 = G__66462;
chunk__65935 = G__66463;
count__65936 = G__66464;
i__65937 = G__66465;
continue;
} else {
var G__66466 = cljs.core.next(seq__65933__$1);
var G__66467 = null;
var G__66468 = (0);
var G__66469 = (0);
seq__65933 = G__66466;
chunk__65935 = G__66467;
count__65936 = G__66468;
i__65937 = G__66469;
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
try{var G__66156 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__66156) : success.call(null,G__66156));
}catch (e66155){var e = e66155;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__66157,success,fail){
var map__66158 = p__66157;
var map__66158__$1 = cljs.core.__destructure_map(map__66158);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66158__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__66160 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__66160) : success.call(null,G__66160));
}catch (e66159){var e = e66159;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__66161,done,error){
var map__66162 = p__66161;
var map__66162__$1 = cljs.core.__destructure_map(map__66162);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66162__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__66163,done,error){
var map__66164 = p__66163;
var map__66164__$1 = cljs.core.__destructure_map(map__66164);
var msg = map__66164__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66164__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66164__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66164__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__66165){
var map__66166 = p__66165;
var map__66166__$1 = cljs.core.__destructure_map(map__66166);
var src = map__66166__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66166__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5160__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5160__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__66167 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__66167) : done.call(null,G__66167));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__66168){
var map__66169 = p__66168;
var map__66169__$1 = cljs.core.__destructure_map(map__66169);
var msg__$1 = map__66169__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66169__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e66170){var ex = e66170;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__66171){
var map__66172 = p__66171;
var map__66172__$1 = cljs.core.__destructure_map(map__66172);
var env = map__66172__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66172__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__66173){
var map__66174 = p__66173;
var map__66174__$1 = cljs.core.__destructure_map(map__66174);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66174__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66174__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__66175){
var map__66176 = p__66175;
var map__66176__$1 = cljs.core.__destructure_map(map__66176);
var svc = map__66176__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66176__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
