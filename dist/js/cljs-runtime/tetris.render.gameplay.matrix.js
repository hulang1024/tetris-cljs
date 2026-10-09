goog.provide('tetris.render.gameplay.matrix');
var module$node_modules$$tweenjs$tween_js$dist$tween_cjs=shadow.js.require("module$node_modules$$tweenjs$tween_js$dist$tween_cjs", {});
var module$node_modules$pixi_DOT_js$lib$index=shadow.js.require("module$node_modules$pixi_DOT_js$lib$index", {});
tetris.render.gameplay.matrix.matrix_bounce_max_dx = (10);
tetris.render.gameplay.matrix.matrix_bounce_max_dy = (10);
tetris.render.gameplay.matrix.draw_frame = (function tetris$render$gameplay$matrix$draw_frame(g,p__40263){
var map__40264 = p__40263;
var map__40264__$1 = cljs.core.__destructure_map(map__40264);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40264__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40264__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var border_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40264__$1,new cljs.core.Keyword(null,"border-width","border-width",-1512605390));
var G__40265 = g;
G__40265.moveTo((0),(0));

G__40265.lineTo((0),height);

G__40265.lineTo(width,height);

G__40265.lineTo(width,(0));

G__40265.stroke(({"width": border_width, "color": (11184810), "join": "bevel"}));

G__40265.rect((border_width / (2)),(0),(width - border_width),(height - (border_width / (2))));

G__40265.fill(({"color": (1118481), "alpha": 0.3}));

return G__40265;
});
tetris.render.gameplay.matrix.draw_grid = (function tetris$render$gameplay$matrix$draw_grid(g,p__40267){
var map__40268 = p__40267;
var map__40268__$1 = cljs.core.__destructure_map(map__40268);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40268__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40268__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var border_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40268__$1,new cljs.core.Keyword(null,"border-width","border-width",-1512605390));
var padding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40268__$1,new cljs.core.Keyword(null,"padding","padding",1660304693));
var cell = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40268__$1,new cljs.core.Keyword(null,"cell","cell",764245084));
var seq__40269_40317 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(tetris.core.board.board_rows - (2))));
var chunk__40270_40318 = null;
var count__40271_40319 = (0);
var i__40272_40320 = (0);
while(true){
if((i__40272_40320 < count__40271_40319)){
var r_40321 = chunk__40270_40318.cljs$core$IIndexed$_nth$arity$2(null,i__40272_40320);
var y_40322 = (r_40321 * new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(cell));
g.moveTo(new cljs.core.Keyword(null,"base-x","base-x",-13745014).cljs$core$IFn$_invoke$arity$1(cell),y_40322);

g.lineTo(((width - (border_width / (2))) - padding),y_40322);


var G__40323 = seq__40269_40317;
var G__40324 = chunk__40270_40318;
var G__40325 = count__40271_40319;
var G__40326 = (i__40272_40320 + (1));
seq__40269_40317 = G__40323;
chunk__40270_40318 = G__40324;
count__40271_40319 = G__40325;
i__40272_40320 = G__40326;
continue;
} else {
var temp__5825__auto___40327 = cljs.core.seq(seq__40269_40317);
if(temp__5825__auto___40327){
var seq__40269_40328__$1 = temp__5825__auto___40327;
if(cljs.core.chunked_seq_QMARK_(seq__40269_40328__$1)){
var c__5694__auto___40329 = cljs.core.chunk_first(seq__40269_40328__$1);
var G__40330 = cljs.core.chunk_rest(seq__40269_40328__$1);
var G__40331 = c__5694__auto___40329;
var G__40332 = cljs.core.count(c__5694__auto___40329);
var G__40333 = (0);
seq__40269_40317 = G__40330;
chunk__40270_40318 = G__40331;
count__40271_40319 = G__40332;
i__40272_40320 = G__40333;
continue;
} else {
var r_40334 = cljs.core.first(seq__40269_40328__$1);
var y_40335 = (r_40334 * new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(cell));
g.moveTo(new cljs.core.Keyword(null,"base-x","base-x",-13745014).cljs$core$IFn$_invoke$arity$1(cell),y_40335);

g.lineTo(((width - (border_width / (2))) - padding),y_40335);


var G__40336 = cljs.core.next(seq__40269_40328__$1);
var G__40337 = null;
var G__40338 = (0);
var G__40339 = (0);
seq__40269_40317 = G__40336;
chunk__40270_40318 = G__40337;
count__40271_40319 = G__40338;
i__40272_40320 = G__40339;
continue;
}
} else {
}
}
break;
}

