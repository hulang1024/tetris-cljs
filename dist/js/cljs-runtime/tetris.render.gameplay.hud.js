goog.provide('tetris.render.gameplay.hud');
var module$node_modules$pixi_DOT_js$lib$index=shadow.js.require("module$node_modules$pixi_DOT_js$lib$index", {});
tetris.render.gameplay.hud.hud_layout = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title-font-size","title-font-size",1623475258),(24),new cljs.core.Keyword(null,"value-font-size","value-font-size",1452463736),(32)], null);
tetris.render.gameplay.hud.stat_item_y = (function tetris$render$gameplay$hud$stat_item_y(item_n,t){
var tfs = new cljs.core.Keyword(null,"title-font-size","title-font-size",1623475258).cljs$core$IFn$_invoke$arity$1(tetris.render.gameplay.hud.hud_layout);
var vfs = new cljs.core.Keyword(null,"value-font-size","value-font-size",1452463736).cljs$core$IFn$_invoke$arity$1(tetris.render.gameplay.hud.hud_layout);
var tv_gap = (8);
var item_gap = (24);
return ((item_n * (((item_gap + tfs) + tv_gap) + vfs)) + ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,new cljs.core.Keyword(null,"t","t",-1397832519)))?(0):(tv_gap + tfs)));
});
tetris.render.gameplay.hud.hold = (function tetris$render$gameplay$hud$hold(layout){
var piece = tetris.render.gameplay.piece.piece_container(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"hold",new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(layout),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(layout),new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cell","cell",764245084),new cljs.core.Keyword(null,"size","size",1098693007)], null))], null));
return piece;
});
tetris.render.gameplay.hud.preview = (function tetris$render$gameplay$hud$preview(layout,preview_count){
var container = (new module$node_modules$pixi_DOT_js$lib$index.Container(({"label": "next", "x": new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(layout), "y": new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(layout)})));
var n__5762__auto___40676 = preview_count;
var n_40677 = (0);
while(true){
if((n_40677 < n__5762__auto___40676)){
container.addChild(tetris.render.gameplay.piece.piece_container(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),(""+"preview-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_40677)),new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cell","cell",764245084),new cljs.core.Keyword(null,"size","size",1098693007)], null))], null)));

var G__40681 = (n_40677 + (1));
n_40677 = G__40681;
continue;
} else {
}
break;
}

return container;
});
tetris.render.gameplay.hud.title_view = (function tetris$render$gameplay$hud$title_view(y,anchor,text){
return (new module$node_modules$pixi_DOT_js$lib$index.Text(({"label": "title", "y": y, "anchor": cljs.core.clj__GT_js(anchor), "text": text, "style": ({"fontFamily": "Arial", "fontWeight": "bold", "fontSize": new cljs.core.Keyword(null,"title-font-size","title-font-size",1623475258).cljs$core$IFn$_invoke$arity$1(tetris.render.gameplay.hud.hud_layout), "fill": "#cccccc"})})));
});
tetris.render.gameplay.hud.number_view = (function tetris$render$gameplay$hud$number_view(y,anchor,label,text){
return (new module$node_modules$pixi_DOT_js$lib$index.Text(({"label": label, "y": y, "anchor": cljs.core.clj__GT_js(anchor), "text": text, "style": ({"fontFamily": "Arial", "fontWeight": "bolder", "fontSize": new cljs.core.Keyword(null,"value-font-size","value-font-size",1452463736).cljs$core$IFn$_invoke$arity$1(tetris.render.gameplay.hud.hud_layout), "fill": "#cccccc"})})));
});
tetris.render.gameplay.hud.left_stats_view = (function tetris$render$gameplay$hud$left_stats_view(layout){
var container = (new module$node_modules$pixi_DOT_js$lib$index.Container(({"label": "left", "anchor": ({"x": (0), "y": (0)})})));
var anchor = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null);
container.addChild(tetris.render.gameplay.hud.title_view(tetris.render.gameplay.hud.stat_item_y((0),new cljs.core.Keyword(null,"t","t",-1397832519)),anchor,"SPEED LV"),tetris.render.gameplay.hud.number_view(tetris.render.gameplay.hud.stat_item_y((0),new cljs.core.Keyword(null,"v","v",21465059)),anchor,"speed-level","0"),tetris.render.gameplay.hud.title_view(tetris.render.gameplay.hud.stat_item_y((1),new cljs.core.Keyword(null,"t","t",-1397832519)),anchor,"LINES"),tetris.render.gameplay.hud.number_view(tetris.render.gameplay.hud.stat_item_y((1),new cljs.core.Keyword(null,"v","v",21465059)),anchor,"lines","0"));

(container.y = (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"matrix","matrix",803137200),new cljs.core.Keyword(null,"height","height",1025178622)], null)) - container.height));

(container.x = (container.width - (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"matrix","matrix",803137200),new cljs.core.Keyword(null,"margin-x","margin-x",1660588286)], null)) - (10))));

