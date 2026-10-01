goog.provide('tetris.render.gameplay.hud');
var module$node_modules$pixi_DOT_js$lib$index=shadow.js.require("module$node_modules$pixi_DOT_js$lib$index", {});
tetris.render.gameplay.hud.hold = (function tetris$render$gameplay$hud$hold(layout){
var piece = tetris.render.gameplay.piece.piece_container(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"hold",new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(layout),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(layout),new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cell","cell",764245084),new cljs.core.Keyword(null,"size","size",1098693007)], null))], null));
return piece;
});
tetris.render.gameplay.hud.preview = (function tetris$render$gameplay$hud$preview(layout,preview_count){
var container = (new module$node_modules$pixi_DOT_js$lib$index.Container(({"label": "next", "x": new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(layout), "y": new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(layout)})));
var n__5762__auto___48716 = preview_count;
var n_48717 = (0);
while(true){
if((n_48717 < n__5762__auto___48716)){
container.addChild(tetris.render.gameplay.piece.piece_container(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),(""+"preview-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_48717)),new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cell","cell",764245084),new cljs.core.Keyword(null,"size","size",1098693007)], null))], null)));

var G__48718 = (n_48717 + (1));
n_48717 = G__48718;
continue;
} else {
}
break;
}

return container;
});
tetris.render.gameplay.hud.lines_view = (function tetris$render$gameplay$hud$lines_view(layout){
var view = (new module$node_modules$pixi_DOT_js$lib$index.Container(({"label": "lines", "x": (0), "y": cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lines","lines",-700165781),new cljs.core.Keyword(null,"y","y",-1757859776)], null))})));
var title = (new module$node_modules$pixi_DOT_js$lib$index.Text(({"label": "title", "x": (0), "y": (0), "text": "LINES", "style": ({"fontFamily": "Arial", "fontSize": (30), "fill": "#cccccc"})})));
var number = (new module$node_modules$pixi_DOT_js$lib$index.Text(({"label": "number", "x": cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(layout,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hud","hud",-1987595891),new cljs.core.Keyword(null,"lines","lines",-700165781),new cljs.core.Keyword(null,"number-x","number-x",658481578)], null)), "y": ((30) + (16)), "text": "0", "style": ({"fontFamily": "Arial", "fontWeight": "bold", "fontSize": (30), "fill": "#cccccc"})})));
view.addChild(title);

view.addChild(number);

return view;
});
tetris.render.gameplay.hud.create = (function tetris$render$gameplay$hud$create(layout,options){
var hud = (new module$node_modules$pixi_DOT_js$lib$index.Container(({"label": "hub"})));
var hold = tetris.render.gameplay.hud.hold(new cljs.core.Keyword(null,"hold","hold",-1621118005).cljs$core$IFn$_invoke$arity$1(layout));
var preview = tetris.render.gameplay.hud.preview(new cljs.core.Keyword(null,"next","next",-117701485).cljs$core$IFn$_invoke$arity$1(layout),new cljs.core.Keyword(null,"preview-count","preview-count",-329263374).cljs$core$IFn$_invoke$arity$1(options));
var lines_view = tetris.render.gameplay.hud.lines_view(layout);
hud.addChild(hold);

hud.addChild(preview);

hud.addChild(lines_view);

return hud;
});
tetris.render.gameplay.hud.render_hold = (function tetris$render$gameplay$hud$render_hold(view,data){
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hold","hold",-1621118005),new cljs.core.Keyword(null,"cells","cells",-985166822)], null)))){
return tetris.render.gameplay.piece.render_piece(cljs.core.deref(view),new cljs.core.Keyword(null,"hud","hud",-1987595891).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).getChildByLabel("hold"),new cljs.core.Keyword(null,"hold","hold",-1621118005).cljs$core$IFn$_invoke$arity$1(data));
} else {
return null;
}
});
tetris.render.gameplay.hud.render_next = (function tetris$render$gameplay$hud$render_next(view,data){
if(cljs.core.seq(new cljs.core.Keyword(null,"next","next",-117701485).cljs$core$IFn$_invoke$arity$1(data))){
var seq__48700 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,new cljs.core.Keyword(null,"hud","hud",-1987595891).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).getChildByLabel("next").children,new cljs.core.Keyword(null,"next","next",-117701485).cljs$core$IFn$_invoke$arity$1(data)));
var chunk__48701 = null;
var count__48702 = (0);
var i__48703 = (0);
while(true){
if((i__48703 < count__48702)){
var vec__48710 = chunk__48701.cljs$core$IIndexed$_nth$arity$2(null,i__48703);
var piece_v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48710,(0),null);
var piece_d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48710,(1),null);
tetris.render.gameplay.piece.render_piece(cljs.core.deref(view),piece_v,piece_d);


var G__48719 = seq__48700;
var G__48720 = chunk__48701;
var G__48721 = count__48702;
var G__48722 = (i__48703 + (1));
seq__48700 = G__48719;
chunk__48701 = G__48720;
count__48702 = G__48721;
i__48703 = G__48722;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__48700);
if(temp__5825__auto__){
var seq__48700__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48700__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__48700__$1);
var G__48723 = cljs.core.chunk_rest(seq__48700__$1);
var G__48724 = c__5694__auto__;
var G__48725 = cljs.core.count(c__5694__auto__);
var G__48726 = (0);
seq__48700 = G__48723;
chunk__48701 = G__48724;
count__48702 = G__48725;
i__48703 = G__48726;
continue;
} else {
var vec__48713 = cljs.core.first(seq__48700__$1);
var piece_v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48713,(0),null);
var piece_d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48713,(1),null);
tetris.render.gameplay.piece.render_piece(cljs.core.deref(view),piece_v,piece_d);


var G__48727 = cljs.core.next(seq__48700__$1);
var G__48728 = null;
var G__48729 = (0);
var G__48730 = (0);
seq__48700 = G__48727;
chunk__48701 = G__48728;
count__48702 = G__48729;
i__48703 = G__48730;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
tetris.render.gameplay.hud.render_lines = (function tetris$render$gameplay$hud$render_lines(view,game_state){
var lines_view = new cljs.core.Keyword(null,"hud","hud",-1987595891).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).getChildByLabel("lines");
var number_view = lines_view.getChildByLabel("number");
return (number_view.text = new cljs.core.Keyword(null,"lines-cleared","lines-cleared",1628289668).cljs$core$IFn$_invoke$arity$1(game_state));
});
tetris.render.gameplay.hud.render_BANG_ = (function tetris$render$gameplay$hud$render_BANG_(view,data,game_state){
tetris.render.gameplay.hud.render_hold(view,data);

tetris.render.gameplay.hud.render_next(view,data);

return tetris.render.gameplay.hud.render_lines(view,game_state);
});

//# sourceMappingURL=tetris.render.gameplay.hud.js.map
