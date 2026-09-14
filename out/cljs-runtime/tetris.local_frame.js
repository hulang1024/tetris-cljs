goog.provide('tetris.local_frame');
tetris.local_frame.State = malli.util.merge.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fall-timer","fall-timer",1803266707),cljs.core.number_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lock-timer","lock-timer",-721365577),cljs.core.number_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"das-timer","das-timer",2129710224),cljs.core.number_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"arr-timer","arr-timer",-406258423),cljs.core.number_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dcd-timer","dcd-timer",482281791),cljs.core.number_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sdf-timer","sdf-timer",-1815569132),cljs.core.number_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"das-button","das-button",-1663206415),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),tetris.input.Button], null)], null)], null),malli.util.select_keys.cljs$core$IFn$_invoke$arity$2(tetris.core.game.State,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"status","status",-1997798413)], null)));
tetris.local_frame.on_soft_drop_pressed = (function tetris$local_frame$on_soft_drop_pressed(state,dt){
if(((new cljs.core.Keyword(null,"sdf-timer","sdf-timer",-1815569132).cljs$core$IFn$_invoke$arity$1(state) + dt) >= tetris.core.game.calc_soft_drop_speed(state))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tetris.core.game.handle_command(state,new cljs.core.Keyword(null,"move-down","move-down",-1149356017)),new cljs.core.Keyword(null,"sdf-timer","sdf-timer",-1815569132),(0));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"sdf-timer","sdf-timer",-1815569132),cljs.core._PLUS_,dt);
}
});
tetris.local_frame.handle_soft_drop_released = (function tetris$local_frame$handle_soft_drop_released(state,input){
if((!(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"pressed-buttons","pressed-buttons",1426560090).cljs$core$IFn$_invoke$arity$1(input),new cljs.core.Keyword(null,"soft-drop","soft-drop",-123150289))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"sdf-timer","sdf-timer",-1815569132),tetris.core.game.calc_soft_drop_speed(state));
} else {
return state;
}
});
tetris.local_frame.das_not_charged_QMARK_ = (function tetris$local_frame$das_not_charged_QMARK_(state){
return (new cljs.core.Keyword(null,"das-button","das-button",-1663206415).cljs$core$IFn$_invoke$arity$1(state) == null);
});
tetris.local_frame.das_charging_QMARK_ = (function tetris$local_frame$das_charging_QMARK_(state,dt){
var and__5160__auto__ = new cljs.core.Keyword(null,"das-button","das-button",-1663206415).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(and__5160__auto__)){
return ((new cljs.core.Keyword(null,"das-timer","das-timer",2129710224).cljs$core$IFn$_invoke$arity$1(state) + dt) < cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"das","das",-1801456200)], null)));
} else {
return and__5160__auto__;
}
});
tetris.local_frame.das_charged_QMARK_ = (function tetris$local_frame$das_charged_QMARK_(state,dt){
var and__5160__auto__ = new cljs.core.Keyword(null,"das-button","das-button",-1663206415).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(and__5160__auto__)){
return ((new cljs.core.Keyword(null,"das-timer","das-timer",2129710224).cljs$core$IFn$_invoke$arity$1(state) + dt) >= cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"das","das",-1801456200)], null)));
} else {
return and__5160__auto__;
}
});
tetris.local_frame.on_shift_pressed = (function tetris$local_frame$on_shift_pressed(state,dt,command){
if((new cljs.core.Keyword(null,"lock-timer","lock-timer",-721365577).cljs$core$IFn$_invoke$arity$1(state) < cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"lock-delay","lock-delay",-611157928)], null)))){
if(tetris.local_frame.das_not_charged_QMARK_(state)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tetris.core.game.handle_command(state,command),new cljs.core.Keyword(null,"das-button","das-button",-1663206415),command);
} else {
if(cljs.core.truth_(tetris.local_frame.das_charging_QMARK_(state,dt))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"das-timer","das-timer",2129710224),cljs.core._PLUS_,dt),new cljs.core.Keyword(null,"arr-timer","arr-timer",-406258423),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"arr","arr",474961448)], null)));
} else {
if(cljs.core.truth_(tetris.local_frame.das_charged_QMARK_(state,dt))){
if(((dt + new cljs.core.Keyword(null,"arr-timer","arr-timer",-406258423).cljs$core$IFn$_invoke$arity$1(state)) >= cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"arr","arr",474961448)], null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tetris.core.game.handle_command(state,command),new cljs.core.Keyword(null,"arr-timer","arr-timer",-406258423),(0));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"arr-timer","arr-timer",-406258423),cljs.core._PLUS_,dt);
}
} else {
return null;
}
}
}
} else {
return state;
}
});
tetris.local_frame.handle_shift_released = (function tetris$local_frame$handle_shift_released(state,input){
if((!(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"pressed-buttons","pressed-buttons",1426560090).cljs$core$IFn$_invoke$arity$1(input),new cljs.core.Keyword(null,"das-button","das-button",-1663206415).cljs$core$IFn$_invoke$arity$1(state))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"das-button","das-button",-1663206415),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"das-timer","das-timer",2129710224),(0),new cljs.core.Keyword(null,"arr-timer","arr-timer",-406258423),(0)], 0));
} else {
return state;
}
});
tetris.local_frame.start_lock_timer = (function tetris$local_frame$start_lock_timer(state,dt){
var t = (new cljs.core.Keyword(null,"lock-timer","lock-timer",-721365577).cljs$core$IFn$_invoke$arity$1(state) + dt);
if((t >= cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"lock-delay","lock-delay",-611157928)], null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(tetris.core.game.handle_command(state,new cljs.core.Keyword(null,"lock","lock",-488188066)),new cljs.core.Keyword(null,"lock-timer","lock-timer",-721365577),(0),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fall-timer","fall-timer",1803266707),tetris.core.game.calc_fall_speed(new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(state))], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"lock-timer","lock-timer",-721365577),t);
}
});
tetris.local_frame.do_gravity = (function tetris$local_frame$do_gravity(state,dt){
var t = (new cljs.core.Keyword(null,"fall-timer","fall-timer",1803266707).cljs$core$IFn$_invoke$arity$1(state) + ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"playing","playing",70013335)))?dt:(0)));
if((t >= tetris.core.game.calc_fall_speed(new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(state)))){
if(tetris.core.game.can_down_QMARK_(state)){
return tetris.core.game.handle_command(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"fall-timer","fall-timer",1803266707),(0)),new cljs.core.Keyword(null,"move-down","move-down",-1149356017));
} else {
return tetris.local_frame.start_lock_timer(state,dt);
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"fall-timer","fall-timer",1803266707),t);
}
});
tetris.local_frame.handle_ok = (function tetris$local_frame$handle_ok(state){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"status","status",-1997798413),(function (p1__39434_SHARP_){
var G__39435 = p1__39434_SHARP_;
var G__39435__$1 = (((G__39435 instanceof cljs.core.Keyword))?G__39435.fqn:null);
switch (G__39435__$1) {
case "playing":
return new cljs.core.Keyword(null,"paused","paused",-1710376127);

break;
case "paused":
return new cljs.core.Keyword(null,"playing","playing",70013335);

break;
default:
return state;

}
}));
});
tetris.local_frame.initial_state = (function tetris$local_frame$initial_state(){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"fall-timer","fall-timer",1803266707),(0),new cljs.core.Keyword(null,"lock-timer","lock-timer",-721365577),(0),new cljs.core.Keyword(null,"das-timer","das-timer",2129710224),(0),new cljs.core.Keyword(null,"arr-timer","arr-timer",-406258423),(0),new cljs.core.Keyword(null,"dcd-timer","dcd-timer",482281791),(0),new cljs.core.Keyword(null,"sdf-timer","sdf-timer",-1815569132),(0),new cljs.core.Keyword(null,"das-button","das-button",-1663206415),null], null);
});
tetris.local_frame.step = (function tetris$local_frame$step(state,input,delta_ms){
var map__39436 = input;
var map__39436__$1 = cljs.core.__destructure_map(map__39436);
var pressed_buttons = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39436__$1,new cljs.core.Keyword(null,"pressed-buttons","pressed-buttons",1426560090));
var just_pressed_buttons = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39436__$1,new cljs.core.Keyword(null,"just-pressed-buttons","just-pressed-buttons",1411625590));
return tetris.local_frame.do_gravity(tetris.local_frame.handle_soft_drop_released(tetris.local_frame.handle_shift_released(((cljs.core.contains_QMARK_(pressed_buttons,new cljs.core.Keyword(null,"soft-drop","soft-drop",-123150289)))?tetris.local_frame.on_soft_drop_pressed(state,delta_ms):((cljs.core.contains_QMARK_(pressed_buttons,new cljs.core.Keyword(null,"move-left","move-left",-271562811)))?tetris.local_frame.on_shift_pressed(state,delta_ms,new cljs.core.Keyword(null,"move-left","move-left",-271562811)):((cljs.core.contains_QMARK_(pressed_buttons,new cljs.core.Keyword(null,"move-right","move-right",1661359569)))?tetris.local_frame.on_shift_pressed(state,delta_ms,new cljs.core.Keyword(null,"move-right","move-right",1661359569)):((cljs.core.contains_QMARK_(just_pressed_buttons,new cljs.core.Keyword(null,"hard-drop","hard-drop",1211458322)))?tetris.core.game.handle_command(state,new cljs.core.Keyword(null,"hard-drop","hard-drop",1211458322)):((cljs.core.contains_QMARK_(just_pressed_buttons,new cljs.core.Keyword(null,"rotate-cw","rotate-cw",83272937)))?tetris.core.game.handle_command(state,new cljs.core.Keyword(null,"rotate-cw","rotate-cw",83272937)):((cljs.core.contains_QMARK_(just_pressed_buttons,new cljs.core.Keyword(null,"rotate-ccw","rotate-ccw",885172263)))?tetris.core.game.handle_command(state,new cljs.core.Keyword(null,"rotate-ccw","rotate-ccw",885172263)):((cljs.core.contains_QMARK_(just_pressed_buttons,new cljs.core.Keyword(null,"ok","ok",967785236)))?tetris.local_frame.handle_ok(state):state
))))))),input),input),delta_ms);
});

//# sourceMappingURL=tetris.local_frame.js.map
