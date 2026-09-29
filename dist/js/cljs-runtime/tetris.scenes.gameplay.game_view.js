goog.provide('tetris.scenes.gameplay.game_view');
var module$node_modules$$tweenjs$tween_js$dist$tween_cjs=shadow.js.require("module$node_modules$$tweenjs$tween_js$dist$tween_cjs", {});
var module$node_modules$pixi_DOT_js$lib$index=shadow.js.require("module$node_modules$pixi_DOT_js$lib$index", {});
tetris.scenes.gameplay.game_view.board_bounce_dx_max = (40);
tetris.scenes.gameplay.game_view.board_bounce_dy_max = (10);
tetris.scenes.gameplay.game_view.create_board = (function tetris$scenes$gameplay$game_view$create_board(p__38530){
var map__38531 = p__38530;
var map__38531__$1 = cljs.core.__destructure_map(map__38531);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38531__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38531__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38531__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38531__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var border_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38531__$1,new cljs.core.Keyword(null,"border-width","border-width",-1512605390));
var container = (new module$node_modules$pixi_DOT_js$lib$index.Container(({"label": "board"})));
var g = (new module$node_modules$pixi_DOT_js$lib$index.Graphics(({"label": "board"})));
var G__38532_38603 = g;
G__38532_38603.rect((0),(0),width,height);

G__38532_38603.fill(({"color": (1118481)}));

G__38532_38603.stroke(({"width": border_width, "color": (15658734)}));


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

return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"tweens","tweens",-1927735551),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"piece-cell-textures","piece-cell-textures",754648682),new cljs.core.Keyword(null,"hold","hold",-1621118005),new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"container","container",-1736937707),new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"next-queue","next-queue",-689213061),new cljs.core.Keyword(null,"board","board",-1907017633)],[cljs.core.PersistentArrayMap.EMPTY,layout,tetris.scenes.gameplay.piece.create_piece_cell_textures(new cljs.core.Keyword(null,"piece-style","piece-style",-1354956371).cljs$core$IFn$_invoke$arity$1(options)),null,null,game_view,cljs.core.PersistentArrayMap.EMPTY,null,null,board]);
});
tetris.scenes.gameplay.game_view.add_piece_cell = (function tetris$scenes$gameplay$game_view$add_piece_cell(container,cell_size){
var sprite = tetris.scenes.gameplay.piece.create_piece_cell_sprite(cell_size);
return container.addChild(sprite);
});
tetris.scenes.gameplay.game_view.add_piece = (function tetris$scenes$gameplay$game_view$add_piece(container,piece,cell_size){
return cljs.core.vec((function (){var iter__5649__auto__ = (function tetris$scenes$gameplay$game_view$add_piece_$_iter__38533(s__38534){
return (new cljs.core.LazySeq(null,(function (){
var s__38534__$1 = s__38534;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__38534__$1);
if(temp__5825__auto__){
var s__38534__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38534__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__38534__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__38536 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__38535 = (0);
while(true){
if((i__38535 < size__5648__auto__)){
var _ = cljs.core._nth(c__5647__auto__,i__38535);
cljs.core.chunk_append(b__38536,tetris.scenes.gameplay.game_view.add_piece_cell(container,cell_size));

var G__38604 = (i__38535 + (1));
i__38535 = G__38604;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38536),tetris$scenes$gameplay$game_view$add_piece_$_iter__38533(cljs.core.chunk_rest(s__38534__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38536),null);
}
} else {
var _ = cljs.core.first(s__38534__$2);
return cljs.core.cons(tetris.scenes.gameplay.game_view.add_piece_cell(container,cell_size),tetris$scenes$gameplay$game_view$add_piece_$_iter__38533(cljs.core.rest(s__38534__$2)));
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
var len__5897__auto___38605 = arguments.length;
var i__5898__auto___38606 = (0);
while(true){
if((i__5898__auto___38606 < len__5897__auto___38605)){
args__5903__auto__.push((arguments[i__5898__auto___38606]));

var G__38607 = (i__5898__auto___38606 + (1));
i__5898__auto___38606 = G__38607;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((3) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((3)),(0),null)):null);
return tetris.scenes.gameplay.game_view.render_piece_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5904__auto__);
});

(tetris.scenes.gameplay.game_view.render_piece_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (view,display_piece,piece_state,ghost_QMARK_){
var seq__38541 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,display_piece,new cljs.core.Keyword(null,"cells","cells",-985166822).cljs$core$IFn$_invoke$arity$1(piece_state)));
var chunk__38542 = null;
var count__38543 = (0);
var i__38544 = (0);
while(true){
if((i__38544 < count__38543)){
var vec__38551 = chunk__38542.cljs$core$IIndexed$_nth$arity$2(null,i__38544);
var cell_sprite = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38551,(0),null);
var cell_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38551,(1),null);
(cell_sprite.texture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece-cell-textures","piece-cell-textures",754648682).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"color-index","color-index",560460581).cljs$core$IFn$_invoke$arity$1(piece_state)));

(cell_sprite.visible = new cljs.core.Keyword(null,"visible","visible",-1024216805).cljs$core$IFn$_invoke$arity$1(piece_state));

(cell_sprite.alpha = (cljs.core.truth_(ghost_QMARK_)?0.2:(1)));

cell_sprite.position.set(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell_pos),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell_pos));


var G__38611 = seq__38541;
var G__38612 = chunk__38542;
var G__38613 = count__38543;
var G__38614 = (i__38544 + (1));
seq__38541 = G__38611;
chunk__38542 = G__38612;
count__38543 = G__38613;
i__38544 = G__38614;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__38541);
if(temp__5825__auto__){
var seq__38541__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38541__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__38541__$1);
var G__38616 = cljs.core.chunk_rest(seq__38541__$1);
var G__38617 = c__5694__auto__;
var G__38618 = cljs.core.count(c__5694__auto__);
var G__38619 = (0);
seq__38541 = G__38616;
chunk__38542 = G__38617;
count__38543 = G__38618;
i__38544 = G__38619;
continue;
} else {
var vec__38554 = cljs.core.first(seq__38541__$1);
var cell_sprite = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38554,(0),null);
var cell_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38554,(1),null);
(cell_sprite.texture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece-cell-textures","piece-cell-textures",754648682).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"color-index","color-index",560460581).cljs$core$IFn$_invoke$arity$1(piece_state)));

(cell_sprite.visible = new cljs.core.Keyword(null,"visible","visible",-1024216805).cljs$core$IFn$_invoke$arity$1(piece_state));

(cell_sprite.alpha = (cljs.core.truth_(ghost_QMARK_)?0.2:(1)));

cell_sprite.position.set(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell_pos),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell_pos));


var G__38620 = cljs.core.next(seq__38541__$1);
var G__38621 = null;
var G__38622 = (0);
var G__38623 = (0);
seq__38541 = G__38620;
chunk__38542 = G__38621;
count__38543 = G__38622;
i__38544 = G__38623;
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
(tetris.scenes.gameplay.game_view.render_piece_BANG_.cljs$lang$applyTo = (function (seq38537){
var G__38538 = cljs.core.first(seq38537);
var seq38537__$1 = cljs.core.next(seq38537);
var G__38539 = cljs.core.first(seq38537__$1);
var seq38537__$2 = cljs.core.next(seq38537__$1);
var G__38540 = cljs.core.first(seq38537__$2);
var seq38537__$3 = cljs.core.next(seq38537__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38538,G__38539,G__38540,seq38537__$3);
}));

tetris.scenes.gameplay.game_view.update_tweens = (function tetris$scenes$gameplay$game_view$update_tweens(view){
var seq__38557 = cljs.core.seq(new cljs.core.Keyword(null,"tweens","tweens",-1927735551).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)));
var chunk__38558 = null;
var count__38559 = (0);
var i__38560 = (0);
while(true){
if((i__38560 < count__38559)){
var vec__38567 = chunk__38558.cljs$core$IIndexed$_nth$arity$2(null,i__38560);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38567,(0),null);
var tween = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38567,(1),null);
if(cljs.core.truth_(tween)){
tween.update();
} else {
}


var G__38624 = seq__38557;
var G__38625 = chunk__38558;
var G__38626 = count__38559;
var G__38627 = (i__38560 + (1));
seq__38557 = G__38624;
chunk__38558 = G__38625;
count__38559 = G__38626;
i__38560 = G__38627;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__38557);
if(temp__5825__auto__){
var seq__38557__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38557__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__38557__$1);
var G__38628 = cljs.core.chunk_rest(seq__38557__$1);
var G__38629 = c__5694__auto__;
var G__38630 = cljs.core.count(c__5694__auto__);
var G__38631 = (0);
seq__38557 = G__38628;
chunk__38558 = G__38629;
count__38559 = G__38630;
i__38560 = G__38631;
continue;
} else {
var vec__38570 = cljs.core.first(seq__38557__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38570,(0),null);
var tween = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38570,(1),null);
if(cljs.core.truth_(tween)){
tween.update();
} else {
}


var G__38632 = cljs.core.next(seq__38557__$1);
var G__38633 = null;
var G__38634 = (0);
var G__38635 = (0);
seq__38557 = G__38632;
chunk__38558 = G__38633;
count__38559 = G__38634;
i__38560 = G__38635;
continue;
}
} else {
return null;
}
}
break;
}
});
tetris.scenes.gameplay.game_view.stop_tween = (function tetris$scenes$gameplay$game_view$stop_tween(view,key){
var temp__5825__auto__ = (function (){var G__38573 = new cljs.core.Keyword(null,"tweens","tweens",-1927735551).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view));
return (key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(G__38573) : key.call(null,G__38573));
})();
if(cljs.core.truth_(temp__5825__auto__)){
var tween = temp__5825__auto__;
tween.stop();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweens","tweens",-1927735551),key], null),null);
} else {
return null;
}
});
tetris.scenes.gameplay.game_view.render_board_bounce_BANG_ = (function tetris$scenes$gameplay$game_view$render_board_bounce_BANG_(view,game_state,input){
var temp__5825__auto___38636 = tetris.core.game.find_event(new cljs.core.Keyword(null,"shift-blocked","shift-blocked",1139549631),new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(game_state));
if(cljs.core.truth_(temp__5825__auto___38636)){
var event_38637 = temp__5825__auto___38636;
tetris.scenes.gameplay.game_view.stop_tween(view,new cljs.core.Keyword(null,"board-bounce","board-bounce",1775114642));

var px_38638 = (new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot.x - (new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(event_38637) * (3)));
if((cljs.core.abs(px_38638) <= tetris.scenes.gameplay.game_view.board_bounce_dx_max)){
(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot.x = px_38638);
} else {
}
} else {
}

if(cljs.core.truth_(tetris.core.game.find_event(new cljs.core.Keyword(null,"down-blocked","down-blocked",-1184696185),new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(game_state)))){
tetris.scenes.gameplay.game_view.stop_tween(view,new cljs.core.Keyword(null,"board-bounce","board-bounce",1775114642));

var py_38639 = (new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot.y - (1));
if((cljs.core.abs(py_38639) <= tetris.scenes.gameplay.game_view.board_bounce_dy_max)){
(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot.y = py_38639);
} else {
}
} else {
}

if(cljs.core.truth_(tetris.core.game.find_event(new cljs.core.Keyword(null,"hard-dropped","hard-dropped",2061168106),new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(game_state)))){
tetris.scenes.gameplay.game_view.stop_tween(view,new cljs.core.Keyword(null,"board-bounce","board-bounce",1775114642));

var py_38640 = (new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot.y - (5));
if((cljs.core.abs(py_38640) <= tetris.scenes.gameplay.game_view.board_bounce_dy_max)){
(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot.y = py_38640);
} else {
}
} else {
}

if(((cljs.core.empty_QMARK_(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"move-left","move-left",-271562811),null,new cljs.core.Keyword(null,"soft-drop","soft-drop",-123150289),null,new cljs.core.Keyword(null,"move-right","move-right",1661359569),null], null), null),cljs.core.set(new cljs.core.Keyword(null,"pressed-buttons","pressed-buttons",1426560090).cljs$core$IFn$_invoke$arity$1(input))))) && (((cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweens","tweens",-1927735551),new cljs.core.Keyword(null,"board-bounce","board-bounce",1775114642)], null)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot.x,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot.y], null))))))){
var tween = (function (){var G__38574 = (new module$node_modules$$tweenjs$tween_js$dist$tween_cjs.Tween(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot));
G__38574.to(({"x": (0), "y": (0)}),(167));

G__38574.easing(module$node_modules$$tweenjs$tween_js$dist$tween_cjs.Easing.Quadratic.Out);

G__38574.start();

G__38574.onComplete((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweens","tweens",-1927735551),new cljs.core.Keyword(null,"board-bounce","board-bounce",1775114642)], null),null);
}));

G__38574.onStop((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweens","tweens",-1927735551),new cljs.core.Keyword(null,"board-bounce","board-bounce",1775114642)], null),null);
}));

return G__38574;
})();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweens","tweens",-1927735551),new cljs.core.Keyword(null,"board-bounce","board-bounce",1775114642)], null),tween);
} else {
return null;
}
});
tetris.scenes.gameplay.game_view.render_BANG_ = (function tetris$scenes$gameplay$game_view$render_BANG_(view,game_state,input){
var data = tetris.scenes.gameplay.game_view_data.render_data(new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),game_state);
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hold","hold",-1621118005),new cljs.core.Keyword(null,"cells","cells",-985166822)], null)))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"hold","hold",-1621118005).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)))){
} else {
var piece_38642 = tetris.scenes.gameplay.game_view.add_piece(new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"hold","hold",-1621118005).cljs$core$IFn$_invoke$arity$1(data),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"hold","hold",-1621118005),new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc,new cljs.core.Keyword(null,"hold","hold",-1621118005),piece_38642);
}

