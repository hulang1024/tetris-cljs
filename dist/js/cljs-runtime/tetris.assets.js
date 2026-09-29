goog.provide('tetris.assets');
var module$node_modules$pixi_DOT_js$lib$index=shadow.js.require("module$node_modules$pixi_DOT_js$lib$index", {});
tetris.assets.load_piece_styles = (async function tetris$assets$load_piece_styles(styles){
var seq__46087 = cljs.core.seq(((typeof styles === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [styles], null):styles));
var chunk__46089 = null;
var count__46090 = (0);
var i__46091 = (0);
while(true){
if((i__46091 < count__46090)){
var piece_style = chunk__46089.cljs$core$IIndexed$_nth$arity$2(null,i__46091);
var alias_46099 = (""+"gameplay"+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(piece_style));
var src_46100 = (""+"assets/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias_46099)+".png");
(await module$node_modules$pixi_DOT_js$lib$index.Assets.load(({"alias": alias_46099, "src": src_46100})));


var G__46101 = seq__46087;
var G__46102 = chunk__46089;
var G__46103 = count__46090;
var G__46104 = (i__46091 + (1));
seq__46087 = G__46101;
chunk__46089 = G__46102;
count__46090 = G__46103;
i__46091 = G__46104;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__46087);
if(temp__5825__auto__){
var seq__46087__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46087__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__46087__$1);
var G__46105 = cljs.core.chunk_rest(seq__46087__$1);
var G__46106 = c__5694__auto__;
var G__46107 = cljs.core.count(c__5694__auto__);
var G__46108 = (0);
seq__46087 = G__46105;
chunk__46089 = G__46106;
count__46090 = G__46107;
i__46091 = G__46108;
continue;
} else {
var piece_style = cljs.core.first(seq__46087__$1);
var alias_46110 = (""+"gameplay"+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(piece_style));
var src_46111 = (""+"assets/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias_46110)+".png");
(await module$node_modules$pixi_DOT_js$lib$index.Assets.load(({"alias": alias_46110, "src": src_46111})));


var G__46112 = cljs.core.next(seq__46087__$1);
var G__46113 = null;
var G__46114 = (0);
var G__46115 = (0);
seq__46087 = G__46112;
chunk__46089 = G__46113;
count__46090 = G__46114;
i__46091 = G__46115;
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
return tetris.assets.load_piece_styles("b11");
});

//# sourceMappingURL=tetris.assets.js.map
