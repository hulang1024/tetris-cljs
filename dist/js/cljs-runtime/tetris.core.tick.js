goog.provide('tetris.core.tick');
tetris.core.tick.State = new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ruleset","ruleset",-2145273412),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hold-allowed?","hold-allowed?",-1535961038),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hard-drop-allowed?","hard-drop-allowed?",551028026),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotate-180-allowed?","rotate-180-allowed?",129813488),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"das-cancel-on-direction-change?","das-cancel-on-direction-change?",1181687623),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"das-cancel-on-lock?","das-cancel-on-lock?",-298592260),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lock-reset-max-times","lock-reset-max-times",708535139),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"das","das",-1801456200),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"arr","arr",474961448),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dcd","dcd",594655109),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sdf","sdf",-844168232),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shift-blocked?","shift-blocked?",-2058728569),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"landed?","landed?",-686035854),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tetris.core.tick","fall-timer","tetris.core.tick/fall-timer",612804990),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tetris.core.tick","lock-timer","tetris.core.tick/lock-timer",-1741962176),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tetris.core.tick","das-timer","tetris.core.tick/das-timer",1207164327),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tetris.core.tick","arr-timer","tetris.core.tick/arr-timer",-1395782638),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tetris.core.tick","dcd-timer","tetris.core.tick/dcd-timer",1438315080),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tetris.core.tick","sdf-timer","tetris.core.tick/sdf-timer",1792248331),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tetris.core.tick","line-clear-timer","tetris.core.tick/line-clear-timer",-219612930),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tetris.core.tick","lock-reset-count","tetris.core.tick/lock-reset-count",-1528190054),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tetris.core.tick","soft-dropping?","tetris.core.tick/soft-dropping?",-2037289937),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tetris.core.tick","line-clearing?","tetris.core.tick/line-clearing?",-14783557),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tetris.core.tick","das-button","tetris.core.tick/das-button",-973960486),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),tetris.core.input.ActionButton], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tetris.core.tick","commands","tetris.core.tick/commands",1352783609),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null)], null)], null);
tetris.core.tick.handle = (function tetris$core$tick$handle(state,command){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(tetris.core.game.handle_command(state,command),new cljs.core.Keyword("tetris.core.tick","commands","tetris.core.tick/commands",1352783609),cljs.core.conj,command);
});
tetris.core.tick.reset_das = (function tetris$core$tick$reset_das(state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword("tetris.core.tick","das-button","tetris.core.tick/das-button",-973960486),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("tetris.core.tick","das-timer","tetris.core.tick/das-timer",1207164327),(0),new cljs.core.Keyword("tetris.core.tick","arr-timer","tetris.core.tick/arr-timer",-1395782638),(0)], 0));
});
tetris.core.tick.lock = (function tetris$core$tick$lock(state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tetris.core.tick.handle(state,new cljs.core.Keyword(null,"lock","lock",-488188066)),new cljs.core.Keyword("tetris.core.tick","lock-timer","tetris.core.tick/lock-timer",-1741962176),(0));
});
tetris.core.tick.reset_lock = (function tetris$core$tick$reset_lock(state){
var cnt = (new cljs.core.Keyword("tetris.core.tick","lock-reset-count","tetris.core.tick/lock-reset-count",-1528190054).cljs$core$IFn$_invoke$arity$1(state) + (1));
if((cnt >= new cljs.core.Keyword(null,"lock-reset-max-times","lock-reset-max-times",708535139).cljs$core$IFn$_invoke$arity$1(state))){
return tetris.core.tick.lock(state);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword("tetris.core.tick","lock-reset-count","tetris.core.tick/lock-reset-count",-1528190054),cnt,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("tetris.core.tick","lock-timer","tetris.core.tick/lock-timer",-1741962176),(0)], 0));
}
});
tetris.core.tick.locking_QMARK_ = (function tetris$core$tick$locking_QMARK_(state){
return new cljs.core.Keyword(null,"landed?","landed?",-686035854).cljs$core$IFn$_invoke$arity$1(state);
});
tetris.core.tick.on_shift_pressed = (function tetris$core$tick$on_shift_pressed(state,command){
if((new cljs.core.Keyword("tetris.core.tick","lock-timer","tetris.core.tick/lock-timer",-1741962176).cljs$core$IFn$_invoke$arity$1(state) < tetris.core.ruleset.lock_delay.cljs$core$IFn$_invoke$arity$1(state))){
var map__26878 = state;
var map__26878__$1 = cljs.core.__destructure_map(map__26878);
var das_cancel_on_direction_change_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26878__$1,new cljs.core.Keyword(null,"das-cancel-on-direction-change?","das-cancel-on-direction-change?",1181687623));
var das = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26878__$1,new cljs.core.Keyword(null,"das","das",-1801456200));
var arr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26878__$1,new cljs.core.Keyword(null,"arr","arr",474961448));
var das_timer = (new cljs.core.Keyword("tetris.core.tick","das-timer","tetris.core.tick/das-timer",1207164327).cljs$core$IFn$_invoke$arity$1(state) + (1));
var state__$1 = (((new cljs.core.Keyword("tetris.core.tick","das-button","tetris.core.tick/das-button",-973960486).cljs$core$IFn$_invoke$arity$1(state) == null))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(tetris.core.tick.handle(state,command),new cljs.core.Keyword("tetris.core.tick","das-button","tetris.core.tick/das-button",-973960486),command,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("tetris.core.tick","das-timer","tetris.core.tick/das-timer",1207164327),(0)], 0)):((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(command,new cljs.core.Keyword("tetris.core.tick","das-button","tetris.core.tick/das-button",-973960486).cljs$core$IFn$_invoke$arity$1(state)))?tetris.core.tick.handle(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(das_cancel_on_direction_change_QMARK_)?tetris.core.tick.reset_das(state):state),new cljs.core.Keyword("tetris.core.tick","arr-timer","tetris.core.tick/arr-timer",-1395782638),(0),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("tetris.core.tick","das-button","tetris.core.tick/das-button",-973960486),command], 0)),command):(((das_timer < das))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword("tetris.core.tick","das-timer","tetris.core.tick/das-timer",1207164327),das_timer):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(das_timer,das))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(tetris.core.tick.handle(state,command),new cljs.core.Keyword("tetris.core.tick","das-timer","tetris.core.tick/das-timer",1207164327),das_timer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("tetris.core.tick","arr-timer","tetris.core.tick/arr-timer",-1395782638),(0)], 0)):(function (){var t = (new cljs.core.Keyword("tetris.core.tick","arr-timer","tetris.core.tick/arr-timer",-1395782638).cljs$core$IFn$_invoke$arity$1(state) + (1));
if((t >= arr)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tetris.core.tick.handle(state,command),new cljs.core.Keyword("tetris.core.tick","arr-timer","tetris.core.tick/arr-timer",-1395782638),(0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword("tetris.core.tick","arr-timer","tetris.core.tick/arr-timer",-1395782638),t);
}
})()
))));
if(cljs.core.truth_((function (){var and__5160__auto__ = tetris.core.tick.locking_QMARK_(state__$1);
if(cljs.core.truth_(and__5160__auto__)){
var or__5162__auto__ = tetris.core.game.find_event(new cljs.core.Keyword(null,"moved-down","moved-down",-1522381411),new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(state__$1));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return tetris.core.game.find_event(new cljs.core.Keyword(null,"shifted","shifted",13239433),new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(state__$1));
}
} else {
return and__5160__auto__;
}
})())){
return tetris.core.tick.reset_lock(state__$1);
} else {
return state__$1;
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
tetris.core.tick.handle_buttons_released = (function tetris$core$tick$handle_buttons_released(state,input){
var pressed_buttons = cljs.core.set(new cljs.core.Keyword(null,"pressed-buttons","pressed-buttons",1426560090).cljs$core$IFn$_invoke$arity$1(input));
if(cljs.core.truth_((function (){var and__5160__auto__ = new cljs.core.Keyword("tetris.core.tick","das-button","tetris.core.tick/das-button",-973960486).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(and__5160__auto__)){
return (!(cljs.core.contains_QMARK_(pressed_buttons,new cljs.core.Keyword("tetris.core.tick","das-button","tetris.core.tick/das-button",-973960486).cljs$core$IFn$_invoke$arity$1(state))));
} else {
return and__5160__auto__;
}
})())){
return tetris.core.tick.reset_das(state);
} else {
if((!(cljs.core.contains_QMARK_(pressed_buttons,new cljs.core.Keyword(null,"soft-drop","soft-drop",-123150289))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword("tetris.core.tick","sdf-timer","tetris.core.tick/sdf-timer",1792248331),(0),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("tetris.core.tick","soft-dropping?","tetris.core.tick/soft-dropping?",-2037289937),false], 0));
} else {
return state;

}
}
});
tetris.core.tick.do_lock_timer = (function tetris$core$tick$do_lock_timer(state){
var t = (new cljs.core.Keyword("tetris.core.tick","lock-timer","tetris.core.tick/lock-timer",-1741962176).cljs$core$IFn$_invoke$arity$1(state) + (1));
if((t >= tetris.core.ruleset.lock_delay.cljs$core$IFn$_invoke$arity$1(state))){
return tetris.core.tick.lock(state);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword("tetris.core.tick","lock-timer","tetris.core.tick/lock-timer",-1741962176),t);
}
});
tetris.core.tick.fall = (function tetris$core$tick$fall(state){
if(cljs.core.not(new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(state))){
return state;
} else {
var events = new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(state);
var state__$1 = (cljs.core.truth_((function (){var or__5162__auto__ = tetris.core.game.find_event(new cljs.core.Keyword(null,"moved-down","moved-down",-1522381411),events);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var or__5162__auto____$1 = tetris.core.game.find_event(new cljs.core.Keyword(null,"hard-dropped","hard-dropped",2061168106),events);
if(cljs.core.truth_(or__5162__auto____$1)){
return or__5162__auto____$1;
} else {
var or__5162__auto____$2 = tetris.core.game.find_event(new cljs.core.Keyword(null,"locked","locked",-1658763820),events);
if(cljs.core.truth_(or__5162__auto____$2)){
return or__5162__auto____$2;
} else {
var or__5162__auto____$3 = tetris.core.game.find_event(new cljs.core.Keyword(null,"held","held",-1064528277),events);
if(cljs.core.truth_(or__5162__auto____$3)){
return or__5162__auto____$3;
} else {
return tetris.core.game.find_event(new cljs.core.Keyword(null,"spawned","spawned",1126579468),events);
}
}
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword("tetris.core.tick","fall-timer","tetris.core.tick/fall-timer",612804990),(-1)):state);
var t = (new cljs.core.Keyword("tetris.core.tick","fall-timer","tetris.core.tick/fall-timer",612804990).cljs$core$IFn$_invoke$arity$1(state__$1) + (1));
if((t >= tetris.core.ruleset.fall_interval.cljs$core$IFn$_invoke$arity$1(state__$1))){
if(tetris.core.game.can_move_down_QMARK_(state__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(tetris.core.tick.handle(state__$1,new cljs.core.Keyword(null,"fall","fall",-563374271)),new cljs.core.Keyword("tetris.core.tick","fall-timer","tetris.core.tick/fall-timer",612804990),(0),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("tetris.core.tick","lock-reset-count","tetris.core.tick/lock-reset-count",-1528190054),(0)], 0));
} else {
return state__$1;
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword("tetris.core.tick","fall-timer","tetris.core.tick/fall-timer",612804990),t);
}
}
});
tetris.core.tick.try_lock = (function tetris$core$tick$try_lock(state){
if(((cljs.core.not(new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(state))) || (tetris.core.game.can_move_down_QMARK_(state)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword("tetris.core.tick","lock-timer","tetris.core.tick/lock-timer",-1741962176),(0));
} else {
return tetris.core.tick.do_lock_timer(((((cljs.core.not(tetris.core.tick.locking_QMARK_(state))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("tetris.core.tick","lock-timer","tetris.core.tick/lock-timer",-1741962176).cljs$core$IFn$_invoke$arity$1(state),(0)))))?tetris.core.game.emit_event(state,new cljs.core.Keyword(null,"landed","landed",-1056197628)):state));
}
});
tetris.core.tick.handle_rotate = (function tetris$core$tick$handle_rotate(state,command){
var state__$1 = tetris.core.tick.handle(state,command);
if(cljs.core.truth_((function (){var and__5160__auto__ = tetris.core.tick.locking_QMARK_(state__$1);
if(cljs.core.truth_(and__5160__auto__)){
return tetris.core.game.find_event(new cljs.core.Keyword(null,"rotated","rotated",1509433122),new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(state__$1));
} else {
return and__5160__auto__;
}
})())){
return tetris.core.tick.reset_lock(state__$1);
} else {
return state__$1;
}
});
tetris.core.tick.handle_hard_drop = (function tetris$core$tick$handle_hard_drop(state){
return tetris.core.tick.handle(state,new cljs.core.Keyword(null,"hard-drop","hard-drop",1211458322));
});
tetris.core.tick.handle_hold = (function tetris$core$tick$handle_hold(state){
return tetris.core.tick.handle(state,new cljs.core.Keyword(null,"hold","hold",-1621118005));
});
tetris.core.tick.handle_events = (function tetris$core$tick$handle_events(state){
var events = new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(state);
var state__$1 = (function (){var G__26960 = state;
var G__26960__$1 = (cljs.core.truth_((function (){var or__5162__auto__ = tetris.core.game.find_event(new cljs.core.Keyword(null,"fallen","fallen",-195517745),events);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return tetris.core.game.find_event(new cljs.core.Keyword(null,"moved-down","moved-down",-1522381411),events);
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26960,new cljs.core.Keyword(null,"shift-blocked?","shift-blocked?",-2058728569),false):G__26960);
var G__26960__$2 = (cljs.core.truth_(tetris.core.game.find_event(new cljs.core.Keyword(null,"shifted","shifted",13239433),events))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26960__$1,new cljs.core.Keyword(null,"shift-blocked?","shift-blocked?",-2058728569),false):G__26960__$1);
var G__26960__$3 = (cljs.core.truth_(tetris.core.game.find_event(new cljs.core.Keyword(null,"shift-blocked","shift-blocked",1139549631),events))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26960__$2,new cljs.core.Keyword(null,"shift-blocked?","shift-blocked?",-2058728569),true):G__26960__$2);
if(cljs.core.truth_(tetris.core.game.find_event(new cljs.core.Keyword(null,"landed","landed",-1056197628),events))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26960__$3,new cljs.core.Keyword(null,"landed?","landed?",-686035854),true);
} else {
return G__26960__$3;
}
})();
if(cljs.core.truth_(tetris.core.game.find_event(new cljs.core.Keyword(null,"game-over","game-over",-607322695),events))){
return state__$1;
} else {
if(cljs.core.truth_(tetris.core.game.find_event(new cljs.core.Keyword(null,"line-clearing","line-clearing",-1671825341),events))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state__$1,new cljs.core.Keyword("tetris.core.tick","line-clearing?","tetris.core.tick/line-clearing?",-14783557),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("tetris.core.tick","line-clear-timer","tetris.core.tick/line-clear-timer",-219612930),(0)], 0));
} else {
if(cljs.core.truth_(new cljs.core.Keyword("tetris.core.tick","line-clearing?","tetris.core.tick/line-clearing?",-14783557).cljs$core$IFn$_invoke$arity$1(state__$1))){
var t = (new cljs.core.Keyword("tetris.core.tick","line-clear-timer","tetris.core.tick/line-clear-timer",-219612930).cljs$core$IFn$_invoke$arity$1(state__$1) + (1));
if((t >= tetris.core.ruleset.line_clear_delay.cljs$core$IFn$_invoke$arity$1(state__$1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(tetris.core.tick.handle(tetris.core.tick.handle(state__$1,new cljs.core.Keyword(null,"clear-lines","clear-lines",568695980)),new cljs.core.Keyword(null,"spawn","spawn",-1213583293)),new cljs.core.Keyword("tetris.core.tick","line-clearing?","tetris.core.tick/line-clearing?",-14783557),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("tetris.core.tick","line-clear-timer","tetris.core.tick/line-clear-timer",-219612930),(0)], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword("tetris.core.tick","line-clear-timer","tetris.core.tick/line-clear-timer",-219612930),t);
}
} else {
if(cljs.core.truth_(tetris.core.game.find_event(new cljs.core.Keyword(null,"locked","locked",-1658763820),events))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tetris.core.tick.handle(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(new cljs.core.Keyword(null,"das-cancel-on-lock?","das-cancel-on-lock?",-298592260).cljs$core$IFn$_invoke$arity$1(state__$1))?tetris.core.tick.reset_das(state__$1):state__$1),new cljs.core.Keyword(null,"shift-blocked?","shift-blocked?",-2058728569),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"landed?","landed?",-686035854),false], 0)),new cljs.core.Keyword(null,"spawn","spawn",-1213583293)),new cljs.core.Keyword("tetris.core.tick","fall-timer","tetris.core.tick/fall-timer",612804990),(0));
} else {
return state__$1;

}
}
}
}
});
tetris.core.tick.initial_state = (function tetris$core$tick$initial_state(overrides){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("tetris.core.tick","lock-timer","tetris.core.tick/lock-timer",-1741962176),new cljs.core.Keyword(null,"lock-reset-max-times","lock-reset-max-times",708535139),new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"dcd","dcd",594655109),new cljs.core.Keyword("tetris.core.tick","das-timer","tetris.core.tick/das-timer",1207164327),new cljs.core.Keyword(null,"das-cancel-on-direction-change?","das-cancel-on-direction-change?",1181687623),new cljs.core.Keyword(null,"shift-blocked?","shift-blocked?",-2058728569),new cljs.core.Keyword(null,"arr","arr",474961448),new cljs.core.Keyword("tetris.core.tick","dcd-timer","tetris.core.tick/dcd-timer",1438315080),new cljs.core.Keyword("tetris.core.tick","sdf-timer","tetris.core.tick/sdf-timer",1792248331),new cljs.core.Keyword("tetris.core.tick","soft-dropping?","tetris.core.tick/soft-dropping?",-2037289937),new cljs.core.Keyword(null,"rotate-180-allowed?","rotate-180-allowed?",129813488),new cljs.core.Keyword("tetris.core.tick","arr-timer","tetris.core.tick/arr-timer",-1395782638),new cljs.core.Keyword(null,"hold-allowed?","hold-allowed?",-1535961038),new cljs.core.Keyword(null,"landed?","landed?",-686035854),new cljs.core.Keyword(null,"das","das",-1801456200),new cljs.core.Keyword(null,"sdf","sdf",-844168232),new cljs.core.Keyword("tetris.core.tick","commands","tetris.core.tick/commands",1352783609),new cljs.core.Keyword(null,"hard-drop-allowed?","hard-drop-allowed?",551028026),new cljs.core.Keyword("tetris.core.tick","das-button","tetris.core.tick/das-button",-973960486),new cljs.core.Keyword("tetris.core.tick","lock-reset-count","tetris.core.tick/lock-reset-count",-1528190054),new cljs.core.Keyword("tetris.core.tick","line-clearing?","tetris.core.tick/line-clearing?",-14783557),new cljs.core.Keyword(null,"das-cancel-on-lock?","das-cancel-on-lock?",-298592260),new cljs.core.Keyword("tetris.core.tick","line-clear-timer","tetris.core.tick/line-clear-timer",-219612930),new cljs.core.Keyword("tetris.core.tick","fall-timer","tetris.core.tick/fall-timer",612804990)],[(0),(15),(0),(0),(0),false,false,(0),(0),(0),false,true,(0),true,false,(0),(1),cljs.core.PersistentVector.EMPTY,true,null,(0),false,false,(0),(0)]),overrides], 0));
});
tetris.core.tick.step = (function tetris$core$tick$step(state,input){
if((!(tetris.core.game.started_QMARK_(state)))){
return tetris.core.tick.handle(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"frame","frame",-1711082588),cljs.core.inc),new cljs.core.Keyword(null,"spawn","spawn",-1213583293));
} else {
var map__27055 = input;
var map__27055__$1 = cljs.core.__destructure_map(map__27055);
var pressed_buttons = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27055__$1,new cljs.core.Keyword(null,"pressed-buttons","pressed-buttons",1426560090));
var just_pressed_buttons = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27055__$1,new cljs.core.Keyword(null,"just-pressed-buttons","just-pressed-buttons",1411625590));
var map__27056 = state;
var map__27056__$1 = cljs.core.__destructure_map(map__27056);
var hard_drop_allowed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27056__$1,new cljs.core.Keyword(null,"hard-drop-allowed?","hard-drop-allowed?",551028026));
var hold_allowed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27056__$1,new cljs.core.Keyword(null,"hold-allowed?","hold-allowed?",-1535961038));
var rotate_180_allowed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27056__$1,new cljs.core.Keyword(null,"rotate-180-allowed?","rotate-180-allowed?",129813488));
var just_pressed_buttons__$1 = cljs.core.set(just_pressed_buttons);
var pressed_button = cljs.core.last(pressed_buttons);
var state__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"frame","frame",-1711082588),cljs.core.inc),new cljs.core.Keyword("tetris.core.tick","commands","tetris.core.tick/commands",1352783609),cljs.core.PersistentVector.EMPTY);
var state__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(state__$1))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pressed_button,new cljs.core.Keyword(null,"move-left","move-left",-271562811)))?tetris.core.tick.on_shift_pressed(state__$1,new cljs.core.Keyword(null,"move-left","move-left",-271562811)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pressed_button,new cljs.core.Keyword(null,"move-right","move-right",1661359569)))?tetris.core.tick.on_shift_pressed(state__$1,new cljs.core.Keyword(null,"move-right","move-right",1661359569)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pressed_button,new cljs.core.Keyword(null,"soft-drop","soft-drop",-123150289)))?tetris.core.tick.on_soft_drop_pressed(state__$1):state__$1
))):state__$1);
cljs.core.tap_GT_((""+"tick - "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(state__$2))));

