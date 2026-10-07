goog.provide('tetris.render.gameplay.matrix');
var module$node_modules$$tweenjs$tween_js$dist$tween_cjs=shadow.js.require("module$node_modules$$tweenjs$tween_js$dist$tween_cjs", {});
var module$node_modules$pixi_DOT_js$lib$index=shadow.js.require("module$node_modules$pixi_DOT_js$lib$index", {});
tetris.render.gameplay.matrix.matrix_bounce_max_dx = (10);
tetris.render.gameplay.matrix.matrix_bounce_max_dy = (10);
tetris.render.gameplay.matrix.draw_frame = (function tetris$render$gameplay$matrix$draw_frame(g,p__51125){
var map__51126 = p__51125;
var map__51126__$1 = cljs.core.__destructure_map(map__51126);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51126__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51126__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var border_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51126__$1,new cljs.core.Keyword(null,"border-width","border-width",-1512605390));
var G__51127 = g;
G__51127.moveTo((0),(0));

G__51127.lineTo((0),height);

G__51127.lineTo(width,height);

G__51127.lineTo(width,(0));

G__51127.stroke(({"width": border_width, "color": (11184810), "join": "bevel"}));

G__51127.rect((border_width / (2)),(0),(width - border_width),(height - (border_width / (2))));

G__51127.fill(({"color": (1118481), "alpha": 0.3}));

return G__51127;
});
tetris.render.gameplay.matrix.draw_grid = (function tetris$render$gameplay$matrix$draw_grid(g,p__51128){
var map__51129 = p__51128;
var map__51129__$1 = cljs.core.__destructure_map(map__51129);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51129__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51129__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var border_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51129__$1,new cljs.core.Keyword(null,"border-width","border-width",-1512605390));
var padding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51129__$1,new cljs.core.Keyword(null,"padding","padding",1660304693));
var cell = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51129__$1,new cljs.core.Keyword(null,"cell","cell",764245084));
var seq__51130_51186 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(tetris.core.board.board_rows - (2))));
var chunk__51131_51187 = null;
var count__51132_51188 = (0);
var i__51133_51189 = (0);
while(true){
if((i__51133_51189 < count__51132_51188)){
var r_51190 = chunk__51131_51187.cljs$core$IIndexed$_nth$arity$2(null,i__51133_51189);
var y_51191 = (r_51190 * new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(cell));
g.moveTo(new cljs.core.Keyword(null,"base-x","base-x",-13745014).cljs$core$IFn$_invoke$arity$1(cell),y_51191);

g.lineTo(((width - (border_width / (2))) - padding),y_51191);


var G__51192 = seq__51130_51186;
var G__51193 = chunk__51131_51187;
var G__51194 = count__51132_51188;
var G__51195 = (i__51133_51189 + (1));
seq__51130_51186 = G__51192;
chunk__51131_51187 = G__51193;
count__51132_51188 = G__51194;
i__51133_51189 = G__51195;
continue;
} else {
var temp__5825__auto___51196 = cljs.core.seq(seq__51130_51186);
if(temp__5825__auto___51196){
var seq__51130_51197__$1 = temp__5825__auto___51196;
if(cljs.core.chunked_seq_QMARK_(seq__51130_51197__$1)){
var c__5694__auto___51198 = cljs.core.chunk_first(seq__51130_51197__$1);
var G__51199 = cljs.core.chunk_rest(seq__51130_51197__$1);
var G__51200 = c__5694__auto___51198;
var G__51201 = cljs.core.count(c__5694__auto___51198);
var G__51202 = (0);
seq__51130_51186 = G__51199;
chunk__51131_51187 = G__51200;
count__51132_51188 = G__51201;
i__51133_51189 = G__51202;
continue;
} else {
var r_51204 = cljs.core.first(seq__51130_51197__$1);
var y_51205 = (r_51204 * new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(cell));
g.moveTo(new cljs.core.Keyword(null,"base-x","base-x",-13745014).cljs$core$IFn$_invoke$arity$1(cell),y_51205);

g.lineTo(((width - (border_width / (2))) - padding),y_51205);


var G__51206 = cljs.core.next(seq__51130_51197__$1);
var G__51207 = null;
var G__51208 = (0);
var G__51209 = (0);
seq__51130_51186 = G__51206;
chunk__51131_51187 = G__51207;
count__51132_51188 = G__51208;
i__51133_51189 = G__51209;
continue;
}
} else {
}
}
break;
}

