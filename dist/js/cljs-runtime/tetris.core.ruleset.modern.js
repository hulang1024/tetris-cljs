goog.provide('tetris.core.ruleset.modern');
tetris.core.ruleset.modern.modern_ruleset = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"pause-allowed?","pause-allowed?",-1612700795),new cljs.core.Keyword(null,"dcd","dcd",594655109),new cljs.core.Keyword(null,"das-cancel-on-direction-change?","das-cancel-on-direction-change?",1181687623),new cljs.core.Keyword(null,"arr","arr",474961448),new cljs.core.Keyword(null,"piece-generator","piece-generator",1898771696),new cljs.core.Keyword(null,"rotate-180-allowed?","rotate-180-allowed?",129813488),new cljs.core.Keyword(null,"hold-allowed?","hold-allowed?",-1535961038),new cljs.core.Keyword(null,"preview-count","preview-count",-329263374),new cljs.core.Keyword(null,"rotation-system","rotation-system",-186821002),new cljs.core.Keyword(null,"das","das",-1801456200),new cljs.core.Keyword(null,"sdf","sdf",-844168232),new cljs.core.Keyword(null,"hard-drop-allowed?","hard-drop-allowed?",551028026),new cljs.core.Keyword(null,"ruleset","ruleset",-2145273412),new cljs.core.Keyword(null,"das-cancel-on-lock?","das-cancel-on-lock?",-298592260),new cljs.core.Keyword(null,"ghost-enabled?","ghost-enabled?",-261151779)],[true,(1),true,(2),tetris.core.ruleset.pgen_7bag.make_piece_generator(),true,true,(4),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"srs","srs",1327991978),new cljs.core.Keyword(null,"piece-shapes","piece-shapes",1278235176),tetris.core.ruleset.rotation_srs.piece_shapes], null),(10),(6),true,new cljs.core.Keyword(null,"modern","modern",243428796),true,true]);
tetris.core.ruleset.fall_interval.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"modern","modern",243428796),(function (_state){
return (48);
}));
tetris.core.ruleset.soft_drop_interval.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"modern","modern",243428796),(function (state){
return (tetris.core.ruleset.fall_interval.cljs$core$IFn$_invoke$arity$1(state) / new cljs.core.Keyword(null,"sdf","sdf",-844168232).cljs$core$IFn$_invoke$arity$1(state));
}));
tetris.core.ruleset.line_clear_delay.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"modern","modern",243428796),(function (_){
return (17);
}));
tetris.core.ruleset.lock_delay.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"modern","modern",243428796),(function (_){
return (30);
}));

//# sourceMappingURL=tetris.core.ruleset.modern.js.map
