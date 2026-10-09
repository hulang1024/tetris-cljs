goog.provide('tetris.scenes.gameplay');
tetris.scenes.gameplay.initial_scene = (function tetris$scenes$gameplay$initial_scene(game_state){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"game-state","game-state",935682735),game_state,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"playing","playing",70013335),new cljs.core.Keyword(null,"replay-recorder","replay-recorder",1814455308),tetris.core.replay.make_recorder(),new cljs.core.Keyword(null,"game-view","game-view",460733246),null,new cljs.core.Keyword(null,"app","app",-560961707),null], null);
});
tetris.scenes.gameplay.scene_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
tetris.scenes.gameplay.tick = (function tetris$scenes$gameplay$tick(){
var pressed_buttons = tetris.input.keyboard.key__GT_buttons(cljs.core.deref(tetris.input.keyboard.pressed_keys));
var input_state = tetris.input.keyboard.handle(pressed_buttons);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tetris.scenes.gameplay.scene_state,(function (scene_state){
var map__47440 = scene_state;
var map__47440__$1 = cljs.core.__destructure_map(map__47440);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47440__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var game_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47440__$1,new cljs.core.Keyword(null,"game-state","game-state",935682735));
var G__47442 = status;
var G__47442__$1 = (((G__47442 instanceof cljs.core.Keyword))?G__47442.fqn:null);
switch (G__47442__$1) {
case "game-over":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(scene_state,new cljs.core.Keyword(null,"game-state","game-state",935682735),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game_state,new cljs.core.Keyword(null,"events","events",1792552201),cljs.core.PersistentVector.EMPTY));

break;
case "playing":
var game_state__$1 = tetris.core.tick.step(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game_state,new cljs.core.Keyword(null,"events","events",1792552201),cljs.core.PersistentVector.EMPTY),input_state);
var status__$1 = (cljs.core.truth_(tetris.core.game.find_event(new cljs.core.Keyword(null,"game-over","game-over",-607322695),new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(game_state__$1)))?new cljs.core.Keyword(null,"game-over","game-over",-607322695):status);
if(cljs.core.truth_((function (){var and__5160__auto__ = new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(game_state__$1);
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core.seq(new cljs.core.Keyword(null,"pressed-buttons","pressed-buttons",1426560090).cljs$core$IFn$_invoke$arity$1(input_state));
} else {
return and__5160__auto__;
}
})())){
cljs.core.tap_GT_((""+"recording - "+"frame#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(game_state__$1))+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_state)));
} else {
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(scene_state,new cljs.core.Keyword(null,"status","status",-1997798413),status__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"game-state","game-state",935682735),game_state__$1,new cljs.core.Keyword(null,"replay-recorder","replay-recorder",1814455308),tetris.core.replay.append_record(new cljs.core.Keyword(null,"replay-recorder","replay-recorder",1814455308).cljs$core$IFn$_invoke$arity$1(scene_state),new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(game_state__$1),pressed_buttons)], 0));

break;
default:
return scene_state;

}
}));

tetris.scenes.debug.draw_debug(cljs.core.deref(tetris.scenes.gameplay.scene_state));

var map__47459 = cljs.core.deref(tetris.scenes.gameplay.scene_state);
var map__47459__$1 = cljs.core.__destructure_map(map__47459);
var game_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47459__$1,new cljs.core.Keyword(null,"game-state","game-state",935682735));
var game_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47459__$1,new cljs.core.Keyword(null,"game-view","game-view",460733246));
tetris.scenes.render.gameplay.game_view.render_BANG_(game_view,game_state,input_state);

return tetris.scenes.render.gameplay.sound_effect.handle(game_state);
});
tetris.scenes.gameplay.start = (async function tetris$scenes$gameplay$start(app,game_state){
var options = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([game_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"piece-style","piece-style",-1354956371),"b11"], null)], 0));
(await tetris.assets.load_piece_styles(new cljs.core.Keyword(null,"piece-style","piece-style",-1354956371).cljs$core$IFn$_invoke$arity$1(options)));

var view = tetris.scenes.render.gameplay.game_view.create(options);
app.stage.addChild(new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1(view));

cljs.core.reset_BANG_(tetris.scenes.gameplay.scene_state,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(tetris.scenes.gameplay.initial_scene(game_state),new cljs.core.Keyword(null,"game-view","game-view",460733246),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(view),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"app","app",-560961707),app], 0)));

app.ticker.add(tetris.scenes.gameplay.tick);

tetris.scenes.debug.toggle(true);

return tetris.scenes.gameplay.scene_state;
});
tetris.scenes.gameplay.destroy = (function tetris$scenes$gameplay$destroy(){
return tetris.scenes.debug.toggle(false);
});

//# sourceMappingURL=tetris.scenes.gameplay.js.map