var seq__51137_51210 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(10)));
var chunk__51138_51211 = null;
var count__51139_51212 = (0);
var i__51140_51213 = (0);
while(true){
if((i__51140_51213 < count__51139_51212)){
var c_51214 = chunk__51138_51211.cljs$core$IIndexed$_nth$arity$2(null,i__51140_51213);
var x_51215 = ((c_51214 * new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(cell)) + new cljs.core.Keyword(null,"base-x","base-x",-13745014).cljs$core$IFn$_invoke$arity$1(cell));
g.moveTo(x_51215,(0));

g.lineTo(x_51215,((height - (border_width / (2))) - padding));


var G__51216 = seq__51137_51210;
var G__51217 = chunk__51138_51211;
var G__51218 = count__51139_51212;
var G__51219 = (i__51140_51213 + (1));
seq__51137_51210 = G__51216;
chunk__51138_51211 = G__51217;
count__51139_51212 = G__51218;
i__51140_51213 = G__51219;
continue;
} else {
var temp__5825__auto___51220 = cljs.core.seq(seq__51137_51210);
if(temp__5825__auto___51220){
var seq__51137_51221__$1 = temp__5825__auto___51220;
if(cljs.core.chunked_seq_QMARK_(seq__51137_51221__$1)){
var c__5694__auto___51222 = cljs.core.chunk_first(seq__51137_51221__$1);
var G__51223 = cljs.core.chunk_rest(seq__51137_51221__$1);
var G__51224 = c__5694__auto___51222;
var G__51225 = cljs.core.count(c__5694__auto___51222);
var G__51226 = (0);
seq__51137_51210 = G__51223;
chunk__51138_51211 = G__51224;
count__51139_51212 = G__51225;
i__51140_51213 = G__51226;
continue;
} else {
var c_51227 = cljs.core.first(seq__51137_51221__$1);
var x_51228 = ((c_51227 * new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(cell)) + new cljs.core.Keyword(null,"base-x","base-x",-13745014).cljs$core$IFn$_invoke$arity$1(cell));
g.moveTo(x_51228,(0));

g.lineTo(x_51228,((height - (border_width / (2))) - padding));


var G__51229 = cljs.core.next(seq__51137_51221__$1);
var G__51230 = null;
var G__51231 = (0);
var G__51232 = (0);
seq__51137_51210 = G__51229;
chunk__51138_51211 = G__51230;
count__51139_51212 = G__51231;
i__51140_51213 = G__51232;
continue;
}
} else {
}
}
break;
}

return g.stroke(({"pixelLine": true, "color": (15658734), "alpha": 0.1}));
});
tetris.render.gameplay.matrix.create = (function tetris$render$gameplay$matrix$create(matrix_layout){
var map__51143 = matrix_layout;
var map__51143__$1 = cljs.core.__destructure_map(map__51143);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51143__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51143__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var cell = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51143__$1,new cljs.core.Keyword(null,"cell","cell",764245084));
var container = (new module$node_modules$pixi_DOT_js$lib$index.Container(({"label": "matrix", "sortableChildren": true})));
var g = (new module$node_modules$pixi_DOT_js$lib$index.Graphics(({"label": "matrix"})));
tetris.render.gameplay.matrix.draw_grid(g,matrix_layout);

tetris.render.gameplay.matrix.draw_frame(g,matrix_layout);

container.position.set(x,y);

container.addChild(g);

container.addChild(tetris.render.gameplay.piece.piece_container(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"ghost",new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.Keyword(null,"zIndex","zIndex",-1588341609),(2),new cljs.core.Keyword(null,"ghost?","ghost?",864936484),true], null)));

