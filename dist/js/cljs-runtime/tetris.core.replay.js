goog.provide('tetris.core.replay');
tetris.core.replay.append_records = (function tetris$core$replay$append_records(records,frame,pressed_buttons){
if(cljs.core.seq(pressed_buttons)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(records,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frame,pressed_buttons], null));
} else {
return records;
}
});
tetris.core.replay.make_replayer = (function tetris$core$replay$make_replayer(records){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"frame","frame",-1711082588),(0),new cljs.core.Keyword(null,"records","records",1326822832),records,new cljs.core.Keyword(null,"input-state","input-state",-2018653626),tetris.core.input.initial_state()], null);
});
tetris.core.replay.step = (function tetris$core$replay$step(replayer){
var map__45492 = replayer;
var map__45492__$1 = cljs.core.__destructure_map(map__45492);
var records = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45492__$1,new cljs.core.Keyword(null,"records","records",1326822832));
var input_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45492__$1,new cljs.core.Keyword(null,"input-state","input-state",-2018653626));
var frame = (new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(replayer) + (1));
var step_records = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__45491_SHARP_){
return (frame >= cljs.core.first(p1__45491_SHARP_));
}),records);
var frame_input_states = ((cljs.core.seq(step_records))?cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (xs,p__45493){
var vec__45494 = p__45493;
var frame__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45494,(0),null);
var pressed_buttons = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45494,(1),null);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(xs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frame__$1,tetris.core.input.handle(cljs.core.second(cljs.core.last(xs)),pressed_buttons)], null));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frame,input_state], null)], null),step_records)):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frame,tetris.core.input.handle(input_state,cljs.core.PersistentVector.EMPTY)], null)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frame_input_states,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(replayer,new cljs.core.Keyword(null,"frame","frame",-1711082588),frame,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"records","records",1326822832),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(step_records),records),new cljs.core.Keyword(null,"input-state","input-state",-2018653626),cljs.core.second(cljs.core.last(frame_input_states))], 0))], null);
});
tetris.core.replay.encode_command_map = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"fall","fall",-563374271),new cljs.core.Keyword(null,"spawn","spawn",-1213583293),new cljs.core.Keyword(null,"move-left","move-left",-271562811),new cljs.core.Keyword(null,"rotate-ccw","rotate-ccw",885172263),new cljs.core.Keyword(null,"rotate-cw","rotate-cw",83272937),new cljs.core.Keyword(null,"hold","hold",-1621118005),new cljs.core.Keyword(null,"move-down","move-down",-1149356017),new cljs.core.Keyword(null,"move-right","move-right",1661359569),new cljs.core.Keyword(null,"hard-drop","hard-drop",1211458322),new cljs.core.Keyword(null,"lock","lock",-488188066)],[new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"l","l",1395893423),new cljs.core.Keyword(null,"C","C",-173629587),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"H","H",-938148327),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"L","L",-1038307519)]);
tetris.core.replay.records__GT_url = (function tetris$core$replay$records__GT_url(records){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45497_SHARP_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(p1__45497_SHARP_))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name((function (){var fexpr__45498 = cljs.core.second(p1__45497_SHARP_);
return (fexpr__45498.cljs$core$IFn$_invoke$arity$1 ? fexpr__45498.cljs$core$IFn$_invoke$arity$1(tetris.core.replay.encode_command_map) : fexpr__45498.call(null,tetris.core.replay.encode_command_map));
})())));
}),records));
});
tetris.core.replay.url__GT_records = (function tetris$core$replay$url__GT_records(url){
if(cljs.core.seq(url)){
var command_map = clojure.set.map_invert(tetris.core.replay.encode_command_map);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45500_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.parse_long(cljs.core.first(p1__45500_SHARP_)),(function (){var fexpr__45501 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__45500_SHARP_));
return (fexpr__45501.cljs$core$IFn$_invoke$arity$1 ? fexpr__45501.cljs$core$IFn$_invoke$arity$1(command_map) : fexpr__45501.call(null,command_map));
})()],null));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45499_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__45499_SHARP_,"-");
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(url,",")));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});

//# sourceMappingURL=tetris.core.replay.js.map
