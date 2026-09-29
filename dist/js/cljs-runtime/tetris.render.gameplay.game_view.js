goog.provide('tetris.render.gameplay.game_view');
var module$node_modules$$tweenjs$tween_js$dist$tween_cjs=shadow.js.require("module$node_modules$$tweenjs$tween_js$dist$tween_cjs", {});
var module$node_modules$pixi_DOT_js$lib$index=shadow.js.require("module$node_modules$pixi_DOT_js$lib$index", {});
tetris.render.gameplay.game_view.board_bounce_dx_max = (6);
tetris.render.gameplay.game_view.board_bounce_dy_max = (8);
tetris.render.gameplay.game_view.create_board = (function tetris$render$gameplay$game_view$create_board(p__37779){
var map__37780 = p__37779;
var map__37780__$1 = cljs.core.__destructure_map(map__37780);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37780__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37780__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37780__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37780__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var border_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37780__$1,new cljs.core.Keyword(null,"border-width","border-width",-1512605390));
var container = (new module$node_modules$pixi_DOT_js$lib$index.Container(({"label": "board"})));
var g = (new module$node_modules$pixi_DOT_js$lib$index.Graphics(({"label": "board"})));
var G__37781_37865 = g;
G__37781_37865.rect((0),(0),width,height);

G__37781_37865.fill(({"color": (1052688)}));

G__37781_37865.stroke(({"width": border_width, "color": (15658734)}));


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
return cljs.core.vec((function (){var iter__5649__auto__ = (function tetris$render$gameplay$game_view$add_piece_$_iter__37785(s__37786){
return (new cljs.core.LazySeq(null,(function (){
var s__37786__$1 = s__37786;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__37786__$1);
if(temp__5825__auto__){
var s__37786__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37786__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__37786__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__37788 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__37787 = (0);
while(true){
if((i__37787 < size__5648__auto__)){
var _ = cljs.core._nth(c__5647__auto__,i__37787);
cljs.core.chunk_append(b__37788,tetris.render.gameplay.game_view.add_piece_cell(container,cell_size));

var G__37867 = (i__37787 + (1));
i__37787 = G__37867;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37788),tetris$render$gameplay$game_view$add_piece_$_iter__37785(cljs.core.chunk_rest(s__37786__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37788),null);
}
} else {
var _ = cljs.core.first(s__37786__$2);
return cljs.core.cons(tetris.render.gameplay.game_view.add_piece_cell(container,cell_size),tetris$render$gameplay$game_view$add_piece_$_iter__37785(cljs.core.rest(s__37786__$2)));
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
var len__5897__auto___37870 = arguments.length;
var i__5898__auto___37871 = (0);
while(true){
if((i__5898__auto___37871 < len__5897__auto___37870)){
args__5903__auto__.push((arguments[i__5898__auto___37871]));

var G__37872 = (i__5898__auto___37871 + (1));
i__5898__auto___37871 = G__37872;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((3) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((3)),(0),null)):null);
return tetris.render.gameplay.game_view.render_piece_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5904__auto__);
});

(tetris.render.gameplay.game_view.render_piece_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (view,display_piece,piece_state,ghost_QMARK_){
var seq__37799 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,display_piece,new cljs.core.Keyword(null,"cells","cells",-985166822).cljs$core$IFn$_invoke$arity$1(piece_state)));
var chunk__37800 = null;
var count__37801 = (0);
var i__37802 = (0);
while(true){
if((i__37802 < count__37801)){
var vec__37809 = chunk__37800.cljs$core$IIndexed$_nth$arity$2(null,i__37802);
var cell_sprite = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37809,(0),null);
var cell_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37809,(1),null);
(cell_sprite.texture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece-cell-textures","piece-cell-textures",754648682).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"color-index","color-index",560460581).cljs$core$IFn$_invoke$arity$1(piece_state)));

(cell_sprite.visible = new cljs.core.Keyword(null,"visible","visible",-1024216805).cljs$core$IFn$_invoke$arity$1(piece_state));

(cell_sprite.alpha = (cljs.core.truth_(ghost_QMARK_)?0.2:(1)));

cell_sprite.position.set(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell_pos),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell_pos));


var G__37873 = seq__37799;
var G__37874 = chunk__37800;
var G__37875 = count__37801;
var G__37876 = (i__37802 + (1));
seq__37799 = G__37873;
chunk__37800 = G__37874;
count__37801 = G__37875;
i__37802 = G__37876;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__37799);
if(temp__5825__auto__){
var seq__37799__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37799__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__37799__$1);
var G__37878 = cljs.core.chunk_rest(seq__37799__$1);
var G__37879 = c__5694__auto__;
var G__37880 = cljs.core.count(c__5694__auto__);
var G__37881 = (0);
seq__37799 = G__37878;
chunk__37800 = G__37879;
count__37801 = G__37880;
i__37802 = G__37881;
continue;
} else {
var vec__37812 = cljs.core.first(seq__37799__$1);
var cell_sprite = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37812,(0),null);
var cell_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37812,(1),null);
(cell_sprite.texture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece-cell-textures","piece-cell-textures",754648682).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"color-index","color-index",560460581).cljs$core$IFn$_invoke$arity$1(piece_state)));

(cell_sprite.visible = new cljs.core.Keyword(null,"visible","visible",-1024216805).cljs$core$IFn$_invoke$arity$1(piece_state));

(cell_sprite.alpha = (cljs.core.truth_(ghost_QMARK_)?0.2:(1)));

cell_sprite.position.set(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell_pos),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell_pos));


var G__37882 = cljs.core.next(seq__37799__$1);
var G__37883 = null;
var G__37884 = (0);
var G__37885 = (0);
seq__37799 = G__37882;
chunk__37800 = G__37883;
count__37801 = G__37884;
i__37802 = G__37885;
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
(tetris.render.gameplay.game_view.render_piece_BANG_.cljs$lang$applyTo = (function (seq37794){
var G__37795 = cljs.core.first(seq37794);
var seq37794__$1 = cljs.core.next(seq37794);
var G__37796 = cljs.core.first(seq37794__$1);
var seq37794__$2 = cljs.core.next(seq37794__$1);
var G__37797 = cljs.core.first(seq37794__$2);
var seq37794__$3 = cljs.core.next(seq37794__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37795,G__37796,G__37797,seq37794__$3);
}));

tetris.render.gameplay.game_view.update_tweens = (function tetris$render$gameplay$game_view$update_tweens(view){
var seq__37815 = cljs.core.seq(new cljs.core.Keyword(null,"tweens","tweens",-1927735551).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)));
var chunk__37816 = null;
var count__37817 = (0);
var i__37818 = (0);
while(true){
if((i__37818 < count__37817)){
var vec__37825 = chunk__37816.cljs$core$IIndexed$_nth$arity$2(null,i__37818);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37825,(0),null);
var tween = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37825,(1),null);
if(cljs.core.truth_(tween)){
tween.update();
} else {
}


var G__37886 = seq__37815;
var G__37887 = chunk__37816;
var G__37888 = count__37817;
var G__37889 = (i__37818 + (1));
seq__37815 = G__37886;
chunk__37816 = G__37887;
count__37817 = G__37888;
i__37818 = G__37889;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__37815);
if(temp__5825__auto__){
var seq__37815__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37815__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__37815__$1);
var G__37890 = cljs.core.chunk_rest(seq__37815__$1);
var G__37891 = c__5694__auto__;
var G__37892 = cljs.core.count(c__5694__auto__);
var G__37893 = (0);
seq__37815 = G__37890;
chunk__37816 = G__37891;
count__37817 = G__37892;
i__37818 = G__37893;
continue;
} else {
var vec__37828 = cljs.core.first(seq__37815__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37828,(0),null);
var tween = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37828,(1),null);
if(cljs.core.truth_(tween)){
tween.update();
} else {
}


