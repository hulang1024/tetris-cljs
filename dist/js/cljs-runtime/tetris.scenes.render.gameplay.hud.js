goog.provide('tetris.scenes.render.gameplay.hud');
var module$node_modules$pixi_DOT_js$lib$index=shadow.js.require("module$node_modules$pixi_DOT_js$lib$index", {});
tetris.scenes.render.gameplay.hud.hud_layout = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title-font-size","title-font-size",1623475258),(24),new cljs.core.Keyword(null,"value-font-size","value-font-size",1452463736),(32)], null);
tetris.scenes.render.gameplay.hud.stat_item_y = (function tetris$scenes$render$gameplay$hud$stat_item_y(item_n,t){
var tfs = new cljs.core.Keyword(null,"title-font-size","title-font-size",1623475258).cljs$core$IFn$_invoke$arity$1(tetris.scenes.render.gameplay.hud.hud_layout);
var vfs = new cljs.core.Keyword(null,"value-font-size","value-font-size",1452463736).cljs$core$IFn$_invoke$arity$1(tetris.scenes.render.gameplay.hud.hud_layout);
var tv_gap = (8);
var item_gap = (24);
return ((item_n * (((item_gap + tfs) + tv_gap) + vfs)) + ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,new cljs.core.Keyword(null,"t","t",-1397832519)))?(0):(tv_gap + tfs)));
});
tetris.scenes.render.gameplay.hud.hold = (function tetris$scenes$render$gameplay$hud$hold(layout){
var piece = tetris.scenes.render.gameplay.piece.piece_container(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"hold",new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(layout),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(layout),new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cell","cell",764245084),new cljs.core.Keyword(null,"size","size",1098693007)], null))], null));
return piece;
});
tetris.scenes.render.gameplay.hud.preview = (function tetris$scenes$render$gameplay$hud$preview(layout,preview_count){
var container = (new module$node_modules$pixi_DOT_js$lib$index.Container(({"label": "next", "x": new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(layout), "y": new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(layout)})));
var n__5762__auto___39212 = preview_count;
var n_39213 = (0);
while(true){
if((n_39213 < n__5762__auto___39212)){
container.addChild(tetris.scenes.render.gameplay.piece.piece_container(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),(""+"preview-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_39213)),new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cell","cell",764245084),new cljs.core.Keyword(null,"size","size",1098693007)], null))], null)));

var G__39214 = (n_39213 + (1));
n_39213 = G__39214;
continue;
} else {
}
break;
}

return container;
});
tetris.scenes.render.gameplay.hud.stats_text_style = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fontFamily","fontFamily",1493518353),"zpix",new cljs.core.Keyword(null,"dropShadow","dropShadow",1001370187),({"color": "#000000", "blur": (4), "distance": (8)}),new cljs.core.Keyword(null,"fill","fill",883462889),"#eeeeee"], null);
tetris.scenes.render.gameplay.hud.title_view = (function tetris$scenes$render$gameplay$hud$title_view(y,anchor,text){
return (new module$node_modules$pixi_DOT_js$lib$index.Text(({"label": "title", "y": y, "anchor": cljs.core.clj__GT_js(anchor), "text": text, "style": cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tetris.scenes.render.gameplay.hud.stats_text_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fontWeight","fontWeight",166450581),"bold",new cljs.core.Keyword(null,"fontSize","fontSize",919623033),new cljs.core.Keyword(null,"title-font-size","title-font-size",1623475258).cljs$core$IFn$_invoke$arity$1(tetris.scenes.render.gameplay.hud.hud_layout)], null)], 0)))})));
});
tetris.scenes.render.gameplay.hud.number_view = (function tetris$scenes$render$gameplay$hud$number_view(y,anchor,label,text){
return (new module$node_modules$pixi_DOT_js$lib$index.Text(({"label": label, "y": y, "anchor": cljs.core.clj__GT_js(anchor), "text": text, "style": cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tetris.scenes.render.gameplay.hud.stats_text_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fontWeight","fontWeight",166450581),"bolder",new cljs.core.Keyword(null,"fontSize","fontSize",919623033),new cljs.core.Keyword(null,"value-font-size","value-font-size",1452463736).cljs$core$IFn$_invoke$arity$1(tetris.scenes.render.gameplay.hud.hud_layout)], null)], 0)))})));
});
tetris.scenes.render.gameplay.hud.left_stats_view = (function tetris$scenes$render$gameplay$hud$left_stats_view(layout){
var container = (new module$node_modules$pixi_DOT_js$lib$index.Container(({"label": "left", "anchor": ({"x": (0), "y": (0)})})));
var anchor = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null);
container.addChild(tetris.scenes.render.gameplay.hud.title_view(tetris.scenes.render.gameplay.hud.stat_item_y((0),new cljs.core.Keyword(null,"t","t",-1397832519)),anchor,"SPEED LV"),tetris.scenes.render.gameplay.hud.number_view(tetris.scenes.render.gameplay.hud.stat_item_y((0),new cljs.core.Keyword(null,"v","v",21465059)),anchor,"speed-level","0"),tetris.scenes.render.gameplay.hud.title_view(tetris.scenes.render.gameplay.hud.stat_item_y((1),new cljs.core.Keyword(null,"t","t",-1397832519)),anchor,"LINES"),tetris.scenes.render.gameplay.hud.number_view(tetris.scenes.render.gameplay.hud.stat_item_y((1),new cljs.core.Keyword(null,"v","v",21465059)),anchor,"lines","0"));

(container.y = (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"matrix","matrix",803137200),new cljs.core.Keyword(null,"height","height",1025178622)], null)) - container.height));

(container.x = (container.width - (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"matrix","matrix",803137200),new cljs.core.Keyword(null,"margin-x","margin-x",1660588286)], null)) - (10))));

return container;
});
tetris.scenes.render.gameplay.hud.right_stats_view = (function tetris$scenes$render$gameplay$hud$right_stats_view(layout){
var container = (new module$node_modules$pixi_DOT_js$lib$index.Container(({"label": "right", "anchor": ({"x": (0), "y": (0)})})));
var anchor = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null);
var G__39195_39215 = container;
G__39195_39215.addChild(tetris.scenes.render.gameplay.hud.title_view(tetris.scenes.render.gameplay.hud.stat_item_y((0),new cljs.core.Keyword(null,"t","t",-1397832519)),anchor,"SCORE"));

G__39195_39215.addChild(tetris.scenes.render.gameplay.hud.number_view(tetris.scenes.render.gameplay.hud.stat_item_y((0),new cljs.core.Keyword(null,"v","v",21465059)),anchor,"score","0"));


(container.y = (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"matrix","matrix",803137200),new cljs.core.Keyword(null,"height","height",1025178622)], null)) - container.height));

