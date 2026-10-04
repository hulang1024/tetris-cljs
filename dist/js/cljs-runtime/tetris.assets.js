goog.provide('tetris.assets');
var module$node_modules$pixi_DOT_js$lib$index=shadow.js.require("module$node_modules$pixi_DOT_js$lib$index", {});
tetris.assets.load_piece_styles = (async function tetris$assets$load_piece_styles(styles){
var seq__39689 = cljs.core.seq(((typeof styles === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [styles], null):styles));
var chunk__39691 = null;
var count__39692 = (0);
var i__39693 = (0);
while(true){
if((i__39693 < count__39692)){
var piece_style = chunk__39691.cljs$core$IIndexed$_nth$arity$2(null,i__39693);
var alias_39720 = (""+"gameplay"+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(piece_style));
var src_39721 = (""+"assets/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias_39720)+".png");
(await module$node_modules$pixi_DOT_js$lib$index.Assets.load(({"alias": alias_39720, "src": src_39721})));


var G__39722 = seq__39689;
var G__39723 = chunk__39691;
var G__39724 = count__39692;
var G__39725 = (i__39693 + (1));
seq__39689 = G__39722;
chunk__39691 = G__39723;
count__39692 = G__39724;
i__39693 = G__39725;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__39689);
if(temp__5825__auto__){
var seq__39689__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39689__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__39689__$1);
var G__39726 = cljs.core.chunk_rest(seq__39689__$1);
var G__39727 = c__5694__auto__;
var G__39728 = cljs.core.count(c__5694__auto__);
var G__39729 = (0);
seq__39689 = G__39726;
chunk__39691 = G__39727;
count__39692 = G__39728;
i__39693 = G__39729;
continue;
} else {
var piece_style = cljs.core.first(seq__39689__$1);
var alias_39730 = (""+"gameplay"+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(piece_style));
var src_39731 = (""+"assets/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias_39730)+".png");
(await module$node_modules$pixi_DOT_js$lib$index.Assets.load(({"alias": alias_39730, "src": src_39731})));


var G__39732 = cljs.core.next(seq__39689__$1);
var G__39733 = null;
var G__39734 = (0);
var G__39735 = (0);
seq__39689 = G__39732;
chunk__39691 = G__39733;
count__39692 = G__39734;
i__39693 = G__39735;
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