var G__37894 = cljs.core.next(seq__37815__$1);
var G__37895 = null;
var G__37896 = (0);
var G__37897 = (0);
seq__37815 = G__37894;
chunk__37816 = G__37895;
count__37817 = G__37896;
i__37818 = G__37897;
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
var G__37832 = arguments.length;
switch (G__37832) {
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
var tween = (function (){var G__37833 = (new module$node_modules$$tweenjs$tween_js$dist$tween_cjs.Tween(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot));
G__37833.to(cljs.core.clj__GT_js(to_values),(function (){var or__5162__auto__ = duration;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (167);
}
})());

G__37833.easing((function (){var or__5162__auto__ = easing;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return module$node_modules$$tweenjs$tween_js$dist$tween_cjs.Easing.Quintic.Out;
}
})());

G__37833.start();

G__37833.onComplete((function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweens","tweens",-1927735551),id], null),null);

if(cljs.core.truth_(cb)){
return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
} else {
return null;
}
}));

G__37833.onStop((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweens","tweens",-1927735551),id], null),null);
}));

return G__37833;
})();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweens","tweens",-1927735551),id], null),tween);
}
}));

(tetris.render.gameplay.game_view.start_board_bounce_tween_BANG_.cljs$lang$maxFixedArity = 6);

tetris.render.gameplay.game_view.render_board_bounce_BANG_ = (function tetris$render$gameplay$game_view$render_board_bounce_BANG_(view,game_state,input){
if(cljs.core.truth_(cljs.core.some((function (p1__37834_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__37834_SHARP_,new cljs.core.Keyword(null,"move-left","move-left",-271562811));
}),new cljs.core.Keyword(null,"pressed-buttons","pressed-buttons",1426560090).cljs$core$IFn$_invoke$arity$1(input)))){
if(cljs.core.truth_(tetris.core.game.shift_blocked_QMARK_(game_state,(-1)))){
tetris.render.gameplay.game_view.stop_tween_BANG_(view,new cljs.core.Keyword(null,"board-bounce-shift","board-bounce-shift",945163307));

var px_37900 = (new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot.x - (- (1)));
if((cljs.core.abs(px_37900) <= tetris.render.gameplay.game_view.board_bounce_dx_max)){
(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot.x = px_37900);
} else {
}
} else {
}
} else {
tetris.render.gameplay.game_view.start_board_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$3(view,new cljs.core.Keyword(null,"board-bounce-shift","board-bounce-shift",945163307),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(0)], null));
}

