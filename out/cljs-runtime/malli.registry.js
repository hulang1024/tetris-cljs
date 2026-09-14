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

var malli$registry$Registry$_schema$dyn_26933 = (function (this$,type){
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
return malli$registry$Registry$_schema$dyn_26933(this$,type);
}
});

var malli$registry$Registry$_schemas$dyn_26939 = (function (this$){
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
return malli$registry$Registry$_schemas$dyn_26939(this$);
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
malli.registry.t_malli$registry26842 = (function (m,fm,meta26843){
this.m = m;
this.fm = fm;
this.meta26843 = meta26843;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry26842.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26844,meta26843__$1){
var self__ = this;
var _26844__$1 = this;
return (new malli.registry.t_malli$registry26842(self__.m,self__.fm,meta26843__$1));
}));

(malli.registry.t_malli$registry26842.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26844){
var self__ = this;
var _26844__$1 = this;
return self__.meta26843;
}));

(malli.registry.t_malli$registry26842.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry26842.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return self__.fm.get(type);
}));

(malli.registry.t_malli$registry26842.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry26842.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"fm","fm",-1190690268,null),new cljs.core.Symbol(null,"meta26843","meta26843",1923572414,null)], null);
}));

(malli.registry.t_malli$registry26842.cljs$lang$type = true);

(malli.registry.t_malli$registry26842.cljs$lang$ctorStr = "malli.registry/t_malli$registry26842");

(malli.registry.t_malli$registry26842.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"malli.registry/t_malli$registry26842");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry26842.
 */
malli.registry.__GT_t_malli$registry26842 = (function malli$registry$__GT_t_malli$registry26842(m,fm,meta26843){
return (new malli.registry.t_malli$registry26842(m,fm,meta26843));
});


malli.registry.fast_registry = (function malli$registry$fast_registry(m){
var fm = m;
return (new malli.registry.t_malli$registry26842(m,fm,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry26852 = (function (m,meta26853){
this.m = m;
this.meta26853 = meta26853;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry26852.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26854,meta26853__$1){
var self__ = this;
var _26854__$1 = this;
return (new malli.registry.t_malli$registry26852(self__.m,meta26853__$1));
}));

(malli.registry.t_malli$registry26852.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26854){
var self__ = this;
var _26854__$1 = this;
return self__.meta26853;
}));

(malli.registry.t_malli$registry26852.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry26852.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return (self__.m.cljs$core$IFn$_invoke$arity$1 ? self__.m.cljs$core$IFn$_invoke$arity$1(type) : self__.m.call(null,type));
}));

(malli.registry.t_malli$registry26852.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry26852.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta26853","meta26853",1549146865,null)], null);
}));

(malli.registry.t_malli$registry26852.cljs$lang$type = true);

(malli.registry.t_malli$registry26852.cljs$lang$ctorStr = "malli.registry/t_malli$registry26852");

(malli.registry.t_malli$registry26852.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"malli.registry/t_malli$registry26852");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry26852.
 */
malli.registry.__GT_t_malli$registry26852 = (function malli$registry$__GT_t_malli$registry26852(m,meta26853){
return (new malli.registry.t_malli$registry26852(m,meta26853));
});


malli.registry.simple_registry = (function malli$registry$simple_registry(m){
return (new malli.registry.t_malli$registry26852(m,cljs.core.PersistentArrayMap.EMPTY));
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
malli.registry.t_malli$registry26868 = (function (meta26869){
this.meta26869 = meta26869;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry26868.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26870,meta26869__$1){
var self__ = this;
var _26870__$1 = this;
return (new malli.registry.t_malli$registry26868(meta26869__$1));
}));

(malli.registry.t_malli$registry26868.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26870){
var self__ = this;
var _26870__$1 = this;
return self__.meta26869;
}));

(malli.registry.t_malli$registry26868.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry26868.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(cljs.core.deref(malli.registry.registry_STAR_),type);
}));

(malli.registry.t_malli$registry26868.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(cljs.core.deref(malli.registry.registry_STAR_));
}));

(malli.registry.t_malli$registry26868.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta26869","meta26869",-1182946724,null)], null);
}));

(malli.registry.t_malli$registry26868.cljs$lang$type = true);

(malli.registry.t_malli$registry26868.cljs$lang$ctorStr = "malli.registry/t_malli$registry26868");

(malli.registry.t_malli$registry26868.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"malli.registry/t_malli$registry26868");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry26868.
 */
malli.registry.__GT_t_malli$registry26868 = (function malli$registry$__GT_t_malli$registry26868(meta26869){
return (new malli.registry.t_malli$registry26868(meta26869));
});


