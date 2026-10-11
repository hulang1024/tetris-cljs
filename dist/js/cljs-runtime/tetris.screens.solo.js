goog.provide('tetris.screens.solo');
tetris.screens.solo.pixi_app = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
tetris.screens.solo.destroy_scene = (function tetris$screens$solo$destroy_scene(){
if(cljs.core.truth_(cljs.core.deref(tetris.screens.solo.pixi_app))){
tetris.scenes.gameplay.destroy();

cljs.core.deref(tetris.screens.solo.pixi_app).destroy(({"removeView": true}));

return cljs.core.reset_BANG_(tetris.screens.solo.pixi_app,null);
} else {
return null;
}
});
tetris.screens.solo.load_scene = (async function tetris$screens$solo$load_scene(mode){
tetris.screens.solo.destroy_scene();

tetris.input.keyboard.init();

(await tetris.assets.load());

cljs.core.reset_BANG_(tetris.screens.solo.pixi_app,(await tetris.scenes.render.pixi_app.init()));

document.body.appendChild(cljs.core.deref(tetris.screens.solo.pixi_app).canvas);

var seed = (Date.now());
var game_state = tetris.core.tick.initial_game((await (async function (){var G__44996 = mode;
var G__44996__$1 = (((G__44996 instanceof cljs.core.Keyword))?G__44996.fqn:null);
switch (G__44996__$1) {
case "marathon":
return tetris.core.ruleset.modern.make_modern_ruleset(seed,(1));

break;
case "classic":
return tetris.core.ruleset.classic.make_classic_ruleset(seed,(0));

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44996__$1))));

}
})()));
return (await tetris.scenes.gameplay.start(cljs.core.deref(tetris.screens.solo.pixi_app),game_state));
});
tetris.screens.screen.init.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"solo","solo",-316350075),(function (_,p__44999){
var map__45000 = p__44999;
var map__45000__$1 = cljs.core.__destructure_map(map__45000);
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45000__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
var screen_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"loading?","loading?",1905707049),true,new cljs.core.Keyword(null,"mode","mode",654403691),mode,new cljs.core.Keyword(null,"scene-state","scene-state",-1218243382),null,new cljs.core.Keyword(null,"game-status","game-status",1777284612),new cljs.core.Keyword(null,"playing","playing",70013335)], null));
var pause_menu = tetris.screens.menu_system.make_menu_system(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.screens.menu_system.item(new cljs.core.Keyword(null,"start-over","start-over",-63976866),null,(1)),tetris.screens.menu_system.item(new cljs.core.Keyword(null,"continue-game","continue-game",392250411),null,(2)),tetris.screens.menu_system.item(new cljs.core.Keyword(null,"exit-game","exit-game",593091663),null,(3))], null),new cljs.core.Keyword(null,"start-over","start-over",-63976866));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(screen_state,cljs.core.assoc,new cljs.core.Keyword(null,"pause-menu","pause-menu",90639603),pause_menu);
}));
tetris.screens.screen.on_entering.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"solo","solo",-316350075),(function (this$){
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"marathon","marathon",-845205075),null,new cljs.core.Keyword(null,"classic","classic",-599706370),null], null), null),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(this$)))){
var scene_state_promise = tetris.screens.solo.load_scene(new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(this$)));
return scene_state_promise.then((function (scene_state){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.assoc,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"scene-state","scene-state",-1218243382),scene_state], 0));

return cljs.core.add_watch(scene_state,new cljs.core.Keyword(null,"sync","sync",-624148946),(function (_key,_ref,old,new$){
var listen_keys = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"status","status",-1997798413)], null);
var old__$1 = cljs.core.select_keys(old,listen_keys);
var new$__$1 = cljs.core.select_keys(new$,listen_keys);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old__$1,new$__$1)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(this$,(function (screen){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(screen,new cljs.core.Keyword(null,"game-status","game-status",1777284612),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(new$__$1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pause-menu","pause-menu",90639603),cljs.core.update.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"pause-menu","pause-menu",90639603).cljs$core$IFn$_invoke$arity$1(screen),new cljs.core.Keyword(null,"items","items",1031954938),(function (p1__45001_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (item){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(item,new cljs.core.Keyword(null,"visible?","visible?",2129863715),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(new$__$1),new cljs.core.Keyword(null,"pause","pause",-2095325672))) || (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exit-game","exit-game",593091663),null,new cljs.core.Keyword(null,"start-over","start-over",-63976866),null], null), null),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)))));
}),p1__45001_SHARP_);
}))], 0));
}));
} else {
return null;
}
}));
}));
} else {
return null;
}
}));
tetris.screens.screen.on_exiting.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"solo","solo",-316350075),(function (){
return tetris.screens.solo.destroy_scene();
}));
tetris.screens.solo.gameplay_menu_class = (function tetris$screens$solo$gameplay_menu_class(){
return cljss.core.css("tetris_screens_solo__gameplay-menu-class",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".tetris_screens_solo__gameplay-menu-class{background:rgba(0, 0, 0, 0.6);backdrop-filter:blur(0.1em);padding:1em 2em;}"], null),cljs.core.PersistentVector.EMPTY);
});
tetris.screens.solo.loading_overlay = (function tetris$screens$solo$loading_overlay(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),(3),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(24)], null)], null),"\u52A0\u8F7D\u4E2D..."], null);
});
tetris.screens.screen.render.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"solo","solo",-316350075),(function (this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(new cljs.core.Keyword(null,"loading?","loading?",1905707049).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(this$)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.screens.solo.loading_overlay], null):(function (){var G__45004 = new cljs.core.Keyword(null,"game-status","game-status",1777284612).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(this$));
var G__45004__$1 = (((G__45004 instanceof cljs.core.Keyword))?G__45004.fqn:null);
switch (G__45004__$1) {
case "pause":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.screens.gameplay_menu.menu_overlay,new cljs.core.Keyword(null,"pause-menu","pause-menu",90639603).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(this$)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"menu-class","menu-class",1740071488),tetris.screens.solo.gameplay_menu_class], null)], null);

