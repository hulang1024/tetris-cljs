goog.provide('tetris.render.gameplay.game_view');
var module$node_modules$$tweenjs$tween_js$dist$tween_cjs=shadow.js.require("module$node_modules$$tweenjs$tween_js$dist$tween_cjs", {});
var module$node_modules$pixi_DOT_js$lib$index=shadow.js.require("module$node_modules$pixi_DOT_js$lib$index", {});
tetris.render.gameplay.game_view.board_bounce_dx_max = (6);
tetris.render.gameplay.game_view.board_bounce_dy_max = (6);
tetris.render.gameplay.game_view.create_board = (function tetris$render$gameplay$game_view$create_board(p__44470){
var map__44471 = p__44470;
var map__44471__$1 = cljs.core.__destructure_map(map__44471);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44471__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44471__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44471__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44471__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var border_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44471__$1,new cljs.core.Keyword(null,"border-width","border-width",-1512605390));
var container = (new module$node_modules$pixi_DOT_js$lib$index.Container(({"label": "board"})));
var g = (new module$node_modules$pixi_DOT_js$lib$index.Graphics(({"label": "board"})));
var G__44472_44546 = g;
G__44472_44546.moveTo((0),(0));

G__44472_44546.lineTo((0),height);

G__44472_44546.lineTo(width,height);

G__44472_44546.lineTo(width,(0));

G__44472_44546.stroke(({"width": border_width, "color": (13421772)}));

G__44472_44546.rect((4),(4),(width - (8)),(height - (9)));

G__44472_44546.fill(({"color": (0), "alpha": 0.2}));


(g.alpha = (1));

container.position.set(x,y);

container.addChild(g);

return container;
});
tetris.render.gameplay.game_view.create = (function tetris$render$gameplay$game_view$create(scene,options){
var layout = tetris.render.gameplay.game_view_data.calc_layout(new cljs.core.Keyword(null,"preview-count","preview-count",-329263374).cljs$core$IFn$_invoke$arity$1(options));
var game_view = (new module$node_modules$pixi_DOT_js$lib$index.Container(({"label": "game-view", "x": (((1920) - new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(layout)) / (2)), "y": (((1080) - new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(layout)) / (2))})));
var board = tetris.render.gameplay.game_view.create_board(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(layout));
var hold_container = (new module$node_modules$pixi_DOT_js$lib$index.Container(({"label": "hold", "x": cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hold","hold",-1621118005),new cljs.core.Keyword(null,"x","x",2099068185)], null)), "y": cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hold","hold",-1621118005),new cljs.core.Keyword(null,"y","y",-1757859776)], null))})));
var next_container = (new module$node_modules$pixi_DOT_js$lib$index.Container(({"label": "next", "x": cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.Keyword(null,"x","x",2099068185)], null)), "y": cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.Keyword(null,"y","y",-1757859776)], null))})));
game_view.addChild(board);

game_view.addChild(hold_container);

game_view.addChild(next_container);

scene.addChild(game_view);