var seq__40277_40340 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(10)));
var chunk__40278_40341 = null;
var count__40279_40342 = (0);
var i__40280_40343 = (0);
while(true){
if((i__40280_40343 < count__40279_40342)){
var c_40344 = chunk__40278_40341.cljs$core$IIndexed$_nth$arity$2(null,i__40280_40343);
var x_40345 = ((c_40344 * new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(cell)) + new cljs.core.Keyword(null,"base-x","base-x",-13745014).cljs$core$IFn$_invoke$arity$1(cell));
g.moveTo(x_40345,(0));

g.lineTo(x_40345,((height - (border_width / (2))) - padding));


var G__40346 = seq__40277_40340;
var G__40347 = chunk__40278_40341;
var G__40348 = count__40279_40342;
var G__40349 = (i__40280_40343 + (1));
seq__40277_40340 = G__40346;
chunk__40278_40341 = G__40347;
count__40279_40342 = G__40348;
i__40280_40343 = G__40349;
continue;
} else {
var temp__5825__auto___40350 = cljs.core.seq(seq__40277_40340);
if(temp__5825__auto___40350){
var seq__40277_40351__$1 = temp__5825__auto___40350;
if(cljs.core.chunked_seq_QMARK_(seq__40277_40351__$1)){
var c__5694__auto___40352 = cljs.core.chunk_first(seq__40277_40351__$1);
var G__40353 = cljs.core.chunk_rest(seq__40277_40351__$1);
var G__40354 = c__5694__auto___40352;
var G__40355 = cljs.core.count(c__5694__auto___40352);
var G__40356 = (0);
seq__40277_40340 = G__40353;
chunk__40278_40341 = G__40354;
count__40279_40342 = G__40355;
i__40280_40343 = G__40356;
continue;
} else {
var c_40357 = cljs.core.first(seq__40277_40351__$1);
var x_40358 = ((c_40357 * new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(cell)) + new cljs.core.Keyword(null,"base-x","base-x",-13745014).cljs$core$IFn$_invoke$arity$1(cell));
g.moveTo(x_40358,(0));

g.lineTo(x_40358,((height - (border_width / (2))) - padding));


var G__40359 = cljs.core.next(seq__40277_40351__$1);
var G__40360 = null;
var G__40361 = (0);
var G__40362 = (0);
seq__40277_40340 = G__40359;
chunk__40278_40341 = G__40360;
count__40279_40342 = G__40361;
i__40280_40343 = G__40362;
continue;
}
} else {
}
}
break;
}

return g.stroke(({"pixelLine": true, "color": (15658734), "alpha": 0.1}));
});
tetris.render.gameplay.matrix.create = (function tetris$render$gameplay$matrix$create(matrix_layout){
var map__40282 = matrix_layout;
var map__40282__$1 = cljs.core.__destructure_map(map__40282);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40282__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40282__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var cell = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40282__$1,new cljs.core.Keyword(null,"cell","cell",764245084));
var container = (new module$node_modules$pixi_DOT_js$lib$index.Container(({"label": "matrix", "sortableChildren": true})));
var g = (new module$node_modules$pixi_DOT_js$lib$index.Graphics(({"label": "matrix"})));
tetris.render.gameplay.matrix.draw_grid(g,matrix_layout);

tetris.render.gameplay.matrix.draw_frame(g,matrix_layout);

container.position.set(x,y);

container.addChild(g);

container.addChild(tetris.render.gameplay.piece.piece_container(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"ghost",new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.Keyword(null,"zIndex","zIndex",-1588341609),(2),new cljs.core.Keyword(null,"ghost?","ghost?",864936484),true], null)));

