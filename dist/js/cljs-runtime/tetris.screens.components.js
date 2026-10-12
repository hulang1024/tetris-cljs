goog.provide('tetris.screens.components');
tetris.screens.components.button_class = (function tetris$screens$components$button_class(){
return cljss.core.css("tetris_screens_components__button-class",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".tetris_screens_components__button-class{font-size:1rem;z-index:2;}"], null),cljs.core.PersistentVector.EMPTY);
});
tetris.screens.components.tip_button = (function tetris$screens$components$tip_button(button,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),tetris.screens.components.button_class()], null),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(button)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text))], null);
});
tetris.screens.components.tip_buttons_overlay = (function tetris$screens$components$tip_buttons_overlay(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),tetris.screens.components.tip_button("Enter","\u9009\u62E9"),tetris.screens.components.tip_button("Esc","\u8FD4\u56DE")], null);
});

//# sourceMappingURL=tetris.screens.components.js.map
