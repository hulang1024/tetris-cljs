goog.provide('tetris.core.piece');
tetris.core.piece.Rotation = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),(0),(1),(2),(3)], null);
tetris.core.piece.Turn = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"cw","cw",1918771037),new cljs.core.Keyword(null,"ccw","ccw",-1676880533),new cljs.core.Keyword(null,"180","180",-2051609953)], null);
tetris.core.piece.piece_kinds = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.Keyword(null,"l","l",1395893423),new cljs.core.Keyword(null,"j","j",-1397974765),new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.Keyword(null,"o","o",-1350007228)], null);
tetris.core.piece.PieceKind = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432)], null),tetris.core.piece.piece_kinds);
tetris.core.piece.Piece = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kind","kind",-717265803),tetris.core.piece.PieceKind], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rot","rot",757545242),tetris.core.piece.Rotation], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rs","rs",913581969),tetris.core.rs.RotationSystem], null)], null);
tetris.core.piece.rotate = (function tetris$core$piece$rotate(piece,turn){
var rot = new cljs.core.Keyword(null,"rot","rot",757545242).cljs$core$IFn$_invoke$arity$1(piece);
var rot__$1 = (function (){var G__47000 = turn;
var G__47000__$1 = (((G__47000 instanceof cljs.core.Keyword))?G__47000.fqn:null);
switch (G__47000__$1) {
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
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47000__$1))));

}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(piece,new cljs.core.Keyword(null,"rot","rot",757545242),rot__$1);
});
tetris.core.piece.reset_rotation = (function tetris$core$piece$reset_rotation(piece){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(piece,new cljs.core.Keyword(null,"rot","rot",757545242),(0));
});
tetris.core.piece.__GT_piece = (function tetris$core$piece$__GT_piece(id,kind,rot,rs){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"kind","kind",-717265803),kind,new cljs.core.Keyword(null,"rot","rot",757545242),rot,new cljs.core.Keyword(null,"rs","rs",913581969),rs], null);
});

//# sourceMappingURL=tetris.core.piece.js.map
