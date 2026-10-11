goog.provide('tetris.scenes.render.gameplay.matrix');
var module$node_modules$$tweenjs$tween_js$dist$tween_cjs=shadow.js.require("module$node_modules$$tweenjs$tween_js$dist$tween_cjs", {});
var module$node_modules$pixi_DOT_js$lib$index=shadow.js.require("module$node_modules$pixi_DOT_js$lib$index", {});
tetris.scenes.render.gameplay.matrix.matrix_bounce_max_dx = (10);
tetris.scenes.render.gameplay.matrix.matrix_bounce_max_dy = (10);
tetris.scenes.render.gameplay.matrix.draw_frame = (function tetris$scenes$render$gameplay$matrix$draw_frame(g,p__44758){
var map__44759 = p__44758;
var map__44759__$1 = cljs.core.__destructure_map(map__44759);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44759__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44759__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var border_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44759__$1,new cljs.core.Keyword(null,"border-width","border-width",-1512605390));
var G__44760 = g;
G__44760.moveTo((0),(0));

G__44760.lineTo((0),height);

G__44760.lineTo(width,height);

G__44760.lineTo(width,(0));

G__44760.stroke(({"width": border_width, "color": (13421772), "join": "bevel"}));

G__44760.rect((border_width / (2)),(0),(width - border_width),(height - (border_width / (2))));

G__44760.fill(({"color": (0), "alpha": 0.2}));

return G__44760;
});
tetris.scenes.render.gameplay.matrix.draw_grid = (function tetris$scenes$render$gameplay$matrix$draw_grid(g,p__44763){
var map__44764 = p__44763;
var map__44764__$1 = cljs.core.__destructure_map(map__44764);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44764__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44764__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var border_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44764__$1,new cljs.core.Keyword(null,"border-width","border-width",-1512605390));
var padding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44764__$1,new cljs.core.Keyword(null,"padding","padding",1660304693));
var cell = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44764__$1,new cljs.core.Keyword(null,"cell","cell",764245084));
var seq__44766_44812 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(tetris.core.board.board_rows - (2))));
var chunk__44767_44813 = null;
var count__44768_44814 = (0);
var i__44769_44815 = (0);
while(true){
if((i__44769_44815 < count__44768_44814)){
var r_44816 = chunk__44767_44813.cljs$core$IIndexed$_nth$arity$2(null,i__44769_44815);
var y_44817 = (r_44816 * new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(cell));
g.moveTo(new cljs.core.Keyword(null,"base-x","base-x",-13745014).cljs$core$IFn$_invoke$arity$1(cell),y_44817);

g.lineTo(((width - (border_width / (2))) - padding),y_44817);


var G__44818 = seq__44766_44812;
var G__44819 = chunk__44767_44813;
var G__44820 = count__44768_44814;
var G__44821 = (i__44769_44815 + (1));
seq__44766_44812 = G__44818;
chunk__44767_44813 = G__44819;
count__44768_44814 = G__44820;
i__44769_44815 = G__44821;
continue;
} else {
var temp__5825__auto___44822 = cljs.core.seq(seq__44766_44812);
if(temp__5825__auto___44822){
var seq__44766_44823__$1 = temp__5825__auto___44822;
if(cljs.core.chunked_seq_QMARK_(seq__44766_44823__$1)){
var c__5694__auto___44824 = cljs.core.chunk_first(seq__44766_44823__$1);
var G__44825 = cljs.core.chunk_rest(seq__44766_44823__$1);
var G__44826 = c__5694__auto___44824;
var G__44827 = cljs.core.count(c__5694__auto___44824);
var G__44828 = (0);
seq__44766_44812 = G__44825;
chunk__44767_44813 = G__44826;
count__44768_44814 = G__44827;
i__44769_44815 = G__44828;
continue;
} else {
var r_44829 = cljs.core.first(seq__44766_44823__$1);
var y_44830 = (r_44829 * new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(cell));
g.moveTo(new cljs.core.Keyword(null,"base-x","base-x",-13745014).cljs$core$IFn$_invoke$arity$1(cell),y_44830);

g.lineTo(((width - (border_width / (2))) - padding),y_44830);


var G__44831 = cljs.core.next(seq__44766_44823__$1);
var G__44832 = null;
var G__44833 = (0);
var G__44834 = (0);
seq__44766_44812 = G__44831;
chunk__44767_44813 = G__44832;
count__44768_44814 = G__44833;
i__44769_44815 = G__44834;
continue;
}
} else {
}
}
break;
}

