goog.provide('tetris.core.input_test_util');
tetris.core.input_test_util.reduce_input = (function tetris$core$input_test_util$reduce_input(initial_state,pressed_buttons_per_frame){
return cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (states,pressed_buttons){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(states,tetris.core.input.handle(cljs.core.last(states),pressed_buttons));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [initial_state], null),pressed_buttons_per_frame));
});

//# sourceMappingURL=tetris.core.input_test_util.js.map
