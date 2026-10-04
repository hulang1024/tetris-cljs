goog.provide('tetris.render.gameplay.tween_mgr');
tetris.render.gameplay.tween_mgr.update_tweens = (function tetris$render$gameplay$tween_mgr$update_tweens(view){
var seq__40562 = cljs.core.seq(new cljs.core.Keyword(null,"tweens","tweens",-1927735551).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)));
var chunk__40563 = null;
var count__40564 = (0);
var i__40565 = (0);
while(true){
if((i__40565 < count__40564)){
var vec__40582 = chunk__40563.cljs$core$IIndexed$_nth$arity$2(null,i__40565);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40582,(0),null);
var tween = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40582,(1),null);
if(cljs.core.truth_(tween)){
tween.update();
} else {
}


var G__40588 = seq__40562;
var G__40589 = chunk__40563;
var G__40590 = count__40564;
var G__40591 = (i__40565 + (1));
seq__40562 = G__40588;
chunk__40563 = G__40589;
count__40564 = G__40590;
i__40565 = G__40591;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__40562);
if(temp__5825__auto__){
var seq__40562__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40562__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__40562__$1);
var G__40592 = cljs.core.chunk_rest(seq__40562__$1);
var G__40593 = c__5694__auto__;
var G__40594 = cljs.core.count(c__5694__auto__);
var G__40595 = (0);
seq__40562 = G__40592;
chunk__40563 = G__40593;
count__40564 = G__40594;
i__40565 = G__40595;
continue;
} else {
var vec__40585 = cljs.core.first(seq__40562__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40585,(0),null);
var tween = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40585,(1),null);
if(cljs.core.truth_(tween)){
tween.update();
} else {
}


var G__40596 = cljs.core.next(seq__40562__$1);
var G__40597 = null;
var G__40598 = (0);
var G__40599 = (0);
seq__40562 = G__40596;
chunk__40563 = G__40597;
count__40564 = G__40598;
i__40565 = G__40599;
continue;
}
} else {
return null;
}
}
break;
}
});
tetris.render.gameplay.tween_mgr.stop_tween_BANG_ = (function tetris$render$gameplay$tween_mgr$stop_tween_BANG_(view,id){
var temp__5825__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweens","tweens",-1927735551),id], null));
if(cljs.core.truth_(temp__5825__auto__)){
var tween = temp__5825__auto__;
tween.stop();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweens","tweens",-1927735551),id], null),null);
} else {
return null;
}
});

//# sourceMappingURL=tetris.render.gameplay.tween_mgr.js.map
