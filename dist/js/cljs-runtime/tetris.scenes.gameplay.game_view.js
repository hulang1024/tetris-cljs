goog.provide('tetris.scenes.gameplay.game_view');
var module$node_modules$pixi_DOT_js$lib$index=shadow.js.require("module$node_modules$pixi_DOT_js$lib$index", {});
var module$node_modules$$tweenjs$tween_js$dist$tween_cjs=shadow.js.require("module$node_modules$$tweenjs$tween_js$dist$tween_cjs", {});
tetris.scenes.gameplay.game_view.board_bounce_dx_max = (4);
tetris.scenes.gameplay.game_view.board_bounce_dy_max = (10);
tetris.scenes.gameplay.game_view.create_board = (function tetris$scenes$gameplay$game_view$create_board(p__45349){
var map__45350 = p__45349;
var map__45350__$1 = cljs.core.__destructure_map(map__45350);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45350__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45350__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45350__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45350__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var border_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45350__$1,new cljs.core.Keyword(null,"border-width","border-width",-1512605390));
var container = (new module$node_modules$pixi_DOT_js$lib$index.Container(({"label": "board"})));
var g = (new module$node_modules$pixi_DOT_js$lib$index.Graphics(({"label": "board"})));
var G__45351_45421 = g;
G__45351_45421.rect((0),(0),width,height);

G__45351_45421.fill(({"color": (1118481)}));

G__45351_45421.stroke(({"width": border_width, "color": (15658734)}));


(g.alpha = (1));

container.position.set(x,y);

container.addChild(g);

return container;
});
tetris.scenes.gameplay.game_view.create = (function tetris$scenes$gameplay$game_view$create(scene,options){
var layout = tetris.scenes.gameplay.game_view_data.calc_layout(new cljs.core.Keyword(null,"preview-count","preview-count",-329263374).cljs$core$IFn$_invoke$arity$1(options));
var game_view = (new module$node_modules$pixi_DOT_js$lib$index.Container(({"label": "game-view", "x": (((1920) - new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(layout)) / (2)), "y": (((1080) - new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(layout)) / (2))})));
var board = tetris.scenes.gameplay.game_view.create_board(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(layout));
game_view.addChild(board);

scene.addChild(game_view);

return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"tweens","tweens",-1927735551),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"piece-cell-textures","piece-cell-textures",754648682),new cljs.core.Keyword(null,"held","held",-1064528277),new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"container","container",-1736937707),new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"next-queue","next-queue",-689213061),new cljs.core.Keyword(null,"board","board",-1907017633)],[cljs.core.PersistentArrayMap.EMPTY,layout,tetris.scenes.gameplay.piece.create_piece_cell_textures(new cljs.core.Keyword(null,"piece-style","piece-style",-1354956371).cljs$core$IFn$_invoke$arity$1(options)),null,null,game_view,cljs.core.PersistentArrayMap.EMPTY,null,null,board]);
});
tetris.scenes.gameplay.game_view.add_piece_cell = (function tetris$scenes$gameplay$game_view$add_piece_cell(container,cell_size){
var sprite = tetris.scenes.gameplay.piece.create_piece_cell_sprite(cell_size);
return container.addChild(sprite);
});
tetris.scenes.gameplay.game_view.add_piece = (function tetris$scenes$gameplay$game_view$add_piece(container,piece,cell_size){
return cljs.core.vec((function (){var iter__5649__auto__ = (function tetris$scenes$gameplay$game_view$add_piece_$_iter__45352(s__45353){
return (new cljs.core.LazySeq(null,(function (){
var s__45353__$1 = s__45353;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__45353__$1);
if(temp__5825__auto__){
var s__45353__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45353__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__45353__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__45355 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__45354 = (0);
while(true){
if((i__45354 < size__5648__auto__)){
var _ = cljs.core._nth(c__5647__auto__,i__45354);
cljs.core.chunk_append(b__45355,tetris.scenes.gameplay.game_view.add_piece_cell(container,cell_size));

var G__45422 = (i__45354 + (1));
i__45354 = G__45422;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45355),tetris$scenes$gameplay$game_view$add_piece_$_iter__45352(cljs.core.chunk_rest(s__45353__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45355),null);
}
} else {
var _ = cljs.core.first(s__45353__$2);
return cljs.core.cons(tetris.scenes.gameplay.game_view.add_piece_cell(container,cell_size),tetris$scenes$gameplay$game_view$add_piece_$_iter__45352(cljs.core.rest(s__45353__$2)));
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
tetris.scenes.gameplay.game_view.add_board_piece_cell = (function tetris$scenes$gameplay$game_view$add_board_piece_cell(view){
return tetris.scenes.gameplay.game_view.add_piece_cell(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(view),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(view,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287)], null)));
});
tetris.scenes.gameplay.game_view.add_board_piece = (function tetris$scenes$gameplay$game_view$add_board_piece(view,piece){
return tetris.scenes.gameplay.game_view.add_piece(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(view),piece,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(view,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287)], null)));
});
tetris.scenes.gameplay.game_view.render_piece_BANG_ = (function tetris$scenes$gameplay$game_view$render_piece_BANG_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___45423 = arguments.length;
var i__5898__auto___45424 = (0);
while(true){
if((i__5898__auto___45424 < len__5897__auto___45423)){
args__5903__auto__.push((arguments[i__5898__auto___45424]));

var G__45425 = (i__5898__auto___45424 + (1));
i__5898__auto___45424 = G__45425;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((3) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((3)),(0),null)):null);
return tetris.scenes.gameplay.game_view.render_piece_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5904__auto__);
});

(tetris.scenes.gameplay.game_view.render_piece_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (view,display_piece,piece_state,ghost_QMARK_){
var seq__45360 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,display_piece,new cljs.core.Keyword(null,"cells","cells",-985166822).cljs$core$IFn$_invoke$arity$1(piece_state)));
var chunk__45361 = null;
var count__45362 = (0);
var i__45363 = (0);
while(true){
if((i__45363 < count__45362)){
var vec__45370 = chunk__45361.cljs$core$IIndexed$_nth$arity$2(null,i__45363);
var cell_sprite = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45370,(0),null);
var cell_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45370,(1),null);
(cell_sprite.texture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece-cell-textures","piece-cell-textures",754648682).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"color-index","color-index",560460581).cljs$core$IFn$_invoke$arity$1(piece_state)));

(cell_sprite.visible = new cljs.core.Keyword(null,"visible","visible",-1024216805).cljs$core$IFn$_invoke$arity$1(piece_state));

(cell_sprite.alpha = (cljs.core.truth_(ghost_QMARK_)?0.2:(1)));

cell_sprite.position.set(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell_pos),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell_pos));


var G__45427 = seq__45360;
var G__45428 = chunk__45361;
var G__45429 = count__45362;
var G__45430 = (i__45363 + (1));
seq__45360 = G__45427;
chunk__45361 = G__45428;
count__45362 = G__45429;
i__45363 = G__45430;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__45360);
if(temp__5825__auto__){
var seq__45360__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45360__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__45360__$1);
var G__45431 = cljs.core.chunk_rest(seq__45360__$1);
var G__45432 = c__5694__auto__;
var G__45433 = cljs.core.count(c__5694__auto__);
var G__45434 = (0);
seq__45360 = G__45431;
chunk__45361 = G__45432;
count__45362 = G__45433;
i__45363 = G__45434;
continue;
} else {
var vec__45373 = cljs.core.first(seq__45360__$1);
var cell_sprite = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45373,(0),null);
var cell_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45373,(1),null);
(cell_sprite.texture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece-cell-textures","piece-cell-textures",754648682).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"color-index","color-index",560460581).cljs$core$IFn$_invoke$arity$1(piece_state)));

(cell_sprite.visible = new cljs.core.Keyword(null,"visible","visible",-1024216805).cljs$core$IFn$_invoke$arity$1(piece_state));

(cell_sprite.alpha = (cljs.core.truth_(ghost_QMARK_)?0.2:(1)));

cell_sprite.position.set(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell_pos),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell_pos));