var seq__44772_44835 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(10)));
var chunk__44773_44836 = null;
var count__44774_44837 = (0);
var i__44775_44838 = (0);
while(true){
if((i__44775_44838 < count__44774_44837)){
var c_44839 = chunk__44773_44836.cljs$core$IIndexed$_nth$arity$2(null,i__44775_44838);
var x_44840 = ((c_44839 * new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(cell)) + new cljs.core.Keyword(null,"base-x","base-x",-13745014).cljs$core$IFn$_invoke$arity$1(cell));
g.moveTo(x_44840,(0));

g.lineTo(x_44840,((height - (border_width / (2))) - padding));


var G__44841 = seq__44772_44835;
var G__44842 = chunk__44773_44836;
var G__44843 = count__44774_44837;
var G__44844 = (i__44775_44838 + (1));
seq__44772_44835 = G__44841;
chunk__44773_44836 = G__44842;
count__44774_44837 = G__44843;
i__44775_44838 = G__44844;
continue;
} else {
var temp__5825__auto___44845 = cljs.core.seq(seq__44772_44835);
if(temp__5825__auto___44845){
var seq__44772_44846__$1 = temp__5825__auto___44845;
if(cljs.core.chunked_seq_QMARK_(seq__44772_44846__$1)){
var c__5694__auto___44847 = cljs.core.chunk_first(seq__44772_44846__$1);
var G__44848 = cljs.core.chunk_rest(seq__44772_44846__$1);
var G__44849 = c__5694__auto___44847;
var G__44850 = cljs.core.count(c__5694__auto___44847);
var G__44851 = (0);
seq__44772_44835 = G__44848;
chunk__44773_44836 = G__44849;
count__44774_44837 = G__44850;
i__44775_44838 = G__44851;
continue;
} else {
var c_44852 = cljs.core.first(seq__44772_44846__$1);
var x_44854 = ((c_44852 * new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(cell)) + new cljs.core.Keyword(null,"base-x","base-x",-13745014).cljs$core$IFn$_invoke$arity$1(cell));
g.moveTo(x_44854,(0));

g.lineTo(x_44854,((height - (border_width / (2))) - padding));


var G__44855 = cljs.core.next(seq__44772_44846__$1);
var G__44856 = null;
var G__44857 = (0);
var G__44858 = (0);
seq__44772_44835 = G__44855;
chunk__44773_44836 = G__44856;
count__44774_44837 = G__44857;
i__44775_44838 = G__44858;
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
var map__44779 = matrix_layout;
var map__44779__$1 = cljs.core.__destructure_map(map__44779);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44779__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44779__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var cell = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44779__$1,new cljs.core.Keyword(null,"cell","cell",764245084));
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
var G__44783 = arguments.length;
switch (G__44783) {
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
var tween = (function (){var G__44785 = (new module$node_modules$$tweenjs$tween_js$dist$tween_cjs.Tween(new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot));
G__44785.to(cljs.core.clj__GT_js(to_values),(function (){var or__5162__auto__ = duration;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (344);
}
})());

G__44785.easing((function (){var or__5162__auto__ = easing;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return module$node_modules$$tweenjs$tween_js$dist$tween_cjs.Easing.Cubic.Out;
}
})());

G__44785.start();

G__44785.onComplete((function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweens","tweens",-1927735551),id], null),null);

if(cljs.core.truth_(cb)){
return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
} else {
return null;
}
}));

G__44785.onStop((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweens","tweens",-1927735551),id], null),null);
}));

return G__44785;
})();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweens","tweens",-1927735551),id], null),tween);
}
}));

(tetris.scenes.render.gameplay.matrix.start_bounce_tween_BANG_.cljs$lang$maxFixedArity = 6);

tetris.scenes.render.gameplay.matrix.apply_bounce = (function tetris$scenes$render$gameplay$matrix$apply_bounce(view,game_state,input){
if(cljs.core.truth_(new cljs.core.Keyword(null,"shift-blocked?","shift-blocked?",-2058728569).cljs$core$IFn$_invoke$arity$1(game_state))){
var pressed_buttons_44869 = cljs.core.set(new cljs.core.Keyword(null,"pressed-buttons","pressed-buttons",1426560090).cljs$core$IFn$_invoke$arity$1(input));
var vec__44786_44870 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__44789){
var vec__44790 = p__44789;
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44790,(0),null);
return cljs.core.contains_QMARK_(pressed_buttons_44869,b);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-left","move-left",-271562811),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-right","move-right",1661359569),(-1)], null)], null)));
var button_44871 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44786_44870,(0),null);
var dir_44872 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44786_44870,(1),null);
if(cljs.core.truth_(button_44871)){
tetris.scenes.render.gameplay.tween_mgr.stop_tween_BANG_(view,new cljs.core.Keyword(null,"board-bounce-shift","board-bounce-shift",945163307));

var px_44873 = (new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot.x + (dir_44872 * (2)));
if((cljs.core.abs(px_44873) <= tetris.scenes.render.gameplay.matrix.matrix_bounce_max_dx)){
(new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot.x = px_44873);
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
var seq__44794_44874 = cljs.core.seq(cell_ids_to_remove);
var chunk__44795_44875 = null;
var count__44796_44876 = (0);
var i__44797_44877 = (0);
while(true){
if((i__44797_44877 < count__44796_44876)){
var id_44878 = chunk__44795_44875.cljs$core$IIndexed$_nth$arity$2(null,i__44797_44877);
var temp__5825__auto___44879 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),id_44878], null));
if(cljs.core.truth_(temp__5825__auto___44879)){
var cell_sprite_44880 = temp__5825__auto___44879;
new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).removeChild(cell_sprite_44880);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(view,cljs.core.update,new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id_44878], 0));
} else {
}


