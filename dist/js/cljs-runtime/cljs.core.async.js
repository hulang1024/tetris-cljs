goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62143 = (function (f,blockable,meta62144){
this.f = f;
this.blockable = blockable;
this.meta62144 = meta62144;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async62143.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62145,meta62144__$1){
var self__ = this;
var _62145__$1 = this;
return (new cljs.core.async.t_cljs$core$async62143(self__.f,self__.blockable,meta62144__$1));
}));

(cljs.core.async.t_cljs$core$async62143.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62145){
var self__ = this;
var _62145__$1 = this;
return self__.meta62144;
}));

(cljs.core.async.t_cljs$core$async62143.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62143.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async62143.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async62143.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async62143.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta62144","meta62144",-1694324563,null)], null);
}));

(cljs.core.async.t_cljs$core$async62143.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async62143.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62143");

(cljs.core.async.t_cljs$core$async62143.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async62143");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async62143.
 */
cljs.core.async.__GT_t_cljs$core$async62143 = (function cljs$core$async$__GT_t_cljs$core$async62143(f,blockable,meta62144){
return (new cljs.core.async.t_cljs$core$async62143(f,blockable,meta62144));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__62128 = arguments.length;
switch (G__62128) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async62143(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__62275 = arguments.length;
switch (G__62275) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error((""+"Assert failed: "+"buffer must be supplied when transducer is"+"\n"+"buf-or-n")));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed, then return the value (or nil) forever. See chan for the
 *   semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__62329 = arguments.length;
switch (G__62329) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__62364 = arguments.length;
switch (G__62364) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_64807 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_64807) : fn1.call(null,val_64807));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_64807) : fn1.call(null,val_64807));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__62447 = arguments.length;
switch (G__62447) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5823__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5823__auto__)){
var ret = temp__5823__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5823__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5823__auto__)){
var retb = temp__5823__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5762__auto___64809 = n;
var x_64810 = (0);
while(true){
if((x_64810 < n__5762__auto___64809)){
(a[x_64810] = x_64810);

var G__64811 = (x_64810 + (1));
x_64810 = G__64811;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62503 = (function (flag,meta62504){
this.flag = flag;
this.meta62504 = meta62504;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async62503.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62505,meta62504__$1){
var self__ = this;
var _62505__$1 = this;
return (new cljs.core.async.t_cljs$core$async62503(self__.flag,meta62504__$1));
}));

(cljs.core.async.t_cljs$core$async62503.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62505){
var self__ = this;
var _62505__$1 = this;
return self__.meta62504;
}));

(cljs.core.async.t_cljs$core$async62503.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62503.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async62503.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async62503.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async62503.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta62504","meta62504",2048855307,null)], null);
}));

(cljs.core.async.t_cljs$core$async62503.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async62503.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62503");

(cljs.core.async.t_cljs$core$async62503.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async62503");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async62503.
 */
cljs.core.async.__GT_t_cljs$core$async62503 = (function cljs$core$async$__GT_t_cljs$core$async62503(flag,meta62504){
return (new cljs.core.async.t_cljs$core$async62503(flag,meta62504));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async62503(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62554 = (function (flag,cb,meta62555){
this.flag = flag;
this.cb = cb;
this.meta62555 = meta62555;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async62554.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62556,meta62555__$1){
var self__ = this;
var _62556__$1 = this;
return (new cljs.core.async.t_cljs$core$async62554(self__.flag,self__.cb,meta62555__$1));
}));

(cljs.core.async.t_cljs$core$async62554.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62556){
var self__ = this;
var _62556__$1 = this;
return self__.meta62555;
}));

(cljs.core.async.t_cljs$core$async62554.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62554.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async62554.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async62554.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async62554.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta62555","meta62555",-656672417,null)], null);
}));

