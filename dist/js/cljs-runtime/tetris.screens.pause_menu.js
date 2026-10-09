goog.provide('tetris.screens.pause_menu');
tetris.screens.pause_menu.class_menu_item = (function tetris$screens$pause_menu$class_menu_item(id){
return cljss.core.css("tetris_screens_pause-menu__class-menu-item",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".tetris_screens_pause-menu__class-menu-item{padding:8px 0;font-size:24px;text-align:center;color:#aaa;margin-top:var(--var-tetris_screens_pause-menu__class-menu-item-0);}"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--var-tetris_screens_pause-menu__class-menu-item-0",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"back","back",-417520012)))?(16):(0))], null)], null));
});
tetris.screens.pause_menu.class_hover = (function tetris$screens$pause_menu$class_hover(){
return cljss.core.css("tetris_screens_pause-menu__class-hover",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".tetris_screens_pause-menu__class-hover{color:#fff;text-shadow:0 0 2px #fee;}"], null),cljs.core.PersistentVector.EMPTY);
});
tetris.screens.pause_menu.zh_cn = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"back","back",-417520012),"\u7EE7\u7EED",new cljs.core.Keyword(null,"start-over","start-over",-63976866),"\u91CD\u65B0\u5F00\u59CB",new cljs.core.Keyword(null,"back-to-main-menu","back-to-main-menu",-1761306726),"\u8FD4\u56DE\u5230\u4E3B\u83DC\u5355"], null);
tetris.screens.pause_menu.menu_overlay = (function tetris$screens$pause_menu$menu_overlay(state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(new cljs.core.List(null,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (item_id){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),item_id,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.screens.pause_menu.class_menu_item(item_id),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hover","hover",-341141711).cljs$core$IFn$_invoke$arity$1(state),item_id))?tetris.screens.pause_menu.class_hover():null)], null)], null),cljs.core.get.cljs$core$IFn$_invoke$arity$3(tetris.screens.pause_menu.zh_cn,item_id,cljs.core.name(item_id))], null);
}),tetris.screens.menu_system.show_active_menu_items(state)),null,(1),null))], null);
});
tetris.screens.pause_menu.on_keydown = (function tetris$screens$pause_menu$on_keydown(state,event,on_enter){
var key = event.code;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"ArrowDown")){
return tetris.screens.menu_system.select(state,(1));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"ArrowUp")){
return tetris.screens.menu_system.select(state,(-1));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"Escape")){
return (on_enter.cljs$core$IFn$_invoke$arity$1 ? on_enter.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"cancel","cancel",-1964088360)) : on_enter.call(null,new cljs.core.Keyword(null,"cancel","cancel",-1964088360)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"Enter")){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hover","hover",-341141711).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"back","back",-417520012))){
return tetris.screens.menu_system.back_to_parent(state);
} else {
var G__40493 = new cljs.core.Keyword(null,"hover","hover",-341141711).cljs$core$IFn$_invoke$arity$1(state);
var G__40493__$1 = (((G__40493 instanceof cljs.core.Keyword))?G__40493.fqn:null);
switch (G__40493__$1) {
case "back-to-main-menu":
return tetris.screens.screen_stack.enter(new cljs.core.Keyword(null,"main-menu","main-menu",-1471790381));

break;
default:
var G__40494 = new cljs.core.Keyword(null,"hover","hover",-341141711).cljs$core$IFn$_invoke$arity$1(state);
return (on_enter.cljs$core$IFn$_invoke$arity$1 ? on_enter.cljs$core$IFn$_invoke$arity$1(G__40494) : on_enter.call(null,G__40494));

}

}
} else {
return null;
}
}
}
}
});

//# sourceMappingURL=tetris.screens.pause_menu.js.map