if(cljs.core.truth_(cljs.core.some((function (p1__37835_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__37835_SHARP_,new cljs.core.Keyword(null,"move-right","move-right",1661359569));
}),new cljs.core.Keyword(null,"pressed-buttons","pressed-buttons",1426560090).cljs$core$IFn$_invoke$arity$1(input)))){
if(cljs.core.truth_(tetris.core.game.shift_blocked_QMARK_(game_state,(1)))){
tetris.render.gameplay.game_view.stop_tween_BANG_(view,new cljs.core.Keyword(null,"board-bounce-shift","board-bounce-shift",945163307));

var px_37901 = (new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot.x - (1));
if((cljs.core.abs(px_37901) <= tetris.render.gameplay.game_view.board_bounce_dx_max)){
(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot.x = px_37901);
} else {
}
} else {
}
} else {
tetris.render.gameplay.game_view.start_board_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$3(view,new cljs.core.Keyword(null,"board-bounce-shift","board-bounce-shift",945163307),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(0)], null));
}

if(cljs.core.truth_(cljs.core.some((function (p1__37836_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__37836_SHARP_,new cljs.core.Keyword(null,"soft-drop","soft-drop",-123150289));
}),new cljs.core.Keyword(null,"pressed-buttons","pressed-buttons",1426560090).cljs$core$IFn$_invoke$arity$1(input)))){
if(cljs.core.truth_(tetris.core.game.down_blocked_QMARK_(game_state))){
tetris.render.gameplay.game_view.stop_tween_BANG_(view,new cljs.core.Keyword(null,"board-bounce-down","board-bounce-down",1116094071));

var py_37902 = (new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot.y - (1));
if((cljs.core.abs(py_37902) <= tetris.render.gameplay.game_view.board_bounce_dy_max)){
(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot.y = py_37902);
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
var piece_37903 = tetris.render.gameplay.game_view.add_piece(new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"hold","hold",-1621118005).cljs$core$IFn$_invoke$arity$1(data),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"hold","hold",-1621118005),new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc,new cljs.core.Keyword(null,"hold","hold",-1621118005),piece_37903);
}

tetris.render.gameplay.game_view.render_piece_BANG_(view,new cljs.core.Keyword(null,"hold","hold",-1621118005).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"hold","hold",-1621118005).cljs$core$IFn$_invoke$arity$1(data));
} else {
}

if(cljs.core.seq(new cljs.core.Keyword(null,"next-queue","next-queue",-689213061).cljs$core$IFn$_invoke$arity$1(data))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"next-queue","next-queue",-689213061).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)))){
} else {
var display_pieces_37904 = cljs.core.vec((function (){var iter__5649__auto__ = (function tetris$render$gameplay$game_view$render_BANG__$_iter__37837(s__37838){
return (new cljs.core.LazySeq(null,(function (){
var s__37838__$1 = s__37838;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__37838__$1);
if(temp__5825__auto__){
var s__37838__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37838__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__37838__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__37840 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__37839 = (0);
while(true){
if((i__37839 < size__5648__auto__)){
var piece = cljs.core._nth(c__5647__auto__,i__37839);
cljs.core.chunk_append(b__37840,tetris.render.gameplay.game_view.add_piece(new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),piece,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287)], null))));

var G__37905 = (i__37839 + (1));
i__37839 = G__37905;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37840),tetris$render$gameplay$game_view$render_BANG__$_iter__37837(cljs.core.chunk_rest(s__37838__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37840),null);
}
} else {
var piece = cljs.core.first(s__37838__$2);
return cljs.core.cons(tetris.render.gameplay.game_view.add_piece(new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),piece,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287)], null))),tetris$render$gameplay$game_view$render_BANG__$_iter__37837(cljs.core.rest(s__37838__$2)));
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc,new cljs.core.Keyword(null,"next-queue","next-queue",-689213061),display_pieces_37904);
}

