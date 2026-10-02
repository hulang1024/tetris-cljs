goog.provide('tetris.core.ruleset.classic');
tetris.core.ruleset.classic.classic_ruleset = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"speed-level-system","speed-level-system",-1993846620),new cljs.core.Keyword(null,"dcd","dcd",594655109),new cljs.core.Keyword(null,"das-cancel-on-direction-change?","das-cancel-on-direction-change?",1181687623),new cljs.core.Keyword(null,"arr","arr",474961448),new cljs.core.Keyword(null,"piece-generator","piece-generator",1898771696),new cljs.core.Keyword(null,"rotate-180-allowed?","rotate-180-allowed?",129813488),new cljs.core.Keyword(null,"hold-allowed?","hold-allowed?",-1535961038),new cljs.core.Keyword(null,"preview-count","preview-count",-329263374),new cljs.core.Keyword(null,"rotation-system","rotation-system",-186821002),new cljs.core.Keyword(null,"scoring","scoring",-454135688),new cljs.core.Keyword(null,"das","das",-1801456200),new cljs.core.Keyword(null,"sdf","sdf",-844168232),new cljs.core.Keyword(null,"hard-drop-allowed?","hard-drop-allowed?",551028026),new cljs.core.Keyword(null,"ruleset","ruleset",-2145273412),new cljs.core.Keyword(null,"das-cancel-on-lock?","das-cancel-on-lock?",-298592260),new cljs.core.Keyword(null,"ghost-enabled?","ghost-enabled?",-261151779)],[tetris.core.ruleset.speedlv_nes.make(),(16),false,(6),tetris.core.ruleset.pgen_seq.make(),false,false,(1),new cljs.core.Keyword(null,"nrs-nes","nrs-nes",2041573359),tetris.core.ruleset.scoring_nes.make(),(16),(1),false,new cljs.core.Keyword(null,"classic","classic",-599706370),false,false]);
tetris.core.ruleset.classic.level_fall_interval_table = new cljs.core.PersistentVector(null, 30, 5, cljs.core.PersistentVector.EMPTY_NODE, [(48),(43),(38),(33),(28),(23),(18),(13),(8),(6),(5),(5),(5),(4),(4),(4),(3),(3),(3),(2),(2),(2),(2),(2),(2),(2),(2),(2),(2),(1)], null);
tetris.core.ruleset.fall_interval.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"classic","classic",-599706370),(function (state){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(tetris.core.ruleset.classic.level_fall_interval_table,new cljs.core.Keyword(null,"speed-level","speed-level",-256559849).cljs$core$IFn$_invoke$arity$1(state),(1));
}));
tetris.core.ruleset.soft_drop_interval.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"classic","classic",-599706370),(function (state){
return ((2) / new cljs.core.Keyword(null,"sdf","sdf",-844168232).cljs$core$IFn$_invoke$arity$1(state));
}));
tetris.core.ruleset.line_clear_delay.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"classic","classic",-599706370),(function (_){
return (4);
}));
tetris.core.ruleset.lock_delay.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"classic","classic",-599706370),(function (_){
return (10);
}));

//# sourceMappingURL=tetris.core.ruleset.classic.js.map
