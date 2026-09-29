goog.provide('tetris.render.gameplay.game_view');
var module$node_modules$$tweenjs$tween_js$dist$tween_cjs=shadow.js.require("module$node_modules$$tweenjs$tween_js$dist$tween_cjs", {});
var module$node_modules$pixi_DOT_js$lib$index=shadow.js.require("module$node_modules$pixi_DOT_js$lib$index", {});
tetris.render.gameplay.game_view.board_bounce_dx_max = (6);
tetris.render.gameplay.game_view.board_bounce_dy_max = (8);
tetris.render.gameplay.game_view.create_board = (function tetris$render$gameplay$game_view$create_board(p__52314){
var map__52315 = p__52314;
var map__52315__$1 = cljs.core.__destructure_map(map__52315);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52315__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52315__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52315__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52315__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var border_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52315__$1,new cljs.core.Keyword(null,"border-width","border-width",-1512605390));
var container = (new module$node_modules$pixi_DOT_js$lib$index.Container(({"label": "board"})));
var g = (new module$node_modules$pixi_DOT_js$lib$index.Graphics(({"label": "board"})));
var G__52316_52400 = g;
G__52316_52400.rect((0),(0),width,height);

G__52316_52400.fill(({"color": (1052688)}));

G__52316_52400.stroke(({"width": border_width, "color": (15658734)}));


(g.alpha = (1));

container.position.set(x,y);

container.addChild(g);

return container;
});
tetris.render.gameplay.game_view.create = (function tetris$render$gameplay$game_view$create(scene,options){
var layout = tetris.render.gameplay.game_view_data.calc_layout(new cljs.core.Keyword(null,"preview-count","preview-count",-329263374).cljs$core$IFn$_invoke$arity$1(options));
var game_view = (new module$node_modules$pixi_DOT_js$lib$index.Container(({"label": "game-view", "x": (((1920) - new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(layout)) / (2)), "y": (((1080) - new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(layout)) / (2))})));
var board = tetris.render.gameplay.game_view.create_board(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(layout));
game_view.addChild(board);

scene.addChild(game_view);

return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"tweens","tweens",-1927735551),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"piece-cell-textures","piece-cell-textures",754648682),new cljs.core.Keyword(null,"hold","hold",-1621118005),new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"container","container",-1736937707),new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"next-queue","next-queue",-689213061),new cljs.core.Keyword(null,"board","board",-1907017633)],[cljs.core.PersistentArrayMap.EMPTY,layout,tetris.render.gameplay.piece.create_piece_cell_textures(new cljs.core.Keyword(null,"piece-style","piece-style",-1354956371).cljs$core$IFn$_invoke$arity$1(options)),null,null,game_view,cljs.core.PersistentArrayMap.EMPTY,null,null,board]);
});
tetris.render.gameplay.game_view.add_piece_cell = (function tetris$render$gameplay$game_view$add_piece_cell(container,cell_size){
var sprite = tetris.render.gameplay.piece.create_piece_cell_sprite(cell_size);
return container.addChild(sprite);
});
tetris.render.gameplay.game_view.add_piece = (function tetris$render$gameplay$game_view$add_piece(container,piece,cell_size){
return cljs.core.vec((function (){var iter__5649__auto__ = (function tetris$render$gameplay$game_view$add_piece_$_iter__52321(s__52322){
return (new cljs.core.LazySeq(null,(function (){
var s__52322__$1 = s__52322;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__52322__$1);
if(temp__5825__auto__){
var s__52322__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52322__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__52322__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__52324 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__52323 = (0);
while(true){
if((i__52323 < size__5648__auto__)){
var _ = cljs.core._nth(c__5647__auto__,i__52323);
cljs.core.chunk_append(b__52324,tetris.render.gameplay.game_view.add_piece_cell(container,cell_size));

var G__52401 = (i__52323 + (1));
i__52323 = G__52401;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52324),tetris$render$gameplay$game_view$add_piece_$_iter__52321(cljs.core.chunk_rest(s__52322__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52324),null);
}
} else {
var _ = cljs.core.first(s__52322__$2);
return cljs.core.cons(tetris.render.gameplay.game_view.add_piece_cell(container,cell_size),tetris$render$gameplay$game_view$add_piece_$_iter__52321(cljs.core.rest(s__52322__$2)));
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
return tetris.render.gameplay.game_view.add_piece_cell(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(view),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(view,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287)], null)));
});
tetris.render.gameplay.game_view.add_board_piece = (function tetris$render$gameplay$game_view$add_board_piece(view,piece){
return tetris.render.gameplay.game_view.add_piece(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(view),piece,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(view,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287)], null)));
});
tetris.render.gameplay.game_view.render_piece_BANG_ = (function tetris$render$gameplay$game_view$render_piece_BANG_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___52403 = arguments.length;
var i__5898__auto___52404 = (0);
while(true){
if((i__5898__auto___52404 < len__5897__auto___52403)){
args__5903__auto__.push((arguments[i__5898__auto___52404]));

var G__52405 = (i__5898__auto___52404 + (1));
i__5898__auto___52404 = G__52405;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((3) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((3)),(0),null)):null);
return tetris.render.gameplay.game_view.render_piece_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5904__auto__);
});

(tetris.render.gameplay.game_view.render_piece_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (view,display_piece,piece_state,ghost_QMARK_){
var seq__52334 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,display_piece,new cljs.core.Keyword(null,"cells","cells",-985166822).cljs$core$IFn$_invoke$arity$1(piece_state)));
var chunk__52335 = null;
var count__52336 = (0);
var i__52337 = (0);
while(true){
if((i__52337 < count__52336)){
var vec__52344 = chunk__52335.cljs$core$IIndexed$_nth$arity$2(null,i__52337);
var cell_sprite = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52344,(0),null);
var cell_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52344,(1),null);
(cell_sprite.texture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece-cell-textures","piece-cell-textures",754648682).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"color-index","color-index",560460581).cljs$core$IFn$_invoke$arity$1(piece_state)));

(cell_sprite.visible = new cljs.core.Keyword(null,"visible","visible",-1024216805).cljs$core$IFn$_invoke$arity$1(piece_state));

(cell_sprite.alpha = (cljs.core.truth_(ghost_QMARK_)?0.2:(1)));

cell_sprite.position.set(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell_pos),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell_pos));


