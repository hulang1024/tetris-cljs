goog.provide('tetris.core.game');
tetris.core.game.Command = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"spawn","spawn",-1213583293),new cljs.core.Keyword(null,"fall","fall",-563374271),new cljs.core.Keyword(null,"move-down","move-down",-1149356017),new cljs.core.Keyword(null,"move-left","move-left",-271562811),new cljs.core.Keyword(null,"move-right","move-right",1661359569),new cljs.core.Keyword(null,"rotate-cw","rotate-cw",83272937),new cljs.core.Keyword(null,"rotate-ccw","rotate-ccw",885172263),new cljs.core.Keyword(null,"rotate-180","rotate-180",605917905),new cljs.core.Keyword(null,"hard-drop","hard-drop",1211458322),new cljs.core.Keyword(null,"lock","lock",-488188066),new cljs.core.Keyword(null,"clear-lines","clear-lines",568695980),new cljs.core.Keyword(null,"hold","hold",-1621118005)], null);
tetris.core.game.event_schema = (function tetris$core$game$event_schema(var_args){
var args__5903__auto__ = [];
var len__5897__auto___37595 = arguments.length;
var i__5898__auto___37596 = (0);
while(true){
if((i__5898__auto___37596 < len__5897__auto___37595)){
args__5903__auto__.push((arguments[i__5898__auto___37596]));

var G__37597 = (i__5898__auto___37596 + (1));
i__5898__auto___37596 = G__37597;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return tetris.core.game.event_schema.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(tetris.core.game.event_schema.cljs$core$IFn$_invoke$arity$variadic = (function (type,fields){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),type], null)], null)], null),fields)], null);
}));

(tetris.core.game.event_schema.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tetris.core.game.event_schema.cljs$lang$applyTo = (function (seq37554){
var G__37555 = cljs.core.first(seq37554);
var seq37554__$1 = cljs.core.next(seq37554);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37555,seq37554__$1);
}));

