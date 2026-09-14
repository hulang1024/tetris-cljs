goog.provide('tetris.resources');
var module$node_modules$excalibur$build$dist$excalibur=shadow.js.require("module$node_modules$excalibur$build$dist$excalibur", {});
tetris.resources.get_tetr_sources = (function tetris$resources$get_tetr_sources(skin_name){
var __GT_url = (function (p1__38995_SHARP_){
return (""+"skins/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(skin_name)+"/tetr/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(p1__38995_SHARP_))+".png");
});
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (t){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,(new module$node_modules$excalibur$build$dist$excalibur.ImageSource(__GT_url(t)))], null);
}),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.Keyword(null,"l","l",1395893423),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.Keyword(null,"j","j",-1397974765),new cljs.core.Keyword(null,"t","t",-1397832519)], null)));
});
tetris.resources.resources = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tetr","tetr",1568635164),tetris.resources.get_tetr_sources("basic")], null);
tetris.resources.loader = (new module$node_modules$excalibur$build$dist$excalibur.Loader());
tetris.resources.add_resources_BANG_ = (function tetris$resources$add_resources_BANG_(sources){
return cljs.core.run_BANG_((function (p1__38996_SHARP_){
return tetris.resources.loader.addResource(p1__38996_SHARP_);
}),sources);
});
tetris.resources.add_resources_BANG_(cljs.core.vals(new cljs.core.Keyword(null,"tetr","tetr",1568635164).cljs$core$IFn$_invoke$arity$1(tetris.resources.resources)));

//# sourceMappingURL=tetris.resources.js.map