return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"tweens","tweens",-1927735551),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"piece-cell-textures","piece-cell-textures",754648682),new cljs.core.Keyword(null,"hold","hold",-1621118005),new cljs.core.Keyword(null,"next-container","next-container",-2082591536),new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"container","container",-1736937707),new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"hold-container","hold-container",872721688),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"board","board",-1907017633)],[cljs.core.PersistentArrayMap.EMPTY,layout,tetris.render.gameplay.piece.create_piece_cell_textures(new cljs.core.Keyword(null,"piece-style","piece-style",-1354956371).cljs$core$IFn$_invoke$arity$1(options)),null,next_container,null,null,game_view,cljs.core.PersistentArrayMap.EMPTY,hold_container,null,board]);
});
tetris.render.gameplay.game_view.add_piece_cell = (function tetris$render$gameplay$game_view$add_piece_cell(container,cell_size){
var sprite = tetris.render.gameplay.piece.create_piece_cell_sprite(cell_size);
return container.addChild(sprite);
});
tetris.render.gameplay.game_view.add_piece = (function tetris$render$gameplay$game_view$add_piece(container,piece,cell_size){
return cljs.core.vec((function (){var iter__5649__auto__ = (function tetris$render$gameplay$game_view$add_piece_$_iter__44473(s__44474){
return (new cljs.core.LazySeq(null,(function (){
var s__44474__$1 = s__44474;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__44474__$1);
if(temp__5825__auto__){
var s__44474__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44474__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__44474__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__44476 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__44475 = (0);
while(true){
if((i__44475 < size__5648__auto__)){
var _ = cljs.core._nth(c__5647__auto__,i__44475);
cljs.core.chunk_append(b__44476,tetris.render.gameplay.game_view.add_piece_cell(container,cell_size));

var G__44547 = (i__44475 + (1));
i__44475 = G__44547;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44476),tetris$render$gameplay$game_view$add_piece_$_iter__44473(cljs.core.chunk_rest(s__44474__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44476),null);
}
} else {
var _ = cljs.core.first(s__44474__$2);
return cljs.core.cons(tetris.render.gameplay.game_view.add_piece_cell(container,cell_size),tetris$render$gameplay$game_view$add_piece_$_iter__44473(cljs.core.rest(s__44474__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"cells","cells",-985166822).cljs$core$IFn$_invoke$arity$1(piece))));
})());
});
tetris.render.gameplay.game_view.add_board_piece_cell = (function tetris$render$gameplay$game_view$add_board_piece_cell(view){
return tetris.render.gameplay.game_view.add_piece_cell(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(view),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(view,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"cell","cell",764245084),new cljs.core.Keyword(null,"size","size",1098693007)], null)));
});
tetris.render.gameplay.game_view.add_board_piece = (function tetris$render$gameplay$game_view$add_board_piece(view,piece){
return tetris.render.gameplay.game_view.add_piece(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(view),piece,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(view,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"cell","cell",764245084),new cljs.core.Keyword(null,"size","size",1098693007)], null)));
});
tetris.render.gameplay.game_view.render_piece_BANG_ = (function tetris$render$gameplay$game_view$render_piece_BANG_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___44549 = arguments.length;
var i__5898__auto___44550 = (0);
while(true){
if((i__5898__auto___44550 < len__5897__auto___44549)){
args__5903__auto__.push((arguments[i__5898__auto___44550]));

var G__44552 = (i__5898__auto___44550 + (1));
i__5898__auto___44550 = G__44552;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((3) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((3)),(0),null)):null);
return tetris.render.gameplay.game_view.render_piece_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5904__auto__);
});

(tetris.render.gameplay.game_view.render_piece_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (view,display_piece,piece_state,ghost_QMARK_){
var seq__44481 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,display_piece,new cljs.core.Keyword(null,"cells","cells",-985166822).cljs$core$IFn$_invoke$arity$1(piece_state)));
var chunk__44482 = null;
var count__44483 = (0);
var i__44484 = (0);
while(true){
if((i__44484 < count__44483)){
var vec__44491 = chunk__44482.cljs$core$IIndexed$_nth$arity$2(null,i__44484);
var cell_sprite = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44491,(0),null);
var cell_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44491,(1),null);
(cell_sprite.texture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece-cell-textures","piece-cell-textures",754648682).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"color-index","color-index",560460581).cljs$core$IFn$_invoke$arity$1(piece_state)));

(cell_sprite.visible = new cljs.core.Keyword(null,"visible","visible",-1024216805).cljs$core$IFn$_invoke$arity$1(piece_state));

(cell_sprite.alpha = (cljs.core.truth_(ghost_QMARK_)?0.2:(1)));

cell_sprite.position.set(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell_pos),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell_pos));


var G__44554 = seq__44481;
var G__44555 = chunk__44482;
var G__44556 = count__44483;
var G__44557 = (i__44484 + (1));
seq__44481 = G__44554;
chunk__44482 = G__44555;
count__44483 = G__44556;
i__44484 = G__44557;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__44481);
if(temp__5825__auto__){
var seq__44481__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44481__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__44481__$1);
var G__44558 = cljs.core.chunk_rest(seq__44481__$1);
var G__44559 = c__5694__auto__;
var G__44560 = cljs.core.count(c__5694__auto__);
var G__44561 = (0);
seq__44481 = G__44558;
chunk__44482 = G__44559;
count__44483 = G__44560;
i__44484 = G__44561;
continue;
} else {
var vec__44494 = cljs.core.first(seq__44481__$1);
var cell_sprite = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44494,(0),null);
var cell_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44494,(1),null);
(cell_sprite.texture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece-cell-textures","piece-cell-textures",754648682).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"color-index","color-index",560460581).cljs$core$IFn$_invoke$arity$1(piece_state)));

(cell_sprite.visible = new cljs.core.Keyword(null,"visible","visible",-1024216805).cljs$core$IFn$_invoke$arity$1(piece_state));

(cell_sprite.alpha = (cljs.core.truth_(ghost_QMARK_)?0.2:(1)));

cell_sprite.position.set(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell_pos),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell_pos));