tetris.scenes.gameplay.game_view.render_piece_BANG_(view,new cljs.core.Keyword(null,"hold","hold",-1621118005).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"hold","hold",-1621118005).cljs$core$IFn$_invoke$arity$1(data));
} else {
}

if(cljs.core.seq(new cljs.core.Keyword(null,"next-queue","next-queue",-689213061).cljs$core$IFn$_invoke$arity$1(data))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"next-queue","next-queue",-689213061).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)))){
} else {
var display_pieces_38643 = cljs.core.vec((function (){var iter__5649__auto__ = (function tetris$scenes$gameplay$game_view$render_BANG__$_iter__38575(s__38576){
return (new cljs.core.LazySeq(null,(function (){
var s__38576__$1 = s__38576;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__38576__$1);
if(temp__5825__auto__){
var s__38576__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38576__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__38576__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__38578 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__38577 = (0);
while(true){
if((i__38577 < size__5648__auto__)){
var piece = cljs.core._nth(c__5647__auto__,i__38577);
cljs.core.chunk_append(b__38578,tetris.scenes.gameplay.game_view.add_piece(new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),piece,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287)], null))));

var G__38644 = (i__38577 + (1));
i__38577 = G__38644;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38578),tetris$scenes$gameplay$game_view$render_BANG__$_iter__38575(cljs.core.chunk_rest(s__38576__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38578),null);
}
} else {
var piece = cljs.core.first(s__38576__$2);
return cljs.core.cons(tetris.scenes.gameplay.game_view.add_piece(new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),piece,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287)], null))),tetris$scenes$gameplay$game_view$render_BANG__$_iter__38575(cljs.core.rest(s__38576__$2)));
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc,new cljs.core.Keyword(null,"next-queue","next-queue",-689213061),display_pieces_38643);
}

