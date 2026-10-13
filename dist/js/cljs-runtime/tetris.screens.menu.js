goog.provide('tetris.screens.menu');
tetris.screens.menu.item = (function tetris$screens$menu$item(var_args){
var args__5903__auto__ = [];
var len__5897__auto___39514 = arguments.length;
var i__5898__auto___39515 = (0);
while(true){
if((i__5898__auto___39515 < len__5897__auto___39514)){
args__5903__auto__.push((arguments[i__5898__auto___39515]));

var G__39516 = (i__5898__auto___39515 + (1));
i__5898__auto___39515 = G__39516;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((3) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((3)),(0),null)):null);
return tetris.screens.menu.item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5904__auto__);
});

(tetris.screens.menu.item.cljs$core$IFn$_invoke$arity$variadic = (function (id,parent,order,data){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"parent","parent",-878878779),parent,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.first(data),new cljs.core.Keyword(null,"visible?","visible?",2129863715),true,new cljs.core.Keyword(null,"order","order",-1254677256),order], null);
}));

(tetris.screens.menu.item.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tetris.screens.menu.item.cljs$lang$applyTo = (function (seq39506){
var G__39507 = cljs.core.first(seq39506);
var seq39506__$1 = cljs.core.next(seq39506);
var G__39508 = cljs.core.first(seq39506__$1);
var seq39506__$2 = cljs.core.next(seq39506__$1);
var G__39509 = cljs.core.first(seq39506__$2);
var seq39506__$3 = cljs.core.next(seq39506__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39507,G__39508,G__39509,seq39506__$3);
}));

tetris.screens.menu.make = (function tetris$screens$menu$make(items,hover){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"active","active",1895962068),null,new cljs.core.Keyword(null,"hover","hover",-341141711),hover,new cljs.core.Keyword(null,"items","items",1031954938),items], null);
});
tetris.screens.menu.find_item = (function tetris$screens$menu$find_item(state,item_id){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__39510_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(item_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__39510_SHARP_));
}),new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(state)));
});
tetris.screens.menu.children = (function tetris$screens$menu$children(state,item_id){
return cljs.core.vec(cljs.core.sort.cljs$core$IFn$_invoke$arity$2((function (p1__39512_SHARP_,p2__39513_SHARP_){
return (new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(p1__39512_SHARP_) - new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(p2__39513_SHARP_));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__39511_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(p1__39511_SHARP_),item_id);
}),new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(state))));
});
tetris.screens.menu.menu_QMARK_ = (function tetris$screens$menu$menu_QMARK_(state,item){
var item_id = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return item;
}
})();
return cljs.core.boolean$(cljs.core.seq(tetris.screens.menu.children(state,item_id)));
});
tetris.screens.menu.show_active_menu_items = (function tetris$screens$menu$show_active_menu_items(state){
var items = cljs.core.filterv(new cljs.core.Keyword(null,"visible?","visible?",2129863715),tetris.screens.menu.children(state,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(state)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(state))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(items,tetris.screens.menu.item(new cljs.core.Keyword(null,"back","back",-417520012),null,(new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(cljs.core.last(items)) + (1))));
} else {
return items;
}
});
tetris.screens.menu.change_hover = (function tetris$screens$menu$change_hover(state,item_id){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"hover","hover",-341141711),item_id);
});
tetris.screens.menu.move_hover = (function tetris$screens$menu$move_hover(state,dir){
var items = tetris.screens.menu.show_active_menu_items(state);
var prev_index = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,item){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"hover","hover",-341141711).cljs$core$IFn$_invoke$arity$1(state))){
return i;
} else {
return null;
}
}),items));
var curr_index = cljs.core.mod((prev_index + dir),cljs.core.count(items));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(items,curr_index)));
});
tetris.screens.menu.hover_first = (function tetris$screens$menu$hover_first(state){
var temp__5823__auto__ = cljs.core.seq(tetris.screens.menu.children(state,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(state)));
if(temp__5823__auto__){
var items = temp__5823__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(items)));
} else {
return state;
}
});
tetris.screens.menu.enter_hover_menu = (function tetris$screens$menu$enter_hover_menu(state){
return tetris.screens.menu.hover_first(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"hover","hover",-341141711).cljs$core$IFn$_invoke$arity$1(state)));
});
tetris.screens.menu.back_to_parent = (function tetris$screens$menu$back_to_parent(state){
if(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(state))){
return tetris.screens.menu.hover_first(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(tetris.screens.menu.find_item(state,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(state)))));
} else {
return state;
}
});

//# sourceMappingURL=tetris.screens.menu.js.map
