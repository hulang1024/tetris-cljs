goog.provide('tetris.core.tick');
tetris.core.tick.State = new cljs.core.PersistentVector(null, 29, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ruleset","ruleset",-2145273412),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hold-allowed?","hold-allowed?",-1535961038),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hard-drop-allowed?","hard-drop-allowed?",551028026),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotate-180-allowed?","rotate-180-allowed?",129813488),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"das-cancel-on-direction-change?","das-cancel-on-direction-change?",1181687623),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"das-cancel-on-lock?","das-cancel-on-lock?",-298592260),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lock-reset-max-times","lock-reset-max-times",708535139),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"das","das",-1801456200),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"arr","arr",474961448),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dcd","dcd",594655109),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sdf","sdf",-844168232),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lines-cleared","lines-cleared",1628289668),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-combo-count","clear-combo-count",2026819444),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shift-blocked?","shift-blocked?",-2058728569),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"down-blocked?","down-blocked?",983958012),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tetris.core.tick","fall-timer","tetris.core.tick/fall-timer",612804990),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tetris.core.tick","lock-timer","tetris.core.tick/lock-timer",-1741962176),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tetris.core.tick","das-timer","tetris.core.tick/das-timer",1207164327),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tetris.core.tick","arr-timer","tetris.core.tick/arr-timer",-1395782638),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tetris.core.tick","dcd-timer","tetris.core.tick/dcd-timer",1438315080),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tetris.core.tick","sdf-timer","tetris.core.tick/sdf-timer",1792248331),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tetris.core.tick","line-clear-timer","tetris.core.tick/line-clear-timer",-219612930),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tetris.core.tick","lock-reset-count","tetris.core.tick/lock-reset-count",-1528190054),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tetris.core.tick","soft-dropping?","tetris.core.tick/soft-dropping?",-2037289937),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tetris.core.tick","line-clearing?","tetris.core.tick/line-clearing?",-14783557),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tetris.core.tick","das-button","tetris.core.tick/das-button",-973960486),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),tetris.core.input.Button], null)], null)], null);
tetris.core.tick.reset_das = (function tetris$core$tick$reset_das(state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword("tetris.core.tick","das-button","tetris.core.tick/das-button",-973960486),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("tetris.core.tick","das-timer","tetris.core.tick/das-timer",1207164327),(0),new cljs.core.Keyword("tetris.core.tick","arr-timer","tetris.core.tick/arr-timer",-1395782638),(0)], 0));
});
tetris.core.tick.reset_fall_timer = (function tetris$core$tick$reset_fall_timer(state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword("tetris.core.tick","fall-timer","tetris.core.tick/fall-timer",612804990),(0));
});
tetris.core.tick.lock = (function tetris$core$tick$lock(state,command_handler){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((command_handler.cljs$core$IFn$_invoke$arity$2 ? command_handler.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"lock","lock",-488188066)) : command_handler.call(null,state,new cljs.core.Keyword(null,"lock","lock",-488188066))),new cljs.core.Keyword("tetris.core.tick","lock-timer","tetris.core.tick/lock-timer",-1741962176),(0));
});
tetris.core.tick.reset_lock = (function tetris$core$tick$reset_lock(state,command_handler){
var cnt = (new cljs.core.Keyword("tetris.core.tick","lock-reset-count","tetris.core.tick/lock-reset-count",-1528190054).cljs$core$IFn$_invoke$arity$1(state) + (1));
if((cnt >= new cljs.core.Keyword(null,"lock-reset-max-times","lock-reset-max-times",708535139).cljs$core$IFn$_invoke$arity$1(state))){
return tetris.core.tick.lock(state,command_handler);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword("tetris.core.tick","lock-reset-count","tetris.core.tick/lock-reset-count",-1528190054),cnt,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("tetris.core.tick","lock-timer","tetris.core.tick/lock-timer",-1741962176),(0)], 0));
}
});
tetris.core.tick.locking_QMARK_ = (function tetris$core$tick$locking_QMARK_(state){
return new cljs.core.Keyword(null,"down-blocked?","down-blocked?",983958012).cljs$core$IFn$_invoke$arity$1(state);
});
tetris.core.tick.on_shift_pressed = (function tetris$core$tick$on_shift_pressed(state,command,command_handler){
if((new cljs.core.Keyword("tetris.core.tick","lock-timer","tetris.core.tick/lock-timer",-1741962176).cljs$core$IFn$_invoke$arity$1(state) < tetris.core.ruleset.lock_delay.cljs$core$IFn$_invoke$arity$1(state))){
var map__48788 = state;
var map__48788__$1 = cljs.core.__destructure_map(map__48788);
var das_cancel_on_direction_change_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48788__$1,new cljs.core.Keyword(null,"das-cancel-on-direction-change?","das-cancel-on-direction-change?",1181687623));
var das = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48788__$1,new cljs.core.Keyword(null,"das","das",-1801456200));
var arr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48788__$1,new cljs.core.Keyword(null,"arr","arr",474961448));
var das_timer = (new cljs.core.Keyword("tetris.core.tick","das-timer","tetris.core.tick/das-timer",1207164327).cljs$core$IFn$_invoke$arity$1(state) + (1));
var state__$1 = (((new cljs.core.Keyword("tetris.core.tick","das-button","tetris.core.tick/das-button",-973960486).cljs$core$IFn$_invoke$arity$1(state) == null))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((command_handler.cljs$core$IFn$_invoke$arity$2 ? command_handler.cljs$core$IFn$_invoke$arity$2(state,command) : command_handler.call(null,state,command)),new cljs.core.Keyword("tetris.core.tick","das-button","tetris.core.tick/das-button",-973960486),command,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("tetris.core.tick","das-timer","tetris.core.tick/das-timer",1207164327),(0)], 0)):((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(command,new cljs.core.Keyword("tetris.core.tick","das-button","tetris.core.tick/das-button",-973960486).cljs$core$IFn$_invoke$arity$1(state)))?(function (){var G__48789 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(das_cancel_on_direction_change_QMARK_)?tetris.core.tick.reset_das(state):state),new cljs.core.Keyword("tetris.core.tick","arr-timer","tetris.core.tick/arr-timer",-1395782638),(0),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("tetris.core.tick","das-button","tetris.core.tick/das-button",-973960486),command], 0));
var G__48790 = command;
return (command_handler.cljs$core$IFn$_invoke$arity$2 ? command_handler.cljs$core$IFn$_invoke$arity$2(G__48789,G__48790) : command_handler.call(null,G__48789,G__48790));
})():(((das_timer < das))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword("tetris.core.tick","das-timer","tetris.core.tick/das-timer",1207164327),das_timer):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(das_timer,das))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((command_handler.cljs$core$IFn$_invoke$arity$2 ? command_handler.cljs$core$IFn$_invoke$arity$2(state,command) : command_handler.call(null,state,command)),new cljs.core.Keyword("tetris.core.tick","das-timer","tetris.core.tick/das-timer",1207164327),das_timer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("tetris.core.tick","arr-timer","tetris.core.tick/arr-timer",-1395782638),(0)], 0)):(function (){var t = (new cljs.core.Keyword("tetris.core.tick","arr-timer","tetris.core.tick/arr-timer",-1395782638).cljs$core$IFn$_invoke$arity$1(state) + (1));
if((t >= arr)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((command_handler.cljs$core$IFn$_invoke$arity$2 ? command_handler.cljs$core$IFn$_invoke$arity$2(state,command) : command_handler.call(null,state,command)),new cljs.core.Keyword("tetris.core.tick","arr-timer","tetris.core.tick/arr-timer",-1395782638),(0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword("tetris.core.tick","arr-timer","tetris.core.tick/arr-timer",-1395782638),t);
}
})()
))));
if(cljs.core.truth_((function (){var and__5160__auto__ = tetris.core.tick.locking_QMARK_(state__$1);
if(cljs.core.truth_(and__5160__auto__)){
return tetris.core.game.find_event(new cljs.core.Keyword(null,"moved","moved",486549219),new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(state__$1));
} else {
return and__5160__auto__;
}
})())){
return tetris.core.tick.reset_lock(state__$1,command_handler);
} else {
return state__$1;
}
} else {
return state;
}
});
tetris.core.tick.on_soft_drop_pressed = (function tetris$core$tick$on_soft_drop_pressed(state,command_handler){
if(cljs.core.not(new cljs.core.Keyword("tetris.core.tick","soft-dropping?","tetris.core.tick/soft-dropping?",-2037289937).cljs$core$IFn$_invoke$arity$1(state))){
return tetris.core.tick.reset_fall_timer(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((command_handler.cljs$core$IFn$_invoke$arity$2 ? command_handler.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"move-down","move-down",-1149356017)) : command_handler.call(null,state,new cljs.core.Keyword(null,"move-down","move-down",-1149356017))),new cljs.core.Keyword("tetris.core.tick","soft-dropping?","tetris.core.tick/soft-dropping?",-2037289937),true));
} else {
var t = (new cljs.core.Keyword("tetris.core.tick","sdf-timer","tetris.core.tick/sdf-timer",1792248331).cljs$core$IFn$_invoke$arity$1(state) + (1));
if((t >= tetris.core.ruleset.soft_drop_interval.cljs$core$IFn$_invoke$arity$1(state))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(tetris.core.tick.reset_fall_timer((command_handler.cljs$core$IFn$_invoke$arity$2 ? command_handler.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"move-down","move-down",-1149356017)) : command_handler.call(null,state,new cljs.core.Keyword(null,"move-down","move-down",-1149356017)))),new cljs.core.Keyword("tetris.core.tick","sdf-timer","tetris.core.tick/sdf-timer",1792248331),(0),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("tetris.core.tick","soft-dropping?","tetris.core.tick/soft-dropping?",-2037289937),true], 0));
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
tetris.core.tick.do_lock_timer = (function tetris$core$tick$do_lock_timer(state,command_handler){
var t = (new cljs.core.Keyword("tetris.core.tick","lock-timer","tetris.core.tick/lock-timer",-1741962176).cljs$core$IFn$_invoke$arity$1(state) + (1));
if((t >= tetris.core.ruleset.lock_delay.cljs$core$IFn$_invoke$arity$1(state))){
return tetris.core.tick.lock(state,command_handler);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword("tetris.core.tick","lock-timer","tetris.core.tick/lock-timer",-1741962176),t);
}
});
tetris.core.tick.fall = (function tetris$core$tick$fall(state,command_handler){
if(cljs.core.not(new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(state))){
return state;
} else {
var t = (new cljs.core.Keyword("tetris.core.tick","fall-timer","tetris.core.tick/fall-timer",612804990).cljs$core$IFn$_invoke$arity$1(state) + (1));
if((t >= tetris.core.ruleset.fall_interval.cljs$core$IFn$_invoke$arity$1(state))){
if(tetris.core.game.can_move_down_QMARK_(state)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tetris.core.tick.reset_fall_timer((command_handler.cljs$core$IFn$_invoke$arity$2 ? command_handler.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"fall","fall",-563374271)) : command_handler.call(null,state,new cljs.core.Keyword(null,"fall","fall",-563374271)))),new cljs.core.Keyword("tetris.core.tick","lock-reset-count","tetris.core.tick/lock-reset-count",-1528190054),(0));
} else {
return state;
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword("tetris.core.tick","fall-timer","tetris.core.tick/fall-timer",612804990),t);
}
}
});
tetris.core.tick.try_lock = (function tetris$core$tick$try_lock(state,command_handler){
if(((cljs.core.not(new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(state))) || (tetris.core.game.can_move_down_QMARK_(state)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword("tetris.core.tick","lock-timer","tetris.core.tick/lock-timer",-1741962176),(0));
} else {
return tetris.core.tick.do_lock_timer(((((cljs.core.not(tetris.core.tick.locking_QMARK_(state))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("tetris.core.tick","lock-timer","tetris.core.tick/lock-timer",-1741962176).cljs$core$IFn$_invoke$arity$1(state),(0)))))?tetris.core.game.emit_event(state,new cljs.core.Keyword(null,"landed","landed",-1056197628)):state),command_handler);
}
});
tetris.core.tick.handle_rotate = (function tetris$core$tick$handle_rotate(state,command,command_handler){
var state__$1 = (command_handler.cljs$core$IFn$_invoke$arity$2 ? command_handler.cljs$core$IFn$_invoke$arity$2(state,command) : command_handler.call(null,state,command));
if(cljs.core.truth_((function (){var and__5160__auto__ = tetris.core.tick.locking_QMARK_(state__$1);
if(cljs.core.truth_(and__5160__auto__)){
return tetris.core.game.find_event(new cljs.core.Keyword(null,"rotated","rotated",1509433122),new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(state__$1));
} else {
return and__5160__auto__;
}
})())){
return tetris.core.tick.reset_lock(state__$1,command_handler);
} else {
return state__$1;
}
});
tetris.core.tick.handle_hard_drop = (function tetris$core$tick$handle_hard_drop(state,command_handler){
var state__$1 = (command_handler.cljs$core$IFn$_invoke$arity$2 ? command_handler.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"hard-drop","hard-drop",1211458322)) : command_handler.call(null,state,new cljs.core.Keyword(null,"hard-drop","hard-drop",1211458322)));
if(cljs.core.truth_(tetris.core.game.find_event(new cljs.core.Keyword(null,"hard-dropped","hard-dropped",2061168106),new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(state__$1)))){
return tetris.core.tick.reset_fall_timer(state__$1);
} else {
return state__$1;
}
});
tetris.core.tick.handle_hold = (function tetris$core$tick$handle_hold(state,command_handler){
var state__$1 = (command_handler.cljs$core$IFn$_invoke$arity$2 ? command_handler.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"hold","hold",-1621118005)) : command_handler.call(null,state,new cljs.core.Keyword(null,"hold","hold",-1621118005)));
if(cljs.core.truth_(tetris.core.game.find_event(new cljs.core.Keyword(null,"held","held",-1064528277),new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(state__$1)))){
return tetris.core.tick.reset_fall_timer(state__$1);
} else {
return state__$1;
}
});
tetris.core.tick.handle_events = (function tetris$core$tick$handle_events(state,command_handler){
var events = new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(state);
var state__$1 = (function (){var G__48791 = new cljs.core.Keyword(null,"dir","dir",1734754661).cljs$core$IFn$_invoke$arity$1(tetris.core.game.find_event(new cljs.core.Keyword(null,"moved","moved",486549219),events));
var G__48791__$1 = (((G__48791 instanceof cljs.core.Keyword))?G__48791.fqn:null);
switch (G__48791__$1) {
case "down":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"down-blocked?","down-blocked?",983958012),false);

break;
case "left":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"shift-blocked?","shift-blocked?",-2058728569),false);

break;
case "right":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"shift-blocked?","shift-blocked?",-2058728569),false);

