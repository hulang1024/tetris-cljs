goog.provide('tetris.core.replay');
tetris.core.replay.make_recorder = (function tetris$core$replay$make_recorder(records){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(records);
});
tetris.core.replay.records = (function tetris$core$replay$records(recorder){
return cljs.core.deref(recorder);
});
tetris.core.replay.make_recorder_command_handler = (function tetris$core$replay$make_recorder_command_handler(recorder){
return (function (command,game_state){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(recorder,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(game_state),command], null));
});
});
tetris.core.replay.make_replayer = (function tetris$core$replay$make_replayer(records){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"frame","frame",-1711082588),(0),new cljs.core.Keyword(null,"records","records",1326822832),records], null);
});
tetris.core.replay.step = (function tetris$core$replay$step(replayer){
var frame = (new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(replayer) + (1));
var records = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(replayer);
var commands = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__37352_SHARP_){
return (frame >= cljs.core.first(p1__37352_SHARP_));
}),records));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(replayer,new cljs.core.Keyword(null,"frame","frame",-1711082588),frame,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"records","records",1326822832),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(commands),records)], 0)),commands], null);
});
tetris.core.replay.encode_command_map = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"fall","fall",-563374271),new cljs.core.Keyword(null,"spawn","spawn",-1213583293),new cljs.core.Keyword(null,"move-left","move-left",-271562811),new cljs.core.Keyword(null,"rotate-ccw","rotate-ccw",885172263),new cljs.core.Keyword(null,"rotate-cw","rotate-cw",83272937),new cljs.core.Keyword(null,"hold","hold",-1621118005),new cljs.core.Keyword(null,"move-down","move-down",-1149356017),new cljs.core.Keyword(null,"move-right","move-right",1661359569),new cljs.core.Keyword(null,"hard-drop","hard-drop",1211458322),new cljs.core.Keyword(null,"lock","lock",-488188066)],[new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"l","l",1395893423),new cljs.core.Keyword(null,"C","C",-173629587),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"H","H",-938148327),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"L","L",-1038307519)]);
tetris.core.replay.records__GT_url = (function tetris$core$replay$records__GT_url(records){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37353_SHARP_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(p1__37353_SHARP_))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name((function (){var fexpr__37354 = cljs.core.second(p1__37353_SHARP_);
return (fexpr__37354.cljs$core$IFn$_invoke$arity$1 ? fexpr__37354.cljs$core$IFn$_invoke$arity$1(tetris.core.replay.encode_command_map) : fexpr__37354.call(null,tetris.core.replay.encode_command_map));
})())));
}),records));
});
tetris.core.replay.url__GT_records = (function tetris$core$replay$url__GT_records(url){
if(cljs.core.seq(url)){
var command_map = clojure.set.map_invert(tetris.core.replay.encode_command_map);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37356_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.parse_long(cljs.core.first(p1__37356_SHARP_)),(function (){var fexpr__37357 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__37356_SHARP_));
return (fexpr__37357.cljs$core$IFn$_invoke$arity$1 ? fexpr__37357.cljs$core$IFn$_invoke$arity$1(command_map) : fexpr__37357.call(null,command_map));
})()],null));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37355_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__37355_SHARP_,"-");
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(url,",")));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});

//# sourceMappingURL=tetris.core.replay.js.map
