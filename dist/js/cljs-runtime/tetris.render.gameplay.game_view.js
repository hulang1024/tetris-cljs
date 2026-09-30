goog.provide('tetris.render.gameplay.game_view');
var module$node_modules$$tweenjs$tween_js$dist$tween_cjs=shadow.js.require("module$node_modules$$tweenjs$tween_js$dist$tween_cjs", {});
var module$node_modules$pixi_DOT_js$lib$index=shadow.js.require("module$node_modules$pixi_DOT_js$lib$index", {});
tetris.render.gameplay.game_view.board_bounce_dx_max = (6);
tetris.render.gameplay.game_view.board_bounce_dy_max = (6);
tetris.render.gameplay.game_view.create_board = (function tetris$render$gameplay$game_view$create_board(p__39560){
var map__39561 = p__39560;
var map__39561__$1 = cljs.core.__destructure_map(map__39561);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39561__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39561__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39561__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39561__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var border_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39561__$1,new cljs.core.Keyword(null,"border-width","border-width",-1512605390));
var container = (new module$node_modules$pixi_DOT_js$lib$index.Container(({"label": "board"})));
var g = (new module$node_modules$pixi_DOT_js$lib$index.Graphics(({"label": "board"})));
var G__39563_39657 = g;
G__39563_39657.moveTo((0),(0));

G__39563_39657.lineTo((0),height);

G__39563_39657.lineTo(width,height);

G__39563_39657.lineTo(width,(0));

G__39563_39657.stroke(({"width": border_width, "color": (13421772)}));

G__39563_39657.rect((4),(4),(width - (8)),(height - (9)));

G__39563_39657.fill(({"color": (0), "alpha": 0.2}));


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
return cljs.core.vec((function (){var iter__5649__auto__ = (function tetris$render$gameplay$game_view$add_piece_$_iter__39568(s__39569){
return (new cljs.core.LazySeq(null,(function (){
var s__39569__$1 = s__39569;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__39569__$1);
if(temp__5825__auto__){
var s__39569__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__39569__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__39569__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__39571 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__39570 = (0);
while(true){
if((i__39570 < size__5648__auto__)){
var _ = cljs.core._nth(c__5647__auto__,i__39570);
cljs.core.chunk_append(b__39571,tetris.render.gameplay.game_view.add_piece_cell(container,cell_size));

var G__39658 = (i__39570 + (1));
i__39570 = G__39658;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39571),tetris$render$gameplay$game_view$add_piece_$_iter__39568(cljs.core.chunk_rest(s__39569__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39571),null);
}
} else {
var _ = cljs.core.first(s__39569__$2);
return cljs.core.cons(tetris.render.gameplay.game_view.add_piece_cell(container,cell_size),tetris$render$gameplay$game_view$add_piece_$_iter__39568(cljs.core.rest(s__39569__$2)));
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
var len__5897__auto___39659 = arguments.length;
var i__5898__auto___39660 = (0);
while(true){
if((i__5898__auto___39660 < len__5897__auto___39659)){
args__5903__auto__.push((arguments[i__5898__auto___39660]));

var G__39661 = (i__5898__auto___39660 + (1));
i__5898__auto___39660 = G__39661;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((3) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((3)),(0),null)):null);
return tetris.render.gameplay.game_view.render_piece_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5904__auto__);
});

(tetris.render.gameplay.game_view.render_piece_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (view,display_piece,piece_state,ghost_QMARK_){
var seq__39577 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,display_piece,new cljs.core.Keyword(null,"cells","cells",-985166822).cljs$core$IFn$_invoke$arity$1(piece_state)));
var chunk__39578 = null;
var count__39579 = (0);
var i__39580 = (0);
while(true){
if((i__39580 < count__39579)){
var vec__39587 = chunk__39578.cljs$core$IIndexed$_nth$arity$2(null,i__39580);
var cell_sprite = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39587,(0),null);
var cell_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39587,(1),null);
(cell_sprite.texture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece-cell-textures","piece-cell-textures",754648682).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"color-index","color-index",560460581).cljs$core$IFn$_invoke$arity$1(piece_state)));

(cell_sprite.visible = new cljs.core.Keyword(null,"visible","visible",-1024216805).cljs$core$IFn$_invoke$arity$1(piece_state));

(cell_sprite.alpha = (cljs.core.truth_(ghost_QMARK_)?0.2:(1)));

cell_sprite.position.set(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell_pos),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell_pos));


var G__39662 = seq__39577;
var G__39663 = chunk__39578;
var G__39664 = count__39579;
var G__39665 = (i__39580 + (1));
seq__39577 = G__39662;
chunk__39578 = G__39663;
count__39579 = G__39664;
i__39580 = G__39665;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__39577);
if(temp__5825__auto__){
var seq__39577__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39577__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__39577__$1);
var G__39666 = cljs.core.chunk_rest(seq__39577__$1);
var G__39667 = c__5694__auto__;
var G__39668 = cljs.core.count(c__5694__auto__);
var G__39669 = (0);
seq__39577 = G__39666;
chunk__39578 = G__39667;
count__39579 = G__39668;
i__39580 = G__39669;
continue;
} else {
var vec__39590 = cljs.core.first(seq__39577__$1);
var cell_sprite = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39590,(0),null);
var cell_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39590,(1),null);
(cell_sprite.texture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece-cell-textures","piece-cell-textures",754648682).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"color-index","color-index",560460581).cljs$core$IFn$_invoke$arity$1(piece_state)));

(cell_sprite.visible = new cljs.core.Keyword(null,"visible","visible",-1024216805).cljs$core$IFn$_invoke$arity$1(piece_state));

(cell_sprite.alpha = (cljs.core.truth_(ghost_QMARK_)?0.2:(1)));

cell_sprite.position.set(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell_pos),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell_pos));


var G__39670 = cljs.core.next(seq__39577__$1);
var G__39671 = null;
var G__39672 = (0);
var G__39673 = (0);
seq__39577 = G__39670;
chunk__39578 = G__39671;
count__39579 = G__39672;
i__39580 = G__39673;
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
(tetris.render.gameplay.game_view.render_piece_BANG_.cljs$lang$applyTo = (function (seq39573){
var G__39574 = cljs.core.first(seq39573);
var seq39573__$1 = cljs.core.next(seq39573);
var G__39575 = cljs.core.first(seq39573__$1);
var seq39573__$2 = cljs.core.next(seq39573__$1);
var G__39576 = cljs.core.first(seq39573__$2);
var seq39573__$3 = cljs.core.next(seq39573__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39574,G__39575,G__39576,seq39573__$3);
}));

tetris.render.gameplay.game_view.update_tweens = (function tetris$render$gameplay$game_view$update_tweens(view){
var seq__39593 = cljs.core.seq(new cljs.core.Keyword(null,"tweens","tweens",-1927735551).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)));
var chunk__39594 = null;
var count__39595 = (0);
var i__39596 = (0);
while(true){
if((i__39596 < count__39595)){
var vec__39603 = chunk__39594.cljs$core$IIndexed$_nth$arity$2(null,i__39596);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39603,(0),null);
var tween = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39603,(1),null);
if(cljs.core.truth_(tween)){
tween.update();
} else {
}


var G__39674 = seq__39593;
var G__39675 = chunk__39594;
var G__39676 = count__39595;
var G__39677 = (i__39596 + (1));
seq__39593 = G__39674;
chunk__39594 = G__39675;
count__39595 = G__39676;
i__39596 = G__39677;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__39593);
if(temp__5825__auto__){
var seq__39593__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39593__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__39593__$1);
var G__39678 = cljs.core.chunk_rest(seq__39593__$1);
var G__39679 = c__5694__auto__;
var G__39680 = cljs.core.count(c__5694__auto__);
var G__39681 = (0);
seq__39593 = G__39678;
chunk__39594 = G__39679;
count__39595 = G__39680;
i__39596 = G__39681;
continue;
} else {
var vec__39606 = cljs.core.first(seq__39593__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39606,(0),null);
var tween = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39606,(1),null);
if(cljs.core.truth_(tween)){
tween.update();
} else {
}


