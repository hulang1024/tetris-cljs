goog.provide('tetris.scenes.render.gameplay.matrix');
var module$node_modules$$tweenjs$tween_js$dist$tween_cjs=shadow.js.require("module$node_modules$$tweenjs$tween_js$dist$tween_cjs", {});
var module$node_modules$pixi_DOT_js$lib$index=shadow.js.require("module$node_modules$pixi_DOT_js$lib$index", {});
tetris.scenes.render.gameplay.matrix.matrix_bounce_max_dx = (10);
tetris.scenes.render.gameplay.matrix.matrix_bounce_max_dy = (10);
tetris.scenes.render.gameplay.matrix.draw_frame = (function tetris$scenes$render$gameplay$matrix$draw_frame(g,p__40402){
var map__40403 = p__40402;
var map__40403__$1 = cljs.core.__destructure_map(map__40403);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40403__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40403__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var border_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40403__$1,new cljs.core.Keyword(null,"border-width","border-width",-1512605390));
var G__40404 = g;
G__40404.moveTo((0),(0));

G__40404.lineTo((0),height);

G__40404.lineTo(width,height);

G__40404.lineTo(width,(0));

G__40404.stroke(({"width": border_width, "color": (11184810), "join": "bevel"}));

G__40404.rect((border_width / (2)),(0),(width - border_width),(height - (border_width / (2))));

G__40404.fill(({"color": (1118481), "alpha": 0.3}));

return G__40404;
});
tetris.scenes.render.gameplay.matrix.draw_grid = (function tetris$scenes$render$gameplay$matrix$draw_grid(g,p__40407){
var map__40408 = p__40407;
var map__40408__$1 = cljs.core.__destructure_map(map__40408);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40408__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40408__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var border_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40408__$1,new cljs.core.Keyword(null,"border-width","border-width",-1512605390));
var padding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40408__$1,new cljs.core.Keyword(null,"padding","padding",1660304693));
var cell = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40408__$1,new cljs.core.Keyword(null,"cell","cell",764245084));
var seq__40409_40454 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(tetris.core.board.board_rows - (2))));
var chunk__40410_40455 = null;
var count__40411_40456 = (0);
var i__40412_40457 = (0);
while(true){
if((i__40412_40457 < count__40411_40456)){
var r_40458 = chunk__40410_40455.cljs$core$IIndexed$_nth$arity$2(null,i__40412_40457);
var y_40459 = (r_40458 * new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(cell));
g.moveTo(new cljs.core.Keyword(null,"base-x","base-x",-13745014).cljs$core$IFn$_invoke$arity$1(cell),y_40459);

g.lineTo(((width - (border_width / (2))) - padding),y_40459);


var G__40460 = seq__40409_40454;
var G__40461 = chunk__40410_40455;
var G__40462 = count__40411_40456;
var G__40463 = (i__40412_40457 + (1));
seq__40409_40454 = G__40460;
chunk__40410_40455 = G__40461;
count__40411_40456 = G__40462;
i__40412_40457 = G__40463;
continue;
} else {
var temp__5825__auto___40464 = cljs.core.seq(seq__40409_40454);
if(temp__5825__auto___40464){
var seq__40409_40465__$1 = temp__5825__auto___40464;
if(cljs.core.chunked_seq_QMARK_(seq__40409_40465__$1)){
var c__5694__auto___40466 = cljs.core.chunk_first(seq__40409_40465__$1);
var G__40467 = cljs.core.chunk_rest(seq__40409_40465__$1);
var G__40468 = c__5694__auto___40466;
var G__40469 = cljs.core.count(c__5694__auto___40466);
var G__40470 = (0);
seq__40409_40454 = G__40467;
chunk__40410_40455 = G__40468;
count__40411_40456 = G__40469;
i__40412_40457 = G__40470;
continue;
} else {
var r_40471 = cljs.core.first(seq__40409_40465__$1);
var y_40472 = (r_40471 * new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(cell));
g.moveTo(new cljs.core.Keyword(null,"base-x","base-x",-13745014).cljs$core$IFn$_invoke$arity$1(cell),y_40472);

g.lineTo(((width - (border_width / (2))) - padding),y_40472);


var G__40473 = cljs.core.next(seq__40409_40465__$1);
var G__40474 = null;
var G__40475 = (0);
var G__40476 = (0);
seq__40409_40454 = G__40473;
chunk__40410_40455 = G__40474;
count__40411_40456 = G__40475;
i__40412_40457 = G__40476;
continue;
}
} else {
}
}
break;
}

