goog.provide('tetris.scenes.gameplay.game_view');
var module$node_modules$pixi_DOT_js$lib$index=shadow.js.require("module$node_modules$pixi_DOT_js$lib$index", {});
tetris.scenes.gameplay.game_view.create_board = (function tetris$scenes$gameplay$game_view$create_board(p__37305){
var map__37306 = p__37305;
var map__37306__$1 = cljs.core.__destructure_map(map__37306);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37306__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37306__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37306__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37306__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var border_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37306__$1,new cljs.core.Keyword(null,"border-width","border-width",-1512605390));
var container = (new module$node_modules$pixi_DOT_js$lib$index.Container(({"label": "board"})));
var g = (new module$node_modules$pixi_DOT_js$lib$index.Graphics(({"label": "board"})));
var G__37308_37348 = g;
G__37308_37348.rect((0),(0),width,height);

G__37308_37348.fill(({"color": (1118481)}));

G__37308_37348.stroke(({"width": border_width, "color": (15658734)}));


(g.alpha = (1));

container.position.set(x,y);

container.addChild(g);

return container;
});
tetris.scenes.gameplay.game_view.create = (function tetris$scenes$gameplay$game_view$create(scene,view_state){
var game_view = (new module$node_modules$pixi_DOT_js$lib$index.Container(({"label": "game-view", "x": cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(view_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"x","x",2099068185)], null)), "y": cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(view_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"y","y",-1757859776)], null))})));
var board = tetris.scenes.gameplay.game_view.create_board(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(view_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"board","board",-1907017633)], null)));
game_view.addChild(board);

scene.addChild(game_view);

return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"container","container",-1736937707),game_view,new cljs.core.Keyword(null,"board","board",-1907017633),board,new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"piece-cell-textures","piece-cell-textures",754648682),tetris.scenes.gameplay.piece.create_piece_cell_textures(new cljs.core.Keyword(null,"piece-style","piece-style",-1354956371).cljs$core$IFn$_invoke$arity$1(view_state)),new cljs.core.Keyword(null,"current","current",-1088038603),null,new cljs.core.Keyword(null,"ghost","ghost",-1531157576),null,new cljs.core.Keyword(null,"hold","hold",-1621118005),null,new cljs.core.Keyword(null,"next-queue","next-queue",-689213061),cljs.core.PersistentVector.EMPTY], null);
});
tetris.scenes.gameplay.game_view.add_piece_cell = (function tetris$scenes$gameplay$game_view$add_piece_cell(view,state){
var cell_size = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287)], null));
var sprite = tetris.scenes.gameplay.piece.create_piece_cell_sprite(cell_size);
return new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).addChild(sprite);
});
tetris.scenes.gameplay.game_view.add_piece = (function tetris$scenes$gameplay$game_view$add_piece(view,state,cell_count){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (_){
return tetris.scenes.gameplay.game_view.add_piece_cell(view,state);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cell_count)));
});
tetris.scenes.gameplay.game_view.render_piece_BANG_ = (function tetris$scenes$gameplay$game_view$render_piece_BANG_(view,display_piece,piece_state){
var seq__37312 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,display_piece,new cljs.core.Keyword(null,"cells","cells",-985166822).cljs$core$IFn$_invoke$arity$1(piece_state)));
var chunk__37313 = null;
var count__37314 = (0);
var i__37315 = (0);
while(true){
if((i__37315 < count__37314)){
var vec__37322 = chunk__37313.cljs$core$IIndexed$_nth$arity$2(null,i__37315);
var cell_sprite = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37322,(0),null);
var cell_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37322,(1),null);
(cell_sprite.texture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece-cell-textures","piece-cell-textures",754648682).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"color-index","color-index",560460581).cljs$core$IFn$_invoke$arity$1(piece_state)));

(cell_sprite.visible = new cljs.core.Keyword(null,"visible","visible",-1024216805).cljs$core$IFn$_invoke$arity$1(piece_state));

cell_sprite.position.set(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell_pos),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell_pos));


