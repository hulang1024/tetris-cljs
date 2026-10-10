goog.provide('tetris.scenes.render.gameplay.matrix');
var module$node_modules$$tweenjs$tween_js$dist$tween_cjs=shadow.js.require("module$node_modules$$tweenjs$tween_js$dist$tween_cjs", {});
var module$node_modules$pixi_DOT_js$lib$index=shadow.js.require("module$node_modules$pixi_DOT_js$lib$index", {});
tetris.scenes.render.gameplay.matrix.matrix_bounce_max_dx = (10);
tetris.scenes.render.gameplay.matrix.matrix_bounce_max_dy = (10);
tetris.scenes.render.gameplay.matrix.draw_frame = (function tetris$scenes$render$gameplay$matrix$draw_frame(g,p__40483){
var map__40484 = p__40483;
var map__40484__$1 = cljs.core.__destructure_map(map__40484);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40484__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40484__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var border_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40484__$1,new cljs.core.Keyword(null,"border-width","border-width",-1512605390));
var G__40485 = g;
G__40485.moveTo((0),(0));

G__40485.lineTo((0),height);

G__40485.lineTo(width,height);

G__40485.lineTo(width,(0));

G__40485.stroke(({"width": border_width, "color": (13421772), "join": "bevel"}));

G__40485.rect((border_width / (2)),(0),(width - border_width),(height - (border_width / (2))));

G__40485.fill(({"color": (0), "alpha": 0.2}));

return G__40485;
});
tetris.scenes.render.gameplay.matrix.draw_grid = (function tetris$scenes$render$gameplay$matrix$draw_grid(g,p__40486){
var map__40487 = p__40486;
var map__40487__$1 = cljs.core.__destructure_map(map__40487);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40487__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40487__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var border_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40487__$1,new cljs.core.Keyword(null,"border-width","border-width",-1512605390));
var padding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40487__$1,new cljs.core.Keyword(null,"padding","padding",1660304693));
var cell = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40487__$1,new cljs.core.Keyword(null,"cell","cell",764245084));
var seq__40488_40515 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(tetris.core.board.board_rows - (2))));
var chunk__40489_40516 = null;
var count__40490_40517 = (0);
var i__40491_40518 = (0);
while(true){
if((i__40491_40518 < count__40490_40517)){
var r_40519 = chunk__40489_40516.cljs$core$IIndexed$_nth$arity$2(null,i__40491_40518);
var y_40520 = (r_40519 * new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(cell));
g.moveTo(new cljs.core.Keyword(null,"base-x","base-x",-13745014).cljs$core$IFn$_invoke$arity$1(cell),y_40520);

g.lineTo(((width - (border_width / (2))) - padding),y_40520);


var G__40521 = seq__40488_40515;
var G__40522 = chunk__40489_40516;
var G__40523 = count__40490_40517;
var G__40524 = (i__40491_40518 + (1));
seq__40488_40515 = G__40521;
chunk__40489_40516 = G__40522;
count__40490_40517 = G__40523;
i__40491_40518 = G__40524;
continue;
} else {
var temp__5825__auto___40525 = cljs.core.seq(seq__40488_40515);
if(temp__5825__auto___40525){
var seq__40488_40526__$1 = temp__5825__auto___40525;
if(cljs.core.chunked_seq_QMARK_(seq__40488_40526__$1)){
var c__5694__auto___40527 = cljs.core.chunk_first(seq__40488_40526__$1);
var G__40528 = cljs.core.chunk_rest(seq__40488_40526__$1);
var G__40529 = c__5694__auto___40527;
var G__40530 = cljs.core.count(c__5694__auto___40527);
var G__40531 = (0);
seq__40488_40515 = G__40528;
chunk__40489_40516 = G__40529;
count__40490_40517 = G__40530;
i__40491_40518 = G__40531;
continue;
} else {
var r_40532 = cljs.core.first(seq__40488_40526__$1);
var y_40533 = (r_40532 * new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(cell));
g.moveTo(new cljs.core.Keyword(null,"base-x","base-x",-13745014).cljs$core$IFn$_invoke$arity$1(cell),y_40533);

g.lineTo(((width - (border_width / (2))) - padding),y_40533);


var G__40534 = cljs.core.next(seq__40488_40526__$1);
var G__40535 = null;
var G__40536 = (0);
var G__40537 = (0);
seq__40488_40515 = G__40534;
chunk__40489_40516 = G__40535;
count__40490_40517 = G__40536;
i__40491_40518 = G__40537;
continue;
}
} else {
}
}
break;
}

