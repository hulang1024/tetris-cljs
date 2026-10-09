goog.provide('tetris.scenes.render.gameplay.matrix');
var module$node_modules$$tweenjs$tween_js$dist$tween_cjs=shadow.js.require("module$node_modules$$tweenjs$tween_js$dist$tween_cjs", {});
var module$node_modules$pixi_DOT_js$lib$index=shadow.js.require("module$node_modules$pixi_DOT_js$lib$index", {});
tetris.scenes.render.gameplay.matrix.matrix_bounce_max_dx = (10);
tetris.scenes.render.gameplay.matrix.matrix_bounce_max_dy = (10);
tetris.scenes.render.gameplay.matrix.draw_frame = (function tetris$scenes$render$gameplay$matrix$draw_frame(g,p__47319){
var map__47320 = p__47319;
var map__47320__$1 = cljs.core.__destructure_map(map__47320);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47320__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47320__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var border_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47320__$1,new cljs.core.Keyword(null,"border-width","border-width",-1512605390));
var G__47321 = g;
G__47321.moveTo((0),(0));

G__47321.lineTo((0),height);

G__47321.lineTo(width,height);

G__47321.lineTo(width,(0));

G__47321.stroke(({"width": border_width, "color": (11184810), "join": "bevel"}));

G__47321.rect((border_width / (2)),(0),(width - border_width),(height - (border_width / (2))));

G__47321.fill(({"color": (1118481), "alpha": 0.3}));

return G__47321;
});
tetris.scenes.render.gameplay.matrix.draw_grid = (function tetris$scenes$render$gameplay$matrix$draw_grid(g,p__47325){
var map__47326 = p__47325;
var map__47326__$1 = cljs.core.__destructure_map(map__47326);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47326__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47326__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var border_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47326__$1,new cljs.core.Keyword(null,"border-width","border-width",-1512605390));
var padding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47326__$1,new cljs.core.Keyword(null,"padding","padding",1660304693));
var cell = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47326__$1,new cljs.core.Keyword(null,"cell","cell",764245084));
var seq__47327_47368 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(tetris.core.board.board_rows - (2))));
var chunk__47328_47369 = null;
var count__47329_47370 = (0);
var i__47330_47371 = (0);
while(true){
if((i__47330_47371 < count__47329_47370)){
var r_47372 = chunk__47328_47369.cljs$core$IIndexed$_nth$arity$2(null,i__47330_47371);
var y_47373 = (r_47372 * new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(cell));
g.moveTo(new cljs.core.Keyword(null,"base-x","base-x",-13745014).cljs$core$IFn$_invoke$arity$1(cell),y_47373);

g.lineTo(((width - (border_width / (2))) - padding),y_47373);


var G__47374 = seq__47327_47368;
var G__47375 = chunk__47328_47369;
var G__47376 = count__47329_47370;
var G__47377 = (i__47330_47371 + (1));
seq__47327_47368 = G__47374;
chunk__47328_47369 = G__47375;
count__47329_47370 = G__47376;
i__47330_47371 = G__47377;
continue;
} else {
var temp__5825__auto___47378 = cljs.core.seq(seq__47327_47368);
if(temp__5825__auto___47378){
var seq__47327_47379__$1 = temp__5825__auto___47378;
if(cljs.core.chunked_seq_QMARK_(seq__47327_47379__$1)){
var c__5694__auto___47380 = cljs.core.chunk_first(seq__47327_47379__$1);
var G__47381 = cljs.core.chunk_rest(seq__47327_47379__$1);
var G__47382 = c__5694__auto___47380;
var G__47383 = cljs.core.count(c__5694__auto___47380);
var G__47384 = (0);
seq__47327_47368 = G__47381;
chunk__47328_47369 = G__47382;
count__47329_47370 = G__47383;
i__47330_47371 = G__47384;
continue;
} else {
var r_47385 = cljs.core.first(seq__47327_47379__$1);
var y_47386 = (r_47385 * new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(cell));
g.moveTo(new cljs.core.Keyword(null,"base-x","base-x",-13745014).cljs$core$IFn$_invoke$arity$1(cell),y_47386);

g.lineTo(((width - (border_width / (2))) - padding),y_47386);


var G__47387 = cljs.core.next(seq__47327_47379__$1);
var G__47388 = null;
var G__47389 = (0);
var G__47390 = (0);
seq__47327_47368 = G__47387;
chunk__47328_47369 = G__47388;
count__47329_47370 = G__47389;
i__47330_47371 = G__47390;
continue;
}
} else {
}
}
break;
}

