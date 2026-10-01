goog.provide('tetris.render.gameplay.matrix');
var module$node_modules$$tweenjs$tween_js$dist$tween_cjs=shadow.js.require("module$node_modules$$tweenjs$tween_js$dist$tween_cjs", {});
var module$node_modules$pixi_DOT_js$lib$index=shadow.js.require("module$node_modules$pixi_DOT_js$lib$index", {});
tetris.render.gameplay.matrix.matrix_bounce_dx_max = (6);
tetris.render.gameplay.matrix.matrix_bounce_dy_max = (6);
tetris.render.gameplay.matrix.create = (function tetris$render$gameplay$matrix$create(p__43630){
var map__43631 = p__43630;
var map__43631__$1 = cljs.core.__destructure_map(map__43631);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43631__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43631__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43631__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43631__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var border_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43631__$1,new cljs.core.Keyword(null,"border-width","border-width",-1512605390));
var container = (new module$node_modules$pixi_DOT_js$lib$index.Container(({"label": "board"})));
var g = (new module$node_modules$pixi_DOT_js$lib$index.Graphics(({"label": "board"})));
var G__43635_43723 = g;
G__43635_43723.moveTo((0),(0));

G__43635_43723.lineTo((0),height);

G__43635_43723.lineTo(width,height);

G__43635_43723.lineTo(width,(0));

G__43635_43723.stroke(({"width": border_width, "color": (13421772)}));

G__43635_43723.rect((4),(4),(width - (8)),(height - (9)));

G__43635_43723.fill(({"color": (0), "alpha": 0.2}));


(g.alpha = (1));

container.position.set(x,y);

container.addChild(g);

return container;
});
tetris.render.gameplay.matrix.start_board_bounce_tween_BANG_ = (function tetris$render$gameplay$matrix$start_board_bounce_tween_BANG_(var_args){
var G__43665 = arguments.length;
switch (G__43665) {
case 3:
return tetris.render.gameplay.matrix.start_board_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return tetris.render.gameplay.matrix.start_board_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 6:
return tetris.render.gameplay.matrix.start_board_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(tetris.render.gameplay.matrix.start_board_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (view,id,to_values){
return tetris.render.gameplay.matrix.start_board_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$6(view,id,to_values,null,null,null);
}));

(tetris.render.gameplay.matrix.start_board_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (view,id,to_values,cb){
return tetris.render.gameplay.matrix.start_board_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$6(view,id,to_values,null,null,cb);
}));

(tetris.render.gameplay.matrix.start_board_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$6 = (function (view,id,to_values,easing,duration,cb){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweens","tweens",-1927735551),id], null)))){
return null;
} else {
var tween = (function (){var G__43670 = (new module$node_modules$$tweenjs$tween_js$dist$tween_cjs.Tween(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot));
G__43670.to(cljs.core.clj__GT_js(to_values),(function (){var or__5162__auto__ = duration;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (344);
}
})());

G__43670.easing((function (){var or__5162__auto__ = easing;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return module$node_modules$$tweenjs$tween_js$dist$tween_cjs.Easing.Cubic.Out;
}
})());

G__43670.start();

G__43670.onComplete((function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweens","tweens",-1927735551),id], null),null);

if(cljs.core.truth_(cb)){
return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
} else {
return null;
}
}));

G__43670.onStop((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweens","tweens",-1927735551),id], null),null);
}));

return G__43670;
})();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweens","tweens",-1927735551),id], null),tween);
}
}));

(tetris.render.gameplay.matrix.start_board_bounce_tween_BANG_.cljs$lang$maxFixedArity = 6);

