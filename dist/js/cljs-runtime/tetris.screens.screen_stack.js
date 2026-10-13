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
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"stack","stack",-793405930),(function (p1__41182_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(p1__41182_SHARP_),screen);
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
return cljss.core.css("tetris_screens_screen-stack__screen-class",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".tetris_screens_screen-stack__screen-class{display:flex;justify-content:center;flex-direction:column;align-items:center;width:100%;text-align:center;}"], null),cljs.core.PersistentVector.EMPTY);
});
tetris.screens.screen_stack.add_class = (function tetris$screens$screen_stack$add_class(var_args){
var args__5903__auto__ = [];
var len__5897__auto___41192 = arguments.length;
var i__5898__auto___41193 = (0);
while(true){
if((i__5898__auto___41193 < len__5897__auto___41192)){
args__5903__auto__.push((arguments[i__5898__auto___41193]));

var G__41194 = (i__5898__auto___41193 + (1));
i__5898__auto___41193 = G__41194;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return tetris.screens.screen_stack.add_class.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(tetris.screens.screen_stack.add_class.cljs$core$IFn$_invoke$arity$variadic = (function (view,class_names){
var vec__41185 = view;
var seq__41186 = cljs.core.seq(vec__41185);
var first__41187 = cljs.core.first(seq__41186);
var seq__41186__$1 = cljs.core.next(seq__41186);
var tag = first__41187;
var first__41187__$1 = cljs.core.first(seq__41186__$1);
var seq__41186__$2 = cljs.core.next(seq__41186__$1);
var props = first__41187__$1;
var children = seq__41186__$2;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag], null),((cljs.core.map_QMARK_(props))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.flatten(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props)], null)),class_names)], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996))], 0)),children], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class_names], null),props,children], null)));
}));

(tetris.screens.screen_stack.add_class.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tetris.screens.screen_stack.add_class.cljs$lang$applyTo = (function (seq41183){
var G__41184 = cljs.core.first(seq41183);
var seq41183__$1 = cljs.core.next(seq41183);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41184,seq41183__$1);
}));

tetris.screens.screen_stack.render_screen = (function tetris$screens$screen_stack$render_screen(){
var temp__5825__auto__ = tetris.screens.screen_stack.active_screen(cljs.core.deref(tetris.screens.screen_stack.app));
if(cljs.core.truth_(temp__5825__auto__)){
var screen_state = temp__5825__auto__;
var temp__5825__auto____$1 = tetris.screens.screen.render.cljs$core$IFn$_invoke$arity$1(screen_state);
if(cljs.core.truth_(temp__5825__auto____$1)){
var view = temp__5825__auto____$1;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(screen_state)))], null),tetris.screens.screen_stack.add_class.cljs$core$IFn$_invoke$arity$variadic(view,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tetris.screens.screen_stack.screen_class(),(""+"screen-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(screen_state)))))], 0))], null);
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
var len__5897__auto___41195 = arguments.length;
var i__5898__auto___41196 = (0);
while(true){
if((i__5898__auto___41196 < len__5897__auto___41195)){
args__5903__auto__.push((arguments[i__5898__auto___41196]));

var G__41197 = (i__5898__auto___41196 + (1));
i__5898__auto___41196 = G__41197;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return tetris.screens.screen_stack.push_screen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(tetris.screens.screen_stack.push_screen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (screen_id,init_args){
var temp__5825__auto___41198 = tetris.screens.screen_stack.active_screen(cljs.core.deref(tetris.screens.screen_stack.app));
if(cljs.core.truth_(temp__5825__auto___41198)){
var screen_41199__$1 = temp__5825__auto___41198;
tetris.screens.screen.on_suspending.cljs$core$IFn$_invoke$arity$1(screen_41199__$1);
} else {
}

return tetris.screens.screen_stack.init_screen(screen_id,init_args).then((function (screen){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tetris.screens.screen_stack.app,tetris.screens.screen_stack.push_screen,screen);

return tetris.screens.screen.on_entering.cljs$core$IFn$_invoke$arity$1(screen);
}));
}));

(tetris.screens.screen_stack.push_screen_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tetris.screens.screen_stack.push_screen_BANG_.cljs$lang$applyTo = (function (seq41188){
var G__41189 = cljs.core.first(seq41188);
var seq41188__$1 = cljs.core.next(seq41188);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41189,seq41188__$1);
}));

tetris.screens.screen_stack.pop_screen_BANG_ = (function tetris$screens$screen_stack$pop_screen_BANG_(){
if(cljs.core.seq(new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(tetris.screens.screen_stack.pop_screen(cljs.core.deref(tetris.screens.screen_stack.app))))){
var temp__5825__auto___41200 = tetris.screens.screen_stack.active_screen(cljs.core.deref(tetris.screens.screen_stack.app));
if(cljs.core.truth_(temp__5825__auto___41200)){
var screen_41201__$1 = temp__5825__auto___41200;
tetris.screens.screen.on_exiting.cljs$core$IFn$_invoke$arity$1(screen_41201__$1);
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
var len__5897__auto___41202 = arguments.length;
var i__5898__auto___41203 = (0);
while(true){
if((i__5898__auto___41203 < len__5897__auto___41202)){
args__5903__auto__.push((arguments[i__5898__auto___41203]));

var G__41204 = (i__5898__auto___41203 + (1));
i__5898__auto___41203 = G__41204;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return tetris.screens.screen_stack.replace_screen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(tetris.screens.screen_stack.replace_screen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (screen_id,init_args){
var temp__5825__auto___41205 = tetris.screens.screen_stack.active_screen(cljs.core.deref(tetris.screens.screen_stack.app));
if(cljs.core.truth_(temp__5825__auto___41205)){
var screen_41207__$1 = temp__5825__auto___41205;
tetris.screens.screen.on_exiting.cljs$core$IFn$_invoke$arity$1(screen_41207__$1);
} else {
}

return tetris.screens.screen_stack.init_screen(screen_id,init_args).then((function (screen){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tetris.screens.screen_stack.app,tetris.screens.screen_stack.replace_screen,screen);

return tetris.screens.screen.on_entering.cljs$core$IFn$_invoke$arity$1(screen);
}));
}));

(tetris.screens.screen_stack.replace_screen_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tetris.screens.screen_stack.replace_screen_BANG_.cljs$lang$applyTo = (function (seq41190){
var G__41191 = cljs.core.first(seq41190);
var seq41190__$1 = cljs.core.next(seq41190);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41191,seq41190__$1);
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