break;
default:
return state;

}
})();
var state__$2 = (cljs.core.truth_(tetris.core.game.find_event(new cljs.core.Keyword(null,"shift-blocked","shift-blocked",1139549631),events))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"shift-blocked?","shift-blocked?",-2058728569),true):(cljs.core.truth_(tetris.core.game.find_event(new cljs.core.Keyword(null,"down-blocked","down-blocked",-1184696185),events))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"down-blocked?","down-blocked?",983958012),true):(cljs.core.truth_(tetris.core.game.find_event(new cljs.core.Keyword(null,"landed","landed",-1056197628),events))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"down-blocked?","down-blocked?",983958012),true):state__$1
)));
if(cljs.core.truth_(tetris.core.game.find_event(new cljs.core.Keyword(null,"game-over","game-over",-607322695),events))){
return state__$2;
} else {
if(cljs.core.truth_(tetris.core.game.find_event(new cljs.core.Keyword(null,"line-clearing","line-clearing",-1671825341),events))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state__$2,new cljs.core.Keyword("tetris.core.tick","line-clearing?","tetris.core.tick/line-clearing?",-14783557),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("tetris.core.tick","line-clear-timer","tetris.core.tick/line-clear-timer",-219612930),(0)], 0)),new cljs.core.Keyword(null,"clear-combo-count","clear-combo-count",2026819444),cljs.core.inc),new cljs.core.Keyword(null,"lines-cleared","lines-cleared",1628289668),cljs.core.inc);
} else {
if(cljs.core.truth_(new cljs.core.Keyword("tetris.core.tick","line-clearing?","tetris.core.tick/line-clearing?",-14783557).cljs$core$IFn$_invoke$arity$1(state__$2))){
var t = (new cljs.core.Keyword("tetris.core.tick","line-clear-timer","tetris.core.tick/line-clear-timer",-219612930).cljs$core$IFn$_invoke$arity$1(state__$2) + (1));
if((t >= tetris.core.ruleset.line_clear_delay.cljs$core$IFn$_invoke$arity$1(state__$2))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((function (){var G__48792 = (command_handler.cljs$core$IFn$_invoke$arity$2 ? command_handler.cljs$core$IFn$_invoke$arity$2(state__$2,new cljs.core.Keyword(null,"clear-lines","clear-lines",568695980)) : command_handler.call(null,state__$2,new cljs.core.Keyword(null,"clear-lines","clear-lines",568695980)));
var G__48793 = new cljs.core.Keyword(null,"spawn","spawn",-1213583293);
return (command_handler.cljs$core$IFn$_invoke$arity$2 ? command_handler.cljs$core$IFn$_invoke$arity$2(G__48792,G__48793) : command_handler.call(null,G__48792,G__48793));
})(),new cljs.core.Keyword("tetris.core.tick","line-clearing?","tetris.core.tick/line-clearing?",-14783557),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("tetris.core.tick","line-clear-timer","tetris.core.tick/line-clear-timer",-219612930),(0)], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$2,new cljs.core.Keyword("tetris.core.tick","line-clear-timer","tetris.core.tick/line-clear-timer",-219612930),t);
}
} else {
if(cljs.core.truth_(tetris.core.game.find_event(new cljs.core.Keyword(null,"locked","locked",-1658763820),events))){
return tetris.core.tick.reset_fall_timer((function (){var G__48794 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(new cljs.core.Keyword(null,"das-cancel-on-lock?","das-cancel-on-lock?",-298592260).cljs$core$IFn$_invoke$arity$1(state__$2))?tetris.core.tick.reset_das(state__$2):state__$2),new cljs.core.Keyword(null,"shift-blocked?","shift-blocked?",-2058728569),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"down-blocked?","down-blocked?",983958012),false,new cljs.core.Keyword(null,"clear-combo-count","clear-combo-count",2026819444),(0)], 0));
var G__48795 = new cljs.core.Keyword(null,"spawn","spawn",-1213583293);
return (command_handler.cljs$core$IFn$_invoke$arity$2 ? command_handler.cljs$core$IFn$_invoke$arity$2(G__48794,G__48795) : command_handler.call(null,G__48794,G__48795));
})());
} else {
return state__$2;

}
}
}
}
});
tetris.core.tick.initial_state = (function tetris$core$tick$initial_state(overrides){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("tetris.core.tick","lock-timer","tetris.core.tick/lock-timer",-1741962176),new cljs.core.Keyword(null,"lock-reset-max-times","lock-reset-max-times",708535139),new cljs.core.Keyword(null,"lines-cleared","lines-cleared",1628289668),new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"dcd","dcd",594655109),new cljs.core.Keyword("tetris.core.tick","das-timer","tetris.core.tick/das-timer",1207164327),new cljs.core.Keyword(null,"das-cancel-on-direction-change?","das-cancel-on-direction-change?",1181687623),new cljs.core.Keyword(null,"shift-blocked?","shift-blocked?",-2058728569),new cljs.core.Keyword(null,"arr","arr",474961448),new cljs.core.Keyword("tetris.core.tick","dcd-timer","tetris.core.tick/dcd-timer",1438315080),new cljs.core.Keyword("tetris.core.tick","sdf-timer","tetris.core.tick/sdf-timer",1792248331),new cljs.core.Keyword("tetris.core.tick","soft-dropping?","tetris.core.tick/soft-dropping?",-2037289937),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"rotate-180-allowed?","rotate-180-allowed?",129813488),new cljs.core.Keyword("tetris.core.tick","arr-timer","tetris.core.tick/arr-timer",-1395782638),new cljs.core.Keyword(null,"hold-allowed?","hold-allowed?",-1535961038),new cljs.core.Keyword(null,"clear-combo-count","clear-combo-count",2026819444),new cljs.core.Keyword(null,"das","das",-1801456200),new cljs.core.Keyword(null,"sdf","sdf",-844168232),new cljs.core.Keyword(null,"hard-drop-allowed?","hard-drop-allowed?",551028026),new cljs.core.Keyword("tetris.core.tick","das-button","tetris.core.tick/das-button",-973960486),new cljs.core.Keyword("tetris.core.tick","lock-reset-count","tetris.core.tick/lock-reset-count",-1528190054),new cljs.core.Keyword("tetris.core.tick","line-clearing?","tetris.core.tick/line-clearing?",-14783557),new cljs.core.Keyword(null,"down-blocked?","down-blocked?",983958012),new cljs.core.Keyword(null,"das-cancel-on-lock?","das-cancel-on-lock?",-298592260),new cljs.core.Keyword("tetris.core.tick","line-clear-timer","tetris.core.tick/line-clear-timer",-219612930),new cljs.core.Keyword("tetris.core.tick","fall-timer","tetris.core.tick/fall-timer",612804990)],[(0),(15),(0),(0),(0),(0),false,false,(0),(0),(0),false,(1),true,(0),true,(0),(0),(1),true,null,(0),false,false,false,(0),(0)]),overrides], 0));
});
tetris.core.tick.step = (function tetris$core$tick$step(state,input,command_handler){
var map__48796 = input;
var map__48796__$1 = cljs.core.__destructure_map(map__48796);
var pressed_buttons = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48796__$1,new cljs.core.Keyword(null,"pressed-buttons","pressed-buttons",1426560090));
var just_pressed_buttons = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48796__$1,new cljs.core.Keyword(null,"just-pressed-buttons","just-pressed-buttons",1411625590));
var map__48797 = state;
var map__48797__$1 = cljs.core.__destructure_map(map__48797);
var hard_drop_allowed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48797__$1,new cljs.core.Keyword(null,"hard-drop-allowed?","hard-drop-allowed?",551028026));
var hold_allowed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48797__$1,new cljs.core.Keyword(null,"hold-allowed?","hold-allowed?",-1535961038));
var rotate_180_allowed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48797__$1,new cljs.core.Keyword(null,"rotate-180-allowed?","rotate-180-allowed?",129813488));
var pressed_buttons__$1 = cljs.core.filterv((function (button){
var G__48798 = button;
var G__48798__$1 = (((G__48798 instanceof cljs.core.Keyword))?G__48798.fqn:null);
switch (G__48798__$1) {
case "rotate-180":
return new cljs.core.Keyword(null,"rotate-180-allowed?","rotate-180-allowed?",129813488).cljs$core$IFn$_invoke$arity$1(state);

break;
case "hard-drop":
return new cljs.core.Keyword(null,"hard-drop-allowed?","hard-drop-allowed?",551028026).cljs$core$IFn$_invoke$arity$1(state);

break;
case "hold":
return new cljs.core.Keyword(null,"hold-allowed?","hold-allowed?",-1535961038).cljs$core$IFn$_invoke$arity$1(state);

break;
default:
return true;

}
}),pressed_buttons);
var input__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(input,new cljs.core.Keyword(null,"pressed-buttons","pressed-buttons",1426560090),pressed_buttons__$1);
var just_pressed_buttons__$1 = cljs.core.set(just_pressed_buttons);
var pressed_button = cljs.core.last(pressed_buttons__$1);
var state__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"frame","frame",-1711082588),cljs.core.inc);
var state__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(state__$1))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pressed_button,new cljs.core.Keyword(null,"move-left","move-left",-271562811)))?tetris.core.tick.on_shift_pressed(state__$1,new cljs.core.Keyword(null,"move-left","move-left",-271562811),command_handler):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pressed_button,new cljs.core.Keyword(null,"move-right","move-right",1661359569)))?tetris.core.tick.on_shift_pressed(state__$1,new cljs.core.Keyword(null,"move-right","move-right",1661359569),command_handler):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pressed_button,new cljs.core.Keyword(null,"soft-drop","soft-drop",-123150289)))?tetris.core.tick.on_soft_drop_pressed(state__$1,command_handler):state__$1
))):state__$1);
cljs.core.tap_GT_((""+"tick - "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(state__$2))));