tetris.render.gameplay.matrix.apply_bounce = (function tetris$render$gameplay$matrix$apply_bounce(view,game_state,input){
var seq__43681_43725 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-left","move-left",-271562811),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-right","move-right",1661359569),(1)], null)], null));
var chunk__43682_43726 = null;
var count__43683_43727 = (0);
var i__43684_43728 = (0);
while(true){
if((i__43684_43728 < count__43683_43727)){
var vec__43701_43729 = chunk__43682_43726.cljs$core$IIndexed$_nth$arity$2(null,i__43684_43728);
var button_43730 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43701_43729,(0),null);
var dir_43731 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43701_43729,(1),null);
if(cljs.core.truth_(cljs.core.some(((function (seq__43681_43725,chunk__43682_43726,count__43683_43727,i__43684_43728,vec__43701_43729,button_43730,dir_43731){
return (function (p1__43680_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__43680_SHARP_,button_43730);
});})(seq__43681_43725,chunk__43682_43726,count__43683_43727,i__43684_43728,vec__43701_43729,button_43730,dir_43731))
,new cljs.core.Keyword(null,"pressed-buttons","pressed-buttons",1426560090).cljs$core$IFn$_invoke$arity$1(input)))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"shift-blocked?","shift-blocked?",-2058728569).cljs$core$IFn$_invoke$arity$1(game_state))){
tetris.render.gameplay.tween_mgr.stop_tween_BANG_(view,new cljs.core.Keyword(null,"board-bounce-shift","board-bounce-shift",945163307));

var px_43732 = (new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot.x - (dir_43731 * (2)));
if((cljs.core.abs(px_43732) <= tetris.render.gameplay.matrix.matrix_bounce_dx_max)){
(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot.x = px_43732);
} else {
}
} else {
}
} else {
tetris.render.gameplay.matrix.start_board_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$3(view,new cljs.core.Keyword(null,"board-bounce-shift","board-bounce-shift",945163307),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(0)], null));
}


var G__43733 = seq__43681_43725;
var G__43734 = chunk__43682_43726;
var G__43735 = count__43683_43727;
var G__43736 = (i__43684_43728 + (1));
seq__43681_43725 = G__43733;
chunk__43682_43726 = G__43734;
count__43683_43727 = G__43735;
i__43684_43728 = G__43736;
continue;
} else {
var temp__5825__auto___43737 = cljs.core.seq(seq__43681_43725);
if(temp__5825__auto___43737){
var seq__43681_43738__$1 = temp__5825__auto___43737;
if(cljs.core.chunked_seq_QMARK_(seq__43681_43738__$1)){
var c__5694__auto___43739 = cljs.core.chunk_first(seq__43681_43738__$1);
var G__43740 = cljs.core.chunk_rest(seq__43681_43738__$1);
var G__43741 = c__5694__auto___43739;
var G__43742 = cljs.core.count(c__5694__auto___43739);
var G__43743 = (0);
seq__43681_43725 = G__43740;
chunk__43682_43726 = G__43741;
count__43683_43727 = G__43742;
i__43684_43728 = G__43743;
continue;
} else {
var vec__43712_43744 = cljs.core.first(seq__43681_43738__$1);
var button_43745 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43712_43744,(0),null);
var dir_43746 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43712_43744,(1),null);
if(cljs.core.truth_(cljs.core.some(((function (seq__43681_43725,chunk__43682_43726,count__43683_43727,i__43684_43728,vec__43712_43744,button_43745,dir_43746,seq__43681_43738__$1,temp__5825__auto___43737){
return (function (p1__43680_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__43680_SHARP_,button_43745);
});})(seq__43681_43725,chunk__43682_43726,count__43683_43727,i__43684_43728,vec__43712_43744,button_43745,dir_43746,seq__43681_43738__$1,temp__5825__auto___43737))
,new cljs.core.Keyword(null,"pressed-buttons","pressed-buttons",1426560090).cljs$core$IFn$_invoke$arity$1(input)))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"shift-blocked?","shift-blocked?",-2058728569).cljs$core$IFn$_invoke$arity$1(game_state))){
tetris.render.gameplay.tween_mgr.stop_tween_BANG_(view,new cljs.core.Keyword(null,"board-bounce-shift","board-bounce-shift",945163307));

var px_43747 = (new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot.x - (dir_43746 * (2)));
if((cljs.core.abs(px_43747) <= tetris.render.gameplay.matrix.matrix_bounce_dx_max)){
(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot.x = px_43747);
} else {
}
} else {
}
} else {
tetris.render.gameplay.matrix.start_board_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$3(view,new cljs.core.Keyword(null,"board-bounce-shift","board-bounce-shift",945163307),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(0)], null));
}


