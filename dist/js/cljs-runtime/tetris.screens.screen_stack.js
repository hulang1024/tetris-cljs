goog.provide('tetris.screens.screen_stack');
if((typeof tetris !== 'undefined') && (typeof tetris.screens !== 'undefined') && (typeof tetris.screens.screen_stack !== 'undefined') && (typeof tetris.screens.screen_stack.app !== 'undefined')){
} else {
tetris.screens.screen_stack.app = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"active-screen","active-screen",-1779681012),null,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"screen-states","screen-states",-1130965507),cljs.core.PersistentArrayMap.EMPTY], null));
}
tetris.screens.screen_stack.get_screen_state = (function tetris$screens$screen_stack$get_screen_state(id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"screen-states","screen-states",-1130965507).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tetris.screens.screen_stack.app)),id);
});
if((typeof tetris !== 'undefined') && (typeof tetris.screens !== 'undefined') && (typeof tetris.screens.screen_stack !== 'undefined') && (typeof tetris.screens.screen_stack.root !== 'undefined')){
} else {
tetris.screens.screen_stack.root = (new cljs.core.Delay((function (){
return reagent.dom.client.create_root.cljs$core$IFn$_invoke$arity$1(document.getElementById("app"));
}),null));
}
tetris.screens.screen_stack.add_class = (function tetris$screens$screen_stack$add_class(view,class_name){
var vec__47004 = view;
var seq__47005 = cljs.core.seq(vec__47004);
var first__47006 = cljs.core.first(seq__47005);
var seq__47005__$1 = cljs.core.next(seq__47005);
var tag = first__47006;
var first__47006__$1 = cljs.core.first(seq__47005__$1);
var seq__47005__$2 = cljs.core.next(seq__47005__$1);
var attrs = first__47006__$1;
var children = seq__47005__$2;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag], null),((cljs.core.map_QMARK_(attrs))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.flatten(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(attrs)], null)),class_name)], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(attrs,new cljs.core.Keyword(null,"class","class",-2030961996))], 0)),children], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class_name], null),attrs,children], null)));
});
tetris.screens.screen_stack.render_active_screen = (function tetris$screens$screen_stack$render_active_screen(){
if(cljs.core.truth_(new cljs.core.Keyword(null,"active-screen","active-screen",-1779681012).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tetris.screens.screen_stack.app)))){
var temp__5825__auto__ = tetris.screens.screen.render.cljs$core$IFn$_invoke$arity$1(tetris.screens.screen_stack.get_screen_state(new cljs.core.Keyword(null,"active-screen","active-screen",-1779681012).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tetris.screens.screen_stack.app))));
if(cljs.core.truth_(temp__5825__auto__)){
var view = temp__5825__auto__;
return tetris.screens.screen_stack.add_class(view,(""+"screen-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"active-screen","active-screen",-1779681012).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tetris.screens.screen_stack.app))))));
} else {
return null;
}
} else {
return null;
}
});
tetris.screens.screen_stack.enter_screen = (function tetris$screens$screen_stack$enter_screen(screen_id,args){
if(cljs.core.truth_(new cljs.core.Keyword(null,"active-screen","active-screen",-1779681012).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tetris.screens.screen_stack.app)))){
tetris.screens.screen.on_exiting.cljs$core$IFn$_invoke$arity$1(tetris.screens.screen_stack.get_screen_state(new cljs.core.Keyword(null,"active-screen","active-screen",-1779681012).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tetris.screens.screen_stack.app))));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tetris.screens.screen_stack.app,cljs.core.assoc,new cljs.core.Keyword(null,"active-screen","active-screen",-1779681012),null);