return tetris.core.tick.handle_events(tetris.core.tick.handle_buttons_released(tetris.core.tick.try_lock(tetris.core.tick.fall((cljs.core.truth_(new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(state__$2))?((cljs.core.contains_QMARK_(just_pressed_buttons__$1,new cljs.core.Keyword(null,"rotate-cw","rotate-cw",83272937)))?tetris.core.tick.handle_rotate(state__$2,new cljs.core.Keyword(null,"rotate-cw","rotate-cw",83272937)):((cljs.core.contains_QMARK_(just_pressed_buttons__$1,new cljs.core.Keyword(null,"rotate-ccw","rotate-ccw",885172263)))?tetris.core.tick.handle_rotate(state__$2,new cljs.core.Keyword(null,"rotate-ccw","rotate-ccw",885172263)):(cljs.core.truth_((function (){var and__5160__auto__ = rotate_180_allowed_QMARK_;
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core.contains_QMARK_(just_pressed_buttons__$1,new cljs.core.Keyword(null,"rotate-180","rotate-180",605917905));
} else {
return and__5160__auto__;
}
})())?tetris.core.tick.handle_rotate(state__$2,new cljs.core.Keyword(null,"rotate-180","rotate-180",605917905)):(cljs.core.truth_((function (){var and__5160__auto__ = hard_drop_allowed_QMARK_;
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core.contains_QMARK_(just_pressed_buttons__$1,new cljs.core.Keyword(null,"hard-drop","hard-drop",1211458322));
} else {
return and__5160__auto__;
}
})())?tetris.core.tick.handle_hard_drop(state__$2):(cljs.core.truth_((function (){var and__5160__auto__ = hold_allowed_QMARK_;
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core.contains_QMARK_(just_pressed_buttons__$1,new cljs.core.Keyword(null,"hold","hold",-1621118005));
} else {
return and__5160__auto__;
}
})())?tetris.core.tick.handle_hold(state__$2):state__$2
))))):state__$2))),input));
}
});

//# sourceMappingURL=tetris.core.tick.js.map
