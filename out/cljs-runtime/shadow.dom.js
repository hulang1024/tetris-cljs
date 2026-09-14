goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_30089 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_30089(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_30094 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_30094(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__28395 = coll;
var G__28396 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__28395,G__28396) : shadow.dom.lazy_native_coll_seq.call(null,G__28395,G__28396));
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
var G__28442 = arguments.length;
switch (G__28442) {
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
var G__28478 = arguments.length;
switch (G__28478) {
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
var G__28499 = arguments.length;
switch (G__28499) {
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
var G__28529 = arguments.length;
switch (G__28529) {
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
var G__28572 = arguments.length;
switch (G__28572) {
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
var G__28656 = arguments.length;
switch (G__28656) {
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
}catch (e28704){if((e28704 instanceof Object)){
var e = e28704;
return console.log("didnt support attachEvent",el,e);
} else {
throw e28704;

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
var seq__28718 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__28719 = null;
var count__28720 = (0);
var i__28721 = (0);
while(true){
if((i__28721 < count__28720)){
var el = chunk__28719.cljs$core$IIndexed$_nth$arity$2(null,i__28721);
var handler_30215__$1 = ((function (seq__28718,chunk__28719,count__28720,i__28721,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__28718,chunk__28719,count__28720,i__28721,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_30215__$1);


var G__30218 = seq__28718;
var G__30219 = chunk__28719;
var G__30220 = count__28720;
var G__30221 = (i__28721 + (1));
seq__28718 = G__30218;
chunk__28719 = G__30219;
count__28720 = G__30220;
i__28721 = G__30221;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__28718);
if(temp__5825__auto__){
var seq__28718__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28718__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__28718__$1);
var G__30222 = cljs.core.chunk_rest(seq__28718__$1);
var G__30223 = c__5694__auto__;
var G__30224 = cljs.core.count(c__5694__auto__);
var G__30225 = (0);
seq__28718 = G__30222;
chunk__28719 = G__30223;
count__28720 = G__30224;
i__28721 = G__30225;
continue;
} else {
var el = cljs.core.first(seq__28718__$1);
var handler_30226__$1 = ((function (seq__28718,chunk__28719,count__28720,i__28721,el,seq__28718__$1,temp__5825__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__28718,chunk__28719,count__28720,i__28721,el,seq__28718__$1,temp__5825__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_30226__$1);


var G__30227 = cljs.core.next(seq__28718__$1);
var G__30228 = null;
var G__30229 = (0);
var G__30230 = (0);
seq__28718 = G__30227;
chunk__28719 = G__30228;
count__28720 = G__30229;
i__28721 = G__30230;
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
var G__28792 = arguments.length;
switch (G__28792) {
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
var seq__28798 = cljs.core.seq(events);
var chunk__28799 = null;
var count__28800 = (0);
var i__28801 = (0);
while(true){
if((i__28801 < count__28800)){
var vec__28830 = chunk__28799.cljs$core$IIndexed$_nth$arity$2(null,i__28801);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28830,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28830,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__30254 = seq__28798;
var G__30255 = chunk__28799;
var G__30256 = count__28800;
var G__30257 = (i__28801 + (1));
seq__28798 = G__30254;
chunk__28799 = G__30255;
count__28800 = G__30256;
i__28801 = G__30257;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__28798);
if(temp__5825__auto__){
var seq__28798__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28798__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__28798__$1);
var G__30259 = cljs.core.chunk_rest(seq__28798__$1);
var G__30260 = c__5694__auto__;
var G__30261 = cljs.core.count(c__5694__auto__);
var G__30262 = (0);
seq__28798 = G__30259;
chunk__28799 = G__30260;
count__28800 = G__30261;
i__28801 = G__30262;
continue;
} else {
var vec__28845 = cljs.core.first(seq__28798__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28845,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28845,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__30266 = cljs.core.next(seq__28798__$1);
var G__30267 = null;
var G__30268 = (0);
var G__30269 = (0);
seq__28798 = G__30266;
chunk__28799 = G__30267;
count__28800 = G__30268;
i__28801 = G__30269;
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
var seq__28849 = cljs.core.seq(styles);
var chunk__28850 = null;
var count__28851 = (0);
var i__28852 = (0);
while(true){
if((i__28852 < count__28851)){
var vec__28873 = chunk__28850.cljs$core$IIndexed$_nth$arity$2(null,i__28852);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28873,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28873,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__30275 = seq__28849;
var G__30276 = chunk__28850;
var G__30277 = count__28851;
var G__30278 = (i__28852 + (1));
seq__28849 = G__30275;
chunk__28850 = G__30276;
count__28851 = G__30277;
i__28852 = G__30278;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__28849);
if(temp__5825__auto__){
var seq__28849__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28849__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__28849__$1);
var G__30288 = cljs.core.chunk_rest(seq__28849__$1);
var G__30289 = c__5694__auto__;
var G__30290 = cljs.core.count(c__5694__auto__);
var G__30291 = (0);
seq__28849 = G__30288;
chunk__28850 = G__30289;
count__28851 = G__30290;
i__28852 = G__30291;
continue;
} else {
var vec__28877 = cljs.core.first(seq__28849__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28877,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28877,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__30294 = cljs.core.next(seq__28849__$1);
var G__30295 = null;
var G__30296 = (0);
var G__30297 = (0);
seq__28849 = G__30294;
chunk__28850 = G__30295;
count__28851 = G__30296;
i__28852 = G__30297;
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
var G__28892_30300 = key;
var G__28892_30301__$1 = (((G__28892_30300 instanceof cljs.core.Keyword))?G__28892_30300.fqn:null);
switch (G__28892_30301__$1) {
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
var ks_30313 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5162__auto__ = goog.string.startsWith(ks_30313,"data-");
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return goog.string.startsWith(ks_30313,"aria-");
}
})())){
el.setAttribute(ks_30313,value);
} else {
(el[ks_30313] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__28908){
var map__28911 = p__28908;
var map__28911__$1 = cljs.core.__destructure_map(map__28911);
var props = map__28911__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28911__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__28917 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28917,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28917,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28917,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__28929 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__28929,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__28929;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__28933 = arguments.length;
switch (G__28933) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__28937){
var vec__28938 = p__28937;
var seq__28939 = cljs.core.seq(vec__28938);
var first__28940 = cljs.core.first(seq__28939);
var seq__28939__$1 = cljs.core.next(seq__28939);
var nn = first__28940;
var first__28940__$1 = cljs.core.first(seq__28939__$1);
var seq__28939__$2 = cljs.core.next(seq__28939__$1);
var np = first__28940__$1;
var nc = seq__28939__$2;
var node = vec__28938;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28945 = nn;
var G__28946 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__28945,G__28946) : create_fn.call(null,G__28945,G__28946));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28949 = nn;
var G__28950 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__28949,G__28950) : create_fn.call(null,G__28949,G__28950));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__28954 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28954,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28954,(1),null);
var seq__28957_30372 = cljs.core.seq(node_children);
var chunk__28958_30373 = null;
var count__28959_30374 = (0);
var i__28960_30375 = (0);
while(true){
if((i__28960_30375 < count__28959_30374)){
var child_struct_30378 = chunk__28958_30373.cljs$core$IIndexed$_nth$arity$2(null,i__28960_30375);
var children_30379 = shadow.dom.dom_node(child_struct_30378);
if(cljs.core.seq_QMARK_(children_30379)){
var seq__29002_30381 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_30379));
var chunk__29004_30382 = null;
var count__29005_30383 = (0);
var i__29006_30384 = (0);
while(true){
if((i__29006_30384 < count__29005_30383)){
var child_30385 = chunk__29004_30382.cljs$core$IIndexed$_nth$arity$2(null,i__29006_30384);
if(cljs.core.truth_(child_30385)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_30385);


var G__30386 = seq__29002_30381;
var G__30387 = chunk__29004_30382;
var G__30388 = count__29005_30383;
var G__30389 = (i__29006_30384 + (1));
seq__29002_30381 = G__30386;
chunk__29004_30382 = G__30387;
count__29005_30383 = G__30388;
i__29006_30384 = G__30389;
continue;
} else {
var G__30390 = seq__29002_30381;
var G__30391 = chunk__29004_30382;
var G__30392 = count__29005_30383;
var G__30393 = (i__29006_30384 + (1));
seq__29002_30381 = G__30390;
chunk__29004_30382 = G__30391;
count__29005_30383 = G__30392;
i__29006_30384 = G__30393;
continue;
}
} else {
var temp__5825__auto___30395 = cljs.core.seq(seq__29002_30381);
if(temp__5825__auto___30395){
var seq__29002_30397__$1 = temp__5825__auto___30395;
if(cljs.core.chunked_seq_QMARK_(seq__29002_30397__$1)){
var c__5694__auto___30398 = cljs.core.chunk_first(seq__29002_30397__$1);
var G__30399 = cljs.core.chunk_rest(seq__29002_30397__$1);
var G__30400 = c__5694__auto___30398;
var G__30401 = cljs.core.count(c__5694__auto___30398);
var G__30402 = (0);
seq__29002_30381 = G__30399;
chunk__29004_30382 = G__30400;
count__29005_30383 = G__30401;
i__29006_30384 = G__30402;
continue;
} else {
var child_30403 = cljs.core.first(seq__29002_30397__$1);
if(cljs.core.truth_(child_30403)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_30403);


var G__30404 = cljs.core.next(seq__29002_30397__$1);
var G__30405 = null;
var G__30406 = (0);
var G__30407 = (0);
seq__29002_30381 = G__30404;
chunk__29004_30382 = G__30405;
count__29005_30383 = G__30406;
i__29006_30384 = G__30407;
continue;
} else {
var G__30410 = cljs.core.next(seq__29002_30397__$1);
var G__30411 = null;
var G__30412 = (0);
var G__30413 = (0);
seq__29002_30381 = G__30410;
chunk__29004_30382 = G__30411;
count__29005_30383 = G__30412;
i__29006_30384 = G__30413;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_30379);
}


var G__30416 = seq__28957_30372;
var G__30417 = chunk__28958_30373;
var G__30418 = count__28959_30374;
var G__30419 = (i__28960_30375 + (1));
seq__28957_30372 = G__30416;
chunk__28958_30373 = G__30417;
count__28959_30374 = G__30418;
i__28960_30375 = G__30419;
continue;
} else {
var temp__5825__auto___30423 = cljs.core.seq(seq__28957_30372);
if(temp__5825__auto___30423){
var seq__28957_30427__$1 = temp__5825__auto___30423;
if(cljs.core.chunked_seq_QMARK_(seq__28957_30427__$1)){
var c__5694__auto___30428 = cljs.core.chunk_first(seq__28957_30427__$1);
var G__30429 = cljs.core.chunk_rest(seq__28957_30427__$1);
var G__30430 = c__5694__auto___30428;
var G__30431 = cljs.core.count(c__5694__auto___30428);
var G__30432 = (0);
seq__28957_30372 = G__30429;
chunk__28958_30373 = G__30430;
count__28959_30374 = G__30431;
i__28960_30375 = G__30432;
continue;
} else {
var child_struct_30434 = cljs.core.first(seq__28957_30427__$1);
var children_30436 = shadow.dom.dom_node(child_struct_30434);
if(cljs.core.seq_QMARK_(children_30436)){
var seq__29016_30440 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_30436));
var chunk__29018_30441 = null;
var count__29019_30442 = (0);
var i__29020_30443 = (0);
while(true){
if((i__29020_30443 < count__29019_30442)){
var child_30445 = chunk__29018_30441.cljs$core$IIndexed$_nth$arity$2(null,i__29020_30443);
if(cljs.core.truth_(child_30445)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_30445);


var G__30446 = seq__29016_30440;
var G__30447 = chunk__29018_30441;
var G__30448 = count__29019_30442;
var G__30449 = (i__29020_30443 + (1));
seq__29016_30440 = G__30446;
chunk__29018_30441 = G__30447;
count__29019_30442 = G__30448;
i__29020_30443 = G__30449;
continue;
} else {
var G__30450 = seq__29016_30440;
var G__30451 = chunk__29018_30441;
var G__30452 = count__29019_30442;
var G__30453 = (i__29020_30443 + (1));
seq__29016_30440 = G__30450;
chunk__29018_30441 = G__30451;
count__29019_30442 = G__30452;
i__29020_30443 = G__30453;
continue;
}
} else {
var temp__5825__auto___30454__$1 = cljs.core.seq(seq__29016_30440);
if(temp__5825__auto___30454__$1){
var seq__29016_30455__$1 = temp__5825__auto___30454__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29016_30455__$1)){
var c__5694__auto___30456 = cljs.core.chunk_first(seq__29016_30455__$1);
var G__30457 = cljs.core.chunk_rest(seq__29016_30455__$1);
var G__30458 = c__5694__auto___30456;
var G__30459 = cljs.core.count(c__5694__auto___30456);
var G__30460 = (0);
seq__29016_30440 = G__30457;
chunk__29018_30441 = G__30458;
count__29019_30442 = G__30459;
i__29020_30443 = G__30460;
continue;
} else {
var child_30461 = cljs.core.first(seq__29016_30455__$1);
if(cljs.core.truth_(child_30461)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_30461);


var G__30463 = cljs.core.next(seq__29016_30455__$1);
var G__30464 = null;
var G__30465 = (0);
var G__30466 = (0);
seq__29016_30440 = G__30463;
chunk__29018_30441 = G__30464;
count__29019_30442 = G__30465;
i__29020_30443 = G__30466;
continue;
} else {
var G__30467 = cljs.core.next(seq__29016_30455__$1);
var G__30468 = null;
var G__30469 = (0);
var G__30470 = (0);
seq__29016_30440 = G__30467;
chunk__29018_30441 = G__30468;
count__29019_30442 = G__30469;
i__29020_30443 = G__30470;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_30436);
}


var G__30471 = cljs.core.next(seq__28957_30427__$1);
var G__30472 = null;
var G__30473 = (0);
var G__30474 = (0);
seq__28957_30372 = G__30471;
chunk__28958_30373 = G__30472;
count__28959_30374 = G__30473;
i__28960_30375 = G__30474;
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
var seq__29062 = cljs.core.seq(node);
var chunk__29063 = null;
var count__29064 = (0);
var i__29065 = (0);
while(true){
if((i__29065 < count__29064)){
var n = chunk__29063.cljs$core$IIndexed$_nth$arity$2(null,i__29065);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__30477 = seq__29062;
var G__30478 = chunk__29063;
var G__30479 = count__29064;
var G__30480 = (i__29065 + (1));
seq__29062 = G__30477;
chunk__29063 = G__30478;
count__29064 = G__30479;
i__29065 = G__30480;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__29062);
if(temp__5825__auto__){
var seq__29062__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29062__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__29062__$1);
var G__30481 = cljs.core.chunk_rest(seq__29062__$1);
var G__30482 = c__5694__auto__;
var G__30483 = cljs.core.count(c__5694__auto__);
var G__30484 = (0);
seq__29062 = G__30481;
chunk__29063 = G__30482;
count__29064 = G__30483;
i__29065 = G__30484;
continue;
} else {
var n = cljs.core.first(seq__29062__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__30487 = cljs.core.next(seq__29062__$1);
var G__30488 = null;
var G__30489 = (0);
var G__30490 = (0);
seq__29062 = G__30487;
chunk__29063 = G__30488;
count__29064 = G__30489;
i__29065 = G__30490;
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
var G__29089 = arguments.length;
switch (G__29089) {
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
var G__29097 = arguments.length;
switch (G__29097) {
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
var G__29113 = arguments.length;
switch (G__29113) {
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
var len__5897__auto___30507 = arguments.length;
var i__5898__auto___30508 = (0);
while(true){
if((i__5898__auto___30508 < len__5897__auto___30507)){
args__5903__auto__.push((arguments[i__5898__auto___30508]));

var G__30510 = (i__5898__auto___30508 + (1));
i__5898__auto___30508 = G__30510;
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
var seq__29141_30514 = cljs.core.seq(nodes);
var chunk__29142_30515 = null;
var count__29143_30516 = (0);
var i__29144_30517 = (0);
while(true){
if((i__29144_30517 < count__29143_30516)){
var node_30518 = chunk__29142_30515.cljs$core$IIndexed$_nth$arity$2(null,i__29144_30517);
fragment.appendChild(shadow.dom._to_dom(node_30518));


var G__30519 = seq__29141_30514;
var G__30520 = chunk__29142_30515;
var G__30521 = count__29143_30516;
var G__30522 = (i__29144_30517 + (1));
seq__29141_30514 = G__30519;
chunk__29142_30515 = G__30520;
count__29143_30516 = G__30521;
i__29144_30517 = G__30522;
continue;
} else {
var temp__5825__auto___30523 = cljs.core.seq(seq__29141_30514);
if(temp__5825__auto___30523){
var seq__29141_30524__$1 = temp__5825__auto___30523;
if(cljs.core.chunked_seq_QMARK_(seq__29141_30524__$1)){
var c__5694__auto___30525 = cljs.core.chunk_first(seq__29141_30524__$1);
var G__30526 = cljs.core.chunk_rest(seq__29141_30524__$1);
var G__30527 = c__5694__auto___30525;
var G__30528 = cljs.core.count(c__5694__auto___30525);
var G__30529 = (0);
seq__29141_30514 = G__30526;
chunk__29142_30515 = G__30527;
count__29143_30516 = G__30528;
i__29144_30517 = G__30529;
continue;
} else {
var node_30531 = cljs.core.first(seq__29141_30524__$1);
fragment.appendChild(shadow.dom._to_dom(node_30531));


var G__30532 = cljs.core.next(seq__29141_30524__$1);
var G__30533 = null;
var G__30534 = (0);
var G__30535 = (0);
seq__29141_30514 = G__30532;
chunk__29142_30515 = G__30533;
count__29143_30516 = G__30534;
i__29144_30517 = G__30535;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq29136){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29136));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__29154_30545 = cljs.core.seq(scripts);
var chunk__29155_30546 = null;
var count__29156_30547 = (0);
var i__29157_30548 = (0);
while(true){
if((i__29157_30548 < count__29156_30547)){
var vec__29178_30549 = chunk__29155_30546.cljs$core$IIndexed$_nth$arity$2(null,i__29157_30548);
var script_tag_30550 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29178_30549,(0),null);
var script_body_30551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29178_30549,(1),null);
eval(script_body_30551);


var G__30552 = seq__29154_30545;
var G__30553 = chunk__29155_30546;
var G__30554 = count__29156_30547;
var G__30555 = (i__29157_30548 + (1));
seq__29154_30545 = G__30552;
chunk__29155_30546 = G__30553;
count__29156_30547 = G__30554;
i__29157_30548 = G__30555;
continue;
} else {
var temp__5825__auto___30557 = cljs.core.seq(seq__29154_30545);
if(temp__5825__auto___30557){
var seq__29154_30558__$1 = temp__5825__auto___30557;
if(cljs.core.chunked_seq_QMARK_(seq__29154_30558__$1)){
var c__5694__auto___30559 = cljs.core.chunk_first(seq__29154_30558__$1);
var G__30561 = cljs.core.chunk_rest(seq__29154_30558__$1);
var G__30562 = c__5694__auto___30559;
var G__30563 = cljs.core.count(c__5694__auto___30559);
var G__30564 = (0);
seq__29154_30545 = G__30561;
chunk__29155_30546 = G__30562;
count__29156_30547 = G__30563;
i__29157_30548 = G__30564;
continue;
} else {
var vec__29184_30566 = cljs.core.first(seq__29154_30558__$1);
var script_tag_30567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29184_30566,(0),null);
var script_body_30568 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29184_30566,(1),null);
eval(script_body_30568);


var G__30570 = cljs.core.next(seq__29154_30558__$1);
var G__30571 = null;
var G__30572 = (0);
var G__30573 = (0);
seq__29154_30545 = G__30570;
chunk__29155_30546 = G__30571;
count__29156_30547 = G__30572;
i__29157_30548 = G__30573;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__29188){
var vec__29190 = p__29188;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29190,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29190,(1),null);
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
var G__29214 = arguments.length;
switch (G__29214) {
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
var seq__29251 = cljs.core.seq(style_keys);
var chunk__29252 = null;
var count__29253 = (0);
var i__29254 = (0);
while(true){
if((i__29254 < count__29253)){
var it = chunk__29252.cljs$core$IIndexed$_nth$arity$2(null,i__29254);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__30585 = seq__29251;
var G__30586 = chunk__29252;
var G__30587 = count__29253;
var G__30588 = (i__29254 + (1));
seq__29251 = G__30585;
chunk__29252 = G__30586;
count__29253 = G__30587;
i__29254 = G__30588;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__29251);
if(temp__5825__auto__){
var seq__29251__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29251__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__29251__$1);
var G__30590 = cljs.core.chunk_rest(seq__29251__$1);
var G__30591 = c__5694__auto__;
var G__30592 = cljs.core.count(c__5694__auto__);
var G__30593 = (0);
seq__29251 = G__30590;
chunk__29252 = G__30591;
count__29253 = G__30592;
i__29254 = G__30593;
continue;
} else {
var it = cljs.core.first(seq__29251__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__30594 = cljs.core.next(seq__29251__$1);
var G__30595 = null;
var G__30596 = (0);
var G__30597 = (0);
seq__29251 = G__30594;
chunk__29252 = G__30595;
count__29253 = G__30596;
i__29254 = G__30597;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5471__auto__,k29267,else__5472__auto__){
var self__ = this;
var this__5471__auto____$1 = this;
var G__29288 = k29267;
var G__29288__$1 = (((G__29288 instanceof cljs.core.Keyword))?G__29288.fqn:null);
switch (G__29288__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29267,else__5472__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5489__auto__,f__5490__auto__,init__5491__auto__){
var self__ = this;
var this__5489__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5492__auto__,p__29289){
var vec__29291 = p__29289;
var k__5493__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29291,(0),null);
var v__5494__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29291,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29266){
var self__ = this;
var G__29266__$1 = this;
return (new cljs.core.RecordIter((0),G__29266__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29268,other29269){
var self__ = this;
var this29268__$1 = this;
return (((!((other29269 == null)))) && ((((this29268__$1.constructor === other29269.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29268__$1.x,other29269.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29268__$1.y,other29269.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29268__$1.__extmap,other29269.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5476__auto__,k29267){
var self__ = this;
var this__5476__auto____$1 = this;
var G__29334 = k29267;
var G__29334__$1 = (((G__29334 instanceof cljs.core.Keyword))?G__29334.fqn:null);
switch (G__29334__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k29267);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__29266){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__29338 = cljs.core.keyword_identical_QMARK_;
var expr__29339 = k__5478__auto__;
if(cljs.core.truth_((pred__29338.cljs$core$IFn$_invoke$arity$2 ? pred__29338.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__29339) : pred__29338.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__29339)))){
return (new shadow.dom.Coordinate(G__29266,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29338.cljs$core$IFn$_invoke$arity$2 ? pred__29338.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__29339) : pred__29338.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__29339)))){
return (new shadow.dom.Coordinate(self__.x,G__29266,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5478__auto__,G__29266),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5468__auto__,G__29266){
var self__ = this;
var this__5468__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__29266,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__29275){
var extmap__5511__auto__ = (function (){var G__29347 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__29275,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__29275)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__29347);
} else {
return G__29347;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__29275),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__29275),null,cljs.core.not_empty(extmap__5511__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5471__auto__,k29365,else__5472__auto__){
var self__ = this;
var this__5471__auto____$1 = this;
var G__29377 = k29365;
var G__29377__$1 = (((G__29377 instanceof cljs.core.Keyword))?G__29377.fqn:null);
switch (G__29377__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29365,else__5472__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5489__auto__,f__5490__auto__,init__5491__auto__){
var self__ = this;
var this__5489__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5492__auto__,p__29381){
var vec__29383 = p__29381;
var k__5493__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29383,(0),null);
var v__5494__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29383,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29364){
var self__ = this;
var G__29364__$1 = this;
return (new cljs.core.RecordIter((0),G__29364__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29366,other29367){
var self__ = this;
var this29366__$1 = this;
return (((!((other29367 == null)))) && ((((this29366__$1.constructor === other29367.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29366__$1.w,other29367.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29366__$1.h,other29367.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29366__$1.__extmap,other29367.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5476__auto__,k29365){
var self__ = this;
var this__5476__auto____$1 = this;
var G__29414 = k29365;
var G__29414__$1 = (((G__29414 instanceof cljs.core.Keyword))?G__29414.fqn:null);
switch (G__29414__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k29365);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__29364){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__29421 = cljs.core.keyword_identical_QMARK_;
var expr__29422 = k__5478__auto__;
if(cljs.core.truth_((pred__29421.cljs$core$IFn$_invoke$arity$2 ? pred__29421.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__29422) : pred__29421.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__29422)))){
return (new shadow.dom.Size(G__29364,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29421.cljs$core$IFn$_invoke$arity$2 ? pred__29421.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__29422) : pred__29421.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__29422)))){
return (new shadow.dom.Size(self__.w,G__29364,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5478__auto__,G__29364),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5468__auto__,G__29364){
var self__ = this;
var this__5468__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__29364,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__29371){
var extmap__5511__auto__ = (function (){var G__29453 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__29371,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__29371)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__29453);
} else {
return G__29453;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__29371),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__29371),null,cljs.core.not_empty(extmap__5511__auto__),null));
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
var G__30670 = (i + (1));
var G__30671 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__30670;
ret = G__30671;
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
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__29481){
var vec__29482 = p__29481;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29482,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29482,(1),null);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))));
}),query_params))));
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__29490 = arguments.length;
switch (G__29490) {
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
var G__30694 = ps;
var G__30695 = (i + (1));
el__$1 = G__30694;
i = G__30695;
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
var vec__29635 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29635,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29635,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29635,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__29648_30701 = cljs.core.seq(props);
var chunk__29649_30702 = null;
var count__29650_30703 = (0);
var i__29651_30704 = (0);
while(true){
if((i__29651_30704 < count__29650_30703)){
var vec__29674_30705 = chunk__29649_30702.cljs$core$IIndexed$_nth$arity$2(null,i__29651_30704);
var k_30706 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29674_30705,(0),null);
var v_30707 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29674_30705,(1),null);
el.setAttributeNS((function (){var temp__5825__auto__ = cljs.core.namespace(k_30706);
if(cljs.core.truth_(temp__5825__auto__)){
var ns = temp__5825__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_30706),v_30707);


var G__30708 = seq__29648_30701;
var G__30709 = chunk__29649_30702;
var G__30710 = count__29650_30703;
var G__30711 = (i__29651_30704 + (1));
seq__29648_30701 = G__30708;
chunk__29649_30702 = G__30709;
count__29650_30703 = G__30710;
i__29651_30704 = G__30711;
continue;
} else {
var temp__5825__auto___30712 = cljs.core.seq(seq__29648_30701);
if(temp__5825__auto___30712){
var seq__29648_30713__$1 = temp__5825__auto___30712;
if(cljs.core.chunked_seq_QMARK_(seq__29648_30713__$1)){
var c__5694__auto___30714 = cljs.core.chunk_first(seq__29648_30713__$1);
var G__30715 = cljs.core.chunk_rest(seq__29648_30713__$1);
var G__30716 = c__5694__auto___30714;
var G__30717 = cljs.core.count(c__5694__auto___30714);
var G__30718 = (0);
seq__29648_30701 = G__30715;
chunk__29649_30702 = G__30716;
count__29650_30703 = G__30717;
i__29651_30704 = G__30718;
continue;
} else {
var vec__29686_30719 = cljs.core.first(seq__29648_30713__$1);
var k_30720 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29686_30719,(0),null);
var v_30721 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29686_30719,(1),null);
el.setAttributeNS((function (){var temp__5825__auto____$1 = cljs.core.namespace(k_30720);
if(cljs.core.truth_(temp__5825__auto____$1)){
var ns = temp__5825__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_30720),v_30721);


var G__30725 = cljs.core.next(seq__29648_30713__$1);
var G__30726 = null;
var G__30727 = (0);
var G__30728 = (0);
seq__29648_30701 = G__30725;
chunk__29649_30702 = G__30726;
count__29650_30703 = G__30727;
i__29651_30704 = G__30728;
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
var vec__29722 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29722,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29722,(1),null);
var seq__29727_30732 = cljs.core.seq(node_children);
var chunk__29729_30733 = null;
var count__29730_30734 = (0);
var i__29731_30735 = (0);
while(true){
if((i__29731_30735 < count__29730_30734)){
var child_struct_30737 = chunk__29729_30733.cljs$core$IIndexed$_nth$arity$2(null,i__29731_30735);
if((!((child_struct_30737 == null)))){
if(typeof child_struct_30737 === 'string'){
var text_30738 = (node["textContent"]);
(node["textContent"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_30738)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_30737)));
} else {
var children_30739 = shadow.dom.svg_node(child_struct_30737);
if(cljs.core.seq_QMARK_(children_30739)){
var seq__29823_30740 = cljs.core.seq(children_30739);
var chunk__29825_30741 = null;
var count__29826_30742 = (0);
var i__29827_30743 = (0);
while(true){
if((i__29827_30743 < count__29826_30742)){
var child_30744 = chunk__29825_30741.cljs$core$IIndexed$_nth$arity$2(null,i__29827_30743);
if(cljs.core.truth_(child_30744)){
node.appendChild(child_30744);


var G__30745 = seq__29823_30740;
var G__30746 = chunk__29825_30741;
var G__30747 = count__29826_30742;
var G__30748 = (i__29827_30743 + (1));
seq__29823_30740 = G__30745;
chunk__29825_30741 = G__30746;
count__29826_30742 = G__30747;
i__29827_30743 = G__30748;
continue;
} else {
var G__30749 = seq__29823_30740;
var G__30750 = chunk__29825_30741;
var G__30751 = count__29826_30742;
var G__30752 = (i__29827_30743 + (1));
seq__29823_30740 = G__30749;
chunk__29825_30741 = G__30750;
count__29826_30742 = G__30751;
i__29827_30743 = G__30752;
continue;
}
} else {
var temp__5825__auto___30753 = cljs.core.seq(seq__29823_30740);
if(temp__5825__auto___30753){
var seq__29823_30755__$1 = temp__5825__auto___30753;
if(cljs.core.chunked_seq_QMARK_(seq__29823_30755__$1)){
var c__5694__auto___30756 = cljs.core.chunk_first(seq__29823_30755__$1);
var G__30757 = cljs.core.chunk_rest(seq__29823_30755__$1);
var G__30758 = c__5694__auto___30756;
var G__30759 = cljs.core.count(c__5694__auto___30756);
var G__30760 = (0);
seq__29823_30740 = G__30757;
chunk__29825_30741 = G__30758;
count__29826_30742 = G__30759;
i__29827_30743 = G__30760;
continue;
} else {
var child_30762 = cljs.core.first(seq__29823_30755__$1);
if(cljs.core.truth_(child_30762)){
node.appendChild(child_30762);


var G__30764 = cljs.core.next(seq__29823_30755__$1);
var G__30765 = null;
var G__30766 = (0);
var G__30767 = (0);
seq__29823_30740 = G__30764;
chunk__29825_30741 = G__30765;
count__29826_30742 = G__30766;
i__29827_30743 = G__30767;
continue;
} else {
var G__30768 = cljs.core.next(seq__29823_30755__$1);
var G__30769 = null;
var G__30770 = (0);
var G__30771 = (0);
seq__29823_30740 = G__30768;
chunk__29825_30741 = G__30769;
count__29826_30742 = G__30770;
i__29827_30743 = G__30771;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_30739);
}
}


var G__30778 = seq__29727_30732;
var G__30779 = chunk__29729_30733;
var G__30780 = count__29730_30734;
var G__30781 = (i__29731_30735 + (1));
seq__29727_30732 = G__30778;
chunk__29729_30733 = G__30779;
count__29730_30734 = G__30780;
i__29731_30735 = G__30781;
continue;
} else {
var G__30782 = seq__29727_30732;
var G__30783 = chunk__29729_30733;
var G__30784 = count__29730_30734;
var G__30785 = (i__29731_30735 + (1));
seq__29727_30732 = G__30782;
chunk__29729_30733 = G__30783;
count__29730_30734 = G__30784;
i__29731_30735 = G__30785;
continue;
}
} else {
var temp__5825__auto___30786 = cljs.core.seq(seq__29727_30732);
if(temp__5825__auto___30786){
var seq__29727_30787__$1 = temp__5825__auto___30786;
if(cljs.core.chunked_seq_QMARK_(seq__29727_30787__$1)){
var c__5694__auto___30788 = cljs.core.chunk_first(seq__29727_30787__$1);
var G__30789 = cljs.core.chunk_rest(seq__29727_30787__$1);
var G__30790 = c__5694__auto___30788;
var G__30791 = cljs.core.count(c__5694__auto___30788);
var G__30792 = (0);
seq__29727_30732 = G__30789;
chunk__29729_30733 = G__30790;
count__29730_30734 = G__30791;
i__29731_30735 = G__30792;
continue;
} else {
var child_struct_30793 = cljs.core.first(seq__29727_30787__$1);
if((!((child_struct_30793 == null)))){
if(typeof child_struct_30793 === 'string'){
var text_30797 = (node["textContent"]);
(node["textContent"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_30797)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_30793)));
} else {
var children_30798 = shadow.dom.svg_node(child_struct_30793);
if(cljs.core.seq_QMARK_(children_30798)){
var seq__29853_30800 = cljs.core.seq(children_30798);
var chunk__29855_30801 = null;
var count__29856_30802 = (0);
var i__29857_30803 = (0);
while(true){
if((i__29857_30803 < count__29856_30802)){
var child_30804 = chunk__29855_30801.cljs$core$IIndexed$_nth$arity$2(null,i__29857_30803);
if(cljs.core.truth_(child_30804)){
node.appendChild(child_30804);


var G__30805 = seq__29853_30800;
var G__30806 = chunk__29855_30801;
var G__30807 = count__29856_30802;
var G__30808 = (i__29857_30803 + (1));
seq__29853_30800 = G__30805;
chunk__29855_30801 = G__30806;
count__29856_30802 = G__30807;
i__29857_30803 = G__30808;
continue;
} else {
var G__30809 = seq__29853_30800;
var G__30810 = chunk__29855_30801;
var G__30811 = count__29856_30802;
var G__30812 = (i__29857_30803 + (1));
seq__29853_30800 = G__30809;
chunk__29855_30801 = G__30810;
count__29856_30802 = G__30811;
i__29857_30803 = G__30812;
continue;
}
} else {
var temp__5825__auto___30813__$1 = cljs.core.seq(seq__29853_30800);
if(temp__5825__auto___30813__$1){
var seq__29853_30814__$1 = temp__5825__auto___30813__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29853_30814__$1)){
var c__5694__auto___30816 = cljs.core.chunk_first(seq__29853_30814__$1);
var G__30817 = cljs.core.chunk_rest(seq__29853_30814__$1);
var G__30818 = c__5694__auto___30816;
var G__30819 = cljs.core.count(c__5694__auto___30816);
var G__30820 = (0);
seq__29853_30800 = G__30817;
chunk__29855_30801 = G__30818;
count__29856_30802 = G__30819;
i__29857_30803 = G__30820;
continue;
} else {
var child_30821 = cljs.core.first(seq__29853_30814__$1);
if(cljs.core.truth_(child_30821)){
node.appendChild(child_30821);


var G__30822 = cljs.core.next(seq__29853_30814__$1);
var G__30823 = null;
var G__30824 = (0);
var G__30825 = (0);
seq__29853_30800 = G__30822;
chunk__29855_30801 = G__30823;
count__29856_30802 = G__30824;
i__29857_30803 = G__30825;
continue;
} else {
var G__30826 = cljs.core.next(seq__29853_30814__$1);
var G__30827 = null;
var G__30828 = (0);
var G__30829 = (0);
seq__29853_30800 = G__30826;
chunk__29855_30801 = G__30827;
count__29856_30802 = G__30828;
i__29857_30803 = G__30829;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_30798);
}
}


var G__30830 = cljs.core.next(seq__29727_30787__$1);
var G__30831 = null;
var G__30832 = (0);
var G__30833 = (0);
seq__29727_30732 = G__30830;
chunk__29729_30733 = G__30831;
count__29730_30734 = G__30832;
i__29731_30735 = G__30833;
continue;
} else {
var G__30835 = cljs.core.next(seq__29727_30787__$1);
var G__30836 = null;
var G__30837 = (0);
var G__30838 = (0);
seq__29727_30732 = G__30835;
chunk__29729_30733 = G__30836;
count__29730_30734 = G__30837;
i__29731_30735 = G__30838;
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
var len__5897__auto___30839 = arguments.length;
var i__5898__auto___30840 = (0);
while(true){
if((i__5898__auto___30840 < len__5897__auto___30839)){
args__5903__auto__.push((arguments[i__5898__auto___30840]));

var G__30841 = (i__5898__auto___30840 + (1));
i__5898__auto___30840 = G__30841;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq30010){
var G__30011 = cljs.core.first(seq30010);
var seq30010__$1 = cljs.core.next(seq30010);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30011,seq30010__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
