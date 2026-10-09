goog.provide('tetris.screens.screen_stack');
tetris.screens.screen_stack.make_screen_stack = (function tetris$screens$screen_stack$make_screen_stack(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.PersistentVector.EMPTY], null);
});
tetris.screens.screen_stack.push_screen = (function tetris$screens$screen_stack$push_screen(state,screen){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj,screen);
});
tetris.screens.screen_stack.pop_screen = (function tetris$screens$screen_stack$pop_screen(state){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.pop);
});
tetris.screens.screen_stack.replace_screen = (function tetris$screens$screen_stack$replace_screen(state,screen){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"stack","stack",-793405930),(function (p1__41351_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(p1__41351_SHARP_),screen);
}));
});
tetris.screens.screen_stack.active_screen = (function tetris$screens$screen_stack$active_screen(state){
return cljs.core.peek(new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(state));
});
if((typeof tetris !== 'undefined') && (typeof tetris.screens !== 'undefined') && (typeof tetris.screens.screen_stack !== 'undefined') && (typeof tetris.screens.screen_stack.app !== 'undefined')){
} else {
tetris.screens.screen_stack.app = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(tetris.screens.screen_stack.make_screen_stack());
}
if((typeof tetris !== 'undefined') && (typeof tetris.screens !== 'undefined') && (typeof tetris.screens.screen_stack !== 'undefined') && (typeof tetris.screens.screen_stack.root !== 'undefined')){
} else {
tetris.screens.screen_stack.root = (new cljs.core.Delay((function (){
return reagent.dom.client.create_root.cljs$core$IFn$_invoke$arity$1(document.getElementById("app"));
}),null));
}
tetris.screens.screen_stack.add_class = (function tetris$screens$screen_stack$add_class(view,class_name){
var vec__41370 = view;
var seq__41371 = cljs.core.seq(vec__41370);
var first__41372 = cljs.core.first(seq__41371);
var seq__41371__$1 = cljs.core.next(seq__41371);
var tag = first__41372;
var first__41372__$1 = cljs.core.first(seq__41371__$1);
var seq__41371__$2 = cljs.core.next(seq__41371__$1);
var attrs = first__41372__$1;
var children = seq__41371__$2;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag], null),((cljs.core.map_QMARK_(attrs))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.flatten(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(attrs)], null)),class_name)], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(attrs,new cljs.core.Keyword(null,"class","class",-2030961996))], 0)),children], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class_name], null),attrs,children], null)));
});
tetris.screens.screen_stack.render_screen = (function tetris$screens$screen_stack$render_screen(){
var temp__5825__auto__ = tetris.screens.screen_stack.active_screen(cljs.core.deref(tetris.screens.screen_stack.app));
if(cljs.core.truth_(temp__5825__auto__)){
var screen_state = temp__5825__auto__;
var temp__5825__auto____$1 = tetris.screens.screen.render.cljs$core$IFn$_invoke$arity$1(screen_state);
if(cljs.core.truth_(temp__5825__auto____$1)){
var view = temp__5825__auto____$1;
return tetris.screens.screen_stack.add_class(view,(""+"screen-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(screen_state))))));
} else {
return null;
}
} else {
return null;
}
});
tetris.screens.screen_stack.init_screen = (async function tetris$screens$screen_stack$init_screen(screen_id,init_args){
var screen_state = (await cljs.core.apply.cljs$core$IFn$_invoke$arity$3(tetris.screens.screen.init,screen_id,init_args));
var with_id = (function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var or__5162__auto__ = m;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.Keyword(null,"id","id",-1388402092),screen_id);
});
if((screen_state instanceof reagent.ratom.RAtom)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(screen_state,with_id);

return screen_state;
} else {
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1(with_id(screen_state));
}
});
tetris.screens.screen_stack.push_screen_BANG_ = (function tetris$screens$screen_stack$push_screen_BANG_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___41398 = arguments.length;
var i__5898__auto___41399 = (0);
while(true){
if((i__5898__auto___41399 < len__5897__auto___41398)){
args__5903__auto__.push((arguments[i__5898__auto___41399]));

var G__41400 = (i__5898__auto___41399 + (1));
i__5898__auto___41399 = G__41400;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return tetris.screens.screen_stack.push_screen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(tetris.screens.screen_stack.push_screen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (screen_id,init_args){
cljs.core.tap_GT_((""+"push screen: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(screen_id)+", init args: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(init_args)));

var temp__5825__auto___41401 = tetris.screens.screen_stack.active_screen(cljs.core.deref(tetris.screens.screen_stack.app));
if(cljs.core.truth_(temp__5825__auto___41401)){
var screen_41402__$1 = temp__5825__auto___41401;
tetris.screens.screen.on_exiting.cljs$core$IFn$_invoke$arity$1(screen_41402__$1);
} else {
}

return tetris.screens.screen_stack.init_screen(screen_id,init_args).then((function (screen){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tetris.screens.screen_stack.app,tetris.screens.screen_stack.push_screen,screen);

tetris.screens.screen.on_entering.cljs$core$IFn$_invoke$arity$1(screen);

return cljs.core.tap_GT_(cljs.core.deref(tetris.screens.screen_stack.app));
}));
}));

(tetris.screens.screen_stack.push_screen_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tetris.screens.screen_stack.push_screen_BANG_.cljs$lang$applyTo = (function (seq41393){
var G__41394 = cljs.core.first(seq41393);
var seq41393__$1 = cljs.core.next(seq41393);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41394,seq41393__$1);
}));