var G__52407 = seq__52334;
var G__52408 = chunk__52335;
var G__52409 = count__52336;
var G__52410 = (i__52337 + (1));
seq__52334 = G__52407;
chunk__52335 = G__52408;
count__52336 = G__52409;
i__52337 = G__52410;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__52334);
if(temp__5825__auto__){
var seq__52334__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52334__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__52334__$1);
var G__52411 = cljs.core.chunk_rest(seq__52334__$1);
var G__52412 = c__5694__auto__;
var G__52413 = cljs.core.count(c__5694__auto__);
var G__52414 = (0);
seq__52334 = G__52411;
chunk__52335 = G__52412;
count__52336 = G__52413;
i__52337 = G__52414;
continue;
} else {
var vec__52347 = cljs.core.first(seq__52334__$1);
var cell_sprite = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52347,(0),null);
var cell_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52347,(1),null);
(cell_sprite.texture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece-cell-textures","piece-cell-textures",754648682).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"color-index","color-index",560460581).cljs$core$IFn$_invoke$arity$1(piece_state)));

(cell_sprite.visible = new cljs.core.Keyword(null,"visible","visible",-1024216805).cljs$core$IFn$_invoke$arity$1(piece_state));

(cell_sprite.alpha = (cljs.core.truth_(ghost_QMARK_)?0.2:(1)));

cell_sprite.position.set(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell_pos),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell_pos));


var G__52416 = cljs.core.next(seq__52334__$1);
var G__52417 = null;
var G__52418 = (0);
var G__52419 = (0);
seq__52334 = G__52416;
chunk__52335 = G__52417;
count__52336 = G__52418;
i__52337 = G__52419;
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
(tetris.render.gameplay.game_view.render_piece_BANG_.cljs$lang$applyTo = (function (seq52330){
var G__52331 = cljs.core.first(seq52330);
var seq52330__$1 = cljs.core.next(seq52330);
var G__52332 = cljs.core.first(seq52330__$1);
var seq52330__$2 = cljs.core.next(seq52330__$1);
var G__52333 = cljs.core.first(seq52330__$2);
var seq52330__$3 = cljs.core.next(seq52330__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52331,G__52332,G__52333,seq52330__$3);
}));

tetris.render.gameplay.game_view.update_tweens = (function tetris$render$gameplay$game_view$update_tweens(view){
var seq__52350 = cljs.core.seq(new cljs.core.Keyword(null,"tweens","tweens",-1927735551).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)));
var chunk__52351 = null;
var count__52352 = (0);
var i__52353 = (0);
while(true){
if((i__52353 < count__52352)){
var vec__52360 = chunk__52351.cljs$core$IIndexed$_nth$arity$2(null,i__52353);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52360,(0),null);
var tween = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52360,(1),null);
if(cljs.core.truth_(tween)){
tween.update();
} else {
}


