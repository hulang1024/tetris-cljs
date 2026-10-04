goog.provide('tetris.core.replay');
tetris.core.replay.make_recorder = (function tetris$core$replay$make_recorder(){
return cljs.core.PersistentVector.EMPTY;
});
tetris.core.replay.append_record = (function tetris$core$replay$append_record(recorder,frame,pressed_buttons){
var pressed_actions = cljs.core.filterv((function (p1__37553_SHARP_){
return cljs.core.contains_QMARK_(tetris.core.input.actions,p1__37553_SHARP_);
}),pressed_buttons);
if(cljs.core.seq(pressed_actions)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(recorder,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frame,pressed_actions], null));
} else {
return recorder;
}
});
tetris.core.replay.__GT_input_states = (function tetris$core$replay$__GT_input_states(records){
var xs = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (xs,n){
var vec__37556 = cljs.core.last(xs);
var records__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37556,(0),null);
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37556,(1),null);
var vec__37559 = cljs.core.first(records__$1);
var frame = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37559,(0),null);
var pressed_buttons = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37559,(1),null);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(xs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,frame))?cljs.core.rest(records__$1):records__$1),tetris.core.input.handle(input,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,frame))?pressed_buttons:cljs.core.PersistentVector.EMPTY))], null));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [records,tetris.core.input.initial_state], null)], null),cljs.core.range.cljs$core$IFn$_invoke$arity$1((cljs.core.first(cljs.core.last(records)) + (1))));
return cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,xs)));
});
tetris.core.replay.make_replayer = (function tetris$core$replay$make_replayer(recorder){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"current","current",-1088038603),(0),new cljs.core.Keyword(null,"last","last",1105735132),(0),new cljs.core.Keyword(null,"delta","delta",108939957),(1),new cljs.core.Keyword(null,"acc","acc",838566312),(0),new cljs.core.Keyword(null,"inputs","inputs",865803858),tetris.core.replay.__GT_input_states(recorder),new cljs.core.Keyword(null,"last-input","last-input",889994505),tetris.core.input.empty_state], null);
});
tetris.core.replay.adjust_delta = (function tetris$core$replay$adjust_delta(replayer,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(replayer,new cljs.core.Keyword(null,"delta","delta",108939957),cljs.core.max.cljs$core$IFn$_invoke$arity$2(cljs.core.min.cljs$core$IFn$_invoke$arity$2(v,(8)),((1) / (8))));
});
tetris.core.replay.start = (function tetris$core$replay$start(replayer){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(replayer,new cljs.core.Keyword(null,"current","current",-1088038603),(0),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"acc","acc",838566312),(0)], 0));
});
tetris.core.replay.current_changed_QMARK_ = (function tetris$core$replay$current_changed_QMARK_(replayer){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(replayer),new cljs.core.Keyword(null,"last","last",1105735132).cljs$core$IFn$_invoke$arity$1(replayer));
});
tetris.core.replay.step = (function tetris$core$replay$step(replayer){
var map__37563 = replayer;
var map__37563__$1 = cljs.core.__destructure_map(map__37563);
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37563__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
var delta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37563__$1,new cljs.core.Keyword(null,"delta","delta",108939957));
var acc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37563__$1,new cljs.core.Keyword(null,"acc","acc",838566312));
var inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37563__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var acc__$1 = (acc + delta);
var step_frames = (cljs.math.floor(acc__$1) | 0);
var acc_SINGLEQUOTE_ = (acc__$1 - step_frames);
var step_inputs = (((current >= cljs.core.count(inputs)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.input.empty_state], null):cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(step_frames,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(current,inputs))));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [step_inputs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(replayer,new cljs.core.Keyword(null,"last","last",1105735132),current,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"current","current",-1088038603),(current + step_frames),new cljs.core.Keyword(null,"acc","acc",838566312),acc_SINGLEQUOTE_,new cljs.core.Keyword(null,"last-input","last-input",889994505),(function (){var or__5162__auto__ = cljs.core.last(step_inputs);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return new cljs.core.Keyword(null,"last-input","last-input",889994505).cljs$core$IFn$_invoke$arity$1(replayer);
}
})()], 0))], null);
});

//# sourceMappingURL=tetris.core.replay.js.map
