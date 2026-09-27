goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__62127){
var map__62129 = p__62127;
var map__62129__$1 = cljs.core.__destructure_map(map__62129);
var m = map__62129__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62129__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62129__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5162__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5825__auto__)){
var ns = temp__5825__auto__;
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)+"/");
} else {
return null;
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m)));
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__62138_62559 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__62139_62560 = null;
var count__62140_62561 = (0);
var i__62141_62562 = (0);
while(true){
if((i__62141_62562 < count__62140_62561)){
var f_62563 = chunk__62139_62560.cljs$core$IIndexed$_nth$arity$2(null,i__62141_62562);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_62563], 0));


var G__62564 = seq__62138_62559;
var G__62565 = chunk__62139_62560;
var G__62566 = count__62140_62561;
var G__62567 = (i__62141_62562 + (1));
seq__62138_62559 = G__62564;
chunk__62139_62560 = G__62565;
count__62140_62561 = G__62566;
i__62141_62562 = G__62567;
continue;
} else {
var temp__5825__auto___62568 = cljs.core.seq(seq__62138_62559);
if(temp__5825__auto___62568){
var seq__62138_62569__$1 = temp__5825__auto___62568;
if(cljs.core.chunked_seq_QMARK_(seq__62138_62569__$1)){
var c__5694__auto___62571 = cljs.core.chunk_first(seq__62138_62569__$1);
var G__62572 = cljs.core.chunk_rest(seq__62138_62569__$1);
var G__62573 = c__5694__auto___62571;
var G__62574 = cljs.core.count(c__5694__auto___62571);
var G__62575 = (0);
seq__62138_62559 = G__62572;
chunk__62139_62560 = G__62573;
count__62140_62561 = G__62574;
i__62141_62562 = G__62575;
continue;
} else {
var f_62576 = cljs.core.first(seq__62138_62569__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_62576], 0));


var G__62577 = cljs.core.next(seq__62138_62569__$1);
var G__62578 = null;
var G__62579 = (0);
var G__62580 = (0);
seq__62138_62559 = G__62577;
chunk__62139_62560 = G__62578;
count__62140_62561 = G__62579;
i__62141_62562 = G__62580;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_62581 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5162__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_62581], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_62581)))?cljs.core.second(arglists_62581):arglists_62581)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n  Please see http://clojure.org/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m)))], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n  Please see http://clojure.org/special_forms#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m)))], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__62193_62586 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__62194_62587 = null;
var count__62195_62588 = (0);
var i__62196_62589 = (0);
while(true){
if((i__62196_62589 < count__62195_62588)){
var vec__62229_62590 = chunk__62194_62587.cljs$core$IIndexed$_nth$arity$2(null,i__62196_62589);
var name_62591 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62229_62590,(0),null);
var map__62232_62592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62229_62590,(1),null);
var map__62232_62593__$1 = cljs.core.__destructure_map(map__62232_62592);
var doc_62594 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62232_62593__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_62595 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62232_62593__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_62591], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_62595], 0));

if(cljs.core.truth_(doc_62594)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_62594], 0));
} else {
}


var G__62598 = seq__62193_62586;
var G__62599 = chunk__62194_62587;
var G__62600 = count__62195_62588;
var G__62601 = (i__62196_62589 + (1));
seq__62193_62586 = G__62598;
chunk__62194_62587 = G__62599;
count__62195_62588 = G__62600;
i__62196_62589 = G__62601;
continue;
} else {
var temp__5825__auto___62604 = cljs.core.seq(seq__62193_62586);
if(temp__5825__auto___62604){
var seq__62193_62605__$1 = temp__5825__auto___62604;
if(cljs.core.chunked_seq_QMARK_(seq__62193_62605__$1)){
var c__5694__auto___62606 = cljs.core.chunk_first(seq__62193_62605__$1);
var G__62607 = cljs.core.chunk_rest(seq__62193_62605__$1);
var G__62608 = c__5694__auto___62606;
var G__62609 = cljs.core.count(c__5694__auto___62606);
var G__62610 = (0);
seq__62193_62586 = G__62607;
chunk__62194_62587 = G__62608;
count__62195_62588 = G__62609;
i__62196_62589 = G__62610;
continue;
} else {
var vec__62250_62611 = cljs.core.first(seq__62193_62605__$1);
var name_62612 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62250_62611,(0),null);
var map__62253_62613 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62250_62611,(1),null);
var map__62253_62614__$1 = cljs.core.__destructure_map(map__62253_62613);
var doc_62615 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62253_62614__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_62616 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62253_62614__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_62612], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_62616], 0));

