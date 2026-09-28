goog.provide('tetris.scenes.gameplay.game_view');
var module$node_modules$pixi_DOT_js$lib$index=shadow.js.require("module$node_modules$pixi_DOT_js$lib$index", {});
tetris.scenes.gameplay.game_view.create_board = (function tetris$scenes$gameplay$game_view$create_board(p__49024){
var map__49025 = p__49024;
var map__49025__$1 = cljs.core.__destructure_map(map__49025);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49025__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49025__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49025__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49025__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var border_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49025__$1,new cljs.core.Keyword(null,"border-width","border-width",-1512605390));
var container = (new module$node_modules$pixi_DOT_js$lib$index.Container(({"label": "board"})));
var g = (new module$node_modules$pixi_DOT_js$lib$index.Graphics(({"label": "board"})));
var G__49026_49085 = g;
G__49026_49085.rect((0),(0),width,height);

G__49026_49085.fill(({"color": (1118481)}));

G__49026_49085.stroke(({"width": border_width, "color": (15658734)}));


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

return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"piece-cell-textures","piece-cell-textures",754648682),new cljs.core.Keyword(null,"hold","hold",-1621118005),new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"container","container",-1736937707),new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"next-queue","next-queue",-689213061),new cljs.core.Keyword(null,"board","board",-1907017633)],[layout,tetris.scenes.gameplay.piece.create_piece_cell_textures(new cljs.core.Keyword(null,"piece-style","piece-style",-1354956371).cljs$core$IFn$_invoke$arity$1(options)),null,null,game_view,cljs.core.PersistentArrayMap.EMPTY,null,null,board]);
});
tetris.scenes.gameplay.game_view.add_piece_cell = (function tetris$scenes$gameplay$game_view$add_piece_cell(container,cell_size){
var sprite = tetris.scenes.gameplay.piece.create_piece_cell_sprite(cell_size);
return container.addChild(sprite);
});
tetris.scenes.gameplay.game_view.add_piece = (function tetris$scenes$gameplay$game_view$add_piece(container,piece,cell_size){
return cljs.core.vec((function (){var iter__5649__auto__ = (function tetris$scenes$gameplay$game_view$add_piece_$_iter__49031(s__49032){
return (new cljs.core.LazySeq(null,(function (){
var s__49032__$1 = s__49032;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__49032__$1);
if(temp__5825__auto__){
var s__49032__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49032__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__49032__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__49034 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__49033 = (0);
while(true){
if((i__49033 < size__5648__auto__)){
var _ = cljs.core._nth(c__5647__auto__,i__49033);
cljs.core.chunk_append(b__49034,tetris.scenes.gameplay.game_view.add_piece_cell(container,cell_size));

var G__49086 = (i__49033 + (1));
i__49033 = G__49086;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49034),tetris$scenes$gameplay$game_view$add_piece_$_iter__49031(cljs.core.chunk_rest(s__49032__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49034),null);
}
} else {
var _ = cljs.core.first(s__49032__$2);
return cljs.core.cons(tetris.scenes.gameplay.game_view.add_piece_cell(container,cell_size),tetris$scenes$gameplay$game_view$add_piece_$_iter__49031(cljs.core.rest(s__49032__$2)));
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
var len__5897__auto___49087 = arguments.length;
var i__5898__auto___49088 = (0);
while(true){
if((i__5898__auto___49088 < len__5897__auto___49087)){
args__5903__auto__.push((arguments[i__5898__auto___49088]));

var G__49089 = (i__5898__auto___49088 + (1));
i__5898__auto___49088 = G__49089;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((3) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((3)),(0),null)):null);
return tetris.scenes.gameplay.game_view.render_piece_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5904__auto__);
});

(tetris.scenes.gameplay.game_view.render_piece_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (view,display_piece,piece_state,ghost_QMARK_){
var seq__49041 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,display_piece,new cljs.core.Keyword(null,"cells","cells",-985166822).cljs$core$IFn$_invoke$arity$1(piece_state)));
var chunk__49042 = null;
var count__49043 = (0);
var i__49044 = (0);
while(true){
if((i__49044 < count__49043)){
var vec__49051 = chunk__49042.cljs$core$IIndexed$_nth$arity$2(null,i__49044);
var cell_sprite = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49051,(0),null);
var cell_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49051,(1),null);
(cell_sprite.texture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece-cell-textures","piece-cell-textures",754648682).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"color-index","color-index",560460581).cljs$core$IFn$_invoke$arity$1(piece_state)));

(cell_sprite.visible = new cljs.core.Keyword(null,"visible","visible",-1024216805).cljs$core$IFn$_invoke$arity$1(piece_state));

(cell_sprite.alpha = (cljs.core.truth_(ghost_QMARK_)?0.2:(1)));

cell_sprite.position.set(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell_pos),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell_pos));


var G__49090 = seq__49041;
var G__49091 = chunk__49042;
var G__49092 = count__49043;
var G__49093 = (i__49044 + (1));
seq__49041 = G__49090;
chunk__49042 = G__49091;
count__49043 = G__49092;
i__49044 = G__49093;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__49041);
if(temp__5825__auto__){
var seq__49041__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49041__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__49041__$1);
var G__49094 = cljs.core.chunk_rest(seq__49041__$1);
var G__49095 = c__5694__auto__;
var G__49096 = cljs.core.count(c__5694__auto__);
var G__49097 = (0);
seq__49041 = G__49094;
chunk__49042 = G__49095;
count__49043 = G__49096;
i__49044 = G__49097;
continue;
} else {
var vec__49054 = cljs.core.first(seq__49041__$1);
var cell_sprite = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49054,(0),null);
var cell_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49054,(1),null);
(cell_sprite.texture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece-cell-textures","piece-cell-textures",754648682).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"color-index","color-index",560460581).cljs$core$IFn$_invoke$arity$1(piece_state)));

(cell_sprite.visible = new cljs.core.Keyword(null,"visible","visible",-1024216805).cljs$core$IFn$_invoke$arity$1(piece_state));

(cell_sprite.alpha = (cljs.core.truth_(ghost_QMARK_)?0.2:(1)));

cell_sprite.position.set(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell_pos),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell_pos));


var G__49098 = cljs.core.next(seq__49041__$1);
var G__49099 = null;
var G__49100 = (0);
var G__49101 = (0);
seq__49041 = G__49098;
chunk__49042 = G__49099;
count__49043 = G__49100;
i__49044 = G__49101;
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
(tetris.scenes.gameplay.game_view.render_piece_BANG_.cljs$lang$applyTo = (function (seq49037){
var G__49038 = cljs.core.first(seq49037);
var seq49037__$1 = cljs.core.next(seq49037);
var G__49039 = cljs.core.first(seq49037__$1);
var seq49037__$2 = cljs.core.next(seq49037__$1);
var G__49040 = cljs.core.first(seq49037__$2);
var seq49037__$3 = cljs.core.next(seq49037__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49038,G__49039,G__49040,seq49037__$3);
}));

tetris.scenes.gameplay.game_view.render_BANG_ = (function tetris$scenes$gameplay$game_view$render_BANG_(view,game_state){
var data = tetris.scenes.gameplay.game_view_data.render_data(new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),game_state);
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hold","hold",-1621118005),new cljs.core.Keyword(null,"cells","cells",-985166822)], null)))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"hold","hold",-1621118005).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)))){
} else {
var piece_49102 = tetris.scenes.gameplay.game_view.add_piece(new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"hold","hold",-1621118005).cljs$core$IFn$_invoke$arity$1(data),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"hold","hold",-1621118005),new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc,new cljs.core.Keyword(null,"hold","hold",-1621118005),piece_49102);
}

tetris.scenes.gameplay.game_view.render_piece_BANG_(view,new cljs.core.Keyword(null,"hold","hold",-1621118005).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"hold","hold",-1621118005).cljs$core$IFn$_invoke$arity$1(data));
} else {
}

