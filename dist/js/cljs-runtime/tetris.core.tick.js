goog.provide('tetris.core.tick');
tetris.core.tick.GameOptions = new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ruleset","ruleset",-2145273412),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotation-system","rotation-system",-186821002),tetris.core.rs.RotationSystem], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"piece-generator","piece-generator",1898771696),tetris.core.ruleset.PieceGenerator], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scoring","scoring",-454135688),tetris.core.scoring.ScoringSystem], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"speed-level-system","speed-level-system",-1993846620),tetris.core.speedlv.SpeedLevelSystem], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ghost-enabled?","ghost-enabled?",-261151779),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"preview-count","preview-count",-329263374),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"speed-level","speed-level",-256559849),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hold-allowed?","hold-allowed?",-1535961038),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hard-drop-allowed?","hard-drop-allowed?",551028026),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotate-180-allowed?","rotate-180-allowed?",129813488),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"das-cancel-on-direction-change?","das-cancel-on-direction-change?",1181687623),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"das-cancel-on-lock?","das-cancel-on-lock?",-298592260),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lock-reset-max-times","lock-reset-max-times",708535139),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"das","das",-1801456200),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"arr","arr",474961448),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dcd","dcd",594655109),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sdf","sdf",-844168232),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)], null)], null)], null);
tetris.core.tick.State = new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),tetris.core.tick.GameOptions], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shift-blocked?","shift-blocked?",-2058728569),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"landed?","landed?",-686035854),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tetris.core.tick","fall-timer","tetris.core.tick/fall-timer",612804990),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tetris.core.tick","lock-timer","tetris.core.tick/lock-timer",-1741962176),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tetris.core.tick","das-timer","tetris.core.tick/das-timer",1207164327),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tetris.core.tick","arr-timer","tetris.core.tick/arr-timer",-1395782638),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tetris.core.tick","dcd-timer","tetris.core.tick/dcd-timer",1438315080),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tetris.core.tick","sdf-timer","tetris.core.tick/sdf-timer",1792248331),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tetris.core.tick","line-clear-timer","tetris.core.tick/line-clear-timer",-219612930),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tetris.core.tick","lock-reset-count","tetris.core.tick/lock-reset-count",-1528190054),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tetris.core.tick","soft-dropping?","tetris.core.tick/soft-dropping?",-2037289937),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tetris.core.tick","phase","tetris.core.tick/phase",1834337411),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"controlling","controlling",57272773),new cljs.core.Keyword(null,"line-clearing","line-clearing",-1671825341),new cljs.core.Keyword(null,"spawning","spawning",-243970190),new cljs.core.Keyword(null,"game-over","game-over",-607322695)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tetris.core.tick","das-button","tetris.core.tick/das-button",-973960486),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),tetris.core.input.ActionButton], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tetris.core.tick","commands","tetris.core.tick/commands",1352783609),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null)], null)], null);
tetris.core.tick.handle = (function tetris$core$tick$handle(state,command){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(tetris.core.game.handle_command(state,command),new cljs.core.Keyword("tetris.core.tick","commands","tetris.core.tick/commands",1352783609),cljs.core.conj,command);
});
tetris.core.tick.reset_das = (function tetris$core$tick$reset_das(state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword("tetris.core.tick","das-button","tetris.core.tick/das-button",-973960486),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("tetris.core.tick","das-timer","tetris.core.tick/das-timer",1207164327),(0),new cljs.core.Keyword("tetris.core.tick","arr-timer","tetris.core.tick/arr-timer",-1395782638),(0)], 0));
});
tetris.core.tick.lock = (function tetris$core$tick$lock(state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(tetris.core.tick.handle(state,new cljs.core.Keyword(null,"lock","lock",-488188066)),new cljs.core.Keyword("tetris.core.tick","lock-reset-count","tetris.core.tick/lock-reset-count",-1528190054),(0),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("tetris.core.tick","lock-timer","tetris.core.tick/lock-timer",-1741962176),(0)], 0));
});
tetris.core.tick.reset_lock = (function tetris$core$tick$reset_lock(state,max_times){
var cnt = (new cljs.core.Keyword("tetris.core.tick","lock-reset-count","tetris.core.tick/lock-reset-count",-1528190054).cljs$core$IFn$_invoke$arity$1(state) + (1));
if((cnt >= max_times)){
return tetris.core.tick.lock(state);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword("tetris.core.tick","lock-reset-count","tetris.core.tick/lock-reset-count",-1528190054),cnt,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("tetris.core.tick","lock-timer","tetris.core.tick/lock-timer",-1741962176),(0)], 0));
}
});
tetris.core.tick.on_shift_pressed = (function tetris$core$tick$on_shift_pressed(state,command){
if((new cljs.core.Keyword("tetris.core.tick","lock-timer","tetris.core.tick/lock-timer",-1741962176).cljs$core$IFn$_invoke$arity$1(state) < tetris.core.ruleset.lock_delay.cljs$core$IFn$_invoke$arity$1(state))){
var map__40398 = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(state);
var map__40398__$1 = cljs.core.__destructure_map(map__40398);
var das_cancel_on_direction_change_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40398__$1,new cljs.core.Keyword(null,"das-cancel-on-direction-change?","das-cancel-on-direction-change?",1181687623));
var das = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40398__$1,new cljs.core.Keyword(null,"das","das",-1801456200));
var arr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40398__$1,new cljs.core.Keyword(null,"arr","arr",474961448));
var das_timer = (new cljs.core.Keyword("tetris.core.tick","das-timer","tetris.core.tick/das-timer",1207164327).cljs$core$IFn$_invoke$arity$1(state) + (1));
if((new cljs.core.Keyword("tetris.core.tick","das-button","tetris.core.tick/das-button",-973960486).cljs$core$IFn$_invoke$arity$1(state) == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(tetris.core.tick.handle(state,command),new cljs.core.Keyword("tetris.core.tick","das-button","tetris.core.tick/das-button",-973960486),command,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("tetris.core.tick","das-timer","tetris.core.tick/das-timer",1207164327),(0)], 0));
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(command,new cljs.core.Keyword("tetris.core.tick","das-button","tetris.core.tick/das-button",-973960486).cljs$core$IFn$_invoke$arity$1(state))){
return tetris.core.tick.handle(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(das_cancel_on_direction_change_QMARK_)?tetris.core.tick.reset_das(state):state),new cljs.core.Keyword("tetris.core.tick","arr-timer","tetris.core.tick/arr-timer",-1395782638),(0),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("tetris.core.tick","das-button","tetris.core.tick/das-button",-973960486),command], 0)),command);
} else {
if((das_timer < das)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword("tetris.core.tick","das-timer","tetris.core.tick/das-timer",1207164327),das_timer);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(das_timer,das)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(tetris.core.tick.handle(state,command),new cljs.core.Keyword("tetris.core.tick","das-timer","tetris.core.tick/das-timer",1207164327),das_timer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("tetris.core.tick","arr-timer","tetris.core.tick/arr-timer",-1395782638),(0)], 0));
} else {
var t = (new cljs.core.Keyword("tetris.core.tick","arr-timer","tetris.core.tick/arr-timer",-1395782638).cljs$core$IFn$_invoke$arity$1(state) + (1));
if((t >= arr)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tetris.core.tick.handle(state,command),new cljs.core.Keyword("tetris.core.tick","arr-timer","tetris.core.tick/arr-timer",-1395782638),(0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword("tetris.core.tick","arr-timer","tetris.core.tick/arr-timer",-1395782638),t);
}

}
}
}
}
} else {
return state;
}
});
tetris.core.tick.on_soft_drop_pressed = (function tetris$core$tick$on_soft_drop_pressed(state){
if(cljs.core.not(new cljs.core.Keyword("tetris.core.tick","soft-dropping?","tetris.core.tick/soft-dropping?",-2037289937).cljs$core$IFn$_invoke$arity$1(state))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tetris.core.tick.handle(state,new cljs.core.Keyword(null,"move-down","move-down",-1149356017)),new cljs.core.Keyword("tetris.core.tick","soft-dropping?","tetris.core.tick/soft-dropping?",-2037289937),true);
} else {
var t = (new cljs.core.Keyword("tetris.core.tick","sdf-timer","tetris.core.tick/sdf-timer",1792248331).cljs$core$IFn$_invoke$arity$1(state) + (1));
if((t >= tetris.core.ruleset.soft_drop_interval.cljs$core$IFn$_invoke$arity$1(state))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(tetris.core.tick.handle(state,new cljs.core.Keyword(null,"move-down","move-down",-1149356017)),new cljs.core.Keyword("tetris.core.tick","sdf-timer","tetris.core.tick/sdf-timer",1792248331),(0),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("tetris.core.tick","soft-dropping?","tetris.core.tick/soft-dropping?",-2037289937),true], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword("tetris.core.tick","sdf-timer","tetris.core.tick/sdf-timer",1792248331),t);
}
}
});
tetris.core.tick.fall = (function tetris$core$tick$fall(state){
if(cljs.core.not(new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(state))){
return state;
} else {
var t = (new cljs.core.Keyword("tetris.core.tick","fall-timer","tetris.core.tick/fall-timer",612804990).cljs$core$IFn$_invoke$arity$1(state) + (1));
if((t >= tetris.core.ruleset.fall_interval.cljs$core$IFn$_invoke$arity$1(state))){
if(tetris.core.game.can_move_down_QMARK_(state)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tetris.core.tick.handle(state,new cljs.core.Keyword(null,"fall","fall",-563374271)),new cljs.core.Keyword("tetris.core.tick","fall-timer","tetris.core.tick/fall-timer",612804990),(0));
} else {
return state;
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword("tetris.core.tick","fall-timer","tetris.core.tick/fall-timer",612804990),t);
}
}
});
tetris.core.tick.spawn = (function tetris$core$tick$spawn(state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(tetris.core.tick.handle(state,new cljs.core.Keyword(null,"spawn","spawn",-1213583293)),new cljs.core.Keyword(null,"shift-blocked?","shift-blocked?",-2058728569),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"landed?","landed?",-686035854),false,new cljs.core.Keyword("tetris.core.tick","fall-timer","tetris.core.tick/fall-timer",612804990),(0)], 0));
});
tetris.core.tick.update_lock = (function tetris$core$tick$update_lock(state){
if(cljs.core.not(new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(state))){
return state;
} else {
var now_landed_QMARK_ = (!(tetris.core.game.can_move_down_QMARK_(state)));
var changed_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"landed?","landed?",-686035854).cljs$core$IFn$_invoke$arity$1(state),now_landed_QMARK_);
var state__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"landed?","landed?",-686035854),now_landed_QMARK_);
if(now_landed_QMARK_){
if(changed_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(tetris.core.game.emit_event(state__$1,new cljs.core.Keyword(null,"landed","landed",-1056197628)),new cljs.core.Keyword("tetris.core.tick","lock-timer","tetris.core.tick/lock-timer",-1741962176),(0),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("tetris.core.tick","lock-reset-count","tetris.core.tick/lock-reset-count",-1528190054),(0)], 0));
} else {
var state__$2 = (function (){var t = (new cljs.core.Keyword("tetris.core.tick","lock-timer","tetris.core.tick/lock-timer",-1741962176).cljs$core$IFn$_invoke$arity$1(state__$1) + (1));
if((t >= tetris.core.ruleset.lock_delay.cljs$core$IFn$_invoke$arity$1(state__$1))){
return tetris.core.tick.lock(state__$1);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword("tetris.core.tick","lock-timer","tetris.core.tick/lock-timer",-1741962176),t);
}
})();
var max_times = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"lock-reset-max-times","lock-reset-max-times",708535139)], null));
var state__$3 = (cljs.core.truth_((function (){var and__5160__auto__ = max_times;
if(cljs.core.truth_(and__5160__auto__)){
var or__5162__auto__ = tetris.core.game.find_event(new cljs.core.Keyword(null,"shifted","shifted",13239433),new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(state__$2));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return tetris.core.game.find_event(new cljs.core.Keyword(null,"rotated","rotated",1509433122),new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(state__$2));
}
} else {
return and__5160__auto__;
}
})())?tetris.core.tick.reset_lock(state__$2,max_times):state__$2);
var locked_QMARK_ = tetris.core.game.find_event(new cljs.core.Keyword(null,"locked","locked",-1658763820),new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(state__$3));
var state__$4 = (cljs.core.truth_((function (){var and__5160__auto__ = locked_QMARK_;
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"das-cancel-on-lock?","das-cancel-on-lock?",-298592260)], null));
} else {
return and__5160__auto__;
}
})())?tetris.core.tick.reset_das(state__$3):state__$3);
if(cljs.core.truth_((function (){var and__5160__auto__ = locked_QMARK_;
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core.not(tetris.core.game.find_event(new cljs.core.Keyword(null,"line-clearing","line-clearing",-1671825341),new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(state__$4)));
} else {
return and__5160__auto__;
}
})())){
return tetris.core.tick.spawn(state__$4);
} else {
return state__$4;
}
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword("tetris.core.tick","lock-timer","tetris.core.tick/lock-timer",-1741962176),(0));
}
}
});
tetris.core.tick.update_line_clear = (function tetris$core$tick$update_line_clear(state){
var t = (new cljs.core.Keyword("tetris.core.tick","line-clear-timer","tetris.core.tick/line-clear-timer",-219612930).cljs$core$IFn$_invoke$arity$1(state) + (1));
if((t >= tetris.core.ruleset.line_clear_delay.cljs$core$IFn$_invoke$arity$1(state))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(tetris.core.tick.spawn(tetris.core.tick.handle(state,new cljs.core.Keyword(null,"clear-lines","clear-lines",568695980))),new cljs.core.Keyword("tetris.core.tick","phase","tetris.core.tick/phase",1834337411),new cljs.core.Keyword(null,"controlling","controlling",57272773),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("tetris.core.tick","line-clear-timer","tetris.core.tick/line-clear-timer",-219612930),(0)], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword("tetris.core.tick","line-clear-timer","tetris.core.tick/line-clear-timer",-219612930),t);
}
});
tetris.core.tick.initial_game = (function tetris$core$tick$initial_game(options){
var game_option_keys = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotation-system","rotation-system",-186821002),new cljs.core.Keyword(null,"piece-generator","piece-generator",1898771696),new cljs.core.Keyword(null,"scoring","scoring",-454135688),new cljs.core.Keyword(null,"speed-level-system","speed-level-system",-1993846620),new cljs.core.Keyword(null,"ruleset","ruleset",-2145273412),new cljs.core.Keyword(null,"ghost-enabled?","ghost-enabled?",-261151779),new cljs.core.Keyword(null,"preview-count","preview-count",-329263374),new cljs.core.Keyword(null,"speed-level","speed-level",-256559849)], null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("tetris.core.tick","lock-timer","tetris.core.tick/lock-timer",-1741962176),new cljs.core.Keyword("tetris.core.tick","phase","tetris.core.tick/phase",1834337411),new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword("tetris.core.tick","das-timer","tetris.core.tick/das-timer",1207164327),new cljs.core.Keyword(null,"shift-blocked?","shift-blocked?",-2058728569),new cljs.core.Keyword("tetris.core.tick","dcd-timer","tetris.core.tick/dcd-timer",1438315080),new cljs.core.Keyword("tetris.core.tick","sdf-timer","tetris.core.tick/sdf-timer",1792248331),new cljs.core.Keyword("tetris.core.tick","soft-dropping?","tetris.core.tick/soft-dropping?",-2037289937),new cljs.core.Keyword("tetris.core.tick","arr-timer","tetris.core.tick/arr-timer",-1395782638),new cljs.core.Keyword(null,"landed?","landed?",-686035854),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword("tetris.core.tick","commands","tetris.core.tick/commands",1352783609),new cljs.core.Keyword("tetris.core.tick","das-button","tetris.core.tick/das-button",-973960486),new cljs.core.Keyword("tetris.core.tick","lock-reset-count","tetris.core.tick/lock-reset-count",-1528190054),new cljs.core.Keyword("tetris.core.tick","line-clear-timer","tetris.core.tick/line-clear-timer",-219612930),new cljs.core.Keyword("tetris.core.tick","fall-timer","tetris.core.tick/fall-timer",612804990)],[(0),new cljs.core.Keyword(null,"controlling","controlling",57272773),(0),(0),false,(0),(0),false,(0),false,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(options,game_option_keys),cljs.core.PersistentVector.EMPTY,null,(0),(0),(0)]),tetris.core.game.initial_state(cljs.core.select_keys(options,game_option_keys))], 0));
});
tetris.core.tick.step = (function tetris$core$tick$step(state,input){
if((!(tetris.core.game.started_QMARK_(state)))){
return tetris.core.tick.handle(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"frame","frame",-1711082588),cljs.core.inc),new cljs.core.Keyword(null,"spawn","spawn",-1213583293));
} else {
var map__40399 = input;
var map__40399__$1 = cljs.core.__destructure_map(map__40399);
var pressed_buttons = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40399__$1,new cljs.core.Keyword(null,"pressed-buttons","pressed-buttons",1426560090));
var just_pressed_buttons = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40399__$1,new cljs.core.Keyword(null,"just-pressed-buttons","just-pressed-buttons",1411625590));
var map__40400 = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(state);
var map__40400__$1 = cljs.core.__destructure_map(map__40400);
var hard_drop_allowed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40400__$1,new cljs.core.Keyword(null,"hard-drop-allowed?","hard-drop-allowed?",551028026));
var hold_allowed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40400__$1,new cljs.core.Keyword(null,"hold-allowed?","hold-allowed?",-1535961038));
var rotate_180_allowed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40400__$1,new cljs.core.Keyword(null,"rotate-180-allowed?","rotate-180-allowed?",129813488));
var just_pressed_buttons__$1 = cljs.core.set(just_pressed_buttons);
var pressed_move_button = cljs.core.last(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"move-left","move-left",-271562811),null,new cljs.core.Keyword(null,"soft-drop","soft-drop",-123150289),null,new cljs.core.Keyword(null,"move-right","move-right",1661359569),null], null), null),pressed_buttons));
var state__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"frame","frame",-1711082588),cljs.core.inc),new cljs.core.Keyword("tetris.core.tick","commands","tetris.core.tick/commands",1352783609),cljs.core.PersistentVector.EMPTY);
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"debug?","debug?",-1831756173)], null)))){
cljs.core.tap_GT_((""+"tick - "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(state__$1))));
} else {
}

