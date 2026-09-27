goog.provide('tetris.core.piece');
tetris.core.piece.Rotation = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),(0),(1),(2),(3)], null);
tetris.core.piece.Turn = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"cw","cw",1918771037),new cljs.core.Keyword(null,"ccw","ccw",-1676880533),new cljs.core.Keyword(null,"180","180",-2051609953)], null);
tetris.core.piece.PieceKind = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.Keyword(null,"l","l",1395893423),new cljs.core.Keyword(null,"j","j",-1397974765),new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"t","t",-1397832519)], null);
tetris.core.piece.cell_filled = true;
tetris.core.piece.cell_empty = false;
tetris.core.piece.piece_kinds = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.Keyword(null,"l","l",1395893423),new cljs.core.Keyword(null,"j","j",-1397974765),new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.Keyword(null,"o","o",-1350007228)], null);
tetris.core.piece.ShapeMatrix = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),(3),new cljs.core.Keyword(null,"max","max",61366548),(4)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),(3),new cljs.core.Keyword(null,"max","max",61366548),(4)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),false,true], null)], null)], null);
tetris.core.piece.Piece = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kind","kind",-717265803),tetris.core.piece.PieceKind], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rot","rot",757545242),tetris.core.piece.Rotation], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cols","cols",-1914801295),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shape","shape",1190694006),tetris.core.piece.ShapeMatrix], null)], null);
tetris.core.piece.Orientations = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),tetris.core.piece.ShapeMatrix,tetris.core.piece.ShapeMatrix,tetris.core.piece.ShapeMatrix,tetris.core.piece.ShapeMatrix], null);
tetris.core.piece.PieceShapes = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),tetris.core.piece.Orientations], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"z","z",-789527183),tetris.core.piece.Orientations], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"l","l",1395893423),tetris.core.piece.Orientations], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"j","j",-1397974765),tetris.core.piece.Orientations], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),tetris.core.piece.Orientations], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),tetris.core.piece.Orientations], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),tetris.core.piece.Orientations], null)], null);
tetris.core.piece.rotate = (function tetris$core$piece$rotate(turn,rot){
var G__39984 = turn;
var G__39984__$1 = (((G__39984 instanceof cljs.core.Keyword))?G__39984.fqn:null);
switch (G__39984__$1) {
case "cw":
return cljs.core.mod((rot + (1)),(4));

break;
case "ccw":
return cljs.core.mod((rot - (1)),(4));

break;
case "180":
return cljs.core.mod((rot + (2)),(4));

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39984__$1))));

}
});
tetris.core.piece.reset_rotation = (function tetris$core$piece$reset_rotation(piece){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(piece,new cljs.core.Keyword(null,"rot","rot",757545242),(0));
});
tetris.core.piece.filled_cells = (function tetris$core$piece$filled_cells(shape){
return cljs.core.vec((function (){var iter__5649__auto__ = (function tetris$core$piece$filled_cells_$_iter__39985(s__39986){
return (new cljs.core.LazySeq(null,(function (){
var s__39986__$1 = s__39986;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__39986__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var vec__39991 = cljs.core.first(xs__6385__auto__);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39991,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39991,(1),null);
var iterys__5645__auto__ = ((function (s__39986__$1,vec__39991,r,row,xs__6385__auto__,temp__5825__auto__){
return (function tetris$core$piece$filled_cells_$_iter__39985_$_iter__39987(s__39988){
return (new cljs.core.LazySeq(null,((function (s__39986__$1,vec__39991,r,row,xs__6385__auto__,temp__5825__auto__){
return (function (){
var s__39988__$1 = s__39988;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__39988__$1);
if(temp__5825__auto____$1){
var s__39988__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__39988__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__39988__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__39990 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__39989 = (0);
while(true){
if((i__39989 < size__5648__auto__)){
var vec__39994 = cljs.core._nth(c__5647__auto__,i__39989);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39994,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39994,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,true)){
cljs.core.chunk_append(b__39990,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null));

var G__40002 = (i__39989 + (1));
i__39989 = G__40002;
continue;
} else {
var G__40003 = (i__39989 + (1));
i__39989 = G__40003;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39990),tetris$core$piece$filled_cells_$_iter__39985_$_iter__39987(cljs.core.chunk_rest(s__39988__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39990),null);
}
} else {
var vec__39997 = cljs.core.first(s__39988__$2);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39997,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39997,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,true)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null),tetris$core$piece$filled_cells_$_iter__39985_$_iter__39987(cljs.core.rest(s__39988__$2)));
} else {
var G__40004 = cljs.core.rest(s__39988__$2);
s__39988__$1 = G__40004;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__39986__$1,vec__39991,r,row,xs__6385__auto__,temp__5825__auto__))
,null,null));
});})(s__39986__$1,vec__39991,r,row,xs__6385__auto__,temp__5825__auto__))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,row)));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,tetris$core$piece$filled_cells_$_iter__39985(cljs.core.rest(s__39986__$1)));
} else {
var G__40005 = cljs.core.rest(s__39986__$1);
s__39986__$1 = G__40005;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,shape));
})());
});
tetris.core.piece.__GT_piece = (function tetris$core$piece$__GT_piece(id,kind,rot,piece_shapes){
var shape = (function (){var fexpr__40000 = (piece_shapes.cljs$core$IFn$_invoke$arity$1 ? piece_shapes.cljs$core$IFn$_invoke$arity$1(kind) : piece_shapes.call(null,kind));
return (fexpr__40000.cljs$core$IFn$_invoke$arity$1 ? fexpr__40000.cljs$core$IFn$_invoke$arity$1(rot) : fexpr__40000.call(null,rot));
})();
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"kind","kind",-717265803),kind,new cljs.core.Keyword(null,"rot","rot",757545242),rot,new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.count(shape),new cljs.core.Keyword(null,"cols","cols",-1914801295),cljs.core.count(cljs.core.first(shape)),new cljs.core.Keyword(null,"cells","cells",-985166822),tetris.core.piece.filled_cells(shape),new cljs.core.Keyword(null,"shape","shape",1190694006),shape], null);
});

//# sourceMappingURL=tetris.core.piece.js.map
