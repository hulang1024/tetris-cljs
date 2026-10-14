goog.provide('tetris.screens.controls_options');
tetris.screens.controls_options.container_class = (function tetris$screens$controls_options$container_class(){
return cljss.core.css("tetris_screens_controls-options__container-class",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".tetris_screens_controls-options__container-class{width:60rem;}"], null),cljs.core.PersistentVector.EMPTY);
});
tetris.screens.controls_options.control_item_class = (function tetris$screens$controls_options$control_item_class(){
return cljss.core.css("tetris_screens_controls-options__control-item-class",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".tetris_screens_controls-options__control-item-class{display:flex;justify-content:space-between;align-items:center;width:100%;line-height:1rem;padding:0.5em 0;border-bottom:1px solid #666;}"], null),cljs.core.PersistentVector.EMPTY);
});
tetris.screens.controls_options.action_title_class = (function tetris$screens$controls_options$action_title_class(){
return cljss.core.css("tetris_screens_controls-options__action-title-class",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".tetris_screens_controls-options__action-title-class{}"], null),cljs.core.PersistentVector.EMPTY);
});
tetris.screens.controls_options.button_slots_class = (function tetris$screens$controls_options$button_slots_class(){
return cljss.core.css("tetris_screens_controls-options__button-slots-class",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".tetris_screens_controls-options__button-slots-class{display:flex;}"], null),cljs.core.PersistentVector.EMPTY);
});
tetris.screens.controls_options.button_slot_class = (function tetris$screens$controls_options$button_slot_class(focused_QMARK_){
return cljss.core.css("tetris_screens_controls-options__button-slot-class",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".tetris_screens_controls-options__button-slot-class{margin-left:2rem;padding:8px 0;transition:background 0.1s;background:var(--var-tetris_screens_controls-options__button-slot-class-0);}",".tetris_screens_controls-options__button-slot-class:hover{background:rgba(255,255,255,0.1);}"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--var-tetris_screens_controls-options__button-slot-class-0",(cljs.core.truth_(focused_QMARK_)?"rgba(255,255,255,0.1)":"transparent")], null)], null));
});
tetris.screens.controls_options.button_text_class = (function tetris$screens$controls_options$button_text_class(){
return cljss.core.css("tetris_screens_controls-options__button-text-class",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".tetris_screens_controls-options__button-text-class{width:4rem;display:inline-block;}"], null),cljs.core.PersistentVector.EMPTY);
});
tetris.screens.controls_options.bracket_class = (function tetris$screens$controls_options$bracket_class(focused_QMARK_){
return cljss.core.css("tetris_screens_controls-options__bracket-class",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".tetris_screens_controls-options__bracket-class{color:var(--var-tetris_screens_controls-options__bracket-class-0);}"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--var-tetris_screens_controls-options__bracket-class-0",(cljs.core.truth_(focused_QMARK_)?"#fff":"rgba(255,255,255,0.45)")], null)], null));
});
tetris.screens.controls_options.button_display = (function tetris$screens$controls_options$button_display(p__41397){
var map__41398 = p__41397;
var map__41398__$1 = cljs.core.__destructure_map(map__41398);
var button = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41398__$1,new cljs.core.Keyword(null,"button","button",1456579943));
if(clojure.string.starts_with_QMARK_(button,"Key")){
return button.substr((3));
} else {
if(clojure.string.starts_with_QMARK_(button,"Arrow")){
var fexpr__41399 = new cljs.core.PersistentArrayMap(null, 4, ["ArrowLeft","\u2190","ArrowRight","\u2192","ArrowUp","\u2191","ArrowDown","\u2193"], null);
return (fexpr__41399.cljs$core$IFn$_invoke$arity$1 ? fexpr__41399.cljs$core$IFn$_invoke$arity$1(button) : fexpr__41399.call(null,button));
} else {
if(clojure.string.starts_with_QMARK_(button,"Control")){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(button.substr((7),(1)))+" Ctrl");
} else {
if(clojure.string.starts_with_QMARK_(button,"Shift")){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(button.substr((5),(1)))+" Shift");
} else {
return button;

}
}
}
}
});
tetris.screens.controls_options.button_slot = (function tetris$screens$controls_options$button_slot(key,button,focused_QMARK_,on_focus,on_select){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"class","class",-2030961996),tetris.screens.controls_options.button_slot_class(focused_QMARK_),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(focused_QMARK_)?on_select:on_focus)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),tetris.screens.controls_options.bracket_class(focused_QMARK_)], null),"\u3016"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),tetris.screens.controls_options.button_text_class()], null),(function (){var and__5160__auto__ = button;
if(cljs.core.truth_(and__5160__auto__)){
return tetris.screens.controls_options.button_display(button);
} else {
return and__5160__auto__;
}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),tetris.screens.controls_options.bracket_class(focused_QMARK_)], null),"\u3017"], null)], null);
});
tetris.screens.controls_options.button_receive_overlay = (function tetris$screens$controls_options$button_receive_overlay(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"text-lign","text-lign",11983827),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937)],["center","translate(-50%, -50%)","50%","100%","rgb(0, 0, 0, 0.8)",(3),"center","center","flex","absolute","column","100%","50%"])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"\u8F93\u5165\u4EFB\u610F\u60F3\u8981\u914D\u7F6E\u7684\u6309\u952E"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"8px"], null)], null),"\u6309Esc\u952E\u53D6\u6D88"], null)], null);
});
tetris.screens.controls_options.ordered_actions = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-left","move-left",-271562811),new cljs.core.Keyword(null,"move-right","move-right",1661359569),new cljs.core.Keyword(null,"rotate-cw","rotate-cw",83272937),new cljs.core.Keyword(null,"rotate-ccw","rotate-ccw",885172263),new cljs.core.Keyword(null,"rotate-180","rotate-180",605917905),new cljs.core.Keyword(null,"soft-drop","soft-drop",-123150289),new cljs.core.Keyword(null,"hard-drop","hard-drop",1211458322),new cljs.core.Keyword(null,"hold","hold",-1621118005)], null);
tetris.screens.controls_options.change_button = (function tetris$screens$controls_options$change_button(state,action,slot_index,button){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"controls","controls",1340701452),cljs.core.assoc_in(new cljs.core.Keyword(null,"controls","controls",1340701452).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [action,slot_index], null),button),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"button-receiving?","button-receiving?",1542280918),false], 0));
});
tetris.screens.controls_options.save_controls_BANG_ = (function tetris$screens$controls_options$save_controls_BANG_(this$,controls){
tetris.options_store.save_options_BANG_(new cljs.core.Keyword(null,"controls","controls",1340701452),controls);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,new cljs.core.Keyword(null,"controls-unchanged","controls-unchanged",1383783094),controls);
});
tetris.screens.controls_options.reset_controls_BANG_ = (function tetris$screens$controls_options$reset_controls_BANG_(this$){
var controls = tetris.options_store.slotify_controls(new cljs.core.Keyword(null,"controls","controls",1340701452).cljs$core$IFn$_invoke$arity$1(tetris.options_store.default_options));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,new cljs.core.Keyword(null,"controls","controls",1340701452),controls);

return tetris.screens.controls_options.save_controls_BANG_(this$,controls);
});
tetris.screens.controls_options.move_focus_BANG_ = (function tetris$screens$controls_options$move_focus_BANG_(this$,dir){
if(cljs.core.not(new cljs.core.Keyword(null,"focused","focused",1851572115).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(this$)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,new cljs.core.Keyword(null,"focused","focused",1851572115),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(tetris.screens.controls_options.ordered_actions.cljs$core$IFn$_invoke$arity$1 ? tetris.screens.controls_options.ordered_actions.cljs$core$IFn$_invoke$arity$1((0)) : tetris.screens.controls_options.ordered_actions.call(null,(0))),(0)], null));
} else {
var vec__41402 = new cljs.core.Keyword(null,"focused","focused",1851572115).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(this$));
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41402,(0),null);
var slot_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41402,(1),null);
var action_index = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__41401_SHARP_,p2__41400_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p2__41400_SHARP_,action)){
return p1__41401_SHARP_;
} else {
return null;
}
}),tetris.screens.controls_options.ordered_actions));
var vec__41405 = (function (){var G__41408 = dir;
var G__41408__$1 = (((G__41408 instanceof cljs.core.Keyword))?G__41408.fqn:null);
switch (G__41408__$1) {
case "left":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [action_index,cljs.core.max.cljs$core$IFn$_invoke$arity$2((0),(slot_index - (1)))], null);

break;
case "right":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [action_index,cljs.core.min.cljs$core$IFn$_invoke$arity$2((2),(slot_index + (1)))], null);

break;
case "up":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.max.cljs$core$IFn$_invoke$arity$2((action_index - (1)),(0)),slot_index], null);