(cljs.core.async.t_cljs$core$async62554.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async62554.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62554");

(cljs.core.async.t_cljs$core$async62554.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async62554");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async62554.
 */
cljs.core.async.__GT_t_cljs$core$async62554 = (function cljs$core$async$__GT_t_cljs$core$async62554(flag,cb,meta62555){
return (new cljs.core.async.t_cljs$core$async62554(flag,cb,meta62555));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async62554(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error((""+"Assert failed: "+"alts must have at least one channel operation"+"\n"+"(pos? (count ports))")));
}

var flag = cljs.core.async.alt_flag();
var ports__$1 = cljs.core.vec(ports);
var n = cljs.core.count(ports__$1);
var _ = (function (){var i = (0);
while(true){
if((i < n)){
var port_64812 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_64812)){
if((!(((port_64812.cljs$core$IFn$_invoke$arity$1 ? port_64812.cljs$core$IFn$_invoke$arity$1((1)) : port_64812.call(null,(1))) == null)))){
} else {
throw (new Error((""+"Assert failed: "+"can't put nil on channel"+"\n"+"(some? (port 1))")));
}
} else {
}

var G__64813 = (i + (1));
i = G__64813;
continue;
} else {
return null;
}
break;
}
})();
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__62621_SHARP_){
var G__62644 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__62621_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__62644) : fret.call(null,G__62644));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__62622_SHARP_){
var G__62646 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__62622_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__62646) : fret.call(null,G__62646));
});})(i,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5162__auto__ = wport;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return port;
}
})()], null));
} else {
var G__64814 = (i + (1));
i = G__64814;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5162__auto__ = ret;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5825__auto__ = (function (){var and__5160__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5160__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5160__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var got = temp__5825__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___64815 = arguments.length;
var i__5898__auto___64816 = (0);
while(true){
if((i__5898__auto___64816 < len__5897__auto___64815)){
args__5903__auto__.push((arguments[i__5898__auto___64816]));

var G__64817 = (i__5898__auto___64816 + (1));
i__5898__auto___64816 = G__64817;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__62654){
var map__62655 = p__62654;
var map__62655__$1 = cljs.core.__destructure_map(map__62655);
var opts = map__62655__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq62648){
var G__62649 = cljs.core.first(seq62648);
var seq62648__$1 = cljs.core.next(seq62648);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62649,seq62648__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__62670 = arguments.length;
switch (G__62670) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__48252__auto___64819 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48253__auto__ = (function (){var switch__48012__auto__ = (function (state_62708){
var state_val_62709 = (state_62708[(1)]);
if((state_val_62709 === (7))){
var inst_62704 = (state_62708[(2)]);
var state_62708__$1 = state_62708;
var statearr_62713_64820 = state_62708__$1;
(statearr_62713_64820[(2)] = inst_62704);

(statearr_62713_64820[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62709 === (1))){
var state_62708__$1 = state_62708;
var statearr_62714_64821 = state_62708__$1;
(statearr_62714_64821[(2)] = null);

(statearr_62714_64821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62709 === (4))){
var inst_62687 = (state_62708[(7)]);
var inst_62687__$1 = (state_62708[(2)]);
var inst_62688 = (inst_62687__$1 == null);
var state_62708__$1 = (function (){var statearr_62715 = state_62708;
(statearr_62715[(7)] = inst_62687__$1);

return statearr_62715;
})();
if(cljs.core.truth_(inst_62688)){
var statearr_62719_64822 = state_62708__$1;
(statearr_62719_64822[(1)] = (5));

} else {
var statearr_62720_64823 = state_62708__$1;
(statearr_62720_64823[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62709 === (13))){
var state_62708__$1 = state_62708;
var statearr_62721_64824 = state_62708__$1;
(statearr_62721_64824[(2)] = null);

(statearr_62721_64824[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62709 === (6))){
var inst_62687 = (state_62708[(7)]);
var state_62708__$1 = state_62708;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62708__$1,(11),to,inst_62687);
} else {
if((state_val_62709 === (3))){
var inst_62706 = (state_62708[(2)]);
var state_62708__$1 = state_62708;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62708__$1,inst_62706);
} else {
if((state_val_62709 === (12))){
var state_62708__$1 = state_62708;
var statearr_62723_64825 = state_62708__$1;
(statearr_62723_64825[(2)] = null);

(statearr_62723_64825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62709 === (2))){
var state_62708__$1 = state_62708;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62708__$1,(4),from);
} else {
if((state_val_62709 === (11))){
var inst_62697 = (state_62708[(2)]);
var state_62708__$1 = state_62708;
if(cljs.core.truth_(inst_62697)){
var statearr_62725_64826 = state_62708__$1;
(statearr_62725_64826[(1)] = (12));

} else {
var statearr_62726_64827 = state_62708__$1;
(statearr_62726_64827[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62709 === (9))){
var state_62708__$1 = state_62708;
var statearr_62727_64828 = state_62708__$1;
(statearr_62727_64828[(2)] = null);

(statearr_62727_64828[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62709 === (5))){
var state_62708__$1 = state_62708;
if(cljs.core.truth_(close_QMARK_)){
var statearr_62728_64829 = state_62708__$1;
(statearr_62728_64829[(1)] = (8));

} else {
var statearr_62729_64830 = state_62708__$1;
(statearr_62729_64830[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62709 === (14))){
var inst_62702 = (state_62708[(2)]);
var state_62708__$1 = state_62708;
var statearr_62730_64831 = state_62708__$1;
(statearr_62730_64831[(2)] = inst_62702);

(statearr_62730_64831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62709 === (10))){
var inst_62694 = (state_62708[(2)]);
var state_62708__$1 = state_62708;
var statearr_62737_64832 = state_62708__$1;
(statearr_62737_64832[(2)] = inst_62694);

(statearr_62737_64832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62709 === (8))){
var inst_62691 = cljs.core.async.close_BANG_(to);
var state_62708__$1 = state_62708;
var statearr_62744_64833 = state_62708__$1;
(statearr_62744_64833[(2)] = inst_62691);

(statearr_62744_64833[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__48013__auto__ = null;
var cljs$core$async$state_machine__48013__auto____0 = (function (){
var statearr_62754 = [null,null,null,null,null,null,null,null];
(statearr_62754[(0)] = cljs$core$async$state_machine__48013__auto__);

(statearr_62754[(1)] = (1));

return statearr_62754;
});
var cljs$core$async$state_machine__48013__auto____1 = (function (state_62708){
while(true){
var ret_value__48014__auto__ = (function (){try{while(true){
var result__48015__auto__ = switch__48012__auto__(state_62708);
if(cljs.core.keyword_identical_QMARK_(result__48015__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48015__auto__;
}
break;
}
}catch (e62756){var ex__48016__auto__ = e62756;
var statearr_62757_64834 = state_62708;
(statearr_62757_64834[(2)] = ex__48016__auto__);


if(cljs.core.seq((state_62708[(4)]))){
var statearr_62758_64835 = state_62708;
(statearr_62758_64835[(1)] = cljs.core.first((state_62708[(4)])));

} else {
throw ex__48016__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64836 = state_62708;
state_62708 = G__64836;
continue;
} else {
return ret_value__48014__auto__;
}
break;
}
});
cljs$core$async$state_machine__48013__auto__ = function(state_62708){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48013__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48013__auto____1.call(this,state_62708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48013__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48013__auto____0;
cljs$core$async$state_machine__48013__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48013__auto____1;
return cljs$core$async$state_machine__48013__auto__;
})()
})();
var state__48254__auto__ = (function (){var statearr_62759 = f__48253__auto__();
(statearr_62759[(6)] = c__48252__auto___64819);

return statearr_62759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48254__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__62761){
var vec__62762 = p__62761;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62762,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62762,(1),null);
var job = vec__62762;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__48252__auto___64837 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48253__auto__ = (function (){var switch__48012__auto__ = (function (state_62769){
var state_val_62770 = (state_62769[(1)]);
if((state_val_62770 === (1))){
var state_62769__$1 = state_62769;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62769__$1,(2),res,v);
} else {
if((state_val_62770 === (2))){
var inst_62766 = (state_62769[(2)]);
var inst_62767 = cljs.core.async.close_BANG_(res);
var state_62769__$1 = (function (){var statearr_62777 = state_62769;
(statearr_62777[(7)] = inst_62766);

return statearr_62777;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_62769__$1,inst_62767);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48013__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48013__auto____0 = (function (){
var statearr_62779 = [null,null,null,null,null,null,null,null];
(statearr_62779[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48013__auto__);

(statearr_62779[(1)] = (1));

return statearr_62779;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48013__auto____1 = (function (state_62769){
while(true){
var ret_value__48014__auto__ = (function (){try{while(true){
var result__48015__auto__ = switch__48012__auto__(state_62769);
if(cljs.core.keyword_identical_QMARK_(result__48015__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48015__auto__;
}
break;
}
}catch (e62780){var ex__48016__auto__ = e62780;
var statearr_62781_64838 = state_62769;
(statearr_62781_64838[(2)] = ex__48016__auto__);


if(cljs.core.seq((state_62769[(4)]))){
var statearr_62782_64839 = state_62769;
(statearr_62782_64839[(1)] = cljs.core.first((state_62769[(4)])));

} else {
throw ex__48016__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64840 = state_62769;
state_62769 = G__64840;
continue;
} else {
return ret_value__48014__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48013__auto__ = function(state_62769){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48013__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48013__auto____1.call(this,state_62769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48013__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48013__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48013__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48013__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48013__auto__;
})()
})();
var state__48254__auto__ = (function (){var statearr_62784 = f__48253__auto__();
(statearr_62784[(6)] = c__48252__auto___64837);

return statearr_62784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48254__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__62788){
var vec__62790 = p__62788;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62790,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62790,(1),null);
var job = vec__62790;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5762__auto___64841 = n;
var __64842 = (0);
while(true){
if((__64842 < n__5762__auto___64841)){
var G__62804_64843 = type;
var G__62804_64844__$1 = (((G__62804_64843 instanceof cljs.core.Keyword))?G__62804_64843.fqn:null);
switch (G__62804_64844__$1) {
case "compute":
var c__48252__auto___64846 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__64842,c__48252__auto___64846,G__62804_64843,G__62804_64844__$1,n__5762__auto___64841,jobs,results,process__$1,async){
return (function (){
var f__48253__auto__ = (function (){var switch__48012__auto__ = ((function (__64842,c__48252__auto___64846,G__62804_64843,G__62804_64844__$1,n__5762__auto___64841,jobs,results,process__$1,async){
return (function (state_62817){
var state_val_62818 = (state_62817[(1)]);
if((state_val_62818 === (1))){
var state_62817__$1 = state_62817;
var statearr_62820_64847 = state_62817__$1;
(statearr_62820_64847[(2)] = null);

(statearr_62820_64847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62818 === (2))){
var state_62817__$1 = state_62817;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62817__$1,(4),jobs);
} else {
if((state_val_62818 === (3))){
var inst_62815 = (state_62817[(2)]);
var state_62817__$1 = state_62817;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62817__$1,inst_62815);
} else {
if((state_val_62818 === (4))){
var inst_62807 = (state_62817[(2)]);
var inst_62808 = process__$1(inst_62807);
var state_62817__$1 = state_62817;
if(cljs.core.truth_(inst_62808)){
var statearr_62823_64848 = state_62817__$1;
(statearr_62823_64848[(1)] = (5));

} else {
var statearr_62824_64849 = state_62817__$1;
(statearr_62824_64849[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62818 === (5))){
var state_62817__$1 = state_62817;
var statearr_62825_64850 = state_62817__$1;
(statearr_62825_64850[(2)] = null);

(statearr_62825_64850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62818 === (6))){
var state_62817__$1 = state_62817;
var statearr_62826_64851 = state_62817__$1;
(statearr_62826_64851[(2)] = null);

(statearr_62826_64851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62818 === (7))){
var inst_62813 = (state_62817[(2)]);
var state_62817__$1 = state_62817;
var statearr_62833_64852 = state_62817__$1;
(statearr_62833_64852[(2)] = inst_62813);

(statearr_62833_64852[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__64842,c__48252__auto___64846,G__62804_64843,G__62804_64844__$1,n__5762__auto___64841,jobs,results,process__$1,async))
;
return ((function (__64842,switch__48012__auto__,c__48252__auto___64846,G__62804_64843,G__62804_64844__$1,n__5762__auto___64841,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48013__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48013__auto____0 = (function (){
var statearr_62835 = [null,null,null,null,null,null,null];
(statearr_62835[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48013__auto__);

(statearr_62835[(1)] = (1));

return statearr_62835;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48013__auto____1 = (function (state_62817){
while(true){
var ret_value__48014__auto__ = (function (){try{while(true){
var result__48015__auto__ = switch__48012__auto__(state_62817);
if(cljs.core.keyword_identical_QMARK_(result__48015__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48015__auto__;
}
break;
}
}catch (e62837){var ex__48016__auto__ = e62837;
var statearr_62838_64853 = state_62817;
(statearr_62838_64853[(2)] = ex__48016__auto__);


if(cljs.core.seq((state_62817[(4)]))){
var statearr_62839_64854 = state_62817;
(statearr_62839_64854[(1)] = cljs.core.first((state_62817[(4)])));

} else {
throw ex__48016__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64855 = state_62817;
state_62817 = G__64855;
continue;
} else {
return ret_value__48014__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48013__auto__ = function(state_62817){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48013__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48013__auto____1.call(this,state_62817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48013__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48013__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48013__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48013__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48013__auto__;
})()
;})(__64842,switch__48012__auto__,c__48252__auto___64846,G__62804_64843,G__62804_64844__$1,n__5762__auto___64841,jobs,results,process__$1,async))
})();
var state__48254__auto__ = (function (){var statearr_62840 = f__48253__auto__();
(statearr_62840[(6)] = c__48252__auto___64846);

return statearr_62840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48254__auto__);
});})(__64842,c__48252__auto___64846,G__62804_64843,G__62804_64844__$1,n__5762__auto___64841,jobs,results,process__$1,async))
);


break;
case "async":
var c__48252__auto___64856 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__64842,c__48252__auto___64856,G__62804_64843,G__62804_64844__$1,n__5762__auto___64841,jobs,results,process__$1,async){
return (function (){
var f__48253__auto__ = (function (){var switch__48012__auto__ = ((function (__64842,c__48252__auto___64856,G__62804_64843,G__62804_64844__$1,n__5762__auto___64841,jobs,results,process__$1,async){
return (function (state_62853){
var state_val_62854 = (state_62853[(1)]);
if((state_val_62854 === (1))){
var state_62853__$1 = state_62853;
var statearr_62859_64857 = state_62853__$1;
(statearr_62859_64857[(2)] = null);

(statearr_62859_64857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62854 === (2))){
var state_62853__$1 = state_62853;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62853__$1,(4),jobs);
} else {
if((state_val_62854 === (3))){
var inst_62851 = (state_62853[(2)]);
var state_62853__$1 = state_62853;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62853__$1,inst_62851);
} else {
if((state_val_62854 === (4))){
var inst_62843 = (state_62853[(2)]);
var inst_62844 = async(inst_62843);
var state_62853__$1 = state_62853;
if(cljs.core.truth_(inst_62844)){
var statearr_62860_64858 = state_62853__$1;
(statearr_62860_64858[(1)] = (5));

} else {
var statearr_62861_64859 = state_62853__$1;
(statearr_62861_64859[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62854 === (5))){
var state_62853__$1 = state_62853;
var statearr_62862_64860 = state_62853__$1;
(statearr_62862_64860[(2)] = null);

(statearr_62862_64860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62854 === (6))){
var state_62853__$1 = state_62853;
var statearr_62863_64861 = state_62853__$1;
(statearr_62863_64861[(2)] = null);

(statearr_62863_64861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62854 === (7))){
var inst_62849 = (state_62853[(2)]);
var state_62853__$1 = state_62853;
var statearr_62864_64862 = state_62853__$1;
(statearr_62864_64862[(2)] = inst_62849);

(statearr_62864_64862[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__64842,c__48252__auto___64856,G__62804_64843,G__62804_64844__$1,n__5762__auto___64841,jobs,results,process__$1,async))
;
return ((function (__64842,switch__48012__auto__,c__48252__auto___64856,G__62804_64843,G__62804_64844__$1,n__5762__auto___64841,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48013__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48013__auto____0 = (function (){
var statearr_62866 = [null,null,null,null,null,null,null];
(statearr_62866[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48013__auto__);

(statearr_62866[(1)] = (1));

return statearr_62866;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48013__auto____1 = (function (state_62853){
while(true){
var ret_value__48014__auto__ = (function (){try{while(true){
var result__48015__auto__ = switch__48012__auto__(state_62853);
if(cljs.core.keyword_identical_QMARK_(result__48015__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48015__auto__;
}
break;
}
}catch (e62871){var ex__48016__auto__ = e62871;
var statearr_62872_64863 = state_62853;
(statearr_62872_64863[(2)] = ex__48016__auto__);


if(cljs.core.seq((state_62853[(4)]))){
var statearr_62875_64864 = state_62853;
(statearr_62875_64864[(1)] = cljs.core.first((state_62853[(4)])));

} else {
throw ex__48016__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64865 = state_62853;
state_62853 = G__64865;
continue;
} else {
return ret_value__48014__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48013__auto__ = function(state_62853){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48013__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48013__auto____1.call(this,state_62853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48013__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48013__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48013__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48013__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48013__auto__;
})()
;})(__64842,switch__48012__auto__,c__48252__auto___64856,G__62804_64843,G__62804_64844__$1,n__5762__auto___64841,jobs,results,process__$1,async))
})();
var state__48254__auto__ = (function (){var statearr_62877 = f__48253__auto__();
(statearr_62877[(6)] = c__48252__auto___64856);

return statearr_62877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48254__auto__);
});})(__64842,c__48252__auto___64856,G__62804_64843,G__62804_64844__$1,n__5762__auto___64841,jobs,results,process__$1,async))
);


break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62804_64844__$1))));

}

var G__64866 = (__64842 + (1));
__64842 = G__64866;
continue;
} else {
}
break;
}

var c__48252__auto___64867 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48253__auto__ = (function (){var switch__48012__auto__ = (function (state_62906){
var state_val_62907 = (state_62906[(1)]);
if((state_val_62907 === (7))){
var inst_62900 = (state_62906[(2)]);
var state_62906__$1 = state_62906;
var statearr_62910_64869 = state_62906__$1;
(statearr_62910_64869[(2)] = inst_62900);

(statearr_62910_64869[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62907 === (1))){
var state_62906__$1 = state_62906;
var statearr_62911_64871 = state_62906__$1;
(statearr_62911_64871[(2)] = null);

(statearr_62911_64871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62907 === (4))){
var inst_62882 = (state_62906[(7)]);
var inst_62882__$1 = (state_62906[(2)]);
var inst_62883 = (inst_62882__$1 == null);
var state_62906__$1 = (function (){var statearr_62913 = state_62906;
(statearr_62913[(7)] = inst_62882__$1);

return statearr_62913;
})();
if(cljs.core.truth_(inst_62883)){
var statearr_62914_64872 = state_62906__$1;
(statearr_62914_64872[(1)] = (5));

} else {
var statearr_62918_64873 = state_62906__$1;
(statearr_62918_64873[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62907 === (6))){
var inst_62882 = (state_62906[(7)]);
var inst_62887 = (state_62906[(8)]);
var inst_62887__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_62891 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_62892 = [inst_62882,inst_62887__$1];
var inst_62893 = (new cljs.core.PersistentVector(null,2,(5),inst_62891,inst_62892,null));
var state_62906__$1 = (function (){var statearr_62919 = state_62906;
(statearr_62919[(8)] = inst_62887__$1);

return statearr_62919;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62906__$1,(8),jobs,inst_62893);
} else {
if((state_val_62907 === (3))){
var inst_62902 = (state_62906[(2)]);
var state_62906__$1 = state_62906;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62906__$1,inst_62902);
} else {
if((state_val_62907 === (2))){
var state_62906__$1 = state_62906;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62906__$1,(4),from);
} else {
if((state_val_62907 === (9))){
var inst_62897 = (state_62906[(2)]);
var state_62906__$1 = (function (){var statearr_62923 = state_62906;
(statearr_62923[(9)] = inst_62897);

return statearr_62923;
})();
var statearr_62925_64874 = state_62906__$1;
(statearr_62925_64874[(2)] = null);

(statearr_62925_64874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62907 === (5))){
var inst_62885 = cljs.core.async.close_BANG_(jobs);
var state_62906__$1 = state_62906;
var statearr_62926_64875 = state_62906__$1;
(statearr_62926_64875[(2)] = inst_62885);

(statearr_62926_64875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62907 === (8))){
var inst_62887 = (state_62906[(8)]);
var inst_62895 = (state_62906[(2)]);
var state_62906__$1 = (function (){var statearr_62927 = state_62906;
(statearr_62927[(10)] = inst_62895);

return statearr_62927;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62906__$1,(9),results,inst_62887);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48013__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48013__auto____0 = (function (){
var statearr_62931 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_62931[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48013__auto__);

(statearr_62931[(1)] = (1));

return statearr_62931;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48013__auto____1 = (function (state_62906){
while(true){
var ret_value__48014__auto__ = (function (){try{while(true){
var result__48015__auto__ = switch__48012__auto__(state_62906);
if(cljs.core.keyword_identical_QMARK_(result__48015__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48015__auto__;
}
break;
}
}catch (e62934){var ex__48016__auto__ = e62934;
var statearr_62935_64876 = state_62906;
(statearr_62935_64876[(2)] = ex__48016__auto__);


if(cljs.core.seq((state_62906[(4)]))){
var statearr_62936_64877 = state_62906;
(statearr_62936_64877[(1)] = cljs.core.first((state_62906[(4)])));

} else {
throw ex__48016__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64878 = state_62906;
state_62906 = G__64878;
continue;
} else {
return ret_value__48014__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48013__auto__ = function(state_62906){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48013__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48013__auto____1.call(this,state_62906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48013__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48013__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48013__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48013__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48013__auto__;
})()
})();
var state__48254__auto__ = (function (){var statearr_62937 = f__48253__auto__();
(statearr_62937[(6)] = c__48252__auto___64867);

return statearr_62937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48254__auto__);
}));


var c__48252__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48253__auto__ = (function (){var switch__48012__auto__ = (function (state_62977){
var state_val_62978 = (state_62977[(1)]);
if((state_val_62978 === (7))){
var inst_62973 = (state_62977[(2)]);
var state_62977__$1 = state_62977;
var statearr_62983_64879 = state_62977__$1;
(statearr_62983_64879[(2)] = inst_62973);

(statearr_62983_64879[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62978 === (20))){
var state_62977__$1 = state_62977;
var statearr_62988_64880 = state_62977__$1;
(statearr_62988_64880[(2)] = null);

(statearr_62988_64880[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62978 === (1))){
var state_62977__$1 = state_62977;
var statearr_62990_64881 = state_62977__$1;
(statearr_62990_64881[(2)] = null);

(statearr_62990_64881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62978 === (4))){
var inst_62940 = (state_62977[(7)]);
var inst_62940__$1 = (state_62977[(2)]);
var inst_62941 = (inst_62940__$1 == null);
var state_62977__$1 = (function (){var statearr_62994 = state_62977;
(statearr_62994[(7)] = inst_62940__$1);

return statearr_62994;
})();
if(cljs.core.truth_(inst_62941)){
var statearr_62995_64882 = state_62977__$1;
(statearr_62995_64882[(1)] = (5));

} else {
var statearr_62996_64883 = state_62977__$1;
(statearr_62996_64883[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62978 === (15))){
var inst_62953 = (state_62977[(8)]);
var state_62977__$1 = state_62977;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62977__$1,(18),to,inst_62953);
} else {
if((state_val_62978 === (21))){
var inst_62967 = (state_62977[(2)]);
var state_62977__$1 = state_62977;
var statearr_63000_64884 = state_62977__$1;
(statearr_63000_64884[(2)] = inst_62967);

(statearr_63000_64884[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62978 === (13))){
var inst_62970 = (state_62977[(2)]);
var state_62977__$1 = (function (){var statearr_63001 = state_62977;
(statearr_63001[(9)] = inst_62970);

return statearr_63001;
})();
var statearr_63002_64885 = state_62977__$1;
(statearr_63002_64885[(2)] = null);

(statearr_63002_64885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62978 === (6))){
var inst_62940 = (state_62977[(7)]);
var state_62977__$1 = state_62977;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62977__$1,(11),inst_62940);
} else {
if((state_val_62978 === (17))){
var inst_62962 = (state_62977[(2)]);
var state_62977__$1 = state_62977;
if(cljs.core.truth_(inst_62962)){
var statearr_63005_64887 = state_62977__$1;
(statearr_63005_64887[(1)] = (19));

} else {
var statearr_63007_64888 = state_62977__$1;
(statearr_63007_64888[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62978 === (3))){
var inst_62975 = (state_62977[(2)]);
var state_62977__$1 = state_62977;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62977__$1,inst_62975);
} else {
if((state_val_62978 === (12))){
var inst_62950 = (state_62977[(10)]);
var state_62977__$1 = state_62977;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62977__$1,(14),inst_62950);
} else {
if((state_val_62978 === (2))){
var state_62977__$1 = state_62977;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62977__$1,(4),results);
} else {
if((state_val_62978 === (19))){
var state_62977__$1 = state_62977;
var statearr_63022_64889 = state_62977__$1;
(statearr_63022_64889[(2)] = null);

(statearr_63022_64889[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62978 === (11))){
var inst_62950 = (state_62977[(2)]);
var state_62977__$1 = (function (){var statearr_63025 = state_62977;
(statearr_63025[(10)] = inst_62950);

return statearr_63025;
})();
var statearr_63027_64890 = state_62977__$1;
(statearr_63027_64890[(2)] = null);

(statearr_63027_64890[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62978 === (9))){
var state_62977__$1 = state_62977;
var statearr_63028_64891 = state_62977__$1;
(statearr_63028_64891[(2)] = null);

(statearr_63028_64891[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62978 === (5))){
var state_62977__$1 = state_62977;
if(cljs.core.truth_(close_QMARK_)){
var statearr_63029_64892 = state_62977__$1;
(statearr_63029_64892[(1)] = (8));

} else {
var statearr_63034_64893 = state_62977__$1;
(statearr_63034_64893[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62978 === (14))){
var inst_62953 = (state_62977[(8)]);
var inst_62955 = (state_62977[(11)]);
var inst_62953__$1 = (state_62977[(2)]);
var inst_62954 = (inst_62953__$1 == null);
var inst_62955__$1 = cljs.core.not(inst_62954);
var state_62977__$1 = (function (){var statearr_63043 = state_62977;
(statearr_63043[(8)] = inst_62953__$1);

(statearr_63043[(11)] = inst_62955__$1);

return statearr_63043;
})();
if(inst_62955__$1){
var statearr_63044_64895 = state_62977__$1;
(statearr_63044_64895[(1)] = (15));

} else {
var statearr_63049_64896 = state_62977__$1;
(statearr_63049_64896[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62978 === (16))){
var inst_62955 = (state_62977[(11)]);
var state_62977__$1 = state_62977;
var statearr_63058_64897 = state_62977__$1;
(statearr_63058_64897[(2)] = inst_62955);

(statearr_63058_64897[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62978 === (10))){
var inst_62947 = (state_62977[(2)]);
var state_62977__$1 = state_62977;
var statearr_63062_64898 = state_62977__$1;
(statearr_63062_64898[(2)] = inst_62947);

(statearr_63062_64898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62978 === (18))){
var inst_62958 = (state_62977[(2)]);
var state_62977__$1 = state_62977;
var statearr_63063_64900 = state_62977__$1;
(statearr_63063_64900[(2)] = inst_62958);

(statearr_63063_64900[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62978 === (8))){
var inst_62944 = cljs.core.async.close_BANG_(to);
var state_62977__$1 = state_62977;
var statearr_63065_64901 = state_62977__$1;
(statearr_63065_64901[(2)] = inst_62944);

(statearr_63065_64901[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48013__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48013__auto____0 = (function (){
var statearr_63067 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63067[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48013__auto__);

(statearr_63067[(1)] = (1));

return statearr_63067;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48013__auto____1 = (function (state_62977){
while(true){
var ret_value__48014__auto__ = (function (){try{while(true){
var result__48015__auto__ = switch__48012__auto__(state_62977);
if(cljs.core.keyword_identical_QMARK_(result__48015__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48015__auto__;
}
break;
}
}catch (e63068){var ex__48016__auto__ = e63068;
var statearr_63069_64902 = state_62977;
(statearr_63069_64902[(2)] = ex__48016__auto__);


if(cljs.core.seq((state_62977[(4)]))){
var statearr_63071_64903 = state_62977;
(statearr_63071_64903[(1)] = cljs.core.first((state_62977[(4)])));

} else {
throw ex__48016__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64904 = state_62977;
state_62977 = G__64904;
continue;
} else {
return ret_value__48014__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48013__auto__ = function(state_62977){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48013__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48013__auto____1.call(this,state_62977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48013__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48013__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48013__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48013__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48013__auto__;
})()
})();
var state__48254__auto__ = (function (){var statearr_63073 = f__48253__auto__();
(statearr_63073[(6)] = c__48252__auto__);

return statearr_63073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48254__auto__);
}));

return c__48252__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__63077 = arguments.length;
switch (G__63077) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__63166 = arguments.length;
switch (G__63166) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__63191 = arguments.length;
switch (G__63191) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__48252__auto___64909 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48253__auto__ = (function (){var switch__48012__auto__ = (function (state_63242){
var state_val_63243 = (state_63242[(1)]);
if((state_val_63243 === (7))){
var inst_63234 = (state_63242[(2)]);
var state_63242__$1 = state_63242;
var statearr_63272_64910 = state_63242__$1;
(statearr_63272_64910[(2)] = inst_63234);

(statearr_63272_64910[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63243 === (1))){
var state_63242__$1 = state_63242;
var statearr_63273_64911 = state_63242__$1;
(statearr_63273_64911[(2)] = null);

(statearr_63273_64911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63243 === (4))){
var inst_63198 = (state_63242[(7)]);
var inst_63198__$1 = (state_63242[(2)]);
var inst_63203 = (inst_63198__$1 == null);
var state_63242__$1 = (function (){var statearr_63275 = state_63242;
(statearr_63275[(7)] = inst_63198__$1);

return statearr_63275;
})();
if(cljs.core.truth_(inst_63203)){
var statearr_63276_64913 = state_63242__$1;
(statearr_63276_64913[(1)] = (5));

} else {
var statearr_63277_64914 = state_63242__$1;
(statearr_63277_64914[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63243 === (13))){
var state_63242__$1 = state_63242;
var statearr_63278_64916 = state_63242__$1;
(statearr_63278_64916[(2)] = null);

(statearr_63278_64916[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63243 === (6))){
var inst_63198 = (state_63242[(7)]);
var inst_63215 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_63198) : p.call(null,inst_63198));
var state_63242__$1 = state_63242;
if(cljs.core.truth_(inst_63215)){
var statearr_63283_64917 = state_63242__$1;
(statearr_63283_64917[(1)] = (9));

} else {
var statearr_63284_64918 = state_63242__$1;
(statearr_63284_64918[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63243 === (3))){
var inst_63236 = (state_63242[(2)]);
var state_63242__$1 = state_63242;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63242__$1,inst_63236);
} else {
if((state_val_63243 === (12))){
var state_63242__$1 = state_63242;
var statearr_63289_64919 = state_63242__$1;
(statearr_63289_64919[(2)] = null);

(statearr_63289_64919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63243 === (2))){
var state_63242__$1 = state_63242;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63242__$1,(4),ch);
} else {
if((state_val_63243 === (11))){
var inst_63198 = (state_63242[(7)]);
var inst_63220 = (state_63242[(2)]);
var state_63242__$1 = state_63242;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63242__$1,(8),inst_63220,inst_63198);
} else {
if((state_val_63243 === (9))){
var state_63242__$1 = state_63242;
var statearr_63302_64920 = state_63242__$1;
(statearr_63302_64920[(2)] = tc);

(statearr_63302_64920[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63243 === (5))){
var inst_63210 = cljs.core.async.close_BANG_(tc);
var inst_63211 = cljs.core.async.close_BANG_(fc);
var state_63242__$1 = (function (){var statearr_63304 = state_63242;
(statearr_63304[(8)] = inst_63210);

return statearr_63304;
})();
var statearr_63305_64921 = state_63242__$1;
(statearr_63305_64921[(2)] = inst_63211);

(statearr_63305_64921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63243 === (14))){
var inst_63232 = (state_63242[(2)]);
var state_63242__$1 = state_63242;
var statearr_63307_64923 = state_63242__$1;
(statearr_63307_64923[(2)] = inst_63232);

(statearr_63307_64923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63243 === (10))){
var state_63242__$1 = state_63242;
var statearr_63309_64924 = state_63242__$1;
(statearr_63309_64924[(2)] = fc);

(statearr_63309_64924[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63243 === (8))){
var inst_63226 = (state_63242[(2)]);
var state_63242__$1 = state_63242;
if(cljs.core.truth_(inst_63226)){
var statearr_63310_64925 = state_63242__$1;
(statearr_63310_64925[(1)] = (12));

} else {
var statearr_63311_64926 = state_63242__$1;
(statearr_63311_64926[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__48013__auto__ = null;
var cljs$core$async$state_machine__48013__auto____0 = (function (){
var statearr_63312 = [null,null,null,null,null,null,null,null,null];
(statearr_63312[(0)] = cljs$core$async$state_machine__48013__auto__);

(statearr_63312[(1)] = (1));

return statearr_63312;
});
var cljs$core$async$state_machine__48013__auto____1 = (function (state_63242){
while(true){
var ret_value__48014__auto__ = (function (){try{while(true){
var result__48015__auto__ = switch__48012__auto__(state_63242);
if(cljs.core.keyword_identical_QMARK_(result__48015__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48015__auto__;
}
break;
}
}catch (e63313){var ex__48016__auto__ = e63313;
var statearr_63316_64927 = state_63242;
(statearr_63316_64927[(2)] = ex__48016__auto__);


if(cljs.core.seq((state_63242[(4)]))){
var statearr_63317_64928 = state_63242;
(statearr_63317_64928[(1)] = cljs.core.first((state_63242[(4)])));

} else {
throw ex__48016__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64929 = state_63242;
state_63242 = G__64929;
continue;
} else {
return ret_value__48014__auto__;
}
break;
}
});
cljs$core$async$state_machine__48013__auto__ = function(state_63242){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48013__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48013__auto____1.call(this,state_63242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48013__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48013__auto____0;
cljs$core$async$state_machine__48013__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48013__auto____1;
return cljs$core$async$state_machine__48013__auto__;
})()
})();
var state__48254__auto__ = (function (){var statearr_63321 = f__48253__auto__();
(statearr_63321[(6)] = c__48252__auto___64909);

return statearr_63321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48254__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__48252__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48253__auto__ = (function (){var switch__48012__auto__ = (function (state_63361){
var state_val_63362 = (state_63361[(1)]);
if((state_val_63362 === (7))){
var inst_63357 = (state_63361[(2)]);
var state_63361__$1 = state_63361;
var statearr_63365_64932 = state_63361__$1;
(statearr_63365_64932[(2)] = inst_63357);

(statearr_63365_64932[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63362 === (1))){
var inst_63337 = init;
var inst_63338 = inst_63337;
var state_63361__$1 = (function (){var statearr_63367 = state_63361;
(statearr_63367[(7)] = inst_63338);

return statearr_63367;
})();
var statearr_63369_64933 = state_63361__$1;
(statearr_63369_64933[(2)] = null);

(statearr_63369_64933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63362 === (4))){
var inst_63343 = (state_63361[(8)]);
var inst_63343__$1 = (state_63361[(2)]);
var inst_63344 = (inst_63343__$1 == null);
var state_63361__$1 = (function (){var statearr_63370 = state_63361;
(statearr_63370[(8)] = inst_63343__$1);

return statearr_63370;
})();
if(cljs.core.truth_(inst_63344)){
var statearr_63372_64935 = state_63361__$1;
(statearr_63372_64935[(1)] = (5));

} else {
var statearr_63374_64936 = state_63361__$1;
(statearr_63374_64936[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63362 === (6))){
var inst_63338 = (state_63361[(7)]);
var inst_63343 = (state_63361[(8)]);
var inst_63347 = (state_63361[(9)]);
var inst_63347__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_63338,inst_63343) : f.call(null,inst_63338,inst_63343));
var inst_63348 = cljs.core.reduced_QMARK_(inst_63347__$1);
var state_63361__$1 = (function (){var statearr_63375 = state_63361;
(statearr_63375[(9)] = inst_63347__$1);

return statearr_63375;
})();
if(inst_63348){
var statearr_63377_64938 = state_63361__$1;
(statearr_63377_64938[(1)] = (8));

} else {
var statearr_63378_64939 = state_63361__$1;
(statearr_63378_64939[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63362 === (3))){
var inst_63359 = (state_63361[(2)]);
var state_63361__$1 = state_63361;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63361__$1,inst_63359);
} else {
if((state_val_63362 === (2))){
var state_63361__$1 = state_63361;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63361__$1,(4),ch);
} else {
if((state_val_63362 === (9))){
var inst_63347 = (state_63361[(9)]);
var inst_63338 = inst_63347;
var state_63361__$1 = (function (){var statearr_63381 = state_63361;
(statearr_63381[(7)] = inst_63338);

return statearr_63381;
})();
var statearr_63382_64941 = state_63361__$1;
(statearr_63382_64941[(2)] = null);

(statearr_63382_64941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63362 === (5))){
var inst_63338 = (state_63361[(7)]);
var state_63361__$1 = state_63361;
var statearr_63383_64942 = state_63361__$1;
(statearr_63383_64942[(2)] = inst_63338);

(statearr_63383_64942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63362 === (10))){
var inst_63355 = (state_63361[(2)]);
var state_63361__$1 = state_63361;
var statearr_63384_64943 = state_63361__$1;
(statearr_63384_64943[(2)] = inst_63355);

(statearr_63384_64943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63362 === (8))){
var inst_63347 = (state_63361[(9)]);
var inst_63351 = cljs.core.deref(inst_63347);
var state_63361__$1 = state_63361;
var statearr_63385_64944 = state_63361__$1;
(statearr_63385_64944[(2)] = inst_63351);

(statearr_63385_64944[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__48013__auto__ = null;
var cljs$core$async$reduce_$_state_machine__48013__auto____0 = (function (){
var statearr_63386 = [null,null,null,null,null,null,null,null,null,null];
(statearr_63386[(0)] = cljs$core$async$reduce_$_state_machine__48013__auto__);

(statearr_63386[(1)] = (1));

return statearr_63386;
});
var cljs$core$async$reduce_$_state_machine__48013__auto____1 = (function (state_63361){
while(true){
var ret_value__48014__auto__ = (function (){try{while(true){
var result__48015__auto__ = switch__48012__auto__(state_63361);
if(cljs.core.keyword_identical_QMARK_(result__48015__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48015__auto__;
}
break;
}
}catch (e63391){var ex__48016__auto__ = e63391;
var statearr_63396_64945 = state_63361;
(statearr_63396_64945[(2)] = ex__48016__auto__);


if(cljs.core.seq((state_63361[(4)]))){
var statearr_63397_64946 = state_63361;
(statearr_63397_64946[(1)] = cljs.core.first((state_63361[(4)])));

} else {
throw ex__48016__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64947 = state_63361;
state_63361 = G__64947;
continue;
} else {
return ret_value__48014__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__48013__auto__ = function(state_63361){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__48013__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__48013__auto____1.call(this,state_63361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__48013__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__48013__auto____0;
cljs$core$async$reduce_$_state_machine__48013__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__48013__auto____1;
return cljs$core$async$reduce_$_state_machine__48013__auto__;
})()
})();
var state__48254__auto__ = (function (){var statearr_63403 = f__48253__auto__();
(statearr_63403[(6)] = c__48252__auto__);

return statearr_63403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48254__auto__);
}));

return c__48252__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__48252__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48253__auto__ = (function (){var switch__48012__auto__ = (function (state_63413){
var state_val_63414 = (state_63413[(1)]);
if((state_val_63414 === (1))){
var inst_63406 = cljs.core.async.reduce(f__$1,init,ch);
var state_63413__$1 = state_63413;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63413__$1,(2),inst_63406);
} else {
if((state_val_63414 === (2))){
var inst_63408 = (state_63413[(2)]);
var inst_63411 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_63408) : f__$1.call(null,inst_63408));
var state_63413__$1 = state_63413;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63413__$1,inst_63411);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__48013__auto__ = null;
var cljs$core$async$transduce_$_state_machine__48013__auto____0 = (function (){
var statearr_63429 = [null,null,null,null,null,null,null];
(statearr_63429[(0)] = cljs$core$async$transduce_$_state_machine__48013__auto__);

(statearr_63429[(1)] = (1));

return statearr_63429;
});
var cljs$core$async$transduce_$_state_machine__48013__auto____1 = (function (state_63413){
while(true){
var ret_value__48014__auto__ = (function (){try{while(true){
var result__48015__auto__ = switch__48012__auto__(state_63413);
if(cljs.core.keyword_identical_QMARK_(result__48015__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48015__auto__;
}
break;
}
}catch (e63439){var ex__48016__auto__ = e63439;
var statearr_63440_64948 = state_63413;
(statearr_63440_64948[(2)] = ex__48016__auto__);


if(cljs.core.seq((state_63413[(4)]))){
var statearr_63445_64949 = state_63413;
(statearr_63445_64949[(1)] = cljs.core.first((state_63413[(4)])));

} else {
throw ex__48016__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64950 = state_63413;
state_63413 = G__64950;
continue;
} else {
return ret_value__48014__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__48013__auto__ = function(state_63413){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__48013__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__48013__auto____1.call(this,state_63413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__48013__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__48013__auto____0;
cljs$core$async$transduce_$_state_machine__48013__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__48013__auto____1;
return cljs$core$async$transduce_$_state_machine__48013__auto__;
})()
})();
var state__48254__auto__ = (function (){var statearr_63459 = f__48253__auto__();
(statearr_63459[(6)] = c__48252__auto__);

return statearr_63459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48254__auto__);
}));

return c__48252__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__63517 = arguments.length;
switch (G__63517) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__48252__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48253__auto__ = (function (){var switch__48012__auto__ = (function (state_63571){
var state_val_63572 = (state_63571[(1)]);
if((state_val_63572 === (7))){
var inst_63553 = (state_63571[(2)]);
var state_63571__$1 = state_63571;
var statearr_63577_64955 = state_63571__$1;
(statearr_63577_64955[(2)] = inst_63553);

(statearr_63577_64955[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63572 === (1))){
var inst_63545 = cljs.core.seq(coll);
var inst_63547 = inst_63545;
var state_63571__$1 = (function (){var statearr_63579 = state_63571;
(statearr_63579[(7)] = inst_63547);

return statearr_63579;
})();
var statearr_63580_64956 = state_63571__$1;
(statearr_63580_64956[(2)] = null);

(statearr_63580_64956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63572 === (4))){
var inst_63547 = (state_63571[(7)]);
var inst_63551 = cljs.core.first(inst_63547);
var state_63571__$1 = state_63571;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63571__$1,(7),ch,inst_63551);
} else {
if((state_val_63572 === (13))){
var inst_63565 = (state_63571[(2)]);
var state_63571__$1 = state_63571;
var statearr_63581_64957 = state_63571__$1;
(statearr_63581_64957[(2)] = inst_63565);

(statearr_63581_64957[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63572 === (6))){
var inst_63556 = (state_63571[(2)]);
var state_63571__$1 = state_63571;
if(cljs.core.truth_(inst_63556)){
var statearr_63582_64958 = state_63571__$1;
(statearr_63582_64958[(1)] = (8));

} else {
var statearr_63583_64959 = state_63571__$1;
(statearr_63583_64959[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63572 === (3))){
var inst_63569 = (state_63571[(2)]);
var state_63571__$1 = state_63571;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63571__$1,inst_63569);
} else {
if((state_val_63572 === (12))){
var state_63571__$1 = state_63571;
var statearr_63585_64960 = state_63571__$1;
(statearr_63585_64960[(2)] = null);

(statearr_63585_64960[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63572 === (2))){
var inst_63547 = (state_63571[(7)]);
var state_63571__$1 = state_63571;
if(cljs.core.truth_(inst_63547)){
var statearr_63590_64961 = state_63571__$1;
(statearr_63590_64961[(1)] = (4));

} else {
var statearr_63591_64966 = state_63571__$1;
(statearr_63591_64966[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63572 === (11))){
var inst_63562 = cljs.core.async.close_BANG_(ch);
var state_63571__$1 = state_63571;
var statearr_63592_64967 = state_63571__$1;
(statearr_63592_64967[(2)] = inst_63562);

(statearr_63592_64967[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63572 === (9))){
var state_63571__$1 = state_63571;
if(cljs.core.truth_(close_QMARK_)){
var statearr_63593_64968 = state_63571__$1;
(statearr_63593_64968[(1)] = (11));

} else {
var statearr_63594_64969 = state_63571__$1;
(statearr_63594_64969[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63572 === (5))){
var inst_63547 = (state_63571[(7)]);
var state_63571__$1 = state_63571;
var statearr_63595_64970 = state_63571__$1;
(statearr_63595_64970[(2)] = inst_63547);

(statearr_63595_64970[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63572 === (10))){
var inst_63567 = (state_63571[(2)]);
var state_63571__$1 = state_63571;
var statearr_63596_64971 = state_63571__$1;
(statearr_63596_64971[(2)] = inst_63567);

(statearr_63596_64971[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63572 === (8))){
var inst_63547 = (state_63571[(7)]);
var inst_63558 = cljs.core.next(inst_63547);
var inst_63547__$1 = inst_63558;
var state_63571__$1 = (function (){var statearr_63599 = state_63571;
(statearr_63599[(7)] = inst_63547__$1);

return statearr_63599;
})();
var statearr_63602_64972 = state_63571__$1;
(statearr_63602_64972[(2)] = null);

(statearr_63602_64972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__48013__auto__ = null;
var cljs$core$async$state_machine__48013__auto____0 = (function (){
var statearr_63607 = [null,null,null,null,null,null,null,null];
(statearr_63607[(0)] = cljs$core$async$state_machine__48013__auto__);

(statearr_63607[(1)] = (1));

return statearr_63607;
});
var cljs$core$async$state_machine__48013__auto____1 = (function (state_63571){
while(true){
var ret_value__48014__auto__ = (function (){try{while(true){
var result__48015__auto__ = switch__48012__auto__(state_63571);
if(cljs.core.keyword_identical_QMARK_(result__48015__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48015__auto__;
}
break;
}
}catch (e63612){var ex__48016__auto__ = e63612;
var statearr_63615_64973 = state_63571;
(statearr_63615_64973[(2)] = ex__48016__auto__);


if(cljs.core.seq((state_63571[(4)]))){
var statearr_63617_64974 = state_63571;
(statearr_63617_64974[(1)] = cljs.core.first((state_63571[(4)])));

} else {
throw ex__48016__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64975 = state_63571;
state_63571 = G__64975;
continue;
} else {
return ret_value__48014__auto__;
}
break;
}
});
cljs$core$async$state_machine__48013__auto__ = function(state_63571){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48013__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48013__auto____1.call(this,state_63571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48013__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48013__auto____0;
cljs$core$async$state_machine__48013__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48013__auto____1;
return cljs$core$async$state_machine__48013__auto__;
})()
})();
var state__48254__auto__ = (function (){var statearr_63620 = f__48253__auto__();
(statearr_63620[(6)] = c__48252__auto__);

return statearr_63620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48254__auto__);
}));

return c__48252__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__63630 = arguments.length;
switch (G__63630) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_64977 = (function (_){
var x__5519__auto__ = (((_ == null))?null:_);
var m__5520__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5520__auto__.call(null,_));
} else {
var m__5518__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5518__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_64977(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_64978 = (function (m,ch,close_QMARK_){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5520__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5518__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5518__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_64978(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_64983 = (function (m,ch){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5520__auto__.call(null,m,ch));
} else {
var m__5518__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5518__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_64983(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_64984 = (function (m){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5520__auto__.call(null,m));
} else {
var m__5518__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5518__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_64984(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63670 = (function (ch,cs,meta63671){
this.ch = ch;
this.cs = cs;
this.meta63671 = meta63671;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async63670.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63672,meta63671__$1){
var self__ = this;
var _63672__$1 = this;
return (new cljs.core.async.t_cljs$core$async63670(self__.ch,self__.cs,meta63671__$1));
}));

(cljs.core.async.t_cljs$core$async63670.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63672){
var self__ = this;
var _63672__$1 = this;
return self__.meta63671;
}));

(cljs.core.async.t_cljs$core$async63670.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63670.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async63670.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63670.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async63670.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async63670.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async63670.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta63671","meta63671",-437384617,null)], null);
}));

(cljs.core.async.t_cljs$core$async63670.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async63670.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63670");

(cljs.core.async.t_cljs$core$async63670.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async63670");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async63670.
 */
cljs.core.async.__GT_t_cljs$core$async63670 = (function cljs$core$async$__GT_t_cljs$core$async63670(ch,cs,meta63671){
return (new cljs.core.async.t_cljs$core$async63670(ch,cs,meta63671));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async63670(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__48252__auto___64985 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48253__auto__ = (function (){var switch__48012__auto__ = (function (state_63806){
var state_val_63807 = (state_63806[(1)]);
if((state_val_63807 === (7))){
var inst_63802 = (state_63806[(2)]);
var state_63806__$1 = state_63806;
var statearr_63808_64989 = state_63806__$1;
(statearr_63808_64989[(2)] = inst_63802);

(statearr_63808_64989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63807 === (20))){
var inst_63707 = (state_63806[(7)]);
var inst_63719 = cljs.core.first(inst_63707);
var inst_63720 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63719,(0),null);
var inst_63721 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63719,(1),null);
var state_63806__$1 = (function (){var statearr_63809 = state_63806;
(statearr_63809[(8)] = inst_63720);

return statearr_63809;
})();
if(cljs.core.truth_(inst_63721)){
var statearr_63810_64990 = state_63806__$1;
(statearr_63810_64990[(1)] = (22));

} else {
var statearr_63811_64991 = state_63806__$1;
(statearr_63811_64991[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63807 === (27))){
var inst_63749 = (state_63806[(9)]);
var inst_63751 = (state_63806[(10)]);
var inst_63756 = (state_63806[(11)]);
var inst_63676 = (state_63806[(12)]);
var inst_63756__$1 = cljs.core._nth(inst_63749,inst_63751);
var inst_63757 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_63756__$1,inst_63676,done);
var state_63806__$1 = (function (){var statearr_63812 = state_63806;
(statearr_63812[(11)] = inst_63756__$1);

return statearr_63812;
})();
if(cljs.core.truth_(inst_63757)){
var statearr_63813_64992 = state_63806__$1;
(statearr_63813_64992[(1)] = (30));

} else {
var statearr_63814_64993 = state_63806__$1;
(statearr_63814_64993[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63807 === (1))){
var state_63806__$1 = state_63806;
var statearr_63815_64994 = state_63806__$1;
(statearr_63815_64994[(2)] = null);

(statearr_63815_64994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63807 === (24))){
var inst_63707 = (state_63806[(7)]);
var inst_63726 = (state_63806[(2)]);
var inst_63727 = cljs.core.next(inst_63707);
var inst_63685 = inst_63727;
var inst_63686 = null;
var inst_63687 = (0);
var inst_63688 = (0);
var state_63806__$1 = (function (){var statearr_63816 = state_63806;
(statearr_63816[(13)] = inst_63726);

(statearr_63816[(14)] = inst_63685);

(statearr_63816[(15)] = inst_63686);

(statearr_63816[(16)] = inst_63687);

(statearr_63816[(17)] = inst_63688);

return statearr_63816;
})();
var statearr_63817_64995 = state_63806__$1;
(statearr_63817_64995[(2)] = null);

(statearr_63817_64995[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63807 === (39))){
var state_63806__$1 = state_63806;
var statearr_63821_64996 = state_63806__$1;
(statearr_63821_64996[(2)] = null);

(statearr_63821_64996[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63807 === (4))){
var inst_63676 = (state_63806[(12)]);
var inst_63676__$1 = (state_63806[(2)]);
var inst_63677 = (inst_63676__$1 == null);
var state_63806__$1 = (function (){var statearr_63822 = state_63806;
(statearr_63822[(12)] = inst_63676__$1);

return statearr_63822;
})();
if(cljs.core.truth_(inst_63677)){
var statearr_63823_64997 = state_63806__$1;
(statearr_63823_64997[(1)] = (5));

} else {
var statearr_63824_64998 = state_63806__$1;
(statearr_63824_64998[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63807 === (15))){
var inst_63688 = (state_63806[(17)]);
var inst_63685 = (state_63806[(14)]);
var inst_63686 = (state_63806[(15)]);
var inst_63687 = (state_63806[(16)]);
var inst_63703 = (state_63806[(2)]);
var inst_63704 = (inst_63688 + (1));
var tmp63818 = inst_63687;
var tmp63819 = inst_63686;
var tmp63820 = inst_63685;
var inst_63685__$1 = tmp63820;
var inst_63686__$1 = tmp63819;
var inst_63687__$1 = tmp63818;
var inst_63688__$1 = inst_63704;
var state_63806__$1 = (function (){var statearr_63827 = state_63806;
(statearr_63827[(18)] = inst_63703);

(statearr_63827[(14)] = inst_63685__$1);

(statearr_63827[(15)] = inst_63686__$1);

(statearr_63827[(16)] = inst_63687__$1);

(statearr_63827[(17)] = inst_63688__$1);

return statearr_63827;
})();
var statearr_63828_65002 = state_63806__$1;
(statearr_63828_65002[(2)] = null);

(statearr_63828_65002[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63807 === (21))){
var inst_63730 = (state_63806[(2)]);
var state_63806__$1 = state_63806;
var statearr_63832_65003 = state_63806__$1;
(statearr_63832_65003[(2)] = inst_63730);

(statearr_63832_65003[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63807 === (31))){
var inst_63756 = (state_63806[(11)]);
var inst_63760 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_63756);
var state_63806__$1 = state_63806;
var statearr_63835_65004 = state_63806__$1;
(statearr_63835_65004[(2)] = inst_63760);

(statearr_63835_65004[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63807 === (32))){
var inst_63751 = (state_63806[(10)]);
var inst_63748 = (state_63806[(19)]);
var inst_63749 = (state_63806[(9)]);
var inst_63750 = (state_63806[(20)]);
var inst_63762 = (state_63806[(2)]);
var inst_63763 = (inst_63751 + (1));
var tmp63829 = inst_63748;
var tmp63830 = inst_63749;
var tmp63831 = inst_63750;
var inst_63748__$1 = tmp63829;
var inst_63749__$1 = tmp63830;
var inst_63750__$1 = tmp63831;
var inst_63751__$1 = inst_63763;
var state_63806__$1 = (function (){var statearr_63836 = state_63806;
(statearr_63836[(21)] = inst_63762);

(statearr_63836[(19)] = inst_63748__$1);

(statearr_63836[(9)] = inst_63749__$1);

(statearr_63836[(20)] = inst_63750__$1);

(statearr_63836[(10)] = inst_63751__$1);

return statearr_63836;
})();
var statearr_63838_65005 = state_63806__$1;
(statearr_63838_65005[(2)] = null);

(statearr_63838_65005[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63807 === (40))){
var inst_63775 = (state_63806[(22)]);
var inst_63779 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_63775);
var state_63806__$1 = state_63806;
var statearr_63839_65006 = state_63806__$1;
(statearr_63839_65006[(2)] = inst_63779);

(statearr_63839_65006[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63807 === (33))){
var inst_63766 = (state_63806[(23)]);
var inst_63768 = cljs.core.chunked_seq_QMARK_(inst_63766);
var state_63806__$1 = state_63806;
if(inst_63768){
var statearr_63840_65007 = state_63806__$1;
(statearr_63840_65007[(1)] = (36));

} else {
var statearr_63841_65008 = state_63806__$1;
(statearr_63841_65008[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63807 === (13))){
var inst_63697 = (state_63806[(24)]);
var inst_63700 = cljs.core.async.close_BANG_(inst_63697);
var state_63806__$1 = state_63806;
var statearr_63843_65009 = state_63806__$1;
(statearr_63843_65009[(2)] = inst_63700);

(statearr_63843_65009[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63807 === (22))){
var inst_63720 = (state_63806[(8)]);
var inst_63723 = cljs.core.async.close_BANG_(inst_63720);
var state_63806__$1 = state_63806;
var statearr_63844_65010 = state_63806__$1;
(statearr_63844_65010[(2)] = inst_63723);

(statearr_63844_65010[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63807 === (36))){
var inst_63766 = (state_63806[(23)]);
var inst_63770 = cljs.core.chunk_first(inst_63766);
var inst_63771 = cljs.core.chunk_rest(inst_63766);
var inst_63772 = cljs.core.count(inst_63770);
var inst_63748 = inst_63771;
var inst_63749 = inst_63770;
var inst_63750 = inst_63772;
var inst_63751 = (0);
var state_63806__$1 = (function (){var statearr_63845 = state_63806;
(statearr_63845[(19)] = inst_63748);

(statearr_63845[(9)] = inst_63749);

(statearr_63845[(20)] = inst_63750);

(statearr_63845[(10)] = inst_63751);

return statearr_63845;
})();
var statearr_63846_65011 = state_63806__$1;
(statearr_63846_65011[(2)] = null);

(statearr_63846_65011[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63807 === (41))){
var inst_63766 = (state_63806[(23)]);
var inst_63781 = (state_63806[(2)]);
var inst_63782 = cljs.core.next(inst_63766);
var inst_63748 = inst_63782;
var inst_63749 = null;
var inst_63750 = (0);
var inst_63751 = (0);
var state_63806__$1 = (function (){var statearr_63847 = state_63806;
(statearr_63847[(25)] = inst_63781);

(statearr_63847[(19)] = inst_63748);

(statearr_63847[(9)] = inst_63749);

(statearr_63847[(20)] = inst_63750);

(statearr_63847[(10)] = inst_63751);

return statearr_63847;
})();
var statearr_63848_65015 = state_63806__$1;
(statearr_63848_65015[(2)] = null);

(statearr_63848_65015[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63807 === (43))){
var state_63806__$1 = state_63806;
var statearr_63849_65016 = state_63806__$1;
(statearr_63849_65016[(2)] = null);

(statearr_63849_65016[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63807 === (29))){
var inst_63790 = (state_63806[(2)]);
var state_63806__$1 = state_63806;
var statearr_63850_65017 = state_63806__$1;
(statearr_63850_65017[(2)] = inst_63790);

(statearr_63850_65017[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63807 === (44))){
var inst_63799 = (state_63806[(2)]);
var state_63806__$1 = (function (){var statearr_63852 = state_63806;
(statearr_63852[(26)] = inst_63799);

return statearr_63852;
})();
var statearr_63853_65018 = state_63806__$1;
(statearr_63853_65018[(2)] = null);

(statearr_63853_65018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63807 === (6))){
var inst_63740 = (state_63806[(27)]);
var inst_63739 = cljs.core.deref(cs);
var inst_63740__$1 = cljs.core.keys(inst_63739);
var inst_63741 = cljs.core.count(inst_63740__$1);
var inst_63742 = cljs.core.reset_BANG_(dctr,inst_63741);
var inst_63747 = cljs.core.seq(inst_63740__$1);
var inst_63748 = inst_63747;
var inst_63749 = null;
var inst_63750 = (0);
var inst_63751 = (0);
var state_63806__$1 = (function (){var statearr_63854 = state_63806;
(statearr_63854[(27)] = inst_63740__$1);

(statearr_63854[(28)] = inst_63742);

(statearr_63854[(19)] = inst_63748);

(statearr_63854[(9)] = inst_63749);

(statearr_63854[(20)] = inst_63750);

(statearr_63854[(10)] = inst_63751);

return statearr_63854;
})();
var statearr_63855_65019 = state_63806__$1;
(statearr_63855_65019[(2)] = null);

(statearr_63855_65019[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63807 === (28))){
var inst_63748 = (state_63806[(19)]);
var inst_63766 = (state_63806[(23)]);
var inst_63766__$1 = cljs.core.seq(inst_63748);
var state_63806__$1 = (function (){var statearr_63858 = state_63806;
(statearr_63858[(23)] = inst_63766__$1);

return statearr_63858;
})();
if(inst_63766__$1){
var statearr_63859_65020 = state_63806__$1;
(statearr_63859_65020[(1)] = (33));

} else {
var statearr_63860_65021 = state_63806__$1;
(statearr_63860_65021[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63807 === (25))){
var inst_63751 = (state_63806[(10)]);
var inst_63750 = (state_63806[(20)]);
var inst_63753 = (inst_63751 < inst_63750);
var inst_63754 = inst_63753;
var state_63806__$1 = state_63806;
if(cljs.core.truth_(inst_63754)){
var statearr_63863_65022 = state_63806__$1;
(statearr_63863_65022[(1)] = (27));

} else {
var statearr_63864_65023 = state_63806__$1;
(statearr_63864_65023[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63807 === (34))){
var state_63806__$1 = state_63806;
var statearr_63865_65024 = state_63806__$1;
(statearr_63865_65024[(2)] = null);

(statearr_63865_65024[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63807 === (17))){
var state_63806__$1 = state_63806;
var statearr_63868_65025 = state_63806__$1;
(statearr_63868_65025[(2)] = null);

(statearr_63868_65025[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63807 === (3))){
var inst_63804 = (state_63806[(2)]);
var state_63806__$1 = state_63806;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63806__$1,inst_63804);
} else {
if((state_val_63807 === (12))){
var inst_63735 = (state_63806[(2)]);
var state_63806__$1 = state_63806;
var statearr_63869_65026 = state_63806__$1;
(statearr_63869_65026[(2)] = inst_63735);

(statearr_63869_65026[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63807 === (2))){
var state_63806__$1 = state_63806;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63806__$1,(4),ch);
} else {
if((state_val_63807 === (23))){
var state_63806__$1 = state_63806;
var statearr_63872_65027 = state_63806__$1;
(statearr_63872_65027[(2)] = null);

(statearr_63872_65027[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63807 === (35))){
var inst_63788 = (state_63806[(2)]);
var state_63806__$1 = state_63806;
var statearr_63874_65028 = state_63806__$1;
(statearr_63874_65028[(2)] = inst_63788);

(statearr_63874_65028[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63807 === (19))){
var inst_63707 = (state_63806[(7)]);
var inst_63711 = cljs.core.chunk_first(inst_63707);
var inst_63712 = cljs.core.chunk_rest(inst_63707);
var inst_63713 = cljs.core.count(inst_63711);
var inst_63685 = inst_63712;
var inst_63686 = inst_63711;
var inst_63687 = inst_63713;
var inst_63688 = (0);
var state_63806__$1 = (function (){var statearr_63875 = state_63806;
(statearr_63875[(14)] = inst_63685);

(statearr_63875[(15)] = inst_63686);

(statearr_63875[(16)] = inst_63687);

(statearr_63875[(17)] = inst_63688);

return statearr_63875;
})();
var statearr_63877_65029 = state_63806__$1;
(statearr_63877_65029[(2)] = null);

(statearr_63877_65029[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63807 === (11))){
var inst_63685 = (state_63806[(14)]);
var inst_63707 = (state_63806[(7)]);
var inst_63707__$1 = cljs.core.seq(inst_63685);
var state_63806__$1 = (function (){var statearr_63878 = state_63806;
(statearr_63878[(7)] = inst_63707__$1);

return statearr_63878;
})();
if(inst_63707__$1){
var statearr_63879_65030 = state_63806__$1;
(statearr_63879_65030[(1)] = (16));

} else {
var statearr_63880_65031 = state_63806__$1;
(statearr_63880_65031[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63807 === (9))){
var inst_63737 = (state_63806[(2)]);
var state_63806__$1 = state_63806;
var statearr_63881_65032 = state_63806__$1;
(statearr_63881_65032[(2)] = inst_63737);

(statearr_63881_65032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63807 === (5))){
var inst_63683 = cljs.core.deref(cs);
var inst_63684 = cljs.core.seq(inst_63683);
var inst_63685 = inst_63684;
var inst_63686 = null;
var inst_63687 = (0);
var inst_63688 = (0);
var state_63806__$1 = (function (){var statearr_63882 = state_63806;
(statearr_63882[(14)] = inst_63685);

(statearr_63882[(15)] = inst_63686);

(statearr_63882[(16)] = inst_63687);

(statearr_63882[(17)] = inst_63688);

return statearr_63882;
})();
var statearr_63883_65033 = state_63806__$1;
(statearr_63883_65033[(2)] = null);

(statearr_63883_65033[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63807 === (14))){
var state_63806__$1 = state_63806;
var statearr_63885_65034 = state_63806__$1;
(statearr_63885_65034[(2)] = null);

(statearr_63885_65034[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63807 === (45))){
var inst_63796 = (state_63806[(2)]);
var state_63806__$1 = state_63806;
var statearr_63886_65037 = state_63806__$1;
(statearr_63886_65037[(2)] = inst_63796);

(statearr_63886_65037[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63807 === (26))){
var inst_63740 = (state_63806[(27)]);
var inst_63792 = (state_63806[(2)]);
var inst_63793 = cljs.core.seq(inst_63740);
var state_63806__$1 = (function (){var statearr_63887 = state_63806;
(statearr_63887[(29)] = inst_63792);

return statearr_63887;
})();
if(inst_63793){
var statearr_63888_65038 = state_63806__$1;
(statearr_63888_65038[(1)] = (42));

} else {
var statearr_63889_65040 = state_63806__$1;
(statearr_63889_65040[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63807 === (16))){
var inst_63707 = (state_63806[(7)]);
var inst_63709 = cljs.core.chunked_seq_QMARK_(inst_63707);
var state_63806__$1 = state_63806;
if(inst_63709){
var statearr_63890_65042 = state_63806__$1;
(statearr_63890_65042[(1)] = (19));

} else {
var statearr_63891_65043 = state_63806__$1;
(statearr_63891_65043[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63807 === (38))){
var inst_63785 = (state_63806[(2)]);
var state_63806__$1 = state_63806;
var statearr_63896_65044 = state_63806__$1;
(statearr_63896_65044[(2)] = inst_63785);

(statearr_63896_65044[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63807 === (30))){
var state_63806__$1 = state_63806;
var statearr_63898_65045 = state_63806__$1;
(statearr_63898_65045[(2)] = null);

(statearr_63898_65045[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63807 === (10))){
var inst_63686 = (state_63806[(15)]);
var inst_63688 = (state_63806[(17)]);
var inst_63696 = cljs.core._nth(inst_63686,inst_63688);
var inst_63697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63696,(0),null);
var inst_63698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63696,(1),null);
var state_63806__$1 = (function (){var statearr_63899 = state_63806;
(statearr_63899[(24)] = inst_63697);

return statearr_63899;
})();
if(cljs.core.truth_(inst_63698)){
var statearr_63900_65046 = state_63806__$1;
(statearr_63900_65046[(1)] = (13));

} else {
var statearr_63901_65047 = state_63806__$1;
(statearr_63901_65047[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63807 === (18))){
var inst_63733 = (state_63806[(2)]);
var state_63806__$1 = state_63806;
var statearr_63903_65048 = state_63806__$1;
(statearr_63903_65048[(2)] = inst_63733);

(statearr_63903_65048[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63807 === (42))){
var state_63806__$1 = state_63806;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63806__$1,(45),dchan);
} else {
if((state_val_63807 === (37))){
var inst_63766 = (state_63806[(23)]);
var inst_63775 = (state_63806[(22)]);
var inst_63676 = (state_63806[(12)]);
var inst_63775__$1 = cljs.core.first(inst_63766);
var inst_63776 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_63775__$1,inst_63676,done);
var state_63806__$1 = (function (){var statearr_63906 = state_63806;
(statearr_63906[(22)] = inst_63775__$1);

return statearr_63906;
})();
if(cljs.core.truth_(inst_63776)){
var statearr_63908_65049 = state_63806__$1;
(statearr_63908_65049[(1)] = (39));

} else {
var statearr_63909_65050 = state_63806__$1;
(statearr_63909_65050[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63807 === (8))){
var inst_63688 = (state_63806[(17)]);
var inst_63687 = (state_63806[(16)]);
var inst_63690 = (inst_63688 < inst_63687);
var inst_63691 = inst_63690;
var state_63806__$1 = state_63806;
if(cljs.core.truth_(inst_63691)){
var statearr_63910_65051 = state_63806__$1;
(statearr_63910_65051[(1)] = (10));

} else {
var statearr_63911_65052 = state_63806__$1;
(statearr_63911_65052[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__48013__auto__ = null;
var cljs$core$async$mult_$_state_machine__48013__auto____0 = (function (){
var statearr_63915 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63915[(0)] = cljs$core$async$mult_$_state_machine__48013__auto__);

(statearr_63915[(1)] = (1));

return statearr_63915;
});
var cljs$core$async$mult_$_state_machine__48013__auto____1 = (function (state_63806){
while(true){
var ret_value__48014__auto__ = (function (){try{while(true){
var result__48015__auto__ = switch__48012__auto__(state_63806);
if(cljs.core.keyword_identical_QMARK_(result__48015__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48015__auto__;
}
break;
}
}catch (e63916){var ex__48016__auto__ = e63916;
var statearr_63917_65057 = state_63806;
(statearr_63917_65057[(2)] = ex__48016__auto__);


if(cljs.core.seq((state_63806[(4)]))){
var statearr_63918_65058 = state_63806;
(statearr_63918_65058[(1)] = cljs.core.first((state_63806[(4)])));

} else {
throw ex__48016__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65062 = state_63806;
state_63806 = G__65062;
continue;
} else {
return ret_value__48014__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__48013__auto__ = function(state_63806){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__48013__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__48013__auto____1.call(this,state_63806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__48013__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__48013__auto____0;
cljs$core$async$mult_$_state_machine__48013__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__48013__auto____1;
return cljs$core$async$mult_$_state_machine__48013__auto__;
})()
})();
var state__48254__auto__ = (function (){var statearr_63919 = f__48253__auto__();
(statearr_63919[(6)] = c__48252__auto___64985);

return statearr_63919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48254__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__63925 = arguments.length;
switch (G__63925) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_65064 = (function (m,ch){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5520__auto__.call(null,m,ch));
} else {
var m__5518__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5518__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_65064(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_65065 = (function (m,ch){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5520__auto__.call(null,m,ch));
} else {
var m__5518__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5518__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_65065(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_65069 = (function (m){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5520__auto__.call(null,m));
} else {
var m__5518__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5518__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_65069(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_65070 = (function (m,state_map){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5520__auto__.call(null,m,state_map));
} else {
var m__5518__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5518__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_65070(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_65071 = (function (m,mode){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5520__auto__.call(null,m,mode));
} else {
var m__5518__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5518__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_65071(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___65075 = arguments.length;
var i__5898__auto___65076 = (0);
while(true){
if((i__5898__auto___65076 < len__5897__auto___65075)){
args__5903__auto__.push((arguments[i__5898__auto___65076]));

var G__65077 = (i__5898__auto___65076 + (1));
i__5898__auto___65076 = G__65077;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((3) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5904__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__63946){
var map__63947 = p__63946;
var map__63947__$1 = cljs.core.__destructure_map(map__63947);
var opts = map__63947__$1;
var statearr_63948_65078 = state;
(statearr_63948_65078[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts((function (val){
var statearr_63949_65079 = state;
(statearr_63949_65079[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_63950_65080 = state;
(statearr_63950_65080[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq63938){
var G__63939 = cljs.core.first(seq63938);
var seq63938__$1 = cljs.core.next(seq63938);
var G__63940 = cljs.core.first(seq63938__$1);
var seq63938__$2 = cljs.core.next(seq63938__$1);
var G__63941 = cljs.core.first(seq63938__$2);
var seq63938__$3 = cljs.core.next(seq63938__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63939,G__63940,G__63941,seq63938__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63955 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta63956){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta63956 = meta63956;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async63955.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63957,meta63956__$1){
var self__ = this;
var _63957__$1 = this;
return (new cljs.core.async.t_cljs$core$async63955(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta63956__$1));
}));

(cljs.core.async.t_cljs$core$async63955.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63957){
var self__ = this;
var _63957__$1 = this;
return self__.meta63956;
}));

(cljs.core.async.t_cljs$core$async63955.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63955.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async63955.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63955.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async63955.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async63955.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async63955.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async63955.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+"(solo-modes mode)")));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async63955.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta63956","meta63956",-1530921619,null)], null);
}));

(cljs.core.async.t_cljs$core$async63955.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async63955.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63955");

(cljs.core.async.t_cljs$core$async63955.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async63955");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async63955.
 */
cljs.core.async.__GT_t_cljs$core$async63955 = (function cljs$core$async$__GT_t_cljs$core$async63955(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta63956){
return (new cljs.core.async.t_cljs$core$async63955(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta63956));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async63955(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__48252__auto___65088 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48253__auto__ = (function (){var switch__48012__auto__ = (function (state_64032){
var state_val_64033 = (state_64032[(1)]);
if((state_val_64033 === (7))){
var inst_63991 = (state_64032[(2)]);
var state_64032__$1 = state_64032;
if(cljs.core.truth_(inst_63991)){
var statearr_64034_65089 = state_64032__$1;
(statearr_64034_65089[(1)] = (8));

} else {
var statearr_64035_65090 = state_64032__$1;
(statearr_64035_65090[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64033 === (20))){
var inst_63984 = (state_64032[(7)]);
var state_64032__$1 = state_64032;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64032__$1,(23),out,inst_63984);
} else {
if((state_val_64033 === (1))){
var inst_63967 = calc_state();
var inst_63968 = cljs.core.__destructure_map(inst_63967);
var inst_63969 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63968,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_63970 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63968,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_63971 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63968,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_63972 = inst_63967;
var state_64032__$1 = (function (){var statearr_64039 = state_64032;
(statearr_64039[(8)] = inst_63969);

(statearr_64039[(9)] = inst_63970);

(statearr_64039[(10)] = inst_63971);

(statearr_64039[(11)] = inst_63972);

return statearr_64039;
})();
var statearr_64040_65091 = state_64032__$1;
(statearr_64040_65091[(2)] = null);

(statearr_64040_65091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64033 === (24))){
var inst_63975 = (state_64032[(12)]);
var inst_63972 = inst_63975;
var state_64032__$1 = (function (){var statearr_64041 = state_64032;
(statearr_64041[(11)] = inst_63972);

return statearr_64041;
})();
var statearr_64042_65092 = state_64032__$1;
(statearr_64042_65092[(2)] = null);

(statearr_64042_65092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64033 === (4))){
var inst_63984 = (state_64032[(7)]);
var inst_63986 = (state_64032[(13)]);
var inst_63983 = (state_64032[(2)]);
var inst_63984__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63983,(0),null);
var inst_63985 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63983,(1),null);
var inst_63986__$1 = (inst_63984__$1 == null);
var state_64032__$1 = (function (){var statearr_64044 = state_64032;
(statearr_64044[(7)] = inst_63984__$1);

(statearr_64044[(14)] = inst_63985);

(statearr_64044[(13)] = inst_63986__$1);

return statearr_64044;
})();
if(cljs.core.truth_(inst_63986__$1)){
var statearr_64045_65093 = state_64032__$1;
(statearr_64045_65093[(1)] = (5));

} else {
var statearr_64046_65094 = state_64032__$1;
(statearr_64046_65094[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64033 === (15))){
var inst_63976 = (state_64032[(15)]);
var inst_64005 = (state_64032[(16)]);
var inst_64005__$1 = cljs.core.empty_QMARK_(inst_63976);
var state_64032__$1 = (function (){var statearr_64048 = state_64032;
(statearr_64048[(16)] = inst_64005__$1);

return statearr_64048;
})();
if(inst_64005__$1){
var statearr_64049_65095 = state_64032__$1;
(statearr_64049_65095[(1)] = (17));

} else {
var statearr_64050_65096 = state_64032__$1;
(statearr_64050_65096[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64033 === (21))){
var inst_63975 = (state_64032[(12)]);
var inst_63972 = inst_63975;
var state_64032__$1 = (function (){var statearr_64051 = state_64032;
(statearr_64051[(11)] = inst_63972);

return statearr_64051;
})();
var statearr_64052_65097 = state_64032__$1;
(statearr_64052_65097[(2)] = null);

(statearr_64052_65097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64033 === (13))){
var inst_63998 = (state_64032[(2)]);
var inst_63999 = calc_state();
var inst_63972 = inst_63999;
var state_64032__$1 = (function (){var statearr_64053 = state_64032;
(statearr_64053[(17)] = inst_63998);

(statearr_64053[(11)] = inst_63972);

return statearr_64053;
})();
var statearr_64054_65100 = state_64032__$1;
(statearr_64054_65100[(2)] = null);

(statearr_64054_65100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64033 === (22))){
var inst_64026 = (state_64032[(2)]);
var state_64032__$1 = state_64032;
var statearr_64055_65101 = state_64032__$1;
(statearr_64055_65101[(2)] = inst_64026);

(statearr_64055_65101[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64033 === (6))){
var inst_63985 = (state_64032[(14)]);
var inst_63989 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_63985,change);
var state_64032__$1 = state_64032;
var statearr_64058_65102 = state_64032__$1;
(statearr_64058_65102[(2)] = inst_63989);

(statearr_64058_65102[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64033 === (25))){
var state_64032__$1 = state_64032;
var statearr_64059_65103 = state_64032__$1;
(statearr_64059_65103[(2)] = null);

(statearr_64059_65103[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64033 === (17))){
var inst_63977 = (state_64032[(18)]);
var inst_63985 = (state_64032[(14)]);
var inst_64007 = (inst_63977.cljs$core$IFn$_invoke$arity$1 ? inst_63977.cljs$core$IFn$_invoke$arity$1(inst_63985) : inst_63977.call(null,inst_63985));
var inst_64008 = cljs.core.not(inst_64007);
var state_64032__$1 = state_64032;
var statearr_64062_65104 = state_64032__$1;
(statearr_64062_65104[(2)] = inst_64008);

(statearr_64062_65104[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64033 === (3))){
var inst_64030 = (state_64032[(2)]);
var state_64032__$1 = state_64032;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64032__$1,inst_64030);
} else {
if((state_val_64033 === (12))){
var state_64032__$1 = state_64032;
var statearr_64065_65105 = state_64032__$1;
(statearr_64065_65105[(2)] = null);

(statearr_64065_65105[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64033 === (2))){
var inst_63972 = (state_64032[(11)]);
var inst_63975 = (state_64032[(12)]);
var inst_63975__$1 = cljs.core.__destructure_map(inst_63972);
var inst_63976 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63975__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_63977 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63975__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_63978 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63975__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_64032__$1 = (function (){var statearr_64066 = state_64032;
(statearr_64066[(12)] = inst_63975__$1);

(statearr_64066[(15)] = inst_63976);

(statearr_64066[(18)] = inst_63977);

return statearr_64066;
})();
return cljs.core.async.ioc_alts_BANG_(state_64032__$1,(4),inst_63978);
} else {
if((state_val_64033 === (23))){
var inst_64017 = (state_64032[(2)]);
var state_64032__$1 = state_64032;
if(cljs.core.truth_(inst_64017)){
var statearr_64067_65107 = state_64032__$1;
(statearr_64067_65107[(1)] = (24));

} else {
var statearr_64069_65108 = state_64032__$1;
(statearr_64069_65108[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64033 === (19))){
var inst_64011 = (state_64032[(2)]);
var state_64032__$1 = state_64032;
var statearr_64072_65109 = state_64032__$1;
(statearr_64072_65109[(2)] = inst_64011);

(statearr_64072_65109[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64033 === (11))){
var inst_63985 = (state_64032[(14)]);
var inst_63995 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_63985);
var state_64032__$1 = state_64032;
var statearr_64074_65110 = state_64032__$1;
(statearr_64074_65110[(2)] = inst_63995);

(statearr_64074_65110[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64033 === (9))){
var inst_63976 = (state_64032[(15)]);
var inst_63985 = (state_64032[(14)]);
var inst_64002 = (state_64032[(19)]);
var inst_64002__$1 = (inst_63976.cljs$core$IFn$_invoke$arity$1 ? inst_63976.cljs$core$IFn$_invoke$arity$1(inst_63985) : inst_63976.call(null,inst_63985));
var state_64032__$1 = (function (){var statearr_64077 = state_64032;
(statearr_64077[(19)] = inst_64002__$1);

return statearr_64077;
})();
if(cljs.core.truth_(inst_64002__$1)){
var statearr_64079_65111 = state_64032__$1;
(statearr_64079_65111[(1)] = (14));

} else {
var statearr_64080_65112 = state_64032__$1;
(statearr_64080_65112[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64033 === (5))){
var inst_63986 = (state_64032[(13)]);
var state_64032__$1 = state_64032;
var statearr_64083_65113 = state_64032__$1;
(statearr_64083_65113[(2)] = inst_63986);

(statearr_64083_65113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64033 === (14))){
var inst_64002 = (state_64032[(19)]);
var state_64032__$1 = state_64032;
var statearr_64084_65114 = state_64032__$1;
(statearr_64084_65114[(2)] = inst_64002);

(statearr_64084_65114[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64033 === (26))){
var inst_64022 = (state_64032[(2)]);
var state_64032__$1 = state_64032;
var statearr_64087_65115 = state_64032__$1;
(statearr_64087_65115[(2)] = inst_64022);

(statearr_64087_65115[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64033 === (16))){
var inst_64013 = (state_64032[(2)]);
var state_64032__$1 = state_64032;
if(cljs.core.truth_(inst_64013)){
var statearr_64088_65116 = state_64032__$1;
(statearr_64088_65116[(1)] = (20));

} else {
var statearr_64089_65117 = state_64032__$1;
(statearr_64089_65117[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64033 === (10))){
var inst_64028 = (state_64032[(2)]);
var state_64032__$1 = state_64032;
var statearr_64090_65118 = state_64032__$1;
(statearr_64090_65118[(2)] = inst_64028);

(statearr_64090_65118[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64033 === (18))){
var inst_64005 = (state_64032[(16)]);
var state_64032__$1 = state_64032;
var statearr_64091_65119 = state_64032__$1;
(statearr_64091_65119[(2)] = inst_64005);

(statearr_64091_65119[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64033 === (8))){
var inst_63984 = (state_64032[(7)]);
var inst_63993 = (inst_63984 == null);
var state_64032__$1 = state_64032;
if(cljs.core.truth_(inst_63993)){
var statearr_64094_65120 = state_64032__$1;
(statearr_64094_65120[(1)] = (11));

} else {
var statearr_64095_65121 = state_64032__$1;
(statearr_64095_65121[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__48013__auto__ = null;
var cljs$core$async$mix_$_state_machine__48013__auto____0 = (function (){
var statearr_64097 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64097[(0)] = cljs$core$async$mix_$_state_machine__48013__auto__);

(statearr_64097[(1)] = (1));

return statearr_64097;
});
var cljs$core$async$mix_$_state_machine__48013__auto____1 = (function (state_64032){
while(true){
var ret_value__48014__auto__ = (function (){try{while(true){
var result__48015__auto__ = switch__48012__auto__(state_64032);
if(cljs.core.keyword_identical_QMARK_(result__48015__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48015__auto__;
}
break;
}
}catch (e64098){var ex__48016__auto__ = e64098;
var statearr_64099_65122 = state_64032;
(statearr_64099_65122[(2)] = ex__48016__auto__);


if(cljs.core.seq((state_64032[(4)]))){
var statearr_64100_65124 = state_64032;
(statearr_64100_65124[(1)] = cljs.core.first((state_64032[(4)])));

} else {
throw ex__48016__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65125 = state_64032;
state_64032 = G__65125;
continue;
} else {
return ret_value__48014__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__48013__auto__ = function(state_64032){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__48013__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__48013__auto____1.call(this,state_64032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__48013__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__48013__auto____0;
cljs$core$async$mix_$_state_machine__48013__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__48013__auto____1;
return cljs$core$async$mix_$_state_machine__48013__auto__;
})()
})();
var state__48254__auto__ = (function (){var statearr_64101 = f__48253__auto__();
(statearr_64101[(6)] = c__48252__auto___65088);

return statearr_64101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48254__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_65127 = (function (p,v,ch,close_QMARK_){
var x__5519__auto__ = (((p == null))?null:p);
var m__5520__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5520__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5518__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5518__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_65127(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_65128 = (function (p,v,ch){
var x__5519__auto__ = (((p == null))?null:p);
var m__5520__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5520__auto__.call(null,p,v,ch));
} else {
var m__5518__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5518__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_65128(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_65130 = (function() {
var G__65131 = null;
var G__65131__1 = (function (p){
var x__5519__auto__ = (((p == null))?null:p);
var m__5520__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5520__auto__.call(null,p));
} else {
var m__5518__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5518__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__65131__2 = (function (p,v){
var x__5519__auto__ = (((p == null))?null:p);
var m__5520__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5520__auto__.call(null,p,v));
} else {
var m__5518__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5518__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__65131 = function(p,v){
switch(arguments.length){
case 1:
return G__65131__1.call(this,p);
case 2:
return G__65131__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__65131.cljs$core$IFn$_invoke$arity$1 = G__65131__1;
G__65131.cljs$core$IFn$_invoke$arity$2 = G__65131__2;
return G__65131;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__64125 = arguments.length;
switch (G__64125) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_65130(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_65130(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async64138 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta64139){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta64139 = meta64139;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async64138.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64140,meta64139__$1){
var self__ = this;
var _64140__$1 = this;
return (new cljs.core.async.t_cljs$core$async64138(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta64139__$1));
}));

(cljs.core.async.t_cljs$core$async64138.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64140){
var self__ = this;
var _64140__$1 = this;
return self__.meta64139;
}));

(cljs.core.async.t_cljs$core$async64138.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64138.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async64138.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64138.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async64138.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async64138.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async64138.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async64138.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta64139","meta64139",202523764,null)], null);
}));

(cljs.core.async.t_cljs$core$async64138.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async64138.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async64138");

(cljs.core.async.t_cljs$core$async64138.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async64138");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async64138.
 */
cljs.core.async.__GT_t_cljs$core$async64138 = (function cljs$core$async$__GT_t_cljs$core$async64138(ch,topic_fn,buf_fn,mults,ensure_mult,meta64139){
return (new cljs.core.async.t_cljs$core$async64138(ch,topic_fn,buf_fn,mults,ensure_mult,meta64139));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__64137 = arguments.length;
switch (G__64137) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5162__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__64127_SHARP_){
if(cljs.core.truth_((p1__64127_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__64127_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__64127_SHARP_.call(null,topic)))){
return p1__64127_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__64127_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async64138(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__48252__auto___65141 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48253__auto__ = (function (){var switch__48012__auto__ = (function (state_64216){
var state_val_64217 = (state_64216[(1)]);
if((state_val_64217 === (7))){
var inst_64212 = (state_64216[(2)]);
var state_64216__$1 = state_64216;
var statearr_64218_65145 = state_64216__$1;
(statearr_64218_65145[(2)] = inst_64212);

(statearr_64218_65145[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64217 === (20))){
var state_64216__$1 = state_64216;
var statearr_64219_65146 = state_64216__$1;
(statearr_64219_65146[(2)] = null);

(statearr_64219_65146[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64217 === (1))){
var state_64216__$1 = state_64216;
var statearr_64220_65147 = state_64216__$1;
(statearr_64220_65147[(2)] = null);

(statearr_64220_65147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64217 === (24))){
var inst_64195 = (state_64216[(7)]);
var inst_64204 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_64195);
var state_64216__$1 = state_64216;
var statearr_64221_65148 = state_64216__$1;
(statearr_64221_65148[(2)] = inst_64204);

(statearr_64221_65148[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64217 === (4))){
var inst_64144 = (state_64216[(8)]);
var inst_64144__$1 = (state_64216[(2)]);
var inst_64146 = (inst_64144__$1 == null);
var state_64216__$1 = (function (){var statearr_64222 = state_64216;
(statearr_64222[(8)] = inst_64144__$1);

return statearr_64222;
})();
if(cljs.core.truth_(inst_64146)){
var statearr_64223_65149 = state_64216__$1;
(statearr_64223_65149[(1)] = (5));

} else {
var statearr_64224_65150 = state_64216__$1;
(statearr_64224_65150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64217 === (15))){
var inst_64189 = (state_64216[(2)]);
var state_64216__$1 = state_64216;
var statearr_64225_65151 = state_64216__$1;
(statearr_64225_65151[(2)] = inst_64189);

(statearr_64225_65151[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64217 === (21))){
var inst_64209 = (state_64216[(2)]);
var state_64216__$1 = (function (){var statearr_64226 = state_64216;
(statearr_64226[(9)] = inst_64209);

return statearr_64226;
})();
var statearr_64227_65152 = state_64216__$1;
(statearr_64227_65152[(2)] = null);

(statearr_64227_65152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64217 === (13))){
var inst_64169 = (state_64216[(10)]);
var inst_64171 = cljs.core.chunked_seq_QMARK_(inst_64169);
var state_64216__$1 = state_64216;
if(inst_64171){
var statearr_64228_65153 = state_64216__$1;
(statearr_64228_65153[(1)] = (16));

} else {
var statearr_64229_65154 = state_64216__$1;
(statearr_64229_65154[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64217 === (22))){
var inst_64201 = (state_64216[(2)]);
var state_64216__$1 = state_64216;
if(cljs.core.truth_(inst_64201)){
var statearr_64230_65155 = state_64216__$1;
(statearr_64230_65155[(1)] = (23));

} else {
var statearr_64231_65156 = state_64216__$1;
(statearr_64231_65156[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64217 === (6))){
var inst_64144 = (state_64216[(8)]);
var inst_64195 = (state_64216[(7)]);
var inst_64197 = (state_64216[(11)]);
var inst_64195__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_64144) : topic_fn.call(null,inst_64144));
var inst_64196 = cljs.core.deref(mults);
var inst_64197__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_64196,inst_64195__$1);
var state_64216__$1 = (function (){var statearr_64232 = state_64216;
(statearr_64232[(7)] = inst_64195__$1);

(statearr_64232[(11)] = inst_64197__$1);

return statearr_64232;
})();
if(cljs.core.truth_(inst_64197__$1)){
var statearr_64233_65157 = state_64216__$1;
(statearr_64233_65157[(1)] = (19));

} else {
var statearr_64234_65158 = state_64216__$1;
(statearr_64234_65158[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64217 === (25))){
var inst_64206 = (state_64216[(2)]);
var state_64216__$1 = state_64216;
var statearr_64235_65159 = state_64216__$1;
(statearr_64235_65159[(2)] = inst_64206);

(statearr_64235_65159[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64217 === (17))){
var inst_64169 = (state_64216[(10)]);
var inst_64178 = cljs.core.first(inst_64169);
var inst_64180 = cljs.core.async.muxch_STAR_(inst_64178);
var inst_64181 = cljs.core.async.close_BANG_(inst_64180);
var inst_64182 = cljs.core.next(inst_64169);
var inst_64155 = inst_64182;
var inst_64156 = null;
var inst_64157 = (0);
var inst_64158 = (0);
var state_64216__$1 = (function (){var statearr_64236 = state_64216;
(statearr_64236[(12)] = inst_64181);

(statearr_64236[(13)] = inst_64155);

(statearr_64236[(14)] = inst_64156);

(statearr_64236[(15)] = inst_64157);

(statearr_64236[(16)] = inst_64158);

return statearr_64236;
})();
var statearr_64237_65160 = state_64216__$1;
(statearr_64237_65160[(2)] = null);

(statearr_64237_65160[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64217 === (3))){
var inst_64214 = (state_64216[(2)]);
var state_64216__$1 = state_64216;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64216__$1,inst_64214);
} else {
if((state_val_64217 === (12))){
var inst_64191 = (state_64216[(2)]);
var state_64216__$1 = state_64216;
var statearr_64238_65161 = state_64216__$1;
(statearr_64238_65161[(2)] = inst_64191);

(statearr_64238_65161[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64217 === (2))){
var state_64216__$1 = state_64216;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64216__$1,(4),ch);
} else {
if((state_val_64217 === (23))){
var state_64216__$1 = state_64216;
var statearr_64239_65162 = state_64216__$1;
(statearr_64239_65162[(2)] = null);

(statearr_64239_65162[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64217 === (19))){
var inst_64197 = (state_64216[(11)]);
var inst_64144 = (state_64216[(8)]);
var inst_64199 = cljs.core.async.muxch_STAR_(inst_64197);
var state_64216__$1 = state_64216;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64216__$1,(22),inst_64199,inst_64144);
} else {
if((state_val_64217 === (11))){
var inst_64155 = (state_64216[(13)]);
var inst_64169 = (state_64216[(10)]);
var inst_64169__$1 = cljs.core.seq(inst_64155);
var state_64216__$1 = (function (){var statearr_64240 = state_64216;
(statearr_64240[(10)] = inst_64169__$1);

return statearr_64240;
})();
if(inst_64169__$1){
var statearr_64241_65163 = state_64216__$1;
(statearr_64241_65163[(1)] = (13));

} else {
var statearr_64242_65164 = state_64216__$1;
(statearr_64242_65164[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64217 === (9))){
var inst_64193 = (state_64216[(2)]);
var state_64216__$1 = state_64216;
var statearr_64243_65165 = state_64216__$1;
(statearr_64243_65165[(2)] = inst_64193);

(statearr_64243_65165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64217 === (5))){
var inst_64152 = cljs.core.deref(mults);
var inst_64153 = cljs.core.vals(inst_64152);
var inst_64154 = cljs.core.seq(inst_64153);
var inst_64155 = inst_64154;
var inst_64156 = null;
var inst_64157 = (0);
var inst_64158 = (0);
var state_64216__$1 = (function (){var statearr_64244 = state_64216;
(statearr_64244[(13)] = inst_64155);

(statearr_64244[(14)] = inst_64156);

(statearr_64244[(15)] = inst_64157);

(statearr_64244[(16)] = inst_64158);

return statearr_64244;
})();
var statearr_64245_65166 = state_64216__$1;
(statearr_64245_65166[(2)] = null);

(statearr_64245_65166[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64217 === (14))){
var state_64216__$1 = state_64216;
var statearr_64249_65167 = state_64216__$1;
(statearr_64249_65167[(2)] = null);

(statearr_64249_65167[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64217 === (16))){
var inst_64169 = (state_64216[(10)]);
var inst_64173 = cljs.core.chunk_first(inst_64169);
var inst_64174 = cljs.core.chunk_rest(inst_64169);
var inst_64175 = cljs.core.count(inst_64173);
var inst_64155 = inst_64174;
var inst_64156 = inst_64173;
var inst_64157 = inst_64175;
var inst_64158 = (0);
var state_64216__$1 = (function (){var statearr_64250 = state_64216;
(statearr_64250[(13)] = inst_64155);

(statearr_64250[(14)] = inst_64156);

(statearr_64250[(15)] = inst_64157);

(statearr_64250[(16)] = inst_64158);

return statearr_64250;
})();
var statearr_64251_65168 = state_64216__$1;
(statearr_64251_65168[(2)] = null);

(statearr_64251_65168[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64217 === (10))){
var inst_64156 = (state_64216[(14)]);
var inst_64158 = (state_64216[(16)]);
var inst_64155 = (state_64216[(13)]);
var inst_64157 = (state_64216[(15)]);
var inst_64163 = cljs.core._nth(inst_64156,inst_64158);
var inst_64164 = cljs.core.async.muxch_STAR_(inst_64163);
var inst_64165 = cljs.core.async.close_BANG_(inst_64164);
var inst_64166 = (inst_64158 + (1));
var tmp64246 = inst_64155;
var tmp64247 = inst_64157;
var tmp64248 = inst_64156;
var inst_64155__$1 = tmp64246;
var inst_64156__$1 = tmp64248;
var inst_64157__$1 = tmp64247;
var inst_64158__$1 = inst_64166;
var state_64216__$1 = (function (){var statearr_64252 = state_64216;
(statearr_64252[(17)] = inst_64165);

(statearr_64252[(13)] = inst_64155__$1);

(statearr_64252[(14)] = inst_64156__$1);

(statearr_64252[(15)] = inst_64157__$1);

(statearr_64252[(16)] = inst_64158__$1);

return statearr_64252;
})();
var statearr_64253_65169 = state_64216__$1;
(statearr_64253_65169[(2)] = null);

(statearr_64253_65169[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64217 === (18))){
var inst_64186 = (state_64216[(2)]);
var state_64216__$1 = state_64216;
var statearr_64254_65171 = state_64216__$1;
(statearr_64254_65171[(2)] = inst_64186);

(statearr_64254_65171[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64217 === (8))){
var inst_64158 = (state_64216[(16)]);
var inst_64157 = (state_64216[(15)]);
var inst_64160 = (inst_64158 < inst_64157);
var inst_64161 = inst_64160;
var state_64216__$1 = state_64216;
if(cljs.core.truth_(inst_64161)){
var statearr_64255_65172 = state_64216__$1;
(statearr_64255_65172[(1)] = (10));

} else {
var statearr_64256_65173 = state_64216__$1;
(statearr_64256_65173[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__48013__auto__ = null;
var cljs$core$async$state_machine__48013__auto____0 = (function (){
var statearr_64257 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64257[(0)] = cljs$core$async$state_machine__48013__auto__);

(statearr_64257[(1)] = (1));

return statearr_64257;
});
var cljs$core$async$state_machine__48013__auto____1 = (function (state_64216){
while(true){
var ret_value__48014__auto__ = (function (){try{while(true){
var result__48015__auto__ = switch__48012__auto__(state_64216);
if(cljs.core.keyword_identical_QMARK_(result__48015__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48015__auto__;
}
break;
}
}catch (e64258){var ex__48016__auto__ = e64258;
var statearr_64259_65177 = state_64216;
(statearr_64259_65177[(2)] = ex__48016__auto__);


if(cljs.core.seq((state_64216[(4)]))){
var statearr_64260_65178 = state_64216;
(statearr_64260_65178[(1)] = cljs.core.first((state_64216[(4)])));

} else {
throw ex__48016__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65179 = state_64216;
state_64216 = G__65179;
continue;
} else {
return ret_value__48014__auto__;
}
break;
}
});
cljs$core$async$state_machine__48013__auto__ = function(state_64216){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48013__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48013__auto____1.call(this,state_64216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48013__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48013__auto____0;
cljs$core$async$state_machine__48013__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48013__auto____1;
return cljs$core$async$state_machine__48013__auto__;
})()
})();
var state__48254__auto__ = (function (){var statearr_64261 = f__48253__auto__();
(statearr_64261[(6)] = c__48252__auto___65141);

return statearr_64261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48254__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__64263 = arguments.length;
switch (G__64263) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__64265 = arguments.length;
switch (G__64265) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__64267 = arguments.length;
switch (G__64267) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__48252__auto___65183 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48253__auto__ = (function (){var switch__48012__auto__ = (function (state_64310){
var state_val_64311 = (state_64310[(1)]);
if((state_val_64311 === (7))){
var state_64310__$1 = state_64310;
var statearr_64312_65184 = state_64310__$1;
(statearr_64312_65184[(2)] = null);

(statearr_64312_65184[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64311 === (1))){
var state_64310__$1 = state_64310;
var statearr_64313_65185 = state_64310__$1;
(statearr_64313_65185[(2)] = null);

(statearr_64313_65185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64311 === (4))){
var inst_64271 = (state_64310[(7)]);
var inst_64270 = (state_64310[(8)]);
var inst_64273 = (inst_64271 < inst_64270);
var state_64310__$1 = state_64310;
if(cljs.core.truth_(inst_64273)){
var statearr_64314_65187 = state_64310__$1;
(statearr_64314_65187[(1)] = (6));

} else {
var statearr_64315_65188 = state_64310__$1;
(statearr_64315_65188[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64311 === (15))){
var inst_64296 = (state_64310[(9)]);
var inst_64301 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_64296);
var state_64310__$1 = state_64310;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64310__$1,(17),out,inst_64301);
} else {
if((state_val_64311 === (13))){
var inst_64296 = (state_64310[(9)]);
var inst_64296__$1 = (state_64310[(2)]);
var inst_64297 = cljs.core.some(cljs.core.nil_QMARK_,inst_64296__$1);
var state_64310__$1 = (function (){var statearr_64316 = state_64310;
(statearr_64316[(9)] = inst_64296__$1);

return statearr_64316;
})();
if(cljs.core.truth_(inst_64297)){
var statearr_64317_65189 = state_64310__$1;
(statearr_64317_65189[(1)] = (14));

} else {
var statearr_64318_65190 = state_64310__$1;
(statearr_64318_65190[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64311 === (6))){
var state_64310__$1 = state_64310;
var statearr_64319_65191 = state_64310__$1;
(statearr_64319_65191[(2)] = null);

(statearr_64319_65191[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64311 === (17))){
var inst_64303 = (state_64310[(2)]);
var state_64310__$1 = (function (){var statearr_64321 = state_64310;
(statearr_64321[(10)] = inst_64303);

return statearr_64321;
})();
var statearr_64322_65192 = state_64310__$1;
(statearr_64322_65192[(2)] = null);

(statearr_64322_65192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64311 === (3))){
var inst_64308 = (state_64310[(2)]);
var state_64310__$1 = state_64310;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64310__$1,inst_64308);
} else {
if((state_val_64311 === (12))){
var _ = (function (){var statearr_64323 = state_64310;
(statearr_64323[(4)] = cljs.core.rest((state_64310[(4)])));

return statearr_64323;
})();
var state_64310__$1 = state_64310;
var ex64320 = (state_64310__$1[(2)]);
var statearr_64324_65194 = state_64310__$1;
(statearr_64324_65194[(5)] = ex64320);


if((ex64320 instanceof Object)){
var statearr_64325_65195 = state_64310__$1;
(statearr_64325_65195[(1)] = (11));

(statearr_64325_65195[(5)] = null);

} else {
throw ex64320;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64311 === (2))){
var inst_64269 = cljs.core.reset_BANG_(dctr,cnt);
var inst_64270 = cnt;
var inst_64271 = (0);
var state_64310__$1 = (function (){var statearr_64326 = state_64310;
(statearr_64326[(11)] = inst_64269);

(statearr_64326[(8)] = inst_64270);

(statearr_64326[(7)] = inst_64271);

return statearr_64326;
})();
var statearr_64327_65196 = state_64310__$1;
(statearr_64327_65196[(2)] = null);

(statearr_64327_65196[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64311 === (11))){
var inst_64275 = (state_64310[(2)]);
var inst_64276 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_64310__$1 = (function (){var statearr_64328 = state_64310;
(statearr_64328[(12)] = inst_64275);

return statearr_64328;
})();
var statearr_64329_65197 = state_64310__$1;
(statearr_64329_65197[(2)] = inst_64276);

(statearr_64329_65197[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64311 === (9))){
var inst_64271 = (state_64310[(7)]);
var _ = (function (){var statearr_64330 = state_64310;
(statearr_64330[(4)] = cljs.core.cons((12),(state_64310[(4)])));

return statearr_64330;
})();
var inst_64282 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_64271) : chs__$1.call(null,inst_64271));
var inst_64283 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_64271) : done.call(null,inst_64271));
var inst_64284 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_64282,inst_64283);
var ___$1 = (function (){var statearr_64331 = state_64310;
(statearr_64331[(4)] = cljs.core.rest((state_64310[(4)])));

return statearr_64331;
})();
var state_64310__$1 = state_64310;
var statearr_64332_65198 = state_64310__$1;
(statearr_64332_65198[(2)] = inst_64284);

(statearr_64332_65198[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64311 === (5))){
var inst_64294 = (state_64310[(2)]);
var state_64310__$1 = (function (){var statearr_64333 = state_64310;
(statearr_64333[(13)] = inst_64294);

return statearr_64333;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64310__$1,(13),dchan);
} else {
if((state_val_64311 === (14))){
var inst_64299 = cljs.core.async.close_BANG_(out);
var state_64310__$1 = state_64310;
var statearr_64334_65199 = state_64310__$1;
(statearr_64334_65199[(2)] = inst_64299);

(statearr_64334_65199[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64311 === (16))){
var inst_64306 = (state_64310[(2)]);
var state_64310__$1 = state_64310;
var statearr_64335_65200 = state_64310__$1;
(statearr_64335_65200[(2)] = inst_64306);

(statearr_64335_65200[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64311 === (10))){
var inst_64271 = (state_64310[(7)]);
var inst_64287 = (state_64310[(2)]);
var inst_64288 = (inst_64271 + (1));
var inst_64271__$1 = inst_64288;
var state_64310__$1 = (function (){var statearr_64336 = state_64310;
(statearr_64336[(14)] = inst_64287);

(statearr_64336[(7)] = inst_64271__$1);

return statearr_64336;
})();
var statearr_64337_65201 = state_64310__$1;
(statearr_64337_65201[(2)] = null);

(statearr_64337_65201[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64311 === (8))){
var inst_64292 = (state_64310[(2)]);
var state_64310__$1 = state_64310;
var statearr_64338_65202 = state_64310__$1;
(statearr_64338_65202[(2)] = inst_64292);

(statearr_64338_65202[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__48013__auto__ = null;
var cljs$core$async$state_machine__48013__auto____0 = (function (){
var statearr_64339 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64339[(0)] = cljs$core$async$state_machine__48013__auto__);

(statearr_64339[(1)] = (1));

return statearr_64339;
});
var cljs$core$async$state_machine__48013__auto____1 = (function (state_64310){
while(true){
var ret_value__48014__auto__ = (function (){try{while(true){
var result__48015__auto__ = switch__48012__auto__(state_64310);
if(cljs.core.keyword_identical_QMARK_(result__48015__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48015__auto__;
}
break;
}
}catch (e64340){var ex__48016__auto__ = e64340;
var statearr_64341_65203 = state_64310;
(statearr_64341_65203[(2)] = ex__48016__auto__);


if(cljs.core.seq((state_64310[(4)]))){
var statearr_64342_65204 = state_64310;
(statearr_64342_65204[(1)] = cljs.core.first((state_64310[(4)])));

} else {
throw ex__48016__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65205 = state_64310;
state_64310 = G__65205;
continue;
} else {
return ret_value__48014__auto__;
}
break;
}
});
cljs$core$async$state_machine__48013__auto__ = function(state_64310){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48013__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48013__auto____1.call(this,state_64310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48013__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48013__auto____0;
cljs$core$async$state_machine__48013__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48013__auto____1;
return cljs$core$async$state_machine__48013__auto__;
})()
})();
var state__48254__auto__ = (function (){var statearr_64343 = f__48253__auto__();
(statearr_64343[(6)] = c__48252__auto___65183);

return statearr_64343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48254__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__64346 = arguments.length;
switch (G__64346) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__48252__auto___65207 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48253__auto__ = (function (){var switch__48012__auto__ = (function (state_64378){
var state_val_64379 = (state_64378[(1)]);
if((state_val_64379 === (7))){
var inst_64357 = (state_64378[(7)]);
var inst_64358 = (state_64378[(8)]);
var inst_64357__$1 = (state_64378[(2)]);
var inst_64358__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_64357__$1,(0),null);
var inst_64359 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_64357__$1,(1),null);
var inst_64360 = (inst_64358__$1 == null);
var state_64378__$1 = (function (){var statearr_64380 = state_64378;
(statearr_64380[(7)] = inst_64357__$1);

(statearr_64380[(8)] = inst_64358__$1);

(statearr_64380[(9)] = inst_64359);

return statearr_64380;
})();
if(cljs.core.truth_(inst_64360)){
var statearr_64381_65208 = state_64378__$1;
(statearr_64381_65208[(1)] = (8));

} else {
var statearr_64382_65209 = state_64378__$1;
(statearr_64382_65209[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64379 === (1))){
var inst_64347 = cljs.core.vec(chs);
var inst_64348 = inst_64347;
var state_64378__$1 = (function (){var statearr_64383 = state_64378;
(statearr_64383[(10)] = inst_64348);

return statearr_64383;
})();
var statearr_64384_65210 = state_64378__$1;
(statearr_64384_65210[(2)] = null);

(statearr_64384_65210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64379 === (4))){
var inst_64348 = (state_64378[(10)]);
var state_64378__$1 = state_64378;
return cljs.core.async.ioc_alts_BANG_(state_64378__$1,(7),inst_64348);
} else {
if((state_val_64379 === (6))){
var inst_64374 = (state_64378[(2)]);
var state_64378__$1 = state_64378;
var statearr_64385_65211 = state_64378__$1;
(statearr_64385_65211[(2)] = inst_64374);

(statearr_64385_65211[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64379 === (3))){
var inst_64376 = (state_64378[(2)]);
var state_64378__$1 = state_64378;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64378__$1,inst_64376);
} else {
if((state_val_64379 === (2))){
var inst_64348 = (state_64378[(10)]);
var inst_64350 = cljs.core.count(inst_64348);
var inst_64351 = (inst_64350 > (0));
var state_64378__$1 = state_64378;
if(cljs.core.truth_(inst_64351)){
var statearr_64387_65212 = state_64378__$1;
(statearr_64387_65212[(1)] = (4));

} else {
var statearr_64388_65213 = state_64378__$1;
(statearr_64388_65213[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64379 === (11))){
var inst_64348 = (state_64378[(10)]);
var inst_64367 = (state_64378[(2)]);
var tmp64386 = inst_64348;
var inst_64348__$1 = tmp64386;
var state_64378__$1 = (function (){var statearr_64389 = state_64378;
(statearr_64389[(11)] = inst_64367);

(statearr_64389[(10)] = inst_64348__$1);

return statearr_64389;
})();
var statearr_64390_65214 = state_64378__$1;
(statearr_64390_65214[(2)] = null);

(statearr_64390_65214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64379 === (9))){
var inst_64358 = (state_64378[(8)]);
var state_64378__$1 = state_64378;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64378__$1,(11),out,inst_64358);
} else {
if((state_val_64379 === (5))){
var inst_64372 = cljs.core.async.close_BANG_(out);
var state_64378__$1 = state_64378;
var statearr_64391_65215 = state_64378__$1;
(statearr_64391_65215[(2)] = inst_64372);

(statearr_64391_65215[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64379 === (10))){
var inst_64370 = (state_64378[(2)]);
var state_64378__$1 = state_64378;
var statearr_64392_65216 = state_64378__$1;
(statearr_64392_65216[(2)] = inst_64370);

(statearr_64392_65216[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64379 === (8))){
var inst_64348 = (state_64378[(10)]);
var inst_64357 = (state_64378[(7)]);
var inst_64358 = (state_64378[(8)]);
var inst_64359 = (state_64378[(9)]);
var inst_64362 = (function (){var cs = inst_64348;
var vec__64353 = inst_64357;
var v = inst_64358;
var c = inst_64359;
return (function (p1__64344_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__64344_SHARP_);
});
})();
var inst_64363 = cljs.core.filterv(inst_64362,inst_64348);
var inst_64348__$1 = inst_64363;
var state_64378__$1 = (function (){var statearr_64393 = state_64378;
(statearr_64393[(10)] = inst_64348__$1);

return statearr_64393;
})();
var statearr_64394_65217 = state_64378__$1;
(statearr_64394_65217[(2)] = null);

(statearr_64394_65217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__48013__auto__ = null;
var cljs$core$async$state_machine__48013__auto____0 = (function (){
var statearr_64395 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64395[(0)] = cljs$core$async$state_machine__48013__auto__);

(statearr_64395[(1)] = (1));

return statearr_64395;
});
var cljs$core$async$state_machine__48013__auto____1 = (function (state_64378){
while(true){
var ret_value__48014__auto__ = (function (){try{while(true){
var result__48015__auto__ = switch__48012__auto__(state_64378);
if(cljs.core.keyword_identical_QMARK_(result__48015__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48015__auto__;
}
break;
}
}catch (e64396){var ex__48016__auto__ = e64396;
var statearr_64397_65222 = state_64378;
(statearr_64397_65222[(2)] = ex__48016__auto__);


if(cljs.core.seq((state_64378[(4)]))){
var statearr_64398_65223 = state_64378;
(statearr_64398_65223[(1)] = cljs.core.first((state_64378[(4)])));

} else {
throw ex__48016__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65225 = state_64378;
state_64378 = G__65225;
continue;
} else {
return ret_value__48014__auto__;
}
break;
}
});
cljs$core$async$state_machine__48013__auto__ = function(state_64378){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48013__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48013__auto____1.call(this,state_64378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48013__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48013__auto____0;
cljs$core$async$state_machine__48013__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48013__auto____1;
return cljs$core$async$state_machine__48013__auto__;
})()
})();
var state__48254__auto__ = (function (){var statearr_64399 = f__48253__auto__();
(statearr_64399[(6)] = c__48252__auto___65207);

return statearr_64399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48254__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__64401 = arguments.length;
switch (G__64401) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__48252__auto___65227 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48253__auto__ = (function (){var switch__48012__auto__ = (function (state_64425){
var state_val_64426 = (state_64425[(1)]);
if((state_val_64426 === (7))){
var inst_64407 = (state_64425[(7)]);
var inst_64407__$1 = (state_64425[(2)]);
var inst_64408 = (inst_64407__$1 == null);
var inst_64409 = cljs.core.not(inst_64408);
var state_64425__$1 = (function (){var statearr_64427 = state_64425;
(statearr_64427[(7)] = inst_64407__$1);

return statearr_64427;
})();
if(inst_64409){
var statearr_64428_65228 = state_64425__$1;
(statearr_64428_65228[(1)] = (8));

} else {
var statearr_64429_65229 = state_64425__$1;
(statearr_64429_65229[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64426 === (1))){
var inst_64402 = (0);
var state_64425__$1 = (function (){var statearr_64430 = state_64425;
(statearr_64430[(8)] = inst_64402);

return statearr_64430;
})();
var statearr_64431_65231 = state_64425__$1;
(statearr_64431_65231[(2)] = null);

(statearr_64431_65231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64426 === (4))){
var state_64425__$1 = state_64425;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64425__$1,(7),ch);
} else {
if((state_val_64426 === (6))){
var inst_64420 = (state_64425[(2)]);
var state_64425__$1 = state_64425;
var statearr_64432_65232 = state_64425__$1;
(statearr_64432_65232[(2)] = inst_64420);

(statearr_64432_65232[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64426 === (3))){
var inst_64422 = (state_64425[(2)]);
var inst_64423 = cljs.core.async.close_BANG_(out);
var state_64425__$1 = (function (){var statearr_64433 = state_64425;
(statearr_64433[(9)] = inst_64422);

return statearr_64433;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_64425__$1,inst_64423);
} else {
if((state_val_64426 === (2))){
var inst_64402 = (state_64425[(8)]);
var inst_64404 = (inst_64402 < n);
var state_64425__$1 = state_64425;
if(cljs.core.truth_(inst_64404)){
var statearr_64434_65233 = state_64425__$1;
(statearr_64434_65233[(1)] = (4));

} else {
var statearr_64435_65234 = state_64425__$1;
(statearr_64435_65234[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64426 === (11))){
var inst_64402 = (state_64425[(8)]);
var inst_64412 = (state_64425[(2)]);
var inst_64413 = (inst_64402 + (1));
var inst_64402__$1 = inst_64413;
var state_64425__$1 = (function (){var statearr_64436 = state_64425;
(statearr_64436[(10)] = inst_64412);

(statearr_64436[(8)] = inst_64402__$1);

return statearr_64436;
})();
var statearr_64437_65236 = state_64425__$1;
(statearr_64437_65236[(2)] = null);

(statearr_64437_65236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64426 === (9))){
var state_64425__$1 = state_64425;
var statearr_64438_65237 = state_64425__$1;
(statearr_64438_65237[(2)] = null);

(statearr_64438_65237[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64426 === (5))){
var state_64425__$1 = state_64425;
var statearr_64439_65238 = state_64425__$1;
(statearr_64439_65238[(2)] = null);

(statearr_64439_65238[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64426 === (10))){
var inst_64417 = (state_64425[(2)]);
var state_64425__$1 = state_64425;
var statearr_64440_65239 = state_64425__$1;
(statearr_64440_65239[(2)] = inst_64417);

(statearr_64440_65239[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64426 === (8))){
var inst_64407 = (state_64425[(7)]);
var state_64425__$1 = state_64425;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64425__$1,(11),out,inst_64407);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__48013__auto__ = null;
var cljs$core$async$state_machine__48013__auto____0 = (function (){
var statearr_64441 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_64441[(0)] = cljs$core$async$state_machine__48013__auto__);

(statearr_64441[(1)] = (1));

return statearr_64441;
});
var cljs$core$async$state_machine__48013__auto____1 = (function (state_64425){
while(true){
var ret_value__48014__auto__ = (function (){try{while(true){
var result__48015__auto__ = switch__48012__auto__(state_64425);
if(cljs.core.keyword_identical_QMARK_(result__48015__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48015__auto__;
}
break;
}
}catch (e64442){var ex__48016__auto__ = e64442;
var statearr_64443_65240 = state_64425;
(statearr_64443_65240[(2)] = ex__48016__auto__);


if(cljs.core.seq((state_64425[(4)]))){
var statearr_64444_65241 = state_64425;
(statearr_64444_65241[(1)] = cljs.core.first((state_64425[(4)])));

} else {
throw ex__48016__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65242 = state_64425;
state_64425 = G__65242;
continue;
} else {
return ret_value__48014__auto__;
}
break;
}
});
cljs$core$async$state_machine__48013__auto__ = function(state_64425){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48013__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48013__auto____1.call(this,state_64425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48013__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48013__auto____0;
cljs$core$async$state_machine__48013__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48013__auto____1;
return cljs$core$async$state_machine__48013__auto__;
})()
})();
var state__48254__auto__ = (function (){var statearr_64445 = f__48253__auto__();
(statearr_64445[(6)] = c__48252__auto___65227);

return statearr_64445;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48254__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async64450 = (function (f,ch,meta64448,_,fn1,meta64451){
this.f = f;
this.ch = ch;
this.meta64448 = meta64448;
this._ = _;
this.fn1 = fn1;
this.meta64451 = meta64451;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async64450.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64452,meta64451__$1){
var self__ = this;
var _64452__$1 = this;
return (new cljs.core.async.t_cljs$core$async64450(self__.f,self__.ch,self__.meta64448,self__._,self__.fn1,meta64451__$1));
}));

(cljs.core.async.t_cljs$core$async64450.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64452){
var self__ = this;
var _64452__$1 = this;
return self__.meta64451;
}));

(cljs.core.async.t_cljs$core$async64450.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64450.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async64450.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async64450.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__64446_SHARP_){
var G__64453 = (((p1__64446_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__64446_SHARP_) : self__.f.call(null,p1__64446_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__64453) : f1.call(null,G__64453));
});
}));

(cljs.core.async.t_cljs$core$async64450.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta64448","meta64448",247078964,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async64447","cljs.core.async/t_cljs$core$async64447",1219709102,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta64451","meta64451",697098056,null)], null);
}));

(cljs.core.async.t_cljs$core$async64450.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async64450.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async64450");

(cljs.core.async.t_cljs$core$async64450.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async64450");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async64450.
 */
cljs.core.async.__GT_t_cljs$core$async64450 = (function cljs$core$async$__GT_t_cljs$core$async64450(f,ch,meta64448,_,fn1,meta64451){
return (new cljs.core.async.t_cljs$core$async64450(f,ch,meta64448,_,fn1,meta64451));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async64447 = (function (f,ch,meta64448){
this.f = f;
this.ch = ch;
this.meta64448 = meta64448;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async64447.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64449,meta64448__$1){
var self__ = this;
var _64449__$1 = this;
return (new cljs.core.async.t_cljs$core$async64447(self__.f,self__.ch,meta64448__$1));
}));

(cljs.core.async.t_cljs$core$async64447.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64449){
var self__ = this;
var _64449__$1 = this;
return self__.meta64448;
}));

(cljs.core.async.t_cljs$core$async64447.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64447.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async64447.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async64447.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64447.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async64450(self__.f,self__.ch,self__.meta64448,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5160__auto__ = ret;
if(cljs.core.truth_(and__5160__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5160__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__64454 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__64454) : self__.f.call(null,G__64454));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async64447.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64447.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async64447.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta64448","meta64448",247078964,null)], null);
}));

(cljs.core.async.t_cljs$core$async64447.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async64447.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async64447");

(cljs.core.async.t_cljs$core$async64447.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async64447");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async64447.
 */
cljs.core.async.__GT_t_cljs$core$async64447 = (function cljs$core$async$__GT_t_cljs$core$async64447(f,ch,meta64448){
return (new cljs.core.async.t_cljs$core$async64447(f,ch,meta64448));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async64447(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async64455 = (function (f,ch,meta64456){
this.f = f;
this.ch = ch;
this.meta64456 = meta64456;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async64455.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64457,meta64456__$1){
var self__ = this;
var _64457__$1 = this;
return (new cljs.core.async.t_cljs$core$async64455(self__.f,self__.ch,meta64456__$1));
}));

(cljs.core.async.t_cljs$core$async64455.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64457){
var self__ = this;
var _64457__$1 = this;
return self__.meta64456;
}));

(cljs.core.async.t_cljs$core$async64455.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64455.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async64455.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64455.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async64455.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64455.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async64455.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta64456","meta64456",-462142585,null)], null);
}));

(cljs.core.async.t_cljs$core$async64455.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async64455.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async64455");

(cljs.core.async.t_cljs$core$async64455.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async64455");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async64455.
 */
cljs.core.async.__GT_t_cljs$core$async64455 = (function cljs$core$async$__GT_t_cljs$core$async64455(f,ch,meta64456){
return (new cljs.core.async.t_cljs$core$async64455(f,ch,meta64456));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async64455(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async64458 = (function (p,ch,meta64459){
this.p = p;
this.ch = ch;
this.meta64459 = meta64459;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async64458.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64460,meta64459__$1){
var self__ = this;
var _64460__$1 = this;
return (new cljs.core.async.t_cljs$core$async64458(self__.p,self__.ch,meta64459__$1));
}));

(cljs.core.async.t_cljs$core$async64458.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64460){
var self__ = this;
var _64460__$1 = this;
return self__.meta64459;
}));

(cljs.core.async.t_cljs$core$async64458.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64458.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async64458.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async64458.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64458.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async64458.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64458.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async64458.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta64459","meta64459",-1589842785,null)], null);
}));

(cljs.core.async.t_cljs$core$async64458.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async64458.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async64458");

(cljs.core.async.t_cljs$core$async64458.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async64458");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async64458.
 */
cljs.core.async.__GT_t_cljs$core$async64458 = (function cljs$core$async$__GT_t_cljs$core$async64458(p,ch,meta64459){
return (new cljs.core.async.t_cljs$core$async64458(p,ch,meta64459));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async64458(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__64462 = arguments.length;
switch (G__64462) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__48252__auto___65249 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48253__auto__ = (function (){var switch__48012__auto__ = (function (state_64483){
var state_val_64484 = (state_64483[(1)]);
if((state_val_64484 === (7))){
var inst_64479 = (state_64483[(2)]);
var state_64483__$1 = state_64483;
var statearr_64485_65250 = state_64483__$1;
(statearr_64485_65250[(2)] = inst_64479);

(statearr_64485_65250[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64484 === (1))){
var state_64483__$1 = state_64483;
var statearr_64486_65251 = state_64483__$1;
(statearr_64486_65251[(2)] = null);

(statearr_64486_65251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64484 === (4))){
var inst_64465 = (state_64483[(7)]);
var inst_64465__$1 = (state_64483[(2)]);
var inst_64466 = (inst_64465__$1 == null);
var state_64483__$1 = (function (){var statearr_64487 = state_64483;
(statearr_64487[(7)] = inst_64465__$1);

return statearr_64487;
})();
if(cljs.core.truth_(inst_64466)){
var statearr_64488_65252 = state_64483__$1;
(statearr_64488_65252[(1)] = (5));

} else {
var statearr_64489_65253 = state_64483__$1;
(statearr_64489_65253[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64484 === (6))){
var inst_64465 = (state_64483[(7)]);
var inst_64470 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_64465) : p.call(null,inst_64465));
var state_64483__$1 = state_64483;
if(cljs.core.truth_(inst_64470)){
var statearr_64490_65254 = state_64483__$1;
(statearr_64490_65254[(1)] = (8));

} else {
var statearr_64491_65255 = state_64483__$1;
(statearr_64491_65255[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64484 === (3))){
var inst_64481 = (state_64483[(2)]);
var state_64483__$1 = state_64483;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64483__$1,inst_64481);
} else {
if((state_val_64484 === (2))){
var state_64483__$1 = state_64483;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64483__$1,(4),ch);
} else {
if((state_val_64484 === (11))){
var inst_64473 = (state_64483[(2)]);
var state_64483__$1 = state_64483;
var statearr_64492_65256 = state_64483__$1;
(statearr_64492_65256[(2)] = inst_64473);

(statearr_64492_65256[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64484 === (9))){
var state_64483__$1 = state_64483;
var statearr_64493_65257 = state_64483__$1;
(statearr_64493_65257[(2)] = null);

(statearr_64493_65257[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64484 === (5))){
var inst_64468 = cljs.core.async.close_BANG_(out);
var state_64483__$1 = state_64483;
var statearr_64494_65258 = state_64483__$1;
(statearr_64494_65258[(2)] = inst_64468);

(statearr_64494_65258[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64484 === (10))){
var inst_64476 = (state_64483[(2)]);
var state_64483__$1 = (function (){var statearr_64495 = state_64483;
(statearr_64495[(8)] = inst_64476);

return statearr_64495;
})();
var statearr_64496_65259 = state_64483__$1;
(statearr_64496_65259[(2)] = null);

(statearr_64496_65259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64484 === (8))){
var inst_64465 = (state_64483[(7)]);
var state_64483__$1 = state_64483;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64483__$1,(11),out,inst_64465);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__48013__auto__ = null;
var cljs$core$async$state_machine__48013__auto____0 = (function (){
var statearr_64497 = [null,null,null,null,null,null,null,null,null];
(statearr_64497[(0)] = cljs$core$async$state_machine__48013__auto__);

(statearr_64497[(1)] = (1));

return statearr_64497;
});
var cljs$core$async$state_machine__48013__auto____1 = (function (state_64483){
while(true){
var ret_value__48014__auto__ = (function (){try{while(true){
var result__48015__auto__ = switch__48012__auto__(state_64483);
if(cljs.core.keyword_identical_QMARK_(result__48015__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48015__auto__;
}
break;
}
}catch (e64498){var ex__48016__auto__ = e64498;
var statearr_64499_65260 = state_64483;
(statearr_64499_65260[(2)] = ex__48016__auto__);


if(cljs.core.seq((state_64483[(4)]))){
var statearr_64500_65261 = state_64483;
(statearr_64500_65261[(1)] = cljs.core.first((state_64483[(4)])));

} else {
throw ex__48016__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65262 = state_64483;
state_64483 = G__65262;
continue;
} else {
return ret_value__48014__auto__;
}
break;
}
});
cljs$core$async$state_machine__48013__auto__ = function(state_64483){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48013__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48013__auto____1.call(this,state_64483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48013__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48013__auto____0;
cljs$core$async$state_machine__48013__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48013__auto____1;
return cljs$core$async$state_machine__48013__auto__;
})()
})();
var state__48254__auto__ = (function (){var statearr_64501 = f__48253__auto__();
(statearr_64501[(6)] = c__48252__auto___65249);

return statearr_64501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48254__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__64503 = arguments.length;
switch (G__64503) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__48252__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48253__auto__ = (function (){var switch__48012__auto__ = (function (state_64565){
var state_val_64566 = (state_64565[(1)]);
if((state_val_64566 === (7))){
var inst_64561 = (state_64565[(2)]);
var state_64565__$1 = state_64565;
var statearr_64567_65266 = state_64565__$1;
(statearr_64567_65266[(2)] = inst_64561);

(statearr_64567_65266[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64566 === (20))){
var inst_64531 = (state_64565[(7)]);
var inst_64542 = (state_64565[(2)]);
var inst_64543 = cljs.core.next(inst_64531);
var inst_64517 = inst_64543;
var inst_64518 = null;
var inst_64519 = (0);
var inst_64520 = (0);
var state_64565__$1 = (function (){var statearr_64568 = state_64565;
(statearr_64568[(8)] = inst_64542);

(statearr_64568[(9)] = inst_64517);

(statearr_64568[(10)] = inst_64518);

(statearr_64568[(11)] = inst_64519);

(statearr_64568[(12)] = inst_64520);

return statearr_64568;
})();
var statearr_64569_65267 = state_64565__$1;
(statearr_64569_65267[(2)] = null);

(statearr_64569_65267[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64566 === (1))){
var state_64565__$1 = state_64565;
var statearr_64570_65268 = state_64565__$1;
(statearr_64570_65268[(2)] = null);

(statearr_64570_65268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64566 === (4))){
var inst_64506 = (state_64565[(13)]);
var inst_64506__$1 = (state_64565[(2)]);
var inst_64507 = (inst_64506__$1 == null);
var state_64565__$1 = (function (){var statearr_64571 = state_64565;
(statearr_64571[(13)] = inst_64506__$1);

return statearr_64571;
})();
if(cljs.core.truth_(inst_64507)){
var statearr_64572_65269 = state_64565__$1;
(statearr_64572_65269[(1)] = (5));

} else {
var statearr_64573_65270 = state_64565__$1;
(statearr_64573_65270[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64566 === (15))){
var state_64565__$1 = state_64565;
var statearr_64577_65271 = state_64565__$1;
(statearr_64577_65271[(2)] = null);

(statearr_64577_65271[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64566 === (21))){
var state_64565__$1 = state_64565;
var statearr_64578_65272 = state_64565__$1;
(statearr_64578_65272[(2)] = null);

(statearr_64578_65272[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64566 === (13))){
var inst_64520 = (state_64565[(12)]);
var inst_64517 = (state_64565[(9)]);
var inst_64518 = (state_64565[(10)]);
var inst_64519 = (state_64565[(11)]);
var inst_64527 = (state_64565[(2)]);
var inst_64528 = (inst_64520 + (1));
var tmp64574 = inst_64518;
var tmp64575 = inst_64517;
var tmp64576 = inst_64519;
var inst_64517__$1 = tmp64575;
var inst_64518__$1 = tmp64574;
var inst_64519__$1 = tmp64576;
var inst_64520__$1 = inst_64528;
var state_64565__$1 = (function (){var statearr_64579 = state_64565;
(statearr_64579[(14)] = inst_64527);

(statearr_64579[(9)] = inst_64517__$1);

(statearr_64579[(10)] = inst_64518__$1);

(statearr_64579[(11)] = inst_64519__$1);

(statearr_64579[(12)] = inst_64520__$1);

return statearr_64579;
})();
var statearr_64580_65275 = state_64565__$1;
(statearr_64580_65275[(2)] = null);

(statearr_64580_65275[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64566 === (22))){
var state_64565__$1 = state_64565;
var statearr_64581_65276 = state_64565__$1;
(statearr_64581_65276[(2)] = null);

(statearr_64581_65276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64566 === (6))){
var inst_64506 = (state_64565[(13)]);
var inst_64515 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_64506) : f.call(null,inst_64506));
var inst_64516 = cljs.core.seq(inst_64515);
var inst_64517 = inst_64516;
var inst_64518 = null;
var inst_64519 = (0);
var inst_64520 = (0);
var state_64565__$1 = (function (){var statearr_64582 = state_64565;
(statearr_64582[(9)] = inst_64517);

(statearr_64582[(10)] = inst_64518);

(statearr_64582[(11)] = inst_64519);

(statearr_64582[(12)] = inst_64520);

return statearr_64582;
})();
var statearr_64583_65277 = state_64565__$1;
(statearr_64583_65277[(2)] = null);

(statearr_64583_65277[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64566 === (17))){
var inst_64531 = (state_64565[(7)]);
var inst_64535 = cljs.core.chunk_first(inst_64531);
var inst_64536 = cljs.core.chunk_rest(inst_64531);
var inst_64537 = cljs.core.count(inst_64535);
var inst_64517 = inst_64536;
var inst_64518 = inst_64535;
var inst_64519 = inst_64537;
var inst_64520 = (0);
var state_64565__$1 = (function (){var statearr_64584 = state_64565;
(statearr_64584[(9)] = inst_64517);

(statearr_64584[(10)] = inst_64518);

(statearr_64584[(11)] = inst_64519);

(statearr_64584[(12)] = inst_64520);

return statearr_64584;
})();
var statearr_64585_65279 = state_64565__$1;
(statearr_64585_65279[(2)] = null);

(statearr_64585_65279[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64566 === (3))){
var inst_64563 = (state_64565[(2)]);
var state_64565__$1 = state_64565;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64565__$1,inst_64563);
} else {
if((state_val_64566 === (12))){
var inst_64551 = (state_64565[(2)]);
var state_64565__$1 = state_64565;
var statearr_64586_65280 = state_64565__$1;
(statearr_64586_65280[(2)] = inst_64551);

(statearr_64586_65280[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64566 === (2))){
var state_64565__$1 = state_64565;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64565__$1,(4),in$);
} else {
if((state_val_64566 === (23))){
var inst_64559 = (state_64565[(2)]);
var state_64565__$1 = state_64565;
var statearr_64587_65281 = state_64565__$1;
(statearr_64587_65281[(2)] = inst_64559);

(statearr_64587_65281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64566 === (19))){
var inst_64546 = (state_64565[(2)]);
var state_64565__$1 = state_64565;
var statearr_64588_65282 = state_64565__$1;
(statearr_64588_65282[(2)] = inst_64546);

(statearr_64588_65282[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64566 === (11))){
var inst_64517 = (state_64565[(9)]);
var inst_64531 = (state_64565[(7)]);
var inst_64531__$1 = cljs.core.seq(inst_64517);
var state_64565__$1 = (function (){var statearr_64589 = state_64565;
(statearr_64589[(7)] = inst_64531__$1);

return statearr_64589;
})();
if(inst_64531__$1){
var statearr_64590_65283 = state_64565__$1;
(statearr_64590_65283[(1)] = (14));

} else {
var statearr_64591_65284 = state_64565__$1;
(statearr_64591_65284[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64566 === (9))){
var inst_64553 = (state_64565[(2)]);
var inst_64554 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_64565__$1 = (function (){var statearr_64592 = state_64565;
(statearr_64592[(15)] = inst_64553);

return statearr_64592;
})();
if(cljs.core.truth_(inst_64554)){
var statearr_64593_65285 = state_64565__$1;
(statearr_64593_65285[(1)] = (21));

} else {
var statearr_64594_65286 = state_64565__$1;
(statearr_64594_65286[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64566 === (5))){
var inst_64509 = cljs.core.async.close_BANG_(out);
var state_64565__$1 = state_64565;
var statearr_64595_65287 = state_64565__$1;
(statearr_64595_65287[(2)] = inst_64509);

(statearr_64595_65287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64566 === (14))){
var inst_64531 = (state_64565[(7)]);
var inst_64533 = cljs.core.chunked_seq_QMARK_(inst_64531);
var state_64565__$1 = state_64565;
if(inst_64533){
var statearr_64596_65288 = state_64565__$1;
(statearr_64596_65288[(1)] = (17));

} else {
var statearr_64597_65289 = state_64565__$1;
(statearr_64597_65289[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64566 === (16))){
var inst_64549 = (state_64565[(2)]);
var state_64565__$1 = state_64565;
var statearr_64598_65290 = state_64565__$1;
(statearr_64598_65290[(2)] = inst_64549);

(statearr_64598_65290[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64566 === (10))){
var inst_64518 = (state_64565[(10)]);
var inst_64520 = (state_64565[(12)]);
var inst_64525 = cljs.core._nth(inst_64518,inst_64520);
var state_64565__$1 = state_64565;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64565__$1,(13),out,inst_64525);
} else {
if((state_val_64566 === (18))){
var inst_64531 = (state_64565[(7)]);
var inst_64540 = cljs.core.first(inst_64531);
var state_64565__$1 = state_64565;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64565__$1,(20),out,inst_64540);
} else {
if((state_val_64566 === (8))){
var inst_64520 = (state_64565[(12)]);
var inst_64519 = (state_64565[(11)]);
var inst_64522 = (inst_64520 < inst_64519);
var inst_64523 = inst_64522;
var state_64565__$1 = state_64565;
if(cljs.core.truth_(inst_64523)){
var statearr_64599_65291 = state_64565__$1;
(statearr_64599_65291[(1)] = (10));

} else {
var statearr_64600_65292 = state_64565__$1;
(statearr_64600_65292[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__48013__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__48013__auto____0 = (function (){
var statearr_64601 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64601[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__48013__auto__);

(statearr_64601[(1)] = (1));

return statearr_64601;
});
var cljs$core$async$mapcat_STAR__$_state_machine__48013__auto____1 = (function (state_64565){
while(true){
var ret_value__48014__auto__ = (function (){try{while(true){
var result__48015__auto__ = switch__48012__auto__(state_64565);
if(cljs.core.keyword_identical_QMARK_(result__48015__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48015__auto__;
}
break;
}
}catch (e64602){var ex__48016__auto__ = e64602;
var statearr_64603_65296 = state_64565;
(statearr_64603_65296[(2)] = ex__48016__auto__);


if(cljs.core.seq((state_64565[(4)]))){
var statearr_64604_65297 = state_64565;
(statearr_64604_65297[(1)] = cljs.core.first((state_64565[(4)])));

} else {
throw ex__48016__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65298 = state_64565;
state_64565 = G__65298;
continue;
} else {
return ret_value__48014__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__48013__auto__ = function(state_64565){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__48013__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__48013__auto____1.call(this,state_64565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__48013__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__48013__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__48013__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__48013__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__48013__auto__;
})()
})();
var state__48254__auto__ = (function (){var statearr_64605 = f__48253__auto__();
(statearr_64605[(6)] = c__48252__auto__);

return statearr_64605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48254__auto__);
}));

return c__48252__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__64607 = arguments.length;
switch (G__64607) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__64609 = arguments.length;
switch (G__64609) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__64611 = arguments.length;
switch (G__64611) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__48252__auto___65302 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48253__auto__ = (function (){var switch__48012__auto__ = (function (state_64635){
var state_val_64636 = (state_64635[(1)]);
if((state_val_64636 === (7))){
var inst_64630 = (state_64635[(2)]);
var state_64635__$1 = state_64635;
var statearr_64637_65303 = state_64635__$1;
(statearr_64637_65303[(2)] = inst_64630);

(statearr_64637_65303[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64636 === (1))){
var inst_64612 = null;
var state_64635__$1 = (function (){var statearr_64638 = state_64635;
(statearr_64638[(7)] = inst_64612);

return statearr_64638;
})();
var statearr_64639_65304 = state_64635__$1;
(statearr_64639_65304[(2)] = null);

(statearr_64639_65304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64636 === (4))){
var inst_64615 = (state_64635[(8)]);
var inst_64615__$1 = (state_64635[(2)]);
var inst_64616 = (inst_64615__$1 == null);
var inst_64617 = cljs.core.not(inst_64616);
var state_64635__$1 = (function (){var statearr_64640 = state_64635;
(statearr_64640[(8)] = inst_64615__$1);

return statearr_64640;
})();
if(inst_64617){
var statearr_64641_65305 = state_64635__$1;
(statearr_64641_65305[(1)] = (5));

} else {
var statearr_64642_65306 = state_64635__$1;
(statearr_64642_65306[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64636 === (6))){
var state_64635__$1 = state_64635;
var statearr_64643_65307 = state_64635__$1;
(statearr_64643_65307[(2)] = null);

(statearr_64643_65307[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64636 === (3))){
var inst_64632 = (state_64635[(2)]);
var inst_64633 = cljs.core.async.close_BANG_(out);
var state_64635__$1 = (function (){var statearr_64644 = state_64635;
(statearr_64644[(9)] = inst_64632);

return statearr_64644;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_64635__$1,inst_64633);
} else {
if((state_val_64636 === (2))){
var state_64635__$1 = state_64635;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64635__$1,(4),ch);
} else {
if((state_val_64636 === (11))){
var inst_64615 = (state_64635[(8)]);
var inst_64624 = (state_64635[(2)]);
var inst_64612 = inst_64615;
var state_64635__$1 = (function (){var statearr_64645 = state_64635;
(statearr_64645[(10)] = inst_64624);

(statearr_64645[(7)] = inst_64612);

return statearr_64645;
})();
var statearr_64646_65309 = state_64635__$1;
(statearr_64646_65309[(2)] = null);

(statearr_64646_65309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64636 === (9))){
var inst_64615 = (state_64635[(8)]);
var state_64635__$1 = state_64635;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64635__$1,(11),out,inst_64615);
} else {
if((state_val_64636 === (5))){
var inst_64615 = (state_64635[(8)]);
var inst_64612 = (state_64635[(7)]);
var inst_64619 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_64615,inst_64612);
var state_64635__$1 = state_64635;
if(inst_64619){
var statearr_64648_65314 = state_64635__$1;
(statearr_64648_65314[(1)] = (8));

} else {
var statearr_64649_65315 = state_64635__$1;
(statearr_64649_65315[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64636 === (10))){
var inst_64627 = (state_64635[(2)]);
var state_64635__$1 = state_64635;
var statearr_64650_65319 = state_64635__$1;
(statearr_64650_65319[(2)] = inst_64627);

(statearr_64650_65319[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64636 === (8))){
var inst_64612 = (state_64635[(7)]);
var tmp64647 = inst_64612;
var inst_64612__$1 = tmp64647;
var state_64635__$1 = (function (){var statearr_64651 = state_64635;
(statearr_64651[(7)] = inst_64612__$1);

return statearr_64651;
})();
var statearr_64652_65320 = state_64635__$1;
(statearr_64652_65320[(2)] = null);

(statearr_64652_65320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__48013__auto__ = null;
var cljs$core$async$state_machine__48013__auto____0 = (function (){
var statearr_64653 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_64653[(0)] = cljs$core$async$state_machine__48013__auto__);

(statearr_64653[(1)] = (1));

return statearr_64653;
});
var cljs$core$async$state_machine__48013__auto____1 = (function (state_64635){
while(true){
var ret_value__48014__auto__ = (function (){try{while(true){
var result__48015__auto__ = switch__48012__auto__(state_64635);
if(cljs.core.keyword_identical_QMARK_(result__48015__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48015__auto__;
}
break;
}
}catch (e64654){var ex__48016__auto__ = e64654;
var statearr_64655_65321 = state_64635;
(statearr_64655_65321[(2)] = ex__48016__auto__);


if(cljs.core.seq((state_64635[(4)]))){
var statearr_64656_65322 = state_64635;
(statearr_64656_65322[(1)] = cljs.core.first((state_64635[(4)])));

} else {
throw ex__48016__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65323 = state_64635;
state_64635 = G__65323;
continue;
} else {
return ret_value__48014__auto__;
}
break;
}
});
cljs$core$async$state_machine__48013__auto__ = function(state_64635){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48013__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48013__auto____1.call(this,state_64635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48013__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48013__auto____0;
cljs$core$async$state_machine__48013__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48013__auto____1;
return cljs$core$async$state_machine__48013__auto__;
})()
})();
var state__48254__auto__ = (function (){var statearr_64657 = f__48253__auto__();
(statearr_64657[(6)] = c__48252__auto___65302);

return statearr_64657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48254__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__64659 = arguments.length;
switch (G__64659) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__48252__auto___65328 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48253__auto__ = (function (){var switch__48012__auto__ = (function (state_64697){
var state_val_64698 = (state_64697[(1)]);
if((state_val_64698 === (7))){
var inst_64693 = (state_64697[(2)]);
var state_64697__$1 = state_64697;
var statearr_64699_65332 = state_64697__$1;
(statearr_64699_65332[(2)] = inst_64693);

(statearr_64699_65332[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64698 === (1))){
var inst_64660 = (new Array(n));
var inst_64661 = inst_64660;
var inst_64662 = (0);
var state_64697__$1 = (function (){var statearr_64700 = state_64697;
(statearr_64700[(7)] = inst_64661);

(statearr_64700[(8)] = inst_64662);

return statearr_64700;
})();
var statearr_64701_65333 = state_64697__$1;
(statearr_64701_65333[(2)] = null);

(statearr_64701_65333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64698 === (4))){
var inst_64665 = (state_64697[(9)]);
var inst_64665__$1 = (state_64697[(2)]);
var inst_64666 = (inst_64665__$1 == null);
var inst_64667 = cljs.core.not(inst_64666);
var state_64697__$1 = (function (){var statearr_64702 = state_64697;
(statearr_64702[(9)] = inst_64665__$1);

return statearr_64702;
})();
if(inst_64667){
var statearr_64703_65334 = state_64697__$1;
(statearr_64703_65334[(1)] = (5));

} else {
var statearr_64704_65335 = state_64697__$1;
(statearr_64704_65335[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64698 === (15))){
var inst_64687 = (state_64697[(2)]);
var state_64697__$1 = state_64697;
var statearr_64705_65336 = state_64697__$1;
(statearr_64705_65336[(2)] = inst_64687);

(statearr_64705_65336[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64698 === (13))){
var state_64697__$1 = state_64697;
var statearr_64706_65337 = state_64697__$1;
(statearr_64706_65337[(2)] = null);

(statearr_64706_65337[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64698 === (6))){
var inst_64662 = (state_64697[(8)]);
var inst_64683 = (inst_64662 > (0));
var state_64697__$1 = state_64697;
if(cljs.core.truth_(inst_64683)){
var statearr_64707_65341 = state_64697__$1;
(statearr_64707_65341[(1)] = (12));

} else {
var statearr_64708_65342 = state_64697__$1;
(statearr_64708_65342[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64698 === (3))){
var inst_64695 = (state_64697[(2)]);
var state_64697__$1 = state_64697;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64697__$1,inst_64695);
} else {
if((state_val_64698 === (12))){
var inst_64661 = (state_64697[(7)]);
var inst_64685 = cljs.core.vec(inst_64661);
var state_64697__$1 = state_64697;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64697__$1,(15),out,inst_64685);
} else {
if((state_val_64698 === (2))){
var state_64697__$1 = state_64697;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64697__$1,(4),ch);
} else {
if((state_val_64698 === (11))){
var inst_64677 = (state_64697[(2)]);
var inst_64678 = (new Array(n));
var inst_64661 = inst_64678;
var inst_64662 = (0);
var state_64697__$1 = (function (){var statearr_64709 = state_64697;
(statearr_64709[(10)] = inst_64677);

(statearr_64709[(7)] = inst_64661);

(statearr_64709[(8)] = inst_64662);

return statearr_64709;
})();
var statearr_64710_65343 = state_64697__$1;
(statearr_64710_65343[(2)] = null);

(statearr_64710_65343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64698 === (9))){
var inst_64661 = (state_64697[(7)]);
var inst_64675 = cljs.core.vec(inst_64661);
var state_64697__$1 = state_64697;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64697__$1,(11),out,inst_64675);
} else {
if((state_val_64698 === (5))){
var inst_64661 = (state_64697[(7)]);
var inst_64662 = (state_64697[(8)]);
var inst_64665 = (state_64697[(9)]);
var inst_64670 = (state_64697[(11)]);
var inst_64669 = (inst_64661[inst_64662] = inst_64665);
var inst_64670__$1 = (inst_64662 + (1));
var inst_64671 = (inst_64670__$1 < n);
var state_64697__$1 = (function (){var statearr_64711 = state_64697;
(statearr_64711[(12)] = inst_64669);

(statearr_64711[(11)] = inst_64670__$1);

return statearr_64711;
})();
if(cljs.core.truth_(inst_64671)){
var statearr_64712_65345 = state_64697__$1;
(statearr_64712_65345[(1)] = (8));

} else {
var statearr_64713_65346 = state_64697__$1;
(statearr_64713_65346[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64698 === (14))){
var inst_64690 = (state_64697[(2)]);
var inst_64691 = cljs.core.async.close_BANG_(out);
var state_64697__$1 = (function (){var statearr_64715 = state_64697;
(statearr_64715[(13)] = inst_64690);

return statearr_64715;
})();
var statearr_64716_65347 = state_64697__$1;
(statearr_64716_65347[(2)] = inst_64691);

(statearr_64716_65347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64698 === (10))){
var inst_64681 = (state_64697[(2)]);
var state_64697__$1 = state_64697;
var statearr_64717_65349 = state_64697__$1;
(statearr_64717_65349[(2)] = inst_64681);

(statearr_64717_65349[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64698 === (8))){
var inst_64661 = (state_64697[(7)]);
var inst_64670 = (state_64697[(11)]);
var tmp64714 = inst_64661;
var inst_64661__$1 = tmp64714;
var inst_64662 = inst_64670;
var state_64697__$1 = (function (){var statearr_64718 = state_64697;
(statearr_64718[(7)] = inst_64661__$1);

(statearr_64718[(8)] = inst_64662);

return statearr_64718;
})();
var statearr_64719_65351 = state_64697__$1;
(statearr_64719_65351[(2)] = null);

(statearr_64719_65351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__48013__auto__ = null;
var cljs$core$async$state_machine__48013__auto____0 = (function (){
var statearr_64720 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64720[(0)] = cljs$core$async$state_machine__48013__auto__);

(statearr_64720[(1)] = (1));

return statearr_64720;
});
var cljs$core$async$state_machine__48013__auto____1 = (function (state_64697){
while(true){
var ret_value__48014__auto__ = (function (){try{while(true){
var result__48015__auto__ = switch__48012__auto__(state_64697);
if(cljs.core.keyword_identical_QMARK_(result__48015__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48015__auto__;
}
break;
}
}catch (e64721){var ex__48016__auto__ = e64721;
var statearr_64722_65352 = state_64697;
(statearr_64722_65352[(2)] = ex__48016__auto__);


if(cljs.core.seq((state_64697[(4)]))){
var statearr_64723_65353 = state_64697;
(statearr_64723_65353[(1)] = cljs.core.first((state_64697[(4)])));

} else {
throw ex__48016__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65354 = state_64697;
state_64697 = G__65354;
continue;
} else {
return ret_value__48014__auto__;
}
break;
}
});
cljs$core$async$state_machine__48013__auto__ = function(state_64697){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48013__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48013__auto____1.call(this,state_64697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48013__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48013__auto____0;
cljs$core$async$state_machine__48013__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48013__auto____1;
return cljs$core$async$state_machine__48013__auto__;
})()
})();
var state__48254__auto__ = (function (){var statearr_64724 = f__48253__auto__();
(statearr_64724[(6)] = c__48252__auto___65328);

return statearr_64724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48254__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__64726 = arguments.length;
switch (G__64726) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__48252__auto___65357 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48253__auto__ = (function (){var switch__48012__auto__ = (function (state_64771){
var state_val_64772 = (state_64771[(1)]);
if((state_val_64772 === (7))){
var inst_64767 = (state_64771[(2)]);
var state_64771__$1 = state_64771;
var statearr_64773_65358 = state_64771__$1;
(statearr_64773_65358[(2)] = inst_64767);

(statearr_64773_65358[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64772 === (1))){
var inst_64727 = [];
var inst_64728 = inst_64727;
var inst_64729 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_64771__$1 = (function (){var statearr_64774 = state_64771;
(statearr_64774[(7)] = inst_64728);

(statearr_64774[(8)] = inst_64729);

return statearr_64774;
})();
var statearr_64775_65359 = state_64771__$1;
(statearr_64775_65359[(2)] = null);

(statearr_64775_65359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64772 === (4))){
var inst_64732 = (state_64771[(9)]);
var inst_64732__$1 = (state_64771[(2)]);
var inst_64733 = (inst_64732__$1 == null);
var inst_64734 = cljs.core.not(inst_64733);
var state_64771__$1 = (function (){var statearr_64776 = state_64771;
(statearr_64776[(9)] = inst_64732__$1);

return statearr_64776;
})();
if(inst_64734){
var statearr_64777_65360 = state_64771__$1;
(statearr_64777_65360[(1)] = (5));

} else {
var statearr_64778_65361 = state_64771__$1;
(statearr_64778_65361[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64772 === (15))){
var inst_64728 = (state_64771[(7)]);
var inst_64759 = cljs.core.vec(inst_64728);
var state_64771__$1 = state_64771;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64771__$1,(18),out,inst_64759);
} else {
if((state_val_64772 === (13))){
var inst_64754 = (state_64771[(2)]);
var state_64771__$1 = state_64771;
var statearr_64779_65362 = state_64771__$1;
(statearr_64779_65362[(2)] = inst_64754);

(statearr_64779_65362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64772 === (6))){
var inst_64728 = (state_64771[(7)]);
var inst_64756 = inst_64728.length;
var inst_64757 = (inst_64756 > (0));
var state_64771__$1 = state_64771;
if(cljs.core.truth_(inst_64757)){
var statearr_64780_65363 = state_64771__$1;
(statearr_64780_65363[(1)] = (15));

} else {
var statearr_64781_65364 = state_64771__$1;
(statearr_64781_65364[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64772 === (17))){
var inst_64764 = (state_64771[(2)]);
var inst_64765 = cljs.core.async.close_BANG_(out);
var state_64771__$1 = (function (){var statearr_64782 = state_64771;
(statearr_64782[(10)] = inst_64764);

return statearr_64782;
})();
var statearr_64783_65365 = state_64771__$1;
(statearr_64783_65365[(2)] = inst_64765);

(statearr_64783_65365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64772 === (3))){
var inst_64769 = (state_64771[(2)]);
var state_64771__$1 = state_64771;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64771__$1,inst_64769);
} else {
if((state_val_64772 === (12))){
var inst_64728 = (state_64771[(7)]);
var inst_64747 = cljs.core.vec(inst_64728);
var state_64771__$1 = state_64771;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64771__$1,(14),out,inst_64747);
} else {
if((state_val_64772 === (2))){
var state_64771__$1 = state_64771;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64771__$1,(4),ch);
} else {
if((state_val_64772 === (11))){
var inst_64728 = (state_64771[(7)]);
var inst_64732 = (state_64771[(9)]);
var inst_64736 = (state_64771[(11)]);
var inst_64744 = inst_64728.push(inst_64732);
var tmp64784 = inst_64728;
var inst_64728__$1 = tmp64784;
var inst_64729 = inst_64736;
var state_64771__$1 = (function (){var statearr_64785 = state_64771;
(statearr_64785[(12)] = inst_64744);

(statearr_64785[(7)] = inst_64728__$1);

(statearr_64785[(8)] = inst_64729);

return statearr_64785;
})();
var statearr_64786_65366 = state_64771__$1;
(statearr_64786_65366[(2)] = null);

(statearr_64786_65366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64772 === (9))){
var inst_64729 = (state_64771[(8)]);
var inst_64740 = cljs.core.keyword_identical_QMARK_(inst_64729,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_64771__$1 = state_64771;
var statearr_64787_65367 = state_64771__$1;
(statearr_64787_65367[(2)] = inst_64740);

(statearr_64787_65367[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64772 === (5))){
var inst_64732 = (state_64771[(9)]);
var inst_64736 = (state_64771[(11)]);
var inst_64729 = (state_64771[(8)]);
var inst_64737 = (state_64771[(13)]);
var inst_64736__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_64732) : f.call(null,inst_64732));
var inst_64737__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_64736__$1,inst_64729);
var state_64771__$1 = (function (){var statearr_64788 = state_64771;
(statearr_64788[(11)] = inst_64736__$1);

(statearr_64788[(13)] = inst_64737__$1);

return statearr_64788;
})();
if(inst_64737__$1){
var statearr_64789_65368 = state_64771__$1;
(statearr_64789_65368[(1)] = (8));

} else {
var statearr_64790_65373 = state_64771__$1;
(statearr_64790_65373[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64772 === (14))){
var inst_64732 = (state_64771[(9)]);
var inst_64736 = (state_64771[(11)]);
var inst_64749 = (state_64771[(2)]);
var inst_64750 = [];
var inst_64751 = inst_64750.push(inst_64732);
var inst_64728 = inst_64750;
var inst_64729 = inst_64736;
var state_64771__$1 = (function (){var statearr_64791 = state_64771;
(statearr_64791[(14)] = inst_64749);

(statearr_64791[(15)] = inst_64751);

(statearr_64791[(7)] = inst_64728);

(statearr_64791[(8)] = inst_64729);

return statearr_64791;
})();
var statearr_64792_65374 = state_64771__$1;
(statearr_64792_65374[(2)] = null);

(statearr_64792_65374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64772 === (16))){
var state_64771__$1 = state_64771;
var statearr_64793_65375 = state_64771__$1;
(statearr_64793_65375[(2)] = null);

(statearr_64793_65375[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64772 === (10))){
var inst_64742 = (state_64771[(2)]);
var state_64771__$1 = state_64771;
if(cljs.core.truth_(inst_64742)){
var statearr_64794_65376 = state_64771__$1;
(statearr_64794_65376[(1)] = (11));

} else {
var statearr_64795_65377 = state_64771__$1;
(statearr_64795_65377[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64772 === (18))){
var inst_64761 = (state_64771[(2)]);
var state_64771__$1 = state_64771;
var statearr_64796_65378 = state_64771__$1;
(statearr_64796_65378[(2)] = inst_64761);

(statearr_64796_65378[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64772 === (8))){
var inst_64737 = (state_64771[(13)]);
var state_64771__$1 = state_64771;
var statearr_64797_65379 = state_64771__$1;
(statearr_64797_65379[(2)] = inst_64737);

(statearr_64797_65379[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__48013__auto__ = null;
var cljs$core$async$state_machine__48013__auto____0 = (function (){
var statearr_64798 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64798[(0)] = cljs$core$async$state_machine__48013__auto__);

(statearr_64798[(1)] = (1));

return statearr_64798;
});
var cljs$core$async$state_machine__48013__auto____1 = (function (state_64771){
while(true){
var ret_value__48014__auto__ = (function (){try{while(true){
var result__48015__auto__ = switch__48012__auto__(state_64771);
if(cljs.core.keyword_identical_QMARK_(result__48015__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48015__auto__;
}
break;
}
}catch (e64799){var ex__48016__auto__ = e64799;
var statearr_64800_65380 = state_64771;
(statearr_64800_65380[(2)] = ex__48016__auto__);


if(cljs.core.seq((state_64771[(4)]))){
var statearr_64801_65381 = state_64771;
(statearr_64801_65381[(1)] = cljs.core.first((state_64771[(4)])));

} else {
throw ex__48016__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65382 = state_64771;
state_64771 = G__65382;
continue;
} else {
return ret_value__48014__auto__;
}
break;
}
});
cljs$core$async$state_machine__48013__auto__ = function(state_64771){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48013__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48013__auto____1.call(this,state_64771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48013__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48013__auto____0;
cljs$core$async$state_machine__48013__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48013__auto____1;
return cljs$core$async$state_machine__48013__auto__;
})()
})();
var state__48254__auto__ = (function (){var statearr_64802 = f__48253__auto__();
(statearr_64802[(6)] = c__48252__auto___65357);

return statearr_64802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48254__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