container.addChild(tetris.render.gameplay.piece.piece_container(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"current",new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(cell)], null)));

return container;
});
tetris.render.gameplay.matrix.start_bounce_tween_BANG_ = (function tetris$render$gameplay$matrix$start_bounce_tween_BANG_(var_args){
var G__40288 = arguments.length;
switch (G__40288) {
case 3:
return tetris.render.gameplay.matrix.start_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return tetris.render.gameplay.matrix.start_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 6:
return tetris.render.gameplay.matrix.start_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(tetris.render.gameplay.matrix.start_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (view,id,to_values){
return tetris.render.gameplay.matrix.start_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$6(view,id,to_values,null,null,null);
}));

(tetris.render.gameplay.matrix.start_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (view,id,to_values,cb){
return tetris.render.gameplay.matrix.start_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$6(view,id,to_values,null,null,cb);
}));

(tetris.render.gameplay.matrix.start_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$6 = (function (view,id,to_values,easing,duration,cb){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweens","tweens",-1927735551),id], null)))){
return null;
} else {
var tween = (function (){var G__40289 = (new module$node_modules$$tweenjs$tween_js$dist$tween_cjs.Tween(new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot));
G__40289.to(cljs.core.clj__GT_js(to_values),(function (){var or__5162__auto__ = duration;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (344);
}
})());

G__40289.easing((function (){var or__5162__auto__ = easing;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return module$node_modules$$tweenjs$tween_js$dist$tween_cjs.Easing.Cubic.Out;
}
})());

G__40289.start();

G__40289.onComplete((function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweens","tweens",-1927735551),id], null),null);

if(cljs.core.truth_(cb)){
return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
} else {
return null;
}
}));

G__40289.onStop((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweens","tweens",-1927735551),id], null),null);
}));

return G__40289;
})();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweens","tweens",-1927735551),id], null),tween);
}
}));

(tetris.render.gameplay.matrix.start_bounce_tween_BANG_.cljs$lang$maxFixedArity = 6);

tetris.render.gameplay.matrix.apply_bounce = (function tetris$render$gameplay$matrix$apply_bounce(view,game_state,input){
if(cljs.core.truth_(new cljs.core.Keyword(null,"shift-blocked?","shift-blocked?",-2058728569).cljs$core$IFn$_invoke$arity$1(game_state))){
var pressed_buttons_40364 = cljs.core.set(new cljs.core.Keyword(null,"pressed-buttons","pressed-buttons",1426560090).cljs$core$IFn$_invoke$arity$1(input));
var vec__40290_40365 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__40293){
var vec__40294 = p__40293;
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40294,(0),null);
return cljs.core.contains_QMARK_(pressed_buttons_40364,b);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-left","move-left",-271562811),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-right","move-right",1661359569),(-1)], null)], null)));
var button_40366 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40290_40365,(0),null);
var dir_40367 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40290_40365,(1),null);
if(cljs.core.truth_(button_40366)){
tetris.render.gameplay.tween_mgr.stop_tween_BANG_(view,new cljs.core.Keyword(null,"board-bounce-shift","board-bounce-shift",945163307));

var px_40368 = (new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot.x + (dir_40367 * (2)));
if((cljs.core.abs(px_40368) <= tetris.render.gameplay.matrix.matrix_bounce_max_dx)){
(new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot.x = px_40368);
} else {
}
} else {
tetris.render.gameplay.matrix.start_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$3(view,new cljs.core.Keyword(null,"board-bounce-shift","board-bounce-shift",945163307),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(0)], null));
}
} else {
}