break;
case "down":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.min.cljs$core$IFn$_invoke$arity$2((action_index + (1)),(cljs.core.count(tetris.screens.controls_options.ordered_actions) - (1))),slot_index], null);

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41408__$1))));

}
})();
var action_index__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41405,(0),null);
var slot_index__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41405,(1),null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,new cljs.core.Keyword(null,"focused","focused",1851572115),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(tetris.screens.controls_options.ordered_actions.cljs$core$IFn$_invoke$arity$1 ? tetris.screens.controls_options.ordered_actions.cljs$core$IFn$_invoke$arity$1(action_index__$1) : tetris.screens.controls_options.ordered_actions.call(null,action_index__$1)),slot_index__$1], null));
}
});
tetris.screens.screen.init.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"controls-options","controls-options",-946934861),(function (){
var controls = tetris.options_store.slotify_controls(tetris.options_store.get_options.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"controls","controls",1340701452)));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"controls-unchanged","controls-unchanged",1383783094),controls,new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"focused","focused",1851572115),null,new cljs.core.Keyword(null,"button-receiving?","button-receiving?",1542280918),false], null);
}));
tetris.screens.screen.render.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"controls-options","controls-options",-946934861),(function (this$){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),tetris.screens.i18n.text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"screen-title","screen-title",1123845880),new cljs.core.Keyword(null,"custom-controls","custom-controls",326378259)], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),tetris.screens.controls_options.container_class()], null),(function (){var iter__5649__auto__ = (function tetris$screens$controls_options$iter__41409(s__41410){
return (new cljs.core.LazySeq(null,(function (){
var s__41410__$1 = s__41410;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__41410__$1);
if(temp__5825__auto__){
var s__41410__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41410__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__41410__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__41412 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__41411 = (0);
while(true){
if((i__41411 < size__5648__auto__)){
var action = cljs.core._nth(c__5647__auto__,i__41411);
cljs.core.chunk_append(b__41412,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),action,new cljs.core.Keyword(null,"class","class",-2030961996),tetris.screens.controls_options.control_item_class()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),tetris.screens.controls_options.action_title_class()], null),tetris.screens.i18n.text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"controls-action","controls-action",1725228015),action], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),tetris.screens.controls_options.button_slots_class()], null),(function (){var iter__5649__auto__ = ((function (i__41411,action,c__5647__auto__,size__5648__auto__,b__41412,s__41410__$2,temp__5825__auto__){
return (function tetris$screens$controls_options$iter__41409_$_iter__41413(s__41414){
return (new cljs.core.LazySeq(null,((function (i__41411,action,c__5647__auto__,size__5648__auto__,b__41412,s__41410__$2,temp__5825__auto__){
return (function (){
var s__41414__$1 = s__41414;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__41414__$1);
if(temp__5825__auto____$1){
var s__41414__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__41414__$2)){
var c__5647__auto____$1 = cljs.core.chunk_first(s__41414__$2);
var size__5648__auto____$1 = cljs.core.count(c__5647__auto____$1);
var b__41416 = cljs.core.chunk_buffer(size__5648__auto____$1);
if((function (){var i__41415 = (0);
while(true){
if((i__41415 < size__5648__auto____$1)){
var vec__41417 = cljs.core._nth(c__5647__auto____$1,i__41415);
var slot_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41417,(0),null);
var button = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41417,(1),null);
cljs.core.chunk_append(b__41416,tetris.screens.controls_options.button_slot(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [action,slot_index], null),button,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"focused","focused",1851572115).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(this$)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [action,slot_index], null)),((function (i__41415,i__41411,vec__41417,slot_index,button,c__5647__auto____$1,size__5648__auto____$1,b__41416,s__41414__$2,temp__5825__auto____$1,action,c__5647__auto__,size__5648__auto__,b__41412,s__41410__$2,temp__5825__auto__){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,new cljs.core.Keyword(null,"focused","focused",1851572115),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [action,slot_index], null));
});})(i__41415,i__41411,vec__41417,slot_index,button,c__5647__auto____$1,size__5648__auto____$1,b__41416,s__41414__$2,temp__5825__auto____$1,action,c__5647__auto__,size__5648__auto__,b__41412,s__41410__$2,temp__5825__auto__))
,((function (i__41415,i__41411,vec__41417,slot_index,button,c__5647__auto____$1,size__5648__auto____$1,b__41416,s__41414__$2,temp__5825__auto____$1,action,c__5647__auto__,size__5648__auto__,b__41412,s__41410__$2,temp__5825__auto__){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,new cljs.core.Keyword(null,"button-receiving?","button-receiving?",1542280918),true);
});})(i__41415,i__41411,vec__41417,slot_index,button,c__5647__auto____$1,size__5648__auto____$1,b__41416,s__41414__$2,temp__5825__auto____$1,action,c__5647__auto__,size__5648__auto__,b__41412,s__41410__$2,temp__5825__auto__))
));

var G__41438 = (i__41415 + (1));
i__41415 = G__41438;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41416),tetris$screens$controls_options$iter__41409_$_iter__41413(cljs.core.chunk_rest(s__41414__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41416),null);
}
} else {
var vec__41420 = cljs.core.first(s__41414__$2);
var slot_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41420,(0),null);
var button = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41420,(1),null);
return cljs.core.cons(tetris.screens.controls_options.button_slot(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [action,slot_index], null),button,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"focused","focused",1851572115).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(this$)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [action,slot_index], null)),((function (i__41411,vec__41420,slot_index,button,s__41414__$2,temp__5825__auto____$1,action,c__5647__auto__,size__5648__auto__,b__41412,s__41410__$2,temp__5825__auto__){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,new cljs.core.Keyword(null,"focused","focused",1851572115),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [action,slot_index], null));
});})(i__41411,vec__41420,slot_index,button,s__41414__$2,temp__5825__auto____$1,action,c__5647__auto__,size__5648__auto__,b__41412,s__41410__$2,temp__5825__auto__))
,((function (i__41411,vec__41420,slot_index,button,s__41414__$2,temp__5825__auto____$1,action,c__5647__auto__,size__5648__auto__,b__41412,s__41410__$2,temp__5825__auto__){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,new cljs.core.Keyword(null,"button-receiving?","button-receiving?",1542280918),true);
});})(i__41411,vec__41420,slot_index,button,s__41414__$2,temp__5825__auto____$1,action,c__5647__auto__,size__5648__auto__,b__41412,s__41410__$2,temp__5825__auto__))
),tetris$screens$controls_options$iter__41409_$_iter__41413(cljs.core.rest(s__41414__$2)));
}
} else {
return null;
}
break;
}
});})(i__41411,action,c__5647__auto__,size__5648__auto__,b__41412,s__41410__$2,temp__5825__auto__))
,null,null));
});})(i__41411,action,c__5647__auto__,size__5648__auto__,b__41412,s__41410__$2,temp__5825__auto__))
;
return iter__5649__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(this$),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),action], null))));
})()], null)], null));

