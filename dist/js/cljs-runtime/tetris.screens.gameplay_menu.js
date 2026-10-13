goog.provide('tetris.screens.gameplay_menu');
tetris.screens.gameplay_menu.base_item_class = (function tetris$screens$gameplay_menu$base_item_class(item_id){
return cljss.core.css("tetris_screens_gameplay-menu__base-item-class",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".tetris_screens_gameplay-menu__base-item-class{padding:0.5em 0;font-size:1.5rem;text-align:center;user-select:none;color:#aaa;}"], null),cljs.core.PersistentVector.EMPTY);
});
tetris.screens.gameplay_menu.base_item_hover_class = (function tetris$screens$gameplay_menu$base_item_hover_class(item_id){
return cljss.core.css("tetris_screens_gameplay-menu__base-item-hover-class",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".tetris_screens_gameplay-menu__base-item-hover-class{color:#fff;text-shadow:0 0 0.2em #fee;}"], null),cljs.core.PersistentVector.EMPTY);
});
tetris.screens.gameplay_menu.zh_cn = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"solo","solo",-316350075),new cljs.core.Keyword(null,"continue-replay","continue-replay",-72639319),new cljs.core.Keyword(null,"exit-replay","exit-replay",-1961035734),new cljs.core.Keyword(null,"multiplayer","multiplayer",65865898),new cljs.core.Keyword(null,"continue-game","continue-game",392250411),new cljs.core.Keyword(null,"replay","replay",-681122389),new cljs.core.Keyword(null,"marathon","marathon",-845205075),new cljs.core.Keyword(null,"exit-game","exit-game",593091663),new cljs.core.Keyword(null,"controls-options","controls-options",-946934861),new cljs.core.Keyword(null,"back","back",-417520012),new cljs.core.Keyword(null,"gameplay-options","gameplay-options",-559019052),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"back-to-main-menu","back-to-main-menu",-1761306726),new cljs.core.Keyword(null,"40L","40L",-1201601316),new cljs.core.Keyword(null,"classic","classic",-599706370),new cljs.core.Keyword(null,"start-over","start-over",-63976866),new cljs.core.Keyword(null,"audio-options","audio-options",114618367)],["\u5355\u4EBA","\u7EE7\u7EED\u56DE\u653E","\u9000\u51FA\u56DE\u653E","\u591A\u4EBA","\u7EE7\u7EED\u6E38\u620F","\u89C2\u770B\u56DE\u653E","\u9A6C\u62C9\u677E","\u9000\u51FA\u6E38\u620F","\u63A7\u5236","\u8FD4\u56DE","\u6E38\u620F","\u9009\u9879","\u8FD4\u56DE\u5230\u4E3B\u83DC\u5355","40\u884C","\u7ECF\u5178","\u91CD\u65B0\u5F00\u59CB","\u97F3\u9891"]);
tetris.screens.gameplay_menu.enter = (function tetris$screens$gameplay_menu$enter(menu_system,on_update,on_enter){
var item_id = new cljs.core.Keyword(null,"hover","hover",-341141711).cljs$core$IFn$_invoke$arity$1(menu_system);
var item = (function (){var or__5162__auto__ = tetris.screens.menu_system.find_item(menu_system,item_id);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"back","back",-417520012)], null);
}
})();
var trigger_enter = (function (new_state,item__$1){
if(cljs.core.truth_(on_update)){
(on_update.cljs$core$IFn$_invoke$arity$1 ? on_update.cljs$core$IFn$_invoke$arity$1(new_state) : on_update.call(null,new_state));
} else {
}

if(cljs.core.truth_(on_enter)){
return (on_enter.cljs$core$IFn$_invoke$arity$2 ? on_enter.cljs$core$IFn$_invoke$arity$2(item__$1,new_state) : on_enter.call(null,item__$1,new_state));
} else {
return null;
}
});
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(item_id,new cljs.core.Keyword(null,"back","back",-417520012))){
tetris.audio.play(new cljs.core.Keyword(null,"menu-back","menu-back",-1829547847));

return trigger_enter(tetris.screens.menu_system.back_to_parent(menu_system),item);
} else {
if(tetris.screens.menu_system.menu_QMARK_(menu_system,item_id)){
tetris.audio.play(new cljs.core.Keyword(null,"menu-enter","menu-enter",1353675947));

return trigger_enter(tetris.screens.menu_system.enter_hover_menu(menu_system),item);
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"marathon","marathon",-845205075),null,new cljs.core.Keyword(null,"40L","40L",-1201601316),null,new cljs.core.Keyword(null,"classic","classic",-599706370),null,new cljs.core.Keyword(null,"start-over","start-over",-63976866),null], null), null),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item))){
tetris.audio.play(new cljs.core.Keyword(null,"gameplay","gameplay",1251625939));
} else {
}

