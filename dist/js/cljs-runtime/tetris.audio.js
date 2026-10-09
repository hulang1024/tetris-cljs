goog.provide('tetris.audio');
var module$node_modules$howler$dist$howler=shadow.js.require("module$node_modules$howler$dist$howler", {});
tetris.audio.cached_sounds = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
tetris.audio.sound = (function tetris$audio$sound(id){
var G__41297 = cljs.core.deref(tetris.audio.cached_sounds);
return (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(G__41297) : id.call(null,G__41297));
});
tetris.audio.play = (function tetris$audio$play(id){
return tetris.audio.sound(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(id)).play();
});
tetris.audio.log = (function tetris$audio$log(s){
return cljs.core.tap_GT_((""+"aduio - "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)));
});
tetris.audio.effect_list = (function tetris$audio$effect_list(){
var iter__5649__auto__ = (function tetris$audio$effect_list_$_iter__41299(s__41300){
return (new cljs.core.LazySeq(null,(function (){
var s__41300__$1 = s__41300;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__41300__$1);
if(temp__5825__auto__){
var s__41300__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41300__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__41300__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__41302 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__41301 = (0);
while(true){
if((i__41301 < size__5648__auto__)){
var name = cljs.core._nth(c__5647__auto__,i__41301);
var id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+"effect/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)));
var src = (""+"assets/gameplay/effect/chiptune/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+".ogg");
cljs.core.chunk_append(b__41302,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,src], null));

var G__41342 = (i__41301 + (1));
i__41301 = G__41342;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41302),tetris$audio$effect_list_$_iter__41299(cljs.core.chunk_rest(s__41300__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41302),null);
}
} else {
var name = cljs.core.first(s__41300__$2);
var id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+"effect/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)));
var src = (""+"assets/gameplay/effect/chiptune/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+".ogg");
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,src], null),tetris$audio$effect_list_$_iter__41299(cljs.core.rest(s__41300__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rotate","land","hard-drop","lock","hold","fail"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__41298_SHARP_){
return (""+"clear-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41298_SHARP_));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(7)))));
});
tetris.audio.sample_list = (function tetris$audio$sample_list(sample_type){
var iter__5649__auto__ = (function tetris$audio$sample_list_$_iter__41308(s__41309){
return (new cljs.core.LazySeq(null,(function (){
var s__41309__$1 = s__41309;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__41309__$1);
if(temp__5825__auto__){
var s__41309__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41309__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__41309__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__41311 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__41310 = (0);
while(true){
if((i__41310 < size__5648__auto__)){
var name = cljs.core._nth(c__5647__auto__,i__41310);
var id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+"sample/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sample_type)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)));
var src = (""+"assets/gameplay/sample/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sample_type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+".ogg");
cljs.core.chunk_append(b__41311,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,src], null));

var G__41349 = (i__41310 + (1));
i__41310 = G__41349;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41311),tetris$audio$sample_list_$_iter__41308(cljs.core.chunk_rest(s__41309__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41311),null);
}
} else {
var name = cljs.core.first(s__41309__$2);
var id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+"sample/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sample_type)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)));
var src = (""+"assets/gameplay/sample/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sample_type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+".ogg");
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,src], null),tetris$audio$sample_list_$_iter__41308(cljs.core.rest(s__41309__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__41307_SHARP_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41307_SHARP_));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(29))));
});
tetris.audio.ui_list = (function tetris$audio$ui_list(){
var iter__5649__auto__ = (function tetris$audio$ui_list_$_iter__41312(s__41313){
return (new cljs.core.LazySeq(null,(function (){
var s__41313__$1 = s__41313;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__41313__$1);
if(temp__5825__auto__){
var s__41313__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41313__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__41313__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__41315 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__41314 = (0);
while(true){
if((i__41314 < size__5648__auto__)){
var name = cljs.core._nth(c__5647__auto__,i__41314);
var id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name);
var src = (""+"assets/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+".mp3");
cljs.core.chunk_append(b__41315,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,src], null));

var G__41350 = (i__41314 + (1));
i__41314 = G__41350;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41315),tetris$audio$ui_list_$_iter__41312(cljs.core.chunk_rest(s__41313__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41315),null);
}
} else {
var name = cljs.core.first(s__41313__$2);
var id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name);
var src = (""+"assets/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+".mp3");
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,src], null),tetris$audio$ui_list_$_iter__41312(cljs.core.rest(s__41313__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["menu-hover","menu-enter","menu-back","gameplay","screen-back"], null));
});
tetris.audio.load_sounds = (function tetris$audio$load_sounds(sounds){
cljs.core.tap_GT_("load sounds");

var seq__41320 = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__41319_SHARP_){
return cljs.core.not((function (){var G__41335 = cljs.core.deref(tetris.audio.cached_sounds);
var fexpr__41334 = cljs.core.first(p1__41319_SHARP_);
return (fexpr__41334.cljs$core$IFn$_invoke$arity$1 ? fexpr__41334.cljs$core$IFn$_invoke$arity$1(G__41335) : fexpr__41334.call(null,G__41335));
})());
}),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"all","all",892129742),sounds))?cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(tetris.audio.effect_list(),tetris.audio.sample_list("bass"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tetris.audio.ui_list()], 0)):sounds)));
var chunk__41322 = null;
var count__41323 = (0);
var i__41324 = (0);
while(true){
if((i__41324 < count__41323)){
var vec__41336 = chunk__41322.cljs$core$IIndexed$_nth$arity$2(null,i__41324);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41336,(0),null);
var src = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41336,(1),null);
var sound_41354 = (new module$node_modules$howler$dist$howler.Howl(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [src], null),new cljs.core.Keyword(null,"volume","volume",1900330799),0.1], null))));
sound_41354.once("load",((function (seq__41320,chunk__41322,count__41323,i__41324,sound_41354,vec__41336,id,src){
return (function (_){
return tetris.audio.log((""+"loaded: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+" -> "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(src)));
});})(seq__41320,chunk__41322,count__41323,i__41324,sound_41354,vec__41336,id,src))
);

sound_41354.on("play",((function (seq__41320,chunk__41322,count__41323,i__41324,sound_41354,vec__41336,id,src){
return (function (_){
return tetris.audio.log((""+"played: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
});})(seq__41320,chunk__41322,count__41323,i__41324,sound_41354,vec__41336,id,src))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tetris.audio.cached_sounds,cljs.core.assoc,id,sound_41354);


var G__41356 = seq__41320;
var G__41357 = chunk__41322;
var G__41358 = count__41323;
var G__41359 = (i__41324 + (1));
seq__41320 = G__41356;
chunk__41322 = G__41357;
count__41323 = G__41358;
i__41324 = G__41359;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__41320);
if(temp__5825__auto__){
var seq__41320__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41320__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__41320__$1);
var G__41361 = cljs.core.chunk_rest(seq__41320__$1);
var G__41362 = c__5694__auto__;
var G__41363 = cljs.core.count(c__5694__auto__);
var G__41364 = (0);
seq__41320 = G__41361;
chunk__41322 = G__41362;
count__41323 = G__41363;
i__41324 = G__41364;
continue;
} else {
var vec__41339 = cljs.core.first(seq__41320__$1);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41339,(0),null);
var src = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41339,(1),null);
var sound_41365 = (new module$node_modules$howler$dist$howler.Howl(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [src], null),new cljs.core.Keyword(null,"volume","volume",1900330799),0.1], null))));
sound_41365.once("load",((function (seq__41320,chunk__41322,count__41323,i__41324,sound_41365,vec__41339,id,src,seq__41320__$1,temp__5825__auto__){
return (function (_){
return tetris.audio.log((""+"loaded: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+" -> "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(src)));
});})(seq__41320,chunk__41322,count__41323,i__41324,sound_41365,vec__41339,id,src,seq__41320__$1,temp__5825__auto__))
);

sound_41365.on("play",((function (seq__41320,chunk__41322,count__41323,i__41324,sound_41365,vec__41339,id,src,seq__41320__$1,temp__5825__auto__){
return (function (_){
return tetris.audio.log((""+"played: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
});})(seq__41320,chunk__41322,count__41323,i__41324,sound_41365,vec__41339,id,src,seq__41320__$1,temp__5825__auto__))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tetris.audio.cached_sounds,cljs.core.assoc,id,sound_41365);


var G__41366 = cljs.core.next(seq__41320__$1);
var G__41367 = null;
var G__41368 = (0);
var G__41369 = (0);
seq__41320 = G__41366;
chunk__41322 = G__41367;
count__41323 = G__41368;
i__41324 = G__41369;
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
