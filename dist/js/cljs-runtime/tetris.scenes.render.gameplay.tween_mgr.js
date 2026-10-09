goog.provide('tetris.scenes.render.gameplay.tween_mgr');
tetris.scenes.render.gameplay.tween_mgr.update_tweens = (function tetris$scenes$render$gameplay$tween_mgr$update_tweens(view){
var seq__47136 = cljs.core.seq(new cljs.core.Keyword(null,"tweens","tweens",-1927735551).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)));
var chunk__47137 = null;
var count__47138 = (0);
var i__47139 = (0);
while(true){
if((i__47139 < count__47138)){
var vec__47150 = chunk__47137.cljs$core$IIndexed$_nth$arity$2(null,i__47139);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47150,(0),null);
var tween = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47150,(1),null);
if(cljs.core.truth_(tween)){
tween.update();
} else {
}


var G__47174 = seq__47136;
var G__47175 = chunk__47137;
var G__47176 = count__47138;
var G__47177 = (i__47139 + (1));
seq__47136 = G__47174;
chunk__47137 = G__47175;
count__47138 = G__47176;
i__47139 = G__47177;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__47136);
if(temp__5825__auto__){
var seq__47136__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47136__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__47136__$1);
var G__47181 = cljs.core.chunk_rest(seq__47136__$1);
var G__47182 = c__5694__auto__;
var G__47183 = cljs.core.count(c__5694__auto__);
var G__47184 = (0);
seq__47136 = G__47181;
chunk__47137 = G__47182;
count__47138 = G__47183;
i__47139 = G__47184;
continue;
} else {
var vec__47161 = cljs.core.first(seq__47136__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47161,(0),null);
var tween = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47161,(1),null);
if(cljs.core.truth_(tween)){
tween.update();
} else {
}


var G__47185 = cljs.core.next(seq__47136__$1);
var G__47186 = null;
var G__47187 = (0);
var G__47188 = (0);
seq__47136 = G__47185;
chunk__47137 = G__47186;
count__47138 = G__47187;
i__47139 = G__47188;
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
