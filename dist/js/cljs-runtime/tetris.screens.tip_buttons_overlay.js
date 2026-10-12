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
tetris.screens.tip_buttons_overlay.button_class = (function tetris$screens$tip_buttons_overlay$button_class(button){
return cljss.core.css("tetris_screens_tip-buttons-overlay__button-class",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".tetris_screens_tip-buttons-overlay__button-class{font-size:1rem;margin-right:var(--var-tetris_screens_tip-buttons-overlay__button-class-0);}"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--var-tetris_screens_tip-buttons-overlay__button-class-0",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(button,"Esc"))?(0):"2rem")], null)], null));
});
tetris.screens.tip_buttons_overlay.tip_button = (function tetris$screens$tip_buttons_overlay$tip_button(button,text){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),button,new cljs.core.Keyword(null,"class","class",-2030961996),tetris.screens.tip_buttons_overlay.button_class(button)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"0.1em"], null)], null),(""+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(button)+"]")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),text], null)], null);
});
tetris.screens.tip_buttons_overlay.render = (function tetris$screens$tip_buttons_overlay$render(var_args){
var args__5903__auto__ = [];
var len__5897__auto___39415 = arguments.length;
var i__5898__auto___39416 = (0);
while(true){
if((i__5898__auto___39416 < len__5897__auto___39415)){
args__5903__auto__.push((arguments[i__5898__auto___39416]));

var G__39417 = (i__5898__auto___39416 + (1));
i__5898__auto___39416 = G__39417;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return tetris.screens.tip_buttons_overlay.render.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(tetris.screens.tip_buttons_overlay.render.cljs$core$IFn$_invoke$arity$variadic = (function (more_buttons){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"tip-buttons-overlay",new cljs.core.Keyword(null,"class","class",-2030961996),tetris.screens.tip_buttons_overlay.tip_buttons_overlay_class()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),tetris.screens.tip_buttons_overlay.left_class()], null),tetris.screens.tip_buttons_overlay.tip_button("Enter","\u9009\u62E9")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),tetris.screens.tip_buttons_overlay.right_class()], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__5649__auto__ = (function tetris$screens$tip_buttons_overlay$iter__39405(s__39406){
return (new cljs.core.LazySeq(null,(function (){
var s__39406__$1 = s__39406;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__39406__$1);
if(temp__5825__auto__){
var s__39406__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__39406__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__39406__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__39408 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__39407 = (0);
while(true){
if((i__39407 < size__5648__auto__)){
var vec__39409 = cljs.core._nth(c__5647__auto__,i__39407);
var button = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39409,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39409,(1),null);
cljs.core.chunk_append(b__39408,tetris.screens.tip_buttons_overlay.tip_button(button,text));

var G__39418 = (i__39407 + (1));
i__39407 = G__39418;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39408),tetris$screens$tip_buttons_overlay$iter__39405(cljs.core.chunk_rest(s__39406__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39408),null);
}
} else {
var vec__39412 = cljs.core.first(s__39406__$2);
var button = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39412,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39412,(1),null);
return cljs.core.cons(tetris.screens.tip_buttons_overlay.tip_button(button,text),tetris$screens$tip_buttons_overlay$iter__39405(cljs.core.rest(s__39406__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(more_buttons);
})(),(new cljs.core.List(null,tetris.screens.tip_buttons_overlay.tip_button("Esc","\u8FD4\u56DE"),null,(1),null)))], null)], null);
}));

(tetris.screens.tip_buttons_overlay.render.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tetris.screens.tip_buttons_overlay.render.cljs$lang$applyTo = (function (seq39404){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39404));
}));


//# sourceMappingURL=tetris.screens.tip_buttons_overlay.js.map
