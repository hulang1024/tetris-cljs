goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_62928 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_62928(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_62933 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_62933(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__61381 = coll;
var G__61382 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__61381,G__61382) : shadow.dom.lazy_native_coll_seq.call(null,G__61381,G__61382));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5162__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(el)));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__61389 = arguments.length;
switch (G__61389) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__61392 = arguments.length;
switch (G__61392) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__61394 = arguments.length;
switch (G__61394) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__61400 = arguments.length;
switch (G__61400) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__61415 = arguments.length;
switch (G__61415) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__61425 = arguments.length;
switch (G__61425) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5162__auto__ = (!((typeof document !== 'undefined')));
if(or__5162__auto__){
return or__5162__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent((""+"on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e61444){if((e61444 instanceof Object)){
var e = e61444;
return console.log("didnt support attachEvent",el,e);
} else {
throw e61444;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5162__auto__ = (!((typeof document !== 'undefined')));
if(or__5162__auto__){
return or__5162__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent((""+"on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__61456 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__61457 = null;
var count__61458 = (0);
var i__61459 = (0);
while(true){
if((i__61459 < count__61458)){
var el = chunk__61457.cljs$core$IIndexed$_nth$arity$2(null,i__61459);
var handler_63006__$1 = ((function (seq__61456,chunk__61457,count__61458,i__61459,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__61456,chunk__61457,count__61458,i__61459,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_63006__$1);


var G__63008 = seq__61456;
var G__63009 = chunk__61457;
var G__63010 = count__61458;
var G__63011 = (i__61459 + (1));
seq__61456 = G__63008;
chunk__61457 = G__63009;
count__61458 = G__63010;
i__61459 = G__63011;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__61456);
if(temp__5825__auto__){
var seq__61456__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61456__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__61456__$1);
var G__63012 = cljs.core.chunk_rest(seq__61456__$1);
var G__63013 = c__5694__auto__;
var G__63014 = cljs.core.count(c__5694__auto__);
var G__63015 = (0);
seq__61456 = G__63012;
chunk__61457 = G__63013;
count__61458 = G__63014;
i__61459 = G__63015;
continue;
} else {
var el = cljs.core.first(seq__61456__$1);
var handler_63016__$1 = ((function (seq__61456,chunk__61457,count__61458,i__61459,el,seq__61456__$1,temp__5825__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__61456,chunk__61457,count__61458,i__61459,el,seq__61456__$1,temp__5825__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_63016__$1);


var G__63017 = cljs.core.next(seq__61456__$1);
var G__63018 = null;
var G__63019 = (0);
var G__63020 = (0);
seq__61456 = G__63017;
chunk__61457 = G__63018;
count__61458 = G__63019;
i__61459 = G__63020;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__61480 = arguments.length;
switch (G__61480) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__61506 = cljs.core.seq(events);
var chunk__61507 = null;
var count__61508 = (0);
var i__61509 = (0);
while(true){
if((i__61509 < count__61508)){
var vec__61518 = chunk__61507.cljs$core$IIndexed$_nth$arity$2(null,i__61509);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61518,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61518,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__63030 = seq__61506;
var G__63031 = chunk__61507;
var G__63032 = count__61508;
var G__63033 = (i__61509 + (1));
seq__61506 = G__63030;
chunk__61507 = G__63031;
count__61508 = G__63032;
i__61509 = G__63033;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__61506);
if(temp__5825__auto__){
var seq__61506__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61506__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__61506__$1);
var G__63035 = cljs.core.chunk_rest(seq__61506__$1);
var G__63036 = c__5694__auto__;
var G__63037 = cljs.core.count(c__5694__auto__);
var G__63038 = (0);
seq__61506 = G__63035;
chunk__61507 = G__63036;
count__61508 = G__63037;
i__61509 = G__63038;
continue;
} else {
var vec__61523 = cljs.core.first(seq__61506__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61523,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61523,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__63039 = cljs.core.next(seq__61506__$1);
var G__63040 = null;
var G__63041 = (0);
var G__63042 = (0);
seq__61506 = G__63039;
chunk__61507 = G__63040;
count__61508 = G__63041;
i__61509 = G__63042;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__61537 = cljs.core.seq(styles);
var chunk__61538 = null;
var count__61539 = (0);
var i__61540 = (0);
while(true){
if((i__61540 < count__61539)){
var vec__61557 = chunk__61538.cljs$core$IIndexed$_nth$arity$2(null,i__61540);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61557,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61557,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__63045 = seq__61537;
var G__63046 = chunk__61538;
var G__63047 = count__61539;
var G__63048 = (i__61540 + (1));
seq__61537 = G__63045;
chunk__61538 = G__63046;
count__61539 = G__63047;
i__61540 = G__63048;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__61537);
if(temp__5825__auto__){
var seq__61537__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61537__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__61537__$1);
var G__63050 = cljs.core.chunk_rest(seq__61537__$1);
var G__63051 = c__5694__auto__;
var G__63052 = cljs.core.count(c__5694__auto__);
var G__63053 = (0);
seq__61537 = G__63050;
chunk__61538 = G__63051;
count__61539 = G__63052;
i__61540 = G__63053;
continue;
} else {
var vec__61560 = cljs.core.first(seq__61537__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61560,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61560,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__63054 = cljs.core.next(seq__61537__$1);
var G__63055 = null;
var G__63056 = (0);
var G__63057 = (0);
seq__61537 = G__63054;
chunk__61538 = G__63055;
count__61539 = G__63056;
i__61540 = G__63057;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__61577_63059 = key;
var G__61577_63060__$1 = (((G__61577_63059 instanceof cljs.core.Keyword))?G__61577_63059.fqn:null);
switch (G__61577_63060__$1) {
case "id":
(el.id = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));

break;
case "class":
(el.className = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_63064 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5162__auto__ = goog.string.startsWith(ks_63064,"data-");
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return goog.string.startsWith(ks_63064,"aria-");
}
})())){
el.setAttribute(ks_63064,value);
} else {
(el[ks_63064] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class));
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw (""+"cant have id after class?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec__$1));
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__61611){
var map__61612 = p__61611;
var map__61612__$1 = cljs.core.__destructure_map(map__61612);
var props = map__61612__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61612__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__61615 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61615,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61615,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61615,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__61618 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__61618,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__61618;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__61622 = arguments.length;
switch (G__61622) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5825__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5825__auto__)){
var n = temp__5825__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5825__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5825__auto__)){
var n = temp__5825__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__61631){
var vec__61632 = p__61631;
var seq__61633 = cljs.core.seq(vec__61632);
var first__61634 = cljs.core.first(seq__61633);
var seq__61633__$1 = cljs.core.next(seq__61633);
var nn = first__61634;
var first__61634__$1 = cljs.core.first(seq__61633__$1);
var seq__61633__$2 = cljs.core.next(seq__61633__$1);
var np = first__61634__$1;
var nc = seq__61633__$2;
var node = vec__61632;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__61636 = nn;
var G__61637 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__61636,G__61637) : create_fn.call(null,G__61636,G__61637));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__61638 = nn;
var G__61639 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__61638,G__61639) : create_fn.call(null,G__61638,G__61639));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__61640 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61640,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61640,(1),null);
var seq__61643_63084 = cljs.core.seq(node_children);
var chunk__61644_63085 = null;
var count__61645_63086 = (0);
var i__61646_63087 = (0);
while(true){
if((i__61646_63087 < count__61645_63086)){
var child_struct_63088 = chunk__61644_63085.cljs$core$IIndexed$_nth$arity$2(null,i__61646_63087);
var children_63089 = shadow.dom.dom_node(child_struct_63088);
if(cljs.core.seq_QMARK_(children_63089)){
var seq__61703_63090 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_63089));
var chunk__61705_63091 = null;
var count__61706_63092 = (0);
var i__61707_63093 = (0);
while(true){
if((i__61707_63093 < count__61706_63092)){
var child_63094 = chunk__61705_63091.cljs$core$IIndexed$_nth$arity$2(null,i__61707_63093);
if(cljs.core.truth_(child_63094)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_63094);


var G__63095 = seq__61703_63090;
var G__63096 = chunk__61705_63091;
var G__63097 = count__61706_63092;
var G__63098 = (i__61707_63093 + (1));
seq__61703_63090 = G__63095;
chunk__61705_63091 = G__63096;
count__61706_63092 = G__63097;
i__61707_63093 = G__63098;
continue;
} else {
var G__63099 = seq__61703_63090;
var G__63100 = chunk__61705_63091;
var G__63101 = count__61706_63092;
var G__63102 = (i__61707_63093 + (1));
seq__61703_63090 = G__63099;
chunk__61705_63091 = G__63100;
count__61706_63092 = G__63101;
i__61707_63093 = G__63102;
continue;
}
} else {
var temp__5825__auto___63103 = cljs.core.seq(seq__61703_63090);
if(temp__5825__auto___63103){
var seq__61703_63104__$1 = temp__5825__auto___63103;
if(cljs.core.chunked_seq_QMARK_(seq__61703_63104__$1)){
var c__5694__auto___63105 = cljs.core.chunk_first(seq__61703_63104__$1);
var G__63106 = cljs.core.chunk_rest(seq__61703_63104__$1);
var G__63107 = c__5694__auto___63105;
var G__63108 = cljs.core.count(c__5694__auto___63105);
var G__63109 = (0);
seq__61703_63090 = G__63106;
chunk__61705_63091 = G__63107;
count__61706_63092 = G__63108;
i__61707_63093 = G__63109;
continue;
} else {
var child_63110 = cljs.core.first(seq__61703_63104__$1);
if(cljs.core.truth_(child_63110)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_63110);


var G__63111 = cljs.core.next(seq__61703_63104__$1);
var G__63112 = null;
var G__63113 = (0);
var G__63114 = (0);
seq__61703_63090 = G__63111;
chunk__61705_63091 = G__63112;
count__61706_63092 = G__63113;
i__61707_63093 = G__63114;
continue;
} else {
var G__63115 = cljs.core.next(seq__61703_63104__$1);
var G__63116 = null;
var G__63117 = (0);
var G__63118 = (0);
seq__61703_63090 = G__63115;
chunk__61705_63091 = G__63116;
count__61706_63092 = G__63117;
i__61707_63093 = G__63118;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_63089);
}


var G__63119 = seq__61643_63084;
var G__63120 = chunk__61644_63085;
var G__63121 = count__61645_63086;
var G__63122 = (i__61646_63087 + (1));
seq__61643_63084 = G__63119;
chunk__61644_63085 = G__63120;
count__61645_63086 = G__63121;
i__61646_63087 = G__63122;
continue;
} else {
var temp__5825__auto___63123 = cljs.core.seq(seq__61643_63084);
if(temp__5825__auto___63123){
var seq__61643_63124__$1 = temp__5825__auto___63123;
if(cljs.core.chunked_seq_QMARK_(seq__61643_63124__$1)){
var c__5694__auto___63125 = cljs.core.chunk_first(seq__61643_63124__$1);
var G__63126 = cljs.core.chunk_rest(seq__61643_63124__$1);
var G__63127 = c__5694__auto___63125;
var G__63128 = cljs.core.count(c__5694__auto___63125);
var G__63129 = (0);
seq__61643_63084 = G__63126;
chunk__61644_63085 = G__63127;
count__61645_63086 = G__63128;
i__61646_63087 = G__63129;
continue;
} else {
var child_struct_63130 = cljs.core.first(seq__61643_63124__$1);
var children_63131 = shadow.dom.dom_node(child_struct_63130);
if(cljs.core.seq_QMARK_(children_63131)){
var seq__61733_63132 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_63131));
var chunk__61735_63133 = null;
var count__61736_63134 = (0);
var i__61737_63135 = (0);
while(true){
if((i__61737_63135 < count__61736_63134)){
var child_63136 = chunk__61735_63133.cljs$core$IIndexed$_nth$arity$2(null,i__61737_63135);
if(cljs.core.truth_(child_63136)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_63136);


var G__63137 = seq__61733_63132;
var G__63138 = chunk__61735_63133;
var G__63139 = count__61736_63134;
var G__63140 = (i__61737_63135 + (1));
seq__61733_63132 = G__63137;
chunk__61735_63133 = G__63138;
count__61736_63134 = G__63139;
i__61737_63135 = G__63140;
continue;
} else {
var G__63141 = seq__61733_63132;
var G__63142 = chunk__61735_63133;
var G__63143 = count__61736_63134;
var G__63144 = (i__61737_63135 + (1));
seq__61733_63132 = G__63141;
chunk__61735_63133 = G__63142;
count__61736_63134 = G__63143;
i__61737_63135 = G__63144;
continue;
}
} else {
var temp__5825__auto___63145__$1 = cljs.core.seq(seq__61733_63132);
if(temp__5825__auto___63145__$1){
var seq__61733_63146__$1 = temp__5825__auto___63145__$1;
if(cljs.core.chunked_seq_QMARK_(seq__61733_63146__$1)){
var c__5694__auto___63147 = cljs.core.chunk_first(seq__61733_63146__$1);
var G__63148 = cljs.core.chunk_rest(seq__61733_63146__$1);
var G__63149 = c__5694__auto___63147;
var G__63150 = cljs.core.count(c__5694__auto___63147);
var G__63151 = (0);
seq__61733_63132 = G__63148;
chunk__61735_63133 = G__63149;
count__61736_63134 = G__63150;
i__61737_63135 = G__63151;
continue;
} else {
var child_63152 = cljs.core.first(seq__61733_63146__$1);
if(cljs.core.truth_(child_63152)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_63152);


var G__63153 = cljs.core.next(seq__61733_63146__$1);
var G__63154 = null;
var G__63155 = (0);
var G__63156 = (0);
seq__61733_63132 = G__63153;
chunk__61735_63133 = G__63154;
count__61736_63134 = G__63155;
i__61737_63135 = G__63156;
continue;
} else {
var G__63157 = cljs.core.next(seq__61733_63146__$1);
var G__63158 = null;
var G__63159 = (0);
var G__63160 = (0);
seq__61733_63132 = G__63157;
chunk__61735_63133 = G__63158;
count__61736_63134 = G__63159;
i__61737_63135 = G__63160;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_63131);
}


var G__63161 = cljs.core.next(seq__61643_63124__$1);
var G__63162 = null;
var G__63163 = (0);
var G__63164 = (0);
seq__61643_63084 = G__63161;
chunk__61644_63085 = G__63162;
count__61645_63086 = G__63163;
i__61646_63087 = G__63164;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__61782 = cljs.core.seq(node);
var chunk__61783 = null;
var count__61784 = (0);
var i__61785 = (0);
while(true){
if((i__61785 < count__61784)){
var n = chunk__61783.cljs$core$IIndexed$_nth$arity$2(null,i__61785);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__63173 = seq__61782;
var G__63174 = chunk__61783;
var G__63175 = count__61784;
var G__63176 = (i__61785 + (1));
seq__61782 = G__63173;
chunk__61783 = G__63174;
count__61784 = G__63175;
i__61785 = G__63176;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__61782);
if(temp__5825__auto__){
var seq__61782__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61782__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__61782__$1);
var G__63178 = cljs.core.chunk_rest(seq__61782__$1);
var G__63179 = c__5694__auto__;
var G__63180 = cljs.core.count(c__5694__auto__);
var G__63181 = (0);
seq__61782 = G__63178;
chunk__61783 = G__63179;
count__61784 = G__63180;
i__61785 = G__63181;
continue;
} else {
var n = cljs.core.first(seq__61782__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__63182 = cljs.core.next(seq__61782__$1);
var G__63183 = null;
var G__63184 = (0);
var G__63185 = (0);
seq__61782 = G__63182;
chunk__61783 = G__63183;
count__61784 = G__63184;
i__61785 = G__63185;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__61831 = arguments.length;
switch (G__61831) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__61842 = arguments.length;
switch (G__61842) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__61850 = arguments.length;
switch (G__61850) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5162__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute((""+"data-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute((""+"data-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5903__auto__ = [];
var len__5897__auto___63193 = arguments.length;
var i__5898__auto___63194 = (0);
while(true){
if((i__5898__auto___63194 < len__5897__auto___63193)){
args__5903__auto__.push((arguments[i__5898__auto___63194]));

var G__63196 = (i__5898__auto___63194 + (1));
i__5898__auto___63194 = G__63196;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__61891_63199 = cljs.core.seq(nodes);
var chunk__61892_63200 = null;
var count__61893_63201 = (0);
var i__61894_63202 = (0);
while(true){
if((i__61894_63202 < count__61893_63201)){
var node_63204 = chunk__61892_63200.cljs$core$IIndexed$_nth$arity$2(null,i__61894_63202);
fragment.appendChild(shadow.dom._to_dom(node_63204));


var G__63206 = seq__61891_63199;
var G__63207 = chunk__61892_63200;
var G__63208 = count__61893_63201;
var G__63209 = (i__61894_63202 + (1));
seq__61891_63199 = G__63206;
chunk__61892_63200 = G__63207;
count__61893_63201 = G__63208;
i__61894_63202 = G__63209;
continue;
} else {
var temp__5825__auto___63213 = cljs.core.seq(seq__61891_63199);
if(temp__5825__auto___63213){
var seq__61891_63214__$1 = temp__5825__auto___63213;
if(cljs.core.chunked_seq_QMARK_(seq__61891_63214__$1)){
var c__5694__auto___63216 = cljs.core.chunk_first(seq__61891_63214__$1);
var G__63221 = cljs.core.chunk_rest(seq__61891_63214__$1);
var G__63222 = c__5694__auto___63216;
var G__63223 = cljs.core.count(c__5694__auto___63216);
var G__63224 = (0);
seq__61891_63199 = G__63221;
chunk__61892_63200 = G__63222;
count__61893_63201 = G__63223;
i__61894_63202 = G__63224;
continue;
} else {
var node_63231 = cljs.core.first(seq__61891_63214__$1);
fragment.appendChild(shadow.dom._to_dom(node_63231));


var G__63238 = cljs.core.next(seq__61891_63214__$1);
var G__63239 = null;
var G__63240 = (0);
var G__63241 = (0);
seq__61891_63199 = G__63238;
chunk__61892_63200 = G__63239;
count__61893_63201 = G__63240;
i__61894_63202 = G__63241;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq61882){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61882));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__61939_63245 = cljs.core.seq(scripts);
var chunk__61940_63246 = null;
var count__61941_63247 = (0);
var i__61942_63248 = (0);
while(true){
if((i__61942_63248 < count__61941_63247)){
var vec__61967_63250 = chunk__61940_63246.cljs$core$IIndexed$_nth$arity$2(null,i__61942_63248);
var script_tag_63251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61967_63250,(0),null);
var script_body_63252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61967_63250,(1),null);
eval(script_body_63252);


var G__63253 = seq__61939_63245;
var G__63254 = chunk__61940_63246;
var G__63255 = count__61941_63247;
var G__63256 = (i__61942_63248 + (1));
seq__61939_63245 = G__63253;
chunk__61940_63246 = G__63254;
count__61941_63247 = G__63255;
i__61942_63248 = G__63256;
continue;
} else {
var temp__5825__auto___63258 = cljs.core.seq(seq__61939_63245);
if(temp__5825__auto___63258){
var seq__61939_63259__$1 = temp__5825__auto___63258;
if(cljs.core.chunked_seq_QMARK_(seq__61939_63259__$1)){
var c__5694__auto___63260 = cljs.core.chunk_first(seq__61939_63259__$1);
var G__63261 = cljs.core.chunk_rest(seq__61939_63259__$1);
var G__63262 = c__5694__auto___63260;
var G__63263 = cljs.core.count(c__5694__auto___63260);
var G__63264 = (0);
seq__61939_63245 = G__63261;
chunk__61940_63246 = G__63262;
count__61941_63247 = G__63263;
i__61942_63248 = G__63264;
continue;
} else {
var vec__61976_63265 = cljs.core.first(seq__61939_63259__$1);
var script_tag_63266 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61976_63265,(0),null);
var script_body_63267 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61976_63265,(1),null);
eval(script_body_63267);


var G__63268 = cljs.core.next(seq__61939_63259__$1);
var G__63269 = null;
var G__63270 = (0);
var G__63271 = (0);
seq__61939_63245 = G__63268;
chunk__61940_63246 = G__63269;
count__61941_63247 = G__63270;
i__61942_63248 = G__63271;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__61979){
var vec__61980 = p__61979;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61980,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61980,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__61999 = arguments.length;
switch (G__61999) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | 0))+"px");
});
shadow.dom.pct = (function shadow$dom$pct(value){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)+"%");
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__62010 = cljs.core.seq(style_keys);
var chunk__62011 = null;
var count__62012 = (0);
var i__62013 = (0);
while(true){
if((i__62013 < count__62012)){
var it = chunk__62011.cljs$core$IIndexed$_nth$arity$2(null,i__62013);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__63285 = seq__62010;
var G__63286 = chunk__62011;
var G__63287 = count__62012;
var G__63288 = (i__62013 + (1));
seq__62010 = G__63285;
chunk__62011 = G__63286;
count__62012 = G__63287;
i__62013 = G__63288;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__62010);
if(temp__5825__auto__){
var seq__62010__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62010__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__62010__$1);
var G__63290 = cljs.core.chunk_rest(seq__62010__$1);
var G__63291 = c__5694__auto__;
var G__63292 = cljs.core.count(c__5694__auto__);
var G__63293 = (0);
seq__62010 = G__63290;
chunk__62011 = G__63291;
count__62012 = G__63292;
i__62013 = G__63293;
continue;
} else {
var it = cljs.core.first(seq__62010__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__63294 = cljs.core.next(seq__62010__$1);
var G__63295 = null;
var G__63296 = (0);
var G__63297 = (0);
seq__62010 = G__63294;
chunk__62011 = G__63295;
count__62012 = G__63296;
i__62013 = G__63297;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5469__auto__,k__5470__auto__){
var self__ = this;
var this__5469__auto____$1 = this;
return this__5469__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5470__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5471__auto__,k62018,else__5472__auto__){
var self__ = this;
var this__5471__auto____$1 = this;
var G__62022 = k62018;
var G__62022__$1 = (((G__62022 instanceof cljs.core.Keyword))?G__62022.fqn:null);
switch (G__62022__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k62018,else__5472__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5489__auto__,f__5490__auto__,init__5491__auto__){
var self__ = this;
var this__5489__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5492__auto__,p__62023){
var vec__62024 = p__62023;
var k__5493__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62024,(0),null);
var v__5494__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62024,(1),null);
return (f__5490__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5490__auto__.cljs$core$IFn$_invoke$arity$3(ret__5492__auto__,k__5493__auto__,v__5494__auto__) : f__5490__auto__.call(null,ret__5492__auto__,k__5493__auto__,v__5494__auto__));
}),init__5491__auto__,this__5489__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer(writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});
return cljs.core.pr_sequential_writer(writer__5485__auto__,pr_pair__5487__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5486__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__62017){
var self__ = this;
var G__62017__$1 = this;
return (new cljs.core.RecordIter((0),G__62017__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5467__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5473__auto__){
var self__ = this;
var this__5473__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5272__auto__ = self__.__hash;
if((!((h__5272__auto__ == null)))){
return h__5272__auto__;
} else {
var h__5272__auto____$1 = (function (coll__5466__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5466__auto__));
})(this__5465__auto____$1);
(self__.__hash = h__5272__auto____$1);

return h__5272__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this62019,other62020){
var self__ = this;
var this62019__$1 = this;
return (((!((other62020 == null)))) && ((((this62019__$1.constructor === other62020.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62019__$1.x,other62020.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62019__$1.y,other62020.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62019__$1.__extmap,other62020.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5480__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5476__auto__,k62018){
var self__ = this;
var this__5476__auto____$1 = this;
var G__62037 = k62018;
var G__62037__$1 = (((G__62037 instanceof cljs.core.Keyword))?G__62037.fqn:null);
switch (G__62037__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k62018);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__62017){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__62039 = cljs.core.keyword_identical_QMARK_;
var expr__62040 = k__5478__auto__;
if(cljs.core.truth_((pred__62039.cljs$core$IFn$_invoke$arity$2 ? pred__62039.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__62040) : pred__62039.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__62040)))){
return (new shadow.dom.Coordinate(G__62017,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__62039.cljs$core$IFn$_invoke$arity$2 ? pred__62039.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__62040) : pred__62039.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__62040)))){
return (new shadow.dom.Coordinate(self__.x,G__62017,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5478__auto__,G__62017),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5468__auto__,G__62017){
var self__ = this;
var this__5468__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__62017,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5474__auto__,entry__5475__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5475__auto__)){
return this__5474__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5475__auto__,(0)),cljs.core._nth(entry__5475__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5474__auto____$1,entry__5475__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5515__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5515__auto__,writer__5516__auto__){
return cljs.core._write(writer__5516__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__62021){
var extmap__5511__auto__ = (function (){var G__62056 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__62021,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__62021)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__62056);
} else {
return G__62056;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__62021),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__62021),null,cljs.core.not_empty(extmap__5511__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5469__auto__,k__5470__auto__){
var self__ = this;
var this__5469__auto____$1 = this;
return this__5469__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5470__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5471__auto__,k62086,else__5472__auto__){
var self__ = this;
var this__5471__auto____$1 = this;
var G__62112 = k62086;
var G__62112__$1 = (((G__62112 instanceof cljs.core.Keyword))?G__62112.fqn:null);
switch (G__62112__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k62086,else__5472__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5489__auto__,f__5490__auto__,init__5491__auto__){
var self__ = this;
var this__5489__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5492__auto__,p__62116){
var vec__62119 = p__62116;
var k__5493__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62119,(0),null);
var v__5494__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62119,(1),null);
return (f__5490__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5490__auto__.cljs$core$IFn$_invoke$arity$3(ret__5492__auto__,k__5493__auto__,v__5494__auto__) : f__5490__auto__.call(null,ret__5492__auto__,k__5493__auto__,v__5494__auto__));
}),init__5491__auto__,this__5489__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer(writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});
return cljs.core.pr_sequential_writer(writer__5485__auto__,pr_pair__5487__auto__,"#shadow.dom.Size{",", ","}",opts__5486__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__62085){
var self__ = this;
var G__62085__$1 = this;
return (new cljs.core.RecordIter((0),G__62085__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5467__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5473__auto__){
var self__ = this;
var this__5473__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5272__auto__ = self__.__hash;
if((!((h__5272__auto__ == null)))){
return h__5272__auto__;
} else {
var h__5272__auto____$1 = (function (coll__5466__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5466__auto__));
})(this__5465__auto____$1);
(self__.__hash = h__5272__auto____$1);

return h__5272__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this62087,other62088){
var self__ = this;
var this62087__$1 = this;
return (((!((other62088 == null)))) && ((((this62087__$1.constructor === other62088.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62087__$1.w,other62088.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62087__$1.h,other62088.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62087__$1.__extmap,other62088.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5480__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5476__auto__,k62086){
var self__ = this;
var this__5476__auto____$1 = this;
var G__62274 = k62086;
var G__62274__$1 = (((G__62274 instanceof cljs.core.Keyword))?G__62274.fqn:null);
switch (G__62274__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k62086);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__62085){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__62281 = cljs.core.keyword_identical_QMARK_;
var expr__62282 = k__5478__auto__;
if(cljs.core.truth_((pred__62281.cljs$core$IFn$_invoke$arity$2 ? pred__62281.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__62282) : pred__62281.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__62282)))){
return (new shadow.dom.Size(G__62085,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__62281.cljs$core$IFn$_invoke$arity$2 ? pred__62281.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__62282) : pred__62281.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__62282)))){
return (new shadow.dom.Size(self__.w,G__62085,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5478__auto__,G__62085),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5468__auto__,G__62085){
var self__ = this;
var this__5468__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__62085,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5474__auto__,entry__5475__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5475__auto__)){
return this__5474__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5475__auto__,(0)),cljs.core._nth(entry__5475__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5474__auto____$1,entry__5475__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5515__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5515__auto__,writer__5516__auto__){
return cljs.core._write(writer__5516__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__62091){
var extmap__5511__auto__ = (function (){var G__62386 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__62091,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__62091)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__62386);
} else {
return G__62386;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__62091),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__62091),null,cljs.core.not_empty(extmap__5511__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5759__auto__ = opts;
var l__5760__auto__ = a__5759__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5760__auto__)){
var G__63387 = (i + (1));
var G__63388 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__63387;
ret = G__63388;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__62544){
var vec__62545 = p__62544;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62545,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62545,(1),null);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))));
}),query_params))));
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__62557 = arguments.length;
switch (G__62557) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5823__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5823__auto__)){
var child = temp__5823__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__63409 = ps;
var G__63410 = (i + (1));
el__$1 = G__63409;
i = G__63410;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__62657 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62657,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62657,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62657,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__62664_63415 = cljs.core.seq(props);
var chunk__62665_63416 = null;
var count__62666_63417 = (0);
var i__62667_63418 = (0);
while(true){
if((i__62667_63418 < count__62666_63417)){
var vec__62710_63419 = chunk__62665_63416.cljs$core$IIndexed$_nth$arity$2(null,i__62667_63418);
var k_63420 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62710_63419,(0),null);
var v_63421 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62710_63419,(1),null);
el.setAttributeNS((function (){var temp__5825__auto__ = cljs.core.namespace(k_63420);
if(cljs.core.truth_(temp__5825__auto__)){
var ns = temp__5825__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_63420),v_63421);


var G__63423 = seq__62664_63415;
var G__63424 = chunk__62665_63416;
var G__63425 = count__62666_63417;
var G__63426 = (i__62667_63418 + (1));
seq__62664_63415 = G__63423;
chunk__62665_63416 = G__63424;
count__62666_63417 = G__63425;
i__62667_63418 = G__63426;
continue;
} else {
var temp__5825__auto___63428 = cljs.core.seq(seq__62664_63415);
if(temp__5825__auto___63428){
var seq__62664_63430__$1 = temp__5825__auto___63428;
if(cljs.core.chunked_seq_QMARK_(seq__62664_63430__$1)){
var c__5694__auto___63431 = cljs.core.chunk_first(seq__62664_63430__$1);
var G__63432 = cljs.core.chunk_rest(seq__62664_63430__$1);
var G__63433 = c__5694__auto___63431;
var G__63434 = cljs.core.count(c__5694__auto___63431);
var G__63435 = (0);
seq__62664_63415 = G__63432;
chunk__62665_63416 = G__63433;
count__62666_63417 = G__63434;
i__62667_63418 = G__63435;
continue;
} else {
var vec__62716_63436 = cljs.core.first(seq__62664_63430__$1);
var k_63437 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62716_63436,(0),null);
var v_63438 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62716_63436,(1),null);
el.setAttributeNS((function (){var temp__5825__auto____$1 = cljs.core.namespace(k_63437);
if(cljs.core.truth_(temp__5825__auto____$1)){
var ns = temp__5825__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_63437),v_63438);


var G__63441 = cljs.core.next(seq__62664_63430__$1);
var G__63442 = null;
var G__63443 = (0);
var G__63444 = (0);
seq__62664_63415 = G__63441;
chunk__62665_63416 = G__63442;
count__62666_63417 = G__63443;
i__62667_63418 = G__63444;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__62734 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62734,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62734,(1),null);
var seq__62738_63448 = cljs.core.seq(node_children);
var chunk__62740_63449 = null;
var count__62741_63450 = (0);
var i__62742_63451 = (0);
while(true){
if((i__62742_63451 < count__62741_63450)){
var child_struct_63452 = chunk__62740_63449.cljs$core$IIndexed$_nth$arity$2(null,i__62742_63451);
if((!((child_struct_63452 == null)))){
if(typeof child_struct_63452 === 'string'){
var text_63453 = (node["textContent"]);
(node["textContent"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_63453)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_63452)));
} else {
var children_63454 = shadow.dom.svg_node(child_struct_63452);
if(cljs.core.seq_QMARK_(children_63454)){
var seq__62793_63455 = cljs.core.seq(children_63454);
var chunk__62795_63456 = null;
var count__62796_63457 = (0);
var i__62797_63458 = (0);
while(true){
if((i__62797_63458 < count__62796_63457)){
var child_63460 = chunk__62795_63456.cljs$core$IIndexed$_nth$arity$2(null,i__62797_63458);
if(cljs.core.truth_(child_63460)){
node.appendChild(child_63460);


var G__63461 = seq__62793_63455;
var G__63462 = chunk__62795_63456;
var G__63463 = count__62796_63457;
var G__63464 = (i__62797_63458 + (1));
seq__62793_63455 = G__63461;
chunk__62795_63456 = G__63462;
count__62796_63457 = G__63463;
i__62797_63458 = G__63464;
continue;
} else {
var G__63465 = seq__62793_63455;
var G__63466 = chunk__62795_63456;
var G__63467 = count__62796_63457;
var G__63468 = (i__62797_63458 + (1));
seq__62793_63455 = G__63465;
chunk__62795_63456 = G__63466;
count__62796_63457 = G__63467;
i__62797_63458 = G__63468;
continue;
}
} else {
var temp__5825__auto___63469 = cljs.core.seq(seq__62793_63455);
if(temp__5825__auto___63469){
var seq__62793_63470__$1 = temp__5825__auto___63469;
if(cljs.core.chunked_seq_QMARK_(seq__62793_63470__$1)){
var c__5694__auto___63471 = cljs.core.chunk_first(seq__62793_63470__$1);
var G__63472 = cljs.core.chunk_rest(seq__62793_63470__$1);
var G__63473 = c__5694__auto___63471;
var G__63474 = cljs.core.count(c__5694__auto___63471);
var G__63475 = (0);
seq__62793_63455 = G__63472;
chunk__62795_63456 = G__63473;
count__62796_63457 = G__63474;
i__62797_63458 = G__63475;
continue;
} else {
var child_63476 = cljs.core.first(seq__62793_63470__$1);
if(cljs.core.truth_(child_63476)){
node.appendChild(child_63476);


var G__63477 = cljs.core.next(seq__62793_63470__$1);
var G__63478 = null;
var G__63479 = (0);
var G__63480 = (0);
seq__62793_63455 = G__63477;
chunk__62795_63456 = G__63478;
count__62796_63457 = G__63479;
i__62797_63458 = G__63480;
continue;
} else {
var G__63481 = cljs.core.next(seq__62793_63470__$1);
var G__63482 = null;
var G__63483 = (0);
var G__63484 = (0);
seq__62793_63455 = G__63481;
chunk__62795_63456 = G__63482;
count__62796_63457 = G__63483;
i__62797_63458 = G__63484;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_63454);
}
}


var G__63485 = seq__62738_63448;
var G__63486 = chunk__62740_63449;
var G__63487 = count__62741_63450;
var G__63488 = (i__62742_63451 + (1));
seq__62738_63448 = G__63485;
chunk__62740_63449 = G__63486;
count__62741_63450 = G__63487;
i__62742_63451 = G__63488;
continue;
} else {
var G__63489 = seq__62738_63448;
var G__63490 = chunk__62740_63449;
var G__63491 = count__62741_63450;
var G__63492 = (i__62742_63451 + (1));
seq__62738_63448 = G__63489;
chunk__62740_63449 = G__63490;
count__62741_63450 = G__63491;
i__62742_63451 = G__63492;
continue;
}
} else {
var temp__5825__auto___63493 = cljs.core.seq(seq__62738_63448);
if(temp__5825__auto___63493){
var seq__62738_63494__$1 = temp__5825__auto___63493;
if(cljs.core.chunked_seq_QMARK_(seq__62738_63494__$1)){
var c__5694__auto___63495 = cljs.core.chunk_first(seq__62738_63494__$1);
var G__63496 = cljs.core.chunk_rest(seq__62738_63494__$1);
var G__63497 = c__5694__auto___63495;
var G__63498 = cljs.core.count(c__5694__auto___63495);
var G__63499 = (0);
seq__62738_63448 = G__63496;
chunk__62740_63449 = G__63497;
count__62741_63450 = G__63498;
i__62742_63451 = G__63499;
continue;
} else {
var child_struct_63500 = cljs.core.first(seq__62738_63494__$1);
if((!((child_struct_63500 == null)))){
if(typeof child_struct_63500 === 'string'){
var text_63501 = (node["textContent"]);
(node["textContent"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_63501)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_63500)));
} else {
var children_63503 = shadow.dom.svg_node(child_struct_63500);
if(cljs.core.seq_QMARK_(children_63503)){
var seq__62827_63504 = cljs.core.seq(children_63503);
var chunk__62829_63505 = null;
var count__62830_63506 = (0);
var i__62831_63507 = (0);
while(true){
if((i__62831_63507 < count__62830_63506)){
var child_63508 = chunk__62829_63505.cljs$core$IIndexed$_nth$arity$2(null,i__62831_63507);
if(cljs.core.truth_(child_63508)){
node.appendChild(child_63508);


var G__63509 = seq__62827_63504;
var G__63510 = chunk__62829_63505;
var G__63511 = count__62830_63506;
var G__63512 = (i__62831_63507 + (1));
seq__62827_63504 = G__63509;
chunk__62829_63505 = G__63510;
count__62830_63506 = G__63511;
i__62831_63507 = G__63512;
continue;
} else {
var G__63513 = seq__62827_63504;
var G__63514 = chunk__62829_63505;
var G__63515 = count__62830_63506;
var G__63516 = (i__62831_63507 + (1));
seq__62827_63504 = G__63513;
chunk__62829_63505 = G__63514;
count__62830_63506 = G__63515;
i__62831_63507 = G__63516;
continue;
}
} else {
var temp__5825__auto___63518__$1 = cljs.core.seq(seq__62827_63504);
if(temp__5825__auto___63518__$1){
var seq__62827_63519__$1 = temp__5825__auto___63518__$1;
if(cljs.core.chunked_seq_QMARK_(seq__62827_63519__$1)){
var c__5694__auto___63520 = cljs.core.chunk_first(seq__62827_63519__$1);
var G__63521 = cljs.core.chunk_rest(seq__62827_63519__$1);
var G__63522 = c__5694__auto___63520;
var G__63523 = cljs.core.count(c__5694__auto___63520);
var G__63524 = (0);
seq__62827_63504 = G__63521;
chunk__62829_63505 = G__63522;
count__62830_63506 = G__63523;
i__62831_63507 = G__63524;
continue;
} else {
var child_63525 = cljs.core.first(seq__62827_63519__$1);
if(cljs.core.truth_(child_63525)){
node.appendChild(child_63525);


var G__63526 = cljs.core.next(seq__62827_63519__$1);
var G__63527 = null;
var G__63528 = (0);
var G__63529 = (0);
seq__62827_63504 = G__63526;
chunk__62829_63505 = G__63527;
count__62830_63506 = G__63528;
i__62831_63507 = G__63529;
continue;
} else {
var G__63530 = cljs.core.next(seq__62827_63519__$1);
var G__63531 = null;
var G__63532 = (0);
var G__63533 = (0);
seq__62827_63504 = G__63530;
chunk__62829_63505 = G__63531;
count__62830_63506 = G__63532;
i__62831_63507 = G__63533;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_63503);
}
}


var G__63534 = cljs.core.next(seq__62738_63494__$1);
var G__63535 = null;
var G__63536 = (0);
var G__63537 = (0);
seq__62738_63448 = G__63534;
chunk__62740_63449 = G__63535;
count__62741_63450 = G__63536;
i__62742_63451 = G__63537;
continue;
} else {
var G__63538 = cljs.core.next(seq__62738_63494__$1);
var G__63539 = null;
var G__63540 = (0);
var G__63541 = (0);
seq__62738_63448 = G__63538;
chunk__62740_63449 = G__63539;
count__62741_63450 = G__63540;
i__62742_63451 = G__63541;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5903__auto__ = [];
var len__5897__auto___63543 = arguments.length;
var i__5898__auto___63544 = (0);
while(true){
if((i__5898__auto___63544 < len__5897__auto___63543)){
args__5903__auto__.push((arguments[i__5898__auto___63544]));

var G__63546 = (i__5898__auto___63544 + (1));
i__5898__auto___63544 = G__63546;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq62873){
var G__62874 = cljs.core.first(seq62873);
var seq62873__$1 = cljs.core.next(seq62873);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62874,seq62873__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
