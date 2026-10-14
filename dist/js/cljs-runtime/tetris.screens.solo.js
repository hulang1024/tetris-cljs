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
tetris.screens.solo.load_scene = (async function tetris$screens$solo$load_scene(p__39500){
var map__39501 = p__39500;
var map__39501__$1 = cljs.core.__destructure_map(map__39501);
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39501__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
var seed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39501__$1,new cljs.core.Keyword(null,"seed","seed",68613327));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39501__$1,new cljs.core.Keyword(null,"options","options",99638489));
tetris.screens.solo.destroy_scene();

tetris.input.keyboard.init();

(await tetris.assets.load());

cljs.core.reset_BANG_(tetris.screens.solo.pixi_app,(await tetris.scenes.render.pixi_app.init()));

document.body.appendChild(cljs.core.deref(tetris.screens.solo.pixi_app).canvas);

var game_state = tetris.core.tick.initial_game(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(await (async function (){var G__39503 = mode;
var G__39503__$1 = (((G__39503 instanceof cljs.core.Keyword))?G__39503.fqn:null);
switch (G__39503__$1) {
case "marathon":
return tetris.core.ruleset.modern.make_modern_ruleset(seed,(1));

break;
case "classic":
return tetris.core.ruleset.classic.make_classic_ruleset(seed,(0));

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39503__$1))));

}
})()),options], 0)));
return (await tetris.scenes.gameplay.start(cljs.core.deref(tetris.screens.solo.pixi_app),game_state));
});
tetris.screens.screen.init.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"solo","solo",-316350075),(function (_,p__39504){
var map__39505 = p__39504;
var map__39505__$1 = cljs.core.__destructure_map(map__39505);
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39505__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"loading?","loading?",1905707049),true,new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mode","mode",654403691),mode,new cljs.core.Keyword(null,"seed","seed",68613327),(Date.now()),new cljs.core.Keyword(null,"options","options",99638489),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"classic","classic",-599706370)))?tetris.options_store.get_options.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"handling","handling",349360979)):cljs.core.PersistentArrayMap.EMPTY)], null),new cljs.core.Keyword(null,"scene-state","scene-state",-1218243382),null,new cljs.core.Keyword(null,"game-status","game-status",1777284612),new cljs.core.Keyword(null,"playing","playing",70013335)], null);
}));
tetris.screens.screen.on_entering.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"solo","solo",-316350075),(function (this$){
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"marathon","marathon",-845205075),null,new cljs.core.Keyword(null,"classic","classic",-599706370),null], null), null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(this$),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"mode","mode",654403691)], null)))){
var scene_state_promise = tetris.screens.solo.load_scene(new cljs.core.Keyword(null,"settings","settings",1556144875).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(this$)));
return scene_state_promise.then((function (scene_state){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.assoc,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"scene-state","scene-state",-1218243382),scene_state], 0));

