goog.provide('tetris.render.gameplay.hud');
var module$node_modules$pixi_DOT_js$lib$index=shadow.js.require("module$node_modules$pixi_DOT_js$lib$index", {});
tetris.render.gameplay.hud.hold = (function tetris$render$gameplay$hud$hold(layout){
return (new module$node_modules$pixi_DOT_js$lib$index.Container(({"label": "hold", "x": new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(layout), "y": new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(layout)})));
});
tetris.render.gameplay.hud.preview = (function tetris$render$gameplay$hud$preview(layout){
return (new module$node_modules$pixi_DOT_js$lib$index.Container(({"label": "next", "x": new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(layout), "y": new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(layout)})));
});
tetris.render.gameplay.hud.render_hold = (function tetris$render$gameplay$hud$render_hold(view,data){
if(((cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hold","hold",-1621118005),new cljs.core.Keyword(null,"cells","cells",-985166822)], null)))) && (cljs.core.not(new cljs.core.Keyword(null,"hold","hold",-1621118005).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)))))){
var piece_43871 = tetris.render.gameplay.piece.add_cells(new cljs.core.Keyword(null,"hold-container","hold-container",872721688).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),(4),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"hold","hold",-1621118005),new cljs.core.Keyword(null,"cell","cell",764245084),new cljs.core.Keyword(null,"size","size",1098693007)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc,new cljs.core.Keyword(null,"hold","hold",-1621118005),piece_43871);
} else {
}

return tetris.render.gameplay.piece.render_piece(view,new cljs.core.Keyword(null,"hold","hold",-1621118005).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"hold","hold",-1621118005).cljs$core$IFn$_invoke$arity$1(data));
});
tetris.render.gameplay.hud.render_next = (function tetris$render$gameplay$hud$render_next(view,data){
if(((cljs.core.seq(new cljs.core.Keyword(null,"next","next",-117701485).cljs$core$IFn$_invoke$arity$1(data))) && (cljs.core.not(new cljs.core.Keyword(null,"next","next",-117701485).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)))))){
var display_pieces_43872 = cljs.core.vec((function (){var iter__5649__auto__ = (function tetris$render$gameplay$hud$render_next_$_iter__43851(s__43852){
return (new cljs.core.LazySeq(null,(function (){
var s__43852__$1 = s__43852;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__43852__$1);
if(temp__5825__auto__){
var s__43852__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43852__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__43852__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__43854 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__43853 = (0);
while(true){
if((i__43853 < size__5648__auto__)){
var _ = cljs.core._nth(c__5647__auto__,i__43853);
cljs.core.chunk_append(b__43854,tetris.render.gameplay.piece.add_cells(new cljs.core.Keyword(null,"next-container","next-container",-2082591536).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),(4),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.Keyword(null,"cell","cell",764245084),new cljs.core.Keyword(null,"size","size",1098693007)], null))));

var G__43873 = (i__43853 + (1));
i__43853 = G__43873;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43854),tetris$render$gameplay$hud$render_next_$_iter__43851(cljs.core.chunk_rest(s__43852__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43854),null);
}
} else {
var _ = cljs.core.first(s__43852__$2);
return cljs.core.cons(tetris.render.gameplay.piece.add_cells(new cljs.core.Keyword(null,"next-container","next-container",-2082591536).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),(4),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.Keyword(null,"cell","cell",764245084),new cljs.core.Keyword(null,"size","size",1098693007)], null))),tetris$render$gameplay$hud$render_next_$_iter__43851(cljs.core.rest(s__43852__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"next","next",-117701485).cljs$core$IFn$_invoke$arity$1(data))));
})());
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc,new cljs.core.Keyword(null,"next","next",-117701485),display_pieces_43872);
} else {
}

var seq__43855 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,new cljs.core.Keyword(null,"next","next",-117701485).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"next","next",-117701485).cljs$core$IFn$_invoke$arity$1(data)));
var chunk__43856 = null;
var count__43857 = (0);
var i__43858 = (0);
while(true){
if((i__43858 < count__43857)){
var vec__43865 = chunk__43856.cljs$core$IIndexed$_nth$arity$2(null,i__43858);
var piece_v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43865,(0),null);
var piece_d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43865,(1),null);
tetris.render.gameplay.piece.render_piece(view,piece_v,piece_d);


var G__43874 = seq__43855;
var G__43875 = chunk__43856;
var G__43876 = count__43857;
var G__43877 = (i__43858 + (1));
seq__43855 = G__43874;
chunk__43856 = G__43875;
count__43857 = G__43876;
i__43858 = G__43877;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__43855);
if(temp__5825__auto__){
var seq__43855__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43855__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__43855__$1);
var G__43878 = cljs.core.chunk_rest(seq__43855__$1);
var G__43879 = c__5694__auto__;
var G__43880 = cljs.core.count(c__5694__auto__);
var G__43881 = (0);
seq__43855 = G__43878;
chunk__43856 = G__43879;
count__43857 = G__43880;
i__43858 = G__43881;
continue;
} else {
var vec__43868 = cljs.core.first(seq__43855__$1);
var piece_v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43868,(0),null);
var piece_d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43868,(1),null);
tetris.render.gameplay.piece.render_piece(view,piece_v,piece_d);


var G__43882 = cljs.core.next(seq__43855__$1);
var G__43883 = null;
var G__43884 = (0);
var G__43885 = (0);
seq__43855 = G__43882;
chunk__43856 = G__43883;
count__43857 = G__43884;
i__43858 = G__43885;
continue;
}
} else {
return null;
}
}
break;
}
});
tetris.render.gameplay.hud.render_BANG_ = (function tetris$render$gameplay$hud$render_BANG_(view,data){
tetris.render.gameplay.hud.render_hold(view,data);

return tetris.render.gameplay.hud.render_next(view,data);
});

//# sourceMappingURL=tetris.render.gameplay.hud.js.map
