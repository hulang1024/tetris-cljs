goog.provide('tetris.audio');
var module$node_modules$howler$dist$howler=shadow.js.require("module$node_modules$howler$dist$howler", {});
tetris.audio.cached_sounds = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
tetris.audio.sound = (function tetris$audio$sound(id){
var G__47494 = cljs.core.deref(tetris.audio.cached_sounds);
return (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(G__47494) : id.call(null,G__47494));
});
tetris.audio.play = (function tetris$audio$play(id){
return tetris.audio.sound(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(id)).play();
});
tetris.audio.log = (function tetris$audio$log(s){
return cljs.core.tap_GT_((""+"aduio - "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)));
});
tetris.audio.effect_list = (function tetris$audio$effect_list(){
var iter__5649__auto__ = (function tetris$audio$effect_list_$_iter__47496(s__47497){
return (new cljs.core.LazySeq(null,(function (){
var s__47497__$1 = s__47497;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__47497__$1);
if(temp__5825__auto__){
var s__47497__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47497__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__47497__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__47499 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__47498 = (0);
while(true){
if((i__47498 < size__5648__auto__)){
var name = cljs.core._nth(c__5647__auto__,i__47498);
var id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+"effect/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)));
var src = (""+"assets/gameplay/effect/chiptune/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+".ogg");
cljs.core.chunk_append(b__47499,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,src], null));

var G__47532 = (i__47498 + (1));
i__47498 = G__47532;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47499),tetris$audio$effect_list_$_iter__47496(cljs.core.chunk_rest(s__47497__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47499),null);
}
} else {
var name = cljs.core.first(s__47497__$2);
var id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+"effect/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)));
var src = (""+"assets/gameplay/effect/chiptune/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+".ogg");
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,src], null),tetris$audio$effect_list_$_iter__47496(cljs.core.rest(s__47497__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rotate","land","hard-drop","lock","hold","fail"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__47495_SHARP_){
return (""+"clear-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__47495_SHARP_));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(7)))));
});
tetris.audio.sample_list = (function tetris$audio$sample_list(sample_type){
var iter__5649__auto__ = (function tetris$audio$sample_list_$_iter__47501(s__47502){
return (new cljs.core.LazySeq(null,(function (){
var s__47502__$1 = s__47502;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__47502__$1);
if(temp__5825__auto__){
var s__47502__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47502__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__47502__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__47504 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__47503 = (0);
while(true){
if((i__47503 < size__5648__auto__)){
var name = cljs.core._nth(c__5647__auto__,i__47503);
var id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+"sample/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sample_type)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)));
var src = (""+"assets/gameplay/sample/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sample_type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+".ogg");
cljs.core.chunk_append(b__47504,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,src], null));

var G__47533 = (i__47503 + (1));
i__47503 = G__47533;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47504),tetris$audio$sample_list_$_iter__47501(cljs.core.chunk_rest(s__47502__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47504),null);
}
} else {
var name = cljs.core.first(s__47502__$2);
var id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+"sample/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sample_type)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)));
var src = (""+"assets/gameplay/sample/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sample_type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+".ogg");
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,src], null),tetris$audio$sample_list_$_iter__47501(cljs.core.rest(s__47502__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__47500_SHARP_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__47500_SHARP_));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(29))));
});
tetris.audio.ui_list = (function tetris$audio$ui_list(){
var iter__5649__auto__ = (function tetris$audio$ui_list_$_iter__47505(s__47506){
return (new cljs.core.LazySeq(null,(function (){
var s__47506__$1 = s__47506;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__47506__$1);
if(temp__5825__auto__){
var s__47506__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47506__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__47506__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__47508 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__47507 = (0);
while(true){
if((i__47507 < size__5648__auto__)){
var name = cljs.core._nth(c__5647__auto__,i__47507);
var id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name);
var src = (""+"assets/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+".mp3");
cljs.core.chunk_append(b__47508,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,src], null));

var G__47534 = (i__47507 + (1));
i__47507 = G__47534;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47508),tetris$audio$ui_list_$_iter__47505(cljs.core.chunk_rest(s__47506__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47508),null);
}
} else {
var name = cljs.core.first(s__47506__$2);
var id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name);
var src = (""+"assets/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+".mp3");
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,src], null),tetris$audio$ui_list_$_iter__47505(cljs.core.rest(s__47506__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["menu-select","menu-play","menu-back"], null));
});
tetris.audio.load_sounds = (function tetris$audio$load_sounds(sounds){
cljs.core.tap_GT_("load sounds");

var seq__47510 = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__47509_SHARP_){
return cljs.core.not((function (){var G__47525 = cljs.core.deref(tetris.audio.cached_sounds);
var fexpr__47524 = cljs.core.first(p1__47509_SHARP_);
return (fexpr__47524.cljs$core$IFn$_invoke$arity$1 ? fexpr__47524.cljs$core$IFn$_invoke$arity$1(G__47525) : fexpr__47524.call(null,G__47525));
})());
}),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"all","all",892129742),sounds))?cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(tetris.audio.effect_list(),tetris.audio.sample_list("bass"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tetris.audio.ui_list()], 0)):sounds)));
var chunk__47512 = null;
var count__47513 = (0);
var i__47514 = (0);
while(true){
if((i__47514 < count__47513)){
var vec__47526 = chunk__47512.cljs$core$IIndexed$_nth$arity$2(null,i__47514);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47526,(0),null);
var src = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47526,(1),null);
var sound_47541 = (new module$node_modules$howler$dist$howler.Howl(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [src], null),new cljs.core.Keyword(null,"volume","volume",1900330799),0.1], null))));
sound_47541.once("load",((function (seq__47510,chunk__47512,count__47513,i__47514,sound_47541,vec__47526,id,src){
return (function (_){
return tetris.audio.log((""+"loaded: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+" -> "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(src)));
});})(seq__47510,chunk__47512,count__47513,i__47514,sound_47541,vec__47526,id,src))
);

sound_47541.on("play",((function (seq__47510,chunk__47512,count__47513,i__47514,sound_47541,vec__47526,id,src){
return (function (_){
return tetris.audio.log((""+"played: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
});})(seq__47510,chunk__47512,count__47513,i__47514,sound_47541,vec__47526,id,src))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tetris.audio.cached_sounds,cljs.core.assoc,id,sound_47541);


var G__47544 = seq__47510;
var G__47545 = chunk__47512;
var G__47546 = count__47513;
var G__47547 = (i__47514 + (1));
seq__47510 = G__47544;
chunk__47512 = G__47545;
count__47513 = G__47546;
i__47514 = G__47547;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__47510);
if(temp__5825__auto__){
var seq__47510__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47510__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__47510__$1);
var G__47549 = cljs.core.chunk_rest(seq__47510__$1);
var G__47550 = c__5694__auto__;
var G__47551 = cljs.core.count(c__5694__auto__);
var G__47552 = (0);
seq__47510 = G__47549;
chunk__47512 = G__47550;
count__47513 = G__47551;
i__47514 = G__47552;
continue;
} else {
var vec__47529 = cljs.core.first(seq__47510__$1);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47529,(0),null);
var src = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47529,(1),null);
var sound_47554 = (new module$node_modules$howler$dist$howler.Howl(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [src], null),new cljs.core.Keyword(null,"volume","volume",1900330799),0.1], null))));
sound_47554.once("load",((function (seq__47510,chunk__47512,count__47513,i__47514,sound_47554,vec__47529,id,src,seq__47510__$1,temp__5825__auto__){
return (function (_){
return tetris.audio.log((""+"loaded: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+" -> "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(src)));
});})(seq__47510,chunk__47512,count__47513,i__47514,sound_47554,vec__47529,id,src,seq__47510__$1,temp__5825__auto__))
);

sound_47554.on("play",((function (seq__47510,chunk__47512,count__47513,i__47514,sound_47554,vec__47529,id,src,seq__47510__$1,temp__5825__auto__){
return (function (_){
return tetris.audio.log((""+"played: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
});})(seq__47510,chunk__47512,count__47513,i__47514,sound_47554,vec__47529,id,src,seq__47510__$1,temp__5825__auto__))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tetris.audio.cached_sounds,cljs.core.assoc,id,sound_47554);


var G__47555 = cljs.core.next(seq__47510__$1);
var G__47556 = null;
var G__47557 = (0);
var G__47558 = (0);
seq__47510 = G__47555;
chunk__47512 = G__47556;
count__47513 = G__47557;
i__47514 = G__47558;
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