container.addChild(tetris.render.gameplay.piece.piece_container(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"current",new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(cell)], null)));

return container;
});
tetris.render.gameplay.matrix.start_bounce_tween_BANG_ = (function tetris$render$gameplay$matrix$start_bounce_tween_BANG_(var_args){
var G__51145 = arguments.length;
switch (G__51145) {
case 3:
return tetris.render.gameplay.matrix.start_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return tetris.render.gameplay.matrix.start_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 6:
return tetris.render.gameplay.matrix.start_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(tetris.render.gameplay.matrix.start_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (view,id,to_values){
return tetris.render.gameplay.matrix.start_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$6(view,id,to_values,null,null,null);
}));

(tetris.render.gameplay.matrix.start_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (view,id,to_values,cb){
return tetris.render.gameplay.matrix.start_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$6(view,id,to_values,null,null,cb);
}));

(tetris.render.gameplay.matrix.start_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$6 = (function (view,id,to_values,easing,duration,cb){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweens","tweens",-1927735551),id], null)))){
return null;
} else {
var tween = (function (){var G__51146 = (new module$node_modules$$tweenjs$tween_js$dist$tween_cjs.Tween(new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot));
G__51146.to(cljs.core.clj__GT_js(to_values),(function (){var or__5162__auto__ = duration;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (344);
}
})());

G__51146.easing((function (){var or__5162__auto__ = easing;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return module$node_modules$$tweenjs$tween_js$dist$tween_cjs.Easing.Cubic.Out;
}
})());

G__51146.start();

G__51146.onComplete((function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweens","tweens",-1927735551),id], null),null);

if(cljs.core.truth_(cb)){
return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
} else {
return null;
}
}));

G__51146.onStop((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweens","tweens",-1927735551),id], null),null);
}));

return G__51146;
})();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tweens","tweens",-1927735551),id], null),tween);
}
}));

(tetris.render.gameplay.matrix.start_bounce_tween_BANG_.cljs$lang$maxFixedArity = 6);

tetris.render.gameplay.matrix.apply_bounce = (function tetris$render$gameplay$matrix$apply_bounce(view,game_state,input){
if(cljs.core.truth_(new cljs.core.Keyword(null,"shift-blocked?","shift-blocked?",-2058728569).cljs$core$IFn$_invoke$arity$1(game_state))){
var pressed_buttons_51235 = cljs.core.set(new cljs.core.Keyword(null,"pressed-buttons","pressed-buttons",1426560090).cljs$core$IFn$_invoke$arity$1(input));
var vec__51150_51236 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__51153){
var vec__51154 = p__51153;
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51154,(0),null);
return cljs.core.contains_QMARK_(pressed_buttons_51235,b);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-left","move-left",-271562811),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-right","move-right",1661359569),(-1)], null)], null)));
var button_51237 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51150_51236,(0),null);
var dir_51238 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51150_51236,(1),null);
if(cljs.core.truth_(button_51237)){
tetris.render.gameplay.tween_mgr.stop_tween_BANG_(view,new cljs.core.Keyword(null,"board-bounce-shift","board-bounce-shift",945163307));

var px_51239 = (new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot.x + (dir_51238 * (2)));
if((cljs.core.abs(px_51239) <= tetris.render.gameplay.matrix.matrix_bounce_max_dx)){
(new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot.x = px_51239);
} else {
}
} else {
tetris.render.gameplay.matrix.start_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$3(view,new cljs.core.Keyword(null,"board-bounce-shift","board-bounce-shift",945163307),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(0)], null));
}
} else {
}

