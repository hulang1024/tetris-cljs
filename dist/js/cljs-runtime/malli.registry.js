goog.provide('malli.registry');
/**
 * @define {string}
 */
malli.registry.mode = goog.define("malli.registry.mode","default");
/**
 * @define {string}
 */
malli.registry.type = goog.define("malli.registry.type","default");

/**
 * @interface
 */
malli.registry.Registry = function(){};

var malli$registry$Registry$_schema$dyn_53504 = (function (this$,type){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (malli.registry._schema[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(this$,type) : m__5520__auto__.call(null,this$,type));
} else {
var m__5518__auto__ = (malli.registry._schema["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(this$,type) : m__5518__auto__.call(null,this$,type));
} else {
throw cljs.core.missing_protocol("Registry.-schema",this$);
}
}
});
/**
 * returns the schema from a registry
 */
malli.registry._schema = (function malli$registry$_schema(this$,type){
if((((!((this$ == null)))) && ((!((this$.malli$registry$Registry$_schema$arity$2 == null)))))){
return this$.malli$registry$Registry$_schema$arity$2(this$,type);
} else {
return malli$registry$Registry$_schema$dyn_53504(this$,type);
}
});

var malli$registry$Registry$_schemas$dyn_53508 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (malli.registry._schemas[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (malli.registry._schemas["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Registry.-schemas",this$);
}
}
});
/**
 * returns all schemas from a registry
 */
malli.registry._schemas = (function malli$registry$_schemas(this$){
if((((!((this$ == null)))) && ((!((this$.malli$registry$Registry$_schemas$arity$1 == null)))))){
return this$.malli$registry$Registry$_schemas$arity$1(this$);
} else {
return malli$registry$Registry$_schemas$dyn_53508(this$);
}
});

malli.registry.registry_QMARK_ = (function malli$registry$registry_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.malli$registry$Registry$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry53378 = (function (m,fm,meta53379){
this.m = m;
this.fm = fm;
this.meta53379 = meta53379;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry53378.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53380,meta53379__$1){
var self__ = this;
var _53380__$1 = this;
return (new malli.registry.t_malli$registry53378(self__.m,self__.fm,meta53379__$1));
}));

(malli.registry.t_malli$registry53378.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53380){
var self__ = this;
var _53380__$1 = this;
return self__.meta53379;
}));

(malli.registry.t_malli$registry53378.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry53378.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return self__.fm.get(type);
}));

(malli.registry.t_malli$registry53378.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry53378.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"fm","fm",-1190690268,null),new cljs.core.Symbol(null,"meta53379","meta53379",1946695010,null)], null);
}));

(malli.registry.t_malli$registry53378.cljs$lang$type = true);

(malli.registry.t_malli$registry53378.cljs$lang$ctorStr = "malli.registry/t_malli$registry53378");

(malli.registry.t_malli$registry53378.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"malli.registry/t_malli$registry53378");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry53378.
 */
malli.registry.__GT_t_malli$registry53378 = (function malli$registry$__GT_t_malli$registry53378(m,fm,meta53379){
return (new malli.registry.t_malli$registry53378(m,fm,meta53379));
});


malli.registry.fast_registry = (function malli$registry$fast_registry(m){
var fm = m;
return (new malli.registry.t_malli$registry53378(m,fm,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry53389 = (function (m,meta53390){
this.m = m;
this.meta53390 = meta53390;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry53389.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53391,meta53390__$1){
var self__ = this;
var _53391__$1 = this;
return (new malli.registry.t_malli$registry53389(self__.m,meta53390__$1));
}));

(malli.registry.t_malli$registry53389.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53391){
var self__ = this;
var _53391__$1 = this;
return self__.meta53390;
}));

(malli.registry.t_malli$registry53389.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry53389.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return (self__.m.cljs$core$IFn$_invoke$arity$1 ? self__.m.cljs$core$IFn$_invoke$arity$1(type) : self__.m.call(null,type));
}));

(malli.registry.t_malli$registry53389.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry53389.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta53390","meta53390",667035810,null)], null);
}));

(malli.registry.t_malli$registry53389.cljs$lang$type = true);

(malli.registry.t_malli$registry53389.cljs$lang$ctorStr = "malli.registry/t_malli$registry53389");

(malli.registry.t_malli$registry53389.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"malli.registry/t_malli$registry53389");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry53389.
 */
