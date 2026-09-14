goog.provide('tetris.core.render');
var module$node_modules$excalibur$build$dist$excalibur=shadow.js.require("module$node_modules$excalibur$build$dist$excalibur", {});
tetris.core.render.game_width = (256);
tetris.core.render.game_height = (224);
tetris.core.render.cell_size = (8);
tetris.core.render.board_width = ((10) * (8));
tetris.core.render.board_height = ((20) * (8));
tetris.core.render.row__GT_pos = (function tetris$core$render$row__GT_pos(row){
return (row * (8));
});
tetris.core.render.cell__GT_pos = (function tetris$core$render$cell__GT_pos(row,col){
return module$node_modules$excalibur$build$dist$excalibur.vec((col * (8)),(row * (8)));
});
tetris.core.render.pos__GT_cell = (function tetris$core$render$pos__GT_cell(pos){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(pos.y / (8)),(pos.x / (8))], null);
});

//# sourceMappingURL=tetris.core.render.js.map
