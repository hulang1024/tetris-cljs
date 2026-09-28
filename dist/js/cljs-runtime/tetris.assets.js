goog.provide('tetris.assets');
var module$node_modules$pixi_DOT_js$lib$index=shadow.js.require("module$node_modules$pixi_DOT_js$lib$index", {});
tetris.assets.load_piece_styles = (async function tetris$assets$load_piece_styles(styles){
var seq__49638 = cljs.core.seq(((typeof styles === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [styles], null):styles));
var chunk__49640 = null;
var count__49641 = (0);
var i__49642 = (0);
while(true){
if((i__49642 < count__49641)){
var piece_style = chunk__49640.cljs$core$IIndexed$_nth$arity$2(null,i__49642);
var alias_49644 = (""+"gameplay"+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(piece_style));
var src_49645 = (""+"assets/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias_49644)+".png");
(await module$node_modules$pixi_DOT_js$lib$index.Assets.load(({"alias": alias_49644, "src": src_49645})));


var G__49646 = seq__49638;
var G__49647 = chunk__49640;
var G__49648 = count__49641;
var G__49649 = (i__49642 + (1));
seq__49638 = G__49646;
chunk__49640 = G__49647;
count__49641 = G__49648;
i__49642 = G__49649;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__49638);
if(temp__5825__auto__){
var seq__49638__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49638__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__49638__$1);
var G__49650 = cljs.core.chunk_rest(seq__49638__$1);
var G__49651 = c__5694__auto__;
var G__49652 = cljs.core.count(c__5694__auto__);
var G__49653 = (0);
seq__49638 = G__49650;
chunk__49640 = G__49651;
count__49641 = G__49652;
i__49642 = G__49653;
continue;
} else {
var piece_style = cljs.core.first(seq__49638__$1);
var alias_49654 = (""+"gameplay"+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(piece_style));
var src_49655 = (""+"assets/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias_49654)+".png");
(await module$node_modules$pixi_DOT_js$lib$index.Assets.load(({"alias": alias_49654, "src": src_49655})));


var G__49656 = cljs.core.next(seq__49638__$1);
var G__49657 = null;
var G__49658 = (0);
var G__49659 = (0);
seq__49638 = G__49656;
chunk__49640 = G__49657;
count__49641 = G__49658;
i__49642 = G__49659;
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
