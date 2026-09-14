goog.provide('tetris.scenes.gameplay.board');
var module$node_modules$excalibur$build$dist$excalibur=shadow.js.require("module$node_modules$excalibur$build$dist$excalibur", {});
tetris.scenes.gameplay.board.find_cells = (function tetris$scenes$gameplay$board$find_cells(rows,cells){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__37494_SHARP_){
var vec__37495 = tetris.render.pos__GT_cell(p1__37494_SHARP_.pos);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37495,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37495,(1),null);
return cljs.core.contains_QMARK_(cljs.core.set(rows),r);
}),cells);
});
tetris.scenes.gameplay.board.Board = class tetris$scenes$gameplay$board$Board extends module$node_modules$excalibur$build$dist$excalibur.Actor {
  constructor() {
super(({"x": (((256) - tetris.render.board_width) / (2)), "y": (((224) - tetris.render.board_height) / (2)), "anchor": module$node_modules$excalibur$build$dist$excalibur.Vector.Zero}));
var self__ = this;
  }
};
(tetris.scenes.gameplay.board.Board.prototype.onInitialize = (function (){
var self__ = this;
var this$ = this;
this$.reset();

var rect = (new module$node_modules$excalibur$build$dist$excalibur.Rectangle(({"width": tetris.render.board_width, "height": tetris.render.board_height, "color": module$node_modules$excalibur$build$dist$excalibur.Color.fromHex("#212121")})));
return this$.graphics.add(rect);
}));

(tetris.scenes.gameplay.board.Board.prototype.reset = (function (){
var self__ = this;
var this$ = this;
cljs.core.run_BANG_((function (p1__37500_SHARP_){
return p1__37500_SHARP_.kill();
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(this$.cells,new cljs.core.Keyword(null,"cells","cells",-985166822).cljs$core$IFn$_invoke$arity$1(this$.piece),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"cells","cells",-985166822).cljs$core$IFn$_invoke$arity$1(this$.ghost)], 0)));

(this$.cells = cljs.core.PersistentVector.EMPTY);

(this$.piece = null);

return (this$.ghost = null);
}));

(tetris.scenes.gameplay.board.Board.prototype.spawn_piece = (function (state){
var self__ = this;
var this$ = this;
var temp__5825__auto___37556 = this$.piece;
if(cljs.core.truth_(temp__5825__auto___37556)){
var piece_37557__$1 = temp__5825__auto___37556;
(this$.cells = cljs.core.into.cljs$core$IFn$_invoke$arity$2(this$.cells,new cljs.core.Keyword(null,"cells","cells",-985166822).cljs$core$IFn$_invoke$arity$1(piece_37557__$1)));
} else {
}

var temp__5825__auto___37558 = this$.ghost;
if(cljs.core.truth_(temp__5825__auto___37558)){
var ghost_37559__$1 = temp__5825__auto___37558;
cljs.core.run_BANG_((function (p1__37501_SHARP_){
return p1__37501_SHARP_.kill();
}),new cljs.core.Keyword(null,"cells","cells",-985166822).cljs$core$IFn$_invoke$arity$1(ghost_37559__$1));
} else {
}

var map__37534 = state;
var map__37534__$1 = cljs.core.__destructure_map(map__37534);
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37534__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37534__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37534__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
var map__37535 = current;
var map__37535__$1 = cljs.core.__destructure_map(map__37535);
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37535__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37535__$1,new cljs.core.Keyword(null,"dir","dir",1734754661));
var piece__$1 = tetris.scenes.gameplay.piece.create_piece.cljs$core$IFn$_invoke$arity$2(kind,dir);
var ghost__$1 = tetris.scenes.gameplay.piece.create_piece.cljs$core$IFn$_invoke$arity$3(kind,dir,true);
cljs.core.run_BANG_((function (p1__37502_SHARP_){
return this$.addChild(p1__37502_SHARP_);
}),new cljs.core.Keyword(null,"cells","cells",-985166822).cljs$core$IFn$_invoke$arity$1(piece__$1));

cljs.core.run_BANG_((function (p1__37503_SHARP_){
return this$.addChild(p1__37503_SHARP_);
}),new cljs.core.Keyword(null,"cells","cells",-985166822).cljs$core$IFn$_invoke$arity$1(ghost__$1));

(this$.piece = piece__$1);

return (this$.ghost = ghost__$1);
}));

