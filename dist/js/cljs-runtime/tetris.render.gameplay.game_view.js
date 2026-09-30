goog.provide('tetris.render.gameplay.game_view');
var module$node_modules$$tweenjs$tween_js$dist$tween_cjs=shadow.js.require("module$node_modules$$tweenjs$tween_js$dist$tween_cjs", {});
var module$node_modules$pixi_DOT_js$lib$index=shadow.js.require("module$node_modules$pixi_DOT_js$lib$index", {});
tetris.render.gameplay.game_view.board_bounce_dx_max = (6);
tetris.render.gameplay.game_view.board_bounce_dy_max = (6);
tetris.render.gameplay.game_view.create_board = (function tetris$render$gameplay$game_view$create_board(p__56169){
var map__56170 = p__56169;
var map__56170__$1 = cljs.core.__destructure_map(map__56170);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56170__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56170__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56170__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56170__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var border_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56170__$1,new cljs.core.Keyword(null,"border-width","border-width",-1512605390));
var container = (new module$node_modules$pixi_DOT_js$lib$index.Container(({"label": "board"})));
var g = (new module$node_modules$pixi_DOT_js$lib$index.Graphics(({"label": "board"})));
var G__56171_56276 = g;
G__56171_56276.moveTo((0),(0));

G__56171_56276.lineTo((0),height);

G__56171_56276.lineTo(width,height);

G__56171_56276.lineTo(width,(0));

G__56171_56276.stroke(({"width": border_width, "color": (13421772)}));

G__56171_56276.rect((4),(4),(width - (8)),(height - (9)));

G__56171_56276.fill(({"color": (0), "alpha": 0.2}));


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
return cljs.core.vec((function (){var iter__5649__auto__ = (function tetris$render$gameplay$game_view$add_piece_$_iter__56178(s__56179){
return (new cljs.core.LazySeq(null,(function (){
var s__56179__$1 = s__56179;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__56179__$1);
if(temp__5825__auto__){
var s__56179__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56179__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__56179__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__56181 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__56180 = (0);
while(true){
if((i__56180 < size__5648__auto__)){
var _ = cljs.core._nth(c__5647__auto__,i__56180);
cljs.core.chunk_append(b__56181,tetris.render.gameplay.game_view.add_piece_cell(container,cell_size));

var G__56277 = (i__56180 + (1));
i__56180 = G__56277;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56181),tetris$render$gameplay$game_view$add_piece_$_iter__56178(cljs.core.chunk_rest(s__56179__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56181),null);
}
} else {
var _ = cljs.core.first(s__56179__$2);
return cljs.core.cons(tetris.render.gameplay.game_view.add_piece_cell(container,cell_size),tetris$render$gameplay$game_view$add_piece_$_iter__56178(cljs.core.rest(s__56179__$2)));
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
var len__5897__auto___56278 = arguments.length;
var i__5898__auto___56279 = (0);
while(true){
if((i__5898__auto___56279 < len__5897__auto___56278)){
args__5903__auto__.push((arguments[i__5898__auto___56279]));

var G__56280 = (i__5898__auto___56279 + (1));
i__5898__auto___56279 = G__56280;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((3) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((3)),(0),null)):null);
return tetris.render.gameplay.game_view.render_piece_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5904__auto__);
});

(tetris.render.gameplay.game_view.render_piece_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (view,display_piece,piece_state,ghost_QMARK_){
var seq__56196 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,display_piece,new cljs.core.Keyword(null,"cells","cells",-985166822).cljs$core$IFn$_invoke$arity$1(piece_state)));
var chunk__56197 = null;
var count__56198 = (0);
var i__56199 = (0);
while(true){
if((i__56199 < count__56198)){
var vec__56206 = chunk__56197.cljs$core$IIndexed$_nth$arity$2(null,i__56199);
var cell_sprite = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56206,(0),null);
var cell_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56206,(1),null);
(cell_sprite.texture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece-cell-textures","piece-cell-textures",754648682).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"color-index","color-index",560460581).cljs$core$IFn$_invoke$arity$1(piece_state)));

(cell_sprite.visible = new cljs.core.Keyword(null,"visible","visible",-1024216805).cljs$core$IFn$_invoke$arity$1(piece_state));

(cell_sprite.alpha = (cljs.core.truth_(ghost_QMARK_)?0.2:(1)));

cell_sprite.position.set(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell_pos),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell_pos));


var G__56281 = seq__56196;
var G__56282 = chunk__56197;
var G__56283 = count__56198;
var G__56284 = (i__56199 + (1));
seq__56196 = G__56281;
chunk__56197 = G__56282;
count__56198 = G__56283;
i__56199 = G__56284;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__56196);
if(temp__5825__auto__){
var seq__56196__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56196__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__56196__$1);
var G__56285 = cljs.core.chunk_rest(seq__56196__$1);
var G__56286 = c__5694__auto__;
var G__56287 = cljs.core.count(c__5694__auto__);
var G__56288 = (0);
seq__56196 = G__56285;
chunk__56197 = G__56286;
count__56198 = G__56287;
i__56199 = G__56288;
continue;
} else {
var vec__56209 = cljs.core.first(seq__56196__$1);
var cell_sprite = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56209,(0),null);
var cell_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56209,(1),null);
(cell_sprite.texture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece-cell-textures","piece-cell-textures",754648682).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"color-index","color-index",560460581).cljs$core$IFn$_invoke$arity$1(piece_state)));

(cell_sprite.visible = new cljs.core.Keyword(null,"visible","visible",-1024216805).cljs$core$IFn$_invoke$arity$1(piece_state));

(cell_sprite.alpha = (cljs.core.truth_(ghost_QMARK_)?0.2:(1)));

cell_sprite.position.set(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell_pos),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell_pos));


var G__56289 = cljs.core.next(seq__56196__$1);
var G__56290 = null;
var G__56291 = (0);
var G__56292 = (0);
seq__56196 = G__56289;
chunk__56197 = G__56290;
count__56198 = G__56291;
i__56199 = G__56292;
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
(tetris.render.gameplay.game_view.render_piece_BANG_.cljs$lang$applyTo = (function (seq56192){
var G__56193 = cljs.core.first(seq56192);
var seq56192__$1 = cljs.core.next(seq56192);
var G__56194 = cljs.core.first(seq56192__$1);
var seq56192__$2 = cljs.core.next(seq56192__$1);
var G__56195 = cljs.core.first(seq56192__$2);
var seq56192__$3 = cljs.core.next(seq56192__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56193,G__56194,G__56195,seq56192__$3);
}));

tetris.render.gameplay.game_view.update_tweens = (function tetris$render$gameplay$game_view$update_tweens(view){
var seq__56212 = cljs.core.seq(new cljs.core.Keyword(null,"tweens","tweens",-1927735551).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)));
var chunk__56213 = null;
var count__56214 = (0);
var i__56215 = (0);
while(true){
if((i__56215 < count__56214)){
var vec__56222 = chunk__56213.cljs$core$IIndexed$_nth$arity$2(null,i__56215);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56222,(0),null);
var tween = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56222,(1),null);
if(cljs.core.truth_(tween)){
tween.update();
} else {
}


var G__56293 = seq__56212;
var G__56294 = chunk__56213;
var G__56295 = count__56214;
var G__56296 = (i__56215 + (1));
seq__56212 = G__56293;
chunk__56213 = G__56294;
count__56214 = G__56295;
i__56215 = G__56296;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__56212);
if(temp__5825__auto__){
var seq__56212__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56212__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__56212__$1);
var G__56297 = cljs.core.chunk_rest(seq__56212__$1);
var G__56298 = c__5694__auto__;
var G__56299 = cljs.core.count(c__5694__auto__);
var G__56300 = (0);
seq__56212 = G__56297;
chunk__56213 = G__56298;
count__56214 = G__56299;
i__56215 = G__56300;
continue;
} else {
var vec__56225 = cljs.core.first(seq__56212__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56225,(0),null);
var tween = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56225,(1),null);
if(cljs.core.truth_(tween)){
tween.update();
} else {
}


