goog.provide('tetris.core.board');
tetris.core.board.Board = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),tetris.core.piece.Kind], null)], null)], null);
tetris.core.board.board_rows = (20);
tetris.core.board.board_cols = (10);
tetris.core.board.hidden_rows = (4);
tetris.core.board.empty_board = (function tetris$core$board$empty_board(){
return cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((20),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((10),null))));
});
tetris.core.board.collide_QMARK_ = (function tetris$core$board$collide_QMARK_(board,row,col,piece){
return cljs.core.some(cljs.core.false_QMARK_,(function (){var iter__5649__auto__ = (function tetris$core$board$collide_QMARK__$_iter__39529(s__39530){
return (new cljs.core.LazySeq(null,(function (){
var s__39530__$1 = s__39530;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__39530__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var vec__39535 = cljs.core.first(xs__6385__auto__);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39535,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39535,(1),null);
var iterys__5645__auto__ = ((function (s__39530__$1,vec__39535,r,coll,xs__6385__auto__,temp__5825__auto__){
return (function tetris$core$board$collide_QMARK__$_iter__39529_$_iter__39531(s__39532){
return (new cljs.core.LazySeq(null,((function (s__39530__$1,vec__39535,r,coll,xs__6385__auto__,temp__5825__auto__){
return (function (){
var s__39532__$1 = s__39532;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__39532__$1);
if(temp__5825__auto____$1){
var s__39532__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__39532__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__39532__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__39534 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__39533 = (0);
while(true){
if((i__39533 < size__5648__auto__)){
var vec__39538 = cljs.core._nth(c__5647__auto__,i__39533);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39538,(0),null);
var cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39538,(1),null);
if((!((cell == null)))){
var br = (row + r);
var bc = (col + c);
cljs.core.chunk_append(b__39534,((((((- (4)) <= br)) && ((br <= ((20) - (1)))))) && (((((((0) <= bc)) && ((bc <= ((10) - (1)))))) && ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [br,bc], null)) == null))))));

var G__39587 = (i__39533 + (1));
i__39533 = G__39587;
continue;
} else {
var G__39588 = (i__39533 + (1));
i__39533 = G__39588;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39534),tetris$core$board$collide_QMARK__$_iter__39529_$_iter__39531(cljs.core.chunk_rest(s__39532__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39534),null);
}
} else {
var vec__39541 = cljs.core.first(s__39532__$2);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39541,(0),null);
var cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39541,(1),null);
if((!((cell == null)))){
var br = (row + r);
var bc = (col + c);
return cljs.core.cons(((((((- (4)) <= br)) && ((br <= ((20) - (1)))))) && (((((((0) <= bc)) && ((bc <= ((10) - (1)))))) && ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [br,bc], null)) == null))))),tetris$core$board$collide_QMARK__$_iter__39529_$_iter__39531(cljs.core.rest(s__39532__$2)));
} else {
var G__39589 = cljs.core.rest(s__39532__$2);
s__39532__$1 = G__39589;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__39530__$1,vec__39535,r,coll,xs__6385__auto__,temp__5825__auto__))
,null,null));
});})(s__39530__$1,vec__39535,r,coll,xs__6385__auto__,temp__5825__auto__))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,coll)));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,tetris$core$board$collide_QMARK__$_iter__39529(cljs.core.rest(s__39530__$1)));
} else {
var G__39590 = cljs.core.rest(s__39530__$1);
s__39530__$1 = G__39590;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,new cljs.core.Keyword(null,"shape","shape",1190694006).cljs$core$IFn$_invoke$arity$1(piece)));
})());
});
tetris.core.board.lock_piece = (function tetris$core$board$lock_piece(board,piece,row,col){
var shape = new cljs.core.Keyword(null,"shape","shape",1190694006).cljs$core$IFn$_invoke$arity$1(piece);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((10),(function (){var iter__5649__auto__ = (function tetris$core$board$lock_piece_$_iter__39544(s__39545){
return (new cljs.core.LazySeq(null,(function (){
var s__39545__$1 = s__39545;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__39545__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var vec__39550 = cljs.core.first(xs__6385__auto__);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39550,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39550,(1),null);
var iterys__5645__auto__ = ((function (s__39545__$1,vec__39550,r,coll,xs__6385__auto__,temp__5825__auto__,shape){
return (function tetris$core$board$lock_piece_$_iter__39544_$_iter__39546(s__39547){
return (new cljs.core.LazySeq(null,((function (s__39545__$1,vec__39550,r,coll,xs__6385__auto__,temp__5825__auto__,shape){
return (function (){
var s__39547__$1 = s__39547;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__39547__$1);
if(temp__5825__auto____$1){
var s__39547__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__39547__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__39547__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__39549 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__39548 = (0);
while(true){
if((i__39548 < size__5648__auto__)){
var vec__39553 = cljs.core._nth(c__5647__auto__,i__39548);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39553,(0),null);
var cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39553,(1),null);
cljs.core.chunk_append(b__39549,((((((((row - (1)) < r)) && ((r < (row + (4)))))) && (((((col - (1)) < c)) && ((c < (col + (4))))))))?(function (){var v = (function (){var G__39558 = (c - col);
var fexpr__39557 = (function (){var G__39559 = (r - row);
return (shape.cljs$core$IFn$_invoke$arity$1 ? shape.cljs$core$IFn$_invoke$arity$1(G__39559) : shape.call(null,G__39559));
})();
return (fexpr__39557.cljs$core$IFn$_invoke$arity$1 ? fexpr__39557.cljs$core$IFn$_invoke$arity$1(G__39558) : fexpr__39557.call(null,G__39558));
})();
if(cljs.core.truth_(cell)){
return cell;
} else {
return v;
}
})():cell));

var G__39591 = (i__39548 + (1));
i__39548 = G__39591;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39549),tetris$core$board$lock_piece_$_iter__39544_$_iter__39546(cljs.core.chunk_rest(s__39547__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39549),null);
}
} else {
var vec__39560 = cljs.core.first(s__39547__$2);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39560,(0),null);
var cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39560,(1),null);
return cljs.core.cons(((((((((row - (1)) < r)) && ((r < (row + (4)))))) && (((((col - (1)) < c)) && ((c < (col + (4))))))))?(function (){var v = (function (){var G__39565 = (c - col);
var fexpr__39564 = (function (){var G__39566 = (r - row);
return (shape.cljs$core$IFn$_invoke$arity$1 ? shape.cljs$core$IFn$_invoke$arity$1(G__39566) : shape.call(null,G__39566));
})();
return (fexpr__39564.cljs$core$IFn$_invoke$arity$1 ? fexpr__39564.cljs$core$IFn$_invoke$arity$1(G__39565) : fexpr__39564.call(null,G__39565));
})();
if(cljs.core.truth_(cell)){
return cell;
} else {
return v;
}
})():cell),tetris$core$board$lock_piece_$_iter__39544_$_iter__39546(cljs.core.rest(s__39547__$2)));
}
} else {
return null;
}
break;
}
});})(s__39545__$1,vec__39550,r,coll,xs__6385__auto__,temp__5825__auto__,shape))
,null,null));
});})(s__39545__$1,vec__39550,r,coll,xs__6385__auto__,temp__5825__auto__,shape))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,coll)));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,tetris$core$board$lock_piece_$_iter__39544(cljs.core.rest(s__39545__$1)));
} else {
var G__39592 = cljs.core.rest(s__39545__$1);
s__39545__$1 = G__39592;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,board));
})()));
});
tetris.core.board.find_full_rows = (function tetris$core$board$find_full_rows(board){
var iter__5649__auto__ = (function tetris$core$board$find_full_rows_$_iter__39567(s__39568){
return (new cljs.core.LazySeq(null,(function (){
var s__39568__$1 = s__39568;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__39568__$1);
if(temp__5825__auto__){
var s__39568__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__39568__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__39568__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__39570 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__39569 = (0);
while(true){
if((i__39569 < size__5648__auto__)){
var vec__39571 = cljs.core._nth(c__5647__auto__,i__39569);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39571,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39571,(1),null);
if(cljs.core.every_QMARK_(cljs.core.some_QMARK_,coll)){
cljs.core.chunk_append(b__39570,r);

var G__39593 = (i__39569 + (1));
i__39569 = G__39593;
continue;
} else {
var G__39594 = (i__39569 + (1));
i__39569 = G__39594;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39570),tetris$core$board$find_full_rows_$_iter__39567(cljs.core.chunk_rest(s__39568__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39570),null);
}
} else {
var vec__39574 = cljs.core.first(s__39568__$2);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39574,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39574,(1),null);
if(cljs.core.every_QMARK_(cljs.core.some_QMARK_,coll)){
return cljs.core.cons(r,tetris$core$board$find_full_rows_$_iter__39567(cljs.core.rest(s__39568__$2)));
} else {
var G__39595 = cljs.core.rest(s__39568__$2);
s__39568__$1 = G__39595;
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
});
tetris.core.board.clear_lines = (function tetris$core$board$clear_lines(board){
var clear_rows = cljs.core.set(tetris.core.board.find_full_rows(board));
if(cljs.core.seq(clear_rows)){
var rest_rows = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,(function (){var iter__5649__auto__ = (function tetris$core$board$clear_lines_$_iter__39577(s__39578){
return (new cljs.core.LazySeq(null,(function (){
var s__39578__$1 = s__39578;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__39578__$1);
if(temp__5825__auto__){
var s__39578__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__39578__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__39578__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__39580 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__39579 = (0);
while(true){
if((i__39579 < size__5648__auto__)){
var vec__39581 = cljs.core._nth(c__5647__auto__,i__39579);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39581,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39581,(1),null);
if((!(cljs.core.contains_QMARK_(clear_rows,r)))){
cljs.core.chunk_append(b__39580,coll);

var G__39604 = (i__39579 + (1));
i__39579 = G__39604;
continue;
} else {
var G__39605 = (i__39579 + (1));
i__39579 = G__39605;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39580),tetris$core$board$clear_lines_$_iter__39577(cljs.core.chunk_rest(s__39578__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39580),null);
}
} else {
var vec__39584 = cljs.core.first(s__39578__$2);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39584,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39584,(1),null);
if((!(cljs.core.contains_QMARK_(clear_rows,r)))){
return cljs.core.cons(coll,tetris$core$board$clear_lines_$_iter__39577(cljs.core.rest(s__39578__$2)));
} else {
var G__39606 = cljs.core.rest(s__39578__$2);
s__39578__$1 = G__39606;
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
var empty_lns = cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((10),null));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(clear_rows),empty_lns)),rest_rows);
} else {
return board;
}
});
tetris.core.board.lock_out_QMARK_ = (function tetris$core$board$lock_out_QMARK_(board,piece,row,col){
return (row < (0));
});

//# sourceMappingURL=tetris.core.board.js.map
