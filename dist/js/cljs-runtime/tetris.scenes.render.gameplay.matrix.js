goog.provide('tetris.scenes.render.gameplay.matrix');
var module$node_modules$$tweenjs$tween_js$dist$tween_cjs=shadow.js.require("module$node_modules$$tweenjs$tween_js$dist$tween_cjs", {});
var module$node_modules$pixi_DOT_js$lib$index=shadow.js.require("module$node_modules$pixi_DOT_js$lib$index", {});
tetris.scenes.render.gameplay.matrix.matrix_bounce_max_dx = (10);
tetris.scenes.render.gameplay.matrix.matrix_bounce_max_dy = (10);
tetris.scenes.render.gameplay.matrix.draw_frame = (function tetris$scenes$render$gameplay$matrix$draw_frame(g,p__44503){
var map__44504 = p__44503;
var map__44504__$1 = cljs.core.__destructure_map(map__44504);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44504__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44504__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var border_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44504__$1,new cljs.core.Keyword(null,"border-width","border-width",-1512605390));
var G__44505 = g;
G__44505.moveTo((0),(0));

G__44505.lineTo((0),height);

G__44505.lineTo(width,height);

G__44505.lineTo(width,(0));

G__44505.stroke(({"width": border_width, "color": (13421772), "join": "bevel"}));

G__44505.rect((border_width / (2)),(0),(width - border_width),(height - (border_width / (2))));

G__44505.fill(({"color": (0), "alpha": 0.2}));

return G__44505;
});
tetris.scenes.render.gameplay.matrix.draw_grid = (function tetris$scenes$render$gameplay$matrix$draw_grid(g,p__44508){
var map__44510 = p__44508;
var map__44510__$1 = cljs.core.__destructure_map(map__44510);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44510__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44510__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var border_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44510__$1,new cljs.core.Keyword(null,"border-width","border-width",-1512605390));
var padding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44510__$1,new cljs.core.Keyword(null,"padding","padding",1660304693));
var cell = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44510__$1,new cljs.core.Keyword(null,"cell","cell",764245084));
var seq__44511_44549 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(tetris.core.board.board_rows - (2))));
var chunk__44512_44550 = null;
var count__44513_44551 = (0);
var i__44514_44552 = (0);
while(true){
if((i__44514_44552 < count__44513_44551)){
var r_44553 = chunk__44512_44550.cljs$core$IIndexed$_nth$arity$2(null,i__44514_44552);
var y_44554 = (r_44553 * new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(cell));
g.moveTo(new cljs.core.Keyword(null,"base-x","base-x",-13745014).cljs$core$IFn$_invoke$arity$1(cell),y_44554);

g.lineTo(((width - (border_width / (2))) - padding),y_44554);


var G__44555 = seq__44511_44549;
var G__44556 = chunk__44512_44550;
var G__44557 = count__44513_44551;
var G__44558 = (i__44514_44552 + (1));
seq__44511_44549 = G__44555;
chunk__44512_44550 = G__44556;
count__44513_44551 = G__44557;
i__44514_44552 = G__44558;
continue;
} else {
var temp__5825__auto___44559 = cljs.core.seq(seq__44511_44549);
if(temp__5825__auto___44559){
var seq__44511_44560__$1 = temp__5825__auto___44559;
if(cljs.core.chunked_seq_QMARK_(seq__44511_44560__$1)){
var c__5694__auto___44561 = cljs.core.chunk_first(seq__44511_44560__$1);
var G__44562 = cljs.core.chunk_rest(seq__44511_44560__$1);
var G__44563 = c__5694__auto___44561;
var G__44564 = cljs.core.count(c__5694__auto___44561);
var G__44565 = (0);
seq__44511_44549 = G__44562;
chunk__44512_44550 = G__44563;
count__44513_44551 = G__44564;
i__44514_44552 = G__44565;
continue;
} else {
var r_44566 = cljs.core.first(seq__44511_44560__$1);
var y_44567 = (r_44566 * new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(cell));
g.moveTo(new cljs.core.Keyword(null,"base-x","base-x",-13745014).cljs$core$IFn$_invoke$arity$1(cell),y_44567);

g.lineTo(((width - (border_width / (2))) - padding),y_44567);


var G__44568 = cljs.core.next(seq__44511_44560__$1);
var G__44569 = null;
var G__44570 = (0);
var G__44571 = (0);
seq__44511_44549 = G__44568;
chunk__44512_44550 = G__44569;
count__44513_44551 = G__44570;
i__44514_44552 = G__44571;
continue;
}
} else {
}
}
break;
}