if(cljs.core.truth_(tetris.core.game.find_event(new cljs.core.Keyword(null,"locked","locked",-1658763820),new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(game_state)))){
tetris.render.gameplay.tween_mgr.stop_tween_BANG_(view,new cljs.core.Keyword(null,"board-bounce-bottom","board-bounce-bottom",-1439651939));

var py = (new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot.y - tetris.render.gameplay.matrix.matrix_bounce_max_dy);
return tetris.render.gameplay.matrix.start_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$6(view,new cljs.core.Keyword(null,"board-bounce-bottom","board-bounce-bottom",-1439651939),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),py], null),module$node_modules$$tweenjs$tween_js$dist$tween_cjs.Easing.Cubic.Out,(167),(function (){
return tetris.render.gameplay.matrix.start_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$6(view,new cljs.core.Keyword(null,"board-bounce-bottom","board-bounce-bottom",-1439651939),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),module$node_modules$$tweenjs$tween_js$dist$tween_cjs.Easing.Cubic.Out,(344),null);
}));
} else {
return null;
}
});
tetris.render.gameplay.matrix.add_matrix_cells = (function tetris$render$gameplay$matrix$add_matrix_cells(view,cell_count){
return tetris.render.gameplay.piece.add_cells(new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(view),cell_count,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(view,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"matrix","matrix",803137200),new cljs.core.Keyword(null,"cell","cell",764245084),new cljs.core.Keyword(null,"size","size",1098693007)], null)));
});
tetris.render.gameplay.matrix.render_ghost = (function tetris$render$gameplay$matrix$render_ghost(view,data,game_state){
var ghost = new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).getChildByLabel("ghost");
tetris.render.gameplay.piece.render_piece(cljs.core.deref(view),ghost,new cljs.core.Keyword(null,"ghost","ghost",-1531157576).cljs$core$IFn$_invoke$arity$1(data));

((ghost.filters[(0)]).color = (16777215));

return ((ghost.filters[(0)]).alpha = ((1) - (new cljs.core.Keyword("tetris.core.tick","lock-timer","tetris.core.tick/lock-timer",-1741962176).cljs$core$IFn$_invoke$arity$1(game_state) / tetris.core.ruleset.lock_delay.cljs$core$IFn$_invoke$arity$1(game_state))));
});
tetris.render.gameplay.matrix.render_current = (function tetris$render$gameplay$matrix$render_current(view,data){
var current = new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).getChildByLabel("current");
return tetris.render.gameplay.piece.render_piece(cljs.core.deref(view),current,new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(data));
});
tetris.render.gameplay.matrix.render_blocks = (function tetris$render$gameplay$matrix$render_blocks(view,data){
var state_cell_ids = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(data)));
var view_cell_ids = cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view))));
var cell_ids_to_remove = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(view_cell_ids,state_cell_ids);
var seq__40298_40369 = cljs.core.seq(cell_ids_to_remove);
var chunk__40299_40370 = null;
var count__40300_40371 = (0);
var i__40301_40372 = (0);
while(true){
if((i__40301_40372 < count__40300_40371)){
var id_40373 = chunk__40299_40370.cljs$core$IIndexed$_nth$arity$2(null,i__40301_40372);
var temp__5825__auto___40374 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),id_40373], null));
if(cljs.core.truth_(temp__5825__auto___40374)){
var cell_sprite_40375 = temp__5825__auto___40374;
new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).removeChild(cell_sprite_40375);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(view,cljs.core.update,new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id_40373], 0));
} else {
}


var G__40376 = seq__40298_40369;
var G__40377 = chunk__40299_40370;
var G__40378 = count__40300_40371;
var G__40379 = (i__40301_40372 + (1));
seq__40298_40369 = G__40376;
chunk__40299_40370 = G__40377;
count__40300_40371 = G__40378;
i__40301_40372 = G__40379;
continue;
} else {
var temp__5825__auto___40380 = cljs.core.seq(seq__40298_40369);
if(temp__5825__auto___40380){
var seq__40298_40381__$1 = temp__5825__auto___40380;
if(cljs.core.chunked_seq_QMARK_(seq__40298_40381__$1)){
var c__5694__auto___40382 = cljs.core.chunk_first(seq__40298_40381__$1);
var G__40383 = cljs.core.chunk_rest(seq__40298_40381__$1);
var G__40384 = c__5694__auto___40382;
var G__40385 = cljs.core.count(c__5694__auto___40382);
var G__40386 = (0);
seq__40298_40369 = G__40383;
chunk__40299_40370 = G__40384;
count__40300_40371 = G__40385;
i__40301_40372 = G__40386;
continue;
} else {
var id_40387 = cljs.core.first(seq__40298_40381__$1);
var temp__5825__auto___40388__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),id_40387], null));
if(cljs.core.truth_(temp__5825__auto___40388__$1)){
var cell_sprite_40389 = temp__5825__auto___40388__$1;
new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).removeChild(cell_sprite_40389);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(view,cljs.core.update,new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id_40387], 0));
} else {
}