malli.registry.__GT_t_malli$registry53389 = (function malli$registry$__GT_t_malli$registry53389(m,meta53390){
return (new malli.registry.t_malli$registry53389(m,meta53390));
});


malli.registry.simple_registry = (function malli$registry$simple_registry(m){
return (new malli.registry.t_malli$registry53389(m,cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.registry = (function malli$registry$registry(_QMARK_registry){
if((_QMARK_registry == null)){
return null;
} else {
if(malli.registry.registry_QMARK_(_QMARK_registry)){
return _QMARK_registry;
} else {
if(cljs.core.map_QMARK_(_QMARK_registry)){
return malli.registry.simple_registry(_QMARK_registry);
} else {
if((((!((_QMARK_registry == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === _QMARK_registry.malli$registry$Registry$))))?true:(((!_QMARK_registry.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(malli.registry.Registry,_QMARK_registry):false)):cljs.core.native_satisfies_QMARK_(malli.registry.Registry,_QMARK_registry))){
return _QMARK_registry;
} else {
return null;
}
}
}
}
});
malli.registry.registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(malli.registry.simple_registry(cljs.core.PersistentArrayMap.EMPTY));
malli.registry.set_default_registry_BANG_ = (function malli$registry$set_default_registry_BANG_(_QMARK_registry){
if((!((malli.registry.mode === "strict")))){
return cljs.core.reset_BANG_(malli.registry.registry_STAR_,malli.registry.registry(_QMARK_registry));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("can't set default registry, invalid mode",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mode","mode",654403691),malli.registry.mode,new cljs.core.Keyword(null,"type","type",1174270348),malli.registry.type], null));
}
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry53411 = (function (meta53412){
this.meta53412 = meta53412;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry53411.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53413,meta53412__$1){
var self__ = this;
var _53413__$1 = this;
return (new malli.registry.t_malli$registry53411(meta53412__$1));
}));

(malli.registry.t_malli$registry53411.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53413){
var self__ = this;
var _53413__$1 = this;
return self__.meta53412;
}));

(malli.registry.t_malli$registry53411.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry53411.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(cljs.core.deref(malli.registry.registry_STAR_),type);
}));

(malli.registry.t_malli$registry53411.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(cljs.core.deref(malli.registry.registry_STAR_));
}));

(malli.registry.t_malli$registry53411.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta53412","meta53412",1686822177,null)], null);
}));

(malli.registry.t_malli$registry53411.cljs$lang$type = true);

(malli.registry.t_malli$registry53411.cljs$lang$ctorStr = "malli.registry/t_malli$registry53411");

(malli.registry.t_malli$registry53411.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"malli.registry/t_malli$registry53411");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry53411.
 */
malli.registry.__GT_t_malli$registry53411 = (function malli$registry$__GT_t_malli$registry53411(meta53412){
return (new malli.registry.t_malli$registry53411(meta53412));
});


malli.registry.custom_default_registry = (function malli$registry$custom_default_registry(){
return (new malli.registry.t_malli$registry53411(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry53428 = (function (_QMARK_registries,registries,meta53429){
this._QMARK_registries = _QMARK_registries;
this.registries = registries;
this.meta53429 = meta53429;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry53428.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53430,meta53429__$1){
var self__ = this;
var _53430__$1 = this;
return (new malli.registry.t_malli$registry53428(self__._QMARK_registries,self__.registries,meta53429__$1));
}));

(malli.registry.t_malli$registry53428.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53430){
var self__ = this;
var _53430__$1 = this;
return self__.meta53429;
}));

(malli.registry.t_malli$registry53428.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry53428.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.some((function (p1__53425_SHARP_){
return malli.registry._schema(p1__53425_SHARP_,type);
}),self__.registries);
}));

(malli.registry.t_malli$registry53428.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.registry._schemas,cljs.core.reverse(self__.registries)));
}));

(malli.registry.t_malli$registry53428.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?registries","?registries",2135368100,null),new cljs.core.Symbol(null,"registries","registries",-1366064418,null),new cljs.core.Symbol(null,"meta53429","meta53429",-1126008333,null)], null);
}));

(malli.registry.t_malli$registry53428.cljs$lang$type = true);

(malli.registry.t_malli$registry53428.cljs$lang$ctorStr = "malli.registry/t_malli$registry53428");

(malli.registry.t_malli$registry53428.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"malli.registry/t_malli$registry53428");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry53428.
 */
