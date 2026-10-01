goog.provide('tetris.render.gameplay.tween_mgr');
tetris.render.gameplay.tween_mgr.update_tweens = (function tetris$render$gameplay$tween_mgr$update_tweens(view){
var seq__27775 = cljs.core.seq(new cljs.core.Keyword(null,"tweens","tweens",-1927735551).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)));
var chunk__27776 = null;
var count__27777 = (0);
var i__27778 = (0);
while(true){
if((i__27778 < count__27777)){
var vec__27832 = chunk__27776.cljs$core$IIndexed$_nth$arity$2(null,i__27778);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27832,(0),null);
var tween = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27832,(1),null);
if(cljs.core.truth_(tween)){
tween.update();
} else {
}


var G__27913 = seq__27775;
var G__27914 = chunk__27776;
var G__27915 = count__27777;
var G__27916 = (i__27778 + (1));
seq__27775 = G__27913;
chunk__27776 = G__27914;
count__27777 = G__27915;
i__27778 = G__27916;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__27775);
if(temp__5825__auto__){
var seq__27775__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27775__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__27775__$1);
var G__27923 = cljs.core.chunk_rest(seq__27775__$1);
var G__27924 = c__5694__auto__;
var G__27925 = cljs.core.count(c__5694__auto__);
var G__27926 = (0);
seq__27775 = G__27923;
chunk__27776 = G__27924;
count__27777 = G__27925;
i__27778 = G__27926;
continue;
} else {
var vec__27841 = cljs.core.first(seq__27775__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27841,(0),null);
var tween = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27841,(1),null);
if(cljs.core.truth_(tween)){
tween.update();
} else {
}


var G__27932 = cljs.core.next(seq__27775__$1);
var G__27933 = null;
var G__27934 = (0);
var G__27935 = (0);
seq__27775 = G__27932;
chunk__27776 = G__27933;
count__27777 = G__27934;
i__27778 = G__27935;
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