var G__52421 = seq__52350;
var G__52422 = chunk__52351;
var G__52423 = count__52352;
var G__52424 = (i__52353 + (1));
seq__52350 = G__52421;
chunk__52351 = G__52422;
count__52352 = G__52423;
i__52353 = G__52424;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__52350);
if(temp__5825__auto__){
var seq__52350__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52350__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__52350__$1);
var G__52425 = cljs.core.chunk_rest(seq__52350__$1);
var G__52426 = c__5694__auto__;
var G__52427 = cljs.core.count(c__5694__auto__);
var G__52428 = (0);
seq__52350 = G__52425;
chunk__52351 = G__52426;
count__52352 = G__52427;
i__52353 = G__52428;
continue;
} else {
var vec__52363 = cljs.core.first(seq__52350__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52363,(0),null);
var tween = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52363,(1),null);
if(cljs.core.truth_(tween)){
tween.update();
} else {
}


var G__52429 = cljs.core.next(seq__52350__$1);
var G__52430 = null;
var G__52431 = (0);
var G__52432 = (0);
seq__52350 = G__52429;
chunk__52351 = G__52430;
count__52352 = G__52431;
i__52353 = G__52432;
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
var G__52367 = arguments.length;
switch (G__52367) {
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
var tween = (function (){var G__52368 = (new module$node_modules$$tweenjs$tween_js$dist$tween_cjs.Tween(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot));
G__52368.to(cljs.core.clj__GT_js(to_values),(function (){var or__5162__auto__ = duration;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (167);
}
})());

G__52368.easing((function (){var or__5162__auto__ = easing;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return module$node_modules$$tweenjs$tween_js$dist$tween_cjs.Easing.Quintic.Out;
}
})());

G__52368.start();

G__52368.onComplete((function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweens","tweens",-1927735551),id], null),null);

if(cljs.core.truth_(cb)){
return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
} else {
return null;
}
}));

G__52368.onStop((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweens","tweens",-1927735551),id], null),null);
}));

return G__52368;
})();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweens","tweens",-1927735551),id], null),tween);
}
}));

(tetris.render.gameplay.game_view.start_board_bounce_tween_BANG_.cljs$lang$maxFixedArity = 6);

tetris.render.gameplay.game_view.render_board_bounce_BANG_ = (function tetris$render$gameplay$game_view$render_board_bounce_BANG_(view,game_state,input){
if(cljs.core.truth_(cljs.core.some((function (p1__52369_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__52369_SHARP_,new cljs.core.Keyword(null,"move-left","move-left",-271562811));
}),new cljs.core.Keyword(null,"pressed-buttons","pressed-buttons",1426560090).cljs$core$IFn$_invoke$arity$1(input)))){
if(tetris.core.game.shift_blocked_QMARK_(game_state,(-1))){
tetris.render.gameplay.game_view.stop_tween_BANG_(view,new cljs.core.Keyword(null,"board-bounce-shift","board-bounce-shift",945163307));

var px_52434 = (new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot.x - (- (1)));
if((cljs.core.abs(px_52434) <= tetris.render.gameplay.game_view.board_bounce_dx_max)){
(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot.x = px_52434);
} else {
}
} else {
}
} else {
tetris.render.gameplay.game_view.start_board_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$3(view,new cljs.core.Keyword(null,"board-bounce-shift","board-bounce-shift",945163307),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(0)], null));
}

if(cljs.core.truth_(cljs.core.some((function (p1__52370_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__52370_SHARP_,new cljs.core.Keyword(null,"move-right","move-right",1661359569));
}),new cljs.core.Keyword(null,"pressed-buttons","pressed-buttons",1426560090).cljs$core$IFn$_invoke$arity$1(input)))){
if(tetris.core.game.shift_blocked_QMARK_(game_state,(1))){
tetris.render.gameplay.game_view.stop_tween_BANG_(view,new cljs.core.Keyword(null,"board-bounce-shift","board-bounce-shift",945163307));

var px_52436 = (new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot.x - (1));
if((cljs.core.abs(px_52436) <= tetris.render.gameplay.game_view.board_bounce_dx_max)){
(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot.x = px_52436);
} else {
}
} else {
}
} else {
tetris.render.gameplay.game_view.start_board_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$3(view,new cljs.core.Keyword(null,"board-bounce-shift","board-bounce-shift",945163307),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(0)], null));
}