if(cljs.core.seq(new cljs.core.Keyword(null,"next-queue","next-queue",-689213061).cljs$core$IFn$_invoke$arity$1(data))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"next-queue","next-queue",-689213061).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)))){
} else {
var display_pieces_49103 = cljs.core.vec((function (){var iter__5649__auto__ = (function tetris$scenes$gameplay$game_view$render_BANG__$_iter__49057(s__49058){
return (new cljs.core.LazySeq(null,(function (){
var s__49058__$1 = s__49058;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__49058__$1);
if(temp__5825__auto__){
var s__49058__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49058__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__49058__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__49060 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__49059 = (0);
while(true){
if((i__49059 < size__5648__auto__)){
var piece = cljs.core._nth(c__5647__auto__,i__49059);
cljs.core.chunk_append(b__49060,tetris.scenes.gameplay.game_view.add_piece(new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),piece,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287)], null))));

var G__49104 = (i__49059 + (1));
i__49059 = G__49104;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49060),tetris$scenes$gameplay$game_view$render_BANG__$_iter__49057(cljs.core.chunk_rest(s__49058__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49060),null);
}
} else {
var piece = cljs.core.first(s__49058__$2);
return cljs.core.cons(tetris.scenes.gameplay.game_view.add_piece(new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),piece,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287)], null))),tetris$scenes$gameplay$game_view$render_BANG__$_iter__49057(cljs.core.rest(s__49058__$2)));
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc,new cljs.core.Keyword(null,"next-queue","next-queue",-689213061),display_pieces_49103);
}