var seq__38579_38645 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,new cljs.core.Keyword(null,"next-queue","next-queue",-689213061).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"next-queue","next-queue",-689213061).cljs$core$IFn$_invoke$arity$1(data)));
var chunk__38580_38646 = null;
var count__38581_38647 = (0);
var i__38582_38648 = (0);
while(true){
if((i__38582_38648 < count__38581_38647)){
var vec__38589_38649 = chunk__38580_38646.cljs$core$IIndexed$_nth$arity$2(null,i__38582_38648);
var piece_v_38650 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38589_38649,(0),null);
var piece_d_38651 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38589_38649,(1),null);
tetris.scenes.gameplay.game_view.render_piece_BANG_(view,piece_v_38650,piece_d_38651);


var G__38652 = seq__38579_38645;
var G__38653 = chunk__38580_38646;
var G__38654 = count__38581_38647;
var G__38655 = (i__38582_38648 + (1));
seq__38579_38645 = G__38652;
chunk__38580_38646 = G__38653;
count__38581_38647 = G__38654;
i__38582_38648 = G__38655;
continue;
} else {
var temp__5825__auto___38656 = cljs.core.seq(seq__38579_38645);
if(temp__5825__auto___38656){
var seq__38579_38657__$1 = temp__5825__auto___38656;
if(cljs.core.chunked_seq_QMARK_(seq__38579_38657__$1)){
var c__5694__auto___38658 = cljs.core.chunk_first(seq__38579_38657__$1);
var G__38659 = cljs.core.chunk_rest(seq__38579_38657__$1);
var G__38660 = c__5694__auto___38658;
var G__38661 = cljs.core.count(c__5694__auto___38658);
var G__38662 = (0);
seq__38579_38645 = G__38659;
chunk__38580_38646 = G__38660;
count__38581_38647 = G__38661;
i__38582_38648 = G__38662;
continue;
} else {
var vec__38592_38663 = cljs.core.first(seq__38579_38657__$1);
var piece_v_38664 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38592_38663,(0),null);
var piece_d_38665 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38592_38663,(1),null);
tetris.scenes.gameplay.game_view.render_piece_BANG_(view,piece_v_38664,piece_d_38665);


var G__38666 = cljs.core.next(seq__38579_38657__$1);
var G__38667 = null;
var G__38668 = (0);
var G__38669 = (0);
seq__38579_38645 = G__38666;
chunk__38580_38646 = G__38667;
count__38581_38647 = G__38668;
i__38582_38648 = G__38669;
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

var state_cell_ids_38670 = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(data)));
var view_cell_ids_38671 = cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view))));
var cell_ids_to_remove_38672 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(view_cell_ids_38671,state_cell_ids_38670);
var seq__38595_38673 = cljs.core.seq(cell_ids_to_remove_38672);
var chunk__38596_38674 = null;
var count__38597_38675 = (0);
var i__38598_38676 = (0);
while(true){
if((i__38598_38676 < count__38597_38675)){
var id_38677 = chunk__38596_38674.cljs$core$IIndexed$_nth$arity$2(null,i__38598_38676);
var temp__5825__auto___38678 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),id_38677], null));
if(cljs.core.truth_(temp__5825__auto___38678)){
var cell_sprite_38679 = temp__5825__auto___38678;
new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).removeChild(cell_sprite_38679);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(view,cljs.core.update,new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id_38677], 0));
} else {
}


