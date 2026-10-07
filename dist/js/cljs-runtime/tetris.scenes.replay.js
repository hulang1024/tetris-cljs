goog.provide('tetris.scenes.replay');
tetris.scenes.replay.scene_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
tetris.scenes.replay.handle_keyboard = (function tetris$scenes$replay$handle_keyboard(scene_state){
var map__51160 = scene_state;
var map__51160__$1 = cljs.core.__destructure_map(map__51160);
var game_status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51160__$1,new cljs.core.Keyword(null,"game-status","game-status",1777284612));
var replayer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51160__$1,new cljs.core.Keyword(null,"replayer","replayer",1712876889));
var map__51161 = cljs.core.deref(tetris.input.keyboard.state);
var map__51161__$1 = cljs.core.__destructure_map(map__51161);
var just_pressed_buttons = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51161__$1,new cljs.core.Keyword(null,"just-pressed-buttons","just-pressed-buttons",1411625590));
var replay_delta = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(scene_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replayer","replayer",1712876889),new cljs.core.Keyword(null,"delta","delta",108939957)], null));
if(cljs.core.truth_(cljs.core.some((function (p1__51157_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"Enter","Enter",-1458806544),p1__51157_SHARP_);
}),just_pressed_buttons))){
var G__51162 = game_status;
var G__51162__$1 = (((G__51162 instanceof cljs.core.Keyword))?G__51162.fqn:null);
switch (G__51162__$1) {
case "playing":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(scene_state,new cljs.core.Keyword(null,"game-status","game-status",1777284612),new cljs.core.Keyword(null,"pause","pause",-2095325672));

break;
case "pause":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(scene_state,new cljs.core.Keyword(null,"game-status","game-status",1777284612),new cljs.core.Keyword(null,"playing","playing",70013335));

break;
case "options":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(scene_state,new cljs.core.Keyword(null,"game-status","game-status",1777284612),new cljs.core.Keyword(null,"playing","playing",70013335),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"replayer","replayer",1712876889),tetris.core.replay.start(replayer),new cljs.core.Keyword(null,"game-state","game-state",935682735),tetris.core.tick.initial_game(new cljs.core.Keyword(null,"game-options","game-options",930378903).cljs$core$IFn$_invoke$arity$1(scene_state))], 0));

break;
default:
return scene_state;

}
} else {
if(cljs.core.truth_(cljs.core.some((function (p1__51158_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"Equal","Equal",-1561314314),p1__51158_SHARP_);
}),just_pressed_buttons))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(scene_state,new cljs.core.Keyword(null,"replayer","replayer",1712876889),tetris.core.replay.adjust_delta,(replay_delta * (2)));
} else {
if(cljs.core.truth_(cljs.core.some((function (p1__51159_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"Minus","Minus",-181221775),p1__51159_SHARP_);
}),just_pressed_buttons))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(scene_state,new cljs.core.Keyword(null,"replayer","replayer",1712876889),tetris.core.replay.adjust_delta,(replay_delta / (2)));
} else {
return scene_state;

}
}
}
});
tetris.scenes.replay.tick = (function tetris$scenes$replay$tick(_){
tetris.input.keyboard.handle(tetris.input.keyboard.key__GT_buttons(cljs.core.deref(tetris.input.keyboard.pressed_keys)));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tetris.scenes.replay.scene_state,(function (scene_state){
var scene_state__$1 = tetris.scenes.replay.handle_keyboard(scene_state);
var map__51163 = scene_state__$1;
var map__51163__$1 = cljs.core.__destructure_map(map__51163);
var game_status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51163__$1,new cljs.core.Keyword(null,"game-status","game-status",1777284612));
var game_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51163__$1,new cljs.core.Keyword(null,"game-state","game-state",935682735));
var replayer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51163__$1,new cljs.core.Keyword(null,"replayer","replayer",1712876889));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(game_status,new cljs.core.Keyword(null,"playing","playing",70013335))){
var vec__51164 = tetris.core.replay.step(replayer);
var inputs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51164,(0),null);
var replayer__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51164,(1),null);
var vec__51167 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__51170,input_state){
var vec__51171 = p__51170;
var game_state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51171,(0),null);
var game_status__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51171,(1),null);
var game_state__$2 = tetris.core.tick.step(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game_state__$1,new cljs.core.Keyword(null,"events","events",1792552201),cljs.core.PersistentVector.EMPTY),input_state);
cljs.core.tap_GT_((""+"record : frame#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(game_state__$2))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.select_keys(input_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pressed-buttons","pressed-buttons",1426560090)], null)))));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [game_state__$2,(cljs.core.truth_(tetris.core.game.find_event(new cljs.core.Keyword(null,"game-over","game-over",-607322695),new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(game_state__$2)))?new cljs.core.Keyword(null,"game-over","game-over",-607322695):game_status__$1)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [game_state,game_status], null),inputs);
var game_state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51167,(0),null);
var game_status__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51167,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(scene_state__$1,new cljs.core.Keyword(null,"game-status","game-status",1777284612),game_status__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"game-state","game-state",935682735),game_state__$1,new cljs.core.Keyword(null,"replayer","replayer",1712876889),replayer__$1], 0));
} else {
return scene_state__$1;
}
}));