var G__41439 = (i__41411 + (1));
i__41411 = G__41439;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41412),tetris$screens$controls_options$iter__41409(cljs.core.chunk_rest(s__41410__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41412),null);
}
} else {
var action = cljs.core.first(s__41410__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),action,new cljs.core.Keyword(null,"class","class",-2030961996),tetris.screens.controls_options.control_item_class()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),tetris.screens.controls_options.action_title_class()], null),tetris.screens.i18n.text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"controls-action","controls-action",1725228015),action], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),tetris.screens.controls_options.button_slots_class()], null),(function (){var iter__5649__auto__ = ((function (action,s__41410__$2,temp__5825__auto__){
return (function tetris$screens$controls_options$iter__41409_$_iter__41423(s__41424){
return (new cljs.core.LazySeq(null,(function (){
var s__41424__$1 = s__41424;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__41424__$1);
if(temp__5825__auto____$1){
var s__41424__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__41424__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__41424__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__41426 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__41425 = (0);
while(true){
if((i__41425 < size__5648__auto__)){
var vec__41427 = cljs.core._nth(c__5647__auto__,i__41425);
var slot_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41427,(0),null);
var button = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41427,(1),null);
cljs.core.chunk_append(b__41426,tetris.screens.controls_options.button_slot(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [action,slot_index], null),button,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"focused","focused",1851572115).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(this$)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [action,slot_index], null)),((function (i__41425,vec__41427,slot_index,button,c__5647__auto__,size__5648__auto__,b__41426,s__41424__$2,temp__5825__auto____$1,action,s__41410__$2,temp__5825__auto__){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,new cljs.core.Keyword(null,"focused","focused",1851572115),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [action,slot_index], null));
});})(i__41425,vec__41427,slot_index,button,c__5647__auto__,size__5648__auto__,b__41426,s__41424__$2,temp__5825__auto____$1,action,s__41410__$2,temp__5825__auto__))
,((function (i__41425,vec__41427,slot_index,button,c__5647__auto__,size__5648__auto__,b__41426,s__41424__$2,temp__5825__auto____$1,action,s__41410__$2,temp__5825__auto__){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,new cljs.core.Keyword(null,"button-receiving?","button-receiving?",1542280918),true);
});})(i__41425,vec__41427,slot_index,button,c__5647__auto__,size__5648__auto__,b__41426,s__41424__$2,temp__5825__auto____$1,action,s__41410__$2,temp__5825__auto__))
));