var seq__37841_37906 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,new cljs.core.Keyword(null,"next-queue","next-queue",-689213061).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"next-queue","next-queue",-689213061).cljs$core$IFn$_invoke$arity$1(data)));
var chunk__37842_37907 = null;
var count__37843_37908 = (0);
var i__37844_37909 = (0);
while(true){
if((i__37844_37909 < count__37843_37908)){
var vec__37851_37910 = chunk__37842_37907.cljs$core$IIndexed$_nth$arity$2(null,i__37844_37909);
var piece_v_37911 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37851_37910,(0),null);
var piece_d_37912 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37851_37910,(1),null);
tetris.render.gameplay.game_view.render_piece_BANG_(view,piece_v_37911,piece_d_37912);


var G__37913 = seq__37841_37906;
var G__37914 = chunk__37842_37907;
var G__37915 = count__37843_37908;
var G__37916 = (i__37844_37909 + (1));
seq__37841_37906 = G__37913;
chunk__37842_37907 = G__37914;
count__37843_37908 = G__37915;
i__37844_37909 = G__37916;
continue;
} else {
var temp__5825__auto___37917 = cljs.core.seq(seq__37841_37906);
if(temp__5825__auto___37917){
var seq__37841_37918__$1 = temp__5825__auto___37917;
if(cljs.core.chunked_seq_QMARK_(seq__37841_37918__$1)){
var c__5694__auto___37919 = cljs.core.chunk_first(seq__37841_37918__$1);
var G__37920 = cljs.core.chunk_rest(seq__37841_37918__$1);
var G__37921 = c__5694__auto___37919;
var G__37922 = cljs.core.count(c__5694__auto___37919);
var G__37923 = (0);
seq__37841_37906 = G__37920;
chunk__37842_37907 = G__37921;
count__37843_37908 = G__37922;
i__37844_37909 = G__37923;
continue;
} else {
var vec__37854_37924 = cljs.core.first(seq__37841_37918__$1);
var piece_v_37925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37854_37924,(0),null);
var piece_d_37926 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37854_37924,(1),null);
tetris.render.gameplay.game_view.render_piece_BANG_(view,piece_v_37925,piece_d_37926);


var G__37927 = cljs.core.next(seq__37841_37918__$1);
var G__37928 = null;
var G__37929 = (0);
var G__37930 = (0);
seq__37841_37906 = G__37927;
chunk__37842_37907 = G__37928;
count__37843_37908 = G__37929;
i__37844_37909 = G__37930;
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

var state_cell_ids_37931 = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(data)));
var view_cell_ids_37932 = cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view))));
var cell_ids_to_remove_37933 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(view_cell_ids_37932,state_cell_ids_37931);
var seq__37857_37934 = cljs.core.seq(cell_ids_to_remove_37933);
var chunk__37858_37935 = null;
var count__37859_37936 = (0);
var i__37860_37937 = (0);
while(true){
if((i__37860_37937 < count__37859_37936)){
var id_37938 = chunk__37858_37935.cljs$core$IIndexed$_nth$arity$2(null,i__37860_37937);
var temp__5825__auto___37939 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),id_37938], null));
if(cljs.core.truth_(temp__5825__auto___37939)){
var cell_sprite_37940 = temp__5825__auto___37939;
new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).removeChild(cell_sprite_37940);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(view,cljs.core.update,new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id_37938], 0));
} else {
}


