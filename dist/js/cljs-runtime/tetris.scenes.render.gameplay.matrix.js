goog.provide('tetris.scenes.render.gameplay.matrix');
var module$node_modules$$tweenjs$tween_js$dist$tween_cjs=shadow.js.require("module$node_modules$$tweenjs$tween_js$dist$tween_cjs", {});
var module$node_modules$pixi_DOT_js$lib$index=shadow.js.require("module$node_modules$pixi_DOT_js$lib$index", {});
tetris.scenes.render.gameplay.matrix.matrix_bounce_max_dx = (10);
tetris.scenes.render.gameplay.matrix.matrix_bounce_max_dy = (10);
tetris.scenes.render.gameplay.matrix.draw_frame = (function tetris$scenes$render$gameplay$matrix$draw_frame(g,p__51624){
var map__51625 = p__51624;
var map__51625__$1 = cljs.core.__destructure_map(map__51625);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51625__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51625__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var border_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51625__$1,new cljs.core.Keyword(null,"border-width","border-width",-1512605390));
var G__51627 = g;
G__51627.moveTo((0),(0));

G__51627.lineTo((0),height);

G__51627.lineTo(width,height);

G__51627.lineTo(width,(0));

G__51627.stroke(({"width": border_width, "color": (13421772), "join": "bevel"}));

G__51627.rect((border_width / (2)),(0),(width - border_width),(height - (border_width / (2))));

G__51627.fill(({"color": (0), "alpha": 0.2}));

return G__51627;
});
tetris.scenes.render.gameplay.matrix.draw_grid = (function tetris$scenes$render$gameplay$matrix$draw_grid(g,p__51631){
var map__51632 = p__51631;
var map__51632__$1 = cljs.core.__destructure_map(map__51632);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51632__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51632__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var border_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51632__$1,new cljs.core.Keyword(null,"border-width","border-width",-1512605390));
var padding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51632__$1,new cljs.core.Keyword(null,"padding","padding",1660304693));
var cell = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51632__$1,new cljs.core.Keyword(null,"cell","cell",764245084));
var seq__51633_51689 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(tetris.core.board.board_rows - (2))));
var chunk__51634_51690 = null;
var count__51635_51691 = (0);
var i__51636_51692 = (0);
while(true){
if((i__51636_51692 < count__51635_51691)){
var r_51693 = chunk__51634_51690.cljs$core$IIndexed$_nth$arity$2(null,i__51636_51692);
var y_51694 = (r_51693 * new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(cell));
g.moveTo(new cljs.core.Keyword(null,"base-x","base-x",-13745014).cljs$core$IFn$_invoke$arity$1(cell),y_51694);

g.lineTo(((width - (border_width / (2))) - padding),y_51694);


var G__51695 = seq__51633_51689;
var G__51696 = chunk__51634_51690;
var G__51697 = count__51635_51691;
var G__51698 = (i__51636_51692 + (1));
seq__51633_51689 = G__51695;
chunk__51634_51690 = G__51696;
count__51635_51691 = G__51697;
i__51636_51692 = G__51698;
continue;
} else {
var temp__5825__auto___51699 = cljs.core.seq(seq__51633_51689);
if(temp__5825__auto___51699){
var seq__51633_51700__$1 = temp__5825__auto___51699;
if(cljs.core.chunked_seq_QMARK_(seq__51633_51700__$1)){
var c__5694__auto___51701 = cljs.core.chunk_first(seq__51633_51700__$1);
var G__51702 = cljs.core.chunk_rest(seq__51633_51700__$1);
var G__51703 = c__5694__auto___51701;
var G__51704 = cljs.core.count(c__5694__auto___51701);
var G__51705 = (0);
seq__51633_51689 = G__51702;
chunk__51634_51690 = G__51703;
count__51635_51691 = G__51704;
i__51636_51692 = G__51705;
continue;
} else {
var r_51706 = cljs.core.first(seq__51633_51700__$1);
var y_51707 = (r_51706 * new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(cell));
g.moveTo(new cljs.core.Keyword(null,"base-x","base-x",-13745014).cljs$core$IFn$_invoke$arity$1(cell),y_51707);

g.lineTo(((width - (border_width / (2))) - padding),y_51707);


var G__51708 = cljs.core.next(seq__51633_51700__$1);
var G__51709 = null;
var G__51710 = (0);
var G__51711 = (0);
seq__51633_51689 = G__51708;
chunk__51634_51690 = G__51709;
count__51635_51691 = G__51710;
i__51636_51692 = G__51711;
continue;
}
} else {
}
}
break;
}