malli.registry.__GT_t_malli$registry53428 = (function malli$registry$__GT_t_malli$registry53428(_QMARK_registries,registries,meta53429){
return (new malli.registry.t_malli$registry53428(_QMARK_registries,registries,meta53429));
});


malli.registry.composite_registry = (function malli$registry$composite_registry(var_args){
var args__5903__auto__ = [];
var len__5897__auto___53519 = arguments.length;
var i__5898__auto___53520 = (0);
while(true){
if((i__5898__auto___53520 < len__5897__auto___53519)){
args__5903__auto__.push((arguments[i__5898__auto___53520]));

var G__53521 = (i__5898__auto___53520 + (1));
i__5898__auto___53520 = G__53521;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic = (function (_QMARK_registries){
var registries = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(malli.registry.registry,_QMARK_registries);
return (new malli.registry.t_malli$registry53428(_QMARK_registries,registries,cljs.core.PersistentArrayMap.EMPTY));
}));

(malli.registry.composite_registry.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.registry.composite_registry.cljs$lang$applyTo = (function (seq53426){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53426));
}));


/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry53437 = (function (db,meta53438){
this.db = db;
this.meta53438 = meta53438;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry53437.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53439,meta53438__$1){
var self__ = this;
var _53439__$1 = this;
return (new malli.registry.t_malli$registry53437(self__.db,meta53438__$1));
}));

(malli.registry.t_malli$registry53437.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53439){
var self__ = this;
var _53439__$1 = this;
return self__.meta53438;
}));

(malli.registry.t_malli$registry53437.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry53437.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(cljs.core.deref(self__.db)),type);
}));

(malli.registry.t_malli$registry53437.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(cljs.core.deref(self__.db)));
}));

(malli.registry.t_malli$registry53437.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"meta53438","meta53438",-1627699784,null)], null);
}));

(malli.registry.t_malli$registry53437.cljs$lang$type = true);

(malli.registry.t_malli$registry53437.cljs$lang$ctorStr = "malli.registry/t_malli$registry53437");

(malli.registry.t_malli$registry53437.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"malli.registry/t_malli$registry53437");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry53437.
 */
malli.registry.__GT_t_malli$registry53437 = (function malli$registry$__GT_t_malli$registry53437(db,meta53438){
return (new malli.registry.t_malli$registry53437(db,meta53438));
});


malli.registry.mutable_registry = (function malli$registry$mutable_registry(db){
return (new malli.registry.t_malli$registry53437(db,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry53442 = (function (meta53443){
this.meta53443 = meta53443;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry53442.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53444,meta53443__$1){
var self__ = this;
var _53444__$1 = this;
return (new malli.registry.t_malli$registry53442(meta53443__$1));
}));

(malli.registry.t_malli$registry53442.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53444){
var self__ = this;
var _53444__$1 = this;
return self__.meta53443;
}));

(malli.registry.t_malli$registry53442.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry53442.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
if(cljs.core.var_QMARK_(type)){
return cljs.core.deref(type);
} else {
return null;
}
}));

(malli.registry.t_malli$registry53442.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.registry.t_malli$registry53442.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta53443","meta53443",-963636757,null)], null);
}));

(malli.registry.t_malli$registry53442.cljs$lang$type = true);

(malli.registry.t_malli$registry53442.cljs$lang$ctorStr = "malli.registry/t_malli$registry53442");

(malli.registry.t_malli$registry53442.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"malli.registry/t_malli$registry53442");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry53442.
 */
malli.registry.__GT_t_malli$registry53442 = (function malli$registry$__GT_t_malli$registry53442(meta53443){
return (new malli.registry.t_malli$registry53442(meta53443));
});


malli.registry.var_registry = (function malli$registry$var_registry(){
return (new malli.registry.t_malli$registry53442(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry._STAR_registry_STAR_ = cljs.core.PersistentArrayMap.EMPTY;

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry53458 = (function (meta53459){
this.meta53459 = meta53459;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry53458.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53460,meta53459__$1){
var self__ = this;
var _53460__$1 = this;
return (new malli.registry.t_malli$registry53458(meta53459__$1));
}));

(malli.registry.t_malli$registry53458.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53460){
var self__ = this;
var _53460__$1 = this;
return self__.meta53459;
}));

(malli.registry.t_malli$registry53458.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry53458.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(malli.registry._STAR_registry_STAR_),type);
}));