tetris.screens.screen_stack.pop_screen_BANG_ = (function tetris$screens$screen_stack$pop_screen_BANG_(){
cljs.core.tap_GT_("back screen");

var temp__5825__auto___41403 = tetris.screens.screen_stack.active_screen(cljs.core.deref(tetris.screens.screen_stack.app));
if(cljs.core.truth_(temp__5825__auto___41403)){
var screen_41404__$1 = temp__5825__auto___41403;
tetris.screens.screen.on_exiting.cljs$core$IFn$_invoke$arity$1(screen_41404__$1);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tetris.screens.screen_stack.app,tetris.screens.screen_stack.pop_screen);

tetris.screens.screen.on_resuming.cljs$core$IFn$_invoke$arity$1(tetris.screens.screen_stack.active_screen(cljs.core.deref(tetris.screens.screen_stack.app)));

tetris.audio.play(new cljs.core.Keyword(null,"screen-back","screen-back",148269310));

return cljs.core.tap_GT_(cljs.core.deref(tetris.screens.screen_stack.app));
});
tetris.screens.screen_stack.replace_screen_BANG_ = (function tetris$screens$screen_stack$replace_screen_BANG_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___41405 = arguments.length;
var i__5898__auto___41406 = (0);
while(true){
if((i__5898__auto___41406 < len__5897__auto___41405)){
args__5903__auto__.push((arguments[i__5898__auto___41406]));

var G__41407 = (i__5898__auto___41406 + (1));
i__5898__auto___41406 = G__41407;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return tetris.screens.screen_stack.replace_screen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(tetris.screens.screen_stack.replace_screen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (screen_id,init_args){
cljs.core.tap_GT_((""+"replace screen: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(screen_id)+", init args: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(init_args)));

var temp__5825__auto___41408 = tetris.screens.screen_stack.active_screen(cljs.core.deref(tetris.screens.screen_stack.app));
if(cljs.core.truth_(temp__5825__auto___41408)){
var screen_41409__$1 = temp__5825__auto___41408;
tetris.screens.screen.on_exiting.cljs$core$IFn$_invoke$arity$1(screen_41409__$1);
} else {
}

return tetris.screens.screen_stack.init_screen(screen_id,init_args).then((function (screen){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tetris.screens.screen_stack.app,tetris.screens.screen_stack.replace_screen,screen);

tetris.screens.screen.on_entering.cljs$core$IFn$_invoke$arity$1(screen);

return cljs.core.tap_GT_(cljs.core.deref(tetris.screens.screen_stack.app));
}));
}));

(tetris.screens.screen_stack.replace_screen_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tetris.screens.screen_stack.replace_screen_BANG_.cljs$lang$applyTo = (function (seq41396){
var G__41397 = cljs.core.first(seq41396);
var seq41396__$1 = cljs.core.next(seq41396);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41397,seq41396__$1);
}));

tetris.screens.screen_stack.on_keydown = (function tetris$screens$screen_stack$on_keydown(event){
var temp__5825__auto__ = tetris.screens.screen_stack.active_screen(cljs.core.deref(tetris.screens.screen_stack.app));
if(cljs.core.truth_(temp__5825__auto__)){
var screen__$1 = temp__5825__auto__;
var handled_QMARK_ = tetris.screens.screen.on_keydown.cljs$core$IFn$_invoke$arity$2(screen__$1,event);
if(((cljs.core.not(handled_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event.code,"Escape")))){
return tetris.screens.screen_stack.pop_screen_BANG_();
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

return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(tetris.screens.screen_stack.root),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.screens.screen_stack.render_screen], null));
});

//# sourceMappingURL=tetris.screens.screen_stack.js.map