var seq__51639_51712 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(10)));
var chunk__51640_51713 = null;
var count__51641_51714 = (0);
var i__51642_51715 = (0);
while(true){
if((i__51642_51715 < count__51641_51714)){
var c_51716 = chunk__51640_51713.cljs$core$IIndexed$_nth$arity$2(null,i__51642_51715);
var x_51717 = ((c_51716 * new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(cell)) + new cljs.core.Keyword(null,"base-x","base-x",-13745014).cljs$core$IFn$_invoke$arity$1(cell));
g.moveTo(x_51717,(0));

g.lineTo(x_51717,((height - (border_width / (2))) - padding));


var G__51718 = seq__51639_51712;
var G__51719 = chunk__51640_51713;
var G__51720 = count__51641_51714;
var G__51721 = (i__51642_51715 + (1));
seq__51639_51712 = G__51718;
chunk__51640_51713 = G__51719;
count__51641_51714 = G__51720;
i__51642_51715 = G__51721;
continue;
} else {
var temp__5825__auto___51722 = cljs.core.seq(seq__51639_51712);
if(temp__5825__auto___51722){
var seq__51639_51723__$1 = temp__5825__auto___51722;
if(cljs.core.chunked_seq_QMARK_(seq__51639_51723__$1)){
var c__5694__auto___51724 = cljs.core.chunk_first(seq__51639_51723__$1);
var G__51725 = cljs.core.chunk_rest(seq__51639_51723__$1);
var G__51726 = c__5694__auto___51724;
var G__51727 = cljs.core.count(c__5694__auto___51724);
var G__51728 = (0);
seq__51639_51712 = G__51725;
chunk__51640_51713 = G__51726;
count__51641_51714 = G__51727;
i__51642_51715 = G__51728;
continue;
} else {
var c_51729 = cljs.core.first(seq__51639_51723__$1);
var x_51730 = ((c_51729 * new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(cell)) + new cljs.core.Keyword(null,"base-x","base-x",-13745014).cljs$core$IFn$_invoke$arity$1(cell));
g.moveTo(x_51730,(0));

g.lineTo(x_51730,((height - (border_width / (2))) - padding));


var G__51731 = cljs.core.next(seq__51639_51723__$1);
var G__51732 = null;
var G__51733 = (0);
var G__51734 = (0);
seq__51639_51712 = G__51731;
chunk__51640_51713 = G__51732;
count__51641_51714 = G__51733;
i__51642_51715 = G__51734;
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
var map__51646 = matrix_layout;
var map__51646__$1 = cljs.core.__destructure_map(map__51646);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51646__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51646__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var cell = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51646__$1,new cljs.core.Keyword(null,"cell","cell",764245084));
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
var G__51651 = arguments.length;
switch (G__51651) {
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
var tween = (function (){var G__51652 = (new module$node_modules$$tweenjs$tween_js$dist$tween_cjs.Tween(new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot));
G__51652.to(cljs.core.clj__GT_js(to_values),(function (){var or__5162__auto__ = duration;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (344);
}
})());

G__51652.easing((function (){var or__5162__auto__ = easing;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return module$node_modules$$tweenjs$tween_js$dist$tween_cjs.Easing.Cubic.Out;
}
})());

G__51652.start();

G__51652.onComplete((function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweens","tweens",-1927735551),id], null),null);

if(cljs.core.truth_(cb)){
return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
} else {
return null;
}
}));

G__51652.onStop((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweens","tweens",-1927735551),id], null),null);
}));

return G__51652;
})();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweens","tweens",-1927735551),id], null),tween);
}
}));

(tetris.scenes.render.gameplay.matrix.start_bounce_tween_BANG_.cljs$lang$maxFixedArity = 6);

tetris.scenes.render.gameplay.matrix.apply_bounce = (function tetris$scenes$render$gameplay$matrix$apply_bounce(view,game_state,input){
if(cljs.core.truth_(new cljs.core.Keyword(null,"shift-blocked?","shift-blocked?",-2058728569).cljs$core$IFn$_invoke$arity$1(game_state))){
var pressed_buttons_51736 = cljs.core.set(new cljs.core.Keyword(null,"pressed-buttons","pressed-buttons",1426560090).cljs$core$IFn$_invoke$arity$1(input));
var vec__51654_51737 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__51657){
var vec__51658 = p__51657;
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51658,(0),null);
return cljs.core.contains_QMARK_(pressed_buttons_51736,b);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-left","move-left",-271562811),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-right","move-right",1661359569),(-1)], null)], null)));
var button_51738 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51654_51737,(0),null);
var dir_51739 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51654_51737,(1),null);
if(cljs.core.truth_(button_51738)){
tetris.scenes.render.gameplay.tween_mgr.stop_tween_BANG_(view,new cljs.core.Keyword(null,"board-bounce-shift","board-bounce-shift",945163307));

var px_51740 = (new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot.x + (dir_51739 * (2)));
if((cljs.core.abs(px_51740) <= tetris.scenes.render.gameplay.matrix.matrix_bounce_max_dx)){
(new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot.x = px_51740);
} else {
}
} else {
tetris.scenes.render.gameplay.matrix.start_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$3(view,new cljs.core.Keyword(null,"board-bounce-shift","board-bounce-shift",945163307),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(0)], null));
}
} else {
tetris.scenes.render.gameplay.matrix.start_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$3(view,new cljs.core.Keyword(null,"board-bounce-shift","board-bounce-shift",945163307),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(0)], null));
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
var seq__51665_51741 = cljs.core.seq(cell_ids_to_remove);
var chunk__51666_51742 = null;
var count__51667_51743 = (0);
var i__51668_51744 = (0);
while(true){
if((i__51668_51744 < count__51667_51743)){
var id_51745 = chunk__51666_51742.cljs$core$IIndexed$_nth$arity$2(null,i__51668_51744);
var temp__5825__auto___51746 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),id_51745], null));
if(cljs.core.truth_(temp__5825__auto___51746)){
var cell_sprite_51747 = temp__5825__auto___51746;
new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).removeChild(cell_sprite_51747);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(view,cljs.core.update,new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id_51745], 0));
} else {
}


