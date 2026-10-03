goog.provide('tetris.scenes.replay');
tetris.scenes.replay.initial_scene = (function tetris$scenes$replay$initial_scene(){
var state = tetris.core.game.initial_state(tetris.core.tick.initial_state(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tetris.core.ruleset.modern.modern_ruleset,new cljs.core.Keyword(null,"speed-level","speed-level",-256559849),(1))));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"game-status","game-status",1777284612),new cljs.core.Keyword(null,"playing","playing",70013335),new cljs.core.Keyword(null,"game-state","game-state",935682735),state,new cljs.core.Keyword(null,"replayer","replayer",1712876889),null,new cljs.core.Keyword(null,"game-view","game-view",460733246),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)], null);
});
tetris.scenes.replay.scene_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(tetris.scenes.replay.initial_scene());
tetris.scenes.replay.tick = (function tetris$scenes$replay$tick(_){
tetris.input.keyboard.handle(tetris.input.keyboard.key__GT_buttons(cljs.core.deref(tetris.input.keyboard.pressed_keys)));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tetris.scenes.replay.scene_state,(function (scene_state){
var map__46171 = scene_state;
var map__46171__$1 = cljs.core.__destructure_map(map__46171);
var game_status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46171__$1,new cljs.core.Keyword(null,"game-status","game-status",1777284612));
var game_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46171__$1,new cljs.core.Keyword(null,"game-state","game-state",935682735));
var replayer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46171__$1,new cljs.core.Keyword(null,"replayer","replayer",1712876889));
var ok_pressed_QMARK_ = cljs.core.some((function (p1__46170_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ok","ok",967785236),p1__46170_SHARP_);
}),new cljs.core.Keyword(null,"just-pressed-buttons","just-pressed-buttons",1411625590).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tetris.input.keyboard.state)));
var game_status__$1 = (cljs.core.truth_(ok_pressed_QMARK_)?(function (){var G__46172 = game_status;
var G__46172__$1 = (((G__46172 instanceof cljs.core.Keyword))?G__46172.fqn:null);
switch (G__46172__$1) {
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
var vec__46173 = tetris.core.replay.step(replayer);
var replay_input_states = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46173,(0),null);
var replayer__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46173,(1),null);
var game_state__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (game_state__$1,p__46176){
var vec__46177 = p__46176;
var frame = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46177,(0),null);
var input_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46177,(1),null);
cljs.core.tap_GT_((""+"replaying - "+"frame#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frame)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_state)));

return tetris.core.tick.step(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(game_state__$1,new cljs.core.Keyword(null,"events","events",1792552201),cljs.core.PersistentVector.EMPTY),input_state);
}),game_state,replay_input_states);
var game_status__$2 = (cljs.core.truth_(tetris.core.game.find_event(new cljs.core.Keyword(null,"game-over","game-over",-607322695),new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(game_state__$1)))?new cljs.core.Keyword(null,"game-over","game-over",-607322695):game_status__$1);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(scene_state,new cljs.core.Keyword(null,"game-status","game-status",1777284612),game_status__$2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"game-state","game-state",935682735),game_state__$1,new cljs.core.Keyword(null,"replayer","replayer",1712876889),replayer__$1], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(scene_state,new cljs.core.Keyword(null,"game-status","game-status",1777284612),game_status__$1);
}
}));

tetris.debug.draw_debug(cljs.core.deref(tetris.scenes.replay.scene_state));

var map__46180 = cljs.core.deref(tetris.scenes.replay.scene_state);
var map__46180__$1 = cljs.core.__destructure_map(map__46180);
var game_status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46180__$1,new cljs.core.Keyword(null,"game-status","game-status",1777284612));
var game_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46180__$1,new cljs.core.Keyword(null,"game-state","game-state",935682735));
var replayer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46180__$1,new cljs.core.Keyword(null,"replayer","replayer",1712876889));
var game_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46180__$1,new cljs.core.Keyword(null,"game-view","game-view",460733246));
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"playing","playing",70013335),null,new cljs.core.Keyword(null,"game-over","game-over",-607322695),null], null), null),game_status)){
tetris.render.gameplay.game_view.render_BANG_(game_view,game_state,new cljs.core.Keyword(null,"input-state","input-state",-2018653626).cljs$core$IFn$_invoke$arity$1(replayer));

tetris.render.gameplay.sound_effect.handle(game_state);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(game_status,new cljs.core.Keyword(null,"game-over","game-over",-607322695))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tetris.scenes.replay.scene_state,cljs.core.assoc,new cljs.core.Keyword(null,"game-status","game-status",1777284612),new cljs.core.Keyword(null,"options","options",99638489));
} else {
return null;
}
});
tetris.scenes.replay.start = (async function tetris$scenes$replay$start(app,replay_records){
cljs.core.tap_GT_((""+"replay records:\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(replay_records)));

cljs.core.tap_GT_("replay started");

var stage = app.stage;
var options = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"game-state","game-state",935682735).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tetris.scenes.replay.scene_state)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"piece-style","piece-style",-1354956371),"b11"], null)], 0));
(await tetris.assets.load_piece_styles(new cljs.core.Keyword(null,"piece-style","piece-style",-1354956371).cljs$core$IFn$_invoke$arity$1(options)));

var view = tetris.render.gameplay.game_view.create(stage,options);
stage.addChild(new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1(view));

cljs.core.reset_BANG_(new cljs.core.Keyword(null,"game-view","game-view",460733246).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tetris.scenes.replay.scene_state)),view);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tetris.scenes.replay.scene_state,cljs.core.assoc,new cljs.core.Keyword(null,"replayer","replayer",1712876889),tetris.core.replay.make_replayer(replay_records));

return app.ticker.add(tetris.scenes.replay.tick);
});

//# sourceMappingURL=tetris.scenes.replay.js.map
