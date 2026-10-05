goog.provide('tetris.render.gameplay.matrix');
var module$node_modules$$tweenjs$tween_js$dist$tween_cjs=shadow.js.require("module$node_modules$$tweenjs$tween_js$dist$tween_cjs", {});
var module$node_modules$pixi_DOT_js$lib$index=shadow.js.require("module$node_modules$pixi_DOT_js$lib$index", {});
tetris.render.gameplay.matrix.matrix_bounce_max_dx = (10);
tetris.render.gameplay.matrix.matrix_bounce_max_dy = (10);
tetris.render.gameplay.matrix.draw_frame = (function tetris$render$gameplay$matrix$draw_frame(g,p__52294){
var map__52295 = p__52294;
var map__52295__$1 = cljs.core.__destructure_map(map__52295);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52295__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52295__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var border_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52295__$1,new cljs.core.Keyword(null,"border-width","border-width",-1512605390));
var G__52296 = g;
G__52296.moveTo((0),(0));

G__52296.lineTo((0),height);

G__52296.lineTo(width,height);

G__52296.lineTo(width,(0));

G__52296.stroke(({"width": border_width, "color": (11184810), "join": "bevel"}));

G__52296.rect((border_width / (2)),(0),(width - border_width),(height - (border_width / (2))));

G__52296.fill(({"color": (1118481), "alpha": 0.3}));

return G__52296;
});
tetris.render.gameplay.matrix.draw_grid = (function tetris$render$gameplay$matrix$draw_grid(g,p__52297){
var map__52298 = p__52297;
var map__52298__$1 = cljs.core.__destructure_map(map__52298);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52298__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52298__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var border_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52298__$1,new cljs.core.Keyword(null,"border-width","border-width",-1512605390));
var padding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52298__$1,new cljs.core.Keyword(null,"padding","padding",1660304693));
var cell = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52298__$1,new cljs.core.Keyword(null,"cell","cell",764245084));
var seq__52299_52326 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(tetris.core.board.board_rows - (2))));
var chunk__52300_52327 = null;
var count__52301_52328 = (0);
var i__52302_52329 = (0);
while(true){
if((i__52302_52329 < count__52301_52328)){
var r_52330 = chunk__52300_52327.cljs$core$IIndexed$_nth$arity$2(null,i__52302_52329);
var y_52331 = (r_52330 * new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(cell));
g.moveTo(new cljs.core.Keyword(null,"base-x","base-x",-13745014).cljs$core$IFn$_invoke$arity$1(cell),y_52331);

g.lineTo(((width - (border_width / (2))) - padding),y_52331);


var G__52332 = seq__52299_52326;
var G__52333 = chunk__52300_52327;
var G__52334 = count__52301_52328;
var G__52335 = (i__52302_52329 + (1));
seq__52299_52326 = G__52332;
chunk__52300_52327 = G__52333;
count__52301_52328 = G__52334;
i__52302_52329 = G__52335;
continue;
} else {
var temp__5825__auto___52336 = cljs.core.seq(seq__52299_52326);
if(temp__5825__auto___52336){
var seq__52299_52337__$1 = temp__5825__auto___52336;
if(cljs.core.chunked_seq_QMARK_(seq__52299_52337__$1)){
var c__5694__auto___52338 = cljs.core.chunk_first(seq__52299_52337__$1);
var G__52339 = cljs.core.chunk_rest(seq__52299_52337__$1);
var G__52340 = c__5694__auto___52338;
var G__52341 = cljs.core.count(c__5694__auto___52338);
var G__52342 = (0);
seq__52299_52326 = G__52339;
chunk__52300_52327 = G__52340;
count__52301_52328 = G__52341;
i__52302_52329 = G__52342;
continue;
} else {
var r_52343 = cljs.core.first(seq__52299_52337__$1);
var y_52344 = (r_52343 * new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(cell));
g.moveTo(new cljs.core.Keyword(null,"base-x","base-x",-13745014).cljs$core$IFn$_invoke$arity$1(cell),y_52344);

g.lineTo(((width - (border_width / (2))) - padding),y_52344);


var G__52345 = cljs.core.next(seq__52299_52337__$1);
var G__52346 = null;
var G__52347 = (0);
var G__52348 = (0);
seq__52299_52326 = G__52345;
chunk__52300_52327 = G__52346;
count__52301_52328 = G__52347;
i__52302_52329 = G__52348;
continue;
}
} else {
}
}
break;
}

