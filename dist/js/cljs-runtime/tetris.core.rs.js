goog.provide('tetris.core.rs');
tetris.core.rs.rotation_systems = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"srs","srs",1327991978),new cljs.core.Keyword(null,"nrs-nes","nrs-nes",2041573359),new cljs.core.Keyword(null,"nrs-game-boy","nrs-game-boy",-720778955),new cljs.core.Keyword(null,"nrs-dx","nrs-dx",-576186449)], null);
tetris.core.rs.RotationSystem = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432)], null),tetris.core.rs.rotation_systems);
tetris.core.rs.cell_filled = true;
tetris.core.rs.cell_empty = false;
tetris.core.rs.ShapeMatrix = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),(3),new cljs.core.Keyword(null,"max","max",61366548),(4)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),(3),new cljs.core.Keyword(null,"max","max",61366548),(4)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),false,true], null)], null)], null);
if((typeof tetris !== 'undefined') && (typeof tetris.core !== 'undefined') && (typeof tetris.core.rs !== 'undefined') && (typeof tetris.core.rs.rotate !== 'undefined')){
} else {
tetris.core.rs.rotate = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__46093 = cljs.core.get_global_hierarchy;
return (fexpr__46093.cljs$core$IFn$_invoke$arity$0 ? fexpr__46093.cljs$core$IFn$_invoke$arity$0() : fexpr__46093.call(null));
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
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__46096 = cljs.core.get_global_hierarchy;
return (fexpr__46096.cljs$core$IFn$_invoke$arity$0 ? fexpr__46096.cljs$core$IFn$_invoke$arity$0() : fexpr__46096.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tetris.core.rs","shape"),new cljs.core.Keyword(null,"rs","rs",913581969),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}
if((typeof tetris !== 'undefined') && (typeof tetris.core !== 'undefined') && (typeof tetris.core.rs !== 'undefined') && (typeof tetris.core.rs.cells !== 'undefined')){
} else {
tetris.core.rs.cells = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__46109 = cljs.core.get_global_hierarchy;
return (fexpr__46109.cljs$core$IFn$_invoke$arity$0 ? fexpr__46109.cljs$core$IFn$_invoke$arity$0() : fexpr__46109.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tetris.core.rs","cells"),new cljs.core.Keyword(null,"rs","rs",913581969),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}
tetris.core.rs.cells.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (piece){
return cljs.core.vec((function (){var iter__5649__auto__ = (function tetris$core$rs$iter__46118(s__46119){
return (new cljs.core.LazySeq(null,(function (){
var s__46119__$1 = s__46119;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__46119__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var vec__46126 = cljs.core.first(xs__6385__auto__);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46126,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46126,(1),null);
var iterys__5645__auto__ = ((function (s__46119__$1,vec__46126,r,row,xs__6385__auto__,temp__5825__auto__){
return (function tetris$core$rs$iter__46118_$_iter__46121(s__46122){
return (new cljs.core.LazySeq(null,((function (s__46119__$1,vec__46126,r,row,xs__6385__auto__,temp__5825__auto__){
return (function (){
var s__46122__$1 = s__46122;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__46122__$1);
if(temp__5825__auto____$1){
var s__46122__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__46122__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__46122__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__46124 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__46123 = (0);
while(true){
if((i__46123 < size__5648__auto__)){
var vec__46131 = cljs.core._nth(c__5647__auto__,i__46123);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46131,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46131,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,true)){
cljs.core.chunk_append(b__46124,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null));

var G__46137 = (i__46123 + (1));
i__46123 = G__46137;
continue;
} else {
var G__46138 = (i__46123 + (1));
i__46123 = G__46138;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46124),tetris$core$rs$iter__46118_$_iter__46121(cljs.core.chunk_rest(s__46122__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46124),null);
}
} else {
var vec__46134 = cljs.core.first(s__46122__$2);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46134,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46134,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,true)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null),tetris$core$rs$iter__46118_$_iter__46121(cljs.core.rest(s__46122__$2)));
} else {
var G__46139 = cljs.core.rest(s__46122__$2);
s__46122__$1 = G__46139;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__46119__$1,vec__46126,r,row,xs__6385__auto__,temp__5825__auto__))
,null,null));
});})(s__46119__$1,vec__46126,r,row,xs__6385__auto__,temp__5825__auto__))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,row)));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,tetris$core$rs$iter__46118(cljs.core.rest(s__46119__$1)));
} else {
var G__46140 = cljs.core.rest(s__46119__$1);
s__46119__$1 = G__46140;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,tetris.core.rs.shape.cljs$core$IFn$_invoke$arity$1(piece)));
})());
}));

//# sourceMappingURL=tetris.core.rs.js.map
