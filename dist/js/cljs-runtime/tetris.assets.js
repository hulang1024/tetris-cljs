goog.provide('tetris.assets');
var module$node_modules$pixi_DOT_js$lib$index=shadow.js.require("module$node_modules$pixi_DOT_js$lib$index", {});
tetris.assets.load_piece_styles = (async function tetris$assets$load_piece_styles(styles){
var seq__56163 = cljs.core.seq(((typeof styles === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [styles], null):styles));
var chunk__56165 = null;
var count__56166 = (0);
var i__56167 = (0);
while(true){
if((i__56167 < count__56166)){
var piece_style = chunk__56165.cljs$core$IIndexed$_nth$arity$2(null,i__56167);
var alias_56172 = (""+"gameplay"+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(piece_style));
var src_56173 = (""+"assets/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias_56172)+".png");
(await module$node_modules$pixi_DOT_js$lib$index.Assets.load(({"alias": alias_56172, "src": src_56173})));


var G__56174 = seq__56163;
var G__56175 = chunk__56165;
var G__56176 = count__56166;
var G__56177 = (i__56167 + (1));
seq__56163 = G__56174;
chunk__56165 = G__56175;
count__56166 = G__56176;
i__56167 = G__56177;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__56163);
if(temp__5825__auto__){
var seq__56163__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56163__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__56163__$1);
var G__56182 = cljs.core.chunk_rest(seq__56163__$1);
var G__56183 = c__5694__auto__;
var G__56184 = cljs.core.count(c__5694__auto__);
var G__56185 = (0);
seq__56163 = G__56182;
chunk__56165 = G__56183;
count__56166 = G__56184;
i__56167 = G__56185;
continue;
} else {
var piece_style = cljs.core.first(seq__56163__$1);
var alias_56186 = (""+"gameplay"+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(piece_style));
var src_56187 = (""+"assets/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias_56186)+".png");
(await module$node_modules$pixi_DOT_js$lib$index.Assets.load(({"alias": alias_56186, "src": src_56187})));


var G__56188 = cljs.core.next(seq__56163__$1);
var G__56189 = null;
var G__56190 = (0);
var G__56191 = (0);
seq__56163 = G__56188;
chunk__56165 = G__56189;
count__56166 = G__56190;
i__56167 = G__56191;
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