var G__38680 = seq__38595_38673;
var G__38681 = chunk__38596_38674;
var G__38682 = count__38597_38675;
var G__38683 = (i__38598_38676 + (1));
seq__38595_38673 = G__38680;
chunk__38596_38674 = G__38681;
count__38597_38675 = G__38682;
i__38598_38676 = G__38683;
continue;
} else {
var temp__5825__auto___38684 = cljs.core.seq(seq__38595_38673);
if(temp__5825__auto___38684){
var seq__38595_38685__$1 = temp__5825__auto___38684;
if(cljs.core.chunked_seq_QMARK_(seq__38595_38685__$1)){
var c__5694__auto___38686 = cljs.core.chunk_first(seq__38595_38685__$1);
var G__38687 = cljs.core.chunk_rest(seq__38595_38685__$1);
var G__38688 = c__5694__auto___38686;
var G__38689 = cljs.core.count(c__5694__auto___38686);
var G__38690 = (0);
seq__38595_38673 = G__38687;
chunk__38596_38674 = G__38688;
count__38597_38675 = G__38689;
i__38598_38676 = G__38690;
continue;
} else {
var id_38691 = cljs.core.first(seq__38595_38685__$1);
var temp__5825__auto___38692__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),id_38691], null));
if(cljs.core.truth_(temp__5825__auto___38692__$1)){
var cell_sprite_38693 = temp__5825__auto___38692__$1;
new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).removeChild(cell_sprite_38693);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(view,cljs.core.update,new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id_38691], 0));
} else {
}


