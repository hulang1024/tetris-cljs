goog.provide('tetris.core.logic');
tetris.core.logic.board_rows = (20);
tetris.core.logic.board_cols = (10);
tetris.core.logic.piece_matrixs = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3995102208),(1725974048),(2397046464),(3972041792)], null),new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3865101824),(786441792),(4001369184),(3437251712)], null),new cljs.core.Keyword(null,"l","l",1395893423),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3972040896),(3995133952),(1725981216),(2397045472)], null),new cljs.core.Keyword(null,"j","j",-1397974765),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(786440800),(3437234400),(4001417344),(3865108992)], null),new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2144093252),(4013100800),(872292898),(3438739696)], null),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3422604288),(3422604288),(3422604288),(3422604288)], null),new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3860915200),(652224032),(2363491552),(3967847552)], null)], null);
tetris.core.logic.__GT_matrix = (function tetris$core$logic$__GT_matrix(code,zero,one){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((4),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__43462_SHARP_){
if(((code & (1 << p1__43462_SHARP_)) != 0)){
return one;
} else {
return zero;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((16)))));
});
/**
 * 查找方块形状矩阵，根据类型和方向
 */
tetris.core.logic.get_piece_shape = (function tetris$core$logic$get_piece_shape(piece_type,dir){
return tetris.core.logic.__GT_matrix(((function (){var fexpr__43463 = (piece_type.cljs$core$IFn$_invoke$arity$1 ? piece_type.cljs$core$IFn$_invoke$arity$1(tetris.core.logic.piece_matrixs) : piece_type.call(null,tetris.core.logic.piece_matrixs));
return (fexpr__43463.cljs$core$IFn$_invoke$arity$1 ? fexpr__43463.cljs$core$IFn$_invoke$arity$1(dir) : fexpr__43463.call(null,dir));
})() & (65535)),null,piece_type);
});
/**
 * 查找方块旋转碰撞检测掩码矩阵，根据类型和方向
 */
tetris.core.logic.get_piece_rotate_mask = (function tetris$core$logic$get_piece_rotate_mask(piece_type,dir){
return tetris.core.logic.__GT_matrix(((function (){var fexpr__43464 = (piece_type.cljs$core$IFn$_invoke$arity$1 ? piece_type.cljs$core$IFn$_invoke$arity$1(tetris.core.logic.piece_matrixs) : piece_type.call(null,tetris.core.logic.piece_matrixs));
return (fexpr__43464.cljs$core$IFn$_invoke$arity$1 ? fexpr__43464.cljs$core$IFn$_invoke$arity$1(dir) : fexpr__43464.call(null,dir));
})() & (65535)),(0),(1));
});
/**
 * 返回旋转后的方向
 */
tetris.core.logic.rotate = (function tetris$core$logic$rotate(closewise_QMARK_,dir){
if(cljs.core.truth_(closewise_QMARK_)){
return cljs.core.mod((dir + (1)),(4));
} else {
if((dir > (0))){
return (dir - (1));
} else {
return (3);
}
}
});

//# sourceMappingURL=tetris.core.logic.js.map
