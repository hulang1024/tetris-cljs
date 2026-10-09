goog.provide('tetris.audio');
var module$node_modules$howler$dist$howler=shadow.js.require("module$node_modules$howler$dist$howler", {});
tetris.audio.cached_sounds = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
tetris.audio.sound = (function tetris$audio$sound(id){
var G__46950 = cljs.core.deref(tetris.audio.cached_sounds);
return (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(G__46950) : id.call(null,G__46950));
});
tetris.audio.play = (function tetris$audio$play(id){
return tetris.audio.sound(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(id)).play();
});
tetris.audio.log = (function tetris$audio$log(s){
return cljs.core.tap_GT_((""+"aduio - "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)));
});
tetris.audio.effect_list = (function tetris$audio$effect_list(){
var iter__5649__auto__ = (function tetris$audio$effect_list_$_iter__46959(s__46960){
return (new cljs.core.LazySeq(null,(function (){
var s__46960__$1 = s__46960;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__46960__$1);
if(temp__5825__auto__){
var s__46960__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46960__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__46960__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__46962 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__46961 = (0);
while(true){
if((i__46961 < size__5648__auto__)){
var name = cljs.core._nth(c__5647__auto__,i__46961);
var id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+"effect/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)));
var src = (""+"assets/gameplay/effect/chiptune/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+".ogg");
cljs.core.chunk_append(b__46962,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,src], null));

var G__47042 = (i__46961 + (1));
i__46961 = G__47042;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46962),tetris$audio$effect_list_$_iter__46959(cljs.core.chunk_rest(s__46960__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46962),null);
}
} else {
var name = cljs.core.first(s__46960__$2);
var id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+"effect/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)));
var src = (""+"assets/gameplay/effect/chiptune/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+".ogg");
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,src], null),tetris$audio$effect_list_$_iter__46959(cljs.core.rest(s__46960__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rotate","land","hard-drop","lock","hold","fail"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46956_SHARP_){
return (""+"clear-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__46956_SHARP_));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(7)))));
});
tetris.audio.sample_list = (function tetris$audio$sample_list(sample_type){
var iter__5649__auto__ = (function tetris$audio$sample_list_$_iter__46986(s__46987){
return (new cljs.core.LazySeq(null,(function (){
var s__46987__$1 = s__46987;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__46987__$1);
if(temp__5825__auto__){
var s__46987__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46987__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__46987__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__46989 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__46988 = (0);
while(true){
if((i__46988 < size__5648__auto__)){
var name = cljs.core._nth(c__5647__auto__,i__46988);
var id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+"sample/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sample_type)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)));
var src = (""+"assets/gameplay/sample/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sample_type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+".ogg");
cljs.core.chunk_append(b__46989,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,src], null));

var G__47049 = (i__46988 + (1));
i__46988 = G__47049;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46989),tetris$audio$sample_list_$_iter__46986(cljs.core.chunk_rest(s__46987__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46989),null);
}
} else {
var name = cljs.core.first(s__46987__$2);
var id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+"sample/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sample_type)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)));
var src = (""+"assets/gameplay/sample/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sample_type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+".ogg");
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,src], null),tetris$audio$sample_list_$_iter__46986(cljs.core.rest(s__46987__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__46984_SHARP_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__46984_SHARP_));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(29))));
});
tetris.audio.ui_list = (function tetris$audio$ui_list(){
var iter__5649__auto__ = (function tetris$audio$ui_list_$_iter__46993(s__46994){
return (new cljs.core.LazySeq(null,(function (){
var s__46994__$1 = s__46994;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__46994__$1);
if(temp__5825__auto__){
var s__46994__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46994__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__46994__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__46996 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__46995 = (0);
while(true){
if((i__46995 < size__5648__auto__)){
var name = cljs.core._nth(c__5647__auto__,i__46995);
var id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name);
var src = (""+"assets/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+".mp3");
cljs.core.chunk_append(b__46996,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,src], null));

var G__47058 = (i__46995 + (1));
i__46995 = G__47058;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46996),tetris$audio$ui_list_$_iter__46993(cljs.core.chunk_rest(s__46994__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46996),null);
}
} else {
var name = cljs.core.first(s__46994__$2);
var id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name);
var src = (""+"assets/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+".mp3");
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,src], null),tetris$audio$ui_list_$_iter__46993(cljs.core.rest(s__46994__$2)));
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

var seq__47007 = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__47003_SHARP_){
return cljs.core.not((function (){var G__47031 = cljs.core.deref(tetris.audio.cached_sounds);
var fexpr__47030 = cljs.core.first(p1__47003_SHARP_);
return (fexpr__47030.cljs$core$IFn$_invoke$arity$1 ? fexpr__47030.cljs$core$IFn$_invoke$arity$1(G__47031) : fexpr__47030.call(null,G__47031));
})());
}),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"all","all",892129742),sounds))?cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(tetris.audio.effect_list(),tetris.audio.sample_list("bass"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tetris.audio.ui_list()], 0)):sounds)));
var chunk__47009 = null;
var count__47010 = (0);
var i__47011 = (0);
while(true){
if((i__47011 < count__47010)){
var vec__47033 = chunk__47009.cljs$core$IIndexed$_nth$arity$2(null,i__47011);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47033,(0),null);
var src = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47033,(1),null);
var sound_47061 = (new module$node_modules$howler$dist$howler.Howl(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [src], null),new cljs.core.Keyword(null,"volume","volume",1900330799),0.1], null))));
sound_47061.once("load",((function (seq__47007,chunk__47009,count__47010,i__47011,sound_47061,vec__47033,id,src){
return (function (_){
return tetris.audio.log((""+"loaded: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+" -> "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(src)));
});})(seq__47007,chunk__47009,count__47010,i__47011,sound_47061,vec__47033,id,src))
);

sound_47061.on("play",((function (seq__47007,chunk__47009,count__47010,i__47011,sound_47061,vec__47033,id,src){
return (function (_){
return tetris.audio.log((""+"played: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
});})(seq__47007,chunk__47009,count__47010,i__47011,sound_47061,vec__47033,id,src))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tetris.audio.cached_sounds,cljs.core.assoc,id,sound_47061);


var G__47065 = seq__47007;
var G__47066 = chunk__47009;
var G__47067 = count__47010;
var G__47068 = (i__47011 + (1));
seq__47007 = G__47065;
chunk__47009 = G__47066;
count__47010 = G__47067;
i__47011 = G__47068;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__47007);
if(temp__5825__auto__){
var seq__47007__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47007__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__47007__$1);
var G__47069 = cljs.core.chunk_rest(seq__47007__$1);
var G__47070 = c__5694__auto__;
var G__47071 = cljs.core.count(c__5694__auto__);
var G__47072 = (0);
seq__47007 = G__47069;
chunk__47009 = G__47070;
count__47010 = G__47071;
i__47011 = G__47072;
continue;
} else {
var vec__47036 = cljs.core.first(seq__47007__$1);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47036,(0),null);
var src = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47036,(1),null);
var sound_47073 = (new module$node_modules$howler$dist$howler.Howl(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [src], null),new cljs.core.Keyword(null,"volume","volume",1900330799),0.1], null))));
sound_47073.once("load",((function (seq__47007,chunk__47009,count__47010,i__47011,sound_47073,vec__47036,id,src,seq__47007__$1,temp__5825__auto__){
return (function (_){
return tetris.audio.log((""+"loaded: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+" -> "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(src)));
});})(seq__47007,chunk__47009,count__47010,i__47011,sound_47073,vec__47036,id,src,seq__47007__$1,temp__5825__auto__))
);

sound_47073.on("play",((function (seq__47007,chunk__47009,count__47010,i__47011,sound_47073,vec__47036,id,src,seq__47007__$1,temp__5825__auto__){
return (function (_){
return tetris.audio.log((""+"played: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
});})(seq__47007,chunk__47009,count__47010,i__47011,sound_47073,vec__47036,id,src,seq__47007__$1,temp__5825__auto__))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tetris.audio.cached_sounds,cljs.core.assoc,id,sound_47073);


var G__47074 = cljs.core.next(seq__47007__$1);
var G__47075 = null;
var G__47076 = (0);
var G__47077 = (0);
seq__47007 = G__47074;
chunk__47009 = G__47075;
count__47010 = G__47076;
i__47011 = G__47077;
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
