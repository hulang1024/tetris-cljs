goog.provide('tetris.screens.gameplay_menu');
tetris.screens.gameplay_menu.base_item_class = (function tetris$screens$gameplay_menu$base_item_class(item_id){
return cljss.core.css("tetris_screens_gameplay-menu__base-item-class",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".tetris_screens_gameplay-menu__base-item-class{padding:8px 0;font-size:24px;text-align:center;color:#aaa;}"], null),cljs.core.PersistentVector.EMPTY);
});
tetris.screens.gameplay_menu.base_item_hover_class = (function tetris$screens$gameplay_menu$base_item_hover_class(item_id){
return cljss.core.css("tetris_screens_gameplay-menu__base-item-hover-class",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".tetris_screens_gameplay-menu__base-item-hover-class{color:#fff;text-shadow:0 0 2px #fee;}"], null),cljs.core.PersistentVector.EMPTY);
});
tetris.screens.gameplay_menu.zh_cn = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"solo","solo",-316350075),new cljs.core.Keyword(null,"exit","exit",351849638),new cljs.core.Keyword(null,"multiplayer","multiplayer",65865898),new cljs.core.Keyword(null,"continue-game","continue-game",392250411),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"marathon","marathon",-845205075),new cljs.core.Keyword(null,"gameplay","gameplay",1251625939),new cljs.core.Keyword(null,"back","back",-417520012),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"audio","audio",1819127321),new cljs.core.Keyword(null,"back-to-main-menu","back-to-main-menu",-1761306726),new cljs.core.Keyword(null,"40L","40L",-1201601316),new cljs.core.Keyword(null,"classic","classic",-599706370),new cljs.core.Keyword(null,"start-over","start-over",-63976866)],["\u5355\u4EBA","\u9000\u51FA\u6E38\u620F","\u591A\u4EBA","\u7EE7\u7EED\u6E38\u620F","\u63A7\u5236","\u9A6C\u62C9\u677E","\u6E38\u620F","\u8FD4\u56DE","\u9009\u9879","\u97F3\u9891","\u8FD4\u56DE\u5230\u4E3B\u83DC\u5355","40\u884C","\u7ECF\u5178","\u91CD\u65B0\u5F00\u59CB"]);
tetris.screens.gameplay_menu.menu_overlay = (function tetris$screens$gameplay_menu$menu_overlay(state,p__43737){
var map__43738 = p__43737;
var map__43738__$1 = cljs.core.__destructure_map(map__43738);
var menu_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43738__$1,new cljs.core.Keyword(null,"menu-class","menu-class",1740071488));
var menu_item_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43738__$1,new cljs.core.Keyword(null,"menu-item-class","menu-item-class",-1044070437));
var menu_item_hover_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43738__$1,new cljs.core.Keyword(null,"menu-item-hover-class","menu-item-hover-class",667986554));
cljs.core.tap_GT_(tetris.screens.menu_system.show_active_menu_items(state));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["gameplay-menu",(cljs.core.truth_(menu_class)?(menu_class.cljs$core$IFn$_invoke$arity$0 ? menu_class.cljs$core$IFn$_invoke$arity$0() : menu_class.call(null)):null)], null)], null),(new cljs.core.List(null,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (item){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.screens.gameplay_menu.base_item_class(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)),(cljs.core.truth_(menu_item_class)?(function (){var G__43739 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item);
return (menu_item_class.cljs$core$IFn$_invoke$arity$1 ? menu_item_class.cljs$core$IFn$_invoke$arity$1(G__43739) : menu_item_class.call(null,G__43739));
})():null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hover","hover",-341141711).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.screens.gameplay_menu.base_item_hover_class(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)),(cljs.core.truth_(menu_item_hover_class)?(function (){var G__43740 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item);
return (menu_item_hover_class.cljs$core$IFn$_invoke$arity$1 ? menu_item_hover_class.cljs$core$IFn$_invoke$arity$1(G__43740) : menu_item_hover_class.call(null,G__43740));
})():null)], null):null))], null),cljs.core.get.cljs$core$IFn$_invoke$arity$3(tetris.screens.gameplay_menu.zh_cn,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item))], null);
}),tetris.screens.menu_system.show_active_menu_items(state)),null,(1),null))], null);
});
tetris.screens.gameplay_menu.handle_key_event = (function tetris$screens$gameplay_menu$handle_key_event(menu_system,event,p__43741){
var map__43742 = p__43741;
var map__43742__$1 = cljs.core.__destructure_map(map__43742);
var on_update = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43742__$1,new cljs.core.Keyword(null,"on-update","on-update",1680216496));
var on_select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43742__$1,new cljs.core.Keyword(null,"on-select","on-select",-192407950));
var on_enter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43742__$1,new cljs.core.Keyword(null,"on-enter","on-enter",-928988216));
cljs.core.tap_GT_(menu_system);

var key = event.code;
var trigger_select = (function (new_state){
tetris.audio.play(new cljs.core.Keyword(null,"menu-select","menu-select",494064095));

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
var trigger_enter = (function (new_state,item){
tetris.audio.play(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"action","action",-811238024)], null)),new cljs.core.Keyword(null,"play","play",-580418022)))?new cljs.core.Keyword(null,"menu-play","menu-play",-578560836):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"back","back",-417520012)))?new cljs.core.Keyword(null,"menu-back","menu-back",-1829547847):new cljs.core.Keyword(null,"menu-select","menu-select",494064095)
)));

if(cljs.core.truth_(on_update)){
(on_update.cljs$core$IFn$_invoke$arity$1 ? on_update.cljs$core$IFn$_invoke$arity$1(new_state) : on_update.call(null,new_state));
} else {
}

if(cljs.core.truth_(on_enter)){
return (on_enter.cljs$core$IFn$_invoke$arity$2 ? on_enter.cljs$core$IFn$_invoke$arity$2(item,new_state) : on_enter.call(null,item,new_state));
} else {
return null;
}
});
var G__43743 = key;
switch (G__43743) {
case "ArrowDown":
return trigger_select(tetris.screens.menu_system.select(menu_system,(1)));

break;
case "ArrowUp":
return trigger_select(tetris.screens.menu_system.select(menu_system,(-1)));

break;
case "Escape":
return trigger_select(tetris.screens.menu_system.back_to_parent(menu_system));

break;
case "Enter":
var item_id = new cljs.core.Keyword(null,"hover","hover",-341141711).cljs$core$IFn$_invoke$arity$1(menu_system);
var item = (function (){var or__5162__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(menu_system),item_id);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"back","back",-417520012)], null);
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(item_id,new cljs.core.Keyword(null,"back","back",-417520012))){
return trigger_enter(tetris.screens.menu_system.back_to_parent(menu_system),item);
} else {
if(tetris.screens.menu_system.menu_QMARK_(menu_system,item_id)){
return trigger_enter(tetris.screens.menu_system.enter_hover_menu(menu_system),item);
} else {
return trigger_enter(menu_system,item);

}
}

break;
default:
return null;

}
});

//# sourceMappingURL=tetris.screens.gameplay_menu.js.map