var G__39682 = cljs.core.next(seq__39593__$1);
var G__39683 = null;
var G__39684 = (0);
var G__39685 = (0);
seq__39593 = G__39682;
chunk__39594 = G__39683;
count__39595 = G__39684;
i__39596 = G__39685;
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
var G__39610 = arguments.length;
switch (G__39610) {
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
var tween = (function (){var G__39611 = (new module$node_modules$$tweenjs$tween_js$dist$tween_cjs.Tween(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot));
G__39611.to(cljs.core.clj__GT_js(to_values),(function (){var or__5162__auto__ = duration;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (344);
}
})());

G__39611.easing((function (){var or__5162__auto__ = easing;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return module$node_modules$$tweenjs$tween_js$dist$tween_cjs.Easing.Cubic.Out;
}
})());

G__39611.start();

G__39611.onComplete((function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweens","tweens",-1927735551),id], null),null);

if(cljs.core.truth_(cb)){
return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
} else {
return null;
}
}));

G__39611.onStop((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweens","tweens",-1927735551),id], null),null);
}));

return G__39611;
})();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweens","tweens",-1927735551),id], null),tween);
}
}));

(tetris.render.gameplay.game_view.start_board_bounce_tween_BANG_.cljs$lang$maxFixedArity = 6);

tetris.render.gameplay.game_view.render_board_bounce_BANG_ = (function tetris$render$gameplay$game_view$render_board_bounce_BANG_(view,game_state,input){
var seq__39613_39687 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-left","move-left",-271562811),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-right","move-right",1661359569),(1)], null)], null));
var chunk__39614_39688 = null;
var count__39615_39689 = (0);
var i__39616_39690 = (0);
while(true){
if((i__39616_39690 < count__39615_39689)){
var vec__39623_39691 = chunk__39614_39688.cljs$core$IIndexed$_nth$arity$2(null,i__39616_39690);
var button_39692 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39623_39691,(0),null);
var dir_39693 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39623_39691,(1),null);
if(cljs.core.truth_(cljs.core.some(((function (seq__39613_39687,chunk__39614_39688,count__39615_39689,i__39616_39690,vec__39623_39691,button_39692,dir_39693){
return (function (p1__39612_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__39612_SHARP_,button_39692);
});})(seq__39613_39687,chunk__39614_39688,count__39615_39689,i__39616_39690,vec__39623_39691,button_39692,dir_39693))
,new cljs.core.Keyword(null,"pressed-buttons","pressed-buttons",1426560090).cljs$core$IFn$_invoke$arity$1(input)))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"shift-blocked?","shift-blocked?",-2058728569).cljs$core$IFn$_invoke$arity$1(game_state))){
tetris.render.gameplay.game_view.stop_tween_BANG_(view,new cljs.core.Keyword(null,"board-bounce-shift","board-bounce-shift",945163307));

var px_39694 = (new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot.x - (dir_39693 * (2)));
if((cljs.core.abs(px_39694) <= tetris.render.gameplay.game_view.board_bounce_dx_max)){
(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot.x = px_39694);
} else {
}
} else {
}
} else {
tetris.render.gameplay.game_view.start_board_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$3(view,new cljs.core.Keyword(null,"board-bounce-shift","board-bounce-shift",945163307),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(0)], null));
}