if(cljs.core.truth_(tetris.core.game.find_event(new cljs.core.Keyword(null,"locked","locked",-1658763820),new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(game_state)))){
tetris.render.gameplay.tween_mgr.stop_tween_BANG_(view,new cljs.core.Keyword(null,"board-bounce-bottom","board-bounce-bottom",-1439651939));

var py = (new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).pivot.y - tetris.render.gameplay.matrix.matrix_bounce_max_dy);
return tetris.render.gameplay.matrix.start_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$6(view,new cljs.core.Keyword(null,"board-bounce-bottom","board-bounce-bottom",-1439651939),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),py], null),module$node_modules$$tweenjs$tween_js$dist$tween_cjs.Easing.Cubic.Out,(167),(function (){
return tetris.render.gameplay.matrix.start_bounce_tween_BANG_.cljs$core$IFn$_invoke$arity$6(view,new cljs.core.Keyword(null,"board-bounce-bottom","board-bounce-bottom",-1439651939),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),module$node_modules$$tweenjs$tween_js$dist$tween_cjs.Easing.Cubic.Out,(344),null);
}));
} else {
return null;
}
});
tetris.render.gameplay.matrix.add_matrix_cells = (function tetris$render$gameplay$matrix$add_matrix_cells(view,cell_count){
return tetris.render.gameplay.piece.add_cells(new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(view),cell_count,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(view,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"matrix","matrix",803137200),new cljs.core.Keyword(null,"cell","cell",764245084),new cljs.core.Keyword(null,"size","size",1098693007)], null)));
});
tetris.render.gameplay.matrix.render_ghost = (function tetris$render$gameplay$matrix$render_ghost(view,data,game_state){
var ghost = new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).getChildByLabel("ghost");
tetris.render.gameplay.piece.render_piece(cljs.core.deref(view),ghost,new cljs.core.Keyword(null,"ghost","ghost",-1531157576).cljs$core$IFn$_invoke$arity$1(data));

((ghost.filters[(0)]).color = (16777215));

return ((ghost.filters[(0)]).alpha = ((1) - (new cljs.core.Keyword("tetris.core.tick","lock-timer","tetris.core.tick/lock-timer",-1741962176).cljs$core$IFn$_invoke$arity$1(game_state) / tetris.core.ruleset.lock_delay.cljs$core$IFn$_invoke$arity$1(game_state))));
});
tetris.render.gameplay.matrix.render_current = (function tetris$render$gameplay$matrix$render_current(view,data){
var current = new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).getChildByLabel("current");
return tetris.render.gameplay.piece.render_piece(cljs.core.deref(view),current,new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(data));
});
tetris.render.gameplay.matrix.render_blocks = (function tetris$render$gameplay$matrix$render_blocks(view,data){
var state_cell_ids = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(data)));
var view_cell_ids = cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view))));
var cell_ids_to_remove = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(view_cell_ids,state_cell_ids);
var seq__51175_51240 = cljs.core.seq(cell_ids_to_remove);
var chunk__51176_51241 = null;
var count__51177_51242 = (0);
var i__51178_51243 = (0);
while(true){
if((i__51178_51243 < count__51177_51242)){
var id_51244 = chunk__51176_51241.cljs$core$IIndexed$_nth$arity$2(null,i__51178_51243);
var temp__5825__auto___51246 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),id_51244], null));
if(cljs.core.truth_(temp__5825__auto___51246)){
var cell_sprite_51247 = temp__5825__auto___51246;
new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).removeChild(cell_sprite_51247);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(view,cljs.core.update,new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id_51244], 0));
} else {
}


