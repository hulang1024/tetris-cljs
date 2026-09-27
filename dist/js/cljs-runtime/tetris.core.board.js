goog.provide('tetris.core.board');
tetris.core.board.Cell = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kind","kind",-717265803),tetris.core.piece.PieceKind], null)], null)], null);
tetris.core.board.Board = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),tetris.core.board.Cell], null)], null);
tetris.core.board.skyline_rows = (2);
tetris.core.board.board_rows = ((20) + (2));
tetris.core.board.board_cols = (10);
tetris.core.board.empty_line = cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((10),null));
tetris.core.board.empty_board = cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(tetris.core.board.board_rows,tetris.core.board.empty_line));
tetris.core.board.filled_QMARK_ = (function tetris$core$board$filled_QMARK_(board,r,c){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null));
});
tetris.core.board.valid_position_QMARK_ = (function tetris$core$board$valid_position_QMARK_(row,col){
return ((((((0) <= row)) && ((row <= (tetris.core.board.board_rows - (1)))))) && (((((0) <= col)) && ((col <= ((10) - (1)))))));
});
tetris.core.board.collide_QMARK_ = (function tetris$core$board$collide_QMARK_(board,piece,row,col){
return cljs.core.boolean$(cljs.core.some((function (p__37241){
var vec__37242 = p__37241;
var cr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37242,(0),null);
var cc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37242,(1),null);
var r = (row + cr);
var c = (col + cc);
var or__5162__auto__ = (!(tetris.core.board.valid_position_QMARK_(r,c)));
if(or__5162__auto__){
return or__5162__auto__;
} else {
return tetris.core.board.filled_QMARK_(board,r,c);
}
}),new cljs.core.Keyword(null,"cells","cells",-985166822).cljs$core$IFn$_invoke$arity$1(piece)));
});
tetris.core.board.lock_piece = (function tetris$core$board$lock_piece(board,piece,row,col){
return cljs.core.vec(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (r,xs){
if((((row <= r)) && ((r <= ((row + new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(piece)) - (1)))))){
return cljs.core.vec(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (c,v){
if((((col <= c)) && ((c <= ((col + new cljs.core.Keyword(null,"cols","cols",-1914801295).cljs$core$IFn$_invoke$arity$1(piece)) - (1)))))){
var cr = (r - row);
var cc = (c - col);
var cell_index = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,v__$1){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cr,cc], null))){
return i;
} else {
return null;
}
}),new cljs.core.Keyword(null,"cells","cells",-985166822).cljs$core$IFn$_invoke$arity$1(piece)));
if(cljs.core.truth_(cell_index)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(piece) + cell_index),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(piece)], null);
} else {
return v;
}
} else {
return v;
}
}),xs));
} else {
return xs;
}
}),board));
});
tetris.core.board.find_full_row_indices = (function tetris$core$board$find_full_row_indices(board){
return cljs.core.set((function (){var iter__5649__auto__ = (function tetris$core$board$find_full_row_indices_$_iter__37261(s__37262){
return (new cljs.core.LazySeq(null,(function (){
var s__37262__$1 = s__37262;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__37262__$1);
if(temp__5825__auto__){
var s__37262__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37262__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__37262__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__37264 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__37263 = (0);
while(true){
if((i__37263 < size__5648__auto__)){
var vec__37265 = cljs.core._nth(c__5647__auto__,i__37263);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37265,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37265,(1),null);
if(cljs.core.every_QMARK_(cljs.core.some_QMARK_,row)){
cljs.core.chunk_append(b__37264,r);

var G__37272 = (i__37263 + (1));
i__37263 = G__37272;
continue;
} else {
var G__37273 = (i__37263 + (1));
i__37263 = G__37273;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37264),tetris$core$board$find_full_row_indices_$_iter__37261(cljs.core.chunk_rest(s__37262__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37264),null);
}
} else {
var vec__37268 = cljs.core.first(s__37262__$2);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37268,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37268,(1),null);
if(cljs.core.every_QMARK_(cljs.core.some_QMARK_,row)){
return cljs.core.cons(r,tetris$core$board$find_full_row_indices_$_iter__37261(cljs.core.rest(s__37262__$2)));
} else {
var G__37274 = cljs.core.rest(s__37262__$2);
s__37262__$1 = G__37274;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,board));
})());
});
tetris.core.board.find_cells_to_clear = (function tetris$core$board$find_cells_to_clear(board,full_row_indices){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (r,xs){
if(cljs.core.contains_QMARK_(full_row_indices,r)){
return xs;
} else {
return null;
}
}),board)], 0)));
});
tetris.core.board.clear_rows = (function tetris$core$board$clear_rows(board,row_indices){
var rest_lines = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (r,xs){
if(cljs.core.contains_QMARK_(row_indices,r)){
return null;
} else {
return xs;
}
}),board));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(row_indices),tetris.core.board.empty_line)),rest_lines);
});
tetris.core.board.lock_out_QMARK_ = (function tetris$core$board$lock_out_QMARK_(row){
return (row <= (0));
});

//# sourceMappingURL=tetris.core.board.js.map
