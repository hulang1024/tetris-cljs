goog.provide('tetris.scenes.render.gameplay.game_view_data');
tetris.scenes.render.gameplay.game_view_data.container_schema = (function tetris$scenes$render$gameplay$game_view_data$container_schema(var_args){
var args__5903__auto__ = [];
var len__5897__auto___53050 = arguments.length;
var i__5898__auto___53051 = (0);
while(true){
if((i__5898__auto___53051 < len__5897__auto___53050)){
args__5903__auto__.push((arguments[i__5898__auto___53051]));

var G__53052 = (i__5898__auto___53051 + (1));
i__5898__auto___53051 = G__53052;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return tetris.scenes.render.gameplay.game_view_data.container_schema.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(tetris.scenes.render.gameplay.game_view_data.container_schema.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.number_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.number_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"int","int",-1741416922)], null)], null),more);
}));

(tetris.scenes.render.gameplay.game_view_data.container_schema.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tetris.scenes.render.gameplay.game_view_data.container_schema.cljs$lang$applyTo = (function (seq53004){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53004));
}));

tetris.scenes.render.gameplay.game_view_data.Cell = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-x","base-x",-13745014),cljs.core.number_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-y","base-y",-1534623522),cljs.core.number_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gap","gap",80255254),new cljs.core.Keyword(null,"int","int",-1741416922)], null)], null);
tetris.scenes.render.gameplay.game_view_data.Layout = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hold","hold",-1621118005),tetris.scenes.render.gameplay.game_view_data.container_schema.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cell","cell",764245084),tetris.scenes.render.gameplay.game_view_data.Cell], null)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"matrix","matrix",803137200),tetris.scenes.render.gameplay.game_view_data.container_schema.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"skyline-height","skyline-height",908413228),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"border-width","border-width",-1512605390),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"margin-x","margin-x",1660588286),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cell","cell",764245084),tetris.scenes.render.gameplay.game_view_data.Cell], null)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next","next",-117701485),tetris.scenes.render.gameplay.game_view_data.container_schema.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cell","cell",764245084),tetris.scenes.render.gameplay.game_view_data.Cell], null)], 0))], null)], null);
tetris.scenes.render.gameplay.game_view_data.DisplayPiece = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color-index","color-index",560460581),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"visible","visible",-1024216805),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells","cells",-985166822),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.number_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.number_QMARK_], null)], null)], null)], null)], null);
tetris.scenes.render.gameplay.game_view_data.GameViewData = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current","current",-1088038603),tetris.scenes.render.gameplay.game_view_data.DisplayPiece], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ghost","ghost",-1531157576),tetris.scenes.render.gameplay.game_view_data.DisplayPiece], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hold","hold",-1621118005),tetris.scenes.render.gameplay.game_view_data.DisplayPiece], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),tetris.scenes.render.gameplay.game_view_data.DisplayPiece], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color-index","color-index",560460581),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.number_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.number_QMARK_], null)], null)], null)], null)], null);
tetris.scenes.render.gameplay.game_view_data.calc_layout = (function tetris$scenes$render$gameplay$game_view_data$calc_layout(preview_count){
var cell_size = (38);
var cell_gap = (0);
var matrix_padding = cljs.core.max.cljs$core$IFn$_invoke$arity$2(cell_gap,(1));
var matrix_border_w = (6);
var skyline_height = (((2) * cell_size) + (((2) - (1)) * cell_gap));
var matrix_w = (((((10) * cell_size) + (((10) - (1)) * cell_gap)) + matrix_border_w) + (matrix_padding * (2)));
var matrix_h = (((((tetris.core.board.board_rows * cell_size) - skyline_height) + ((tetris.core.board.board_rows - (1)) * cell_gap)) + (matrix_border_w / (2))) + matrix_padding);
var area_gap = cell_size;
var hud_cell_scale = 0.6;
var hud_cell_size = cljs.math.floor((cell_size * hud_cell_scale));
var hud_cell_gap = cljs.math.floor((cell_gap * hud_cell_scale));
var hud_side_w = (100);
var hold_w = ((hud_cell_size * (4)) + (hud_cell_gap * (3)));
var hold_h = ((hud_cell_size * (4)) + (hud_cell_gap * (3)));
var next_w = ((hud_cell_size * (4)) + (hud_cell_gap * (3)));
var next_h = (((hud_cell_size * (4)) * preview_count) + (hud_cell_gap * (3)));
var game_view_w = ((((hud_side_w + area_gap) + matrix_w) + area_gap) + hud_side_w);
var game_view_h = matrix_h;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),game_view_w,new cljs.core.Keyword(null,"height","height",1025178622),game_view_h,new cljs.core.Keyword(null,"matrix","matrix",803137200),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"skyline-height","skyline-height",908413228),new cljs.core.Keyword(null,"border-width","border-width",-1512605390),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"cell","cell",764245084),new cljs.core.Keyword(null,"margin-x","margin-x",1660588286),new cljs.core.Keyword(null,"height","height",1025178622)],[(0),matrix_w,skyline_height,matrix_border_w,matrix_padding,(hud_side_w + area_gap),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"base-x","base-x",-13745014),((matrix_border_w / (2)) + matrix_padding),new cljs.core.Keyword(null,"base-y","base-y",-1534623522),(- skyline_height),new cljs.core.Keyword(null,"size","size",1098693007),cell_size,new cljs.core.Keyword(null,"gap","gap",80255254),cell_gap], null),area_gap,matrix_h]),new cljs.core.Keyword(null,"hold","hold",-1621118005),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),cell_size,new cljs.core.Keyword(null,"width","width",-384071477),hold_w,new cljs.core.Keyword(null,"height","height",1025178622),hold_h,new cljs.core.Keyword(null,"cell","cell",764245084),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"base-x","base-x",-13745014),(0),new cljs.core.Keyword(null,"base-y","base-y",-1534623522),(0),new cljs.core.Keyword(null,"size","size",1098693007),hud_cell_size,new cljs.core.Keyword(null,"gap","gap",80255254),hud_cell_gap], null)], null),new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(((hud_side_w + area_gap) + matrix_w) + area_gap),new cljs.core.Keyword(null,"y","y",-1757859776),cell_size,new cljs.core.Keyword(null,"width","width",-384071477),next_w,new cljs.core.Keyword(null,"height","height",1025178622),next_h,new cljs.core.Keyword(null,"cell","cell",764245084),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"base-x","base-x",-13745014),(0),new cljs.core.Keyword(null,"base-y","base-y",-1534623522),(0),new cljs.core.Keyword(null,"size","size",1098693007),hud_cell_size,new cljs.core.Keyword(null,"gap","gap",80255254),hud_cell_gap], null)], null)], null);
});
tetris.scenes.render.gameplay.game_view_data.piece_cell_position = (function tetris$scenes$render$gameplay$game_view_data$piece_cell_position(cell_config,row,col){
var map__53005 = cell_config;
var map__53005__$1 = cljs.core.__destructure_map(map__53005);
var base_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53005__$1,new cljs.core.Keyword(null,"base-x","base-x",-13745014));
var base_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53005__$1,new cljs.core.Keyword(null,"base-y","base-y",-1534623522));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53005__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var gap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53005__$1,new cljs.core.Keyword(null,"gap","gap",80255254));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),((base_x + (col * gap)) + (size * col)),new cljs.core.Keyword(null,"y","y",-1757859776),((base_y + (row * gap)) + (size * row))], null);
});
tetris.scenes.render.gameplay.game_view_data.piece_position = (function tetris$scenes$render$gameplay$game_view_data$piece_position(cell_config,cell_indices,row,col){
return cljs.core.vec((function (){var iter__5649__auto__ = (function tetris$scenes$render$gameplay$game_view_data$piece_position_$_iter__53006(s__53007){
return (new cljs.core.LazySeq(null,(function (){
var s__53007__$1 = s__53007;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__53007__$1);
if(temp__5825__auto__){
var s__53007__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53007__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__53007__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__53009 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__53008 = (0);
while(true){
if((i__53008 < size__5648__auto__)){
var vec__53010 = cljs.core._nth(c__5647__auto__,i__53008);
var cr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53010,(0),null);
var cc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53010,(1),null);
var row__$1 = (row + cr);
var col__$1 = (col + cc);
cljs.core.chunk_append(b__53009,tetris.scenes.render.gameplay.game_view_data.piece_cell_position(cell_config,row__$1,col__$1));

var G__53053 = (i__53008 + (1));
i__53008 = G__53053;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53009),tetris$scenes$render$gameplay$game_view_data$piece_position_$_iter__53006(cljs.core.chunk_rest(s__53007__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53009),null);
}
} else {
var vec__53013 = cljs.core.first(s__53007__$2);
var cr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53013,(0),null);
var cc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53013,(1),null);
var row__$1 = (row + cr);
var col__$1 = (col + cc);
return cljs.core.cons(tetris.scenes.render.gameplay.game_view_data.piece_cell_position(cell_config,row__$1,col__$1),tetris$scenes$render$gameplay$game_view_data$piece_position_$_iter__53006(cljs.core.rest(s__53007__$2)));
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
tetris.scenes.render.gameplay.game_view_data.modern_color = (function tetris$scenes$render$gameplay$game_view_data$modern_color(kind){
return ((2) + cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,k){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,kind)){
return i;
} else {
return null;
}
}),tetris.core.piece.piece_kinds)));
});
tetris.scenes.render.gameplay.game_view_data.blocks = (function tetris$scenes$render$gameplay$game_view_data$blocks(layout,game_state){
return cljs.core.vec((function (){var iter__5649__auto__ = (function tetris$scenes$render$gameplay$game_view_data$blocks_$_iter__53016(s__53017){
return (new cljs.core.LazySeq(null,(function (){
var s__53017__$1 = s__53017;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__53017__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var vec__53022 = cljs.core.first(xs__6385__auto__);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53022,(0),null);
var xs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53022,(1),null);
var iterys__5645__auto__ = ((function (s__53017__$1,vec__53022,r,xs,xs__6385__auto__,temp__5825__auto__){
return (function tetris$scenes$render$gameplay$game_view_data$blocks_$_iter__53016_$_iter__53018(s__53019){
return (new cljs.core.LazySeq(null,((function (s__53017__$1,vec__53022,r,xs,xs__6385__auto__,temp__5825__auto__){
return (function (){
var s__53019__$1 = s__53019;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__53019__$1);
if(temp__5825__auto____$1){
var s__53019__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__53019__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__53019__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__53021 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__53020 = (0);
while(true){
if((i__53020 < size__5648__auto__)){
var vec__53025 = cljs.core._nth(c__5647__auto__,i__53020);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53025,(0),null);
var cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53025,(1),null);
if(cljs.core.truth_(cell)){
cljs.core.chunk_append(b__53021,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.Keyword(null,"color-index","color-index",560460581),tetris.scenes.render.gameplay.game_view_data.modern_color(new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(cell))], null),tetris.scenes.render.gameplay.game_view_data.piece_cell_position(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"matrix","matrix",803137200),new cljs.core.Keyword(null,"cell","cell",764245084)], null)),r,c)));

var G__53054 = (i__53020 + (1));
i__53020 = G__53054;
continue;
} else {
var G__53055 = (i__53020 + (1));
i__53020 = G__53055;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53021),tetris$scenes$render$gameplay$game_view_data$blocks_$_iter__53016_$_iter__53018(cljs.core.chunk_rest(s__53019__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53021),null);
}
} else {
var vec__53028 = cljs.core.first(s__53019__$2);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53028,(0),null);
var cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53028,(1),null);
if(cljs.core.truth_(cell)){
return cljs.core.cons(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.Keyword(null,"color-index","color-index",560460581),tetris.scenes.render.gameplay.game_view_data.modern_color(new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(cell))], null),tetris.scenes.render.gameplay.game_view_data.piece_cell_position(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"matrix","matrix",803137200),new cljs.core.Keyword(null,"cell","cell",764245084)], null)),r,c)),tetris$scenes$render$gameplay$game_view_data$blocks_$_iter__53016_$_iter__53018(cljs.core.rest(s__53019__$2)));
} else {
var G__53056 = cljs.core.rest(s__53019__$2);
s__53019__$1 = G__53056;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__53017__$1,vec__53022,r,xs,xs__6385__auto__,temp__5825__auto__))
,null,null));
});})(s__53017__$1,vec__53022,r,xs,xs__6385__auto__,temp__5825__auto__))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,xs)));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,tetris$scenes$render$gameplay$game_view_data$blocks_$_iter__53016(cljs.core.rest(s__53017__$1)));
} else {
var G__53057 = cljs.core.rest(s__53017__$1);
s__53017__$1 = G__53057;
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
tetris.scenes.render.gameplay.game_view_data.current = (function tetris$scenes$render$gameplay$game_view_data$current(layout,game_state){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(game_state),new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(game_state),new cljs.core.Keyword(null,"color-index","color-index",560460581),tetris.scenes.render.gameplay.game_view_data.modern_color(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(game_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"kind","kind",-717265803)], null))),new cljs.core.Keyword(null,"visible","visible",-1024216805),cljs.core.boolean$(new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(game_state)),new cljs.core.Keyword(null,"cells","cells",-985166822),tetris.scenes.render.gameplay.game_view_data.piece_position(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"matrix","matrix",803137200),new cljs.core.Keyword(null,"cell","cell",764245084)], null)),(function (){var and__5160__auto__ = new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(game_state);
if(cljs.core.truth_(and__5160__auto__)){
return tetris.core.rs.cell_indices(new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(game_state));
} else {
return and__5160__auto__;
}
})(),new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(game_state),new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(game_state))], null);
});
tetris.scenes.render.gameplay.game_view_data.ghost = (function tetris$scenes$render$gameplay$game_view_data$ghost(layout,game_state){
var ghost = tetris.core.game.ghost(game_state);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"row","row",-570139521),(function (){var or__5162__auto__ = new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(ghost);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"col","col",-1959363084),(function (){var or__5162__auto__ = new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(ghost);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"color-index","color-index",560460581),tetris.scenes.render.gameplay.game_view_data.modern_color(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(game_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"kind","kind",-717265803)], null))),new cljs.core.Keyword(null,"visible","visible",-1024216805),cljs.core.boolean$(ghost),new cljs.core.Keyword(null,"cells","cells",-985166822),tetris.scenes.render.gameplay.game_view_data.piece_position(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"matrix","matrix",803137200),new cljs.core.Keyword(null,"cell","cell",764245084)], null)),(function (){var and__5160__auto__ = new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(game_state);
if(cljs.core.truth_(and__5160__auto__)){
return tetris.core.rs.cell_indices(new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(game_state));
} else {
return and__5160__auto__;
}
})(),new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(ghost),new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(ghost))], null);
});
tetris.scenes.render.gameplay.game_view_data.center_hud_piece = (function tetris$scenes$render$gameplay$game_view_data$center_hud_piece(container_width,cell_config,piece){
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
tetris.scenes.render.gameplay.game_view_data.hold = (function tetris$scenes$render$gameplay$game_view_data$hold(layout,game_state){
var vec__53031 = tetris.scenes.render.gameplay.game_view_data.center_hud_piece(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hold","hold",-1621118005),new cljs.core.Keyword(null,"width","width",-384071477)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hold","hold",-1621118005),new cljs.core.Keyword(null,"cell","cell",764245084)], null)),new cljs.core.Keyword(null,"hold","hold",-1621118005).cljs$core$IFn$_invoke$arity$1(game_state));
var cell_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53031,(0),null);
var cell_indices = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53031,(1),null);
var cells = tetris.scenes.render.gameplay.game_view_data.piece_position(cell_config,cell_indices,(0),(0));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"row","row",-570139521),(0),new cljs.core.Keyword(null,"col","col",-1959363084),(0),new cljs.core.Keyword(null,"color-index","color-index",560460581),tetris.scenes.render.gameplay.game_view_data.modern_color(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(game_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hold","hold",-1621118005),new cljs.core.Keyword(null,"kind","kind",-717265803)], null))),new cljs.core.Keyword(null,"visible","visible",-1024216805),cljs.core.boolean$(new cljs.core.Keyword(null,"hold","hold",-1621118005).cljs$core$IFn$_invoke$arity$1(game_state)),new cljs.core.Keyword(null,"cells","cells",-985166822),cells], null);
});
tetris.scenes.render.gameplay.game_view_data.next_queue = (function tetris$scenes$render$gameplay$game_view_data$next_queue(layout,game_state){
return cljs.core.vec((function (){var iter__5649__auto__ = (function tetris$scenes$render$gameplay$game_view_data$next_queue_$_iter__53034(s__53035){
return (new cljs.core.LazySeq(null,(function (){
var s__53035__$1 = s__53035;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__53035__$1);
if(temp__5825__auto__){
var s__53035__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53035__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__53035__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__53037 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__53036 = (0);
while(true){
if((i__53036 < size__5648__auto__)){
var vec__53038 = cljs.core._nth(c__5647__auto__,i__53036);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53038,(0),null);
var piece = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53038,(1),null);
var vec__53041 = tetris.scenes.render.gameplay.game_view_data.center_hud_piece(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.Keyword(null,"width","width",-384071477)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.Keyword(null,"cell","cell",764245084)], null)),piece);
var cell_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53041,(0),null);
var cell_indices = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53041,(1),null);
cljs.core.chunk_append(b__53037,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"row","row",-570139521),r,new cljs.core.Keyword(null,"col","col",-1959363084),(0),new cljs.core.Keyword(null,"color-index","color-index",560460581),tetris.scenes.render.gameplay.game_view_data.modern_color(new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(piece)),new cljs.core.Keyword(null,"visible","visible",-1024216805),true,new cljs.core.Keyword(null,"cells","cells",-985166822),tetris.scenes.render.gameplay.game_view_data.piece_position(cell_config,cell_indices,(r * (4)),(0))], null));

var G__53058 = (i__53036 + (1));
i__53036 = G__53058;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53037),tetris$scenes$render$gameplay$game_view_data$next_queue_$_iter__53034(cljs.core.chunk_rest(s__53035__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53037),null);
}
} else {
var vec__53044 = cljs.core.first(s__53035__$2);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53044,(0),null);
var piece = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53044,(1),null);
var vec__53047 = tetris.scenes.render.gameplay.game_view_data.center_hud_piece(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.Keyword(null,"width","width",-384071477)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.Keyword(null,"cell","cell",764245084)], null)),piece);
var cell_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53047,(0),null);
var cell_indices = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53047,(1),null);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"row","row",-570139521),r,new cljs.core.Keyword(null,"col","col",-1959363084),(0),new cljs.core.Keyword(null,"color-index","color-index",560460581),tetris.scenes.render.gameplay.game_view_data.modern_color(new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(piece)),new cljs.core.Keyword(null,"visible","visible",-1024216805),true,new cljs.core.Keyword(null,"cells","cells",-985166822),tetris.scenes.render.gameplay.game_view_data.piece_position(cell_config,cell_indices,(r * (4)),(0))], null),tetris$scenes$render$gameplay$game_view_data$next_queue_$_iter__53034(cljs.core.rest(s__53035__$2)));
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
tetris.scenes.render.gameplay.game_view_data.render_data = (function tetris$scenes$render$gameplay$game_view_data$render_data(layout,game_state){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),tetris.scenes.render.gameplay.game_view_data.blocks(layout,game_state),new cljs.core.Keyword(null,"current","current",-1088038603),tetris.scenes.render.gameplay.game_view_data.current(layout,game_state),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),tetris.scenes.render.gameplay.game_view_data.ghost(layout,game_state),new cljs.core.Keyword(null,"hold","hold",-1621118005),tetris.scenes.render.gameplay.game_view_data.hold(layout,game_state),new cljs.core.Keyword(null,"next","next",-117701485),tetris.scenes.render.gameplay.game_view_data.next_queue(layout,game_state)], null);
});

//# sourceMappingURL=tetris.scenes.render.gameplay.game_view_data.js.map
