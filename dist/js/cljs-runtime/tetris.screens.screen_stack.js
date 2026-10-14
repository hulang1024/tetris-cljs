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
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"stack","stack",-793405930),(function (p1__39447_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(p1__39447_SHARP_),screen);
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
tetris.screens.screen_stack.screen_class = (function tetris$screens$screen_stack$screen_class(){
return cljss.core.css("tetris_screens_screen-stack__screen-class",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".tetris_screens_screen-stack__screen-class{display:flex;justify-content:center;flex-direction:column;align-items:center;width:100%;text-align:center;user-select:none;}",".tetris_screens_screen-stack__screen-class h1{z-index:4;margin-bottom:32px;}"], null),cljs.core.PersistentVector.EMPTY);
});
tetris.screens.screen_stack.add_class_and_key = (function tetris$screens$screen_stack$add_class_and_key(view,class_name,key){
var vec__39451 = view;
var seq__39452 = cljs.core.seq(vec__39451);
var first__39453 = cljs.core.first(seq__39452);
var seq__39452__$1 = cljs.core.next(seq__39452);
var tag = first__39453;
var first__39453__$1 = cljs.core.first(seq__39452__$1);
var seq__39452__$2 = cljs.core.next(seq__39452__$1);
var props = first__39453__$1;
var children = seq__39452__$2;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag], null),((cljs.core.map_QMARK_(props))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.flatten(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [class_name], null))], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996))], 0)),children], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"class","class",-2030961996),class_name], null),props,children], null)));
});
tetris.screens.screen_stack.render_screen = (function tetris$screens$screen_stack$render_screen(){
var temp__5825__auto__ = tetris.screens.screen_stack.active_screen(cljs.core.deref(tetris.screens.screen_stack.app));
if(cljs.core.truth_(temp__5825__auto__)){
var screen_state = temp__5825__auto__;
var temp__5825__auto____$1 = tetris.screens.screen.render.cljs$core$IFn$_invoke$arity$1(screen_state);
if(cljs.core.truth_(temp__5825__auto____$1)){
var view = temp__5825__auto____$1;
return tetris.screens.screen_stack.add_class_and_key(view,tetris.screens.screen_stack.screen_class(),cljs.core.name(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(screen_state))));
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
var len__5897__auto___39482 = arguments.length;
var i__5898__auto___39483 = (0);
while(true){
if((i__5898__auto___39483 < len__5897__auto___39482)){
args__5903__auto__.push((arguments[i__5898__auto___39483]));

var G__39484 = (i__5898__auto___39483 + (1));
i__5898__auto___39483 = G__39484;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return tetris.screens.screen_stack.push_screen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(tetris.screens.screen_stack.push_screen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (screen_id,init_args){
var temp__5825__auto___39485 = tetris.screens.screen_stack.active_screen(cljs.core.deref(tetris.screens.screen_stack.app));
if(cljs.core.truth_(temp__5825__auto___39485)){
var screen_39486__$1 = temp__5825__auto___39485;
tetris.screens.screen.on_suspending.cljs$core$IFn$_invoke$arity$1(screen_39486__$1);
} else {
}

return tetris.screens.screen_stack.init_screen(screen_id,init_args).then((function (screen){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tetris.screens.screen_stack.app,tetris.screens.screen_stack.push_screen,screen);

return tetris.screens.screen.on_entering.cljs$core$IFn$_invoke$arity$1(screen);
}));
}));

(tetris.screens.screen_stack.push_screen_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tetris.screens.screen_stack.push_screen_BANG_.cljs$lang$applyTo = (function (seq39454){
var G__39455 = cljs.core.first(seq39454);
var seq39454__$1 = cljs.core.next(seq39454);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39455,seq39454__$1);
}));

tetris.screens.screen_stack.pop_screen_BANG_ = (function tetris$screens$screen_stack$pop_screen_BANG_(){
cljs.core.tap_GT_(new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tetris.screens.screen_stack.app)));

if(cljs.core.seq(new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(tetris.screens.screen_stack.pop_screen(cljs.core.deref(tetris.screens.screen_stack.app))))){
var temp__5825__auto___39490 = tetris.screens.screen_stack.active_screen(cljs.core.deref(tetris.screens.screen_stack.app));
if(cljs.core.truth_(temp__5825__auto___39490)){
var screen_39491__$1 = temp__5825__auto___39490;
tetris.screens.screen.on_exiting.cljs$core$IFn$_invoke$arity$1(screen_39491__$1);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tetris.screens.screen_stack.app,tetris.screens.screen_stack.pop_screen);

tetris.screens.screen.on_resuming.cljs$core$IFn$_invoke$arity$1(tetris.screens.screen_stack.active_screen(cljs.core.deref(tetris.screens.screen_stack.app)));

return tetris.audio.play(new cljs.core.Keyword(null,"screen-back","screen-back",148269310));
} else {
return null;
}
});
tetris.screens.screen_stack.replace_screen_BANG_ = (function tetris$screens$screen_stack$replace_screen_BANG_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___39492 = arguments.length;
var i__5898__auto___39493 = (0);
while(true){
if((i__5898__auto___39493 < len__5897__auto___39492)){
args__5903__auto__.push((arguments[i__5898__auto___39493]));

var G__39494 = (i__5898__auto___39493 + (1));
i__5898__auto___39493 = G__39494;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return tetris.screens.screen_stack.replace_screen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(tetris.screens.screen_stack.replace_screen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (screen_id,init_args){
var temp__5825__auto___39496 = tetris.screens.screen_stack.active_screen(cljs.core.deref(tetris.screens.screen_stack.app));
if(cljs.core.truth_(temp__5825__auto___39496)){
var screen_39497__$1 = temp__5825__auto___39496;
tetris.screens.screen.on_exiting.cljs$core$IFn$_invoke$arity$1(screen_39497__$1);
} else {
}

return tetris.screens.screen_stack.init_screen(screen_id,init_args).then((function (screen){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tetris.screens.screen_stack.app,tetris.screens.screen_stack.replace_screen,screen);

return tetris.screens.screen.on_entering.cljs$core$IFn$_invoke$arity$1(screen);
}));
}));

(tetris.screens.screen_stack.replace_screen_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tetris.screens.screen_stack.replace_screen_BANG_.cljs$lang$applyTo = (function (seq39464){
var G__39465 = cljs.core.first(seq39464);
var seq39464__$1 = cljs.core.next(seq39464);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39465,seq39464__$1);
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