var G__51248 = seq__51175_51240;
var G__51249 = chunk__51176_51241;
var G__51250 = count__51177_51242;
var G__51251 = (i__51178_51243 + (1));
seq__51175_51240 = G__51248;
chunk__51176_51241 = G__51249;
count__51177_51242 = G__51250;
i__51178_51243 = G__51251;
continue;
} else {
var temp__5825__auto___51252 = cljs.core.seq(seq__51175_51240);
if(temp__5825__auto___51252){
var seq__51175_51253__$1 = temp__5825__auto___51252;
if(cljs.core.chunked_seq_QMARK_(seq__51175_51253__$1)){
var c__5694__auto___51254 = cljs.core.chunk_first(seq__51175_51253__$1);
var G__51255 = cljs.core.chunk_rest(seq__51175_51253__$1);
var G__51256 = c__5694__auto___51254;
var G__51257 = cljs.core.count(c__5694__auto___51254);
var G__51258 = (0);
seq__51175_51240 = G__51255;
chunk__51176_51241 = G__51256;
count__51177_51242 = G__51257;
i__51178_51243 = G__51258;
continue;
} else {
var id_51259 = cljs.core.first(seq__51175_51253__$1);
var temp__5825__auto___51260__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),id_51259], null));
if(cljs.core.truth_(temp__5825__auto___51260__$1)){
var cell_sprite_51261 = temp__5825__auto___51260__$1;
new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)).removeChild(cell_sprite_51261);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(view,cljs.core.update,new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id_51259], 0));
} else {
}


var G__51262 = cljs.core.next(seq__51175_51253__$1);
var G__51263 = null;
var G__51264 = (0);
var G__51265 = (0);
seq__51175_51240 = G__51262;
chunk__51176_51241 = G__51263;
count__51177_51242 = G__51264;
i__51178_51243 = G__51265;
continue;
}
} else {
}
}
break;
}

var seq__51180 = cljs.core.seq(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(data));
var chunk__51181 = null;
var count__51182 = (0);
var i__51183 = (0);
while(true){
if((i__51183 < count__51182)){
var cell = chunk__51181.cljs$core$IIndexed$_nth$arity$2(null,i__51183);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)], null),cljs.core.first(tetris.render.gameplay.matrix.add_matrix_cells(cljs.core.deref(view),(1))));
}

var temp__5825__auto___51266 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)], null));
if(cljs.core.truth_(temp__5825__auto___51266)){
var cell_sprite_51267 = temp__5825__auto___51266;
(cell_sprite_51267.texture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece-cell-textures","piece-cell-textures",754648682).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"color-index","color-index",560460581).cljs$core$IFn$_invoke$arity$1(cell)));

cell_sprite_51267.position.set(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell));
} else {
}


var G__51268 = seq__51180;
var G__51269 = chunk__51181;
var G__51270 = count__51182;
var G__51271 = (i__51183 + (1));
seq__51180 = G__51268;
chunk__51181 = G__51269;
count__51182 = G__51270;
i__51183 = G__51271;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__51180);
if(temp__5825__auto__){
var seq__51180__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51180__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__51180__$1);
var G__51272 = cljs.core.chunk_rest(seq__51180__$1);
var G__51273 = c__5694__auto__;
var G__51274 = cljs.core.count(c__5694__auto__);
var G__51275 = (0);
seq__51180 = G__51272;
chunk__51181 = G__51273;
count__51182 = G__51274;
i__51183 = G__51275;
continue;
} else {
var cell = cljs.core.first(seq__51180__$1);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(view,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)], null),cljs.core.first(tetris.render.gameplay.matrix.add_matrix_cells(cljs.core.deref(view),(1))));
}

var temp__5825__auto___51276__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(view),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)], null));
if(cljs.core.truth_(temp__5825__auto___51276__$1)){
var cell_sprite_51277 = temp__5825__auto___51276__$1;
(cell_sprite_51277.texture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"piece-cell-textures","piece-cell-textures",754648682).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),new cljs.core.Keyword(null,"color-index","color-index",560460581).cljs$core$IFn$_invoke$arity$1(cell)));

cell_sprite_51277.position.set(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell));
} else {
}


var G__51278 = cljs.core.next(seq__51180__$1);
var G__51279 = null;
var G__51280 = (0);
var G__51281 = (0);
seq__51180 = G__51278;
chunk__51181 = G__51279;
count__51182 = G__51280;
i__51183 = G__51281;
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

tetris.render.gameplay.matrix.render_ghost(view,data,game_state);

tetris.render.gameplay.matrix.render_current(view,data);

return tetris.render.gameplay.matrix.apply_bounce(view,game_state,input);
});

//# sourceMappingURL=tetris.render.gameplay.matrix.js.map