var seq__40492_40538 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(10)));
var chunk__40493_40539 = null;
var count__40494_40540 = (0);
var i__40495_40541 = (0);
while(true){
if((i__40495_40541 < count__40494_40540)){
var c_40542 = chunk__40493_40539.cljs$core$IIndexed$_nth$arity$2(null,i__40495_40541);
var x_40543 = ((c_40542 * new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(cell)) + new cljs.core.Keyword(null,"base-x","base-x",-13745014).cljs$core$IFn$_invoke$arity$1(cell));
g.moveTo(x_40543,(0));

g.lineTo(x_40543,((height - (border_width / (2))) - padding));


var G__40544 = seq__40492_40538;
var G__40545 = chunk__40493_40539;
var G__40546 = count__40494_40540;
var G__40547 = (i__40495_40541 + (1));
seq__40492_40538 = G__40544;
chunk__40493_40539 = G__40545;
count__40494_40540 = G__40546;
i__40495_40541 = G__40547;
continue;
} else {
var temp__5825__auto___40548 = cljs.core.seq(seq__40492_40538);
if(temp__5825__auto___40548){
var seq__40492_40549__$1 = temp__5825__auto___40548;
if(cljs.core.chunked_seq_QMARK_(seq__40492_40549__$1)){
var c__5694__auto___40550 = cljs.core.chunk_first(seq__40492_40549__$1);
var G__40551 = cljs.core.chunk_rest(seq__40492_40549__$1);
var G__40552 = c__5694__auto___40550;
var G__40553 = cljs.core.count(c__5694__auto___40550);
var G__40554 = (0);
seq__40492_40538 = G__40551;
chunk__40493_40539 = G__40552;
count__40494_40540 = G__40553;
i__40495_40541 = G__40554;
continue;
} else {
var c_40555 = cljs.core.first(seq__40492_40549__$1);
var x_40556 = ((c_40555 * new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(cell)) + new cljs.core.Keyword(null,"base-x","base-x",-13745014).cljs$core$IFn$_invoke$arity$1(cell));
g.moveTo(x_40556,(0));

g.lineTo(x_40556,((height - (border_width / (2))) - padding));


var G__40557 = cljs.core.next(seq__40492_40549__$1);
var G__40558 = null;
var G__40559 = (0);
var G__40560 = (0);
seq__40492_40538 = G__40557;
chunk__40493_40539 = G__40558;
count__40494_40540 = G__40559;
i__40495_40541 = G__40560;
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
var map__40496 = matrix_layout;
var map__40496__$1 = cljs.core.__destructure_map(map__40496);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40496__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40496__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var cell = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40496__$1,new cljs.core.Keyword(null,"cell","cell",764245084));
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
var G__40498 = arguments.length;
switch (G__40498) {
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
var tween = (function (){var G__40499 = (new module$node_modules$$tweenjs$tween_js$dist$tween_cjs.Tween(new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot));
G__40499.to(cljs.core.clj__GT_js(to_values),(function (){var or__5162__auto__ = duration;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (344);
}
})());

G__40499.easing((function (){var or__5162__auto__ = easing;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return module$node_modules$$tweenjs$tween_js$dist$tween_cjs.Easing.Cubic.Out;
}
})());

G__40499.start();

G__40499.onComplete((function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweens","tweens",-1927735551),id], null),null);

if(cljs.core.truth_(cb)){
return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
} else {
return null;
}
}));

G__40499.onStop((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweens","tweens",-1927735551),id], null),null);
}));

return G__40499;
})();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweens","tweens",-1927735551),id], null),tween);
}
}));

(tetris.scenes.render.gameplay.matrix.start_bounce_tween_BANG_.cljs$lang$maxFixedArity = 6);

tetris.scenes.render.gameplay.matrix.apply_bounce = (function tetris$scenes$render$gameplay$matrix$apply_bounce(view,game_state,input){
if(cljs.core.truth_(new cljs.core.Keyword(null,"shift-blocked?","shift-blocked?",-2058728569).cljs$core$IFn$_invoke$arity$1(game_state))){
var pressed_buttons_40562 = cljs.core.set(new cljs.core.Keyword(null,"pressed-buttons","pressed-buttons",1426560090).cljs$core$IFn$_invoke$arity$1(input));
var vec__40500_40563 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__40503){
var vec__40504 = p__40503;
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40504,(0),null);
return cljs.core.contains_QMARK_(pressed_buttons_40562,b);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-left","move-left",-271562811),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-right","move-right",1661359569),(-1)], null)], null)));
var button_40564 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40500_40563,(0),null);
var dir_40565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40500_40563,(1),null);
if(cljs.core.truth_(button_40564)){
tetris.scenes.render.gameplay.tween_mgr.stop_tween_BANG_(view,new cljs.core.Keyword(null,"board-bounce-shift","board-bounce-shift",945163307));

var px_40566 = (new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot.x + (dir_40565 * (2)));
if((cljs.core.abs(px_40566) <= tetris.scenes.render.gameplay.matrix.matrix_bounce_max_dx)){
(new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot.x = px_40566);
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
var seq__40507_40567 = cljs.core.seq(cell_ids_to_remove);
var chunk__40508_40568 = null;
var count__40509_40569 = (0);
var i__40510_40570 = (0);
while(true){
if((i__40510_40570 < count__40509_40569)){
var id_40571 = chunk__40508_40568.cljs$core$IIndexed$_nth$arity$2(null,i__40510_40570);
var temp__5825__auto___40572 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),id_40571], null));
if(cljs.core.truth_(temp__5825__auto___40572)){
var cell_sprite_40573 = temp__5825__auto___40572;
new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).removeChild(cell_sprite_40573);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(view,cljs.core.update,new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id_40571], 0));
} else {
}


