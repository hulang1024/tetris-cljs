goog.provide('tetris.render.gameplay.game_view');
var module$node_modules$pixi_DOT_js$lib$index=shadow.js.require("module$node_modules$pixi_DOT_js$lib$index", {});
tetris.render.gameplay.game_view.create = (function tetris$render$gameplay$game_view$create(scene,options){
var layout = tetris.render.gameplay.game_view_data.calc_layout(new cljs.core.Keyword(null,"preview-count","preview-count",-329263374).cljs$core$IFn$_invoke$arity$1(options));
var game_view = (new module$node_modules$pixi_DOT_js$lib$index.Container(({"label": "game-view", "x": (((1920) - new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(layout)) / (2)), "y": (((1080) - new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(layout)) / (2))})));
var board = tetris.render.gameplay.matrix.create(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(layout));
var hold = tetris.render.gameplay.hud.hold(new cljs.core.Keyword(null,"hold","hold",-1621118005).cljs$core$IFn$_invoke$arity$1(layout));
var preview = tetris.render.gameplay.hud.preview(new cljs.core.Keyword(null,"next","next",-117701485).cljs$core$IFn$_invoke$arity$1(layout));
game_view.addChild(board);

game_view.addChild(hold);

game_view.addChild(preview);

scene.addChild(game_view);

return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"tweens","tweens",-1927735551),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"piece-cell-textures","piece-cell-textures",754648682),new cljs.core.Keyword(null,"hold","hold",-1621118005),new cljs.core.Keyword(null,"next-container","next-container",-2082591536),new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"container","container",-1736937707),new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"hold-container","hold-container",872721688),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"board","board",-1907017633)],[cljs.core.PersistentArrayMap.EMPTY,layout,tetris.render.gameplay.piece.create_piece_cell_textures(new cljs.core.Keyword(null,"piece-style","piece-style",-1354956371).cljs$core$IFn$_invoke$arity$1(options)),null,preview,null,null,game_view,cljs.core.PersistentArrayMap.EMPTY,hold,null,board]);
});
tetris.render.gameplay.game_view.render_BANG_ = (function tetris$render$gameplay$game_view$render_BANG_(view,game_state,input){
var data = tetris.render.gameplay.game_view_data.render_data(new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view)),game_state);
tetris.render.gameplay.tween_mgr.update_tweens(view);

tetris.render.gameplay.matrix.render_BANG_(view,data,game_state,input);

return tetris.render.gameplay.hud.render_BANG_(view,data);
});

//# sourceMappingURL=tetris.render.gameplay.game_view.js.map