if(cljs.core.truth_(cljs.core.some((function (p1__52371_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__52371_SHARP_,new cljs.core.Keyword(null,"soft-drop","soft-drop",-123150289));
}),new cljs.core.Keyword(null,"pressed-buttons","pressed-buttons",1426560090).cljs$core$IFn$_invoke$arity$1(input)))){
if(tetris.core.game.down_blocked_QMARK_(game_state)){
tetris.render.gameplay.game_view.stop_tween_BANG_(view,new cljs.core.Keyword(null,"board-bounce-down","board-bounce-down",1116094071));

var py_52437 = (new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot.y - (1));
if((cljs.core.abs(py_52437) <= tetris.render.gameplay.game_view.board_bounce_dy_max)){
(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot.y = py_52437);
} else {
}
} else {
}
} else {
tetris.render.gameplay.game_view.start_board_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$3(view,new cljs.core.Keyword(null,"board-bounce-down","board-bounce-down",1116094071),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
}

if(cljs.core.truth_(tetris.core.game.find_event(new cljs.core.Keyword(null,"locked","locked",-1658763820),new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(game_state)))){
tetris.render.gameplay.game_view.stop_tween_BANG_(view,new cljs.core.Keyword(null,"board-bounce-bottom","board-bounce-bottom",-1439651939));

var py = (new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot.y - tetris.render.gameplay.game_view.board_bounce_dy_max);
if((cljs.core.abs(py) <= tetris.render.gameplay.game_view.board_bounce_dy_max)){
return tetris.render.gameplay.game_view.start_board_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$6(view,new cljs.core.Keyword(null,"board-bounce-bottom","board-bounce-bottom",-1439651939),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),py], null),module$node_modules$$tweenjs$tween_js$dist$tween_cjs.Easing.Cubic.Out,(83),(function (){
return tetris.render.gameplay.game_view.start_board_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$6(view,new cljs.core.Keyword(null,"board-bounce-bottom","board-bounce-bottom",-1439651939),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),module$node_modules$$tweenjs$tween_js$dist$tween_cjs.Easing.Cubic.Out,(344),null);
}));
} else {
return null;
}
} else {
return null;
}
});
tetris.render.gameplay.game_view.render_BANG_ = (function tetris$render$gameplay$game_view$render_BANG_(view,game_state,input){
var data = tetris.render.gameplay.game_view_data.render_data(new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),game_state);
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hold","hold",-1621118005),new cljs.core.Keyword(null,"cells","cells",-985166822)], null)))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"hold","hold",-1621118005).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)))){
} else {
var piece_52438 = tetris.render.gameplay.game_view.add_piece(new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"hold","hold",-1621118005).cljs$core$IFn$_invoke$arity$1(data),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"hold","hold",-1621118005),new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc,new cljs.core.Keyword(null,"hold","hold",-1621118005),piece_52438);
}

tetris.render.gameplay.game_view.render_piece_BANG_(view,new cljs.core.Keyword(null,"hold","hold",-1621118005).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"hold","hold",-1621118005).cljs$core$IFn$_invoke$arity$1(data));
} else {
}

if(cljs.core.seq(new cljs.core.Keyword(null,"next-queue","next-queue",-689213061).cljs$core$IFn$_invoke$arity$1(data))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"next-queue","next-queue",-689213061).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)))){
} else {
var display_pieces_52439 = cljs.core.vec((function (){var iter__5649__auto__ = (function tetris$render$gameplay$game_view$render_BANG__$_iter__52372(s__52373){
return (new cljs.core.LazySeq(null,(function (){
var s__52373__$1 = s__52373;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__52373__$1);
if(temp__5825__auto__){
var s__52373__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52373__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__52373__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__52375 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__52374 = (0);
while(true){
if((i__52374 < size__5648__auto__)){
var piece = cljs.core._nth(c__5647__auto__,i__52374);
cljs.core.chunk_append(b__52375,tetris.render.gameplay.game_view.add_piece(new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),piece,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287)], null))));

var G__52440 = (i__52374 + (1));
i__52374 = G__52440;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52375),tetris$render$gameplay$game_view$render_BANG__$_iter__52372(cljs.core.chunk_rest(s__52373__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52375),null);
}
} else {
var piece = cljs.core.first(s__52373__$2);
return cljs.core.cons(tetris.render.gameplay.game_view.add_piece(new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),piece,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287)], null))),tetris$render$gameplay$game_view$render_BANG__$_iter__52372(cljs.core.rest(s__52373__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(new cljs.core.Keyword(null,"next-queue","next-queue",-689213061).cljs$core$IFn$_invoke$arity$1(data));
})());
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc,new cljs.core.Keyword(null,"next-queue","next-queue",-689213061),display_pieces_52439);
}

