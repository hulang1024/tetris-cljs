goog.provide('tetris.render.app');
var module$node_modules$pixi_DOT_js$lib$index=shadow.js.require("module$node_modules$pixi_DOT_js$lib$index", {});
tetris.render.app.fit_stage_to_screen = (function tetris$render$app$fit_stage_to_screen(app,design_width,design_height){
var screen_w = app.screen.width;
var screen_h = app.screen.height;
var scale_x = (screen_w / design_width);
var scale_y = (screen_h / design_height);
var scale = cljs.core.min.cljs$core$IFn$_invoke$arity$2(scale_x,scale_y);
var scaled_w = (design_width * scale);
var scaled_h = (design_height * scale);
var offset_x = ((screen_w - scaled_w) / (2));
var offset_y = ((screen_h - scaled_h) / (2));
app.stage.scale.set(scale);

return app.stage.position.set(offset_x,offset_y);
});
tetris.render.app.init = (async function tetris$render$app$init(){
var app = (new module$node_modules$pixi_DOT_js$lib$index.Application());
(window.__PIXI_APP__ = app);

(await app.init(({"background": "#131313", "backgroundAlpha": (0), "resolution": (await (async function (){var or__5162__auto__ = window.devicePixelRatio;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (1);
}
})()), "autoDensity": true, "antialias": true, "resizeTo": window})));

document.body.appendChild(app.canvas);

(app.ticker.maxFPS = (60));

(app.ticker.minFPS = (60));

window.addEventListener("resize",(function (){
return requestAnimationFrame((function (){
return tetris.render.app.fit_stage_to_screen(app,(1920),(1080));
}));
}));

tetris.render.app.fit_stage_to_screen(app,(1920),(1080));

return tetris.scenes.gameplay.start(app);
});

//# sourceMappingURL=tetris.render.app.js.map
