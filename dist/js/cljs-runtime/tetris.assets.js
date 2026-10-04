goog.provide('tetris.assets');
var module$node_modules$pixi_DOT_js$lib$index=shadow.js.require("module$node_modules$pixi_DOT_js$lib$index", {});
tetris.assets.load_piece_styles = (async function tetris$assets$load_piece_styles(styles){
var seq__40513 = cljs.core.seq(((typeof styles === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [styles], null):styles));
var chunk__40515 = null;
var count__40516 = (0);
var i__40517 = (0);
while(true){
if((i__40517 < count__40516)){
var piece_style = chunk__40515.cljs$core$IIndexed$_nth$arity$2(null,i__40517);
var alias_40541 = (""+"gameplay"+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(piece_style));
var src_40542 = (""+"assets/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias_40541)+".png");
(await module$node_modules$pixi_DOT_js$lib$index.Assets.load(({"alias": alias_40541, "src": src_40542})));


var G__40543 = seq__40513;
var G__40544 = chunk__40515;
var G__40545 = count__40516;
var G__40546 = (i__40517 + (1));
seq__40513 = G__40543;
chunk__40515 = G__40544;
count__40516 = G__40545;
i__40517 = G__40546;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__40513);
if(temp__5825__auto__){
var seq__40513__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40513__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__40513__$1);
var G__40547 = cljs.core.chunk_rest(seq__40513__$1);
var G__40548 = c__5694__auto__;
var G__40549 = cljs.core.count(c__5694__auto__);
var G__40550 = (0);
seq__40513 = G__40547;
chunk__40515 = G__40548;
count__40516 = G__40549;
i__40517 = G__40550;
continue;
} else {
var piece_style = cljs.core.first(seq__40513__$1);
var alias_40552 = (""+"gameplay"+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(piece_style));
var src_40553 = (""+"assets/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias_40552)+".png");
(await module$node_modules$pixi_DOT_js$lib$index.Assets.load(({"alias": alias_40552, "src": src_40553})));


var G__40554 = cljs.core.next(seq__40513__$1);
var G__40555 = null;
var G__40556 = (0);
var G__40557 = (0);
seq__40513 = G__40554;
chunk__40515 = G__40555;
count__40516 = G__40556;
i__40517 = G__40557;
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
