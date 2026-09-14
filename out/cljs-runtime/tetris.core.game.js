goog.provide('tetris.core.game');
tetris.core.game.Command = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"move-down","move-down",-1149356017),new cljs.core.Keyword(null,"move-left","move-left",-271562811),new cljs.core.Keyword(null,"move-right","move-right",1661359569),new cljs.core.Keyword(null,"rotate-cw","rotate-cw",83272937),new cljs.core.Keyword(null,"rotate-ccw","rotate-ccw",885172263),new cljs.core.Keyword(null,"hard-drop","hard-drop",1211458322),new cljs.core.Keyword(null,"lock","lock",-488188066)], null);
tetris.core.game.Event = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi","multi",-190293005),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.Keyword(null,"type","type",1174270348)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hard-drop","hard-drop",1211458322),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"hard-drop","hard-drop",1211458322)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"int","int",-1741416922)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spawn-piece","spawn-piece",1855119717),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"spawn-piece","spawn-piece",1855119717)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line-clear","line-clear",2100196075),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"line-clear","line-clear",2100196075)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last-board","last-board",-50750622),tetris.core.board.Board], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-rows","full-rows",241136058),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"int","int",-1741416922)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-over","game-over",-607322695),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"game-over","game-over",-607322695)], null)], null)], null)], null)], null);
tetris.core.game.State = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"das","das",-1801456200),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"arr","arr",474961448),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dcd","dcd",594655109),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sdf","sdf",-844168232),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lock-delay","lock-delay",-611157928),new cljs.core.Keyword(null,"int","int",-1741416922)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),tetris.core.board.Board], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current","current",-1088038603),tetris.core.piece.Piece], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next","next",-117701485),tetris.core.piece.Piece], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.Keyword(null,"int","int",-1741416922)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),tetris.core.game.Event], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"playing","playing",70013335),new cljs.core.Keyword(null,"paused","paused",-1710376127),new cljs.core.Keyword(null,"game-over","game-over",-607322695)], null)], null)], null);
tetris.core.game.align_frames = (function tetris$core$game$align_frames(x){
var f = 16.66;
return (cljs.math.floor((x / f)) * f);
});
tetris.core.game.calc_fall_speed = (function tetris$core$game$calc_fall_speed(level){
return tetris.core.game.align_frames((cljs.math.pow((0.8 - ((level - (1)) * 0.007)),(level - (1))) * (1000)));
});
tetris.core.game.get_ghost_position = (function tetris$core$game$get_ghost_position(board,piece,row,col){
var down = (function tetris$core$game$get_ghost_position_$_down(row__$1){
if(cljs.core.truth_(tetris.core.board.collide_QMARK_(board,(row__$1 + (1)),col,piece))){
return row__$1;
} else {
return tetris$core$game$get_ghost_position_$_down((row__$1 + (1)));
}
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [down(row),col], null);
});
tetris.core.game.update_ghost = (function tetris$core$game$update_ghost(state){
var map__39342 = state;
var map__39342__$1 = cljs.core.__destructure_map(map__39342);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39342__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39342__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39342__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39342__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
var vec__39343 = tetris.core.game.get_ghost_position(board,current,row,col);
var ghost_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39343,(0),null);
var ghost_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39343,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row","row",-570139521),ghost_row,new cljs.core.Keyword(null,"col","col",-1959363084),ghost_col], null));
});
tetris.core.game.move = (function tetris$core$game$move(state,offset_row,offset_col){
var map__39346 = state;
var map__39346__$1 = cljs.core.__destructure_map(map__39346);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39346__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39346__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39346__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39346__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
var row_SINGLEQUOTE_ = (row + offset_row);
var col_SINGLEQUOTE_ = (col + offset_col);
if(cljs.core.truth_(tetris.core.board.collide_QMARK_(board,row_SINGLEQUOTE_,col_SINGLEQUOTE_,current))){
return state;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"row","row",-570139521),row_SINGLEQUOTE_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"col","col",-1959363084),col_SINGLEQUOTE_], 0));
}
});
tetris.core.game.rotate = (function tetris$core$game$rotate(state,clockwise){
var map__39347 = state;
var map__39347__$1 = cljs.core.__destructure_map(map__39347);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39347__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39347__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39347__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39347__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
var map__39348 = current;
var map__39348__$1 = cljs.core.__destructure_map(map__39348);
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39348__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39348__$1,new cljs.core.Keyword(null,"dir","dir",1734754661));
var rotated = tetris.core.piece.make_piece(kind,tetris.core.piece.rotate(clockwise,dir));
if(cljs.core.truth_(tetris.core.board.collide_QMARK_(board,row,col,rotated))){
return state;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"current","current",-1088038603),rotated);
}
});
tetris.core.game.lock_current_piece = (function tetris$core$game$lock_current_piece(state){
var map__39349 = state;
var map__39349__$1 = cljs.core.__destructure_map(map__39349);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39349__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39349__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39349__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39349__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"board","board",-1907017633),tetris.core.board.lock_piece(board,current,row,col));
});
tetris.core.game.clear_full_lines = (function tetris$core$game$clear_full_lines(state){
var board = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(state);
var full_rows = tetris.core.board.find_full_rows(board);
var has_clear_QMARK_ = cljs.core.seq(full_rows);
if(has_clear_QMARK_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"board","board",-1907017633),tetris.core.board.clear_lines(board)),new cljs.core.Keyword(null,"events","events",1792552201),(function (p1__39350_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__39350_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line-clear","line-clear",2100196075),new cljs.core.Keyword(null,"last-board","last-board",-50750622),board,new cljs.core.Keyword(null,"full-rows","full-rows",241136058),cljs.core.set(full_rows)], null));
}));
} else {
return state;
}
});
tetris.core.game.check_game_over = (function tetris$core$game$check_game_over(state){
var map__39352 = state;
var map__39352__$1 = cljs.core.__destructure_map(map__39352);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39352__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39352__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39352__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39352__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
if(tetris.core.board.lock_out_QMARK_(board,current,row,col)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"game-over","game-over",-607322695)),new cljs.core.Keyword(null,"events","events",1792552201),(function (p1__39351_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__39351_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"game-over","game-over",-607322695)], null));
}));
} else {
return state;
}
});
tetris.core.game.rand_piece = (function tetris$core$game$rand_piece(rand_range){
var kind = tetris.core.piece.rand_kind(rand_range);
var dir = tetris.core.piece.rand_dir(rand_range);
return tetris.core.piece.make_piece(kind,dir);
});
tetris.core.game.spawn_piece = (function tetris$core$game$spawn_piece(state){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"next","next",-117701485).cljs$core$IFn$_invoke$arity$1(state),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"row","row",-570139521),(- (4)),new cljs.core.Keyword(null,"col","col",-1959363084),(3),new cljs.core.Keyword(null,"next","next",-117701485),tetris.core.game.rand_piece(new cljs.core.Keyword(null,"rand-range","rand-range",-1792793772).cljs$core$IFn$_invoke$arity$1(state))], 0)),new cljs.core.Keyword(null,"events","events",1792552201),(function (p1__39353_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__39353_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"spawn-piece","spawn-piece",1855119717)], null));
}));
});
tetris.core.game.lock_and_advance = (function tetris$core$game$lock_and_advance(state){
var state__$1 = tetris.core.game.check_game_over(tetris.core.game.clear_full_lines(tetris.core.game.lock_current_piece(state)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(state__$1),new cljs.core.Keyword(null,"game-over","game-over",-607322695))){
return state__$1;
} else {
return tetris.core.game.spawn_piece(state__$1);
}
});
tetris.core.game.hard_drop = (function tetris$core$game$hard_drop(state){
var map__39354 = state;
var map__39354__$1 = cljs.core.__destructure_map(map__39354);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39354__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39354__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39354__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39354__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
var events = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39354__$1,new cljs.core.Keyword(null,"events","events",1792552201));
var vec__39355 = tetris.core.game.get_ghost_position(board,current,row,col);
var ghost_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39355,(0),null);
return tetris.core.game.lock_and_advance(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"row","row",-570139521),ghost_row,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"events","events",1792552201),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(events,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"hard-drop","hard-drop",1211458322),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ghost_row,col], null)], null))], 0)));
});
tetris.core.game.can_down_QMARK_ = (function tetris$core$game$can_down_QMARK_(state){
var map__39358 = state;
var map__39358__$1 = cljs.core.__destructure_map(map__39358);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39358__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39358__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39358__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39358__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
return cljs.core.not(tetris.core.board.collide_QMARK_(board,(row + (1)),col,current));
});
tetris.core.game.calc_soft_drop_speed = (function tetris$core$game$calc_soft_drop_speed(state){
return tetris.core.game.align_frames((tetris.core.game.calc_fall_speed(new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(state)) / cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"sdf","sdf",-844168232)], null))));
});
tetris.core.game.initial_state = (function tetris$core$game$initial_state(state,rand_range){
return tetris.core.game.update_ghost(tetris.core.game.spawn_piece(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.Keyword(null,"rand-range","rand-range",-1792793772),new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"row","row",-570139521)],[cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"das","das",-1801456200),(167),new cljs.core.Keyword(null,"arr","arr",474961448),(32),new cljs.core.Keyword(null,"dcd","dcd",594655109),(17),new cljs.core.Keyword(null,"sdf","sdf",-844168232),(6),new cljs.core.Keyword(null,"lock-delay","lock-delay",-611157928),(500)], null),(2),tetris.core.game.rand_piece(rand_range),new cljs.core.Keyword(null,"playing","playing",70013335),(0),rand_range,null,null,tetris.core.board.empty_board(),(0)]),state], 0))));
});
tetris.core.game.handle_command = (function tetris$core$game$handle_command(state,command){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"playing","playing",70013335))){
return tetris.core.game.update_ghost((function (){var G__39359 = command;
var G__39359__$1 = (((G__39359 instanceof cljs.core.Keyword))?G__39359.fqn:null);
switch (G__39359__$1) {
case "move-down":
return tetris.core.game.move(state,(1),(0));

break;
case "move-left":
return tetris.core.game.move(state,(0),(-1));

break;
case "move-right":
return tetris.core.game.move(state,(0),(1));

break;
case "rotate-cw":
return tetris.core.game.rotate(state,new cljs.core.Keyword(null,"cw","cw",1918771037));

break;
case "rotate-ccw":
return tetris.core.game.rotate(state,new cljs.core.Keyword(null,"ccw","ccw",-1676880533));

break;
case "hard-drop":
return tetris.core.game.hard_drop(state);

break;
case "lock":
return tetris.core.game.lock_and_advance(state);

break;
default:
return state;

}
})());
} else {
return state;
}
});

//# sourceMappingURL=tetris.core.game.js.map
