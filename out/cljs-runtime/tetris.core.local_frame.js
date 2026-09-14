goog.provide('tetris.core.local_frame');
tetris.core.local_frame.start_lock_timer = (function tetris$core$local_frame$start_lock_timer(state,delta_ms){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"phase","phase",575722892).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"hard-drop","hard-drop",1211458322))){
var t = (new cljs.core.Keyword(null,"lock-timer","lock-timer",-721365577).cljs$core$IFn$_invoke$arity$1(state) + delta_ms);
if((t >= cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"lock-delay","lock-delay",-611157928)], null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tetris.core.game.handle_command(state,new cljs.core.Keyword(null,"lock","lock",-488188066)),new cljs.core.Keyword(null,"lock-timer","lock-timer",-721365577),(0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"lock-timer","lock-timer",-721365577),t);
}
} else {
return tetris.core.game.handle_command(state,new cljs.core.Keyword(null,"lock","lock",-488188066));
}
});
tetris.core.local_frame.apply_gravity = (function tetris$core$local_frame$apply_gravity(state,delta_ms){
var t = (new cljs.core.Keyword(null,"fall-timer","fall-timer",1803266707).cljs$core$IFn$_invoke$arity$1(state) + ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"playing","playing",70013335)))?delta_ms:(0)));
if((t >= tetris.core.game.calc_fall_speed(new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(state)))){
if(tetris.core.game.can_down_QMARK_(state)){
return tetris.core.game.handle_command(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"fall-timer","fall-timer",1803266707),(0)),new cljs.core.Keyword(null,"move-down","move-down",-1149356017));
} else {
return tetris.core.local_frame.start_lock_timer(state,delta_ms);
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"fall-timer","fall-timer",1803266707),t);
}
});
tetris.core.local_frame.handle_ok = (function tetris$core$local_frame$handle_ok(state){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"status","status",-1997798413),(function (p1__37229_SHARP_){
var G__37230 = p1__37229_SHARP_;
var G__37230__$1 = (((G__37230 instanceof cljs.core.Keyword))?G__37230.fqn:null);
switch (G__37230__$1) {
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
tetris.core.local_frame.step = (function tetris$core$local_frame$step(state,input,delta_ms){
var map__37231 = input;
var map__37231__$1 = cljs.core.__destructure_map(map__37231);
var pressed_buttons = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37231__$1,new cljs.core.Keyword(null,"pressed-buttons","pressed-buttons",1426560090));
var just_pressed_buttons = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37231__$1,new cljs.core.Keyword(null,"just-pressed-buttons","just-pressed-buttons",1411625590));
return tetris.core.local_frame.apply_gravity(((cljs.core.contains_QMARK_(just_pressed_buttons,new cljs.core.Keyword(null,"soft-drop","soft-drop",-123150289)))?tetris.core.game.handle_command(state,new cljs.core.Keyword(null,"move-down","move-down",-1149356017)):((cljs.core.contains_QMARK_(just_pressed_buttons,new cljs.core.Keyword(null,"move-left","move-left",-271562811)))?tetris.core.game.handle_command(state,new cljs.core.Keyword(null,"move-left","move-left",-271562811)):((cljs.core.contains_QMARK_(just_pressed_buttons,new cljs.core.Keyword(null,"move-right","move-right",1661359569)))?tetris.core.game.handle_command(state,new cljs.core.Keyword(null,"move-right","move-right",1661359569)):((cljs.core.contains_QMARK_(just_pressed_buttons,new cljs.core.Keyword(null,"hard-drop","hard-drop",1211458322)))?tetris.core.game.handle_command(state,new cljs.core.Keyword(null,"hard-drop","hard-drop",1211458322)):((cljs.core.contains_QMARK_(just_pressed_buttons,new cljs.core.Keyword(null,"rotate-cw","rotate-cw",83272937)))?tetris.core.game.handle_command(state,new cljs.core.Keyword(null,"rotate-cw","rotate-cw",83272937)):((cljs.core.contains_QMARK_(just_pressed_buttons,new cljs.core.Keyword(null,"rotate-ccw","rotate-ccw",885172263)))?tetris.core.game.handle_command(state,new cljs.core.Keyword(null,"rotate-ccw","rotate-ccw",885172263)):((cljs.core.contains_QMARK_(just_pressed_buttons,new cljs.core.Keyword(null,"ok","ok",967785236)))?tetris.core.local_frame.handle_ok(state):state
))))))),delta_ms);
});

//# sourceMappingURL=tetris.core.local_frame.js.map