var seq__49061_49105 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,new cljs.core.Keyword(null,"next-queue","next-queue",-689213061).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"next-queue","next-queue",-689213061).cljs$core$IFn$_invoke$arity$1(data)));
var chunk__49062_49106 = null;
var count__49063_49107 = (0);
var i__49064_49108 = (0);
while(true){
if((i__49064_49108 < count__49063_49107)){
var vec__49071_49109 = chunk__49062_49106.cljs$core$IIndexed$_nth$arity$2(null,i__49064_49108);
var piece_v_49110 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49071_49109,(0),null);
var piece_d_49111 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49071_49109,(1),null);
tetris.scenes.gameplay.game_view.render_piece_BANG_(view,piece_v_49110,piece_d_49111);


var G__49112 = seq__49061_49105;
var G__49113 = chunk__49062_49106;
var G__49114 = count__49063_49107;
var G__49115 = (i__49064_49108 + (1));
seq__49061_49105 = G__49112;
chunk__49062_49106 = G__49113;
count__49063_49107 = G__49114;
i__49064_49108 = G__49115;
continue;
} else {
var temp__5825__auto___49116 = cljs.core.seq(seq__49061_49105);
if(temp__5825__auto___49116){
var seq__49061_49117__$1 = temp__5825__auto___49116;
if(cljs.core.chunked_seq_QMARK_(seq__49061_49117__$1)){
var c__5694__auto___49118 = cljs.core.chunk_first(seq__49061_49117__$1);
var G__49119 = cljs.core.chunk_rest(seq__49061_49117__$1);
var G__49120 = c__5694__auto___49118;
var G__49121 = cljs.core.count(c__5694__auto___49118);
var G__49122 = (0);
seq__49061_49105 = G__49119;
chunk__49062_49106 = G__49120;
count__49063_49107 = G__49121;
i__49064_49108 = G__49122;
continue;
} else {
var vec__49074_49123 = cljs.core.first(seq__49061_49117__$1);
var piece_v_49124 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49074_49123,(0),null);
var piece_d_49125 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49074_49123,(1),null);
tetris.scenes.gameplay.game_view.render_piece_BANG_(view,piece_v_49124,piece_d_49125);


var G__49126 = cljs.core.next(seq__49061_49117__$1);
var G__49127 = null;
var G__49128 = (0);
var G__49129 = (0);
seq__49061_49105 = G__49126;
chunk__49062_49106 = G__49127;
count__49063_49107 = G__49128;
i__49064_49108 = G__49129;
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

var state_cell_ids = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(data)));
var view_cell_ids = cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view))));
var cell_ids_to_remove = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(view_cell_ids,state_cell_ids);
var seq__49077_49130 = cljs.core.seq(cell_ids_to_remove);
var chunk__49078_49131 = null;
var count__49079_49132 = (0);
var i__49080_49133 = (0);
while(true){
if((i__49080_49133 < count__49079_49132)){
var id_49134 = chunk__49078_49131.cljs$core$IIndexed$_nth$arity$2(null,i__49080_49133);
var temp__5825__auto___49135 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),id_49134], null));
if(cljs.core.truth_(temp__5825__auto___49135)){
var cell_sprite_49136 = temp__5825__auto___49135;
new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).removeChild(cell_sprite_49136);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(view,cljs.core.update,new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id_49134], 0));
} else {
}


