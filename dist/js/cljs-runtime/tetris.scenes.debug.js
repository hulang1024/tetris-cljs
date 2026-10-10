goog.provide('tetris.scenes.debug');
tetris.scenes.debug.matrix__GT_string = (function tetris$scenes$debug$matrix__GT_string(matrix){
var __GT_str = (function tetris$scenes$debug$matrix__GT_string_$___GT_str(v){
if(cljs.core.truth_(v)){
if(cljs.core.boolean_QMARK_(v)){
return "o";
} else {
return cljs.core.name(new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(v));
}
} else {
return ".";
}
});
var row__GT_str = (function tetris$scenes$debug$matrix__GT_string_$_row__GT_str(row){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(__GT_str,row));
});
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(row__GT_str,matrix));
});
tetris.scenes.debug.prow = (function tetris$scenes$debug$prow(var_args){
var args__5903__auto__ = [];
var len__5897__auto___44528 = arguments.length;
var i__5898__auto___44529 = (0);
while(true){
if((i__5898__auto___44529 < len__5897__auto___44528)){
args__5903__auto__.push((arguments[i__5898__auto___44529]));

var G__44530 = (i__5898__auto___44529 + (1));
i__5898__auto___44529 = G__44530;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return tetris.scenes.debug.prow.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(tetris.scenes.debug.prow.cljs$core$IFn$_invoke$arity$variadic = (function (label,content){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)+"   "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,content))+"\n");
}));

(tetris.scenes.debug.prow.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tetris.scenes.debug.prow.cljs$lang$applyTo = (function (seq44506){
var G__44507 = cljs.core.first(seq44506);
var seq44506__$1 = cljs.core.next(seq44506);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44507,seq44506__$1);
}));