var seq__52376_52441 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,new cljs.core.Keyword(null,"next-queue","next-queue",-689213061).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"next-queue","next-queue",-689213061).cljs$core$IFn$_invoke$arity$1(data)));
var chunk__52377_52442 = null;
var count__52378_52443 = (0);
var i__52379_52444 = (0);
while(true){
if((i__52379_52444 < count__52378_52443)){
var vec__52386_52445 = chunk__52377_52442.cljs$core$IIndexed$_nth$arity$2(null,i__52379_52444);
var piece_v_52446 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52386_52445,(0),null);
var piece_d_52447 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52386_52445,(1),null);
tetris.render.gameplay.game_view.render_piece_BANG_(view,piece_v_52446,piece_d_52447);


var G__52448 = seq__52376_52441;
var G__52449 = chunk__52377_52442;
var G__52450 = count__52378_52443;
var G__52451 = (i__52379_52444 + (1));
seq__52376_52441 = G__52448;
chunk__52377_52442 = G__52449;
count__52378_52443 = G__52450;
i__52379_52444 = G__52451;
continue;
} else {
var temp__5825__auto___52452 = cljs.core.seq(seq__52376_52441);
if(temp__5825__auto___52452){
var seq__52376_52453__$1 = temp__5825__auto___52452;
if(cljs.core.chunked_seq_QMARK_(seq__52376_52453__$1)){
var c__5694__auto___52454 = cljs.core.chunk_first(seq__52376_52453__$1);
var G__52455 = cljs.core.chunk_rest(seq__52376_52453__$1);
var G__52456 = c__5694__auto___52454;
var G__52457 = cljs.core.count(c__5694__auto___52454);
var G__52458 = (0);
seq__52376_52441 = G__52455;
chunk__52377_52442 = G__52456;
count__52378_52443 = G__52457;
i__52379_52444 = G__52458;
continue;
} else {
var vec__52389_52459 = cljs.core.first(seq__52376_52453__$1);
var piece_v_52460 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52389_52459,(0),null);
var piece_d_52461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52389_52459,(1),null);
tetris.render.gameplay.game_view.render_piece_BANG_(view,piece_v_52460,piece_d_52461);


var G__52462 = cljs.core.next(seq__52376_52453__$1);
var G__52463 = null;
var G__52464 = (0);
var G__52465 = (0);
seq__52376_52441 = G__52462;
chunk__52377_52442 = G__52463;
count__52378_52443 = G__52464;
i__52379_52444 = G__52465;
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

var state_cell_ids_52466 = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(data)));
var view_cell_ids_52467 = cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view))));
var cell_ids_to_remove_52468 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(view_cell_ids_52467,state_cell_ids_52466);
var seq__52392_52469 = cljs.core.seq(cell_ids_to_remove_52468);
var chunk__52393_52470 = null;
var count__52394_52471 = (0);
var i__52395_52472 = (0);
while(true){
if((i__52395_52472 < count__52394_52471)){
var id_52473 = chunk__52393_52470.cljs$core$IIndexed$_nth$arity$2(null,i__52395_52472);
var temp__5825__auto___52474 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),id_52473], null));
if(cljs.core.truth_(temp__5825__auto___52474)){
var cell_sprite_52475 = temp__5825__auto___52474;
new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).removeChild(cell_sprite_52475);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(view,cljs.core.update,new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id_52473], 0));
} else {
}