var G__44562 = cljs.core.next(seq__44481__$1);
var G__44563 = null;
var G__44564 = (0);
var G__44565 = (0);
seq__44481 = G__44562;
chunk__44482 = G__44563;
count__44483 = G__44564;
i__44484 = G__44565;
continue;
}
} else {
return null;
}
}
break;
}
}));

(tetris.render.gameplay.game_view.render_piece_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tetris.render.gameplay.game_view.render_piece_BANG_.cljs$lang$applyTo = (function (seq44477){
var G__44478 = cljs.core.first(seq44477);
var seq44477__$1 = cljs.core.next(seq44477);
var G__44479 = cljs.core.first(seq44477__$1);
var seq44477__$2 = cljs.core.next(seq44477__$1);
var G__44480 = cljs.core.first(seq44477__$2);
var seq44477__$3 = cljs.core.next(seq44477__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44478,G__44479,G__44480,seq44477__$3);
}));

tetris.render.gameplay.game_view.update_tweens = (function tetris$render$gameplay$game_view$update_tweens(view){
var seq__44497 = cljs.core.seq(new cljs.core.Keyword(null,"tweens","tweens",-1927735551).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)));
var chunk__44498 = null;
var count__44499 = (0);
var i__44500 = (0);
while(true){
if((i__44500 < count__44499)){
var vec__44507 = chunk__44498.cljs$core$IIndexed$_nth$arity$2(null,i__44500);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44507,(0),null);
var tween = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44507,(1),null);
if(cljs.core.truth_(tween)){
tween.update();
} else {
}


var G__44567 = seq__44497;
var G__44568 = chunk__44498;
var G__44569 = count__44499;
var G__44570 = (i__44500 + (1));
seq__44497 = G__44567;
chunk__44498 = G__44568;
count__44499 = G__44569;
i__44500 = G__44570;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__44497);
if(temp__5825__auto__){
var seq__44497__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44497__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__44497__$1);
var G__44571 = cljs.core.chunk_rest(seq__44497__$1);
var G__44572 = c__5694__auto__;
var G__44573 = cljs.core.count(c__5694__auto__);
var G__44574 = (0);
seq__44497 = G__44571;
chunk__44498 = G__44572;
count__44499 = G__44573;
i__44500 = G__44574;
continue;
} else {
var vec__44510 = cljs.core.first(seq__44497__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44510,(0),null);
var tween = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44510,(1),null);
if(cljs.core.truth_(tween)){
tween.update();
} else {
}


var G__44575 = cljs.core.next(seq__44497__$1);
var G__44576 = null;
var G__44577 = (0);
var G__44578 = (0);
seq__44497 = G__44575;
chunk__44498 = G__44576;
count__44499 = G__44577;
i__44500 = G__44578;
continue;
}
} else {
return null;
}
}
break;
}
});
tetris.render.gameplay.game_view.stop_tween_BANG_ = (function tetris$render$gameplay$game_view$stop_tween_BANG_(view,id){
var temp__5825__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweens","tweens",-1927735551),id], null));
if(cljs.core.truth_(temp__5825__auto__)){
var tween = temp__5825__auto__;
tween.stop();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweens","tweens",-1927735551),id], null),null);
} else {
return null;
}
});
tetris.render.gameplay.game_view.start_board_bounce_tween_BANG_ = (function tetris$render$gameplay$game_view$start_board_bounce_tween_BANG_(var_args){
var G__44514 = arguments.length;
switch (G__44514) {
case 3:
return tetris.render.gameplay.game_view.start_board_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return tetris.render.gameplay.game_view.start_board_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 6:
return tetris.render.gameplay.game_view.start_board_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(tetris.render.gameplay.game_view.start_board_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (view,id,to_values){
return tetris.render.gameplay.game_view.start_board_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$6(view,id,to_values,null,null,null);
}));

(tetris.render.gameplay.game_view.start_board_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (view,id,to_values,cb){
return tetris.render.gameplay.game_view.start_board_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$6(view,id,to_values,null,null,cb);
}));

(tetris.render.gameplay.game_view.start_board_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$6 = (function (view,id,to_values,easing,duration,cb){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweens","tweens",-1927735551),id], null)))){
return null;
} else {
var tween = (function (){var G__44515 = (new module$node_modules$$tweenjs$tween_js$dist$tween_cjs.Tween(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot));
G__44515.to(cljs.core.clj__GT_js(to_values),(function (){var or__5162__auto__ = duration;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (344);
}
})());

G__44515.easing((function (){var or__5162__auto__ = easing;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return module$node_modules$$tweenjs$tween_js$dist$tween_cjs.Easing.Cubic.Out;
}
})());

G__44515.start();

G__44515.onComplete((function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweens","tweens",-1927735551),id], null),null);

if(cljs.core.truth_(cb)){
return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
} else {
return null;
}
}));

G__44515.onStop((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweens","tweens",-1927735551),id], null),null);
}));

return G__44515;
})();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweens","tweens",-1927735551),id], null),tween);
}
}));

