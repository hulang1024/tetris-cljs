goog.provide('tetris.assets');
var module$node_modules$pixi_DOT_js$lib$index=shadow.js.require("module$node_modules$pixi_DOT_js$lib$index", {});
tetris.assets.load_piece_styles = (async function tetris$assets$load_piece_styles(styles){
var seq__41904 = cljs.core.seq(((typeof styles === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [styles], null):styles));
var chunk__41906 = null;
var count__41907 = (0);
var i__41908 = (0);
while(true){
if((i__41908 < count__41907)){
var piece_style = chunk__41906.cljs$core$IIndexed$_nth$arity$2(null,i__41908);
var alias_41911 = (""+"gameplay"+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(piece_style));
var src_41912 = (""+"/assets/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias_41911)+".png");
(await module$node_modules$pixi_DOT_js$lib$index.Assets.load(({"alias": alias_41911, "src": src_41912})));


var G__41913 = seq__41904;
var G__41914 = chunk__41906;
var G__41915 = count__41907;
var G__41916 = (i__41908 + (1));
seq__41904 = G__41913;
chunk__41906 = G__41914;
count__41907 = G__41915;
i__41908 = G__41916;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__41904);
if(temp__5825__auto__){
var seq__41904__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41904__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__41904__$1);
var G__41917 = cljs.core.chunk_rest(seq__41904__$1);
var G__41918 = c__5694__auto__;
var G__41919 = cljs.core.count(c__5694__auto__);
var G__41920 = (0);
seq__41904 = G__41917;
chunk__41906 = G__41918;
count__41907 = G__41919;
i__41908 = G__41920;
continue;
} else {
var piece_style = cljs.core.first(seq__41904__$1);
var alias_41921 = (""+"gameplay"+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(piece_style));
var src_41922 = (""+"/assets/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias_41921)+".png");
(await module$node_modules$pixi_DOT_js$lib$index.Assets.load(({"alias": alias_41921, "src": src_41922})));


var G__41923 = cljs.core.next(seq__41904__$1);
var G__41924 = null;
var G__41925 = (0);
var G__41926 = (0);
seq__41904 = G__41923;
chunk__41906 = G__41924;
count__41907 = G__41925;
i__41908 = G__41926;
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