var G__45436 = cljs.core.next(seq__45360__$1);
var G__45437 = null;
var G__45438 = (0);
var G__45439 = (0);
seq__45360 = G__45436;
chunk__45361 = G__45437;
count__45362 = G__45438;
i__45363 = G__45439;
continue;
}
} else {
return null;
}
}
break;
}
}));

(tetris.scenes.gameplay.game_view.render_piece_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tetris.scenes.gameplay.game_view.render_piece_BANG_.cljs$lang$applyTo = (function (seq45356){
var G__45357 = cljs.core.first(seq45356);
var seq45356__$1 = cljs.core.next(seq45356);
var G__45358 = cljs.core.first(seq45356__$1);
var seq45356__$2 = cljs.core.next(seq45356__$1);
var G__45359 = cljs.core.first(seq45356__$2);
var seq45356__$3 = cljs.core.next(seq45356__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45357,G__45358,G__45359,seq45356__$3);
}));

tetris.scenes.gameplay.game_view.update_tweens = (function tetris$scenes$gameplay$game_view$update_tweens(tweens){
var seq__45376 = cljs.core.seq(tweens);
var chunk__45377 = null;
var count__45378 = (0);
var i__45379 = (0);
while(true){
if((i__45379 < count__45378)){
var vec__45386 = chunk__45377.cljs$core$IIndexed$_nth$arity$2(null,i__45379);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45386,(0),null);
var tween = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45386,(1),null);
if(cljs.core.truth_(tween)){
tween.update();
} else {
}


var G__45441 = seq__45376;
var G__45442 = chunk__45377;
var G__45443 = count__45378;
var G__45444 = (i__45379 + (1));
seq__45376 = G__45441;
chunk__45377 = G__45442;
count__45378 = G__45443;
i__45379 = G__45444;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__45376);
if(temp__5825__auto__){
var seq__45376__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45376__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__45376__$1);
var G__45445 = cljs.core.chunk_rest(seq__45376__$1);
var G__45446 = c__5694__auto__;
var G__45447 = cljs.core.count(c__5694__auto__);
var G__45448 = (0);
seq__45376 = G__45445;
chunk__45377 = G__45446;
count__45378 = G__45447;
i__45379 = G__45448;
continue;
} else {
var vec__45389 = cljs.core.first(seq__45376__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45389,(0),null);
var tween = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45389,(1),null);
if(cljs.core.truth_(tween)){
tween.update();
} else {
}


