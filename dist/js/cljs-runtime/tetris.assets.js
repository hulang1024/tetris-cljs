goog.provide('tetris.assets');
var module$node_modules$pixi_DOT_js$lib$index=shadow.js.require("module$node_modules$pixi_DOT_js$lib$index", {});
tetris.assets.load_piece_styles = (async function tetris$assets$load_piece_styles(styles){
var seq__45868 = cljs.core.seq(((typeof styles === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [styles], null):styles));
var chunk__45870 = null;
var count__45871 = (0);
var i__45872 = (0);
while(true){
if((i__45872 < count__45871)){
var piece_style = chunk__45870.cljs$core$IIndexed$_nth$arity$2(null,i__45872);
var alias_45889 = (""+"gameplay"+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(piece_style));
var src_45890 = (""+"assets/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias_45889)+".png");
(await module$node_modules$pixi_DOT_js$lib$index.Assets.load(({"alias": alias_45889, "src": src_45890})));


var G__45891 = seq__45868;
var G__45892 = chunk__45870;
var G__45893 = count__45871;
var G__45894 = (i__45872 + (1));
seq__45868 = G__45891;
chunk__45870 = G__45892;
count__45871 = G__45893;
i__45872 = G__45894;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__45868);
if(temp__5825__auto__){
var seq__45868__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45868__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__45868__$1);
var G__45895 = cljs.core.chunk_rest(seq__45868__$1);
var G__45896 = c__5694__auto__;
var G__45897 = cljs.core.count(c__5694__auto__);
var G__45898 = (0);
seq__45868 = G__45895;
chunk__45870 = G__45896;
count__45871 = G__45897;
i__45872 = G__45898;
continue;
} else {
var piece_style = cljs.core.first(seq__45868__$1);
var alias_45899 = (""+"gameplay"+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(piece_style));
var src_45900 = (""+"assets/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias_45899)+".png");
(await module$node_modules$pixi_DOT_js$lib$index.Assets.load(({"alias": alias_45899, "src": src_45900})));


var G__45901 = cljs.core.next(seq__45868__$1);
var G__45902 = null;
var G__45903 = (0);
var G__45904 = (0);
seq__45868 = G__45901;
chunk__45870 = G__45902;
count__45871 = G__45903;
i__45872 = G__45904;
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

return tetris.audio.load_sounds();
});

//# sourceMappingURL=tetris.assets.js.map