(tetris.render.gameplay.game_view.start_board_bounce_tween_BANG_.cljs$lang$maxFixedArity = 6);

tetris.render.gameplay.game_view.render_board_bounce_BANG_ = (function tetris$render$gameplay$game_view$render_board_bounce_BANG_(view,game_state,input){
if(cljs.core.truth_(cljs.core.some((function (p1__44516_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__44516_SHARP_,new cljs.core.Keyword(null,"move-left","move-left",-271562811));
}),new cljs.core.Keyword(null,"pressed-buttons","pressed-buttons",1426560090).cljs$core$IFn$_invoke$arity$1(input)))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"shift-blocked?","shift-blocked?",-2058728569).cljs$core$IFn$_invoke$arity$1(game_state))){
tetris.render.gameplay.game_view.stop_tween_BANG_(view,new cljs.core.Keyword(null,"board-bounce-shift","board-bounce-shift",945163307));

var px_44580 = (new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot.x - (- (2)));
if((cljs.core.abs(px_44580) <= tetris.render.gameplay.game_view.board_bounce_dx_max)){
(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot.x = px_44580);
} else {
}
} else {
}
} else {
tetris.render.gameplay.game_view.start_board_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$3(view,new cljs.core.Keyword(null,"board-bounce-shift","board-bounce-shift",945163307),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(0)], null));
}

if(cljs.core.truth_(cljs.core.some((function (p1__44517_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__44517_SHARP_,new cljs.core.Keyword(null,"move-right","move-right",1661359569));
}),new cljs.core.Keyword(null,"pressed-buttons","pressed-buttons",1426560090).cljs$core$IFn$_invoke$arity$1(input)))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"shift-blocked?","shift-blocked?",-2058728569).cljs$core$IFn$_invoke$arity$1(game_state))){
tetris.render.gameplay.game_view.stop_tween_BANG_(view,new cljs.core.Keyword(null,"board-bounce-shift","board-bounce-shift",945163307));

var px_44581 = (new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot.x - (2));
if((cljs.core.abs(px_44581) <= tetris.render.gameplay.game_view.board_bounce_dx_max)){
(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot.x = px_44581);
} else {
}
} else {
}
} else {
tetris.render.gameplay.game_view.start_board_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$3(view,new cljs.core.Keyword(null,"board-bounce-shift","board-bounce-shift",945163307),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(0)], null));
}