malli.registry.custom_default_registry = (function malli$registry$custom_default_registry(){
return (new malli.registry.t_malli$registry26868(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry26880 = (function (_QMARK_registries,registries,meta26881){
this._QMARK_registries = _QMARK_registries;
this.registries = registries;
this.meta26881 = meta26881;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry26880.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26882,meta26881__$1){
var self__ = this;
var _26882__$1 = this;
return (new malli.registry.t_malli$registry26880(self__._QMARK_registries,self__.registries,meta26881__$1));
}));

(malli.registry.t_malli$registry26880.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26882){
var self__ = this;
var _26882__$1 = this;
return self__.meta26881;
}));

(malli.registry.t_malli$registry26880.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry26880.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.some((function (p1__26878_SHARP_){
return malli.registry._schema(p1__26878_SHARP_,type);
}),self__.registries);
}));

(malli.registry.t_malli$registry26880.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.registry._schemas,cljs.core.reverse(self__.registries)));
}));

(malli.registry.t_malli$registry26880.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?registries","?registries",2135368100,null),new cljs.core.Symbol(null,"registries","registries",-1366064418,null),new cljs.core.Symbol(null,"meta26881","meta26881",-1333341453,null)], null);
}));

(malli.registry.t_malli$registry26880.cljs$lang$type = true);

(malli.registry.t_malli$registry26880.cljs$lang$ctorStr = "malli.registry/t_malli$registry26880");

(malli.registry.t_malli$registry26880.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"malli.registry/t_malli$registry26880");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry26880.
 */
malli.registry.__GT_t_malli$registry26880 = (function malli$registry$__GT_t_malli$registry26880(_QMARK_registries,registries,meta26881){
return (new malli.registry.t_malli$registry26880(_QMARK_registries,registries,meta26881));
});


malli.registry.composite_registry = (function malli$registry$composite_registry(var_args){
var args__5903__auto__ = [];
var len__5897__auto___26974 = arguments.length;
var i__5898__auto___26975 = (0);
while(true){
if((i__5898__auto___26975 < len__5897__auto___26974)){
args__5903__auto__.push((arguments[i__5898__auto___26975]));

var G__26976 = (i__5898__auto___26975 + (1));
i__5898__auto___26975 = G__26976;
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
return (new malli.registry.t_malli$registry26880(_QMARK_registries,registries,cljs.core.PersistentArrayMap.EMPTY));
}));

(malli.registry.composite_registry.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.registry.composite_registry.cljs$lang$applyTo = (function (seq26879){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26879));
}));


/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry26886 = (function (db,meta26887){
this.db = db;
this.meta26887 = meta26887;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry26886.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26888,meta26887__$1){
var self__ = this;
var _26888__$1 = this;
return (new malli.registry.t_malli$registry26886(self__.db,meta26887__$1));
}));

(malli.registry.t_malli$registry26886.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26888){
var self__ = this;
var _26888__$1 = this;
return self__.meta26887;
}));

(malli.registry.t_malli$registry26886.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry26886.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(cljs.core.deref(self__.db)),type);
}));

(malli.registry.t_malli$registry26886.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(cljs.core.deref(self__.db)));
}));

(malli.registry.t_malli$registry26886.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"meta26887","meta26887",-305215424,null)], null);
}));

(malli.registry.t_malli$registry26886.cljs$lang$type = true);

(malli.registry.t_malli$registry26886.cljs$lang$ctorStr = "malli.registry/t_malli$registry26886");

(malli.registry.t_malli$registry26886.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"malli.registry/t_malli$registry26886");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry26886.
 */
malli.registry.__GT_t_malli$registry26886 = (function malli$registry$__GT_t_malli$registry26886(db,meta26887){
return (new malli.registry.t_malli$registry26886(db,meta26887));
});


malli.registry.mutable_registry = (function malli$registry$mutable_registry(db){
return (new malli.registry.t_malli$registry26886(db,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry26896 = (function (meta26897){
this.meta26897 = meta26897;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry26896.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26898,meta26897__$1){
var self__ = this;
var _26898__$1 = this;
return (new malli.registry.t_malli$registry26896(meta26897__$1));
}));

(malli.registry.t_malli$registry26896.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26898){
var self__ = this;
var _26898__$1 = this;
return self__.meta26897;
}));

(malli.registry.t_malli$registry26896.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry26896.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
if(cljs.core.var_QMARK_(type)){
return cljs.core.deref(type);
} else {
return null;
}
}));

(malli.registry.t_malli$registry26896.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.registry.t_malli$registry26896.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta26897","meta26897",751116180,null)], null);
}));

(malli.registry.t_malli$registry26896.cljs$lang$type = true);

(malli.registry.t_malli$registry26896.cljs$lang$ctorStr = "malli.registry/t_malli$registry26896");

