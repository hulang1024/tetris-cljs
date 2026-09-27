goog.provide('tetris.main');
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["init"], 0));
if(goog.DEBUG){
cljs.core.add_tap(cljs.core.println);
} else {
}
tetris.input.keyboard.init();
tetris.main.init = (async function tetris$main$init(){
(await tetris.assets.load());

return tetris.render.app.init();
});

//# sourceMappingURL=tetris.main.js.map
