goog.provide('tetris.screens.menu_system');
tetris.screens.menu_system.item = (function tetris$screens$menu_system$item(var_args){
var args__5903__auto__ = [];
var len__5897__auto___41260 = arguments.length;
var i__5898__auto___41261 = (0);
while(true){
if((i__5898__auto___41261 < len__5897__auto___41260)){
args__5903__auto__.push((arguments[i__5898__auto___41261]));

var G__41262 = (i__5898__auto___41261 + (1));
i__5898__auto___41261 = G__41262;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((3) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((3)),(0),null)):null);
return tetris.screens.menu_system.item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5904__auto__);
});

(tetris.screens.menu_system.item.cljs$core$IFn$_invoke$arity$variadic = (function (id,parent,order,data){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"parent","parent",-878878779),parent,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.first(data),new cljs.core.Keyword(null,"order","order",-1254677256),order], null);
}));

(tetris.screens.menu_system.item.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tetris.screens.menu_system.item.cljs$lang$applyTo = (function (seq41254){
var G__41255 = cljs.core.first(seq41254);
var seq41254__$1 = cljs.core.next(seq41254);
var G__41256 = cljs.core.first(seq41254__$1);
var seq41254__$2 = cljs.core.next(seq41254__$1);
var G__41257 = cljs.core.first(seq41254__$2);
var seq41254__$3 = cljs.core.next(seq41254__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41255,G__41256,G__41257,seq41254__$3);
}));

tetris.screens.menu_system.make_menu_system = (function tetris$screens$menu_system$make_menu_system(items,hover){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"active","active",1895962068),null,new cljs.core.Keyword(null,"hover","hover",-341141711),hover,new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,item){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item),item);
}),cljs.core.PersistentArrayMap.EMPTY,items)], null);
});
tetris.screens.menu_system.children = (function tetris$screens$menu_system$children(state,item_id){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.sort.cljs$core$IFn$_invoke$arity$2((function (p1__41258_SHARP_,p2__41259_SHARP_){
return (new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(p1__41258_SHARP_) - new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(p2__41259_SHARP_));
}),cljs.core.reduce_kv((function (xs,_id,item){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(item),item_id)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(xs,item);
} else {
return xs;
}
}),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(state))));
});
tetris.screens.menu_system.menu_QMARK_ = (function tetris$screens$menu_system$menu_QMARK_(state,item){
var item_id = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return item;
}
})();
return cljs.core.boolean$(cljs.core.seq(tetris.screens.menu_system.children(state,item_id)));
});
tetris.screens.menu_system.show_active_menu_items = (function tetris$screens$menu_system$show_active_menu_items(state){
var items = tetris.screens.menu_system.children(state,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(state));
if(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(state))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(items,tetris.screens.menu_system.item(new cljs.core.Keyword(null,"back","back",-417520012),null,(new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(cljs.core.last(items)) + (1))));
} else {
return items;
}
});
tetris.screens.menu_system.select = (function tetris$screens$menu_system$select(state,dir){
var items = tetris.screens.menu_system.show_active_menu_items(state);
var prev_index = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,item){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"hover","hover",-341141711).cljs$core$IFn$_invoke$arity$1(state))){
return i;
} else {
return null;
}
}),items));
var curr_index = cljs.core.mod((prev_index + dir),cljs.core.count(items));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.count(items)], 0));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(items,curr_index)));
});
tetris.screens.menu_system.hover_first = (function tetris$screens$menu_system$hover_first(state){
var temp__5823__auto__ = cljs.core.seq(tetris.screens.menu_system.children(state,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(state)));
if(temp__5823__auto__){
var items = temp__5823__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(items)));
} else {
return state;
}
});
tetris.screens.menu_system.enter_hover_menu = (function tetris$screens$menu_system$enter_hover_menu(state){
return tetris.screens.menu_system.hover_first(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"hover","hover",-341141711).cljs$core$IFn$_invoke$arity$1(state)));
});
tetris.screens.menu_system.back_to_parent = (function tetris$screens$menu_system$back_to_parent(state){
if(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(state))){
return tetris.screens.menu_system.hover_first(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"active","active",1895962068),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"parent","parent",-878878779)], null))));
} else {
return state;
}
});

//# sourceMappingURL=tetris.screens.menu_system.js.map
