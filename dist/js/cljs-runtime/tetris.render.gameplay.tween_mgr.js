goog.provide('tetris.render.gameplay.tween_mgr');
tetris.render.gameplay.tween_mgr.update_tweens = (function tetris$render$gameplay$tween_mgr$update_tweens(view){
var seq__39743 = cljs.core.seq(new cljs.core.Keyword(null,"tweens","tweens",-1927735551).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)));
var chunk__39744 = null;
var count__39745 = (0);
var i__39746 = (0);
while(true){
if((i__39746 < count__39745)){
var vec__39767 = chunk__39744.cljs$core$IIndexed$_nth$arity$2(null,i__39746);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39767,(0),null);
var tween = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39767,(1),null);
if(cljs.core.truth_(tween)){
tween.update();
} else {
}


var G__39775 = seq__39743;
var G__39776 = chunk__39744;
var G__39777 = count__39745;
var G__39778 = (i__39746 + (1));
seq__39743 = G__39775;
chunk__39744 = G__39776;
count__39745 = G__39777;
i__39746 = G__39778;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__39743);
if(temp__5825__auto__){
var seq__39743__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39743__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__39743__$1);
var G__39779 = cljs.core.chunk_rest(seq__39743__$1);
var G__39780 = c__5694__auto__;
var G__39781 = cljs.core.count(c__5694__auto__);
var G__39782 = (0);
seq__39743 = G__39779;
chunk__39744 = G__39780;
count__39745 = G__39781;
i__39746 = G__39782;
continue;
} else {
var vec__39770 = cljs.core.first(seq__39743__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39770,(0),null);
var tween = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39770,(1),null);
if(cljs.core.truth_(tween)){
tween.update();
} else {
}


var G__39783 = cljs.core.next(seq__39743__$1);
var G__39784 = null;
var G__39785 = (0);
var G__39786 = (0);
seq__39743 = G__39783;
chunk__39744 = G__39784;
count__39745 = G__39785;
i__39746 = G__39786;
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
