goog.provide('tetris.scenes.render.gameplay.matrix');
var module$node_modules$$tweenjs$tween_js$dist$tween_cjs=shadow.js.require("module$node_modules$$tweenjs$tween_js$dist$tween_cjs", {});
var module$node_modules$pixi_DOT_js$lib$index=shadow.js.require("module$node_modules$pixi_DOT_js$lib$index", {});
tetris.scenes.render.gameplay.matrix.matrix_bounce_max_dx = (10);
tetris.scenes.render.gameplay.matrix.matrix_bounce_max_dy = (10);
tetris.scenes.render.gameplay.matrix.draw_frame = (function tetris$scenes$render$gameplay$matrix$draw_frame(g,p__45249){
var map__45250 = p__45249;
var map__45250__$1 = cljs.core.__destructure_map(map__45250);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45250__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45250__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var border_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45250__$1,new cljs.core.Keyword(null,"border-width","border-width",-1512605390));
var G__45251 = g;
G__45251.moveTo((0),(0));

G__45251.lineTo((0),height);

G__45251.lineTo(width,height);

G__45251.lineTo(width,(0));

G__45251.stroke(({"width": border_width, "color": (11184810), "join": "bevel"}));

G__45251.rect((border_width / (2)),(0),(width - border_width),(height - (border_width / (2))));

G__45251.fill(({"color": (1118481), "alpha": 0.3}));

return G__45251;
});
tetris.scenes.render.gameplay.matrix.draw_grid = (function tetris$scenes$render$gameplay$matrix$draw_grid(g,p__45252){
var map__45253 = p__45252;
var map__45253__$1 = cljs.core.__destructure_map(map__45253);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45253__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45253__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var border_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45253__$1,new cljs.core.Keyword(null,"border-width","border-width",-1512605390));
var padding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45253__$1,new cljs.core.Keyword(null,"padding","padding",1660304693));
var cell = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45253__$1,new cljs.core.Keyword(null,"cell","cell",764245084));
var seq__45254_45314 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(tetris.core.board.board_rows - (2))));
var chunk__45255_45315 = null;
var count__45256_45316 = (0);
var i__45257_45317 = (0);
while(true){
if((i__45257_45317 < count__45256_45316)){
var r_45318 = chunk__45255_45315.cljs$core$IIndexed$_nth$arity$2(null,i__45257_45317);
var y_45319 = (r_45318 * new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(cell));
g.moveTo(new cljs.core.Keyword(null,"base-x","base-x",-13745014).cljs$core$IFn$_invoke$arity$1(cell),y_45319);

g.lineTo(((width - (border_width / (2))) - padding),y_45319);


var G__45320 = seq__45254_45314;
var G__45321 = chunk__45255_45315;
var G__45322 = count__45256_45316;
var G__45323 = (i__45257_45317 + (1));
seq__45254_45314 = G__45320;
chunk__45255_45315 = G__45321;
count__45256_45316 = G__45322;
i__45257_45317 = G__45323;
continue;
} else {
var temp__5825__auto___45324 = cljs.core.seq(seq__45254_45314);
if(temp__5825__auto___45324){
var seq__45254_45325__$1 = temp__5825__auto___45324;
if(cljs.core.chunked_seq_QMARK_(seq__45254_45325__$1)){
var c__5694__auto___45326 = cljs.core.chunk_first(seq__45254_45325__$1);
var G__45327 = cljs.core.chunk_rest(seq__45254_45325__$1);
var G__45328 = c__5694__auto___45326;
var G__45329 = cljs.core.count(c__5694__auto___45326);
var G__45330 = (0);
seq__45254_45314 = G__45327;
chunk__45255_45315 = G__45328;
count__45256_45316 = G__45329;
i__45257_45317 = G__45330;
continue;
} else {
var r_45331 = cljs.core.first(seq__45254_45325__$1);
var y_45332 = (r_45331 * new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(cell));
g.moveTo(new cljs.core.Keyword(null,"base-x","base-x",-13745014).cljs$core$IFn$_invoke$arity$1(cell),y_45332);

g.lineTo(((width - (border_width / (2))) - padding),y_45332);


var G__45333 = cljs.core.next(seq__45254_45325__$1);
var G__45334 = null;
var G__45335 = (0);
var G__45336 = (0);
seq__45254_45314 = G__45333;
chunk__45255_45315 = G__45334;
count__45256_45316 = G__45335;
i__45257_45317 = G__45336;
continue;
}
} else {
}
}
break;
}