var G__40574 = seq__40507_40567;
var G__40575 = chunk__40508_40568;
var G__40576 = count__40509_40569;
var G__40577 = (i__40510_40570 + (1));
seq__40507_40567 = G__40574;
chunk__40508_40568 = G__40575;
count__40509_40569 = G__40576;
i__40510_40570 = G__40577;
continue;
} else {
var temp__5825__auto___40578 = cljs.core.seq(seq__40507_40567);
if(temp__5825__auto___40578){
var seq__40507_40579__$1 = temp__5825__auto___40578;
if(cljs.core.chunked_seq_QMARK_(seq__40507_40579__$1)){
var c__5694__auto___40580 = cljs.core.chunk_first(seq__40507_40579__$1);
var G__40581 = cljs.core.chunk_rest(seq__40507_40579__$1);
var G__40582 = c__5694__auto___40580;
var G__40583 = cljs.core.count(c__5694__auto___40580);
var G__40584 = (0);
seq__40507_40567 = G__40581;
chunk__40508_40568 = G__40582;
count__40509_40569 = G__40583;
i__40510_40570 = G__40584;
continue;
} else {
var id_40585 = cljs.core.first(seq__40507_40579__$1);
var temp__5825__auto___40586__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),id_40585], null));
if(cljs.core.truth_(temp__5825__auto___40586__$1)){
var cell_sprite_40587 = temp__5825__auto___40586__$1;
new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).removeChild(cell_sprite_40587);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(view,cljs.core.update,new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id_40585], 0));
} else {
}


var G__40588 = cljs.core.next(seq__40507_40579__$1);
var G__40589 = null;
var G__40590 = (0);
var G__40591 = (0);
seq__40507_40567 = G__40588;
chunk__40508_40568 = G__40589;
count__40509_40569 = G__40590;
i__40510_40570 = G__40591;
continue;
}
} else {
}
}
break;
}

var seq__40511 = cljs.core.seq(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(data));
var chunk__40512 = null;
var count__40513 = (0);
var i__40514 = (0);
while(true){
if((i__40514 < count__40513)){
var cell = chunk__40512.cljs$core$IIndexed$_nth$arity$2(null,i__40514);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)], null),cljs.core.first(tetris.scenes.render.gameplay.matrix.add_matrix_cells(cljs.core.deref(view),(1))));
}

var temp__5825__auto___40592 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)], null));
if(cljs.core.truth_(temp__5825__auto___40592)){
var cell_sprite_40593 = temp__5825__auto___40592;
(cell_sprite_40593.texture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece-cell-textures","piece-cell-textures",754648682).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"color-index","color-index",560460581).cljs$core$IFn$_invoke$arity$1(cell)));

cell_sprite_40593.position.set(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell));
} else {
}


var G__40594 = seq__40511;
var G__40595 = chunk__40512;
var G__40596 = count__40513;
var G__40597 = (i__40514 + (1));
seq__40511 = G__40594;
chunk__40512 = G__40595;
count__40513 = G__40596;
i__40514 = G__40597;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__40511);
if(temp__5825__auto__){
var seq__40511__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40511__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__40511__$1);
var G__40598 = cljs.core.chunk_rest(seq__40511__$1);
var G__40599 = c__5694__auto__;
var G__40600 = cljs.core.count(c__5694__auto__);
var G__40601 = (0);
seq__40511 = G__40598;
chunk__40512 = G__40599;
count__40513 = G__40600;
i__40514 = G__40601;
continue;
} else {
var cell = cljs.core.first(seq__40511__$1);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)], null),cljs.core.first(tetris.scenes.render.gameplay.matrix.add_matrix_cells(cljs.core.deref(view),(1))));
}

var temp__5825__auto___40602__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)], null));
if(cljs.core.truth_(temp__5825__auto___40602__$1)){
var cell_sprite_40603 = temp__5825__auto___40602__$1;
(cell_sprite_40603.texture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece-cell-textures","piece-cell-textures",754648682).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"color-index","color-index",560460581).cljs$core$IFn$_invoke$arity$1(cell)));

cell_sprite_40603.position.set(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell));
} else {
}


var G__40604 = cljs.core.next(seq__40511__$1);
var G__40605 = null;
var G__40606 = (0);
var G__40607 = (0);
seq__40511 = G__40604;
chunk__40512 = G__40605;
count__40513 = G__40606;
i__40514 = G__40607;
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