var seq__40416_40477 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(10)));
var chunk__40417_40478 = null;
var count__40418_40479 = (0);
var i__40419_40480 = (0);
while(true){
if((i__40419_40480 < count__40418_40479)){
var c_40481 = chunk__40417_40478.cljs$core$IIndexed$_nth$arity$2(null,i__40419_40480);
var x_40482 = ((c_40481 * new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(cell)) + new cljs.core.Keyword(null,"base-x","base-x",-13745014).cljs$core$IFn$_invoke$arity$1(cell));
g.moveTo(x_40482,(0));

g.lineTo(x_40482,((height - (border_width / (2))) - padding));


var G__40483 = seq__40416_40477;
var G__40484 = chunk__40417_40478;
var G__40485 = count__40418_40479;
var G__40486 = (i__40419_40480 + (1));
seq__40416_40477 = G__40483;
chunk__40417_40478 = G__40484;
count__40418_40479 = G__40485;
i__40419_40480 = G__40486;
continue;
} else {
var temp__5825__auto___40487 = cljs.core.seq(seq__40416_40477);
if(temp__5825__auto___40487){
var seq__40416_40488__$1 = temp__5825__auto___40487;
if(cljs.core.chunked_seq_QMARK_(seq__40416_40488__$1)){
var c__5694__auto___40489 = cljs.core.chunk_first(seq__40416_40488__$1);
var G__40490 = cljs.core.chunk_rest(seq__40416_40488__$1);
var G__40491 = c__5694__auto___40489;
var G__40492 = cljs.core.count(c__5694__auto___40489);
var G__40493 = (0);
seq__40416_40477 = G__40490;
chunk__40417_40478 = G__40491;
count__40418_40479 = G__40492;
i__40419_40480 = G__40493;
continue;
} else {
var c_40494 = cljs.core.first(seq__40416_40488__$1);
var x_40495 = ((c_40494 * new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(cell)) + new cljs.core.Keyword(null,"base-x","base-x",-13745014).cljs$core$IFn$_invoke$arity$1(cell));
g.moveTo(x_40495,(0));

g.lineTo(x_40495,((height - (border_width / (2))) - padding));


var G__40496 = cljs.core.next(seq__40416_40488__$1);
var G__40497 = null;
var G__40499 = (0);
var G__40500 = (0);
seq__40416_40477 = G__40496;
chunk__40417_40478 = G__40497;
count__40418_40479 = G__40499;
i__40419_40480 = G__40500;
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
var map__40420 = matrix_layout;
var map__40420__$1 = cljs.core.__destructure_map(map__40420);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40420__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40420__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var cell = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40420__$1,new cljs.core.Keyword(null,"cell","cell",764245084));
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
var G__40422 = arguments.length;
switch (G__40422) {
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
var tween = (function (){var G__40425 = (new module$node_modules$$tweenjs$tween_js$dist$tween_cjs.Tween(new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot));
G__40425.to(cljs.core.clj__GT_js(to_values),(function (){var or__5162__auto__ = duration;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (344);
}
})());

G__40425.easing((function (){var or__5162__auto__ = easing;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return module$node_modules$$tweenjs$tween_js$dist$tween_cjs.Easing.Cubic.Out;
}
})());

G__40425.start();

G__40425.onComplete((function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweens","tweens",-1927735551),id], null),null);

if(cljs.core.truth_(cb)){
return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
} else {
return null;
}
}));

G__40425.onStop((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweens","tweens",-1927735551),id], null),null);
}));

return G__40425;
})();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweens","tweens",-1927735551),id], null),tween);
}
}));

(tetris.scenes.render.gameplay.matrix.start_bounce_tween_BANG_.cljs$lang$maxFixedArity = 6);

tetris.scenes.render.gameplay.matrix.apply_bounce = (function tetris$scenes$render$gameplay$matrix$apply_bounce(view,game_state,input){
if(cljs.core.truth_(new cljs.core.Keyword(null,"shift-blocked?","shift-blocked?",-2058728569).cljs$core$IFn$_invoke$arity$1(game_state))){
var pressed_buttons_40503 = cljs.core.set(new cljs.core.Keyword(null,"pressed-buttons","pressed-buttons",1426560090).cljs$core$IFn$_invoke$arity$1(input));
var vec__40427_40504 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__40432){
var vec__40433 = p__40432;
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40433,(0),null);
return cljs.core.contains_QMARK_(pressed_buttons_40503,b);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-left","move-left",-271562811),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-right","move-right",1661359569),(-1)], null)], null)));
var button_40505 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40427_40504,(0),null);
var dir_40506 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40427_40504,(1),null);
if(cljs.core.truth_(button_40505)){
tetris.scenes.render.gameplay.tween_mgr.stop_tween_BANG_(view,new cljs.core.Keyword(null,"board-bounce-shift","board-bounce-shift",945163307));

var px_40507 = (new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot.x + (dir_40506 * (2)));
if((cljs.core.abs(px_40507) <= tetris.scenes.render.gameplay.matrix.matrix_bounce_max_dx)){
(new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot.x = px_40507);
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
var seq__40438_40509 = cljs.core.seq(cell_ids_to_remove);
var chunk__40439_40510 = null;
var count__40440_40511 = (0);
var i__40441_40512 = (0);
while(true){
if((i__40441_40512 < count__40440_40511)){
var id_40513 = chunk__40439_40510.cljs$core$IIndexed$_nth$arity$2(null,i__40441_40512);
var temp__5825__auto___40514 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),id_40513], null));
if(cljs.core.truth_(temp__5825__auto___40514)){
var cell_sprite_40515 = temp__5825__auto___40514;
new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).removeChild(cell_sprite_40515);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(view,cljs.core.update,new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id_40513], 0));
} else {
}


