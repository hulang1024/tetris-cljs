goog.provide('tetris.scenes.gameplay.piece');
var module$node_modules$excalibur$build$dist$excalibur=shadow.js.require("module$node_modules$excalibur$build$dist$excalibur", {});
tetris.scenes.gameplay.piece.grayscale_material_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
tetris.scenes.gameplay.piece.create_grayscale_material_BANG_ = (function tetris$scenes$gameplay$piece$create_grayscale_material_BANG_(){
var or__5162__auto__ = cljs.core.deref(tetris.scenes.gameplay.piece.grayscale_material_ref);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var source = "#version 300 es\n            precision mediump float;\n            in vec2 v_uv;\n            uniform sampler2D u_graphic;\n            uniform float u_alpha;\n            out vec4 fragColor;\n            void main() {\n                         vec4 tex = texture(u_graphic, v_uv);\n                         float avg = 0.2126 * tex.r + 0.7152 * tex.g + 0.0722 * tex.b;\n                         float a = tex.a * u_alpha;\n                         fragColor = vec4(avg * a, avg * a, avg * a, a);\n                         }";
var material = tetris.engine.game.graphicsContext.createMaterial(({"name": "grayscale", "fragmentSource": source}));
return cljs.core.reset_BANG_(tetris.scenes.gameplay.piece.grayscale_material_ref,material);
}
});
tetris.scenes.gameplay.piece.Cell = class tetris$scenes$gameplay$piece$Cell extends module$node_modules$excalibur$build$dist$excalibur.Actor {
  constructor(G__37451,G__37452,G__37453) {
var pos_37489 = G__37451;
var sprite_37490__$1 = G__37452;
var ghost_QMARK__37491__$1 = G__37453;
super(({"pos": pos_37489, "z": (cljs.core.truth_(ghost_QMARK__37491__$1)?(0):(1)), "anchor": module$node_modules$excalibur$build$dist$excalibur.Vector.Zero}));
var self__ = this;

(self__.sprite = sprite_37490__$1);

(self__.ghost_QMARK_ = ghost_QMARK__37491__$1);
  }
};
(tetris.scenes.gameplay.piece.Cell.prototype.onInitialize = (function (){
var self__ = this;
var this$ = this;
return this$.graphics.add(this$.sprite);
}));
tetris.scenes.gameplay.piece.get_positions = (function tetris$scenes$gameplay$piece$get_positions(piece){
var iter__5649__auto__ = (function tetris$scenes$gameplay$piece$get_positions_$_iter__37454(s__37455){
return (new cljs.core.LazySeq(null,(function (){
var s__37455__$1 = s__37455;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__37455__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var vec__37460 = cljs.core.first(xs__6385__auto__);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37460,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37460,(1),null);
var iterys__5645__auto__ = ((function (s__37455__$1,vec__37460,r,row,xs__6385__auto__,temp__5825__auto__){
return (function tetris$scenes$gameplay$piece$get_positions_$_iter__37454_$_iter__37456(s__37457){
return (new cljs.core.LazySeq(null,((function (s__37455__$1,vec__37460,r,row,xs__6385__auto__,temp__5825__auto__){
return (function (){
var s__37457__$1 = s__37457;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__37457__$1);
if(temp__5825__auto____$1){
var s__37457__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37457__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__37457__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__37459 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__37458 = (0);
while(true){
if((i__37458 < size__5648__auto__)){
var vec__37463 = cljs.core._nth(c__5647__auto__,i__37458);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37463,(0),null);
var cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37463,(1),null);
if((!((cell == null)))){
cljs.core.chunk_append(b__37459,tetris.render.cell__GT_pos((new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(piece) + r),(new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(piece) + c)));

var G__37492 = (i__37458 + (1));
i__37458 = G__37492;
continue;
} else {
var G__37493 = (i__37458 + (1));
i__37458 = G__37493;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37459),tetris$scenes$gameplay$piece$get_positions_$_iter__37454_$_iter__37456(cljs.core.chunk_rest(s__37457__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37459),null);
}
} else {
var vec__37466 = cljs.core.first(s__37457__$2);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37466,(0),null);
var cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37466,(1),null);
if((!((cell == null)))){
return cljs.core.cons(tetris.render.cell__GT_pos((new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(piece) + r),(new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(piece) + c)),tetris$scenes$gameplay$piece$get_positions_$_iter__37454_$_iter__37456(cljs.core.rest(s__37457__$2)));
} else {
var G__37498 = cljs.core.rest(s__37457__$2);
s__37457__$1 = G__37498;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__37455__$1,vec__37460,r,row,xs__6385__auto__,temp__5825__auto__))
,null,null));
});})(s__37455__$1,vec__37460,r,row,xs__6385__auto__,temp__5825__auto__))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,row)));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,tetris$scenes$gameplay$piece$get_positions_$_iter__37454(cljs.core.rest(s__37455__$1)));
} else {
var G__37499 = cljs.core.rest(s__37455__$1);
s__37455__$1 = G__37499;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,tetris.core.piece.get_shape(new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(piece),new cljs.core.Keyword(null,"dir","dir",1734754661).cljs$core$IFn$_invoke$arity$1(piece))));
});
tetris.scenes.gameplay.piece.create_cells = (function tetris$scenes$gameplay$piece$create_cells(piece,ghost_QMARK_){
var piece_src = (function (){var G__37470 = new cljs.core.Keyword(null,"tetr","tetr",1568635164).cljs$core$IFn$_invoke$arity$1(tetris.resources.resources);
var fexpr__37469 = new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(piece);
return (fexpr__37469.cljs$core$IFn$_invoke$arity$1 ? fexpr__37469.cljs$core$IFn$_invoke$arity$1(G__37470) : fexpr__37469.call(null,G__37470));
})();
var sprite = (new module$node_modules$excalibur$build$dist$excalibur.Sprite(({"image": piece_src, "opacity": (cljs.core.truth_(ghost_QMARK_)?0.2:(1)), "destSize": ({"width": (8), "height": (8)})})));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (pos){
return (new tetris.scenes.gameplay.piece.Cell(pos,sprite,ghost_QMARK_));
}),tetris.scenes.gameplay.piece.get_positions(piece));
});
tetris.scenes.gameplay.piece.set_positions = (function tetris$scenes$gameplay$piece$set_positions(piece,cells){
var positions = tetris.scenes.gameplay.piece.get_positions(piece);
var seq__37471_37508 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cells,positions));
var chunk__37472_37509 = null;
var count__37473_37510 = (0);
var i__37474_37511 = (0);
while(true){
if((i__37474_37511 < count__37473_37510)){
var vec__37481_37512 = chunk__37472_37509.cljs$core$IIndexed$_nth$arity$2(null,i__37474_37511);
var cell_37513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37481_37512,(0),null);
var pos_37514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37481_37512,(1),null);
(cell_37513.pos = pos_37514);


