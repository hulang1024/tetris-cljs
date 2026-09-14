goog.provide('tetris.core.schema');
tetris.core.schema.Dir = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),(0),(1),(2),(3)], null);
tetris.core.schema.PieceType = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.Keyword(null,"l","l",1395893423),new cljs.core.Keyword(null,"j","j",-1397974765),new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"t","t",-1397832519)], null);
tetris.core.schema.Matrix_of = (function tetris$core$schema$Matrix_of(elem){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(4)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(4)], null),elem], null)], null);
});
tetris.core.schema.BitMatrix = tetris.core.schema.Matrix_of(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),(0),(1)], null));
tetris.core.schema.PieceShapeMatrix = tetris.core.schema.Matrix_of(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),tetris.core.schema.PieceType], null));
tetris.core.schema.Cell = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),(0),(1),(2),(3),(4),(5),(6),(7)], null);
tetris.core.schema.Row = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),tetris.core.schema.Cell], null);
tetris.core.schema.Board = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),tetris.core.schema.Row], null);

//# sourceMappingURL=tetris.core.schema.js.map
