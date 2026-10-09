goog.provide('tetris.screens.menu');
tetris.screens.menu.menu_item = (function tetris$screens$menu$menu_item(var_args){
var args__5903__auto__ = [];
var len__5897__auto___40066 = arguments.length;
var i__5898__auto___40067 = (0);
while(true){
if((i__5898__auto___40067 < len__5897__auto___40066)){
args__5903__auto__.push((arguments[i__5898__auto___40067]));

var G__40068 = (i__5898__auto___40067 + (1));
i__5898__auto___40067 = G__40068;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((3) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((3)),(0),null)):null);
return tetris.screens.menu.menu_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5904__auto__);
});

(tetris.screens.menu.menu_item.cljs$core$IFn$_invoke$arity$variadic = (function (id,parent,order,data){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"parent","parent",-878878779),parent,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.first(data),new cljs.core.Keyword(null,"order","order",-1254677256),order], null)]);
}));

(tetris.screens.menu.menu_item.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tetris.screens.menu.menu_item.cljs$lang$applyTo = (function (seq40058){
var G__40059 = cljs.core.first(seq40058);
var seq40058__$1 = cljs.core.next(seq40058);
var G__40060 = cljs.core.first(seq40058__$1);
var seq40058__$2 = cljs.core.next(seq40058__$1);
var G__40061 = cljs.core.first(seq40058__$2);
var seq40058__$3 = cljs.core.next(seq40058__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40059,G__40060,G__40061,seq40058__$3);
}));

tetris.screens.menu.make_menu_system = (function tetris$screens$menu$make_menu_system(menus){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"active","active",1895962068),null,new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.Keyword(null,"solo","solo",-316350075),new cljs.core.Keyword(null,"menus","menus",-1377611675),menus], null);
});
tetris.screens.menu.children = (function tetris$screens$menu$children(state,menu_id){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.sort.cljs$core$IFn$_invoke$arity$2((function (p1__40062_SHARP_,p2__40063_SHARP_){
return (new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__40062_SHARP_)) - new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p2__40063_SHARP_)));
}),cljs.core.reduce_kv((function (xs,id,p){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(p),menu_id)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(xs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,p], null));
} else {
return xs;
}
}),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"menus","menus",-1377611675).cljs$core$IFn$_invoke$arity$1(state))));
});
tetris.screens.menu.menu_QMARK_ = (function tetris$screens$menu$menu_QMARK_(state,menu_id){
return cljs.core.boolean$(cljs.core.seq(tetris.screens.menu.children(state,menu_id)));
});
tetris.screens.menu.show_active_menu_items = (function tetris$screens$menu$show_active_menu_items(state){
var items = tetris.screens.menu.children(state,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(state));
if(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(state))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(items,new cljs.core.Keyword(null,"back","back",-417520012));
} else {
return items;
}
});
tetris.screens.menu.select = (function tetris$screens$menu$select(state,dir){
var items = tetris.screens.menu.show_active_menu_items(state);
var prev_index = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,id){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"hover","hover",-341141711).cljs$core$IFn$_invoke$arity$1(state))){
return i;
} else {
return null;
}
}),items));
var curr_index = cljs.core.mod((prev_index + dir),cljs.core.count(items));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"hover","hover",-341141711),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(items,curr_index));
});
tetris.screens.menu.hover_first = (function tetris$screens$menu$hover_first(state){
var temp__5823__auto__ = cljs.core.seq(tetris.screens.menu.children(state,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(state)));
if(temp__5823__auto__){
var children = temp__5823__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"hover","hover",-341141711),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(0)));
} else {
return state;
}
});
tetris.screens.menu.enter_hover_menu = (function tetris$screens$menu$enter_hover_menu(state){
return tetris.screens.menu.hover_first(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"hover","hover",-341141711).cljs$core$IFn$_invoke$arity$1(state)));
});
tetris.screens.menu.back_to_top = (function tetris$screens$menu$back_to_top(state){
return tetris.screens.menu.hover_first(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"active","active",1895962068),null));
});
tetris.screens.menu.back_to_parent = (function tetris$screens$menu$back_to_parent(state){
if(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(state))){
return tetris.screens.menu.hover_first(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1((function (){var G__40065 = new cljs.core.Keyword(null,"menus","menus",-1377611675).cljs$core$IFn$_invoke$arity$1(state);
var fexpr__40064 = new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(state);
return (fexpr__40064.cljs$core$IFn$_invoke$arity$1 ? fexpr__40064.cljs$core$IFn$_invoke$arity$1(G__40065) : fexpr__40064.call(null,G__40065));
})())));
} else {
return state;
}
});

//# sourceMappingURL=tetris.screens.menu.js.map
