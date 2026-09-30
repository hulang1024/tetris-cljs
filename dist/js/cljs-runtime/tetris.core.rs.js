goog.provide('tetris.core.rs');
tetris.core.rs.rotation_systems = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"srs","srs",1327991978),new cljs.core.Keyword(null,"nrs-nes","nrs-nes",2041573359),new cljs.core.Keyword(null,"nrs-game-boy","nrs-game-boy",-720778955),new cljs.core.Keyword(null,"nrs-dx","nrs-dx",-576186449)], null);
tetris.core.rs.RotationSystem = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432)], null),tetris.core.rs.rotation_systems);
tetris.core.rs.cell_filled = true;
tetris.core.rs.cell_empty = false;
tetris.core.rs.ShapeMatrix = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),(3),new cljs.core.Keyword(null,"max","max",61366548),(4)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),(3),new cljs.core.Keyword(null,"max","max",61366548),(4)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),false,true], null)], null)], null);
tetris.core.rs.shape__GT_cell_indices = (function tetris$core$rs$shape__GT_cell_indices(shape){
return cljs.core.vec((function (){var iter__5649__auto__ = (function tetris$core$rs$shape__GT_cell_indices_$_iter__42549(s__42550){
return (new cljs.core.LazySeq(null,(function (){
var s__42550__$1 = s__42550;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__42550__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var vec__42555 = cljs.core.first(xs__6385__auto__);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42555,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42555,(1),null);
var iterys__5645__auto__ = ((function (s__42550__$1,vec__42555,r,row,xs__6385__auto__,temp__5825__auto__){
return (function tetris$core$rs$shape__GT_cell_indices_$_iter__42549_$_iter__42551(s__42552){
return (new cljs.core.LazySeq(null,((function (s__42550__$1,vec__42555,r,row,xs__6385__auto__,temp__5825__auto__){
return (function (){
var s__42552__$1 = s__42552;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__42552__$1);
if(temp__5825__auto____$1){
var s__42552__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__42552__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__42552__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__42554 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__42553 = (0);
while(true){
if((i__42553 < size__5648__auto__)){
var vec__42558 = cljs.core._nth(c__5647__auto__,i__42553);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42558,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42558,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,true)){
cljs.core.chunk_append(b__42554,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null));

var G__42568 = (i__42553 + (1));
i__42553 = G__42568;
continue;
} else {
var G__42569 = (i__42553 + (1));
i__42553 = G__42569;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42554),tetris$core$rs$shape__GT_cell_indices_$_iter__42549_$_iter__42551(cljs.core.chunk_rest(s__42552__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42554),null);
}
} else {
var vec__42561 = cljs.core.first(s__42552__$2);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42561,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42561,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,true)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null),tetris$core$rs$shape__GT_cell_indices_$_iter__42549_$_iter__42551(cljs.core.rest(s__42552__$2)));
} else {
var G__42570 = cljs.core.rest(s__42552__$2);
s__42552__$1 = G__42570;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__42550__$1,vec__42555,r,row,xs__6385__auto__,temp__5825__auto__))
,null,null));
});})(s__42550__$1,vec__42555,r,row,xs__6385__auto__,temp__5825__auto__))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,row)));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,tetris$core$rs$shape__GT_cell_indices_$_iter__42549(cljs.core.rest(s__42550__$1)));
} else {
var G__42571 = cljs.core.rest(s__42550__$1);
s__42550__$1 = G__42571;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,shape));
})());
});
if((typeof tetris !== 'undefined') && (typeof tetris.core !== 'undefined') && (typeof tetris.core.rs !== 'undefined') && (typeof tetris.core.rs.rotate !== 'undefined')){
} else {
tetris.core.rs.rotate = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__42564 = cljs.core.get_global_hierarchy;
return (fexpr__42564.cljs$core$IFn$_invoke$arity$0 ? fexpr__42564.cljs$core$IFn$_invoke$arity$0() : fexpr__42564.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tetris.core.rs","rotate"),(function (state,_turn){
return new cljs.core.Keyword(null,"rotation-system","rotation-system",-186821002).cljs$core$IFn$_invoke$arity$1(state);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}
if((typeof tetris !== 'undefined') && (typeof tetris.core !== 'undefined') && (typeof tetris.core.rs !== 'undefined') && (typeof tetris.core.rs.shape !== 'undefined')){
} else {
tetris.core.rs.shape = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__42565 = cljs.core.get_global_hierarchy;
return (fexpr__42565.cljs$core$IFn$_invoke$arity$0 ? fexpr__42565.cljs$core$IFn$_invoke$arity$0() : fexpr__42565.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tetris.core.rs","shape"),new cljs.core.Keyword(null,"rs","rs",913581969),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}
if((typeof tetris !== 'undefined') && (typeof tetris.core !== 'undefined') && (typeof tetris.core.rs !== 'undefined') && (typeof tetris.core.rs.cell_indices !== 'undefined')){
} else {
tetris.core.rs.cell_indices = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__42566 = cljs.core.get_global_hierarchy;
return (fexpr__42566.cljs$core$IFn$_invoke$arity$0 ? fexpr__42566.cljs$core$IFn$_invoke$arity$0() : fexpr__42566.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tetris.core.rs","cell-indices"),new cljs.core.Keyword(null,"rs","rs",913581969),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}
tetris.core.rs.cell_indices.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (piece){
return tetris.core.rs.shape__GT_cell_indices(tetris.core.rs.shape.cljs$core$IFn$_invoke$arity$1(piece));
}));
tetris.core.rs.trimed_shape = (function tetris$core$rs$trimed_shape(piece){
var shape = tetris.core.rs.shape.cljs$core$IFn$_invoke$arity$1(piece);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(piece),new cljs.core.Keyword(null,"o","o",-1350007228))){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__42567_SHARP_){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(p1__42567_SHARP_,(1),(3));
}),shape);
} else {
return shape;
}
});

//# sourceMappingURL=tetris.core.rs.js.map