var G__52476 = seq__52392_52469;
var G__52477 = chunk__52393_52470;
var G__52478 = count__52394_52471;
var G__52479 = (i__52395_52472 + (1));
seq__52392_52469 = G__52476;
chunk__52393_52470 = G__52477;
count__52394_52471 = G__52478;
i__52395_52472 = G__52479;
continue;
} else {
var temp__5825__auto___52480 = cljs.core.seq(seq__52392_52469);
if(temp__5825__auto___52480){
var seq__52392_52481__$1 = temp__5825__auto___52480;
if(cljs.core.chunked_seq_QMARK_(seq__52392_52481__$1)){
var c__5694__auto___52482 = cljs.core.chunk_first(seq__52392_52481__$1);
var G__52483 = cljs.core.chunk_rest(seq__52392_52481__$1);
var G__52484 = c__5694__auto___52482;
var G__52485 = cljs.core.count(c__5694__auto___52482);
var G__52486 = (0);
seq__52392_52469 = G__52483;
chunk__52393_52470 = G__52484;
count__52394_52471 = G__52485;
i__52395_52472 = G__52486;
continue;
} else {
var id_52487 = cljs.core.first(seq__52392_52481__$1);
var temp__5825__auto___52488__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),id_52487], null));
if(cljs.core.truth_(temp__5825__auto___52488__$1)){
var cell_sprite_52489 = temp__5825__auto___52488__$1;
new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).removeChild(cell_sprite_52489);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(view,cljs.core.update,new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id_52487], 0));
} else {
}


var G__52490 = cljs.core.next(seq__52392_52481__$1);
var G__52491 = null;
var G__52492 = (0);
var G__52493 = (0);
seq__52392_52469 = G__52490;
chunk__52393_52470 = G__52491;
count__52394_52471 = G__52492;
i__52395_52472 = G__52493;
continue;
}
} else {
}
}
break;
}

var seq__52396_52494 = cljs.core.seq(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(data));
var chunk__52397_52495 = null;
var count__52398_52496 = (0);
var i__52399_52497 = (0);
while(true){
if((i__52399_52497 < count__52398_52496)){
var cell_52498 = chunk__52397_52495.cljs$core$IIndexed$_nth$arity$2(null,i__52399_52497);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell_52498)))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell_52498)], null),tetris.render.gameplay.game_view.add_board_piece_cell(cljs.core.deref(view)));
}

var temp__5825__auto___52499 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell_52498)], null));
if(cljs.core.truth_(temp__5825__auto___52499)){
var cell_sprite_52500 = temp__5825__auto___52499;
(cell_sprite_52500.texture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece-cell-textures","piece-cell-textures",754648682).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"color-index","color-index",560460581).cljs$core$IFn$_invoke$arity$1(cell_52498)));

cell_sprite_52500.position.set(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell_52498),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell_52498));
} else {
}


var G__52501 = seq__52396_52494;
var G__52502 = chunk__52397_52495;
var G__52503 = count__52398_52496;
var G__52504 = (i__52399_52497 + (1));
seq__52396_52494 = G__52501;
chunk__52397_52495 = G__52502;
count__52398_52496 = G__52503;
i__52399_52497 = G__52504;
continue;
} else {
var temp__5825__auto___52505 = cljs.core.seq(seq__52396_52494);
if(temp__5825__auto___52505){
var seq__52396_52506__$1 = temp__5825__auto___52505;
if(cljs.core.chunked_seq_QMARK_(seq__52396_52506__$1)){
var c__5694__auto___52507 = cljs.core.chunk_first(seq__52396_52506__$1);
var G__52508 = cljs.core.chunk_rest(seq__52396_52506__$1);
var G__52509 = c__5694__auto___52507;
var G__52510 = cljs.core.count(c__5694__auto___52507);
var G__52511 = (0);
seq__52396_52494 = G__52508;
chunk__52397_52495 = G__52509;
count__52398_52496 = G__52510;
i__52399_52497 = G__52511;
continue;
} else {
var cell_52512 = cljs.core.first(seq__52396_52506__$1);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell_52512)))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell_52512)], null),tetris.render.gameplay.game_view.add_board_piece_cell(cljs.core.deref(view)));
}

var temp__5825__auto___52513__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell_52512)], null));
if(cljs.core.truth_(temp__5825__auto___52513__$1)){
var cell_sprite_52514 = temp__5825__auto___52513__$1;
(cell_sprite_52514.texture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece-cell-textures","piece-cell-textures",754648682).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"color-index","color-index",560460581).cljs$core$IFn$_invoke$arity$1(cell_52512)));

cell_sprite_52514.position.set(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell_52512),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell_52512));
} else {
}


var G__52515 = cljs.core.next(seq__52396_52506__$1);
var G__52516 = null;
var G__52517 = (0);
var G__52518 = (0);
seq__52396_52494 = G__52515;
chunk__52397_52495 = G__52516;
count__52398_52496 = G__52517;
i__52399_52497 = G__52518;
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
