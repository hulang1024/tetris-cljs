goog.provide('tetr.main');
var module$node_modules$excalibur$build$dist$excalibur=shadow.js.require("module$node_modules$excalibur$build$dist$excalibur", {});
tetr.main.game = (new module$node_modules$excalibur$build$dist$excalibur.Engine(({"width": (800), "height": (600), "displayMode": module$node_modules$excalibur$build$dist$excalibur.DisplayMode.FitScreenAndFill, "piexelArt": true, "scenes": ({"start": tetr.scenes.gameplay.gameplay_scene.GameplayScene})})));
tetr.main.game.start("start",({"inTransition": (new module$node_modules$excalibur$build$dist$excalibur.FadeInOut(({"duration": (1000), "direction": "in", "color": module$node_modules$excalibur$build$dist$excalibur.Color.ExcaliburBlue})))}));
tetr.main.init = (function tetr$main$init(){
if(goog.DEBUG){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["reload: m/start!"], 0));

malli.core._deregister_metadata_function_schemas_BANG_(new cljs.core.Keyword(null,"cljs","cljs",1492417629));

cljs.core.PersistentHashSet.EMPTY;

malli.instrument.instrument_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),malli.dev.pretty.thrower.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"skip-instrumented?","skip-instrumented?",1366613843),true], null),new cljs.core.Keyword(null,"data","data",-232669377),malli.core.function_schemas.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"cljs","cljs",1492417629))));

console.groupCollapsed("Instrumentation done");

return console.groupEnd();
} else {
return null;
}
});

//# sourceMappingURL=tetr.main.js.map
