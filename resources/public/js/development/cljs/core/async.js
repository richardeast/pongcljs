// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__29136 = arguments.length;
switch (G__29136) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29137 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29137 = (function (f,blockable,meta29138){
this.f = f;
this.blockable = blockable;
this.meta29138 = meta29138;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29137.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29139,meta29138__$1){
var self__ = this;
var _29139__$1 = this;
return (new cljs.core.async.t_cljs$core$async29137(self__.f,self__.blockable,meta29138__$1));
});

cljs.core.async.t_cljs$core$async29137.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29139){
var self__ = this;
var _29139__$1 = this;
return self__.meta29138;
});

cljs.core.async.t_cljs$core$async29137.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29137.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29137.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async29137.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async29137.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29138","meta29138",-1389139266,null)], null);
});

cljs.core.async.t_cljs$core$async29137.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29137.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29137";

cljs.core.async.t_cljs$core$async29137.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async29137");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29137.
 */
cljs.core.async.__GT_t_cljs$core$async29137 = (function cljs$core$async$__GT_t_cljs$core$async29137(f__$1,blockable__$1,meta29138){
return (new cljs.core.async.t_cljs$core$async29137(f__$1,blockable__$1,meta29138));
});

}

return (new cljs.core.async.t_cljs$core$async29137(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
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
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__29143 = arguments.length;
switch (G__29143) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__29146 = arguments.length;
switch (G__29146) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var G__29149 = arguments.length;
switch (G__29149) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_29151 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_29151);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_29151,ret){
return (function (){
return fn1.call(null,val_29151);
});})(val_29151,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__29153 = arguments.length;
switch (G__29153) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5718__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5718__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4518__auto___29155 = n;
var x_29156 = (0);
while(true){
if((x_29156 < n__4518__auto___29155)){
(a[x_29156] = (0));

var G__29157 = (x_29156 + (1));
x_29156 = G__29157;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__29158 = (i + (1));
i = G__29158;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29159 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29159 = (function (flag,meta29160){
this.flag = flag;
this.meta29160 = meta29160;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29159.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_29161,meta29160__$1){
var self__ = this;
var _29161__$1 = this;
return (new cljs.core.async.t_cljs$core$async29159(self__.flag,meta29160__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async29159.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_29161){
var self__ = this;
var _29161__$1 = this;
return self__.meta29160;
});})(flag))
;

cljs.core.async.t_cljs$core$async29159.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29159.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async29159.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29159.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29159.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29160","meta29160",-1388683590,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async29159.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29159.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29159";

cljs.core.async.t_cljs$core$async29159.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async29159");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29159.
 */
cljs.core.async.__GT_t_cljs$core$async29159 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29159(flag__$1,meta29160){
return (new cljs.core.async.t_cljs$core$async29159(flag__$1,meta29160));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async29159(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29162 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29162 = (function (flag,cb,meta29163){
this.flag = flag;
this.cb = cb;
this.meta29163 = meta29163;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29162.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29164,meta29163__$1){
var self__ = this;
var _29164__$1 = this;
return (new cljs.core.async.t_cljs$core$async29162(self__.flag,self__.cb,meta29163__$1));
});

cljs.core.async.t_cljs$core$async29162.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29164){
var self__ = this;
var _29164__$1 = this;
return self__.meta29163;
});

cljs.core.async.t_cljs$core$async29162.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29162.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async29162.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29162.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async29162.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29163","meta29163",-1156052503,null)], null);
});

cljs.core.async.t_cljs$core$async29162.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29162.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29162";

cljs.core.async.t_cljs$core$async29162.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async29162");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29162.
 */
cljs.core.async.__GT_t_cljs$core$async29162 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29162(flag__$1,cb__$1,meta29163){
return (new cljs.core.async.t_cljs$core$async29162(flag__$1,cb__$1,meta29163));
});

}