var G__41440 = (i__41425 + (1));
i__41425 = G__41440;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41426),tetris$screens$controls_options$iter__41409_$_iter__41423(cljs.core.chunk_rest(s__41424__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41426),null);
}
} else {
var vec__41430 = cljs.core.first(s__41424__$2);
var slot_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41430,(0),null);
var button = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41430,(1),null);
return cljs.core.cons(tetris.screens.controls_options.button_slot(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [action,slot_index], null),button,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"focused","focused",1851572115).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(this$)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [action,slot_index], null)),((function (vec__41430,slot_index,button,s__41424__$2,temp__5825__auto____$1,action,s__41410__$2,temp__5825__auto__){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,new cljs.core.Keyword(null,"focused","focused",1851572115),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [action,slot_index], null));
});})(vec__41430,slot_index,button,s__41424__$2,temp__5825__auto____$1,action,s__41410__$2,temp__5825__auto__))
,((function (vec__41430,slot_index,button,s__41424__$2,temp__5825__auto____$1,action,s__41410__$2,temp__5825__auto__){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,new cljs.core.Keyword(null,"button-receiving?","button-receiving?",1542280918),true);
});})(vec__41430,slot_index,button,s__41424__$2,temp__5825__auto____$1,action,s__41410__$2,temp__5825__auto__))
),tetris$screens$controls_options$iter__41409_$_iter__41423(cljs.core.rest(s__41424__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(action,s__41410__$2,temp__5825__auto__))
;
return iter__5649__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(this$),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),action], null))));
})()], null)], null),tetris$screens$controls_options$iter__41409(cljs.core.rest(s__41410__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(tetris.screens.controls_options.ordered_actions);
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"32px",new cljs.core.Keyword(null,"visibility","visibility",1338380893),(cljs.core.truth_((function (){var and__5160__auto__ = cljs.core.not(new cljs.core.Keyword(null,"button-receiving?","button-receiving?",1542280918).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(this$)));
if(and__5160__auto__){
return new cljs.core.Keyword(null,"focused","focused",1851572115).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(this$));
} else {
return and__5160__auto__;
}
})())?"visible":"hidden")], null)], null),"\u518D\u6B21\u70B9\u51FB\u4EE5\u914D\u7F6E\u6309\u952E"], null),(cljs.core.truth_(new cljs.core.Keyword(null,"button-receiving?","button-receiving?",1542280918).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(this$)))?tetris.screens.controls_options.button_receive_overlay():null),tetris.screens.tip_buttons_overlay.render.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Del","\u6E05\u9664",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),((cljs.core.not(new cljs.core.Keyword(null,"focused","focused",1851572115).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(this$)))) || (cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(this$),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452)], null),new cljs.core.Keyword(null,"focused","focused",1851572115).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(this$)))))))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["R","\u91CD\u7F6E"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A","\u4FDD\u5B58",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"controls-unchanged","controls-unchanged",1383783094).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(this$)),new cljs.core.Keyword(null,"controls","controls",1340701452).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(this$)))], null)], null)], 0))], null);
}));
tetris.screens.screen.on_keydown.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"controls-options","controls-options",-946934861),(function (this$,event){
var key = event.code;
var button = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyboard","keyboard",-617357087),new cljs.core.Keyword(null,"button","button",1456579943),key], null);
var vec__41433 = new cljs.core.Keyword(null,"focused","focused",1851572115).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(this$));
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41433,(0),null);
var slot_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41433,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"button-receiving?","button-receiving?",1542280918).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(this$)))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"Escape")){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,new cljs.core.Keyword(null,"button-receiving?","button-receiving?",1542280918),false);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,tetris.screens.controls_options.change_button,action,slot_index,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([button], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"focused","focused",1851572115).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(this$)))){
var G__41436 = key;
switch (G__41436) {
case "Enter":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,new cljs.core.Keyword(null,"button-receiving?","button-receiving?",1542280918),true);

break;
case "Delete":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,tetris.screens.controls_options.change_button,action,slot_index,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));

