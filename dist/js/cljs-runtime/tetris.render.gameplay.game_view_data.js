goog.provide('tetris.render.gameplay.game_view_data');
tetris.render.gameplay.game_view_data.container_schema = (function tetris$render$gameplay$game_view_data$container_schema(var_args){
var args__5903__auto__ = [];
var len__5897__auto___42481 = arguments.length;
var i__5898__auto___42482 = (0);
while(true){
if((i__5898__auto___42482 < len__5897__auto___42481)){
args__5903__auto__.push((arguments[i__5898__auto___42482]));

var G__42483 = (i__5898__auto___42482 + (1));
i__5898__auto___42482 = G__42483;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return tetris.render.gameplay.game_view_data.container_schema.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(tetris.render.gameplay.game_view_data.container_schema.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.number_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.number_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"int","int",-1741416922)], null)], null),more);
}));

(tetris.render.gameplay.game_view_data.container_schema.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tetris.render.gameplay.game_view_data.container_schema.cljs$lang$applyTo = (function (seq42419){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42419));
}));

tetris.render.gameplay.game_view_data.Cell = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-x","base-x",-13745014),cljs.core.number_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-y","base-y",-1534623522),cljs.core.number_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gap","gap",80255254),new cljs.core.Keyword(null,"int","int",-1741416922)], null)], null);
tetris.render.gameplay.game_view_data.Layout = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hold","hold",-1621118005),tetris.render.gameplay.game_view_data.container_schema.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cell","cell",764245084),tetris.render.gameplay.game_view_data.Cell], null)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),tetris.render.gameplay.game_view_data.container_schema.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"skyline-height","skyline-height",908413228),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"border-width","border-width",-1512605390),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cell","cell",764245084),tetris.render.gameplay.game_view_data.Cell], null)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next","next",-117701485),tetris.render.gameplay.game_view_data.container_schema.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cell","cell",764245084),tetris.render.gameplay.game_view_data.Cell], null)], 0))], null)], null);
tetris.render.gameplay.game_view_data.DisplayPiece = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color-index","color-index",560460581),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"visible","visible",-1024216805),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells","cells",-985166822),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.number_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.number_QMARK_], null)], null)], null)], null)], null);
tetris.render.gameplay.game_view_data.GameViewData = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current","current",-1088038603),tetris.render.gameplay.game_view_data.DisplayPiece], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ghost","ghost",-1531157576),tetris.render.gameplay.game_view_data.DisplayPiece], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hold","hold",-1621118005),tetris.render.gameplay.game_view_data.DisplayPiece], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),tetris.render.gameplay.game_view_data.DisplayPiece], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color-index","color-index",560460581),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.number_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.number_QMARK_], null)], null)], null)], null)], null);
tetris.render.gameplay.game_view_data.calc_layout = (function tetris$render$gameplay$game_view_data$calc_layout(preview_count){
var cell_size = (32);
var cell_gap = (2);
var board_padding = cell_gap;
var board_border_w = (3);
var skyline_height = (((2) * cell_size) + ((2) * cell_gap));
var board_w = (((((10) * cell_size) + (((10) - (1)) * cell_gap)) + board_border_w) + ((2) * board_padding));
var board_h = (((((tetris.core.board.board_rows * cell_size) - skyline_height) + ((tetris.core.board.board_rows - (1)) * cell_gap)) + board_border_w) + ((2) * board_padding));
var area_gap = cell_size;
var hud_cell_scale = 0.6;
var hud_cell_size = cljs.math.floor((cell_size * hud_cell_scale));
var hud_cell_gap = cljs.math.floor((cell_gap * hud_cell_scale));
var hold_w = ((hud_cell_size * (4)) + (hud_cell_gap * (3)));
var hold_h = ((hud_cell_size * (4)) + (hud_cell_gap * (3)));
var next_w = ((hud_cell_size * (4)) + (hud_cell_gap * (3)));
var next_h = (((hud_cell_size * (4)) * preview_count) + (hud_cell_gap * (3)));
var game_view_w = ((((hold_w + area_gap) + board_w) + area_gap) + next_w);
var game_view_h = board_h;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),game_view_w,new cljs.core.Keyword(null,"height","height",1025178622),game_view_h,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),(hold_w + area_gap),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),board_w,new cljs.core.Keyword(null,"height","height",1025178622),board_h,new cljs.core.Keyword(null,"skyline-height","skyline-height",908413228),skyline_height,new cljs.core.Keyword(null,"border-width","border-width",-1512605390),board_border_w,new cljs.core.Keyword(null,"cell","cell",764245084),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"base-x","base-x",-13745014),((board_border_w / (2)) + board_padding),new cljs.core.Keyword(null,"base-y","base-y",-1534623522),(((board_border_w / (2)) + board_padding) - skyline_height),new cljs.core.Keyword(null,"size","size",1098693007),cell_size,new cljs.core.Keyword(null,"gap","gap",80255254),cell_gap], null)], null),new cljs.core.Keyword(null,"hold","hold",-1621118005),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),cell_size,new cljs.core.Keyword(null,"width","width",-384071477),hold_w,new cljs.core.Keyword(null,"height","height",1025178622),hold_h,new cljs.core.Keyword(null,"cell","cell",764245084),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"base-x","base-x",-13745014),(0),new cljs.core.Keyword(null,"base-y","base-y",-1534623522),(0),new cljs.core.Keyword(null,"size","size",1098693007),hud_cell_size,new cljs.core.Keyword(null,"gap","gap",80255254),hud_cell_gap], null)], null),new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(((hold_w + area_gap) + board_w) + area_gap),new cljs.core.Keyword(null,"y","y",-1757859776),cell_size,new cljs.core.Keyword(null,"width","width",-384071477),next_w,new cljs.core.Keyword(null,"height","height",1025178622),next_h,new cljs.core.Keyword(null,"cell","cell",764245084),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"base-x","base-x",-13745014),(0),new cljs.core.Keyword(null,"base-y","base-y",-1534623522),(0),new cljs.core.Keyword(null,"size","size",1098693007),hud_cell_size,new cljs.core.Keyword(null,"gap","gap",80255254),hud_cell_gap], null)], null)], null);
});
tetris.render.gameplay.game_view_data.piece_cell_position = (function tetris$render$gameplay$game_view_data$piece_cell_position(cell_config,row,col){
var map__42424 = cell_config;
var map__42424__$1 = cljs.core.__destructure_map(map__42424);
var base_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42424__$1,new cljs.core.Keyword(null,"base-x","base-x",-13745014));
var base_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42424__$1,new cljs.core.Keyword(null,"base-y","base-y",-1534623522));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42424__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var gap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42424__$1,new cljs.core.Keyword(null,"gap","gap",80255254));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),((base_x + (col * gap)) + (size * col)),new cljs.core.Keyword(null,"y","y",-1757859776),((base_y + (row * gap)) + (size * row))], null);
});
tetris.render.gameplay.game_view_data.piece_position = (function tetris$render$gameplay$game_view_data$piece_position(cell_config,cell_indices,row,col){
return cljs.core.vec((function (){var iter__5649__auto__ = (function tetris$render$gameplay$game_view_data$piece_position_$_iter__42425(s__42426){
return (new cljs.core.LazySeq(null,(function (){
var s__42426__$1 = s__42426;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__42426__$1);
if(temp__5825__auto__){
var s__42426__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42426__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__42426__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__42428 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__42427 = (0);
while(true){
if((i__42427 < size__5648__auto__)){
var vec__42429 = cljs.core._nth(c__5647__auto__,i__42427);
var cr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42429,(0),null);
var cc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42429,(1),null);
var row__$1 = (row + cr);
var col__$1 = (col + cc);
cljs.core.chunk_append(b__42428,tetris.render.gameplay.game_view_data.piece_cell_position(cell_config,row__$1,col__$1));

var G__42486 = (i__42427 + (1));
i__42427 = G__42486;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42428),tetris$render$gameplay$game_view_data$piece_position_$_iter__42425(cljs.core.chunk_rest(s__42426__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42428),null);
}
} else {
var vec__42432 = cljs.core.first(s__42426__$2);
var cr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42432,(0),null);
var cc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42432,(1),null);
var row__$1 = (row + cr);
var col__$1 = (col + cc);
return cljs.core.cons(tetris.render.gameplay.game_view_data.piece_cell_position(cell_config,row__$1,col__$1),tetris$render$gameplay$game_view_data$piece_position_$_iter__42425(cljs.core.rest(s__42426__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cell_indices);
})());
});
tetris.render.gameplay.game_view_data.modern_color = (function tetris$render$gameplay$game_view_data$modern_color(kind){
return ((2) + cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,k){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,kind)){
return i;
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.Keyword(null,"l","l",1395893423),new cljs.core.Keyword(null,"j","j",-1397974765),new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.Keyword(null,"o","o",-1350007228)], null))));
});
tetris.render.gameplay.game_view_data.blocks = (function tetris$render$gameplay$game_view_data$blocks(layout,game_state){
return cljs.core.vec((function (){var iter__5649__auto__ = (function tetris$render$gameplay$game_view_data$blocks_$_iter__42435(s__42436){
return (new cljs.core.LazySeq(null,(function (){
var s__42436__$1 = s__42436;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__42436__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var vec__42442 = cljs.core.first(xs__6385__auto__);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42442,(0),null);
var xs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42442,(1),null);
var iterys__5645__auto__ = ((function (s__42436__$1,vec__42442,r,xs,xs__6385__auto__,temp__5825__auto__){
return (function tetris$render$gameplay$game_view_data$blocks_$_iter__42435_$_iter__42437(s__42438){
return (new cljs.core.LazySeq(null,((function (s__42436__$1,vec__42442,r,xs,xs__6385__auto__,temp__5825__auto__){
return (function (){
var s__42438__$1 = s__42438;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__42438__$1);
if(temp__5825__auto____$1){
var s__42438__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__42438__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__42438__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__42440 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__42439 = (0);
while(true){
if((i__42439 < size__5648__auto__)){
var vec__42447 = cljs.core._nth(c__5647__auto__,i__42439);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42447,(0),null);
var cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42447,(1),null);
if(cljs.core.truth_(cell)){
cljs.core.chunk_append(b__42440,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.Keyword(null,"color-index","color-index",560460581),tetris.render.gameplay.game_view_data.modern_color(new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(cell))], null),tetris.render.gameplay.game_view_data.piece_cell_position(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"cell","cell",764245084)], null)),r,c)));

var G__42490 = (i__42439 + (1));
i__42439 = G__42490;
continue;
} else {
var G__42491 = (i__42439 + (1));
i__42439 = G__42491;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42440),tetris$render$gameplay$game_view_data$blocks_$_iter__42435_$_iter__42437(cljs.core.chunk_rest(s__42438__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42440),null);
}
} else {
var vec__42452 = cljs.core.first(s__42438__$2);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42452,(0),null);
var cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42452,(1),null);
if(cljs.core.truth_(cell)){
return cljs.core.cons(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.Keyword(null,"color-index","color-index",560460581),tetris.render.gameplay.game_view_data.modern_color(new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(cell))], null),tetris.render.gameplay.game_view_data.piece_cell_position(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"cell","cell",764245084)], null)),r,c)),tetris$render$gameplay$game_view_data$blocks_$_iter__42435_$_iter__42437(cljs.core.rest(s__42438__$2)));
} else {
var G__42492 = cljs.core.rest(s__42438__$2);
s__42438__$1 = G__42492;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__42436__$1,vec__42442,r,xs,xs__6385__auto__,temp__5825__auto__))
,null,null));
});})(s__42436__$1,vec__42442,r,xs,xs__6385__auto__,temp__5825__auto__))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,xs)));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,tetris$render$gameplay$game_view_data$blocks_$_iter__42435(cljs.core.rest(s__42436__$1)));
} else {
var G__42493 = cljs.core.rest(s__42436__$1);
s__42436__$1 = G__42493;
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
})());
});
tetris.render.gameplay.game_view_data.current = (function tetris$render$gameplay$game_view_data$current(layout,game_state){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color-index","color-index",560460581),tetris.render.gameplay.game_view_data.modern_color(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(game_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"kind","kind",-717265803)], null))),new cljs.core.Keyword(null,"visible","visible",-1024216805),cljs.core.boolean$(new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(game_state)),new cljs.core.Keyword(null,"cells","cells",-985166822),tetris.render.gameplay.game_view_data.piece_position(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"cell","cell",764245084)], null)),(function (){var and__5160__auto__ = new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(game_state);
if(cljs.core.truth_(and__5160__auto__)){
return tetris.core.rs.cell_indices.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(game_state));
} else {
return and__5160__auto__;
}
})(),new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(game_state),new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(game_state))], null);
});
tetris.render.gameplay.game_view_data.ghost = (function tetris$render$gameplay$game_view_data$ghost(layout,game_state){
var ghost = tetris.core.game.ghost(game_state);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color-index","color-index",560460581),tetris.render.gameplay.game_view_data.modern_color(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(game_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"kind","kind",-717265803)], null))),new cljs.core.Keyword(null,"visible","visible",-1024216805),cljs.core.boolean$(ghost),new cljs.core.Keyword(null,"cells","cells",-985166822),tetris.render.gameplay.game_view_data.piece_position(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"cell","cell",764245084)], null)),(function (){var and__5160__auto__ = new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(game_state);
if(cljs.core.truth_(and__5160__auto__)){
return tetris.core.rs.cell_indices.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(game_state));
} else {
return and__5160__auto__;
}
})(),new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(ghost),new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(ghost))], null);
});
tetris.render.gameplay.game_view_data.center_hud_piece = (function tetris$render$gameplay$game_view_data$center_hud_piece(container_width,cell_config,piece){
if(cljs.core.truth_(piece)){
var shape = tetris.core.rs.trimed_shape(piece);
var cell_indices = tetris.core.rs.shape__GT_cell_indices(shape);
var cols = cljs.core.count(cljs.core.first(shape));
var base_x = ((container_width - (cols * new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(cell_config))) / (2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cell_config,new cljs.core.Keyword(null,"base-x","base-x",-13745014),base_x),cell_indices], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.PersistentVector.EMPTY], null);
}
});
tetris.render.gameplay.game_view_data.hold = (function tetris$render$gameplay$game_view_data$hold(layout,game_state){
var vec__42458 = tetris.render.gameplay.game_view_data.center_hud_piece(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hold","hold",-1621118005),new cljs.core.Keyword(null,"width","width",-384071477)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hold","hold",-1621118005),new cljs.core.Keyword(null,"cell","cell",764245084)], null)),new cljs.core.Keyword(null,"hold","hold",-1621118005).cljs$core$IFn$_invoke$arity$1(game_state));
var cell_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42458,(0),null);
var cell_indices = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42458,(1),null);
var cells = tetris.render.gameplay.game_view_data.piece_position(cell_config,cell_indices,(0),(0));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color-index","color-index",560460581),tetris.render.gameplay.game_view_data.modern_color(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(game_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hold","hold",-1621118005),new cljs.core.Keyword(null,"kind","kind",-717265803)], null))),new cljs.core.Keyword(null,"visible","visible",-1024216805),cljs.core.boolean$(new cljs.core.Keyword(null,"hold","hold",-1621118005).cljs$core$IFn$_invoke$arity$1(game_state)),new cljs.core.Keyword(null,"cells","cells",-985166822),cells], null);
});
tetris.render.gameplay.game_view_data.next_queue = (function tetris$render$gameplay$game_view_data$next_queue(layout,game_state){
return cljs.core.vec((function (){var iter__5649__auto__ = (function tetris$render$gameplay$game_view_data$next_queue_$_iter__42461(s__42462){
return (new cljs.core.LazySeq(null,(function (){
var s__42462__$1 = s__42462;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__42462__$1);
if(temp__5825__auto__){
var s__42462__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42462__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__42462__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__42464 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__42463 = (0);
while(true){
if((i__42463 < size__5648__auto__)){
var vec__42465 = cljs.core._nth(c__5647__auto__,i__42463);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42465,(0),null);
var piece = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42465,(1),null);
var vec__42468 = tetris.render.gameplay.game_view_data.center_hud_piece(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.Keyword(null,"width","width",-384071477)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.Keyword(null,"cell","cell",764245084)], null)),piece);
var cell_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42468,(0),null);
var cell_indices = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42468,(1),null);
cljs.core.chunk_append(b__42464,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color-index","color-index",560460581),tetris.render.gameplay.game_view_data.modern_color(new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(piece)),new cljs.core.Keyword(null,"visible","visible",-1024216805),true,new cljs.core.Keyword(null,"cells","cells",-985166822),tetris.render.gameplay.game_view_data.piece_position(cell_config,cell_indices,(r * (4)),(0))], null));

var G__42501 = (i__42463 + (1));
i__42463 = G__42501;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42464),tetris$render$gameplay$game_view_data$next_queue_$_iter__42461(cljs.core.chunk_rest(s__42462__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42464),null);
}
} else {
var vec__42471 = cljs.core.first(s__42462__$2);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42471,(0),null);
var piece = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42471,(1),null);
var vec__42474 = tetris.render.gameplay.game_view_data.center_hud_piece(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.Keyword(null,"width","width",-384071477)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.Keyword(null,"cell","cell",764245084)], null)),piece);
var cell_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42474,(0),null);
var cell_indices = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42474,(1),null);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color-index","color-index",560460581),tetris.render.gameplay.game_view_data.modern_color(new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(piece)),new cljs.core.Keyword(null,"visible","visible",-1024216805),true,new cljs.core.Keyword(null,"cells","cells",-985166822),tetris.render.gameplay.game_view_data.piece_position(cell_config,cell_indices,(r * (4)),(0))], null),tetris$render$gameplay$game_view_data$next_queue_$_iter__42461(cljs.core.rest(s__42462__$2)));
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
tetris.render.gameplay.game_view_data.render_data = (function tetris$render$gameplay$game_view_data$render_data(layout,game_state){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),tetris.render.gameplay.game_view_data.blocks(layout,game_state),new cljs.core.Keyword(null,"current","current",-1088038603),tetris.render.gameplay.game_view_data.current(layout,game_state),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),tetris.render.gameplay.game_view_data.ghost(layout,game_state),new cljs.core.Keyword(null,"hold","hold",-1621118005),tetris.render.gameplay.game_view_data.hold(layout,game_state),new cljs.core.Keyword(null,"next","next",-117701485),tetris.render.gameplay.game_view_data.next_queue(layout,game_state)], null);
});

//# sourceMappingURL=tetris.render.gameplay.game_view_data.js.map
