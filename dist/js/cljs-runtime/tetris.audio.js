goog.provide('tetris.audio');
var module$node_modules$howler$dist$howler=shadow.js.require("module$node_modules$howler$dist$howler", {});
tetris.audio.sounds = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
tetris.audio.sound = (function tetris$audio$sound(id){
var G__40439 = cljs.core.deref(tetris.audio.sounds);
return (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(G__40439) : id.call(null,G__40439));
});
tetris.audio.log = (function tetris$audio$log(s){
return cljs.core.tap_GT_((""+"aduio - "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)));
});
tetris.audio.effect_list = (function tetris$audio$effect_list(){
var iter__5649__auto__ = (function tetris$audio$effect_list_$_iter__40445(s__40447){
return (new cljs.core.LazySeq(null,(function (){
var s__40447__$1 = s__40447;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__40447__$1);
if(temp__5825__auto__){
var s__40447__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40447__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__40447__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__40451 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__40450 = (0);
while(true){
if((i__40450 < size__5648__auto__)){
var name = cljs.core._nth(c__5647__auto__,i__40450);
var id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+"effect/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)));
var src = (""+"assets/gameplay/effect/chiptune/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+".ogg");
cljs.core.chunk_append(b__40451,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,src], null));

var G__40519 = (i__40450 + (1));
i__40450 = G__40519;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40451),tetris$audio$effect_list_$_iter__40445(cljs.core.chunk_rest(s__40447__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40451),null);
}
} else {
var name = cljs.core.first(s__40447__$2);
var id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+"effect/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)));
var src = (""+"assets/gameplay/effect/chiptune/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+".ogg");
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,src], null),tetris$audio$effect_list_$_iter__40445(cljs.core.rest(s__40447__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rotate","land","hard-drop","lock","hold","fail"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40442_SHARP_){
return (""+"clear-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__40442_SHARP_));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(7)))));
});
tetris.audio.sample_list = (function tetris$audio$sample_list(sample_type){
var iter__5649__auto__ = (function tetris$audio$sample_list_$_iter__40471(s__40472){
return (new cljs.core.LazySeq(null,(function (){
var s__40472__$1 = s__40472;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__40472__$1);
if(temp__5825__auto__){
var s__40472__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40472__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__40472__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__40474 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__40473 = (0);
while(true){
if((i__40473 < size__5648__auto__)){
var name = cljs.core._nth(c__5647__auto__,i__40473);
var id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+"sample/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sample_type)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)));
var src = (""+"assets/gameplay/sample/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sample_type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+".ogg");
cljs.core.chunk_append(b__40474,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,src], null));

var G__40522 = (i__40473 + (1));
i__40473 = G__40522;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40474),tetris$audio$sample_list_$_iter__40471(cljs.core.chunk_rest(s__40472__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40474),null);
}
} else {
var name = cljs.core.first(s__40472__$2);
var id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+"sample/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sample_type)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)));
var src = (""+"assets/gameplay/sample/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sample_type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+".ogg");
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,src], null),tetris$audio$sample_list_$_iter__40471(cljs.core.rest(s__40472__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__40470_SHARP_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__40470_SHARP_));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(29))));
});
tetris.audio.load_sounds = (function tetris$audio$load_sounds(){
cljs.core.tap_GT_("load sounds");

var seq__40480 = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tetris.audio.effect_list(),tetris.audio.sample_list("bass")));
var chunk__40482 = null;
var count__40483 = (0);
var i__40484 = (0);
while(true){
if((i__40484 < count__40483)){
var vec__40499 = chunk__40482.cljs$core$IIndexed$_nth$arity$2(null,i__40484);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40499,(0),null);
var src = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40499,(1),null);
var sound_40523 = (new module$node_modules$howler$dist$howler.Howl(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [src], null),new cljs.core.Keyword(null,"volume","volume",1900330799),0.1], null))));
sound_40523.once("load",((function (seq__40480,chunk__40482,count__40483,i__40484,sound_40523,vec__40499,id,src){
return (function (_){
return tetris.audio.log((""+"loaded: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+" -> "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(src)));
});})(seq__40480,chunk__40482,count__40483,i__40484,sound_40523,vec__40499,id,src))
);

sound_40523.on("play",((function (seq__40480,chunk__40482,count__40483,i__40484,sound_40523,vec__40499,id,src){
return (function (_){
return tetris.audio.log((""+"played: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
});})(seq__40480,chunk__40482,count__40483,i__40484,sound_40523,vec__40499,id,src))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tetris.audio.sounds,cljs.core.assoc,id,sound_40523);


var G__40525 = seq__40480;
var G__40526 = chunk__40482;
var G__40527 = count__40483;
var G__40528 = (i__40484 + (1));
seq__40480 = G__40525;
chunk__40482 = G__40526;
count__40483 = G__40527;
i__40484 = G__40528;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__40480);
if(temp__5825__auto__){
var seq__40480__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40480__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__40480__$1);
var G__40529 = cljs.core.chunk_rest(seq__40480__$1);
var G__40530 = c__5694__auto__;
var G__40531 = cljs.core.count(c__5694__auto__);
var G__40532 = (0);
seq__40480 = G__40529;
chunk__40482 = G__40530;
count__40483 = G__40531;
i__40484 = G__40532;
continue;
} else {
var vec__40503 = cljs.core.first(seq__40480__$1);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40503,(0),null);
var src = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40503,(1),null);
var sound_40536 = (new module$node_modules$howler$dist$howler.Howl(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [src], null),new cljs.core.Keyword(null,"volume","volume",1900330799),0.1], null))));
sound_40536.once("load",((function (seq__40480,chunk__40482,count__40483,i__40484,sound_40536,vec__40503,id,src,seq__40480__$1,temp__5825__auto__){
return (function (_){
return tetris.audio.log((""+"loaded: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+" -> "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(src)));
});})(seq__40480,chunk__40482,count__40483,i__40484,sound_40536,vec__40503,id,src,seq__40480__$1,temp__5825__auto__))
);

sound_40536.on("play",((function (seq__40480,chunk__40482,count__40483,i__40484,sound_40536,vec__40503,id,src,seq__40480__$1,temp__5825__auto__){
return (function (_){
return tetris.audio.log((""+"played: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
});})(seq__40480,chunk__40482,count__40483,i__40484,sound_40536,vec__40503,id,src,seq__40480__$1,temp__5825__auto__))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tetris.audio.sounds,cljs.core.assoc,id,sound_40536);


var G__40537 = cljs.core.next(seq__40480__$1);
var G__40538 = null;
var G__40539 = (0);
var G__40540 = (0);
seq__40480 = G__40537;
chunk__40482 = G__40538;
count__40483 = G__40539;
i__40484 = G__40540;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=tetris.audio.js.map