var G__43748 = cljs.core.next(seq__43681_43738__$1);
var G__43749 = null;
var G__43750 = (0);
var G__43751 = (0);
seq__43681_43725 = G__43748;
chunk__43682_43726 = G__43749;
count__43683_43727 = G__43750;
i__43684_43728 = G__43751;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(tetris.core.game.find_event(new cljs.core.Keyword(null,"locked","locked",-1658763820),new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(game_state)))){
tetris.render.gameplay.tween_mgr.stop_tween_BANG_(view,new cljs.core.Keyword(null,"board-bounce-bottom","board-bounce-bottom",-1439651939));

var py = (new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot.y - tetris.render.gameplay.matrix.matrix_bounce_dy_max);
return tetris.render.gameplay.matrix.start_board_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$6(view,new cljs.core.Keyword(null,"board-bounce-bottom","board-bounce-bottom",-1439651939),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),py], null),module$node_modules$$tweenjs$tween_js$dist$tween_cjs.Easing.Cubic.Out,(167),(function (){
return tetris.render.gameplay.matrix.start_board_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$6(view,new cljs.core.Keyword(null,"board-bounce-bottom","board-bounce-bottom",-1439651939),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),module$node_modules$$tweenjs$tween_js$dist$tween_cjs.Easing.Cubic.Out,(344),null);
}));
} else {
return null;
}
});
tetris.render.gameplay.matrix.add_board_cells = (function tetris$render$gameplay$matrix$add_board_cells(view,cell_count){
return tetris.render.gameplay.piece.add_cells(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(view),cell_count,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(view,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"cell","cell",764245084),new cljs.core.Keyword(null,"size","size",1098693007)], null)));
});
tetris.render.gameplay.matrix.render_ghost = (function tetris$render$gameplay$matrix$render_ghost(view,data){
if(((cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"cells","cells",-985166822)], null)))) && (cljs.core.not(new cljs.core.Keyword(null,"ghost","ghost",-1531157576).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc,new cljs.core.Keyword(null,"ghost","ghost",-1531157576),tetris.render.gameplay.matrix.add_board_cells(cljs.core.deref(view),(4)));
} else {
}

return tetris.render.gameplay.piece.render_piece.cljs$core$IFn$_invoke$arity$variadic(view,new cljs.core.Keyword(null,"ghost","ghost",-1531157576).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"ghost","ghost",-1531157576).cljs$core$IFn$_invoke$arity$1(data),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0));
});
tetris.render.gameplay.matrix.render_current = (function tetris$render$gameplay$matrix$render_current(view,data){
if(((cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"cells","cells",-985166822)], null)))) && (cljs.core.not(new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc,new cljs.core.Keyword(null,"current","current",-1088038603),tetris.render.gameplay.matrix.add_board_cells(cljs.core.deref(view),(4)));
} else {
}

return tetris.render.gameplay.piece.render_piece(view,new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(data));
});
tetris.render.gameplay.matrix.render_blocks = (function tetris$render$gameplay$matrix$render_blocks(view,data){
var state_cell_ids = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(data)));
var view_cell_ids = cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view))));
var cell_ids_to_remove = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(view_cell_ids,state_cell_ids);
var seq__43715_43752 = cljs.core.seq(cell_ids_to_remove);
var chunk__43716_43753 = null;
var count__43717_43754 = (0);
var i__43718_43755 = (0);
while(true){
if((i__43718_43755 < count__43717_43754)){
var id_43756 = chunk__43716_43753.cljs$core$IIndexed$_nth$arity$2(null,i__43718_43755);
var temp__5825__auto___43757 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),id_43756], null));
if(cljs.core.truth_(temp__5825__auto___43757)){
var cell_sprite_43758 = temp__5825__auto___43757;
new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).removeChild(cell_sprite_43758);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(view,cljs.core.update,new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id_43756], 0));
} else {
}


