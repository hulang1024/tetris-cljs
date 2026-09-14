goog.provide('tetris.core.piece');
tetris.core.piece.Dir = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),(0),(1),(2),(3)], null);
tetris.core.piece.Kind = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.Keyword(null,"l","l",1395893423),new cljs.core.Keyword(null,"j","j",-1397974765),new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"t","t",-1397832519)], null);
tetris.core.piece.Matrix_of = (function tetris$core$piece$Matrix_of(elem){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(4)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(4)], null),elem], null)], null);
});
tetris.core.piece.Shape = tetris.core.piece.Matrix_of(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),tetris.core.piece.Kind], null));
tetris.core.piece.BitMatrix = tetris.core.piece.Matrix_of(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),(0),(1)], null));
tetris.core.piece.Piece = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kind","kind",-717265803),tetris.core.piece.Kind], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dir","dir",1734754661),tetris.core.piece.Dir], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shape","shape",1190694006),tetris.core.piece.Shape], null)], null);
tetris.core.piece.pieces = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3995102208),(1725974048),(2397046464),(3972041792)], null),new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3865101824),(786441792),(4001369184),(3437251712)], null),new cljs.core.Keyword(null,"l","l",1395893423),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3972040896),(3995133952),(1725981216),(2397045472)], null),new cljs.core.Keyword(null,"j","j",-1397974765),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(786440800),(3437234400),(4001417344),(3865108992)], null),new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2144093252),(4013100800),(872292898),(3438739696)], null),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3422604288),(3422604288),(3422604288),(3422604288)], null),new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3860915200),(652224032),(2363491552),(3967847552)], null)], null);
tetris.core.piece.__GT_matrix = (function tetris$core$piece$__GT_matrix(code,zero,one){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((4),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37830_SHARP_){
if(((code & (1 << p1__37830_SHARP_)) != 0)){
return one;
} else {
return zero;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((16)))));
});
/**
 * 查找方块形状矩阵，根据类型和方向
 */
tetris.core.piece.get_shape = (function tetris$core$piece$get_shape(kind,dir){
return tetris.core.piece.__GT_matrix(((function (){var fexpr__37831 = (kind.cljs$core$IFn$_invoke$arity$1 ? kind.cljs$core$IFn$_invoke$arity$1(tetris.core.piece.pieces) : kind.call(null,tetris.core.piece.pieces));
return (fexpr__37831.cljs$core$IFn$_invoke$arity$1 ? fexpr__37831.cljs$core$IFn$_invoke$arity$1(dir) : fexpr__37831.call(null,dir));
})() & (65535)),null,kind);
});
/**
 * 查找方块旋转碰撞检测掩码矩阵，根据类型和方向
 */
tetris.core.piece.get_rotate_mask = (function tetris$core$piece$get_rotate_mask(kind,dir){
return tetris.core.piece.__GT_matrix(((function (){var fexpr__37832 = (kind.cljs$core$IFn$_invoke$arity$1 ? kind.cljs$core$IFn$_invoke$arity$1(tetris.core.piece.pieces) : kind.call(null,tetris.core.piece.pieces));
return (fexpr__37832.cljs$core$IFn$_invoke$arity$1 ? fexpr__37832.cljs$core$IFn$_invoke$arity$1(dir) : fexpr__37832.call(null,dir));
})() & (65535)),(0),(1));
});
tetris.core.piece.make_piece = (function tetris$core$piece$make_piece(kind,dir){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"kind","kind",-717265803),kind,new cljs.core.Keyword(null,"dir","dir",1734754661),dir,new cljs.core.Keyword(null,"shape","shape",1190694006),tetris.core.piece.get_shape(kind,dir)], null);
});
/**
 * 返回随机种类形状
 */
tetris.core.piece.rand_kind = (function tetris$core$piece$rand_kind(rand_range){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(tetris.core.piece.pieces),(rand_range.cljs$core$IFn$_invoke$arity$2 ? rand_range.cljs$core$IFn$_invoke$arity$2((0),(6)) : rand_range.call(null,(0),(6))));
});
/**
 * 返回随机方向
 */
tetris.core.piece.rand_dir = (function tetris$core$piece$rand_dir(rand_range){
return (rand_range.cljs$core$IFn$_invoke$arity$2 ? rand_range.cljs$core$IFn$_invoke$arity$2((0),(3)) : rand_range.call(null,(0),(3)));
});
/**
 * 返回旋转后的方向
 */
tetris.core.piece.rotate = (function tetris$core$piece$rotate(clockwise,dir){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clockwise,new cljs.core.Keyword(null,"cw","cw",1918771037))){
return cljs.core.mod((dir + (1)),(4));
} else {
if((dir > (0))){
return (dir - (1));
} else {
return (3);
}
}
});

//# sourceMappingURL=tetris.core.piece.js.map