var G__45449 = cljs.core.next(seq__45376__$1);
var G__45450 = null;
var G__45451 = (0);
var G__45452 = (0);
seq__45376 = G__45449;
chunk__45377 = G__45450;
count__45378 = G__45451;
i__45379 = G__45452;
continue;
}
} else {
return null;
}
}
break;
}
});
tetris.scenes.gameplay.game_view.render_BANG_ = (function tetris$scenes$gameplay$game_view$render_BANG_(view,game_state){
var data = tetris.scenes.gameplay.game_view_data.render_data(new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),game_state);
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"held","held",-1064528277),new cljs.core.Keyword(null,"cells","cells",-985166822)], null)))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"held","held",-1064528277).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)))){
} else {
var piece_45453 = tetris.scenes.gameplay.game_view.add_piece(new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"held","held",-1064528277).cljs$core$IFn$_invoke$arity$1(data),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"held","held",-1064528277),new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc,new cljs.core.Keyword(null,"held","held",-1064528277),piece_45453);
}

tetris.scenes.gameplay.game_view.render_piece_BANG_(view,new cljs.core.Keyword(null,"held","held",-1064528277).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"held","held",-1064528277).cljs$core$IFn$_invoke$arity$1(data));
} else {
}

if(cljs.core.seq(new cljs.core.Keyword(null,"next-queue","next-queue",-689213061).cljs$core$IFn$_invoke$arity$1(data))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"next-queue","next-queue",-689213061).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)))){
} else {
var display_pieces_45455 = cljs.core.vec((function (){var iter__5649__auto__ = (function tetris$scenes$gameplay$game_view$render_BANG__$_iter__45392(s__45393){
return (new cljs.core.LazySeq(null,(function (){
var s__45393__$1 = s__45393;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__45393__$1);
if(temp__5825__auto__){
var s__45393__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45393__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__45393__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__45395 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__45394 = (0);
while(true){
if((i__45394 < size__5648__auto__)){
var piece = cljs.core._nth(c__5647__auto__,i__45394);
cljs.core.chunk_append(b__45395,tetris.scenes.gameplay.game_view.add_piece(new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),piece,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287)], null))));

var G__45456 = (i__45394 + (1));
i__45394 = G__45456;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45395),tetris$scenes$gameplay$game_view$render_BANG__$_iter__45392(cljs.core.chunk_rest(s__45393__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45395),null);
}
} else {
var piece = cljs.core.first(s__45393__$2);
return cljs.core.cons(tetris.scenes.gameplay.game_view.add_piece(new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),piece,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287)], null))),tetris$scenes$gameplay$game_view$render_BANG__$_iter__45392(cljs.core.rest(s__45393__$2)));
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc,new cljs.core.Keyword(null,"next-queue","next-queue",-689213061),display_pieces_45455);
}

