goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__30913){
var map__30914 = p__30913;
var map__30914__$1 = cljs.core.__destructure_map(map__30914);
var runtime = map__30914__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30914__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5162__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_31273 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_31273)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__30924 = runtime;
var G__30925 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_31273);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__30924,G__30925) : shadow.remote.runtime.shared.process.call(null,G__30924,G__30925));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__30929,res){
var map__30930 = p__30929;
var map__30930__$1 = cljs.core.__destructure_map(map__30930);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30930__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30930__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__30936 = res;
var G__30936__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__30936,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__30936);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__30936__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__30936__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__30950 = arguments.length;
switch (G__30950) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__30958,msg,handlers,timeout_after_ms){
var map__30959 = p__30958;
var map__30959__$1 = cljs.core.__destructure_map(map__30959);
var runtime = map__30959__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30959__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___31306 = arguments.length;
var i__5898__auto___31307 = (0);
while(true){
if((i__5898__auto___31307 < len__5897__auto___31306)){
args__5903__auto__.push((arguments[i__5898__auto___31307]));

var G__31308 = (i__5898__auto___31307 + (1));
i__5898__auto___31307 = G__31308;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((2) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5904__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__30974,ev,args){
var map__30975 = p__30974;
var map__30975__$1 = cljs.core.__destructure_map(map__30975);
var runtime = map__30975__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30975__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__30982 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__30985 = null;
var count__30986 = (0);
var i__30987 = (0);
while(true){
if((i__30987 < count__30986)){
var ext = chunk__30985.cljs$core$IIndexed$_nth$arity$2(null,i__30987);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__31313 = seq__30982;
var G__31314 = chunk__30985;
var G__31315 = count__30986;
var G__31316 = (i__30987 + (1));
seq__30982 = G__31313;
chunk__30985 = G__31314;
count__30986 = G__31315;
i__30987 = G__31316;
continue;
} else {
var G__31317 = seq__30982;
var G__31318 = chunk__30985;
var G__31319 = count__30986;
var G__31320 = (i__30987 + (1));
seq__30982 = G__31317;
chunk__30985 = G__31318;
count__30986 = G__31319;
i__30987 = G__31320;
continue;
}
} else {
var temp__5825__auto__ = cljs.core.seq(seq__30982);
if(temp__5825__auto__){
var seq__30982__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30982__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__30982__$1);
var G__31324 = cljs.core.chunk_rest(seq__30982__$1);
var G__31325 = c__5694__auto__;
var G__31326 = cljs.core.count(c__5694__auto__);
var G__31327 = (0);
seq__30982 = G__31324;
chunk__30985 = G__31325;
count__30986 = G__31326;
i__30987 = G__31327;
continue;
} else {
var ext = cljs.core.first(seq__30982__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__31328 = cljs.core.next(seq__30982__$1);
var G__31329 = null;
var G__31330 = (0);
var G__31331 = (0);
seq__30982 = G__31328;
chunk__30985 = G__31329;
count__30986 = G__31330;
i__30987 = G__31331;
continue;
} else {
var G__31333 = cljs.core.next(seq__30982__$1);
var G__31334 = null;
var G__31335 = (0);
var G__31336 = (0);
seq__30982 = G__31333;
chunk__30985 = G__31334;
count__30986 = G__31335;
i__30987 = G__31336;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq30968){
var G__30969 = cljs.core.first(seq30968);
var seq30968__$1 = cljs.core.next(seq30968);
var G__30970 = cljs.core.first(seq30968__$1);
var seq30968__$2 = cljs.core.next(seq30968__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30969,G__30970,seq30968__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__31029,p__31030){
var map__31032 = p__31029;
var map__31032__$1 = cljs.core.__destructure_map(map__31032);
var runtime = map__31032__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31032__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__31033 = p__31030;
var map__31033__$1 = cljs.core.__destructure_map(map__31033);
var msg = map__31033__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31033__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__31041 = cljs.core.deref(state_ref);
var map__31041__$1 = cljs.core.__destructure_map(map__31041);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31041__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31041__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__31051,msg){
var map__31052 = p__31051;
var map__31052__$1 = cljs.core.__destructure_map(map__31052);
var runtime = map__31052__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31052__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__31075,key,p__31076){
var map__31077 = p__31075;
var map__31077__$1 = cljs.core.__destructure_map(map__31077);
var state = map__31077__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31077__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__31078 = p__31076;
var map__31078__$1 = cljs.core.__destructure_map(map__31078);
var spec = map__31078__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31078__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31078__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__31093,key,spec){
var map__31094 = p__31093;
var map__31094__$1 = cljs.core.__destructure_map(map__31094);
var runtime = map__31094__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31094__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5829__auto___31382 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5829__auto___31382 == null)){
} else {
var on_welcome_31385 = temp__5829__auto___31382;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_31385.cljs$core$IFn$_invoke$arity$0 ? on_welcome_31385.cljs$core$IFn$_invoke$arity$0() : on_welcome_31385.call(null));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__31109_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__31109_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__31110_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__31110_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__31111_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__31111_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__31112_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__31112_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__31113_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__31113_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__31161,key){
var map__31163 = p__31161;
var map__31163__$1 = cljs.core.__destructure_map(map__31163);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31163__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__31177,msg){
var map__31179 = p__31177;
var map__31179__$1 = cljs.core.__destructure_map(map__31179);
var runtime = map__31179__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31179__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__31187,p__31188){
var map__31189 = p__31187;
var map__31189__$1 = cljs.core.__destructure_map(map__31189);
var runtime = map__31189__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31189__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__31190 = p__31188;
var map__31190__$1 = cljs.core.__destructure_map(map__31190);
var msg = map__31190__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31190__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31190__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__31209 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__31211 = null;
var count__31212 = (0);
var i__31213 = (0);
while(true){
if((i__31213 < count__31212)){
var map__31240 = chunk__31211.cljs$core$IIndexed$_nth$arity$2(null,i__31213);
var map__31240__$1 = cljs.core.__destructure_map(map__31240);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31240__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__31427 = seq__31209;
var G__31428 = chunk__31211;
var G__31429 = count__31212;
var G__31430 = (i__31213 + (1));
seq__31209 = G__31427;
chunk__31211 = G__31428;
count__31212 = G__31429;
i__31213 = G__31430;
continue;
} else {
var G__31434 = seq__31209;
var G__31435 = chunk__31211;
var G__31436 = count__31212;
var G__31437 = (i__31213 + (1));
seq__31209 = G__31434;
chunk__31211 = G__31435;
count__31212 = G__31436;
i__31213 = G__31437;
continue;
}
} else {
var temp__5825__auto__ = cljs.core.seq(seq__31209);
if(temp__5825__auto__){
var seq__31209__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31209__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__31209__$1);
var G__31442 = cljs.core.chunk_rest(seq__31209__$1);
var G__31443 = c__5694__auto__;
var G__31444 = cljs.core.count(c__5694__auto__);
var G__31445 = (0);
seq__31209 = G__31442;
chunk__31211 = G__31443;
count__31212 = G__31444;
i__31213 = G__31445;
continue;
} else {
var map__31250 = cljs.core.first(seq__31209__$1);
var map__31250__$1 = cljs.core.__destructure_map(map__31250);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31250__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__31447 = cljs.core.next(seq__31209__$1);
var G__31448 = null;
var G__31449 = (0);
var G__31450 = (0);
seq__31209 = G__31447;
chunk__31211 = G__31448;
count__31212 = G__31449;
i__31213 = G__31450;
continue;
} else {
var G__31451 = cljs.core.next(seq__31209__$1);
var G__31452 = null;
var G__31453 = (0);
var G__31454 = (0);
seq__31209 = G__31451;
chunk__31211 = G__31452;
count__31212 = G__31453;
i__31213 = G__31454;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