var G__39695 = seq__39613_39687;
var G__39696 = chunk__39614_39688;
var G__39697 = count__39615_39689;
var G__39698 = (i__39616_39690 + (1));
seq__39613_39687 = G__39695;
chunk__39614_39688 = G__39696;
count__39615_39689 = G__39697;
i__39616_39690 = G__39698;
continue;
} else {
var temp__5825__auto___39699 = cljs.core.seq(seq__39613_39687);
if(temp__5825__auto___39699){
var seq__39613_39700__$1 = temp__5825__auto___39699;
if(cljs.core.chunked_seq_QMARK_(seq__39613_39700__$1)){
var c__5694__auto___39701 = cljs.core.chunk_first(seq__39613_39700__$1);
var G__39702 = cljs.core.chunk_rest(seq__39613_39700__$1);
var G__39703 = c__5694__auto___39701;
var G__39704 = cljs.core.count(c__5694__auto___39701);
var G__39705 = (0);
seq__39613_39687 = G__39702;
chunk__39614_39688 = G__39703;
count__39615_39689 = G__39704;
i__39616_39690 = G__39705;
continue;
} else {
var vec__39626_39706 = cljs.core.first(seq__39613_39700__$1);
var button_39707 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39626_39706,(0),null);
var dir_39708 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39626_39706,(1),null);
if(cljs.core.truth_(cljs.core.some(((function (seq__39613_39687,chunk__39614_39688,count__39615_39689,i__39616_39690,vec__39626_39706,button_39707,dir_39708,seq__39613_39700__$1,temp__5825__auto___39699){
return (function (p1__39612_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__39612_SHARP_,button_39707);
});})(seq__39613_39687,chunk__39614_39688,count__39615_39689,i__39616_39690,vec__39626_39706,button_39707,dir_39708,seq__39613_39700__$1,temp__5825__auto___39699))
,new cljs.core.Keyword(null,"pressed-buttons","pressed-buttons",1426560090).cljs$core$IFn$_invoke$arity$1(input)))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"shift-blocked?","shift-blocked?",-2058728569).cljs$core$IFn$_invoke$arity$1(game_state))){
tetris.render.gameplay.game_view.stop_tween_BANG_(view,new cljs.core.Keyword(null,"board-bounce-shift","board-bounce-shift",945163307));

var px_39709 = (new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot.x - (dir_39708 * (2)));
if((cljs.core.abs(px_39709) <= tetris.render.gameplay.game_view.board_bounce_dx_max)){
(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot.x = px_39709);
} else {
}
} else {
}
} else {
tetris.render.gameplay.game_view.start_board_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$3(view,new cljs.core.Keyword(null,"board-bounce-shift","board-bounce-shift",945163307),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(0)], null));
}


