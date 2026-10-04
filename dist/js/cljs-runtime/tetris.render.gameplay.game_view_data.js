goog.provide('tetris.render.gameplay.game_view_data');
tetris.render.gameplay.game_view_data.container_schema = (function tetris$render$gameplay$game_view_data$container_schema(var_args){
var args__5903__auto__ = [];
var len__5897__auto___37655 = arguments.length;
var i__5898__auto___37656 = (0);
while(true){
if((i__5898__auto___37656 < len__5897__auto___37655)){
args__5903__auto__.push((arguments[i__5898__auto___37656]));

var G__37657 = (i__5898__auto___37656 + (1));
i__5898__auto___37656 = G__37657;
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
(tetris.render.gameplay.game_view_data.container_schema.cljs$lang$applyTo = (function (seq37598){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37598));
}));

tetris.render.gameplay.game_view_data.Cell = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-x","base-x",-13745014),cljs.core.number_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-y","base-y",-1534623522),cljs.core.number_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gap","gap",80255254),new cljs.core.Keyword(null,"int","int",-1741416922)], null)], null);
tetris.render.gameplay.game_view_data.Layout = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hold","hold",-1621118005),tetris.render.gameplay.game_view_data.container_schema.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cell","cell",764245084),tetris.render.gameplay.game_view_data.Cell], null)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"matrix","matrix",803137200),tetris.render.gameplay.game_view_data.container_schema.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"skyline-height","skyline-height",908413228),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"border-width","border-width",-1512605390),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cell","cell",764245084),tetris.render.gameplay.game_view_data.Cell], null)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next","next",-117701485),tetris.render.gameplay.game_view_data.container_schema.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cell","cell",764245084),tetris.render.gameplay.game_view_data.Cell], null)], 0))], null)], null);
tetris.render.gameplay.game_view_data.DisplayPiece = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color-index","color-index",560460581),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"visible","visible",-1024216805),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells","cells",-985166822),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.number_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.number_QMARK_], null)], null)], null)], null)], null);
tetris.render.gameplay.game_view_data.GameViewData = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current","current",-1088038603),tetris.render.gameplay.game_view_data.DisplayPiece], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ghost","ghost",-1531157576),tetris.render.gameplay.game_view_data.DisplayPiece], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hold","hold",-1621118005),tetris.render.gameplay.game_view_data.DisplayPiece], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),tetris.render.gameplay.game_view_data.DisplayPiece], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color-index","color-index",560460581),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.number_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.number_QMARK_], null)], null)], null)], null)], null);
tetris.render.gameplay.game_view_data.calc_layout = (function tetris$render$gameplay$game_view_data$calc_layout(preview_count){
var cell_size = (32);
var cell_gap = (0);
var matrix_padding = cljs.core.max.cljs$core$IFn$_invoke$arity$2(cell_gap,(2));
var matrix_border_w = (4);
var skyline_height = (((2) * cell_size) + ((2) * cell_gap));
var matrix_w = (((((10) * cell_size) + (((10) - (1)) * cell_gap)) + matrix_border_w) + ((2) * matrix_padding));
var matrix_h = (((((tetris.core.board.board_rows * cell_size) - skyline_height) + ((tetris.core.board.board_rows - (1)) * cell_gap)) + matrix_border_w) + ((2) * matrix_padding));
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
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),game_view_w,new cljs.core.Keyword(null,"height","height",1025178622),game_view_h,new cljs.core.Keyword(null,"matrix","matrix",803137200),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"x","x",2099068185),(hud_side_w + area_gap),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),matrix_w,new cljs.core.Keyword(null,"height","height",1025178622),matrix_h,new cljs.core.Keyword(null,"margin-x","margin-x",1660588286),area_gap,new cljs.core.Keyword(null,"skyline-height","skyline-height",908413228),skyline_height,new cljs.core.Keyword(null,"border-width","border-width",-1512605390),matrix_border_w,new cljs.core.Keyword(null,"cell","cell",764245084),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"base-x","base-x",-13745014),((matrix_border_w / (2)) + matrix_padding),new cljs.core.Keyword(null,"base-y","base-y",-1534623522),(((matrix_border_w / (2)) + matrix_padding) - skyline_height),new cljs.core.Keyword(null,"size","size",1098693007),cell_size,new cljs.core.Keyword(null,"gap","gap",80255254),cell_gap], null)], null),new cljs.core.Keyword(null,"hold","hold",-1621118005),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),cell_size,new cljs.core.Keyword(null,"width","width",-384071477),hold_w,new cljs.core.Keyword(null,"height","height",1025178622),hold_h,new cljs.core.Keyword(null,"cell","cell",764245084),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"base-x","base-x",-13745014),(0),new cljs.core.Keyword(null,"base-y","base-y",-1534623522),(0),new cljs.core.Keyword(null,"size","size",1098693007),hud_cell_size,new cljs.core.Keyword(null,"gap","gap",80255254),hud_cell_gap], null)], null),new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(((hud_side_w + area_gap) + matrix_w) + area_gap),new cljs.core.Keyword(null,"y","y",-1757859776),cell_size,new cljs.core.Keyword(null,"width","width",-384071477),next_w,new cljs.core.Keyword(null,"height","height",1025178622),next_h,new cljs.core.Keyword(null,"cell","cell",764245084),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"base-x","base-x",-13745014),(0),new cljs.core.Keyword(null,"base-y","base-y",-1534623522),(0),new cljs.core.Keyword(null,"size","size",1098693007),hud_cell_size,new cljs.core.Keyword(null,"gap","gap",80255254),hud_cell_gap], null)], null)], null);
});
tetris.render.gameplay.game_view_data.piece_cell_position = (function tetris$render$gameplay$game_view_data$piece_cell_position(cell_config,row,col){
var map__37601 = cell_config;
var map__37601__$1 = cljs.core.__destructure_map(map__37601);
var base_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37601__$1,new cljs.core.Keyword(null,"base-x","base-x",-13745014));
var base_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37601__$1,new cljs.core.Keyword(null,"base-y","base-y",-1534623522));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37601__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var gap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37601__$1,new cljs.core.Keyword(null,"gap","gap",80255254));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),((base_x + (col * gap)) + (size * col)),new cljs.core.Keyword(null,"y","y",-1757859776),((base_y + (row * gap)) + (size * row))], null);
});
tetris.render.gameplay.game_view_data.piece_position = (function tetris$render$gameplay$game_view_data$piece_position(cell_config,cell_indices,row,col){
return cljs.core.vec((function (){var iter__5649__auto__ = (function tetris$render$gameplay$game_view_data$piece_position_$_iter__37602(s__37603){
return (new cljs.core.LazySeq(null,(function (){
var s__37603__$1 = s__37603;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__37603__$1);
if(temp__5825__auto__){
var s__37603__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37603__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__37603__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__37605 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__37604 = (0);
while(true){
if((i__37604 < size__5648__auto__)){
var vec__37607 = cljs.core._nth(c__5647__auto__,i__37604);
var cr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37607,(0),null);
var cc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37607,(1),null);
var row__$1 = (row + cr);
var col__$1 = (col + cc);
cljs.core.chunk_append(b__37605,tetris.render.gameplay.game_view_data.piece_cell_position(cell_config,row__$1,col__$1));

var G__37666 = (i__37604 + (1));
i__37604 = G__37666;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37605),tetris$render$gameplay$game_view_data$piece_position_$_iter__37602(cljs.core.chunk_rest(s__37603__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37605),null);
}
} else {
var vec__37610 = cljs.core.first(s__37603__$2);
var cr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37610,(0),null);
var cc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37610,(1),null);
var row__$1 = (row + cr);
var col__$1 = (col + cc);
return cljs.core.cons(tetris.render.gameplay.game_view_data.piece_cell_position(cell_config,row__$1,col__$1),tetris$render$gameplay$game_view_data$piece_position_$_iter__37602(cljs.core.rest(s__37603__$2)));
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
}),tetris.core.piece.piece_kinds)));
});
tetris.render.gameplay.game_view_data.blocks = (function tetris$render$gameplay$game_view_data$blocks(layout,game_state){
return cljs.core.vec((function (){var iter__5649__auto__ = (function tetris$render$gameplay$game_view_data$blocks_$_iter__37613(s__37614){
return (new cljs.core.LazySeq(null,(function (){
var s__37614__$1 = s__37614;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__37614__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var vec__37619 = cljs.core.first(xs__6385__auto__);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37619,(0),null);
var xs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37619,(1),null);
var iterys__5645__auto__ = ((function (s__37614__$1,vec__37619,r,xs,xs__6385__auto__,temp__5825__auto__){
return (function tetris$render$gameplay$game_view_data$blocks_$_iter__37613_$_iter__37615(s__37616){
return (new cljs.core.LazySeq(null,((function (s__37614__$1,vec__37619,r,xs,xs__6385__auto__,temp__5825__auto__){
return (function (){
var s__37616__$1 = s__37616;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__37616__$1);
if(temp__5825__auto____$1){
var s__37616__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37616__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__37616__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__37618 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__37617 = (0);
while(true){
if((i__37617 < size__5648__auto__)){
var vec__37622 = cljs.core._nth(c__5647__auto__,i__37617);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37622,(0),null);
var cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37622,(1),null);
if(cljs.core.truth_(cell)){
cljs.core.chunk_append(b__37618,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.Keyword(null,"color-index","color-index",560460581),tetris.render.gameplay.game_view_data.modern_color(new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(cell))], null),tetris.render.gameplay.game_view_data.piece_cell_position(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"matrix","matrix",803137200),new cljs.core.Keyword(null,"cell","cell",764245084)], null)),r,c)));

var G__37671 = (i__37617 + (1));
i__37617 = G__37671;
continue;
} else {
var G__37672 = (i__37617 + (1));
i__37617 = G__37672;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37618),tetris$render$gameplay$game_view_data$blocks_$_iter__37613_$_iter__37615(cljs.core.chunk_rest(s__37616__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37618),null);
}
} else {
var vec__37625 = cljs.core.first(s__37616__$2);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37625,(0),null);
var cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37625,(1),null);
if(cljs.core.truth_(cell)){
return cljs.core.cons(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.Keyword(null,"color-index","color-index",560460581),tetris.render.gameplay.game_view_data.modern_color(new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(cell))], null),tetris.render.gameplay.game_view_data.piece_cell_position(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"matrix","matrix",803137200),new cljs.core.Keyword(null,"cell","cell",764245084)], null)),r,c)),tetris$render$gameplay$game_view_data$blocks_$_iter__37613_$_iter__37615(cljs.core.rest(s__37616__$2)));
} else {
var G__37673 = cljs.core.rest(s__37616__$2);
s__37616__$1 = G__37673;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__37614__$1,vec__37619,r,xs,xs__6385__auto__,temp__5825__auto__))
,null,null));
});})(s__37614__$1,vec__37619,r,xs,xs__6385__auto__,temp__5825__auto__))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,xs)));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,tetris$render$gameplay$game_view_data$blocks_$_iter__37613(cljs.core.rest(s__37614__$1)));
} else {
var G__37674 = cljs.core.rest(s__37614__$1);
s__37614__$1 = G__37674;
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
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(game_state),new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(game_state),new cljs.core.Keyword(null,"color-index","color-index",560460581),tetris.render.gameplay.game_view_data.modern_color(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(game_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"kind","kind",-717265803)], null))),new cljs.core.Keyword(null,"visible","visible",-1024216805),cljs.core.boolean$(new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(game_state)),new cljs.core.Keyword(null,"cells","cells",-985166822),tetris.render.gameplay.game_view_data.piece_position(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"matrix","matrix",803137200),new cljs.core.Keyword(null,"cell","cell",764245084)], null)),(function (){var and__5160__auto__ = new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(game_state);
if(cljs.core.truth_(and__5160__auto__)){
return tetris.core.rs.cell_indices.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(game_state));
} else {
return and__5160__auto__;
}
})(),new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(game_state),new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(game_state))], null);
});
tetris.render.gameplay.game_view_data.ghost = (function tetris$render$gameplay$game_view_data$ghost(layout,game_state){
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
})(),new cljs.core.Keyword(null,"color-index","color-index",560460581),tetris.render.gameplay.game_view_data.modern_color(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(game_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"kind","kind",-717265803)], null))),new cljs.core.Keyword(null,"visible","visible",-1024216805),cljs.core.boolean$(ghost),new cljs.core.Keyword(null,"cells","cells",-985166822),tetris.render.gameplay.game_view_data.piece_position(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"matrix","matrix",803137200),new cljs.core.Keyword(null,"cell","cell",764245084)], null)),(function (){var and__5160__auto__ = new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(game_state);
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
var vec__37631 = tetris.render.gameplay.game_view_data.center_hud_piece(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hold","hold",-1621118005),new cljs.core.Keyword(null,"width","width",-384071477)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hold","hold",-1621118005),new cljs.core.Keyword(null,"cell","cell",764245084)], null)),new cljs.core.Keyword(null,"hold","hold",-1621118005).cljs$core$IFn$_invoke$arity$1(game_state));
var cell_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37631,(0),null);
var cell_indices = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37631,(1),null);
var cells = tetris.render.gameplay.game_view_data.piece_position(cell_config,cell_indices,(0),(0));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"row","row",-570139521),(0),new cljs.core.Keyword(null,"col","col",-1959363084),(0),new cljs.core.Keyword(null,"color-index","color-index",560460581),tetris.render.gameplay.game_view_data.modern_color(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(game_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hold","hold",-1621118005),new cljs.core.Keyword(null,"kind","kind",-717265803)], null))),new cljs.core.Keyword(null,"visible","visible",-1024216805),cljs.core.boolean$(new cljs.core.Keyword(null,"hold","hold",-1621118005).cljs$core$IFn$_invoke$arity$1(game_state)),new cljs.core.Keyword(null,"cells","cells",-985166822),cells], null);
});
tetris.render.gameplay.game_view_data.next_queue = (function tetris$render$gameplay$game_view_data$next_queue(layout,game_state){
return cljs.core.vec((function (){var iter__5649__auto__ = (function tetris$render$gameplay$game_view_data$next_queue_$_iter__37634(s__37635){
return (new cljs.core.LazySeq(null,(function (){
var s__37635__$1 = s__37635;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__37635__$1);
if(temp__5825__auto__){
var s__37635__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37635__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__37635__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__37637 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__37636 = (0);
while(true){
if((i__37636 < size__5648__auto__)){
var vec__37638 = cljs.core._nth(c__5647__auto__,i__37636);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37638,(0),null);
var piece = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37638,(1),null);
var vec__37641 = tetris.render.gameplay.game_view_data.center_hud_piece(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.Keyword(null,"width","width",-384071477)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.Keyword(null,"cell","cell",764245084)], null)),piece);
var cell_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37641,(0),null);
var cell_indices = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37641,(1),null);
cljs.core.chunk_append(b__37637,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"row","row",-570139521),r,new cljs.core.Keyword(null,"col","col",-1959363084),(0),new cljs.core.Keyword(null,"color-index","color-index",560460581),tetris.render.gameplay.game_view_data.modern_color(new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(piece)),new cljs.core.Keyword(null,"visible","visible",-1024216805),true,new cljs.core.Keyword(null,"cells","cells",-985166822),tetris.render.gameplay.game_view_data.piece_position(cell_config,cell_indices,(r * (4)),(0))], null));

var G__37678 = (i__37636 + (1));
i__37636 = G__37678;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37637),tetris$render$gameplay$game_view_data$next_queue_$_iter__37634(cljs.core.chunk_rest(s__37635__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37637),null);
}
} else {
var vec__37644 = cljs.core.first(s__37635__$2);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37644,(0),null);
var piece = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37644,(1),null);
var vec__37649 = tetris.render.gameplay.game_view_data.center_hud_piece(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.Keyword(null,"width","width",-384071477)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.Keyword(null,"cell","cell",764245084)], null)),piece);
var cell_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37649,(0),null);
var cell_indices = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37649,(1),null);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"row","row",-570139521),r,new cljs.core.Keyword(null,"col","col",-1959363084),(0),new cljs.core.Keyword(null,"color-index","color-index",560460581),tetris.render.gameplay.game_view_data.modern_color(new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(piece)),new cljs.core.Keyword(null,"visible","visible",-1024216805),true,new cljs.core.Keyword(null,"cells","cells",-985166822),tetris.render.gameplay.game_view_data.piece_position(cell_config,cell_indices,(r * (4)),(0))], null),tetris$render$gameplay$game_view_data$next_queue_$_iter__37634(cljs.core.rest(s__37635__$2)));
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