var G__56301 = cljs.core.next(seq__56212__$1);
var G__56302 = null;
var G__56303 = (0);
var G__56304 = (0);
seq__56212 = G__56301;
chunk__56213 = G__56302;
count__56214 = G__56303;
i__56215 = G__56304;
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
var G__56229 = arguments.length;
switch (G__56229) {
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
var tween = (function (){var G__56230 = (new module$node_modules$$tweenjs$tween_js$dist$tween_cjs.Tween(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot));
G__56230.to(cljs.core.clj__GT_js(to_values),(function (){var or__5162__auto__ = duration;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (344);
}
})());

G__56230.easing((function (){var or__5162__auto__ = easing;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return module$node_modules$$tweenjs$tween_js$dist$tween_cjs.Easing.Cubic.Out;
}
})());

G__56230.start();

G__56230.onComplete((function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweens","tweens",-1927735551),id], null),null);

if(cljs.core.truth_(cb)){
return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
} else {
return null;
}
}));

G__56230.onStop((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweens","tweens",-1927735551),id], null),null);
}));

return G__56230;
})();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweens","tweens",-1927735551),id], null),tween);
}
}));

(tetris.render.gameplay.game_view.start_board_bounce_tween_BANG_.cljs$lang$maxFixedArity = 6);

tetris.render.gameplay.game_view.render_board_bounce_BANG_ = (function tetris$render$gameplay$game_view$render_board_bounce_BANG_(view,game_state,input){
var seq__56232_56306 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-left","move-left",-271562811),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-right","move-right",1661359569),(1)], null)], null));
var chunk__56233_56307 = null;
var count__56234_56308 = (0);
var i__56235_56309 = (0);
while(true){
if((i__56235_56309 < count__56234_56308)){
var vec__56242_56310 = chunk__56233_56307.cljs$core$IIndexed$_nth$arity$2(null,i__56235_56309);
var button_56311 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56242_56310,(0),null);
var dir_56312 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56242_56310,(1),null);
if(cljs.core.truth_(cljs.core.some(((function (seq__56232_56306,chunk__56233_56307,count__56234_56308,i__56235_56309,vec__56242_56310,button_56311,dir_56312){
return (function (p1__56231_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__56231_SHARP_,button_56311);
});})(seq__56232_56306,chunk__56233_56307,count__56234_56308,i__56235_56309,vec__56242_56310,button_56311,dir_56312))
,new cljs.core.Keyword(null,"pressed-buttons","pressed-buttons",1426560090).cljs$core$IFn$_invoke$arity$1(input)))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"shift-blocked?","shift-blocked?",-2058728569).cljs$core$IFn$_invoke$arity$1(game_state))){
tetris.render.gameplay.game_view.stop_tween_BANG_(view,new cljs.core.Keyword(null,"board-bounce-shift","board-bounce-shift",945163307));

var px_56313 = (new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot.x - (dir_56312 * (2)));
if((cljs.core.abs(px_56313) <= tetris.render.gameplay.game_view.board_bounce_dx_max)){
(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot.x = px_56313);
} else {
}
} else {
}
} else {
tetris.render.gameplay.game_view.start_board_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$3(view,new cljs.core.Keyword(null,"board-bounce-shift","board-bounce-shift",945163307),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(0)], null));
}


