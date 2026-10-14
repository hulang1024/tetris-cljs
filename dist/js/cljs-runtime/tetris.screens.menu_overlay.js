goog.provide('tetris.screens.menu_overlay');
tetris.screens.menu_overlay.base_item_class = (function tetris$screens$menu_overlay$base_item_class(item_id){
return cljss.core.css("tetris_screens_menu-overlay__base-item-class",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".tetris_screens_menu-overlay__base-item-class{padding:0.5em 0;font-size:1.5rem;text-align:center;user-select:none;color:#aaa;}"], null),cljs.core.PersistentVector.EMPTY);
});
tetris.screens.menu_overlay.base_item_hover_class = (function tetris$screens$menu_overlay$base_item_hover_class(item_id){
return cljss.core.css("tetris_screens_menu-overlay__base-item-hover-class",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".tetris_screens_menu-overlay__base-item-hover-class{color:#fff;text-shadow:0 0 0.2em #fee;}"], null),cljs.core.PersistentVector.EMPTY);
});
tetris.screens.menu_overlay.handle_enter = (function tetris$screens$menu_overlay$handle_enter(state,on_enter,on_update){
var item_id = new cljs.core.Keyword(null,"hover","hover",-341141711).cljs$core$IFn$_invoke$arity$1(state);
var item = (function (){var or__5162__auto__ = tetris.screens.menu.find_item(state,item_id);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"back","back",-417520012)], null);
}
})();
var trigger_enter = (function (new_state,item__$1){
if(cljs.core.truth_(on_enter)){
(on_enter.cljs$core$IFn$_invoke$arity$2 ? on_enter.cljs$core$IFn$_invoke$arity$2(item__$1,new_state) : on_enter.call(null,item__$1,new_state));
} else {
}

return (on_update.cljs$core$IFn$_invoke$arity$1 ? on_update.cljs$core$IFn$_invoke$arity$1(new_state) : on_update.call(null,new_state));
});
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(item_id,new cljs.core.Keyword(null,"back","back",-417520012))){
tetris.audio.play(new cljs.core.Keyword(null,"menu-back","menu-back",-1829547847));

return trigger_enter(tetris.screens.menu.back_to_parent(state),item);
} else {
if(tetris.screens.menu.menu_QMARK_(state,item_id)){
tetris.audio.play(new cljs.core.Keyword(null,"menu-enter","menu-enter",1353675947));

return trigger_enter(tetris.screens.menu.enter_hover_menu(state),item);
} else {
return trigger_enter(state,item);

}
}
});
tetris.screens.menu_overlay.handle_hover = (function tetris$screens$menu_overlay$handle_hover(state,on_update){
tetris.audio.play(new cljs.core.Keyword(null,"menu-hover","menu-hover",110182816));

return (on_update.cljs$core$IFn$_invoke$arity$1 ? on_update.cljs$core$IFn$_invoke$arity$1(state) : on_update.call(null,state));
});
tetris.screens.menu_overlay.handle_keydown = (function tetris$screens$menu_overlay$handle_keydown(state,event,on_enter,on_update){
var key = event.code;
var trigger_hover = (function (new_state){
tetris.audio.play(new cljs.core.Keyword(null,"menu-hover","menu-hover",110182816));

return (on_update.cljs$core$IFn$_invoke$arity$1 ? on_update.cljs$core$IFn$_invoke$arity$1(new_state) : on_update.call(null,new_state));
});
var G__45648 = key;
switch (G__45648) {
case "ArrowDown":
return trigger_hover(tetris.screens.menu.move_hover(state,(1)));

break;
case "ArrowUp":
return trigger_hover(tetris.screens.menu.move_hover(state,(-1)));

break;
case "Escape":
if(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(state))){
tetris.audio.play(new cljs.core.Keyword(null,"menu-back","menu-back",-1829547847));
} else {
}

var G__45650 = tetris.screens.menu.back_to_parent(state);
return (on_update.cljs$core$IFn$_invoke$arity$1 ? on_update.cljs$core$IFn$_invoke$arity$1(G__45650) : on_update.call(null,G__45650));

break;
case "Enter":
return tetris.screens.menu_overlay.handle_enter(state,on_enter,on_update);

break;
default:
return null;

}
});
tetris.screens.menu_overlay.menu_overlay = (function tetris$screens$menu_overlay$menu_overlay(p__45653){
var map__45654 = p__45653;
var map__45654__$1 = cljs.core.__destructure_map(map__45654);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45654__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45654__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var menu_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45654__$1,new cljs.core.Keyword(null,"menu-items","menu-items",-1870634357));
var default_hover = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45654__$1,new cljs.core.Keyword(null,"default-hover","default-hover",-1411925272));
var menu_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45654__$1,new cljs.core.Keyword(null,"menu-class","menu-class",1740071488));
var menu_item_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45654__$1,new cljs.core.Keyword(null,"menu-item-class","menu-item-class",-1044070437));
var menu_item_hover_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45654__$1,new cljs.core.Keyword(null,"menu-item-hover-class","menu-item-hover-class",667986554));
var on_enter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45654__$1,new cljs.core.Keyword(null,"on-enter","on-enter",-928988216));
var with_let45655 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let45655","with-let45655",1508069128));
var temp__5829__auto___45665 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5829__auto___45665 == null)){
} else {
var c__28884__auto___45666 = temp__5829__auto___45665;
if((with_let45655.generation === c__28884__auto___45666.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error((""+"Warning: The same with-let is being used more "+"than once in the same reactive context."));
} else {
}
} else {
}

(with_let45655.generation = c__28884__auto___45666.ratomGeneration);
}

