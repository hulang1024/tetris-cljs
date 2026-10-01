goog.provide('tetris.render.gameplay.piece');
var module$node_modules$pixi_DOT_js$lib$index=shadow.js.require("module$node_modules$pixi_DOT_js$lib$index", {});
tetris.render.gameplay.piece.create_piece_cell_textures = (function tetris$render$gameplay$piece$create_piece_cell_textures(style){
var sheet_texture = module$node_modules$pixi_DOT_js$lib$index.Assets.get((""+"gameplay/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(style)));
var cell_count = ((7) + (2));
var fw = (sheet_texture.width / cell_count);
var fh = sheet_texture.height;
(sheet_texture.source.scaleMode = "nearest");

return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (new module$node_modules$pixi_DOT_js$lib$index.Texture(({"source": sheet_texture.source, "frame": (new module$node_modules$pixi_DOT_js$lib$index.Rectangle((i * fw),(0),fw,fh))})));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cell_count));
});
tetris.render.gameplay.piece.create_piece_cell_sprite = (function tetris$render$gameplay$piece$create_piece_cell_sprite(size){
return (new module$node_modules$pixi_DOT_js$lib$index.Sprite(({"label": "piecel-cell", "x": (0), "y": (0), "width": size, "height": size})));
});
tetris.render.gameplay.piece.add_cells = (function tetris$render$gameplay$piece$add_cells(container,cell_count,cell_size){
return cljs.core.vec((function (){var iter__5649__auto__ = (function tetris$render$gameplay$piece$add_cells_$_iter__43601(s__43602){
return (new cljs.core.LazySeq(null,(function (){
var s__43602__$1 = s__43602;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__43602__$1);
if(temp__5825__auto__){
var s__43602__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43602__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__43602__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__43604 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__43603 = (0);
while(true){
if((i__43603 < size__5648__auto__)){
var _ = cljs.core._nth(c__5647__auto__,i__43603);
cljs.core.chunk_append(b__43604,(function (){var sprite = tetris.render.gameplay.piece.create_piece_cell_sprite(cell_size);
return container.addChild(sprite);
})());

var G__43629 = (i__43603 + (1));
i__43603 = G__43629;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43604),tetris$render$gameplay$piece$add_cells_$_iter__43601(cljs.core.chunk_rest(s__43602__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43604),null);
}
} else {
var _ = cljs.core.first(s__43602__$2);
return cljs.core.cons((function (){var sprite = tetris.render.gameplay.piece.create_piece_cell_sprite(cell_size);
return container.addChild(sprite);
})(),tetris$render$gameplay$piece$add_cells_$_iter__43601(cljs.core.rest(s__43602__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cell_count));
})());
});
tetris.render.gameplay.piece.render_piece = (function tetris$render$gameplay$piece$render_piece(var_args){
var args__5903__auto__ = [];
var len__5897__auto___43632 = arguments.length;
var i__5898__auto___43633 = (0);
while(true){
if((i__5898__auto___43633 < len__5897__auto___43632)){
args__5903__auto__.push((arguments[i__5898__auto___43633]));

var G__43634 = (i__5898__auto___43633 + (1));
i__5898__auto___43633 = G__43634;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((3) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((3)),(0),null)):null);
return tetris.render.gameplay.piece.render_piece.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5904__auto__);
});

(tetris.render.gameplay.piece.render_piece.cljs$core$IFn$_invoke$arity$variadic = (function (view,display_cells,piece_state,ghost_QMARK_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"visible","visible",-1024216805).cljs$core$IFn$_invoke$arity$1(piece_state))){
var seq__43609 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,display_cells,new cljs.core.Keyword(null,"cells","cells",-985166822).cljs$core$IFn$_invoke$arity$1(piece_state)));
var chunk__43610 = null;
var count__43611 = (0);
var i__43612 = (0);
while(true){
if((i__43612 < count__43611)){
var vec__43619 = chunk__43610.cljs$core$IIndexed$_nth$arity$2(null,i__43612);
var cell_sprite = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43619,(0),null);
var cell_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43619,(1),null);
(cell_sprite.texture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece-cell-textures","piece-cell-textures",754648682).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"color-index","color-index",560460581).cljs$core$IFn$_invoke$arity$1(piece_state)));

(cell_sprite.visible = true);

(cell_sprite.alpha = (cljs.core.truth_(ghost_QMARK_)?0.2:(1)));

cell_sprite.position.set(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell_pos),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell_pos));


var G__43636 = seq__43609;
var G__43637 = chunk__43610;
var G__43638 = count__43611;
var G__43639 = (i__43612 + (1));
seq__43609 = G__43636;
chunk__43610 = G__43637;
count__43611 = G__43638;
i__43612 = G__43639;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__43609);
if(temp__5825__auto__){
var seq__43609__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43609__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__43609__$1);
var G__43640 = cljs.core.chunk_rest(seq__43609__$1);
var G__43641 = c__5694__auto__;
var G__43642 = cljs.core.count(c__5694__auto__);
var G__43643 = (0);
seq__43609 = G__43640;
chunk__43610 = G__43641;
count__43611 = G__43642;
i__43612 = G__43643;
continue;
} else {
var vec__43622 = cljs.core.first(seq__43609__$1);
var cell_sprite = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43622,(0),null);
var cell_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43622,(1),null);
(cell_sprite.texture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece-cell-textures","piece-cell-textures",754648682).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"color-index","color-index",560460581).cljs$core$IFn$_invoke$arity$1(piece_state)));

(cell_sprite.visible = true);

(cell_sprite.alpha = (cljs.core.truth_(ghost_QMARK_)?0.2:(1)));

cell_sprite.position.set(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell_pos),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell_pos));