var G__56314 = seq__56232_56306;
var G__56315 = chunk__56233_56307;
var G__56316 = count__56234_56308;
var G__56317 = (i__56235_56309 + (1));
seq__56232_56306 = G__56314;
chunk__56233_56307 = G__56315;
count__56234_56308 = G__56316;
i__56235_56309 = G__56317;
continue;
} else {
var temp__5825__auto___56318 = cljs.core.seq(seq__56232_56306);
if(temp__5825__auto___56318){
var seq__56232_56319__$1 = temp__5825__auto___56318;
if(cljs.core.chunked_seq_QMARK_(seq__56232_56319__$1)){
var c__5694__auto___56320 = cljs.core.chunk_first(seq__56232_56319__$1);
var G__56321 = cljs.core.chunk_rest(seq__56232_56319__$1);
var G__56322 = c__5694__auto___56320;
var G__56323 = cljs.core.count(c__5694__auto___56320);
var G__56324 = (0);
seq__56232_56306 = G__56321;
chunk__56233_56307 = G__56322;
count__56234_56308 = G__56323;
i__56235_56309 = G__56324;
continue;
} else {
var vec__56245_56325 = cljs.core.first(seq__56232_56319__$1);
var button_56326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56245_56325,(0),null);
var dir_56327 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56245_56325,(1),null);
if(cljs.core.truth_(cljs.core.some(((function (seq__56232_56306,chunk__56233_56307,count__56234_56308,i__56235_56309,vec__56245_56325,button_56326,dir_56327,seq__56232_56319__$1,temp__5825__auto___56318){
return (function (p1__56231_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__56231_SHARP_,button_56326);
});})(seq__56232_56306,chunk__56233_56307,count__56234_56308,i__56235_56309,vec__56245_56325,button_56326,dir_56327,seq__56232_56319__$1,temp__5825__auto___56318))
,new cljs.core.Keyword(null,"pressed-buttons","pressed-buttons",1426560090).cljs$core$IFn$_invoke$arity$1(input)))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"shift-blocked?","shift-blocked?",-2058728569).cljs$core$IFn$_invoke$arity$1(game_state))){
tetris.render.gameplay.game_view.stop_tween_BANG_(view,new cljs.core.Keyword(null,"board-bounce-shift","board-bounce-shift",945163307));

var px_56328 = (new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot.x - (dir_56327 * (2)));
if((cljs.core.abs(px_56328) <= tetris.render.gameplay.game_view.board_bounce_dx_max)){
(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot.x = px_56328);
} else {
}
} else {
}
} else {
tetris.render.gameplay.game_view.start_board_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$3(view,new cljs.core.Keyword(null,"board-bounce-shift","board-bounce-shift",945163307),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(0)], null));
}


