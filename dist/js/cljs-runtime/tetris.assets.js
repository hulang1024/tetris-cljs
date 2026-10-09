goog.provide('tetris.assets');
var module$node_modules$pixi_DOT_js$lib$index=shadow.js.require("module$node_modules$pixi_DOT_js$lib$index", {});
tetris.assets.load_piece_styles = (async function tetris$assets$load_piece_styles(styles){
var seq__47043 = cljs.core.seq(((typeof styles === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [styles], null):styles));
var chunk__47045 = null;
var count__47046 = (0);
var i__47047 = (0);
while(true){
if((i__47047 < count__47046)){
var piece_style = chunk__47045.cljs$core$IIndexed$_nth$arity$2(null,i__47047);
var alias_47082 = (""+"gameplay"+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(piece_style));
var src_47083 = (""+"assets/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias_47082)+".png");
(await module$node_modules$pixi_DOT_js$lib$index.Assets.load(({"alias": alias_47082, "src": src_47083})));


var G__47084 = seq__47043;
var G__47085 = chunk__47045;
var G__47086 = count__47046;
var G__47087 = (i__47047 + (1));
seq__47043 = G__47084;
chunk__47045 = G__47085;
count__47046 = G__47086;
i__47047 = G__47087;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__47043);
if(temp__5825__auto__){
var seq__47043__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47043__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__47043__$1);
var G__47088 = cljs.core.chunk_rest(seq__47043__$1);
var G__47089 = c__5694__auto__;
var G__47090 = cljs.core.count(c__5694__auto__);
var G__47091 = (0);
seq__47043 = G__47088;
chunk__47045 = G__47089;
count__47046 = G__47090;
i__47047 = G__47091;
continue;
} else {
var piece_style = cljs.core.first(seq__47043__$1);
var alias_47093 = (""+"gameplay"+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(piece_style));
var src_47094 = (""+"assets/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias_47093)+".png");
(await module$node_modules$pixi_DOT_js$lib$index.Assets.load(({"alias": alias_47093, "src": src_47094})));


var G__47095 = cljs.core.next(seq__47043__$1);
var G__47096 = null;
var G__47097 = (0);
var G__47098 = (0);
seq__47043 = G__47095;
chunk__47045 = G__47096;
count__47046 = G__47097;
i__47047 = G__47098;
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
