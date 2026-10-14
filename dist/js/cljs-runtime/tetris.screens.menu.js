goog.provide('tetris.screens.menu');
tetris.screens.menu.item = (function tetris$screens$menu$item(var_args){
var G__45525 = arguments.length;
switch (G__45525) {
case 3:
return tetris.screens.menu.item.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return tetris.screens.menu.item.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return tetris.screens.menu.item.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(tetris.screens.menu.item.cljs$core$IFn$_invoke$arity$3 = (function (id,parent,order){
return tetris.screens.menu.item.cljs$core$IFn$_invoke$arity$4(id,parent,order,null);
}));

(tetris.screens.menu.item.cljs$core$IFn$_invoke$arity$4 = (function (id,parent,order,data){
return tetris.screens.menu.item.cljs$core$IFn$_invoke$arity$5(id,parent,order,data,null);
}));

(tetris.screens.menu.item.cljs$core$IFn$_invoke$arity$5 = (function (id,parent,order,data,text_id){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"parent","parent",-878878779),parent,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"visible?","visible?",2129863715),true,new cljs.core.Keyword(null,"text-id","text-id",-32710605),text_id,new cljs.core.Keyword(null,"order","order",-1254677256),order], null);
}));

(tetris.screens.menu.item.cljs$lang$maxFixedArity = 5);

tetris.screens.menu.make = (function tetris$screens$menu$make(items,hover){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"active","active",1895962068),null,new cljs.core.Keyword(null,"hover","hover",-341141711),hover,new cljs.core.Keyword(null,"items","items",1031954938),items], null);
});
tetris.screens.menu.find_item = (function tetris$screens$menu$find_item(state,item_id){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__45526_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(item_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__45526_SHARP_));
}),new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(state)));
});
tetris.screens.menu.children = (function tetris$screens$menu$children(state,item_id){
return cljs.core.vec(cljs.core.sort.cljs$core$IFn$_invoke$arity$2((function (p1__45528_SHARP_,p2__45529_SHARP_){
return (new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(p1__45528_SHARP_) - new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(p2__45529_SHARP_));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__45527_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(p1__45527_SHARP_),item_id);
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
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(items,tetris.screens.menu.item.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"back","back",-417520012),null,(new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(cljs.core.peek(items)) + (1))));
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