var G__43644 = cljs.core.next(seq__43609__$1);
var G__43645 = null;
var G__43646 = (0);
var G__43647 = (0);
seq__43609 = G__43644;
chunk__43610 = G__43645;
count__43611 = G__43646;
i__43612 = G__43647;
continue;
}
} else {
return null;
}
}
break;
}
} else {
var seq__43625 = cljs.core.seq(display_cells);
var chunk__43626 = null;
var count__43627 = (0);
var i__43628 = (0);
while(true){
if((i__43628 < count__43627)){
var cell_sprite = chunk__43626.cljs$core$IIndexed$_nth$arity$2(null,i__43628);
(cell_sprite.visible = false);


var G__43648 = seq__43625;
var G__43649 = chunk__43626;
var G__43650 = count__43627;
var G__43651 = (i__43628 + (1));
seq__43625 = G__43648;
chunk__43626 = G__43649;
count__43627 = G__43650;
i__43628 = G__43651;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__43625);
if(temp__5825__auto__){
var seq__43625__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43625__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__43625__$1);
var G__43652 = cljs.core.chunk_rest(seq__43625__$1);
var G__43653 = c__5694__auto__;
var G__43654 = cljs.core.count(c__5694__auto__);
var G__43655 = (0);
seq__43625 = G__43652;
chunk__43626 = G__43653;
count__43627 = G__43654;
i__43628 = G__43655;
continue;
} else {
var cell_sprite = cljs.core.first(seq__43625__$1);
(cell_sprite.visible = false);


var G__43660 = cljs.core.next(seq__43625__$1);
var G__43661 = null;
var G__43662 = (0);
var G__43663 = (0);
seq__43625 = G__43660;
chunk__43626 = G__43661;
count__43627 = G__43662;
i__43628 = G__43663;
continue;
}
} else {
return null;
}
}
break;
}
}
}));

(tetris.render.gameplay.piece.render_piece.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tetris.render.gameplay.piece.render_piece.cljs$lang$applyTo = (function (seq43605){
var G__43606 = cljs.core.first(seq43605);
var seq43605__$1 = cljs.core.next(seq43605);
var G__43607 = cljs.core.first(seq43605__$1);
var seq43605__$2 = cljs.core.next(seq43605__$1);
var G__43608 = cljs.core.first(seq43605__$2);
var seq43605__$3 = cljs.core.next(seq43605__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43606,G__43607,G__43608,seq43605__$3);
}));


//# sourceMappingURL=tetris.render.gameplay.piece.js.map