break;
case "game-over":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.screens.gameplay_menu.menu_overlay,new cljs.core.Keyword(null,"pause-menu","pause-menu",90639603).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(this$)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"menu-class","menu-class",1740071488),tetris.screens.solo.gameplay_menu_class], null)], null);

break;
default:
return null;

}
})()
)], null);
}));
tetris.screens.screen.on_keydown.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"solo","solo",-316350075),(function (this$,event){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event.code,"Escape")){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"scene-state","scene-state",-1218243382).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(this$)))),new cljs.core.Keyword(null,"game-over","game-over",-607322695))){
tetris.screens.screen_stack.pop_screen_BANG_();
} else {
var map__45006_45014 = cljs.core.deref(this$);
var map__45006_45015__$1 = cljs.core.__destructure_map(map__45006_45014);
var game_status_45016 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45006_45015__$1,new cljs.core.Keyword(null,"game-status","game-status",1777284612));
var pause_menu_45017 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45006_45015__$1,new cljs.core.Keyword(null,"pause-menu","pause-menu",90639603));
var new_game_status_45018 = (function (){var G__45007 = game_status_45016;
var G__45007__$1 = (((G__45007 instanceof cljs.core.Keyword))?G__45007.fqn:null);
switch (G__45007__$1) {
case "playing":
return new cljs.core.Keyword(null,"pause","pause",-2095325672);

break;
case "pause":
return new cljs.core.Keyword(null,"playing","playing",70013335);

break;
default:
return game_status_45016;

}
})();
var changed_QMARK__45019 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(game_status_45016,new_game_status_45018);
var pause_menu_45020__$1 = ((changed_QMARK__45019)?tetris.screens.menu_system.hover_first(pause_menu_45017):pause_menu_45017);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.assoc,new cljs.core.Keyword(null,"game-status","game-status",1777284612),new_game_status_45018,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pause-menu","pause-menu",90639603),pause_menu_45020__$1], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"scene-state","scene-state",-1218243382).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(this$)),cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new_game_status_45018);
}
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"game-status","game-status",1777284612).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(this$)),new cljs.core.Keyword(null,"playing","playing",70013335))){
tetris.screens.gameplay_menu.handle_key_event(new cljs.core.Keyword(null,"pause-menu","pause-menu",90639603).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(this$)),event,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-update","on-update",1680216496),(function (p1__45005_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,new cljs.core.Keyword(null,"pause-menu","pause-menu",90639603),p1__45005_SHARP_);
}),new cljs.core.Keyword(null,"on-enter","on-enter",-928988216),(function (item){
var G__45008 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item);
var G__45008__$1 = (((G__45008 instanceof cljs.core.Keyword))?G__45008.fqn:null);
switch (G__45008__$1) {
case "continue-game":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,new cljs.core.Keyword(null,"game-status","game-status",1777284612),new cljs.core.Keyword(null,"playing","playing",70013335));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"scene-state","scene-state",-1218243382).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(this$)),cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"playing","playing",70013335));

break;
case "start-over":
return tetris.screens.screen_stack.replace_screen_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"solo","solo",-316350075),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(cljs.core.deref(this$),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mode","mode",654403691)], null))], 0));

break;
case "exit-game":
return tetris.screens.screen_stack.pop_screen_BANG_();

break;
case "replay":
return tetris.screens.screen_stack.replace_screen_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"replay","replay",-681122389),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(this$),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"options","options",99638489)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(this$),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scene-state","scene-state",-1218243382),new cljs.core.Keyword(null,"replay-recorder","replay-recorder",1814455308)], null))], 0));

break;
default:
return null;

}
})], null));
} else {
}

return true;
}));

//# sourceMappingURL=tetris.screens.solo.js.map