var G__49137 = seq__49077_49130;
var G__49138 = chunk__49078_49131;
var G__49139 = count__49079_49132;
var G__49140 = (i__49080_49133 + (1));
seq__49077_49130 = G__49137;
chunk__49078_49131 = G__49138;
count__49079_49132 = G__49139;
i__49080_49133 = G__49140;
continue;
} else {
var temp__5825__auto___49141 = cljs.core.seq(seq__49077_49130);
if(temp__5825__auto___49141){
var seq__49077_49142__$1 = temp__5825__auto___49141;
if(cljs.core.chunked_seq_QMARK_(seq__49077_49142__$1)){
var c__5694__auto___49143 = cljs.core.chunk_first(seq__49077_49142__$1);
var G__49144 = cljs.core.chunk_rest(seq__49077_49142__$1);
var G__49145 = c__5694__auto___49143;
var G__49146 = cljs.core.count(c__5694__auto___49143);
var G__49147 = (0);
seq__49077_49130 = G__49144;
chunk__49078_49131 = G__49145;
count__49079_49132 = G__49146;
i__49080_49133 = G__49147;
continue;
} else {
var id_49148 = cljs.core.first(seq__49077_49142__$1);
var temp__5825__auto___49149__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),id_49148], null));
if(cljs.core.truth_(temp__5825__auto___49149__$1)){
var cell_sprite_49150 = temp__5825__auto___49149__$1;
new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).removeChild(cell_sprite_49150);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(view,cljs.core.update,new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id_49148], 0));
} else {
}


var G__49151 = cljs.core.next(seq__49077_49142__$1);
var G__49152 = null;
var G__49153 = (0);
var G__49154 = (0);
seq__49077_49130 = G__49151;
chunk__49078_49131 = G__49152;
count__49079_49132 = G__49153;
i__49080_49133 = G__49154;
continue;
}
} else {
}
}
break;
}

var seq__49081 = cljs.core.seq(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(data));
var chunk__49082 = null;
var count__49083 = (0);
var i__49084 = (0);
while(true){
if((i__49084 < count__49083)){
var cell = chunk__49082.cljs$core$IIndexed$_nth$arity$2(null,i__49084);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)], null),tetris.scenes.gameplay.game_view.add_board_piece_cell(cljs.core.deref(view)));
}

var temp__5825__auto___49155 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)], null));
if(cljs.core.truth_(temp__5825__auto___49155)){
var cell_sprite_49156 = temp__5825__auto___49155;
(cell_sprite_49156.texture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece-cell-textures","piece-cell-textures",754648682).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"color-index","color-index",560460581).cljs$core$IFn$_invoke$arity$1(cell)));

cell_sprite_49156.position.set(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell));
} else {
}


var G__49157 = seq__49081;
var G__49158 = chunk__49082;
var G__49159 = count__49083;
var G__49160 = (i__49084 + (1));
seq__49081 = G__49157;
chunk__49082 = G__49158;
count__49083 = G__49159;
i__49084 = G__49160;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__49081);
if(temp__5825__auto__){
var seq__49081__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49081__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__49081__$1);
var G__49161 = cljs.core.chunk_rest(seq__49081__$1);
var G__49162 = c__5694__auto__;
var G__49163 = cljs.core.count(c__5694__auto__);
var G__49164 = (0);
seq__49081 = G__49161;
chunk__49082 = G__49162;
count__49083 = G__49163;
i__49084 = G__49164;
continue;
} else {
var cell = cljs.core.first(seq__49081__$1);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)], null),tetris.scenes.gameplay.game_view.add_board_piece_cell(cljs.core.deref(view)));
}

var temp__5825__auto___49165__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)], null));
if(cljs.core.truth_(temp__5825__auto___49165__$1)){
var cell_sprite_49166 = temp__5825__auto___49165__$1;
(cell_sprite_49166.texture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece-cell-textures","piece-cell-textures",754648682).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"color-index","color-index",560460581).cljs$core$IFn$_invoke$arity$1(cell)));

cell_sprite_49166.position.set(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell));
} else {
}


var G__49167 = cljs.core.next(seq__49081__$1);
var G__49168 = null;
var G__49169 = (0);
var G__49170 = (0);
seq__49081 = G__49167;
chunk__49082 = G__49168;
count__49083 = G__49169;
i__49084 = G__49170;
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