if(cljs.core.truth_(doc_62615)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_62615], 0));
} else {
}


var G__62617 = cljs.core.next(seq__62193_62605__$1);
var G__62618 = null;
var G__62619 = (0);
var G__62620 = (0);
seq__62193_62586 = G__62617;
chunk__62194_62587 = G__62618;
count__62195_62588 = G__62619;
i__62196_62589 = G__62620;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5825__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n))),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5825__auto__)){
var fnspec = temp__5825__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__62268 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__62271 = null;
var count__62272 = (0);
var i__62273 = (0);
while(true){
if((i__62273 < count__62272)){
var role = chunk__62271.cljs$core$IIndexed$_nth$arity$2(null,i__62273);
var temp__5825__auto___62623__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5825__auto___62623__$1)){
var spec_62624 = temp__5825__auto___62623__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role))+":"),cljs.spec.alpha.describe(spec_62624)], 0));
} else {
}


var G__62625 = seq__62268;
var G__62626 = chunk__62271;
var G__62627 = count__62272;
var G__62628 = (i__62273 + (1));
seq__62268 = G__62625;
chunk__62271 = G__62626;
count__62272 = G__62627;
i__62273 = G__62628;
continue;
} else {
var temp__5825__auto____$1 = cljs.core.seq(seq__62268);
if(temp__5825__auto____$1){
var seq__62268__$1 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__62268__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__62268__$1);
var G__62629 = cljs.core.chunk_rest(seq__62268__$1);
var G__62630 = c__5694__auto__;
var G__62631 = cljs.core.count(c__5694__auto__);
var G__62632 = (0);
seq__62268 = G__62629;
chunk__62271 = G__62630;
count__62272 = G__62631;
i__62273 = G__62632;
continue;
} else {
var role = cljs.core.first(seq__62268__$1);
var temp__5825__auto___62633__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5825__auto___62633__$2)){
var spec_62634 = temp__5825__auto___62633__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role))+":"),cljs.spec.alpha.describe(spec_62634)], 0));
} else {
}


