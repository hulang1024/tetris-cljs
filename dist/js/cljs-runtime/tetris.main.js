goog.provide('tetris.main');
tetris.main.init = (async function tetris$main$init(){
if(goog.DEBUG){
cljs.core.add_tap(cljs.core.println);
} else {
}

tetris.styles.load();

(await tetris.audio.load_sounds(tetris.audio.ui_list()));

tetris.screens.screen_stack.render();

return tetris.screens.screen_stack.push_screen(new cljs.core.Keyword(null,"main-menu","main-menu",-1471790381));
});
tetris.main.reload = (async function tetris$main$reload(){
cljs.core.tap_GT_("reload");

cljss.core.remove_styles_BANG_();

tetris.styles.load();

return tetris.screens.screen_stack.render();
});

//# sourceMappingURL=tetris.main.js.map