var seq__45396_45457 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,new cljs.core.Keyword(null,"next-queue","next-queue",-689213061).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"next-queue","next-queue",-689213061).cljs$core$IFn$_invoke$arity$1(data)));
var chunk__45397_45458 = null;
var count__45398_45459 = (0);
var i__45399_45460 = (0);
while(true){
if((i__45399_45460 < count__45398_45459)){
var vec__45406_45461 = chunk__45397_45458.cljs$core$IIndexed$_nth$arity$2(null,i__45399_45460);
var piece_v_45462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45406_45461,(0),null);
var piece_d_45463 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45406_45461,(1),null);
tetris.scenes.gameplay.game_view.render_piece_BANG_(view,piece_v_45462,piece_d_45463);


var G__45464 = seq__45396_45457;
var G__45465 = chunk__45397_45458;
var G__45466 = count__45398_45459;
var G__45467 = (i__45399_45460 + (1));
seq__45396_45457 = G__45464;
chunk__45397_45458 = G__45465;
count__45398_45459 = G__45466;
i__45399_45460 = G__45467;
continue;
} else {
var temp__5825__auto___45468 = cljs.core.seq(seq__45396_45457);
if(temp__5825__auto___45468){
var seq__45396_45469__$1 = temp__5825__auto___45468;
if(cljs.core.chunked_seq_QMARK_(seq__45396_45469__$1)){
var c__5694__auto___45470 = cljs.core.chunk_first(seq__45396_45469__$1);
var G__45471 = cljs.core.chunk_rest(seq__45396_45469__$1);
var G__45472 = c__5694__auto___45470;
var G__45473 = cljs.core.count(c__5694__auto___45470);
var G__45474 = (0);
seq__45396_45457 = G__45471;
chunk__45397_45458 = G__45472;
count__45398_45459 = G__45473;
i__45399_45460 = G__45474;
continue;
} else {
var vec__45409_45475 = cljs.core.first(seq__45396_45469__$1);
var piece_v_45476 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45409_45475,(0),null);
var piece_d_45477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45409_45475,(1),null);
tetris.scenes.gameplay.game_view.render_piece_BANG_(view,piece_v_45476,piece_d_45477);


var G__45478 = cljs.core.next(seq__45396_45469__$1);
var G__45479 = null;
var G__45480 = (0);
var G__45481 = (0);
seq__45396_45457 = G__45478;
chunk__45397_45458 = G__45479;
count__45398_45459 = G__45480;
i__45399_45460 = G__45481;
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc,new cljs.core.Keyword(null,"ghost","ghost",-1531157576),tetris.scenes.gameplay.game_view.add_board_piece(cljs.core.deref(view),new cljs.core.Keyword(null,"ghost","ghost",-1531157576).cljs$core$IFn$_invoke$arity$1(data)));
}

tetris.scenes.gameplay.game_view.render_piece_BANG_.cljs$core$IFn$_invoke$arity$variadic(view,new cljs.core.Keyword(null,"ghost","ghost",-1531157576).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"ghost","ghost",-1531157576).cljs$core$IFn$_invoke$arity$1(data),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0));
} else {
}

if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"cells","cells",-985166822)], null)))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc,new cljs.core.Keyword(null,"current","current",-1088038603),tetris.scenes.gameplay.game_view.add_board_piece(cljs.core.deref(view),new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(data)));
}

tetris.scenes.gameplay.game_view.render_piece_BANG_(view,new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(data));
} else {
}

var state_cell_ids_45482 = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(data)));
var view_cell_ids_45483 = cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view))));
var cell_ids_to_remove_45484 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(view_cell_ids_45483,state_cell_ids_45482);
var seq__45412_45485 = cljs.core.seq(cell_ids_to_remove_45484);
var chunk__45413_45486 = null;
var count__45414_45487 = (0);
var i__45415_45488 = (0);
while(true){
if((i__45415_45488 < count__45414_45487)){
var id_45489 = chunk__45413_45486.cljs$core$IIndexed$_nth$arity$2(null,i__45415_45488);
var temp__5825__auto___45490 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),id_45489], null));
if(cljs.core.truth_(temp__5825__auto___45490)){
var cell_sprite_45491 = temp__5825__auto___45490;
new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).removeChild(cell_sprite_45491);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(view,cljs.core.update,new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id_45489], 0));
} else {
}