var seq__44522_44572 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(10)));
var chunk__44523_44573 = null;
var count__44524_44574 = (0);
var i__44525_44575 = (0);
while(true){
if((i__44525_44575 < count__44524_44574)){
var c_44576 = chunk__44523_44573.cljs$core$IIndexed$_nth$arity$2(null,i__44525_44575);
var x_44577 = ((c_44576 * new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(cell)) + new cljs.core.Keyword(null,"base-x","base-x",-13745014).cljs$core$IFn$_invoke$arity$1(cell));
g.moveTo(x_44577,(0));

g.lineTo(x_44577,((height - (border_width / (2))) - padding));


var G__44578 = seq__44522_44572;
var G__44579 = chunk__44523_44573;
var G__44580 = count__44524_44574;
var G__44581 = (i__44525_44575 + (1));
seq__44522_44572 = G__44578;
chunk__44523_44573 = G__44579;
count__44524_44574 = G__44580;
i__44525_44575 = G__44581;
continue;
} else {
var temp__5825__auto___44582 = cljs.core.seq(seq__44522_44572);
if(temp__5825__auto___44582){
var seq__44522_44583__$1 = temp__5825__auto___44582;
if(cljs.core.chunked_seq_QMARK_(seq__44522_44583__$1)){
var c__5694__auto___44584 = cljs.core.chunk_first(seq__44522_44583__$1);
var G__44585 = cljs.core.chunk_rest(seq__44522_44583__$1);
var G__44586 = c__5694__auto___44584;
var G__44587 = cljs.core.count(c__5694__auto___44584);
var G__44588 = (0);
seq__44522_44572 = G__44585;
chunk__44523_44573 = G__44586;
count__44524_44574 = G__44587;
i__44525_44575 = G__44588;
continue;
} else {
var c_44589 = cljs.core.first(seq__44522_44583__$1);
var x_44590 = ((c_44589 * new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(cell)) + new cljs.core.Keyword(null,"base-x","base-x",-13745014).cljs$core$IFn$_invoke$arity$1(cell));
g.moveTo(x_44590,(0));

g.lineTo(x_44590,((height - (border_width / (2))) - padding));


var G__44591 = cljs.core.next(seq__44522_44583__$1);
var G__44592 = null;
var G__44593 = (0);
var G__44594 = (0);
seq__44522_44572 = G__44591;
chunk__44523_44573 = G__44592;
count__44524_44574 = G__44593;
i__44525_44575 = G__44594;
continue;
}
} else {
}
}
break;
}

return g.stroke(({"pixelLine": true, "color": (15658734), "alpha": 0.1}));
});
tetris.scenes.render.gameplay.matrix.create = (function tetris$scenes$render$gameplay$matrix$create(matrix_layout){
var map__44527 = matrix_layout;
var map__44527__$1 = cljs.core.__destructure_map(map__44527);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44527__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44527__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var cell = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44527__$1,new cljs.core.Keyword(null,"cell","cell",764245084));
var container = (new module$node_modules$pixi_DOT_js$lib$index.Container(({"label": "matrix", "sortableChildren": true})));
var g = (new module$node_modules$pixi_DOT_js$lib$index.Graphics(({"label": "matrix"})));
tetris.scenes.render.gameplay.matrix.draw_grid(g,matrix_layout);

tetris.scenes.render.gameplay.matrix.draw_frame(g,matrix_layout);

container.position.set(x,y);

container.addChild(g);

container.addChild(tetris.scenes.render.gameplay.piece.piece_container(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"ghost",new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.Keyword(null,"zIndex","zIndex",-1588341609),(2),new cljs.core.Keyword(null,"ghost?","ghost?",864936484),true], null)));

container.addChild(tetris.scenes.render.gameplay.piece.piece_container(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"current",new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(cell)], null)));

