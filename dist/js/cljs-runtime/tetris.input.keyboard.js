goog.provide('tetris.input.keyboard');
tetris.input.keyboard.pressed_keys = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
tetris.input.keyboard.on_key_event = (function tetris$input$keyboard$on_key_event(event,pressed_QMARK_){
var key = event.code;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tetris.input.keyboard.pressed_keys,(function (keys){
if(cljs.core.truth_(pressed_QMARK_)){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([key]),keys))){
return keys;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(keys,key);
}
} else {
return cljs.core.filterv((function (p1__46093_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(key,p1__46093_SHARP_);
}),keys);
}
}));
});
tetris.input.keyboard.on_key_down = (function tetris$input$keyboard$on_key_down(event){
return tetris.input.keyboard.on_key_event(event,true);
});
tetris.input.keyboard.on_key_up = (function tetris$input$keyboard$on_key_up(event){
return tetris.input.keyboard.on_key_event(event,false);
});
tetris.input.keyboard.init = (function tetris$input$keyboard$init(){
cljs.core.reset_BANG_(tetris.input.keyboard.pressed_keys,cljs.core.PersistentVector.EMPTY);

window.removeEventListener("keydown",tetris.input.keyboard.on_key_down);

window.removeEventListener("keyup",tetris.input.keyboard.on_key_up);

window.addEventListener("keydown",tetris.input.keyboard.on_key_down);

return window.addEventListener("keyup",tetris.input.keyboard.on_key_up);
});
tetris.input.keyboard.key__GT_button = (function tetris$input$keyboard$key__GT_button(key){
var buttons = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__46099){
var vec__46100 = p__46099;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46100,(0),null);
var buttons = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46100,(1),null);
return cljs.core.contains_QMARK_(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"button","button",1456579943),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__46095_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__46095_SHARP_),new cljs.core.Keyword(null,"keyboard","keyboard",-617357087));
}),buttons))),key);
}),new cljs.core.Keyword(null,"controls","controls",1340701452).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tetris.options_store.options)));
return cljs.core.first(cljs.core.first(buttons));
});
tetris.input.keyboard.key__GT_buttons = (function tetris$input$keyboard$key__GT_buttons(keys){
return cljs.core.filterv(cljs.core.some_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(tetris.input.keyboard.key__GT_button,keys));
});
tetris.input.keyboard.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(tetris.core.input.initial_state);
tetris.input.keyboard.handle = (function tetris$input$keyboard$handle(pressed_buttons){
return cljs.core.reset_BANG_(tetris.input.keyboard.state,tetris.core.input.handle(cljs.core.deref(tetris.input.keyboard.state),pressed_buttons));
});

//# sourceMappingURL=tetris.input.keyboard.js.map
