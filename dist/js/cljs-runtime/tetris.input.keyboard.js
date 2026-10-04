goog.provide('tetris.input.keyboard');
tetris.input.keyboard.pressed_keys = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
tetris.input.keyboard.on_key_event = (function tetris$input$keyboard$on_key_event(event,pressed_QMARK_){
var key = event.code;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tetris.input.keyboard.pressed_keys,(function (keys){
if(cljs.core.truth_(pressed_QMARK_)){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([key]),keys))){
return keys;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(keys,key);
}
} else {
return cljs.core.filterv((function (p1__40457_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(key,p1__40457_SHARP_);
}),keys);
}
}));
});
tetris.input.keyboard.init = (function tetris$input$keyboard$init(){
cljs.core.reset_BANG_(tetris.input.keyboard.pressed_keys,cljs.core.PersistentVector.EMPTY);

(window.onkeydown = (function (p1__40462_SHARP_){
return tetris.input.keyboard.on_key_event(p1__40462_SHARP_,true);
}));

return (window.onkeyup = (function (p1__40463_SHARP_){
return tetris.input.keyboard.on_key_event(p1__40463_SHARP_,false);
}));
});
tetris.input.keyboard.key__GT_button = (function tetris$input$keyboard$key__GT_button(button){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"Space","Space",1500017025),new cljs.core.Keyword(null,"KeyX","KeyX",1119805603),new cljs.core.Keyword(null,"ShiftRight","ShiftRight",1971038851),new cljs.core.Keyword(null,"ArrowRight","ArrowRight",1621754469),new cljs.core.Keyword(null,"ControlRight","ControlRight",1059874566),new cljs.core.Keyword(null,"ShiftLeft","ShiftLeft",-161930105),new cljs.core.Keyword(null,"ControlLeft","ControlLeft",1352354599),new cljs.core.Keyword(null,"ArrowLeft","ArrowLeft",-974160950),new cljs.core.Keyword(null,"KeyL","KeyL",438047755),new cljs.core.Keyword(null,"ArrowUp","ArrowUp",-538953684),new cljs.core.Keyword(null,"KeyK","KeyK",-1881852914),new cljs.core.Keyword(null,"ArrowDown","ArrowDown",-251004205),new cljs.core.Keyword(null,"KeyC","KeyC",-715494541),new cljs.core.Keyword(null,"KeyJ","KeyJ",1063928600),new cljs.core.Keyword(null,"KeyZ","KeyZ",593050299),new cljs.core.Keyword(null,"KeyV","KeyV",-1939248579)],[new cljs.core.Keyword(null,"hard-drop","hard-drop",1211458322),new cljs.core.Keyword(null,"rotate-cw","rotate-cw",83272937),new cljs.core.Keyword(null,"hold","hold",-1621118005),new cljs.core.Keyword(null,"move-right","move-right",1661359569),new cljs.core.Keyword(null,"rotate-ccw","rotate-ccw",885172263),new cljs.core.Keyword(null,"hold","hold",-1621118005),new cljs.core.Keyword(null,"rotate-ccw","rotate-ccw",885172263),new cljs.core.Keyword(null,"move-left","move-left",-271562811),new cljs.core.Keyword(null,"move-right","move-right",1661359569),new cljs.core.Keyword(null,"rotate-cw","rotate-cw",83272937),new cljs.core.Keyword(null,"soft-drop","soft-drop",-123150289),new cljs.core.Keyword(null,"soft-drop","soft-drop",-123150289),new cljs.core.Keyword(null,"hold","hold",-1621118005),new cljs.core.Keyword(null,"move-left","move-left",-271562811),new cljs.core.Keyword(null,"rotate-ccw","rotate-ccw",885172263),new cljs.core.Keyword(null,"rotate-180","rotate-180",605917905)]),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(button),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(button));
});
tetris.input.keyboard.key__GT_buttons = (function tetris$input$keyboard$key__GT_buttons(keys){
return cljs.core.filterv(cljs.core.some_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(tetris.input.keyboard.key__GT_button,keys));
});
tetris.input.keyboard.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(tetris.core.input.initial_state);
tetris.input.keyboard.handle = (function tetris$input$keyboard$handle(pressed_buttons){
return cljs.core.reset_BANG_(tetris.input.keyboard.state,tetris.core.input.handle(cljs.core.deref(tetris.input.keyboard.state),pressed_buttons));
});

//# sourceMappingURL=tetris.input.keyboard.js.map
