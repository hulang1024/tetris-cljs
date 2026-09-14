goog.provide('tetris.render');
var module$node_modules$excalibur$build$dist$excalibur=shadow.js.require("module$node_modules$excalibur$build$dist$excalibur", {});
tetris.render.game_width = (256);
tetris.render.game_height = (224);
tetris.render.cell_size = (8);
tetris.render.board_width = ((10) * (8));
tetris.render.board_height = ((20) * (8));
tetris.render.cell_pos = (function tetris$render$cell_pos(x){
return (x * (8));
});
tetris.render.cell__GT_pos = (function tetris$render$cell__GT_pos(row,col){
return module$node_modules$excalibur$build$dist$excalibur.vec((col * (8)),(row * (8)));
});
tetris.render.pos__GT_cell = (function tetris$render$pos__GT_cell(pos){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(pos.y / (8)),(pos.x / (8))], null);
});
/**
 * 计算清行后剩余行的移动目标位置,
 *   返回一个向量，每个元素为[源行索引 目标位置索引] 
 *   参数为清行之前的board状态，和要清的行索引集合
 */
tetris.render.line_clear_drop_moves = (function tetris$render$line_clear_drop_moves(board,full_rows){
var xs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__39597_SHARP_){
return (!(cljs.core.contains_QMARK_(full_rows,cljs.core.first(p1__39597_SHARP_))));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__39596_SHARP_){
return cljs.core.not_every_QMARK_(cljs.core.nil_QMARK_,cljs.core.second(p1__39596_SHARP_));
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,board)));
return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__39602_SHARP_,p2__39603_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.first(p1__39602_SHARP_),p2__39603_SHARP_],null));
}),xs,cljs.core.range.cljs$core$IFn$_invoke$arity$2(((20) - cljs.core.count(xs)),(20)));
});

//# sourceMappingURL=tetris.render.js.map
