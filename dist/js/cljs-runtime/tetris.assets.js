goog.provide('tetris.assets');
var module$node_modules$pixi_DOT_js$lib$index=shadow.js.require("module$node_modules$pixi_DOT_js$lib$index", {});
tetris.assets.load = (async function tetris$assets$load(){
var seq__37230 = cljs.core.seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["b11"], null));
var chunk__37233 = null;
var count__37234 = (0);
var i__37235 = (0);
while(true){
if((i__37235 < count__37234)){
var piece_style = chunk__37233.cljs$core$IIndexed$_nth$arity$2(null,i__37235);
var alias_37245 = (""+"gameplay"+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(piece_style));
var src_37246 = (""+"/assets/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias_37245)+".png");
(await module$node_modules$pixi_DOT_js$lib$index.Assets.load(({"alias": alias_37245, "src": src_37246})));


var G__37247 = seq__37230;
var G__37248 = chunk__37233;
var G__37249 = count__37234;
var G__37250 = (i__37235 + (1));
seq__37230 = G__37247;
chunk__37233 = G__37248;
count__37234 = G__37249;
i__37235 = G__37250;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__37230);
if(temp__5825__auto__){
var seq__37230__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37230__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__37230__$1);
var G__37251 = cljs.core.chunk_rest(seq__37230__$1);
var G__37252 = c__5694__auto__;
var G__37253 = cljs.core.count(c__5694__auto__);
var G__37254 = (0);
seq__37230 = G__37251;
chunk__37233 = G__37252;
count__37234 = G__37253;
i__37235 = G__37254;
continue;
} else {
var piece_style = cljs.core.first(seq__37230__$1);
var alias_37255 = (""+"gameplay"+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(piece_style));
var src_37256 = (""+"/assets/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias_37255)+".png");
(await module$node_modules$pixi_DOT_js$lib$index.Assets.load(({"alias": alias_37255, "src": src_37256})));


var G__37257 = cljs.core.next(seq__37230__$1);
var G__37258 = null;
var G__37259 = (0);
var G__37260 = (0);
seq__37230 = G__37257;
chunk__37233 = G__37258;
count__37234 = G__37259;
i__37235 = G__37260;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=tetris.assets.js.map
