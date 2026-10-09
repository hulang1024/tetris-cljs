goog.provide('tetris.audio');
var module$node_modules$howler$dist$howler=shadow.js.require("module$node_modules$howler$dist$howler", {});
tetris.audio.cached_sounds = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
tetris.audio.sound = (function tetris$audio$sound(id){
var G__42551 = cljs.core.deref(tetris.audio.cached_sounds);
return (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(G__42551) : id.call(null,G__42551));
});
tetris.audio.play = (function tetris$audio$play(id){
return tetris.audio.sound(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(id)).play();
});
tetris.audio.log = (function tetris$audio$log(s){
return cljs.core.tap_GT_((""+"aduio - "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)));
});
tetris.audio.effect_list = (function tetris$audio$effect_list(){
var iter__5649__auto__ = (function tetris$audio$effect_list_$_iter__42553(s__42554){
return (new cljs.core.LazySeq(null,(function (){
var s__42554__$1 = s__42554;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__42554__$1);
if(temp__5825__auto__){
var s__42554__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42554__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__42554__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__42556 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__42555 = (0);
while(true){
if((i__42555 < size__5648__auto__)){
var name = cljs.core._nth(c__5647__auto__,i__42555);
var id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+"effect/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)));
var src = (""+"assets/gameplay/effect/chiptune/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+".ogg");
cljs.core.chunk_append(b__42556,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,src], null));

var G__42589 = (i__42555 + (1));
i__42555 = G__42589;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42556),tetris$audio$effect_list_$_iter__42553(cljs.core.chunk_rest(s__42554__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42556),null);
}
} else {
var name = cljs.core.first(s__42554__$2);
var id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+"effect/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)));
var src = (""+"assets/gameplay/effect/chiptune/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+".ogg");
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,src], null),tetris$audio$effect_list_$_iter__42553(cljs.core.rest(s__42554__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rotate","land","hard-drop","lock","hold","fail"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42552_SHARP_){
return (""+"clear-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__42552_SHARP_));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(7)))));
});
tetris.audio.sample_list = (function tetris$audio$sample_list(sample_type){
var iter__5649__auto__ = (function tetris$audio$sample_list_$_iter__42558(s__42559){
return (new cljs.core.LazySeq(null,(function (){
var s__42559__$1 = s__42559;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__42559__$1);
if(temp__5825__auto__){
var s__42559__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42559__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__42559__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__42561 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__42560 = (0);
while(true){
if((i__42560 < size__5648__auto__)){
var name = cljs.core._nth(c__5647__auto__,i__42560);
var id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+"sample/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sample_type)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)));
var src = (""+"assets/gameplay/sample/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sample_type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+".ogg");
cljs.core.chunk_append(b__42561,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,src], null));

var G__42596 = (i__42560 + (1));
i__42560 = G__42596;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42561),tetris$audio$sample_list_$_iter__42558(cljs.core.chunk_rest(s__42559__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42561),null);
}
} else {
var name = cljs.core.first(s__42559__$2);
var id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+"sample/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sample_type)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)));
var src = (""+"assets/gameplay/sample/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sample_type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+".ogg");
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,src], null),tetris$audio$sample_list_$_iter__42558(cljs.core.rest(s__42559__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__42557_SHARP_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__42557_SHARP_));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(29))));
});
tetris.audio.ui_list = (function tetris$audio$ui_list(){
var iter__5649__auto__ = (function tetris$audio$ui_list_$_iter__42562(s__42563){
return (new cljs.core.LazySeq(null,(function (){
var s__42563__$1 = s__42563;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__42563__$1);
if(temp__5825__auto__){
var s__42563__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42563__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__42563__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__42565 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__42564 = (0);
while(true){
if((i__42564 < size__5648__auto__)){
var name = cljs.core._nth(c__5647__auto__,i__42564);
var id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name);
var src = (""+"assets/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+".mp3");
cljs.core.chunk_append(b__42565,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,src], null));

var G__42599 = (i__42564 + (1));
i__42564 = G__42599;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42565),tetris$audio$ui_list_$_iter__42562(cljs.core.chunk_rest(s__42563__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42565),null);
}
} else {
var name = cljs.core.first(s__42563__$2);
var id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name);
var src = (""+"assets/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+".mp3");
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,src], null),tetris$audio$ui_list_$_iter__42562(cljs.core.rest(s__42563__$2)));
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

var seq__42567 = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__42566_SHARP_){
return cljs.core.not((function (){var G__42582 = cljs.core.deref(tetris.audio.cached_sounds);
var fexpr__42581 = cljs.core.first(p1__42566_SHARP_);
return (fexpr__42581.cljs$core$IFn$_invoke$arity$1 ? fexpr__42581.cljs$core$IFn$_invoke$arity$1(G__42582) : fexpr__42581.call(null,G__42582));
})());
}),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"all","all",892129742),sounds))?cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(tetris.audio.effect_list(),tetris.audio.sample_list("bass"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tetris.audio.ui_list()], 0)):sounds)));
var chunk__42569 = null;
var count__42570 = (0);
var i__42571 = (0);
while(true){
if((i__42571 < count__42570)){
var vec__42583 = chunk__42569.cljs$core$IIndexed$_nth$arity$2(null,i__42571);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42583,(0),null);
var src = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42583,(1),null);
var sound_42601 = (new module$node_modules$howler$dist$howler.Howl(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [src], null),new cljs.core.Keyword(null,"volume","volume",1900330799),0.1], null))));
sound_42601.once("load",((function (seq__42567,chunk__42569,count__42570,i__42571,sound_42601,vec__42583,id,src){
return (function (_){
return tetris.audio.log((""+"loaded: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+" -> "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(src)));
});})(seq__42567,chunk__42569,count__42570,i__42571,sound_42601,vec__42583,id,src))
);

sound_42601.on("play",((function (seq__42567,chunk__42569,count__42570,i__42571,sound_42601,vec__42583,id,src){
return (function (_){
return tetris.audio.log((""+"played: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
});})(seq__42567,chunk__42569,count__42570,i__42571,sound_42601,vec__42583,id,src))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tetris.audio.cached_sounds,cljs.core.assoc,id,sound_42601);


var G__42603 = seq__42567;
var G__42604 = chunk__42569;
var G__42605 = count__42570;
var G__42606 = (i__42571 + (1));
seq__42567 = G__42603;
chunk__42569 = G__42604;
count__42570 = G__42605;
i__42571 = G__42606;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__42567);
if(temp__5825__auto__){
var seq__42567__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42567__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__42567__$1);
var G__42607 = cljs.core.chunk_rest(seq__42567__$1);
var G__42608 = c__5694__auto__;
var G__42609 = cljs.core.count(c__5694__auto__);
var G__42610 = (0);
seq__42567 = G__42607;
chunk__42569 = G__42608;
count__42570 = G__42609;
i__42571 = G__42610;
continue;
} else {
var vec__42586 = cljs.core.first(seq__42567__$1);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42586,(0),null);
var src = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42586,(1),null);
var sound_42611 = (new module$node_modules$howler$dist$howler.Howl(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [src], null),new cljs.core.Keyword(null,"volume","volume",1900330799),0.1], null))));
sound_42611.once("load",((function (seq__42567,chunk__42569,count__42570,i__42571,sound_42611,vec__42586,id,src,seq__42567__$1,temp__5825__auto__){
return (function (_){
return tetris.audio.log((""+"loaded: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+" -> "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(src)));
});})(seq__42567,chunk__42569,count__42570,i__42571,sound_42611,vec__42586,id,src,seq__42567__$1,temp__5825__auto__))
);

sound_42611.on("play",((function (seq__42567,chunk__42569,count__42570,i__42571,sound_42611,vec__42586,id,src,seq__42567__$1,temp__5825__auto__){
return (function (_){
return tetris.audio.log((""+"played: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
});})(seq__42567,chunk__42569,count__42570,i__42571,sound_42611,vec__42586,id,src,seq__42567__$1,temp__5825__auto__))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tetris.audio.cached_sounds,cljs.core.assoc,id,sound_42611);


var G__42614 = cljs.core.next(seq__42567__$1);
var G__42615 = null;
var G__42616 = (0);
var G__42617 = (0);
seq__42567 = G__42614;
chunk__42569 = G__42615;
count__42570 = G__42616;
i__42571 = G__42617;
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
