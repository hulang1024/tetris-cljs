goog.provide('tetris.audio');
var module$node_modules$howler$dist$howler=shadow.js.require("module$node_modules$howler$dist$howler", {});
tetris.audio.sounds = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
tetris.audio.sound = (function tetris$audio$sound(id){
var G__52931 = cljs.core.deref(tetris.audio.sounds);
return (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(G__52931) : id.call(null,G__52931));
});
tetris.audio.log = (function tetris$audio$log(s){
return cljs.core.tap_GT_((""+"aduio - "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)));
});
tetris.audio.effect_list = (function tetris$audio$effect_list(){
var iter__5649__auto__ = (function tetris$audio$effect_list_$_iter__52935(s__52936){
return (new cljs.core.LazySeq(null,(function (){
var s__52936__$1 = s__52936;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__52936__$1);
if(temp__5825__auto__){
var s__52936__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52936__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__52936__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__52938 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__52937 = (0);
while(true){
if((i__52937 < size__5648__auto__)){
var name = cljs.core._nth(c__5647__auto__,i__52937);
var id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+"effect/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)));
var src = (""+"assets/gameplay/effect/chiptune/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+".ogg");
cljs.core.chunk_append(b__52938,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,src], null));

var G__52967 = (i__52937 + (1));
i__52937 = G__52967;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52938),tetris$audio$effect_list_$_iter__52935(cljs.core.chunk_rest(s__52936__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52938),null);
}
} else {
var name = cljs.core.first(s__52936__$2);
var id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+"effect/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)));
var src = (""+"assets/gameplay/effect/chiptune/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+".ogg");
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,src], null),tetris$audio$effect_list_$_iter__52935(cljs.core.rest(s__52936__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rotate","land","hard-drop","lock","hold","fail"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52932_SHARP_){
return (""+"clear-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__52932_SHARP_));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(7)))));
});
tetris.audio.sample_list = (function tetris$audio$sample_list(sample_type){
var iter__5649__auto__ = (function tetris$audio$sample_list_$_iter__52942(s__52943){
return (new cljs.core.LazySeq(null,(function (){
var s__52943__$1 = s__52943;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__52943__$1);
if(temp__5825__auto__){
var s__52943__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52943__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__52943__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__52945 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__52944 = (0);
while(true){
if((i__52944 < size__5648__auto__)){
var name = cljs.core._nth(c__5647__auto__,i__52944);
var id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+"sample/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sample_type)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)));
var src = (""+"assets/gameplay/sample/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sample_type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+".ogg");
cljs.core.chunk_append(b__52945,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,src], null));

var G__52968 = (i__52944 + (1));
i__52944 = G__52968;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52945),tetris$audio$sample_list_$_iter__52942(cljs.core.chunk_rest(s__52943__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52945),null);
}
} else {
var name = cljs.core.first(s__52943__$2);
var id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+"sample/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sample_type)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)));
var src = (""+"assets/gameplay/sample/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sample_type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+".ogg");
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,src], null),tetris$audio$sample_list_$_iter__52942(cljs.core.rest(s__52943__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__52939_SHARP_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__52939_SHARP_));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(29))));
});
tetris.audio.load_sounds = (function tetris$audio$load_sounds(){
cljs.core.tap_GT_("load sounds");

var seq__52946 = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tetris.audio.effect_list(),tetris.audio.sample_list("bass")));
var chunk__52948 = null;
var count__52949 = (0);
var i__52950 = (0);
while(true){
if((i__52950 < count__52949)){
var vec__52958 = chunk__52948.cljs$core$IIndexed$_nth$arity$2(null,i__52950);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52958,(0),null);
var src = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52958,(1),null);
var sound_52969 = (new module$node_modules$howler$dist$howler.Howl(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [src], null),new cljs.core.Keyword(null,"volume","volume",1900330799),0.1], null))));
sound_52969.once("load",((function (seq__52946,chunk__52948,count__52949,i__52950,sound_52969,vec__52958,id,src){
return (function (_){
return tetris.audio.log((""+"loaded: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+" -> "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(src)));
});})(seq__52946,chunk__52948,count__52949,i__52950,sound_52969,vec__52958,id,src))
);

sound_52969.on("play",((function (seq__52946,chunk__52948,count__52949,i__52950,sound_52969,vec__52958,id,src){
return (function (_){
return tetris.audio.log((""+"played: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
});})(seq__52946,chunk__52948,count__52949,i__52950,sound_52969,vec__52958,id,src))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tetris.audio.sounds,cljs.core.assoc,id,sound_52969);


var G__52970 = seq__52946;
var G__52971 = chunk__52948;
var G__52972 = count__52949;
var G__52973 = (i__52950 + (1));
seq__52946 = G__52970;
chunk__52948 = G__52971;
count__52949 = G__52972;
i__52950 = G__52973;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__52946);
if(temp__5825__auto__){
var seq__52946__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52946__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__52946__$1);
var G__52974 = cljs.core.chunk_rest(seq__52946__$1);
var G__52975 = c__5694__auto__;
var G__52976 = cljs.core.count(c__5694__auto__);
var G__52977 = (0);
seq__52946 = G__52974;
chunk__52948 = G__52975;
count__52949 = G__52976;
i__52950 = G__52977;
continue;
} else {
var vec__52964 = cljs.core.first(seq__52946__$1);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52964,(0),null);
var src = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52964,(1),null);
var sound_52978 = (new module$node_modules$howler$dist$howler.Howl(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [src], null),new cljs.core.Keyword(null,"volume","volume",1900330799),0.1], null))));
sound_52978.once("load",((function (seq__52946,chunk__52948,count__52949,i__52950,sound_52978,vec__52964,id,src,seq__52946__$1,temp__5825__auto__){
return (function (_){
return tetris.audio.log((""+"loaded: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+" -> "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(src)));
});})(seq__52946,chunk__52948,count__52949,i__52950,sound_52978,vec__52964,id,src,seq__52946__$1,temp__5825__auto__))
);

sound_52978.on("play",((function (seq__52946,chunk__52948,count__52949,i__52950,sound_52978,vec__52964,id,src,seq__52946__$1,temp__5825__auto__){
return (function (_){
return tetris.audio.log((""+"played: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
});})(seq__52946,chunk__52948,count__52949,i__52950,sound_52978,vec__52964,id,src,seq__52946__$1,temp__5825__auto__))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tetris.audio.sounds,cljs.core.assoc,id,sound_52978);


var G__52979 = cljs.core.next(seq__52946__$1);
var G__52980 = null;
var G__52981 = (0);
var G__52982 = (0);
seq__52946 = G__52979;
chunk__52948 = G__52980;
count__52949 = G__52981;
i__52950 = G__52982;
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