var G__56329 = cljs.core.next(seq__56232_56319__$1);
var G__56330 = null;
var G__56331 = (0);
var G__56332 = (0);
seq__56232_56306 = G__56329;
chunk__56233_56307 = G__56330;
count__56234_56308 = G__56331;
i__56235_56309 = G__56332;
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
tetris.render.gameplay.game_view.play_sounds_BANG_ = (function tetris$render$gameplay$game_view$play_sounds_BANG_(game_state){
var events = new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(game_state);
if(cljs.core.truth_(tetris.core.game.find_event(new cljs.core.Keyword(null,"line-cleared","line-cleared",-75071835),events))){
return tetris.audio.sound(new cljs.core.Keyword("effect","clear-1","effect/clear-1",1677235000)).play();
} else {
if(cljs.core.truth_((function (){var and__5160__auto__ = tetris.core.game.find_event(new cljs.core.Keyword(null,"hard-dropped","hard-dropped",2061168106),events);
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core.not(tetris.core.game.find_event(new cljs.core.Keyword(null,"line-clearing","line-clearing",-1671825341),events));
} else {
return and__5160__auto__;
}
})())){
return tetris.audio.sound(new cljs.core.Keyword("effect","hard-drop","effect/hard-drop",503951713)).play();
} else {
if(cljs.core.truth_((function (){var and__5160__auto__ = tetris.core.game.find_event(new cljs.core.Keyword(null,"locked","locked",-1658763820),events);
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core.not(tetris.core.game.find_event(new cljs.core.Keyword(null,"line-clearing","line-clearing",-1671825341),events));
} else {
return and__5160__auto__;
}
})())){
return tetris.audio.sound(new cljs.core.Keyword("effect","lock","effect/lock",888901839)).play();
} else {
if(cljs.core.truth_((function (){var and__5160__auto__ = tetris.core.game.find_event(new cljs.core.Keyword(null,"moved","moved",486549219),events);
if(cljs.core.truth_(and__5160__auto__)){
return new cljs.core.Keyword(null,"down-blocked?","down-blocked?",983958012).cljs$core$IFn$_invoke$arity$1(game_state);
} else {
return and__5160__auto__;
}
})())){
return tetris.audio.sound(new cljs.core.Keyword("effect","land","effect/land",-67649048)).play();
} else {
if(cljs.core.truth_(tetris.core.game.find_event(new cljs.core.Keyword(null,"landed","landed",-1056197628),events))){
return tetris.audio.sound(new cljs.core.Keyword("effect","land","effect/land",-67649048)).play();
} else {
if(cljs.core.truth_(tetris.core.game.find_event(new cljs.core.Keyword(null,"rotated","rotated",1509433122),events))){
return tetris.audio.sound(new cljs.core.Keyword("effect","rotate","effect/rotate",-1027616152)).play();
} else {
if(cljs.core.truth_(tetris.core.game.find_event(new cljs.core.Keyword(null,"held","held",-1064528277),events))){
return tetris.audio.sound(new cljs.core.Keyword("effect","hold","effect/hold",1895710300)).play();
} else {
return null;
}
}
}
}
}
}
}
});
tetris.render.gameplay.game_view.render_BANG_ = (function tetris$render$gameplay$game_view$render_BANG_(view,game_state,input){
tetris.render.gameplay.game_view.play_sounds_BANG_(game_state);

var data = tetris.render.gameplay.game_view_data.render_data(new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),game_state);
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hold","hold",-1621118005),new cljs.core.Keyword(null,"cells","cells",-985166822)], null)))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"hold","hold",-1621118005).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)))){
} else {
var piece_56333 = tetris.render.gameplay.game_view.add_piece(new cljs.core.Keyword(null,"hold-container","hold-container",872721688).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"hold","hold",-1621118005).cljs$core$IFn$_invoke$arity$1(data),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"hold","hold",-1621118005),new cljs.core.Keyword(null,"cell","cell",764245084),new cljs.core.Keyword(null,"size","size",1098693007)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc,new cljs.core.Keyword(null,"hold","hold",-1621118005),piece_56333);
}