var seq__45258_45337 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(10)));
var chunk__45259_45338 = null;
var count__45260_45339 = (0);
var i__45261_45340 = (0);
while(true){
if((i__45261_45340 < count__45260_45339)){
var c_45341 = chunk__45259_45338.cljs$core$IIndexed$_nth$arity$2(null,i__45261_45340);
var x_45342 = ((c_45341 * new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(cell)) + new cljs.core.Keyword(null,"base-x","base-x",-13745014).cljs$core$IFn$_invoke$arity$1(cell));
g.moveTo(x_45342,(0));

g.lineTo(x_45342,((height - (border_width / (2))) - padding));


var G__45343 = seq__45258_45337;
var G__45344 = chunk__45259_45338;
var G__45345 = count__45260_45339;
var G__45346 = (i__45261_45340 + (1));
seq__45258_45337 = G__45343;
chunk__45259_45338 = G__45344;
count__45260_45339 = G__45345;
i__45261_45340 = G__45346;
continue;
} else {
var temp__5825__auto___45347 = cljs.core.seq(seq__45258_45337);
if(temp__5825__auto___45347){
var seq__45258_45348__$1 = temp__5825__auto___45347;
if(cljs.core.chunked_seq_QMARK_(seq__45258_45348__$1)){
var c__5694__auto___45349 = cljs.core.chunk_first(seq__45258_45348__$1);
var G__45350 = cljs.core.chunk_rest(seq__45258_45348__$1);
var G__45351 = c__5694__auto___45349;
var G__45352 = cljs.core.count(c__5694__auto___45349);
var G__45353 = (0);
seq__45258_45337 = G__45350;
chunk__45259_45338 = G__45351;
count__45260_45339 = G__45352;
i__45261_45340 = G__45353;
continue;
} else {
var c_45354 = cljs.core.first(seq__45258_45348__$1);
var x_45355 = ((c_45354 * new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(cell)) + new cljs.core.Keyword(null,"base-x","base-x",-13745014).cljs$core$IFn$_invoke$arity$1(cell));
g.moveTo(x_45355,(0));

g.lineTo(x_45355,((height - (border_width / (2))) - padding));


var G__45356 = cljs.core.next(seq__45258_45348__$1);
var G__45357 = null;
var G__45358 = (0);
var G__45359 = (0);
seq__45258_45337 = G__45356;
chunk__45259_45338 = G__45357;
count__45260_45339 = G__45358;
i__45261_45340 = G__45359;
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
var map__45270 = matrix_layout;
var map__45270__$1 = cljs.core.__destructure_map(map__45270);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45270__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45270__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var cell = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45270__$1,new cljs.core.Keyword(null,"cell","cell",764245084));
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
var G__45278 = arguments.length;
switch (G__45278) {
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
var tween = (function (){var G__45282 = (new module$node_modules$$tweenjs$tween_js$dist$tween_cjs.Tween(new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot));
G__45282.to(cljs.core.clj__GT_js(to_values),(function (){var or__5162__auto__ = duration;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (344);
}
})());

G__45282.easing((function (){var or__5162__auto__ = easing;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return module$node_modules$$tweenjs$tween_js$dist$tween_cjs.Easing.Cubic.Out;
}
})());

G__45282.start();

G__45282.onComplete((function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweens","tweens",-1927735551),id], null),null);

if(cljs.core.truth_(cb)){
return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
} else {
return null;
}
}));

G__45282.onStop((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweens","tweens",-1927735551),id], null),null);
}));

return G__45282;
})();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweens","tweens",-1927735551),id], null),tween);
}
}));

(tetris.scenes.render.gameplay.matrix.start_bounce_tween_BANG_.cljs$lang$maxFixedArity = 6);

tetris.scenes.render.gameplay.matrix.apply_bounce = (function tetris$scenes$render$gameplay$matrix$apply_bounce(view,game_state,input){
if(cljs.core.truth_(new cljs.core.Keyword(null,"shift-blocked?","shift-blocked?",-2058728569).cljs$core$IFn$_invoke$arity$1(game_state))){
var pressed_buttons_45361 = cljs.core.set(new cljs.core.Keyword(null,"pressed-buttons","pressed-buttons",1426560090).cljs$core$IFn$_invoke$arity$1(input));
var vec__45286_45362 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__45290){
var vec__45291 = p__45290;
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45291,(0),null);
return cljs.core.contains_QMARK_(pressed_buttons_45361,b);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-left","move-left",-271562811),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-right","move-right",1661359569),(-1)], null)], null)));
var button_45363 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45286_45362,(0),null);
var dir_45364 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45286_45362,(1),null);
if(cljs.core.truth_(button_45363)){
tetris.scenes.render.gameplay.tween_mgr.stop_tween_BANG_(view,new cljs.core.Keyword(null,"board-bounce-shift","board-bounce-shift",945163307));

var px_45365 = (new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot.x + (dir_45364 * (2)));
if((cljs.core.abs(px_45365) <= tetris.scenes.render.gameplay.matrix.matrix_bounce_max_dx)){
(new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot.x = px_45365);
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
var seq__45306_45366 = cljs.core.seq(cell_ids_to_remove);
var chunk__45307_45367 = null;
var count__45308_45368 = (0);
var i__45309_45369 = (0);
while(true){
if((i__45309_45369 < count__45308_45368)){
var id_45370 = chunk__45307_45367.cljs$core$IIndexed$_nth$arity$2(null,i__45309_45369);
var temp__5825__auto___45371 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),id_45370], null));
if(cljs.core.truth_(temp__5825__auto___45371)){
var cell_sprite_45372 = temp__5825__auto___45371;
new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).removeChild(cell_sprite_45372);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(view,cljs.core.update,new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id_45370], 0));
} else {
}


