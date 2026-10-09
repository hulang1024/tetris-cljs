goog.provide('tetris.assets');
var module$node_modules$pixi_DOT_js$lib$index=shadow.js.require("module$node_modules$pixi_DOT_js$lib$index", {});
tetris.assets.load_piece_styles = (async function tetris$assets$load_piece_styles(styles){
var seq__47535 = cljs.core.seq(((typeof styles === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [styles], null):styles));
var chunk__47537 = null;
var count__47538 = (0);
var i__47539 = (0);
while(true){
if((i__47539 < count__47538)){
var piece_style = chunk__47537.cljs$core$IIndexed$_nth$arity$2(null,i__47539);
var alias_47562 = (""+"gameplay"+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(piece_style));
var src_47563 = (""+"assets/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias_47562)+".png");
(await module$node_modules$pixi_DOT_js$lib$index.Assets.load(({"alias": alias_47562, "src": src_47563})));


var G__47564 = seq__47535;
var G__47565 = chunk__47537;
var G__47566 = count__47538;
var G__47567 = (i__47539 + (1));
seq__47535 = G__47564;
chunk__47537 = G__47565;
count__47538 = G__47566;
i__47539 = G__47567;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__47535);
if(temp__5825__auto__){
var seq__47535__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47535__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__47535__$1);
var G__47568 = cljs.core.chunk_rest(seq__47535__$1);
var G__47569 = c__5694__auto__;
var G__47570 = cljs.core.count(c__5694__auto__);
var G__47571 = (0);
seq__47535 = G__47568;
chunk__47537 = G__47569;
count__47538 = G__47570;
i__47539 = G__47571;
continue;
} else {
var piece_style = cljs.core.first(seq__47535__$1);
var alias_47572 = (""+"gameplay"+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(piece_style));
var src_47573 = (""+"assets/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias_47572)+".png");
(await module$node_modules$pixi_DOT_js$lib$index.Assets.load(({"alias": alias_47572, "src": src_47573})));


var G__47574 = cljs.core.next(seq__47535__$1);
var G__47575 = null;
var G__47576 = (0);
var G__47577 = (0);
seq__47535 = G__47574;
chunk__47537 = G__47575;
count__47538 = G__47576;
i__47539 = G__47577;
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