var G__37351 = seq__37312;
var G__37352 = chunk__37313;
var G__37353 = count__37314;
var G__37354 = (i__37315 + (1));
seq__37312 = G__37351;
chunk__37313 = G__37352;
count__37314 = G__37353;
i__37315 = G__37354;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__37312);
if(temp__5825__auto__){
var seq__37312__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37312__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__37312__$1);
var G__37355 = cljs.core.chunk_rest(seq__37312__$1);
var G__37356 = c__5694__auto__;
var G__37357 = cljs.core.count(c__5694__auto__);
var G__37358 = (0);
seq__37312 = G__37355;
chunk__37313 = G__37356;
count__37314 = G__37357;
i__37315 = G__37358;
continue;
} else {
var vec__37326 = cljs.core.first(seq__37312__$1);
var cell_sprite = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37326,(0),null);
var cell_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37326,(1),null);
(cell_sprite.texture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece-cell-textures","piece-cell-textures",754648682).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"color-index","color-index",560460581).cljs$core$IFn$_invoke$arity$1(piece_state)));

(cell_sprite.visible = new cljs.core.Keyword(null,"visible","visible",-1024216805).cljs$core$IFn$_invoke$arity$1(piece_state));

cell_sprite.position.set(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell_pos),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell_pos));


var G__37359 = cljs.core.next(seq__37312__$1);
var G__37360 = null;
var G__37361 = (0);
var G__37362 = (0);
seq__37312 = G__37359;
chunk__37313 = G__37360;
count__37314 = G__37361;
i__37315 = G__37362;
continue;
}
} else {
return null;
}
}
break;
}
});
tetris.scenes.gameplay.game_view.render_BANG_ = (function tetris$scenes$gameplay$game_view$render_BANG_(view,state,game_state){
var piece_cell_count = cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"cells","cells",-985166822)], null)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"ghost-enabled?","ghost-enabled?",-261151779).cljs$core$IFn$_invoke$arity$1(game_state))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"ghost","ghost",-1531157576).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc,new cljs.core.Keyword(null,"ghost","ghost",-1531157576),tetris.scenes.gameplay.game_view.add_piece(view,state,piece_cell_count));
}

tetris.scenes.gameplay.game_view.render_piece_BANG_(view,new cljs.core.Keyword(null,"ghost","ghost",-1531157576).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"ghost","ghost",-1531157576).cljs$core$IFn$_invoke$arity$1(state));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc,new cljs.core.Keyword(null,"current","current",-1088038603),tetris.scenes.gameplay.game_view.add_piece(view,state,piece_cell_count));
}

tetris.scenes.gameplay.game_view.render_piece_BANG_(view,new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(state));

var state_cell_ids = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(state)));
var view_cell_ids = cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view))));
var cell_ids_to_remove = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(view_cell_ids,state_cell_ids);
var seq__37329_37363 = cljs.core.seq(cell_ids_to_remove);
var chunk__37330_37364 = null;
var count__37331_37365 = (0);
var i__37332_37366 = (0);
while(true){
if((i__37332_37366 < count__37331_37365)){
var id_37367 = chunk__37330_37364.cljs$core$IIndexed$_nth$arity$2(null,i__37332_37366);
var temp__5825__auto___37368 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),id_37367], null));
if(cljs.core.truth_(temp__5825__auto___37368)){
var cell_sprite_37369 = temp__5825__auto___37368;
new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).removeChild(cell_sprite_37369);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(view,cljs.core.update,new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id_37367], 0));
} else {
}