var G__40390 = cljs.core.next(seq__40298_40381__$1);
var G__40391 = null;
var G__40392 = (0);
var G__40393 = (0);
seq__40298_40369 = G__40390;
chunk__40299_40370 = G__40391;
count__40300_40371 = G__40392;
i__40301_40372 = G__40393;
continue;
}
} else {
}
}
break;
}

var seq__40306 = cljs.core.seq(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(data));
var chunk__40307 = null;
var count__40308 = (0);
var i__40309 = (0);
while(true){
if((i__40309 < count__40308)){
var cell = chunk__40307.cljs$core$IIndexed$_nth$arity$2(null,i__40309);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)], null),cljs.core.first(tetris.render.gameplay.matrix.add_matrix_cells(cljs.core.deref(view),(1))));
}

var temp__5825__auto___40394 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)], null));
if(cljs.core.truth_(temp__5825__auto___40394)){
var cell_sprite_40395 = temp__5825__auto___40394;
(cell_sprite_40395.texture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece-cell-textures","piece-cell-textures",754648682).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"color-index","color-index",560460581).cljs$core$IFn$_invoke$arity$1(cell)));

cell_sprite_40395.position.set(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell));
} else {
}


var G__40396 = seq__40306;
var G__40397 = chunk__40307;
var G__40398 = count__40308;
var G__40399 = (i__40309 + (1));
seq__40306 = G__40396;
chunk__40307 = G__40397;
count__40308 = G__40398;
i__40309 = G__40399;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__40306);
if(temp__5825__auto__){
var seq__40306__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40306__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__40306__$1);
var G__40400 = cljs.core.chunk_rest(seq__40306__$1);
var G__40401 = c__5694__auto__;
var G__40402 = cljs.core.count(c__5694__auto__);
var G__40403 = (0);
seq__40306 = G__40400;
chunk__40307 = G__40401;
count__40308 = G__40402;
i__40309 = G__40403;
continue;
} else {
var cell = cljs.core.first(seq__40306__$1);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)], null),cljs.core.first(tetris.render.gameplay.matrix.add_matrix_cells(cljs.core.deref(view),(1))));
}

var temp__5825__auto___40404__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)], null));
if(cljs.core.truth_(temp__5825__auto___40404__$1)){
var cell_sprite_40405 = temp__5825__auto___40404__$1;
(cell_sprite_40405.texture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece-cell-textures","piece-cell-textures",754648682).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"color-index","color-index",560460581).cljs$core$IFn$_invoke$arity$1(cell)));

cell_sprite_40405.position.set(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell));
} else {
}


var G__40406 = cljs.core.next(seq__40306__$1);
var G__40407 = null;
var G__40408 = (0);
var G__40409 = (0);
seq__40306 = G__40406;
chunk__40307 = G__40407;
count__40308 = G__40408;
i__40309 = G__40409;
continue;
}
} else {
return null;
}
}
break;
}
});
tetris.render.gameplay.matrix.render_BANG_ = (function tetris$render$gameplay$matrix$render_BANG_(view,data,game_state,input){
tetris.render.gameplay.matrix.render_blocks(view,data);

tetris.render.gameplay.matrix.render_ghost(view,data,game_state);

tetris.render.gameplay.matrix.render_current(view,data);

return tetris.render.gameplay.matrix.apply_bounce(view,game_state,input);
});

//# sourceMappingURL=tetris.render.gameplay.matrix.js.map