var G__38694 = cljs.core.next(seq__38595_38685__$1);
var G__38695 = null;
var G__38696 = (0);
var G__38697 = (0);
seq__38595_38673 = G__38694;
chunk__38596_38674 = G__38695;
count__38597_38675 = G__38696;
i__38598_38676 = G__38697;
continue;
}
} else {
}
}
break;
}

var seq__38599_38698 = cljs.core.seq(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(data));
var chunk__38600_38699 = null;
var count__38601_38700 = (0);
var i__38602_38701 = (0);
while(true){
if((i__38602_38701 < count__38601_38700)){
var cell_38702 = chunk__38600_38699.cljs$core$IIndexed$_nth$arity$2(null,i__38602_38701);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell_38702)))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell_38702)], null),tetris.scenes.gameplay.game_view.add_board_piece_cell(cljs.core.deref(view)));
}

var temp__5825__auto___38703 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell_38702)], null));
if(cljs.core.truth_(temp__5825__auto___38703)){
var cell_sprite_38704 = temp__5825__auto___38703;
(cell_sprite_38704.texture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece-cell-textures","piece-cell-textures",754648682).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"color-index","color-index",560460581).cljs$core$IFn$_invoke$arity$1(cell_38702)));

cell_sprite_38704.position.set(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell_38702),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell_38702));
} else {
}