return cljs.core.add_watch(scene_state,new cljs.core.Keyword(null,"sync","sync",-624148946),(function (_key,_ref,old,new$){
var listen_keys = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"status","status",-1997798413)], null);
var old__$1 = cljs.core.select_keys(old,listen_keys);
var new$__$1 = cljs.core.select_keys(new$,listen_keys);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old__$1,new$__$1)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(this$,(function (screen){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(screen,new cljs.core.Keyword(null,"game-status","game-status",1777284612),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(new$__$1));
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
tetris.screens.screen.on_suspending.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"solo","solo",-316350075),(function (_){
return goog.style.setStyle(cljs.core.deref(tetris.screens.solo.pixi_app).canvas,({"display": "none"}));
}));
tetris.screens.screen.on_resuming.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"solo","solo",-316350075),(function (_){
return goog.style.setStyle(cljs.core.deref(tetris.screens.solo.pixi_app).canvas,({"display": "block"}));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(new cljs.core.Keyword(null,"loading?","loading?",1905707049).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(this$)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.screens.solo.loading_overlay], null):((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"game-over","game-over",-607322695),null], null), null),new cljs.core.Keyword(null,"game-status","game-status",1777284612).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(this$))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.screens.menu_overlay.menu_overlay,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"menu-items","menu-items",-1870634357),cljs.core.filterv(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"game-status","game-status",1777284612).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(this$)),new cljs.core.Keyword(null,"game-over","game-over",-607322695)))?(function (p1__39512_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__39512_SHARP_),new cljs.core.Keyword(null,"continue-game","continue-game",392250411));
}):cljs.core.identity),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.screens.menu.item.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"start-over","start-over",-63976866),null,(1)),tetris.screens.menu.item.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"continue-game","continue-game",392250411),null,(2)),tetris.screens.menu.item.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"custom-controls","custom-controls",326378259),null,(3)),tetris.screens.menu.item.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"replay","replay",-681122389),null,(4)),tetris.screens.menu.item.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"exit-game","exit-game",593091663),null,(5))], null)),new cljs.core.Keyword(null,"default-hover","default-hover",-1411925272),new cljs.core.Keyword(null,"continue-game","continue-game",392250411),new cljs.core.Keyword(null,"on-enter","on-enter",-928988216),(function (item){
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"start-over","start-over",-63976866),null], null), null),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item))){
tetris.audio.play(new cljs.core.Keyword(null,"gameplay","gameplay",1251625939));
} else {
}

var G__39515 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item);
var G__39515__$1 = (((G__39515 instanceof cljs.core.Keyword))?G__39515.fqn:null);
switch (G__39515__$1) {
case "continue-game":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,new cljs.core.Keyword(null,"game-status","game-status",1777284612),new cljs.core.Keyword(null,"playing","playing",70013335));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"scene-state","scene-state",-1218243382).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(this$)),cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"playing","playing",70013335));

break;
case "start-over":
return tetris.screens.screen_stack.replace_screen_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"solo","solo",-316350075),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(new cljs.core.Keyword(null,"settings","settings",1556144875).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(this$)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mode","mode",654403691)], null))], 0));

break;
case "custom-controls":
return tetris.screens.screen_stack.push_screen_BANG_(new cljs.core.Keyword(null,"controls-options","controls-options",-946934861));

break;
case "exit-game":
return tetris.screens.screen_stack.pop_screen_BANG_();

break;
case "replay":
return tetris.screens.screen_stack.push_screen_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"replay","replay",-681122389),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"settings","settings",1556144875).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(this$)),new cljs.core.Keyword(null,"replay-events","replay-events",-2101822394),new cljs.core.Keyword(null,"replay-recorder","replay-recorder",1814455308).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"scene-state","scene-state",-1218243382).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(this$)))))], 0));

break;
default:
return null;

}
}),new cljs.core.Keyword(null,"menu-class","menu-class",1740071488),tetris.screens.solo.gameplay_menu_class], null)], null):null
))], null);
}));
tetris.screens.screen.on_keydown.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"solo","solo",-316350075),(function (this$,event){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event.code,"Escape")){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"scene-state","scene-state",-1218243382).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(this$)))),new cljs.core.Keyword(null,"game-over","game-over",-607322695))){
tetris.screens.screen_stack.pop_screen_BANG_();
} else {
var map__39522_39526 = cljs.core.deref(this$);
var map__39522_39527__$1 = cljs.core.__destructure_map(map__39522_39526);
var game_status_39528 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39522_39527__$1,new cljs.core.Keyword(null,"game-status","game-status",1777284612));
var new_game_status_39529 = (function (){var G__39523 = game_status_39528;
var G__39523__$1 = (((G__39523 instanceof cljs.core.Keyword))?G__39523.fqn:null);
switch (G__39523__$1) {
case "playing":
return new cljs.core.Keyword(null,"pause","pause",-2095325672);

break;
case "pause":
return new cljs.core.Keyword(null,"playing","playing",70013335);

break;
default:
return game_status_39528;

}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,new cljs.core.Keyword(null,"game-status","game-status",1777284612),new_game_status_39529);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"scene-state","scene-state",-1218243382).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(this$)),cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new_game_status_39529);
}
} else {
}

return true;
}));

//# sourceMappingURL=tetris.screens.solo.js.map