tetris.scenes.debug.state__GT_text = (function tetris$scenes$debug$state__GT_text(p__44518){
var map__44519 = p__44518;
var map__44519__$1 = cljs.core.__destructure_map(map__44519);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44519__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var game_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44519__$1,new cljs.core.Keyword(null,"game-state","game-state",935682735));
var replayer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44519__$1,new cljs.core.Keyword(null,"replayer","replayer",1712876889));
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tetris.scenes.debug.prow.cljs$core$IFn$_invoke$arity$variadic("DAS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(game_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"das","das",-1801456200)], null))], 0)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tetris.scenes.debug.prow.cljs$core$IFn$_invoke$arity$variadic("ARR",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(game_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"arr","arr",474961448)], null))], 0)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tetris.scenes.debug.prow.cljs$core$IFn$_invoke$arity$variadic("DCD",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(game_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"dcd","dcd",594655109)], null))], 0)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tetris.scenes.debug.prow.cljs$core$IFn$_invoke$arity$variadic("SDF",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(game_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"sdf","sdf",-844168232)], null))], 0)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tetris.scenes.debug.prow.cljs$core$IFn$_invoke$arity$variadic("Lock Delay",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tetris.core.ruleset.lock_delay.cljs$core$IFn$_invoke$arity$1(game_state)], 0)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tetris.scenes.debug.prow.cljs$core$IFn$_invoke$arity$variadic("Line Clear Delay",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tetris.core.ruleset.line_clear_delay.cljs$core$IFn$_invoke$arity$1(game_state)], 0)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tetris.scenes.debug.prow.cljs$core$IFn$_invoke$arity$variadic("phase",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("tetris.core.tick","phase","tetris.core.tick/phase",1834337411).cljs$core$IFn$_invoke$arity$1(game_state)], 0)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tetris.scenes.debug.prow.cljs$core$IFn$_invoke$arity$variadic("scene status",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([status], 0)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tetris.scenes.debug.prow.cljs$core$IFn$_invoke$arity$variadic("frame",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(game_state)], 0)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tetris.scenes.debug.prow.cljs$core$IFn$_invoke$arity$variadic("row,col",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(game_state))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(game_state)))], 0)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"ghost-enabled?","ghost-enabled?",-261151779).cljs$core$IFn$_invoke$arity$1(game_state))?tetris.scenes.debug.prow.cljs$core$IFn$_invoke$arity$variadic("ghost",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tetris.core.game.ghost(game_state)], 0))], 0)):null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tetris.scenes.debug.prow.cljs$core$IFn$_invoke$arity$variadic("lines-cleared",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"lines-cleared","lines-cleared",1628289668).cljs$core$IFn$_invoke$arity$1(game_state)], 0)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tetris.scenes.debug.prow.cljs$core$IFn$_invoke$arity$variadic("combo-count",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"combo-count","combo-count",-1885856692).cljs$core$IFn$_invoke$arity$1(game_state)], 0)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tetris.scenes.debug.prow.cljs$core$IFn$_invoke$arity$variadic("speed level",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"speed-level","speed-level",-256559849).cljs$core$IFn$_invoke$arity$1(game_state)], 0)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tetris.scenes.debug.prow.cljs$core$IFn$_invoke$arity$variadic("score",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(game_state)], 0)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tetris.scenes.debug.prow.cljs$core$IFn$_invoke$arity$variadic("fall interval",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tetris.core.ruleset.fall_interval.cljs$core$IFn$_invoke$arity$1(game_state)], 0)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tetris.scenes.debug.prow.cljs$core$IFn$_invoke$arity$variadic("soft drop interval",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tetris.core.ruleset.soft_drop_interval.cljs$core$IFn$_invoke$arity$1(game_state)], 0)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tetris.scenes.debug.prow.cljs$core$IFn$_invoke$arity$variadic("fall-timer",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("tetris.core.tick","fall-timer","tetris.core.tick/fall-timer",612804990).cljs$core$IFn$_invoke$arity$1(game_state)], 0)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tetris.scenes.debug.prow.cljs$core$IFn$_invoke$arity$variadic("lock-timer",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("tetris.core.tick","lock-timer","tetris.core.tick/lock-timer",-1741962176).cljs$core$IFn$_invoke$arity$1(game_state)], 0)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tetris.scenes.debug.prow.cljs$core$IFn$_invoke$arity$variadic("das-timer",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("tetris.core.tick","das-timer","tetris.core.tick/das-timer",1207164327).cljs$core$IFn$_invoke$arity$1(game_state)], 0)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tetris.scenes.debug.prow.cljs$core$IFn$_invoke$arity$variadic("arr-timer",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("tetris.core.tick","arr-timer","tetris.core.tick/arr-timer",-1395782638).cljs$core$IFn$_invoke$arity$1(game_state)], 0)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tetris.scenes.debug.prow.cljs$core$IFn$_invoke$arity$variadic("dcd-timer",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("tetris.core.tick","dcd-timer","tetris.core.tick/dcd-timer",1438315080).cljs$core$IFn$_invoke$arity$1(game_state)], 0)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tetris.scenes.debug.prow.cljs$core$IFn$_invoke$arity$variadic("sdf-timer",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("tetris.core.tick","sdf-timer","tetris.core.tick/sdf-timer",1792248331).cljs$core$IFn$_invoke$arity$1(game_state)], 0)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tetris.scenes.debug.prow.cljs$core$IFn$_invoke$arity$variadic("das-button",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("tetris.core.tick","das-button","tetris.core.tick/das-button",-973960486).cljs$core$IFn$_invoke$arity$1(game_state)], 0)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tetris.scenes.debug.prow.cljs$core$IFn$_invoke$arity$variadic("shift-blocked?",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"shift-blocked?","shift-blocked?",-2058728569).cljs$core$IFn$_invoke$arity$1(game_state)], 0)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tetris.scenes.debug.prow.cljs$core$IFn$_invoke$arity$variadic("landed?",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"landed?","landed?",-686035854).cljs$core$IFn$_invoke$arity$1(game_state)], 0)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tetris.scenes.debug.prow.cljs$core$IFn$_invoke$arity$variadic("line-clearing?",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("tetris.core.tick","line-clearing?","tetris.core.tick/line-clearing?",-14783557).cljs$core$IFn$_invoke$arity$1(game_state)], 0)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tetris.scenes.debug.prow.cljs$core$IFn$_invoke$arity$variadic("line-clear-timer",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("tetris.core.tick","line-clear-timer","tetris.core.tick/line-clear-timer",-219612930).cljs$core$IFn$_invoke$arity$1(game_state)], 0)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tetris.scenes.debug.prow.cljs$core$IFn$_invoke$arity$variadic("lock-reset-count",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("tetris.core.tick","lock-reset-count","tetris.core.tick/lock-reset-count",-1528190054).cljs$core$IFn$_invoke$arity$1(game_state)], 0)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tetris.scenes.debug.prow.cljs$core$IFn$_invoke$arity$variadic("held?",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"held?","held?",822967254).cljs$core$IFn$_invoke$arity$1(game_state)], 0)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(replayer)?(""+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tetris.scenes.debug.prow.cljs$core$IFn$_invoke$arity$variadic("replay delta",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"delta","delta",108939957).cljs$core$IFn$_invoke$arity$1(replayer)], 0)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tetris.scenes.debug.prow.cljs$core$IFn$_invoke$arity$variadic("replay acc",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"acc","acc",838566312).cljs$core$IFn$_invoke$arity$1(replayer)], 0)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tetris.scenes.debug.prow.cljs$core$IFn$_invoke$arity$variadic("replay current",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(replayer)], 0)))):null))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tetris.scenes.debug.prow.cljs$core$IFn$_invoke$arity$variadic("hold",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(game_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hold","hold",-1621118005),new cljs.core.Keyword(null,"kind","kind",-717265803)], null))], 0)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tetris.scenes.debug.prow.cljs$core$IFn$_invoke$arity$variadic("current",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\n",tetris.scenes.debug.matrix__GT_string((function (){var and__5160__auto__ = new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(game_state);
if(cljs.core.truth_(and__5160__auto__)){
return tetris.core.rs.shape.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(game_state));
} else {
return and__5160__auto__;
}
})())], 0)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tetris.scenes.debug.prow.cljs$core$IFn$_invoke$arity$variadic("next",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"next-queue","next-queue",-689213061).cljs$core$IFn$_invoke$arity$1(game_state)))], 0)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tetris.scenes.debug.prow.cljs$core$IFn$_invoke$arity$variadic("next-piece-id",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"next-piece-id","next-piece-id",-872920712).cljs$core$IFn$_invoke$arity$1(game_state)], 0)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tetris.scenes.debug.prow.cljs$core$IFn$_invoke$arity$variadic("board",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\n",tetris.scenes.debug.matrix__GT_string(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(game_state))], 0))));
});
tetris.scenes.debug.debug_overlay = ((goog.DEBUG)?(function (){var el = goog.dom.createDom("pre","debug","");
goog.style.setStyle(el,({"position": "absolute", "top": (20), "right": (0), "width": (240), "font-size": (13), "font-family": "monospace", "whiteSpace": "pre-wrap", "color": "white"}));

goog.dom.appendChild(goog.dom.getDocument().body,el);

return el;
})():null);
tetris.scenes.debug.toggle = (function tetris$scenes$debug$toggle(on_QMARK_){
if(cljs.core.truth_(tetris.scenes.debug.debug_overlay)){
return goog.style.setStyle(tetris.scenes.debug.debug_overlay,({"display": (cljs.core.truth_(on_QMARK_)?"block":"none")}));
} else {
return null;
}
});
tetris.scenes.debug.draw_debug = (function tetris$scenes$debug$draw_debug(states){
if(cljs.core.truth_(tetris.scenes.debug.debug_overlay)){
return (tetris.scenes.debug.debug_overlay.textContent = cljs.core.clj__GT_js(tetris.scenes.debug.state__GT_text(states)));
} else {
return null;
}
});

//# sourceMappingURL=tetris.scenes.debug.js.map
