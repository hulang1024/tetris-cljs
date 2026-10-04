goog.provide('tetris.core.replay');
tetris.core.replay.make_recorder = (function tetris$core$replay$make_recorder(){
return cljs.core.PersistentVector.EMPTY;
});
tetris.core.replay.append_record = (function tetris$core$replay$append_record(recorder,frame,pressed_buttons){
var pressed_actions = cljs.core.filterv((function (p1__40105_SHARP_){
return cljs.core.contains_QMARK_(tetris.core.input.actions,p1__40105_SHARP_);
}),pressed_buttons);
if(cljs.core.seq(pressed_actions)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(recorder,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frame,pressed_actions], null));
} else {
return recorder;
}
});
tetris.core.replay.__GT_input_states = (function tetris$core$replay$__GT_input_states(records){
var xs = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (xs,n){
var vec__40106 = cljs.core.last(xs);
var records__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40106,(0),null);
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40106,(1),null);
var vec__40109 = cljs.core.first(records__$1);
var frame = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40109,(0),null);
var pressed_buttons = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40109,(1),null);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(xs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,frame))?cljs.core.rest(records__$1):records__$1),tetris.core.input.handle(input,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,frame))?pressed_buttons:cljs.core.PersistentVector.EMPTY))], null));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [records,tetris.core.input.initial_state], null)], null),cljs.core.range.cljs$core$IFn$_invoke$arity$1((cljs.core.first(cljs.core.last(records)) + (1))));
return cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,xs)));
});
tetris.core.replay.make_replayer = (function tetris$core$replay$make_replayer(recorder){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"current","current",-1088038603),(0),new cljs.core.Keyword(null,"last","last",1105735132),(0),new cljs.core.Keyword(null,"delta","delta",108939957),(1),new cljs.core.Keyword(null,"acc","acc",838566312),(0),new cljs.core.Keyword(null,"records","records",1326822832),recorder,new cljs.core.Keyword(null,"inputs","inputs",865803858),tetris.core.replay.__GT_input_states(recorder)], null);
});
tetris.core.replay.adjust_delta = (function tetris$core$replay$adjust_delta(replayer,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(replayer,new cljs.core.Keyword(null,"delta","delta",108939957),v);
});
tetris.core.replay.start = (function tetris$core$replay$start(replayer){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(replayer,new cljs.core.Keyword(null,"current","current",-1088038603),(0),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"acc","acc",838566312),(0)], 0));
});
tetris.core.replay.current_changed_QMARK_ = (function tetris$core$replay$current_changed_QMARK_(replayer){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(replayer),new cljs.core.Keyword(null,"last","last",1105735132).cljs$core$IFn$_invoke$arity$1(replayer));
});
tetris.core.replay.current_input = (function tetris$core$replay$current_input(replayer){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"inputs","inputs",865803858).cljs$core$IFn$_invoke$arity$1(replayer),new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(replayer),tetris.core.input.empty_state);
});
tetris.core.replay.step = (function tetris$core$replay$step(replayer){
var map__40112 = replayer;
var map__40112__$1 = cljs.core.__destructure_map(map__40112);
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40112__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
var delta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40112__$1,new cljs.core.Keyword(null,"delta","delta",108939957));
var acc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40112__$1,new cljs.core.Keyword(null,"acc","acc",838566312));
var inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40112__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var acc__$1 = (acc + delta);
var frames = (cljs.math.floor(acc__$1) | 0);
var acc_SINGLEQUOTE_ = (acc__$1 - frames);
var pending_inputs = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(frames,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(current,inputs)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((current < cljs.core.count(inputs)))?pending_inputs:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.input.empty_state], null)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(replayer,new cljs.core.Keyword(null,"last","last",1105735132),current,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"current","current",-1088038603),(current + frames),new cljs.core.Keyword(null,"acc","acc",838566312),acc_SINGLEQUOTE_], 0))], null);
});

//# sourceMappingURL=tetris.core.replay.js.map
