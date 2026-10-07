goog.provide('tetris.assets');
var module$node_modules$pixi_DOT_js$lib$index=shadow.js.require("module$node_modules$pixi_DOT_js$lib$index", {});
tetris.assets.load_piece_styles = (async function tetris$assets$load_piece_styles(styles){
var seq__52983 = cljs.core.seq(((typeof styles === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [styles], null):styles));
var chunk__52985 = null;
var count__52986 = (0);
var i__52987 = (0);
while(true){
if((i__52987 < count__52986)){
var piece_style = chunk__52985.cljs$core$IIndexed$_nth$arity$2(null,i__52987);
var alias_52989 = (""+"gameplay"+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(piece_style));
var src_52990 = (""+"assets/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias_52989)+".png");
(await module$node_modules$pixi_DOT_js$lib$index.Assets.load(({"alias": alias_52989, "src": src_52990})));


var G__52991 = seq__52983;
var G__52992 = chunk__52985;
var G__52993 = count__52986;
var G__52994 = (i__52987 + (1));
seq__52983 = G__52991;
chunk__52985 = G__52992;
count__52986 = G__52993;
i__52987 = G__52994;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__52983);
if(temp__5825__auto__){
var seq__52983__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52983__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__52983__$1);
var G__52995 = cljs.core.chunk_rest(seq__52983__$1);
var G__52996 = c__5694__auto__;
var G__52997 = cljs.core.count(c__5694__auto__);
var G__52998 = (0);
seq__52983 = G__52995;
chunk__52985 = G__52996;
count__52986 = G__52997;
i__52987 = G__52998;
continue;
} else {
var piece_style = cljs.core.first(seq__52983__$1);
var alias_52999 = (""+"gameplay"+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(piece_style));
var src_53000 = (""+"assets/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias_52999)+".png");
(await module$node_modules$pixi_DOT_js$lib$index.Assets.load(({"alias": alias_52999, "src": src_53000})));


var G__53001 = cljs.core.next(seq__52983__$1);
var G__53002 = null;
var G__53003 = (0);
var G__53004 = (0);
seq__52983 = G__53001;
chunk__52985 = G__53002;
count__52986 = G__53003;
i__52987 = G__53004;
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