return (new cljs.core.async.t_cljs$core$async29162(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29165_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29165_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29166_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29166_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4047__auto__ = wport;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return port;
}
})()], null));
} else {
var G__29167 = (i + (1));
i = G__29167;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4047__auto__ = ret;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4036__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__4647__auto__ = [];
var len__4641__auto___29173 = arguments.length;
var i__4642__auto___29174 = (0);
while(true){
if((i__4642__auto___29174 < len__4641__auto___29173)){
args__4647__auto__.push((arguments[i__4642__auto___29174]));

var G__29175 = (i__4642__auto___29174 + (1));
i__4642__auto___29174 = G__29175;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29170){
var map__29171 = p__29170;
var map__29171__$1 = (((((!((map__29171 == null))))?(((((map__29171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29171.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29171):map__29171);
var opts = map__29171__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29168){
var G__29169 = cljs.core.first.call(null,seq29168);
var seq29168__$1 = cljs.core.next.call(null,seq29168);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29169,seq29168__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var G__29177 = arguments.length;
switch (G__29177) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27212__auto___29223 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27212__auto___29223){
return (function (){
var f__27213__auto__ = (function (){var switch__27045__auto__ = ((function (c__27212__auto___29223){
return (function (state_29201){
var state_val_29202 = (state_29201[(1)]);
if((state_val_29202 === (7))){
var inst_29197 = (state_29201[(2)]);
var state_29201__$1 = state_29201;
var statearr_29203_29224 = state_29201__$1;
(statearr_29203_29224[(2)] = inst_29197);

(statearr_29203_29224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29202 === (1))){
var state_29201__$1 = state_29201;
var statearr_29204_29225 = state_29201__$1;
(statearr_29204_29225[(2)] = null);

(statearr_29204_29225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29202 === (4))){
var inst_29180 = (state_29201[(7)]);
var inst_29180__$1 = (state_29201[(2)]);
var inst_29181 = (inst_29180__$1 == null);
var state_29201__$1 = (function (){var statearr_29205 = state_29201;
(statearr_29205[(7)] = inst_29180__$1);

return statearr_29205;
})();
if(cljs.core.truth_(inst_29181)){
var statearr_29206_29226 = state_29201__$1;
(statearr_29206_29226[(1)] = (5));

} else {
var statearr_29207_29227 = state_29201__$1;
(statearr_29207_29227[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29202 === (13))){
var state_29201__$1 = state_29201;
var statearr_29208_29228 = state_29201__$1;
(statearr_29208_29228[(2)] = null);

(statearr_29208_29228[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29202 === (6))){
var inst_29180 = (state_29201[(7)]);
var state_29201__$1 = state_29201;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29201__$1,(11),to,inst_29180);
} else {
if((state_val_29202 === (3))){
var inst_29199 = (state_29201[(2)]);
var state_29201__$1 = state_29201;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29201__$1,inst_29199);
} else {
if((state_val_29202 === (12))){
var state_29201__$1 = state_29201;
var statearr_29209_29229 = state_29201__$1;
(statearr_29209_29229[(2)] = null);

(statearr_29209_29229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29202 === (2))){
var state_29201__$1 = state_29201;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29201__$1,(4),from);
} else {
if((state_val_29202 === (11))){
var inst_29190 = (state_29201[(2)]);
var state_29201__$1 = state_29201;
if(cljs.core.truth_(inst_29190)){
var statearr_29210_29230 = state_29201__$1;
(statearr_29210_29230[(1)] = (12));

} else {
var statearr_29211_29231 = state_29201__$1;
(statearr_29211_29231[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29202 === (9))){
var state_29201__$1 = state_29201;
var statearr_29212_29232 = state_29201__$1;
(statearr_29212_29232[(2)] = null);

(statearr_29212_29232[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29202 === (5))){
var state_29201__$1 = state_29201;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29213_29233 = state_29201__$1;
(statearr_29213_29233[(1)] = (8));

} else {
var statearr_29214_29234 = state_29201__$1;
(statearr_29214_29234[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29202 === (14))){
var inst_29195 = (state_29201[(2)]);
var state_29201__$1 = state_29201;
var statearr_29215_29235 = state_29201__$1;
(statearr_29215_29235[(2)] = inst_29195);

(statearr_29215_29235[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29202 === (10))){
var inst_29187 = (state_29201[(2)]);
var state_29201__$1 = state_29201;
var statearr_29216_29236 = state_29201__$1;
(statearr_29216_29236[(2)] = inst_29187);

(statearr_29216_29236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29202 === (8))){
var inst_29184 = cljs.core.async.close_BANG_.call(null,to);
var state_29201__$1 = state_29201;
var statearr_29217_29237 = state_29201__$1;
(statearr_29217_29237[(2)] = inst_29184);

(statearr_29217_29237[(1)] = (10));


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
});})(c__27212__auto___29223))
;
return ((function (switch__27045__auto__,c__27212__auto___29223){
return (function() {
var cljs$core$async$state_machine__27046__auto__ = null;
var cljs$core$async$state_machine__27046__auto____0 = (function (){
var statearr_29218 = [null,null,null,null,null,null,null,null];
(statearr_29218[(0)] = cljs$core$async$state_machine__27046__auto__);

(statearr_29218[(1)] = (1));

return statearr_29218;
});
var cljs$core$async$state_machine__27046__auto____1 = (function (state_29201){
while(true){
var ret_value__27047__auto__ = (function (){try{while(true){
var result__27048__auto__ = switch__27045__auto__.call(null,state_29201);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27048__auto__;
}
break;
}
}catch (e29219){if((e29219 instanceof Object)){
var ex__27049__auto__ = e29219;
var statearr_29220_29238 = state_29201;
(statearr_29220_29238[(5)] = ex__27049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29201);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29239 = state_29201;
state_29201 = G__29239;
continue;
} else {
return ret_value__27047__auto__;
}
break;
}
});
cljs$core$async$state_machine__27046__auto__ = function(state_29201){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27046__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27046__auto____1.call(this,state_29201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27046__auto____0;
cljs$core$async$state_machine__27046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27046__auto____1;
return cljs$core$async$state_machine__27046__auto__;
})()
;})(switch__27045__auto__,c__27212__auto___29223))
})();
var state__27214__auto__ = (function (){var statearr_29221 = f__27213__auto__.call(null);
(statearr_29221[(6)] = c__27212__auto___29223);

return statearr_29221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27214__auto__);
});})(c__27212__auto___29223))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__29240){
var vec__29241 = p__29240;
var v = cljs.core.nth.call(null,vec__29241,(0),null);
var p = cljs.core.nth.call(null,vec__29241,(1),null);
var job = vec__29241;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27212__auto___29412 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27212__auto___29412,res,vec__29241,v,p,job,jobs,results){
return (function (){
var f__27213__auto__ = (function (){var switch__27045__auto__ = ((function (c__27212__auto___29412,res,vec__29241,v,p,job,jobs,results){
return (function (state_29248){
var state_val_29249 = (state_29248[(1)]);
if((state_val_29249 === (1))){
var state_29248__$1 = state_29248;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29248__$1,(2),res,v);
} else {
if((state_val_29249 === (2))){
var inst_29245 = (state_29248[(2)]);
var inst_29246 = cljs.core.async.close_BANG_.call(null,res);
var state_29248__$1 = (function (){var statearr_29250 = state_29248;
(statearr_29250[(7)] = inst_29245);

return statearr_29250;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29248__$1,inst_29246);
} else {
return null;
}
}
});})(c__27212__auto___29412,res,vec__29241,v,p,job,jobs,results))
;
return ((function (switch__27045__auto__,c__27212__auto___29412,res,vec__29241,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27046__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27046__auto____0 = (function (){
var statearr_29251 = [null,null,null,null,null,null,null,null];
(statearr_29251[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27046__auto__);

(statearr_29251[(1)] = (1));

return statearr_29251;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27046__auto____1 = (function (state_29248){
while(true){
var ret_value__27047__auto__ = (function (){try{while(true){
var result__27048__auto__ = switch__27045__auto__.call(null,state_29248);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27048__auto__;
}
break;
}
}catch (e29252){if((e29252 instanceof Object)){
var ex__27049__auto__ = e29252;
var statearr_29253_29413 = state_29248;
(statearr_29253_29413[(5)] = ex__27049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29248);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29252;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29414 = state_29248;
state_29248 = G__29414;
continue;
} else {
return ret_value__27047__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27046__auto__ = function(state_29248){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27046__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27046__auto____1.call(this,state_29248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27046__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27046__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27046__auto__;
})()
;})(switch__27045__auto__,c__27212__auto___29412,res,vec__29241,v,p,job,jobs,results))
})();
var state__27214__auto__ = (function (){var statearr_29254 = f__27213__auto__.call(null);
(statearr_29254[(6)] = c__27212__auto___29412);

return statearr_29254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27214__auto__);
});})(c__27212__auto___29412,res,vec__29241,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__29255){
var vec__29256 = p__29255;
var v = cljs.core.nth.call(null,vec__29256,(0),null);
var p = cljs.core.nth.call(null,vec__29256,(1),null);
var job = vec__29256;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4518__auto___29415 = n;
var __29416 = (0);
while(true){
if((__29416 < n__4518__auto___29415)){
var G__29259_29417 = type;
var G__29259_29418__$1 = (((G__29259_29417 instanceof cljs.core.Keyword))?G__29259_29417.fqn:null);
switch (G__29259_29418__$1) {
case "compute":
var c__27212__auto___29420 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29416,c__27212__auto___29420,G__29259_29417,G__29259_29418__$1,n__4518__auto___29415,jobs,results,process,async){
return (function (){
var f__27213__auto__ = (function (){var switch__27045__auto__ = ((function (__29416,c__27212__auto___29420,G__29259_29417,G__29259_29418__$1,n__4518__auto___29415,jobs,results,process,async){
return (function (state_29272){
var state_val_29273 = (state_29272[(1)]);
if((state_val_29273 === (1))){
var state_29272__$1 = state_29272;
var statearr_29274_29421 = state_29272__$1;
(statearr_29274_29421[(2)] = null);

(statearr_29274_29421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29273 === (2))){
var state_29272__$1 = state_29272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29272__$1,(4),jobs);
} else {
if((state_val_29273 === (3))){
var inst_29270 = (state_29272[(2)]);
var state_29272__$1 = state_29272;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29272__$1,inst_29270);
} else {
if((state_val_29273 === (4))){
var inst_29262 = (state_29272[(2)]);
var inst_29263 = process.call(null,inst_29262);
var state_29272__$1 = state_29272;
if(cljs.core.truth_(inst_29263)){
var statearr_29275_29422 = state_29272__$1;
(statearr_29275_29422[(1)] = (5));

} else {
var statearr_29276_29423 = state_29272__$1;
(statearr_29276_29423[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29273 === (5))){
var state_29272__$1 = state_29272;
var statearr_29277_29424 = state_29272__$1;
(statearr_29277_29424[(2)] = null);

(statearr_29277_29424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29273 === (6))){
var state_29272__$1 = state_29272;
var statearr_29278_29425 = state_29272__$1;
(statearr_29278_29425[(2)] = null);

(statearr_29278_29425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29273 === (7))){
var inst_29268 = (state_29272[(2)]);
var state_29272__$1 = state_29272;
var statearr_29279_29426 = state_29272__$1;
(statearr_29279_29426[(2)] = inst_29268);

(statearr_29279_29426[(1)] = (3));


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
});})(__29416,c__27212__auto___29420,G__29259_29417,G__29259_29418__$1,n__4518__auto___29415,jobs,results,process,async))
;
return ((function (__29416,switch__27045__auto__,c__27212__auto___29420,G__29259_29417,G__29259_29418__$1,n__4518__auto___29415,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27046__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27046__auto____0 = (function (){
var statearr_29280 = [null,null,null,null,null,null,null];
(statearr_29280[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27046__auto__);

(statearr_29280[(1)] = (1));

return statearr_29280;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27046__auto____1 = (function (state_29272){
while(true){
var ret_value__27047__auto__ = (function (){try{while(true){
var result__27048__auto__ = switch__27045__auto__.call(null,state_29272);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27048__auto__;
}
break;
}
}catch (e29281){if((e29281 instanceof Object)){
var ex__27049__auto__ = e29281;
var statearr_29282_29427 = state_29272;
(statearr_29282_29427[(5)] = ex__27049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29281;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29428 = state_29272;
state_29272 = G__29428;
continue;
} else {
return ret_value__27047__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27046__auto__ = function(state_29272){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27046__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27046__auto____1.call(this,state_29272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27046__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27046__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27046__auto__;
})()
;})(__29416,switch__27045__auto__,c__27212__auto___29420,G__29259_29417,G__29259_29418__$1,n__4518__auto___29415,jobs,results,process,async))
})();
var state__27214__auto__ = (function (){var statearr_29283 = f__27213__auto__.call(null);
(statearr_29283[(6)] = c__27212__auto___29420);

return statearr_29283;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27214__auto__);
});})(__29416,c__27212__auto___29420,G__29259_29417,G__29259_29418__$1,n__4518__auto___29415,jobs,results,process,async))
);


break;
case "async":
var c__27212__auto___29429 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29416,c__27212__auto___29429,G__29259_29417,G__29259_29418__$1,n__4518__auto___29415,jobs,results,process,async){
return (function (){
var f__27213__auto__ = (function (){var switch__27045__auto__ = ((function (__29416,c__27212__auto___29429,G__29259_29417,G__29259_29418__$1,n__4518__auto___29415,jobs,results,process,async){
return (function (state_29296){
var state_val_29297 = (state_29296[(1)]);
if((state_val_29297 === (1))){
var state_29296__$1 = state_29296;
var statearr_29298_29430 = state_29296__$1;
(statearr_29298_29430[(2)] = null);

(statearr_29298_29430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29297 === (2))){
var state_29296__$1 = state_29296;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29296__$1,(4),jobs);
} else {
if((state_val_29297 === (3))){
var inst_29294 = (state_29296[(2)]);
var state_29296__$1 = state_29296;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29296__$1,inst_29294);
} else {
if((state_val_29297 === (4))){
var inst_29286 = (state_29296[(2)]);
var inst_29287 = async.call(null,inst_29286);
var state_29296__$1 = state_29296;
if(cljs.core.truth_(inst_29287)){
var statearr_29299_29431 = state_29296__$1;
(statearr_29299_29431[(1)] = (5));

} else {
var statearr_29300_29432 = state_29296__$1;
(statearr_29300_29432[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29297 === (5))){
var state_29296__$1 = state_29296;
var statearr_29301_29433 = state_29296__$1;
(statearr_29301_29433[(2)] = null);

(statearr_29301_29433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29297 === (6))){
var state_29296__$1 = state_29296;
var statearr_29302_29434 = state_29296__$1;
(statearr_29302_29434[(2)] = null);

(statearr_29302_29434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29297 === (7))){
var inst_29292 = (state_29296[(2)]);
var state_29296__$1 = state_29296;
var statearr_29303_29435 = state_29296__$1;
(statearr_29303_29435[(2)] = inst_29292);

(statearr_29303_29435[(1)] = (3));


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
});})(__29416,c__27212__auto___29429,G__29259_29417,G__29259_29418__$1,n__4518__auto___29415,jobs,results,process,async))
;
return ((function (__29416,switch__27045__auto__,c__27212__auto___29429,G__29259_29417,G__29259_29418__$1,n__4518__auto___29415,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27046__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27046__auto____0 = (function (){
var statearr_29304 = [null,null,null,null,null,null,null];
(statearr_29304[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27046__auto__);

(statearr_29304[(1)] = (1));

return statearr_29304;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27046__auto____1 = (function (state_29296){
while(true){
var ret_value__27047__auto__ = (function (){try{while(true){
var result__27048__auto__ = switch__27045__auto__.call(null,state_29296);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27048__auto__;
}
break;
}
}catch (e29305){if((e29305 instanceof Object)){
var ex__27049__auto__ = e29305;
var statearr_29306_29436 = state_29296;
(statearr_29306_29436[(5)] = ex__27049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29296);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29305;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29437 = state_29296;
state_29296 = G__29437;
continue;
} else {
return ret_value__27047__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27046__auto__ = function(state_29296){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27046__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27046__auto____1.call(this,state_29296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27046__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27046__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27046__auto__;
})()
;})(__29416,switch__27045__auto__,c__27212__auto___29429,G__29259_29417,G__29259_29418__$1,n__4518__auto___29415,jobs,results,process,async))
})();
var state__27214__auto__ = (function (){var statearr_29307 = f__27213__auto__.call(null);
(statearr_29307[(6)] = c__27212__auto___29429);

return statearr_29307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27214__auto__);
});})(__29416,c__27212__auto___29429,G__29259_29417,G__29259_29418__$1,n__4518__auto___29415,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29259_29418__$1)].join('')));

}

var G__29438 = (__29416 + (1));
__29416 = G__29438;
continue;
} else {
}
break;
}

var c__27212__auto___29439 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27212__auto___29439,jobs,results,process,async){
return (function (){
var f__27213__auto__ = (function (){var switch__27045__auto__ = ((function (c__27212__auto___29439,jobs,results,process,async){
return (function (state_29329){
var state_val_29330 = (state_29329[(1)]);
if((state_val_29330 === (7))){
var inst_29325 = (state_29329[(2)]);
var state_29329__$1 = state_29329;
var statearr_29331_29440 = state_29329__$1;
(statearr_29331_29440[(2)] = inst_29325);

(statearr_29331_29440[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29330 === (1))){
var state_29329__$1 = state_29329;
var statearr_29332_29441 = state_29329__$1;
(statearr_29332_29441[(2)] = null);

(statearr_29332_29441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29330 === (4))){
var inst_29310 = (state_29329[(7)]);
var inst_29310__$1 = (state_29329[(2)]);
var inst_29311 = (inst_29310__$1 == null);
var state_29329__$1 = (function (){var statearr_29333 = state_29329;
(statearr_29333[(7)] = inst_29310__$1);

return statearr_29333;
})();
if(cljs.core.truth_(inst_29311)){
var statearr_29334_29442 = state_29329__$1;
(statearr_29334_29442[(1)] = (5));

} else {
var statearr_29335_29443 = state_29329__$1;
(statearr_29335_29443[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29330 === (6))){
var inst_29315 = (state_29329[(8)]);
var inst_29310 = (state_29329[(7)]);
var inst_29315__$1 = cljs.core.async.chan.call(null,(1));
var inst_29316 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29317 = [inst_29310,inst_29315__$1];
var inst_29318 = (new cljs.core.PersistentVector(null,2,(5),inst_29316,inst_29317,null));
var state_29329__$1 = (function (){var statearr_29336 = state_29329;
(statearr_29336[(8)] = inst_29315__$1);

return statearr_29336;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29329__$1,(8),jobs,inst_29318);
} else {
if((state_val_29330 === (3))){
var inst_29327 = (state_29329[(2)]);
var state_29329__$1 = state_29329;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29329__$1,inst_29327);
} else {
if((state_val_29330 === (2))){
var state_29329__$1 = state_29329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29329__$1,(4),from);
} else {
if((state_val_29330 === (9))){
var inst_29322 = (state_29329[(2)]);
var state_29329__$1 = (function (){var statearr_29337 = state_29329;
(statearr_29337[(9)] = inst_29322);

return statearr_29337;
})();
var statearr_29338_29444 = state_29329__$1;
(statearr_29338_29444[(2)] = null);

(statearr_29338_29444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29330 === (5))){
var inst_29313 = cljs.core.async.close_BANG_.call(null,jobs);
var state_29329__$1 = state_29329;
var statearr_29339_29445 = state_29329__$1;
(statearr_29339_29445[(2)] = inst_29313);

(statearr_29339_29445[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29330 === (8))){
var inst_29315 = (state_29329[(8)]);
var inst_29320 = (state_29329[(2)]);
var state_29329__$1 = (function (){var statearr_29340 = state_29329;
(statearr_29340[(10)] = inst_29320);

return statearr_29340;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29329__$1,(9),results,inst_29315);
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
});})(c__27212__auto___29439,jobs,results,process,async))
;
return ((function (switch__27045__auto__,c__27212__auto___29439,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27046__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27046__auto____0 = (function (){
var statearr_29341 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29341[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27046__auto__);

(statearr_29341[(1)] = (1));

return statearr_29341;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27046__auto____1 = (function (state_29329){
while(true){
var ret_value__27047__auto__ = (function (){try{while(true){
var result__27048__auto__ = switch__27045__auto__.call(null,state_29329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27048__auto__;
}
break;
}
}catch (e29342){if((e29342 instanceof Object)){
var ex__27049__auto__ = e29342;
var statearr_29343_29446 = state_29329;
(statearr_29343_29446[(5)] = ex__27049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29342;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29447 = state_29329;
state_29329 = G__29447;
continue;
} else {
return ret_value__27047__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27046__auto__ = function(state_29329){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27046__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27046__auto____1.call(this,state_29329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27046__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27046__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27046__auto__;
})()
;})(switch__27045__auto__,c__27212__auto___29439,jobs,results,process,async))
})();
var state__27214__auto__ = (function (){var statearr_29344 = f__27213__auto__.call(null);
(statearr_29344[(6)] = c__27212__auto___29439);

return statearr_29344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27214__auto__);
});})(c__27212__auto___29439,jobs,results,process,async))
);


var c__27212__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27212__auto__,jobs,results,process,async){
return (function (){
var f__27213__auto__ = (function (){var switch__27045__auto__ = ((function (c__27212__auto__,jobs,results,process,async){
return (function (state_29382){
var state_val_29383 = (state_29382[(1)]);
if((state_val_29383 === (7))){
var inst_29378 = (state_29382[(2)]);
var state_29382__$1 = state_29382;
var statearr_29384_29448 = state_29382__$1;
(statearr_29384_29448[(2)] = inst_29378);

(statearr_29384_29448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29383 === (20))){
var state_29382__$1 = state_29382;
var statearr_29385_29449 = state_29382__$1;
(statearr_29385_29449[(2)] = null);

(statearr_29385_29449[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29383 === (1))){
var state_29382__$1 = state_29382;
var statearr_29386_29450 = state_29382__$1;
(statearr_29386_29450[(2)] = null);

(statearr_29386_29450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29383 === (4))){
var inst_29347 = (state_29382[(7)]);
var inst_29347__$1 = (state_29382[(2)]);
var inst_29348 = (inst_29347__$1 == null);
var state_29382__$1 = (function (){var statearr_29387 = state_29382;
(statearr_29387[(7)] = inst_29347__$1);

return statearr_29387;
})();
if(cljs.core.truth_(inst_29348)){
var statearr_29388_29451 = state_29382__$1;
(statearr_29388_29451[(1)] = (5));

} else {
var statearr_29389_29452 = state_29382__$1;
(statearr_29389_29452[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29383 === (15))){
var inst_29360 = (state_29382[(8)]);
var state_29382__$1 = state_29382;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29382__$1,(18),to,inst_29360);
} else {
if((state_val_29383 === (21))){
var inst_29373 = (state_29382[(2)]);
var state_29382__$1 = state_29382;
var statearr_29390_29453 = state_29382__$1;
(statearr_29390_29453[(2)] = inst_29373);

(statearr_29390_29453[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29383 === (13))){
var inst_29375 = (state_29382[(2)]);
var state_29382__$1 = (function (){var statearr_29391 = state_29382;
(statearr_29391[(9)] = inst_29375);

return statearr_29391;
})();
var statearr_29392_29454 = state_29382__$1;
(statearr_29392_29454[(2)] = null);

(statearr_29392_29454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29383 === (6))){
var inst_29347 = (state_29382[(7)]);
var state_29382__$1 = state_29382;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29382__$1,(11),inst_29347);
} else {
if((state_val_29383 === (17))){
var inst_29368 = (state_29382[(2)]);
var state_29382__$1 = state_29382;
if(cljs.core.truth_(inst_29368)){
var statearr_29393_29455 = state_29382__$1;
(statearr_29393_29455[(1)] = (19));

} else {
var statearr_29394_29456 = state_29382__$1;
(statearr_29394_29456[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29383 === (3))){
var inst_29380 = (state_29382[(2)]);
var state_29382__$1 = state_29382;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29382__$1,inst_29380);
} else {
if((state_val_29383 === (12))){
var inst_29357 = (state_29382[(10)]);
var state_29382__$1 = state_29382;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29382__$1,(14),inst_29357);
} else {
if((state_val_29383 === (2))){
var state_29382__$1 = state_29382;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29382__$1,(4),results);
} else {
if((state_val_29383 === (19))){
var state_29382__$1 = state_29382;
var statearr_29395_29457 = state_29382__$1;
(statearr_29395_29457[(2)] = null);

(statearr_29395_29457[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29383 === (11))){
var inst_29357 = (state_29382[(2)]);
var state_29382__$1 = (function (){var statearr_29396 = state_29382;
(statearr_29396[(10)] = inst_29357);

return statearr_29396;
})();
var statearr_29397_29458 = state_29382__$1;
(statearr_29397_29458[(2)] = null);

(statearr_29397_29458[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29383 === (9))){
var state_29382__$1 = state_29382;
var statearr_29398_29459 = state_29382__$1;
(statearr_29398_29459[(2)] = null);

(statearr_29398_29459[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29383 === (5))){
var state_29382__$1 = state_29382;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29399_29460 = state_29382__$1;
(statearr_29399_29460[(1)] = (8));

} else {
var statearr_29400_29461 = state_29382__$1;
(statearr_29400_29461[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29383 === (14))){
var inst_29362 = (state_29382[(11)]);
var inst_29360 = (state_29382[(8)]);
var inst_29360__$1 = (state_29382[(2)]);
var inst_29361 = (inst_29360__$1 == null);
var inst_29362__$1 = cljs.core.not.call(null,inst_29361);
var state_29382__$1 = (function (){var statearr_29401 = state_29382;
(statearr_29401[(11)] = inst_29362__$1);

(statearr_29401[(8)] = inst_29360__$1);

return statearr_29401;
})();
if(inst_29362__$1){
var statearr_29402_29462 = state_29382__$1;
(statearr_29402_29462[(1)] = (15));

} else {
var statearr_29403_29463 = state_29382__$1;
(statearr_29403_29463[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29383 === (16))){
var inst_29362 = (state_29382[(11)]);
var state_29382__$1 = state_29382;
var statearr_29404_29464 = state_29382__$1;
(statearr_29404_29464[(2)] = inst_29362);

(statearr_29404_29464[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29383 === (10))){
var inst_29354 = (state_29382[(2)]);
var state_29382__$1 = state_29382;
var statearr_29405_29465 = state_29382__$1;
(statearr_29405_29465[(2)] = inst_29354);

(statearr_29405_29465[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29383 === (18))){
var inst_29365 = (state_29382[(2)]);
var state_29382__$1 = state_29382;
var statearr_29406_29466 = state_29382__$1;
(statearr_29406_29466[(2)] = inst_29365);

(statearr_29406_29466[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29383 === (8))){
var inst_29351 = cljs.core.async.close_BANG_.call(null,to);
var state_29382__$1 = state_29382;
var statearr_29407_29467 = state_29382__$1;
(statearr_29407_29467[(2)] = inst_29351);

(statearr_29407_29467[(1)] = (10));


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
});})(c__27212__auto__,jobs,results,process,async))
;
return ((function (switch__27045__auto__,c__27212__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27046__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27046__auto____0 = (function (){
var statearr_29408 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29408[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27046__auto__);

(statearr_29408[(1)] = (1));

return statearr_29408;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27046__auto____1 = (function (state_29382){
while(true){
var ret_value__27047__auto__ = (function (){try{while(true){
var result__27048__auto__ = switch__27045__auto__.call(null,state_29382);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27048__auto__;
}
break;
}
}catch (e29409){if((e29409 instanceof Object)){
var ex__27049__auto__ = e29409;
var statearr_29410_29468 = state_29382;
(statearr_29410_29468[(5)] = ex__27049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29382);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29409;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29469 = state_29382;
state_29382 = G__29469;
continue;
} else {
return ret_value__27047__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27046__auto__ = function(state_29382){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27046__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27046__auto____1.call(this,state_29382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27046__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27046__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27046__auto__;
})()
;})(switch__27045__auto__,c__27212__auto__,jobs,results,process,async))
})();
var state__27214__auto__ = (function (){var statearr_29411 = f__27213__auto__.call(null);
(statearr_29411[(6)] = c__27212__auto__);

return statearr_29411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27214__auto__);
});})(c__27212__auto__,jobs,results,process,async))
);

return c__27212__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__29471 = arguments.length;
switch (G__29471) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

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
var G__29474 = arguments.length;
switch (G__29474) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

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
var G__29477 = arguments.length;
switch (G__29477) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__27212__auto___29526 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27212__auto___29526,tc,fc){
return (function (){
var f__27213__auto__ = (function (){var switch__27045__auto__ = ((function (c__27212__auto___29526,tc,fc){
return (function (state_29503){
var state_val_29504 = (state_29503[(1)]);
if((state_val_29504 === (7))){
var inst_29499 = (state_29503[(2)]);
var state_29503__$1 = state_29503;
var statearr_29505_29527 = state_29503__$1;
(statearr_29505_29527[(2)] = inst_29499);

(statearr_29505_29527[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29504 === (1))){
var state_29503__$1 = state_29503;
var statearr_29506_29528 = state_29503__$1;
(statearr_29506_29528[(2)] = null);

(statearr_29506_29528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29504 === (4))){
var inst_29480 = (state_29503[(7)]);
var inst_29480__$1 = (state_29503[(2)]);
var inst_29481 = (inst_29480__$1 == null);
var state_29503__$1 = (function (){var statearr_29507 = state_29503;
(statearr_29507[(7)] = inst_29480__$1);

return statearr_29507;
})();
if(cljs.core.truth_(inst_29481)){
var statearr_29508_29529 = state_29503__$1;
(statearr_29508_29529[(1)] = (5));

} else {
var statearr_29509_29530 = state_29503__$1;
(statearr_29509_29530[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29504 === (13))){
var state_29503__$1 = state_29503;
var statearr_29510_29531 = state_29503__$1;
(statearr_29510_29531[(2)] = null);

(statearr_29510_29531[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29504 === (6))){
var inst_29480 = (state_29503[(7)]);
var inst_29486 = p.call(null,inst_29480);
var state_29503__$1 = state_29503;
if(cljs.core.truth_(inst_29486)){
var statearr_29511_29532 = state_29503__$1;
(statearr_29511_29532[(1)] = (9));

} else {
var statearr_29512_29533 = state_29503__$1;
(statearr_29512_29533[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29504 === (3))){
var inst_29501 = (state_29503[(2)]);
var state_29503__$1 = state_29503;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29503__$1,inst_29501);
} else {
if((state_val_29504 === (12))){
var state_29503__$1 = state_29503;
var statearr_29513_29534 = state_29503__$1;
(statearr_29513_29534[(2)] = null);

(statearr_29513_29534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29504 === (2))){
var state_29503__$1 = state_29503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29503__$1,(4),ch);
} else {
if((state_val_29504 === (11))){
var inst_29480 = (state_29503[(7)]);
var inst_29490 = (state_29503[(2)]);
var state_29503__$1 = state_29503;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29503__$1,(8),inst_29490,inst_29480);
} else {
if((state_val_29504 === (9))){
var state_29503__$1 = state_29503;
var statearr_29514_29535 = state_29503__$1;
(statearr_29514_29535[(2)] = tc);

(statearr_29514_29535[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29504 === (5))){
var inst_29483 = cljs.core.async.close_BANG_.call(null,tc);
var inst_29484 = cljs.core.async.close_BANG_.call(null,fc);
var state_29503__$1 = (function (){var statearr_29515 = state_29503;
(statearr_29515[(8)] = inst_29483);

return statearr_29515;
})();
var statearr_29516_29536 = state_29503__$1;
(statearr_29516_29536[(2)] = inst_29484);

(statearr_29516_29536[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29504 === (14))){
var inst_29497 = (state_29503[(2)]);
var state_29503__$1 = state_29503;
var statearr_29517_29537 = state_29503__$1;
(statearr_29517_29537[(2)] = inst_29497);

(statearr_29517_29537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29504 === (10))){
var state_29503__$1 = state_29503;
var statearr_29518_29538 = state_29503__$1;
(statearr_29518_29538[(2)] = fc);

(statearr_29518_29538[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29504 === (8))){
var inst_29492 = (state_29503[(2)]);
var state_29503__$1 = state_29503;
if(cljs.core.truth_(inst_29492)){
var statearr_29519_29539 = state_29503__$1;
(statearr_29519_29539[(1)] = (12));

} else {
var statearr_29520_29540 = state_29503__$1;
(statearr_29520_29540[(1)] = (13));

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
});})(c__27212__auto___29526,tc,fc))
;
return ((function (switch__27045__auto__,c__27212__auto___29526,tc,fc){
return (function() {
var cljs$core$async$state_machine__27046__auto__ = null;
var cljs$core$async$state_machine__27046__auto____0 = (function (){
var statearr_29521 = [null,null,null,null,null,null,null,null,null];
(statearr_29521[(0)] = cljs$core$async$state_machine__27046__auto__);

(statearr_29521[(1)] = (1));

return statearr_29521;
});
var cljs$core$async$state_machine__27046__auto____1 = (function (state_29503){
while(true){
var ret_value__27047__auto__ = (function (){try{while(true){
var result__27048__auto__ = switch__27045__auto__.call(null,state_29503);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27048__auto__;
}
break;
}
}catch (e29522){if((e29522 instanceof Object)){
var ex__27049__auto__ = e29522;
var statearr_29523_29541 = state_29503;
(statearr_29523_29541[(5)] = ex__27049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29522;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29542 = state_29503;
state_29503 = G__29542;
continue;
} else {
return ret_value__27047__auto__;
}
break;
}
});
cljs$core$async$state_machine__27046__auto__ = function(state_29503){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27046__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27046__auto____1.call(this,state_29503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27046__auto____0;
cljs$core$async$state_machine__27046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27046__auto____1;
return cljs$core$async$state_machine__27046__auto__;
})()
;})(switch__27045__auto__,c__27212__auto___29526,tc,fc))
})();
var state__27214__auto__ = (function (){var statearr_29524 = f__27213__auto__.call(null);
(statearr_29524[(6)] = c__27212__auto___29526);

return statearr_29524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27214__auto__);
});})(c__27212__auto___29526,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__27212__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27212__auto__){
return (function (){
var f__27213__auto__ = (function (){var switch__27045__auto__ = ((function (c__27212__auto__){
return (function (state_29563){
var state_val_29564 = (state_29563[(1)]);
if((state_val_29564 === (7))){
var inst_29559 = (state_29563[(2)]);
var state_29563__$1 = state_29563;
var statearr_29565_29583 = state_29563__$1;
(statearr_29565_29583[(2)] = inst_29559);

(statearr_29565_29583[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (1))){
var inst_29543 = init;
var state_29563__$1 = (function (){var statearr_29566 = state_29563;
(statearr_29566[(7)] = inst_29543);

return statearr_29566;
})();
var statearr_29567_29584 = state_29563__$1;
(statearr_29567_29584[(2)] = null);

(statearr_29567_29584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (4))){
var inst_29546 = (state_29563[(8)]);
var inst_29546__$1 = (state_29563[(2)]);
var inst_29547 = (inst_29546__$1 == null);
var state_29563__$1 = (function (){var statearr_29568 = state_29563;
(statearr_29568[(8)] = inst_29546__$1);

return statearr_29568;
})();
if(cljs.core.truth_(inst_29547)){
var statearr_29569_29585 = state_29563__$1;
(statearr_29569_29585[(1)] = (5));

} else {
var statearr_29570_29586 = state_29563__$1;
(statearr_29570_29586[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (6))){
var inst_29550 = (state_29563[(9)]);
var inst_29546 = (state_29563[(8)]);
var inst_29543 = (state_29563[(7)]);
var inst_29550__$1 = f.call(null,inst_29543,inst_29546);
var inst_29551 = cljs.core.reduced_QMARK_.call(null,inst_29550__$1);
var state_29563__$1 = (function (){var statearr_29571 = state_29563;
(statearr_29571[(9)] = inst_29550__$1);

return statearr_29571;
})();
if(inst_29551){
var statearr_29572_29587 = state_29563__$1;
(statearr_29572_29587[(1)] = (8));

} else {
var statearr_29573_29588 = state_29563__$1;
(statearr_29573_29588[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (3))){
var inst_29561 = (state_29563[(2)]);
var state_29563__$1 = state_29563;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29563__$1,inst_29561);
} else {
if((state_val_29564 === (2))){
var state_29563__$1 = state_29563;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29563__$1,(4),ch);
} else {
if((state_val_29564 === (9))){
var inst_29550 = (state_29563[(9)]);
var inst_29543 = inst_29550;
var state_29563__$1 = (function (){var statearr_29574 = state_29563;
(statearr_29574[(7)] = inst_29543);

return statearr_29574;
})();
var statearr_29575_29589 = state_29563__$1;
(statearr_29575_29589[(2)] = null);

(statearr_29575_29589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (5))){
var inst_29543 = (state_29563[(7)]);
var state_29563__$1 = state_29563;
var statearr_29576_29590 = state_29563__$1;
(statearr_29576_29590[(2)] = inst_29543);

(statearr_29576_29590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (10))){
var inst_29557 = (state_29563[(2)]);
var state_29563__$1 = state_29563;
var statearr_29577_29591 = state_29563__$1;
(statearr_29577_29591[(2)] = inst_29557);

(statearr_29577_29591[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (8))){
var inst_29550 = (state_29563[(9)]);
var inst_29553 = cljs.core.deref.call(null,inst_29550);
var state_29563__$1 = state_29563;
var statearr_29578_29592 = state_29563__$1;
(statearr_29578_29592[(2)] = inst_29553);

(statearr_29578_29592[(1)] = (10));


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
});})(c__27212__auto__))
;
return ((function (switch__27045__auto__,c__27212__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__27046__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27046__auto____0 = (function (){
var statearr_29579 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29579[(0)] = cljs$core$async$reduce_$_state_machine__27046__auto__);

(statearr_29579[(1)] = (1));

return statearr_29579;
});
var cljs$core$async$reduce_$_state_machine__27046__auto____1 = (function (state_29563){
while(true){
var ret_value__27047__auto__ = (function (){try{while(true){
var result__27048__auto__ = switch__27045__auto__.call(null,state_29563);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27048__auto__;
}
break;
}
}catch (e29580){if((e29580 instanceof Object)){
var ex__27049__auto__ = e29580;
var statearr_29581_29593 = state_29563;
(statearr_29581_29593[(5)] = ex__27049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29563);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29580;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29594 = state_29563;
state_29563 = G__29594;
continue;
} else {
return ret_value__27047__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27046__auto__ = function(state_29563){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27046__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27046__auto____1.call(this,state_29563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27046__auto____0;
cljs$core$async$reduce_$_state_machine__27046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27046__auto____1;
return cljs$core$async$reduce_$_state_machine__27046__auto__;
})()
;})(switch__27045__auto__,c__27212__auto__))
})();
var state__27214__auto__ = (function (){var statearr_29582 = f__27213__auto__.call(null);
(statearr_29582[(6)] = c__27212__auto__);

return statearr_29582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27214__auto__);
});})(c__27212__auto__))
);

return c__27212__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__27212__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27212__auto__,f__$1){
return (function (){
var f__27213__auto__ = (function (){var switch__27045__auto__ = ((function (c__27212__auto__,f__$1){
return (function (state_29600){
var state_val_29601 = (state_29600[(1)]);
if((state_val_29601 === (1))){
var inst_29595 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_29600__$1 = state_29600;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29600__$1,(2),inst_29595);
} else {
if((state_val_29601 === (2))){
var inst_29597 = (state_29600[(2)]);
var inst_29598 = f__$1.call(null,inst_29597);
var state_29600__$1 = state_29600;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29600__$1,inst_29598);
} else {
return null;
}
}
});})(c__27212__auto__,f__$1))
;
return ((function (switch__27045__auto__,c__27212__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__27046__auto__ = null;
var cljs$core$async$transduce_$_state_machine__27046__auto____0 = (function (){
var statearr_29602 = [null,null,null,null,null,null,null];
(statearr_29602[(0)] = cljs$core$async$transduce_$_state_machine__27046__auto__);

(statearr_29602[(1)] = (1));

return statearr_29602;
});
var cljs$core$async$transduce_$_state_machine__27046__auto____1 = (function (state_29600){
while(true){
var ret_value__27047__auto__ = (function (){try{while(true){
var result__27048__auto__ = switch__27045__auto__.call(null,state_29600);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27048__auto__;
}
break;
}
}catch (e29603){if((e29603 instanceof Object)){
var ex__27049__auto__ = e29603;
var statearr_29604_29606 = state_29600;
(statearr_29604_29606[(5)] = ex__27049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29600);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29603;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29607 = state_29600;
state_29600 = G__29607;
continue;
} else {
return ret_value__27047__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__27046__auto__ = function(state_29600){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__27046__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__27046__auto____1.call(this,state_29600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__27046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__27046__auto____0;
cljs$core$async$transduce_$_state_machine__27046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__27046__auto____1;
return cljs$core$async$transduce_$_state_machine__27046__auto__;
})()
;})(switch__27045__auto__,c__27212__auto__,f__$1))
})();
var state__27214__auto__ = (function (){var statearr_29605 = f__27213__auto__.call(null);
(statearr_29605[(6)] = c__27212__auto__);

return statearr_29605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27214__auto__);
});})(c__27212__auto__,f__$1))
);

return c__27212__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__29609 = arguments.length;
switch (G__29609) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27212__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27212__auto__){
return (function (){
var f__27213__auto__ = (function (){var switch__27045__auto__ = ((function (c__27212__auto__){
return (function (state_29634){
var state_val_29635 = (state_29634[(1)]);
if((state_val_29635 === (7))){
var inst_29616 = (state_29634[(2)]);
var state_29634__$1 = state_29634;
var statearr_29636_29657 = state_29634__$1;
(statearr_29636_29657[(2)] = inst_29616);

(statearr_29636_29657[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29635 === (1))){
var inst_29610 = cljs.core.seq.call(null,coll);
var inst_29611 = inst_29610;
var state_29634__$1 = (function (){var statearr_29637 = state_29634;
(statearr_29637[(7)] = inst_29611);

return statearr_29637;
})();
var statearr_29638_29658 = state_29634__$1;
(statearr_29638_29658[(2)] = null);

(statearr_29638_29658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29635 === (4))){
var inst_29611 = (state_29634[(7)]);
var inst_29614 = cljs.core.first.call(null,inst_29611);
var state_29634__$1 = state_29634;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29634__$1,(7),ch,inst_29614);
} else {
if((state_val_29635 === (13))){
var inst_29628 = (state_29634[(2)]);
var state_29634__$1 = state_29634;
var statearr_29639_29659 = state_29634__$1;
(statearr_29639_29659[(2)] = inst_29628);

(statearr_29639_29659[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29635 === (6))){
var inst_29619 = (state_29634[(2)]);
var state_29634__$1 = state_29634;
if(cljs.core.truth_(inst_29619)){
var statearr_29640_29660 = state_29634__$1;
(statearr_29640_29660[(1)] = (8));

} else {
var statearr_29641_29661 = state_29634__$1;
(statearr_29641_29661[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29635 === (3))){
var inst_29632 = (state_29634[(2)]);
var state_29634__$1 = state_29634;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29634__$1,inst_29632);
} else {
if((state_val_29635 === (12))){
var state_29634__$1 = state_29634;
var statearr_29642_29662 = state_29634__$1;
(statearr_29642_29662[(2)] = null);

(statearr_29642_29662[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29635 === (2))){
var inst_29611 = (state_29634[(7)]);
var state_29634__$1 = state_29634;
if(cljs.core.truth_(inst_29611)){
var statearr_29643_29663 = state_29634__$1;
(statearr_29643_29663[(1)] = (4));

} else {
var statearr_29644_29664 = state_29634__$1;
(statearr_29644_29664[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29635 === (11))){
var inst_29625 = cljs.core.async.close_BANG_.call(null,ch);
var state_29634__$1 = state_29634;
var statearr_29645_29665 = state_29634__$1;
(statearr_29645_29665[(2)] = inst_29625);

(statearr_29645_29665[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29635 === (9))){
var state_29634__$1 = state_29634;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29646_29666 = state_29634__$1;
(statearr_29646_29666[(1)] = (11));

} else {
var statearr_29647_29667 = state_29634__$1;
(statearr_29647_29667[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29635 === (5))){
var inst_29611 = (state_29634[(7)]);
var state_29634__$1 = state_29634;
var statearr_29648_29668 = state_29634__$1;
(statearr_29648_29668[(2)] = inst_29611);

(statearr_29648_29668[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29635 === (10))){
var inst_29630 = (state_29634[(2)]);
var state_29634__$1 = state_29634;
var statearr_29649_29669 = state_29634__$1;
(statearr_29649_29669[(2)] = inst_29630);

(statearr_29649_29669[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29635 === (8))){
var inst_29611 = (state_29634[(7)]);
var inst_29621 = cljs.core.next.call(null,inst_29611);
var inst_29611__$1 = inst_29621;
var state_29634__$1 = (function (){var statearr_29650 = state_29634;
(statearr_29650[(7)] = inst_29611__$1);

return statearr_29650;
})();
var statearr_29651_29670 = state_29634__$1;
(statearr_29651_29670[(2)] = null);

(statearr_29651_29670[(1)] = (2));


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
});})(c__27212__auto__))
;
return ((function (switch__27045__auto__,c__27212__auto__){
return (function() {
var cljs$core$async$state_machine__27046__auto__ = null;
var cljs$core$async$state_machine__27046__auto____0 = (function (){
var statearr_29652 = [null,null,null,null,null,null,null,null];
(statearr_29652[(0)] = cljs$core$async$state_machine__27046__auto__);

(statearr_29652[(1)] = (1));

return statearr_29652;
});
var cljs$core$async$state_machine__27046__auto____1 = (function (state_29634){
while(true){
var ret_value__27047__auto__ = (function (){try{while(true){
var result__27048__auto__ = switch__27045__auto__.call(null,state_29634);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27048__auto__;
}
break;
}
}catch (e29653){if((e29653 instanceof Object)){
var ex__27049__auto__ = e29653;
var statearr_29654_29671 = state_29634;
(statearr_29654_29671[(5)] = ex__27049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29634);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29653;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29672 = state_29634;
state_29634 = G__29672;
continue;
} else {
return ret_value__27047__auto__;
}
break;
}
});
cljs$core$async$state_machine__27046__auto__ = function(state_29634){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27046__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27046__auto____1.call(this,state_29634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27046__auto____0;
cljs$core$async$state_machine__27046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27046__auto____1;
return cljs$core$async$state_machine__27046__auto__;
})()
;})(switch__27045__auto__,c__27212__auto__))
})();
var state__27214__auto__ = (function (){var statearr_29655 = f__27213__auto__.call(null);
(statearr_29655[(6)] = c__27212__auto__);

return statearr_29655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27214__auto__);
});})(c__27212__auto__))
);

return c__27212__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4347__auto__ = (((_ == null))?null:_);
var m__4348__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,_);
} else {
var m__4348__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4348__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m);
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29673 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29673 = (function (ch,cs,meta29674){
this.ch = ch;
this.cs = cs;
this.meta29674 = meta29674;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29673.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29675,meta29674__$1){
var self__ = this;
var _29675__$1 = this;
return (new cljs.core.async.t_cljs$core$async29673(self__.ch,self__.cs,meta29674__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async29673.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29675){
var self__ = this;
var _29675__$1 = this;
return self__.meta29674;
});})(cs))
;

cljs.core.async.t_cljs$core$async29673.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29673.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async29673.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29673.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29673.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29673.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29673.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29674","meta29674",1250643862,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async29673.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29673.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29673";

cljs.core.async.t_cljs$core$async29673.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async29673");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29673.
 */
cljs.core.async.__GT_t_cljs$core$async29673 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async29673(ch__$1,cs__$1,meta29674){
return (new cljs.core.async.t_cljs$core$async29673(ch__$1,cs__$1,meta29674));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async29673(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__27212__auto___29895 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27212__auto___29895,cs,m,dchan,dctr,done){
return (function (){
var f__27213__auto__ = (function (){var switch__27045__auto__ = ((function (c__27212__auto___29895,cs,m,dchan,dctr,done){
return (function (state_29810){
var state_val_29811 = (state_29810[(1)]);
if((state_val_29811 === (7))){
var inst_29806 = (state_29810[(2)]);
var state_29810__$1 = state_29810;
var statearr_29812_29896 = state_29810__$1;
(statearr_29812_29896[(2)] = inst_29806);

(statearr_29812_29896[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29811 === (20))){
var inst_29709 = (state_29810[(7)]);
var inst_29721 = cljs.core.first.call(null,inst_29709);
var inst_29722 = cljs.core.nth.call(null,inst_29721,(0),null);
var inst_29723 = cljs.core.nth.call(null,inst_29721,(1),null);
var state_29810__$1 = (function (){var statearr_29813 = state_29810;
(statearr_29813[(8)] = inst_29722);

return statearr_29813;
})();
if(cljs.core.truth_(inst_29723)){
var statearr_29814_29897 = state_29810__$1;
(statearr_29814_29897[(1)] = (22));

} else {
var statearr_29815_29898 = state_29810__$1;
(statearr_29815_29898[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29811 === (27))){
var inst_29751 = (state_29810[(9)]);
var inst_29678 = (state_29810[(10)]);
var inst_29758 = (state_29810[(11)]);
var inst_29753 = (state_29810[(12)]);
var inst_29758__$1 = cljs.core._nth.call(null,inst_29751,inst_29753);
var inst_29759 = cljs.core.async.put_BANG_.call(null,inst_29758__$1,inst_29678,done);
var state_29810__$1 = (function (){var statearr_29816 = state_29810;
(statearr_29816[(11)] = inst_29758__$1);

return statearr_29816;
})();
if(cljs.core.truth_(inst_29759)){
var statearr_29817_29899 = state_29810__$1;
(statearr_29817_29899[(1)] = (30));

} else {
var statearr_29818_29900 = state_29810__$1;
(statearr_29818_29900[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29811 === (1))){
var state_29810__$1 = state_29810;
var statearr_29819_29901 = state_29810__$1;
(statearr_29819_29901[(2)] = null);

(statearr_29819_29901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29811 === (24))){
var inst_29709 = (state_29810[(7)]);
var inst_29728 = (state_29810[(2)]);
var inst_29729 = cljs.core.next.call(null,inst_29709);
var inst_29687 = inst_29729;
var inst_29688 = null;
var inst_29689 = (0);
var inst_29690 = (0);
var state_29810__$1 = (function (){var statearr_29820 = state_29810;
(statearr_29820[(13)] = inst_29687);

(statearr_29820[(14)] = inst_29728);

(statearr_29820[(15)] = inst_29690);

(statearr_29820[(16)] = inst_29688);

(statearr_29820[(17)] = inst_29689);

return statearr_29820;
})();
var statearr_29821_29902 = state_29810__$1;
(statearr_29821_29902[(2)] = null);

(statearr_29821_29902[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29811 === (39))){
var state_29810__$1 = state_29810;
var statearr_29825_29903 = state_29810__$1;
(statearr_29825_29903[(2)] = null);

(statearr_29825_29903[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29811 === (4))){
var inst_29678 = (state_29810[(10)]);
var inst_29678__$1 = (state_29810[(2)]);
var inst_29679 = (inst_29678__$1 == null);
var state_29810__$1 = (function (){var statearr_29826 = state_29810;
(statearr_29826[(10)] = inst_29678__$1);

return statearr_29826;
})();
if(cljs.core.truth_(inst_29679)){
var statearr_29827_29904 = state_29810__$1;
(statearr_29827_29904[(1)] = (5));

} else {
var statearr_29828_29905 = state_29810__$1;
(statearr_29828_29905[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29811 === (15))){
var inst_29687 = (state_29810[(13)]);
var inst_29690 = (state_29810[(15)]);
var inst_29688 = (state_29810[(16)]);
var inst_29689 = (state_29810[(17)]);
var inst_29705 = (state_29810[(2)]);
var inst_29706 = (inst_29690 + (1));
var tmp29822 = inst_29687;
var tmp29823 = inst_29688;
var tmp29824 = inst_29689;
var inst_29687__$1 = tmp29822;
var inst_29688__$1 = tmp29823;
var inst_29689__$1 = tmp29824;
var inst_29690__$1 = inst_29706;
var state_29810__$1 = (function (){var statearr_29829 = state_29810;
(statearr_29829[(13)] = inst_29687__$1);

(statearr_29829[(15)] = inst_29690__$1);

(statearr_29829[(16)] = inst_29688__$1);

(statearr_29829[(17)] = inst_29689__$1);

(statearr_29829[(18)] = inst_29705);

return statearr_29829;
})();
var statearr_29830_29906 = state_29810__$1;
(statearr_29830_29906[(2)] = null);

(statearr_29830_29906[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29811 === (21))){
var inst_29732 = (state_29810[(2)]);
var state_29810__$1 = state_29810;
var statearr_29834_29907 = state_29810__$1;
(statearr_29834_29907[(2)] = inst_29732);

(statearr_29834_29907[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29811 === (31))){
var inst_29758 = (state_29810[(11)]);
var inst_29762 = done.call(null,null);
var inst_29763 = cljs.core.async.untap_STAR_.call(null,m,inst_29758);
var state_29810__$1 = (function (){var statearr_29835 = state_29810;
(statearr_29835[(19)] = inst_29762);

return statearr_29835;
})();
var statearr_29836_29908 = state_29810__$1;
(statearr_29836_29908[(2)] = inst_29763);

(statearr_29836_29908[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29811 === (32))){
var inst_29751 = (state_29810[(9)]);
var inst_29752 = (state_29810[(20)]);
var inst_29750 = (state_29810[(21)]);
var inst_29753 = (state_29810[(12)]);
var inst_29765 = (state_29810[(2)]);
var inst_29766 = (inst_29753 + (1));
var tmp29831 = inst_29751;
var tmp29832 = inst_29752;
var tmp29833 = inst_29750;
var inst_29750__$1 = tmp29833;
var inst_29751__$1 = tmp29831;
var inst_29752__$1 = tmp29832;
var inst_29753__$1 = inst_29766;
var state_29810__$1 = (function (){var statearr_29837 = state_29810;
(statearr_29837[(9)] = inst_29751__$1);

(statearr_29837[(20)] = inst_29752__$1);

(statearr_29837[(21)] = inst_29750__$1);

(statearr_29837[(22)] = inst_29765);

(statearr_29837[(12)] = inst_29753__$1);

return statearr_29837;
})();
var statearr_29838_29909 = state_29810__$1;
(statearr_29838_29909[(2)] = null);

(statearr_29838_29909[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29811 === (40))){
var inst_29778 = (state_29810[(23)]);
var inst_29782 = done.call(null,null);
var inst_29783 = cljs.core.async.untap_STAR_.call(null,m,inst_29778);
var state_29810__$1 = (function (){var statearr_29839 = state_29810;
(statearr_29839[(24)] = inst_29782);

return statearr_29839;
})();
var statearr_29840_29910 = state_29810__$1;
(statearr_29840_29910[(2)] = inst_29783);

(statearr_29840_29910[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29811 === (33))){
var inst_29769 = (state_29810[(25)]);
var inst_29771 = cljs.core.chunked_seq_QMARK_.call(null,inst_29769);
var state_29810__$1 = state_29810;
if(inst_29771){
var statearr_29841_29911 = state_29810__$1;
(statearr_29841_29911[(1)] = (36));

} else {
var statearr_29842_29912 = state_29810__$1;
(statearr_29842_29912[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29811 === (13))){
var inst_29699 = (state_29810[(26)]);
var inst_29702 = cljs.core.async.close_BANG_.call(null,inst_29699);
var state_29810__$1 = state_29810;
var statearr_29843_29913 = state_29810__$1;
(statearr_29843_29913[(2)] = inst_29702);

(statearr_29843_29913[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29811 === (22))){
var inst_29722 = (state_29810[(8)]);
var inst_29725 = cljs.core.async.close_BANG_.call(null,inst_29722);
var state_29810__$1 = state_29810;
var statearr_29844_29914 = state_29810__$1;
(statearr_29844_29914[(2)] = inst_29725);

(statearr_29844_29914[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29811 === (36))){
var inst_29769 = (state_29810[(25)]);
var inst_29773 = cljs.core.chunk_first.call(null,inst_29769);
var inst_29774 = cljs.core.chunk_rest.call(null,inst_29769);
var inst_29775 = cljs.core.count.call(null,inst_29773);
var inst_29750 = inst_29774;
var inst_29751 = inst_29773;
var inst_29752 = inst_29775;
var inst_29753 = (0);
var state_29810__$1 = (function (){var statearr_29845 = state_29810;
(statearr_29845[(9)] = inst_29751);

(statearr_29845[(20)] = inst_29752);

(statearr_29845[(21)] = inst_29750);

(statearr_29845[(12)] = inst_29753);

return statearr_29845;
})();
var statearr_29846_29915 = state_29810__$1;
(statearr_29846_29915[(2)] = null);

(statearr_29846_29915[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29811 === (41))){
var inst_29769 = (state_29810[(25)]);
var inst_29785 = (state_29810[(2)]);
var inst_29786 = cljs.core.next.call(null,inst_29769);
var inst_29750 = inst_29786;
var inst_29751 = null;
var inst_29752 = (0);
var inst_29753 = (0);
var state_29810__$1 = (function (){var statearr_29847 = state_29810;
(statearr_29847[(9)] = inst_29751);

(statearr_29847[(20)] = inst_29752);

(statearr_29847[(21)] = inst_29750);

(statearr_29847[(27)] = inst_29785);

(statearr_29847[(12)] = inst_29753);

return statearr_29847;
})();
var statearr_29848_29916 = state_29810__$1;
(statearr_29848_29916[(2)] = null);

(statearr_29848_29916[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29811 === (43))){
var state_29810__$1 = state_29810;
var statearr_29849_29917 = state_29810__$1;
(statearr_29849_29917[(2)] = null);

(statearr_29849_29917[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29811 === (29))){
var inst_29794 = (state_29810[(2)]);
var state_29810__$1 = state_29810;
var statearr_29850_29918 = state_29810__$1;
(statearr_29850_29918[(2)] = inst_29794);

(statearr_29850_29918[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29811 === (44))){
var inst_29803 = (state_29810[(2)]);
var state_29810__$1 = (function (){var statearr_29851 = state_29810;
(statearr_29851[(28)] = inst_29803);

return statearr_29851;
})();
var statearr_29852_29919 = state_29810__$1;
(statearr_29852_29919[(2)] = null);

(statearr_29852_29919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29811 === (6))){
var inst_29742 = (state_29810[(29)]);
var inst_29741 = cljs.core.deref.call(null,cs);
var inst_29742__$1 = cljs.core.keys.call(null,inst_29741);
var inst_29743 = cljs.core.count.call(null,inst_29742__$1);
var inst_29744 = cljs.core.reset_BANG_.call(null,dctr,inst_29743);
var inst_29749 = cljs.core.seq.call(null,inst_29742__$1);
var inst_29750 = inst_29749;
var inst_29751 = null;
var inst_29752 = (0);
var inst_29753 = (0);
var state_29810__$1 = (function (){var statearr_29853 = state_29810;
(statearr_29853[(9)] = inst_29751);

(statearr_29853[(20)] = inst_29752);

(statearr_29853[(30)] = inst_29744);

(statearr_29853[(21)] = inst_29750);

(statearr_29853[(29)] = inst_29742__$1);

(statearr_29853[(12)] = inst_29753);

return statearr_29853;
})();
var statearr_29854_29920 = state_29810__$1;
(statearr_29854_29920[(2)] = null);

(statearr_29854_29920[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29811 === (28))){
var inst_29769 = (state_29810[(25)]);
var inst_29750 = (state_29810[(21)]);
var inst_29769__$1 = cljs.core.seq.call(null,inst_29750);
var state_29810__$1 = (function (){var statearr_29855 = state_29810;
(statearr_29855[(25)] = inst_29769__$1);

return statearr_29855;
})();
if(inst_29769__$1){
var statearr_29856_29921 = state_29810__$1;
(statearr_29856_29921[(1)] = (33));

} else {
var statearr_29857_29922 = state_29810__$1;
(statearr_29857_29922[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29811 === (25))){
var inst_29752 = (state_29810[(20)]);
var inst_29753 = (state_29810[(12)]);
var inst_29755 = (inst_29753 < inst_29752);
var inst_29756 = inst_29755;
var state_29810__$1 = state_29810;
if(cljs.core.truth_(inst_29756)){
var statearr_29858_29923 = state_29810__$1;
(statearr_29858_29923[(1)] = (27));

} else {
var statearr_29859_29924 = state_29810__$1;
(statearr_29859_29924[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29811 === (34))){
var state_29810__$1 = state_29810;
var statearr_29860_29925 = state_29810__$1;
(statearr_29860_29925[(2)] = null);

(statearr_29860_29925[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29811 === (17))){
var state_29810__$1 = state_29810;
var statearr_29861_29926 = state_29810__$1;
(statearr_29861_29926[(2)] = null);

(statearr_29861_29926[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29811 === (3))){
var inst_29808 = (state_29810[(2)]);
var state_29810__$1 = state_29810;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29810__$1,inst_29808);
} else {
if((state_val_29811 === (12))){
var inst_29737 = (state_29810[(2)]);
var state_29810__$1 = state_29810;
var statearr_29862_29927 = state_29810__$1;
(statearr_29862_29927[(2)] = inst_29737);

(statearr_29862_29927[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29811 === (2))){
var state_29810__$1 = state_29810;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29810__$1,(4),ch);
} else {
if((state_val_29811 === (23))){
var state_29810__$1 = state_29810;
var statearr_29863_29928 = state_29810__$1;
(statearr_29863_29928[(2)] = null);

(statearr_29863_29928[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29811 === (35))){
var inst_29792 = (state_29810[(2)]);
var state_29810__$1 = state_29810;
var statearr_29864_29929 = state_29810__$1;
(statearr_29864_29929[(2)] = inst_29792);

(statearr_29864_29929[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29811 === (19))){
var inst_29709 = (state_29810[(7)]);
var inst_29713 = cljs.core.chunk_first.call(null,inst_29709);
var inst_29714 = cljs.core.chunk_rest.call(null,inst_29709);
var inst_29715 = cljs.core.count.call(null,inst_29713);
var inst_29687 = inst_29714;
var inst_29688 = inst_29713;
var inst_29689 = inst_29715;
var inst_29690 = (0);
var state_29810__$1 = (function (){var statearr_29865 = state_29810;
(statearr_29865[(13)] = inst_29687);

(statearr_29865[(15)] = inst_29690);

(statearr_29865[(16)] = inst_29688);

(statearr_29865[(17)] = inst_29689);

return statearr_29865;
})();
var statearr_29866_29930 = state_29810__$1;
(statearr_29866_29930[(2)] = null);

(statearr_29866_29930[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29811 === (11))){
var inst_29687 = (state_29810[(13)]);
var inst_29709 = (state_29810[(7)]);
var inst_29709__$1 = cljs.core.seq.call(null,inst_29687);
var state_29810__$1 = (function (){var statearr_29867 = state_29810;
(statearr_29867[(7)] = inst_29709__$1);

return statearr_29867;
})();
if(inst_29709__$1){
var statearr_29868_29931 = state_29810__$1;
(statearr_29868_29931[(1)] = (16));

} else {
var statearr_29869_29932 = state_29810__$1;
(statearr_29869_29932[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29811 === (9))){
var inst_29739 = (state_29810[(2)]);
var state_29810__$1 = state_29810;
var statearr_29870_29933 = state_29810__$1;
(statearr_29870_29933[(2)] = inst_29739);

(statearr_29870_29933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29811 === (5))){
var inst_29685 = cljs.core.deref.call(null,cs);
var inst_29686 = cljs.core.seq.call(null,inst_29685);
var inst_29687 = inst_29686;
var inst_29688 = null;
var inst_29689 = (0);
var inst_29690 = (0);
var state_29810__$1 = (function (){var statearr_29871 = state_29810;
(statearr_29871[(13)] = inst_29687);

(statearr_29871[(15)] = inst_29690);

(statearr_29871[(16)] = inst_29688);

(statearr_29871[(17)] = inst_29689);

return statearr_29871;
})();
var statearr_29872_29934 = state_29810__$1;
(statearr_29872_29934[(2)] = null);

(statearr_29872_29934[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29811 === (14))){
var state_29810__$1 = state_29810;
var statearr_29873_29935 = state_29810__$1;
(statearr_29873_29935[(2)] = null);

(statearr_29873_29935[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29811 === (45))){
var inst_29800 = (state_29810[(2)]);
var state_29810__$1 = state_29810;
var statearr_29874_29936 = state_29810__$1;
(statearr_29874_29936[(2)] = inst_29800);

(statearr_29874_29936[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29811 === (26))){
var inst_29742 = (state_29810[(29)]);
var inst_29796 = (state_29810[(2)]);
var inst_29797 = cljs.core.seq.call(null,inst_29742);
var state_29810__$1 = (function (){var statearr_29875 = state_29810;
(statearr_29875[(31)] = inst_29796);

return statearr_29875;
})();
if(inst_29797){
var statearr_29876_29937 = state_29810__$1;
(statearr_29876_29937[(1)] = (42));

} else {
var statearr_29877_29938 = state_29810__$1;
(statearr_29877_29938[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29811 === (16))){
var inst_29709 = (state_29810[(7)]);
var inst_29711 = cljs.core.chunked_seq_QMARK_.call(null,inst_29709);
var state_29810__$1 = state_29810;
if(inst_29711){
var statearr_29878_29939 = state_29810__$1;
(statearr_29878_29939[(1)] = (19));

} else {
var statearr_29879_29940 = state_29810__$1;
(statearr_29879_29940[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29811 === (38))){
var inst_29789 = (state_29810[(2)]);
var state_29810__$1 = state_29810;
var statearr_29880_29941 = state_29810__$1;
(statearr_29880_29941[(2)] = inst_29789);

(statearr_29880_29941[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29811 === (30))){
var state_29810__$1 = state_29810;
var statearr_29881_29942 = state_29810__$1;
(statearr_29881_29942[(2)] = null);

(statearr_29881_29942[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29811 === (10))){
var inst_29690 = (state_29810[(15)]);
var inst_29688 = (state_29810[(16)]);
var inst_29698 = cljs.core._nth.call(null,inst_29688,inst_29690);
var inst_29699 = cljs.core.nth.call(null,inst_29698,(0),null);
var inst_29700 = cljs.core.nth.call(null,inst_29698,(1),null);
var state_29810__$1 = (function (){var statearr_29882 = state_29810;
(statearr_29882[(26)] = inst_29699);

return statearr_29882;
})();
if(cljs.core.truth_(inst_29700)){
var statearr_29883_29943 = state_29810__$1;
(statearr_29883_29943[(1)] = (13));

} else {
var statearr_29884_29944 = state_29810__$1;
(statearr_29884_29944[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29811 === (18))){
var inst_29735 = (state_29810[(2)]);
var state_29810__$1 = state_29810;
var statearr_29885_29945 = state_29810__$1;
(statearr_29885_29945[(2)] = inst_29735);

(statearr_29885_29945[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29811 === (42))){
var state_29810__$1 = state_29810;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29810__$1,(45),dchan);
} else {
if((state_val_29811 === (37))){
var inst_29769 = (state_29810[(25)]);
var inst_29778 = (state_29810[(23)]);
var inst_29678 = (state_29810[(10)]);
var inst_29778__$1 = cljs.core.first.call(null,inst_29769);
var inst_29779 = cljs.core.async.put_BANG_.call(null,inst_29778__$1,inst_29678,done);
var state_29810__$1 = (function (){var statearr_29886 = state_29810;
(statearr_29886[(23)] = inst_29778__$1);

return statearr_29886;
})();
if(cljs.core.truth_(inst_29779)){
var statearr_29887_29946 = state_29810__$1;
(statearr_29887_29946[(1)] = (39));

} else {
var statearr_29888_29947 = state_29810__$1;
(statearr_29888_29947[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29811 === (8))){
var inst_29690 = (state_29810[(15)]);
var inst_29689 = (state_29810[(17)]);
var inst_29692 = (inst_29690 < inst_29689);
var inst_29693 = inst_29692;
var state_29810__$1 = state_29810;
if(cljs.core.truth_(inst_29693)){
var statearr_29889_29948 = state_29810__$1;
(statearr_29889_29948[(1)] = (10));

} else {
var statearr_29890_29949 = state_29810__$1;
(statearr_29890_29949[(1)] = (11));

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
});})(c__27212__auto___29895,cs,m,dchan,dctr,done))
;
return ((function (switch__27045__auto__,c__27212__auto___29895,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__27046__auto__ = null;
var cljs$core$async$mult_$_state_machine__27046__auto____0 = (function (){
var statearr_29891 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29891[(0)] = cljs$core$async$mult_$_state_machine__27046__auto__);

(statearr_29891[(1)] = (1));

return statearr_29891;
});
var cljs$core$async$mult_$_state_machine__27046__auto____1 = (function (state_29810){
while(true){
var ret_value__27047__auto__ = (function (){try{while(true){
var result__27048__auto__ = switch__27045__auto__.call(null,state_29810);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27048__auto__;
}
break;
}
}catch (e29892){if((e29892 instanceof Object)){
var ex__27049__auto__ = e29892;
var statearr_29893_29950 = state_29810;
(statearr_29893_29950[(5)] = ex__27049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29810);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29892;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29951 = state_29810;
state_29810 = G__29951;
continue;
} else {
return ret_value__27047__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27046__auto__ = function(state_29810){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27046__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27046__auto____1.call(this,state_29810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27046__auto____0;
cljs$core$async$mult_$_state_machine__27046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27046__auto____1;
return cljs$core$async$mult_$_state_machine__27046__auto__;
})()
;})(switch__27045__auto__,c__27212__auto___29895,cs,m,dchan,dctr,done))
})();
var state__27214__auto__ = (function (){var statearr_29894 = f__27213__auto__.call(null);
(statearr_29894[(6)] = c__27212__auto___29895);

return statearr_29894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27214__auto__);
});})(c__27212__auto___29895,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__29953 = arguments.length;
switch (G__29953) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m);
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,state_map);
} else {
var m__4348__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,mode);
} else {
var m__4348__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___29965 = arguments.length;
var i__4642__auto___29966 = (0);
while(true){
if((i__4642__auto___29966 < len__4641__auto___29965)){
args__4647__auto__.push((arguments[i__4642__auto___29966]));

var G__29967 = (i__4642__auto___29966 + (1));
i__4642__auto___29966 = G__29967;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29959){
var map__29960 = p__29959;
var map__29960__$1 = (((((!((map__29960 == null))))?(((((map__29960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29960.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29960):map__29960);
var opts = map__29960__$1;
var statearr_29962_29968 = state;
(statearr_29962_29968[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__29960,map__29960__$1,opts){
return (function (val){
var statearr_29963_29969 = state;
(statearr_29963_29969[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29960,map__29960__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_29964_29970 = state;
(statearr_29964_29970[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29955){
var G__29956 = cljs.core.first.call(null,seq29955);
var seq29955__$1 = cljs.core.next.call(null,seq29955);
var G__29957 = cljs.core.first.call(null,seq29955__$1);
var seq29955__$2 = cljs.core.next.call(null,seq29955__$1);
var G__29958 = cljs.core.first.call(null,seq29955__$2);
var seq29955__$3 = cljs.core.next.call(null,seq29955__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29956,G__29957,G__29958,seq29955__$3);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29971 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29971 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29972){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta29972 = meta29972;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29971.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29973,meta29972__$1){
var self__ = this;
var _29973__$1 = this;
return (new cljs.core.async.t_cljs$core$async29971(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29972__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29971.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29973){
var self__ = this;
var _29973__$1 = this;
return self__.meta29972;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29971.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29971.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29971.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29971.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29971.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29971.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29971.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29971.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29971.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta29972","meta29972",-1182463300,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29971.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29971.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29971";

cljs.core.async.t_cljs$core$async29971.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async29971");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29971.
 */
cljs.core.async.__GT_t_cljs$core$async29971 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async29971(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29972){
return (new cljs.core.async.t_cljs$core$async29971(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29972));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async29971(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27212__auto___30135 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27212__auto___30135,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27213__auto__ = (function (){var switch__27045__auto__ = ((function (c__27212__auto___30135,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30075){
var state_val_30076 = (state_30075[(1)]);
if((state_val_30076 === (7))){
var inst_29990 = (state_30075[(2)]);
var state_30075__$1 = state_30075;
var statearr_30077_30136 = state_30075__$1;
(statearr_30077_30136[(2)] = inst_29990);

(statearr_30077_30136[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30076 === (20))){
var inst_30002 = (state_30075[(7)]);
var state_30075__$1 = state_30075;
var statearr_30078_30137 = state_30075__$1;
(statearr_30078_30137[(2)] = inst_30002);

(statearr_30078_30137[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30076 === (27))){
var state_30075__$1 = state_30075;
var statearr_30079_30138 = state_30075__$1;
(statearr_30079_30138[(2)] = null);

(statearr_30079_30138[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30076 === (1))){
var inst_29977 = (state_30075[(8)]);
var inst_29977__$1 = calc_state.call(null);
var inst_29979 = (inst_29977__$1 == null);
var inst_29980 = cljs.core.not.call(null,inst_29979);
var state_30075__$1 = (function (){var statearr_30080 = state_30075;
(statearr_30080[(8)] = inst_29977__$1);

return statearr_30080;
})();
if(inst_29980){
var statearr_30081_30139 = state_30075__$1;
(statearr_30081_30139[(1)] = (2));

} else {
var statearr_30082_30140 = state_30075__$1;
(statearr_30082_30140[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30076 === (24))){
var inst_30026 = (state_30075[(9)]);
var inst_30035 = (state_30075[(10)]);
var inst_30049 = (state_30075[(11)]);
var inst_30049__$1 = inst_30026.call(null,inst_30035);
var state_30075__$1 = (function (){var statearr_30083 = state_30075;
(statearr_30083[(11)] = inst_30049__$1);

return statearr_30083;
})();
if(cljs.core.truth_(inst_30049__$1)){
var statearr_30084_30141 = state_30075__$1;
(statearr_30084_30141[(1)] = (29));

} else {
var statearr_30085_30142 = state_30075__$1;
(statearr_30085_30142[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30076 === (4))){
var inst_29993 = (state_30075[(2)]);
var state_30075__$1 = state_30075;
if(cljs.core.truth_(inst_29993)){
var statearr_30086_30143 = state_30075__$1;
(statearr_30086_30143[(1)] = (8));

} else {
var statearr_30087_30144 = state_30075__$1;
(statearr_30087_30144[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30076 === (15))){
var inst_30020 = (state_30075[(2)]);
var state_30075__$1 = state_30075;
if(cljs.core.truth_(inst_30020)){
var statearr_30088_30145 = state_30075__$1;
(statearr_30088_30145[(1)] = (19));

} else {
var statearr_30089_30146 = state_30075__$1;
(statearr_30089_30146[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30076 === (21))){
var inst_30025 = (state_30075[(12)]);
var inst_30025__$1 = (state_30075[(2)]);
var inst_30026 = cljs.core.get.call(null,inst_30025__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30027 = cljs.core.get.call(null,inst_30025__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30028 = cljs.core.get.call(null,inst_30025__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30075__$1 = (function (){var statearr_30090 = state_30075;
(statearr_30090[(9)] = inst_30026);

(statearr_30090[(12)] = inst_30025__$1);

(statearr_30090[(13)] = inst_30027);

return statearr_30090;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30075__$1,(22),inst_30028);
} else {
if((state_val_30076 === (31))){
var inst_30057 = (state_30075[(2)]);
var state_30075__$1 = state_30075;
if(cljs.core.truth_(inst_30057)){
var statearr_30091_30147 = state_30075__$1;
(statearr_30091_30147[(1)] = (32));

} else {
var statearr_30092_30148 = state_30075__$1;
(statearr_30092_30148[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30076 === (32))){
var inst_30034 = (state_30075[(14)]);
var state_30075__$1 = state_30075;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30075__$1,(35),out,inst_30034);
} else {
if((state_val_30076 === (33))){
var inst_30025 = (state_30075[(12)]);
var inst_30002 = inst_30025;
var state_30075__$1 = (function (){var statearr_30093 = state_30075;
(statearr_30093[(7)] = inst_30002);

return statearr_30093;
})();
var statearr_30094_30149 = state_30075__$1;
(statearr_30094_30149[(2)] = null);

(statearr_30094_30149[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30076 === (13))){
var inst_30002 = (state_30075[(7)]);
var inst_30009 = inst_30002.cljs$lang$protocol_mask$partition0$;
var inst_30010 = (inst_30009 & (64));
var inst_30011 = inst_30002.cljs$core$ISeq$;
var inst_30012 = (cljs.core.PROTOCOL_SENTINEL === inst_30011);
var inst_30013 = ((inst_30010) || (inst_30012));
var state_30075__$1 = state_30075;
if(cljs.core.truth_(inst_30013)){
var statearr_30095_30150 = state_30075__$1;
(statearr_30095_30150[(1)] = (16));

} else {
var statearr_30096_30151 = state_30075__$1;
(statearr_30096_30151[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30076 === (22))){
var inst_30035 = (state_30075[(10)]);
var inst_30034 = (state_30075[(14)]);
var inst_30033 = (state_30075[(2)]);
var inst_30034__$1 = cljs.core.nth.call(null,inst_30033,(0),null);
var inst_30035__$1 = cljs.core.nth.call(null,inst_30033,(1),null);
var inst_30036 = (inst_30034__$1 == null);
var inst_30037 = cljs.core._EQ_.call(null,inst_30035__$1,change);
var inst_30038 = ((inst_30036) || (inst_30037));
var state_30075__$1 = (function (){var statearr_30097 = state_30075;
(statearr_30097[(10)] = inst_30035__$1);

(statearr_30097[(14)] = inst_30034__$1);

return statearr_30097;
})();
if(cljs.core.truth_(inst_30038)){
var statearr_30098_30152 = state_30075__$1;
(statearr_30098_30152[(1)] = (23));

} else {
var statearr_30099_30153 = state_30075__$1;
(statearr_30099_30153[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30076 === (36))){
var inst_30025 = (state_30075[(12)]);
var inst_30002 = inst_30025;
var state_30075__$1 = (function (){var statearr_30100 = state_30075;
(statearr_30100[(7)] = inst_30002);

return statearr_30100;
})();
var statearr_30101_30154 = state_30075__$1;
(statearr_30101_30154[(2)] = null);

(statearr_30101_30154[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30076 === (29))){
var inst_30049 = (state_30075[(11)]);
var state_30075__$1 = state_30075;
var statearr_30102_30155 = state_30075__$1;
(statearr_30102_30155[(2)] = inst_30049);

(statearr_30102_30155[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30076 === (6))){
var state_30075__$1 = state_30075;
var statearr_30103_30156 = state_30075__$1;
(statearr_30103_30156[(2)] = false);

(statearr_30103_30156[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30076 === (28))){
var inst_30045 = (state_30075[(2)]);
var inst_30046 = calc_state.call(null);
var inst_30002 = inst_30046;
var state_30075__$1 = (function (){var statearr_30104 = state_30075;
(statearr_30104[(15)] = inst_30045);

(statearr_30104[(7)] = inst_30002);

return statearr_30104;
})();
var statearr_30105_30157 = state_30075__$1;
(statearr_30105_30157[(2)] = null);

(statearr_30105_30157[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30076 === (25))){
var inst_30071 = (state_30075[(2)]);
var state_30075__$1 = state_30075;
var statearr_30106_30158 = state_30075__$1;
(statearr_30106_30158[(2)] = inst_30071);

(statearr_30106_30158[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30076 === (34))){
var inst_30069 = (state_30075[(2)]);
var state_30075__$1 = state_30075;
var statearr_30107_30159 = state_30075__$1;
(statearr_30107_30159[(2)] = inst_30069);

(statearr_30107_30159[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30076 === (17))){
var state_30075__$1 = state_30075;
var statearr_30108_30160 = state_30075__$1;
(statearr_30108_30160[(2)] = false);

(statearr_30108_30160[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30076 === (3))){
var state_30075__$1 = state_30075;
var statearr_30109_30161 = state_30075__$1;
(statearr_30109_30161[(2)] = false);

(statearr_30109_30161[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30076 === (12))){
var inst_30073 = (state_30075[(2)]);
var state_30075__$1 = state_30075;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30075__$1,inst_30073);
} else {
if((state_val_30076 === (2))){
var inst_29977 = (state_30075[(8)]);
var inst_29982 = inst_29977.cljs$lang$protocol_mask$partition0$;
var inst_29983 = (inst_29982 & (64));
var inst_29984 = inst_29977.cljs$core$ISeq$;
var inst_29985 = (cljs.core.PROTOCOL_SENTINEL === inst_29984);
var inst_29986 = ((inst_29983) || (inst_29985));
var state_30075__$1 = state_30075;
if(cljs.core.truth_(inst_29986)){
var statearr_30110_30162 = state_30075__$1;
(statearr_30110_30162[(1)] = (5));

} else {
var statearr_30111_30163 = state_30075__$1;
(statearr_30111_30163[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30076 === (23))){
var inst_30034 = (state_30075[(14)]);
var inst_30040 = (inst_30034 == null);
var state_30075__$1 = state_30075;
if(cljs.core.truth_(inst_30040)){
var statearr_30112_30164 = state_30075__$1;
(statearr_30112_30164[(1)] = (26));

} else {
var statearr_30113_30165 = state_30075__$1;
(statearr_30113_30165[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30076 === (35))){
var inst_30060 = (state_30075[(2)]);
var state_30075__$1 = state_30075;
if(cljs.core.truth_(inst_30060)){
var statearr_30114_30166 = state_30075__$1;
(statearr_30114_30166[(1)] = (36));

} else {
var statearr_30115_30167 = state_30075__$1;
(statearr_30115_30167[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30076 === (19))){
var inst_30002 = (state_30075[(7)]);
var inst_30022 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30002);
var state_30075__$1 = state_30075;
var statearr_30116_30168 = state_30075__$1;
(statearr_30116_30168[(2)] = inst_30022);

(statearr_30116_30168[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30076 === (11))){
var inst_30002 = (state_30075[(7)]);
var inst_30006 = (inst_30002 == null);
var inst_30007 = cljs.core.not.call(null,inst_30006);
var state_30075__$1 = state_30075;
if(inst_30007){
var statearr_30117_30169 = state_30075__$1;
(statearr_30117_30169[(1)] = (13));

} else {
var statearr_30118_30170 = state_30075__$1;
(statearr_30118_30170[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30076 === (9))){
var inst_29977 = (state_30075[(8)]);
var state_30075__$1 = state_30075;
var statearr_30119_30171 = state_30075__$1;
(statearr_30119_30171[(2)] = inst_29977);

(statearr_30119_30171[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30076 === (5))){
var state_30075__$1 = state_30075;
var statearr_30120_30172 = state_30075__$1;
(statearr_30120_30172[(2)] = true);

(statearr_30120_30172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30076 === (14))){
var state_30075__$1 = state_30075;
var statearr_30121_30173 = state_30075__$1;
(statearr_30121_30173[(2)] = false);

(statearr_30121_30173[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30076 === (26))){
var inst_30035 = (state_30075[(10)]);
var inst_30042 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30035);
var state_30075__$1 = state_30075;
var statearr_30122_30174 = state_30075__$1;
(statearr_30122_30174[(2)] = inst_30042);

(statearr_30122_30174[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30076 === (16))){
var state_30075__$1 = state_30075;
var statearr_30123_30175 = state_30075__$1;
(statearr_30123_30175[(2)] = true);

(statearr_30123_30175[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30076 === (38))){
var inst_30065 = (state_30075[(2)]);
var state_30075__$1 = state_30075;
var statearr_30124_30176 = state_30075__$1;
(statearr_30124_30176[(2)] = inst_30065);

(statearr_30124_30176[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30076 === (30))){
var inst_30026 = (state_30075[(9)]);
var inst_30035 = (state_30075[(10)]);
var inst_30027 = (state_30075[(13)]);
var inst_30052 = cljs.core.empty_QMARK_.call(null,inst_30026);
var inst_30053 = inst_30027.call(null,inst_30035);
var inst_30054 = cljs.core.not.call(null,inst_30053);
var inst_30055 = ((inst_30052) && (inst_30054));
var state_30075__$1 = state_30075;
var statearr_30125_30177 = state_30075__$1;
(statearr_30125_30177[(2)] = inst_30055);

(statearr_30125_30177[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30076 === (10))){
var inst_29977 = (state_30075[(8)]);
var inst_29998 = (state_30075[(2)]);
var inst_29999 = cljs.core.get.call(null,inst_29998,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30000 = cljs.core.get.call(null,inst_29998,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30001 = cljs.core.get.call(null,inst_29998,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30002 = inst_29977;
var state_30075__$1 = (function (){var statearr_30126 = state_30075;
(statearr_30126[(16)] = inst_30001);

(statearr_30126[(7)] = inst_30002);

(statearr_30126[(17)] = inst_29999);

(statearr_30126[(18)] = inst_30000);

return statearr_30126;
})();
var statearr_30127_30178 = state_30075__$1;
(statearr_30127_30178[(2)] = null);

(statearr_30127_30178[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30076 === (18))){
var inst_30017 = (state_30075[(2)]);
var state_30075__$1 = state_30075;
var statearr_30128_30179 = state_30075__$1;
(statearr_30128_30179[(2)] = inst_30017);

(statearr_30128_30179[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30076 === (37))){
var state_30075__$1 = state_30075;
var statearr_30129_30180 = state_30075__$1;
(statearr_30129_30180[(2)] = null);

(statearr_30129_30180[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30076 === (8))){
var inst_29977 = (state_30075[(8)]);
var inst_29995 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29977);
var state_30075__$1 = state_30075;
var statearr_30130_30181 = state_30075__$1;
(statearr_30130_30181[(2)] = inst_29995);

(statearr_30130_30181[(1)] = (10));


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
});})(c__27212__auto___30135,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__27045__auto__,c__27212__auto___30135,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__27046__auto__ = null;
var cljs$core$async$mix_$_state_machine__27046__auto____0 = (function (){
var statearr_30131 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30131[(0)] = cljs$core$async$mix_$_state_machine__27046__auto__);

(statearr_30131[(1)] = (1));

return statearr_30131;
});
var cljs$core$async$mix_$_state_machine__27046__auto____1 = (function (state_30075){
while(true){
var ret_value__27047__auto__ = (function (){try{while(true){
var result__27048__auto__ = switch__27045__auto__.call(null,state_30075);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27048__auto__;
}
break;
}
}catch (e30132){if((e30132 instanceof Object)){
var ex__27049__auto__ = e30132;
var statearr_30133_30182 = state_30075;
(statearr_30133_30182[(5)] = ex__27049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30132;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30183 = state_30075;
state_30075 = G__30183;
continue;
} else {
return ret_value__27047__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27046__auto__ = function(state_30075){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27046__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27046__auto____1.call(this,state_30075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27046__auto____0;
cljs$core$async$mix_$_state_machine__27046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27046__auto____1;
return cljs$core$async$mix_$_state_machine__27046__auto__;
})()
;})(switch__27045__auto__,c__27212__auto___30135,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27214__auto__ = (function (){var statearr_30134 = f__27213__auto__.call(null);
(statearr_30134[(6)] = c__27212__auto___30135);

return statearr_30134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27214__auto__);
});})(c__27212__auto___30135,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4348__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__30185 = arguments.length;
switch (G__30185) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


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
var G__30189 = arguments.length;
switch (G__30189) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4047__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4047__auto__,mults){
return (function (p1__30187_SHARP_){
if(cljs.core.truth_(p1__30187_SHARP_.call(null,topic))){
return p1__30187_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30187_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30190 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30190 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30191){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30191 = meta30191;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30190.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30192,meta30191__$1){
var self__ = this;
var _30192__$1 = this;
return (new cljs.core.async.t_cljs$core$async30190(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30191__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30190.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30192){
var self__ = this;
var _30192__$1 = this;
return self__.meta30191;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30190.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30190.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30190.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30190.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30190.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30190.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30190.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30190.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30191","meta30191",-181146146,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30190.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30190.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30190";

cljs.core.async.t_cljs$core$async30190.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async30190");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30190.
 */
cljs.core.async.__GT_t_cljs$core$async30190 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async30190(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30191){
return (new cljs.core.async.t_cljs$core$async30190(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30191));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async30190(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27212__auto___30310 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27212__auto___30310,mults,ensure_mult,p){
return (function (){
var f__27213__auto__ = (function (){var switch__27045__auto__ = ((function (c__27212__auto___30310,mults,ensure_mult,p){
return (function (state_30264){
var state_val_30265 = (state_30264[(1)]);
if((state_val_30265 === (7))){
var inst_30260 = (state_30264[(2)]);
var state_30264__$1 = state_30264;
var statearr_30266_30311 = state_30264__$1;
(statearr_30266_30311[(2)] = inst_30260);

(statearr_30266_30311[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30265 === (20))){
var state_30264__$1 = state_30264;
var statearr_30267_30312 = state_30264__$1;
(statearr_30267_30312[(2)] = null);

(statearr_30267_30312[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30265 === (1))){
var state_30264__$1 = state_30264;
var statearr_30268_30313 = state_30264__$1;
(statearr_30268_30313[(2)] = null);

(statearr_30268_30313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30265 === (24))){
var inst_30243 = (state_30264[(7)]);
var inst_30252 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30243);
var state_30264__$1 = state_30264;
var statearr_30269_30314 = state_30264__$1;
(statearr_30269_30314[(2)] = inst_30252);

(statearr_30269_30314[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30265 === (4))){
var inst_30195 = (state_30264[(8)]);
var inst_30195__$1 = (state_30264[(2)]);
var inst_30196 = (inst_30195__$1 == null);
var state_30264__$1 = (function (){var statearr_30270 = state_30264;
(statearr_30270[(8)] = inst_30195__$1);

return statearr_30270;
})();
if(cljs.core.truth_(inst_30196)){
var statearr_30271_30315 = state_30264__$1;
(statearr_30271_30315[(1)] = (5));

} else {
var statearr_30272_30316 = state_30264__$1;
(statearr_30272_30316[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30265 === (15))){
var inst_30237 = (state_30264[(2)]);
var state_30264__$1 = state_30264;
var statearr_30273_30317 = state_30264__$1;
(statearr_30273_30317[(2)] = inst_30237);

(statearr_30273_30317[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30265 === (21))){
var inst_30257 = (state_30264[(2)]);
var state_30264__$1 = (function (){var statearr_30274 = state_30264;
(statearr_30274[(9)] = inst_30257);

return statearr_30274;
})();
var statearr_30275_30318 = state_30264__$1;
(statearr_30275_30318[(2)] = null);

(statearr_30275_30318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30265 === (13))){
var inst_30219 = (state_30264[(10)]);
var inst_30221 = cljs.core.chunked_seq_QMARK_.call(null,inst_30219);
var state_30264__$1 = state_30264;
if(inst_30221){
var statearr_30276_30319 = state_30264__$1;
(statearr_30276_30319[(1)] = (16));

} else {
var statearr_30277_30320 = state_30264__$1;
(statearr_30277_30320[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30265 === (22))){
var inst_30249 = (state_30264[(2)]);
var state_30264__$1 = state_30264;
if(cljs.core.truth_(inst_30249)){
var statearr_30278_30321 = state_30264__$1;
(statearr_30278_30321[(1)] = (23));

} else {
var statearr_30279_30322 = state_30264__$1;
(statearr_30279_30322[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30265 === (6))){
var inst_30245 = (state_30264[(11)]);
var inst_30243 = (state_30264[(7)]);
var inst_30195 = (state_30264[(8)]);
var inst_30243__$1 = topic_fn.call(null,inst_30195);
var inst_30244 = cljs.core.deref.call(null,mults);
var inst_30245__$1 = cljs.core.get.call(null,inst_30244,inst_30243__$1);
var state_30264__$1 = (function (){var statearr_30280 = state_30264;
(statearr_30280[(11)] = inst_30245__$1);

(statearr_30280[(7)] = inst_30243__$1);

return statearr_30280;
})();
if(cljs.core.truth_(inst_30245__$1)){
var statearr_30281_30323 = state_30264__$1;
(statearr_30281_30323[(1)] = (19));

} else {
var statearr_30282_30324 = state_30264__$1;
(statearr_30282_30324[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30265 === (25))){
var inst_30254 = (state_30264[(2)]);
var state_30264__$1 = state_30264;
var statearr_30283_30325 = state_30264__$1;
(statearr_30283_30325[(2)] = inst_30254);

(statearr_30283_30325[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30265 === (17))){
var inst_30219 = (state_30264[(10)]);
var inst_30228 = cljs.core.first.call(null,inst_30219);
var inst_30229 = cljs.core.async.muxch_STAR_.call(null,inst_30228);
var inst_30230 = cljs.core.async.close_BANG_.call(null,inst_30229);
var inst_30231 = cljs.core.next.call(null,inst_30219);
var inst_30205 = inst_30231;
var inst_30206 = null;
var inst_30207 = (0);
var inst_30208 = (0);
var state_30264__$1 = (function (){var statearr_30284 = state_30264;
(statearr_30284[(12)] = inst_30230);

(statearr_30284[(13)] = inst_30208);

(statearr_30284[(14)] = inst_30205);

(statearr_30284[(15)] = inst_30206);

(statearr_30284[(16)] = inst_30207);

return statearr_30284;
})();
var statearr_30285_30326 = state_30264__$1;
(statearr_30285_30326[(2)] = null);

(statearr_30285_30326[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30265 === (3))){
var inst_30262 = (state_30264[(2)]);
var state_30264__$1 = state_30264;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30264__$1,inst_30262);
} else {
if((state_val_30265 === (12))){
var inst_30239 = (state_30264[(2)]);
var state_30264__$1 = state_30264;
var statearr_30286_30327 = state_30264__$1;
(statearr_30286_30327[(2)] = inst_30239);

(statearr_30286_30327[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30265 === (2))){
var state_30264__$1 = state_30264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30264__$1,(4),ch);
} else {
if((state_val_30265 === (23))){
var state_30264__$1 = state_30264;
var statearr_30287_30328 = state_30264__$1;
(statearr_30287_30328[(2)] = null);

(statearr_30287_30328[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30265 === (19))){
var inst_30245 = (state_30264[(11)]);
var inst_30195 = (state_30264[(8)]);
var inst_30247 = cljs.core.async.muxch_STAR_.call(null,inst_30245);
var state_30264__$1 = state_30264;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30264__$1,(22),inst_30247,inst_30195);
} else {
if((state_val_30265 === (11))){
var inst_30219 = (state_30264[(10)]);
var inst_30205 = (state_30264[(14)]);
var inst_30219__$1 = cljs.core.seq.call(null,inst_30205);
var state_30264__$1 = (function (){var statearr_30288 = state_30264;
(statearr_30288[(10)] = inst_30219__$1);

return statearr_30288;
})();
if(inst_30219__$1){
var statearr_30289_30329 = state_30264__$1;
(statearr_30289_30329[(1)] = (13));

} else {
var statearr_30290_30330 = state_30264__$1;
(statearr_30290_30330[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30265 === (9))){
var inst_30241 = (state_30264[(2)]);
var state_30264__$1 = state_30264;
var statearr_30291_30331 = state_30264__$1;
(statearr_30291_30331[(2)] = inst_30241);

(statearr_30291_30331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30265 === (5))){
var inst_30202 = cljs.core.deref.call(null,mults);
var inst_30203 = cljs.core.vals.call(null,inst_30202);
var inst_30204 = cljs.core.seq.call(null,inst_30203);
var inst_30205 = inst_30204;
var inst_30206 = null;
var inst_30207 = (0);
var inst_30208 = (0);
var state_30264__$1 = (function (){var statearr_30292 = state_30264;
(statearr_30292[(13)] = inst_30208);

(statearr_30292[(14)] = inst_30205);

(statearr_30292[(15)] = inst_30206);

(statearr_30292[(16)] = inst_30207);

return statearr_30292;
})();
var statearr_30293_30332 = state_30264__$1;
(statearr_30293_30332[(2)] = null);

(statearr_30293_30332[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30265 === (14))){
var state_30264__$1 = state_30264;
var statearr_30297_30333 = state_30264__$1;
(statearr_30297_30333[(2)] = null);

(statearr_30297_30333[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30265 === (16))){
var inst_30219 = (state_30264[(10)]);
var inst_30223 = cljs.core.chunk_first.call(null,inst_30219);
var inst_30224 = cljs.core.chunk_rest.call(null,inst_30219);
var inst_30225 = cljs.core.count.call(null,inst_30223);
var inst_30205 = inst_30224;
var inst_30206 = inst_30223;
var inst_30207 = inst_30225;
var inst_30208 = (0);
var state_30264__$1 = (function (){var statearr_30298 = state_30264;
(statearr_30298[(13)] = inst_30208);

(statearr_30298[(14)] = inst_30205);

(statearr_30298[(15)] = inst_30206);

(statearr_30298[(16)] = inst_30207);

return statearr_30298;
})();
var statearr_30299_30334 = state_30264__$1;
(statearr_30299_30334[(2)] = null);

(statearr_30299_30334[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30265 === (10))){
var inst_30208 = (state_30264[(13)]);
var inst_30205 = (state_30264[(14)]);
var inst_30206 = (state_30264[(15)]);
var inst_30207 = (state_30264[(16)]);
var inst_30213 = cljs.core._nth.call(null,inst_30206,inst_30208);
var inst_30214 = cljs.core.async.muxch_STAR_.call(null,inst_30213);
var inst_30215 = cljs.core.async.close_BANG_.call(null,inst_30214);
var inst_30216 = (inst_30208 + (1));
var tmp30294 = inst_30205;
var tmp30295 = inst_30206;
var tmp30296 = inst_30207;
var inst_30205__$1 = tmp30294;
var inst_30206__$1 = tmp30295;
var inst_30207__$1 = tmp30296;
var inst_30208__$1 = inst_30216;
var state_30264__$1 = (function (){var statearr_30300 = state_30264;
(statearr_30300[(13)] = inst_30208__$1);

(statearr_30300[(17)] = inst_30215);

(statearr_30300[(14)] = inst_30205__$1);

(statearr_30300[(15)] = inst_30206__$1);

(statearr_30300[(16)] = inst_30207__$1);

return statearr_30300;
})();
var statearr_30301_30335 = state_30264__$1;
(statearr_30301_30335[(2)] = null);

(statearr_30301_30335[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30265 === (18))){
var inst_30234 = (state_30264[(2)]);
var state_30264__$1 = state_30264;
var statearr_30302_30336 = state_30264__$1;
(statearr_30302_30336[(2)] = inst_30234);

(statearr_30302_30336[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30265 === (8))){
var inst_30208 = (state_30264[(13)]);
var inst_30207 = (state_30264[(16)]);
var inst_30210 = (inst_30208 < inst_30207);
var inst_30211 = inst_30210;
var state_30264__$1 = state_30264;
if(cljs.core.truth_(inst_30211)){
var statearr_30303_30337 = state_30264__$1;
(statearr_30303_30337[(1)] = (10));

} else {
var statearr_30304_30338 = state_30264__$1;
(statearr_30304_30338[(1)] = (11));

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
});})(c__27212__auto___30310,mults,ensure_mult,p))
;
return ((function (switch__27045__auto__,c__27212__auto___30310,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__27046__auto__ = null;
var cljs$core$async$state_machine__27046__auto____0 = (function (){
var statearr_30305 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30305[(0)] = cljs$core$async$state_machine__27046__auto__);

(statearr_30305[(1)] = (1));

return statearr_30305;
});
var cljs$core$async$state_machine__27046__auto____1 = (function (state_30264){
while(true){
var ret_value__27047__auto__ = (function (){try{while(true){
var result__27048__auto__ = switch__27045__auto__.call(null,state_30264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27048__auto__;
}
break;
}
}catch (e30306){if((e30306 instanceof Object)){
var ex__27049__auto__ = e30306;
var statearr_30307_30339 = state_30264;
(statearr_30307_30339[(5)] = ex__27049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30306;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30340 = state_30264;
state_30264 = G__30340;
continue;
} else {
return ret_value__27047__auto__;
}
break;
}
});
cljs$core$async$state_machine__27046__auto__ = function(state_30264){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27046__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27046__auto____1.call(this,state_30264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27046__auto____0;
cljs$core$async$state_machine__27046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27046__auto____1;
return cljs$core$async$state_machine__27046__auto__;
})()
;})(switch__27045__auto__,c__27212__auto___30310,mults,ensure_mult,p))
})();
var state__27214__auto__ = (function (){var statearr_30308 = f__27213__auto__.call(null);
(statearr_30308[(6)] = c__27212__auto___30310);

return statearr_30308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27214__auto__);
});})(c__27212__auto___30310,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__30342 = arguments.length;
switch (G__30342) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__30345 = arguments.length;
switch (G__30345) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

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
var G__30348 = arguments.length;
switch (G__30348) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__27212__auto___30415 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27212__auto___30415,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27213__auto__ = (function (){var switch__27045__auto__ = ((function (c__27212__auto___30415,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30387){
var state_val_30388 = (state_30387[(1)]);
if((state_val_30388 === (7))){
var state_30387__$1 = state_30387;
var statearr_30389_30416 = state_30387__$1;
(statearr_30389_30416[(2)] = null);

(statearr_30389_30416[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (1))){
var state_30387__$1 = state_30387;
var statearr_30390_30417 = state_30387__$1;
(statearr_30390_30417[(2)] = null);

(statearr_30390_30417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (4))){
var inst_30351 = (state_30387[(7)]);
var inst_30353 = (inst_30351 < cnt);
var state_30387__$1 = state_30387;
if(cljs.core.truth_(inst_30353)){
var statearr_30391_30418 = state_30387__$1;
(statearr_30391_30418[(1)] = (6));

} else {
var statearr_30392_30419 = state_30387__$1;
(statearr_30392_30419[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (15))){
var inst_30383 = (state_30387[(2)]);
var state_30387__$1 = state_30387;
var statearr_30393_30420 = state_30387__$1;
(statearr_30393_30420[(2)] = inst_30383);

(statearr_30393_30420[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (13))){
var inst_30376 = cljs.core.async.close_BANG_.call(null,out);
var state_30387__$1 = state_30387;
var statearr_30394_30421 = state_30387__$1;
(statearr_30394_30421[(2)] = inst_30376);

(statearr_30394_30421[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (6))){
var state_30387__$1 = state_30387;
var statearr_30395_30422 = state_30387__$1;
(statearr_30395_30422[(2)] = null);

(statearr_30395_30422[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (3))){
var inst_30385 = (state_30387[(2)]);
var state_30387__$1 = state_30387;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30387__$1,inst_30385);
} else {
if((state_val_30388 === (12))){
var inst_30373 = (state_30387[(8)]);
var inst_30373__$1 = (state_30387[(2)]);
var inst_30374 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30373__$1);
var state_30387__$1 = (function (){var statearr_30396 = state_30387;
(statearr_30396[(8)] = inst_30373__$1);

return statearr_30396;
})();
if(cljs.core.truth_(inst_30374)){
var statearr_30397_30423 = state_30387__$1;
(statearr_30397_30423[(1)] = (13));

} else {
var statearr_30398_30424 = state_30387__$1;
(statearr_30398_30424[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (2))){
var inst_30350 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_30351 = (0);
var state_30387__$1 = (function (){var statearr_30399 = state_30387;
(statearr_30399[(7)] = inst_30351);

(statearr_30399[(9)] = inst_30350);

return statearr_30399;
})();
var statearr_30400_30425 = state_30387__$1;
(statearr_30400_30425[(2)] = null);

(statearr_30400_30425[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (11))){
var inst_30351 = (state_30387[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30387,(10),Object,null,(9));
var inst_30360 = chs__$1.call(null,inst_30351);
var inst_30361 = done.call(null,inst_30351);
var inst_30362 = cljs.core.async.take_BANG_.call(null,inst_30360,inst_30361);
var state_30387__$1 = state_30387;
var statearr_30401_30426 = state_30387__$1;
(statearr_30401_30426[(2)] = inst_30362);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30387__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (9))){
var inst_30351 = (state_30387[(7)]);
var inst_30364 = (state_30387[(2)]);
var inst_30365 = (inst_30351 + (1));
var inst_30351__$1 = inst_30365;
var state_30387__$1 = (function (){var statearr_30402 = state_30387;
(statearr_30402[(7)] = inst_30351__$1);

(statearr_30402[(10)] = inst_30364);

return statearr_30402;
})();
var statearr_30403_30427 = state_30387__$1;
(statearr_30403_30427[(2)] = null);

(statearr_30403_30427[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (5))){
var inst_30371 = (state_30387[(2)]);
var state_30387__$1 = (function (){var statearr_30404 = state_30387;
(statearr_30404[(11)] = inst_30371);

return statearr_30404;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30387__$1,(12),dchan);
} else {
if((state_val_30388 === (14))){
var inst_30373 = (state_30387[(8)]);
var inst_30378 = cljs.core.apply.call(null,f,inst_30373);
var state_30387__$1 = state_30387;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30387__$1,(16),out,inst_30378);
} else {
if((state_val_30388 === (16))){
var inst_30380 = (state_30387[(2)]);
var state_30387__$1 = (function (){var statearr_30405 = state_30387;
(statearr_30405[(12)] = inst_30380);

return statearr_30405;
})();
var statearr_30406_30428 = state_30387__$1;
(statearr_30406_30428[(2)] = null);

(statearr_30406_30428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (10))){
var inst_30355 = (state_30387[(2)]);
var inst_30356 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30387__$1 = (function (){var statearr_30407 = state_30387;
(statearr_30407[(13)] = inst_30355);

return statearr_30407;
})();
var statearr_30408_30429 = state_30387__$1;
(statearr_30408_30429[(2)] = inst_30356);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30387__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (8))){
var inst_30369 = (state_30387[(2)]);
var state_30387__$1 = state_30387;
var statearr_30409_30430 = state_30387__$1;
(statearr_30409_30430[(2)] = inst_30369);

(statearr_30409_30430[(1)] = (5));


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
});})(c__27212__auto___30415,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__27045__auto__,c__27212__auto___30415,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__27046__auto__ = null;
var cljs$core$async$state_machine__27046__auto____0 = (function (){
var statearr_30410 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30410[(0)] = cljs$core$async$state_machine__27046__auto__);

(statearr_30410[(1)] = (1));

return statearr_30410;
});
var cljs$core$async$state_machine__27046__auto____1 = (function (state_30387){
while(true){
var ret_value__27047__auto__ = (function (){try{while(true){
var result__27048__auto__ = switch__27045__auto__.call(null,state_30387);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27048__auto__;
}
break;
}
}catch (e30411){if((e30411 instanceof Object)){
var ex__27049__auto__ = e30411;
var statearr_30412_30431 = state_30387;
(statearr_30412_30431[(5)] = ex__27049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30387);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30411;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30432 = state_30387;
state_30387 = G__30432;
continue;
} else {
return ret_value__27047__auto__;
}
break;
}
});
cljs$core$async$state_machine__27046__auto__ = function(state_30387){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27046__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27046__auto____1.call(this,state_30387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27046__auto____0;
cljs$core$async$state_machine__27046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27046__auto____1;
return cljs$core$async$state_machine__27046__auto__;
})()
;})(switch__27045__auto__,c__27212__auto___30415,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27214__auto__ = (function (){var statearr_30413 = f__27213__auto__.call(null);
(statearr_30413[(6)] = c__27212__auto___30415);

return statearr_30413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27214__auto__);
});})(c__27212__auto___30415,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__30435 = arguments.length;
switch (G__30435) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27212__auto___30489 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27212__auto___30489,out){
return (function (){
var f__27213__auto__ = (function (){var switch__27045__auto__ = ((function (c__27212__auto___30489,out){
return (function (state_30467){
var state_val_30468 = (state_30467[(1)]);
if((state_val_30468 === (7))){
var inst_30447 = (state_30467[(7)]);
var inst_30446 = (state_30467[(8)]);
var inst_30446__$1 = (state_30467[(2)]);
var inst_30447__$1 = cljs.core.nth.call(null,inst_30446__$1,(0),null);
var inst_30448 = cljs.core.nth.call(null,inst_30446__$1,(1),null);
var inst_30449 = (inst_30447__$1 == null);
var state_30467__$1 = (function (){var statearr_30469 = state_30467;
(statearr_30469[(7)] = inst_30447__$1);

(statearr_30469[(9)] = inst_30448);

(statearr_30469[(8)] = inst_30446__$1);

return statearr_30469;
})();
if(cljs.core.truth_(inst_30449)){
var statearr_30470_30490 = state_30467__$1;
(statearr_30470_30490[(1)] = (8));

} else {
var statearr_30471_30491 = state_30467__$1;
(statearr_30471_30491[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30468 === (1))){
var inst_30436 = cljs.core.vec.call(null,chs);
var inst_30437 = inst_30436;
var state_30467__$1 = (function (){var statearr_30472 = state_30467;
(statearr_30472[(10)] = inst_30437);

return statearr_30472;
})();
var statearr_30473_30492 = state_30467__$1;
(statearr_30473_30492[(2)] = null);

(statearr_30473_30492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30468 === (4))){
var inst_30437 = (state_30467[(10)]);
var state_30467__$1 = state_30467;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30467__$1,(7),inst_30437);
} else {
if((state_val_30468 === (6))){
var inst_30463 = (state_30467[(2)]);
var state_30467__$1 = state_30467;
var statearr_30474_30493 = state_30467__$1;
(statearr_30474_30493[(2)] = inst_30463);

(statearr_30474_30493[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30468 === (3))){
var inst_30465 = (state_30467[(2)]);
var state_30467__$1 = state_30467;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30467__$1,inst_30465);
} else {
if((state_val_30468 === (2))){
var inst_30437 = (state_30467[(10)]);
var inst_30439 = cljs.core.count.call(null,inst_30437);
var inst_30440 = (inst_30439 > (0));
var state_30467__$1 = state_30467;
if(cljs.core.truth_(inst_30440)){
var statearr_30476_30494 = state_30467__$1;
(statearr_30476_30494[(1)] = (4));

} else {
var statearr_30477_30495 = state_30467__$1;
(statearr_30477_30495[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30468 === (11))){
var inst_30437 = (state_30467[(10)]);
var inst_30456 = (state_30467[(2)]);
var tmp30475 = inst_30437;
var inst_30437__$1 = tmp30475;
var state_30467__$1 = (function (){var statearr_30478 = state_30467;
(statearr_30478[(10)] = inst_30437__$1);

(statearr_30478[(11)] = inst_30456);

return statearr_30478;
})();
var statearr_30479_30496 = state_30467__$1;
(statearr_30479_30496[(2)] = null);

(statearr_30479_30496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30468 === (9))){
var inst_30447 = (state_30467[(7)]);
var state_30467__$1 = state_30467;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30467__$1,(11),out,inst_30447);
} else {
if((state_val_30468 === (5))){
var inst_30461 = cljs.core.async.close_BANG_.call(null,out);
var state_30467__$1 = state_30467;
var statearr_30480_30497 = state_30467__$1;
(statearr_30480_30497[(2)] = inst_30461);

(statearr_30480_30497[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30468 === (10))){
var inst_30459 = (state_30467[(2)]);
var state_30467__$1 = state_30467;
var statearr_30481_30498 = state_30467__$1;
(statearr_30481_30498[(2)] = inst_30459);

(statearr_30481_30498[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30468 === (8))){
var inst_30447 = (state_30467[(7)]);
var inst_30448 = (state_30467[(9)]);
var inst_30446 = (state_30467[(8)]);
var inst_30437 = (state_30467[(10)]);
var inst_30451 = (function (){var cs = inst_30437;
var vec__30442 = inst_30446;
var v = inst_30447;
var c = inst_30448;
return ((function (cs,vec__30442,v,c,inst_30447,inst_30448,inst_30446,inst_30437,state_val_30468,c__27212__auto___30489,out){
return (function (p1__30433_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30433_SHARP_);
});
;})(cs,vec__30442,v,c,inst_30447,inst_30448,inst_30446,inst_30437,state_val_30468,c__27212__auto___30489,out))
})();
var inst_30452 = cljs.core.filterv.call(null,inst_30451,inst_30437);
var inst_30437__$1 = inst_30452;
var state_30467__$1 = (function (){var statearr_30482 = state_30467;
(statearr_30482[(10)] = inst_30437__$1);

return statearr_30482;
})();
var statearr_30483_30499 = state_30467__$1;
(statearr_30483_30499[(2)] = null);

(statearr_30483_30499[(1)] = (2));


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
});})(c__27212__auto___30489,out))
;
return ((function (switch__27045__auto__,c__27212__auto___30489,out){
return (function() {
var cljs$core$async$state_machine__27046__auto__ = null;
var cljs$core$async$state_machine__27046__auto____0 = (function (){
var statearr_30484 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30484[(0)] = cljs$core$async$state_machine__27046__auto__);

(statearr_30484[(1)] = (1));

return statearr_30484;
});
var cljs$core$async$state_machine__27046__auto____1 = (function (state_30467){
while(true){
var ret_value__27047__auto__ = (function (){try{while(true){
var result__27048__auto__ = switch__27045__auto__.call(null,state_30467);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27048__auto__;
}
break;
}
}catch (e30485){if((e30485 instanceof Object)){
var ex__27049__auto__ = e30485;
var statearr_30486_30500 = state_30467;
(statearr_30486_30500[(5)] = ex__27049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30467);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30501 = state_30467;
state_30467 = G__30501;
continue;
} else {
return ret_value__27047__auto__;
}
break;
}
});
cljs$core$async$state_machine__27046__auto__ = function(state_30467){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27046__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27046__auto____1.call(this,state_30467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27046__auto____0;
cljs$core$async$state_machine__27046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27046__auto____1;
return cljs$core$async$state_machine__27046__auto__;
})()
;})(switch__27045__auto__,c__27212__auto___30489,out))
})();
var state__27214__auto__ = (function (){var statearr_30487 = f__27213__auto__.call(null);
(statearr_30487[(6)] = c__27212__auto___30489);

return statearr_30487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27214__auto__);
});})(c__27212__auto___30489,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__30503 = arguments.length;
switch (G__30503) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27212__auto___30548 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27212__auto___30548,out){
return (function (){
var f__27213__auto__ = (function (){var switch__27045__auto__ = ((function (c__27212__auto___30548,out){
return (function (state_30527){
var state_val_30528 = (state_30527[(1)]);
if((state_val_30528 === (7))){
var inst_30509 = (state_30527[(7)]);
var inst_30509__$1 = (state_30527[(2)]);
var inst_30510 = (inst_30509__$1 == null);
var inst_30511 = cljs.core.not.call(null,inst_30510);
var state_30527__$1 = (function (){var statearr_30529 = state_30527;
(statearr_30529[(7)] = inst_30509__$1);

return statearr_30529;
})();
if(inst_30511){
var statearr_30530_30549 = state_30527__$1;
(statearr_30530_30549[(1)] = (8));

} else {
var statearr_30531_30550 = state_30527__$1;
(statearr_30531_30550[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (1))){
var inst_30504 = (0);
var state_30527__$1 = (function (){var statearr_30532 = state_30527;
(statearr_30532[(8)] = inst_30504);

return statearr_30532;
})();
var statearr_30533_30551 = state_30527__$1;
(statearr_30533_30551[(2)] = null);

(statearr_30533_30551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (4))){
var state_30527__$1 = state_30527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30527__$1,(7),ch);
} else {
if((state_val_30528 === (6))){
var inst_30522 = (state_30527[(2)]);
var state_30527__$1 = state_30527;
var statearr_30534_30552 = state_30527__$1;
(statearr_30534_30552[(2)] = inst_30522);

(statearr_30534_30552[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (3))){
var inst_30524 = (state_30527[(2)]);
var inst_30525 = cljs.core.async.close_BANG_.call(null,out);
var state_30527__$1 = (function (){var statearr_30535 = state_30527;
(statearr_30535[(9)] = inst_30524);

return statearr_30535;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30527__$1,inst_30525);
} else {
if((state_val_30528 === (2))){
var inst_30504 = (state_30527[(8)]);
var inst_30506 = (inst_30504 < n);
var state_30527__$1 = state_30527;
if(cljs.core.truth_(inst_30506)){
var statearr_30536_30553 = state_30527__$1;
(statearr_30536_30553[(1)] = (4));

} else {
var statearr_30537_30554 = state_30527__$1;
(statearr_30537_30554[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (11))){
var inst_30504 = (state_30527[(8)]);
var inst_30514 = (state_30527[(2)]);
var inst_30515 = (inst_30504 + (1));
var inst_30504__$1 = inst_30515;
var state_30527__$1 = (function (){var statearr_30538 = state_30527;
(statearr_30538[(8)] = inst_30504__$1);

(statearr_30538[(10)] = inst_30514);

return statearr_30538;
})();
var statearr_30539_30555 = state_30527__$1;
(statearr_30539_30555[(2)] = null);

(statearr_30539_30555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (9))){
var state_30527__$1 = state_30527;
var statearr_30540_30556 = state_30527__$1;
(statearr_30540_30556[(2)] = null);

(statearr_30540_30556[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (5))){
var state_30527__$1 = state_30527;
var statearr_30541_30557 = state_30527__$1;
(statearr_30541_30557[(2)] = null);

(statearr_30541_30557[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (10))){
var inst_30519 = (state_30527[(2)]);
var state_30527__$1 = state_30527;
var statearr_30542_30558 = state_30527__$1;
(statearr_30542_30558[(2)] = inst_30519);

(statearr_30542_30558[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (8))){
var inst_30509 = (state_30527[(7)]);
var state_30527__$1 = state_30527;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30527__$1,(11),out,inst_30509);
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
});})(c__27212__auto___30548,out))
;
return ((function (switch__27045__auto__,c__27212__auto___30548,out){
return (function() {
var cljs$core$async$state_machine__27046__auto__ = null;
var cljs$core$async$state_machine__27046__auto____0 = (function (){
var statearr_30543 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30543[(0)] = cljs$core$async$state_machine__27046__auto__);

(statearr_30543[(1)] = (1));

return statearr_30543;
});
var cljs$core$async$state_machine__27046__auto____1 = (function (state_30527){
while(true){
var ret_value__27047__auto__ = (function (){try{while(true){
var result__27048__auto__ = switch__27045__auto__.call(null,state_30527);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27048__auto__;
}
break;
}
}catch (e30544){if((e30544 instanceof Object)){
var ex__27049__auto__ = e30544;
var statearr_30545_30559 = state_30527;
(statearr_30545_30559[(5)] = ex__27049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30527);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30544;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30560 = state_30527;
state_30527 = G__30560;
continue;
} else {
return ret_value__27047__auto__;
}
break;
}
});
cljs$core$async$state_machine__27046__auto__ = function(state_30527){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27046__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27046__auto____1.call(this,state_30527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27046__auto____0;
cljs$core$async$state_machine__27046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27046__auto____1;
return cljs$core$async$state_machine__27046__auto__;
})()
;})(switch__27045__auto__,c__27212__auto___30548,out))
})();
var state__27214__auto__ = (function (){var statearr_30546 = f__27213__auto__.call(null);
(statearr_30546[(6)] = c__27212__auto___30548);

return statearr_30546;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27214__auto__);
});})(c__27212__auto___30548,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30562 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30562 = (function (f,ch,meta30563){
this.f = f;
this.ch = ch;
this.meta30563 = meta30563;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30562.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30564,meta30563__$1){
var self__ = this;
var _30564__$1 = this;
return (new cljs.core.async.t_cljs$core$async30562(self__.f,self__.ch,meta30563__$1));
});

cljs.core.async.t_cljs$core$async30562.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30564){
var self__ = this;
var _30564__$1 = this;
return self__.meta30563;
});

cljs.core.async.t_cljs$core$async30562.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30562.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30562.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30562.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30562.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30565 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30565 = (function (f,ch,meta30563,_,fn1,meta30566){
this.f = f;
this.ch = ch;
this.meta30563 = meta30563;
this._ = _;
this.fn1 = fn1;
this.meta30566 = meta30566;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30565.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30567,meta30566__$1){
var self__ = this;
var _30567__$1 = this;
return (new cljs.core.async.t_cljs$core$async30565(self__.f,self__.ch,self__.meta30563,self__._,self__.fn1,meta30566__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async30565.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30567){
var self__ = this;
var _30567__$1 = this;
return self__.meta30566;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30565.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30565.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30565.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30565.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30561_SHARP_){
return f1.call(null,(((p1__30561_SHARP_ == null))?null:self__.f.call(null,p1__30561_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async30565.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30563","meta30563",2110041480,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async30562","cljs.core.async/t_cljs$core$async30562",1799169360,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30566","meta30566",-1546795605,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30565.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30565.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30565";

cljs.core.async.t_cljs$core$async30565.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async30565");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30565.
 */
cljs.core.async.__GT_t_cljs$core$async30565 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30565(f__$1,ch__$1,meta30563__$1,___$2,fn1__$1,meta30566){
return (new cljs.core.async.t_cljs$core$async30565(f__$1,ch__$1,meta30563__$1,___$2,fn1__$1,meta30566));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async30565(self__.f,self__.ch,self__.meta30563,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4036__auto__ = ret;
if(cljs.core.truth_(and__4036__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4036__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async30562.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30562.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async30562.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30563","meta30563",2110041480,null)], null);
});

cljs.core.async.t_cljs$core$async30562.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30562.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30562";

cljs.core.async.t_cljs$core$async30562.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async30562");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30562.
 */
cljs.core.async.__GT_t_cljs$core$async30562 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30562(f__$1,ch__$1,meta30563){
return (new cljs.core.async.t_cljs$core$async30562(f__$1,ch__$1,meta30563));
});

}

return (new cljs.core.async.t_cljs$core$async30562(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30568 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30568 = (function (f,ch,meta30569){
this.f = f;
this.ch = ch;
this.meta30569 = meta30569;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30568.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30570,meta30569__$1){
var self__ = this;
var _30570__$1 = this;
return (new cljs.core.async.t_cljs$core$async30568(self__.f,self__.ch,meta30569__$1));
});

cljs.core.async.t_cljs$core$async30568.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30570){
var self__ = this;
var _30570__$1 = this;
return self__.meta30569;
});

cljs.core.async.t_cljs$core$async30568.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30568.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30568.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30568.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30568.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30568.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async30568.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30569","meta30569",738706835,null)], null);
});

cljs.core.async.t_cljs$core$async30568.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30568.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30568";

cljs.core.async.t_cljs$core$async30568.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async30568");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30568.
 */
cljs.core.async.__GT_t_cljs$core$async30568 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async30568(f__$1,ch__$1,meta30569){
return (new cljs.core.async.t_cljs$core$async30568(f__$1,ch__$1,meta30569));
});

}

return (new cljs.core.async.t_cljs$core$async30568(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30571 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30571 = (function (p,ch,meta30572){
this.p = p;
this.ch = ch;
this.meta30572 = meta30572;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30571.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30573,meta30572__$1){
var self__ = this;
var _30573__$1 = this;
return (new cljs.core.async.t_cljs$core$async30571(self__.p,self__.ch,meta30572__$1));
});

cljs.core.async.t_cljs$core$async30571.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30573){
var self__ = this;
var _30573__$1 = this;
return self__.meta30572;
});

cljs.core.async.t_cljs$core$async30571.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30571.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30571.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30571.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30571.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30571.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30571.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async30571.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30572","meta30572",-405063254,null)], null);
});

cljs.core.async.t_cljs$core$async30571.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30571.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30571";

cljs.core.async.t_cljs$core$async30571.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async30571");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30571.
 */
cljs.core.async.__GT_t_cljs$core$async30571 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async30571(p__$1,ch__$1,meta30572){
return (new cljs.core.async.t_cljs$core$async30571(p__$1,ch__$1,meta30572));
});

}

return (new cljs.core.async.t_cljs$core$async30571(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__30575 = arguments.length;
switch (G__30575) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27212__auto___30615 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27212__auto___30615,out){
return (function (){
var f__27213__auto__ = (function (){var switch__27045__auto__ = ((function (c__27212__auto___30615,out){
return (function (state_30596){
var state_val_30597 = (state_30596[(1)]);
if((state_val_30597 === (7))){
var inst_30592 = (state_30596[(2)]);
var state_30596__$1 = state_30596;
var statearr_30598_30616 = state_30596__$1;
(statearr_30598_30616[(2)] = inst_30592);

(statearr_30598_30616[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30597 === (1))){
var state_30596__$1 = state_30596;
var statearr_30599_30617 = state_30596__$1;
(statearr_30599_30617[(2)] = null);

(statearr_30599_30617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30597 === (4))){
var inst_30578 = (state_30596[(7)]);
var inst_30578__$1 = (state_30596[(2)]);
var inst_30579 = (inst_30578__$1 == null);
var state_30596__$1 = (function (){var statearr_30600 = state_30596;
(statearr_30600[(7)] = inst_30578__$1);

return statearr_30600;
})();
if(cljs.core.truth_(inst_30579)){
var statearr_30601_30618 = state_30596__$1;
(statearr_30601_30618[(1)] = (5));

} else {
var statearr_30602_30619 = state_30596__$1;
(statearr_30602_30619[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30597 === (6))){
var inst_30578 = (state_30596[(7)]);
var inst_30583 = p.call(null,inst_30578);
var state_30596__$1 = state_30596;
if(cljs.core.truth_(inst_30583)){
var statearr_30603_30620 = state_30596__$1;
(statearr_30603_30620[(1)] = (8));

} else {
var statearr_30604_30621 = state_30596__$1;
(statearr_30604_30621[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30597 === (3))){
var inst_30594 = (state_30596[(2)]);
var state_30596__$1 = state_30596;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30596__$1,inst_30594);
} else {
if((state_val_30597 === (2))){
var state_30596__$1 = state_30596;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30596__$1,(4),ch);
} else {
if((state_val_30597 === (11))){
var inst_30586 = (state_30596[(2)]);
var state_30596__$1 = state_30596;
var statearr_30605_30622 = state_30596__$1;
(statearr_30605_30622[(2)] = inst_30586);

(statearr_30605_30622[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30597 === (9))){
var state_30596__$1 = state_30596;
var statearr_30606_30623 = state_30596__$1;
(statearr_30606_30623[(2)] = null);

(statearr_30606_30623[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30597 === (5))){
var inst_30581 = cljs.core.async.close_BANG_.call(null,out);
var state_30596__$1 = state_30596;
var statearr_30607_30624 = state_30596__$1;
(statearr_30607_30624[(2)] = inst_30581);

(statearr_30607_30624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30597 === (10))){
var inst_30589 = (state_30596[(2)]);
var state_30596__$1 = (function (){var statearr_30608 = state_30596;
(statearr_30608[(8)] = inst_30589);

return statearr_30608;
})();
var statearr_30609_30625 = state_30596__$1;
(statearr_30609_30625[(2)] = null);

(statearr_30609_30625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30597 === (8))){
var inst_30578 = (state_30596[(7)]);
var state_30596__$1 = state_30596;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30596__$1,(11),out,inst_30578);
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
});})(c__27212__auto___30615,out))
;
return ((function (switch__27045__auto__,c__27212__auto___30615,out){
return (function() {
var cljs$core$async$state_machine__27046__auto__ = null;
var cljs$core$async$state_machine__27046__auto____0 = (function (){
var statearr_30610 = [null,null,null,null,null,null,null,null,null];
(statearr_30610[(0)] = cljs$core$async$state_machine__27046__auto__);

(statearr_30610[(1)] = (1));

return statearr_30610;
});
var cljs$core$async$state_machine__27046__auto____1 = (function (state_30596){
while(true){
var ret_value__27047__auto__ = (function (){try{while(true){
var result__27048__auto__ = switch__27045__auto__.call(null,state_30596);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27048__auto__;
}
break;
}
}catch (e30611){if((e30611 instanceof Object)){
var ex__27049__auto__ = e30611;
var statearr_30612_30626 = state_30596;
(statearr_30612_30626[(5)] = ex__27049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30596);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30611;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30627 = state_30596;
state_30596 = G__30627;
continue;
} else {
return ret_value__27047__auto__;
}
break;
}
});
cljs$core$async$state_machine__27046__auto__ = function(state_30596){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27046__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27046__auto____1.call(this,state_30596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27046__auto____0;
cljs$core$async$state_machine__27046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27046__auto____1;
return cljs$core$async$state_machine__27046__auto__;
})()
;})(switch__27045__auto__,c__27212__auto___30615,out))
})();
var state__27214__auto__ = (function (){var statearr_30613 = f__27213__auto__.call(null);
(statearr_30613[(6)] = c__27212__auto___30615);

return statearr_30613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27214__auto__);
});})(c__27212__auto___30615,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__30629 = arguments.length;
switch (G__30629) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__27212__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27212__auto__){
return (function (){
var f__27213__auto__ = (function (){var switch__27045__auto__ = ((function (c__27212__auto__){
return (function (state_30692){
var state_val_30693 = (state_30692[(1)]);
if((state_val_30693 === (7))){
var inst_30688 = (state_30692[(2)]);
var state_30692__$1 = state_30692;
var statearr_30694_30732 = state_30692__$1;
(statearr_30694_30732[(2)] = inst_30688);

(statearr_30694_30732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (20))){
var inst_30658 = (state_30692[(7)]);
var inst_30669 = (state_30692[(2)]);
var inst_30670 = cljs.core.next.call(null,inst_30658);
var inst_30644 = inst_30670;
var inst_30645 = null;
var inst_30646 = (0);
var inst_30647 = (0);
var state_30692__$1 = (function (){var statearr_30695 = state_30692;
(statearr_30695[(8)] = inst_30647);

(statearr_30695[(9)] = inst_30644);

(statearr_30695[(10)] = inst_30669);

(statearr_30695[(11)] = inst_30646);

(statearr_30695[(12)] = inst_30645);

return statearr_30695;
})();
var statearr_30696_30733 = state_30692__$1;
(statearr_30696_30733[(2)] = null);

(statearr_30696_30733[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (1))){
var state_30692__$1 = state_30692;
var statearr_30697_30734 = state_30692__$1;
(statearr_30697_30734[(2)] = null);

(statearr_30697_30734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (4))){
var inst_30633 = (state_30692[(13)]);
var inst_30633__$1 = (state_30692[(2)]);
var inst_30634 = (inst_30633__$1 == null);
var state_30692__$1 = (function (){var statearr_30698 = state_30692;
(statearr_30698[(13)] = inst_30633__$1);

return statearr_30698;
})();
if(cljs.core.truth_(inst_30634)){
var statearr_30699_30735 = state_30692__$1;
(statearr_30699_30735[(1)] = (5));

} else {
var statearr_30700_30736 = state_30692__$1;
(statearr_30700_30736[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (15))){
var state_30692__$1 = state_30692;
var statearr_30704_30737 = state_30692__$1;
(statearr_30704_30737[(2)] = null);

(statearr_30704_30737[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (21))){
var state_30692__$1 = state_30692;
var statearr_30705_30738 = state_30692__$1;
(statearr_30705_30738[(2)] = null);

(statearr_30705_30738[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (13))){
var inst_30647 = (state_30692[(8)]);
var inst_30644 = (state_30692[(9)]);
var inst_30646 = (state_30692[(11)]);
var inst_30645 = (state_30692[(12)]);
var inst_30654 = (state_30692[(2)]);
var inst_30655 = (inst_30647 + (1));
var tmp30701 = inst_30644;
var tmp30702 = inst_30646;
var tmp30703 = inst_30645;
var inst_30644__$1 = tmp30701;
var inst_30645__$1 = tmp30703;
var inst_30646__$1 = tmp30702;
var inst_30647__$1 = inst_30655;
var state_30692__$1 = (function (){var statearr_30706 = state_30692;
(statearr_30706[(8)] = inst_30647__$1);

(statearr_30706[(9)] = inst_30644__$1);

(statearr_30706[(14)] = inst_30654);

(statearr_30706[(11)] = inst_30646__$1);

(statearr_30706[(12)] = inst_30645__$1);

return statearr_30706;
})();
var statearr_30707_30739 = state_30692__$1;
(statearr_30707_30739[(2)] = null);

(statearr_30707_30739[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (22))){
var state_30692__$1 = state_30692;
var statearr_30708_30740 = state_30692__$1;
(statearr_30708_30740[(2)] = null);

(statearr_30708_30740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (6))){
var inst_30633 = (state_30692[(13)]);
var inst_30642 = f.call(null,inst_30633);
var inst_30643 = cljs.core.seq.call(null,inst_30642);
var inst_30644 = inst_30643;
var inst_30645 = null;
var inst_30646 = (0);
var inst_30647 = (0);
var state_30692__$1 = (function (){var statearr_30709 = state_30692;
(statearr_30709[(8)] = inst_30647);

(statearr_30709[(9)] = inst_30644);

(statearr_30709[(11)] = inst_30646);

(statearr_30709[(12)] = inst_30645);

return statearr_30709;
})();
var statearr_30710_30741 = state_30692__$1;
(statearr_30710_30741[(2)] = null);

(statearr_30710_30741[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (17))){
var inst_30658 = (state_30692[(7)]);
var inst_30662 = cljs.core.chunk_first.call(null,inst_30658);
var inst_30663 = cljs.core.chunk_rest.call(null,inst_30658);
var inst_30664 = cljs.core.count.call(null,inst_30662);
var inst_30644 = inst_30663;
var inst_30645 = inst_30662;
var inst_30646 = inst_30664;
var inst_30647 = (0);
var state_30692__$1 = (function (){var statearr_30711 = state_30692;
(statearr_30711[(8)] = inst_30647);

(statearr_30711[(9)] = inst_30644);

(statearr_30711[(11)] = inst_30646);

(statearr_30711[(12)] = inst_30645);

return statearr_30711;
})();
var statearr_30712_30742 = state_30692__$1;
(statearr_30712_30742[(2)] = null);

(statearr_30712_30742[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (3))){
var inst_30690 = (state_30692[(2)]);
var state_30692__$1 = state_30692;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30692__$1,inst_30690);
} else {
if((state_val_30693 === (12))){
var inst_30678 = (state_30692[(2)]);
var state_30692__$1 = state_30692;
var statearr_30713_30743 = state_30692__$1;
(statearr_30713_30743[(2)] = inst_30678);

(statearr_30713_30743[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (2))){
var state_30692__$1 = state_30692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30692__$1,(4),in$);
} else {
if((state_val_30693 === (23))){
var inst_30686 = (state_30692[(2)]);
var state_30692__$1 = state_30692;
var statearr_30714_30744 = state_30692__$1;
(statearr_30714_30744[(2)] = inst_30686);

(statearr_30714_30744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (19))){
var inst_30673 = (state_30692[(2)]);
var state_30692__$1 = state_30692;
var statearr_30715_30745 = state_30692__$1;
(statearr_30715_30745[(2)] = inst_30673);

(statearr_30715_30745[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (11))){
var inst_30644 = (state_30692[(9)]);
var inst_30658 = (state_30692[(7)]);
var inst_30658__$1 = cljs.core.seq.call(null,inst_30644);
var state_30692__$1 = (function (){var statearr_30716 = state_30692;
(statearr_30716[(7)] = inst_30658__$1);

return statearr_30716;
})();
if(inst_30658__$1){
var statearr_30717_30746 = state_30692__$1;
(statearr_30717_30746[(1)] = (14));

} else {
var statearr_30718_30747 = state_30692__$1;
(statearr_30718_30747[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (9))){
var inst_30680 = (state_30692[(2)]);
var inst_30681 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30692__$1 = (function (){var statearr_30719 = state_30692;
(statearr_30719[(15)] = inst_30680);

return statearr_30719;
})();
if(cljs.core.truth_(inst_30681)){
var statearr_30720_30748 = state_30692__$1;
(statearr_30720_30748[(1)] = (21));

} else {
var statearr_30721_30749 = state_30692__$1;
(statearr_30721_30749[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (5))){
var inst_30636 = cljs.core.async.close_BANG_.call(null,out);
var state_30692__$1 = state_30692;
var statearr_30722_30750 = state_30692__$1;
(statearr_30722_30750[(2)] = inst_30636);

(statearr_30722_30750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (14))){
var inst_30658 = (state_30692[(7)]);
var inst_30660 = cljs.core.chunked_seq_QMARK_.call(null,inst_30658);
var state_30692__$1 = state_30692;
if(inst_30660){
var statearr_30723_30751 = state_30692__$1;
(statearr_30723_30751[(1)] = (17));

} else {
var statearr_30724_30752 = state_30692__$1;
(statearr_30724_30752[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (16))){
var inst_30676 = (state_30692[(2)]);
var state_30692__$1 = state_30692;
var statearr_30725_30753 = state_30692__$1;
(statearr_30725_30753[(2)] = inst_30676);

(statearr_30725_30753[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (10))){
var inst_30647 = (state_30692[(8)]);
var inst_30645 = (state_30692[(12)]);
var inst_30652 = cljs.core._nth.call(null,inst_30645,inst_30647);
var state_30692__$1 = state_30692;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30692__$1,(13),out,inst_30652);
} else {
if((state_val_30693 === (18))){
var inst_30658 = (state_30692[(7)]);
var inst_30667 = cljs.core.first.call(null,inst_30658);
var state_30692__$1 = state_30692;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30692__$1,(20),out,inst_30667);
} else {
if((state_val_30693 === (8))){
var inst_30647 = (state_30692[(8)]);
var inst_30646 = (state_30692[(11)]);
var inst_30649 = (inst_30647 < inst_30646);
var inst_30650 = inst_30649;
var state_30692__$1 = state_30692;
if(cljs.core.truth_(inst_30650)){
var statearr_30726_30754 = state_30692__$1;
(statearr_30726_30754[(1)] = (10));

} else {
var statearr_30727_30755 = state_30692__$1;
(statearr_30727_30755[(1)] = (11));

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
});})(c__27212__auto__))
;
return ((function (switch__27045__auto__,c__27212__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27046__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27046__auto____0 = (function (){
var statearr_30728 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30728[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27046__auto__);

(statearr_30728[(1)] = (1));

return statearr_30728;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27046__auto____1 = (function (state_30692){
while(true){
var ret_value__27047__auto__ = (function (){try{while(true){
var result__27048__auto__ = switch__27045__auto__.call(null,state_30692);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27048__auto__;
}
break;
}
}catch (e30729){if((e30729 instanceof Object)){
var ex__27049__auto__ = e30729;
var statearr_30730_30756 = state_30692;
(statearr_30730_30756[(5)] = ex__27049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30729;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30757 = state_30692;
state_30692 = G__30757;
continue;
} else {
return ret_value__27047__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27046__auto__ = function(state_30692){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27046__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27046__auto____1.call(this,state_30692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27046__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27046__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27046__auto__;
})()
;})(switch__27045__auto__,c__27212__auto__))
})();
var state__27214__auto__ = (function (){var statearr_30731 = f__27213__auto__.call(null);
(statearr_30731[(6)] = c__27212__auto__);

return statearr_30731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27214__auto__);
});})(c__27212__auto__))
);

return c__27212__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__30759 = arguments.length;
switch (G__30759) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__30762 = arguments.length;
switch (G__30762) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__30765 = arguments.length;
switch (G__30765) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27212__auto___30812 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27212__auto___30812,out){
return (function (){
var f__27213__auto__ = (function (){var switch__27045__auto__ = ((function (c__27212__auto___30812,out){
return (function (state_30789){
var state_val_30790 = (state_30789[(1)]);
if((state_val_30790 === (7))){
var inst_30784 = (state_30789[(2)]);
var state_30789__$1 = state_30789;
var statearr_30791_30813 = state_30789__$1;
(statearr_30791_30813[(2)] = inst_30784);

(statearr_30791_30813[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30790 === (1))){
var inst_30766 = null;
var state_30789__$1 = (function (){var statearr_30792 = state_30789;
(statearr_30792[(7)] = inst_30766);

return statearr_30792;
})();
var statearr_30793_30814 = state_30789__$1;
(statearr_30793_30814[(2)] = null);

(statearr_30793_30814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30790 === (4))){
var inst_30769 = (state_30789[(8)]);
var inst_30769__$1 = (state_30789[(2)]);
var inst_30770 = (inst_30769__$1 == null);
var inst_30771 = cljs.core.not.call(null,inst_30770);
var state_30789__$1 = (function (){var statearr_30794 = state_30789;
(statearr_30794[(8)] = inst_30769__$1);

return statearr_30794;
})();
if(inst_30771){
var statearr_30795_30815 = state_30789__$1;
(statearr_30795_30815[(1)] = (5));

} else {
var statearr_30796_30816 = state_30789__$1;
(statearr_30796_30816[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30790 === (6))){
var state_30789__$1 = state_30789;
var statearr_30797_30817 = state_30789__$1;
(statearr_30797_30817[(2)] = null);

(statearr_30797_30817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30790 === (3))){
var inst_30786 = (state_30789[(2)]);
var inst_30787 = cljs.core.async.close_BANG_.call(null,out);
var state_30789__$1 = (function (){var statearr_30798 = state_30789;
(statearr_30798[(9)] = inst_30786);

return statearr_30798;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30789__$1,inst_30787);
} else {
if((state_val_30790 === (2))){
var state_30789__$1 = state_30789;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30789__$1,(4),ch);
} else {
if((state_val_30790 === (11))){
var inst_30769 = (state_30789[(8)]);
var inst_30778 = (state_30789[(2)]);
var inst_30766 = inst_30769;
var state_30789__$1 = (function (){var statearr_30799 = state_30789;
(statearr_30799[(10)] = inst_30778);

(statearr_30799[(7)] = inst_30766);

return statearr_30799;
})();
var statearr_30800_30818 = state_30789__$1;
(statearr_30800_30818[(2)] = null);

(statearr_30800_30818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30790 === (9))){
var inst_30769 = (state_30789[(8)]);
var state_30789__$1 = state_30789;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30789__$1,(11),out,inst_30769);
} else {
if((state_val_30790 === (5))){
var inst_30766 = (state_30789[(7)]);
var inst_30769 = (state_30789[(8)]);
var inst_30773 = cljs.core._EQ_.call(null,inst_30769,inst_30766);
var state_30789__$1 = state_30789;
if(inst_30773){
var statearr_30802_30819 = state_30789__$1;
(statearr_30802_30819[(1)] = (8));

} else {
var statearr_30803_30820 = state_30789__$1;
(statearr_30803_30820[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30790 === (10))){
var inst_30781 = (state_30789[(2)]);
var state_30789__$1 = state_30789;
var statearr_30804_30821 = state_30789__$1;
(statearr_30804_30821[(2)] = inst_30781);

(statearr_30804_30821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30790 === (8))){
var inst_30766 = (state_30789[(7)]);
var tmp30801 = inst_30766;
var inst_30766__$1 = tmp30801;
var state_30789__$1 = (function (){var statearr_30805 = state_30789;
(statearr_30805[(7)] = inst_30766__$1);

return statearr_30805;
})();
var statearr_30806_30822 = state_30789__$1;
(statearr_30806_30822[(2)] = null);

(statearr_30806_30822[(1)] = (2));


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
});})(c__27212__auto___30812,out))
;
return ((function (switch__27045__auto__,c__27212__auto___30812,out){
return (function() {
var cljs$core$async$state_machine__27046__auto__ = null;
var cljs$core$async$state_machine__27046__auto____0 = (function (){
var statearr_30807 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30807[(0)] = cljs$core$async$state_machine__27046__auto__);

(statearr_30807[(1)] = (1));

return statearr_30807;
});
var cljs$core$async$state_machine__27046__auto____1 = (function (state_30789){
while(true){
var ret_value__27047__auto__ = (function (){try{while(true){
var result__27048__auto__ = switch__27045__auto__.call(null,state_30789);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27048__auto__;
}
break;
}
}catch (e30808){if((e30808 instanceof Object)){
var ex__27049__auto__ = e30808;
var statearr_30809_30823 = state_30789;
(statearr_30809_30823[(5)] = ex__27049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30789);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30808;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30824 = state_30789;
state_30789 = G__30824;
continue;
} else {
return ret_value__27047__auto__;
}
break;
}
});
cljs$core$async$state_machine__27046__auto__ = function(state_30789){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27046__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27046__auto____1.call(this,state_30789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27046__auto____0;
cljs$core$async$state_machine__27046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27046__auto____1;
return cljs$core$async$state_machine__27046__auto__;
})()
;})(switch__27045__auto__,c__27212__auto___30812,out))
})();
var state__27214__auto__ = (function (){var statearr_30810 = f__27213__auto__.call(null);
(statearr_30810[(6)] = c__27212__auto___30812);

return statearr_30810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27214__auto__);
});})(c__27212__auto___30812,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__30826 = arguments.length;
switch (G__30826) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27212__auto___30892 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27212__auto___30892,out){
return (function (){
var f__27213__auto__ = (function (){var switch__27045__auto__ = ((function (c__27212__auto___30892,out){
return (function (state_30864){
var state_val_30865 = (state_30864[(1)]);
if((state_val_30865 === (7))){
var inst_30860 = (state_30864[(2)]);
var state_30864__$1 = state_30864;
var statearr_30866_30893 = state_30864__$1;
(statearr_30866_30893[(2)] = inst_30860);

(statearr_30866_30893[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30865 === (1))){
var inst_30827 = (new Array(n));
var inst_30828 = inst_30827;
var inst_30829 = (0);
var state_30864__$1 = (function (){var statearr_30867 = state_30864;
(statearr_30867[(7)] = inst_30829);

(statearr_30867[(8)] = inst_30828);

return statearr_30867;
})();
var statearr_30868_30894 = state_30864__$1;
(statearr_30868_30894[(2)] = null);

(statearr_30868_30894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30865 === (4))){
var inst_30832 = (state_30864[(9)]);
var inst_30832__$1 = (state_30864[(2)]);
var inst_30833 = (inst_30832__$1 == null);
var inst_30834 = cljs.core.not.call(null,inst_30833);
var state_30864__$1 = (function (){var statearr_30869 = state_30864;
(statearr_30869[(9)] = inst_30832__$1);

return statearr_30869;
})();
if(inst_30834){
var statearr_30870_30895 = state_30864__$1;
(statearr_30870_30895[(1)] = (5));

} else {
var statearr_30871_30896 = state_30864__$1;
(statearr_30871_30896[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30865 === (15))){
var inst_30854 = (state_30864[(2)]);
var state_30864__$1 = state_30864;
var statearr_30872_30897 = state_30864__$1;
(statearr_30872_30897[(2)] = inst_30854);

(statearr_30872_30897[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30865 === (13))){
var state_30864__$1 = state_30864;
var statearr_30873_30898 = state_30864__$1;
(statearr_30873_30898[(2)] = null);

(statearr_30873_30898[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30865 === (6))){
var inst_30829 = (state_30864[(7)]);
var inst_30850 = (inst_30829 > (0));
var state_30864__$1 = state_30864;
if(cljs.core.truth_(inst_30850)){
var statearr_30874_30899 = state_30864__$1;
(statearr_30874_30899[(1)] = (12));

} else {
var statearr_30875_30900 = state_30864__$1;
(statearr_30875_30900[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30865 === (3))){
var inst_30862 = (state_30864[(2)]);
var state_30864__$1 = state_30864;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30864__$1,inst_30862);
} else {
if((state_val_30865 === (12))){
var inst_30828 = (state_30864[(8)]);
var inst_30852 = cljs.core.vec.call(null,inst_30828);
var state_30864__$1 = state_30864;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30864__$1,(15),out,inst_30852);
} else {
if((state_val_30865 === (2))){
var state_30864__$1 = state_30864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30864__$1,(4),ch);
} else {
if((state_val_30865 === (11))){
var inst_30844 = (state_30864[(2)]);
var inst_30845 = (new Array(n));
var inst_30828 = inst_30845;
var inst_30829 = (0);
var state_30864__$1 = (function (){var statearr_30876 = state_30864;
(statearr_30876[(7)] = inst_30829);

(statearr_30876[(8)] = inst_30828);

(statearr_30876[(10)] = inst_30844);

return statearr_30876;
})();
var statearr_30877_30901 = state_30864__$1;
(statearr_30877_30901[(2)] = null);

(statearr_30877_30901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30865 === (9))){
var inst_30828 = (state_30864[(8)]);
var inst_30842 = cljs.core.vec.call(null,inst_30828);
var state_30864__$1 = state_30864;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30864__$1,(11),out,inst_30842);
} else {
if((state_val_30865 === (5))){
var inst_30837 = (state_30864[(11)]);
var inst_30829 = (state_30864[(7)]);
var inst_30828 = (state_30864[(8)]);
var inst_30832 = (state_30864[(9)]);
var inst_30836 = (inst_30828[inst_30829] = inst_30832);
var inst_30837__$1 = (inst_30829 + (1));
var inst_30838 = (inst_30837__$1 < n);
var state_30864__$1 = (function (){var statearr_30878 = state_30864;
(statearr_30878[(12)] = inst_30836);

(statearr_30878[(11)] = inst_30837__$1);

return statearr_30878;
})();
if(cljs.core.truth_(inst_30838)){
var statearr_30879_30902 = state_30864__$1;
(statearr_30879_30902[(1)] = (8));

} else {
var statearr_30880_30903 = state_30864__$1;
(statearr_30880_30903[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30865 === (14))){
var inst_30857 = (state_30864[(2)]);
var inst_30858 = cljs.core.async.close_BANG_.call(null,out);
var state_30864__$1 = (function (){var statearr_30882 = state_30864;
(statearr_30882[(13)] = inst_30857);

return statearr_30882;
})();
var statearr_30883_30904 = state_30864__$1;
(statearr_30883_30904[(2)] = inst_30858);

(statearr_30883_30904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30865 === (10))){
var inst_30848 = (state_30864[(2)]);
var state_30864__$1 = state_30864;
var statearr_30884_30905 = state_30864__$1;
(statearr_30884_30905[(2)] = inst_30848);

(statearr_30884_30905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30865 === (8))){
var inst_30837 = (state_30864[(11)]);
var inst_30828 = (state_30864[(8)]);
var tmp30881 = inst_30828;
var inst_30828__$1 = tmp30881;
var inst_30829 = inst_30837;
var state_30864__$1 = (function (){var statearr_30885 = state_30864;
(statearr_30885[(7)] = inst_30829);

(statearr_30885[(8)] = inst_30828__$1);

return statearr_30885;
})();
var statearr_30886_30906 = state_30864__$1;
(statearr_30886_30906[(2)] = null);

(statearr_30886_30906[(1)] = (2));


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
});})(c__27212__auto___30892,out))
;
return ((function (switch__27045__auto__,c__27212__auto___30892,out){
return (function() {
var cljs$core$async$state_machine__27046__auto__ = null;
var cljs$core$async$state_machine__27046__auto____0 = (function (){
var statearr_30887 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30887[(0)] = cljs$core$async$state_machine__27046__auto__);

(statearr_30887[(1)] = (1));

return statearr_30887;
});
var cljs$core$async$state_machine__27046__auto____1 = (function (state_30864){
while(true){
var ret_value__27047__auto__ = (function (){try{while(true){
var result__27048__auto__ = switch__27045__auto__.call(null,state_30864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27048__auto__;
}
break;
}
}catch (e30888){if((e30888 instanceof Object)){
var ex__27049__auto__ = e30888;
var statearr_30889_30907 = state_30864;
(statearr_30889_30907[(5)] = ex__27049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30888;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30908 = state_30864;
state_30864 = G__30908;
continue;
} else {
return ret_value__27047__auto__;
}
break;
}
});
cljs$core$async$state_machine__27046__auto__ = function(state_30864){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27046__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27046__auto____1.call(this,state_30864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27046__auto____0;
cljs$core$async$state_machine__27046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27046__auto____1;
return cljs$core$async$state_machine__27046__auto__;
})()
;})(switch__27045__auto__,c__27212__auto___30892,out))
})();
var state__27214__auto__ = (function (){var statearr_30890 = f__27213__auto__.call(null);
(statearr_30890[(6)] = c__27212__auto___30892);

return statearr_30890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27214__auto__);
});})(c__27212__auto___30892,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__30910 = arguments.length;
switch (G__30910) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27212__auto___30980 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27212__auto___30980,out){
return (function (){
var f__27213__auto__ = (function (){var switch__27045__auto__ = ((function (c__27212__auto___30980,out){
return (function (state_30952){
var state_val_30953 = (state_30952[(1)]);
if((state_val_30953 === (7))){
var inst_30948 = (state_30952[(2)]);
var state_30952__$1 = state_30952;
var statearr_30954_30981 = state_30952__$1;
(statearr_30954_30981[(2)] = inst_30948);

(statearr_30954_30981[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30953 === (1))){
var inst_30911 = [];
var inst_30912 = inst_30911;
var inst_30913 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30952__$1 = (function (){var statearr_30955 = state_30952;
(statearr_30955[(7)] = inst_30912);

(statearr_30955[(8)] = inst_30913);

return statearr_30955;
})();
var statearr_30956_30982 = state_30952__$1;
(statearr_30956_30982[(2)] = null);

(statearr_30956_30982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30953 === (4))){
var inst_30916 = (state_30952[(9)]);
var inst_30916__$1 = (state_30952[(2)]);
var inst_30917 = (inst_30916__$1 == null);
var inst_30918 = cljs.core.not.call(null,inst_30917);
var state_30952__$1 = (function (){var statearr_30957 = state_30952;
(statearr_30957[(9)] = inst_30916__$1);

return statearr_30957;
})();
if(inst_30918){
var statearr_30958_30983 = state_30952__$1;
(statearr_30958_30983[(1)] = (5));

} else {
var statearr_30959_30984 = state_30952__$1;
(statearr_30959_30984[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30953 === (15))){
var inst_30942 = (state_30952[(2)]);
var state_30952__$1 = state_30952;
var statearr_30960_30985 = state_30952__$1;
(statearr_30960_30985[(2)] = inst_30942);

(statearr_30960_30985[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30953 === (13))){
var state_30952__$1 = state_30952;
var statearr_30961_30986 = state_30952__$1;
(statearr_30961_30986[(2)] = null);

(statearr_30961_30986[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30953 === (6))){
var inst_30912 = (state_30952[(7)]);
var inst_30937 = inst_30912.length;
var inst_30938 = (inst_30937 > (0));
var state_30952__$1 = state_30952;
if(cljs.core.truth_(inst_30938)){
var statearr_30962_30987 = state_30952__$1;
(statearr_30962_30987[(1)] = (12));

} else {
var statearr_30963_30988 = state_30952__$1;
(statearr_30963_30988[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30953 === (3))){
var inst_30950 = (state_30952[(2)]);
var state_30952__$1 = state_30952;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30952__$1,inst_30950);
} else {
if((state_val_30953 === (12))){
var inst_30912 = (state_30952[(7)]);
var inst_30940 = cljs.core.vec.call(null,inst_30912);
var state_30952__$1 = state_30952;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30952__$1,(15),out,inst_30940);
} else {
if((state_val_30953 === (2))){
var state_30952__$1 = state_30952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30952__$1,(4),ch);
} else {
if((state_val_30953 === (11))){
var inst_30920 = (state_30952[(10)]);
var inst_30916 = (state_30952[(9)]);
var inst_30930 = (state_30952[(2)]);
var inst_30931 = [];
var inst_30932 = inst_30931.push(inst_30916);
var inst_30912 = inst_30931;
var inst_30913 = inst_30920;
var state_30952__$1 = (function (){var statearr_30964 = state_30952;
(statearr_30964[(11)] = inst_30930);

(statearr_30964[(7)] = inst_30912);

(statearr_30964[(8)] = inst_30913);

(statearr_30964[(12)] = inst_30932);

return statearr_30964;
})();
var statearr_30965_30989 = state_30952__$1;
(statearr_30965_30989[(2)] = null);

(statearr_30965_30989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30953 === (9))){
var inst_30912 = (state_30952[(7)]);
var inst_30928 = cljs.core.vec.call(null,inst_30912);
var state_30952__$1 = state_30952;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30952__$1,(11),out,inst_30928);
} else {
if((state_val_30953 === (5))){
var inst_30920 = (state_30952[(10)]);
var inst_30913 = (state_30952[(8)]);
var inst_30916 = (state_30952[(9)]);
var inst_30920__$1 = f.call(null,inst_30916);
var inst_30921 = cljs.core._EQ_.call(null,inst_30920__$1,inst_30913);
var inst_30922 = cljs.core.keyword_identical_QMARK_.call(null,inst_30913,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30923 = ((inst_30921) || (inst_30922));
var state_30952__$1 = (function (){var statearr_30966 = state_30952;
(statearr_30966[(10)] = inst_30920__$1);

return statearr_30966;
})();
if(cljs.core.truth_(inst_30923)){
var statearr_30967_30990 = state_30952__$1;
(statearr_30967_30990[(1)] = (8));

} else {
var statearr_30968_30991 = state_30952__$1;
(statearr_30968_30991[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30953 === (14))){
var inst_30945 = (state_30952[(2)]);
var inst_30946 = cljs.core.async.close_BANG_.call(null,out);
var state_30952__$1 = (function (){var statearr_30970 = state_30952;
(statearr_30970[(13)] = inst_30945);

return statearr_30970;
})();
var statearr_30971_30992 = state_30952__$1;
(statearr_30971_30992[(2)] = inst_30946);

(statearr_30971_30992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30953 === (10))){
var inst_30935 = (state_30952[(2)]);
var state_30952__$1 = state_30952;
var statearr_30972_30993 = state_30952__$1;
(statearr_30972_30993[(2)] = inst_30935);

(statearr_30972_30993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30953 === (8))){
var inst_30920 = (state_30952[(10)]);
var inst_30912 = (state_30952[(7)]);
var inst_30916 = (state_30952[(9)]);
var inst_30925 = inst_30912.push(inst_30916);
var tmp30969 = inst_30912;
var inst_30912__$1 = tmp30969;
var inst_30913 = inst_30920;
var state_30952__$1 = (function (){var statearr_30973 = state_30952;
(statearr_30973[(14)] = inst_30925);

(statearr_30973[(7)] = inst_30912__$1);

(statearr_30973[(8)] = inst_30913);

return statearr_30973;
})();
var statearr_30974_30994 = state_30952__$1;
(statearr_30974_30994[(2)] = null);

(statearr_30974_30994[(1)] = (2));


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
});})(c__27212__auto___30980,out))
;
return ((function (switch__27045__auto__,c__27212__auto___30980,out){
return (function() {
var cljs$core$async$state_machine__27046__auto__ = null;
var cljs$core$async$state_machine__27046__auto____0 = (function (){
var statearr_30975 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30975[(0)] = cljs$core$async$state_machine__27046__auto__);

(statearr_30975[(1)] = (1));

return statearr_30975;
});
var cljs$core$async$state_machine__27046__auto____1 = (function (state_30952){
while(true){
var ret_value__27047__auto__ = (function (){try{while(true){
var result__27048__auto__ = switch__27045__auto__.call(null,state_30952);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27048__auto__;
}
break;
}
}catch (e30976){if((e30976 instanceof Object)){
var ex__27049__auto__ = e30976;
var statearr_30977_30995 = state_30952;
(statearr_30977_30995[(5)] = ex__27049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30952);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30976;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30996 = state_30952;
state_30952 = G__30996;
continue;
} else {
return ret_value__27047__auto__;
}
break;
}
});
cljs$core$async$state_machine__27046__auto__ = function(state_30952){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27046__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27046__auto____1.call(this,state_30952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27046__auto____0;
cljs$core$async$state_machine__27046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27046__auto____1;
return cljs$core$async$state_machine__27046__auto__;
})()
;})(switch__27045__auto__,c__27212__auto___30980,out))
})();
var state__27214__auto__ = (function (){var statearr_30978 = f__27213__auto__.call(null);
(statearr_30978[(6)] = c__27212__auto___30980);

return statearr_30978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27214__auto__);
});})(c__27212__auto___30980,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1553581598604
