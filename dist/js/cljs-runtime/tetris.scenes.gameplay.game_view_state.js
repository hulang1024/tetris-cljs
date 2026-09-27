goog.provide('tetris.scenes.gameplay.game_view_state');
tetris.scenes.gameplay.game_view_state.container_layout_schema = (function tetris$scenes$gameplay$game_view_state$container_layout_schema(var_args){
var args__5903__auto__ = [];
var len__5897__auto___37435 = arguments.length;
var i__5898__auto___37436 = (0);
while(true){
if((i__5898__auto___37436 < len__5897__auto___37435)){
args__5903__auto__.push((arguments[i__5898__auto___37436]));

var G__37437 = (i__5898__auto___37436 + (1));
i__5898__auto___37436 = G__37437;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return tetris.scenes.gameplay.game_view_state.container_layout_schema.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(tetris.scenes.gameplay.game_view_state.container_layout_schema.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"int","int",-1741416922)], null)], null),more);
}));

(tetris.scenes.gameplay.game_view_state.container_layout_schema.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tetris.scenes.gameplay.game_view_state.container_layout_schema.cljs$lang$applyTo = (function (seq37344){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37344));
}));

tetris.scenes.gameplay.game_view_state.Layout = tetris.scenes.gameplay.game_view_state.container_layout_schema.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hold","hold",-1621118005),tetris.scenes.gameplay.game_view_state.container_layout_schema()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),tetris.scenes.gameplay.game_view_state.container_layout_schema.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"skyline-height","skyline-height",908413228),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"border-width","border-width",-1512605390),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cell-offset","cell-offset",1207564676),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287),new cljs.core.Keyword(null,"int","int",-1741416922)], null)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next","next",-117701485),tetris.scenes.gameplay.game_view_state.container_layout_schema()], null)], 0));
tetris.scenes.gameplay.game_view_state.DisplayPiece = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color-index","color-index",560460581),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"visible","visible",-1024216805),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells","cells",-985166822),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"int","int",-1741416922)], null)], null)], null)], null)], null);
tetris.scenes.gameplay.game_view_state.GameViewState = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout","layout",-2120940921),tetris.scenes.gameplay.game_view_state.Layout], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"piece-style","piece-style",-1354956371),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current","current",-1088038603),tetris.scenes.gameplay.game_view_state.DisplayPiece], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ghost","ghost",-1531157576),tetris.scenes.gameplay.game_view_state.DisplayPiece], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hold","hold",-1621118005),tetris.scenes.gameplay.game_view_state.DisplayPiece], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-queue","next-queue",-689213061),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),tetris.scenes.gameplay.game_view_state.DisplayPiece], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color-index","color-index",560460581),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"int","int",-1741416922)], null)], null)], null)], null)], null);
tetris.scenes.gameplay.game_view_state.calc_layout = (function tetris$scenes$gameplay$game_view_state$calc_layout(preview_count){
var screen_w = (1920);
var screen_h = (1080);
var cell_size = (38);
var board_border_w = (3);
var board_padding = (2);
var skyline_height = ((2) * cell_size);
var board_w = ((((10) * cell_size) + board_border_w) + ((2) * board_padding));
var board_h = ((((tetris.core.board.board_rows * cell_size) - skyline_height) + board_border_w) + ((2) * board_padding));
var gap = cell_size;
var hold_w = (cell_size * (4));
var hold_h = (cell_size * (4));
var next_w = (cell_size * (4));
var next_h = ((cell_size * (4)) * preview_count);
var game_view_w = ((((hold_w + gap) + board_w) + gap) + next_w);
var game_view_h = board_h;
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),((screen_w - game_view_w) / (2)),new cljs.core.Keyword(null,"y","y",-1757859776),((screen_h - game_view_h) / (2)),new cljs.core.Keyword(null,"width","width",-384071477),game_view_w,new cljs.core.Keyword(null,"height","height",1025178622),game_view_h,new cljs.core.Keyword(null,"hold","hold",-1621118005),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),hold_w,new cljs.core.Keyword(null,"height","height",1025178622),hold_h], null),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"x","x",2099068185),(hold_w + gap),new cljs.core.Keyword(null,"y","y",-1757859776),skyline_height,new cljs.core.Keyword(null,"width","width",-384071477),board_w,new cljs.core.Keyword(null,"height","height",1025178622),board_h,new cljs.core.Keyword(null,"skyline-height","skyline-height",908413228),skyline_height,new cljs.core.Keyword(null,"border-width","border-width",-1512605390),board_border_w,new cljs.core.Keyword(null,"cell-offset","cell-offset",1207564676),((board_border_w / (2)) + board_padding),new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287),cell_size], null),new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(((hold_w + gap) + board_w) + gap),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),next_w,new cljs.core.Keyword(null,"height","height",1025178622),next_h], null)], null);
});
tetris.scenes.gameplay.game_view_state.cell_position_in_board = (function tetris$scenes$gameplay$game_view_state$cell_position_in_board(layout,row,col){
var board_layout = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(layout,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633)], null));
var offset_x = new cljs.core.Keyword(null,"cell-offset","cell-offset",1207564676).cljs$core$IFn$_invoke$arity$1(board_layout);
var offset_y = (new cljs.core.Keyword(null,"cell-offset","cell-offset",1207564676).cljs$core$IFn$_invoke$arity$1(board_layout) - new cljs.core.Keyword(null,"skyline-height","skyline-height",908413228).cljs$core$IFn$_invoke$arity$1(board_layout));
var cell_size = new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287).cljs$core$IFn$_invoke$arity$1(board_layout);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(offset_x + (cell_size * col)),new cljs.core.Keyword(null,"y","y",-1757859776),(offset_y + (cell_size * row))], null);
});
tetris.scenes.gameplay.game_view_state.piece_position_in_board = (function tetris$scenes$gameplay$game_view_state$piece_position_in_board(layout,piece,row,col){
return cljs.core.vec((function (){var iter__5649__auto__ = (function tetris$scenes$gameplay$game_view_state$piece_position_in_board_$_iter__37388(s__37389){
return (new cljs.core.LazySeq(null,(function (){
var s__37389__$1 = s__37389;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__37389__$1);
if(temp__5825__auto__){
var s__37389__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37389__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__37389__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__37391 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__37390 = (0);
while(true){
if((i__37390 < size__5648__auto__)){
var vec__37398 = cljs.core._nth(c__5647__auto__,i__37390);
var cr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37398,(0),null);
var cc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37398,(1),null);
var row__$1 = (row + cr);
var col__$1 = (col + cc);
cljs.core.chunk_append(b__37391,tetris.scenes.gameplay.game_view_state.cell_position_in_board(layout,row__$1,col__$1));

var G__37438 = (i__37390 + (1));
i__37390 = G__37438;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37391),tetris$scenes$gameplay$game_view_state$piece_position_in_board_$_iter__37388(cljs.core.chunk_rest(s__37389__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37391),null);
}
} else {
var vec__37411 = cljs.core.first(s__37389__$2);
var cr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37411,(0),null);
var cc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37411,(1),null);
var row__$1 = (row + cr);
var col__$1 = (col + cc);
return cljs.core.cons(tetris.scenes.gameplay.game_view_state.cell_position_in_board(layout,row__$1,col__$1),tetris$scenes$gameplay$game_view_state$piece_position_in_board_$_iter__37388(cljs.core.rest(s__37389__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(new cljs.core.Keyword(null,"cells","cells",-985166822).cljs$core$IFn$_invoke$arity$1(piece));
})());
});
tetris.scenes.gameplay.game_view_state.modern_color = (function tetris$scenes$gameplay$game_view_state$modern_color(kind){
return ((2) + cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,k){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,kind)){
return i;
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.Keyword(null,"l","l",1395893423),new cljs.core.Keyword(null,"j","j",-1397974765),new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.Keyword(null,"o","o",-1350007228)], null))));
});
tetris.scenes.gameplay.game_view_state.initial_state = (function tetris$scenes$gameplay$game_view_state$initial_state(game_state){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"layout","layout",-2120940921),tetris.scenes.gameplay.game_view_state.calc_layout(new cljs.core.Keyword(null,"preview-count","preview-count",-329263374).cljs$core$IFn$_invoke$arity$1(game_state)),new cljs.core.Keyword(null,"piece-style","piece-style",-1354956371),"b11",new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"current","current",-1088038603),null,new cljs.core.Keyword(null,"ghost","ghost",-1531157576),null,new cljs.core.Keyword(null,"hold","hold",-1621118005),null,new cljs.core.Keyword(null,"next-queue","next-queue",-689213061),cljs.core.PersistentVector.EMPTY], null);
});
tetris.scenes.gameplay.game_view_state.blocks = (function tetris$scenes$gameplay$game_view_state$blocks(state,game_state){
var cells = (function (){var iter__5649__auto__ = (function tetris$scenes$gameplay$game_view_state$blocks_$_iter__37420(s__37421){
return (new cljs.core.LazySeq(null,(function (){
var s__37421__$1 = s__37421;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__37421__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var vec__37426 = cljs.core.first(xs__6385__auto__);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37426,(0),null);
var xs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37426,(1),null);
var iterys__5645__auto__ = ((function (s__37421__$1,vec__37426,r,xs,xs__6385__auto__,temp__5825__auto__){
return (function tetris$scenes$gameplay$game_view_state$blocks_$_iter__37420_$_iter__37422(s__37423){
return (new cljs.core.LazySeq(null,((function (s__37421__$1,vec__37426,r,xs,xs__6385__auto__,temp__5825__auto__){
return (function (){
var s__37423__$1 = s__37423;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__37423__$1);
if(temp__5825__auto____$1){
var s__37423__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37423__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__37423__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__37425 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__37424 = (0);
while(true){
if((i__37424 < size__5648__auto__)){
var vec__37429 = cljs.core._nth(c__5647__auto__,i__37424);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37429,(0),null);
var cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37429,(1),null);
if(cljs.core.truth_(cell)){
cljs.core.chunk_append(b__37425,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.Keyword(null,"color-index","color-index",560460581),tetris.scenes.gameplay.game_view_state.modern_color(new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(cell))], null),tetris.scenes.gameplay.game_view_state.cell_position_in_board(new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(state),r,c)));

var G__37442 = (i__37424 + (1));
i__37424 = G__37442;
continue;
} else {
var G__37443 = (i__37424 + (1));
i__37424 = G__37443;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37425),tetris$scenes$gameplay$game_view_state$blocks_$_iter__37420_$_iter__37422(cljs.core.chunk_rest(s__37423__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37425),null);
}
} else {
var vec__37432 = cljs.core.first(s__37423__$2);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37432,(0),null);
var cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37432,(1),null);
if(cljs.core.truth_(cell)){
return cljs.core.cons(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.Keyword(null,"color-index","color-index",560460581),tetris.scenes.gameplay.game_view_state.modern_color(new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(cell))], null),tetris.scenes.gameplay.game_view_state.cell_position_in_board(new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(state),r,c)),tetris$scenes$gameplay$game_view_state$blocks_$_iter__37420_$_iter__37422(cljs.core.rest(s__37423__$2)));
} else {
var G__37444 = cljs.core.rest(s__37423__$2);
s__37423__$1 = G__37444;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__37421__$1,vec__37426,r,xs,xs__6385__auto__,temp__5825__auto__))
,null,null));
});})(s__37421__$1,vec__37426,r,xs,xs__6385__auto__,temp__5825__auto__))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,xs)));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,tetris$scenes$gameplay$game_view_state$blocks_$_iter__37420(cljs.core.rest(s__37421__$1)));
} else {
var G__37445 = cljs.core.rest(s__37421__$1);
s__37421__$1 = G__37445;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(game_state)));
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"blocks","blocks",-610462153),cells);
});
tetris.scenes.gameplay.game_view_state.spawn_piece = (function tetris$scenes$gameplay$game_view_state$spawn_piece(state,game_state){
if(cljs.core.truth_(tetris.core.game.find_event(new cljs.core.Keyword(null,"spawn-piece","spawn-piece",1855119717),new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(game_state)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color-index","color-index",560460581),tetris.scenes.gameplay.game_view_state.modern_color(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(game_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"kind","kind",-717265803)], null))),new cljs.core.Keyword(null,"visible","visible",-1024216805),true,new cljs.core.Keyword(null,"cells","cells",-985166822),cljs.core.PersistentVector.EMPTY], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color-index","color-index",560460581),(0),new cljs.core.Keyword(null,"visible","visible",-1024216805),true,new cljs.core.Keyword(null,"cells","cells",-985166822),cljs.core.PersistentVector.EMPTY], null)], 0));
} else {
return state;
}
});
tetris.scenes.gameplay.game_view_state.update_current = (function tetris$scenes$gameplay$game_view_state$update_current(state,game_state){
if(cljs.core.truth_(new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(game_state))){
return cljs.core.assoc_in(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"cells","cells",-985166822)], null),tetris.scenes.gameplay.game_view_state.piece_position_in_board(new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(game_state),new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(game_state),new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(game_state))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"visible","visible",-1024216805)], null),true);
} else {
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"visible","visible",-1024216805)], null),false);
}
});
tetris.scenes.gameplay.game_view_state.update_ghost = (function tetris$scenes$gameplay$game_view_state$update_ghost(state,game_state){
if(cljs.core.truth_(new cljs.core.Keyword(null,"ghost-enabled?","ghost-enabled?",-261151779).cljs$core$IFn$_invoke$arity$1(game_state))){
return cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"visible","visible",-1024216805)], null),new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(game_state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"cells","cells",-985166822)], null),tetris.scenes.gameplay.game_view_state.piece_position_in_board(new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(game_state),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(game_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"row","row",-570139521)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(game_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"col","col",-1959363084)], null))));
} else {
return state;
}
});
tetris.scenes.gameplay.game_view_state.update_state = (function tetris$scenes$gameplay$game_view_state$update_state(state,game_state){
return tetris.scenes.gameplay.game_view_state.blocks(tetris.scenes.gameplay.game_view_state.update_ghost(tetris.scenes.gameplay.game_view_state.update_current(tetris.scenes.gameplay.game_view_state.spawn_piece(state,game_state),game_state),game_state),game_state);
});

//# sourceMappingURL=tetris.scenes.gameplay.game_view_state.js.map