var seq__47335_47391 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(10)));
var chunk__47336_47392 = null;
var count__47337_47393 = (0);
var i__47338_47394 = (0);
while(true){
if((i__47338_47394 < count__47337_47393)){
var c_47395 = chunk__47336_47392.cljs$core$IIndexed$_nth$arity$2(null,i__47338_47394);
var x_47396 = ((c_47395 * new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(cell)) + new cljs.core.Keyword(null,"base-x","base-x",-13745014).cljs$core$IFn$_invoke$arity$1(cell));
g.moveTo(x_47396,(0));

g.lineTo(x_47396,((height - (border_width / (2))) - padding));


var G__47397 = seq__47335_47391;
var G__47398 = chunk__47336_47392;
var G__47399 = count__47337_47393;
var G__47400 = (i__47338_47394 + (1));
seq__47335_47391 = G__47397;
chunk__47336_47392 = G__47398;
count__47337_47393 = G__47399;
i__47338_47394 = G__47400;
continue;
} else {
var temp__5825__auto___47401 = cljs.core.seq(seq__47335_47391);
if(temp__5825__auto___47401){
var seq__47335_47402__$1 = temp__5825__auto___47401;
if(cljs.core.chunked_seq_QMARK_(seq__47335_47402__$1)){
var c__5694__auto___47403 = cljs.core.chunk_first(seq__47335_47402__$1);
var G__47404 = cljs.core.chunk_rest(seq__47335_47402__$1);
var G__47405 = c__5694__auto___47403;
var G__47406 = cljs.core.count(c__5694__auto___47403);
var G__47407 = (0);
seq__47335_47391 = G__47404;
chunk__47336_47392 = G__47405;
count__47337_47393 = G__47406;
i__47338_47394 = G__47407;
continue;
} else {
var c_47408 = cljs.core.first(seq__47335_47402__$1);
var x_47409 = ((c_47408 * new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(cell)) + new cljs.core.Keyword(null,"base-x","base-x",-13745014).cljs$core$IFn$_invoke$arity$1(cell));
g.moveTo(x_47409,(0));

g.lineTo(x_47409,((height - (border_width / (2))) - padding));


var G__47410 = cljs.core.next(seq__47335_47402__$1);
var G__47411 = null;
var G__47412 = (0);
var G__47413 = (0);
seq__47335_47391 = G__47410;
chunk__47336_47392 = G__47411;
count__47337_47393 = G__47412;
i__47338_47394 = G__47413;
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
var map__47343 = matrix_layout;
var map__47343__$1 = cljs.core.__destructure_map(map__47343);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47343__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47343__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var cell = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47343__$1,new cljs.core.Keyword(null,"cell","cell",764245084));
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
var G__47348 = arguments.length;
switch (G__47348) {
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
var tween = (function (){var G__47349 = (new module$node_modules$$tweenjs$tween_js$dist$tween_cjs.Tween(new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot));
G__47349.to(cljs.core.clj__GT_js(to_values),(function (){var or__5162__auto__ = duration;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (344);
}
})());

G__47349.easing((function (){var or__5162__auto__ = easing;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return module$node_modules$$tweenjs$tween_js$dist$tween_cjs.Easing.Cubic.Out;
}
})());

G__47349.start();

G__47349.onComplete((function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweens","tweens",-1927735551),id], null),null);

if(cljs.core.truth_(cb)){
return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
} else {
return null;
}
}));

G__47349.onStop((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweens","tweens",-1927735551),id], null),null);
}));

return G__47349;
})();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweens","tweens",-1927735551),id], null),tween);
}
}));

(tetris.scenes.render.gameplay.matrix.start_bounce_tween_BANG_.cljs$lang$maxFixedArity = 6);

tetris.scenes.render.gameplay.matrix.apply_bounce = (function tetris$scenes$render$gameplay$matrix$apply_bounce(view,game_state,input){
if(cljs.core.truth_(new cljs.core.Keyword(null,"shift-blocked?","shift-blocked?",-2058728569).cljs$core$IFn$_invoke$arity$1(game_state))){
var pressed_buttons_47415 = cljs.core.set(new cljs.core.Keyword(null,"pressed-buttons","pressed-buttons",1426560090).cljs$core$IFn$_invoke$arity$1(input));
var vec__47350_47416 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__47353){
var vec__47354 = p__47353;
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47354,(0),null);
return cljs.core.contains_QMARK_(pressed_buttons_47415,b);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-left","move-left",-271562811),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-right","move-right",1661359569),(-1)], null)], null)));
var button_47417 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47350_47416,(0),null);
var dir_47418 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47350_47416,(1),null);
if(cljs.core.truth_(button_47417)){
tetris.scenes.render.gameplay.tween_mgr.stop_tween_BANG_(view,new cljs.core.Keyword(null,"board-bounce-shift","board-bounce-shift",945163307));

var px_47419 = (new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot.x + (dir_47418 * (2)));
if((cljs.core.abs(px_47419) <= tetris.scenes.render.gameplay.matrix.matrix_bounce_max_dx)){
(new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot.x = px_47419);
} else {
}
} else {
tetris.scenes.render.gameplay.matrix.start_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$3(view,new cljs.core.Keyword(null,"board-bounce-shift","board-bounce-shift",945163307),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(0)], null));
}
} else {
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
var seq__47360_47420 = cljs.core.seq(cell_ids_to_remove);
var chunk__47361_47421 = null;
var count__47362_47422 = (0);
var i__47363_47423 = (0);
while(true){
if((i__47363_47423 < count__47362_47422)){
var id_47424 = chunk__47361_47421.cljs$core$IIndexed$_nth$arity$2(null,i__47363_47423);
var temp__5825__auto___47425 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),id_47424], null));
if(cljs.core.truth_(temp__5825__auto___47425)){
var cell_sprite_47426 = temp__5825__auto___47425;
new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).removeChild(cell_sprite_47426);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(view,cljs.core.update,new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id_47424], 0));
} else {
}


