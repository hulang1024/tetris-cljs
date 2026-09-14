goog.provide('tetris.scenes.gameplay.gameplay_scene');
var module$node_modules$excalibur$build$dist$excalibur=shadow.js.require("module$node_modules$excalibur$build$dist$excalibur", {});
tetris.scenes.gameplay.gameplay_scene.GameplayScene = class tetris$scenes$gameplay$gameplay_scene$GameplayScene extends module$node_modules$excalibur$build$dist$excalibur.Scene {
  constructor() {
super();
var self__ = this;
  }
};
(tetris.scenes.gameplay.gameplay_scene.GameplayScene.prototype.onInitialize = (function (engine){
var self__ = this;
var this$ = this;
(this$.input_state = null);

(this$.game_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dir","dir",1734754661),(0)], null)));

(this$.board = (new tetris.scenes.gameplay.board.Board()));

return engine.toggleDebug();
}));

(tetris.scenes.gameplay.gameplay_scene.GameplayScene.prototype.onPostUpdate = (function (engine,dt){
var self__ = this;
var this$ = this;
return this$.board.update_falling_piece((0),(0));
}));

//# sourceMappingURL=tetris.scenes.gameplay.gameplay_scene.js.map