var G__38705 = seq__38599_38698;
var G__38706 = chunk__38600_38699;
var G__38707 = count__38601_38700;
var G__38708 = (i__38602_38701 + (1));
seq__38599_38698 = G__38705;
chunk__38600_38699 = G__38706;
count__38601_38700 = G__38707;
i__38602_38701 = G__38708;
continue;
} else {
var temp__5825__auto___38709 = cljs.core.seq(seq__38599_38698);
if(temp__5825__auto___38709){
var seq__38599_38710__$1 = temp__5825__auto___38709;
if(cljs.core.chunked_seq_QMARK_(seq__38599_38710__$1)){
var c__5694__auto___38711 = cljs.core.chunk_first(seq__38599_38710__$1);
var G__38712 = cljs.core.chunk_rest(seq__38599_38710__$1);
var G__38713 = c__5694__auto___38711;
var G__38714 = cljs.core.count(c__5694__auto___38711);
var G__38715 = (0);
seq__38599_38698 = G__38712;
chunk__38600_38699 = G__38713;
count__38601_38700 = G__38714;
i__38602_38701 = G__38715;
continue;
} else {
var cell_38716 = cljs.core.first(seq__38599_38710__$1);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell_38716)))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell_38716)], null),tetris.scenes.gameplay.game_view.add_board_piece_cell(cljs.core.deref(view)));
}

var temp__5825__auto___38717__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell_38716)], null));
if(cljs.core.truth_(temp__5825__auto___38717__$1)){
var cell_sprite_38718 = temp__5825__auto___38717__$1;
(cell_sprite_38718.texture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece-cell-textures","piece-cell-textures",754648682).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"color-index","color-index",560460581).cljs$core$IFn$_invoke$arity$1(cell_38716)));

cell_sprite_38718.position.set(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell_38716),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell_38716));
} else {
}


var G__38719 = cljs.core.next(seq__38599_38710__$1);
var G__38720 = null;
var G__38721 = (0);
var G__38722 = (0);
seq__38599_38698 = G__38719;
chunk__38600_38699 = G__38720;
count__38601_38700 = G__38721;
i__38602_38701 = G__38722;
continue;
}
} else {
}
}
break;
}

tetris.scenes.gameplay.game_view.render_board_bounce_BANG_(view,game_state,input);

return tetris.scenes.gameplay.game_view.update_tweens(view);
});

//# sourceMappingURL=tetris.scenes.gameplay.game_view.js.map