var G__39710 = cljs.core.next(seq__39613_39700__$1);
var G__39711 = null;
var G__39712 = (0);
var G__39713 = (0);
seq__39613_39687 = G__39710;
chunk__39614_39688 = G__39711;
count__39615_39689 = G__39712;
i__39616_39690 = G__39713;
continue;
}
} else {
}
}
break;
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
var piece_39714 = tetris.render.gameplay.game_view.add_piece(new cljs.core.Keyword(null,"hold-container","hold-container",872721688).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"hold","hold",-1621118005).cljs$core$IFn$_invoke$arity$1(data),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"hold","hold",-1621118005),new cljs.core.Keyword(null,"cell","cell",764245084),new cljs.core.Keyword(null,"size","size",1098693007)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc,new cljs.core.Keyword(null,"hold","hold",-1621118005),piece_39714);
}

tetris.render.gameplay.game_view.render_piece_BANG_(view,new cljs.core.Keyword(null,"hold","hold",-1621118005).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"hold","hold",-1621118005).cljs$core$IFn$_invoke$arity$1(data));
} else {
}

if(cljs.core.seq(new cljs.core.Keyword(null,"next","next",-117701485).cljs$core$IFn$_invoke$arity$1(data))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"next","next",-117701485).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)))){
} else {
var display_pieces_39715 = cljs.core.vec((function (){var iter__5649__auto__ = (function tetris$render$gameplay$game_view$render_BANG__$_iter__39629(s__39630){
return (new cljs.core.LazySeq(null,(function (){
var s__39630__$1 = s__39630;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__39630__$1);
if(temp__5825__auto__){
var s__39630__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__39630__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__39630__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__39632 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__39631 = (0);
while(true){
if((i__39631 < size__5648__auto__)){
var piece = cljs.core._nth(c__5647__auto__,i__39631);
cljs.core.chunk_append(b__39632,tetris.render.gameplay.game_view.add_piece(new cljs.core.Keyword(null,"next-container","next-container",-2082591536).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),piece,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.Keyword(null,"cell","cell",764245084),new cljs.core.Keyword(null,"size","size",1098693007)], null))));

var G__39716 = (i__39631 + (1));
i__39631 = G__39716;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39632),tetris$render$gameplay$game_view$render_BANG__$_iter__39629(cljs.core.chunk_rest(s__39630__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39632),null);
}
} else {
var piece = cljs.core.first(s__39630__$2);
return cljs.core.cons(tetris.render.gameplay.game_view.add_piece(new cljs.core.Keyword(null,"next-container","next-container",-2082591536).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),piece,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.Keyword(null,"cell","cell",764245084),new cljs.core.Keyword(null,"size","size",1098693007)], null))),tetris$render$gameplay$game_view$render_BANG__$_iter__39629(cljs.core.rest(s__39630__$2)));
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc,new cljs.core.Keyword(null,"next","next",-117701485),display_pieces_39715);
}

