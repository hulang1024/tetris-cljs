goog.provide('tetris.render.gameplay.piece');
var module$node_modules$pixi_DOT_js$lib$index=shadow.js.require("module$node_modules$pixi_DOT_js$lib$index", {});
var module$node_modules$pixi_filters$lib$index=shadow.js.require("module$node_modules$pixi_filters$lib$index", {});
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
return (new module$node_modules$pixi_DOT_js$lib$index.Sprite(({"label": "piece-cell", "x": (0), "y": (0), "width": size, "height": size})));
});
tetris.render.gameplay.piece.add_cells = (function tetris$render$gameplay$piece$add_cells(container,cell_count,cell_size){
return cljs.core.vec((function (){var iter__5649__auto__ = (function tetris$render$gameplay$piece$add_cells_$_iter__39751(s__39752){
return (new cljs.core.LazySeq(null,(function (){
var s__39752__$1 = s__39752;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__39752__$1);
if(temp__5825__auto__){
var s__39752__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__39752__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__39752__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__39754 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__39753 = (0);
while(true){
if((i__39753 < size__5648__auto__)){
var _ = cljs.core._nth(c__5647__auto__,i__39753);
cljs.core.chunk_append(b__39754,(function (){var sprite = tetris.render.gameplay.piece.create_piece_cell_sprite(cell_size);
return container.addChild(sprite);
})());

var G__39808 = (i__39753 + (1));
i__39753 = G__39808;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39754),tetris$render$gameplay$piece$add_cells_$_iter__39751(cljs.core.chunk_rest(s__39752__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39754),null);
}
} else {
var _ = cljs.core.first(s__39752__$2);
return cljs.core.cons((function (){var sprite = tetris.render.gameplay.piece.create_piece_cell_sprite(cell_size);
return container.addChild(sprite);
})(),tetris$render$gameplay$piece$add_cells_$_iter__39751(cljs.core.rest(s__39752__$2)));
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
tetris.render.gameplay.piece.piece_container = (function tetris$render$gameplay$piece$piece_container(p__39773){
var map__39774 = p__39773;
var map__39774__$1 = cljs.core.__destructure_map(map__39774);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39774__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var zIndex = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39774__$1,new cljs.core.Keyword(null,"zIndex","zIndex",-1588341609));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39774__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39774__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var cell_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39774__$1,new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287));
var ghost_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39774__$1,new cljs.core.Keyword(null,"ghost?","ghost?",864936484));
var container = (new module$node_modules$pixi_DOT_js$lib$index.Container(({"label": label, "zIndex": (function (){var or__5162__auto__ = zIndex;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (0);
}
})(), "x": (function (){var or__5162__auto__ = x;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (0);
}
})(), "y": (function (){var or__5162__auto__ = y;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (0);
}
})()})));
tetris.render.gameplay.piece.add_cells(container,(4),cell_size);

if(cljs.core.truth_(ghost_QMARK_)){
(container.filters = [(new module$node_modules$pixi_filters$lib$index.OutlineFilter(({"thickness": (2), "color": (15658734), "knockout": true})))]);
} else {
}

return container;
});
tetris.render.gameplay.piece.render_piece = (function tetris$render$gameplay$piece$render_piece(view,piece,piece_data){
(piece.visible = new cljs.core.Keyword(null,"visible","visible",-1024216805).cljs$core$IFn$_invoke$arity$1(piece_data));

var seq__39787 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,piece.children,new cljs.core.Keyword(null,"cells","cells",-985166822).cljs$core$IFn$_invoke$arity$1(piece_data)));
var chunk__39788 = null;
var count__39789 = (0);
var i__39790 = (0);
while(true){
if((i__39790 < count__39789)){
var vec__39797 = chunk__39788.cljs$core$IIndexed$_nth$arity$2(null,i__39790);
var cell_sprite = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39797,(0),null);
var cell_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39797,(1),null);
(cell_sprite.texture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece-cell-textures","piece-cell-textures",754648682).cljs$core$IFn$_invoke$arity$1(view),new cljs.core.Keyword(null,"color-index","color-index",560460581).cljs$core$IFn$_invoke$arity$1(piece_data)));

cell_sprite.position.set(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell_pos),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell_pos));


var G__39809 = seq__39787;
var G__39810 = chunk__39788;
var G__39811 = count__39789;
var G__39812 = (i__39790 + (1));
seq__39787 = G__39809;
chunk__39788 = G__39810;
count__39789 = G__39811;
i__39790 = G__39812;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__39787);
if(temp__5825__auto__){
var seq__39787__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39787__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__39787__$1);
var G__39813 = cljs.core.chunk_rest(seq__39787__$1);
var G__39814 = c__5694__auto__;
var G__39815 = cljs.core.count(c__5694__auto__);
var G__39816 = (0);
seq__39787 = G__39813;
chunk__39788 = G__39814;
count__39789 = G__39815;
i__39790 = G__39816;
continue;
} else {
var vec__39802 = cljs.core.first(seq__39787__$1);
var cell_sprite = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39802,(0),null);
var cell_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39802,(1),null);
(cell_sprite.texture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece-cell-textures","piece-cell-textures",754648682).cljs$core$IFn$_invoke$arity$1(view),new cljs.core.Keyword(null,"color-index","color-index",560460581).cljs$core$IFn$_invoke$arity$1(piece_data)));

cell_sprite.position.set(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell_pos),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell_pos));


var G__39817 = cljs.core.next(seq__39787__$1);
var G__39818 = null;
var G__39819 = (0);
var G__39820 = (0);
seq__39787 = G__39817;
chunk__39788 = G__39818;
count__39789 = G__39819;
i__39790 = G__39820;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=tetris.render.gameplay.piece.js.map