if(cljs.core.truth_(tetris.core.game.find_event(new cljs.core.Keyword(null,"locked","locked",-1658763820),new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(game_state)))){
tetris.render.gameplay.game_view.stop_tween_BANG_(view,new cljs.core.Keyword(null,"board-bounce-bottom","board-bounce-bottom",-1439651939));

var py = (new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot.y - tetris.render.gameplay.game_view.board_bounce_dy_max);
return tetris.render.gameplay.game_view.start_board_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$6(view,new cljs.core.Keyword(null,"board-bounce-bottom","board-bounce-bottom",-1439651939),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),py], null),module$node_modules$$tweenjs$tween_js$dist$tween_cjs.Easing.Cubic.Out,(167),(function (){
return tetris.render.gameplay.game_view.start_board_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$6(view,new cljs.core.Keyword(null,"board-bounce-bottom","board-bounce-bottom",-1439651939),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),module$node_modules$$tweenjs$tween_js$dist$tween_cjs.Easing.Cubic.Out,(344),null);
}));
} else {
return null;
}
});
tetris.render.gameplay.game_view.render_BANG_ = (function tetris$render$gameplay$game_view$render_BANG_(view,game_state,input){
var data = tetris.render.gameplay.game_view_data.render_data(new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),game_state);
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hold","hold",-1621118005),new cljs.core.Keyword(null,"cells","cells",-985166822)], null)))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"hold","hold",-1621118005).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)))){
} else {
var piece_44583 = tetris.render.gameplay.game_view.add_piece(new cljs.core.Keyword(null,"hold-container","hold-container",872721688).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"hold","hold",-1621118005).cljs$core$IFn$_invoke$arity$1(data),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"hold","hold",-1621118005),new cljs.core.Keyword(null,"cell","cell",764245084),new cljs.core.Keyword(null,"size","size",1098693007)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc,new cljs.core.Keyword(null,"hold","hold",-1621118005),piece_44583);
}

tetris.render.gameplay.game_view.render_piece_BANG_(view,new cljs.core.Keyword(null,"hold","hold",-1621118005).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"hold","hold",-1621118005).cljs$core$IFn$_invoke$arity$1(data));
} else {
}

if(cljs.core.seq(new cljs.core.Keyword(null,"next","next",-117701485).cljs$core$IFn$_invoke$arity$1(data))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"next","next",-117701485).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)))){
} else {
var display_pieces_44584 = cljs.core.vec((function (){var iter__5649__auto__ = (function tetris$render$gameplay$game_view$render_BANG__$_iter__44518(s__44519){
return (new cljs.core.LazySeq(null,(function (){
var s__44519__$1 = s__44519;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__44519__$1);
if(temp__5825__auto__){
var s__44519__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44519__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__44519__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__44521 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__44520 = (0);
while(true){
if((i__44520 < size__5648__auto__)){
var piece = cljs.core._nth(c__5647__auto__,i__44520);
cljs.core.chunk_append(b__44521,tetris.render.gameplay.game_view.add_piece(new cljs.core.Keyword(null,"next-container","next-container",-2082591536).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),piece,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.Keyword(null,"cell","cell",764245084),new cljs.core.Keyword(null,"size","size",1098693007)], null))));

var G__44585 = (i__44520 + (1));
i__44520 = G__44585;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44521),tetris$render$gameplay$game_view$render_BANG__$_iter__44518(cljs.core.chunk_rest(s__44519__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44521),null);
}
} else {
var piece = cljs.core.first(s__44519__$2);
return cljs.core.cons(tetris.render.gameplay.game_view.add_piece(new cljs.core.Keyword(null,"next-container","next-container",-2082591536).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),piece,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.Keyword(null,"cell","cell",764245084),new cljs.core.Keyword(null,"size","size",1098693007)], null))),tetris$render$gameplay$game_view$render_BANG__$_iter__44518(cljs.core.rest(s__44519__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(new cljs.core.Keyword(null,"next","next",-117701485).cljs$core$IFn$_invoke$arity$1(data));
})());
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc,new cljs.core.Keyword(null,"next","next",-117701485),display_pieces_44584);
}

var seq__44522_44586 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,new cljs.core.Keyword(null,"next","next",-117701485).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"next","next",-117701485).cljs$core$IFn$_invoke$arity$1(data)));
var chunk__44523_44587 = null;
var count__44524_44588 = (0);
var i__44525_44589 = (0);
while(true){
if((i__44525_44589 < count__44524_44588)){
var vec__44532_44590 = chunk__44523_44587.cljs$core$IIndexed$_nth$arity$2(null,i__44525_44589);
var piece_v_44591 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44532_44590,(0),null);
var piece_d_44592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44532_44590,(1),null);
tetris.render.gameplay.game_view.render_piece_BANG_(view,piece_v_44591,piece_d_44592);


