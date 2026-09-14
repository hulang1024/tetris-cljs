goog.provide('tetris.scenes.gameplay.scene');
var module$node_modules$excalibur$build$dist$excalibur=shadow.js.require("module$node_modules$excalibur$build$dist$excalibur", {});
tetris.scenes.gameplay.scene.GameplayScene = class tetris$scenes$gameplay$scene$GameplayScene extends module$node_modules$excalibur$build$dist$excalibur.Scene {
  constructor() {
super();
var self__ = this;
  }
};
(tetris.scenes.gameplay.scene.GameplayScene.prototype.onInitialize = (function (engine){
var self__ = this;
var this$ = this;
var el_37220 = goog.dom.createDom("pre","debug","Debug");
goog.style.setStyle(el_37220,({"position": "absolute", "top": (20), "right": (0), "width": (240), "font-size": (13), "font-family": "monospace", "whiteSpace": "pre-wrap", "color": "white"}));

goog.dom.appendChild(goog.dom.getDocument().body,el_37220);

(this$.debug_el = el_37220);

(this$.board = (new tetris.scenes.gameplay.board.Board()));

this$.add(this$.board);

return this$.reset_game();
}));

(tetris.scenes.gameplay.scene.GameplayScene.prototype.reset_game = (function (){
var self__ = this;
var this$ = this;
this$.board.reset();

(this$.input_state = tetris.input.initial_state());

var random = (new module$node_modules$excalibur$build$dist$excalibur.Random(cljs.core.rand_int((30))));
var rand_range = (function (min,max){
return module$node_modules$excalibur$build$dist$excalibur.randomIntInRange(min,max,random);
});
return (this$.state = tetris.core.game.initial_state(tetris.local_frame.initial_state(),rand_range));
}));

(tetris.scenes.gameplay.scene.GameplayScene.prototype.draw_debug = (function (text){
var self__ = this;
var this$ = this;
return (this$.debug_el.textContent = cljs.core.clj__GT_js(text));
}));

(tetris.scenes.gameplay.scene.GameplayScene.prototype.onPostUpdate = (function (engine,delta_ms){
var self__ = this;
var this$ = this;
if(goog.DEBUG){
this$.draw_debug(tetris.debug.state__GT_text(this$.state,self__.input_state,delta_ms));
} else {
}

var pressed_keys = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(engine.input.keyboard.getKeys());
var input_state__$1 = tetris.input.handle_keyboard(this$.input_state,pressed_keys);
var state__$1 = tetris.local_frame.step(this$.state,input_state__$1,delta_ms);
this$.board.render_game_state(state__$1);

if(cljs.core.contains_QMARK_(cljs.core.set(new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(state__$1)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"game-over","game-over",-607322695)], null))){
setTimeout((function (){
return this$.reset_game();
}),(1000));
} else {
}

(this$.state = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"events","events",1792552201),cljs.core.PersistentVector.EMPTY));

return (this$.input_state = input_state__$1);
}));

//# sourceMappingURL=tetris.scenes.gameplay.scene.js.map