return trigger_enter(menu_system,item);

}
}
});
tetris.screens.gameplay_menu.trigger_hover = (function tetris$screens$gameplay_menu$trigger_hover(on_update,on_select){
return (function (new_state){
tetris.audio.play(new cljs.core.Keyword(null,"menu-hover","menu-hover",110182816));

if(cljs.core.truth_(on_update)){
(on_update.cljs$core$IFn$_invoke$arity$1 ? on_update.cljs$core$IFn$_invoke$arity$1(new_state) : on_update.call(null,new_state));
} else {
}

if(cljs.core.truth_(on_select)){
return (on_select.cljs$core$IFn$_invoke$arity$1 ? on_select.cljs$core$IFn$_invoke$arity$1(new_state) : on_select.call(null,new_state));
} else {
return null;
}
});
});
tetris.screens.gameplay_menu.menu_overlay = (function tetris$screens$gameplay_menu$menu_overlay(p__39351){
var map__39352 = p__39351;
var map__39352__$1 = cljs.core.__destructure_map(map__39352);
var menu_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39352__$1,new cljs.core.Keyword(null,"menu-items","menu-items",-1870634357));
var default_hover = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39352__$1,new cljs.core.Keyword(null,"default-hover","default-hover",-1411925272));
var menu_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39352__$1,new cljs.core.Keyword(null,"menu-class","menu-class",1740071488));
var menu_item_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39352__$1,new cljs.core.Keyword(null,"menu-item-class","menu-item-class",-1044070437));
var menu_item_hover_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39352__$1,new cljs.core.Keyword(null,"menu-item-hover-class","menu-item-hover-class",667986554));
var on_update = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39352__$1,new cljs.core.Keyword(null,"on-update","on-update",1680216496));
var on_select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39352__$1,new cljs.core.Keyword(null,"on-select","on-select",-192407950));
var on_enter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39352__$1,new cljs.core.Keyword(null,"on-enter","on-enter",-928988216));
var with_let39353 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let39353","with-let39353",1943754484));
var temp__5829__auto___39362 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5829__auto___39362 == null)){
} else {
var c__28895__auto___39363 = temp__5829__auto___39362;
if((with_let39353.generation === c__28895__auto___39363.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error((""+"Warning: The same with-let is being used more "+"than once in the same reactive context."));
} else {
}
} else {
}

(with_let39353.generation = c__28895__auto___39363.ratomGeneration);
}

var init39354 = (with_let39353.length === (0));
var menu = ((((init39354) || (cljs.core.not(with_let39353.hasOwnProperty((0))))))?(with_let39353[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(tetris.screens.menu_system.make_menu_system(menu_items,default_hover))):(with_let39353[(0)]));
var res39355 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"menu-overlay",new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["gameplay-menu",(cljs.core.truth_(menu_class)?(menu_class.cljs$core$IFn$_invoke$arity$0 ? menu_class.cljs$core$IFn$_invoke$arity$0() : menu_class.call(null)):null)], null)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index,item){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.screens.gameplay_menu.base_item_class(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)),(cljs.core.truth_(menu_item_class)?(function (){var G__39356 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item);
return (menu_item_class.cljs$core$IFn$_invoke$arity$1 ? menu_item_class.cljs$core$IFn$_invoke$arity$1(G__39356) : menu_item_class.call(null,G__39356));
})():null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hover","hover",-341141711).cljs$core$IFn$_invoke$arity$1(tetris.screens.gameplay_menu.state),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.screens.gameplay_menu.base_item_hover_class(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)),(cljs.core.truth_(menu_item_hover_class)?(function (){var G__39357 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item);
return (menu_item_hover_class.cljs$core$IFn$_invoke$arity$1 ? menu_item_hover_class.cljs$core$IFn$_invoke$arity$1(G__39357) : menu_item_hover_class.call(null,G__39357));
})():null)], null):null))], null),cljs.core.get.cljs$core$IFn$_invoke$arity$3(tetris.screens.gameplay_menu.zh_cn,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item))], null);
}),tetris.screens.menu_system.show_active_menu_items(tetris.screens.gameplay_menu.state))], null);
return res39355;
});
tetris.screens.gameplay_menu.handle_key_event = (function tetris$screens$gameplay_menu$handle_key_event(menu_system,event,p__39358){
var map__39359 = p__39358;
var map__39359__$1 = cljs.core.__destructure_map(map__39359);
var on_update = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39359__$1,new cljs.core.Keyword(null,"on-update","on-update",1680216496));
var on_select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39359__$1,new cljs.core.Keyword(null,"on-select","on-select",-192407950));
var on_enter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39359__$1,new cljs.core.Keyword(null,"on-enter","on-enter",-928988216));
cljs.core.tap_GT_(menu_system);

var key = event.code;
var trigger_hover = (function (new_state){
tetris.audio.play(new cljs.core.Keyword(null,"menu-hover","menu-hover",110182816));

if(cljs.core.truth_(on_update)){
(on_update.cljs$core$IFn$_invoke$arity$1 ? on_update.cljs$core$IFn$_invoke$arity$1(new_state) : on_update.call(null,new_state));
} else {
}

if(cljs.core.truth_(on_select)){
return (on_select.cljs$core$IFn$_invoke$arity$1 ? on_select.cljs$core$IFn$_invoke$arity$1(new_state) : on_select.call(null,new_state));
} else {
return null;
}
});
var G__39360 = key;
switch (G__39360) {
case "ArrowDown":
return trigger_hover(tetris.screens.menu_system.move_hover(menu_system,(1)));

break;
case "ArrowUp":
return trigger_hover(tetris.screens.menu_system.move_hover(menu_system,(-1)));

break;
case "Escape":
if(cljs.core.truth_(on_update)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(menu_system))){
tetris.audio.play(new cljs.core.Keyword(null,"menu-back","menu-back",-1829547847));
} else {
}

var G__39361 = tetris.screens.menu_system.back_to_parent(menu_system);
return (on_update.cljs$core$IFn$_invoke$arity$1 ? on_update.cljs$core$IFn$_invoke$arity$1(G__39361) : on_update.call(null,G__39361));
} else {
return null;
}

break;
case "Enter":
return tetris.screens.gameplay_menu.enter(menu_system,on_update,on_enter);

break;
default:
return null;

}
});

//# sourceMappingURL=tetris.screens.gameplay_menu.js.map