(malli.registry.t_malli$registry26896.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"malli.registry/t_malli$registry26896");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry26896.
 */
malli.registry.__GT_t_malli$registry26896 = (function malli$registry$__GT_t_malli$registry26896(meta26897){
return (new malli.registry.t_malli$registry26896(meta26897));
});


malli.registry.var_registry = (function malli$registry$var_registry(){
return (new malli.registry.t_malli$registry26896(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry._STAR_registry_STAR_ = cljs.core.PersistentArrayMap.EMPTY;

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry26906 = (function (meta26907){
this.meta26907 = meta26907;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry26906.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26908,meta26907__$1){
var self__ = this;
var _26908__$1 = this;
return (new malli.registry.t_malli$registry26906(meta26907__$1));
}));

(malli.registry.t_malli$registry26906.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26908){
var self__ = this;
var _26908__$1 = this;
return self__.meta26907;
}));

(malli.registry.t_malli$registry26906.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry26906.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(malli.registry._STAR_registry_STAR_),type);
}));

(malli.registry.t_malli$registry26906.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(malli.registry._STAR_registry_STAR_));
}));

(malli.registry.t_malli$registry26906.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta26907","meta26907",-846203774,null)], null);
}));

(malli.registry.t_malli$registry26906.cljs$lang$type = true);

(malli.registry.t_malli$registry26906.cljs$lang$ctorStr = "malli.registry/t_malli$registry26906");

(malli.registry.t_malli$registry26906.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"malli.registry/t_malli$registry26906");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry26906.
 */
malli.registry.__GT_t_malli$registry26906 = (function malli$registry$__GT_t_malli$registry26906(meta26907){
return (new malli.registry.t_malli$registry26906(meta26907));
});


malli.registry.dynamic_registry = (function malli$registry$dynamic_registry(){
return (new malli.registry.t_malli$registry26906(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry26919 = (function (default_registry,provider,cache_STAR_,registry_STAR_,meta26920){
this.default_registry = default_registry;
this.provider = provider;
this.cache_STAR_ = cache_STAR_;
this.registry_STAR_ = registry_STAR_;
this.meta26920 = meta26920;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry26919.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26921,meta26920__$1){
var self__ = this;
var _26921__$1 = this;
return (new malli.registry.t_malli$registry26919(self__.default_registry,self__.provider,self__.cache_STAR_,self__.registry_STAR_,meta26920__$1));
}));

(malli.registry.t_malli$registry26919.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26921){
var self__ = this;
var _26921__$1 = this;
return self__.meta26920;
}));

(malli.registry.t_malli$registry26919.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry26919.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__5162__auto__ = (function (){var fexpr__26923 = cljs.core.deref(self__.cache_STAR_);
return (fexpr__26923.cljs$core$IFn$_invoke$arity$1 ? fexpr__26923.cljs$core$IFn$_invoke$arity$1(name) : fexpr__26923.call(null,name));
})();
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var temp__5825__auto__ = (function (){var G__26924 = name;
var G__26925 = cljs.core.deref(self__.registry_STAR_);
return (self__.provider.cljs$core$IFn$_invoke$arity$2 ? self__.provider.cljs$core$IFn$_invoke$arity$2(G__26924,G__26925) : self__.provider.call(null,G__26924,G__26925));
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

(malli.registry.t_malli$registry26919.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cache_STAR_);
}));

(malli.registry.t_malli$registry26919.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-registry","default-registry",732204441,null),new cljs.core.Symbol(null,"provider","provider",1338474627,null),new cljs.core.Symbol(null,"cache*","cache*",-548597526,null),new cljs.core.Symbol(null,"registry*","registry*",-268031273,null),new cljs.core.Symbol(null,"meta26920","meta26920",1764841823,null)], null);
}));

(malli.registry.t_malli$registry26919.cljs$lang$type = true);

(malli.registry.t_malli$registry26919.cljs$lang$ctorStr = "malli.registry/t_malli$registry26919");

(malli.registry.t_malli$registry26919.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"malli.registry/t_malli$registry26919");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry26919.
 */
malli.registry.__GT_t_malli$registry26919 = (function malli$registry$__GT_t_malli$registry26919(default_registry,provider,cache_STAR_,registry_STAR_,meta26920){
return (new malli.registry.t_malli$registry26919(default_registry,provider,cache_STAR_,registry_STAR_,meta26920));
});


malli.registry.lazy_registry = (function malli$registry$lazy_registry(default_registry,provider){
var cache_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_registry);
return cljs.core.reset_BANG_(registry_STAR_,malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_registry,(new malli.registry.t_malli$registry26919(default_registry,provider,cache_STAR_,registry_STAR_,cljs.core.PersistentArrayMap.EMPTY))], 0)));
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
