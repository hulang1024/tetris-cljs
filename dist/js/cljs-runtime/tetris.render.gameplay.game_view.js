goog.provide('tetris.render.gameplay.game_view');
var module$node_modules$pixi_DOT_js$lib$index=shadow.js.require("module$node_modules$pixi_DOT_js$lib$index", {});
tetris.render.gameplay.game_view.create = (function tetris$render$gameplay$game_view$create(scene,options){
var layout = tetris.render.gameplay.game_view_data.calc_layout(new cljs.core.Keyword(null,"preview-count","preview-count",-329263374).cljs$core$IFn$_invoke$arity$1(options));
var game_view = (new module$node_modules$pixi_DOT_js$lib$index.Container(({"label": "game-view", "x": (((1920) - new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(layout)) / (2)), "y": (((1080) - new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(layout)) / (2))})));
var matrix = tetris.render.gameplay.matrix.create(new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(layout));
var hud = tetris.render.gameplay.hud.create(layout,options);
game_view.addChild(matrix);

game_view.addChild(hud);

scene.addChild(game_view);

return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"layout","layout",-2120940921),layout,new cljs.core.Keyword(null,"container","container",-1736937707),game_view,new cljs.core.Keyword(null,"matrix","matrix",803137200),matrix,new cljs.core.Keyword(null,"hud","hud",-1987595891),hud,new cljs.core.Keyword(null,"piece-cell-textures","piece-cell-textures",754648682),tetris.render.gameplay.piece.create_piece_cell_textures(new cljs.core.Keyword(null,"piece-style","piece-style",-1354956371).cljs$core$IFn$_invoke$arity$1(options)),new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"tweens","tweens",-1927735551),cljs.core.PersistentArrayMap.EMPTY], null);
});
tetris.render.gameplay.game_view.render_BANG_ = (function tetris$render$gameplay$game_view$render_BANG_(view,game_state,input){
var data = tetris.render.gameplay.game_view_data.render_data(new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),game_state);
tetris.render.gameplay.tween_mgr.update_tweens(view);

tetris.render.gameplay.matrix.render_BANG_(view,data,game_state,input);

return tetris.render.gameplay.hud.render_BANG_(view,data,game_state);
});

//# sourceMappingURL=tetris.render.gameplay.game_view.js.map