return container;
});
tetris.scenes.render.gameplay.matrix.start_bounce_tween_BANG_ = (function tetris$scenes$render$gameplay$matrix$start_bounce_tween_BANG_(var_args){
var G__44532 = arguments.length;
switch (G__44532) {
case 3:
return tetris.scenes.render.gameplay.matrix.start_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return tetris.scenes.render.gameplay.matrix.start_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 6:
return tetris.scenes.render.gameplay.matrix.start_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(tetris.scenes.render.gameplay.matrix.start_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (view,id,to_values){
return tetris.scenes.render.gameplay.matrix.start_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$6(view,id,to_values,null,null,null);
}));

(tetris.scenes.render.gameplay.matrix.start_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (view,id,to_values,cb){
return tetris.scenes.render.gameplay.matrix.start_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$6(view,id,to_values,null,null,cb);
}));

(tetris.scenes.render.gameplay.matrix.start_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$6 = (function (view,id,to_values,easing,duration,cb){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweens","tweens",-1927735551),id], null)))){
return null;
} else {
var tween = (function (){var G__44533 = (new module$node_modules$$tweenjs$tween_js$dist$tween_cjs.Tween(new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot));
G__44533.to(cljs.core.clj__GT_js(to_values),(function (){var or__5162__auto__ = duration;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (344);
}
})());

G__44533.easing((function (){var or__5162__auto__ = easing;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return module$node_modules$$tweenjs$tween_js$dist$tween_cjs.Easing.Cubic.Out;
}
})());

G__44533.start();

G__44533.onComplete((function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweens","tweens",-1927735551),id], null),null);

if(cljs.core.truth_(cb)){
return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
} else {
return null;
}
}));

G__44533.onStop((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweens","tweens",-1927735551),id], null),null);
}));

return G__44533;
})();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweens","tweens",-1927735551),id], null),tween);
}
}));

(tetris.scenes.render.gameplay.matrix.start_bounce_tween_BANG_.cljs$lang$maxFixedArity = 6);

tetris.scenes.render.gameplay.matrix.apply_bounce = (function tetris$scenes$render$gameplay$matrix$apply_bounce(view,game_state,input){
if(cljs.core.truth_(new cljs.core.Keyword(null,"shift-blocked?","shift-blocked?",-2058728569).cljs$core$IFn$_invoke$arity$1(game_state))){
var pressed_buttons_44596 = cljs.core.set(new cljs.core.Keyword(null,"pressed-buttons","pressed-buttons",1426560090).cljs$core$IFn$_invoke$arity$1(input));
var vec__44534_44597 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__44537){
var vec__44538 = p__44537;
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44538,(0),null);
return cljs.core.contains_QMARK_(pressed_buttons_44596,b);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-left","move-left",-271562811),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-right","move-right",1661359569),(-1)], null)], null)));
var button_44598 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44534_44597,(0),null);
var dir_44599 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44534_44597,(1),null);
if(cljs.core.truth_(button_44598)){
tetris.scenes.render.gameplay.tween_mgr.stop_tween_BANG_(view,new cljs.core.Keyword(null,"board-bounce-shift","board-bounce-shift",945163307));

var px_44600 = (new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot.x + (dir_44599 * (2)));
if((cljs.core.abs(px_44600) <= tetris.scenes.render.gameplay.matrix.matrix_bounce_max_dx)){
(new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot.x = px_44600);
} else {
}
} else {
tetris.scenes.render.gameplay.matrix.start_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$3(view,new cljs.core.Keyword(null,"board-bounce-shift","board-bounce-shift",945163307),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(0)], null));
}
} else {
tetris.scenes.render.gameplay.matrix.start_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$3(view,new cljs.core.Keyword(null,"board-bounce-shift","board-bounce-shift",945163307),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(0)], null));
}

