goog.provide('tetris.assets');
var module$node_modules$pixi_DOT_js$lib$index=shadow.js.require("module$node_modules$pixi_DOT_js$lib$index", {});
tetris.assets.load_piece_styles = (async function tetris$assets$load_piece_styles(styles){
var seq__42590 = cljs.core.seq(((typeof styles === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [styles], null):styles));
var chunk__42592 = null;
var count__42593 = (0);
var i__42594 = (0);
while(true){
if((i__42594 < count__42593)){
var piece_style = chunk__42592.cljs$core$IIndexed$_nth$arity$2(null,i__42594);
var alias_42618 = (""+"gameplay"+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(piece_style));
var src_42619 = (""+"assets/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias_42618)+".png");
(await module$node_modules$pixi_DOT_js$lib$index.Assets.load(({"alias": alias_42618, "src": src_42619})));


var G__42620 = seq__42590;
var G__42621 = chunk__42592;
var G__42622 = count__42593;
var G__42623 = (i__42594 + (1));
seq__42590 = G__42620;
chunk__42592 = G__42621;
count__42593 = G__42622;
i__42594 = G__42623;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__42590);
if(temp__5825__auto__){
var seq__42590__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42590__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__42590__$1);
var G__42624 = cljs.core.chunk_rest(seq__42590__$1);
var G__42625 = c__5694__auto__;
var G__42626 = cljs.core.count(c__5694__auto__);
var G__42627 = (0);
seq__42590 = G__42624;
chunk__42592 = G__42625;
count__42593 = G__42626;
i__42594 = G__42627;
continue;
} else {
var piece_style = cljs.core.first(seq__42590__$1);
var alias_42629 = (""+"gameplay"+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(piece_style));
var src_42630 = (""+"assets/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias_42629)+".png");
(await module$node_modules$pixi_DOT_js$lib$index.Assets.load(({"alias": alias_42629, "src": src_42630})));


var G__42631 = cljs.core.next(seq__42590__$1);
var G__42632 = null;
var G__42633 = (0);
var G__42634 = (0);
seq__42590 = G__42631;
chunk__42592 = G__42632;
count__42593 = G__42633;
i__42594 = G__42634;
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