var G__62635 = cljs.core.next(seq__62268__$1);
var G__62636 = null;
var G__62637 = (0);
var G__62638 = (0);
seq__62268 = G__62635;
chunk__62271 = G__62636;
count__62272 = G__62637;
i__62273 = G__62638;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__62348 = datafied_throwable;
var map__62348__$1 = cljs.core.__destructure_map(map__62348);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62348__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62348__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62348__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__62349 = cljs.core.last(via);
var map__62349__$1 = cljs.core.__destructure_map(map__62349);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62349__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62349__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62349__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__62350 = data;
var map__62350__$1 = cljs.core.__destructure_map(map__62350);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62350__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62350__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62350__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__62351 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__62351__$1 = cljs.core.__destructure_map(map__62351);
var top_data = map__62351__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62351__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__62373 = phase;
var G__62373__$1 = (((G__62373 instanceof cljs.core.Keyword))?G__62373.fqn:null);
switch (G__62373__$1) {
case "read-source":
var map__62374 = data;
var map__62374__$1 = cljs.core.__destructure_map(map__62374);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62374__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62374__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__62375 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__62375__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62375,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__62375);
var G__62375__$2 = (cljs.core.truth_((function (){var fexpr__62380 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__62380.cljs$core$IFn$_invoke$arity$1 ? fexpr__62380.cljs$core$IFn$_invoke$arity$1(source) : fexpr__62380.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__62375__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__62375__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62375__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__62375__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__62384 = top_data;
var G__62384__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62384,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__62384);
var G__62384__$2 = (cljs.core.truth_((function (){var fexpr__62385 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__62385.cljs$core$IFn$_invoke$arity$1 ? fexpr__62385.cljs$core$IFn$_invoke$arity$1(source) : fexpr__62385.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__62384__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__62384__$1);
var G__62384__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62384__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__62384__$2);
var G__62384__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62384__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__62384__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62384__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__62384__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__62401 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62401,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62401,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62401,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62401,(3),null);
var G__62408 = top_data;
var G__62408__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62408,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__62408);
var G__62408__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62408__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__62408__$1);
var G__62408__$3 = (cljs.core.truth_((function (){var and__5160__auto__ = source__$1;
if(cljs.core.truth_(and__5160__auto__)){
return method;
} else {
return and__5160__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62408__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__62408__$2);
var G__62408__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62408__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__62408__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62408__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__62408__$4;
}

break;
case "execution":
var vec__62435 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62435,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62435,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62435,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62435,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__62344_SHARP_){
var or__5162__auto__ = (p1__62344_SHARP_ == null);
if(or__5162__auto__){
return or__5162__auto__;
} else {
var fexpr__62451 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__62451.cljs$core$IFn$_invoke$arity$1 ? fexpr__62451.cljs$core$IFn$_invoke$arity$1(p1__62344_SHARP_) : fexpr__62451.call(null,p1__62344_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return line;
}
})();
var G__62461 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__62461__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62461,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__62461);
var G__62461__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62461__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__62461__$1);
var G__62461__$3 = (cljs.core.truth_((function (){var or__5162__auto__ = fn;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var and__5160__auto__ = source__$1;
if(cljs.core.truth_(and__5160__auto__)){
return method;
} else {
return and__5160__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62461__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5162__auto__ = fn;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__62461__$2);
var G__62461__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62461__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__62461__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62461__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__62461__$4;
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62373__$1))));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__62495){
var map__62496 = p__62495;
var map__62496__$1 = cljs.core.__destructure_map(map__62496);
var triage_data = map__62496__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62496__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62496__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62496__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62496__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62496__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62496__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62496__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62496__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5162__auto__ = source;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "<cljs repl>";
}
})())+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5162__auto__ = line;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (1);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(column)?(""+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)):"")));
var class_name = cljs.core.name((function (){var or__5162__auto__ = class$;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":(""+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(simple_class)+")"));
var format = goog.string.format;
var G__62502 = phase;
var G__62502__$1 = (((G__62502 instanceof cljs.core.Keyword))?G__62502.fqn:null);
switch (G__62502__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__62506 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__62507 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__62508 = loc;
var G__62509 = (cljs.core.truth_(spec)?(function (){var sb__5816__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__62511_62660 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__62512_62661 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__62513_62662 = true;
var _STAR_print_fn_STAR__temp_val__62514_62663 = (function (x__5817__auto__){
return sb__5816__auto__.append(x__5817__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__62513_62662);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__62514_62663);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__62493_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__62493_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__62512_62661);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__62511_62660);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5816__auto__));
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__62506,G__62507,G__62508,G__62509) : format.call(null,G__62506,G__62507,G__62508,G__62509));

break;
case "macroexpansion":
var G__62516 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__62517 = cause_type;
var G__62518 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__62519 = loc;
var G__62520 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__62516,G__62517,G__62518,G__62519,G__62520) : format.call(null,G__62516,G__62517,G__62518,G__62519,G__62520));

break;
case "compile-syntax-check":
var G__62522 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__62523 = cause_type;
var G__62524 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__62525 = loc;
var G__62526 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__62522,G__62523,G__62524,G__62525,G__62526) : format.call(null,G__62522,G__62523,G__62524,G__62525,G__62526));

break;
case "compilation":
var G__62527 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__62528 = cause_type;
var G__62529 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__62530 = loc;
var G__62531 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__62527,G__62528,G__62529,G__62530,G__62531) : format.call(null,G__62527,G__62528,G__62529,G__62530,G__62531));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__62533 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__62534 = symbol;
var G__62535 = loc;
var G__62536 = (function (){var sb__5816__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__62538_62678 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__62539_62679 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__62540_62680 = true;
var _STAR_print_fn_STAR__temp_val__62541_62681 = (function (x__5817__auto__){
return sb__5816__auto__.append(x__5817__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__62540_62680);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__62541_62681);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__62494_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__62494_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__62539_62679);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__62538_62678);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5816__auto__));
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__62533,G__62534,G__62535,G__62536) : format.call(null,G__62533,G__62534,G__62535,G__62536));
} else {
var G__62548 = "Execution error%s at %s(%s).\n%s\n";
var G__62549 = cause_type;
var G__62550 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__62551 = loc;
var G__62552 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__62548,G__62549,G__62550,G__62551,G__62552) : format.call(null,G__62548,G__62549,G__62550,G__62551,G__62552));
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62502__$1))));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