(malli.registry.t_malli$registry53458.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(malli.registry._STAR_registry_STAR_));
}));

(malli.registry.t_malli$registry53458.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta53459","meta53459",-2024587936,null)], null);
}));

(malli.registry.t_malli$registry53458.cljs$lang$type = true);

(malli.registry.t_malli$registry53458.cljs$lang$ctorStr = "malli.registry/t_malli$registry53458");

(malli.registry.t_malli$registry53458.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"malli.registry/t_malli$registry53458");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry53458.
 */
malli.registry.__GT_t_malli$registry53458 = (function malli$registry$__GT_t_malli$registry53458(meta53459){
return (new malli.registry.t_malli$registry53458(meta53459));
});


malli.registry.dynamic_registry = (function malli$registry$dynamic_registry(){
return (new malli.registry.t_malli$registry53458(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry53482 = (function (default_registry,provider,cache_STAR_,registry_STAR_,meta53483){
this.default_registry = default_registry;
this.provider = provider;
this.cache_STAR_ = cache_STAR_;
this.registry_STAR_ = registry_STAR_;
this.meta53483 = meta53483;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry53482.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53484,meta53483__$1){
var self__ = this;
var _53484__$1 = this;
return (new malli.registry.t_malli$registry53482(self__.default_registry,self__.provider,self__.cache_STAR_,self__.registry_STAR_,meta53483__$1));
}));

(malli.registry.t_malli$registry53482.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53484){
var self__ = this;
var _53484__$1 = this;
return self__.meta53483;
}));

(malli.registry.t_malli$registry53482.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry53482.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__5162__auto__ = (function (){var fexpr__53491 = cljs.core.deref(self__.cache_STAR_);
return (fexpr__53491.cljs$core$IFn$_invoke$arity$1 ? fexpr__53491.cljs$core$IFn$_invoke$arity$1(name) : fexpr__53491.call(null,name));
})();
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var temp__5825__auto__ = (function (){var G__53492 = name;
var G__53493 = cljs.core.deref(self__.registry_STAR_);
return (self__.provider.cljs$core$IFn$_invoke$arity$2 ? self__.provider.cljs$core$IFn$_invoke$arity$2(G__53492,G__53493) : self__.provider.call(null,G__53492,G__53493));
})();
if(cljs.core.truth_(temp__5825__auto__)){
var schema = temp__5825__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cache_STAR_,cljs.core.assoc,name,schema);

return schema;
} else {
return null;
}
}
}));

(malli.registry.t_malli$registry53482.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cache_STAR_);
}));

(malli.registry.t_malli$registry53482.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-registry","default-registry",732204441,null),new cljs.core.Symbol(null,"provider","provider",1338474627,null),new cljs.core.Symbol(null,"cache*","cache*",-548597526,null),new cljs.core.Symbol(null,"registry*","registry*",-268031273,null),new cljs.core.Symbol(null,"meta53483","meta53483",40286937,null)], null);
}));

(malli.registry.t_malli$registry53482.cljs$lang$type = true);

(malli.registry.t_malli$registry53482.cljs$lang$ctorStr = "malli.registry/t_malli$registry53482");

(malli.registry.t_malli$registry53482.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"malli.registry/t_malli$registry53482");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry53482.
 */
malli.registry.__GT_t_malli$registry53482 = (function malli$registry$__GT_t_malli$registry53482(default_registry,provider,cache_STAR_,registry_STAR_,meta53483){
return (new malli.registry.t_malli$registry53482(default_registry,provider,cache_STAR_,registry_STAR_,meta53483));
});


malli.registry.lazy_registry = (function malli$registry$lazy_registry(default_registry,provider){
var cache_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_registry);
return cljs.core.reset_BANG_(registry_STAR_,malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_registry,(new malli.registry.t_malli$registry53482(default_registry,provider,cache_STAR_,registry_STAR_,cljs.core.PersistentArrayMap.EMPTY))], 0)));
});
/**
 * finds a schema from a registry
 */
malli.registry.schema = (function malli$registry$schema(registry,type){
return malli.registry._schema(registry,type);
});
/**
 * finds all schemas from a registry
 */
malli.registry.schemas = (function malli$registry$schemas(registry){
return malli.registry._schemas(registry);
});

//# sourceMappingURL=malli.registry.js.map