tetris.render.gameplay.game_view.render_piece_BANG_(view,new cljs.core.Keyword(null,"hold","hold",-1621118005).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"hold","hold",-1621118005).cljs$core$IFn$_invoke$arity$1(data));
} else {
}

if(cljs.core.seq(new cljs.core.Keyword(null,"next","next",-117701485).cljs$core$IFn$_invoke$arity$1(data))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"next","next",-117701485).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)))){
} else {
var display_pieces_56334 = cljs.core.vec((function (){var iter__5649__auto__ = (function tetris$render$gameplay$game_view$render_BANG__$_iter__56248(s__56249){
return (new cljs.core.LazySeq(null,(function (){
var s__56249__$1 = s__56249;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__56249__$1);
if(temp__5825__auto__){
var s__56249__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56249__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__56249__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__56251 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__56250 = (0);
while(true){
if((i__56250 < size__5648__auto__)){
var piece = cljs.core._nth(c__5647__auto__,i__56250);
cljs.core.chunk_append(b__56251,tetris.render.gameplay.game_view.add_piece(new cljs.core.Keyword(null,"next-container","next-container",-2082591536).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),piece,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.Keyword(null,"cell","cell",764245084),new cljs.core.Keyword(null,"size","size",1098693007)], null))));

var G__56335 = (i__56250 + (1));
i__56250 = G__56335;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56251),tetris$render$gameplay$game_view$render_BANG__$_iter__56248(cljs.core.chunk_rest(s__56249__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56251),null);
}
} else {
var piece = cljs.core.first(s__56249__$2);
return cljs.core.cons(tetris.render.gameplay.game_view.add_piece(new cljs.core.Keyword(null,"next-container","next-container",-2082591536).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),piece,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.Keyword(null,"cell","cell",764245084),new cljs.core.Keyword(null,"size","size",1098693007)], null))),tetris$render$gameplay$game_view$render_BANG__$_iter__56248(cljs.core.rest(s__56249__$2)));
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc,new cljs.core.Keyword(null,"next","next",-117701485),display_pieces_56334);
}

