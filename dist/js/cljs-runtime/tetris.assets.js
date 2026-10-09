goog.provide('tetris.assets');
var module$node_modules$pixi_DOT_js$lib$index=shadow.js.require("module$node_modules$pixi_DOT_js$lib$index", {});
tetris.assets.load_piece_styles = (async function tetris$assets$load_piece_styles(styles){
var seq__41343 = cljs.core.seq(((typeof styles === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [styles], null):styles));
var chunk__41345 = null;
var count__41346 = (0);
var i__41347 = (0);
while(true){
if((i__41347 < count__41346)){
var piece_style = chunk__41345.cljs$core$IIndexed$_nth$arity$2(null,i__41347);
var alias_41375 = (""+"gameplay"+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(piece_style));
var src_41376 = (""+"assets/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias_41375)+".png");
(await module$node_modules$pixi_DOT_js$lib$index.Assets.load(({"alias": alias_41375, "src": src_41376})));


var G__41377 = seq__41343;
var G__41378 = chunk__41345;
var G__41379 = count__41346;
var G__41380 = (i__41347 + (1));
seq__41343 = G__41377;
chunk__41345 = G__41378;
count__41346 = G__41379;
i__41347 = G__41380;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__41343);
if(temp__5825__auto__){
var seq__41343__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41343__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__41343__$1);
var G__41381 = cljs.core.chunk_rest(seq__41343__$1);
var G__41382 = c__5694__auto__;
var G__41383 = cljs.core.count(c__5694__auto__);
var G__41384 = (0);
seq__41343 = G__41381;
chunk__41345 = G__41382;
count__41346 = G__41383;
i__41347 = G__41384;
continue;
} else {
var piece_style = cljs.core.first(seq__41343__$1);
var alias_41385 = (""+"gameplay"+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(piece_style));
var src_41386 = (""+"assets/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias_41385)+".png");
(await module$node_modules$pixi_DOT_js$lib$index.Assets.load(({"alias": alias_41385, "src": src_41386})));


var G__41388 = cljs.core.next(seq__41343__$1);
var G__41389 = null;
var G__41390 = (0);
var G__41391 = (0);
seq__41343 = G__41388;
chunk__41345 = G__41389;
count__41346 = G__41390;
i__41347 = G__41391;
continue;
}
} else {
return null;
}
}
break;
}
});
tetris.assets.load = (async function tetris$assets$load(){
tetris.assets.load_piece_styles("b11");

return tetris.audio.load_sounds(new cljs.core.Keyword(null,"all","all",892129742));
});

//# sourceMappingURL=tetris.assets.js.map