break;
case "Escape":
return false;

break;
case "KeyA":
return tetris.screens.controls_options.save_controls_BANG_(this$,new cljs.core.Keyword(null,"controls","controls",1340701452).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(this$)));

break;
case "KeyR":
return tetris.screens.controls_options.reset_controls_BANG_(this$);

break;
case "ArrowUp":
return tetris.screens.controls_options.move_focus_BANG_(this$,new cljs.core.Keyword(null,"up","up",-269712113));

break;
case "ArrowRight":
return tetris.screens.controls_options.move_focus_BANG_(this$,new cljs.core.Keyword(null,"right","right",-452581833));

break;
case "ArrowDown":
return tetris.screens.controls_options.move_focus_BANG_(this$,new cljs.core.Keyword(null,"down","down",1565245570));

break;
case "ArrowLeft":
return tetris.screens.controls_options.move_focus_BANG_(this$,new cljs.core.Keyword(null,"left","left",-399115937));

break;
default:
return true;

}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"KeyA")){
return tetris.screens.controls_options.save_controls_BANG_(this$,new cljs.core.Keyword(null,"controls","controls",1340701452).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(this$)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"KeyR")){
return tetris.screens.controls_options.reset_controls_BANG_(this$);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"ArrowUp")){
return tetris.screens.controls_options.move_focus_BANG_(this$,new cljs.core.Keyword(null,"up","up",-269712113));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"ArrowRight")){
return tetris.screens.controls_options.move_focus_BANG_(this$,new cljs.core.Keyword(null,"right","right",-452581833));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"ArrowDown")){
return tetris.screens.controls_options.move_focus_BANG_(this$,new cljs.core.Keyword(null,"down","down",1565245570));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"ArrowLeft")){
return tetris.screens.controls_options.move_focus_BANG_(this$,new cljs.core.Keyword(null,"left","left",-399115937));
} else {
return false;

}
}
}
}
}
}
}
}
}));

//# sourceMappingURL=tetris.screens.controls_options.js.map