var G__44593 = seq__44522_44586;
var G__44594 = chunk__44523_44587;
var G__44595 = count__44524_44588;
var G__44596 = (i__44525_44589 + (1));
seq__44522_44586 = G__44593;
chunk__44523_44587 = G__44594;
count__44524_44588 = G__44595;
i__44525_44589 = G__44596;
continue;
} else {
var temp__5825__auto___44597 = cljs.core.seq(seq__44522_44586);
if(temp__5825__auto___44597){
var seq__44522_44598__$1 = temp__5825__auto___44597;
if(cljs.core.chunked_seq_QMARK_(seq__44522_44598__$1)){
var c__5694__auto___44599 = cljs.core.chunk_first(seq__44522_44598__$1);
var G__44600 = cljs.core.chunk_rest(seq__44522_44598__$1);
var G__44601 = c__5694__auto___44599;
var G__44602 = cljs.core.count(c__5694__auto___44599);
var G__44603 = (0);
seq__44522_44586 = G__44600;
chunk__44523_44587 = G__44601;
count__44524_44588 = G__44602;
i__44525_44589 = G__44603;
continue;
} else {
var vec__44535_44604 = cljs.core.first(seq__44522_44598__$1);
var piece_v_44605 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44535_44604,(0),null);
var piece_d_44606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44535_44604,(1),null);
tetris.render.gameplay.game_view.render_piece_BANG_(view,piece_v_44605,piece_d_44606);


var G__44607 = cljs.core.next(seq__44522_44598__$1);
var G__44608 = null;
var G__44609 = (0);
var G__44610 = (0);
seq__44522_44586 = G__44607;
chunk__44523_44587 = G__44608;
count__44524_44588 = G__44609;
i__44525_44589 = G__44610;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"cells","cells",-985166822)], null)))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"ghost","ghost",-1531157576).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc,new cljs.core.Keyword(null,"ghost","ghost",-1531157576),tetris.render.gameplay.game_view.add_board_piece(cljs.core.deref(view),new cljs.core.Keyword(null,"ghost","ghost",-1531157576).cljs$core$IFn$_invoke$arity$1(data)));
}

tetris.render.gameplay.game_view.render_piece_BANG_.cljs$core$IFn$_invoke$arity$variadic(view,new cljs.core.Keyword(null,"ghost","ghost",-1531157576).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"ghost","ghost",-1531157576).cljs$core$IFn$_invoke$arity$1(data),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0));
} else {
}

if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"cells","cells",-985166822)], null)))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc,new cljs.core.Keyword(null,"current","current",-1088038603),tetris.render.gameplay.game_view.add_board_piece(cljs.core.deref(view),new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(data)));
}

tetris.render.gameplay.game_view.render_piece_BANG_(view,new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(data));
} else {
}

var state_cell_ids_44611 = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(data)));
var view_cell_ids_44612 = cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view))));
var cell_ids_to_remove_44613 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(view_cell_ids_44612,state_cell_ids_44611);
var seq__44538_44614 = cljs.core.seq(cell_ids_to_remove_44613);
var chunk__44539_44615 = null;
var count__44540_44616 = (0);
var i__44541_44617 = (0);
while(true){
if((i__44541_44617 < count__44540_44616)){
var id_44618 = chunk__44539_44615.cljs$core$IIndexed$_nth$arity$2(null,i__44541_44617);
var temp__5825__auto___44619 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),id_44618], null));
if(cljs.core.truth_(temp__5825__auto___44619)){
var cell_sprite_44620 = temp__5825__auto___44619;
new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).removeChild(cell_sprite_44620);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(view,cljs.core.update,new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id_44618], 0));
} else {
}


var G__44621 = seq__44538_44614;
var G__44622 = chunk__44539_44615;
var G__44623 = count__44540_44616;
var G__44624 = (i__44541_44617 + (1));
seq__44538_44614 = G__44621;
chunk__44539_44615 = G__44622;
count__44540_44616 = G__44623;
i__44541_44617 = G__44624;
continue;
} else {
var temp__5825__auto___44625 = cljs.core.seq(seq__44538_44614);
if(temp__5825__auto___44625){
var seq__44538_44626__$1 = temp__5825__auto___44625;
if(cljs.core.chunked_seq_QMARK_(seq__44538_44626__$1)){
var c__5694__auto___44627 = cljs.core.chunk_first(seq__44538_44626__$1);
var G__44628 = cljs.core.chunk_rest(seq__44538_44626__$1);
var G__44629 = c__5694__auto___44627;
var G__44630 = cljs.core.count(c__5694__auto___44627);
var G__44631 = (0);
seq__44538_44614 = G__44628;
chunk__44539_44615 = G__44629;
count__44540_44616 = G__44630;
i__44541_44617 = G__44631;
continue;
} else {
var id_44632 = cljs.core.first(seq__44538_44626__$1);
var temp__5825__auto___44633__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),id_44632], null));
if(cljs.core.truth_(temp__5825__auto___44633__$1)){
var cell_sprite_44634 = temp__5825__auto___44633__$1;
new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).removeChild(cell_sprite_44634);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(view,cljs.core.update,new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id_44632], 0));
} else {
}