(container.x = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.Keyword(null,"x","x",2099068185)], null)));

return container;
});
tetris.scenes.render.gameplay.hud.create = (function tetris$scenes$render$gameplay$hud$create(layout,options){
var hud = (new module$node_modules$pixi_DOT_js$lib$index.Container(({"label": "hud"})));
hud.addChild(tetris.scenes.render.gameplay.hud.hold(new cljs.core.Keyword(null,"hold","hold",-1621118005).cljs$core$IFn$_invoke$arity$1(layout)),tetris.scenes.render.gameplay.hud.preview(new cljs.core.Keyword(null,"next","next",-117701485).cljs$core$IFn$_invoke$arity$1(layout),new cljs.core.Keyword(null,"preview-count","preview-count",-329263374).cljs$core$IFn$_invoke$arity$1(options)),tetris.scenes.render.gameplay.hud.left_stats_view(layout),tetris.scenes.render.gameplay.hud.right_stats_view(layout));

return hud;
});
tetris.scenes.render.gameplay.hud.render_hold = (function tetris$scenes$render$gameplay$hud$render_hold(view,data){
return tetris.scenes.render.gameplay.piece.render_piece(cljs.core.deref(view),new cljs.core.Keyword(null,"hud","hud",-1987595891).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).getChildByLabel("hold"),new cljs.core.Keyword(null,"hold","hold",-1621118005).cljs$core$IFn$_invoke$arity$1(data));
});
tetris.scenes.render.gameplay.hud.render_next = (function tetris$scenes$render$gameplay$hud$render_next(view,data){
var seq__39196 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,new cljs.core.Keyword(null,"hud","hud",-1987595891).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).getChildByLabel("next").children,new cljs.core.Keyword(null,"next","next",-117701485).cljs$core$IFn$_invoke$arity$1(data)));
var chunk__39197 = null;
var count__39198 = (0);
var i__39199 = (0);
while(true){
if((i__39199 < count__39198)){
var vec__39206 = chunk__39197.cljs$core$IIndexed$_nth$arity$2(null,i__39199);
var piece_v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39206,(0),null);
var piece_d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39206,(1),null);
tetris.scenes.render.gameplay.piece.render_piece(cljs.core.deref(view),piece_v,piece_d);


var G__39216 = seq__39196;
var G__39217 = chunk__39197;
var G__39218 = count__39198;
var G__39219 = (i__39199 + (1));
seq__39196 = G__39216;
chunk__39197 = G__39217;
count__39198 = G__39218;
i__39199 = G__39219;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__39196);
if(temp__5825__auto__){
var seq__39196__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39196__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__39196__$1);
var G__39220 = cljs.core.chunk_rest(seq__39196__$1);
var G__39221 = c__5694__auto__;
var G__39222 = cljs.core.count(c__5694__auto__);
var G__39223 = (0);
seq__39196 = G__39220;
chunk__39197 = G__39221;
count__39198 = G__39222;
i__39199 = G__39223;
continue;
} else {
var vec__39209 = cljs.core.first(seq__39196__$1);
var piece_v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39209,(0),null);
var piece_d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39209,(1),null);
tetris.scenes.render.gameplay.piece.render_piece(cljs.core.deref(view),piece_v,piece_d);


var G__39224 = cljs.core.next(seq__39196__$1);
var G__39225 = null;
var G__39226 = (0);
var G__39227 = (0);
seq__39196 = G__39224;
chunk__39197 = G__39225;
count__39198 = G__39226;
i__39199 = G__39227;
continue;
}
} else {
return null;
}
}
break;
}
});
tetris.scenes.render.gameplay.hud.render_BANG_ = (function tetris$scenes$render$gameplay$hud$render_BANG_(view,data,game_state){
tetris.scenes.render.gameplay.hud.render_hold(view,data);

tetris.scenes.render.gameplay.hud.render_next(view,data);

var left = new cljs.core.Keyword(null,"hud","hud",-1987595891).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).getChildByLabel("left");
var right = new cljs.core.Keyword(null,"hud","hud",-1987595891).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).getChildByLabel("right");
var speed_level_view = left.getChildByLabel("speed-level");
var lines_view = left.getChildByLabel("lines");
var score_view = right.getChildByLabel("score");
(speed_level_view.text = new cljs.core.Keyword(null,"speed-level","speed-level",-256559849).cljs$core$IFn$_invoke$arity$1(game_state));

(lines_view.text = new cljs.core.Keyword(null,"lines-cleared","lines-cleared",1628289668).cljs$core$IFn$_invoke$arity$1(game_state));

return (score_view.text = new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(game_state));
});

//# sourceMappingURL=tetris.scenes.render.gameplay.hud.js.map
