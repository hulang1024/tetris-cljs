goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35278){
var map__35279 = p__35278;
var map__35279__$1 = cljs.core.__destructure_map(map__35279);
var m = map__35279__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35279__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35279__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__35286_35690 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35287_35691 = null;
var count__35288_35692 = (0);
var i__35289_35693 = (0);
while(true){
if((i__35289_35693 < count__35288_35692)){
var f_35694 = chunk__35287_35691.cljs$core$IIndexed$_nth$arity$2(null,i__35289_35693);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35694], 0));


var G__35695 = seq__35286_35690;
var G__35696 = chunk__35287_35691;
var G__35697 = count__35288_35692;
var G__35698 = (i__35289_35693 + (1));
seq__35286_35690 = G__35695;
chunk__35287_35691 = G__35696;
count__35288_35692 = G__35697;
i__35289_35693 = G__35698;
continue;
} else {
var temp__5825__auto___35700 = cljs.core.seq(seq__35286_35690);
if(temp__5825__auto___35700){
var seq__35286_35701__$1 = temp__5825__auto___35700;
if(cljs.core.chunked_seq_QMARK_(seq__35286_35701__$1)){
var c__5694__auto___35702 = cljs.core.chunk_first(seq__35286_35701__$1);
var G__35703 = cljs.core.chunk_rest(seq__35286_35701__$1);
var G__35704 = c__5694__auto___35702;
var G__35705 = cljs.core.count(c__5694__auto___35702);
var G__35706 = (0);
seq__35286_35690 = G__35703;
chunk__35287_35691 = G__35704;
count__35288_35692 = G__35705;
i__35289_35693 = G__35706;
continue;
} else {
var f_35714 = cljs.core.first(seq__35286_35701__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35714], 0));


var G__35716 = cljs.core.next(seq__35286_35701__$1);
var G__35717 = null;
var G__35718 = (0);
var G__35719 = (0);
seq__35286_35690 = G__35716;
chunk__35287_35691 = G__35717;
count__35288_35692 = G__35718;
i__35289_35693 = G__35719;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35720 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5162__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_35720], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_35720)))?cljs.core.second(arglists_35720):arglists_35720)], 0));
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
var seq__35316_35728 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35318_35729 = null;
var count__35319_35730 = (0);
var i__35320_35731 = (0);
while(true){
if((i__35320_35731 < count__35319_35730)){
var vec__35345_35733 = chunk__35318_35729.cljs$core$IIndexed$_nth$arity$2(null,i__35320_35731);
var name_35734 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35345_35733,(0),null);
var map__35348_35735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35345_35733,(1),null);
var map__35348_35736__$1 = cljs.core.__destructure_map(map__35348_35735);
var doc_35737 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35348_35736__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35738 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35348_35736__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35734], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35738], 0));

if(cljs.core.truth_(doc_35737)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35737], 0));
} else {
}


var G__35739 = seq__35316_35728;
var G__35740 = chunk__35318_35729;
var G__35741 = count__35319_35730;
var G__35742 = (i__35320_35731 + (1));
seq__35316_35728 = G__35739;
chunk__35318_35729 = G__35740;
count__35319_35730 = G__35741;
i__35320_35731 = G__35742;
continue;
} else {
var temp__5825__auto___35743 = cljs.core.seq(seq__35316_35728);
if(temp__5825__auto___35743){
var seq__35316_35744__$1 = temp__5825__auto___35743;
if(cljs.core.chunked_seq_QMARK_(seq__35316_35744__$1)){
var c__5694__auto___35746 = cljs.core.chunk_first(seq__35316_35744__$1);
var G__35754 = cljs.core.chunk_rest(seq__35316_35744__$1);
var G__35755 = c__5694__auto___35746;
var G__35756 = cljs.core.count(c__5694__auto___35746);
var G__35757 = (0);
seq__35316_35728 = G__35754;
chunk__35318_35729 = G__35755;
count__35319_35730 = G__35756;
i__35320_35731 = G__35757;
continue;
} else {
var vec__35354_35759 = cljs.core.first(seq__35316_35744__$1);
var name_35760 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35354_35759,(0),null);
var map__35357_35761 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35354_35759,(1),null);
var map__35357_35762__$1 = cljs.core.__destructure_map(map__35357_35761);
var doc_35763 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35357_35762__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35764 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35357_35762__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35760], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35764], 0));