var G__45373 = seq__45306_45366;
var G__45374 = chunk__45307_45367;
var G__45375 = count__45308_45368;
var G__45376 = (i__45309_45369 + (1));
seq__45306_45366 = G__45373;
chunk__45307_45367 = G__45374;
count__45308_45368 = G__45375;
i__45309_45369 = G__45376;
continue;
} else {
var temp__5825__auto___45377 = cljs.core.seq(seq__45306_45366);
if(temp__5825__auto___45377){
var seq__45306_45378__$1 = temp__5825__auto___45377;
if(cljs.core.chunked_seq_QMARK_(seq__45306_45378__$1)){
var c__5694__auto___45379 = cljs.core.chunk_first(seq__45306_45378__$1);
var G__45380 = cljs.core.chunk_rest(seq__45306_45378__$1);
var G__45381 = c__5694__auto___45379;
var G__45382 = cljs.core.count(c__5694__auto___45379);
var G__45383 = (0);
seq__45306_45366 = G__45380;
chunk__45307_45367 = G__45381;
count__45308_45368 = G__45382;
i__45309_45369 = G__45383;
continue;
} else {
var id_45384 = cljs.core.first(seq__45306_45378__$1);
var temp__5825__auto___45385__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),id_45384], null));
if(cljs.core.truth_(temp__5825__auto___45385__$1)){
var cell_sprite_45386 = temp__5825__auto___45385__$1;
new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).removeChild(cell_sprite_45386);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(view,cljs.core.update,new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id_45384], 0));
} else {
}


var G__45387 = cljs.core.next(seq__45306_45378__$1);
var G__45388 = null;
var G__45389 = (0);
var G__45390 = (0);
seq__45306_45366 = G__45387;
chunk__45307_45367 = G__45388;
count__45308_45368 = G__45389;
i__45309_45369 = G__45390;
continue;
}
} else {
}
}
break;
}

var seq__45310 = cljs.core.seq(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(data));
var chunk__45311 = null;
var count__45312 = (0);
var i__45313 = (0);
while(true){
if((i__45313 < count__45312)){
var cell = chunk__45311.cljs$core$IIndexed$_nth$arity$2(null,i__45313);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)], null),cljs.core.first(tetris.scenes.render.gameplay.matrix.add_matrix_cells(cljs.core.deref(view),(1))));
}

var temp__5825__auto___45392 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)], null));
if(cljs.core.truth_(temp__5825__auto___45392)){
var cell_sprite_45393 = temp__5825__auto___45392;
(cell_sprite_45393.texture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece-cell-textures","piece-cell-textures",754648682).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"color-index","color-index",560460581).cljs$core$IFn$_invoke$arity$1(cell)));

cell_sprite_45393.position.set(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell));
} else {
}


var G__45394 = seq__45310;
var G__45395 = chunk__45311;
var G__45396 = count__45312;
var G__45397 = (i__45313 + (1));
seq__45310 = G__45394;
chunk__45311 = G__45395;
count__45312 = G__45396;
i__45313 = G__45397;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__45310);
if(temp__5825__auto__){
var seq__45310__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45310__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__45310__$1);
var G__45399 = cljs.core.chunk_rest(seq__45310__$1);
var G__45400 = c__5694__auto__;
var G__45401 = cljs.core.count(c__5694__auto__);
var G__45402 = (0);
seq__45310 = G__45399;
chunk__45311 = G__45400;
count__45312 = G__45401;
i__45313 = G__45402;
continue;
} else {
var cell = cljs.core.first(seq__45310__$1);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)], null),cljs.core.first(tetris.scenes.render.gameplay.matrix.add_matrix_cells(cljs.core.deref(view),(1))));
}

var temp__5825__auto___45403__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)], null));
if(cljs.core.truth_(temp__5825__auto___45403__$1)){
var cell_sprite_45404 = temp__5825__auto___45403__$1;
(cell_sprite_45404.texture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece-cell-textures","piece-cell-textures",754648682).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"color-index","color-index",560460581).cljs$core$IFn$_invoke$arity$1(cell)));

cell_sprite_45404.position.set(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell));
} else {
}


var G__45405 = cljs.core.next(seq__45310__$1);
var G__45406 = null;
var G__45407 = (0);
var G__45408 = (0);
seq__45310 = G__45405;
chunk__45311 = G__45406;
count__45312 = G__45407;
i__45313 = G__45408;
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