var G__44881 = seq__44794_44874;
var G__44882 = chunk__44795_44875;
var G__44883 = count__44796_44876;
var G__44884 = (i__44797_44877 + (1));
seq__44794_44874 = G__44881;
chunk__44795_44875 = G__44882;
count__44796_44876 = G__44883;
i__44797_44877 = G__44884;
continue;
} else {
var temp__5825__auto___44885 = cljs.core.seq(seq__44794_44874);
if(temp__5825__auto___44885){
var seq__44794_44886__$1 = temp__5825__auto___44885;
if(cljs.core.chunked_seq_QMARK_(seq__44794_44886__$1)){
var c__5694__auto___44887 = cljs.core.chunk_first(seq__44794_44886__$1);
var G__44888 = cljs.core.chunk_rest(seq__44794_44886__$1);
var G__44889 = c__5694__auto___44887;
var G__44890 = cljs.core.count(c__5694__auto___44887);
var G__44891 = (0);
seq__44794_44874 = G__44888;
chunk__44795_44875 = G__44889;
count__44796_44876 = G__44890;
i__44797_44877 = G__44891;
continue;
} else {
var id_44892 = cljs.core.first(seq__44794_44886__$1);
var temp__5825__auto___44893__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),id_44892], null));
if(cljs.core.truth_(temp__5825__auto___44893__$1)){
var cell_sprite_44894 = temp__5825__auto___44893__$1;
new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).removeChild(cell_sprite_44894);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(view,cljs.core.update,new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id_44892], 0));
} else {
}


var G__44895 = cljs.core.next(seq__44794_44886__$1);
var G__44896 = null;
var G__44897 = (0);
var G__44898 = (0);
seq__44794_44874 = G__44895;
chunk__44795_44875 = G__44896;
count__44796_44876 = G__44897;
i__44797_44877 = G__44898;
continue;
}
} else {
}
}
break;
}

var seq__44802 = cljs.core.seq(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(data));
var chunk__44803 = null;
var count__44804 = (0);
var i__44805 = (0);
while(true){
if((i__44805 < count__44804)){
var cell = chunk__44803.cljs$core$IIndexed$_nth$arity$2(null,i__44805);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)], null),cljs.core.first(tetris.scenes.render.gameplay.matrix.add_matrix_cells(cljs.core.deref(view),(1))));
}

var temp__5825__auto___44899 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)], null));
if(cljs.core.truth_(temp__5825__auto___44899)){
var cell_sprite_44900 = temp__5825__auto___44899;
(cell_sprite_44900.texture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece-cell-textures","piece-cell-textures",754648682).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"color-index","color-index",560460581).cljs$core$IFn$_invoke$arity$1(cell)));

cell_sprite_44900.position.set(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell));
} else {
}


var G__44901 = seq__44802;
var G__44902 = chunk__44803;
var G__44903 = count__44804;
var G__44904 = (i__44805 + (1));
seq__44802 = G__44901;
chunk__44803 = G__44902;
count__44804 = G__44903;
i__44805 = G__44904;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__44802);
if(temp__5825__auto__){
var seq__44802__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44802__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__44802__$1);
var G__44905 = cljs.core.chunk_rest(seq__44802__$1);
var G__44906 = c__5694__auto__;
var G__44907 = cljs.core.count(c__5694__auto__);
var G__44908 = (0);
seq__44802 = G__44905;
chunk__44803 = G__44906;
count__44804 = G__44907;
i__44805 = G__44908;
continue;
} else {
var cell = cljs.core.first(seq__44802__$1);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)], null),cljs.core.first(tetris.scenes.render.gameplay.matrix.add_matrix_cells(cljs.core.deref(view),(1))));
}

var temp__5825__auto___44909__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)], null));
if(cljs.core.truth_(temp__5825__auto___44909__$1)){
var cell_sprite_44910 = temp__5825__auto___44909__$1;
(cell_sprite_44910.texture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece-cell-textures","piece-cell-textures",754648682).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"color-index","color-index",560460581).cljs$core$IFn$_invoke$arity$1(cell)));

cell_sprite_44910.position.set(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell));
} else {
}


var G__44911 = cljs.core.next(seq__44802__$1);
var G__44912 = null;
var G__44913 = (0);
var G__44914 = (0);
seq__44802 = G__44911;
chunk__44803 = G__44912;
count__44804 = G__44913;
i__44805 = G__44914;
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
