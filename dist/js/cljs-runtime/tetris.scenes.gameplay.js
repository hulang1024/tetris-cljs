goog.provide('tetris.scenes.gameplay');
tetris.scenes.gameplay.initial_scene = (function tetris$scenes$gameplay$initial_scene(){
var state = tetris.core.game.initial_state(tetris.core.tick.initial_state(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tetris.core.ruleset.modern.modern_ruleset,new cljs.core.Keyword(null,"speed-level","speed-level",-256559849),(1))));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"game-status","game-status",1777284612),new cljs.core.Keyword(null,"playing","playing",70013335),new cljs.core.Keyword(null,"game-state","game-state",935682735),state,new cljs.core.Keyword(null,"replay-recorder","replay-recorder",1814455308),tetris.core.replay.make_recorder(),new cljs.core.Keyword(null,"game-view","game-view",460733246),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),new cljs.core.Keyword(null,"app","app",-560961707),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)], null);
});
tetris.scenes.gameplay.reset_scene = (function tetris$scenes$gameplay$reset_scene(game_view){
cljs.core.tap_GT_("reset scene");

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tetris.scenes.gameplay.initial_scene(),new cljs.core.Keyword(null,"game-view","game-view",460733246),game_view);
});
tetris.scenes.gameplay.scene_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(tetris.scenes.gameplay.initial_scene());
tetris.scenes.gameplay.go_replay = (function tetris$scenes$gameplay$go_replay(scene_state,tick){
var game_view = cljs.core.deref(new cljs.core.Keyword(null,"game-view","game-view",460733246).cljs$core$IFn$_invoke$arity$1(scene_state));
var app = cljs.core.deref(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(scene_state));
app.ticker.remove(tick);

new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1(game_view).destroy(true);

tetris.scenes.replay.start(app,new cljs.core.Keyword(null,"replay-recorder","replay-recorder",1814455308).cljs$core$IFn$_invoke$arity$1(scene_state));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(scene_state,new cljs.core.Keyword(null,"game-status","game-status",1777284612),new cljs.core.Keyword(null,"exit","exit",351849638));
});
tetris.scenes.gameplay.tick = (function tetris$scenes$gameplay$tick(_){
var pressed_buttons = tetris.input.keyboard.key__GT_buttons(cljs.core.deref(tetris.input.keyboard.pressed_keys));
var input_state = tetris.input.keyboard.handle(pressed_buttons);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tetris.scenes.gameplay.scene_state,(function (scene_state){
var map__31712 = scene_state;
var map__31712__$1 = cljs.core.__destructure_map(map__31712);
var game_status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31712__$1,new cljs.core.Keyword(null,"game-status","game-status",1777284612));
var game_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31712__$1,new cljs.core.Keyword(null,"game-state","game-state",935682735));
var game_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31712__$1,new cljs.core.Keyword(null,"game-view","game-view",460733246));
var ok_pressed_QMARK_ = cljs.core.some((function (p1__31696_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"Enter","Enter",-1458806544),p1__31696_SHARP_);
}),new cljs.core.Keyword(null,"just-pressed-buttons","just-pressed-buttons",1411625590).cljs$core$IFn$_invoke$arity$1(input_state));
var prev_game_status = game_status;
var game_status__$1 = (cljs.core.truth_(ok_pressed_QMARK_)?(function (){var G__31717 = game_status;
var G__31717__$1 = (((G__31717 instanceof cljs.core.Keyword))?G__31717.fqn:null);
switch (G__31717__$1) {
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
return tetris.scenes.gameplay.go_replay(scene_state,tetris.scenes.gameplay.tick);
} else {
var game_state__$1 = tetris.core.tick.step(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game_state,new cljs.core.Keyword(null,"events","events",1792552201),cljs.core.PersistentVector.EMPTY),input_state);
var game_status__$2 = (cljs.core.truth_(tetris.core.game.find_event(new cljs.core.Keyword(null,"game-over","game-over",-607322695),new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(game_state__$1)))?new cljs.core.Keyword(null,"game-over","game-over",-607322695):game_status__$1);
if(cljs.core.seq(new cljs.core.Keyword(null,"pressed-buttons","pressed-buttons",1426560090).cljs$core$IFn$_invoke$arity$1(input_state))){
cljs.core.tap_GT_((""+"recording - "+"frame#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(game_state__$1))+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_state)));
} else {
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(scene_state,new cljs.core.Keyword(null,"game-status","game-status",1777284612),game_status__$2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"game-state","game-state",935682735),game_state__$1,new cljs.core.Keyword(null,"replay-recorder","replay-recorder",1814455308),tetris.core.replay.append_record(new cljs.core.Keyword(null,"replay-recorder","replay-recorder",1814455308).cljs$core$IFn$_invoke$arity$1(scene_state),new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(game_state__$1),pressed_buttons)], 0));
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(scene_state,new cljs.core.Keyword(null,"game-status","game-status",1777284612),game_status__$1);
}
}));

tetris.debug.draw_debug(cljs.core.deref(tetris.scenes.gameplay.scene_state));

var map__31754 = cljs.core.deref(tetris.scenes.gameplay.scene_state);
var map__31754__$1 = cljs.core.__destructure_map(map__31754);
var game_status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31754__$1,new cljs.core.Keyword(null,"game-status","game-status",1777284612));
var game_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31754__$1,new cljs.core.Keyword(null,"game-state","game-state",935682735));
var game_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31754__$1,new cljs.core.Keyword(null,"game-view","game-view",460733246));
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
var options = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"game-state","game-state",935682735).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tetris.scenes.gameplay.scene_state)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"piece-style","piece-style",-1354956371),"b11"], null)], 0));
(await tetris.assets.load_piece_styles(new cljs.core.Keyword(null,"piece-style","piece-style",-1354956371).cljs$core$IFn$_invoke$arity$1(options)));

var view = tetris.render.gameplay.game_view.create(options);
app.stage.addChild(new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1(view));

cljs.core.reset_BANG_(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tetris.scenes.gameplay.scene_state)),app);

cljs.core.reset_BANG_(new cljs.core.Keyword(null,"game-view","game-view",460733246).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tetris.scenes.gameplay.scene_state)),view);

return app.ticker.add(tetris.scenes.gameplay.tick);
});

//# sourceMappingURL=tetris.scenes.gameplay.js.map
