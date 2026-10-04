goog.provide('tetris.audio');
var module$node_modules$howler$dist$howler=shadow.js.require("module$node_modules$howler$dist$howler", {});
tetris.audio.sounds = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
tetris.audio.sound = (function tetris$audio$sound(id){
var G__39624 = cljs.core.deref(tetris.audio.sounds);
return (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(G__39624) : id.call(null,G__39624));
});
tetris.audio.log = (function tetris$audio$log(s){
return cljs.core.tap_GT_((""+"aduio - "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)));
});
tetris.audio.effect_list = (function tetris$audio$effect_list(){
var iter__5649__auto__ = (function tetris$audio$effect_list_$_iter__39631(s__39632){
return (new cljs.core.LazySeq(null,(function (){
var s__39632__$1 = s__39632;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__39632__$1);
if(temp__5825__auto__){
var s__39632__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__39632__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__39632__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__39634 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__39633 = (0);
while(true){
if((i__39633 < size__5648__auto__)){
var name = cljs.core._nth(c__5647__auto__,i__39633);
var id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+"effect/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)));
var src = (""+"assets/gameplay/effect/chiptune/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+".ogg");
cljs.core.chunk_append(b__39634,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,src], null));

var G__39695 = (i__39633 + (1));
i__39633 = G__39695;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39634),tetris$audio$effect_list_$_iter__39631(cljs.core.chunk_rest(s__39632__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39634),null);
}
} else {
var name = cljs.core.first(s__39632__$2);
var id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+"effect/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)));
var src = (""+"assets/gameplay/effect/chiptune/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+".ogg");
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,src], null),tetris$audio$effect_list_$_iter__39631(cljs.core.rest(s__39632__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rotate","land","hard-drop","lock","hold","fail"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39629_SHARP_){
return (""+"clear-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__39629_SHARP_));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(7)))));
});
tetris.audio.sample_list = (function tetris$audio$sample_list(sample_type){
var iter__5649__auto__ = (function tetris$audio$sample_list_$_iter__39647(s__39648){
return (new cljs.core.LazySeq(null,(function (){
var s__39648__$1 = s__39648;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__39648__$1);
if(temp__5825__auto__){
var s__39648__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__39648__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__39648__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__39650 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__39649 = (0);
while(true){
if((i__39649 < size__5648__auto__)){
var name = cljs.core._nth(c__5647__auto__,i__39649);
var id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+"sample/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sample_type)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)));
var src = (""+"assets/gameplay/sample/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sample_type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+".ogg");
cljs.core.chunk_append(b__39650,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,src], null));

var G__39697 = (i__39649 + (1));
i__39649 = G__39697;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39650),tetris$audio$sample_list_$_iter__39647(cljs.core.chunk_rest(s__39648__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39650),null);
}
} else {
var name = cljs.core.first(s__39648__$2);
var id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+"sample/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sample_type)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)));
var src = (""+"assets/gameplay/sample/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sample_type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+".ogg");
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,src], null),tetris$audio$sample_list_$_iter__39647(cljs.core.rest(s__39648__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__39640_SHARP_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__39640_SHARP_));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(29))));
});
tetris.audio.load_sounds = (function tetris$audio$load_sounds(){
cljs.core.tap_GT_("load sounds");

var seq__39660 = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tetris.audio.effect_list(),tetris.audio.sample_list("bass")));
var chunk__39662 = null;
var count__39663 = (0);
var i__39664 = (0);
while(true){
if((i__39664 < count__39663)){
var vec__39677 = chunk__39662.cljs$core$IIndexed$_nth$arity$2(null,i__39664);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39677,(0),null);
var src = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39677,(1),null);
var sound_39699 = (new module$node_modules$howler$dist$howler.Howl(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [src], null),new cljs.core.Keyword(null,"volume","volume",1900330799),0.1], null))));
sound_39699.once("load",((function (seq__39660,chunk__39662,count__39663,i__39664,sound_39699,vec__39677,id,src){
return (function (_){
return tetris.audio.log((""+"loaded: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+" -> "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(src)));
});})(seq__39660,chunk__39662,count__39663,i__39664,sound_39699,vec__39677,id,src))
);

sound_39699.on("play",((function (seq__39660,chunk__39662,count__39663,i__39664,sound_39699,vec__39677,id,src){
return (function (_){
return tetris.audio.log((""+"played: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
});})(seq__39660,chunk__39662,count__39663,i__39664,sound_39699,vec__39677,id,src))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tetris.audio.sounds,cljs.core.assoc,id,sound_39699);


var G__39700 = seq__39660;
var G__39701 = chunk__39662;
var G__39702 = count__39663;
var G__39703 = (i__39664 + (1));
seq__39660 = G__39700;
chunk__39662 = G__39701;
count__39663 = G__39702;
i__39664 = G__39703;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__39660);
if(temp__5825__auto__){
var seq__39660__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39660__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__39660__$1);
var G__39704 = cljs.core.chunk_rest(seq__39660__$1);
var G__39705 = c__5694__auto__;
var G__39706 = cljs.core.count(c__5694__auto__);
var G__39707 = (0);
seq__39660 = G__39704;
chunk__39662 = G__39705;
count__39663 = G__39706;
i__39664 = G__39707;
continue;
} else {
var vec__39682 = cljs.core.first(seq__39660__$1);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39682,(0),null);
var src = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39682,(1),null);
var sound_39708 = (new module$node_modules$howler$dist$howler.Howl(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [src], null),new cljs.core.Keyword(null,"volume","volume",1900330799),0.1], null))));
sound_39708.once("load",((function (seq__39660,chunk__39662,count__39663,i__39664,sound_39708,vec__39682,id,src,seq__39660__$1,temp__5825__auto__){
return (function (_){
return tetris.audio.log((""+"loaded: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+" -> "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(src)));
});})(seq__39660,chunk__39662,count__39663,i__39664,sound_39708,vec__39682,id,src,seq__39660__$1,temp__5825__auto__))
);

sound_39708.on("play",((function (seq__39660,chunk__39662,count__39663,i__39664,sound_39708,vec__39682,id,src,seq__39660__$1,temp__5825__auto__){
return (function (_){
return tetris.audio.log((""+"played: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
});})(seq__39660,chunk__39662,count__39663,i__39664,sound_39708,vec__39682,id,src,seq__39660__$1,temp__5825__auto__))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tetris.audio.sounds,cljs.core.assoc,id,sound_39708);


var G__39716 = cljs.core.next(seq__39660__$1);
var G__39717 = null;
var G__39718 = (0);
var G__39719 = (0);
seq__39660 = G__39716;
chunk__39662 = G__39717;
count__39663 = G__39718;
i__39664 = G__39719;
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
