goog.provide('tetris.screens.replay');
tetris.screens.replay.pixi_app = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
tetris.screens.replay.destroy_scene = (function tetris$screens$replay$destroy_scene(){
if(cljs.core.truth_(cljs.core.deref(tetris.screens.replay.pixi_app))){
cljs.core.deref(tetris.screens.replay.pixi_app).destroy(({"removeView": true}));

return cljs.core.reset_BANG_(tetris.screens.replay.pixi_app,null);
} else {
return null;
}
});
tetris.screens.replay.load_scene = (async function tetris$screens$replay$load_scene(p__45543){
var map__45546 = p__45543;
var map__45546__$1 = cljs.core.__destructure_map(map__45546);
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45546__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
var seed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45546__$1,new cljs.core.Keyword(null,"seed","seed",68613327));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45546__$1,new cljs.core.Keyword(null,"options","options",99638489));
var replay_events = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45546__$1,new cljs.core.Keyword(null,"replay-events","replay-events",-2101822394));
tetris.screens.replay.destroy_scene();

tetris.input.keyboard.init();

(await tetris.assets.load());

cljs.core.reset_BANG_(tetris.screens.replay.pixi_app,(await tetris.scenes.render.pixi_app.init()));

document.body.appendChild(cljs.core.deref(tetris.screens.replay.pixi_app).canvas);

var game_state = tetris.core.tick.initial_game(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(await (async function (){var G__45549 = mode;
var G__45549__$1 = (((G__45549 instanceof cljs.core.Keyword))?G__45549.fqn:null);
switch (G__45549__$1) {
case "marathon":
return tetris.core.ruleset.modern.make_modern_ruleset(seed,(1));

break;
case "classic":
return tetris.core.ruleset.classic.make_classic_ruleset(seed,(0));

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45549__$1))));

}
})()),options], 0)));
return (await tetris.scenes.replay.start(cljs.core.deref(tetris.screens.replay.pixi_app),game_state,replay_events));
});
tetris.screens.screen.init.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"replay","replay",-681122389),(function (_,replay){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"loading?","loading?",1905707049),true,new cljs.core.Keyword(null,"replay","replay",-681122389),replay,new cljs.core.Keyword(null,"scene-state","scene-state",-1218243382),null,new cljs.core.Keyword(null,"game-status","game-status",1777284612),new cljs.core.Keyword(null,"playing","playing",70013335)], null);
}));
tetris.screens.screen.on_entering.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"replay","replay",-681122389),(function (this$){
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"marathon","marathon",-845205075),null,new cljs.core.Keyword(null,"classic","classic",-599706370),null], null), null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(this$),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replay","replay",-681122389),new cljs.core.Keyword(null,"mode","mode",654403691)], null)))){
var scene_state_promise = tetris.screens.replay.load_scene(new cljs.core.Keyword(null,"replay","replay",-681122389).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(this$)));
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
tetris.screens.screen.on_exiting.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"replay","replay",-681122389),(function (){
return tetris.screens.replay.destroy_scene();
}));
tetris.screens.replay.gameplay_menu_class = (function tetris$screens$replay$gameplay_menu_class(){
return cljss.core.css("tetris_screens_replay__gameplay-menu-class",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".tetris_screens_replay__gameplay-menu-class{background:rgba(0, 0, 0, 0.6);backdrop-filter:blur(0.1em);padding:1em 2em;}"], null),cljs.core.PersistentVector.EMPTY);
});
tetris.screens.replay.loading_overlay = (function tetris$screens$replay$loading_overlay(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),(3),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(24)], null)], null),"\u52A0\u8F7D\u4E2D..."], null);
});
tetris.screens.screen.render.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"replay","replay",-681122389),(function (this$){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),"1rem"], null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"game-status","game-status",1777284612).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(this$)),new cljs.core.Keyword(null,"ended","ended",-1604650650)))?"\u56DE\u653E\u7ED3\u675F":"\u56DE\u653E\u4E2D")], null),(cljs.core.truth_(new cljs.core.Keyword(null,"loading?","loading?",1905707049).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(this$)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.screens.replay.loading_overlay], null):((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ended","ended",-1604650650),null,new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"game-over","game-over",-607322695),null], null), null),new cljs.core.Keyword(null,"game-status","game-status",1777284612).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(this$))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.screens.menu_overlay.menu_overlay,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"menu-items","menu-items",-1870634357),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.screens.menu.item.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"start-over","start-over",-63976866),null,(1)),tetris.screens.menu.item.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"continue-replay","continue-replay",-72639319),null,(2)),tetris.screens.menu.item.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"exit-replay","exit-replay",-1961035734),null,(3))], null),new cljs.core.Keyword(null,"default-hover","default-hover",-1411925272),new cljs.core.Keyword(null,"exit-replay","exit-replay",-1961035734),new cljs.core.Keyword(null,"on-enter","on-enter",-928988216),(function (item){
var G__45554 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item);
var G__45554__$1 = (((G__45554 instanceof cljs.core.Keyword))?G__45554.fqn:null);
switch (G__45554__$1) {
case "continue-replay":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,new cljs.core.Keyword(null,"game-status","game-status",1777284612),new cljs.core.Keyword(null,"playing","playing",70013335));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"scene-state","scene-state",-1218243382).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(this$)),cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"playing","playing",70013335));

break;
case "start-over":
return tetris.screens.screen_stack.replace_screen_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"replay","replay",-681122389),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(new cljs.core.Keyword(null,"replay","replay",-681122389).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(this$)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"seed","seed",68613327),new cljs.core.Keyword(null,"replay-events","replay-events",-2101822394)], null))], 0));

break;
case "exit-replay":
return tetris.screens.screen_stack.pop_screen_BANG_();

break;
default:
return null;

}
}),new cljs.core.Keyword(null,"menu-class","menu-class",1740071488),tetris.screens.replay.gameplay_menu_class], null)], null):null
))], null);
}));
tetris.screens.screen.on_keydown.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"replay","replay",-681122389),(function (this$,event){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event.code,"Escape")){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"scene-state","scene-state",-1218243382).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(this$)))),new cljs.core.Keyword(null,"game-over","game-over",-607322695))){
tetris.screens.screen_stack.pop_screen_BANG_();
} else {
var map__45556_45563 = cljs.core.deref(this$);
var map__45556_45564__$1 = cljs.core.__destructure_map(map__45556_45563);
var game_status_45565 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45556_45564__$1,new cljs.core.Keyword(null,"game-status","game-status",1777284612));
var new_game_status_45566 = (function (){var G__45557 = game_status_45565;
var G__45557__$1 = (((G__45557 instanceof cljs.core.Keyword))?G__45557.fqn:null);
switch (G__45557__$1) {
case "playing":
return new cljs.core.Keyword(null,"pause","pause",-2095325672);

break;
case "pause":
return new cljs.core.Keyword(null,"playing","playing",70013335);

break;
default:
return game_status_45565;

}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,new cljs.core.Keyword(null,"game-status","game-status",1777284612),new_game_status_45566);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"scene-state","scene-state",-1218243382).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(this$)),cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new_game_status_45566);
}
} else {
}

return true;
}));

//# sourceMappingURL=tetris.screens.replay.js.map