var G__44635 = cljs.core.next(seq__44538_44626__$1);
var G__44636 = null;
var G__44637 = (0);
var G__44638 = (0);
seq__44538_44614 = G__44635;
chunk__44539_44615 = G__44636;
count__44540_44616 = G__44637;
i__44541_44617 = G__44638;
continue;
}
} else {
}
}
break;
}

var seq__44542_44639 = cljs.core.seq(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(data));
var chunk__44543_44640 = null;
var count__44544_44641 = (0);
var i__44545_44642 = (0);
while(true){
if((i__44545_44642 < count__44544_44641)){
var cell_44643 = chunk__44543_44640.cljs$core$IIndexed$_nth$arity$2(null,i__44545_44642);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell_44643)))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell_44643)], null),tetris.render.gameplay.game_view.add_board_piece_cell(cljs.core.deref(view)));
}

var temp__5825__auto___44644 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell_44643)], null));
if(cljs.core.truth_(temp__5825__auto___44644)){
var cell_sprite_44645 = temp__5825__auto___44644;
(cell_sprite_44645.texture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece-cell-textures","piece-cell-textures",754648682).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"color-index","color-index",560460581).cljs$core$IFn$_invoke$arity$1(cell_44643)));

cell_sprite_44645.position.set(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell_44643),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell_44643));
} else {
}


var G__44646 = seq__44542_44639;
var G__44647 = chunk__44543_44640;
var G__44648 = count__44544_44641;
var G__44649 = (i__44545_44642 + (1));
seq__44542_44639 = G__44646;
chunk__44543_44640 = G__44647;
count__44544_44641 = G__44648;
i__44545_44642 = G__44649;
continue;
} else {
var temp__5825__auto___44650 = cljs.core.seq(seq__44542_44639);
if(temp__5825__auto___44650){
var seq__44542_44651__$1 = temp__5825__auto___44650;
if(cljs.core.chunked_seq_QMARK_(seq__44542_44651__$1)){
var c__5694__auto___44652 = cljs.core.chunk_first(seq__44542_44651__$1);
var G__44653 = cljs.core.chunk_rest(seq__44542_44651__$1);
var G__44654 = c__5694__auto___44652;
var G__44655 = cljs.core.count(c__5694__auto___44652);
var G__44656 = (0);
seq__44542_44639 = G__44653;
chunk__44543_44640 = G__44654;
count__44544_44641 = G__44655;
i__44545_44642 = G__44656;
continue;
} else {
var cell_44657 = cljs.core.first(seq__44542_44651__$1);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell_44657)))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell_44657)], null),tetris.render.gameplay.game_view.add_board_piece_cell(cljs.core.deref(view)));
}

var temp__5825__auto___44658__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell_44657)], null));
if(cljs.core.truth_(temp__5825__auto___44658__$1)){
var cell_sprite_44659 = temp__5825__auto___44658__$1;
(cell_sprite_44659.texture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece-cell-textures","piece-cell-textures",754648682).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"color-index","color-index",560460581).cljs$core$IFn$_invoke$arity$1(cell_44657)));

cell_sprite_44659.position.set(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell_44657),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell_44657));
} else {
}


var G__44660 = cljs.core.next(seq__44542_44651__$1);
var G__44661 = null;
var G__44662 = (0);
var G__44663 = (0);
seq__44542_44639 = G__44660;
chunk__44543_44640 = G__44661;
count__44544_44641 = G__44662;
i__44545_44642 = G__44663;
continue;
}
} else {
}
}
break;
}

tetris.render.gameplay.game_view.render_board_bounce_BANG_(view,game_state,input);

return tetris.render.gameplay.game_view.update_tweens(view);
});

//# sourceMappingURL=tetris.render.gameplay.game_view.js.map