return container;
});
tetris.render.gameplay.hud.right_stats_view = (function tetris$render$gameplay$hud$right_stats_view(layout){
var container = (new module$node_modules$pixi_DOT_js$lib$index.Container(({"label": "right", "anchor": ({"x": (0), "y": (0)})})));
var anchor = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null);
var G__40652_40682 = container;
G__40652_40682.addChild(tetris.render.gameplay.hud.title_view(tetris.render.gameplay.hud.stat_item_y((0),new cljs.core.Keyword(null,"t","t",-1397832519)),anchor,"SCORE"));

G__40652_40682.addChild(tetris.render.gameplay.hud.number_view(tetris.render.gameplay.hud.stat_item_y((0),new cljs.core.Keyword(null,"v","v",21465059)),anchor,"score","0"));


(container.y = (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"matrix","matrix",803137200),new cljs.core.Keyword(null,"height","height",1025178622)], null)) - container.height));

(container.x = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.Keyword(null,"x","x",2099068185)], null)));

return container;
});
tetris.render.gameplay.hud.create = (function tetris$render$gameplay$hud$create(layout,options){
var hud = (new module$node_modules$pixi_DOT_js$lib$index.Container(({"label": "hub"})));
hud.addChild(tetris.render.gameplay.hud.hold(new cljs.core.Keyword(null,"hold","hold",-1621118005).cljs$core$IFn$_invoke$arity$1(layout)),tetris.render.gameplay.hud.preview(new cljs.core.Keyword(null,"next","next",-117701485).cljs$core$IFn$_invoke$arity$1(layout),new cljs.core.Keyword(null,"preview-count","preview-count",-329263374).cljs$core$IFn$_invoke$arity$1(options)),tetris.render.gameplay.hud.left_stats_view(layout),tetris.render.gameplay.hud.right_stats_view(layout));

return hud;
});
tetris.render.gameplay.hud.render_hold = (function tetris$render$gameplay$hud$render_hold(view,data){
return tetris.render.gameplay.piece.render_piece(cljs.core.deref(view),new cljs.core.Keyword(null,"hud","hud",-1987595891).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).getChildByLabel("hold"),new cljs.core.Keyword(null,"hold","hold",-1621118005).cljs$core$IFn$_invoke$arity$1(data));
});
tetris.render.gameplay.hud.render_next = (function tetris$render$gameplay$hud$render_next(view,data){
var seq__40653 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,new cljs.core.Keyword(null,"hud","hud",-1987595891).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).getChildByLabel("next").children,new cljs.core.Keyword(null,"next","next",-117701485).cljs$core$IFn$_invoke$arity$1(data)));
var chunk__40654 = null;
var count__40655 = (0);
var i__40656 = (0);
while(true){
if((i__40656 < count__40655)){
var vec__40664 = chunk__40654.cljs$core$IIndexed$_nth$arity$2(null,i__40656);
var piece_v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40664,(0),null);
var piece_d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40664,(1),null);
tetris.render.gameplay.piece.render_piece(cljs.core.deref(view),piece_v,piece_d);


var G__40687 = seq__40653;
var G__40688 = chunk__40654;
var G__40689 = count__40655;
var G__40690 = (i__40656 + (1));
seq__40653 = G__40687;
chunk__40654 = G__40688;
count__40655 = G__40689;
i__40656 = G__40690;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__40653);
if(temp__5825__auto__){
var seq__40653__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40653__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__40653__$1);
var G__40691 = cljs.core.chunk_rest(seq__40653__$1);
var G__40692 = c__5694__auto__;
var G__40693 = cljs.core.count(c__5694__auto__);
var G__40694 = (0);
seq__40653 = G__40691;
chunk__40654 = G__40692;
count__40655 = G__40693;
i__40656 = G__40694;
continue;
} else {
var vec__40670 = cljs.core.first(seq__40653__$1);
var piece_v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40670,(0),null);
var piece_d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40670,(1),null);
tetris.render.gameplay.piece.render_piece(cljs.core.deref(view),piece_v,piece_d);


var G__40695 = cljs.core.next(seq__40653__$1);
var G__40696 = null;
var G__40697 = (0);
var G__40698 = (0);
seq__40653 = G__40695;
chunk__40654 = G__40696;
count__40655 = G__40697;
i__40656 = G__40698;
continue;
}
} else {
return null;
}
}
break;
}
});
tetris.render.gameplay.hud.render_BANG_ = (function tetris$render$gameplay$hud$render_BANG_(view,data,game_state){
tetris.render.gameplay.hud.render_hold(view,data);

tetris.render.gameplay.hud.render_next(view,data);

var left = new cljs.core.Keyword(null,"hud","hud",-1987595891).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).getChildByLabel("left");
var right = new cljs.core.Keyword(null,"hud","hud",-1987595891).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).getChildByLabel("right");
var speed_level_view = left.getChildByLabel("speed-level");
var lines_view = left.getChildByLabel("lines");
var score_view = right.getChildByLabel("score");
(speed_level_view.text = new cljs.core.Keyword(null,"speed-level","speed-level",-256559849).cljs$core$IFn$_invoke$arity$1(game_state));

(lines_view.text = new cljs.core.Keyword(null,"lines-cleared","lines-cleared",1628289668).cljs$core$IFn$_invoke$arity$1(game_state));

return (score_view.text = new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(game_state));
});

//# sourceMappingURL=tetris.render.gameplay.hud.js.map
