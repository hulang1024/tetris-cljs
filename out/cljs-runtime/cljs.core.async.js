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
cljs.core.async.t_cljs$core$async31782 = (function (f,blockable,meta31783){
this.f = f;
this.blockable = blockable;
this.meta31783 = meta31783;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31782.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31784,meta31783__$1){
var self__ = this;
var _31784__$1 = this;
return (new cljs.core.async.t_cljs$core$async31782(self__.f,self__.blockable,meta31783__$1));
}));

(cljs.core.async.t_cljs$core$async31782.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31784){
var self__ = this;
var _31784__$1 = this;
return self__.meta31783;
}));

(cljs.core.async.t_cljs$core$async31782.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31782.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31782.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async31782.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async31782.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31783","meta31783",1081019883,null)], null);
}));

(cljs.core.async.t_cljs$core$async31782.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31782.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31782");

(cljs.core.async.t_cljs$core$async31782.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async31782");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31782.
 */
cljs.core.async.__GT_t_cljs$core$async31782 = (function cljs$core$async$__GT_t_cljs$core$async31782(f,blockable,meta31783){
return (new cljs.core.async.t_cljs$core$async31782(f,blockable,meta31783));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__31780 = arguments.length;
switch (G__31780) {
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
return (new cljs.core.async.t_cljs$core$async31782(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__31799 = arguments.length;
switch (G__31799) {
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
var G__31806 = arguments.length;
switch (G__31806) {
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
var G__31813 = arguments.length;
switch (G__31813) {
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
var val_34983 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34983) : fn1.call(null,val_34983));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34983) : fn1.call(null,val_34983));
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
var G__31824 = arguments.length;
switch (G__31824) {
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
var n__5762__auto___34992 = n;
var x_34993 = (0);
while(true){
if((x_34993 < n__5762__auto___34992)){
(a[x_34993] = x_34993);

var G__34997 = (x_34993 + (1));
x_34993 = G__34997;
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
cljs.core.async.t_cljs$core$async31852 = (function (flag,meta31853){
this.flag = flag;
this.meta31853 = meta31853;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31852.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31854,meta31853__$1){
var self__ = this;
var _31854__$1 = this;
return (new cljs.core.async.t_cljs$core$async31852(self__.flag,meta31853__$1));
}));

(cljs.core.async.t_cljs$core$async31852.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31854){
var self__ = this;
var _31854__$1 = this;
return self__.meta31853;
}));

(cljs.core.async.t_cljs$core$async31852.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31852.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31852.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31852.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async31852.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31853","meta31853",-1092233411,null)], null);
}));

(cljs.core.async.t_cljs$core$async31852.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31852.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31852");

(cljs.core.async.t_cljs$core$async31852.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async31852");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31852.
 */
cljs.core.async.__GT_t_cljs$core$async31852 = (function cljs$core$async$__GT_t_cljs$core$async31852(flag,meta31853){
return (new cljs.core.async.t_cljs$core$async31852(flag,meta31853));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async31852(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31863 = (function (flag,cb,meta31864){
this.flag = flag;
this.cb = cb;
this.meta31864 = meta31864;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31863.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31865,meta31864__$1){
var self__ = this;
var _31865__$1 = this;
return (new cljs.core.async.t_cljs$core$async31863(self__.flag,self__.cb,meta31864__$1));
}));

(cljs.core.async.t_cljs$core$async31863.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31865){
var self__ = this;
var _31865__$1 = this;
return self__.meta31864;
}));

(cljs.core.async.t_cljs$core$async31863.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31863.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31863.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31863.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async31863.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31864","meta31864",791494493,null)], null);
}));

(cljs.core.async.t_cljs$core$async31863.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31863.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31863");

(cljs.core.async.t_cljs$core$async31863.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async31863");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31863.
 */
cljs.core.async.__GT_t_cljs$core$async31863 = (function cljs$core$async$__GT_t_cljs$core$async31863(flag,cb,meta31864){
return (new cljs.core.async.t_cljs$core$async31863(flag,cb,meta31864));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async31863(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
var port_35004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_35004)){
if((!(((port_35004.cljs$core$IFn$_invoke$arity$1 ? port_35004.cljs$core$IFn$_invoke$arity$1((1)) : port_35004.call(null,(1))) == null)))){
} else {
throw (new Error((""+"Assert failed: "+"can't put nil on channel"+"\n"+"(some? (port 1))")));
}
} else {
}

var G__35005 = (i + (1));
i = G__35005;
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
return (function (p1__31882_SHARP_){
var G__31896 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31882_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31896) : fret.call(null,G__31896));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__31884_SHARP_){
var G__31906 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31884_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31906) : fret.call(null,G__31906));
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
var G__35006 = (i + (1));
i = G__35006;
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
var len__5897__auto___35008 = arguments.length;
var i__5898__auto___35009 = (0);
while(true){
if((i__5898__auto___35009 < len__5897__auto___35008)){
args__5903__auto__.push((arguments[i__5898__auto___35009]));

var G__35011 = (i__5898__auto___35009 + (1));
i__5898__auto___35009 = G__35011;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31937){
var map__31939 = p__31937;
var map__31939__$1 = cljs.core.__destructure_map(map__31939);
var opts = map__31939__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31923){
var G__31926 = cljs.core.first(seq31923);
var seq31923__$1 = cljs.core.next(seq31923);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31926,seq31923__$1);
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
var G__31946 = arguments.length;
switch (G__31946) {
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
var c__31680__auto___35018 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31681__auto__ = (function (){var switch__30540__auto__ = (function (state_32000){
var state_val_32001 = (state_32000[(1)]);
if((state_val_32001 === (7))){
var inst_31987 = (state_32000[(2)]);
var state_32000__$1 = state_32000;
var statearr_32002_35020 = state_32000__$1;
(statearr_32002_35020[(2)] = inst_31987);

(statearr_32002_35020[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32001 === (1))){
var state_32000__$1 = state_32000;
var statearr_32003_35024 = state_32000__$1;
(statearr_32003_35024[(2)] = null);

(statearr_32003_35024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32001 === (4))){
var inst_31961 = (state_32000[(7)]);
var inst_31961__$1 = (state_32000[(2)]);
var inst_31963 = (inst_31961__$1 == null);
var state_32000__$1 = (function (){var statearr_32004 = state_32000;
(statearr_32004[(7)] = inst_31961__$1);

return statearr_32004;
})();
if(cljs.core.truth_(inst_31963)){
var statearr_32005_35027 = state_32000__$1;
(statearr_32005_35027[(1)] = (5));

} else {
var statearr_32006_35028 = state_32000__$1;
(statearr_32006_35028[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32001 === (13))){
var state_32000__$1 = state_32000;
var statearr_32009_35030 = state_32000__$1;
(statearr_32009_35030[(2)] = null);

(statearr_32009_35030[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32001 === (6))){
var inst_31961 = (state_32000[(7)]);
var state_32000__$1 = state_32000;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32000__$1,(11),to,inst_31961);
} else {
if((state_val_32001 === (3))){
var inst_31989 = (state_32000[(2)]);
var state_32000__$1 = state_32000;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32000__$1,inst_31989);
} else {
if((state_val_32001 === (12))){
var state_32000__$1 = state_32000;
var statearr_32013_35031 = state_32000__$1;
(statearr_32013_35031[(2)] = null);

(statearr_32013_35031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32001 === (2))){
var state_32000__$1 = state_32000;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32000__$1,(4),from);
} else {
if((state_val_32001 === (11))){
var inst_31976 = (state_32000[(2)]);
var state_32000__$1 = state_32000;
if(cljs.core.truth_(inst_31976)){
var statearr_32014_35032 = state_32000__$1;
(statearr_32014_35032[(1)] = (12));

} else {
var statearr_32015_35033 = state_32000__$1;
(statearr_32015_35033[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32001 === (9))){
var state_32000__$1 = state_32000;
var statearr_32016_35034 = state_32000__$1;
(statearr_32016_35034[(2)] = null);

(statearr_32016_35034[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32001 === (5))){
var state_32000__$1 = state_32000;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32017_35038 = state_32000__$1;
(statearr_32017_35038[(1)] = (8));

} else {
var statearr_32018_35039 = state_32000__$1;
(statearr_32018_35039[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32001 === (14))){
var inst_31985 = (state_32000[(2)]);
var state_32000__$1 = state_32000;
var statearr_32020_35040 = state_32000__$1;
(statearr_32020_35040[(2)] = inst_31985);

(statearr_32020_35040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32001 === (10))){
var inst_31969 = (state_32000[(2)]);
var state_32000__$1 = state_32000;
var statearr_32024_35041 = state_32000__$1;
(statearr_32024_35041[(2)] = inst_31969);

(statearr_32024_35041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32001 === (8))){
var inst_31966 = cljs.core.async.close_BANG_(to);
var state_32000__$1 = state_32000;
var statearr_32026_35042 = state_32000__$1;
(statearr_32026_35042[(2)] = inst_31966);

(statearr_32026_35042[(1)] = (10));


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
var cljs$core$async$state_machine__30541__auto__ = null;
var cljs$core$async$state_machine__30541__auto____0 = (function (){
var statearr_32027 = [null,null,null,null,null,null,null,null];
(statearr_32027[(0)] = cljs$core$async$state_machine__30541__auto__);

(statearr_32027[(1)] = (1));

return statearr_32027;
});
var cljs$core$async$state_machine__30541__auto____1 = (function (state_32000){
while(true){
var ret_value__30542__auto__ = (function (){try{while(true){
var result__30543__auto__ = switch__30540__auto__(state_32000);
if(cljs.core.keyword_identical_QMARK_(result__30543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30543__auto__;
}
break;
}
}catch (e32028){var ex__30544__auto__ = e32028;
var statearr_32029_35043 = state_32000;
(statearr_32029_35043[(2)] = ex__30544__auto__);


if(cljs.core.seq((state_32000[(4)]))){
var statearr_32030_35044 = state_32000;
(statearr_32030_35044[(1)] = cljs.core.first((state_32000[(4)])));

} else {
throw ex__30544__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35045 = state_32000;
state_32000 = G__35045;
continue;
} else {
return ret_value__30542__auto__;
}
break;
}
});
cljs$core$async$state_machine__30541__auto__ = function(state_32000){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30541__auto____1.call(this,state_32000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30541__auto____0;
cljs$core$async$state_machine__30541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30541__auto____1;
return cljs$core$async$state_machine__30541__auto__;
})()
})();
var state__31682__auto__ = (function (){var statearr_32032 = f__31681__auto__();
(statearr_32032[(6)] = c__31680__auto___35018);

return statearr_32032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31682__auto__);
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
var process__$1 = (function (p__32039){
var vec__32040 = p__32039;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32040,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32040,(1),null);
var job = vec__32040;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__31680__auto___35055 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31681__auto__ = (function (){var switch__30540__auto__ = (function (state_32061){
var state_val_32062 = (state_32061[(1)]);
if((state_val_32062 === (1))){
var state_32061__$1 = state_32061;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32061__$1,(2),res,v);
} else {
if((state_val_32062 === (2))){
var inst_32058 = (state_32061[(2)]);
var inst_32059 = cljs.core.async.close_BANG_(res);
var state_32061__$1 = (function (){var statearr_32063 = state_32061;
(statearr_32063[(7)] = inst_32058);

return statearr_32063;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32061__$1,inst_32059);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30541__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30541__auto____0 = (function (){
var statearr_32066 = [null,null,null,null,null,null,null,null];
(statearr_32066[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30541__auto__);

(statearr_32066[(1)] = (1));

return statearr_32066;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30541__auto____1 = (function (state_32061){
while(true){
var ret_value__30542__auto__ = (function (){try{while(true){
var result__30543__auto__ = switch__30540__auto__(state_32061);
if(cljs.core.keyword_identical_QMARK_(result__30543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30543__auto__;
}
break;
}
}catch (e32069){var ex__30544__auto__ = e32069;
var statearr_32072_35058 = state_32061;
(statearr_32072_35058[(2)] = ex__30544__auto__);


if(cljs.core.seq((state_32061[(4)]))){
var statearr_32073_35059 = state_32061;
(statearr_32073_35059[(1)] = cljs.core.first((state_32061[(4)])));

} else {
throw ex__30544__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35061 = state_32061;
state_32061 = G__35061;
continue;
} else {
return ret_value__30542__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30541__auto__ = function(state_32061){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30541__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30541__auto____1.call(this,state_32061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30541__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30541__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30541__auto__;
})()
})();
var state__31682__auto__ = (function (){var statearr_32074 = f__31681__auto__();
(statearr_32074[(6)] = c__31680__auto___35055);

return statearr_32074;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31682__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__32075){
var vec__32076 = p__32075;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32076,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32076,(1),null);
var job = vec__32076;
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
var n__5762__auto___35064 = n;
var __35065 = (0);
while(true){
if((__35065 < n__5762__auto___35064)){
var G__32086_35067 = type;
var G__32086_35068__$1 = (((G__32086_35067 instanceof cljs.core.Keyword))?G__32086_35067.fqn:null);
switch (G__32086_35068__$1) {
case "compute":
var c__31680__auto___35070 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35065,c__31680__auto___35070,G__32086_35067,G__32086_35068__$1,n__5762__auto___35064,jobs,results,process__$1,async){
return (function (){
var f__31681__auto__ = (function (){var switch__30540__auto__ = ((function (__35065,c__31680__auto___35070,G__32086_35067,G__32086_35068__$1,n__5762__auto___35064,jobs,results,process__$1,async){
return (function (state_32099){
var state_val_32100 = (state_32099[(1)]);
if((state_val_32100 === (1))){
var state_32099__$1 = state_32099;
var statearr_32102_35071 = state_32099__$1;
(statearr_32102_35071[(2)] = null);

(statearr_32102_35071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32100 === (2))){
var state_32099__$1 = state_32099;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32099__$1,(4),jobs);
} else {
if((state_val_32100 === (3))){
var inst_32097 = (state_32099[(2)]);
var state_32099__$1 = state_32099;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32099__$1,inst_32097);
} else {
if((state_val_32100 === (4))){
var inst_32089 = (state_32099[(2)]);
var inst_32090 = process__$1(inst_32089);
var state_32099__$1 = state_32099;
if(cljs.core.truth_(inst_32090)){
var statearr_32111_35074 = state_32099__$1;
(statearr_32111_35074[(1)] = (5));

} else {
var statearr_32112_35075 = state_32099__$1;
(statearr_32112_35075[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32100 === (5))){
var state_32099__$1 = state_32099;
var statearr_32115_35076 = state_32099__$1;
(statearr_32115_35076[(2)] = null);

(statearr_32115_35076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32100 === (6))){
var state_32099__$1 = state_32099;
var statearr_32116_35077 = state_32099__$1;
(statearr_32116_35077[(2)] = null);

(statearr_32116_35077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32100 === (7))){
var inst_32095 = (state_32099[(2)]);
var state_32099__$1 = state_32099;
var statearr_32117_35078 = state_32099__$1;
(statearr_32117_35078[(2)] = inst_32095);

(statearr_32117_35078[(1)] = (3));


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
});})(__35065,c__31680__auto___35070,G__32086_35067,G__32086_35068__$1,n__5762__auto___35064,jobs,results,process__$1,async))
;
return ((function (__35065,switch__30540__auto__,c__31680__auto___35070,G__32086_35067,G__32086_35068__$1,n__5762__auto___35064,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30541__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30541__auto____0 = (function (){
var statearr_32122 = [null,null,null,null,null,null,null];
(statearr_32122[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30541__auto__);

(statearr_32122[(1)] = (1));

return statearr_32122;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30541__auto____1 = (function (state_32099){
while(true){
var ret_value__30542__auto__ = (function (){try{while(true){
var result__30543__auto__ = switch__30540__auto__(state_32099);
if(cljs.core.keyword_identical_QMARK_(result__30543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30543__auto__;
}
break;
}
}catch (e32123){var ex__30544__auto__ = e32123;
var statearr_32124_35082 = state_32099;
(statearr_32124_35082[(2)] = ex__30544__auto__);


if(cljs.core.seq((state_32099[(4)]))){
var statearr_32127_35083 = state_32099;
(statearr_32127_35083[(1)] = cljs.core.first((state_32099[(4)])));

} else {
throw ex__30544__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35084 = state_32099;
state_32099 = G__35084;
continue;
} else {
return ret_value__30542__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30541__auto__ = function(state_32099){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30541__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30541__auto____1.call(this,state_32099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30541__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30541__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30541__auto__;
})()
;})(__35065,switch__30540__auto__,c__31680__auto___35070,G__32086_35067,G__32086_35068__$1,n__5762__auto___35064,jobs,results,process__$1,async))
})();
var state__31682__auto__ = (function (){var statearr_32132 = f__31681__auto__();
(statearr_32132[(6)] = c__31680__auto___35070);

return statearr_32132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31682__auto__);
});})(__35065,c__31680__auto___35070,G__32086_35067,G__32086_35068__$1,n__5762__auto___35064,jobs,results,process__$1,async))
);


break;
case "async":
var c__31680__auto___35089 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35065,c__31680__auto___35089,G__32086_35067,G__32086_35068__$1,n__5762__auto___35064,jobs,results,process__$1,async){
return (function (){
var f__31681__auto__ = (function (){var switch__30540__auto__ = ((function (__35065,c__31680__auto___35089,G__32086_35067,G__32086_35068__$1,n__5762__auto___35064,jobs,results,process__$1,async){
return (function (state_32147){
var state_val_32148 = (state_32147[(1)]);
if((state_val_32148 === (1))){
var state_32147__$1 = state_32147;
var statearr_32149_35093 = state_32147__$1;
(statearr_32149_35093[(2)] = null);

(statearr_32149_35093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32148 === (2))){
var state_32147__$1 = state_32147;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32147__$1,(4),jobs);
} else {
if((state_val_32148 === (3))){
var inst_32145 = (state_32147[(2)]);
var state_32147__$1 = state_32147;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32147__$1,inst_32145);
} else {
if((state_val_32148 === (4))){
var inst_32137 = (state_32147[(2)]);
var inst_32138 = async(inst_32137);
var state_32147__$1 = state_32147;
if(cljs.core.truth_(inst_32138)){
var statearr_32157_35108 = state_32147__$1;
(statearr_32157_35108[(1)] = (5));

} else {
var statearr_32158_35109 = state_32147__$1;
(statearr_32158_35109[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32148 === (5))){
var state_32147__$1 = state_32147;
var statearr_32161_35110 = state_32147__$1;
(statearr_32161_35110[(2)] = null);

(statearr_32161_35110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32148 === (6))){
var state_32147__$1 = state_32147;
var statearr_32164_35118 = state_32147__$1;
(statearr_32164_35118[(2)] = null);

(statearr_32164_35118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32148 === (7))){
var inst_32143 = (state_32147[(2)]);
var state_32147__$1 = state_32147;
var statearr_32165_35123 = state_32147__$1;
(statearr_32165_35123[(2)] = inst_32143);

(statearr_32165_35123[(1)] = (3));


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
});})(__35065,c__31680__auto___35089,G__32086_35067,G__32086_35068__$1,n__5762__auto___35064,jobs,results,process__$1,async))
;
return ((function (__35065,switch__30540__auto__,c__31680__auto___35089,G__32086_35067,G__32086_35068__$1,n__5762__auto___35064,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30541__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30541__auto____0 = (function (){
var statearr_32166 = [null,null,null,null,null,null,null];
(statearr_32166[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30541__auto__);

(statearr_32166[(1)] = (1));

return statearr_32166;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30541__auto____1 = (function (state_32147){
while(true){
var ret_value__30542__auto__ = (function (){try{while(true){
var result__30543__auto__ = switch__30540__auto__(state_32147);
if(cljs.core.keyword_identical_QMARK_(result__30543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30543__auto__;
}
break;
}
}catch (e32167){var ex__30544__auto__ = e32167;
var statearr_32168_35132 = state_32147;
(statearr_32168_35132[(2)] = ex__30544__auto__);


if(cljs.core.seq((state_32147[(4)]))){
var statearr_32170_35134 = state_32147;
(statearr_32170_35134[(1)] = cljs.core.first((state_32147[(4)])));

} else {
throw ex__30544__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35141 = state_32147;
state_32147 = G__35141;
continue;
} else {
return ret_value__30542__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30541__auto__ = function(state_32147){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30541__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30541__auto____1.call(this,state_32147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30541__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30541__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30541__auto__;
})()
;})(__35065,switch__30540__auto__,c__31680__auto___35089,G__32086_35067,G__32086_35068__$1,n__5762__auto___35064,jobs,results,process__$1,async))
})();
var state__31682__auto__ = (function (){var statearr_32175 = f__31681__auto__();
(statearr_32175[(6)] = c__31680__auto___35089);

return statearr_32175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31682__auto__);
});})(__35065,c__31680__auto___35089,G__32086_35067,G__32086_35068__$1,n__5762__auto___35064,jobs,results,process__$1,async))
);


break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32086_35068__$1))));

}

var G__35146 = (__35065 + (1));
__35065 = G__35146;
continue;
} else {
}
break;
}

var c__31680__auto___35147 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31681__auto__ = (function (){var switch__30540__auto__ = (function (state_32200){
var state_val_32201 = (state_32200[(1)]);
if((state_val_32201 === (7))){
var inst_32194 = (state_32200[(2)]);
var state_32200__$1 = state_32200;
var statearr_32208_35153 = state_32200__$1;
(statearr_32208_35153[(2)] = inst_32194);

(statearr_32208_35153[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32201 === (1))){
var state_32200__$1 = state_32200;
var statearr_32210_35156 = state_32200__$1;
(statearr_32210_35156[(2)] = null);

(statearr_32210_35156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32201 === (4))){
var inst_32178 = (state_32200[(7)]);
var inst_32178__$1 = (state_32200[(2)]);
var inst_32179 = (inst_32178__$1 == null);
var state_32200__$1 = (function (){var statearr_32213 = state_32200;
(statearr_32213[(7)] = inst_32178__$1);

return statearr_32213;
})();
if(cljs.core.truth_(inst_32179)){
var statearr_32217_35157 = state_32200__$1;
(statearr_32217_35157[(1)] = (5));

} else {
var statearr_32220_35158 = state_32200__$1;
(statearr_32220_35158[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32201 === (6))){
var inst_32178 = (state_32200[(7)]);
var inst_32183 = (state_32200[(8)]);
var inst_32183__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_32185 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32186 = [inst_32178,inst_32183__$1];
var inst_32187 = (new cljs.core.PersistentVector(null,2,(5),inst_32185,inst_32186,null));
var state_32200__$1 = (function (){var statearr_32225 = state_32200;
(statearr_32225[(8)] = inst_32183__$1);

return statearr_32225;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32200__$1,(8),jobs,inst_32187);
} else {
if((state_val_32201 === (3))){
var inst_32197 = (state_32200[(2)]);
var state_32200__$1 = state_32200;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32200__$1,inst_32197);
} else {
if((state_val_32201 === (2))){
var state_32200__$1 = state_32200;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32200__$1,(4),from);
} else {
if((state_val_32201 === (9))){
var inst_32191 = (state_32200[(2)]);
var state_32200__$1 = (function (){var statearr_32226 = state_32200;
(statearr_32226[(9)] = inst_32191);

return statearr_32226;
})();
var statearr_32227_35165 = state_32200__$1;
(statearr_32227_35165[(2)] = null);

(statearr_32227_35165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32201 === (5))){
var inst_32181 = cljs.core.async.close_BANG_(jobs);
var state_32200__$1 = state_32200;
var statearr_32228_35166 = state_32200__$1;
(statearr_32228_35166[(2)] = inst_32181);

(statearr_32228_35166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32201 === (8))){
var inst_32183 = (state_32200[(8)]);
var inst_32189 = (state_32200[(2)]);
var state_32200__$1 = (function (){var statearr_32229 = state_32200;
(statearr_32229[(10)] = inst_32189);

return statearr_32229;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32200__$1,(9),results,inst_32183);
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
var cljs$core$async$pipeline_STAR__$_state_machine__30541__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30541__auto____0 = (function (){
var statearr_32232 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32232[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30541__auto__);

(statearr_32232[(1)] = (1));

return statearr_32232;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30541__auto____1 = (function (state_32200){
while(true){
var ret_value__30542__auto__ = (function (){try{while(true){
var result__30543__auto__ = switch__30540__auto__(state_32200);
if(cljs.core.keyword_identical_QMARK_(result__30543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30543__auto__;
}
break;
}
}catch (e32237){var ex__30544__auto__ = e32237;
var statearr_32238_35168 = state_32200;
(statearr_32238_35168[(2)] = ex__30544__auto__);


if(cljs.core.seq((state_32200[(4)]))){
var statearr_32239_35169 = state_32200;
(statearr_32239_35169[(1)] = cljs.core.first((state_32200[(4)])));

} else {
throw ex__30544__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35173 = state_32200;
state_32200 = G__35173;
continue;
} else {
return ret_value__30542__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30541__auto__ = function(state_32200){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30541__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30541__auto____1.call(this,state_32200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30541__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30541__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30541__auto__;
})()
})();
var state__31682__auto__ = (function (){var statearr_32240 = f__31681__auto__();
(statearr_32240[(6)] = c__31680__auto___35147);

return statearr_32240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31682__auto__);
}));


var c__31680__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31681__auto__ = (function (){var switch__30540__auto__ = (function (state_32283){
var state_val_32284 = (state_32283[(1)]);
if((state_val_32284 === (7))){
var inst_32279 = (state_32283[(2)]);
var state_32283__$1 = state_32283;
var statearr_32289_35189 = state_32283__$1;
(statearr_32289_35189[(2)] = inst_32279);

(statearr_32289_35189[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32284 === (20))){
var state_32283__$1 = state_32283;
var statearr_32291_35199 = state_32283__$1;
(statearr_32291_35199[(2)] = null);

(statearr_32291_35199[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32284 === (1))){
var state_32283__$1 = state_32283;
var statearr_32293_35207 = state_32283__$1;
(statearr_32293_35207[(2)] = null);

(statearr_32293_35207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32284 === (4))){
var inst_32243 = (state_32283[(7)]);
var inst_32243__$1 = (state_32283[(2)]);
var inst_32245 = (inst_32243__$1 == null);
var state_32283__$1 = (function (){var statearr_32297 = state_32283;
(statearr_32297[(7)] = inst_32243__$1);

return statearr_32297;
})();
if(cljs.core.truth_(inst_32245)){
var statearr_32300_35212 = state_32283__$1;
(statearr_32300_35212[(1)] = (5));

} else {
var statearr_32301_35215 = state_32283__$1;
(statearr_32301_35215[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32284 === (15))){
var inst_32259 = (state_32283[(8)]);
var state_32283__$1 = state_32283;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32283__$1,(18),to,inst_32259);
} else {
if((state_val_32284 === (21))){
var inst_32274 = (state_32283[(2)]);
var state_32283__$1 = state_32283;
var statearr_32307_35218 = state_32283__$1;
(statearr_32307_35218[(2)] = inst_32274);

(statearr_32307_35218[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32284 === (13))){
var inst_32276 = (state_32283[(2)]);
var state_32283__$1 = (function (){var statearr_32309 = state_32283;
(statearr_32309[(9)] = inst_32276);

return statearr_32309;
})();
var statearr_32310_35226 = state_32283__$1;
(statearr_32310_35226[(2)] = null);

(statearr_32310_35226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32284 === (6))){
var inst_32243 = (state_32283[(7)]);
var state_32283__$1 = state_32283;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32283__$1,(11),inst_32243);
} else {
if((state_val_32284 === (17))){
var inst_32269 = (state_32283[(2)]);
var state_32283__$1 = state_32283;
if(cljs.core.truth_(inst_32269)){
var statearr_32318_35232 = state_32283__$1;
(statearr_32318_35232[(1)] = (19));

} else {
var statearr_32320_35234 = state_32283__$1;
(statearr_32320_35234[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32284 === (3))){
var inst_32281 = (state_32283[(2)]);
var state_32283__$1 = state_32283;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32283__$1,inst_32281);
} else {
if((state_val_32284 === (12))){
var inst_32254 = (state_32283[(10)]);
var state_32283__$1 = state_32283;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32283__$1,(14),inst_32254);
} else {
if((state_val_32284 === (2))){
var state_32283__$1 = state_32283;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32283__$1,(4),results);
} else {
if((state_val_32284 === (19))){
var state_32283__$1 = state_32283;
var statearr_32327_35236 = state_32283__$1;
(statearr_32327_35236[(2)] = null);

(statearr_32327_35236[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32284 === (11))){
var inst_32254 = (state_32283[(2)]);
var state_32283__$1 = (function (){var statearr_32329 = state_32283;
(statearr_32329[(10)] = inst_32254);

return statearr_32329;
})();
var statearr_32335_35237 = state_32283__$1;
(statearr_32335_35237[(2)] = null);

(statearr_32335_35237[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32284 === (9))){
var state_32283__$1 = state_32283;
var statearr_32339_35238 = state_32283__$1;
(statearr_32339_35238[(2)] = null);

(statearr_32339_35238[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32284 === (5))){
var state_32283__$1 = state_32283;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32351_35239 = state_32283__$1;
(statearr_32351_35239[(1)] = (8));

} else {
var statearr_32352_35240 = state_32283__$1;
(statearr_32352_35240[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32284 === (14))){
var inst_32259 = (state_32283[(8)]);
var inst_32263 = (state_32283[(11)]);
var inst_32259__$1 = (state_32283[(2)]);
var inst_32262 = (inst_32259__$1 == null);
var inst_32263__$1 = cljs.core.not(inst_32262);
var state_32283__$1 = (function (){var statearr_32356 = state_32283;
(statearr_32356[(8)] = inst_32259__$1);

(statearr_32356[(11)] = inst_32263__$1);

return statearr_32356;
})();
if(inst_32263__$1){
var statearr_32358_35241 = state_32283__$1;
(statearr_32358_35241[(1)] = (15));

} else {
var statearr_32359_35242 = state_32283__$1;
(statearr_32359_35242[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32284 === (16))){
var inst_32263 = (state_32283[(11)]);
var state_32283__$1 = state_32283;
var statearr_32364_35243 = state_32283__$1;
(statearr_32364_35243[(2)] = inst_32263);

(statearr_32364_35243[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32284 === (10))){
var inst_32251 = (state_32283[(2)]);
var state_32283__$1 = state_32283;
var statearr_32368_35247 = state_32283__$1;
(statearr_32368_35247[(2)] = inst_32251);

(statearr_32368_35247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32284 === (18))){
var inst_32266 = (state_32283[(2)]);
var state_32283__$1 = state_32283;
var statearr_32369_35248 = state_32283__$1;
(statearr_32369_35248[(2)] = inst_32266);

(statearr_32369_35248[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32284 === (8))){
var inst_32248 = cljs.core.async.close_BANG_(to);
var state_32283__$1 = state_32283;
var statearr_32373_35249 = state_32283__$1;
(statearr_32373_35249[(2)] = inst_32248);

(statearr_32373_35249[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__30541__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30541__auto____0 = (function (){
var statearr_32375 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32375[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30541__auto__);

(statearr_32375[(1)] = (1));

return statearr_32375;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30541__auto____1 = (function (state_32283){
while(true){
var ret_value__30542__auto__ = (function (){try{while(true){
var result__30543__auto__ = switch__30540__auto__(state_32283);
if(cljs.core.keyword_identical_QMARK_(result__30543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30543__auto__;
}
break;
}
}catch (e32382){var ex__30544__auto__ = e32382;
var statearr_32384_35256 = state_32283;
(statearr_32384_35256[(2)] = ex__30544__auto__);


if(cljs.core.seq((state_32283[(4)]))){
var statearr_32386_35257 = state_32283;
(statearr_32386_35257[(1)] = cljs.core.first((state_32283[(4)])));

} else {
throw ex__30544__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35259 = state_32283;
state_32283 = G__35259;
continue;
} else {
return ret_value__30542__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30541__auto__ = function(state_32283){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30541__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30541__auto____1.call(this,state_32283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30541__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30541__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30541__auto__;
})()
})();
var state__31682__auto__ = (function (){var statearr_32393 = f__31681__auto__();
(statearr_32393[(6)] = c__31680__auto__);

return statearr_32393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31682__auto__);
}));

return c__31680__auto__;
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
var G__32401 = arguments.length;
switch (G__32401) {
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
var G__32414 = arguments.length;
switch (G__32414) {
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
var G__32436 = arguments.length;
switch (G__32436) {
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
var c__31680__auto___35274 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31681__auto__ = (function (){var switch__30540__auto__ = (function (state_32478){
var state_val_32479 = (state_32478[(1)]);
if((state_val_32479 === (7))){
var inst_32474 = (state_32478[(2)]);
var state_32478__$1 = state_32478;
var statearr_32489_35275 = state_32478__$1;
(statearr_32489_35275[(2)] = inst_32474);

(statearr_32489_35275[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32479 === (1))){
var state_32478__$1 = state_32478;
var statearr_32491_35276 = state_32478__$1;
(statearr_32491_35276[(2)] = null);

(statearr_32491_35276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32479 === (4))){
var inst_32454 = (state_32478[(7)]);
var inst_32454__$1 = (state_32478[(2)]);
var inst_32455 = (inst_32454__$1 == null);
var state_32478__$1 = (function (){var statearr_32496 = state_32478;
(statearr_32496[(7)] = inst_32454__$1);

return statearr_32496;
})();
if(cljs.core.truth_(inst_32455)){
var statearr_32497_35280 = state_32478__$1;
(statearr_32497_35280[(1)] = (5));

} else {
var statearr_32498_35281 = state_32478__$1;
(statearr_32498_35281[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32479 === (13))){
var state_32478__$1 = state_32478;
var statearr_32500_35282 = state_32478__$1;
(statearr_32500_35282[(2)] = null);

(statearr_32500_35282[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32479 === (6))){
var inst_32454 = (state_32478[(7)]);
var inst_32460 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32454) : p.call(null,inst_32454));
var state_32478__$1 = state_32478;
if(cljs.core.truth_(inst_32460)){
var statearr_32501_35284 = state_32478__$1;
(statearr_32501_35284[(1)] = (9));

} else {
var statearr_32502_35285 = state_32478__$1;
(statearr_32502_35285[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32479 === (3))){
var inst_32476 = (state_32478[(2)]);
var state_32478__$1 = state_32478;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32478__$1,inst_32476);
} else {
if((state_val_32479 === (12))){
var state_32478__$1 = state_32478;
var statearr_32504_35290 = state_32478__$1;
(statearr_32504_35290[(2)] = null);

(statearr_32504_35290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32479 === (2))){
var state_32478__$1 = state_32478;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32478__$1,(4),ch);
} else {
if((state_val_32479 === (11))){
var inst_32454 = (state_32478[(7)]);
var inst_32465 = (state_32478[(2)]);
var state_32478__$1 = state_32478;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32478__$1,(8),inst_32465,inst_32454);
} else {
if((state_val_32479 === (9))){
var state_32478__$1 = state_32478;
var statearr_32512_35295 = state_32478__$1;
(statearr_32512_35295[(2)] = tc);

(statearr_32512_35295[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32479 === (5))){
var inst_32457 = cljs.core.async.close_BANG_(tc);
var inst_32458 = cljs.core.async.close_BANG_(fc);
var state_32478__$1 = (function (){var statearr_32517 = state_32478;
(statearr_32517[(8)] = inst_32457);

return statearr_32517;
})();
var statearr_32520_35297 = state_32478__$1;
(statearr_32520_35297[(2)] = inst_32458);

(statearr_32520_35297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32479 === (14))){
var inst_32472 = (state_32478[(2)]);
var state_32478__$1 = state_32478;
var statearr_32523_35298 = state_32478__$1;
(statearr_32523_35298[(2)] = inst_32472);

(statearr_32523_35298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32479 === (10))){
var state_32478__$1 = state_32478;
var statearr_32526_35300 = state_32478__$1;
(statearr_32526_35300[(2)] = fc);

(statearr_32526_35300[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32479 === (8))){
var inst_32467 = (state_32478[(2)]);
var state_32478__$1 = state_32478;
if(cljs.core.truth_(inst_32467)){
var statearr_32528_35301 = state_32478__$1;
(statearr_32528_35301[(1)] = (12));

} else {
var statearr_32529_35302 = state_32478__$1;
(statearr_32529_35302[(1)] = (13));

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
var cljs$core$async$state_machine__30541__auto__ = null;
var cljs$core$async$state_machine__30541__auto____0 = (function (){
var statearr_32533 = [null,null,null,null,null,null,null,null,null];
(statearr_32533[(0)] = cljs$core$async$state_machine__30541__auto__);

(statearr_32533[(1)] = (1));

return statearr_32533;
});
var cljs$core$async$state_machine__30541__auto____1 = (function (state_32478){
while(true){
var ret_value__30542__auto__ = (function (){try{while(true){
var result__30543__auto__ = switch__30540__auto__(state_32478);
if(cljs.core.keyword_identical_QMARK_(result__30543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30543__auto__;
}
break;
}
}catch (e32536){var ex__30544__auto__ = e32536;
var statearr_32537_35307 = state_32478;
(statearr_32537_35307[(2)] = ex__30544__auto__);


if(cljs.core.seq((state_32478[(4)]))){
var statearr_32540_35309 = state_32478;
(statearr_32540_35309[(1)] = cljs.core.first((state_32478[(4)])));

} else {
throw ex__30544__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35310 = state_32478;
state_32478 = G__35310;
continue;
} else {
return ret_value__30542__auto__;
}
break;
}
});
cljs$core$async$state_machine__30541__auto__ = function(state_32478){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30541__auto____1.call(this,state_32478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30541__auto____0;
cljs$core$async$state_machine__30541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30541__auto____1;
return cljs$core$async$state_machine__30541__auto__;
})()
})();
var state__31682__auto__ = (function (){var statearr_32548 = f__31681__auto__();
(statearr_32548[(6)] = c__31680__auto___35274);

return statearr_32548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31682__auto__);
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
var c__31680__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31681__auto__ = (function (){var switch__30540__auto__ = (function (state_32591){
var state_val_32592 = (state_32591[(1)]);
if((state_val_32592 === (7))){
var inst_32587 = (state_32591[(2)]);
var state_32591__$1 = state_32591;
var statearr_32604_35312 = state_32591__$1;
(statearr_32604_35312[(2)] = inst_32587);

(statearr_32604_35312[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32592 === (1))){
var inst_32564 = init;
var inst_32565 = inst_32564;
var state_32591__$1 = (function (){var statearr_32609 = state_32591;
(statearr_32609[(7)] = inst_32565);

return statearr_32609;
})();
var statearr_32610_35314 = state_32591__$1;
(statearr_32610_35314[(2)] = null);

(statearr_32610_35314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32592 === (4))){
var inst_32570 = (state_32591[(8)]);
var inst_32570__$1 = (state_32591[(2)]);
var inst_32571 = (inst_32570__$1 == null);
var state_32591__$1 = (function (){var statearr_32614 = state_32591;
(statearr_32614[(8)] = inst_32570__$1);

return statearr_32614;
})();
if(cljs.core.truth_(inst_32571)){
var statearr_32617_35317 = state_32591__$1;
(statearr_32617_35317[(1)] = (5));

} else {
var statearr_32619_35321 = state_32591__$1;
(statearr_32619_35321[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32592 === (6))){
var inst_32565 = (state_32591[(7)]);
var inst_32570 = (state_32591[(8)]);
var inst_32576 = (state_32591[(9)]);
var inst_32576__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_32565,inst_32570) : f.call(null,inst_32565,inst_32570));
var inst_32577 = cljs.core.reduced_QMARK_(inst_32576__$1);
var state_32591__$1 = (function (){var statearr_32624 = state_32591;
(statearr_32624[(9)] = inst_32576__$1);

return statearr_32624;
})();
if(inst_32577){
var statearr_32626_35326 = state_32591__$1;
(statearr_32626_35326[(1)] = (8));

} else {
var statearr_32629_35327 = state_32591__$1;
(statearr_32629_35327[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32592 === (3))){
var inst_32589 = (state_32591[(2)]);
var state_32591__$1 = state_32591;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32591__$1,inst_32589);
} else {
if((state_val_32592 === (2))){
var state_32591__$1 = state_32591;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32591__$1,(4),ch);
} else {
if((state_val_32592 === (9))){
var inst_32576 = (state_32591[(9)]);
var inst_32565 = inst_32576;
var state_32591__$1 = (function (){var statearr_32635 = state_32591;
(statearr_32635[(7)] = inst_32565);

return statearr_32635;
})();
var statearr_32637_35329 = state_32591__$1;
(statearr_32637_35329[(2)] = null);

(statearr_32637_35329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32592 === (5))){
var inst_32565 = (state_32591[(7)]);
var state_32591__$1 = state_32591;
var statearr_32640_35330 = state_32591__$1;
(statearr_32640_35330[(2)] = inst_32565);

(statearr_32640_35330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32592 === (10))){
var inst_32585 = (state_32591[(2)]);
var state_32591__$1 = state_32591;
var statearr_32642_35334 = state_32591__$1;
(statearr_32642_35334[(2)] = inst_32585);

(statearr_32642_35334[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32592 === (8))){
var inst_32576 = (state_32591[(9)]);
var inst_32581 = cljs.core.deref(inst_32576);
var state_32591__$1 = state_32591;
var statearr_32645_35335 = state_32591__$1;
(statearr_32645_35335[(2)] = inst_32581);

(statearr_32645_35335[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__30541__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30541__auto____0 = (function (){
var statearr_32648 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32648[(0)] = cljs$core$async$reduce_$_state_machine__30541__auto__);

(statearr_32648[(1)] = (1));

return statearr_32648;
});
var cljs$core$async$reduce_$_state_machine__30541__auto____1 = (function (state_32591){
while(true){
var ret_value__30542__auto__ = (function (){try{while(true){
var result__30543__auto__ = switch__30540__auto__(state_32591);
if(cljs.core.keyword_identical_QMARK_(result__30543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30543__auto__;
}
break;
}
}catch (e32651){var ex__30544__auto__ = e32651;
var statearr_32653_35341 = state_32591;
(statearr_32653_35341[(2)] = ex__30544__auto__);


if(cljs.core.seq((state_32591[(4)]))){
var statearr_32654_35342 = state_32591;
(statearr_32654_35342[(1)] = cljs.core.first((state_32591[(4)])));

} else {
throw ex__30544__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35344 = state_32591;
state_32591 = G__35344;
continue;
} else {
return ret_value__30542__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30541__auto__ = function(state_32591){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30541__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30541__auto____1.call(this,state_32591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30541__auto____0;
cljs$core$async$reduce_$_state_machine__30541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30541__auto____1;
return cljs$core$async$reduce_$_state_machine__30541__auto__;
})()
})();
var state__31682__auto__ = (function (){var statearr_32658 = f__31681__auto__();
(statearr_32658[(6)] = c__31680__auto__);

return statearr_32658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31682__auto__);
}));

return c__31680__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__31680__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31681__auto__ = (function (){var switch__30540__auto__ = (function (state_32674){
var state_val_32675 = (state_32674[(1)]);
if((state_val_32675 === (1))){
var inst_32668 = cljs.core.async.reduce(f__$1,init,ch);
var state_32674__$1 = state_32674;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32674__$1,(2),inst_32668);
} else {
if((state_val_32675 === (2))){
var inst_32670 = (state_32674[(2)]);
var inst_32672 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_32670) : f__$1.call(null,inst_32670));
var state_32674__$1 = state_32674;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32674__$1,inst_32672);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__30541__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30541__auto____0 = (function (){
var statearr_32683 = [null,null,null,null,null,null,null];
(statearr_32683[(0)] = cljs$core$async$transduce_$_state_machine__30541__auto__);

(statearr_32683[(1)] = (1));

return statearr_32683;
});
var cljs$core$async$transduce_$_state_machine__30541__auto____1 = (function (state_32674){
while(true){
var ret_value__30542__auto__ = (function (){try{while(true){
var result__30543__auto__ = switch__30540__auto__(state_32674);
if(cljs.core.keyword_identical_QMARK_(result__30543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30543__auto__;
}
break;
}
}catch (e32685){var ex__30544__auto__ = e32685;
var statearr_32686_35349 = state_32674;
(statearr_32686_35349[(2)] = ex__30544__auto__);


if(cljs.core.seq((state_32674[(4)]))){
var statearr_32688_35350 = state_32674;
(statearr_32688_35350[(1)] = cljs.core.first((state_32674[(4)])));

} else {
throw ex__30544__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35351 = state_32674;
state_32674 = G__35351;
continue;
} else {
return ret_value__30542__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30541__auto__ = function(state_32674){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30541__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30541__auto____1.call(this,state_32674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30541__auto____0;
cljs$core$async$transduce_$_state_machine__30541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30541__auto____1;
return cljs$core$async$transduce_$_state_machine__30541__auto__;
})()
})();
var state__31682__auto__ = (function (){var statearr_32694 = f__31681__auto__();
(statearr_32694[(6)] = c__31680__auto__);

return statearr_32694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31682__auto__);
}));

return c__31680__auto__;
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
var G__32699 = arguments.length;
switch (G__32699) {
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
var c__31680__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31681__auto__ = (function (){var switch__30540__auto__ = (function (state_32730){
var state_val_32733 = (state_32730[(1)]);
if((state_val_32733 === (7))){
var inst_32712 = (state_32730[(2)]);
var state_32730__$1 = state_32730;
var statearr_32736_35364 = state_32730__$1;
(statearr_32736_35364[(2)] = inst_32712);

(statearr_32736_35364[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32733 === (1))){
var inst_32706 = cljs.core.seq(coll);
var inst_32707 = inst_32706;
var state_32730__$1 = (function (){var statearr_32737 = state_32730;
(statearr_32737[(7)] = inst_32707);

return statearr_32737;
})();
var statearr_32740_35365 = state_32730__$1;
(statearr_32740_35365[(2)] = null);

(statearr_32740_35365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32733 === (4))){
var inst_32707 = (state_32730[(7)]);
var inst_32710 = cljs.core.first(inst_32707);
var state_32730__$1 = state_32730;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32730__$1,(7),ch,inst_32710);
} else {
if((state_val_32733 === (13))){
var inst_32724 = (state_32730[(2)]);
var state_32730__$1 = state_32730;
var statearr_32744_35366 = state_32730__$1;
(statearr_32744_35366[(2)] = inst_32724);

(statearr_32744_35366[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32733 === (6))){
var inst_32715 = (state_32730[(2)]);
var state_32730__$1 = state_32730;
if(cljs.core.truth_(inst_32715)){
var statearr_32745_35371 = state_32730__$1;
(statearr_32745_35371[(1)] = (8));

} else {
var statearr_32746_35372 = state_32730__$1;
(statearr_32746_35372[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32733 === (3))){
var inst_32728 = (state_32730[(2)]);
var state_32730__$1 = state_32730;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32730__$1,inst_32728);
} else {
if((state_val_32733 === (12))){
var state_32730__$1 = state_32730;
var statearr_32747_35374 = state_32730__$1;
(statearr_32747_35374[(2)] = null);

(statearr_32747_35374[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32733 === (2))){
var inst_32707 = (state_32730[(7)]);
var state_32730__$1 = state_32730;
if(cljs.core.truth_(inst_32707)){
var statearr_32750_35375 = state_32730__$1;
(statearr_32750_35375[(1)] = (4));

} else {
var statearr_32751_35376 = state_32730__$1;
(statearr_32751_35376[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32733 === (11))){
var inst_32721 = cljs.core.async.close_BANG_(ch);
var state_32730__$1 = state_32730;
var statearr_32753_35377 = state_32730__$1;
(statearr_32753_35377[(2)] = inst_32721);

(statearr_32753_35377[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32733 === (9))){
var state_32730__$1 = state_32730;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32760_35381 = state_32730__$1;
(statearr_32760_35381[(1)] = (11));

} else {
var statearr_32761_35383 = state_32730__$1;
(statearr_32761_35383[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32733 === (5))){
var inst_32707 = (state_32730[(7)]);
var state_32730__$1 = state_32730;
var statearr_32762_35384 = state_32730__$1;
(statearr_32762_35384[(2)] = inst_32707);

(statearr_32762_35384[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32733 === (10))){
var inst_32726 = (state_32730[(2)]);
var state_32730__$1 = state_32730;
var statearr_32764_35385 = state_32730__$1;
(statearr_32764_35385[(2)] = inst_32726);

(statearr_32764_35385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32733 === (8))){
var inst_32707 = (state_32730[(7)]);
var inst_32717 = cljs.core.next(inst_32707);
var inst_32707__$1 = inst_32717;
var state_32730__$1 = (function (){var statearr_32766 = state_32730;
(statearr_32766[(7)] = inst_32707__$1);

return statearr_32766;
})();
var statearr_32767_35386 = state_32730__$1;
(statearr_32767_35386[(2)] = null);

(statearr_32767_35386[(1)] = (2));


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
var cljs$core$async$state_machine__30541__auto__ = null;
var cljs$core$async$state_machine__30541__auto____0 = (function (){
var statearr_32768 = [null,null,null,null,null,null,null,null];
(statearr_32768[(0)] = cljs$core$async$state_machine__30541__auto__);

(statearr_32768[(1)] = (1));

return statearr_32768;
});
var cljs$core$async$state_machine__30541__auto____1 = (function (state_32730){
while(true){
var ret_value__30542__auto__ = (function (){try{while(true){
var result__30543__auto__ = switch__30540__auto__(state_32730);
if(cljs.core.keyword_identical_QMARK_(result__30543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30543__auto__;
}
break;
}
}catch (e32769){var ex__30544__auto__ = e32769;
var statearr_32770_35395 = state_32730;
(statearr_32770_35395[(2)] = ex__30544__auto__);


if(cljs.core.seq((state_32730[(4)]))){
var statearr_32773_35396 = state_32730;
(statearr_32773_35396[(1)] = cljs.core.first((state_32730[(4)])));

} else {
throw ex__30544__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35400 = state_32730;
state_32730 = G__35400;
continue;
} else {
return ret_value__30542__auto__;
}
break;
}
});
cljs$core$async$state_machine__30541__auto__ = function(state_32730){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30541__auto____1.call(this,state_32730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30541__auto____0;
cljs$core$async$state_machine__30541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30541__auto____1;
return cljs$core$async$state_machine__30541__auto__;
})()
})();
var state__31682__auto__ = (function (){var statearr_32778 = f__31681__auto__();
(statearr_32778[(6)] = c__31680__auto__);

return statearr_32778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31682__auto__);
}));

return c__31680__auto__;
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
var G__32780 = arguments.length;
switch (G__32780) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_35405 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_35405(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_35407 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_35407(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_35410 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_35410(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_35417 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_35417(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32838 = (function (ch,cs,meta32839){
this.ch = ch;
this.cs = cs;
this.meta32839 = meta32839;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32838.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32840,meta32839__$1){
var self__ = this;
var _32840__$1 = this;
return (new cljs.core.async.t_cljs$core$async32838(self__.ch,self__.cs,meta32839__$1));
}));

(cljs.core.async.t_cljs$core$async32838.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32840){
var self__ = this;
var _32840__$1 = this;
return self__.meta32839;
}));

(cljs.core.async.t_cljs$core$async32838.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32838.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32838.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32838.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async32838.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async32838.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async32838.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32839","meta32839",1901742144,null)], null);
}));

(cljs.core.async.t_cljs$core$async32838.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32838.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32838");

(cljs.core.async.t_cljs$core$async32838.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async32838");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32838.
 */
cljs.core.async.__GT_t_cljs$core$async32838 = (function cljs$core$async$__GT_t_cljs$core$async32838(ch,cs,meta32839){
return (new cljs.core.async.t_cljs$core$async32838(ch,cs,meta32839));
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
var m = (new cljs.core.async.t_cljs$core$async32838(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__31680__auto___35447 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31681__auto__ = (function (){var switch__30540__auto__ = (function (state_33019){
var state_val_33020 = (state_33019[(1)]);
if((state_val_33020 === (7))){
var inst_33014 = (state_33019[(2)]);
var state_33019__$1 = state_33019;
var statearr_33025_35453 = state_33019__$1;
(statearr_33025_35453[(2)] = inst_33014);

(statearr_33025_35453[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33020 === (20))){
var inst_32895 = (state_33019[(7)]);
var inst_32907 = cljs.core.first(inst_32895);
var inst_32908 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32907,(0),null);
var inst_32909 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32907,(1),null);
var state_33019__$1 = (function (){var statearr_33026 = state_33019;
(statearr_33026[(8)] = inst_32908);

return statearr_33026;
})();
if(cljs.core.truth_(inst_32909)){
var statearr_33028_35467 = state_33019__$1;
(statearr_33028_35467[(1)] = (22));

} else {
var statearr_33029_35468 = state_33019__$1;
(statearr_33029_35468[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33020 === (27))){
var inst_32947 = (state_33019[(9)]);
var inst_32949 = (state_33019[(10)]);
var inst_32954 = (state_33019[(11)]);
var inst_32859 = (state_33019[(12)]);
var inst_32954__$1 = cljs.core._nth(inst_32947,inst_32949);
var inst_32955 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32954__$1,inst_32859,done);
var state_33019__$1 = (function (){var statearr_33030 = state_33019;
(statearr_33030[(11)] = inst_32954__$1);

return statearr_33030;
})();
if(cljs.core.truth_(inst_32955)){
var statearr_33031_35475 = state_33019__$1;
(statearr_33031_35475[(1)] = (30));

} else {
var statearr_33032_35476 = state_33019__$1;
(statearr_33032_35476[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33020 === (1))){
var state_33019__$1 = state_33019;
var statearr_33037_35481 = state_33019__$1;
(statearr_33037_35481[(2)] = null);

(statearr_33037_35481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33020 === (24))){
var inst_32895 = (state_33019[(7)]);
var inst_32918 = (state_33019[(2)]);
var inst_32919 = cljs.core.next(inst_32895);
var inst_32868 = inst_32919;
var inst_32869 = null;
var inst_32870 = (0);
var inst_32871 = (0);
var state_33019__$1 = (function (){var statearr_33043 = state_33019;
(statearr_33043[(13)] = inst_32918);

(statearr_33043[(14)] = inst_32868);

(statearr_33043[(15)] = inst_32869);

(statearr_33043[(16)] = inst_32870);

(statearr_33043[(17)] = inst_32871);

return statearr_33043;
})();
var statearr_33044_35501 = state_33019__$1;
(statearr_33044_35501[(2)] = null);

(statearr_33044_35501[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33020 === (39))){
var state_33019__$1 = state_33019;
var statearr_33056_35503 = state_33019__$1;
(statearr_33056_35503[(2)] = null);

(statearr_33056_35503[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33020 === (4))){
var inst_32859 = (state_33019[(12)]);
var inst_32859__$1 = (state_33019[(2)]);
var inst_32860 = (inst_32859__$1 == null);
var state_33019__$1 = (function (){var statearr_33059 = state_33019;
(statearr_33059[(12)] = inst_32859__$1);

return statearr_33059;
})();
if(cljs.core.truth_(inst_32860)){
var statearr_33060_35504 = state_33019__$1;
(statearr_33060_35504[(1)] = (5));

} else {
var statearr_33064_35505 = state_33019__$1;
(statearr_33064_35505[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33020 === (15))){
var inst_32871 = (state_33019[(17)]);
var inst_32868 = (state_33019[(14)]);
var inst_32869 = (state_33019[(15)]);
var inst_32870 = (state_33019[(16)]);
var inst_32891 = (state_33019[(2)]);
var inst_32892 = (inst_32871 + (1));
var tmp33045 = inst_32868;
var tmp33046 = inst_32870;
var tmp33047 = inst_32869;
var inst_32868__$1 = tmp33045;
var inst_32869__$1 = tmp33047;
var inst_32870__$1 = tmp33046;
var inst_32871__$1 = inst_32892;
var state_33019__$1 = (function (){var statearr_33066 = state_33019;
(statearr_33066[(18)] = inst_32891);

(statearr_33066[(14)] = inst_32868__$1);

(statearr_33066[(15)] = inst_32869__$1);

(statearr_33066[(16)] = inst_32870__$1);

(statearr_33066[(17)] = inst_32871__$1);

return statearr_33066;
})();
var statearr_33067_35520 = state_33019__$1;
(statearr_33067_35520[(2)] = null);

(statearr_33067_35520[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33020 === (21))){
var inst_32922 = (state_33019[(2)]);
var state_33019__$1 = state_33019;
var statearr_33074_35521 = state_33019__$1;
(statearr_33074_35521[(2)] = inst_32922);

(statearr_33074_35521[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33020 === (31))){
var inst_32954 = (state_33019[(11)]);
var inst_32958 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32954);
var state_33019__$1 = state_33019;
var statearr_33075_35528 = state_33019__$1;
(statearr_33075_35528[(2)] = inst_32958);

(statearr_33075_35528[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33020 === (32))){
var inst_32949 = (state_33019[(10)]);
var inst_32946 = (state_33019[(19)]);
var inst_32947 = (state_33019[(9)]);
var inst_32948 = (state_33019[(20)]);
var inst_32960 = (state_33019[(2)]);
var inst_32961 = (inst_32949 + (1));
var tmp33068 = inst_32947;
var tmp33069 = inst_32948;
var tmp33070 = inst_32946;
var inst_32946__$1 = tmp33070;
var inst_32947__$1 = tmp33068;
var inst_32948__$1 = tmp33069;
var inst_32949__$1 = inst_32961;
var state_33019__$1 = (function (){var statearr_33077 = state_33019;
(statearr_33077[(21)] = inst_32960);

(statearr_33077[(19)] = inst_32946__$1);

(statearr_33077[(9)] = inst_32947__$1);

(statearr_33077[(20)] = inst_32948__$1);

(statearr_33077[(10)] = inst_32949__$1);

return statearr_33077;
})();
var statearr_33080_35546 = state_33019__$1;
(statearr_33080_35546[(2)] = null);

(statearr_33080_35546[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33020 === (40))){
var inst_32980 = (state_33019[(22)]);
var inst_32984 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32980);
var state_33019__$1 = state_33019;
var statearr_33081_35548 = state_33019__$1;
(statearr_33081_35548[(2)] = inst_32984);

(statearr_33081_35548[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33020 === (33))){
var inst_32964 = (state_33019[(23)]);
var inst_32966 = cljs.core.chunked_seq_QMARK_(inst_32964);
var state_33019__$1 = state_33019;
if(inst_32966){
var statearr_33082_35553 = state_33019__$1;
(statearr_33082_35553[(1)] = (36));

} else {
var statearr_33083_35554 = state_33019__$1;
(statearr_33083_35554[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33020 === (13))){
var inst_32885 = (state_33019[(24)]);
var inst_32888 = cljs.core.async.close_BANG_(inst_32885);
var state_33019__$1 = state_33019;
var statearr_33088_35559 = state_33019__$1;
(statearr_33088_35559[(2)] = inst_32888);

(statearr_33088_35559[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33020 === (22))){
var inst_32908 = (state_33019[(8)]);
var inst_32915 = cljs.core.async.close_BANG_(inst_32908);
var state_33019__$1 = state_33019;
var statearr_33090_35561 = state_33019__$1;
(statearr_33090_35561[(2)] = inst_32915);

(statearr_33090_35561[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33020 === (36))){
var inst_32964 = (state_33019[(23)]);
var inst_32974 = cljs.core.chunk_first(inst_32964);
var inst_32976 = cljs.core.chunk_rest(inst_32964);
var inst_32977 = cljs.core.count(inst_32974);
var inst_32946 = inst_32976;
var inst_32947 = inst_32974;
var inst_32948 = inst_32977;
var inst_32949 = (0);
var state_33019__$1 = (function (){var statearr_33092 = state_33019;
(statearr_33092[(19)] = inst_32946);

(statearr_33092[(9)] = inst_32947);

(statearr_33092[(20)] = inst_32948);

(statearr_33092[(10)] = inst_32949);

return statearr_33092;
})();
var statearr_33093_35566 = state_33019__$1;
(statearr_33093_35566[(2)] = null);

(statearr_33093_35566[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33020 === (41))){
var inst_32964 = (state_33019[(23)]);
var inst_32986 = (state_33019[(2)]);
var inst_32991 = cljs.core.next(inst_32964);
var inst_32946 = inst_32991;
var inst_32947 = null;
var inst_32948 = (0);
var inst_32949 = (0);
var state_33019__$1 = (function (){var statearr_33094 = state_33019;
(statearr_33094[(25)] = inst_32986);

(statearr_33094[(19)] = inst_32946);

(statearr_33094[(9)] = inst_32947);

(statearr_33094[(20)] = inst_32948);

(statearr_33094[(10)] = inst_32949);

return statearr_33094;
})();
var statearr_33095_35570 = state_33019__$1;
(statearr_33095_35570[(2)] = null);

(statearr_33095_35570[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33020 === (43))){
var state_33019__$1 = state_33019;
var statearr_33096_35571 = state_33019__$1;
(statearr_33096_35571[(2)] = null);

(statearr_33096_35571[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33020 === (29))){
var inst_32999 = (state_33019[(2)]);
var state_33019__$1 = state_33019;
var statearr_33097_35573 = state_33019__$1;
(statearr_33097_35573[(2)] = inst_32999);

(statearr_33097_35573[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33020 === (44))){
var inst_33011 = (state_33019[(2)]);
var state_33019__$1 = (function (){var statearr_33098 = state_33019;
(statearr_33098[(26)] = inst_33011);

return statearr_33098;
})();
var statearr_33100_35578 = state_33019__$1;
(statearr_33100_35578[(2)] = null);

(statearr_33100_35578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33020 === (6))){
var inst_32936 = (state_33019[(27)]);
var inst_32935 = cljs.core.deref(cs);
var inst_32936__$1 = cljs.core.keys(inst_32935);
var inst_32938 = cljs.core.count(inst_32936__$1);
var inst_32939 = cljs.core.reset_BANG_(dctr,inst_32938);
var inst_32945 = cljs.core.seq(inst_32936__$1);
var inst_32946 = inst_32945;
var inst_32947 = null;
var inst_32948 = (0);
var inst_32949 = (0);
var state_33019__$1 = (function (){var statearr_33104 = state_33019;
(statearr_33104[(27)] = inst_32936__$1);

(statearr_33104[(28)] = inst_32939);

(statearr_33104[(19)] = inst_32946);

(statearr_33104[(9)] = inst_32947);

(statearr_33104[(20)] = inst_32948);

(statearr_33104[(10)] = inst_32949);

return statearr_33104;
})();
var statearr_33105_35585 = state_33019__$1;
(statearr_33105_35585[(2)] = null);

(statearr_33105_35585[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33020 === (28))){
var inst_32946 = (state_33019[(19)]);
var inst_32964 = (state_33019[(23)]);
var inst_32964__$1 = cljs.core.seq(inst_32946);
var state_33019__$1 = (function (){var statearr_33106 = state_33019;
(statearr_33106[(23)] = inst_32964__$1);

return statearr_33106;
})();
if(inst_32964__$1){
var statearr_33107_35588 = state_33019__$1;
(statearr_33107_35588[(1)] = (33));

} else {
var statearr_33109_35589 = state_33019__$1;
(statearr_33109_35589[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33020 === (25))){
var inst_32949 = (state_33019[(10)]);
var inst_32948 = (state_33019[(20)]);
var inst_32951 = (inst_32949 < inst_32948);
var inst_32952 = inst_32951;
var state_33019__$1 = state_33019;
if(cljs.core.truth_(inst_32952)){
var statearr_33110_35590 = state_33019__$1;
(statearr_33110_35590[(1)] = (27));

} else {
var statearr_33111_35591 = state_33019__$1;
(statearr_33111_35591[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33020 === (34))){
var state_33019__$1 = state_33019;
var statearr_33112_35593 = state_33019__$1;
(statearr_33112_35593[(2)] = null);

(statearr_33112_35593[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33020 === (17))){
var state_33019__$1 = state_33019;
var statearr_33114_35597 = state_33019__$1;
(statearr_33114_35597[(2)] = null);

(statearr_33114_35597[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33020 === (3))){
var inst_33016 = (state_33019[(2)]);
var state_33019__$1 = state_33019;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33019__$1,inst_33016);
} else {
if((state_val_33020 === (12))){
var inst_32927 = (state_33019[(2)]);
var state_33019__$1 = state_33019;
var statearr_33116_35603 = state_33019__$1;
(statearr_33116_35603[(2)] = inst_32927);

(statearr_33116_35603[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33020 === (2))){
var state_33019__$1 = state_33019;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33019__$1,(4),ch);
} else {
if((state_val_33020 === (23))){
var state_33019__$1 = state_33019;
var statearr_33117_35608 = state_33019__$1;
(statearr_33117_35608[(2)] = null);

(statearr_33117_35608[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33020 === (35))){
var inst_32997 = (state_33019[(2)]);
var state_33019__$1 = state_33019;
var statearr_33118_35609 = state_33019__$1;
(statearr_33118_35609[(2)] = inst_32997);

(statearr_33118_35609[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33020 === (19))){
var inst_32895 = (state_33019[(7)]);
var inst_32899 = cljs.core.chunk_first(inst_32895);
var inst_32900 = cljs.core.chunk_rest(inst_32895);
var inst_32901 = cljs.core.count(inst_32899);
var inst_32868 = inst_32900;
var inst_32869 = inst_32899;
var inst_32870 = inst_32901;
var inst_32871 = (0);
var state_33019__$1 = (function (){var statearr_33119 = state_33019;
(statearr_33119[(14)] = inst_32868);

(statearr_33119[(15)] = inst_32869);

(statearr_33119[(16)] = inst_32870);

(statearr_33119[(17)] = inst_32871);

return statearr_33119;
})();
var statearr_33120_35615 = state_33019__$1;
(statearr_33120_35615[(2)] = null);

(statearr_33120_35615[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33020 === (11))){
var inst_32868 = (state_33019[(14)]);
var inst_32895 = (state_33019[(7)]);
var inst_32895__$1 = cljs.core.seq(inst_32868);
var state_33019__$1 = (function (){var statearr_33121 = state_33019;
(statearr_33121[(7)] = inst_32895__$1);

return statearr_33121;
})();
if(inst_32895__$1){
var statearr_33122_35617 = state_33019__$1;
(statearr_33122_35617[(1)] = (16));

} else {
var statearr_33123_35618 = state_33019__$1;
(statearr_33123_35618[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33020 === (9))){
var inst_32929 = (state_33019[(2)]);
var state_33019__$1 = state_33019;
var statearr_33124_35624 = state_33019__$1;
(statearr_33124_35624[(2)] = inst_32929);

(statearr_33124_35624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33020 === (5))){
var inst_32866 = cljs.core.deref(cs);
var inst_32867 = cljs.core.seq(inst_32866);
var inst_32868 = inst_32867;
var inst_32869 = null;
var inst_32870 = (0);
var inst_32871 = (0);
var state_33019__$1 = (function (){var statearr_33126 = state_33019;
(statearr_33126[(14)] = inst_32868);

(statearr_33126[(15)] = inst_32869);

(statearr_33126[(16)] = inst_32870);

(statearr_33126[(17)] = inst_32871);

return statearr_33126;
})();
var statearr_33128_35630 = state_33019__$1;
(statearr_33128_35630[(2)] = null);

(statearr_33128_35630[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33020 === (14))){
var state_33019__$1 = state_33019;
var statearr_33130_35635 = state_33019__$1;
(statearr_33130_35635[(2)] = null);

(statearr_33130_35635[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33020 === (45))){
var inst_33008 = (state_33019[(2)]);
var state_33019__$1 = state_33019;
var statearr_33131_35642 = state_33019__$1;
(statearr_33131_35642[(2)] = inst_33008);

(statearr_33131_35642[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33020 === (26))){
var inst_32936 = (state_33019[(27)]);
var inst_33001 = (state_33019[(2)]);
var inst_33002 = cljs.core.seq(inst_32936);
var state_33019__$1 = (function (){var statearr_33132 = state_33019;
(statearr_33132[(29)] = inst_33001);

return statearr_33132;
})();
if(inst_33002){
var statearr_33133_35650 = state_33019__$1;
(statearr_33133_35650[(1)] = (42));

} else {
var statearr_33134_35651 = state_33019__$1;
(statearr_33134_35651[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33020 === (16))){
var inst_32895 = (state_33019[(7)]);
var inst_32897 = cljs.core.chunked_seq_QMARK_(inst_32895);
var state_33019__$1 = state_33019;
if(inst_32897){
var statearr_33135_35657 = state_33019__$1;
(statearr_33135_35657[(1)] = (19));

} else {
var statearr_33136_35658 = state_33019__$1;
(statearr_33136_35658[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33020 === (38))){
var inst_32994 = (state_33019[(2)]);
var state_33019__$1 = state_33019;
var statearr_33140_35659 = state_33019__$1;
(statearr_33140_35659[(2)] = inst_32994);

(statearr_33140_35659[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33020 === (30))){
var state_33019__$1 = state_33019;
var statearr_33144_35660 = state_33019__$1;
(statearr_33144_35660[(2)] = null);

(statearr_33144_35660[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33020 === (10))){
var inst_32869 = (state_33019[(15)]);
var inst_32871 = (state_33019[(17)]);
var inst_32884 = cljs.core._nth(inst_32869,inst_32871);
var inst_32885 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32884,(0),null);
var inst_32886 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32884,(1),null);
var state_33019__$1 = (function (){var statearr_33147 = state_33019;
(statearr_33147[(24)] = inst_32885);

return statearr_33147;
})();
if(cljs.core.truth_(inst_32886)){
var statearr_33148_35661 = state_33019__$1;
(statearr_33148_35661[(1)] = (13));

} else {
var statearr_33149_35662 = state_33019__$1;
(statearr_33149_35662[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33020 === (18))){
var inst_32925 = (state_33019[(2)]);
var state_33019__$1 = state_33019;
var statearr_33150_35663 = state_33019__$1;
(statearr_33150_35663[(2)] = inst_32925);

(statearr_33150_35663[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33020 === (42))){
var state_33019__$1 = state_33019;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33019__$1,(45),dchan);
} else {
if((state_val_33020 === (37))){
var inst_32964 = (state_33019[(23)]);
var inst_32980 = (state_33019[(22)]);
var inst_32859 = (state_33019[(12)]);
var inst_32980__$1 = cljs.core.first(inst_32964);
var inst_32981 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32980__$1,inst_32859,done);
var state_33019__$1 = (function (){var statearr_33152 = state_33019;
(statearr_33152[(22)] = inst_32980__$1);

return statearr_33152;
})();
if(cljs.core.truth_(inst_32981)){
var statearr_33153_35669 = state_33019__$1;
(statearr_33153_35669[(1)] = (39));

} else {
var statearr_33155_35670 = state_33019__$1;
(statearr_33155_35670[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33020 === (8))){
var inst_32871 = (state_33019[(17)]);
var inst_32870 = (state_33019[(16)]);
var inst_32877 = (inst_32871 < inst_32870);
var inst_32878 = inst_32877;
var state_33019__$1 = state_33019;
if(cljs.core.truth_(inst_32878)){
var statearr_33156_35671 = state_33019__$1;
(statearr_33156_35671[(1)] = (10));

} else {
var statearr_33157_35672 = state_33019__$1;
(statearr_33157_35672[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__30541__auto__ = null;
var cljs$core$async$mult_$_state_machine__30541__auto____0 = (function (){
var statearr_33160 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33160[(0)] = cljs$core$async$mult_$_state_machine__30541__auto__);

(statearr_33160[(1)] = (1));

return statearr_33160;
});
var cljs$core$async$mult_$_state_machine__30541__auto____1 = (function (state_33019){
while(true){
var ret_value__30542__auto__ = (function (){try{while(true){
var result__30543__auto__ = switch__30540__auto__(state_33019);
if(cljs.core.keyword_identical_QMARK_(result__30543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30543__auto__;
}
break;
}
}catch (e33163){var ex__30544__auto__ = e33163;
var statearr_33165_35677 = state_33019;
(statearr_33165_35677[(2)] = ex__30544__auto__);


if(cljs.core.seq((state_33019[(4)]))){
var statearr_33167_35678 = state_33019;
(statearr_33167_35678[(1)] = cljs.core.first((state_33019[(4)])));

} else {
throw ex__30544__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35681 = state_33019;
state_33019 = G__35681;
continue;
} else {
return ret_value__30542__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30541__auto__ = function(state_33019){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30541__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30541__auto____1.call(this,state_33019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30541__auto____0;
cljs$core$async$mult_$_state_machine__30541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30541__auto____1;
return cljs$core$async$mult_$_state_machine__30541__auto__;
})()
})();
var state__31682__auto__ = (function (){var statearr_33169 = f__31681__auto__();
(statearr_33169[(6)] = c__31680__auto___35447);

return statearr_33169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31682__auto__);
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
var G__33175 = arguments.length;
switch (G__33175) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_35699 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_35699(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_35707 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_35707(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_35715 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_35715(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_35721 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_35721(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_35732 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_35732(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___35745 = arguments.length;
var i__5898__auto___35747 = (0);
while(true){
if((i__5898__auto___35747 < len__5897__auto___35745)){
args__5903__auto__.push((arguments[i__5898__auto___35747]));

var G__35758 = (i__5898__auto___35747 + (1));
i__5898__auto___35747 = G__35758;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((3) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5904__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33249){
var map__33250 = p__33249;
var map__33250__$1 = cljs.core.__destructure_map(map__33250);
var opts = map__33250__$1;
var statearr_33251_35769 = state;
(statearr_33251_35769[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts((function (val){
var statearr_33252_35770 = state;
(statearr_33252_35770[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_33262_35772 = state;
(statearr_33262_35772[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33241){
var G__33242 = cljs.core.first(seq33241);
var seq33241__$1 = cljs.core.next(seq33241);
var G__33243 = cljs.core.first(seq33241__$1);
var seq33241__$2 = cljs.core.next(seq33241__$1);
var G__33244 = cljs.core.first(seq33241__$2);
var seq33241__$3 = cljs.core.next(seq33241__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33242,G__33243,G__33244,seq33241__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33286 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33287){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33287 = meta33287;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33286.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33288,meta33287__$1){
var self__ = this;
var _33288__$1 = this;
return (new cljs.core.async.t_cljs$core$async33286(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33287__$1));
}));

(cljs.core.async.t_cljs$core$async33286.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33288){
var self__ = this;
var _33288__$1 = this;
return self__.meta33287;
}));

(cljs.core.async.t_cljs$core$async33286.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33286.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async33286.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33286.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33286.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33286.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33286.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33286.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+"(solo-modes mode)")));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33286.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33287","meta33287",-1336284368,null)], null);
}));

(cljs.core.async.t_cljs$core$async33286.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33286.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33286");

(cljs.core.async.t_cljs$core$async33286.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async33286");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33286.
 */
cljs.core.async.__GT_t_cljs$core$async33286 = (function cljs$core$async$__GT_t_cljs$core$async33286(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33287){
return (new cljs.core.async.t_cljs$core$async33286(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33287));
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
var m = (new cljs.core.async.t_cljs$core$async33286(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__31680__auto___35803 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31681__auto__ = (function (){var switch__30540__auto__ = (function (state_33392){
var state_val_33393 = (state_33392[(1)]);
if((state_val_33393 === (7))){
var inst_33351 = (state_33392[(2)]);
var state_33392__$1 = state_33392;
if(cljs.core.truth_(inst_33351)){
var statearr_33396_35805 = state_33392__$1;
(statearr_33396_35805[(1)] = (8));

} else {
var statearr_33397_35806 = state_33392__$1;
(statearr_33397_35806[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (20))){
var inst_33344 = (state_33392[(7)]);
var state_33392__$1 = state_33392;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33392__$1,(23),out,inst_33344);
} else {
if((state_val_33393 === (1))){
var inst_33325 = calc_state();
var inst_33326 = cljs.core.__destructure_map(inst_33325);
var inst_33327 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33326,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33328 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33326,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33330 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33326,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33331 = inst_33325;
var state_33392__$1 = (function (){var statearr_33401 = state_33392;
(statearr_33401[(8)] = inst_33327);

(statearr_33401[(9)] = inst_33328);

(statearr_33401[(10)] = inst_33330);

(statearr_33401[(11)] = inst_33331);

return statearr_33401;
})();
var statearr_33402_35807 = state_33392__$1;
(statearr_33402_35807[(2)] = null);

(statearr_33402_35807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (24))){
var inst_33334 = (state_33392[(12)]);
var inst_33331 = inst_33334;
var state_33392__$1 = (function (){var statearr_33403 = state_33392;
(statearr_33403[(11)] = inst_33331);

return statearr_33403;
})();
var statearr_33404_35808 = state_33392__$1;
(statearr_33404_35808[(2)] = null);

(statearr_33404_35808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (4))){
var inst_33344 = (state_33392[(7)]);
var inst_33346 = (state_33392[(13)]);
var inst_33343 = (state_33392[(2)]);
var inst_33344__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33343,(0),null);
var inst_33345 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33343,(1),null);
var inst_33346__$1 = (inst_33344__$1 == null);
var state_33392__$1 = (function (){var statearr_33410 = state_33392;
(statearr_33410[(7)] = inst_33344__$1);

(statearr_33410[(14)] = inst_33345);

(statearr_33410[(13)] = inst_33346__$1);

return statearr_33410;
})();
if(cljs.core.truth_(inst_33346__$1)){
var statearr_33411_35809 = state_33392__$1;
(statearr_33411_35809[(1)] = (5));

} else {
var statearr_33412_35810 = state_33392__$1;
(statearr_33412_35810[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (15))){
var inst_33335 = (state_33392[(15)]);
var inst_33366 = (state_33392[(16)]);
var inst_33366__$1 = cljs.core.empty_QMARK_(inst_33335);
var state_33392__$1 = (function (){var statearr_33413 = state_33392;
(statearr_33413[(16)] = inst_33366__$1);

return statearr_33413;
})();
if(inst_33366__$1){
var statearr_33414_35811 = state_33392__$1;
(statearr_33414_35811[(1)] = (17));

} else {
var statearr_33415_35812 = state_33392__$1;
(statearr_33415_35812[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (21))){
var inst_33334 = (state_33392[(12)]);
var inst_33331 = inst_33334;
var state_33392__$1 = (function (){var statearr_33418 = state_33392;
(statearr_33418[(11)] = inst_33331);

return statearr_33418;
})();
var statearr_33421_35813 = state_33392__$1;
(statearr_33421_35813[(2)] = null);

(statearr_33421_35813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (13))){
var inst_33358 = (state_33392[(2)]);
var inst_33359 = calc_state();
var inst_33331 = inst_33359;
var state_33392__$1 = (function (){var statearr_33426 = state_33392;
(statearr_33426[(17)] = inst_33358);

(statearr_33426[(11)] = inst_33331);

return statearr_33426;
})();
var statearr_33427_35816 = state_33392__$1;
(statearr_33427_35816[(2)] = null);

(statearr_33427_35816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (22))){
var inst_33386 = (state_33392[(2)]);
var state_33392__$1 = state_33392;
var statearr_33428_35817 = state_33392__$1;
(statearr_33428_35817[(2)] = inst_33386);

(statearr_33428_35817[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (6))){
var inst_33345 = (state_33392[(14)]);
var inst_33349 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33345,change);
var state_33392__$1 = state_33392;
var statearr_33429_35819 = state_33392__$1;
(statearr_33429_35819[(2)] = inst_33349);

(statearr_33429_35819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (25))){
var state_33392__$1 = state_33392;
var statearr_33430_35820 = state_33392__$1;
(statearr_33430_35820[(2)] = null);

(statearr_33430_35820[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (17))){
var inst_33336 = (state_33392[(18)]);
var inst_33345 = (state_33392[(14)]);
var inst_33368 = (inst_33336.cljs$core$IFn$_invoke$arity$1 ? inst_33336.cljs$core$IFn$_invoke$arity$1(inst_33345) : inst_33336.call(null,inst_33345));
var inst_33369 = cljs.core.not(inst_33368);
var state_33392__$1 = state_33392;
var statearr_33455_35821 = state_33392__$1;
(statearr_33455_35821[(2)] = inst_33369);

(statearr_33455_35821[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (3))){
var inst_33390 = (state_33392[(2)]);
var state_33392__$1 = state_33392;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33392__$1,inst_33390);
} else {
if((state_val_33393 === (12))){
var state_33392__$1 = state_33392;
var statearr_33458_35822 = state_33392__$1;
(statearr_33458_35822[(2)] = null);

(statearr_33458_35822[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (2))){
var inst_33331 = (state_33392[(11)]);
var inst_33334 = (state_33392[(12)]);
var inst_33334__$1 = cljs.core.__destructure_map(inst_33331);
var inst_33335 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33334__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33336 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33334__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33337 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33334__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33392__$1 = (function (){var statearr_33463 = state_33392;
(statearr_33463[(12)] = inst_33334__$1);

(statearr_33463[(15)] = inst_33335);

(statearr_33463[(18)] = inst_33336);

return statearr_33463;
})();
return cljs.core.async.ioc_alts_BANG_(state_33392__$1,(4),inst_33337);
} else {
if((state_val_33393 === (23))){
var inst_33377 = (state_33392[(2)]);
var state_33392__$1 = state_33392;
if(cljs.core.truth_(inst_33377)){
var statearr_33466_35823 = state_33392__$1;
(statearr_33466_35823[(1)] = (24));

} else {
var statearr_33467_35824 = state_33392__$1;
(statearr_33467_35824[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (19))){
var inst_33372 = (state_33392[(2)]);
var state_33392__$1 = state_33392;
var statearr_33471_35825 = state_33392__$1;
(statearr_33471_35825[(2)] = inst_33372);

(statearr_33471_35825[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (11))){
var inst_33345 = (state_33392[(14)]);
var inst_33355 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33345);
var state_33392__$1 = state_33392;
var statearr_33476_35826 = state_33392__$1;
(statearr_33476_35826[(2)] = inst_33355);

(statearr_33476_35826[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (9))){
var inst_33335 = (state_33392[(15)]);
var inst_33345 = (state_33392[(14)]);
var inst_33362 = (state_33392[(19)]);
var inst_33362__$1 = (inst_33335.cljs$core$IFn$_invoke$arity$1 ? inst_33335.cljs$core$IFn$_invoke$arity$1(inst_33345) : inst_33335.call(null,inst_33345));
var state_33392__$1 = (function (){var statearr_33477 = state_33392;
(statearr_33477[(19)] = inst_33362__$1);

return statearr_33477;
})();
if(cljs.core.truth_(inst_33362__$1)){
var statearr_33478_35829 = state_33392__$1;
(statearr_33478_35829[(1)] = (14));

} else {
var statearr_33479_35830 = state_33392__$1;
(statearr_33479_35830[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (5))){
var inst_33346 = (state_33392[(13)]);
var state_33392__$1 = state_33392;
var statearr_33482_35831 = state_33392__$1;
(statearr_33482_35831[(2)] = inst_33346);

(statearr_33482_35831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (14))){
var inst_33362 = (state_33392[(19)]);
var state_33392__$1 = state_33392;
var statearr_33484_35837 = state_33392__$1;
(statearr_33484_35837[(2)] = inst_33362);

(statearr_33484_35837[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (26))){
var inst_33382 = (state_33392[(2)]);
var state_33392__$1 = state_33392;
var statearr_33486_35838 = state_33392__$1;
(statearr_33486_35838[(2)] = inst_33382);

(statearr_33486_35838[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (16))){
var inst_33374 = (state_33392[(2)]);
var state_33392__$1 = state_33392;
if(cljs.core.truth_(inst_33374)){
var statearr_33490_35840 = state_33392__$1;
(statearr_33490_35840[(1)] = (20));

} else {
var statearr_33494_35841 = state_33392__$1;
(statearr_33494_35841[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (10))){
var inst_33388 = (state_33392[(2)]);
var state_33392__$1 = state_33392;
var statearr_33497_35842 = state_33392__$1;
(statearr_33497_35842[(2)] = inst_33388);

(statearr_33497_35842[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (18))){
var inst_33366 = (state_33392[(16)]);
var state_33392__$1 = state_33392;
var statearr_33501_35843 = state_33392__$1;
(statearr_33501_35843[(2)] = inst_33366);

(statearr_33501_35843[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (8))){
var inst_33344 = (state_33392[(7)]);
var inst_33353 = (inst_33344 == null);
var state_33392__$1 = state_33392;
if(cljs.core.truth_(inst_33353)){
var statearr_33508_35847 = state_33392__$1;
(statearr_33508_35847[(1)] = (11));

} else {
var statearr_33509_35848 = state_33392__$1;
(statearr_33509_35848[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__30541__auto__ = null;
var cljs$core$async$mix_$_state_machine__30541__auto____0 = (function (){
var statearr_33514 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33514[(0)] = cljs$core$async$mix_$_state_machine__30541__auto__);

(statearr_33514[(1)] = (1));

return statearr_33514;
});
var cljs$core$async$mix_$_state_machine__30541__auto____1 = (function (state_33392){
while(true){
var ret_value__30542__auto__ = (function (){try{while(true){
var result__30543__auto__ = switch__30540__auto__(state_33392);
if(cljs.core.keyword_identical_QMARK_(result__30543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30543__auto__;
}
break;
}
}catch (e33515){var ex__30544__auto__ = e33515;
var statearr_33516_35857 = state_33392;
(statearr_33516_35857[(2)] = ex__30544__auto__);


if(cljs.core.seq((state_33392[(4)]))){
var statearr_33517_35858 = state_33392;
(statearr_33517_35858[(1)] = cljs.core.first((state_33392[(4)])));

} else {
throw ex__30544__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35859 = state_33392;
state_33392 = G__35859;
continue;
} else {
return ret_value__30542__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30541__auto__ = function(state_33392){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30541__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30541__auto____1.call(this,state_33392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30541__auto____0;
cljs$core$async$mix_$_state_machine__30541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30541__auto____1;
return cljs$core$async$mix_$_state_machine__30541__auto__;
})()
})();
var state__31682__auto__ = (function (){var statearr_33518 = f__31681__auto__();
(statearr_33518[(6)] = c__31680__auto___35803);

return statearr_33518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31682__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_35867 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_35867(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_35868 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_35868(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_35869 = (function() {
var G__35870 = null;
var G__35870__1 = (function (p){
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
var G__35870__2 = (function (p,v){
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
G__35870 = function(p,v){
switch(arguments.length){
case 1:
return G__35870__1.call(this,p);
case 2:
return G__35870__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35870.cljs$core$IFn$_invoke$arity$1 = G__35870__1;
G__35870.cljs$core$IFn$_invoke$arity$2 = G__35870__2;
return G__35870;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33537 = arguments.length;
switch (G__33537) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35869(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35869(p,v);
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
cljs.core.async.t_cljs$core$async33558 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33559){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33559 = meta33559;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33558.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33560,meta33559__$1){
var self__ = this;
var _33560__$1 = this;
return (new cljs.core.async.t_cljs$core$async33558(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33559__$1));
}));

(cljs.core.async.t_cljs$core$async33558.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33560){
var self__ = this;
var _33560__$1 = this;
return self__.meta33559;
}));

(cljs.core.async.t_cljs$core$async33558.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33558.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33558.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33558.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async33558.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async33558.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async33558.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async33558.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33559","meta33559",1129458785,null)], null);
}));

(cljs.core.async.t_cljs$core$async33558.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33558.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33558");

(cljs.core.async.t_cljs$core$async33558.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async33558");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33558.
 */
cljs.core.async.__GT_t_cljs$core$async33558 = (function cljs$core$async$__GT_t_cljs$core$async33558(ch,topic_fn,buf_fn,mults,ensure_mult,meta33559){
return (new cljs.core.async.t_cljs$core$async33558(ch,topic_fn,buf_fn,mults,ensure_mult,meta33559));
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
var G__33549 = arguments.length;
switch (G__33549) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__33547_SHARP_){
if(cljs.core.truth_((p1__33547_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33547_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__33547_SHARP_.call(null,topic)))){
return p1__33547_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33547_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async33558(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__31680__auto___35896 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31681__auto__ = (function (){var switch__30540__auto__ = (function (state_33636){
var state_val_33637 = (state_33636[(1)]);
if((state_val_33637 === (7))){
var inst_33630 = (state_33636[(2)]);
var state_33636__$1 = state_33636;
var statearr_33639_35897 = state_33636__$1;
(statearr_33639_35897[(2)] = inst_33630);

(statearr_33639_35897[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33637 === (20))){
var state_33636__$1 = state_33636;
var statearr_33640_35898 = state_33636__$1;
(statearr_33640_35898[(2)] = null);

(statearr_33640_35898[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33637 === (1))){
var state_33636__$1 = state_33636;
var statearr_33649_35900 = state_33636__$1;
(statearr_33649_35900[(2)] = null);

(statearr_33649_35900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33637 === (24))){
var inst_33613 = (state_33636[(7)]);
var inst_33622 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33613);
var state_33636__$1 = state_33636;
var statearr_33654_35901 = state_33636__$1;
(statearr_33654_35901[(2)] = inst_33622);

(statearr_33654_35901[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33637 === (4))){
var inst_33565 = (state_33636[(8)]);
var inst_33565__$1 = (state_33636[(2)]);
var inst_33566 = (inst_33565__$1 == null);
var state_33636__$1 = (function (){var statearr_33658 = state_33636;
(statearr_33658[(8)] = inst_33565__$1);

return statearr_33658;
})();
if(cljs.core.truth_(inst_33566)){
var statearr_33659_35902 = state_33636__$1;
(statearr_33659_35902[(1)] = (5));

} else {
var statearr_33660_35903 = state_33636__$1;
(statearr_33660_35903[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33637 === (15))){
var inst_33607 = (state_33636[(2)]);
var state_33636__$1 = state_33636;
var statearr_33662_35906 = state_33636__$1;
(statearr_33662_35906[(2)] = inst_33607);

(statearr_33662_35906[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33637 === (21))){
var inst_33627 = (state_33636[(2)]);
var state_33636__$1 = (function (){var statearr_33666 = state_33636;
(statearr_33666[(9)] = inst_33627);

return statearr_33666;
})();
var statearr_33667_35907 = state_33636__$1;
(statearr_33667_35907[(2)] = null);

(statearr_33667_35907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33637 === (13))){
var inst_33589 = (state_33636[(10)]);
var inst_33591 = cljs.core.chunked_seq_QMARK_(inst_33589);
var state_33636__$1 = state_33636;
if(inst_33591){
var statearr_33668_35909 = state_33636__$1;
(statearr_33668_35909[(1)] = (16));

} else {
var statearr_33669_35910 = state_33636__$1;
(statearr_33669_35910[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33637 === (22))){
var inst_33619 = (state_33636[(2)]);
var state_33636__$1 = state_33636;
if(cljs.core.truth_(inst_33619)){
var statearr_33670_35911 = state_33636__$1;
(statearr_33670_35911[(1)] = (23));

} else {
var statearr_33671_35912 = state_33636__$1;
(statearr_33671_35912[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33637 === (6))){
var inst_33565 = (state_33636[(8)]);
var inst_33613 = (state_33636[(7)]);
var inst_33615 = (state_33636[(11)]);
var inst_33613__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_33565) : topic_fn.call(null,inst_33565));
var inst_33614 = cljs.core.deref(mults);
var inst_33615__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33614,inst_33613__$1);
var state_33636__$1 = (function (){var statearr_33674 = state_33636;
(statearr_33674[(7)] = inst_33613__$1);

(statearr_33674[(11)] = inst_33615__$1);

return statearr_33674;
})();
if(cljs.core.truth_(inst_33615__$1)){
var statearr_33677_35913 = state_33636__$1;
(statearr_33677_35913[(1)] = (19));

} else {
var statearr_33681_35917 = state_33636__$1;
(statearr_33681_35917[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33637 === (25))){
var inst_33624 = (state_33636[(2)]);
var state_33636__$1 = state_33636;
var statearr_33682_35918 = state_33636__$1;
(statearr_33682_35918[(2)] = inst_33624);

(statearr_33682_35918[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33637 === (17))){
var inst_33589 = (state_33636[(10)]);
var inst_33598 = cljs.core.first(inst_33589);
var inst_33599 = cljs.core.async.muxch_STAR_(inst_33598);
var inst_33600 = cljs.core.async.close_BANG_(inst_33599);
var inst_33601 = cljs.core.next(inst_33589);
var inst_33575 = inst_33601;
var inst_33576 = null;
var inst_33577 = (0);
var inst_33578 = (0);
var state_33636__$1 = (function (){var statearr_33683 = state_33636;
(statearr_33683[(12)] = inst_33600);

(statearr_33683[(13)] = inst_33575);

(statearr_33683[(14)] = inst_33576);

(statearr_33683[(15)] = inst_33577);

(statearr_33683[(16)] = inst_33578);

return statearr_33683;
})();
var statearr_33684_35924 = state_33636__$1;
(statearr_33684_35924[(2)] = null);

(statearr_33684_35924[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33637 === (3))){
var inst_33632 = (state_33636[(2)]);
var state_33636__$1 = state_33636;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33636__$1,inst_33632);
} else {
if((state_val_33637 === (12))){
var inst_33609 = (state_33636[(2)]);
var state_33636__$1 = state_33636;
var statearr_33687_35929 = state_33636__$1;
(statearr_33687_35929[(2)] = inst_33609);

(statearr_33687_35929[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33637 === (2))){
var state_33636__$1 = state_33636;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33636__$1,(4),ch);
} else {
if((state_val_33637 === (23))){
var state_33636__$1 = state_33636;
var statearr_33690_35934 = state_33636__$1;
(statearr_33690_35934[(2)] = null);

(statearr_33690_35934[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33637 === (19))){
var inst_33615 = (state_33636[(11)]);
var inst_33565 = (state_33636[(8)]);
var inst_33617 = cljs.core.async.muxch_STAR_(inst_33615);
var state_33636__$1 = state_33636;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33636__$1,(22),inst_33617,inst_33565);
} else {
if((state_val_33637 === (11))){
var inst_33575 = (state_33636[(13)]);
var inst_33589 = (state_33636[(10)]);
var inst_33589__$1 = cljs.core.seq(inst_33575);
var state_33636__$1 = (function (){var statearr_33694 = state_33636;
(statearr_33694[(10)] = inst_33589__$1);

return statearr_33694;
})();
if(inst_33589__$1){
var statearr_33695_35939 = state_33636__$1;
(statearr_33695_35939[(1)] = (13));

} else {
var statearr_33696_35940 = state_33636__$1;
(statearr_33696_35940[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33637 === (9))){
var inst_33611 = (state_33636[(2)]);
var state_33636__$1 = state_33636;
var statearr_33699_35943 = state_33636__$1;
(statearr_33699_35943[(2)] = inst_33611);

(statearr_33699_35943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33637 === (5))){
var inst_33572 = cljs.core.deref(mults);
var inst_33573 = cljs.core.vals(inst_33572);
var inst_33574 = cljs.core.seq(inst_33573);
var inst_33575 = inst_33574;
var inst_33576 = null;
var inst_33577 = (0);
var inst_33578 = (0);
var state_33636__$1 = (function (){var statearr_33700 = state_33636;
(statearr_33700[(13)] = inst_33575);

(statearr_33700[(14)] = inst_33576);

(statearr_33700[(15)] = inst_33577);

(statearr_33700[(16)] = inst_33578);

return statearr_33700;
})();
var statearr_33701_35944 = state_33636__$1;
(statearr_33701_35944[(2)] = null);

(statearr_33701_35944[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33637 === (14))){
var state_33636__$1 = state_33636;
var statearr_33705_35946 = state_33636__$1;
(statearr_33705_35946[(2)] = null);

(statearr_33705_35946[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33637 === (16))){
var inst_33589 = (state_33636[(10)]);
var inst_33593 = cljs.core.chunk_first(inst_33589);
var inst_33594 = cljs.core.chunk_rest(inst_33589);
var inst_33595 = cljs.core.count(inst_33593);
var inst_33575 = inst_33594;
var inst_33576 = inst_33593;
var inst_33577 = inst_33595;
var inst_33578 = (0);
var state_33636__$1 = (function (){var statearr_33706 = state_33636;
(statearr_33706[(13)] = inst_33575);

(statearr_33706[(14)] = inst_33576);

(statearr_33706[(15)] = inst_33577);

(statearr_33706[(16)] = inst_33578);

return statearr_33706;
})();
var statearr_33707_35950 = state_33636__$1;
(statearr_33707_35950[(2)] = null);

(statearr_33707_35950[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33637 === (10))){
var inst_33576 = (state_33636[(14)]);
var inst_33578 = (state_33636[(16)]);
var inst_33575 = (state_33636[(13)]);
var inst_33577 = (state_33636[(15)]);
var inst_33583 = cljs.core._nth(inst_33576,inst_33578);
var inst_33584 = cljs.core.async.muxch_STAR_(inst_33583);
var inst_33585 = cljs.core.async.close_BANG_(inst_33584);
var inst_33586 = (inst_33578 + (1));
var tmp33702 = inst_33575;
var tmp33703 = inst_33577;
var tmp33704 = inst_33576;
var inst_33575__$1 = tmp33702;
var inst_33576__$1 = tmp33704;
var inst_33577__$1 = tmp33703;
var inst_33578__$1 = inst_33586;
var state_33636__$1 = (function (){var statearr_33722 = state_33636;
(statearr_33722[(17)] = inst_33585);

(statearr_33722[(13)] = inst_33575__$1);

(statearr_33722[(14)] = inst_33576__$1);

(statearr_33722[(15)] = inst_33577__$1);

(statearr_33722[(16)] = inst_33578__$1);

return statearr_33722;
})();
var statearr_33724_35953 = state_33636__$1;
(statearr_33724_35953[(2)] = null);

(statearr_33724_35953[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33637 === (18))){
var inst_33604 = (state_33636[(2)]);
var state_33636__$1 = state_33636;
var statearr_33731_35954 = state_33636__$1;
(statearr_33731_35954[(2)] = inst_33604);

(statearr_33731_35954[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33637 === (8))){
var inst_33578 = (state_33636[(16)]);
var inst_33577 = (state_33636[(15)]);
var inst_33580 = (inst_33578 < inst_33577);
var inst_33581 = inst_33580;
var state_33636__$1 = state_33636;
if(cljs.core.truth_(inst_33581)){
var statearr_33732_35955 = state_33636__$1;
(statearr_33732_35955[(1)] = (10));

} else {
var statearr_33733_35956 = state_33636__$1;
(statearr_33733_35956[(1)] = (11));

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
var cljs$core$async$state_machine__30541__auto__ = null;
var cljs$core$async$state_machine__30541__auto____0 = (function (){
var statearr_33736 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33736[(0)] = cljs$core$async$state_machine__30541__auto__);

(statearr_33736[(1)] = (1));

return statearr_33736;
});
var cljs$core$async$state_machine__30541__auto____1 = (function (state_33636){
while(true){
var ret_value__30542__auto__ = (function (){try{while(true){
var result__30543__auto__ = switch__30540__auto__(state_33636);
if(cljs.core.keyword_identical_QMARK_(result__30543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30543__auto__;
}
break;
}
}catch (e33737){var ex__30544__auto__ = e33737;
var statearr_33738_35964 = state_33636;
(statearr_33738_35964[(2)] = ex__30544__auto__);


if(cljs.core.seq((state_33636[(4)]))){
var statearr_33740_35965 = state_33636;
(statearr_33740_35965[(1)] = cljs.core.first((state_33636[(4)])));

} else {
throw ex__30544__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35967 = state_33636;
state_33636 = G__35967;
continue;
} else {
return ret_value__30542__auto__;
}
break;
}
});
cljs$core$async$state_machine__30541__auto__ = function(state_33636){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30541__auto____1.call(this,state_33636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30541__auto____0;
cljs$core$async$state_machine__30541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30541__auto____1;
return cljs$core$async$state_machine__30541__auto__;
})()
})();
var state__31682__auto__ = (function (){var statearr_33741 = f__31681__auto__();
(statearr_33741[(6)] = c__31680__auto___35896);

return statearr_33741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31682__auto__);
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
var G__33755 = arguments.length;
switch (G__33755) {
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
var G__33777 = arguments.length;
switch (G__33777) {
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
var G__33789 = arguments.length;
switch (G__33789) {
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
var c__31680__auto___35974 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31681__auto__ = (function (){var switch__30540__auto__ = (function (state_33835){
var state_val_33836 = (state_33835[(1)]);
if((state_val_33836 === (7))){
var state_33835__$1 = state_33835;
var statearr_33837_35975 = state_33835__$1;
(statearr_33837_35975[(2)] = null);

(statearr_33837_35975[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33836 === (1))){
var state_33835__$1 = state_33835;
var statearr_33838_35976 = state_33835__$1;
(statearr_33838_35976[(2)] = null);

(statearr_33838_35976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33836 === (4))){
var inst_33793 = (state_33835[(7)]);
var inst_33792 = (state_33835[(8)]);
var inst_33795 = (inst_33793 < inst_33792);
var state_33835__$1 = state_33835;
if(cljs.core.truth_(inst_33795)){
var statearr_33840_35977 = state_33835__$1;
(statearr_33840_35977[(1)] = (6));

} else {
var statearr_33841_35978 = state_33835__$1;
(statearr_33841_35978[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33836 === (15))){
var inst_33821 = (state_33835[(9)]);
var inst_33826 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_33821);
var state_33835__$1 = state_33835;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33835__$1,(17),out,inst_33826);
} else {
if((state_val_33836 === (13))){
var inst_33821 = (state_33835[(9)]);
var inst_33821__$1 = (state_33835[(2)]);
var inst_33822 = cljs.core.some(cljs.core.nil_QMARK_,inst_33821__$1);
var state_33835__$1 = (function (){var statearr_33845 = state_33835;
(statearr_33845[(9)] = inst_33821__$1);

return statearr_33845;
})();
if(cljs.core.truth_(inst_33822)){
var statearr_33846_35979 = state_33835__$1;
(statearr_33846_35979[(1)] = (14));

} else {
var statearr_33847_35980 = state_33835__$1;
(statearr_33847_35980[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33836 === (6))){
var state_33835__$1 = state_33835;
var statearr_33848_35981 = state_33835__$1;
(statearr_33848_35981[(2)] = null);

(statearr_33848_35981[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33836 === (17))){
var inst_33828 = (state_33835[(2)]);
var state_33835__$1 = (function (){var statearr_33851 = state_33835;
(statearr_33851[(10)] = inst_33828);

return statearr_33851;
})();
var statearr_33852_35985 = state_33835__$1;
(statearr_33852_35985[(2)] = null);

(statearr_33852_35985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33836 === (3))){
var inst_33833 = (state_33835[(2)]);
var state_33835__$1 = state_33835;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33835__$1,inst_33833);
} else {
if((state_val_33836 === (12))){
var _ = (function (){var statearr_33853 = state_33835;
(statearr_33853[(4)] = cljs.core.rest((state_33835[(4)])));

return statearr_33853;
})();
var state_33835__$1 = state_33835;
var ex33849 = (state_33835__$1[(2)]);
var statearr_33855_35986 = state_33835__$1;
(statearr_33855_35986[(5)] = ex33849);


if((ex33849 instanceof Object)){
var statearr_33858_35987 = state_33835__$1;
(statearr_33858_35987[(1)] = (11));

(statearr_33858_35987[(5)] = null);

} else {
throw ex33849;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33836 === (2))){
var inst_33791 = cljs.core.reset_BANG_(dctr,cnt);
var inst_33792 = cnt;
var inst_33793 = (0);
var state_33835__$1 = (function (){var statearr_33868 = state_33835;
(statearr_33868[(11)] = inst_33791);

(statearr_33868[(8)] = inst_33792);

(statearr_33868[(7)] = inst_33793);

return statearr_33868;
})();
var statearr_33872_35988 = state_33835__$1;
(statearr_33872_35988[(2)] = null);

(statearr_33872_35988[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33836 === (11))){
var inst_33800 = (state_33835[(2)]);
var inst_33801 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_33835__$1 = (function (){var statearr_33873 = state_33835;
(statearr_33873[(12)] = inst_33800);

return statearr_33873;
})();
var statearr_33874_35990 = state_33835__$1;
(statearr_33874_35990[(2)] = inst_33801);

(statearr_33874_35990[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33836 === (9))){
var inst_33793 = (state_33835[(7)]);
var _ = (function (){var statearr_33875 = state_33835;
(statearr_33875[(4)] = cljs.core.cons((12),(state_33835[(4)])));

return statearr_33875;
})();
var inst_33807 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_33793) : chs__$1.call(null,inst_33793));
var inst_33808 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_33793) : done.call(null,inst_33793));
var inst_33809 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33807,inst_33808);
var ___$1 = (function (){var statearr_33883 = state_33835;
(statearr_33883[(4)] = cljs.core.rest((state_33835[(4)])));

return statearr_33883;
})();
var state_33835__$1 = state_33835;
var statearr_33884_35992 = state_33835__$1;
(statearr_33884_35992[(2)] = inst_33809);

(statearr_33884_35992[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33836 === (5))){
var inst_33819 = (state_33835[(2)]);
var state_33835__$1 = (function (){var statearr_33888 = state_33835;
(statearr_33888[(13)] = inst_33819);

return statearr_33888;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33835__$1,(13),dchan);
} else {
if((state_val_33836 === (14))){
var inst_33824 = cljs.core.async.close_BANG_(out);
var state_33835__$1 = state_33835;
var statearr_33889_35994 = state_33835__$1;
(statearr_33889_35994[(2)] = inst_33824);

(statearr_33889_35994[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33836 === (16))){
var inst_33831 = (state_33835[(2)]);
var state_33835__$1 = state_33835;
var statearr_33893_36000 = state_33835__$1;
(statearr_33893_36000[(2)] = inst_33831);

(statearr_33893_36000[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33836 === (10))){
var inst_33793 = (state_33835[(7)]);
var inst_33812 = (state_33835[(2)]);
var inst_33813 = (inst_33793 + (1));
var inst_33793__$1 = inst_33813;
var state_33835__$1 = (function (){var statearr_33894 = state_33835;
(statearr_33894[(14)] = inst_33812);

(statearr_33894[(7)] = inst_33793__$1);

return statearr_33894;
})();
var statearr_33895_36001 = state_33835__$1;
(statearr_33895_36001[(2)] = null);

(statearr_33895_36001[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33836 === (8))){
var inst_33817 = (state_33835[(2)]);
var state_33835__$1 = state_33835;
var statearr_33897_36002 = state_33835__$1;
(statearr_33897_36002[(2)] = inst_33817);

(statearr_33897_36002[(1)] = (5));


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
var cljs$core$async$state_machine__30541__auto__ = null;
var cljs$core$async$state_machine__30541__auto____0 = (function (){
var statearr_33898 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33898[(0)] = cljs$core$async$state_machine__30541__auto__);

(statearr_33898[(1)] = (1));

return statearr_33898;
});
var cljs$core$async$state_machine__30541__auto____1 = (function (state_33835){
while(true){
var ret_value__30542__auto__ = (function (){try{while(true){
var result__30543__auto__ = switch__30540__auto__(state_33835);
if(cljs.core.keyword_identical_QMARK_(result__30543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30543__auto__;
}
break;
}
}catch (e33899){var ex__30544__auto__ = e33899;
var statearr_33900_36003 = state_33835;
(statearr_33900_36003[(2)] = ex__30544__auto__);


if(cljs.core.seq((state_33835[(4)]))){
var statearr_33901_36004 = state_33835;
(statearr_33901_36004[(1)] = cljs.core.first((state_33835[(4)])));

} else {
throw ex__30544__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36005 = state_33835;
state_33835 = G__36005;
continue;
} else {
return ret_value__30542__auto__;
}
break;
}
});
cljs$core$async$state_machine__30541__auto__ = function(state_33835){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30541__auto____1.call(this,state_33835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30541__auto____0;
cljs$core$async$state_machine__30541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30541__auto____1;
return cljs$core$async$state_machine__30541__auto__;
})()
})();
var state__31682__auto__ = (function (){var statearr_33905 = f__31681__auto__();
(statearr_33905[(6)] = c__31680__auto___35974);

return statearr_33905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31682__auto__);
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
var G__33908 = arguments.length;
switch (G__33908) {
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
var c__31680__auto___36011 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31681__auto__ = (function (){var switch__30540__auto__ = (function (state_33947){
var state_val_33948 = (state_33947[(1)]);
if((state_val_33948 === (7))){
var inst_33924 = (state_33947[(7)]);
var inst_33925 = (state_33947[(8)]);
var inst_33924__$1 = (state_33947[(2)]);
var inst_33925__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33924__$1,(0),null);
var inst_33926 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33924__$1,(1),null);
var inst_33928 = (inst_33925__$1 == null);
var state_33947__$1 = (function (){var statearr_33964 = state_33947;
(statearr_33964[(7)] = inst_33924__$1);

(statearr_33964[(8)] = inst_33925__$1);

(statearr_33964[(9)] = inst_33926);

return statearr_33964;
})();
if(cljs.core.truth_(inst_33928)){
var statearr_33967_36013 = state_33947__$1;
(statearr_33967_36013[(1)] = (8));

} else {
var statearr_33968_36015 = state_33947__$1;
(statearr_33968_36015[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33948 === (1))){
var inst_33913 = cljs.core.vec(chs);
var inst_33914 = inst_33913;
var state_33947__$1 = (function (){var statearr_33969 = state_33947;
(statearr_33969[(10)] = inst_33914);

return statearr_33969;
})();
var statearr_33970_36019 = state_33947__$1;
(statearr_33970_36019[(2)] = null);

(statearr_33970_36019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33948 === (4))){
var inst_33914 = (state_33947[(10)]);
var state_33947__$1 = state_33947;
return cljs.core.async.ioc_alts_BANG_(state_33947__$1,(7),inst_33914);
} else {
if((state_val_33948 === (6))){
var inst_33943 = (state_33947[(2)]);
var state_33947__$1 = state_33947;
var statearr_33971_36020 = state_33947__$1;
(statearr_33971_36020[(2)] = inst_33943);

(statearr_33971_36020[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33948 === (3))){
var inst_33945 = (state_33947[(2)]);
var state_33947__$1 = state_33947;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33947__$1,inst_33945);
} else {
if((state_val_33948 === (2))){
var inst_33914 = (state_33947[(10)]);
var inst_33916 = cljs.core.count(inst_33914);
var inst_33917 = (inst_33916 > (0));
var state_33947__$1 = state_33947;
if(cljs.core.truth_(inst_33917)){
var statearr_33977_36021 = state_33947__$1;
(statearr_33977_36021[(1)] = (4));

} else {
var statearr_33978_36024 = state_33947__$1;
(statearr_33978_36024[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33948 === (11))){
var inst_33914 = (state_33947[(10)]);
var inst_33936 = (state_33947[(2)]);
var tmp33972 = inst_33914;
var inst_33914__$1 = tmp33972;
var state_33947__$1 = (function (){var statearr_33982 = state_33947;
(statearr_33982[(11)] = inst_33936);

(statearr_33982[(10)] = inst_33914__$1);

return statearr_33982;
})();
var statearr_33983_36028 = state_33947__$1;
(statearr_33983_36028[(2)] = null);

(statearr_33983_36028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33948 === (9))){
var inst_33925 = (state_33947[(8)]);
var state_33947__$1 = state_33947;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33947__$1,(11),out,inst_33925);
} else {
if((state_val_33948 === (5))){
var inst_33941 = cljs.core.async.close_BANG_(out);
var state_33947__$1 = state_33947;
var statearr_33995_36029 = state_33947__$1;
(statearr_33995_36029[(2)] = inst_33941);

(statearr_33995_36029[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33948 === (10))){
var inst_33939 = (state_33947[(2)]);
var state_33947__$1 = state_33947;
var statearr_33996_36030 = state_33947__$1;
(statearr_33996_36030[(2)] = inst_33939);

(statearr_33996_36030[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33948 === (8))){
var inst_33914 = (state_33947[(10)]);
var inst_33924 = (state_33947[(7)]);
var inst_33925 = (state_33947[(8)]);
var inst_33926 = (state_33947[(9)]);
var inst_33931 = (function (){var cs = inst_33914;
var vec__33920 = inst_33924;
var v = inst_33925;
var c = inst_33926;
return (function (p1__33906_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__33906_SHARP_);
});
})();
var inst_33932 = cljs.core.filterv(inst_33931,inst_33914);
var inst_33914__$1 = inst_33932;
var state_33947__$1 = (function (){var statearr_34000 = state_33947;
(statearr_34000[(10)] = inst_33914__$1);

return statearr_34000;
})();
var statearr_34001_36031 = state_33947__$1;
(statearr_34001_36031[(2)] = null);

(statearr_34001_36031[(1)] = (2));


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
var cljs$core$async$state_machine__30541__auto__ = null;
var cljs$core$async$state_machine__30541__auto____0 = (function (){
var statearr_34004 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34004[(0)] = cljs$core$async$state_machine__30541__auto__);

(statearr_34004[(1)] = (1));

return statearr_34004;
});
var cljs$core$async$state_machine__30541__auto____1 = (function (state_33947){
while(true){
var ret_value__30542__auto__ = (function (){try{while(true){
var result__30543__auto__ = switch__30540__auto__(state_33947);
if(cljs.core.keyword_identical_QMARK_(result__30543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30543__auto__;
}
break;
}
}catch (e34007){var ex__30544__auto__ = e34007;
var statearr_34009_36036 = state_33947;
(statearr_34009_36036[(2)] = ex__30544__auto__);


if(cljs.core.seq((state_33947[(4)]))){
var statearr_34010_36038 = state_33947;
(statearr_34010_36038[(1)] = cljs.core.first((state_33947[(4)])));

} else {
throw ex__30544__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36039 = state_33947;
state_33947 = G__36039;
continue;
} else {
return ret_value__30542__auto__;
}
break;
}
});
cljs$core$async$state_machine__30541__auto__ = function(state_33947){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30541__auto____1.call(this,state_33947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30541__auto____0;
cljs$core$async$state_machine__30541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30541__auto____1;
return cljs$core$async$state_machine__30541__auto__;
})()
})();
var state__31682__auto__ = (function (){var statearr_34014 = f__31681__auto__();
(statearr_34014[(6)] = c__31680__auto___36011);

return statearr_34014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31682__auto__);
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
var G__34036 = arguments.length;
switch (G__34036) {
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
var c__31680__auto___36041 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31681__auto__ = (function (){var switch__30540__auto__ = (function (state_34072){
var state_val_34073 = (state_34072[(1)]);
if((state_val_34073 === (7))){
var inst_34054 = (state_34072[(7)]);
var inst_34054__$1 = (state_34072[(2)]);
var inst_34055 = (inst_34054__$1 == null);
var inst_34056 = cljs.core.not(inst_34055);
var state_34072__$1 = (function (){var statearr_34085 = state_34072;
(statearr_34085[(7)] = inst_34054__$1);

return statearr_34085;
})();
if(inst_34056){
var statearr_34086_36042 = state_34072__$1;
(statearr_34086_36042[(1)] = (8));

} else {
var statearr_34087_36043 = state_34072__$1;
(statearr_34087_36043[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34073 === (1))){
var inst_34049 = (0);
var state_34072__$1 = (function (){var statearr_34089 = state_34072;
(statearr_34089[(8)] = inst_34049);

return statearr_34089;
})();
var statearr_34093_36044 = state_34072__$1;
(statearr_34093_36044[(2)] = null);

(statearr_34093_36044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34073 === (4))){
var state_34072__$1 = state_34072;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34072__$1,(7),ch);
} else {
if((state_val_34073 === (6))){
var inst_34067 = (state_34072[(2)]);
var state_34072__$1 = state_34072;
var statearr_34098_36045 = state_34072__$1;
(statearr_34098_36045[(2)] = inst_34067);

(statearr_34098_36045[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34073 === (3))){
var inst_34069 = (state_34072[(2)]);
var inst_34070 = cljs.core.async.close_BANG_(out);
var state_34072__$1 = (function (){var statearr_34099 = state_34072;
(statearr_34099[(9)] = inst_34069);

return statearr_34099;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34072__$1,inst_34070);
} else {
if((state_val_34073 === (2))){
var inst_34049 = (state_34072[(8)]);
var inst_34051 = (inst_34049 < n);
var state_34072__$1 = state_34072;
if(cljs.core.truth_(inst_34051)){
var statearr_34100_36046 = state_34072__$1;
(statearr_34100_36046[(1)] = (4));

} else {
var statearr_34101_36047 = state_34072__$1;
(statearr_34101_36047[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34073 === (11))){
var inst_34049 = (state_34072[(8)]);
var inst_34059 = (state_34072[(2)]);
var inst_34060 = (inst_34049 + (1));
var inst_34049__$1 = inst_34060;
var state_34072__$1 = (function (){var statearr_34107 = state_34072;
(statearr_34107[(10)] = inst_34059);

(statearr_34107[(8)] = inst_34049__$1);

return statearr_34107;
})();
var statearr_34108_36053 = state_34072__$1;
(statearr_34108_36053[(2)] = null);

(statearr_34108_36053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34073 === (9))){
var state_34072__$1 = state_34072;
var statearr_34109_36055 = state_34072__$1;
(statearr_34109_36055[(2)] = null);

(statearr_34109_36055[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34073 === (5))){
var state_34072__$1 = state_34072;
var statearr_34110_36061 = state_34072__$1;
(statearr_34110_36061[(2)] = null);

(statearr_34110_36061[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34073 === (10))){
var inst_34064 = (state_34072[(2)]);
var state_34072__$1 = state_34072;
var statearr_34111_36062 = state_34072__$1;
(statearr_34111_36062[(2)] = inst_34064);

(statearr_34111_36062[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34073 === (8))){
var inst_34054 = (state_34072[(7)]);
var state_34072__$1 = state_34072;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34072__$1,(11),out,inst_34054);
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
var cljs$core$async$state_machine__30541__auto__ = null;
var cljs$core$async$state_machine__30541__auto____0 = (function (){
var statearr_34112 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34112[(0)] = cljs$core$async$state_machine__30541__auto__);

(statearr_34112[(1)] = (1));

return statearr_34112;
});
var cljs$core$async$state_machine__30541__auto____1 = (function (state_34072){
while(true){
var ret_value__30542__auto__ = (function (){try{while(true){
var result__30543__auto__ = switch__30540__auto__(state_34072);
if(cljs.core.keyword_identical_QMARK_(result__30543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30543__auto__;
}
break;
}
}catch (e34113){var ex__30544__auto__ = e34113;
var statearr_34114_36065 = state_34072;
(statearr_34114_36065[(2)] = ex__30544__auto__);


if(cljs.core.seq((state_34072[(4)]))){
var statearr_34117_36068 = state_34072;
(statearr_34117_36068[(1)] = cljs.core.first((state_34072[(4)])));

} else {
throw ex__30544__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36070 = state_34072;
state_34072 = G__36070;
continue;
} else {
return ret_value__30542__auto__;
}
break;
}
});
cljs$core$async$state_machine__30541__auto__ = function(state_34072){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30541__auto____1.call(this,state_34072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30541__auto____0;
cljs$core$async$state_machine__30541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30541__auto____1;
return cljs$core$async$state_machine__30541__auto__;
})()
})();
var state__31682__auto__ = (function (){var statearr_34120 = f__31681__auto__();
(statearr_34120[(6)] = c__31680__auto___36041);

return statearr_34120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31682__auto__);
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
cljs.core.async.t_cljs$core$async34136 = (function (f,ch,meta34125,_,fn1,meta34137){
this.f = f;
this.ch = ch;
this.meta34125 = meta34125;
this._ = _;
this.fn1 = fn1;
this.meta34137 = meta34137;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34136.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34138,meta34137__$1){
var self__ = this;
var _34138__$1 = this;
return (new cljs.core.async.t_cljs$core$async34136(self__.f,self__.ch,self__.meta34125,self__._,self__.fn1,meta34137__$1));
}));

(cljs.core.async.t_cljs$core$async34136.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34138){
var self__ = this;
var _34138__$1 = this;
return self__.meta34137;
}));

(cljs.core.async.t_cljs$core$async34136.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34136.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async34136.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34136.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__34123_SHARP_){
var G__34147 = (((p1__34123_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34123_SHARP_) : self__.f.call(null,p1__34123_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34147) : f1.call(null,G__34147));
});
}));

(cljs.core.async.t_cljs$core$async34136.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34125","meta34125",-1201992459,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34124","cljs.core.async/t_cljs$core$async34124",1416392792,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34137","meta34137",47417693,null)], null);
}));

(cljs.core.async.t_cljs$core$async34136.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34136.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34136");

(cljs.core.async.t_cljs$core$async34136.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async34136");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34136.
 */
cljs.core.async.__GT_t_cljs$core$async34136 = (function cljs$core$async$__GT_t_cljs$core$async34136(f,ch,meta34125,_,fn1,meta34137){
return (new cljs.core.async.t_cljs$core$async34136(f,ch,meta34125,_,fn1,meta34137));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34124 = (function (f,ch,meta34125){
this.f = f;
this.ch = ch;
this.meta34125 = meta34125;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34126,meta34125__$1){
var self__ = this;
var _34126__$1 = this;
return (new cljs.core.async.t_cljs$core$async34124(self__.f,self__.ch,meta34125__$1));
}));

(cljs.core.async.t_cljs$core$async34124.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34126){
var self__ = this;
var _34126__$1 = this;
return self__.meta34125;
}));

(cljs.core.async.t_cljs$core$async34124.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34124.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34124.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34124.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34124.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async34136(self__.f,self__.ch,self__.meta34125,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5160__auto__ = ret;
if(cljs.core.truth_(and__5160__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5160__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34149 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34149) : self__.f.call(null,G__34149));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async34124.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34124.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async34124.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34125","meta34125",-1201992459,null)], null);
}));

(cljs.core.async.t_cljs$core$async34124.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34124.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34124");

(cljs.core.async.t_cljs$core$async34124.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async34124");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34124.
 */
cljs.core.async.__GT_t_cljs$core$async34124 = (function cljs$core$async$__GT_t_cljs$core$async34124(f,ch,meta34125){
return (new cljs.core.async.t_cljs$core$async34124(f,ch,meta34125));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async34124(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34176 = (function (f,ch,meta34177){
this.f = f;
this.ch = ch;
this.meta34177 = meta34177;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34176.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34178,meta34177__$1){
var self__ = this;
var _34178__$1 = this;
return (new cljs.core.async.t_cljs$core$async34176(self__.f,self__.ch,meta34177__$1));
}));

(cljs.core.async.t_cljs$core$async34176.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34178){
var self__ = this;
var _34178__$1 = this;
return self__.meta34177;
}));

(cljs.core.async.t_cljs$core$async34176.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34176.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34176.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34176.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34176.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34176.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async34176.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34177","meta34177",74067911,null)], null);
}));

(cljs.core.async.t_cljs$core$async34176.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34176.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34176");

(cljs.core.async.t_cljs$core$async34176.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async34176");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34176.
 */
cljs.core.async.__GT_t_cljs$core$async34176 = (function cljs$core$async$__GT_t_cljs$core$async34176(f,ch,meta34177){
return (new cljs.core.async.t_cljs$core$async34176(f,ch,meta34177));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async34176(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34203 = (function (p,ch,meta34204){
this.p = p;
this.ch = ch;
this.meta34204 = meta34204;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34203.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34205,meta34204__$1){
var self__ = this;
var _34205__$1 = this;
return (new cljs.core.async.t_cljs$core$async34203(self__.p,self__.ch,meta34204__$1));
}));

(cljs.core.async.t_cljs$core$async34203.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34205){
var self__ = this;
var _34205__$1 = this;
return self__.meta34204;
}));

(cljs.core.async.t_cljs$core$async34203.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34203.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34203.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34203.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34203.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34203.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34203.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async34203.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34204","meta34204",-600549870,null)], null);
}));

(cljs.core.async.t_cljs$core$async34203.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34203.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34203");

(cljs.core.async.t_cljs$core$async34203.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async34203");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34203.
 */
cljs.core.async.__GT_t_cljs$core$async34203 = (function cljs$core$async$__GT_t_cljs$core$async34203(p,ch,meta34204){
return (new cljs.core.async.t_cljs$core$async34203(p,ch,meta34204));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async34203(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34244 = arguments.length;
switch (G__34244) {
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
var c__31680__auto___36096 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31681__auto__ = (function (){var switch__30540__auto__ = (function (state_34273){
var state_val_34274 = (state_34273[(1)]);
if((state_val_34274 === (7))){
var inst_34269 = (state_34273[(2)]);
var state_34273__$1 = state_34273;
var statearr_34277_36101 = state_34273__$1;
(statearr_34277_36101[(2)] = inst_34269);

(statearr_34277_36101[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34274 === (1))){
var state_34273__$1 = state_34273;
var statearr_34278_36102 = state_34273__$1;
(statearr_34278_36102[(2)] = null);

(statearr_34278_36102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34274 === (4))){
var inst_34255 = (state_34273[(7)]);
var inst_34255__$1 = (state_34273[(2)]);
var inst_34256 = (inst_34255__$1 == null);
var state_34273__$1 = (function (){var statearr_34284 = state_34273;
(statearr_34284[(7)] = inst_34255__$1);

return statearr_34284;
})();
if(cljs.core.truth_(inst_34256)){
var statearr_34287_36103 = state_34273__$1;
(statearr_34287_36103[(1)] = (5));

} else {
var statearr_34288_36104 = state_34273__$1;
(statearr_34288_36104[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34274 === (6))){
var inst_34255 = (state_34273[(7)]);
var inst_34260 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34255) : p.call(null,inst_34255));
var state_34273__$1 = state_34273;
if(cljs.core.truth_(inst_34260)){
var statearr_34293_36105 = state_34273__$1;
(statearr_34293_36105[(1)] = (8));

} else {
var statearr_34294_36106 = state_34273__$1;
(statearr_34294_36106[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34274 === (3))){
var inst_34271 = (state_34273[(2)]);
var state_34273__$1 = state_34273;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34273__$1,inst_34271);
} else {
if((state_val_34274 === (2))){
var state_34273__$1 = state_34273;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34273__$1,(4),ch);
} else {
if((state_val_34274 === (11))){
var inst_34263 = (state_34273[(2)]);
var state_34273__$1 = state_34273;
var statearr_34300_36107 = state_34273__$1;
(statearr_34300_36107[(2)] = inst_34263);

(statearr_34300_36107[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34274 === (9))){
var state_34273__$1 = state_34273;
var statearr_34305_36108 = state_34273__$1;
(statearr_34305_36108[(2)] = null);

(statearr_34305_36108[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34274 === (5))){
var inst_34258 = cljs.core.async.close_BANG_(out);
var state_34273__$1 = state_34273;
var statearr_34310_36109 = state_34273__$1;
(statearr_34310_36109[(2)] = inst_34258);

(statearr_34310_36109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34274 === (10))){
var inst_34266 = (state_34273[(2)]);
var state_34273__$1 = (function (){var statearr_34312 = state_34273;
(statearr_34312[(8)] = inst_34266);

return statearr_34312;
})();
var statearr_34313_36110 = state_34273__$1;
(statearr_34313_36110[(2)] = null);

(statearr_34313_36110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34274 === (8))){
var inst_34255 = (state_34273[(7)]);
var state_34273__$1 = state_34273;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34273__$1,(11),out,inst_34255);
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
var cljs$core$async$state_machine__30541__auto__ = null;
var cljs$core$async$state_machine__30541__auto____0 = (function (){
var statearr_34315 = [null,null,null,null,null,null,null,null,null];
(statearr_34315[(0)] = cljs$core$async$state_machine__30541__auto__);

(statearr_34315[(1)] = (1));

return statearr_34315;
});
var cljs$core$async$state_machine__30541__auto____1 = (function (state_34273){
while(true){
var ret_value__30542__auto__ = (function (){try{while(true){
var result__30543__auto__ = switch__30540__auto__(state_34273);
if(cljs.core.keyword_identical_QMARK_(result__30543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30543__auto__;
}
break;
}
}catch (e34316){var ex__30544__auto__ = e34316;
var statearr_34317_36111 = state_34273;
(statearr_34317_36111[(2)] = ex__30544__auto__);


if(cljs.core.seq((state_34273[(4)]))){
var statearr_34319_36112 = state_34273;
(statearr_34319_36112[(1)] = cljs.core.first((state_34273[(4)])));

} else {
throw ex__30544__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36113 = state_34273;
state_34273 = G__36113;
continue;
} else {
return ret_value__30542__auto__;
}
break;
}
});
cljs$core$async$state_machine__30541__auto__ = function(state_34273){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30541__auto____1.call(this,state_34273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30541__auto____0;
cljs$core$async$state_machine__30541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30541__auto____1;
return cljs$core$async$state_machine__30541__auto__;
})()
})();
var state__31682__auto__ = (function (){var statearr_34320 = f__31681__auto__();
(statearr_34320[(6)] = c__31680__auto___36096);

return statearr_34320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31682__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34331 = arguments.length;
switch (G__34331) {
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
var c__31680__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31681__auto__ = (function (){var switch__30540__auto__ = (function (state_34429){
var state_val_34432 = (state_34429[(1)]);
if((state_val_34432 === (7))){
var inst_34425 = (state_34429[(2)]);
var state_34429__$1 = state_34429;
var statearr_34439_36115 = state_34429__$1;
(statearr_34439_36115[(2)] = inst_34425);

(statearr_34439_36115[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34432 === (20))){
var inst_34373 = (state_34429[(7)]);
var inst_34406 = (state_34429[(2)]);
var inst_34407 = cljs.core.next(inst_34373);
var inst_34357 = inst_34407;
var inst_34358 = null;
var inst_34359 = (0);
var inst_34361 = (0);
var state_34429__$1 = (function (){var statearr_34440 = state_34429;
(statearr_34440[(8)] = inst_34406);

(statearr_34440[(9)] = inst_34357);

(statearr_34440[(10)] = inst_34358);

(statearr_34440[(11)] = inst_34359);

(statearr_34440[(12)] = inst_34361);

return statearr_34440;
})();
var statearr_34442_36117 = state_34429__$1;
(statearr_34442_36117[(2)] = null);

(statearr_34442_36117[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34432 === (1))){
var state_34429__$1 = state_34429;
var statearr_34444_36120 = state_34429__$1;
(statearr_34444_36120[(2)] = null);

(statearr_34444_36120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34432 === (4))){
var inst_34343 = (state_34429[(13)]);
var inst_34343__$1 = (state_34429[(2)]);
var inst_34344 = (inst_34343__$1 == null);
var state_34429__$1 = (function (){var statearr_34449 = state_34429;
(statearr_34449[(13)] = inst_34343__$1);

return statearr_34449;
})();
if(cljs.core.truth_(inst_34344)){
var statearr_34450_36124 = state_34429__$1;
(statearr_34450_36124[(1)] = (5));

} else {
var statearr_34451_36125 = state_34429__$1;
(statearr_34451_36125[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34432 === (15))){
var state_34429__$1 = state_34429;
var statearr_34455_36126 = state_34429__$1;
(statearr_34455_36126[(2)] = null);

(statearr_34455_36126[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34432 === (21))){
var state_34429__$1 = state_34429;
var statearr_34456_36127 = state_34429__$1;
(statearr_34456_36127[(2)] = null);

(statearr_34456_36127[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34432 === (13))){
var inst_34361 = (state_34429[(12)]);
var inst_34357 = (state_34429[(9)]);
var inst_34358 = (state_34429[(10)]);
var inst_34359 = (state_34429[(11)]);
var inst_34369 = (state_34429[(2)]);
var inst_34370 = (inst_34361 + (1));
var tmp34452 = inst_34359;
var tmp34453 = inst_34357;
var tmp34454 = inst_34358;
var inst_34357__$1 = tmp34453;
var inst_34358__$1 = tmp34454;
var inst_34359__$1 = tmp34452;
var inst_34361__$1 = inst_34370;
var state_34429__$1 = (function (){var statearr_34458 = state_34429;
(statearr_34458[(14)] = inst_34369);

(statearr_34458[(9)] = inst_34357__$1);

(statearr_34458[(10)] = inst_34358__$1);

(statearr_34458[(11)] = inst_34359__$1);

(statearr_34458[(12)] = inst_34361__$1);

return statearr_34458;
})();
var statearr_34462_36130 = state_34429__$1;
(statearr_34462_36130[(2)] = null);

(statearr_34462_36130[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34432 === (22))){
var state_34429__$1 = state_34429;
var statearr_34463_36132 = state_34429__$1;
(statearr_34463_36132[(2)] = null);

(statearr_34463_36132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34432 === (6))){
var inst_34343 = (state_34429[(13)]);
var inst_34354 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34343) : f.call(null,inst_34343));
var inst_34355 = cljs.core.seq(inst_34354);
var inst_34357 = inst_34355;
var inst_34358 = null;
var inst_34359 = (0);
var inst_34361 = (0);
var state_34429__$1 = (function (){var statearr_34479 = state_34429;
(statearr_34479[(9)] = inst_34357);

(statearr_34479[(10)] = inst_34358);

(statearr_34479[(11)] = inst_34359);

(statearr_34479[(12)] = inst_34361);

return statearr_34479;
})();
var statearr_34480_36137 = state_34429__$1;
(statearr_34480_36137[(2)] = null);

(statearr_34480_36137[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34432 === (17))){
var inst_34373 = (state_34429[(7)]);
var inst_34377 = cljs.core.chunk_first(inst_34373);
var inst_34398 = cljs.core.chunk_rest(inst_34373);
var inst_34400 = cljs.core.count(inst_34377);
var inst_34357 = inst_34398;
var inst_34358 = inst_34377;
var inst_34359 = inst_34400;
var inst_34361 = (0);
var state_34429__$1 = (function (){var statearr_34489 = state_34429;
(statearr_34489[(9)] = inst_34357);

(statearr_34489[(10)] = inst_34358);

(statearr_34489[(11)] = inst_34359);

(statearr_34489[(12)] = inst_34361);

return statearr_34489;
})();
var statearr_34490_36140 = state_34429__$1;
(statearr_34490_36140[(2)] = null);

(statearr_34490_36140[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34432 === (3))){
var inst_34427 = (state_34429[(2)]);
var state_34429__$1 = state_34429;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34429__$1,inst_34427);
} else {
if((state_val_34432 === (12))){
var inst_34415 = (state_34429[(2)]);
var state_34429__$1 = state_34429;
var statearr_34491_36145 = state_34429__$1;
(statearr_34491_36145[(2)] = inst_34415);

(statearr_34491_36145[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34432 === (2))){
var state_34429__$1 = state_34429;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34429__$1,(4),in$);
} else {
if((state_val_34432 === (23))){
var inst_34423 = (state_34429[(2)]);
var state_34429__$1 = state_34429;
var statearr_34492_36146 = state_34429__$1;
(statearr_34492_36146[(2)] = inst_34423);

(statearr_34492_36146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34432 === (19))){
var inst_34410 = (state_34429[(2)]);
var state_34429__$1 = state_34429;
var statearr_34493_36148 = state_34429__$1;
(statearr_34493_36148[(2)] = inst_34410);

(statearr_34493_36148[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34432 === (11))){
var inst_34357 = (state_34429[(9)]);
var inst_34373 = (state_34429[(7)]);
var inst_34373__$1 = cljs.core.seq(inst_34357);
var state_34429__$1 = (function (){var statearr_34496 = state_34429;
(statearr_34496[(7)] = inst_34373__$1);

return statearr_34496;
})();
if(inst_34373__$1){
var statearr_34497_36149 = state_34429__$1;
(statearr_34497_36149[(1)] = (14));

} else {
var statearr_34500_36150 = state_34429__$1;
(statearr_34500_36150[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34432 === (9))){
var inst_34417 = (state_34429[(2)]);
var inst_34418 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34429__$1 = (function (){var statearr_34503 = state_34429;
(statearr_34503[(15)] = inst_34417);

return statearr_34503;
})();
if(cljs.core.truth_(inst_34418)){
var statearr_34504_36151 = state_34429__$1;
(statearr_34504_36151[(1)] = (21));

} else {
var statearr_34505_36152 = state_34429__$1;
(statearr_34505_36152[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34432 === (5))){
var inst_34346 = cljs.core.async.close_BANG_(out);
var state_34429__$1 = state_34429;
var statearr_34506_36153 = state_34429__$1;
(statearr_34506_36153[(2)] = inst_34346);

(statearr_34506_36153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34432 === (14))){
var inst_34373 = (state_34429[(7)]);
var inst_34375 = cljs.core.chunked_seq_QMARK_(inst_34373);
var state_34429__$1 = state_34429;
if(inst_34375){
var statearr_34508_36154 = state_34429__$1;
(statearr_34508_36154[(1)] = (17));

} else {
var statearr_34509_36156 = state_34429__$1;
(statearr_34509_36156[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34432 === (16))){
var inst_34413 = (state_34429[(2)]);
var state_34429__$1 = state_34429;
var statearr_34510_36157 = state_34429__$1;
(statearr_34510_36157[(2)] = inst_34413);

(statearr_34510_36157[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34432 === (10))){
var inst_34358 = (state_34429[(10)]);
var inst_34361 = (state_34429[(12)]);
var inst_34366 = cljs.core._nth(inst_34358,inst_34361);
var state_34429__$1 = state_34429;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34429__$1,(13),out,inst_34366);
} else {
if((state_val_34432 === (18))){
var inst_34373 = (state_34429[(7)]);
var inst_34404 = cljs.core.first(inst_34373);
var state_34429__$1 = state_34429;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34429__$1,(20),out,inst_34404);
} else {
if((state_val_34432 === (8))){
var inst_34361 = (state_34429[(12)]);
var inst_34359 = (state_34429[(11)]);
var inst_34363 = (inst_34361 < inst_34359);
var inst_34364 = inst_34363;
var state_34429__$1 = state_34429;
if(cljs.core.truth_(inst_34364)){
var statearr_34514_36159 = state_34429__$1;
(statearr_34514_36159[(1)] = (10));

} else {
var statearr_34515_36160 = state_34429__$1;
(statearr_34515_36160[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__30541__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30541__auto____0 = (function (){
var statearr_34518 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34518[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30541__auto__);

(statearr_34518[(1)] = (1));

return statearr_34518;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30541__auto____1 = (function (state_34429){
while(true){
var ret_value__30542__auto__ = (function (){try{while(true){
var result__30543__auto__ = switch__30540__auto__(state_34429);
if(cljs.core.keyword_identical_QMARK_(result__30543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30543__auto__;
}
break;
}
}catch (e34525){var ex__30544__auto__ = e34525;
var statearr_34526_36165 = state_34429;
(statearr_34526_36165[(2)] = ex__30544__auto__);


if(cljs.core.seq((state_34429[(4)]))){
var statearr_34527_36166 = state_34429;
(statearr_34527_36166[(1)] = cljs.core.first((state_34429[(4)])));

} else {
throw ex__30544__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36167 = state_34429;
state_34429 = G__36167;
continue;
} else {
return ret_value__30542__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30541__auto__ = function(state_34429){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30541__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30541__auto____1.call(this,state_34429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30541__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30541__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30541__auto__;
})()
})();
var state__31682__auto__ = (function (){var statearr_34532 = f__31681__auto__();
(statearr_34532[(6)] = c__31680__auto__);

return statearr_34532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31682__auto__);
}));

return c__31680__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34537 = arguments.length;
switch (G__34537) {
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
var G__34558 = arguments.length;
switch (G__34558) {
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
var G__34577 = arguments.length;
switch (G__34577) {
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
var c__31680__auto___36173 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31681__auto__ = (function (){var switch__30540__auto__ = (function (state_34616){
var state_val_34617 = (state_34616[(1)]);
if((state_val_34617 === (7))){
var inst_34611 = (state_34616[(2)]);
var state_34616__$1 = state_34616;
var statearr_34619_36177 = state_34616__$1;
(statearr_34619_36177[(2)] = inst_34611);

(statearr_34619_36177[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (1))){
var inst_34592 = null;
var state_34616__$1 = (function (){var statearr_34623 = state_34616;
(statearr_34623[(7)] = inst_34592);

return statearr_34623;
})();
var statearr_34624_36178 = state_34616__$1;
(statearr_34624_36178[(2)] = null);

(statearr_34624_36178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (4))){
var inst_34595 = (state_34616[(8)]);
var inst_34595__$1 = (state_34616[(2)]);
var inst_34597 = (inst_34595__$1 == null);
var inst_34598 = cljs.core.not(inst_34597);
var state_34616__$1 = (function (){var statearr_34632 = state_34616;
(statearr_34632[(8)] = inst_34595__$1);

return statearr_34632;
})();
if(inst_34598){
var statearr_34633_36179 = state_34616__$1;
(statearr_34633_36179[(1)] = (5));

} else {
var statearr_34635_36180 = state_34616__$1;
(statearr_34635_36180[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (6))){
var state_34616__$1 = state_34616;
var statearr_34637_36181 = state_34616__$1;
(statearr_34637_36181[(2)] = null);

(statearr_34637_36181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (3))){
var inst_34613 = (state_34616[(2)]);
var inst_34614 = cljs.core.async.close_BANG_(out);
var state_34616__$1 = (function (){var statearr_34639 = state_34616;
(statearr_34639[(9)] = inst_34613);

return statearr_34639;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34616__$1,inst_34614);
} else {
if((state_val_34617 === (2))){
var state_34616__$1 = state_34616;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34616__$1,(4),ch);
} else {
if((state_val_34617 === (11))){
var inst_34595 = (state_34616[(8)]);
var inst_34605 = (state_34616[(2)]);
var inst_34592 = inst_34595;
var state_34616__$1 = (function (){var statearr_34643 = state_34616;
(statearr_34643[(10)] = inst_34605);

(statearr_34643[(7)] = inst_34592);

return statearr_34643;
})();
var statearr_34644_36185 = state_34616__$1;
(statearr_34644_36185[(2)] = null);

(statearr_34644_36185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (9))){
var inst_34595 = (state_34616[(8)]);
var state_34616__$1 = state_34616;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34616__$1,(11),out,inst_34595);
} else {
if((state_val_34617 === (5))){
var inst_34595 = (state_34616[(8)]);
var inst_34592 = (state_34616[(7)]);
var inst_34600 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34595,inst_34592);
var state_34616__$1 = state_34616;
if(inst_34600){
var statearr_34662_36187 = state_34616__$1;
(statearr_34662_36187[(1)] = (8));

} else {
var statearr_34664_36188 = state_34616__$1;
(statearr_34664_36188[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (10))){
var inst_34608 = (state_34616[(2)]);
var state_34616__$1 = state_34616;
var statearr_34667_36189 = state_34616__$1;
(statearr_34667_36189[(2)] = inst_34608);

(statearr_34667_36189[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (8))){
var inst_34592 = (state_34616[(7)]);
var tmp34661 = inst_34592;
var inst_34592__$1 = tmp34661;
var state_34616__$1 = (function (){var statearr_34671 = state_34616;
(statearr_34671[(7)] = inst_34592__$1);

return statearr_34671;
})();
var statearr_34673_36196 = state_34616__$1;
(statearr_34673_36196[(2)] = null);

(statearr_34673_36196[(1)] = (2));


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
var cljs$core$async$state_machine__30541__auto__ = null;
var cljs$core$async$state_machine__30541__auto____0 = (function (){
var statearr_34680 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34680[(0)] = cljs$core$async$state_machine__30541__auto__);

(statearr_34680[(1)] = (1));

return statearr_34680;
});
var cljs$core$async$state_machine__30541__auto____1 = (function (state_34616){
while(true){
var ret_value__30542__auto__ = (function (){try{while(true){
var result__30543__auto__ = switch__30540__auto__(state_34616);
if(cljs.core.keyword_identical_QMARK_(result__30543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30543__auto__;
}
break;
}
}catch (e34681){var ex__30544__auto__ = e34681;
var statearr_34682_36201 = state_34616;
(statearr_34682_36201[(2)] = ex__30544__auto__);


if(cljs.core.seq((state_34616[(4)]))){
var statearr_34684_36204 = state_34616;
(statearr_34684_36204[(1)] = cljs.core.first((state_34616[(4)])));

} else {
throw ex__30544__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36206 = state_34616;
state_34616 = G__36206;
continue;
} else {
return ret_value__30542__auto__;
}
break;
}
});
cljs$core$async$state_machine__30541__auto__ = function(state_34616){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30541__auto____1.call(this,state_34616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30541__auto____0;
cljs$core$async$state_machine__30541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30541__auto____1;
return cljs$core$async$state_machine__30541__auto__;
})()
})();
var state__31682__auto__ = (function (){var statearr_34693 = f__31681__auto__();
(statearr_34693[(6)] = c__31680__auto___36173);

return statearr_34693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31682__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34696 = arguments.length;
switch (G__34696) {
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
var c__31680__auto___36213 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31681__auto__ = (function (){var switch__30540__auto__ = (function (state_34747){
var state_val_34750 = (state_34747[(1)]);
if((state_val_34750 === (7))){
var inst_34740 = (state_34747[(2)]);
var state_34747__$1 = state_34747;
var statearr_34766_36214 = state_34747__$1;
(statearr_34766_36214[(2)] = inst_34740);

(statearr_34766_36214[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34750 === (1))){
var inst_34707 = (new Array(n));
var inst_34708 = inst_34707;
var inst_34709 = (0);
var state_34747__$1 = (function (){var statearr_34770 = state_34747;
(statearr_34770[(7)] = inst_34708);

(statearr_34770[(8)] = inst_34709);

return statearr_34770;
})();
var statearr_34774_36219 = state_34747__$1;
(statearr_34774_36219[(2)] = null);

(statearr_34774_36219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34750 === (4))){
var inst_34712 = (state_34747[(9)]);
var inst_34712__$1 = (state_34747[(2)]);
var inst_34713 = (inst_34712__$1 == null);
var inst_34714 = cljs.core.not(inst_34713);
var state_34747__$1 = (function (){var statearr_34776 = state_34747;
(statearr_34776[(9)] = inst_34712__$1);

return statearr_34776;
})();
if(inst_34714){
var statearr_34777_36223 = state_34747__$1;
(statearr_34777_36223[(1)] = (5));

} else {
var statearr_34778_36227 = state_34747__$1;
(statearr_34778_36227[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34750 === (15))){
var inst_34734 = (state_34747[(2)]);
var state_34747__$1 = state_34747;
var statearr_34779_36228 = state_34747__$1;
(statearr_34779_36228[(2)] = inst_34734);

(statearr_34779_36228[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34750 === (13))){
var state_34747__$1 = state_34747;
var statearr_34780_36229 = state_34747__$1;
(statearr_34780_36229[(2)] = null);

(statearr_34780_36229[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34750 === (6))){
var inst_34709 = (state_34747[(8)]);
var inst_34730 = (inst_34709 > (0));
var state_34747__$1 = state_34747;
if(cljs.core.truth_(inst_34730)){
var statearr_34781_36234 = state_34747__$1;
(statearr_34781_36234[(1)] = (12));

} else {
var statearr_34782_36235 = state_34747__$1;
(statearr_34782_36235[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34750 === (3))){
var inst_34742 = (state_34747[(2)]);
var state_34747__$1 = state_34747;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34747__$1,inst_34742);
} else {
if((state_val_34750 === (12))){
var inst_34708 = (state_34747[(7)]);
var inst_34732 = cljs.core.vec(inst_34708);
var state_34747__$1 = state_34747;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34747__$1,(15),out,inst_34732);
} else {
if((state_val_34750 === (2))){
var state_34747__$1 = state_34747;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34747__$1,(4),ch);
} else {
if((state_val_34750 === (11))){
var inst_34724 = (state_34747[(2)]);
var inst_34725 = (new Array(n));
var inst_34708 = inst_34725;
var inst_34709 = (0);
var state_34747__$1 = (function (){var statearr_34789 = state_34747;
(statearr_34789[(10)] = inst_34724);

(statearr_34789[(7)] = inst_34708);

(statearr_34789[(8)] = inst_34709);

return statearr_34789;
})();
var statearr_34790_36236 = state_34747__$1;
(statearr_34790_36236[(2)] = null);

(statearr_34790_36236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34750 === (9))){
var inst_34708 = (state_34747[(7)]);
var inst_34722 = cljs.core.vec(inst_34708);
var state_34747__$1 = state_34747;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34747__$1,(11),out,inst_34722);
} else {
if((state_val_34750 === (5))){
var inst_34708 = (state_34747[(7)]);
var inst_34709 = (state_34747[(8)]);
var inst_34712 = (state_34747[(9)]);
var inst_34717 = (state_34747[(11)]);
var inst_34716 = (inst_34708[inst_34709] = inst_34712);
var inst_34717__$1 = (inst_34709 + (1));
var inst_34718 = (inst_34717__$1 < n);
var state_34747__$1 = (function (){var statearr_34791 = state_34747;
(statearr_34791[(12)] = inst_34716);

(statearr_34791[(11)] = inst_34717__$1);

return statearr_34791;
})();
if(cljs.core.truth_(inst_34718)){
var statearr_34792_36240 = state_34747__$1;
(statearr_34792_36240[(1)] = (8));

} else {
var statearr_34793_36241 = state_34747__$1;
(statearr_34793_36241[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34750 === (14))){
var inst_34737 = (state_34747[(2)]);
var inst_34738 = cljs.core.async.close_BANG_(out);
var state_34747__$1 = (function (){var statearr_34796 = state_34747;
(statearr_34796[(13)] = inst_34737);

return statearr_34796;
})();
var statearr_34797_36245 = state_34747__$1;
(statearr_34797_36245[(2)] = inst_34738);

(statearr_34797_36245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34750 === (10))){
var inst_34728 = (state_34747[(2)]);
var state_34747__$1 = state_34747;
var statearr_34801_36246 = state_34747__$1;
(statearr_34801_36246[(2)] = inst_34728);

(statearr_34801_36246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34750 === (8))){
var inst_34708 = (state_34747[(7)]);
var inst_34717 = (state_34747[(11)]);
var tmp34794 = inst_34708;
var inst_34708__$1 = tmp34794;
var inst_34709 = inst_34717;
var state_34747__$1 = (function (){var statearr_34802 = state_34747;
(statearr_34802[(7)] = inst_34708__$1);

(statearr_34802[(8)] = inst_34709);

return statearr_34802;
})();
var statearr_34803_36247 = state_34747__$1;
(statearr_34803_36247[(2)] = null);

(statearr_34803_36247[(1)] = (2));


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
var cljs$core$async$state_machine__30541__auto__ = null;
var cljs$core$async$state_machine__30541__auto____0 = (function (){
var statearr_34807 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34807[(0)] = cljs$core$async$state_machine__30541__auto__);

(statearr_34807[(1)] = (1));

return statearr_34807;
});
var cljs$core$async$state_machine__30541__auto____1 = (function (state_34747){
while(true){
var ret_value__30542__auto__ = (function (){try{while(true){
var result__30543__auto__ = switch__30540__auto__(state_34747);
if(cljs.core.keyword_identical_QMARK_(result__30543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30543__auto__;
}
break;
}
}catch (e34808){var ex__30544__auto__ = e34808;
var statearr_34809_36251 = state_34747;
(statearr_34809_36251[(2)] = ex__30544__auto__);


if(cljs.core.seq((state_34747[(4)]))){
var statearr_34810_36252 = state_34747;
(statearr_34810_36252[(1)] = cljs.core.first((state_34747[(4)])));

} else {
throw ex__30544__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36253 = state_34747;
state_34747 = G__36253;
continue;
} else {
return ret_value__30542__auto__;
}
break;
}
});
cljs$core$async$state_machine__30541__auto__ = function(state_34747){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30541__auto____1.call(this,state_34747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30541__auto____0;
cljs$core$async$state_machine__30541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30541__auto____1;
return cljs$core$async$state_machine__30541__auto__;
})()
})();
var state__31682__auto__ = (function (){var statearr_34815 = f__31681__auto__();
(statearr_34815[(6)] = c__31680__auto___36213);

return statearr_34815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31682__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34820 = arguments.length;
switch (G__34820) {
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
var c__31680__auto___36259 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31681__auto__ = (function (){var switch__30540__auto__ = (function (state_34882){
var state_val_34883 = (state_34882[(1)]);
if((state_val_34883 === (7))){
var inst_34877 = (state_34882[(2)]);
var state_34882__$1 = state_34882;
var statearr_34889_36260 = state_34882__$1;
(statearr_34889_36260[(2)] = inst_34877);

(statearr_34889_36260[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34883 === (1))){
var inst_34825 = [];
var inst_34827 = inst_34825;
var inst_34828 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34882__$1 = (function (){var statearr_34893 = state_34882;
(statearr_34893[(7)] = inst_34827);

(statearr_34893[(8)] = inst_34828);

return statearr_34893;
})();
var statearr_34897_36261 = state_34882__$1;
(statearr_34897_36261[(2)] = null);

(statearr_34897_36261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34883 === (4))){
var inst_34833 = (state_34882[(9)]);
var inst_34833__$1 = (state_34882[(2)]);
var inst_34834 = (inst_34833__$1 == null);
var inst_34835 = cljs.core.not(inst_34834);
var state_34882__$1 = (function (){var statearr_34901 = state_34882;
(statearr_34901[(9)] = inst_34833__$1);

return statearr_34901;
})();
if(inst_34835){
var statearr_34902_36262 = state_34882__$1;
(statearr_34902_36262[(1)] = (5));

} else {
var statearr_34903_36263 = state_34882__$1;
(statearr_34903_36263[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34883 === (15))){
var inst_34827 = (state_34882[(7)]);
var inst_34868 = cljs.core.vec(inst_34827);
var state_34882__$1 = state_34882;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34882__$1,(18),out,inst_34868);
} else {
if((state_val_34883 === (13))){
var inst_34862 = (state_34882[(2)]);
var state_34882__$1 = state_34882;
var statearr_34910_36266 = state_34882__$1;
(statearr_34910_36266[(2)] = inst_34862);

(statearr_34910_36266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34883 === (6))){
var inst_34827 = (state_34882[(7)]);
var inst_34864 = inst_34827.length;
var inst_34865 = (inst_34864 > (0));
var state_34882__$1 = state_34882;
if(cljs.core.truth_(inst_34865)){
var statearr_34911_36267 = state_34882__$1;
(statearr_34911_36267[(1)] = (15));

} else {
var statearr_34912_36268 = state_34882__$1;
(statearr_34912_36268[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34883 === (17))){
var inst_34874 = (state_34882[(2)]);
var inst_34875 = cljs.core.async.close_BANG_(out);
var state_34882__$1 = (function (){var statearr_34927 = state_34882;
(statearr_34927[(10)] = inst_34874);

return statearr_34927;
})();
var statearr_34928_36269 = state_34882__$1;
(statearr_34928_36269[(2)] = inst_34875);

(statearr_34928_36269[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34883 === (3))){
var inst_34879 = (state_34882[(2)]);
var state_34882__$1 = state_34882;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34882__$1,inst_34879);
} else {
if((state_val_34883 === (12))){
var inst_34827 = (state_34882[(7)]);
var inst_34851 = cljs.core.vec(inst_34827);
var state_34882__$1 = state_34882;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34882__$1,(14),out,inst_34851);
} else {
if((state_val_34883 === (2))){
var state_34882__$1 = state_34882;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34882__$1,(4),ch);
} else {
if((state_val_34883 === (11))){
var inst_34827 = (state_34882[(7)]);
var inst_34833 = (state_34882[(9)]);
var inst_34837 = (state_34882[(11)]);
var inst_34845 = inst_34827.push(inst_34833);
var tmp34934 = inst_34827;
var inst_34827__$1 = tmp34934;
var inst_34828 = inst_34837;
var state_34882__$1 = (function (){var statearr_34938 = state_34882;
(statearr_34938[(12)] = inst_34845);

(statearr_34938[(7)] = inst_34827__$1);

(statearr_34938[(8)] = inst_34828);

return statearr_34938;
})();
var statearr_34939_36270 = state_34882__$1;
(statearr_34939_36270[(2)] = null);

(statearr_34939_36270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34883 === (9))){
var inst_34828 = (state_34882[(8)]);
var inst_34841 = cljs.core.keyword_identical_QMARK_(inst_34828,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_34882__$1 = state_34882;
var statearr_34940_36271 = state_34882__$1;
(statearr_34940_36271[(2)] = inst_34841);

(statearr_34940_36271[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34883 === (5))){
var inst_34833 = (state_34882[(9)]);
var inst_34837 = (state_34882[(11)]);
var inst_34828 = (state_34882[(8)]);
var inst_34838 = (state_34882[(13)]);
var inst_34837__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34833) : f.call(null,inst_34833));
var inst_34838__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34837__$1,inst_34828);
var state_34882__$1 = (function (){var statearr_34941 = state_34882;
(statearr_34941[(11)] = inst_34837__$1);

(statearr_34941[(13)] = inst_34838__$1);

return statearr_34941;
})();
if(inst_34838__$1){
var statearr_34942_36272 = state_34882__$1;
(statearr_34942_36272[(1)] = (8));

} else {
var statearr_34943_36274 = state_34882__$1;
(statearr_34943_36274[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34883 === (14))){
var inst_34833 = (state_34882[(9)]);
var inst_34837 = (state_34882[(11)]);
var inst_34853 = (state_34882[(2)]);
var inst_34854 = [];
var inst_34855 = inst_34854.push(inst_34833);
var inst_34827 = inst_34854;
var inst_34828 = inst_34837;
var state_34882__$1 = (function (){var statearr_34944 = state_34882;
(statearr_34944[(14)] = inst_34853);

(statearr_34944[(15)] = inst_34855);

(statearr_34944[(7)] = inst_34827);

(statearr_34944[(8)] = inst_34828);

return statearr_34944;
})();
var statearr_34945_36275 = state_34882__$1;
(statearr_34945_36275[(2)] = null);

(statearr_34945_36275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34883 === (16))){
var state_34882__$1 = state_34882;
var statearr_34946_36276 = state_34882__$1;
(statearr_34946_36276[(2)] = null);

(statearr_34946_36276[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34883 === (10))){
var inst_34843 = (state_34882[(2)]);
var state_34882__$1 = state_34882;
if(cljs.core.truth_(inst_34843)){
var statearr_34947_36277 = state_34882__$1;
(statearr_34947_36277[(1)] = (11));

} else {
var statearr_34948_36287 = state_34882__$1;
(statearr_34948_36287[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34883 === (18))){
var inst_34870 = (state_34882[(2)]);
var state_34882__$1 = state_34882;
var statearr_34950_36288 = state_34882__$1;
(statearr_34950_36288[(2)] = inst_34870);

(statearr_34950_36288[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34883 === (8))){
var inst_34838 = (state_34882[(13)]);
var state_34882__$1 = state_34882;
var statearr_34951_36289 = state_34882__$1;
(statearr_34951_36289[(2)] = inst_34838);

(statearr_34951_36289[(1)] = (10));


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
var cljs$core$async$state_machine__30541__auto__ = null;
var cljs$core$async$state_machine__30541__auto____0 = (function (){
var statearr_34952 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34952[(0)] = cljs$core$async$state_machine__30541__auto__);

(statearr_34952[(1)] = (1));

return statearr_34952;
});
var cljs$core$async$state_machine__30541__auto____1 = (function (state_34882){
while(true){
var ret_value__30542__auto__ = (function (){try{while(true){
var result__30543__auto__ = switch__30540__auto__(state_34882);
if(cljs.core.keyword_identical_QMARK_(result__30543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30543__auto__;
}
break;
}
}catch (e34953){var ex__30544__auto__ = e34953;
var statearr_34954_36291 = state_34882;
(statearr_34954_36291[(2)] = ex__30544__auto__);


if(cljs.core.seq((state_34882[(4)]))){
var statearr_34958_36292 = state_34882;
(statearr_34958_36292[(1)] = cljs.core.first((state_34882[(4)])));

} else {
throw ex__30544__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36298 = state_34882;
state_34882 = G__36298;
continue;
} else {
return ret_value__30542__auto__;
}
break;
}
});
cljs$core$async$state_machine__30541__auto__ = function(state_34882){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30541__auto____1.call(this,state_34882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30541__auto____0;
cljs$core$async$state_machine__30541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30541__auto____1;
return cljs$core$async$state_machine__30541__auto__;
})()
})();
var state__31682__auto__ = (function (){var statearr_34959 = f__31681__auto__();
(statearr_34959[(6)] = c__31680__auto___36259);

return statearr_34959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31682__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