tetris.core.game.Event = new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi","multi",-190293005),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.Keyword(null,"type","type",1174270348)], null),tetris.core.game.event_schema(new cljs.core.Keyword(null,"spawned","spawned",1126579468)),tetris.core.game.event_schema(new cljs.core.Keyword(null,"fallen","fallen",-195517745)),tetris.core.game.event_schema(new cljs.core.Keyword(null,"moved-down","moved-down",-1522381411)),tetris.core.game.event_schema.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"shifted","shifted",13239433),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.Keyword(null,"int","int",-1741416922)], null)], 0)),tetris.core.game.event_schema(new cljs.core.Keyword(null,"rotated","rotated",1509433122)),tetris.core.game.event_schema(new cljs.core.Keyword(null,"hard-dropped","hard-dropped",2061168106)),tetris.core.game.event_schema(new cljs.core.Keyword(null,"landed","landed",-1056197628)),tetris.core.game.event_schema.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"shift-blocked","shift-blocked",1139549631),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.Keyword(null,"int","int",-1741416922)], null)], 0)),tetris.core.game.event_schema.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"locked","locked",-1658763820),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last","last",1105735132),tetris.core.piece.Piece], null)], 0)),tetris.core.game.event_schema.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"held","held",-1064528277),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"swap","swap",228675637),new cljs.core.Keyword(null,"put","put",1299772570)], null)], null)], 0)),tetris.core.game.event_schema.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"line-clearing","line-clearing",-1671825341),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row-indices","row-indices",1417326295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"int","int",-1741416922)], null)], null)], 0)),tetris.core.game.event_schema.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"line-cleared","line-cleared",-75071835),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells","cells",-985166822),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),tetris.core.board.Cell], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row-indices","row-indices",1417326295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"int","int",-1741416922)], null)], null)], 0)),tetris.core.game.event_schema(new cljs.core.Keyword(null,"game-over","game-over",-607322695))], null);
tetris.core.game.EventType = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),tetris.core.game.Event)));
tetris.core.game.State = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotation-system","rotation-system",-186821002),tetris.core.rs.RotationSystem], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"piece-generator","piece-generator",1898771696),tetris.core.ruleset.PieceGenerator], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scoring","scoring",-454135688),tetris.core.scoring.ScoringSystem], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"speed-level-system","speed-level-system",-1993846620),tetris.core.speedlv.SpeedLevelSystem], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ghost-enabled?","ghost-enabled?",-261151779),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"preview-count","preview-count",-329263374),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),tetris.core.board.Board], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),tetris.core.piece.Piece], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hold","hold",-1621118005),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),tetris.core.piece.Piece], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-queue","next-queue",-689213061),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seqable","seqable",-1305253818),tetris.core.piece.Piece], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-piece-id","next-piece-id",-872920712),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lines-cleared","lines-cleared",1628289668),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"combo-count","combo-count",-1885856692),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"speed-level","speed-level",-256559849),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event-id","event-id",2130210178),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),tetris.core.game.Event], null)], null)], null);
tetris.core.game.CommandHandler = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),tetris.core.game.State,tetris.core.game.Command], null),tetris.core.game.State], null);
tetris.core.game.find_event = (function tetris$core$game$find_event(event_type,events){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__37562_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__37562_SHARP_),event_type);
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
var G__37599 = (row__$1 + (1));
row__$1 = G__37599;
continue;
}
break;
}
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [down(row),col], null);
});
tetris.core.game.ghost = (function tetris$core$game$ghost(state){
if(cljs.core.truth_((function (){var and__5160__auto__ = new cljs.core.Keyword(null,"ghost-enabled?","ghost-enabled?",-261151779).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(and__5160__auto__)){
return new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(state);
} else {
return and__5160__auto__;
}
})())){
var map__37564 = state;
var map__37564__$1 = cljs.core.__destructure_map(map__37564);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37564__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37564__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37564__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37564__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
var vec__37565 = tetris.core.game.ghost_position(board,current,row,col);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37565,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37565,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row","row",-570139521),r,new cljs.core.Keyword(null,"col","col",-1959363084),c], null);
} else {
return null;
}
});
tetris.core.game.blocked_QMARK_ = (function tetris$core$game$blocked_QMARK_(state,offset_row,offset_col){
if(cljs.core.truth_(new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(state))){
} else {
throw (new Error("Assert failed: (:current state)"));
}

var map__37568 = state;
var map__37568__$1 = cljs.core.__destructure_map(map__37568);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37568__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37568__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37568__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37568__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
var row__$1 = (row + offset_row);
var col__$1 = (col + offset_col);
var and__5160__auto__ = current;
if(cljs.core.truth_(and__5160__auto__)){
return tetris.core.board.collide_QMARK_(board,current,row__$1,col__$1);
} else {
return and__5160__auto__;
}
});
tetris.core.game.can_move_down_QMARK_ = (function tetris$core$game$can_move_down_QMARK_(state){
return cljs.core.not(tetris.core.game.blocked_QMARK_(state,(1),(0)));
});
tetris.core.game.try_move_down = (function tetris$core$game$try_move_down(state,event){
if(cljs.core.truth_(tetris.core.game.blocked_QMARK_(state,(1),(0)))){
return state;
} else {
return tetris.core.game.emit_event(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"row","row",-570139521),cljs.core.inc),event);
}
});
tetris.core.game.try_shift = (function tetris$core$game$try_shift(state,dir){
if(cljs.core.truth_(tetris.core.game.blocked_QMARK_(state,(0),dir))){
return tetris.core.game.emit_event(state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"shift-blocked","shift-blocked",1139549631),new cljs.core.Keyword(null,"dir","dir",1734754661),dir], null));
} else {
return tetris.core.game.emit_event(cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"col","col",-1959363084),cljs.core._PLUS_,dir),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"shifted","shifted",13239433),new cljs.core.Keyword(null,"dir","dir",1734754661),dir], null));
}
});
tetris.core.game.try_rotate = (function tetris$core$game$try_rotate(state,turn){
if(cljs.core.truth_(new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(state))){
} else {
throw (new Error("Assert failed: (:current state)"));
}

var temp__5823__auto__ = tetris.core.rs.rotate.cljs$core$IFn$_invoke$arity$2(state,turn);
if(cljs.core.truth_(temp__5823__auto__)){
var state_SINGLEQUOTE_ = temp__5823__auto__;
return tetris.core.game.emit_event(state_SINGLEQUOTE_,new cljs.core.Keyword(null,"rotated","rotated",1509433122));
} else {
return state;
}
});
tetris.core.game.lock_piece = (function tetris$core$game$lock_piece(state){
if(cljs.core.truth_(new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(state))){
} else {
throw (new Error("Assert failed: (:current state)"));
}

var map__37569 = state;
var map__37569__$1 = cljs.core.__destructure_map(map__37569);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37569__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37569__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37569__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37569__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
return tetris.core.game.emit_event(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"board","board",-1907017633),tetris.core.board.lock_piece(board,current,row,col)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"locked","locked",-1658763820),new cljs.core.Keyword(null,"row","row",-570139521),row,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"last","last",1105735132),current], null));
});
tetris.core.game.clear_full_rows = (function tetris$core$game$clear_full_rows(state){
var board = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(state);
var full_row_indices = tetris.core.board.find_full_row_indices(board);
var n = cljs.core.count(full_row_indices);
var clear_QMARK_ = (n > (0));
var vec__37570 = tetris.core.scoring.action_score.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"scoring","scoring",-454135688).cljs$core$IFn$_invoke$arity$1(state),state,((clear_QMARK_)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.Keyword(null,"lines","lines",-700165781),n], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"no-clear","no-clear",16755412)], null)));
var score_delta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37570,(0),null);
var scoring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37570,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(((clear_QMARK_)?tetris.core.game.emit_event(cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"lines-cleared","lines-cleared",1628289668),cljs.core._PLUS_,n),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line-clearing","line-clearing",-1671825341),new cljs.core.Keyword(null,"row-indices","row-indices",1417326295),full_row_indices], null)):state),new cljs.core.Keyword(null,"score","score",-1963588780),cljs.core._PLUS_,score_delta),new cljs.core.Keyword(null,"scoring","scoring",-454135688),scoring),new cljs.core.Keyword(null,"combo-count","combo-count",-1885856692),((clear_QMARK_)?cljs.core.inc:cljs.core.constantly((0))));
});
tetris.core.game.clear_lines = (function tetris$core$game$clear_lines(state){
var board = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(state);
var full_row_indices = tetris.core.board.find_full_row_indices(board);
var vec__37573 = tetris.core.speedlv.update_level.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"speed-level-system","speed-level-system",-1993846620).cljs$core$IFn$_invoke$arity$1(state),state);
var speed_level = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37573,(0),null);
var speed_level_system = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37573,(1),null);
return tetris.core.game.emit_event(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"board","board",-1907017633),tetris.core.board.clear_rows(board,full_row_indices)),new cljs.core.Keyword(null,"speed-level","speed-level",-256559849),speed_level),new cljs.core.Keyword(null,"speed-level-system","speed-level-system",-1993846620),speed_level_system),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line-cleared","line-cleared",-75071835),new cljs.core.Keyword(null,"line-count","line-count",871713181),cljs.core.count(full_row_indices),new cljs.core.Keyword(null,"cells","cells",-985166822),tetris.core.board.find_cells_to_clear(board,full_row_indices),new cljs.core.Keyword(null,"row-indices","row-indices",1417326295),full_row_indices], null));
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
var vec__37576 = tetris.core.ruleset.next_piece.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"piece-generator","piece-generator",1898771696).cljs$core$IFn$_invoke$arity$1(state));
var piece_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37576,(0),null);
var piece_generator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37576,(1),null);
var next_piece = tetris.core.piece.__GT_piece(next_piece_id,piece_type,(0),new cljs.core.Keyword(null,"rotation-system","rotation-system",-186821002).cljs$core$IFn$_invoke$arity$1(state));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"current","current",-1088038603),piece,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"piece-generator","piece-generator",1898771696),piece_generator,new cljs.core.Keyword(null,"held?","held?",822967254),false,new cljs.core.Keyword(null,"next-queue","next-queue",-689213061),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.rest(q)),next_piece),new cljs.core.Keyword(null,"next-piece-id","next-piece-id",-872920712),(next_piece_id + cljs.core.count(tetris.core.rs.cell_indices.cljs$core$IFn$_invoke$arity$1(piece)))], 0));
})()),new cljs.core.Keyword(null,"spawned","spawned",1126579468));
});
tetris.core.game.try_lock = (function tetris$core$game$try_lock(state){
if(cljs.core.truth_(new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(state))){
} else {
throw (new Error("Assert failed: (:current state)"));
}

if(tetris.core.game.can_move_down_QMARK_(state)){
return state;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tetris.core.game.check_game_over(tetris.core.game.clear_full_rows(tetris.core.game.lock_piece(state))),new cljs.core.Keyword(null,"current","current",-1088038603),null);
}
});
tetris.core.game.hard_drop = (function tetris$core$game$hard_drop(state){
if(cljs.core.truth_(new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(state))){
} else {
throw (new Error("Assert failed: (:current state)"));
}

var map__37579 = state;
var map__37579__$1 = cljs.core.__destructure_map(map__37579);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37579__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37579__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37579__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37579__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
var vec__37580 = tetris.core.game.ghost_position(board,current,row,col);
var ghost_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37580,(0),null);
return tetris.core.game.try_lock(tetris.core.game.emit_event(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"row","row",-570139521),ghost_row),new cljs.core.Keyword(null,"hard-dropped","hard-dropped",2061168106)));
});
tetris.core.game.hold = (function tetris$core$game$hold(state){
if(cljs.core.truth_(new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(state))){
} else {
throw (new Error("Assert failed: (:current state)"));
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"held?","held?",822967254).cljs$core$IFn$_invoke$arity$1(state))){
return state;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"hold","hold",-1621118005).cljs$core$IFn$_invoke$arity$1(state))){
return tetris.core.game.emit_event(tetris.core.game.top_position(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"hold","hold",-1621118005).cljs$core$IFn$_invoke$arity$1(state),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"hold","hold",-1621118005),tetris.core.piece.reset_rotation(new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"held?","held?",822967254),true], 0))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"held","held",-1064528277),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"swap","swap",228675637)], null));
} else {
return tetris.core.game.emit_event(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tetris.core.game.spawn_piece(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"current","current",-1088038603),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"hold","hold",-1621118005),tetris.core.piece.reset_rotation(new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(state))], 0))),new cljs.core.Keyword(null,"held?","held?",822967254),true),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"held","held",-1064528277),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"put","put",1299772570)], null));
}
}
});
tetris.core.game.initial_next_queue = (function tetris$core$game$initial_next_queue(state){
var map__37583 = state;
var map__37583__$1 = cljs.core.__destructure_map(map__37583);
var rotation_system = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37583__$1,new cljs.core.Keyword(null,"rotation-system","rotation-system",-186821002));
var preview_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37583__$1,new cljs.core.Keyword(null,"preview-count","preview-count",-329263374));
var piece_generator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37583__$1,new cljs.core.Keyword(null,"piece-generator","piece-generator",1898771696));
var next_piece_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37583__$1,new cljs.core.Keyword(null,"next-piece-id","next-piece-id",-872920712));
var vec__37584 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__37587,_){
var vec__37588 = p__37587;
var pieces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37588,(0),null);
var gen = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37588,(1),null);
var next_piece_id__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37588,(2),null);
var vec__37591 = tetris.core.ruleset.next_piece.cljs$core$IFn$_invoke$arity$1(gen);
var piece_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37591,(0),null);
var gen__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37591,(1),null);
var piece = tetris.core.piece.__GT_piece(next_piece_id__$1,piece_type,(0),rotation_system);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pieces,piece),gen__$1,(next_piece_id__$1 + cljs.core.count(tetris.core.rs.cell_indices.cljs$core$IFn$_invoke$arity$1(piece)))], null);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,piece_generator,next_piece_id], null),cljs.core.range.cljs$core$IFn$_invoke$arity$1(preview_count));
var pieces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37584,(0),null);
var piece_generator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37584,(1),null);
var next_piece_id__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37584,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"piece-generator","piece-generator",1898771696),piece_generator__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"next-queue","next-queue",-689213061),pieces,new cljs.core.Keyword(null,"next-piece-id","next-piece-id",-872920712),next_piece_id__$1], 0));
});
tetris.core.game.initial_state = (function tetris$core$game$initial_state(overrides){
var defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"event-id","event-id",2130210178),new cljs.core.Keyword(null,"lines-cleared","lines-cleared",1628289668),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"hold","hold",-1621118005),new cljs.core.Keyword(null,"combo-count","combo-count",-1885856692),new cljs.core.Keyword(null,"preview-count","preview-count",-329263374),new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"held?","held?",822967254),new cljs.core.Keyword(null,"speed-level","speed-level",-256559849),new cljs.core.Keyword(null,"next-piece-id","next-piece-id",-872920712),new cljs.core.Keyword(null,"next-queue","next-queue",-689213061),new cljs.core.Keyword(null,"ghost-enabled?","ghost-enabled?",-261151779),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"row","row",-570139521)],[(0),(0),cljs.core.PersistentVector.EMPTY,null,(0),(4),(0),(0),null,false,(0),(1),cljs.core.PersistentVector.EMPTY,true,tetris.core.board.empty_board,(0)]);
return tetris.core.game.initial_next_queue(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([defaults,overrides], 0)));
});
tetris.core.game.started_QMARK_ = (function tetris$core$game$started_QMARK_(state){
return (new cljs.core.Keyword(null,"event-id","event-id",2130210178).cljs$core$IFn$_invoke$arity$1(state) > (0));
});
tetris.core.game.handle_command = (function tetris$core$game$handle_command(state,command){
cljs.core.tap_GT_((""+"game - command "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(command)));

var G__37594 = command;
var G__37594__$1 = (((G__37594 instanceof cljs.core.Keyword))?G__37594.fqn:null);
switch (G__37594__$1) {
case "fall":
return tetris.core.game.try_move_down(state,new cljs.core.Keyword(null,"fallen","fallen",-195517745));

break;
case "move-down":
return tetris.core.game.try_move_down(state,new cljs.core.Keyword(null,"moved-down","moved-down",-1522381411));

break;
case "move-left":
return tetris.core.game.try_shift(state,(-1));

break;
case "move-right":
return tetris.core.game.try_shift(state,(1));

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
return tetris.core.game.try_lock(state);

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
});

//# sourceMappingURL=tetris.core.game.js.map