if(cljs.core.truth_(doc_35763)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35763], 0));
} else {
}


var G__35765 = cljs.core.next(seq__35316_35744__$1);
var G__35766 = null;
var G__35767 = (0);
var G__35768 = (0);
seq__35316_35728 = G__35765;
chunk__35318_35729 = G__35766;
count__35319_35730 = G__35767;
i__35320_35731 = G__35768;
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

var seq__35367 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35368 = null;
var count__35369 = (0);
var i__35370 = (0);
while(true){
if((i__35370 < count__35369)){
var role = chunk__35368.cljs$core$IIndexed$_nth$arity$2(null,i__35370);
var temp__5825__auto___35773__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5825__auto___35773__$1)){
var spec_35774 = temp__5825__auto___35773__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role))+":"),cljs.spec.alpha.describe(spec_35774)], 0));
} else {
}


var G__35775 = seq__35367;
var G__35776 = chunk__35368;
var G__35777 = count__35369;
var G__35778 = (i__35370 + (1));
seq__35367 = G__35775;
chunk__35368 = G__35776;
count__35369 = G__35777;
i__35370 = G__35778;
continue;
} else {
var temp__5825__auto____$1 = cljs.core.seq(seq__35367);
if(temp__5825__auto____$1){
var seq__35367__$1 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__35367__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__35367__$1);
var G__35779 = cljs.core.chunk_rest(seq__35367__$1);
var G__35780 = c__5694__auto__;
var G__35781 = cljs.core.count(c__5694__auto__);
var G__35782 = (0);
seq__35367 = G__35779;
chunk__35368 = G__35780;
count__35369 = G__35781;
i__35370 = G__35782;
continue;
} else {
var role = cljs.core.first(seq__35367__$1);
var temp__5825__auto___35783__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5825__auto___35783__$2)){
var spec_35784 = temp__5825__auto___35783__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role))+":"),cljs.spec.alpha.describe(spec_35784)], 0));
} else {
}


