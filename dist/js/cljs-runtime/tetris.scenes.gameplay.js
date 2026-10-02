goog.provide('tetris.scenes.gameplay');
tetris.scenes.gameplay.initial_scene = (function tetris$scenes$gameplay$initial_scene(){
var state = tetris.core.game.initial_state(tetris.core.tick.initial_state(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tetris.core.ruleset.modern.modern_ruleset,new cljs.core.Keyword(null,"speed-level","speed-level",-256559849),(1))));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"input-state","input-state",-2018653626),tetris.core.input.initial_state(),new cljs.core.Keyword(null,"game-status","game-status",1777284612),new cljs.core.Keyword(null,"playing","playing",70013335),new cljs.core.Keyword(null,"game-state","game-state",935682735),state,new cljs.core.Keyword(null,"game-view","game-view",460733246),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)], null);
});
tetris.scenes.gameplay.reset_scene = (function tetris$scenes$gameplay$reset_scene(input_state,game_view){
cljs.core.tap_GT_("reset scene");

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(tetris.scenes.gameplay.initial_scene(),new cljs.core.Keyword(null,"input-state","input-state",-2018653626),input_state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"game-view","game-view",460733246),game_view], 0));
});
tetris.scenes.gameplay.scene_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(tetris.scenes.gameplay.initial_scene());
tetris.scenes.gameplay.tick = (function tetris$scenes$gameplay$tick(_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tetris.scenes.gameplay.scene_state,(function (scene_state){
var map__37252 = scene_state;
var map__37252__$1 = cljs.core.__destructure_map(map__37252);
var input_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37252__$1,new cljs.core.Keyword(null,"input-state","input-state",-2018653626));
var game_status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37252__$1,new cljs.core.Keyword(null,"game-status","game-status",1777284612));
var game_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37252__$1,new cljs.core.Keyword(null,"game-state","game-state",935682735));
var game_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37252__$1,new cljs.core.Keyword(null,"game-view","game-view",460733246));
var pressed_buttons = tetris.input.keyboard.key__GT_buttons(cljs.core.deref(tetris.input.keyboard.pressed_keys));
var input_state__$1 = tetris.core.input.handle(input_state,pressed_buttons);
var ok_pressed_QMARK_ = cljs.core.some((function (p1__37246_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ok","ok",967785236),p1__37246_SHARP_);
}),new cljs.core.Keyword(null,"just-pressed-buttons","just-pressed-buttons",1411625590).cljs$core$IFn$_invoke$arity$1(input_state__$1));
var prev_game_status = game_status;
var game_status__$1 = (cljs.core.truth_(ok_pressed_QMARK_)?(function (){var G__37253 = game_status;
var G__37253__$1 = (((G__37253 instanceof cljs.core.Keyword))?G__37253.fqn:null);
switch (G__37253__$1) {
case "playing":
return new cljs.core.Keyword(null,"pause","pause",-2095325672);

break;
case "pause":
return new cljs.core.Keyword(null,"playing","playing",70013335);

break;
case "options":
return new cljs.core.Keyword(null,"playing","playing",70013335);

break;
default:
return game_status;

}
})():game_status);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(game_status__$1,new cljs.core.Keyword(null,"playing","playing",70013335))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prev_game_status,new cljs.core.Keyword(null,"options","options",99638489))){
return tetris.scenes.gameplay.reset_scene(input_state__$1,game_view);
} else {
var game_state__$1 = tetris.core.tick.step((((!(tetris.core.game.started_QMARK_(game_state))))?tetris.core.game.handle_command(game_state,new cljs.core.Keyword(null,"start","start",-355208981)):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game_state,new cljs.core.Keyword(null,"events","events",1792552201),cljs.core.PersistentVector.EMPTY)),input_state__$1,tetris.core.game.handle_command);
var game_status__$2 = (cljs.core.truth_(tetris.core.game.find_event(new cljs.core.Keyword(null,"game-over","game-over",-607322695),new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(game_state__$1)))?new cljs.core.Keyword(null,"game-over","game-over",-607322695):game_status__$1);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(scene_state,new cljs.core.Keyword(null,"input-state","input-state",-2018653626),input_state__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"game-status","game-status",1777284612),game_status__$2,new cljs.core.Keyword(null,"game-state","game-state",935682735),game_state__$1], 0));
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(scene_state,new cljs.core.Keyword(null,"input-state","input-state",-2018653626),input_state__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"game-status","game-status",1777284612),game_status__$1], 0));
}
}));

tetris.debug.draw_debug(cljs.core.deref(tetris.scenes.gameplay.scene_state));

var map__37254 = cljs.core.deref(tetris.scenes.gameplay.scene_state);
var map__37254__$1 = cljs.core.__destructure_map(map__37254);
var input_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37254__$1,new cljs.core.Keyword(null,"input-state","input-state",-2018653626));
var game_status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37254__$1,new cljs.core.Keyword(null,"game-status","game-status",1777284612));
var game_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37254__$1,new cljs.core.Keyword(null,"game-state","game-state",935682735));
var game_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37254__$1,new cljs.core.Keyword(null,"game-view","game-view",460733246));
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"playing","playing",70013335),null,new cljs.core.Keyword(null,"game-over","game-over",-607322695),null], null), null),game_status)){
tetris.render.gameplay.game_view.render_BANG_(game_view,game_state,input_state);

tetris.render.gameplay.sound_effect.handle(game_state);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(game_status,new cljs.core.Keyword(null,"game-over","game-over",-607322695))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tetris.scenes.gameplay.scene_state,cljs.core.assoc,new cljs.core.Keyword(null,"game-status","game-status",1777284612),new cljs.core.Keyword(null,"options","options",99638489));
} else {
return null;
}
});
tetris.scenes.gameplay.start = (async function tetris$scenes$gameplay$start(app){
var stage = app.stage;
var options = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"game-state","game-state",935682735).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tetris.scenes.gameplay.scene_state)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"piece-style","piece-style",-1354956371),"b11"], null)], 0));
(await tetris.assets.load_piece_styles(new cljs.core.Keyword(null,"piece-style","piece-style",-1354956371).cljs$core$IFn$_invoke$arity$1(options)));

var view = tetris.render.gameplay.game_view.create(stage,options);
stage.addChild(new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1(view));

cljs.core.reset_BANG_(new cljs.core.Keyword(null,"game-view","game-view",460733246).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tetris.scenes.gameplay.scene_state)),view);

return app.ticker.add(tetris.scenes.gameplay.tick);
});

//# sourceMappingURL=tetris.scenes.gameplay.js.map