var seq__56252_56336 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,new cljs.core.Keyword(null,"next","next",-117701485).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"next","next",-117701485).cljs$core$IFn$_invoke$arity$1(data)));
var chunk__56253_56337 = null;
var count__56254_56338 = (0);
var i__56255_56339 = (0);
while(true){
if((i__56255_56339 < count__56254_56338)){
var vec__56262_56340 = chunk__56253_56337.cljs$core$IIndexed$_nth$arity$2(null,i__56255_56339);
var piece_v_56341 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56262_56340,(0),null);
var piece_d_56342 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56262_56340,(1),null);
tetris.render.gameplay.game_view.render_piece_BANG_(view,piece_v_56341,piece_d_56342);


var G__56343 = seq__56252_56336;
var G__56344 = chunk__56253_56337;
var G__56345 = count__56254_56338;
var G__56346 = (i__56255_56339 + (1));
seq__56252_56336 = G__56343;
chunk__56253_56337 = G__56344;
count__56254_56338 = G__56345;
i__56255_56339 = G__56346;
continue;
} else {
var temp__5825__auto___56347 = cljs.core.seq(seq__56252_56336);
if(temp__5825__auto___56347){
var seq__56252_56348__$1 = temp__5825__auto___56347;
if(cljs.core.chunked_seq_QMARK_(seq__56252_56348__$1)){
var c__5694__auto___56349 = cljs.core.chunk_first(seq__56252_56348__$1);
var G__56350 = cljs.core.chunk_rest(seq__56252_56348__$1);
var G__56351 = c__5694__auto___56349;
var G__56352 = cljs.core.count(c__5694__auto___56349);
var G__56353 = (0);
seq__56252_56336 = G__56350;
chunk__56253_56337 = G__56351;
count__56254_56338 = G__56352;
i__56255_56339 = G__56353;
continue;
} else {
var vec__56265_56354 = cljs.core.first(seq__56252_56348__$1);
var piece_v_56355 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56265_56354,(0),null);
var piece_d_56356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56265_56354,(1),null);
tetris.render.gameplay.game_view.render_piece_BANG_(view,piece_v_56355,piece_d_56356);


var G__56357 = cljs.core.next(seq__56252_56348__$1);
var G__56358 = null;
var G__56359 = (0);
var G__56360 = (0);
seq__56252_56336 = G__56357;
chunk__56253_56337 = G__56358;
count__56254_56338 = G__56359;
i__56255_56339 = G__56360;
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

var state_cell_ids_56361 = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(data)));
var view_cell_ids_56362 = cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view))));
var cell_ids_to_remove_56363 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(view_cell_ids_56362,state_cell_ids_56361);
var seq__56268_56364 = cljs.core.seq(cell_ids_to_remove_56363);
var chunk__56269_56365 = null;
var count__56270_56366 = (0);
var i__56271_56367 = (0);
while(true){
if((i__56271_56367 < count__56270_56366)){
var id_56368 = chunk__56269_56365.cljs$core$IIndexed$_nth$arity$2(null,i__56271_56367);
var temp__5825__auto___56369 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),id_56368], null));
if(cljs.core.truth_(temp__5825__auto___56369)){
var cell_sprite_56370 = temp__5825__auto___56369;
new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).removeChild(cell_sprite_56370);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(view,cljs.core.update,new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id_56368], 0));
} else {
}


var G__56371 = seq__56268_56364;
var G__56372 = chunk__56269_56365;
var G__56373 = count__56270_56366;
var G__56374 = (i__56271_56367 + (1));
seq__56268_56364 = G__56371;
chunk__56269_56365 = G__56372;
count__56270_56366 = G__56373;
i__56271_56367 = G__56374;
continue;
} else {
var temp__5825__auto___56375 = cljs.core.seq(seq__56268_56364);
if(temp__5825__auto___56375){
var seq__56268_56376__$1 = temp__5825__auto___56375;
if(cljs.core.chunked_seq_QMARK_(seq__56268_56376__$1)){
var c__5694__auto___56377 = cljs.core.chunk_first(seq__56268_56376__$1);
var G__56378 = cljs.core.chunk_rest(seq__56268_56376__$1);
var G__56379 = c__5694__auto___56377;
var G__56380 = cljs.core.count(c__5694__auto___56377);
var G__56381 = (0);
seq__56268_56364 = G__56378;
chunk__56269_56365 = G__56379;
count__56270_56366 = G__56380;
i__56271_56367 = G__56381;
continue;
} else {
var id_56382 = cljs.core.first(seq__56268_56376__$1);
var temp__5825__auto___56383__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),id_56382], null));
if(cljs.core.truth_(temp__5825__auto___56383__$1)){
var cell_sprite_56384 = temp__5825__auto___56383__$1;
new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).removeChild(cell_sprite_56384);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(view,cljs.core.update,new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id_56382], 0));
} else {
}