var G__45492 = seq__45412_45485;
var G__45493 = chunk__45413_45486;
var G__45494 = count__45414_45487;
var G__45495 = (i__45415_45488 + (1));
seq__45412_45485 = G__45492;
chunk__45413_45486 = G__45493;
count__45414_45487 = G__45494;
i__45415_45488 = G__45495;
continue;
} else {
var temp__5825__auto___45496 = cljs.core.seq(seq__45412_45485);
if(temp__5825__auto___45496){
var seq__45412_45497__$1 = temp__5825__auto___45496;
if(cljs.core.chunked_seq_QMARK_(seq__45412_45497__$1)){
var c__5694__auto___45498 = cljs.core.chunk_first(seq__45412_45497__$1);
var G__45500 = cljs.core.chunk_rest(seq__45412_45497__$1);
var G__45501 = c__5694__auto___45498;
var G__45502 = cljs.core.count(c__5694__auto___45498);
var G__45503 = (0);
seq__45412_45485 = G__45500;
chunk__45413_45486 = G__45501;
count__45414_45487 = G__45502;
i__45415_45488 = G__45503;
continue;
} else {
var id_45504 = cljs.core.first(seq__45412_45497__$1);
var temp__5825__auto___45505__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),id_45504], null));
if(cljs.core.truth_(temp__5825__auto___45505__$1)){
var cell_sprite_45506 = temp__5825__auto___45505__$1;
new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).removeChild(cell_sprite_45506);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(view,cljs.core.update,new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id_45504], 0));
} else {
}


var G__45507 = cljs.core.next(seq__45412_45497__$1);
var G__45508 = null;
var G__45509 = (0);
var G__45510 = (0);
seq__45412_45485 = G__45507;
chunk__45413_45486 = G__45508;
count__45414_45487 = G__45509;
i__45415_45488 = G__45510;
continue;
}
} else {
}
}
break;
}

var seq__45416_45511 = cljs.core.seq(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(data));
var chunk__45417_45512 = null;
var count__45418_45513 = (0);
var i__45419_45514 = (0);
while(true){
if((i__45419_45514 < count__45418_45513)){
var cell_45515 = chunk__45417_45512.cljs$core$IIndexed$_nth$arity$2(null,i__45419_45514);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell_45515)))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell_45515)], null),tetris.scenes.gameplay.game_view.add_board_piece_cell(cljs.core.deref(view)));
}

var temp__5825__auto___45516 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell_45515)], null));
if(cljs.core.truth_(temp__5825__auto___45516)){
var cell_sprite_45517 = temp__5825__auto___45516;
(cell_sprite_45517.texture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece-cell-textures","piece-cell-textures",754648682).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"color-index","color-index",560460581).cljs$core$IFn$_invoke$arity$1(cell_45515)));

cell_sprite_45517.position.set(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell_45515),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell_45515));
} else {
}


var G__45518 = seq__45416_45511;
var G__45519 = chunk__45417_45512;
var G__45520 = count__45418_45513;
var G__45521 = (i__45419_45514 + (1));
seq__45416_45511 = G__45518;
chunk__45417_45512 = G__45519;
count__45418_45513 = G__45520;
i__45419_45514 = G__45521;
continue;
} else {
var temp__5825__auto___45522 = cljs.core.seq(seq__45416_45511);
if(temp__5825__auto___45522){
var seq__45416_45523__$1 = temp__5825__auto___45522;
if(cljs.core.chunked_seq_QMARK_(seq__45416_45523__$1)){
var c__5694__auto___45524 = cljs.core.chunk_first(seq__45416_45523__$1);
var G__45525 = cljs.core.chunk_rest(seq__45416_45523__$1);
var G__45526 = c__5694__auto___45524;
var G__45527 = cljs.core.count(c__5694__auto___45524);
var G__45528 = (0);
seq__45416_45511 = G__45525;
chunk__45417_45512 = G__45526;
count__45418_45513 = G__45527;
i__45419_45514 = G__45528;
continue;
} else {
var cell_45529 = cljs.core.first(seq__45416_45523__$1);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell_45529)))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell_45529)], null),tetris.scenes.gameplay.game_view.add_board_piece_cell(cljs.core.deref(view)));
}