var seq__39633_39717 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,new cljs.core.Keyword(null,"next","next",-117701485).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"next","next",-117701485).cljs$core$IFn$_invoke$arity$1(data)));
var chunk__39634_39718 = null;
var count__39635_39719 = (0);
var i__39636_39720 = (0);
while(true){
if((i__39636_39720 < count__39635_39719)){
var vec__39643_39721 = chunk__39634_39718.cljs$core$IIndexed$_nth$arity$2(null,i__39636_39720);
var piece_v_39722 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39643_39721,(0),null);
var piece_d_39723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39643_39721,(1),null);
tetris.render.gameplay.game_view.render_piece_BANG_(view,piece_v_39722,piece_d_39723);


var G__39724 = seq__39633_39717;
var G__39725 = chunk__39634_39718;
var G__39726 = count__39635_39719;
var G__39727 = (i__39636_39720 + (1));
seq__39633_39717 = G__39724;
chunk__39634_39718 = G__39725;
count__39635_39719 = G__39726;
i__39636_39720 = G__39727;
continue;
} else {
var temp__5825__auto___39728 = cljs.core.seq(seq__39633_39717);
if(temp__5825__auto___39728){
var seq__39633_39729__$1 = temp__5825__auto___39728;
if(cljs.core.chunked_seq_QMARK_(seq__39633_39729__$1)){
var c__5694__auto___39730 = cljs.core.chunk_first(seq__39633_39729__$1);
var G__39731 = cljs.core.chunk_rest(seq__39633_39729__$1);
var G__39732 = c__5694__auto___39730;
var G__39733 = cljs.core.count(c__5694__auto___39730);
var G__39734 = (0);
seq__39633_39717 = G__39731;
chunk__39634_39718 = G__39732;
count__39635_39719 = G__39733;
i__39636_39720 = G__39734;
continue;
} else {
var vec__39646_39735 = cljs.core.first(seq__39633_39729__$1);
var piece_v_39736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39646_39735,(0),null);
var piece_d_39737 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39646_39735,(1),null);
tetris.render.gameplay.game_view.render_piece_BANG_(view,piece_v_39736,piece_d_39737);


var G__39738 = cljs.core.next(seq__39633_39729__$1);
var G__39739 = null;
var G__39740 = (0);
var G__39741 = (0);
seq__39633_39717 = G__39738;
chunk__39634_39718 = G__39739;
count__39635_39719 = G__39740;
i__39636_39720 = G__39741;
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

var state_cell_ids_39742 = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(data)));
var view_cell_ids_39743 = cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view))));
var cell_ids_to_remove_39744 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(view_cell_ids_39743,state_cell_ids_39742);
var seq__39649_39745 = cljs.core.seq(cell_ids_to_remove_39744);
var chunk__39650_39746 = null;
var count__39651_39747 = (0);
var i__39652_39748 = (0);
while(true){
if((i__39652_39748 < count__39651_39747)){
var id_39749 = chunk__39650_39746.cljs$core$IIndexed$_nth$arity$2(null,i__39652_39748);
var temp__5825__auto___39750 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),id_39749], null));
if(cljs.core.truth_(temp__5825__auto___39750)){
var cell_sprite_39751 = temp__5825__auto___39750;
new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).removeChild(cell_sprite_39751);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(view,cljs.core.update,new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id_39749], 0));
} else {
}


var G__39752 = seq__39649_39745;
var G__39753 = chunk__39650_39746;
var G__39754 = count__39651_39747;
var G__39755 = (i__39652_39748 + (1));
seq__39649_39745 = G__39752;
chunk__39650_39746 = G__39753;
count__39651_39747 = G__39754;
i__39652_39748 = G__39755;
continue;
} else {
var temp__5825__auto___39756 = cljs.core.seq(seq__39649_39745);
if(temp__5825__auto___39756){
var seq__39649_39757__$1 = temp__5825__auto___39756;
if(cljs.core.chunked_seq_QMARK_(seq__39649_39757__$1)){
var c__5694__auto___39758 = cljs.core.chunk_first(seq__39649_39757__$1);
var G__39759 = cljs.core.chunk_rest(seq__39649_39757__$1);
var G__39760 = c__5694__auto___39758;
var G__39761 = cljs.core.count(c__5694__auto___39758);
var G__39762 = (0);
seq__39649_39745 = G__39759;
chunk__39650_39746 = G__39760;
count__39651_39747 = G__39761;
i__39652_39748 = G__39762;
continue;
} else {
var id_39763 = cljs.core.first(seq__39649_39757__$1);
var temp__5825__auto___39764__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),id_39763], null));
if(cljs.core.truth_(temp__5825__auto___39764__$1)){
var cell_sprite_39765 = temp__5825__auto___39764__$1;
new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).removeChild(cell_sprite_39765);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(view,cljs.core.update,new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id_39763], 0));
} else {
}