var G__51748 = seq__51665_51741;
var G__51749 = chunk__51666_51742;
var G__51750 = count__51667_51743;
var G__51751 = (i__51668_51744 + (1));
seq__51665_51741 = G__51748;
chunk__51666_51742 = G__51749;
count__51667_51743 = G__51750;
i__51668_51744 = G__51751;
continue;
} else {
var temp__5825__auto___51752 = cljs.core.seq(seq__51665_51741);
if(temp__5825__auto___51752){
var seq__51665_51753__$1 = temp__5825__auto___51752;
if(cljs.core.chunked_seq_QMARK_(seq__51665_51753__$1)){
var c__5694__auto___51754 = cljs.core.chunk_first(seq__51665_51753__$1);
var G__51755 = cljs.core.chunk_rest(seq__51665_51753__$1);
var G__51756 = c__5694__auto___51754;
var G__51757 = cljs.core.count(c__5694__auto___51754);
var G__51758 = (0);
seq__51665_51741 = G__51755;
chunk__51666_51742 = G__51756;
count__51667_51743 = G__51757;
i__51668_51744 = G__51758;
continue;
} else {
var id_51759 = cljs.core.first(seq__51665_51753__$1);
var temp__5825__auto___51760__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),id_51759], null));
if(cljs.core.truth_(temp__5825__auto___51760__$1)){
var cell_sprite_51761 = temp__5825__auto___51760__$1;
new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).removeChild(cell_sprite_51761);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(view,cljs.core.update,new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id_51759], 0));
} else {
}


var G__51762 = cljs.core.next(seq__51665_51753__$1);
var G__51763 = null;
var G__51764 = (0);
var G__51765 = (0);
seq__51665_51741 = G__51762;
chunk__51666_51742 = G__51763;
count__51667_51743 = G__51764;
i__51668_51744 = G__51765;
continue;
}
} else {
}
}
break;
}

var seq__51674 = cljs.core.seq(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(data));
var chunk__51675 = null;
var count__51676 = (0);
var i__51677 = (0);
while(true){
if((i__51677 < count__51676)){
var cell = chunk__51675.cljs$core$IIndexed$_nth$arity$2(null,i__51677);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)], null),cljs.core.first(tetris.scenes.render.gameplay.matrix.add_matrix_cells(cljs.core.deref(view),(1))));
}

var temp__5825__auto___51766 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)], null));
if(cljs.core.truth_(temp__5825__auto___51766)){
var cell_sprite_51767 = temp__5825__auto___51766;
(cell_sprite_51767.texture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece-cell-textures","piece-cell-textures",754648682).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"color-index","color-index",560460581).cljs$core$IFn$_invoke$arity$1(cell)));

cell_sprite_51767.position.set(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell));
} else {
}


var G__51768 = seq__51674;
var G__51769 = chunk__51675;
var G__51770 = count__51676;
var G__51771 = (i__51677 + (1));
seq__51674 = G__51768;
chunk__51675 = G__51769;
count__51676 = G__51770;
i__51677 = G__51771;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__51674);
if(temp__5825__auto__){
var seq__51674__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51674__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__51674__$1);
var G__51772 = cljs.core.chunk_rest(seq__51674__$1);
var G__51773 = c__5694__auto__;
var G__51774 = cljs.core.count(c__5694__auto__);
var G__51775 = (0);
seq__51674 = G__51772;
chunk__51675 = G__51773;
count__51676 = G__51774;
i__51677 = G__51775;
continue;
} else {
var cell = cljs.core.first(seq__51674__$1);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)], null),cljs.core.first(tetris.scenes.render.gameplay.matrix.add_matrix_cells(cljs.core.deref(view),(1))));
}

var temp__5825__auto___51776__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)], null));
if(cljs.core.truth_(temp__5825__auto___51776__$1)){
var cell_sprite_51777 = temp__5825__auto___51776__$1;
(cell_sprite_51777.texture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece-cell-textures","piece-cell-textures",754648682).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"color-index","color-index",560460581).cljs$core$IFn$_invoke$arity$1(cell)));

cell_sprite_51777.position.set(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell));
} else {
}


var G__51778 = cljs.core.next(seq__51674__$1);
var G__51779 = null;
var G__51780 = (0);
var G__51781 = (0);
seq__51674 = G__51778;
chunk__51675 = G__51779;
count__51676 = G__51780;
i__51677 = G__51781;
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