var G__37370 = seq__37329_37363;
var G__37371 = chunk__37330_37364;
var G__37372 = count__37331_37365;
var G__37373 = (i__37332_37366 + (1));
seq__37329_37363 = G__37370;
chunk__37330_37364 = G__37371;
count__37331_37365 = G__37372;
i__37332_37366 = G__37373;
continue;
} else {
var temp__5825__auto___37374 = cljs.core.seq(seq__37329_37363);
if(temp__5825__auto___37374){
var seq__37329_37375__$1 = temp__5825__auto___37374;
if(cljs.core.chunked_seq_QMARK_(seq__37329_37375__$1)){
var c__5694__auto___37376 = cljs.core.chunk_first(seq__37329_37375__$1);
var G__37377 = cljs.core.chunk_rest(seq__37329_37375__$1);
var G__37378 = c__5694__auto___37376;
var G__37379 = cljs.core.count(c__5694__auto___37376);
var G__37380 = (0);
seq__37329_37363 = G__37377;
chunk__37330_37364 = G__37378;
count__37331_37365 = G__37379;
i__37332_37366 = G__37380;
continue;
} else {
var id_37381 = cljs.core.first(seq__37329_37375__$1);
var temp__5825__auto___37382__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),id_37381], null));
if(cljs.core.truth_(temp__5825__auto___37382__$1)){
var cell_sprite_37383 = temp__5825__auto___37382__$1;
new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).removeChild(cell_sprite_37383);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(view,cljs.core.update,new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id_37381], 0));
} else {
}


var G__37384 = cljs.core.next(seq__37329_37375__$1);
var G__37385 = null;
var G__37386 = (0);
var G__37387 = (0);
seq__37329_37363 = G__37384;
chunk__37330_37364 = G__37385;
count__37331_37365 = G__37386;
i__37332_37366 = G__37387;
continue;
}
} else {
}
}
break;
}

var seq__37340 = cljs.core.seq(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(state));
var chunk__37341 = null;
var count__37342 = (0);
var i__37343 = (0);
while(true){
if((i__37343 < count__37342)){
var cell = chunk__37341.cljs$core$IIndexed$_nth$arity$2(null,i__37343);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)], null),tetris.scenes.gameplay.game_view.add_piece_cell(view,state));
}

var temp__5825__auto___37392 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)], null));
if(cljs.core.truth_(temp__5825__auto___37392)){
var cell_sprite_37393 = temp__5825__auto___37392;
(cell_sprite_37393.texture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece-cell-textures","piece-cell-textures",754648682).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"color-index","color-index",560460581).cljs$core$IFn$_invoke$arity$1(cell)));

cell_sprite_37393.position.set(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell));
} else {
}


var G__37394 = seq__37340;
var G__37395 = chunk__37341;
var G__37396 = count__37342;
var G__37397 = (i__37343 + (1));
seq__37340 = G__37394;
chunk__37341 = G__37395;
count__37342 = G__37396;
i__37343 = G__37397;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__37340);
if(temp__5825__auto__){
var seq__37340__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37340__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__37340__$1);
var G__37401 = cljs.core.chunk_rest(seq__37340__$1);
var G__37402 = c__5694__auto__;
var G__37403 = cljs.core.count(c__5694__auto__);
var G__37404 = (0);
seq__37340 = G__37401;
chunk__37341 = G__37402;
count__37342 = G__37403;
i__37343 = G__37404;
continue;
} else {
var cell = cljs.core.first(seq__37340__$1);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)], null),tetris.scenes.gameplay.game_view.add_piece_cell(view,state));
}

var temp__5825__auto___37405__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)], null));
if(cljs.core.truth_(temp__5825__auto___37405__$1)){
var cell_sprite_37406 = temp__5825__auto___37405__$1;
(cell_sprite_37406.texture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece-cell-textures","piece-cell-textures",754648682).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"color-index","color-index",560460581).cljs$core$IFn$_invoke$arity$1(cell)));

cell_sprite_37406.position.set(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell));
} else {
}


var G__37407 = cljs.core.next(seq__37340__$1);
var G__37408 = null;
var G__37409 = (0);
var G__37410 = (0);
seq__37340 = G__37407;
chunk__37341 = G__37408;
count__37342 = G__37409;
i__37343 = G__37410;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=tetris.scenes.gameplay.game_view.js.map