var seq__52303_52349 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(10)));
var chunk__52304_52350 = null;
var count__52305_52351 = (0);
var i__52306_52352 = (0);
while(true){
if((i__52306_52352 < count__52305_52351)){
var c_52353 = chunk__52304_52350.cljs$core$IIndexed$_nth$arity$2(null,i__52306_52352);
var x_52354 = ((c_52353 * new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(cell)) + new cljs.core.Keyword(null,"base-x","base-x",-13745014).cljs$core$IFn$_invoke$arity$1(cell));
g.moveTo(x_52354,(0));

g.lineTo(x_52354,((height - (border_width / (2))) - padding));


var G__52355 = seq__52303_52349;
var G__52356 = chunk__52304_52350;
var G__52357 = count__52305_52351;
var G__52358 = (i__52306_52352 + (1));
seq__52303_52349 = G__52355;
chunk__52304_52350 = G__52356;
count__52305_52351 = G__52357;
i__52306_52352 = G__52358;
continue;
} else {
var temp__5825__auto___52359 = cljs.core.seq(seq__52303_52349);
if(temp__5825__auto___52359){
var seq__52303_52360__$1 = temp__5825__auto___52359;
if(cljs.core.chunked_seq_QMARK_(seq__52303_52360__$1)){
var c__5694__auto___52361 = cljs.core.chunk_first(seq__52303_52360__$1);
var G__52362 = cljs.core.chunk_rest(seq__52303_52360__$1);
var G__52363 = c__5694__auto___52361;
var G__52364 = cljs.core.count(c__5694__auto___52361);
var G__52365 = (0);
seq__52303_52349 = G__52362;
chunk__52304_52350 = G__52363;
count__52305_52351 = G__52364;
i__52306_52352 = G__52365;
continue;
} else {
var c_52366 = cljs.core.first(seq__52303_52360__$1);
var x_52367 = ((c_52366 * new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(cell)) + new cljs.core.Keyword(null,"base-x","base-x",-13745014).cljs$core$IFn$_invoke$arity$1(cell));
g.moveTo(x_52367,(0));

g.lineTo(x_52367,((height - (border_width / (2))) - padding));


var G__52368 = cljs.core.next(seq__52303_52360__$1);
var G__52369 = null;
var G__52370 = (0);
var G__52371 = (0);
seq__52303_52349 = G__52368;
chunk__52304_52350 = G__52369;
count__52305_52351 = G__52370;
i__52306_52352 = G__52371;
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
var map__52307 = matrix_layout;
var map__52307__$1 = cljs.core.__destructure_map(map__52307);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52307__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52307__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var cell = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52307__$1,new cljs.core.Keyword(null,"cell","cell",764245084));
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
var G__52309 = arguments.length;
switch (G__52309) {
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
var tween = (function (){var G__52310 = (new module$node_modules$$tweenjs$tween_js$dist$tween_cjs.Tween(new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot));
G__52310.to(cljs.core.clj__GT_js(to_values),(function (){var or__5162__auto__ = duration;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (344);
}
})());

G__52310.easing((function (){var or__5162__auto__ = easing;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return module$node_modules$$tweenjs$tween_js$dist$tween_cjs.Easing.Cubic.Out;
}
})());

G__52310.start();

G__52310.onComplete((function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweens","tweens",-1927735551),id], null),null);

if(cljs.core.truth_(cb)){
return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
} else {
return null;
}
}));

G__52310.onStop((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweens","tweens",-1927735551),id], null),null);
}));

return G__52310;
})();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweens","tweens",-1927735551),id], null),tween);
}
}));

(tetris.render.gameplay.matrix.start_bounce_tween_BANG_.cljs$lang$maxFixedArity = 6);

tetris.render.gameplay.matrix.apply_bounce = (function tetris$render$gameplay$matrix$apply_bounce(view,game_state,input){
if(cljs.core.truth_(new cljs.core.Keyword(null,"shift-blocked?","shift-blocked?",-2058728569).cljs$core$IFn$_invoke$arity$1(game_state))){
var pressed_buttons_52373 = cljs.core.set(new cljs.core.Keyword(null,"pressed-buttons","pressed-buttons",1426560090).cljs$core$IFn$_invoke$arity$1(input));
var vec__52311_52374 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__52314){
var vec__52315 = p__52314;
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52315,(0),null);
return cljs.core.contains_QMARK_(pressed_buttons_52373,b);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-left","move-left",-271562811),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-right","move-right",1661359569),(-1)], null)], null)));
var button_52375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52311_52374,(0),null);
var dir_52376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52311_52374,(1),null);
if(cljs.core.truth_(button_52375)){
tetris.render.gameplay.tween_mgr.stop_tween_BANG_(view,new cljs.core.Keyword(null,"board-bounce-shift","board-bounce-shift",945163307));

var px_52377 = (new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot.x + (dir_52376 * (2)));
if((cljs.core.abs(px_52377) <= tetris.render.gameplay.matrix.matrix_bounce_max_dx)){
(new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot.x = px_52377);
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
var seq__52318_52378 = cljs.core.seq(cell_ids_to_remove);
var chunk__52319_52379 = null;
var count__52320_52380 = (0);
var i__52321_52381 = (0);
while(true){
if((i__52321_52381 < count__52320_52380)){
var id_52382 = chunk__52319_52379.cljs$core$IIndexed$_nth$arity$2(null,i__52321_52381);
var temp__5825__auto___52383 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),id_52382], null));
if(cljs.core.truth_(temp__5825__auto___52383)){
var cell_sprite_52384 = temp__5825__auto___52383;
new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).removeChild(cell_sprite_52384);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(view,cljs.core.update,new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id_52382], 0));
} else {
}


