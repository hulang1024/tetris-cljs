goog.provide('tetris.render.gameplay.sound_effect');
tetris.render.gameplay.sound_effect.play = (function tetris$render$gameplay$sound_effect$play(id){
return tetris.audio.sound(id).play();
});
tetris.render.gameplay.sound_effect.handle = (function tetris$render$gameplay$sound_effect$handle(game_state){
var events = new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(game_state);
if(cljs.core.truth_(tetris.core.game.find_event(new cljs.core.Keyword(null,"line-cleared","line-cleared",-75071835),events))){
return tetris.render.gameplay.sound_effect.play(new cljs.core.Keyword("effect","clear-1","effect/clear-1",1677235000));
} else {
if(cljs.core.truth_((function (){var and__5160__auto__ = tetris.core.game.find_event(new cljs.core.Keyword(null,"hard-dropped","hard-dropped",2061168106),events);
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core.not(tetris.core.game.find_event(new cljs.core.Keyword(null,"line-clearing","line-clearing",-1671825341),events));
} else {
return and__5160__auto__;
}
})())){
return tetris.render.gameplay.sound_effect.play(new cljs.core.Keyword("effect","hard-drop","effect/hard-drop",503951713));
} else {
if(cljs.core.truth_((function (){var and__5160__auto__ = tetris.core.game.find_event(new cljs.core.Keyword(null,"locked","locked",-1658763820),events);
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core.not(tetris.core.game.find_event(new cljs.core.Keyword(null,"line-clearing","line-clearing",-1671825341),events));
} else {
return and__5160__auto__;
}
})())){
return tetris.render.gameplay.sound_effect.play(new cljs.core.Keyword("effect","lock","effect/lock",888901839));
} else {
if(cljs.core.truth_((function (){var and__5160__auto__ = tetris.core.game.find_event(new cljs.core.Keyword(null,"moved","moved",486549219),events);
if(cljs.core.truth_(and__5160__auto__)){
return new cljs.core.Keyword(null,"down-blocked?","down-blocked?",983958012).cljs$core$IFn$_invoke$arity$1(game_state);
} else {
return and__5160__auto__;
}
})())){
return tetris.render.gameplay.sound_effect.play(new cljs.core.Keyword("effect","land","effect/land",-67649048));
} else {
if(cljs.core.truth_(tetris.core.game.find_event(new cljs.core.Keyword(null,"landed","landed",-1056197628),events))){
return tetris.render.gameplay.sound_effect.play(new cljs.core.Keyword("effect","land","effect/land",-67649048));
} else {
if(cljs.core.truth_(tetris.core.game.find_event(new cljs.core.Keyword(null,"rotated","rotated",1509433122),events))){
return tetris.render.gameplay.sound_effect.play(new cljs.core.Keyword("effect","rotate","effect/rotate",-1027616152));
} else {
if(cljs.core.truth_(tetris.core.game.find_event(new cljs.core.Keyword(null,"held","held",-1064528277),events))){
return tetris.render.gameplay.sound_effect.play(new cljs.core.Keyword("effect","hold","effect/hold",1895710300));
} else {
return null;
}
}
}
}
}
}
}
});

//# sourceMappingURL=tetris.render.gameplay.sound_effect.js.map