tetris.debug.draw_debug(cljs.core.deref(tetris.scenes.replay.scene_state));

var map__51174 = cljs.core.deref(tetris.scenes.replay.scene_state);
var map__51174__$1 = cljs.core.__destructure_map(map__51174);
var game_status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51174__$1,new cljs.core.Keyword(null,"game-status","game-status",1777284612));
var game_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51174__$1,new cljs.core.Keyword(null,"game-state","game-state",935682735));
var replayer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51174__$1,new cljs.core.Keyword(null,"replayer","replayer",1712876889));
var game_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51174__$1,new cljs.core.Keyword(null,"game-view","game-view",460733246));
if(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"playing","playing",70013335),null,new cljs.core.Keyword(null,"game-over","game-over",-607322695),null], null), null),game_status)) && (tetris.core.replay.current_changed_QMARK_(replayer)))){
tetris.render.gameplay.game_view.render_BANG_(game_view,game_state,new cljs.core.Keyword(null,"last-input","last-input",889994505).cljs$core$IFn$_invoke$arity$1(replayer));

tetris.render.gameplay.sound_effect.handle(game_state);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(game_status,new cljs.core.Keyword(null,"game-over","game-over",-607322695))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tetris.scenes.replay.scene_state,cljs.core.assoc,new cljs.core.Keyword(null,"game-status","game-status",1777284612),new cljs.core.Keyword(null,"options","options",99638489));
} else {
return null;
}
});
tetris.scenes.replay.start = (async function tetris$scenes$replay$start(app,game_options,replay_recorder){
cljs.core.tap_GT_((""+"replay records:\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(replay_recorder)));

cljs.core.tap_GT_("replay started");

var game_state = tetris.core.tick.initial_game(game_options);
var options = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([game_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"piece-style","piece-style",-1354956371),"b11"], null)], 0));
(await tetris.assets.load_piece_styles(new cljs.core.Keyword(null,"piece-style","piece-style",-1354956371).cljs$core$IFn$_invoke$arity$1(options)));

var view = tetris.render.gameplay.game_view.create(options);
app.stage.addChild(new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1(view));

cljs.core.tap_GT_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(tetris.scenes.replay.scene_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replayer","replayer",1712876889),new cljs.core.Keyword(null,"inputs","inputs",865803858)], null)));

cljs.core.reset_BANG_(tetris.scenes.replay.scene_state,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"game-status","game-status",1777284612),new cljs.core.Keyword(null,"playing","playing",70013335),new cljs.core.Keyword(null,"game-state","game-state",935682735),game_state,new cljs.core.Keyword(null,"game-options","game-options",930378903),game_options,new cljs.core.Keyword(null,"game-view","game-view",460733246),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(view),new cljs.core.Keyword(null,"app","app",-560961707),app,new cljs.core.Keyword(null,"replayer","replayer",1712876889),tetris.core.replay.make_replayer(replay_recorder)], null));

return app.ticker.add(tetris.scenes.replay.tick);
});

//# sourceMappingURL=tetris.scenes.replay.js.map
