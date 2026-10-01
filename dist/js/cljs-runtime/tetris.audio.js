goog.provide('tetris.audio');
var module$node_modules$howler$dist$howler=shadow.js.require("module$node_modules$howler$dist$howler", {});
tetris.audio.sounds = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
tetris.audio.sound = (function tetris$audio$sound(id){
var G__45838 = cljs.core.deref(tetris.audio.sounds);
return (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(G__45838) : id.call(null,G__45838));
});
tetris.audio.log = (function tetris$audio$log(s){
return cljs.core.tap_GT_((""+"aduio - "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)));
});
tetris.audio.effect_list = (function tetris$audio$effect_list(){
var iter__5649__auto__ = (function tetris$audio$effect_list_$_iter__45840(s__45841){
return (new cljs.core.LazySeq(null,(function (){
var s__45841__$1 = s__45841;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__45841__$1);
if(temp__5825__auto__){
var s__45841__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45841__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__45841__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__45843 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__45842 = (0);
while(true){
if((i__45842 < size__5648__auto__)){
var name = cljs.core._nth(c__5647__auto__,i__45842);
var id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+"effect/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)));
var src = (""+"assets/gameplay/effect/chiptune/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+".ogg");
cljs.core.chunk_append(b__45843,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,src], null));

var G__45867 = (i__45842 + (1));
i__45842 = G__45867;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45843),tetris$audio$effect_list_$_iter__45840(cljs.core.chunk_rest(s__45841__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45843),null);
}
} else {
var name = cljs.core.first(s__45841__$2);
var id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+"effect/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)));
var src = (""+"assets/gameplay/effect/chiptune/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+".ogg");
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,src], null),tetris$audio$effect_list_$_iter__45840(cljs.core.rest(s__45841__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rotate","land","hard-drop","lock","hold","fail"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45839_SHARP_){
return (""+"clear-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__45839_SHARP_));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(7)))));
});
tetris.audio.sample_list = (function tetris$audio$sample_list(sample_type){
var iter__5649__auto__ = (function tetris$audio$sample_list_$_iter__45845(s__45846){
return (new cljs.core.LazySeq(null,(function (){
var s__45846__$1 = s__45846;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__45846__$1);
if(temp__5825__auto__){
var s__45846__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45846__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__45846__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__45848 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__45847 = (0);
while(true){
if((i__45847 < size__5648__auto__)){
var name = cljs.core._nth(c__5647__auto__,i__45847);
var id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+"sample/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sample_type)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)));
var src = (""+"assets/gameplay/sample/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sample_type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+".ogg");
cljs.core.chunk_append(b__45848,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,src], null));

var G__45874 = (i__45847 + (1));
i__45847 = G__45874;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45848),tetris$audio$sample_list_$_iter__45845(cljs.core.chunk_rest(s__45846__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45848),null);
}
} else {
var name = cljs.core.first(s__45846__$2);
var id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+"sample/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sample_type)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)));
var src = (""+"assets/gameplay/sample/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sample_type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+".ogg");
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,src], null),tetris$audio$sample_list_$_iter__45845(cljs.core.rest(s__45846__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__45844_SHARP_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__45844_SHARP_));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(29))));
});
tetris.audio.load_sounds = (function tetris$audio$load_sounds(){
cljs.core.tap_GT_("load sounds");

var seq__45849 = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tetris.audio.effect_list(),tetris.audio.sample_list("bass")));
var chunk__45851 = null;
var count__45852 = (0);
var i__45853 = (0);
while(true){
if((i__45853 < count__45852)){
var vec__45861 = chunk__45851.cljs$core$IIndexed$_nth$arity$2(null,i__45853);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45861,(0),null);
var src = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45861,(1),null);
var sound_45875 = (new module$node_modules$howler$dist$howler.Howl(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [src], null),new cljs.core.Keyword(null,"volume","volume",1900330799),0.1], null))));
sound_45875.once("load",((function (seq__45849,chunk__45851,count__45852,i__45853,sound_45875,vec__45861,id,src){
return (function (_){
return tetris.audio.log((""+"loaded: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+" -> "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(src)));
});})(seq__45849,chunk__45851,count__45852,i__45853,sound_45875,vec__45861,id,src))
);

sound_45875.on("play",((function (seq__45849,chunk__45851,count__45852,i__45853,sound_45875,vec__45861,id,src){
return (function (_){
return tetris.audio.log((""+"played: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
});})(seq__45849,chunk__45851,count__45852,i__45853,sound_45875,vec__45861,id,src))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tetris.audio.sounds,cljs.core.assoc,id,sound_45875);


var G__45876 = seq__45849;
var G__45877 = chunk__45851;
var G__45878 = count__45852;
var G__45879 = (i__45853 + (1));
seq__45849 = G__45876;
chunk__45851 = G__45877;
count__45852 = G__45878;
i__45853 = G__45879;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__45849);
if(temp__5825__auto__){
var seq__45849__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45849__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__45849__$1);
var G__45880 = cljs.core.chunk_rest(seq__45849__$1);
var G__45881 = c__5694__auto__;
var G__45882 = cljs.core.count(c__5694__auto__);
var G__45883 = (0);
seq__45849 = G__45880;
chunk__45851 = G__45881;
count__45852 = G__45882;
i__45853 = G__45883;
continue;
} else {
var vec__45864 = cljs.core.first(seq__45849__$1);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45864,(0),null);
var src = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45864,(1),null);
var sound_45884 = (new module$node_modules$howler$dist$howler.Howl(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [src], null),new cljs.core.Keyword(null,"volume","volume",1900330799),0.1], null))));
sound_45884.once("load",((function (seq__45849,chunk__45851,count__45852,i__45853,sound_45884,vec__45864,id,src,seq__45849__$1,temp__5825__auto__){
return (function (_){
return tetris.audio.log((""+"loaded: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+" -> "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(src)));
});})(seq__45849,chunk__45851,count__45852,i__45853,sound_45884,vec__45864,id,src,seq__45849__$1,temp__5825__auto__))
);

sound_45884.on("play",((function (seq__45849,chunk__45851,count__45852,i__45853,sound_45884,vec__45864,id,src,seq__45849__$1,temp__5825__auto__){
return (function (_){
return tetris.audio.log((""+"played: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
});})(seq__45849,chunk__45851,count__45852,i__45853,sound_45884,vec__45864,id,src,seq__45849__$1,temp__5825__auto__))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tetris.audio.sounds,cljs.core.assoc,id,sound_45884);


var G__45885 = cljs.core.next(seq__45849__$1);
var G__45886 = null;
var G__45887 = (0);
var G__45888 = (0);
seq__45849 = G__45885;
chunk__45851 = G__45886;
count__45852 = G__45887;
i__45853 = G__45888;
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