var G__40516 = seq__40438_40509;
var G__40517 = chunk__40439_40510;
var G__40518 = count__40440_40511;
var G__40519 = (i__40441_40512 + (1));
seq__40438_40509 = G__40516;
chunk__40439_40510 = G__40517;
count__40440_40511 = G__40518;
i__40441_40512 = G__40519;
continue;
} else {
var temp__5825__auto___40520 = cljs.core.seq(seq__40438_40509);
if(temp__5825__auto___40520){
var seq__40438_40521__$1 = temp__5825__auto___40520;
if(cljs.core.chunked_seq_QMARK_(seq__40438_40521__$1)){
var c__5694__auto___40522 = cljs.core.chunk_first(seq__40438_40521__$1);
var G__40530 = cljs.core.chunk_rest(seq__40438_40521__$1);
var G__40531 = c__5694__auto___40522;
var G__40532 = cljs.core.count(c__5694__auto___40522);
var G__40533 = (0);
seq__40438_40509 = G__40530;
chunk__40439_40510 = G__40531;
count__40440_40511 = G__40532;
i__40441_40512 = G__40533;
continue;
} else {
var id_40534 = cljs.core.first(seq__40438_40521__$1);
var temp__5825__auto___40535__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),id_40534], null));
if(cljs.core.truth_(temp__5825__auto___40535__$1)){
var cell_sprite_40536 = temp__5825__auto___40535__$1;
new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).removeChild(cell_sprite_40536);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(view,cljs.core.update,new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id_40534], 0));
} else {
}


var G__40538 = cljs.core.next(seq__40438_40521__$1);
var G__40539 = null;
var G__40540 = (0);
var G__40541 = (0);
seq__40438_40509 = G__40538;
chunk__40439_40510 = G__40539;
count__40440_40511 = G__40540;
i__40441_40512 = G__40541;
continue;
}
} else {
}
}
break;
}

var seq__40445 = cljs.core.seq(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(data));
var chunk__40446 = null;
var count__40447 = (0);
var i__40448 = (0);
while(true){
if((i__40448 < count__40447)){
var cell = chunk__40446.cljs$core$IIndexed$_nth$arity$2(null,i__40448);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)], null),cljs.core.first(tetris.scenes.render.gameplay.matrix.add_matrix_cells(cljs.core.deref(view),(1))));
}

var temp__5825__auto___40542 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)], null));
if(cljs.core.truth_(temp__5825__auto___40542)){
var cell_sprite_40543 = temp__5825__auto___40542;
(cell_sprite_40543.texture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece-cell-textures","piece-cell-textures",754648682).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"color-index","color-index",560460581).cljs$core$IFn$_invoke$arity$1(cell)));

cell_sprite_40543.position.set(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell));
} else {
}


var G__40544 = seq__40445;
var G__40545 = chunk__40446;
var G__40546 = count__40447;
var G__40547 = (i__40448 + (1));
seq__40445 = G__40544;
chunk__40446 = G__40545;
count__40447 = G__40546;
i__40448 = G__40547;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__40445);
if(temp__5825__auto__){
var seq__40445__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40445__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__40445__$1);
var G__40548 = cljs.core.chunk_rest(seq__40445__$1);
var G__40549 = c__5694__auto__;
var G__40550 = cljs.core.count(c__5694__auto__);
var G__40551 = (0);
seq__40445 = G__40548;
chunk__40446 = G__40549;
count__40447 = G__40550;
i__40448 = G__40551;
continue;
} else {
var cell = cljs.core.first(seq__40445__$1);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)], null),cljs.core.first(tetris.scenes.render.gameplay.matrix.add_matrix_cells(cljs.core.deref(view),(1))));
}

var temp__5825__auto___40553__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)], null));
if(cljs.core.truth_(temp__5825__auto___40553__$1)){
var cell_sprite_40554 = temp__5825__auto___40553__$1;
(cell_sprite_40554.texture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece-cell-textures","piece-cell-textures",754648682).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"color-index","color-index",560460581).cljs$core$IFn$_invoke$arity$1(cell)));

cell_sprite_40554.position.set(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell));
} else {
}


var G__40555 = cljs.core.next(seq__40445__$1);
var G__40556 = null;
var G__40557 = (0);
var G__40558 = (0);
seq__40445 = G__40555;
chunk__40446 = G__40556;
count__40447 = G__40557;
i__40448 = G__40558;
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