var init45656 = (with_let45655.length === (0));
var state__$1 = ((((init45656) || (cljs.core.not(with_let45655.hasOwnProperty((0))))))?(with_let45655[(0)] = (function (){var or__5162__auto__ = state;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1(tetris.screens.menu.make(menu_items,default_hover));
}
})()):(with_let45655[(0)]));
var update_state = ((((init45656) || (cljs.core.not(with_let45655.hasOwnProperty((1))))))?(with_let45655[(1)] = (function (p1__45652_SHARP_){
return cljs.core.reset_BANG_(state__$1,p1__45652_SHARP_);
})):(with_let45655[(1)]));
var keydown_event_listener = ((((init45656) || (cljs.core.not(with_let45655.hasOwnProperty((2))))))?(with_let45655[(2)] = (function (event){
return tetris.screens.menu_overlay.handle_keydown(cljs.core.deref(state__$1),event,on_enter,update_state);
})):(with_let45655[(2)]));
var res45657 = (function (){
document.addEventListener("keydown",keydown_event_listener);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),(function (){var or__5162__auto__ = key;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "menu";
}
})(),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["menu-overlay",(cljs.core.truth_(menu_class)?(menu_class.cljs$core$IFn$_invoke$arity$0 ? menu_class.cljs$core$IFn$_invoke$arity$0() : menu_class.call(null)):null)], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (item){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.screens.menu_overlay.base_item_class(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)),(cljs.core.truth_(menu_item_class)?(function (){var G__45658 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item);
return (menu_item_class.cljs$core$IFn$_invoke$arity$1 ? menu_item_class.cljs$core$IFn$_invoke$arity$1(G__45658) : menu_item_class.call(null,G__45658));
})():null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hover","hover",-341141711).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state__$1)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.screens.menu_overlay.base_item_hover_class(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)),(cljs.core.truth_(menu_item_hover_class)?(function (){var G__45659 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item);
return (menu_item_hover_class.cljs$core$IFn$_invoke$arity$1 ? menu_item_hover_class.cljs$core$IFn$_invoke$arity$1(G__45659) : menu_item_hover_class.call(null,G__45659));
})():null)], null):null)),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(function (){
return tetris.screens.menu_overlay.handle_hover(tetris.screens.menu.change_hover(cljs.core.deref(state__$1),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)),update_state);
}),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return tetris.screens.menu_overlay.handle_enter(cljs.core.deref(state__$1),on_enter,update_state);
})], null),tetris.screens.i18n.text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"menu","menu",352255198),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)], 0))], null);
}),tetris.screens.menu.show_active_menu_items(cljs.core.deref(state__$1))))], null);
})()
;
var destroy__28883__auto___45674 = (function (){
return document.removeEventListener("keydown",keydown_event_listener);
});
if(reagent.ratom.reactive_QMARK_()){
if((with_let45655.destroy == null)){
(with_let45655.destroy = destroy__28883__auto___45674);
} else {
}
} else {
destroy__28883__auto___45674();
}

return res45657;
});

//# sourceMappingURL=tetris.screens.menu_overlay.js.map