if(cljs.core.truth_(tetris.core.game.find_event(new cljs.core.Keyword(null,"locked","locked",-1658763820),new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(game_state)))){
tetris.scenes.render.gameplay.tween_mgr.stop_tween_BANG_(view,new cljs.core.Keyword(null,"board-bounce-bottom","board-bounce-bottom",-1439651939));

var py = (new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot.y - tetris.scenes.render.gameplay.matrix.matrix_bounce_max_dy);
return tetris.scenes.render.gameplay.matrix.start_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$6(view,new cljs.core.Keyword(null,"board-bounce-bottom","board-bounce-bottom",-1439651939),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),py], null),module$node_modules$$tweenjs$tween_js$dist$tween_cjs.Easing.Cubic.Out,(167),(function (){
return tetris.scenes.render.gameplay.matrix.start_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$6(view,new cljs.core.Keyword(null,"board-bounce-bottom","board-bounce-bottom",-1439651939),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),module$node_modules$$tweenjs$tween_js$dist$tween_cjs.Easing.Cubic.Out,(344),null);
}));
} else {
return null;
}
});
tetris.scenes.render.gameplay.matrix.add_matrix_cells = (function tetris$scenes$render$gameplay$matrix$add_matrix_cells(view,cell_count){
return tetris.scenes.render.gameplay.piece.add_cells(new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(view),cell_count,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(view,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"matrix","matrix",803137200),new cljs.core.Keyword(null,"cell","cell",764245084),new cljs.core.Keyword(null,"size","size",1098693007)], null)));
});
tetris.scenes.render.gameplay.matrix.render_ghost = (function tetris$scenes$render$gameplay$matrix$render_ghost(view,data,game_state){
var ghost = new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).getChildByLabel("ghost");
tetris.scenes.render.gameplay.piece.render_piece(cljs.core.deref(view),ghost,new cljs.core.Keyword(null,"ghost","ghost",-1531157576).cljs$core$IFn$_invoke$arity$1(data));

((ghost.filters[(0)]).color = (16777215));

return ((ghost.filters[(0)]).alpha = ((1) - (new cljs.core.Keyword("tetris.core.tick","lock-timer","tetris.core.tick/lock-timer",-1741962176).cljs$core$IFn$_invoke$arity$1(game_state) / tetris.core.ruleset.lock_delay.cljs$core$IFn$_invoke$arity$1(game_state))));
});
tetris.scenes.render.gameplay.matrix.render_current = (function tetris$scenes$render$gameplay$matrix$render_current(view,data){
var current = new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).getChildByLabel("current");
return tetris.scenes.render.gameplay.piece.render_piece(cljs.core.deref(view),current,new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(data));
});
tetris.scenes.render.gameplay.matrix.render_blocks = (function tetris$scenes$render$gameplay$matrix$render_blocks(view,data){
var state_cell_ids = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(data)));
var view_cell_ids = cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view))));
var cell_ids_to_remove = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(view_cell_ids,state_cell_ids);
var seq__44541_44601 = cljs.core.seq(cell_ids_to_remove);
var chunk__44542_44602 = null;
var count__44543_44603 = (0);
var i__44544_44604 = (0);
while(true){
if((i__44544_44604 < count__44543_44603)){
var id_44605 = chunk__44542_44602.cljs$core$IIndexed$_nth$arity$2(null,i__44544_44604);
var temp__5825__auto___44606 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),id_44605], null));
if(cljs.core.truth_(temp__5825__auto___44606)){
var cell_sprite_44607 = temp__5825__auto___44606;
new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).removeChild(cell_sprite_44607);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(view,cljs.core.update,new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id_44605], 0));
} else {
}


var G__44608 = seq__44541_44601;
var G__44609 = chunk__44542_44602;
var G__44610 = count__44543_44603;
var G__44611 = (i__44544_44604 + (1));
seq__44541_44601 = G__44608;
chunk__44542_44602 = G__44609;
count__44543_44603 = G__44610;
i__44544_44604 = G__44611;
continue;
} else {
var temp__5825__auto___44612 = cljs.core.seq(seq__44541_44601);
if(temp__5825__auto___44612){
var seq__44541_44613__$1 = temp__5825__auto___44612;
if(cljs.core.chunked_seq_QMARK_(seq__44541_44613__$1)){
var c__5694__auto___44614 = cljs.core.chunk_first(seq__44541_44613__$1);
var G__44615 = cljs.core.chunk_rest(seq__44541_44613__$1);
var G__44616 = c__5694__auto___44614;
var G__44617 = cljs.core.count(c__5694__auto___44614);
var G__44618 = (0);
seq__44541_44601 = G__44615;
chunk__44542_44602 = G__44616;
count__44543_44603 = G__44617;
i__44544_44604 = G__44618;
continue;
} else {
var id_44619 = cljs.core.first(seq__44541_44613__$1);
var temp__5825__auto___44620__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),id_44619], null));
if(cljs.core.truth_(temp__5825__auto___44620__$1)){
var cell_sprite_44621 = temp__5825__auto___44620__$1;
new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).removeChild(cell_sprite_44621);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(view,cljs.core.update,new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id_44619], 0));
} else {
}