var G__35785 = cljs.core.next(seq__35367__$1);
var G__35786 = null;
var G__35787 = (0);
var G__35788 = (0);
seq__35367 = G__35785;
chunk__35368 = G__35786;
count__35369 = G__35787;
i__35370 = G__35788;
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
var map__35432 = datafied_throwable;
var map__35432__$1 = cljs.core.__destructure_map(map__35432);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35432__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35432__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35432__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35433 = cljs.core.last(via);
var map__35433__$1 = cljs.core.__destructure_map(map__35433);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35433__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35433__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35433__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35434 = data;
var map__35434__$1 = cljs.core.__destructure_map(map__35434);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35434__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35434__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35434__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35435 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__35435__$1 = cljs.core.__destructure_map(map__35435);
var top_data = map__35435__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35435__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__35440 = phase;
var G__35440__$1 = (((G__35440 instanceof cljs.core.Keyword))?G__35440.fqn:null);
switch (G__35440__$1) {
case "read-source":
var map__35446 = data;
var map__35446__$1 = cljs.core.__destructure_map(map__35446);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35446__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35446__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35448 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__35448__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35448,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35448);
var G__35448__$2 = (cljs.core.truth_((function (){var fexpr__35457 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35457.cljs$core$IFn$_invoke$arity$1 ? fexpr__35457.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35457.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35448__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35448__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35448__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35448__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35469 = top_data;
var G__35469__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35469,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35469);
var G__35469__$2 = (cljs.core.truth_((function (){var fexpr__35470 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35470.cljs$core$IFn$_invoke$arity$1 ? fexpr__35470.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35470.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35469__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35469__$1);
var G__35469__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35469__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35469__$2);
var G__35469__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35469__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35469__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35469__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35469__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35489 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35489,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35489,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35489,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35489,(3),null);
var G__35502 = top_data;
var G__35502__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35502,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35502);
var G__35502__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35502__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35502__$1);
var G__35502__$3 = (cljs.core.truth_((function (){var and__5160__auto__ = source__$1;
if(cljs.core.truth_(and__5160__auto__)){
return method;
} else {
return and__5160__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35502__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35502__$2);
var G__35502__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35502__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35502__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35502__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35502__$4;
}

break;
case "execution":
var vec__35525 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35525,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35525,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35525,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35525,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__35412_SHARP_){
var or__5162__auto__ = (p1__35412_SHARP_ == null);
if(or__5162__auto__){
return or__5162__auto__;
} else {
var fexpr__35547 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35547.cljs$core$IFn$_invoke$arity$1 ? fexpr__35547.cljs$core$IFn$_invoke$arity$1(p1__35412_SHARP_) : fexpr__35547.call(null,p1__35412_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return line;
}
})();
var G__35560 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35560__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35560,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35560);
var G__35560__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35560__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35560__$1);
var G__35560__$3 = (cljs.core.truth_((function (){var or__5162__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35560__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5162__auto__ = fn;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35560__$2);
var G__35560__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35560__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35560__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35560__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35560__$4;
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35440__$1))));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35586){
var map__35587 = p__35586;
var map__35587__$1 = cljs.core.__destructure_map(map__35587);
var triage_data = map__35587__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35587__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35587__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35587__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35587__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35587__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35587__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35587__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35587__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__35602 = phase;
var G__35602__$1 = (((G__35602 instanceof cljs.core.Keyword))?G__35602.fqn:null);
switch (G__35602__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__35604 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__35605 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__35606 = loc;
var G__35607 = (cljs.core.truth_(spec)?(function (){var sb__5816__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35610_35832 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35611_35833 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35612_35834 = true;
var _STAR_print_fn_STAR__temp_val__35613_35835 = (function (x__5817__auto__){
return sb__5816__auto__.append(x__5817__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35612_35834);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35613_35835);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35579_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35579_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35611_35833);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35610_35832);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5816__auto__));
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35604,G__35605,G__35606,G__35607) : format.call(null,G__35604,G__35605,G__35606,G__35607));

break;
case "macroexpansion":
var G__35619 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__35620 = cause_type;
var G__35621 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__35622 = loc;
var G__35623 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35619,G__35620,G__35621,G__35622,G__35623) : format.call(null,G__35619,G__35620,G__35621,G__35622,G__35623));

break;
case "compile-syntax-check":
var G__35625 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__35626 = cause_type;
var G__35627 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__35628 = loc;
var G__35629 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35625,G__35626,G__35627,G__35628,G__35629) : format.call(null,G__35625,G__35626,G__35627,G__35628,G__35629));

break;
case "compilation":
var G__35636 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__35637 = cause_type;
var G__35638 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__35639 = loc;
var G__35640 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35636,G__35637,G__35638,G__35639,G__35640) : format.call(null,G__35636,G__35637,G__35638,G__35639,G__35640));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__35646 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__35647 = symbol;
var G__35648 = loc;
var G__35649 = (function (){var sb__5816__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35652_35849 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35653_35850 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35655_35851 = true;
var _STAR_print_fn_STAR__temp_val__35656_35852 = (function (x__5817__auto__){
return sb__5816__auto__.append(x__5817__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35655_35851);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35656_35852);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35584_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35584_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35653_35850);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35652_35849);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5816__auto__));
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35646,G__35647,G__35648,G__35649) : format.call(null,G__35646,G__35647,G__35648,G__35649));
} else {
var G__35664 = "Execution error%s at %s(%s).\n%s\n";
var G__35665 = cause_type;
var G__35666 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__35667 = loc;
var G__35668 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35664,G__35665,G__35666,G__35667,G__35668) : format.call(null,G__35664,G__35665,G__35666,G__35667,G__35668));
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35602__$1))));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
