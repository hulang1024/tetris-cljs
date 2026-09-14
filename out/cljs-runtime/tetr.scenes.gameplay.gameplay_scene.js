goog.provide('tetr.scenes.gameplay.gameplay_scene');
var module$node_modules$excalibur$build$dist$excalibur=shadow.js.require("module$node_modules$excalibur$build$dist$excalibur", {});
tetr.scenes.gameplay.gameplay_scene.GameplayScene = class tetr$scenes$gameplay$gameplay_scene$GameplayScene extends module$node_modules$excalibur$build$dist$excalibur.Scene {
  constructor() {
super();
var self__ = this;

(self__.input_state = null);

(self__.game_state = null);

(self__.falling_piece = null);
  }
};
(tetr.scenes.gameplay.gameplay_scene.GameplayScene.prototype.onInitialize = (function (engine){
var self__ = this;
var this$ = this;
return engine.toggleDebug();
}));

(tetr.scenes.gameplay.gameplay_scene.GameplayScene.prototype.onPostUpdate = (function (engine,dt){
var self__ = this;
var this$ = this;
if(cljs.core.truth_(this$.falling_piece)){
} else {
var piece_38418 = (new tetr.scenes.gameplay.piece.Piece(new cljs.core.Keyword(null,"s","s",1705939918),(0)));
engine.add(piece_38418);

piece_38418.pos.setTo((100),(70));

(this$.falling_piece = piece_38418);
}

var piece = this$.falling_piece;
var pos = piece.pos;
var vec__38414 = (function (){var G__38417 = cljs.core.first(engine.input.keyboard.getKeys());
switch (G__38417) {
case "ArrowUp":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null);

break;
case "ArrowRight":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
case "ArrowDown":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null);

break;
case "ArrowLeft":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);

}
})();
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38414,(0),null);
var vy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38414,(1),null);
var step = (10);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((vx + vy),(0))){
return pos.setTo(((vx * step) + pos.x),((vy * step) + pos.y));
} else {
return null;
}
}));

//# sourceMappingURL=tetr.scenes.gameplay.gameplay_scene.js.map
