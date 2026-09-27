goog.provide('tetris.core.game');
tetris.core.game.Command = new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"fall","fall",-563374271),new cljs.core.Keyword(null,"move-down","move-down",-1149356017),new cljs.core.Keyword(null,"move-left","move-left",-271562811),new cljs.core.Keyword(null,"move-right","move-right",1661359569),new cljs.core.Keyword(null,"rotate-cw","rotate-cw",83272937),new cljs.core.Keyword(null,"rotate-ccw","rotate-ccw",885172263),new cljs.core.Keyword(null,"rotate-180","rotate-180",605917905),new cljs.core.Keyword(null,"hard-drop","hard-drop",1211458322),new cljs.core.Keyword(null,"lock","lock",-488188066),new cljs.core.Keyword(null,"clear-lines","clear-lines",568695980),new cljs.core.Keyword(null,"spawn","spawn",-1213583293),new cljs.core.Keyword(null,"hold","hold",-1621118005)], null);
tetris.core.game.EventType = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"spawn-piece","spawn-piece",1855119717),new cljs.core.Keyword(null,"hold","hold",-1621118005),new cljs.core.Keyword(null,"lock","lock",-488188066),new cljs.core.Keyword(null,"line-clearing","line-clearing",-1671825341),new cljs.core.Keyword(null,"line-cleared","line-cleared",-75071835),new cljs.core.Keyword(null,"game-over","game-over",-607322695)], null);
tetris.core.game.Event = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi","multi",-190293005),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.Keyword(null,"type","type",1174270348)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spawn-piece","spawn-piece",1855119717),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"spawn-piece","spawn-piece",1855119717)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hold","hold",-1621118005),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"hold","hold",-1621118005)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"swap","swap",228675637),new cljs.core.Keyword(null,"put","put",1299772570)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lock","lock",-488188066),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"lock","lock",-488188066)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last","last",1105735132),tetris.core.piece.Piece], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line-clearing","line-clearing",-1671825341),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"line-clearing","line-clearing",-1671825341)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row-indices","row-indices",1417326295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"int","int",-1741416922)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line-cleared","line-cleared",-75071835),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"line-cleared","line-cleared",-75071835)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last-board","last-board",-50750622),tetris.core.board.Board], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells","cells",-985166822),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),tetris.core.board.Cell], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row-indices","row-indices",1417326295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"int","int",-1741416922)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-over","game-over",-607322695),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"game-over","game-over",-607322695)], null)], null)], null)], null)], null);
tetris.core.game.State = new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotation-system","rotation-system",-186821002),tetris.core.ruleset.RotationSystem], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"piece-generator","piece-generator",1898771696),tetris.core.ruleset.PieceGenerator], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ghost-enabled?","ghost-enabled?",-261151779),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"preview-count","preview-count",-329263374),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),tetris.core.board.Board], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),tetris.core.piece.Piece], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hold","hold",-1621118005),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),tetris.core.piece.Piece], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-queue","next-queue",-689213061),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seqable","seqable",-1305253818),tetris.core.piece.Piece], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-piece-id","next-piece-id",-872920712),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.Keyword(null,"int","int",-1741416922)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event-id","event-id",2130210178),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),tetris.core.game.Event], null)], null)], null);
tetris.core.game.CommandHandler = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),tetris.core.game.State,tetris.core.game.Command], null),tetris.core.game.State], null);
tetris.core.game.find_event = (function tetris$core$game$find_event(event_type,events){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__37271_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__37271_SHARP_),event_type);
}),events));
});
tetris.core.game.emit_event = (function tetris$core$game$emit_event(state,event){
var state__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"event-id","event-id",2130210178),cljs.core.inc);
var event__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((((event instanceof cljs.core.Keyword))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),event], null):event),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"event-id","event-id",2130210178).cljs$core$IFn$_invoke$arity$1(state__$1));
cljs.core.tap_GT_((""+"game - event "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(event__$1)));

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.Keyword(null,"events","events",1792552201),cljs.core.conj,event__$1);
});
tetris.core.game.ghost_position = (function tetris$core$game$ghost_position(board,piece,row,col){
var down = (function tetris$core$game$ghost_position_$_down(row__$1){
while(true){
if(tetris.core.board.collide_QMARK_(board,piece,(row__$1 + (1)),col)){
return row__$1;
} else {
var G__37307 = (row__$1 + (1));
row__$1 = G__37307;
continue;
}
break;
}
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [down(row),col], null);
});
tetris.core.game.update_ghost = (function tetris$core$game$update_ghost(state){
if(cljs.core.truth_((function (){var and__5160__auto__ = new cljs.core.Keyword(null,"ghost-enabled?","ghost-enabled?",-261151779).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(and__5160__auto__)){
return new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(state);
} else {
return and__5160__auto__;
}
})())){
var map__37279 = state;
var map__37279__$1 = cljs.core.__destructure_map(map__37279);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37279__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37279__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37279__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37279__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
var vec__37280 = tetris.core.game.ghost_position(board,current,row,col);
var ghost_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37280,(0),null);
var ghost_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37280,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row","row",-570139521),ghost_row,new cljs.core.Keyword(null,"col","col",-1959363084),ghost_col], null));
} else {
return state;
}
});
tetris.core.game.try_move = (function tetris$core$game$try_move(state,offset_row,offset_col){
if(cljs.core.truth_(new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(state))){
} else {
throw (new Error("Assert failed: (:current state)"));
}

var map__37283 = state;
var map__37283__$1 = cljs.core.__destructure_map(map__37283);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37283__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37283__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37283__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37283__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
var row__$1 = (row + offset_row);
var col__$1 = (col + offset_col);
if(tetris.core.board.collide_QMARK_(board,current,row__$1,col__$1)){
return state;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"row","row",-570139521),row__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"col","col",-1959363084),col__$1], 0));
}
});
tetris.core.game.try_rotate = (function tetris$core$game$try_rotate(state,turn){
if(cljs.core.truth_(new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(state))){
} else {
throw (new Error("Assert failed: (:current state)"));
}

return tetris.core.ruleset.rotate.cljs$core$IFn$_invoke$arity$2(state,turn);
});
tetris.core.game.lock_piece = (function tetris$core$game$lock_piece(state){
if(cljs.core.truth_(new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(state))){
} else {
throw (new Error("Assert failed: (:current state)"));
}

var map__37284 = state;
var map__37284__$1 = cljs.core.__destructure_map(map__37284);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37284__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37284__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37284__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37284__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
return tetris.core.game.emit_event(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"board","board",-1907017633),tetris.core.board.lock_piece(board,current,row,col)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"lock","lock",-488188066),new cljs.core.Keyword(null,"row","row",-570139521),row,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"last","last",1105735132),current], null));
});
tetris.core.game.clear_full_rows = (function tetris$core$game$clear_full_rows(state){
var board = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(state);
var full_row_indices = tetris.core.board.find_full_row_indices(board);
if(cljs.core.seq(full_row_indices)){
return tetris.core.game.emit_event(state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line-clearing","line-clearing",-1671825341),new cljs.core.Keyword(null,"row-indices","row-indices",1417326295),full_row_indices], null));
} else {
return state;
}
});
tetris.core.game.check_game_over = (function tetris$core$game$check_game_over(state){
if(tetris.core.board.lock_out_QMARK_(new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(state))){
return tetris.core.game.emit_event(state,new cljs.core.Keyword(null,"game-over","game-over",-607322695));
} else {
return state;
}
});
tetris.core.game.top_position = (function tetris$core$game$top_position(state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"row","row",-570139521),(0),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"col","col",-1959363084),(3)], 0));
});
tetris.core.game.spawn_piece = (function tetris$core$game$spawn_piece(state){
if(cljs.core.not(new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(state))){
} else {
throw (new Error("Assert failed: (not (:current state))"));
}

return tetris.core.game.emit_event(tetris.core.game.top_position((function (){var q = new cljs.core.Keyword(null,"next-queue","next-queue",-689213061).cljs$core$IFn$_invoke$arity$1(state);
var piece = cljs.core.first(q);
var next_piece_id = new cljs.core.Keyword(null,"next-piece-id","next-piece-id",-872920712).cljs$core$IFn$_invoke$arity$1(state);
var vec__37285 = tetris.core.ruleset.next_piece.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"piece-generator","piece-generator",1898771696).cljs$core$IFn$_invoke$arity$1(state));
var piece_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37285,(0),null);
var piece_generator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37285,(1),null);
var next_piece = tetris.core.piece.__GT_piece(next_piece_id,piece_type,(0),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotation-system","rotation-system",-186821002),new cljs.core.Keyword(null,"piece-shapes","piece-shapes",1278235176)], null)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"current","current",-1088038603),piece,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"piece-generator","piece-generator",1898771696),piece_generator,new cljs.core.Keyword(null,"next-queue","next-queue",-689213061),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.rest(q)),next_piece),new cljs.core.Keyword(null,"next-piece-id","next-piece-id",-872920712),(next_piece_id + cljs.core.count(new cljs.core.Keyword(null,"cells","cells",-985166822).cljs$core$IFn$_invoke$arity$1(piece)))], 0));
})()),new cljs.core.Keyword(null,"spawn-piece","spawn-piece",1855119717));
});
tetris.core.game.lock = (function tetris$core$game$lock(state){
if(cljs.core.truth_(new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(state))){
} else {
throw (new Error("Assert failed: (:current state)"));
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(tetris.core.game.check_game_over(tetris.core.game.clear_full_rows(tetris.core.game.lock_piece(state))),new cljs.core.Keyword(null,"current","current",-1088038603),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ghost","ghost",-1531157576),null], 0));
});
tetris.core.game.clear_lines = (function tetris$core$game$clear_lines(state){
var board = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(state);
var full_row_indices = tetris.core.board.find_full_row_indices(board);
return tetris.core.game.emit_event(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"board","board",-1907017633),tetris.core.board.clear_rows(board,full_row_indices)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line-cleared","line-cleared",-75071835),new cljs.core.Keyword(null,"last-board","last-board",-50750622),board,new cljs.core.Keyword(null,"cells","cells",-985166822),tetris.core.board.find_cells_to_clear(board,full_row_indices),new cljs.core.Keyword(null,"row-indices","row-indices",1417326295),full_row_indices], null));
});
tetris.core.game.hard_drop = (function tetris$core$game$hard_drop(state){
if(cljs.core.truth_(new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(state))){
} else {
throw (new Error("Assert failed: (:current state)"));
}

var map__37288 = state;
var map__37288__$1 = cljs.core.__destructure_map(map__37288);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37288__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37288__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37288__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37288__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
var vec__37289 = tetris.core.game.ghost_position(board,current,row,col);
var ghost_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37289,(0),null);
return tetris.core.game.lock(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"row","row",-570139521),ghost_row));
});
tetris.core.game.hold = (function tetris$core$game$hold(state){
if(cljs.core.truth_(new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(state))){
} else {
throw (new Error("Assert failed: (:current state)"));
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"hold","hold",-1621118005).cljs$core$IFn$_invoke$arity$1(state))){
return tetris.core.game.emit_event(tetris.core.game.top_position(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"hold","hold",-1621118005).cljs$core$IFn$_invoke$arity$1(state),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"hold","hold",-1621118005),tetris.core.piece.reset_rotation(new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(state))], 0))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"hold","hold",-1621118005),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"swap","swap",228675637)], null));
} else {
return tetris.core.game.emit_event(tetris.core.game.spawn_piece(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"current","current",-1088038603),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"hold","hold",-1621118005),tetris.core.piece.reset_rotation(new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(state))], 0))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"hold","hold",-1621118005),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"put","put",1299772570)], null));
}
});
tetris.core.game.can_move_down_QMARK_ = (function tetris$core$game$can_move_down_QMARK_(state){
if(cljs.core.truth_(new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(state))){
} else {
throw (new Error("Assert failed: (:current state)"));
}

var map__37292 = state;
var map__37292__$1 = cljs.core.__destructure_map(map__37292);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37292__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37292__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37292__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37292__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
return (!(tetris.core.board.collide_QMARK_(board,current,(row + (1)),col)));
});
tetris.core.game.initial_next_queue = (function tetris$core$game$initial_next_queue(state){
var map__37293 = state;
var map__37293__$1 = cljs.core.__destructure_map(map__37293);
var rotation_system = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37293__$1,new cljs.core.Keyword(null,"rotation-system","rotation-system",-186821002));
var preview_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37293__$1,new cljs.core.Keyword(null,"preview-count","preview-count",-329263374));
var piece_generator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37293__$1,new cljs.core.Keyword(null,"piece-generator","piece-generator",1898771696));
var next_piece_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37293__$1,new cljs.core.Keyword(null,"next-piece-id","next-piece-id",-872920712));
var piece_shapes = new cljs.core.Keyword(null,"piece-shapes","piece-shapes",1278235176).cljs$core$IFn$_invoke$arity$1(rotation_system);
var vec__37294 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__37297,_){
var vec__37298 = p__37297;
var pieces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37298,(0),null);
var gen = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37298,(1),null);
var next_piece_id__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37298,(2),null);
var vec__37301 = tetris.core.ruleset.next_piece.cljs$core$IFn$_invoke$arity$1(gen);
var piece_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37301,(0),null);
var gen__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37301,(1),null);
var piece = tetris.core.piece.__GT_piece(next_piece_id__$1,piece_type,(0),piece_shapes);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pieces,piece),gen__$1,(next_piece_id__$1 + cljs.core.count(new cljs.core.Keyword(null,"cells","cells",-985166822).cljs$core$IFn$_invoke$arity$1(piece)))], null);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,piece_generator,next_piece_id], null),cljs.core.range.cljs$core$IFn$_invoke$arity$1(preview_count));
var pieces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37294,(0),null);
var piece_generator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37294,(1),null);
var next_piece_id__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37294,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"piece-generator","piece-generator",1898771696),piece_generator__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"next-queue","next-queue",-689213061),pieces,new cljs.core.Keyword(null,"next-piece-id","next-piece-id",-872920712),next_piece_id__$1], 0));
});
tetris.core.game.initial_state = (function tetris$core$game$initial_state(overrides){
var defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"event-id","event-id",2130210178),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"hold","hold",-1621118005),new cljs.core.Keyword(null,"preview-count","preview-count",-329263374),new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"next-piece-id","next-piece-id",-872920712),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"ghost-enabled?","ghost-enabled?",-261151779),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"row","row",-570139521)],[(0),cljs.core.PersistentVector.EMPTY,null,(4),(0),null,(1),null,true,tetris.core.board.empty_board,(0)]);
return tetris.core.game.initial_next_queue(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([defaults,overrides], 0)));
});
tetris.core.game.started_QMARK_ = (function tetris$core$game$started_QMARK_(state){
return (new cljs.core.Keyword(null,"event-id","event-id",2130210178).cljs$core$IFn$_invoke$arity$1(state) > (0));
});
tetris.core.game.start = (function tetris$core$game$start(state){
if((!(tetris.core.game.started_QMARK_(state)))){
return tetris.core.game.spawn_piece(state);
} else {
return state;
}
});
tetris.core.game.handle_command = (function tetris$core$game$handle_command(state,command){
cljs.core.tap_GT_((""+"game - command "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(command)));

return tetris.core.game.update_ghost((function (){var G__37304 = command;
var G__37304__$1 = (((G__37304 instanceof cljs.core.Keyword))?G__37304.fqn:null);
switch (G__37304__$1) {
case "start":
return tetris.core.game.start(state);

break;
case "fall":
return tetris.core.game.try_move(state,(1),(0));

break;
case "move-down":
return tetris.core.game.try_move(state,(1),(0));

break;
case "move-left":
return tetris.core.game.try_move(state,(0),(-1));

break;
case "move-right":
return tetris.core.game.try_move(state,(0),(1));

break;
case "rotate-cw":
return tetris.core.game.try_rotate(state,new cljs.core.Keyword(null,"cw","cw",1918771037));

break;
case "rotate-ccw":
return tetris.core.game.try_rotate(state,new cljs.core.Keyword(null,"ccw","ccw",-1676880533));

break;
case "rotate-180":
return tetris.core.game.try_rotate(state,new cljs.core.Keyword(null,"180","180",-2051609953));

break;
case "hard-drop":
return tetris.core.game.hard_drop(state);

break;
case "lock":
return tetris.core.game.lock(state);

break;
case "clear-lines":
return tetris.core.game.clear_lines(state);

break;
case "spawn":
return tetris.core.game.spawn_piece(state);

break;
case "hold":
return tetris.core.game.hold(state);

break;
default:
return state;

}
})());
});

//# sourceMappingURL=tetris.core.game.js.map