var apply_screen = (function (screen_state,app){
var with_id = (function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var or__5162__auto__ = m;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.Keyword(null,"id","id",-1388402092),screen_id);
});
var screen_state__$1 = (((screen_state instanceof reagent.ratom.RAtom))?(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(screen_state,with_id);

return screen_state;
})()
:reagent.core.atom.cljs$core$IFn$_invoke$arity$1(with_id(screen_state)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(app,new cljs.core.Keyword(null,"active-screen","active-screen",-1779681012),screen_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"screen-states","screen-states",-1130965507),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"screen-states","screen-states",-1130965507).cljs$core$IFn$_invoke$arity$1(app),screen_id,screen_state__$1)], 0));
});
var temp__5823__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(tetris.screens.screen_stack.app),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-states","screen-states",-1130965507),screen_id], null));
if(cljs.core.truth_(temp__5823__auto__)){
var screen_state = temp__5823__auto__;
cljs.core.apply.cljs$core$IFn$_invoke$arity$3(tetris.screens.screen.on_entering,screen_state,args);

cljs.core.apply.cljs$core$IFn$_invoke$arity$3(tetris.screens.screen.on_resuming,screen_state,args);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tetris.screens.screen_stack.app,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(apply_screen,screen_state));
} else {
var screen_state = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(tetris.screens.screen.init,screen_id,args);
if((screen_state instanceof Promise)){
return screen_state.then((function (screen_state__$1){
cljs.core.apply.cljs$core$IFn$_invoke$arity$3(tetris.screens.screen.on_entering,screen_state__$1,args);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tetris.screens.screen_stack.app,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(apply_screen,screen_state__$1));
}));
} else {
var app_SINGLEQUOTE_ = apply_screen(screen_state,cljs.core.deref(tetris.screens.screen_stack.app));
cljs.core.apply.cljs$core$IFn$_invoke$arity$3(tetris.screens.screen.on_entering,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-states","screen-states",-1130965507),new cljs.core.Keyword(null,"active-screen","active-screen",-1779681012).cljs$core$IFn$_invoke$arity$1(app_SINGLEQUOTE_)], null)),args);

return cljs.core.reset_BANG_(tetris.screens.screen_stack.app,app_SINGLEQUOTE_);
}
}
});
tetris.screens.screen_stack.push_screen = (function tetris$screens$screen_stack$push_screen(var_args){
var args__5903__auto__ = [];
var len__5897__auto___47105 = arguments.length;
var i__5898__auto___47106 = (0);
while(true){
if((i__5898__auto___47106 < len__5897__auto___47105)){
args__5903__auto__.push((arguments[i__5898__auto___47106]));

var G__47107 = (i__5898__auto___47106 + (1));
i__5898__auto___47106 = G__47107;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return tetris.screens.screen_stack.push_screen.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(tetris.screens.screen_stack.push_screen.cljs$core$IFn$_invoke$arity$variadic = (function (screen_id,args){
cljs.core.tap_GT_((""+"push screen: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(screen_id)+", args: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(args)));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(tetris.screens.screen_stack.app,cljs.core.update,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [screen_id,args], null)], 0));

tetris.screens.screen_stack.enter_screen(screen_id,args);

return cljs.core.tap_GT_(cljs.core.deref(tetris.screens.screen_stack.app));
}));

(tetris.screens.screen_stack.push_screen.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tetris.screens.screen_stack.push_screen.cljs$lang$applyTo = (function (seq47039){
var G__47040 = cljs.core.first(seq47039);
var seq47039__$1 = cljs.core.next(seq47039);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47040,seq47039__$1);
}));

tetris.screens.screen_stack.back_screen = (function tetris$screens$screen_stack$back_screen(){
cljs.core.tap_GT_("back screen: ");

if(cljs.core.truth_(cljs.core.peek(new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tetris.screens.screen_stack.app))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tetris.screens.screen_stack.app,cljs.core.update,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.pop);

cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tetris.screens.screen_stack.enter_screen,cljs.core.peek(new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tetris.screens.screen_stack.app))));

return cljs.core.tap_GT_(cljs.core.deref(tetris.screens.screen_stack.app));
} else {
return null;
}
});
tetris.screens.screen_stack.go_screen = (function tetris$screens$screen_stack$go_screen(var_args){
var args__5903__auto__ = [];
var len__5897__auto___47108 = arguments.length;
var i__5898__auto___47109 = (0);
while(true){
if((i__5898__auto___47109 < len__5897__auto___47108)){
args__5903__auto__.push((arguments[i__5898__auto___47109]));

var G__47110 = (i__5898__auto___47109 + (1));
i__5898__auto___47109 = G__47110;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return tetris.screens.screen_stack.go_screen.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(tetris.screens.screen_stack.go_screen.cljs$core$IFn$_invoke$arity$variadic = (function (screen_id,args){
cljs.core.tap_GT_((""+"go screen: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(screen_id)+", args: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(args)));

tetris.screens.screen_stack.enter_screen(screen_id,args);

return cljs.core.tap_GT_(cljs.core.deref(tetris.screens.screen_stack.app));
}));

(tetris.screens.screen_stack.go_screen.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tetris.screens.screen_stack.go_screen.cljs$lang$applyTo = (function (seq47050){
var G__47051 = cljs.core.first(seq47050);
var seq47050__$1 = cljs.core.next(seq47050);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47051,seq47050__$1);
}));

tetris.screens.screen_stack.on_keydown = (function tetris$screens$screen_stack$on_keydown(event){
var temp__5825__auto__ = tetris.screens.screen_stack.get_screen_state(new cljs.core.Keyword(null,"active-screen","active-screen",-1779681012).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tetris.screens.screen_stack.app)));
if(cljs.core.truth_(temp__5825__auto__)){
var screen_state = temp__5825__auto__;
var handled_QMARK_ = tetris.screens.screen.on_keydown.cljs$core$IFn$_invoke$arity$2(screen_state,event);
if(((cljs.core.not(handled_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event.code,"Escape")))){
return tetris.screens.screen_stack.back_screen();
} else {
return null;
}
} else {
return null;
}
});
tetris.screens.screen_stack.render = (function tetris$screens$screen_stack$render(){
window.removeEventListener("keydown",tetris.screens.screen_stack.on_keydown);

window.addEventListener("keydown",tetris.screens.screen_stack.on_keydown);

return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(tetris.screens.screen_stack.root),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.screens.screen_stack.render_active_screen], null));
});

//# sourceMappingURL=tetris.screens.screen_stack.js.map
