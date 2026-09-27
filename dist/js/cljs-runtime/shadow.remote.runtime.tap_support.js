goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__63586,p__63587){
var map__63588 = p__63586;
var map__63588__$1 = cljs.core.__destructure_map(map__63588);
var svc = map__63588__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63588__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63588__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63588__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__63589 = p__63587;
var map__63589__$1 = cljs.core.__destructure_map(map__63589);
var msg = map__63589__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63589__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63589__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63589__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63589__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__63597,p__63598){
var map__63600 = p__63597;
var map__63600__$1 = cljs.core.__destructure_map(map__63600);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63600__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__63601 = p__63598;
var map__63601__$1 = cljs.core.__destructure_map(map__63601);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63601__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__63609,p__63610){
var map__63613 = p__63609;
var map__63613__$1 = cljs.core.__destructure_map(map__63613);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63613__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63613__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__63614 = p__63610;
var map__63614__$1 = cljs.core.__destructure_map(map__63614);
var msg = map__63614__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63614__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__63621,tid){
var map__63623 = p__63621;
var map__63623__$1 = cljs.core.__destructure_map(map__63623);
var svc = map__63623__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63623__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__63631 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__63632 = null;
var count__63633 = (0);
var i__63634 = (0);
while(true){
if((i__63634 < count__63633)){
var vec__63645 = chunk__63632.cljs$core$IIndexed$_nth$arity$2(null,i__63634);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63645,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63645,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__63658 = seq__63631;
var G__63659 = chunk__63632;
var G__63660 = count__63633;
var G__63661 = (i__63634 + (1));
seq__63631 = G__63658;
chunk__63632 = G__63659;
count__63633 = G__63660;
i__63634 = G__63661;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__63631);
if(temp__5825__auto__){
var seq__63631__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63631__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__63631__$1);
var G__63662 = cljs.core.chunk_rest(seq__63631__$1);
var G__63663 = c__5694__auto__;
var G__63664 = cljs.core.count(c__5694__auto__);
var G__63665 = (0);
seq__63631 = G__63662;
chunk__63632 = G__63663;
count__63633 = G__63664;
i__63634 = G__63665;
continue;
} else {
var vec__63650 = cljs.core.first(seq__63631__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63650,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63650,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__63666 = cljs.core.next(seq__63631__$1);
var G__63667 = null;
var G__63668 = (0);
var G__63669 = (0);
seq__63631 = G__63666;
chunk__63632 = G__63667;
count__63633 = G__63668;
i__63634 = G__63669;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__63625_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__63625_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__63626_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__63626_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__63627_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__63627_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__63628_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__63628_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__63655){
var map__63657 = p__63655;
var map__63657__$1 = cljs.core.__destructure_map(map__63657);
var svc = map__63657__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63657__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63657__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