var G__43759 = seq__43715_43752;
var G__43760 = chunk__43716_43753;
var G__43761 = count__43717_43754;
var G__43762 = (i__43718_43755 + (1));
seq__43715_43752 = G__43759;
chunk__43716_43753 = G__43760;
count__43717_43754 = G__43761;
i__43718_43755 = G__43762;
continue;
} else {
var temp__5825__auto___43763 = cljs.core.seq(seq__43715_43752);
if(temp__5825__auto___43763){
var seq__43715_43764__$1 = temp__5825__auto___43763;
if(cljs.core.chunked_seq_QMARK_(seq__43715_43764__$1)){
var c__5694__auto___43765 = cljs.core.chunk_first(seq__43715_43764__$1);
var G__43766 = cljs.core.chunk_rest(seq__43715_43764__$1);
var G__43767 = c__5694__auto___43765;
var G__43768 = cljs.core.count(c__5694__auto___43765);
var G__43769 = (0);
seq__43715_43752 = G__43766;
chunk__43716_43753 = G__43767;
count__43717_43754 = G__43768;
i__43718_43755 = G__43769;
continue;
} else {
var id_43770 = cljs.core.first(seq__43715_43764__$1);
var temp__5825__auto___43771__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),id_43770], null));
if(cljs.core.truth_(temp__5825__auto___43771__$1)){
var cell_sprite_43772 = temp__5825__auto___43771__$1;
new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).removeChild(cell_sprite_43772);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(view,cljs.core.update,new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id_43770], 0));
} else {
}


var G__43773 = cljs.core.next(seq__43715_43764__$1);
var G__43774 = null;
var G__43775 = (0);
var G__43776 = (0);
seq__43715_43752 = G__43773;
chunk__43716_43753 = G__43774;
count__43717_43754 = G__43775;
i__43718_43755 = G__43776;
continue;
}
} else {
}
}
break;
}

var seq__43719 = cljs.core.seq(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(data));
var chunk__43720 = null;
var count__43721 = (0);
var i__43722 = (0);
while(true){
if((i__43722 < count__43721)){
var cell = chunk__43720.cljs$core$IIndexed$_nth$arity$2(null,i__43722);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)], null),cljs.core.first(tetris.render.gameplay.matrix.add_board_cells(cljs.core.deref(view),(1))));
}

var temp__5825__auto___43777 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)], null));
if(cljs.core.truth_(temp__5825__auto___43777)){
var cell_sprite_43778 = temp__5825__auto___43777;
(cell_sprite_43778.texture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece-cell-textures","piece-cell-textures",754648682).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"color-index","color-index",560460581).cljs$core$IFn$_invoke$arity$1(cell)));

cell_sprite_43778.position.set(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell));
} else {
}


var G__43779 = seq__43719;
var G__43780 = chunk__43720;
var G__43781 = count__43721;
var G__43782 = (i__43722 + (1));
seq__43719 = G__43779;
chunk__43720 = G__43780;
count__43721 = G__43781;
i__43722 = G__43782;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__43719);
if(temp__5825__auto__){
var seq__43719__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43719__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__43719__$1);
var G__43783 = cljs.core.chunk_rest(seq__43719__$1);
var G__43784 = c__5694__auto__;
var G__43785 = cljs.core.count(c__5694__auto__);
var G__43786 = (0);
seq__43719 = G__43783;
chunk__43720 = G__43784;
count__43721 = G__43785;
i__43722 = G__43786;
continue;
} else {
var cell = cljs.core.first(seq__43719__$1);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)], null),cljs.core.first(tetris.render.gameplay.matrix.add_board_cells(cljs.core.deref(view),(1))));
}

var temp__5825__auto___43787__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)], null));
if(cljs.core.truth_(temp__5825__auto___43787__$1)){
var cell_sprite_43788 = temp__5825__auto___43787__$1;
(cell_sprite_43788.texture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece-cell-textures","piece-cell-textures",754648682).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"color-index","color-index",560460581).cljs$core$IFn$_invoke$arity$1(cell)));

cell_sprite_43788.position.set(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell));
} else {
}


var G__43789 = cljs.core.next(seq__43719__$1);
var G__43790 = null;
var G__43791 = (0);
var G__43792 = (0);
seq__43719 = G__43789;
chunk__43720 = G__43790;
count__43721 = G__43791;
i__43722 = G__43792;
continue;
}
} else {
return null;
}
}
break;
}
});
tetris.render.gameplay.matrix.render_BANG_ = (function tetris$render$gameplay$matrix$render_BANG_(view,data,game_state,input){
tetris.render.gameplay.matrix.render_blocks(view,data);

tetris.render.gameplay.matrix.render_ghost(view,data);

tetris.render.gameplay.matrix.render_current(view,data);

return tetris.render.gameplay.matrix.apply_bounce(view,game_state,input);
});

//# sourceMappingURL=tetris.render.gameplay.matrix.js.map