var G__37515 = seq__37471_37508;
var G__37516 = chunk__37472_37509;
var G__37517 = count__37473_37510;
var G__37518 = (i__37474_37511 + (1));
seq__37471_37508 = G__37515;
chunk__37472_37509 = G__37516;
count__37473_37510 = G__37517;
i__37474_37511 = G__37518;
continue;
} else {
var temp__5825__auto___37519 = cljs.core.seq(seq__37471_37508);
if(temp__5825__auto___37519){
var seq__37471_37520__$1 = temp__5825__auto___37519;
if(cljs.core.chunked_seq_QMARK_(seq__37471_37520__$1)){
var c__5694__auto___37521 = cljs.core.chunk_first(seq__37471_37520__$1);
var G__37522 = cljs.core.chunk_rest(seq__37471_37520__$1);
var G__37523 = c__5694__auto___37521;
var G__37524 = cljs.core.count(c__5694__auto___37521);
var G__37525 = (0);
seq__37471_37508 = G__37522;
chunk__37472_37509 = G__37523;
count__37473_37510 = G__37524;
i__37474_37511 = G__37525;
continue;
} else {
var vec__37484_37526 = cljs.core.first(seq__37471_37520__$1);
var cell_37527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37484_37526,(0),null);
var pos_37528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37484_37526,(1),null);
(cell_37527.pos = pos_37528);


var G__37529 = cljs.core.next(seq__37471_37520__$1);
var G__37530 = null;
var G__37531 = (0);
var G__37532 = (0);
seq__37471_37508 = G__37529;
chunk__37472_37509 = G__37530;
count__37473_37510 = G__37531;
i__37474_37511 = G__37532;
continue;
}
} else {
}
}
break;
}

return piece;
});
tetris.scenes.gameplay.piece.Piece = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kind","kind",-717265803),tetris.core.piece.Kind], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dir","dir",1734754661),tetris.core.piece.Dir], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells","cells",-985166822),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),cljs.core.some_QMARK_], null)], null)], null);
tetris.scenes.gameplay.piece.create_piece = (function tetris$scenes$gameplay$piece$create_piece(var_args){
var G__37488 = arguments.length;
switch (G__37488) {
case 2:
return tetris.scenes.gameplay.piece.create_piece.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tetris.scenes.gameplay.piece.create_piece.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(tetris.scenes.gameplay.piece.create_piece.cljs$core$IFn$_invoke$arity$2 = (function (kind,dir){
return tetris.scenes.gameplay.piece.create_piece.cljs$core$IFn$_invoke$arity$3(kind,dir,false);
}));

(tetris.scenes.gameplay.piece.create_piece.cljs$core$IFn$_invoke$arity$3 = (function (kind,dir,ghost_QMARK_){
var piece = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"kind","kind",-717265803),kind,new cljs.core.Keyword(null,"dir","dir",1734754661),dir,new cljs.core.Keyword(null,"row","row",-570139521),(0),new cljs.core.Keyword(null,"col","col",-1959363084),(0)], null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(piece,new cljs.core.Keyword(null,"cells","cells",-985166822),tetris.scenes.gameplay.piece.create_cells(piece,ghost_QMARK_));
}));

(tetris.scenes.gameplay.piece.create_piece.cljs$lang$maxFixedArity = 3);

tetris.scenes.gameplay.piece.set_dir = (function tetris$scenes$gameplay$piece$set_dir(piece,dir){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dir","dir",1734754661).cljs$core$IFn$_invoke$arity$1(piece),dir)){
return tetris.scenes.gameplay.piece.set_positions(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(piece,new cljs.core.Keyword(null,"dir","dir",1734754661),dir),new cljs.core.Keyword(null,"cells","cells",-985166822).cljs$core$IFn$_invoke$arity$1(piece));
} else {
return piece;
}
});
tetris.scenes.gameplay.piece.set_pos = (function tetris$scenes$gameplay$piece$set_pos(piece,row,col){
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(piece),row)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(piece),col)))){
return tetris.scenes.gameplay.piece.set_positions(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(piece,new cljs.core.Keyword(null,"row","row",-570139521),row,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"col","col",-1959363084),(function (){var or__5162__auto__ = col;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(piece);
}
})()], 0)),new cljs.core.Keyword(null,"cells","cells",-985166822).cljs$core$IFn$_invoke$arity$1(piece));
} else {
return piece;
}
});

//# sourceMappingURL=tetris.scenes.gameplay.piece.js.map