(tetris.scenes.gameplay.board.Board.prototype.clear_lines = (function (line_clear_event,state){
var self__ = this;
var this$ = this;
var map__37536 = line_clear_event;
var map__37536__$1 = cljs.core.__destructure_map(map__37536);
var last_board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37536__$1,new cljs.core.Keyword(null,"last-board","last-board",-50750622));
var full_rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37536__$1,new cljs.core.Keyword(null,"full-rows","full-rows",241136058));
var drop_moves = tetris.render.line_clear_drop_moves(last_board,full_rows);
var cells__$1 = this$.cells;
var cells_to_die = tetris.scenes.gameplay.board.find_cells(full_rows,cells__$1);
var delay_ms = cljs.core.min.cljs$core$IFn$_invoke$arity$2(tetris.core.game.calc_fall_speed(new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(state)),(200));
var set_ghost_visible = (function (visible){
return cljs.core.run_BANG_((function (cell){
return (cell.graphics.isVisible = visible);
}),new cljs.core.Keyword(null,"cells","cells",-985166822).cljs$core$IFn$_invoke$arity$1(this$.ghost));
});
set_ghost_visible(false);

setTimeout((function (){
return set_ghost_visible(true);
}),delay_ms);

cljs.core.run_BANG_((function (p1__37504_SHARP_){
return p1__37504_SHARP_.kill();
}),cells_to_die);

var seq__37537 = cljs.core.seq(drop_moves);
var chunk__37538 = null;
var count__37539 = (0);
var i__37540 = (0);
while(true){
if((i__37540 < count__37539)){
var vec__37547 = chunk__37538.cljs$core$IIndexed$_nth$arity$2(null,i__37540);
var from_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37547,(0),null);
var to_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37547,(1),null);
cljs.core.run_BANG_(((function (seq__37537,chunk__37538,count__37539,i__37540,vec__37547,from_row,to_row,map__37536,map__37536__$1,last_board,full_rows,drop_moves,cells__$1,cells_to_die,delay_ms,set_ghost_visible,this$){
return (function (p1__37505_SHARP_){
return p1__37505_SHARP_.actions.delay((delay_ms * 0.7)).easeTo(module$node_modules$excalibur$build$dist$excalibur.vec(p1__37505_SHARP_.pos.x,tetris.render.cell_pos(to_row)),(delay_ms * 0.3),module$node_modules$excalibur$build$dist$excalibur.EasingFunctions.EaseInQuart);
});})(seq__37537,chunk__37538,count__37539,i__37540,vec__37547,from_row,to_row,map__37536,map__37536__$1,last_board,full_rows,drop_moves,cells__$1,cells_to_die,delay_ms,set_ghost_visible,this$))
,tetris.scenes.gameplay.board.find_cells(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [from_row], null),cells__$1));


var G__37560 = seq__37537;
var G__37561 = chunk__37538;
var G__37562 = count__37539;
var G__37563 = (i__37540 + (1));
seq__37537 = G__37560;
chunk__37538 = G__37561;
count__37539 = G__37562;
i__37540 = G__37563;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__37537);
if(temp__5825__auto__){
var seq__37537__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37537__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__37537__$1);
var G__37564 = cljs.core.chunk_rest(seq__37537__$1);
var G__37565 = c__5694__auto__;
var G__37566 = cljs.core.count(c__5694__auto__);
var G__37567 = (0);
seq__37537 = G__37564;
chunk__37538 = G__37565;
count__37539 = G__37566;
i__37540 = G__37567;
continue;
} else {
var vec__37550 = cljs.core.first(seq__37537__$1);
var from_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37550,(0),null);
var to_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37550,(1),null);
cljs.core.run_BANG_(((function (seq__37537,chunk__37538,count__37539,i__37540,vec__37550,from_row,to_row,seq__37537__$1,temp__5825__auto__,map__37536,map__37536__$1,last_board,full_rows,drop_moves,cells__$1,cells_to_die,delay_ms,set_ghost_visible,this$){
return (function (p1__37505_SHARP_){
return p1__37505_SHARP_.actions.delay((delay_ms * 0.7)).easeTo(module$node_modules$excalibur$build$dist$excalibur.vec(p1__37505_SHARP_.pos.x,tetris.render.cell_pos(to_row)),(delay_ms * 0.3),module$node_modules$excalibur$build$dist$excalibur.EasingFunctions.EaseInQuart);
});})(seq__37537,chunk__37538,count__37539,i__37540,vec__37550,from_row,to_row,seq__37537__$1,temp__5825__auto__,map__37536,map__37536__$1,last_board,full_rows,drop_moves,cells__$1,cells_to_die,delay_ms,set_ghost_visible,this$))
,tetris.scenes.gameplay.board.find_cells(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [from_row], null),cells__$1));


var G__37568 = cljs.core.next(seq__37537__$1);
var G__37569 = null;
var G__37570 = (0);
var G__37571 = (0);
seq__37537 = G__37568;
chunk__37538 = G__37569;
count__37539 = G__37570;
i__37540 = G__37571;
continue;
}
} else {
return null;
}
}
break;
}
}));

(tetris.scenes.gameplay.board.Board.prototype.render_game_state = (function (state){
var self__ = this;
var this$ = this;
var events = cljs.core.set(new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(state));
var temp__5825__auto___37572 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__37506_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__37506_SHARP_),new cljs.core.Keyword(null,"hard-drop","hard-drop",1211458322));
}),events));
if(cljs.core.truth_(temp__5825__auto___37572)){
var event_37573 = temp__5825__auto___37572;
var vec__37553_37574 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(event_37573);
var row_37575 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37553_37574,(0),null);
var col_37576 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37553_37574,(1),null);
(this$.piece = tetris.scenes.gameplay.piece.set_pos(this$.piece,row_37575,col_37576));
} else {
}

if(cljs.core.contains_QMARK_(events,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"spawn-piece","spawn-piece",1855119717)], null))){
this$.spawn_piece(state);
} else {
}

var temp__5825__auto___37577 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__37507_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__37507_SHARP_),new cljs.core.Keyword(null,"line-clear","line-clear",2100196075));
}),events));
if(cljs.core.truth_(temp__5825__auto___37577)){
var event_37578 = temp__5825__auto___37577;
this$.clear_lines(event_37578,state);
} else {
}

(this$.piece = tetris.scenes.gameplay.piece.set_pos(this$.piece,new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(state)));

(this$.piece = tetris.scenes.gameplay.piece.set_dir(this$.piece,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"dir","dir",1734754661)], null))));

(this$.ghost = tetris.scenes.gameplay.piece.set_pos(this$.ghost,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"row","row",-570139521)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"col","col",-1959363084)], null))));

return (this$.ghost = tetris.scenes.gameplay.piece.set_dir(this$.ghost,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"dir","dir",1734754661)], null))));
}));

//# sourceMappingURL=tetris.scenes.gameplay.board.js.map