var G__44622 = cljs.core.next(seq__44541_44613__$1);
var G__44623 = null;
var G__44624 = (0);
var G__44625 = (0);
seq__44541_44601 = G__44622;
chunk__44542_44602 = G__44623;
count__44543_44603 = G__44624;
i__44544_44604 = G__44625;
continue;
}
} else {
}
}
break;
}

var seq__44545 = cljs.core.seq(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(data));
var chunk__44546 = null;
var count__44547 = (0);
var i__44548 = (0);
while(true){
if((i__44548 < count__44547)){
var cell = chunk__44546.cljs$core$IIndexed$_nth$arity$2(null,i__44548);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)], null),cljs.core.first(tetris.scenes.render.gameplay.matrix.add_matrix_cells(cljs.core.deref(view),(1))));
}

var temp__5825__auto___44626 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)], null));
if(cljs.core.truth_(temp__5825__auto___44626)){
var cell_sprite_44627 = temp__5825__auto___44626;
(cell_sprite_44627.texture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece-cell-textures","piece-cell-textures",754648682).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"color-index","color-index",560460581).cljs$core$IFn$_invoke$arity$1(cell)));

cell_sprite_44627.position.set(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell));
} else {
}


var G__44628 = seq__44545;
var G__44629 = chunk__44546;
var G__44630 = count__44547;
var G__44631 = (i__44548 + (1));
seq__44545 = G__44628;
chunk__44546 = G__44629;
count__44547 = G__44630;
i__44548 = G__44631;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__44545);
if(temp__5825__auto__){
var seq__44545__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44545__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__44545__$1);
var G__44632 = cljs.core.chunk_rest(seq__44545__$1);
var G__44633 = c__5694__auto__;
var G__44634 = cljs.core.count(c__5694__auto__);
var G__44635 = (0);
seq__44545 = G__44632;
chunk__44546 = G__44633;
count__44547 = G__44634;
i__44548 = G__44635;
continue;
} else {
var cell = cljs.core.first(seq__44545__$1);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)], null),cljs.core.first(tetris.scenes.render.gameplay.matrix.add_matrix_cells(cljs.core.deref(view),(1))));
}

var temp__5825__auto___44636__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)], null));
if(cljs.core.truth_(temp__5825__auto___44636__$1)){
var cell_sprite_44637 = temp__5825__auto___44636__$1;
(cell_sprite_44637.texture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece-cell-textures","piece-cell-textures",754648682).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"color-index","color-index",560460581).cljs$core$IFn$_invoke$arity$1(cell)));

cell_sprite_44637.position.set(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell));
} else {
}


var G__44638 = cljs.core.next(seq__44545__$1);
var G__44639 = null;
var G__44640 = (0);
var G__44641 = (0);
seq__44545 = G__44638;
chunk__44546 = G__44639;
count__44547 = G__44640;
i__44548 = G__44641;
continue;
}
} else {
return null;
}
}
break;
}
});
tetris.scenes.render.gameplay.matrix.render_BANG_ = (function tetris$scenes$render$gameplay$matrix$render_BANG_(view,data,game_state,input){
tetris.scenes.render.gameplay.matrix.render_blocks(view,data);

tetris.scenes.render.gameplay.matrix.render_ghost(view,data,game_state);

tetris.scenes.render.gameplay.matrix.render_current(view,data);

return tetris.scenes.render.gameplay.matrix.apply_bounce(view,game_state,input);
});

//# sourceMappingURL=tetris.scenes.render.gameplay.matrix.js.map
