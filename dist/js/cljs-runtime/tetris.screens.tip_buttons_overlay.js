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
tetris.screens.tip_buttons_overlay.tip_button = (function tetris$screens$tip_buttons_overlay$tip_button(p__42905){
var vec__42906 = p__42905;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42906,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42906,(1),null);
var map__42909 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42906,(2),null);
var map__42909__$1 = cljs.core.__destructure_map(map__42909);
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42909__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"class","class",-2030961996),tetris.screens.tip_buttons_overlay.button_class(key,disabled_QMARK_)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),tetris.screens.tip_buttons_overlay.key_class()], null),key], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),text], null)], null);
});
tetris.screens.tip_buttons_overlay.render = (function tetris$screens$tip_buttons_overlay$render(var_args){
var args__5903__auto__ = [];
var len__5897__auto___42915 = arguments.length;
var i__5898__auto___42916 = (0);
while(true){
if((i__5898__auto___42916 < len__5897__auto___42915)){
args__5903__auto__.push((arguments[i__5898__auto___42916]));

var G__42917 = (i__5898__auto___42916 + (1));
i__5898__auto___42916 = G__42917;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return tetris.screens.tip_buttons_overlay.render.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(tetris.screens.tip_buttons_overlay.render.cljs$core$IFn$_invoke$arity$variadic = (function (more_buttons){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"tip-buttons-overlay",new cljs.core.Keyword(null,"class","class",-2030961996),tetris.screens.tip_buttons_overlay.tip_buttons_overlay_class()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),tetris.screens.tip_buttons_overlay.left_class()], null),tetris.screens.tip_buttons_overlay.tip_button(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Enter","\u9009\u62E9"], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),tetris.screens.tip_buttons_overlay.right_class()], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__5649__auto__ = (function tetris$screens$tip_buttons_overlay$iter__42911(s__42912){
return (new cljs.core.LazySeq(null,(function (){
var s__42912__$1 = s__42912;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__42912__$1);
if(temp__5825__auto__){
var s__42912__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42912__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__42912__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__42914 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__42913 = (0);
while(true){
if((i__42913 < size__5648__auto__)){
var button = cljs.core._nth(c__5647__auto__,i__42913);
cljs.core.chunk_append(b__42914,tetris.screens.tip_buttons_overlay.tip_button(button));

var G__42918 = (i__42913 + (1));
i__42913 = G__42918;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42914),tetris$screens$tip_buttons_overlay$iter__42911(cljs.core.chunk_rest(s__42912__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42914),null);
}
} else {
var button = cljs.core.first(s__42912__$2);
return cljs.core.cons(tetris.screens.tip_buttons_overlay.tip_button(button),tetris$screens$tip_buttons_overlay$iter__42911(cljs.core.rest(s__42912__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,more_buttons));
})(),(new cljs.core.List(null,tetris.screens.tip_buttons_overlay.tip_button(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Esc","\u8FD4\u56DE"], null)),null,(1),null)))], null)], null);
}));

(tetris.screens.tip_buttons_overlay.render.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tetris.screens.tip_buttons_overlay.render.cljs$lang$applyTo = (function (seq42910){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42910));
}));


//# sourceMappingURL=tetris.screens.tip_buttons_overlay.js.map