var G__52385 = seq__52318_52378;
var G__52386 = chunk__52319_52379;
var G__52387 = count__52320_52380;
var G__52388 = (i__52321_52381 + (1));
seq__52318_52378 = G__52385;
chunk__52319_52379 = G__52386;
count__52320_52380 = G__52387;
i__52321_52381 = G__52388;
continue;
} else {
var temp__5825__auto___52389 = cljs.core.seq(seq__52318_52378);
if(temp__5825__auto___52389){
var seq__52318_52390__$1 = temp__5825__auto___52389;
if(cljs.core.chunked_seq_QMARK_(seq__52318_52390__$1)){
var c__5694__auto___52391 = cljs.core.chunk_first(seq__52318_52390__$1);
var G__52392 = cljs.core.chunk_rest(seq__52318_52390__$1);
var G__52393 = c__5694__auto___52391;
var G__52394 = cljs.core.count(c__5694__auto___52391);
var G__52395 = (0);
seq__52318_52378 = G__52392;
chunk__52319_52379 = G__52393;
count__52320_52380 = G__52394;
i__52321_52381 = G__52395;
continue;
} else {
var id_52396 = cljs.core.first(seq__52318_52390__$1);
var temp__5825__auto___52397__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),id_52396], null));
if(cljs.core.truth_(temp__5825__auto___52397__$1)){
var cell_sprite_52398 = temp__5825__auto___52397__$1;
new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).removeChild(cell_sprite_52398);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(view,cljs.core.update,new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id_52396], 0));
} else {
}


var G__52399 = cljs.core.next(seq__52318_52390__$1);
var G__52400 = null;
var G__52401 = (0);
var G__52402 = (0);
seq__52318_52378 = G__52399;
chunk__52319_52379 = G__52400;
count__52320_52380 = G__52401;
i__52321_52381 = G__52402;
continue;
}
} else {
}
}
break;
}

var seq__52322 = cljs.core.seq(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(data));
var chunk__52323 = null;
var count__52324 = (0);
var i__52325 = (0);
while(true){
if((i__52325 < count__52324)){
var cell = chunk__52323.cljs$core$IIndexed$_nth$arity$2(null,i__52325);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)], null),cljs.core.first(tetris.render.gameplay.matrix.add_matrix_cells(cljs.core.deref(view),(1))));
}

var temp__5825__auto___52403 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)], null));
if(cljs.core.truth_(temp__5825__auto___52403)){
var cell_sprite_52404 = temp__5825__auto___52403;
(cell_sprite_52404.texture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece-cell-textures","piece-cell-textures",754648682).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"color-index","color-index",560460581).cljs$core$IFn$_invoke$arity$1(cell)));

cell_sprite_52404.position.set(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell));
} else {
}


var G__52405 = seq__52322;
var G__52406 = chunk__52323;
var G__52407 = count__52324;
var G__52408 = (i__52325 + (1));
seq__52322 = G__52405;
chunk__52323 = G__52406;
count__52324 = G__52407;
i__52325 = G__52408;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__52322);
if(temp__5825__auto__){
var seq__52322__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52322__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__52322__$1);
var G__52409 = cljs.core.chunk_rest(seq__52322__$1);
var G__52410 = c__5694__auto__;
var G__52411 = cljs.core.count(c__5694__auto__);
var G__52412 = (0);
seq__52322 = G__52409;
chunk__52323 = G__52410;
count__52324 = G__52411;
i__52325 = G__52412;
continue;
} else {
var cell = cljs.core.first(seq__52322__$1);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)], null),cljs.core.first(tetris.render.gameplay.matrix.add_matrix_cells(cljs.core.deref(view),(1))));
}

var temp__5825__auto___52413__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)], null));
if(cljs.core.truth_(temp__5825__auto___52413__$1)){
var cell_sprite_52414 = temp__5825__auto___52413__$1;
(cell_sprite_52414.texture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece-cell-textures","piece-cell-textures",754648682).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"color-index","color-index",560460581).cljs$core$IFn$_invoke$arity$1(cell)));

cell_sprite_52414.position.set(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell));
} else {
}


var G__52415 = cljs.core.next(seq__52322__$1);
var G__52416 = null;
var G__52417 = (0);
var G__52418 = (0);
seq__52322 = G__52415;
chunk__52323 = G__52416;
count__52324 = G__52417;
i__52325 = G__52418;
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
