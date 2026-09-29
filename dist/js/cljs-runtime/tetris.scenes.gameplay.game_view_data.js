goog.provide('tetris.scenes.gameplay.game_view_data');
tetris.scenes.gameplay.game_view_data.container_layout_schema = (function tetris$scenes$gameplay$game_view_data$container_layout_schema(var_args){
var args__5903__auto__ = [];
var len__5897__auto___39022 = arguments.length;
var i__5898__auto___39023 = (0);
while(true){
if((i__5898__auto___39023 < len__5897__auto___39022)){
args__5903__auto__.push((arguments[i__5898__auto___39023]));

var G__39024 = (i__5898__auto___39023 + (1));
i__5898__auto___39023 = G__39024;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return tetris.scenes.gameplay.game_view_data.container_layout_schema.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(tetris.scenes.gameplay.game_view_data.container_layout_schema.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"int","int",-1741416922)], null)], null),more);
}));

(tetris.scenes.gameplay.game_view_data.container_layout_schema.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tetris.scenes.gameplay.game_view_data.container_layout_schema.cljs$lang$applyTo = (function (seq38972){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38972));
}));

tetris.scenes.gameplay.game_view_data.Layout = tetris.scenes.gameplay.game_view_data.container_layout_schema.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hold","hold",-1621118005),tetris.scenes.gameplay.game_view_data.container_layout_schema.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287),new cljs.core.Keyword(null,"int","int",-1741416922)], null)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),tetris.scenes.gameplay.game_view_data.container_layout_schema.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"skyline-height","skyline-height",908413228),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"border-width","border-width",-1512605390),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cell-offset","cell-offset",1207564676),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287),new cljs.core.Keyword(null,"int","int",-1741416922)], null)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next","next",-117701485),tetris.scenes.gameplay.game_view_data.container_layout_schema.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287),new cljs.core.Keyword(null,"int","int",-1741416922)], null)], 0))], null)], 0));
tetris.scenes.gameplay.game_view_data.DisplayPiece = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color-index","color-index",560460581),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"visible","visible",-1024216805),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells","cells",-985166822),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"int","int",-1741416922)], null)], null)], null)], null)], null);
tetris.scenes.gameplay.game_view_data.GameViewData = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout","layout",-2120940921),tetris.scenes.gameplay.game_view_data.Layout], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"piece-style","piece-style",-1354956371),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current","current",-1088038603),tetris.scenes.gameplay.game_view_data.DisplayPiece], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ghost","ghost",-1531157576),tetris.scenes.gameplay.game_view_data.DisplayPiece], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hold","hold",-1621118005),tetris.scenes.gameplay.game_view_data.DisplayPiece], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-queue","next-queue",-689213061),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),tetris.scenes.gameplay.game_view_data.DisplayPiece], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color-index","color-index",560460581),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"int","int",-1741416922)], null)], null)], null)], null)], null);
tetris.scenes.gameplay.game_view_data.calc_layout = (function tetris$scenes$gameplay$game_view_data$calc_layout(preview_count){
var cell_size = (38);
var board_border_w = (2);
var board_padding = (2);
var skyline_height = ((2) * cell_size);
var board_w = ((((10) * cell_size) + board_border_w) + ((2) * board_padding));
var board_h = ((((tetris.core.board.board_rows * cell_size) - skyline_height) + board_border_w) + ((2) * board_padding));
var gap = cell_size;
var hud_cell_size = (26);
var hold_w = (hud_cell_size * (4));
var hold_h = (hud_cell_size * (4));
var next_w = (hud_cell_size * (4));
var next_h = ((hud_cell_size * (4)) * preview_count);
var game_view_w = ((((hold_w + gap) + board_w) + gap) + next_w);
var game_view_h = board_h;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),game_view_w,new cljs.core.Keyword(null,"height","height",1025178622),game_view_h,new cljs.core.Keyword(null,"hold","hold",-1621118005),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(cell_size + skyline_height),new cljs.core.Keyword(null,"width","width",-384071477),hold_w,new cljs.core.Keyword(null,"height","height",1025178622),hold_h,new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287),hud_cell_size], null),new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"skyline-height","skyline-height",908413228),new cljs.core.Keyword(null,"cell-offset-y","cell-offset-y",-721533268),new cljs.core.Keyword(null,"border-width","border-width",-1512605390),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"cell-offset-x","cell-offset-x",-945177636),new cljs.core.Keyword(null,"height","height",1025178622)],[skyline_height,cell_size,board_w,skyline_height,(((board_border_w / (2)) + board_padding) - skyline_height),board_border_w,(hold_w + gap),((board_border_w / (2)) + board_padding),board_h]),new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(((hold_w + gap) + board_w) + gap),new cljs.core.Keyword(null,"y","y",-1757859776),(cell_size + skyline_height),new cljs.core.Keyword(null,"width","width",-384071477),next_w,new cljs.core.Keyword(null,"height","height",1025178622),next_h,new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287),hud_cell_size], null)], null);
});
tetris.scenes.gameplay.game_view_data.piece_cell_position = (function tetris$scenes$gameplay$game_view_data$piece_cell_position(offset_x,offset_y,cell_size,row,col){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(offset_x + (cell_size * col)),new cljs.core.Keyword(null,"y","y",-1757859776),(offset_y + (cell_size * row))], null);
});
tetris.scenes.gameplay.game_view_data.piece_position = (function tetris$scenes$gameplay$game_view_data$piece_position(offset_x,offset_y,cell_size,piece,row,col){
return cljs.core.vec((function (){var iter__5649__auto__ = (function tetris$scenes$gameplay$game_view_data$piece_position_$_iter__38977(s__38978){
return (new cljs.core.LazySeq(null,(function (){
var s__38978__$1 = s__38978;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__38978__$1);
if(temp__5825__auto__){
var s__38978__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38978__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__38978__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__38980 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__38979 = (0);
while(true){
if((i__38979 < size__5648__auto__)){
var vec__38981 = cljs.core._nth(c__5647__auto__,i__38979);
var cr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38981,(0),null);
var cc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38981,(1),null);
var row__$1 = (row + cr);
var col__$1 = (col + cc);
cljs.core.chunk_append(b__38980,tetris.scenes.gameplay.game_view_data.piece_cell_position(offset_x,offset_y,cell_size,row__$1,col__$1));

var G__39031 = (i__38979 + (1));
i__38979 = G__39031;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38980),tetris$scenes$gameplay$game_view_data$piece_position_$_iter__38977(cljs.core.chunk_rest(s__38978__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38980),null);
}
} else {
var vec__38984 = cljs.core.first(s__38978__$2);
var cr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38984,(0),null);
var cc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38984,(1),null);
var row__$1 = (row + cr);
var col__$1 = (col + cc);
return cljs.core.cons(tetris.scenes.gameplay.game_view_data.piece_cell_position(offset_x,offset_y,cell_size,row__$1,col__$1),tetris$scenes$gameplay$game_view_data$piece_position_$_iter__38977(cljs.core.rest(s__38978__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__((function (){var and__5160__auto__ = piece;
if(cljs.core.truth_(and__5160__auto__)){
return tetris.core.rs.cells.cljs$core$IFn$_invoke$arity$1(piece);
} else {
return and__5160__auto__;
}
})());
})());
});
tetris.scenes.gameplay.game_view_data.piece_cell_position_in_board = (function tetris$scenes$gameplay$game_view_data$piece_cell_position_in_board(layout,row,col){
return tetris.scenes.gameplay.game_view_data.piece_cell_position(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"cell-offset-x","cell-offset-x",-945177636)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"cell-offset-y","cell-offset-y",-721533268)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287)], null)),row,col);
});
tetris.scenes.gameplay.game_view_data.piece_position_in_board = (function tetris$scenes$gameplay$game_view_data$piece_position_in_board(layout,piece,row,col){
return tetris.scenes.gameplay.game_view_data.piece_position(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"cell-offset-x","cell-offset-x",-945177636)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"cell-offset-y","cell-offset-y",-721533268)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287)], null)),piece,row,col);
});
tetris.scenes.gameplay.game_view_data.modern_color = (function tetris$scenes$gameplay$game_view_data$modern_color(kind){
return ((2) + cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,k){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,kind)){
return i;
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.Keyword(null,"l","l",1395893423),new cljs.core.Keyword(null,"j","j",-1397974765),new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.Keyword(null,"o","o",-1350007228)], null))));
});
tetris.scenes.gameplay.game_view_data.blocks = (function tetris$scenes$gameplay$game_view_data$blocks(layout,game_state){
var iter__5649__auto__ = (function tetris$scenes$gameplay$game_view_data$blocks_$_iter__38988(s__38989){
return (new cljs.core.LazySeq(null,(function (){
var s__38989__$1 = s__38989;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__38989__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var vec__38994 = cljs.core.first(xs__6385__auto__);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38994,(0),null);
var xs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38994,(1),null);
var iterys__5645__auto__ = ((function (s__38989__$1,vec__38994,r,xs,xs__6385__auto__,temp__5825__auto__){
return (function tetris$scenes$gameplay$game_view_data$blocks_$_iter__38988_$_iter__38990(s__38991){
return (new cljs.core.LazySeq(null,((function (s__38989__$1,vec__38994,r,xs,xs__6385__auto__,temp__5825__auto__){
return (function (){
var s__38991__$1 = s__38991;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__38991__$1);
if(temp__5825__auto____$1){
var s__38991__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38991__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__38991__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__38993 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__38992 = (0);
while(true){
if((i__38992 < size__5648__auto__)){
var vec__38997 = cljs.core._nth(c__5647__auto__,i__38992);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38997,(0),null);
var cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38997,(1),null);
if(cljs.core.truth_(cell)){
cljs.core.chunk_append(b__38993,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.Keyword(null,"color-index","color-index",560460581),tetris.scenes.gameplay.game_view_data.modern_color(new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(cell))], null),tetris.scenes.gameplay.game_view_data.piece_cell_position_in_board(layout,r,c)));

var G__39036 = (i__38992 + (1));
i__38992 = G__39036;
continue;
} else {
var G__39037 = (i__38992 + (1));
i__38992 = G__39037;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38993),tetris$scenes$gameplay$game_view_data$blocks_$_iter__38988_$_iter__38990(cljs.core.chunk_rest(s__38991__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38993),null);
}
} else {
var vec__39004 = cljs.core.first(s__38991__$2);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39004,(0),null);
var cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39004,(1),null);
if(cljs.core.truth_(cell)){
return cljs.core.cons(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.Keyword(null,"color-index","color-index",560460581),tetris.scenes.gameplay.game_view_data.modern_color(new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(cell))], null),tetris.scenes.gameplay.game_view_data.piece_cell_position_in_board(layout,r,c)),tetris$scenes$gameplay$game_view_data$blocks_$_iter__38988_$_iter__38990(cljs.core.rest(s__38991__$2)));
} else {
var G__39038 = cljs.core.rest(s__38991__$2);
s__38991__$1 = G__39038;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__38989__$1,vec__38994,r,xs,xs__6385__auto__,temp__5825__auto__))
,null,null));
});})(s__38989__$1,vec__38994,r,xs,xs__6385__auto__,temp__5825__auto__))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,xs)));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,tetris$scenes$gameplay$game_view_data$blocks_$_iter__38988(cljs.core.rest(s__38989__$1)));
} else {
var G__39039 = cljs.core.rest(s__38989__$1);
s__38989__$1 = G__39039;
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
});
tetris.scenes.gameplay.game_view_data.current = (function tetris$scenes$gameplay$game_view_data$current(layout,game_state){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color-index","color-index",560460581),tetris.scenes.gameplay.game_view_data.modern_color(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(game_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"kind","kind",-717265803)], null))),new cljs.core.Keyword(null,"visible","visible",-1024216805),cljs.core.boolean$(new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(game_state)),new cljs.core.Keyword(null,"cells","cells",-985166822),tetris.scenes.gameplay.game_view_data.piece_position_in_board(layout,new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(game_state),new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(game_state),new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(game_state))], null);
});
tetris.scenes.gameplay.game_view_data.ghost = (function tetris$scenes$gameplay$game_view_data$ghost(layout,game_state){
var ghost = tetris.core.game.ghost(game_state);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color-index","color-index",560460581),tetris.scenes.gameplay.game_view_data.modern_color(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(game_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"kind","kind",-717265803)], null))),new cljs.core.Keyword(null,"visible","visible",-1024216805),cljs.core.boolean$(ghost),new cljs.core.Keyword(null,"cells","cells",-985166822),tetris.scenes.gameplay.game_view_data.piece_position_in_board(layout,new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(game_state),new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(ghost),new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(ghost))], null);
});
tetris.scenes.gameplay.game_view_data.hold = (function tetris$scenes$gameplay$game_view_data$hold(layout,game_state){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color-index","color-index",560460581),tetris.scenes.gameplay.game_view_data.modern_color(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(game_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hold","hold",-1621118005),new cljs.core.Keyword(null,"kind","kind",-717265803)], null))),new cljs.core.Keyword(null,"visible","visible",-1024216805),cljs.core.boolean$(new cljs.core.Keyword(null,"hold","hold",-1621118005).cljs$core$IFn$_invoke$arity$1(game_state)),new cljs.core.Keyword(null,"cells","cells",-985166822),tetris.scenes.gameplay.game_view_data.piece_position(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hold","hold",-1621118005),new cljs.core.Keyword(null,"x","x",2099068185)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hold","hold",-1621118005),new cljs.core.Keyword(null,"y","y",-1757859776)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hold","hold",-1621118005),new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287)], null)),new cljs.core.Keyword(null,"hold","hold",-1621118005).cljs$core$IFn$_invoke$arity$1(game_state),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(game_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hold","hold",-1621118005),new cljs.core.Keyword(null,"row","row",-570139521)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(game_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hold","hold",-1621118005),new cljs.core.Keyword(null,"col","col",-1959363084)], null)))], null);
});
tetris.scenes.gameplay.game_view_data.next_queue = (function tetris$scenes$gameplay$game_view_data$next_queue(layout,game_state){
return cljs.core.vec((function (){var iter__5649__auto__ = (function tetris$scenes$gameplay$game_view_data$next_queue_$_iter__39010(s__39011){
return (new cljs.core.LazySeq(null,(function (){
var s__39011__$1 = s__39011;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__39011__$1);
if(temp__5825__auto__){
var s__39011__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__39011__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__39011__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__39013 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__39012 = (0);
while(true){
if((i__39012 < size__5648__auto__)){
var vec__39014 = cljs.core._nth(c__5647__auto__,i__39012);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39014,(0),null);
var piece = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39014,(1),null);
cljs.core.chunk_append(b__39013,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color-index","color-index",560460581),tetris.scenes.gameplay.game_view_data.modern_color(new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(piece)),new cljs.core.Keyword(null,"visible","visible",-1024216805),true,new cljs.core.Keyword(null,"cells","cells",-985166822),tetris.scenes.gameplay.game_view_data.piece_position(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.Keyword(null,"x","x",2099068185)], null)),(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.Keyword(null,"y","y",-1757859776)], null)) + ((i * cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287)], null))) * (4))),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287)], null)),piece,new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(piece),new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(piece))], null));

var G__39047 = (i__39012 + (1));
i__39012 = G__39047;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39013),tetris$scenes$gameplay$game_view_data$next_queue_$_iter__39010(cljs.core.chunk_rest(s__39011__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39013),null);
}
} else {
var vec__39017 = cljs.core.first(s__39011__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39017,(0),null);
var piece = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39017,(1),null);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color-index","color-index",560460581),tetris.scenes.gameplay.game_view_data.modern_color(new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(piece)),new cljs.core.Keyword(null,"visible","visible",-1024216805),true,new cljs.core.Keyword(null,"cells","cells",-985166822),tetris.scenes.gameplay.game_view_data.piece_position(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.Keyword(null,"x","x",2099068185)], null)),(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.Keyword(null,"y","y",-1757859776)], null)) + ((i * cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287)], null))) * (4))),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287)], null)),piece,new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(piece),new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(piece))], null),tetris$scenes$gameplay$game_view_data$next_queue_$_iter__39010(cljs.core.rest(s__39011__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,new cljs.core.Keyword(null,"next-queue","next-queue",-689213061).cljs$core$IFn$_invoke$arity$1(game_state)));
})());
});
tetris.scenes.gameplay.game_view_data.render_data = (function tetris$scenes$gameplay$game_view_data$render_data(layout,game_state){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),tetris.scenes.gameplay.game_view_data.blocks(layout,game_state),new cljs.core.Keyword(null,"current","current",-1088038603),tetris.scenes.gameplay.game_view_data.current(layout,game_state),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),tetris.scenes.gameplay.game_view_data.ghost(layout,game_state),new cljs.core.Keyword(null,"hold","hold",-1621118005),tetris.scenes.gameplay.game_view_data.hold(layout,game_state),new cljs.core.Keyword(null,"next-queue","next-queue",-689213061),tetris.scenes.gameplay.game_view_data.next_queue(layout,game_state)], null);
});

//# sourceMappingURL=tetris.scenes.gameplay.game_view_data.js.map
