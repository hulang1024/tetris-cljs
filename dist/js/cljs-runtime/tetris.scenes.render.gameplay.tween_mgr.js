goog.provide('tetris.scenes.render.gameplay.tween_mgr');
tetris.scenes.render.gameplay.tween_mgr.update_tweens = (function tetris$scenes$render$gameplay$tween_mgr$update_tweens(view){
var seq__44070 = cljs.core.seq(new cljs.core.Keyword(null,"tweens","tweens",-1927735551).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)));
var chunk__44071 = null;
var count__44072 = (0);
var i__44073 = (0);
while(true){
if((i__44073 < count__44072)){
var vec__44084 = chunk__44071.cljs$core$IIndexed$_nth$arity$2(null,i__44073);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44084,(0),null);
var tween = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44084,(1),null);
if(cljs.core.truth_(tween)){
tween.update();
} else {
}


var G__44092 = seq__44070;
var G__44093 = chunk__44071;
var G__44094 = count__44072;
var G__44095 = (i__44073 + (1));
seq__44070 = G__44092;
chunk__44071 = G__44093;
count__44072 = G__44094;
i__44073 = G__44095;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__44070);
if(temp__5825__auto__){
var seq__44070__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44070__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__44070__$1);
var G__44097 = cljs.core.chunk_rest(seq__44070__$1);
var G__44098 = c__5694__auto__;
var G__44099 = cljs.core.count(c__5694__auto__);
var G__44100 = (0);
seq__44070 = G__44097;
chunk__44071 = G__44098;
count__44072 = G__44099;
i__44073 = G__44100;
continue;
} else {
var vec__44087 = cljs.core.first(seq__44070__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44087,(0),null);
var tween = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44087,(1),null);
if(cljs.core.truth_(tween)){
tween.update();
} else {
}


var G__44101 = cljs.core.next(seq__44070__$1);
var G__44102 = null;
var G__44103 = (0);
var G__44104 = (0);
seq__44070 = G__44101;
chunk__44071 = G__44102;
count__44072 = G__44103;
i__44073 = G__44104;
continue;
}
} else {
return null;
}
}
break;
}
});
tetris.scenes.render.gameplay.tween_mgr.stop_tween_BANG_ = (function tetris$scenes$render$gameplay$tween_mgr$stop_tween_BANG_(view,id){
var temp__5825__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweens","tweens",-1927735551),id], null));
if(cljs.core.truth_(temp__5825__auto__)){
var tween = temp__5825__auto__;
tween.stop();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweens","tweens",-1927735551),id], null),null);
} else {
return null;
}
});

//# sourceMappingURL=tetris.scenes.render.gameplay.tween_mgr.js.map
