goog.provide('tetris.input.gamepad');
var module$node_modules$excalibur$build$dist$excalibur=shadow.js.require("module$node_modules$excalibur$build$dist$excalibur", {});
tetris.input.gamepad.gamepad_buttons = cljs.core.PersistentHashMap.fromArrays([module$node_modules$excalibur$build$dist$excalibur.Buttons.LeftBumper,module$node_modules$excalibur$build$dist$excalibur.Buttons.Face1,module$node_modules$excalibur$build$dist$excalibur.Buttons.DpadRight,module$node_modules$excalibur$build$dist$excalibur.Buttons.RightBumper,module$node_modules$excalibur$build$dist$excalibur.Buttons.DpadDown,module$node_modules$excalibur$build$dist$excalibur.Buttons.DpadUp,module$node_modules$excalibur$build$dist$excalibur.Buttons.Face2,module$node_modules$excalibur$build$dist$excalibur.Buttons.Start,module$node_modules$excalibur$build$dist$excalibur.Buttons.DpadLeft],[new cljs.core.Keyword(null,"hard-drop","hard-drop",1211458322),new cljs.core.Keyword(null,"rotate-ccw","rotate-ccw",885172263),new cljs.core.Keyword(null,"move-right","move-right",1661359569),new cljs.core.Keyword(null,"hold","hold",-1621118005),new cljs.core.Keyword(null,"soft-drop","soft-drop",-123150289),new cljs.core.Keyword(null,"rotate-cw","rotate-cw",83272937),new cljs.core.Keyword(null,"rotate-cw","rotate-cw",83272937),new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword(null,"move-left","move-left",-271562811)]);
tetris.input.gamepad.gamepad_button__GT_button = (function tetris$input$gamepad$gamepad_button__GT_button(button){
return (tetris.input.gamepad.gamepad_buttons.cljs$core$IFn$_invoke$arity$1 ? tetris.input.gamepad.gamepad_buttons.cljs$core$IFn$_invoke$arity$1(button) : tetris.input.gamepad.gamepad_buttons.call(null,button));
});
tetris.core.input.handle = (function tetris$input$gamepad$handle(input_state,gamepad){
var pressed_game_buttons = cljs.core.filterv((function (p1__37351_SHARP_){
return gamepad.isButtonHeld(p1__37351_SHARP_);
}),cljs.core.keys(tetris.input.gamepad.gamepad_buttons));
var pressed_buttons = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(tetris.input.gamepad.gamepad_button__GT_button,pressed_game_buttons);
return tetris.core.input.handle(input_state,pressed_buttons);
});

//# sourceMappingURL=tetris.input.gamepad.js.map