var G__37941 = seq__37857_37934;
var G__37942 = chunk__37858_37935;
var G__37943 = count__37859_37936;
var G__37944 = (i__37860_37937 + (1));
seq__37857_37934 = G__37941;
chunk__37858_37935 = G__37942;
count__37859_37936 = G__37943;
i__37860_37937 = G__37944;
continue;
} else {
var temp__5825__auto___37945 = cljs.core.seq(seq__37857_37934);
if(temp__5825__auto___37945){
var seq__37857_37946__$1 = temp__5825__auto___37945;
if(cljs.core.chunked_seq_QMARK_(seq__37857_37946__$1)){
var c__5694__auto___37947 = cljs.core.chunk_first(seq__37857_37946__$1);
var G__37948 = cljs.core.chunk_rest(seq__37857_37946__$1);
var G__37949 = c__5694__auto___37947;
var G__37950 = cljs.core.count(c__5694__auto___37947);
var G__37951 = (0);
seq__37857_37934 = G__37948;
chunk__37858_37935 = G__37949;
count__37859_37936 = G__37950;
i__37860_37937 = G__37951;
continue;
} else {
var id_37952 = cljs.core.first(seq__37857_37946__$1);
var temp__5825__auto___37953__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),id_37952], null));
if(cljs.core.truth_(temp__5825__auto___37953__$1)){
var cell_sprite_37954 = temp__5825__auto___37953__$1;
new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).removeChild(cell_sprite_37954);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(view,cljs.core.update,new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id_37952], 0));
} else {
}


var G__37955 = cljs.core.next(seq__37857_37946__$1);
var G__37956 = null;
var G__37957 = (0);
var G__37958 = (0);
seq__37857_37934 = G__37955;
chunk__37858_37935 = G__37956;
count__37859_37936 = G__37957;
i__37860_37937 = G__37958;
continue;
}
} else {
}
}
break;
}

var seq__37861_37959 = cljs.core.seq(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(data));
var chunk__37862_37960 = null;
var count__37863_37961 = (0);
var i__37864_37962 = (0);
while(true){
if((i__37864_37962 < count__37863_37961)){
var cell_37963 = chunk__37862_37960.cljs$core$IIndexed$_nth$arity$2(null,i__37864_37962);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell_37963)))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell_37963)], null),tetris.render.gameplay.game_view.add_board_piece_cell(cljs.core.deref(view)));
}

var temp__5825__auto___37964 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell_37963)], null));
if(cljs.core.truth_(temp__5825__auto___37964)){
var cell_sprite_37965 = temp__5825__auto___37964;
(cell_sprite_37965.texture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece-cell-textures","piece-cell-textures",754648682).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"color-index","color-index",560460581).cljs$core$IFn$_invoke$arity$1(cell_37963)));

cell_sprite_37965.position.set(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell_37963),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell_37963));
} else {
}


var G__37966 = seq__37861_37959;
var G__37967 = chunk__37862_37960;
var G__37968 = count__37863_37961;
var G__37969 = (i__37864_37962 + (1));
seq__37861_37959 = G__37966;
chunk__37862_37960 = G__37967;
count__37863_37961 = G__37968;
i__37864_37962 = G__37969;
continue;
} else {
var temp__5825__auto___37970 = cljs.core.seq(seq__37861_37959);
if(temp__5825__auto___37970){
var seq__37861_37971__$1 = temp__5825__auto___37970;
if(cljs.core.chunked_seq_QMARK_(seq__37861_37971__$1)){
var c__5694__auto___37972 = cljs.core.chunk_first(seq__37861_37971__$1);
var G__37973 = cljs.core.chunk_rest(seq__37861_37971__$1);
var G__37974 = c__5694__auto___37972;
var G__37975 = cljs.core.count(c__5694__auto___37972);
var G__37976 = (0);
seq__37861_37959 = G__37973;
chunk__37862_37960 = G__37974;
count__37863_37961 = G__37975;
i__37864_37962 = G__37976;
continue;
} else {
var cell_37977 = cljs.core.first(seq__37861_37971__$1);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell_37977)))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell_37977)], null),tetris.render.gameplay.game_view.add_board_piece_cell(cljs.core.deref(view)));
}

var temp__5825__auto___37978__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell_37977)], null));
if(cljs.core.truth_(temp__5825__auto___37978__$1)){
var cell_sprite_37979 = temp__5825__auto___37978__$1;
(cell_sprite_37979.texture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece-cell-textures","piece-cell-textures",754648682).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"color-index","color-index",560460581).cljs$core$IFn$_invoke$arity$1(cell_37977)));

cell_sprite_37979.position.set(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell_37977),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell_37977));
} else {
}


var G__37980 = cljs.core.next(seq__37861_37971__$1);
var G__37981 = null;
var G__37982 = (0);
var G__37983 = (0);
seq__37861_37959 = G__37980;
chunk__37862_37960 = G__37981;
count__37863_37961 = G__37982;
i__37864_37962 = G__37983;
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