var G__56385 = cljs.core.next(seq__56268_56376__$1);
var G__56386 = null;
var G__56387 = (0);
var G__56388 = (0);
seq__56268_56364 = G__56385;
chunk__56269_56365 = G__56386;
count__56270_56366 = G__56387;
i__56271_56367 = G__56388;
continue;
}
} else {
}
}
break;
}

var seq__56272_56389 = cljs.core.seq(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(data));
var chunk__56273_56390 = null;
var count__56274_56391 = (0);
var i__56275_56392 = (0);
while(true){
if((i__56275_56392 < count__56274_56391)){
var cell_56393 = chunk__56273_56390.cljs$core$IIndexed$_nth$arity$2(null,i__56275_56392);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell_56393)))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell_56393)], null),tetris.render.gameplay.game_view.add_board_piece_cell(cljs.core.deref(view)));
}

var temp__5825__auto___56394 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell_56393)], null));
if(cljs.core.truth_(temp__5825__auto___56394)){
var cell_sprite_56395 = temp__5825__auto___56394;
(cell_sprite_56395.texture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece-cell-textures","piece-cell-textures",754648682).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"color-index","color-index",560460581).cljs$core$IFn$_invoke$arity$1(cell_56393)));

cell_sprite_56395.position.set(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell_56393),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell_56393));
} else {
}


var G__56396 = seq__56272_56389;
var G__56397 = chunk__56273_56390;
var G__56398 = count__56274_56391;
var G__56399 = (i__56275_56392 + (1));
seq__56272_56389 = G__56396;
chunk__56273_56390 = G__56397;
count__56274_56391 = G__56398;
i__56275_56392 = G__56399;
continue;
} else {
var temp__5825__auto___56400 = cljs.core.seq(seq__56272_56389);
if(temp__5825__auto___56400){
var seq__56272_56401__$1 = temp__5825__auto___56400;
if(cljs.core.chunked_seq_QMARK_(seq__56272_56401__$1)){
var c__5694__auto___56402 = cljs.core.chunk_first(seq__56272_56401__$1);
var G__56403 = cljs.core.chunk_rest(seq__56272_56401__$1);
var G__56404 = c__5694__auto___56402;
var G__56405 = cljs.core.count(c__5694__auto___56402);
var G__56406 = (0);
seq__56272_56389 = G__56403;
chunk__56273_56390 = G__56404;
count__56274_56391 = G__56405;
i__56275_56392 = G__56406;
continue;
} else {
var cell_56407 = cljs.core.first(seq__56272_56401__$1);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell_56407)))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell_56407)], null),tetris.render.gameplay.game_view.add_board_piece_cell(cljs.core.deref(view)));
}

var temp__5825__auto___56408__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell_56407)], null));
if(cljs.core.truth_(temp__5825__auto___56408__$1)){
var cell_sprite_56409 = temp__5825__auto___56408__$1;
(cell_sprite_56409.texture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece-cell-textures","piece-cell-textures",754648682).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"color-index","color-index",560460581).cljs$core$IFn$_invoke$arity$1(cell_56407)));

cell_sprite_56409.position.set(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell_56407),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell_56407));
} else {
}


var G__56410 = cljs.core.next(seq__56272_56401__$1);
var G__56411 = null;
var G__56412 = (0);
var G__56413 = (0);
seq__56272_56389 = G__56410;
chunk__56273_56390 = G__56411;
count__56274_56391 = G__56412;
i__56275_56392 = G__56413;
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