var G__39766 = cljs.core.next(seq__39649_39757__$1);
var G__39767 = null;
var G__39768 = (0);
var G__39769 = (0);
seq__39649_39745 = G__39766;
chunk__39650_39746 = G__39767;
count__39651_39747 = G__39768;
i__39652_39748 = G__39769;
continue;
}
} else {
}
}
break;
}

var seq__39653_39770 = cljs.core.seq(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(data));
var chunk__39654_39771 = null;
var count__39655_39772 = (0);
var i__39656_39773 = (0);
while(true){
if((i__39656_39773 < count__39655_39772)){
var cell_39774 = chunk__39654_39771.cljs$core$IIndexed$_nth$arity$2(null,i__39656_39773);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell_39774)))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell_39774)], null),tetris.render.gameplay.game_view.add_board_piece_cell(cljs.core.deref(view)));
}

var temp__5825__auto___39775 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell_39774)], null));
if(cljs.core.truth_(temp__5825__auto___39775)){
var cell_sprite_39776 = temp__5825__auto___39775;
(cell_sprite_39776.texture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece-cell-textures","piece-cell-textures",754648682).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"color-index","color-index",560460581).cljs$core$IFn$_invoke$arity$1(cell_39774)));

cell_sprite_39776.position.set(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell_39774),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell_39774));
} else {
}


var G__39777 = seq__39653_39770;
var G__39778 = chunk__39654_39771;
var G__39779 = count__39655_39772;
var G__39780 = (i__39656_39773 + (1));
seq__39653_39770 = G__39777;
chunk__39654_39771 = G__39778;
count__39655_39772 = G__39779;
i__39656_39773 = G__39780;
continue;
} else {
var temp__5825__auto___39781 = cljs.core.seq(seq__39653_39770);
if(temp__5825__auto___39781){
var seq__39653_39782__$1 = temp__5825__auto___39781;
if(cljs.core.chunked_seq_QMARK_(seq__39653_39782__$1)){
var c__5694__auto___39783 = cljs.core.chunk_first(seq__39653_39782__$1);
var G__39784 = cljs.core.chunk_rest(seq__39653_39782__$1);
var G__39785 = c__5694__auto___39783;
var G__39786 = cljs.core.count(c__5694__auto___39783);
var G__39787 = (0);
seq__39653_39770 = G__39784;
chunk__39654_39771 = G__39785;
count__39655_39772 = G__39786;
i__39656_39773 = G__39787;
continue;
} else {
var cell_39788 = cljs.core.first(seq__39653_39782__$1);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell_39788)))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell_39788)], null),tetris.render.gameplay.game_view.add_board_piece_cell(cljs.core.deref(view)));
}

var temp__5825__auto___39789__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell_39788)], null));
if(cljs.core.truth_(temp__5825__auto___39789__$1)){
var cell_sprite_39790 = temp__5825__auto___39789__$1;
(cell_sprite_39790.texture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece-cell-textures","piece-cell-textures",754648682).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"color-index","color-index",560460581).cljs$core$IFn$_invoke$arity$1(cell_39788)));

cell_sprite_39790.position.set(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell_39788),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell_39788));
} else {
}


var G__39791 = cljs.core.next(seq__39653_39782__$1);
var G__39792 = null;
var G__39793 = (0);
var G__39794 = (0);
seq__39653_39770 = G__39791;
chunk__39654_39771 = G__39792;
count__39655_39772 = G__39793;
i__39656_39773 = G__39794;
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