var temp__5825__auto___45530__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell_45529)], null));
if(cljs.core.truth_(temp__5825__auto___45530__$1)){
var cell_sprite_45531 = temp__5825__auto___45530__$1;
(cell_sprite_45531.texture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece-cell-textures","piece-cell-textures",754648682).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"color-index","color-index",560460581).cljs$core$IFn$_invoke$arity$1(cell_45529)));

cell_sprite_45531.position.set(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell_45529),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell_45529));
} else {
}


var G__45532 = cljs.core.next(seq__45416_45523__$1);
var G__45533 = null;
var G__45534 = (0);
var G__45535 = (0);
seq__45416_45511 = G__45532;
chunk__45417_45512 = G__45533;
count__45418_45513 = G__45534;
i__45419_45514 = G__45535;
continue;
}
} else {
}
}
break;
}

var temp__5825__auto___45536 = tetris.core.game.find_event(new cljs.core.Keyword(null,"shift-blocked","shift-blocked",1139549631),new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(game_state));
if(cljs.core.truth_(temp__5825__auto___45536)){
var event_45537 = temp__5825__auto___45536;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweens","tweens",-1927735551),new cljs.core.Keyword(null,"board-bounce","board-bounce",1775114642)], null),null);

var px_45538 = (new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot.x - (new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(event_45537) * (1)));
if((cljs.core.abs(px_45538) <= tetris.scenes.gameplay.game_view.board_bounce_dx_max)){
(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot.x = px_45538);
} else {
}
} else {
}

if(cljs.core.truth_(tetris.core.game.find_event(new cljs.core.Keyword(null,"down-blocked","down-blocked",-1184696185),new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(game_state)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweens","tweens",-1927735551),new cljs.core.Keyword(null,"board-bounce","board-bounce",1775114642)], null),null);

var py_45539 = (new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot.y - (1));
if((cljs.core.abs(py_45539) <= tetris.scenes.gameplay.game_view.board_bounce_dy_max)){
(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot.y = py_45539);
} else {
}
} else {
}

if(cljs.core.truth_(tetris.core.game.find_event(new cljs.core.Keyword(null,"hard-dropped","hard-dropped",2061168106),new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(game_state)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweens","tweens",-1927735551),new cljs.core.Keyword(null,"board-bounce","board-bounce",1775114642)], null),null);

var py_45540 = (new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot.y - (5));
if((cljs.core.abs(py_45540) <= tetris.scenes.gameplay.game_view.board_bounce_dy_max)){
(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot.y = py_45540);
} else {
}
} else {
}

if(((cljs.core.empty_QMARK_(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"move-left","move-left",-271562811),null,new cljs.core.Keyword(null,"soft-drop","soft-drop",-123150289),null,new cljs.core.Keyword(null,"move-right","move-right",1661359569),null], null), null),cljs.core.set(tetris.input.keyboard.pressed_buttons())))) && (cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweens","tweens",-1927735551),new cljs.core.Keyword(null,"board-bounce","board-bounce",1775114642)], null)))))){
var tween_45541 = (function (){var G__45420 = (new module$node_modules$$tweenjs$tween_js$dist$tween_cjs.Tween(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot));
G__45420.to(({"x": (0), "y": (0)}),(167));

G__45420.easing(module$node_modules$$tweenjs$tween_js$dist$tween_cjs.Easing.Quadratic.Out);

G__45420.start();

G__45420.onComplete((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweens","tweens",-1927735551),new cljs.core.Keyword(null,"board-bounce","board-bounce",1775114642)], null),null);
}));

return G__45420;
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweens","tweens",-1927735551),new cljs.core.Keyword(null,"board-bounce","board-bounce",1775114642)], null),tween_45541);
} else {
}

return tetris.scenes.gameplay.game_view.update_tweens(new cljs.core.Keyword(null,"tweens","tweens",-1927735551).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)));
});

//# sourceMappingURL=tetris.scenes.gameplay.game_view.js.map