return tetris.core.tick.handle_events(tetris.core.tick.handle_buttons_released(tetris.core.tick.try_lock(tetris.core.tick.fall((cljs.core.truth_(new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(state__$2))?((cljs.core.contains_QMARK_(just_pressed_buttons__$1,new cljs.core.Keyword(null,"rotate-cw","rotate-cw",83272937)))?tetris.core.tick.handle_rotate(state__$2,new cljs.core.Keyword(null,"rotate-cw","rotate-cw",83272937),command_handler):((cljs.core.contains_QMARK_(just_pressed_buttons__$1,new cljs.core.Keyword(null,"rotate-ccw","rotate-ccw",885172263)))?tetris.core.tick.handle_rotate(state__$2,new cljs.core.Keyword(null,"rotate-ccw","rotate-ccw",885172263),command_handler):(cljs.core.truth_((function (){var and__5160__auto__ = rotate_180_allowed_QMARK_;
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core.contains_QMARK_(just_pressed_buttons__$1,new cljs.core.Keyword(null,"rotate-180","rotate-180",605917905));
} else {
return and__5160__auto__;
}
})())?tetris.core.tick.handle_rotate(state__$2,new cljs.core.Keyword(null,"rotate-180","rotate-180",605917905),command_handler):(cljs.core.truth_((function (){var and__5160__auto__ = hard_drop_allowed_QMARK_;
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core.contains_QMARK_(just_pressed_buttons__$1,new cljs.core.Keyword(null,"hard-drop","hard-drop",1211458322));
} else {
return and__5160__auto__;
}
})())?tetris.core.tick.handle_hard_drop(state__$2,command_handler):(cljs.core.truth_((function (){var and__5160__auto__ = hold_allowed_QMARK_;
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core.contains_QMARK_(just_pressed_buttons__$1,new cljs.core.Keyword(null,"hold","hold",-1621118005));
} else {
return and__5160__auto__;
}
})())?tetris.core.tick.handle_hold(state__$2,command_handler):state__$2
))))):state__$2),command_handler),command_handler),input__$1),command_handler);
});

//# sourceMappingURL=tetris.core.tick.js.map