var G__47427 = seq__47360_47420;
var G__47428 = chunk__47361_47421;
var G__47429 = count__47362_47422;
var G__47430 = (i__47363_47423 + (1));
seq__47360_47420 = G__47427;
chunk__47361_47421 = G__47428;
count__47362_47422 = G__47429;
i__47363_47423 = G__47430;
continue;
} else {
var temp__5825__auto___47431 = cljs.core.seq(seq__47360_47420);
if(temp__5825__auto___47431){
var seq__47360_47432__$1 = temp__5825__auto___47431;
if(cljs.core.chunked_seq_QMARK_(seq__47360_47432__$1)){
var c__5694__auto___47433 = cljs.core.chunk_first(seq__47360_47432__$1);
var G__47434 = cljs.core.chunk_rest(seq__47360_47432__$1);
var G__47435 = c__5694__auto___47433;
var G__47436 = cljs.core.count(c__5694__auto___47433);
var G__47437 = (0);
seq__47360_47420 = G__47434;
chunk__47361_47421 = G__47435;
count__47362_47422 = G__47436;
i__47363_47423 = G__47437;
continue;
} else {
var id_47438 = cljs.core.first(seq__47360_47432__$1);
var temp__5825__auto___47439__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),id_47438], null));
if(cljs.core.truth_(temp__5825__auto___47439__$1)){
var cell_sprite_47441 = temp__5825__auto___47439__$1;
new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).removeChild(cell_sprite_47441);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(view,cljs.core.update,new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id_47438], 0));
} else {
}


var G__47443 = cljs.core.next(seq__47360_47432__$1);
var G__47444 = null;
var G__47445 = (0);
var G__47446 = (0);
seq__47360_47420 = G__47443;
chunk__47361_47421 = G__47444;
count__47362_47422 = G__47445;
i__47363_47423 = G__47446;
continue;
}
} else {
}
}
break;
}

var seq__47364 = cljs.core.seq(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(data));
var chunk__47365 = null;
var count__47366 = (0);
var i__47367 = (0);
while(true){
if((i__47367 < count__47366)){
var cell = chunk__47365.cljs$core$IIndexed$_nth$arity$2(null,i__47367);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)], null),cljs.core.first(tetris.scenes.render.gameplay.matrix.add_matrix_cells(cljs.core.deref(view),(1))));
}

var temp__5825__auto___47447 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)], null));
if(cljs.core.truth_(temp__5825__auto___47447)){
var cell_sprite_47448 = temp__5825__auto___47447;
(cell_sprite_47448.texture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece-cell-textures","piece-cell-textures",754648682).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"color-index","color-index",560460581).cljs$core$IFn$_invoke$arity$1(cell)));

cell_sprite_47448.position.set(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell));
} else {
}


var G__47449 = seq__47364;
var G__47450 = chunk__47365;
var G__47451 = count__47366;
var G__47452 = (i__47367 + (1));
seq__47364 = G__47449;
chunk__47365 = G__47450;
count__47366 = G__47451;
i__47367 = G__47452;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__47364);
if(temp__5825__auto__){
var seq__47364__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47364__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__47364__$1);
var G__47453 = cljs.core.chunk_rest(seq__47364__$1);
var G__47454 = c__5694__auto__;
var G__47455 = cljs.core.count(c__5694__auto__);
var G__47456 = (0);
seq__47364 = G__47453;
chunk__47365 = G__47454;
count__47366 = G__47455;
i__47367 = G__47456;
continue;
} else {
var cell = cljs.core.first(seq__47364__$1);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)], null),cljs.core.first(tetris.scenes.render.gameplay.matrix.add_matrix_cells(cljs.core.deref(view),(1))));
}

var temp__5825__auto___47457__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)], null));
if(cljs.core.truth_(temp__5825__auto___47457__$1)){
var cell_sprite_47458 = temp__5825__auto___47457__$1;
(cell_sprite_47458.texture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece-cell-textures","piece-cell-textures",754648682).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"color-index","color-index",560460581).cljs$core$IFn$_invoke$arity$1(cell)));

cell_sprite_47458.position.set(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell));
} else {
}


var G__47460 = cljs.core.next(seq__47364__$1);
var G__47461 = null;
var G__47462 = (0);
var G__47463 = (0);
seq__47364 = G__47460;
chunk__47365 = G__47461;
count__47366 = G__47462;
i__47367 = G__47463;
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