var G__40401 = new cljs.core.Keyword("tetris.core.tick","phase","tetris.core.tick/phase",1834337411).cljs$core$IFn$_invoke$arity$1(state__$1);
var G__40401__$1 = (((G__40401 instanceof cljs.core.Keyword))?G__40401.fqn:null);
switch (G__40401__$1) {
case "controlling":
var state__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pressed_move_button,new cljs.core.Keyword(null,"move-left","move-left",-271562811)))?tetris.core.tick.on_shift_pressed(state__$1,new cljs.core.Keyword(null,"move-left","move-left",-271562811)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pressed_move_button,new cljs.core.Keyword(null,"move-right","move-right",1661359569)))?tetris.core.tick.on_shift_pressed(state__$1,new cljs.core.Keyword(null,"move-right","move-right",1661359569)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pressed_move_button,new cljs.core.Keyword(null,"soft-drop","soft-drop",-123150289)))?tetris.core.tick.on_soft_drop_pressed(state__$1):cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(tetris.core.tick.reset_das(state__$1),new cljs.core.Keyword("tetris.core.tick","sdf-timer","tetris.core.tick/sdf-timer",1792248331),(0),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("tetris.core.tick","soft-dropping?","tetris.core.tick/soft-dropping?",-2037289937),false], 0))
)));
var state__$3 = ((cljs.core.contains_QMARK_(just_pressed_buttons__$1,new cljs.core.Keyword(null,"rotate-cw","rotate-cw",83272937)))?tetris.core.tick.handle(state__$2,new cljs.core.Keyword(null,"rotate-cw","rotate-cw",83272937)):((cljs.core.contains_QMARK_(just_pressed_buttons__$1,new cljs.core.Keyword(null,"rotate-ccw","rotate-ccw",885172263)))?tetris.core.tick.handle(state__$2,new cljs.core.Keyword(null,"rotate-ccw","rotate-ccw",885172263)):(cljs.core.truth_((function (){var and__5160__auto__ = rotate_180_allowed_QMARK_;
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core.contains_QMARK_(just_pressed_buttons__$1,new cljs.core.Keyword(null,"rotate-180","rotate-180",605917905));
} else {
return and__5160__auto__;
}
})())?tetris.core.tick.handle(state__$2,new cljs.core.Keyword(null,"rotate-180","rotate-180",605917905)):(cljs.core.truth_((function (){var and__5160__auto__ = hard_drop_allowed_QMARK_;
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core.contains_QMARK_(just_pressed_buttons__$1,new cljs.core.Keyword(null,"hard-drop","hard-drop",1211458322));
} else {
return and__5160__auto__;
}
})())?(function (){var state__$3 = tetris.core.tick.handle(state__$2,new cljs.core.Keyword(null,"hard-drop","hard-drop",1211458322));
if(cljs.core.not(tetris.core.game.find_event(new cljs.core.Keyword(null,"line-clearing","line-clearing",-1671825341),new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(state__$3)))){
return tetris.core.tick.spawn(state__$3);
} else {
return state__$3;
}
})():(cljs.core.truth_((function (){var and__5160__auto__ = hold_allowed_QMARK_;
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core.contains_QMARK_(just_pressed_buttons__$1,new cljs.core.Keyword(null,"hold","hold",-1621118005));
} else {
return and__5160__auto__;
}
})())?tetris.core.tick.handle(state__$2,new cljs.core.Keyword(null,"hold","hold",-1621118005)):state__$2
)))));
var state__$4 = (cljs.core.truth_((function (){var or__5162__auto__ = tetris.core.game.find_event(new cljs.core.Keyword(null,"shifted","shifted",13239433),new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(state__$3));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var or__5162__auto____$1 = tetris.core.game.find_event(new cljs.core.Keyword(null,"hard-dropped","hard-dropped",2061168106),new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(state__$3));
if(cljs.core.truth_(or__5162__auto____$1)){
return or__5162__auto____$1;
} else {
return tetris.core.game.find_event(new cljs.core.Keyword(null,"held","held",-1064528277),new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(state__$3));
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$3,new cljs.core.Keyword(null,"shift-blocked?","shift-blocked?",-2058728569),false):(cljs.core.truth_(tetris.core.game.find_event(new cljs.core.Keyword(null,"shift-blocked","shift-blocked",1139549631),new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(state__$3)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$3,new cljs.core.Keyword(null,"shift-blocked?","shift-blocked?",-2058728569),true):state__$3
));
var state__$5 = tetris.core.tick.update_lock(tetris.core.tick.fall((cljs.core.truth_((function (){var or__5162__auto__ = tetris.core.game.find_event(new cljs.core.Keyword(null,"moved-down","moved-down",-1522381411),new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(state__$4));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var or__5162__auto____$1 = tetris.core.game.find_event(new cljs.core.Keyword(null,"hard-dropped","hard-dropped",2061168106),new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(state__$4));
if(cljs.core.truth_(or__5162__auto____$1)){
return or__5162__auto____$1;
} else {
var or__5162__auto____$2 = tetris.core.game.find_event(new cljs.core.Keyword(null,"locked","locked",-1658763820),new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(state__$4));
if(cljs.core.truth_(or__5162__auto____$2)){
return or__5162__auto____$2;
} else {
return tetris.core.game.find_event(new cljs.core.Keyword(null,"held","held",-1064528277),new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(state__$4));
}
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$4,new cljs.core.Keyword("tetris.core.tick","fall-timer","tetris.core.tick/fall-timer",612804990),(-1)):state__$4)));
if(cljs.core.truth_(tetris.core.game.find_event(new cljs.core.Keyword(null,"game-over","game-over",-607322695),new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(state__$5)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$5,new cljs.core.Keyword("tetris.core.tick","phase","tetris.core.tick/phase",1834337411),new cljs.core.Keyword(null,"game-over","game-over",-607322695));
} else {
if(cljs.core.truth_(tetris.core.game.find_event(new cljs.core.Keyword(null,"line-clearing","line-clearing",-1671825341),new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(state__$5)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state__$5,new cljs.core.Keyword("tetris.core.tick","phase","tetris.core.tick/phase",1834337411),new cljs.core.Keyword(null,"line-clearing","line-clearing",-1671825341),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("tetris.core.tick","line-clear-timer","tetris.core.tick/line-clear-timer",-219612930),(0)], 0));
} else {
return state__$5;

}
}

break;
case "line-clearing":
return tetris.core.tick.update_line_clear(state__$1);

break;
case "spawning":
return state__$1;

break;
case "game-over":
return state__$1;

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40401__$1))));

}
}
});

//# sourceMappingURL=tetris.core.tick.js.map
