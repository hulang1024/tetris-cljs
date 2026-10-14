goog.provide('tetris.screens.tip_buttons_overlay');
tetris.screens.tip_buttons_overlay.tip_buttons_overlay_class = (function tetris$screens$tip_buttons_overlay$tip_buttons_overlay_class(){
return cljss.core.css("tetris_screens_tip-buttons-overlay__tip-buttons-overlay-class",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".tetris_screens_tip-buttons-overlay__tip-buttons-overlay-class{position:absolute;bottom:2rem;display:flex;justify-content:space-between;width:100%;z-index:2;}"], null),cljs.core.PersistentVector.EMPTY);
});
tetris.screens.tip_buttons_overlay.left_class = (function tetris$screens$tip_buttons_overlay$left_class(){
return cljss.core.css("tetris_screens_tip-buttons-overlay__left-class",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".tetris_screens_tip-buttons-overlay__left-class{margin-left:4rem;}"], null),cljs.core.PersistentVector.EMPTY);
});
tetris.screens.tip_buttons_overlay.right_class = (function tetris$screens$tip_buttons_overlay$right_class(){
return cljss.core.css("tetris_screens_tip-buttons-overlay__right-class",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".tetris_screens_tip-buttons-overlay__right-class{margin-right:4rem;display:inherit;}"], null),cljs.core.PersistentVector.EMPTY);
});
tetris.screens.tip_buttons_overlay.button_class = (function tetris$screens$tip_buttons_overlay$button_class(button,disabled_QMARK_){
return cljss.core.css("tetris_screens_tip-buttons-overlay__button-class",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".tetris_screens_tip-buttons-overlay__button-class{font-size:1rem;margin-right:var(--var-tetris_screens_tip-buttons-overlay__button-class-0);color:var(--var-tetris_screens_tip-buttons-overlay__button-class-1);}"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--var-tetris_screens_tip-buttons-overlay__button-class-0",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(button,"Esc"))?(0):"2rem")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--var-tetris_screens_tip-buttons-overlay__button-class-1",(cljs.core.truth_(disabled_QMARK_)?"#666":"#fff")], null)], null));
});
tetris.screens.tip_buttons_overlay.key_class = (function tetris$screens$tip_buttons_overlay$key_class(){
return cljss.core.css("tetris_screens_tip-buttons-overlay__key-class",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".tetris_screens_tip-buttons-overlay__key-class{margin-right:0.2em;border:1px solid;padding:4px 2px;min-width:30px;display:inline-block;text-align:center;}"], null),cljs.core.PersistentVector.EMPTY);
});
tetris.screens.tip_buttons_overlay.tip_button = (function tetris$screens$tip_buttons_overlay$tip_button(p__41383){
var vec__41384 = p__41383;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41384,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41384,(1),null);
var map__41387 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41384,(2),null);
var map__41387__$1 = cljs.core.__destructure_map(map__41387);
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41387__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"class","class",-2030961996),tetris.screens.tip_buttons_overlay.button_class(key,disabled_QMARK_)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),tetris.screens.tip_buttons_overlay.key_class()], null),key], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),label], null)], null);
});
tetris.screens.tip_buttons_overlay.render = (function tetris$screens$tip_buttons_overlay$render(var_args){
var args__5903__auto__ = [];
var len__5897__auto___41393 = arguments.length;
var i__5898__auto___41394 = (0);
while(true){
if((i__5898__auto___41394 < len__5897__auto___41393)){
args__5903__auto__.push((arguments[i__5898__auto___41394]));

var G__41395 = (i__5898__auto___41394 + (1));
i__5898__auto___41394 = G__41395;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return tetris.screens.tip_buttons_overlay.render.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(tetris.screens.tip_buttons_overlay.render.cljs$core$IFn$_invoke$arity$variadic = (function (more_buttons){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"tip-buttons-overlay",new cljs.core.Keyword(null,"class","class",-2030961996),tetris.screens.tip_buttons_overlay.tip_buttons_overlay_class()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),tetris.screens.tip_buttons_overlay.left_class()], null),tetris.screens.tip_buttons_overlay.tip_button(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Enter","\u9009\u62E9"], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),tetris.screens.tip_buttons_overlay.right_class()], null),(function (){var iter__5649__auto__ = (function tetris$screens$tip_buttons_overlay$iter__41389(s__41390){
return (new cljs.core.LazySeq(null,(function (){
var s__41390__$1 = s__41390;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__41390__$1);
if(temp__5825__auto__){
var s__41390__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41390__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__41390__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__41392 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__41391 = (0);
while(true){
if((i__41391 < size__5648__auto__)){
var button = cljs.core._nth(c__5647__auto__,i__41391);
cljs.core.chunk_append(b__41392,tetris.screens.tip_buttons_overlay.tip_button(button));

var G__41396 = (i__41391 + (1));
i__41391 = G__41396;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41392),tetris$screens$tip_buttons_overlay$iter__41389(cljs.core.chunk_rest(s__41390__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41392),null);
}
} else {
var button = cljs.core.first(s__41390__$2);
return cljs.core.cons(tetris.screens.tip_buttons_overlay.tip_button(button),tetris$screens$tip_buttons_overlay$iter__41389(cljs.core.rest(s__41390__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,more_buttons),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Esc","\u8FD4\u56DE"], null)], null)));
})()], null)], null);
}));

(tetris.screens.tip_buttons_overlay.render.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tetris.screens.tip_buttons_overlay.render.cljs$lang$applyTo = (function (seq41388){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41388));
}));


//# sourceMappingURL=tetris.screens.tip_buttons_overlay.js.map
