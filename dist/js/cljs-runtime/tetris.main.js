goog.provide('tetris.main');
if((typeof tetris !== 'undefined') && (typeof tetris.main !== 'undefined') && (typeof tetris.main.game_app !== 'undefined')){
} else {
tetris.main.game_app = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
tetris.main.init = (async function tetris$main$init(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["init"], 0));

if(goog.DEBUG){
cljs.core.add_tap(cljs.core.println);
} else {
}

tetris.input.keyboard.init();

if(cljs.core.truth_(cljs.core.deref(tetris.main.game_app))){
return null;
} else {
(await tetris.assets.load());

return cljs.core.reset_BANG_(tetris.main.game_app,(await tetris.render.app.init()));
}
});
tetris.main.reload = (async function tetris$main$reload(){
var temp__5825__auto___37759 = cljs.core.deref(tetris.main.game_app);
if(cljs.core.truth_(temp__5825__auto___37759)){
var app_37760 = temp__5825__auto___37759;
app_37760.destroy(({"removeView": true}));

cljs.core.reset_BANG_(tetris.main.game_app,null);
} else {
}

return cljs.core.reset_BANG_(tetris.main.game_app,(await tetris.render.app.init()));
});

//# sourceMappingURL=tetris.main.js.map
