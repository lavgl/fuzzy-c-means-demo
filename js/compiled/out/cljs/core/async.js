// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__36043 = arguments.length;
switch (G__36043) {
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
if(typeof cljs.core.async.t_cljs$core$async36044 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36044 = (function (f,blockable,meta36045){
this.f = f;
this.blockable = blockable;
this.meta36045 = meta36045;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36044.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36046,meta36045__$1){
var self__ = this;
var _36046__$1 = this;
return (new cljs.core.async.t_cljs$core$async36044(self__.f,self__.blockable,meta36045__$1));
});

cljs.core.async.t_cljs$core$async36044.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36046){
var self__ = this;
var _36046__$1 = this;
return self__.meta36045;
});

cljs.core.async.t_cljs$core$async36044.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36044.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async36044.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async36044.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async36044.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta36045","meta36045",-1456176710,null)], null);
});

cljs.core.async.t_cljs$core$async36044.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36044.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36044";

cljs.core.async.t_cljs$core$async36044.cljs$lang$ctorPrWriter = (function (this__30719__auto__,writer__30720__auto__,opt__30721__auto__){
return cljs.core._write.call(null,writer__30720__auto__,"cljs.core.async/t_cljs$core$async36044");
});

cljs.core.async.__GT_t_cljs$core$async36044 = (function cljs$core$async$__GT_t_cljs$core$async36044(f__$1,blockable__$1,meta36045){
return (new cljs.core.async.t_cljs$core$async36044(f__$1,blockable__$1,meta36045));
});

}

return (new cljs.core.async.t_cljs$core$async36044(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
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
var G__36050 = arguments.length;
switch (G__36050) {
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
var G__36053 = arguments.length;
switch (G__36053) {
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
var G__36056 = arguments.length;
switch (G__36056) {
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
var val_36058 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_36058);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_36058,ret){
return (function (){
return fn1.call(null,val_36058);
});})(val_36058,ret))
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
var G__36060 = arguments.length;
switch (G__36060) {
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
var temp__5276__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5276__auto__)){
var ret = temp__5276__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5276__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5276__auto__)){
var retb = temp__5276__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5276__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5276__auto__))
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
var n__31091__auto___36062 = n;
var x_36063 = (0);
while(true){
if((x_36063 < n__31091__auto___36062)){
(a[x_36063] = (0));

var G__36064 = (x_36063 + (1));
x_36063 = G__36064;
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

var G__36065 = (i + (1));
i = G__36065;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async36066 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36066 = (function (flag,meta36067){
this.flag = flag;
this.meta36067 = meta36067;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36066.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_36068,meta36067__$1){
var self__ = this;
var _36068__$1 = this;
return (new cljs.core.async.t_cljs$core$async36066(self__.flag,meta36067__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async36066.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_36068){
var self__ = this;
var _36068__$1 = this;
return self__.meta36067;
});})(flag))
;

cljs.core.async.t_cljs$core$async36066.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36066.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async36066.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async36066.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async36066.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta36067","meta36067",-2067796835,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async36066.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36066.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36066";

cljs.core.async.t_cljs$core$async36066.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__30719__auto__,writer__30720__auto__,opt__30721__auto__){
return cljs.core._write.call(null,writer__30720__auto__,"cljs.core.async/t_cljs$core$async36066");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async36066 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async36066(flag__$1,meta36067){
return (new cljs.core.async.t_cljs$core$async36066(flag__$1,meta36067));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async36066(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async36069 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36069 = (function (flag,cb,meta36070){
this.flag = flag;
this.cb = cb;
this.meta36070 = meta36070;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36069.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36071,meta36070__$1){
var self__ = this;
var _36071__$1 = this;
return (new cljs.core.async.t_cljs$core$async36069(self__.flag,self__.cb,meta36070__$1));
});

cljs.core.async.t_cljs$core$async36069.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36071){
var self__ = this;
var _36071__$1 = this;
return self__.meta36070;
});

cljs.core.async.t_cljs$core$async36069.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36069.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async36069.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async36069.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async36069.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta36070","meta36070",-938625775,null)], null);
});

cljs.core.async.t_cljs$core$async36069.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36069.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36069";

cljs.core.async.t_cljs$core$async36069.cljs$lang$ctorPrWriter = (function (this__30719__auto__,writer__30720__auto__,opt__30721__auto__){
return cljs.core._write.call(null,writer__30720__auto__,"cljs.core.async/t_cljs$core$async36069");
});

cljs.core.async.__GT_t_cljs$core$async36069 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async36069(flag__$1,cb__$1,meta36070){
return (new cljs.core.async.t_cljs$core$async36069(flag__$1,cb__$1,meta36070));
});

}

return (new cljs.core.async.t_cljs$core$async36069(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__36072_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36072_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36073_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36073_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__30048__auto__ = wport;
if(cljs.core.truth_(or__30048__auto__)){
return or__30048__auto__;
} else {
return port;
}
})()], null));
} else {
var G__36074 = (i + (1));
i = G__36074;
continue;
}
} else {
return null;
}
break;
}
})();
var or__30048__auto__ = ret;
if(cljs.core.truth_(or__30048__auto__)){
return or__30048__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5278__auto__ = (function (){var and__30036__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__30036__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__30036__auto__;
}
})();
if(cljs.core.truth_(temp__5278__auto__)){
var got = temp__5278__auto__;
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
var args__31332__auto__ = [];
var len__31325__auto___36080 = arguments.length;
var i__31326__auto___36081 = (0);
while(true){
if((i__31326__auto___36081 < len__31325__auto___36080)){
args__31332__auto__.push((arguments[i__31326__auto___36081]));

var G__36082 = (i__31326__auto___36081 + (1));
i__31326__auto___36081 = G__36082;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((1) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31333__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__36077){
var map__36078 = p__36077;
var map__36078__$1 = ((((!((map__36078 == null)))?((((map__36078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36078.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36078):map__36078);
var opts = map__36078__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq36075){
var G__36076 = cljs.core.first.call(null,seq36075);
var seq36075__$1 = cljs.core.next.call(null,seq36075);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36076,seq36075__$1);
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
var G__36084 = arguments.length;
switch (G__36084) {
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
var c__35983__auto___36130 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35983__auto___36130){
return (function (){
var f__35984__auto__ = (function (){var switch__35893__auto__ = ((function (c__35983__auto___36130){
return (function (state_36108){
var state_val_36109 = (state_36108[(1)]);
if((state_val_36109 === (7))){
var inst_36104 = (state_36108[(2)]);
var state_36108__$1 = state_36108;
var statearr_36110_36131 = state_36108__$1;
(statearr_36110_36131[(2)] = inst_36104);

(statearr_36110_36131[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (1))){
var state_36108__$1 = state_36108;
var statearr_36111_36132 = state_36108__$1;
(statearr_36111_36132[(2)] = null);

(statearr_36111_36132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (4))){
var inst_36087 = (state_36108[(7)]);
var inst_36087__$1 = (state_36108[(2)]);
var inst_36088 = (inst_36087__$1 == null);
var state_36108__$1 = (function (){var statearr_36112 = state_36108;
(statearr_36112[(7)] = inst_36087__$1);

return statearr_36112;
})();
if(cljs.core.truth_(inst_36088)){
var statearr_36113_36133 = state_36108__$1;
(statearr_36113_36133[(1)] = (5));

} else {
var statearr_36114_36134 = state_36108__$1;
(statearr_36114_36134[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (13))){
var state_36108__$1 = state_36108;
var statearr_36115_36135 = state_36108__$1;
(statearr_36115_36135[(2)] = null);

(statearr_36115_36135[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (6))){
var inst_36087 = (state_36108[(7)]);
var state_36108__$1 = state_36108;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36108__$1,(11),to,inst_36087);
} else {
if((state_val_36109 === (3))){
var inst_36106 = (state_36108[(2)]);
var state_36108__$1 = state_36108;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36108__$1,inst_36106);
} else {
if((state_val_36109 === (12))){
var state_36108__$1 = state_36108;
var statearr_36116_36136 = state_36108__$1;
(statearr_36116_36136[(2)] = null);

(statearr_36116_36136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (2))){
var state_36108__$1 = state_36108;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36108__$1,(4),from);
} else {
if((state_val_36109 === (11))){
var inst_36097 = (state_36108[(2)]);
var state_36108__$1 = state_36108;
if(cljs.core.truth_(inst_36097)){
var statearr_36117_36137 = state_36108__$1;
(statearr_36117_36137[(1)] = (12));

} else {
var statearr_36118_36138 = state_36108__$1;
(statearr_36118_36138[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (9))){
var state_36108__$1 = state_36108;
var statearr_36119_36139 = state_36108__$1;
(statearr_36119_36139[(2)] = null);

(statearr_36119_36139[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (5))){
var state_36108__$1 = state_36108;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36120_36140 = state_36108__$1;
(statearr_36120_36140[(1)] = (8));

} else {
var statearr_36121_36141 = state_36108__$1;
(statearr_36121_36141[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (14))){
var inst_36102 = (state_36108[(2)]);
var state_36108__$1 = state_36108;
var statearr_36122_36142 = state_36108__$1;
(statearr_36122_36142[(2)] = inst_36102);

(statearr_36122_36142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (10))){
var inst_36094 = (state_36108[(2)]);
var state_36108__$1 = state_36108;
var statearr_36123_36143 = state_36108__$1;
(statearr_36123_36143[(2)] = inst_36094);

(statearr_36123_36143[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (8))){
var inst_36091 = cljs.core.async.close_BANG_.call(null,to);
var state_36108__$1 = state_36108;
var statearr_36124_36144 = state_36108__$1;
(statearr_36124_36144[(2)] = inst_36091);

(statearr_36124_36144[(1)] = (10));


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
});})(c__35983__auto___36130))
;
return ((function (switch__35893__auto__,c__35983__auto___36130){
return (function() {
var cljs$core$async$state_machine__35894__auto__ = null;
var cljs$core$async$state_machine__35894__auto____0 = (function (){
var statearr_36125 = [null,null,null,null,null,null,null,null];
(statearr_36125[(0)] = cljs$core$async$state_machine__35894__auto__);

(statearr_36125[(1)] = (1));

return statearr_36125;
});
var cljs$core$async$state_machine__35894__auto____1 = (function (state_36108){
while(true){
var ret_value__35895__auto__ = (function (){try{while(true){
var result__35896__auto__ = switch__35893__auto__.call(null,state_36108);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35896__auto__;
}
break;
}
}catch (e36126){if((e36126 instanceof Object)){
var ex__35897__auto__ = e36126;
var statearr_36127_36145 = state_36108;
(statearr_36127_36145[(5)] = ex__35897__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36108);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36146 = state_36108;
state_36108 = G__36146;
continue;
} else {
return ret_value__35895__auto__;
}
break;
}
});
cljs$core$async$state_machine__35894__auto__ = function(state_36108){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35894__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35894__auto____1.call(this,state_36108);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35894__auto____0;
cljs$core$async$state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35894__auto____1;
return cljs$core$async$state_machine__35894__auto__;
})()
;})(switch__35893__auto__,c__35983__auto___36130))
})();
var state__35985__auto__ = (function (){var statearr_36128 = f__35984__auto__.call(null);
(statearr_36128[(6)] = c__35983__auto___36130);

return statearr_36128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35985__auto__);
});})(c__35983__auto___36130))
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
return (function (p__36147){
var vec__36148 = p__36147;
var v = cljs.core.nth.call(null,vec__36148,(0),null);
var p = cljs.core.nth.call(null,vec__36148,(1),null);
var job = vec__36148;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__35983__auto___36319 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35983__auto___36319,res,vec__36148,v,p,job,jobs,results){
return (function (){
var f__35984__auto__ = (function (){var switch__35893__auto__ = ((function (c__35983__auto___36319,res,vec__36148,v,p,job,jobs,results){
return (function (state_36155){
var state_val_36156 = (state_36155[(1)]);
if((state_val_36156 === (1))){
var state_36155__$1 = state_36155;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36155__$1,(2),res,v);
} else {
if((state_val_36156 === (2))){
var inst_36152 = (state_36155[(2)]);
var inst_36153 = cljs.core.async.close_BANG_.call(null,res);
var state_36155__$1 = (function (){var statearr_36157 = state_36155;
(statearr_36157[(7)] = inst_36152);

return statearr_36157;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36155__$1,inst_36153);
} else {
return null;
}
}
});})(c__35983__auto___36319,res,vec__36148,v,p,job,jobs,results))
;
return ((function (switch__35893__auto__,c__35983__auto___36319,res,vec__36148,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35894__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35894__auto____0 = (function (){
var statearr_36158 = [null,null,null,null,null,null,null,null];
(statearr_36158[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35894__auto__);

(statearr_36158[(1)] = (1));

return statearr_36158;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35894__auto____1 = (function (state_36155){
while(true){
var ret_value__35895__auto__ = (function (){try{while(true){
var result__35896__auto__ = switch__35893__auto__.call(null,state_36155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35896__auto__;
}
break;
}
}catch (e36159){if((e36159 instanceof Object)){
var ex__35897__auto__ = e36159;
var statearr_36160_36320 = state_36155;
(statearr_36160_36320[(5)] = ex__35897__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36159;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36321 = state_36155;
state_36155 = G__36321;
continue;
} else {
return ret_value__35895__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35894__auto__ = function(state_36155){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35894__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35894__auto____1.call(this,state_36155);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35894__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35894__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35894__auto__;
})()
;})(switch__35893__auto__,c__35983__auto___36319,res,vec__36148,v,p,job,jobs,results))
})();
var state__35985__auto__ = (function (){var statearr_36161 = f__35984__auto__.call(null);
(statearr_36161[(6)] = c__35983__auto___36319);

return statearr_36161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35985__auto__);
});})(c__35983__auto___36319,res,vec__36148,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__36162){
var vec__36163 = p__36162;
var v = cljs.core.nth.call(null,vec__36163,(0),null);
var p = cljs.core.nth.call(null,vec__36163,(1),null);
var job = vec__36163;
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
var n__31091__auto___36322 = n;
var __36323 = (0);
while(true){
if((__36323 < n__31091__auto___36322)){
var G__36166_36324 = type;
var G__36166_36325__$1 = (((G__36166_36324 instanceof cljs.core.Keyword))?G__36166_36324.fqn:null);
switch (G__36166_36325__$1) {
case "compute":
var c__35983__auto___36327 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__36323,c__35983__auto___36327,G__36166_36324,G__36166_36325__$1,n__31091__auto___36322,jobs,results,process,async){
return (function (){
var f__35984__auto__ = (function (){var switch__35893__auto__ = ((function (__36323,c__35983__auto___36327,G__36166_36324,G__36166_36325__$1,n__31091__auto___36322,jobs,results,process,async){
return (function (state_36179){
var state_val_36180 = (state_36179[(1)]);
if((state_val_36180 === (1))){
var state_36179__$1 = state_36179;
var statearr_36181_36328 = state_36179__$1;
(statearr_36181_36328[(2)] = null);

(statearr_36181_36328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36180 === (2))){
var state_36179__$1 = state_36179;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36179__$1,(4),jobs);
} else {
if((state_val_36180 === (3))){
var inst_36177 = (state_36179[(2)]);
var state_36179__$1 = state_36179;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36179__$1,inst_36177);
} else {
if((state_val_36180 === (4))){
var inst_36169 = (state_36179[(2)]);
var inst_36170 = process.call(null,inst_36169);
var state_36179__$1 = state_36179;
if(cljs.core.truth_(inst_36170)){
var statearr_36182_36329 = state_36179__$1;
(statearr_36182_36329[(1)] = (5));

} else {
var statearr_36183_36330 = state_36179__$1;
(statearr_36183_36330[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36180 === (5))){
var state_36179__$1 = state_36179;
var statearr_36184_36331 = state_36179__$1;
(statearr_36184_36331[(2)] = null);

(statearr_36184_36331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36180 === (6))){
var state_36179__$1 = state_36179;
var statearr_36185_36332 = state_36179__$1;
(statearr_36185_36332[(2)] = null);

(statearr_36185_36332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36180 === (7))){
var inst_36175 = (state_36179[(2)]);
var state_36179__$1 = state_36179;
var statearr_36186_36333 = state_36179__$1;
(statearr_36186_36333[(2)] = inst_36175);

(statearr_36186_36333[(1)] = (3));


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
});})(__36323,c__35983__auto___36327,G__36166_36324,G__36166_36325__$1,n__31091__auto___36322,jobs,results,process,async))
;
return ((function (__36323,switch__35893__auto__,c__35983__auto___36327,G__36166_36324,G__36166_36325__$1,n__31091__auto___36322,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35894__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35894__auto____0 = (function (){
var statearr_36187 = [null,null,null,null,null,null,null];
(statearr_36187[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35894__auto__);

(statearr_36187[(1)] = (1));

return statearr_36187;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35894__auto____1 = (function (state_36179){
while(true){
var ret_value__35895__auto__ = (function (){try{while(true){
var result__35896__auto__ = switch__35893__auto__.call(null,state_36179);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35896__auto__;
}
break;
}
}catch (e36188){if((e36188 instanceof Object)){
var ex__35897__auto__ = e36188;
var statearr_36189_36334 = state_36179;
(statearr_36189_36334[(5)] = ex__35897__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36179);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36188;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36335 = state_36179;
state_36179 = G__36335;
continue;
} else {
return ret_value__35895__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35894__auto__ = function(state_36179){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35894__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35894__auto____1.call(this,state_36179);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35894__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35894__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35894__auto__;
})()
;})(__36323,switch__35893__auto__,c__35983__auto___36327,G__36166_36324,G__36166_36325__$1,n__31091__auto___36322,jobs,results,process,async))
})();
var state__35985__auto__ = (function (){var statearr_36190 = f__35984__auto__.call(null);
(statearr_36190[(6)] = c__35983__auto___36327);

return statearr_36190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35985__auto__);
});})(__36323,c__35983__auto___36327,G__36166_36324,G__36166_36325__$1,n__31091__auto___36322,jobs,results,process,async))
);


break;
case "async":
var c__35983__auto___36336 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__36323,c__35983__auto___36336,G__36166_36324,G__36166_36325__$1,n__31091__auto___36322,jobs,results,process,async){
return (function (){
var f__35984__auto__ = (function (){var switch__35893__auto__ = ((function (__36323,c__35983__auto___36336,G__36166_36324,G__36166_36325__$1,n__31091__auto___36322,jobs,results,process,async){
return (function (state_36203){
var state_val_36204 = (state_36203[(1)]);
if((state_val_36204 === (1))){
var state_36203__$1 = state_36203;
var statearr_36205_36337 = state_36203__$1;
(statearr_36205_36337[(2)] = null);

(statearr_36205_36337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36204 === (2))){
var state_36203__$1 = state_36203;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36203__$1,(4),jobs);
} else {
if((state_val_36204 === (3))){
var inst_36201 = (state_36203[(2)]);
var state_36203__$1 = state_36203;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36203__$1,inst_36201);
} else {
if((state_val_36204 === (4))){
var inst_36193 = (state_36203[(2)]);
var inst_36194 = async.call(null,inst_36193);
var state_36203__$1 = state_36203;
if(cljs.core.truth_(inst_36194)){
var statearr_36206_36338 = state_36203__$1;
(statearr_36206_36338[(1)] = (5));

} else {
var statearr_36207_36339 = state_36203__$1;
(statearr_36207_36339[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36204 === (5))){
var state_36203__$1 = state_36203;
var statearr_36208_36340 = state_36203__$1;
(statearr_36208_36340[(2)] = null);

(statearr_36208_36340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36204 === (6))){
var state_36203__$1 = state_36203;
var statearr_36209_36341 = state_36203__$1;
(statearr_36209_36341[(2)] = null);

(statearr_36209_36341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36204 === (7))){
var inst_36199 = (state_36203[(2)]);
var state_36203__$1 = state_36203;
var statearr_36210_36342 = state_36203__$1;
(statearr_36210_36342[(2)] = inst_36199);

(statearr_36210_36342[(1)] = (3));


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
});})(__36323,c__35983__auto___36336,G__36166_36324,G__36166_36325__$1,n__31091__auto___36322,jobs,results,process,async))
;
return ((function (__36323,switch__35893__auto__,c__35983__auto___36336,G__36166_36324,G__36166_36325__$1,n__31091__auto___36322,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35894__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35894__auto____0 = (function (){
var statearr_36211 = [null,null,null,null,null,null,null];
(statearr_36211[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35894__auto__);

(statearr_36211[(1)] = (1));

return statearr_36211;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35894__auto____1 = (function (state_36203){
while(true){
var ret_value__35895__auto__ = (function (){try{while(true){
var result__35896__auto__ = switch__35893__auto__.call(null,state_36203);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35896__auto__;
}
break;
}
}catch (e36212){if((e36212 instanceof Object)){
var ex__35897__auto__ = e36212;
var statearr_36213_36343 = state_36203;
(statearr_36213_36343[(5)] = ex__35897__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36203);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36212;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36344 = state_36203;
state_36203 = G__36344;
continue;
} else {
return ret_value__35895__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35894__auto__ = function(state_36203){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35894__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35894__auto____1.call(this,state_36203);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35894__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35894__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35894__auto__;
})()
;})(__36323,switch__35893__auto__,c__35983__auto___36336,G__36166_36324,G__36166_36325__$1,n__31091__auto___36322,jobs,results,process,async))
})();
var state__35985__auto__ = (function (){var statearr_36214 = f__35984__auto__.call(null);
(statearr_36214[(6)] = c__35983__auto___36336);

return statearr_36214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35985__auto__);
});})(__36323,c__35983__auto___36336,G__36166_36324,G__36166_36325__$1,n__31091__auto___36322,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36166_36325__$1)].join('')));

}

var G__36345 = (__36323 + (1));
__36323 = G__36345;
continue;
} else {
}
break;
}

var c__35983__auto___36346 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35983__auto___36346,jobs,results,process,async){
return (function (){
var f__35984__auto__ = (function (){var switch__35893__auto__ = ((function (c__35983__auto___36346,jobs,results,process,async){
return (function (state_36236){
var state_val_36237 = (state_36236[(1)]);
if((state_val_36237 === (1))){
var state_36236__$1 = state_36236;
var statearr_36238_36347 = state_36236__$1;
(statearr_36238_36347[(2)] = null);

(statearr_36238_36347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (2))){
var state_36236__$1 = state_36236;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36236__$1,(4),from);
} else {
if((state_val_36237 === (3))){
var inst_36234 = (state_36236[(2)]);
var state_36236__$1 = state_36236;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36236__$1,inst_36234);
} else {
if((state_val_36237 === (4))){
var inst_36217 = (state_36236[(7)]);
var inst_36217__$1 = (state_36236[(2)]);
var inst_36218 = (inst_36217__$1 == null);
var state_36236__$1 = (function (){var statearr_36239 = state_36236;
(statearr_36239[(7)] = inst_36217__$1);

return statearr_36239;
})();
if(cljs.core.truth_(inst_36218)){
var statearr_36240_36348 = state_36236__$1;
(statearr_36240_36348[(1)] = (5));

} else {
var statearr_36241_36349 = state_36236__$1;
(statearr_36241_36349[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (5))){
var inst_36220 = cljs.core.async.close_BANG_.call(null,jobs);
var state_36236__$1 = state_36236;
var statearr_36242_36350 = state_36236__$1;
(statearr_36242_36350[(2)] = inst_36220);

(statearr_36242_36350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (6))){
var inst_36217 = (state_36236[(7)]);
var inst_36222 = (state_36236[(8)]);
var inst_36222__$1 = cljs.core.async.chan.call(null,(1));
var inst_36223 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36224 = [inst_36217,inst_36222__$1];
var inst_36225 = (new cljs.core.PersistentVector(null,2,(5),inst_36223,inst_36224,null));
var state_36236__$1 = (function (){var statearr_36243 = state_36236;
(statearr_36243[(8)] = inst_36222__$1);

return statearr_36243;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36236__$1,(8),jobs,inst_36225);
} else {
if((state_val_36237 === (7))){
var inst_36232 = (state_36236[(2)]);
var state_36236__$1 = state_36236;
var statearr_36244_36351 = state_36236__$1;
(statearr_36244_36351[(2)] = inst_36232);

(statearr_36244_36351[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (8))){
var inst_36222 = (state_36236[(8)]);
var inst_36227 = (state_36236[(2)]);
var state_36236__$1 = (function (){var statearr_36245 = state_36236;
(statearr_36245[(9)] = inst_36227);

return statearr_36245;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36236__$1,(9),results,inst_36222);
} else {
if((state_val_36237 === (9))){
var inst_36229 = (state_36236[(2)]);
var state_36236__$1 = (function (){var statearr_36246 = state_36236;
(statearr_36246[(10)] = inst_36229);

return statearr_36246;
})();
var statearr_36247_36352 = state_36236__$1;
(statearr_36247_36352[(2)] = null);

(statearr_36247_36352[(1)] = (2));


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
});})(c__35983__auto___36346,jobs,results,process,async))
;
return ((function (switch__35893__auto__,c__35983__auto___36346,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35894__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35894__auto____0 = (function (){
var statearr_36248 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36248[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35894__auto__);

(statearr_36248[(1)] = (1));

return statearr_36248;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35894__auto____1 = (function (state_36236){
while(true){
var ret_value__35895__auto__ = (function (){try{while(true){
var result__35896__auto__ = switch__35893__auto__.call(null,state_36236);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35896__auto__;
}
break;
}
}catch (e36249){if((e36249 instanceof Object)){
var ex__35897__auto__ = e36249;
var statearr_36250_36353 = state_36236;
(statearr_36250_36353[(5)] = ex__35897__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36249;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36354 = state_36236;
state_36236 = G__36354;
continue;
} else {
return ret_value__35895__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35894__auto__ = function(state_36236){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35894__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35894__auto____1.call(this,state_36236);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35894__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35894__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35894__auto__;
})()
;})(switch__35893__auto__,c__35983__auto___36346,jobs,results,process,async))
})();
var state__35985__auto__ = (function (){var statearr_36251 = f__35984__auto__.call(null);
(statearr_36251[(6)] = c__35983__auto___36346);

return statearr_36251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35985__auto__);
});})(c__35983__auto___36346,jobs,results,process,async))
);


var c__35983__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35983__auto__,jobs,results,process,async){
return (function (){
var f__35984__auto__ = (function (){var switch__35893__auto__ = ((function (c__35983__auto__,jobs,results,process,async){
return (function (state_36289){
var state_val_36290 = (state_36289[(1)]);
if((state_val_36290 === (7))){
var inst_36285 = (state_36289[(2)]);
var state_36289__$1 = state_36289;
var statearr_36291_36355 = state_36289__$1;
(statearr_36291_36355[(2)] = inst_36285);

(statearr_36291_36355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36290 === (20))){
var state_36289__$1 = state_36289;
var statearr_36292_36356 = state_36289__$1;
(statearr_36292_36356[(2)] = null);

(statearr_36292_36356[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36290 === (1))){
var state_36289__$1 = state_36289;
var statearr_36293_36357 = state_36289__$1;
(statearr_36293_36357[(2)] = null);

(statearr_36293_36357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36290 === (4))){
var inst_36254 = (state_36289[(7)]);
var inst_36254__$1 = (state_36289[(2)]);
var inst_36255 = (inst_36254__$1 == null);
var state_36289__$1 = (function (){var statearr_36294 = state_36289;
(statearr_36294[(7)] = inst_36254__$1);

return statearr_36294;
})();
if(cljs.core.truth_(inst_36255)){
var statearr_36295_36358 = state_36289__$1;
(statearr_36295_36358[(1)] = (5));

} else {
var statearr_36296_36359 = state_36289__$1;
(statearr_36296_36359[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36290 === (15))){
var inst_36267 = (state_36289[(8)]);
var state_36289__$1 = state_36289;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36289__$1,(18),to,inst_36267);
} else {
if((state_val_36290 === (21))){
var inst_36280 = (state_36289[(2)]);
var state_36289__$1 = state_36289;
var statearr_36297_36360 = state_36289__$1;
(statearr_36297_36360[(2)] = inst_36280);

(statearr_36297_36360[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36290 === (13))){
var inst_36282 = (state_36289[(2)]);
var state_36289__$1 = (function (){var statearr_36298 = state_36289;
(statearr_36298[(9)] = inst_36282);

return statearr_36298;
})();
var statearr_36299_36361 = state_36289__$1;
(statearr_36299_36361[(2)] = null);

(statearr_36299_36361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36290 === (6))){
var inst_36254 = (state_36289[(7)]);
var state_36289__$1 = state_36289;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36289__$1,(11),inst_36254);
} else {
if((state_val_36290 === (17))){
var inst_36275 = (state_36289[(2)]);
var state_36289__$1 = state_36289;
if(cljs.core.truth_(inst_36275)){
var statearr_36300_36362 = state_36289__$1;
(statearr_36300_36362[(1)] = (19));

} else {
var statearr_36301_36363 = state_36289__$1;
(statearr_36301_36363[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36290 === (3))){
var inst_36287 = (state_36289[(2)]);
var state_36289__$1 = state_36289;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36289__$1,inst_36287);
} else {
if((state_val_36290 === (12))){
var inst_36264 = (state_36289[(10)]);
var state_36289__$1 = state_36289;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36289__$1,(14),inst_36264);
} else {
if((state_val_36290 === (2))){
var state_36289__$1 = state_36289;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36289__$1,(4),results);
} else {
if((state_val_36290 === (19))){
var state_36289__$1 = state_36289;
var statearr_36302_36364 = state_36289__$1;
(statearr_36302_36364[(2)] = null);

(statearr_36302_36364[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36290 === (11))){
var inst_36264 = (state_36289[(2)]);
var state_36289__$1 = (function (){var statearr_36303 = state_36289;
(statearr_36303[(10)] = inst_36264);

return statearr_36303;
})();
var statearr_36304_36365 = state_36289__$1;
(statearr_36304_36365[(2)] = null);

(statearr_36304_36365[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36290 === (9))){
var state_36289__$1 = state_36289;
var statearr_36305_36366 = state_36289__$1;
(statearr_36305_36366[(2)] = null);

(statearr_36305_36366[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36290 === (5))){
var state_36289__$1 = state_36289;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36306_36367 = state_36289__$1;
(statearr_36306_36367[(1)] = (8));

} else {
var statearr_36307_36368 = state_36289__$1;
(statearr_36307_36368[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36290 === (14))){
var inst_36267 = (state_36289[(8)]);
var inst_36269 = (state_36289[(11)]);
var inst_36267__$1 = (state_36289[(2)]);
var inst_36268 = (inst_36267__$1 == null);
var inst_36269__$1 = cljs.core.not.call(null,inst_36268);
var state_36289__$1 = (function (){var statearr_36308 = state_36289;
(statearr_36308[(8)] = inst_36267__$1);

(statearr_36308[(11)] = inst_36269__$1);

return statearr_36308;
})();
if(inst_36269__$1){
var statearr_36309_36369 = state_36289__$1;
(statearr_36309_36369[(1)] = (15));

} else {
var statearr_36310_36370 = state_36289__$1;
(statearr_36310_36370[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36290 === (16))){
var inst_36269 = (state_36289[(11)]);
var state_36289__$1 = state_36289;
var statearr_36311_36371 = state_36289__$1;
(statearr_36311_36371[(2)] = inst_36269);

(statearr_36311_36371[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36290 === (10))){
var inst_36261 = (state_36289[(2)]);
var state_36289__$1 = state_36289;
var statearr_36312_36372 = state_36289__$1;
(statearr_36312_36372[(2)] = inst_36261);

(statearr_36312_36372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36290 === (18))){
var inst_36272 = (state_36289[(2)]);
var state_36289__$1 = state_36289;
var statearr_36313_36373 = state_36289__$1;
(statearr_36313_36373[(2)] = inst_36272);

(statearr_36313_36373[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36290 === (8))){
var inst_36258 = cljs.core.async.close_BANG_.call(null,to);
var state_36289__$1 = state_36289;
var statearr_36314_36374 = state_36289__$1;
(statearr_36314_36374[(2)] = inst_36258);

(statearr_36314_36374[(1)] = (10));


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
});})(c__35983__auto__,jobs,results,process,async))
;
return ((function (switch__35893__auto__,c__35983__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35894__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35894__auto____0 = (function (){
var statearr_36315 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36315[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35894__auto__);

(statearr_36315[(1)] = (1));

return statearr_36315;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35894__auto____1 = (function (state_36289){
while(true){
var ret_value__35895__auto__ = (function (){try{while(true){
var result__35896__auto__ = switch__35893__auto__.call(null,state_36289);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35896__auto__;
}
break;
}
}catch (e36316){if((e36316 instanceof Object)){
var ex__35897__auto__ = e36316;
var statearr_36317_36375 = state_36289;
(statearr_36317_36375[(5)] = ex__35897__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36289);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36316;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36376 = state_36289;
state_36289 = G__36376;
continue;
} else {
return ret_value__35895__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35894__auto__ = function(state_36289){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35894__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35894__auto____1.call(this,state_36289);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35894__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35894__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35894__auto__;
})()
;})(switch__35893__auto__,c__35983__auto__,jobs,results,process,async))
})();
var state__35985__auto__ = (function (){var statearr_36318 = f__35984__auto__.call(null);
(statearr_36318[(6)] = c__35983__auto__);

return statearr_36318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35985__auto__);
});})(c__35983__auto__,jobs,results,process,async))
);

return c__35983__auto__;
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
var G__36378 = arguments.length;
switch (G__36378) {
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
var G__36381 = arguments.length;
switch (G__36381) {
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
var G__36384 = arguments.length;
switch (G__36384) {
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
var c__35983__auto___36433 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35983__auto___36433,tc,fc){
return (function (){
var f__35984__auto__ = (function (){var switch__35893__auto__ = ((function (c__35983__auto___36433,tc,fc){
return (function (state_36410){
var state_val_36411 = (state_36410[(1)]);
if((state_val_36411 === (7))){
var inst_36406 = (state_36410[(2)]);
var state_36410__$1 = state_36410;
var statearr_36412_36434 = state_36410__$1;
(statearr_36412_36434[(2)] = inst_36406);

(statearr_36412_36434[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36411 === (1))){
var state_36410__$1 = state_36410;
var statearr_36413_36435 = state_36410__$1;
(statearr_36413_36435[(2)] = null);

(statearr_36413_36435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36411 === (4))){
var inst_36387 = (state_36410[(7)]);
var inst_36387__$1 = (state_36410[(2)]);
var inst_36388 = (inst_36387__$1 == null);
var state_36410__$1 = (function (){var statearr_36414 = state_36410;
(statearr_36414[(7)] = inst_36387__$1);

return statearr_36414;
})();
if(cljs.core.truth_(inst_36388)){
var statearr_36415_36436 = state_36410__$1;
(statearr_36415_36436[(1)] = (5));

} else {
var statearr_36416_36437 = state_36410__$1;
(statearr_36416_36437[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36411 === (13))){
var state_36410__$1 = state_36410;
var statearr_36417_36438 = state_36410__$1;
(statearr_36417_36438[(2)] = null);

(statearr_36417_36438[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36411 === (6))){
var inst_36387 = (state_36410[(7)]);
var inst_36393 = p.call(null,inst_36387);
var state_36410__$1 = state_36410;
if(cljs.core.truth_(inst_36393)){
var statearr_36418_36439 = state_36410__$1;
(statearr_36418_36439[(1)] = (9));

} else {
var statearr_36419_36440 = state_36410__$1;
(statearr_36419_36440[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36411 === (3))){
var inst_36408 = (state_36410[(2)]);
var state_36410__$1 = state_36410;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36410__$1,inst_36408);
} else {
if((state_val_36411 === (12))){
var state_36410__$1 = state_36410;
var statearr_36420_36441 = state_36410__$1;
(statearr_36420_36441[(2)] = null);

(statearr_36420_36441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36411 === (2))){
var state_36410__$1 = state_36410;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36410__$1,(4),ch);
} else {
if((state_val_36411 === (11))){
var inst_36387 = (state_36410[(7)]);
var inst_36397 = (state_36410[(2)]);
var state_36410__$1 = state_36410;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36410__$1,(8),inst_36397,inst_36387);
} else {
if((state_val_36411 === (9))){
var state_36410__$1 = state_36410;
var statearr_36421_36442 = state_36410__$1;
(statearr_36421_36442[(2)] = tc);

(statearr_36421_36442[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36411 === (5))){
var inst_36390 = cljs.core.async.close_BANG_.call(null,tc);
var inst_36391 = cljs.core.async.close_BANG_.call(null,fc);
var state_36410__$1 = (function (){var statearr_36422 = state_36410;
(statearr_36422[(8)] = inst_36390);

return statearr_36422;
})();
var statearr_36423_36443 = state_36410__$1;
(statearr_36423_36443[(2)] = inst_36391);

(statearr_36423_36443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36411 === (14))){
var inst_36404 = (state_36410[(2)]);
var state_36410__$1 = state_36410;
var statearr_36424_36444 = state_36410__$1;
(statearr_36424_36444[(2)] = inst_36404);

(statearr_36424_36444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36411 === (10))){
var state_36410__$1 = state_36410;
var statearr_36425_36445 = state_36410__$1;
(statearr_36425_36445[(2)] = fc);

(statearr_36425_36445[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36411 === (8))){
var inst_36399 = (state_36410[(2)]);
var state_36410__$1 = state_36410;
if(cljs.core.truth_(inst_36399)){
var statearr_36426_36446 = state_36410__$1;
(statearr_36426_36446[(1)] = (12));

} else {
var statearr_36427_36447 = state_36410__$1;
(statearr_36427_36447[(1)] = (13));

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
});})(c__35983__auto___36433,tc,fc))
;
return ((function (switch__35893__auto__,c__35983__auto___36433,tc,fc){
return (function() {
var cljs$core$async$state_machine__35894__auto__ = null;
var cljs$core$async$state_machine__35894__auto____0 = (function (){
var statearr_36428 = [null,null,null,null,null,null,null,null,null];
(statearr_36428[(0)] = cljs$core$async$state_machine__35894__auto__);

(statearr_36428[(1)] = (1));

return statearr_36428;
});
var cljs$core$async$state_machine__35894__auto____1 = (function (state_36410){
while(true){
var ret_value__35895__auto__ = (function (){try{while(true){
var result__35896__auto__ = switch__35893__auto__.call(null,state_36410);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35896__auto__;
}
break;
}
}catch (e36429){if((e36429 instanceof Object)){
var ex__35897__auto__ = e36429;
var statearr_36430_36448 = state_36410;
(statearr_36430_36448[(5)] = ex__35897__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36410);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36429;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36449 = state_36410;
state_36410 = G__36449;
continue;
} else {
return ret_value__35895__auto__;
}
break;
}
});
cljs$core$async$state_machine__35894__auto__ = function(state_36410){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35894__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35894__auto____1.call(this,state_36410);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35894__auto____0;
cljs$core$async$state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35894__auto____1;
return cljs$core$async$state_machine__35894__auto__;
})()
;})(switch__35893__auto__,c__35983__auto___36433,tc,fc))
})();
var state__35985__auto__ = (function (){var statearr_36431 = f__35984__auto__.call(null);
(statearr_36431[(6)] = c__35983__auto___36433);

return statearr_36431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35985__auto__);
});})(c__35983__auto___36433,tc,fc))
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
var c__35983__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35983__auto__){
return (function (){
var f__35984__auto__ = (function (){var switch__35893__auto__ = ((function (c__35983__auto__){
return (function (state_36470){
var state_val_36471 = (state_36470[(1)]);
if((state_val_36471 === (7))){
var inst_36466 = (state_36470[(2)]);
var state_36470__$1 = state_36470;
var statearr_36472_36490 = state_36470__$1;
(statearr_36472_36490[(2)] = inst_36466);

(statearr_36472_36490[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36471 === (1))){
var inst_36450 = init;
var state_36470__$1 = (function (){var statearr_36473 = state_36470;
(statearr_36473[(7)] = inst_36450);

return statearr_36473;
})();
var statearr_36474_36491 = state_36470__$1;
(statearr_36474_36491[(2)] = null);

(statearr_36474_36491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36471 === (4))){
var inst_36453 = (state_36470[(8)]);
var inst_36453__$1 = (state_36470[(2)]);
var inst_36454 = (inst_36453__$1 == null);
var state_36470__$1 = (function (){var statearr_36475 = state_36470;
(statearr_36475[(8)] = inst_36453__$1);

return statearr_36475;
})();
if(cljs.core.truth_(inst_36454)){
var statearr_36476_36492 = state_36470__$1;
(statearr_36476_36492[(1)] = (5));

} else {
var statearr_36477_36493 = state_36470__$1;
(statearr_36477_36493[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36471 === (6))){
var inst_36453 = (state_36470[(8)]);
var inst_36450 = (state_36470[(7)]);
var inst_36457 = (state_36470[(9)]);
var inst_36457__$1 = f.call(null,inst_36450,inst_36453);
var inst_36458 = cljs.core.reduced_QMARK_.call(null,inst_36457__$1);
var state_36470__$1 = (function (){var statearr_36478 = state_36470;
(statearr_36478[(9)] = inst_36457__$1);

return statearr_36478;
})();
if(inst_36458){
var statearr_36479_36494 = state_36470__$1;
(statearr_36479_36494[(1)] = (8));

} else {
var statearr_36480_36495 = state_36470__$1;
(statearr_36480_36495[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36471 === (3))){
var inst_36468 = (state_36470[(2)]);
var state_36470__$1 = state_36470;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36470__$1,inst_36468);
} else {
if((state_val_36471 === (2))){
var state_36470__$1 = state_36470;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36470__$1,(4),ch);
} else {
if((state_val_36471 === (9))){
var inst_36457 = (state_36470[(9)]);
var inst_36450 = inst_36457;
var state_36470__$1 = (function (){var statearr_36481 = state_36470;
(statearr_36481[(7)] = inst_36450);

return statearr_36481;
})();
var statearr_36482_36496 = state_36470__$1;
(statearr_36482_36496[(2)] = null);

(statearr_36482_36496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36471 === (5))){
var inst_36450 = (state_36470[(7)]);
var state_36470__$1 = state_36470;
var statearr_36483_36497 = state_36470__$1;
(statearr_36483_36497[(2)] = inst_36450);

(statearr_36483_36497[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36471 === (10))){
var inst_36464 = (state_36470[(2)]);
var state_36470__$1 = state_36470;
var statearr_36484_36498 = state_36470__$1;
(statearr_36484_36498[(2)] = inst_36464);

(statearr_36484_36498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36471 === (8))){
var inst_36457 = (state_36470[(9)]);
var inst_36460 = cljs.core.deref.call(null,inst_36457);
var state_36470__$1 = state_36470;
var statearr_36485_36499 = state_36470__$1;
(statearr_36485_36499[(2)] = inst_36460);

(statearr_36485_36499[(1)] = (10));


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
});})(c__35983__auto__))
;
return ((function (switch__35893__auto__,c__35983__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__35894__auto__ = null;
var cljs$core$async$reduce_$_state_machine__35894__auto____0 = (function (){
var statearr_36486 = [null,null,null,null,null,null,null,null,null,null];
(statearr_36486[(0)] = cljs$core$async$reduce_$_state_machine__35894__auto__);

(statearr_36486[(1)] = (1));

return statearr_36486;
});
var cljs$core$async$reduce_$_state_machine__35894__auto____1 = (function (state_36470){
while(true){
var ret_value__35895__auto__ = (function (){try{while(true){
var result__35896__auto__ = switch__35893__auto__.call(null,state_36470);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35896__auto__;
}
break;
}
}catch (e36487){if((e36487 instanceof Object)){
var ex__35897__auto__ = e36487;
var statearr_36488_36500 = state_36470;
(statearr_36488_36500[(5)] = ex__35897__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36470);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36487;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36501 = state_36470;
state_36470 = G__36501;
continue;
} else {
return ret_value__35895__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__35894__auto__ = function(state_36470){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__35894__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__35894__auto____1.call(this,state_36470);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__35894__auto____0;
cljs$core$async$reduce_$_state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__35894__auto____1;
return cljs$core$async$reduce_$_state_machine__35894__auto__;
})()
;})(switch__35893__auto__,c__35983__auto__))
})();
var state__35985__auto__ = (function (){var statearr_36489 = f__35984__auto__.call(null);
(statearr_36489[(6)] = c__35983__auto__);

return statearr_36489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35985__auto__);
});})(c__35983__auto__))
);

return c__35983__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__35983__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35983__auto__,f__$1){
return (function (){
var f__35984__auto__ = (function (){var switch__35893__auto__ = ((function (c__35983__auto__,f__$1){
return (function (state_36507){
var state_val_36508 = (state_36507[(1)]);
if((state_val_36508 === (1))){
var inst_36502 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_36507__$1 = state_36507;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36507__$1,(2),inst_36502);
} else {
if((state_val_36508 === (2))){
var inst_36504 = (state_36507[(2)]);
var inst_36505 = f__$1.call(null,inst_36504);
var state_36507__$1 = state_36507;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36507__$1,inst_36505);
} else {
return null;
}
}
});})(c__35983__auto__,f__$1))
;
return ((function (switch__35893__auto__,c__35983__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__35894__auto__ = null;
var cljs$core$async$transduce_$_state_machine__35894__auto____0 = (function (){
var statearr_36509 = [null,null,null,null,null,null,null];
(statearr_36509[(0)] = cljs$core$async$transduce_$_state_machine__35894__auto__);

(statearr_36509[(1)] = (1));

return statearr_36509;
});
var cljs$core$async$transduce_$_state_machine__35894__auto____1 = (function (state_36507){
while(true){
var ret_value__35895__auto__ = (function (){try{while(true){
var result__35896__auto__ = switch__35893__auto__.call(null,state_36507);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35896__auto__;
}
break;
}
}catch (e36510){if((e36510 instanceof Object)){
var ex__35897__auto__ = e36510;
var statearr_36511_36513 = state_36507;
(statearr_36511_36513[(5)] = ex__35897__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36507);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36510;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36514 = state_36507;
state_36507 = G__36514;
continue;
} else {
return ret_value__35895__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__35894__auto__ = function(state_36507){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__35894__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__35894__auto____1.call(this,state_36507);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__35894__auto____0;
cljs$core$async$transduce_$_state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__35894__auto____1;
return cljs$core$async$transduce_$_state_machine__35894__auto__;
})()
;})(switch__35893__auto__,c__35983__auto__,f__$1))
})();
var state__35985__auto__ = (function (){var statearr_36512 = f__35984__auto__.call(null);
(statearr_36512[(6)] = c__35983__auto__);

return statearr_36512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35985__auto__);
});})(c__35983__auto__,f__$1))
);

return c__35983__auto__;
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
var G__36516 = arguments.length;
switch (G__36516) {
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
var c__35983__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35983__auto__){
return (function (){
var f__35984__auto__ = (function (){var switch__35893__auto__ = ((function (c__35983__auto__){
return (function (state_36541){
var state_val_36542 = (state_36541[(1)]);
if((state_val_36542 === (7))){
var inst_36523 = (state_36541[(2)]);
var state_36541__$1 = state_36541;
var statearr_36543_36564 = state_36541__$1;
(statearr_36543_36564[(2)] = inst_36523);

(statearr_36543_36564[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36542 === (1))){
var inst_36517 = cljs.core.seq.call(null,coll);
var inst_36518 = inst_36517;
var state_36541__$1 = (function (){var statearr_36544 = state_36541;
(statearr_36544[(7)] = inst_36518);

return statearr_36544;
})();
var statearr_36545_36565 = state_36541__$1;
(statearr_36545_36565[(2)] = null);

(statearr_36545_36565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36542 === (4))){
var inst_36518 = (state_36541[(7)]);
var inst_36521 = cljs.core.first.call(null,inst_36518);
var state_36541__$1 = state_36541;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36541__$1,(7),ch,inst_36521);
} else {
if((state_val_36542 === (13))){
var inst_36535 = (state_36541[(2)]);
var state_36541__$1 = state_36541;
var statearr_36546_36566 = state_36541__$1;
(statearr_36546_36566[(2)] = inst_36535);

(statearr_36546_36566[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36542 === (6))){
var inst_36526 = (state_36541[(2)]);
var state_36541__$1 = state_36541;
if(cljs.core.truth_(inst_36526)){
var statearr_36547_36567 = state_36541__$1;
(statearr_36547_36567[(1)] = (8));

} else {
var statearr_36548_36568 = state_36541__$1;
(statearr_36548_36568[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36542 === (3))){
var inst_36539 = (state_36541[(2)]);
var state_36541__$1 = state_36541;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36541__$1,inst_36539);
} else {
if((state_val_36542 === (12))){
var state_36541__$1 = state_36541;
var statearr_36549_36569 = state_36541__$1;
(statearr_36549_36569[(2)] = null);

(statearr_36549_36569[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36542 === (2))){
var inst_36518 = (state_36541[(7)]);
var state_36541__$1 = state_36541;
if(cljs.core.truth_(inst_36518)){
var statearr_36550_36570 = state_36541__$1;
(statearr_36550_36570[(1)] = (4));

} else {
var statearr_36551_36571 = state_36541__$1;
(statearr_36551_36571[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36542 === (11))){
var inst_36532 = cljs.core.async.close_BANG_.call(null,ch);
var state_36541__$1 = state_36541;
var statearr_36552_36572 = state_36541__$1;
(statearr_36552_36572[(2)] = inst_36532);

(statearr_36552_36572[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36542 === (9))){
var state_36541__$1 = state_36541;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36553_36573 = state_36541__$1;
(statearr_36553_36573[(1)] = (11));

} else {
var statearr_36554_36574 = state_36541__$1;
(statearr_36554_36574[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36542 === (5))){
var inst_36518 = (state_36541[(7)]);
var state_36541__$1 = state_36541;
var statearr_36555_36575 = state_36541__$1;
(statearr_36555_36575[(2)] = inst_36518);

(statearr_36555_36575[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36542 === (10))){
var inst_36537 = (state_36541[(2)]);
var state_36541__$1 = state_36541;
var statearr_36556_36576 = state_36541__$1;
(statearr_36556_36576[(2)] = inst_36537);

(statearr_36556_36576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36542 === (8))){
var inst_36518 = (state_36541[(7)]);
var inst_36528 = cljs.core.next.call(null,inst_36518);
var inst_36518__$1 = inst_36528;
var state_36541__$1 = (function (){var statearr_36557 = state_36541;
(statearr_36557[(7)] = inst_36518__$1);

return statearr_36557;
})();
var statearr_36558_36577 = state_36541__$1;
(statearr_36558_36577[(2)] = null);

(statearr_36558_36577[(1)] = (2));


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
});})(c__35983__auto__))
;
return ((function (switch__35893__auto__,c__35983__auto__){
return (function() {
var cljs$core$async$state_machine__35894__auto__ = null;
var cljs$core$async$state_machine__35894__auto____0 = (function (){
var statearr_36559 = [null,null,null,null,null,null,null,null];
(statearr_36559[(0)] = cljs$core$async$state_machine__35894__auto__);

(statearr_36559[(1)] = (1));

return statearr_36559;
});
var cljs$core$async$state_machine__35894__auto____1 = (function (state_36541){
while(true){
var ret_value__35895__auto__ = (function (){try{while(true){
var result__35896__auto__ = switch__35893__auto__.call(null,state_36541);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35896__auto__;
}
break;
}
}catch (e36560){if((e36560 instanceof Object)){
var ex__35897__auto__ = e36560;
var statearr_36561_36578 = state_36541;
(statearr_36561_36578[(5)] = ex__35897__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36541);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36560;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36579 = state_36541;
state_36541 = G__36579;
continue;
} else {
return ret_value__35895__auto__;
}
break;
}
});
cljs$core$async$state_machine__35894__auto__ = function(state_36541){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35894__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35894__auto____1.call(this,state_36541);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35894__auto____0;
cljs$core$async$state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35894__auto____1;
return cljs$core$async$state_machine__35894__auto__;
})()
;})(switch__35893__auto__,c__35983__auto__))
})();
var state__35985__auto__ = (function (){var statearr_36562 = f__35984__auto__.call(null);
(statearr_36562[(6)] = c__35983__auto__);

return statearr_36562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35985__auto__);
});})(c__35983__auto__))
);

return c__35983__auto__;
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
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__30781__auto__ = (((_ == null))?null:_);
var m__30782__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__30781__auto__)]);
if(!((m__30782__auto__ == null))){
return m__30782__auto__.call(null,_);
} else {
var m__30782__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__30782__auto____$1 == null))){
return m__30782__auto____$1.call(null,_);
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
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__30781__auto__ = (((m == null))?null:m);
var m__30782__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__30781__auto__)]);
if(!((m__30782__auto__ == null))){
return m__30782__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__30782__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__30782__auto____$1 == null))){
return m__30782__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__30781__auto__ = (((m == null))?null:m);
var m__30782__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__30781__auto__)]);
if(!((m__30782__auto__ == null))){
return m__30782__auto__.call(null,m,ch);
} else {
var m__30782__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__30782__auto____$1 == null))){
return m__30782__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__30781__auto__ = (((m == null))?null:m);
var m__30782__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__30781__auto__)]);
if(!((m__30782__auto__ == null))){
return m__30782__auto__.call(null,m);
} else {
var m__30782__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__30782__auto____$1 == null))){
return m__30782__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async36580 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36580 = (function (ch,cs,meta36581){
this.ch = ch;
this.cs = cs;
this.meta36581 = meta36581;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36580.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_36582,meta36581__$1){
var self__ = this;
var _36582__$1 = this;
return (new cljs.core.async.t_cljs$core$async36580(self__.ch,self__.cs,meta36581__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async36580.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_36582){
var self__ = this;
var _36582__$1 = this;
return self__.meta36581;
});})(cs))
;

cljs.core.async.t_cljs$core$async36580.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36580.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async36580.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36580.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async36580.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async36580.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async36580.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta36581","meta36581",1482938277,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async36580.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36580.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36580";

cljs.core.async.t_cljs$core$async36580.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__30719__auto__,writer__30720__auto__,opt__30721__auto__){
return cljs.core._write.call(null,writer__30720__auto__,"cljs.core.async/t_cljs$core$async36580");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async36580 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async36580(ch__$1,cs__$1,meta36581){
return (new cljs.core.async.t_cljs$core$async36580(ch__$1,cs__$1,meta36581));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async36580(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__35983__auto___36802 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35983__auto___36802,cs,m,dchan,dctr,done){
return (function (){
var f__35984__auto__ = (function (){var switch__35893__auto__ = ((function (c__35983__auto___36802,cs,m,dchan,dctr,done){
return (function (state_36717){
var state_val_36718 = (state_36717[(1)]);
if((state_val_36718 === (7))){
var inst_36713 = (state_36717[(2)]);
var state_36717__$1 = state_36717;
var statearr_36719_36803 = state_36717__$1;
(statearr_36719_36803[(2)] = inst_36713);

(statearr_36719_36803[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36718 === (20))){
var inst_36616 = (state_36717[(7)]);
var inst_36628 = cljs.core.first.call(null,inst_36616);
var inst_36629 = cljs.core.nth.call(null,inst_36628,(0),null);
var inst_36630 = cljs.core.nth.call(null,inst_36628,(1),null);
var state_36717__$1 = (function (){var statearr_36720 = state_36717;
(statearr_36720[(8)] = inst_36629);

return statearr_36720;
})();
if(cljs.core.truth_(inst_36630)){
var statearr_36721_36804 = state_36717__$1;
(statearr_36721_36804[(1)] = (22));

} else {
var statearr_36722_36805 = state_36717__$1;
(statearr_36722_36805[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36718 === (27))){
var inst_36585 = (state_36717[(9)]);
var inst_36658 = (state_36717[(10)]);
var inst_36665 = (state_36717[(11)]);
var inst_36660 = (state_36717[(12)]);
var inst_36665__$1 = cljs.core._nth.call(null,inst_36658,inst_36660);
var inst_36666 = cljs.core.async.put_BANG_.call(null,inst_36665__$1,inst_36585,done);
var state_36717__$1 = (function (){var statearr_36723 = state_36717;
(statearr_36723[(11)] = inst_36665__$1);

return statearr_36723;
})();
if(cljs.core.truth_(inst_36666)){
var statearr_36724_36806 = state_36717__$1;
(statearr_36724_36806[(1)] = (30));

} else {
var statearr_36725_36807 = state_36717__$1;
(statearr_36725_36807[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36718 === (1))){
var state_36717__$1 = state_36717;
var statearr_36726_36808 = state_36717__$1;
(statearr_36726_36808[(2)] = null);

(statearr_36726_36808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36718 === (24))){
var inst_36616 = (state_36717[(7)]);
var inst_36635 = (state_36717[(2)]);
var inst_36636 = cljs.core.next.call(null,inst_36616);
var inst_36594 = inst_36636;
var inst_36595 = null;
var inst_36596 = (0);
var inst_36597 = (0);
var state_36717__$1 = (function (){var statearr_36727 = state_36717;
(statearr_36727[(13)] = inst_36635);

(statearr_36727[(14)] = inst_36595);

(statearr_36727[(15)] = inst_36594);

(statearr_36727[(16)] = inst_36596);

(statearr_36727[(17)] = inst_36597);

return statearr_36727;
})();
var statearr_36728_36809 = state_36717__$1;
(statearr_36728_36809[(2)] = null);

(statearr_36728_36809[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36718 === (39))){
var state_36717__$1 = state_36717;
var statearr_36732_36810 = state_36717__$1;
(statearr_36732_36810[(2)] = null);

(statearr_36732_36810[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36718 === (4))){
var inst_36585 = (state_36717[(9)]);
var inst_36585__$1 = (state_36717[(2)]);
var inst_36586 = (inst_36585__$1 == null);
var state_36717__$1 = (function (){var statearr_36733 = state_36717;
(statearr_36733[(9)] = inst_36585__$1);

return statearr_36733;
})();
if(cljs.core.truth_(inst_36586)){
var statearr_36734_36811 = state_36717__$1;
(statearr_36734_36811[(1)] = (5));

} else {
var statearr_36735_36812 = state_36717__$1;
(statearr_36735_36812[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36718 === (15))){
var inst_36595 = (state_36717[(14)]);
var inst_36594 = (state_36717[(15)]);
var inst_36596 = (state_36717[(16)]);
var inst_36597 = (state_36717[(17)]);
var inst_36612 = (state_36717[(2)]);
var inst_36613 = (inst_36597 + (1));
var tmp36729 = inst_36595;
var tmp36730 = inst_36594;
var tmp36731 = inst_36596;
var inst_36594__$1 = tmp36730;
var inst_36595__$1 = tmp36729;
var inst_36596__$1 = tmp36731;
var inst_36597__$1 = inst_36613;
var state_36717__$1 = (function (){var statearr_36736 = state_36717;
(statearr_36736[(18)] = inst_36612);

(statearr_36736[(14)] = inst_36595__$1);

(statearr_36736[(15)] = inst_36594__$1);

(statearr_36736[(16)] = inst_36596__$1);

(statearr_36736[(17)] = inst_36597__$1);

return statearr_36736;
})();
var statearr_36737_36813 = state_36717__$1;
(statearr_36737_36813[(2)] = null);

(statearr_36737_36813[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36718 === (21))){
var inst_36639 = (state_36717[(2)]);
var state_36717__$1 = state_36717;
var statearr_36741_36814 = state_36717__$1;
(statearr_36741_36814[(2)] = inst_36639);

(statearr_36741_36814[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36718 === (31))){
var inst_36665 = (state_36717[(11)]);
var inst_36669 = done.call(null,null);
var inst_36670 = cljs.core.async.untap_STAR_.call(null,m,inst_36665);
var state_36717__$1 = (function (){var statearr_36742 = state_36717;
(statearr_36742[(19)] = inst_36669);

return statearr_36742;
})();
var statearr_36743_36815 = state_36717__$1;
(statearr_36743_36815[(2)] = inst_36670);

(statearr_36743_36815[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36718 === (32))){
var inst_36657 = (state_36717[(20)]);
var inst_36659 = (state_36717[(21)]);
var inst_36658 = (state_36717[(10)]);
var inst_36660 = (state_36717[(12)]);
var inst_36672 = (state_36717[(2)]);
var inst_36673 = (inst_36660 + (1));
var tmp36738 = inst_36657;
var tmp36739 = inst_36659;
var tmp36740 = inst_36658;
var inst_36657__$1 = tmp36738;
var inst_36658__$1 = tmp36740;
var inst_36659__$1 = tmp36739;
var inst_36660__$1 = inst_36673;
var state_36717__$1 = (function (){var statearr_36744 = state_36717;
(statearr_36744[(20)] = inst_36657__$1);

(statearr_36744[(21)] = inst_36659__$1);

(statearr_36744[(10)] = inst_36658__$1);

(statearr_36744[(12)] = inst_36660__$1);

(statearr_36744[(22)] = inst_36672);

return statearr_36744;
})();
var statearr_36745_36816 = state_36717__$1;
(statearr_36745_36816[(2)] = null);

(statearr_36745_36816[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36718 === (40))){
var inst_36685 = (state_36717[(23)]);
var inst_36689 = done.call(null,null);
var inst_36690 = cljs.core.async.untap_STAR_.call(null,m,inst_36685);
var state_36717__$1 = (function (){var statearr_36746 = state_36717;
(statearr_36746[(24)] = inst_36689);

return statearr_36746;
})();
var statearr_36747_36817 = state_36717__$1;
(statearr_36747_36817[(2)] = inst_36690);

(statearr_36747_36817[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36718 === (33))){
var inst_36676 = (state_36717[(25)]);
var inst_36678 = cljs.core.chunked_seq_QMARK_.call(null,inst_36676);
var state_36717__$1 = state_36717;
if(inst_36678){
var statearr_36748_36818 = state_36717__$1;
(statearr_36748_36818[(1)] = (36));

} else {
var statearr_36749_36819 = state_36717__$1;
(statearr_36749_36819[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36718 === (13))){
var inst_36606 = (state_36717[(26)]);
var inst_36609 = cljs.core.async.close_BANG_.call(null,inst_36606);
var state_36717__$1 = state_36717;
var statearr_36750_36820 = state_36717__$1;
(statearr_36750_36820[(2)] = inst_36609);

(statearr_36750_36820[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36718 === (22))){
var inst_36629 = (state_36717[(8)]);
var inst_36632 = cljs.core.async.close_BANG_.call(null,inst_36629);
var state_36717__$1 = state_36717;
var statearr_36751_36821 = state_36717__$1;
(statearr_36751_36821[(2)] = inst_36632);

(statearr_36751_36821[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36718 === (36))){
var inst_36676 = (state_36717[(25)]);
var inst_36680 = cljs.core.chunk_first.call(null,inst_36676);
var inst_36681 = cljs.core.chunk_rest.call(null,inst_36676);
var inst_36682 = cljs.core.count.call(null,inst_36680);
var inst_36657 = inst_36681;
var inst_36658 = inst_36680;
var inst_36659 = inst_36682;
var inst_36660 = (0);
var state_36717__$1 = (function (){var statearr_36752 = state_36717;
(statearr_36752[(20)] = inst_36657);

(statearr_36752[(21)] = inst_36659);

(statearr_36752[(10)] = inst_36658);

(statearr_36752[(12)] = inst_36660);

return statearr_36752;
})();
var statearr_36753_36822 = state_36717__$1;
(statearr_36753_36822[(2)] = null);

(statearr_36753_36822[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36718 === (41))){
var inst_36676 = (state_36717[(25)]);
var inst_36692 = (state_36717[(2)]);
var inst_36693 = cljs.core.next.call(null,inst_36676);
var inst_36657 = inst_36693;
var inst_36658 = null;
var inst_36659 = (0);
var inst_36660 = (0);
var state_36717__$1 = (function (){var statearr_36754 = state_36717;
(statearr_36754[(20)] = inst_36657);

(statearr_36754[(21)] = inst_36659);

(statearr_36754[(27)] = inst_36692);

(statearr_36754[(10)] = inst_36658);

(statearr_36754[(12)] = inst_36660);

return statearr_36754;
})();
var statearr_36755_36823 = state_36717__$1;
(statearr_36755_36823[(2)] = null);

(statearr_36755_36823[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36718 === (43))){
var state_36717__$1 = state_36717;
var statearr_36756_36824 = state_36717__$1;
(statearr_36756_36824[(2)] = null);

(statearr_36756_36824[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36718 === (29))){
var inst_36701 = (state_36717[(2)]);
var state_36717__$1 = state_36717;
var statearr_36757_36825 = state_36717__$1;
(statearr_36757_36825[(2)] = inst_36701);

(statearr_36757_36825[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36718 === (44))){
var inst_36710 = (state_36717[(2)]);
var state_36717__$1 = (function (){var statearr_36758 = state_36717;
(statearr_36758[(28)] = inst_36710);

return statearr_36758;
})();
var statearr_36759_36826 = state_36717__$1;
(statearr_36759_36826[(2)] = null);

(statearr_36759_36826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36718 === (6))){
var inst_36649 = (state_36717[(29)]);
var inst_36648 = cljs.core.deref.call(null,cs);
var inst_36649__$1 = cljs.core.keys.call(null,inst_36648);
var inst_36650 = cljs.core.count.call(null,inst_36649__$1);
var inst_36651 = cljs.core.reset_BANG_.call(null,dctr,inst_36650);
var inst_36656 = cljs.core.seq.call(null,inst_36649__$1);
var inst_36657 = inst_36656;
var inst_36658 = null;
var inst_36659 = (0);
var inst_36660 = (0);
var state_36717__$1 = (function (){var statearr_36760 = state_36717;
(statearr_36760[(20)] = inst_36657);

(statearr_36760[(29)] = inst_36649__$1);

(statearr_36760[(21)] = inst_36659);

(statearr_36760[(30)] = inst_36651);

(statearr_36760[(10)] = inst_36658);

(statearr_36760[(12)] = inst_36660);

return statearr_36760;
})();
var statearr_36761_36827 = state_36717__$1;
(statearr_36761_36827[(2)] = null);

(statearr_36761_36827[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36718 === (28))){
var inst_36657 = (state_36717[(20)]);
var inst_36676 = (state_36717[(25)]);
var inst_36676__$1 = cljs.core.seq.call(null,inst_36657);
var state_36717__$1 = (function (){var statearr_36762 = state_36717;
(statearr_36762[(25)] = inst_36676__$1);

return statearr_36762;
})();
if(inst_36676__$1){
var statearr_36763_36828 = state_36717__$1;
(statearr_36763_36828[(1)] = (33));

} else {
var statearr_36764_36829 = state_36717__$1;
(statearr_36764_36829[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36718 === (25))){
var inst_36659 = (state_36717[(21)]);
var inst_36660 = (state_36717[(12)]);
var inst_36662 = (inst_36660 < inst_36659);
var inst_36663 = inst_36662;
var state_36717__$1 = state_36717;
if(cljs.core.truth_(inst_36663)){
var statearr_36765_36830 = state_36717__$1;
(statearr_36765_36830[(1)] = (27));

} else {
var statearr_36766_36831 = state_36717__$1;
(statearr_36766_36831[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36718 === (34))){
var state_36717__$1 = state_36717;
var statearr_36767_36832 = state_36717__$1;
(statearr_36767_36832[(2)] = null);

(statearr_36767_36832[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36718 === (17))){
var state_36717__$1 = state_36717;
var statearr_36768_36833 = state_36717__$1;
(statearr_36768_36833[(2)] = null);

(statearr_36768_36833[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36718 === (3))){
var inst_36715 = (state_36717[(2)]);
var state_36717__$1 = state_36717;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36717__$1,inst_36715);
} else {
if((state_val_36718 === (12))){
var inst_36644 = (state_36717[(2)]);
var state_36717__$1 = state_36717;
var statearr_36769_36834 = state_36717__$1;
(statearr_36769_36834[(2)] = inst_36644);

(statearr_36769_36834[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36718 === (2))){
var state_36717__$1 = state_36717;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36717__$1,(4),ch);
} else {
if((state_val_36718 === (23))){
var state_36717__$1 = state_36717;
var statearr_36770_36835 = state_36717__$1;
(statearr_36770_36835[(2)] = null);

(statearr_36770_36835[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36718 === (35))){
var inst_36699 = (state_36717[(2)]);
var state_36717__$1 = state_36717;
var statearr_36771_36836 = state_36717__$1;
(statearr_36771_36836[(2)] = inst_36699);

(statearr_36771_36836[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36718 === (19))){
var inst_36616 = (state_36717[(7)]);
var inst_36620 = cljs.core.chunk_first.call(null,inst_36616);
var inst_36621 = cljs.core.chunk_rest.call(null,inst_36616);
var inst_36622 = cljs.core.count.call(null,inst_36620);
var inst_36594 = inst_36621;
var inst_36595 = inst_36620;
var inst_36596 = inst_36622;
var inst_36597 = (0);
var state_36717__$1 = (function (){var statearr_36772 = state_36717;
(statearr_36772[(14)] = inst_36595);

(statearr_36772[(15)] = inst_36594);

(statearr_36772[(16)] = inst_36596);

(statearr_36772[(17)] = inst_36597);

return statearr_36772;
})();
var statearr_36773_36837 = state_36717__$1;
(statearr_36773_36837[(2)] = null);

(statearr_36773_36837[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36718 === (11))){
var inst_36616 = (state_36717[(7)]);
var inst_36594 = (state_36717[(15)]);
var inst_36616__$1 = cljs.core.seq.call(null,inst_36594);
var state_36717__$1 = (function (){var statearr_36774 = state_36717;
(statearr_36774[(7)] = inst_36616__$1);

return statearr_36774;
})();
if(inst_36616__$1){
var statearr_36775_36838 = state_36717__$1;
(statearr_36775_36838[(1)] = (16));

} else {
var statearr_36776_36839 = state_36717__$1;
(statearr_36776_36839[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36718 === (9))){
var inst_36646 = (state_36717[(2)]);
var state_36717__$1 = state_36717;
var statearr_36777_36840 = state_36717__$1;
(statearr_36777_36840[(2)] = inst_36646);

(statearr_36777_36840[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36718 === (5))){
var inst_36592 = cljs.core.deref.call(null,cs);
var inst_36593 = cljs.core.seq.call(null,inst_36592);
var inst_36594 = inst_36593;
var inst_36595 = null;
var inst_36596 = (0);
var inst_36597 = (0);
var state_36717__$1 = (function (){var statearr_36778 = state_36717;
(statearr_36778[(14)] = inst_36595);

(statearr_36778[(15)] = inst_36594);

(statearr_36778[(16)] = inst_36596);

(statearr_36778[(17)] = inst_36597);

return statearr_36778;
})();
var statearr_36779_36841 = state_36717__$1;
(statearr_36779_36841[(2)] = null);

(statearr_36779_36841[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36718 === (14))){
var state_36717__$1 = state_36717;
var statearr_36780_36842 = state_36717__$1;
(statearr_36780_36842[(2)] = null);

(statearr_36780_36842[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36718 === (45))){
var inst_36707 = (state_36717[(2)]);
var state_36717__$1 = state_36717;
var statearr_36781_36843 = state_36717__$1;
(statearr_36781_36843[(2)] = inst_36707);

(statearr_36781_36843[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36718 === (26))){
var inst_36649 = (state_36717[(29)]);
var inst_36703 = (state_36717[(2)]);
var inst_36704 = cljs.core.seq.call(null,inst_36649);
var state_36717__$1 = (function (){var statearr_36782 = state_36717;
(statearr_36782[(31)] = inst_36703);

return statearr_36782;
})();
if(inst_36704){
var statearr_36783_36844 = state_36717__$1;
(statearr_36783_36844[(1)] = (42));

} else {
var statearr_36784_36845 = state_36717__$1;
(statearr_36784_36845[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36718 === (16))){
var inst_36616 = (state_36717[(7)]);
var inst_36618 = cljs.core.chunked_seq_QMARK_.call(null,inst_36616);
var state_36717__$1 = state_36717;
if(inst_36618){
var statearr_36785_36846 = state_36717__$1;
(statearr_36785_36846[(1)] = (19));

} else {
var statearr_36786_36847 = state_36717__$1;
(statearr_36786_36847[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36718 === (38))){
var inst_36696 = (state_36717[(2)]);
var state_36717__$1 = state_36717;
var statearr_36787_36848 = state_36717__$1;
(statearr_36787_36848[(2)] = inst_36696);

(statearr_36787_36848[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36718 === (30))){
var state_36717__$1 = state_36717;
var statearr_36788_36849 = state_36717__$1;
(statearr_36788_36849[(2)] = null);

(statearr_36788_36849[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36718 === (10))){
var inst_36595 = (state_36717[(14)]);
var inst_36597 = (state_36717[(17)]);
var inst_36605 = cljs.core._nth.call(null,inst_36595,inst_36597);
var inst_36606 = cljs.core.nth.call(null,inst_36605,(0),null);
var inst_36607 = cljs.core.nth.call(null,inst_36605,(1),null);
var state_36717__$1 = (function (){var statearr_36789 = state_36717;
(statearr_36789[(26)] = inst_36606);

return statearr_36789;
})();
if(cljs.core.truth_(inst_36607)){
var statearr_36790_36850 = state_36717__$1;
(statearr_36790_36850[(1)] = (13));

} else {
var statearr_36791_36851 = state_36717__$1;
(statearr_36791_36851[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36718 === (18))){
var inst_36642 = (state_36717[(2)]);
var state_36717__$1 = state_36717;
var statearr_36792_36852 = state_36717__$1;
(statearr_36792_36852[(2)] = inst_36642);

(statearr_36792_36852[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36718 === (42))){
var state_36717__$1 = state_36717;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36717__$1,(45),dchan);
} else {
if((state_val_36718 === (37))){
var inst_36676 = (state_36717[(25)]);
var inst_36585 = (state_36717[(9)]);
var inst_36685 = (state_36717[(23)]);
var inst_36685__$1 = cljs.core.first.call(null,inst_36676);
var inst_36686 = cljs.core.async.put_BANG_.call(null,inst_36685__$1,inst_36585,done);
var state_36717__$1 = (function (){var statearr_36793 = state_36717;
(statearr_36793[(23)] = inst_36685__$1);

return statearr_36793;
})();
if(cljs.core.truth_(inst_36686)){
var statearr_36794_36853 = state_36717__$1;
(statearr_36794_36853[(1)] = (39));

} else {
var statearr_36795_36854 = state_36717__$1;
(statearr_36795_36854[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36718 === (8))){
var inst_36596 = (state_36717[(16)]);
var inst_36597 = (state_36717[(17)]);
var inst_36599 = (inst_36597 < inst_36596);
var inst_36600 = inst_36599;
var state_36717__$1 = state_36717;
if(cljs.core.truth_(inst_36600)){
var statearr_36796_36855 = state_36717__$1;
(statearr_36796_36855[(1)] = (10));

} else {
var statearr_36797_36856 = state_36717__$1;
(statearr_36797_36856[(1)] = (11));

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
});})(c__35983__auto___36802,cs,m,dchan,dctr,done))
;
return ((function (switch__35893__auto__,c__35983__auto___36802,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__35894__auto__ = null;
var cljs$core$async$mult_$_state_machine__35894__auto____0 = (function (){
var statearr_36798 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36798[(0)] = cljs$core$async$mult_$_state_machine__35894__auto__);

(statearr_36798[(1)] = (1));

return statearr_36798;
});
var cljs$core$async$mult_$_state_machine__35894__auto____1 = (function (state_36717){
while(true){
var ret_value__35895__auto__ = (function (){try{while(true){
var result__35896__auto__ = switch__35893__auto__.call(null,state_36717);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35896__auto__;
}
break;
}
}catch (e36799){if((e36799 instanceof Object)){
var ex__35897__auto__ = e36799;
var statearr_36800_36857 = state_36717;
(statearr_36800_36857[(5)] = ex__35897__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36717);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36799;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36858 = state_36717;
state_36717 = G__36858;
continue;
} else {
return ret_value__35895__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__35894__auto__ = function(state_36717){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__35894__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__35894__auto____1.call(this,state_36717);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__35894__auto____0;
cljs$core$async$mult_$_state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__35894__auto____1;
return cljs$core$async$mult_$_state_machine__35894__auto__;
})()
;})(switch__35893__auto__,c__35983__auto___36802,cs,m,dchan,dctr,done))
})();
var state__35985__auto__ = (function (){var statearr_36801 = f__35984__auto__.call(null);
(statearr_36801[(6)] = c__35983__auto___36802);

return statearr_36801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35985__auto__);
});})(c__35983__auto___36802,cs,m,dchan,dctr,done))
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
var G__36860 = arguments.length;
switch (G__36860) {
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
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__30781__auto__ = (((m == null))?null:m);
var m__30782__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__30781__auto__)]);
if(!((m__30782__auto__ == null))){
return m__30782__auto__.call(null,m,ch);
} else {
var m__30782__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__30782__auto____$1 == null))){
return m__30782__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__30781__auto__ = (((m == null))?null:m);
var m__30782__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__30781__auto__)]);
if(!((m__30782__auto__ == null))){
return m__30782__auto__.call(null,m,ch);
} else {
var m__30782__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__30782__auto____$1 == null))){
return m__30782__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__30781__auto__ = (((m == null))?null:m);
var m__30782__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__30781__auto__)]);
if(!((m__30782__auto__ == null))){
return m__30782__auto__.call(null,m);
} else {
var m__30782__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__30782__auto____$1 == null))){
return m__30782__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__30781__auto__ = (((m == null))?null:m);
var m__30782__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__30781__auto__)]);
if(!((m__30782__auto__ == null))){
return m__30782__auto__.call(null,m,state_map);
} else {
var m__30782__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__30782__auto____$1 == null))){
return m__30782__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__30781__auto__ = (((m == null))?null:m);
var m__30782__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__30781__auto__)]);
if(!((m__30782__auto__ == null))){
return m__30782__auto__.call(null,m,mode);
} else {
var m__30782__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__30782__auto____$1 == null))){
return m__30782__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__31332__auto__ = [];
var len__31325__auto___36872 = arguments.length;
var i__31326__auto___36873 = (0);
while(true){
if((i__31326__auto___36873 < len__31325__auto___36872)){
args__31332__auto__.push((arguments[i__31326__auto___36873]));

var G__36874 = (i__31326__auto___36873 + (1));
i__31326__auto___36873 = G__36874;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((3) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__31333__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__36866){
var map__36867 = p__36866;
var map__36867__$1 = ((((!((map__36867 == null)))?((((map__36867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36867.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36867):map__36867);
var opts = map__36867__$1;
var statearr_36869_36875 = state;
(statearr_36869_36875[(1)] = cont_block);


var temp__5278__auto__ = cljs.core.async.do_alts.call(null,((function (map__36867,map__36867__$1,opts){
return (function (val){
var statearr_36870_36876 = state;
(statearr_36870_36876[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__36867,map__36867__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5278__auto__)){
var cb = temp__5278__auto__;
var statearr_36871_36877 = state;
(statearr_36871_36877[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq36862){
var G__36863 = cljs.core.first.call(null,seq36862);
var seq36862__$1 = cljs.core.next.call(null,seq36862);
var G__36864 = cljs.core.first.call(null,seq36862__$1);
var seq36862__$2 = cljs.core.next.call(null,seq36862__$1);
var G__36865 = cljs.core.first.call(null,seq36862__$2);
var seq36862__$3 = cljs.core.next.call(null,seq36862__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36863,G__36864,G__36865,seq36862__$3);
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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async36878 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36878 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta36879){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta36879 = meta36879;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36878.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36880,meta36879__$1){
var self__ = this;
var _36880__$1 = this;
return (new cljs.core.async.t_cljs$core$async36878(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta36879__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36878.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36880){
var self__ = this;
var _36880__$1 = this;
return self__.meta36879;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36878.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36878.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36878.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36878.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36878.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36878.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36878.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36878.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async36878.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta36879","meta36879",1576118045,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36878.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36878.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36878";

cljs.core.async.t_cljs$core$async36878.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__30719__auto__,writer__30720__auto__,opt__30721__auto__){
return cljs.core._write.call(null,writer__30720__auto__,"cljs.core.async/t_cljs$core$async36878");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async36878 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async36878(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta36879){
return (new cljs.core.async.t_cljs$core$async36878(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta36879));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async36878(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35983__auto___37042 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35983__auto___37042,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__35984__auto__ = (function (){var switch__35893__auto__ = ((function (c__35983__auto___37042,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_36982){
var state_val_36983 = (state_36982[(1)]);
if((state_val_36983 === (7))){
var inst_36897 = (state_36982[(2)]);
var state_36982__$1 = state_36982;
var statearr_36984_37043 = state_36982__$1;
(statearr_36984_37043[(2)] = inst_36897);

(statearr_36984_37043[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36983 === (20))){
var inst_36909 = (state_36982[(7)]);
var state_36982__$1 = state_36982;
var statearr_36985_37044 = state_36982__$1;
(statearr_36985_37044[(2)] = inst_36909);

(statearr_36985_37044[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36983 === (27))){
var state_36982__$1 = state_36982;
var statearr_36986_37045 = state_36982__$1;
(statearr_36986_37045[(2)] = null);

(statearr_36986_37045[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36983 === (1))){
var inst_36884 = (state_36982[(8)]);
var inst_36884__$1 = calc_state.call(null);
var inst_36886 = (inst_36884__$1 == null);
var inst_36887 = cljs.core.not.call(null,inst_36886);
var state_36982__$1 = (function (){var statearr_36987 = state_36982;
(statearr_36987[(8)] = inst_36884__$1);

return statearr_36987;
})();
if(inst_36887){
var statearr_36988_37046 = state_36982__$1;
(statearr_36988_37046[(1)] = (2));

} else {
var statearr_36989_37047 = state_36982__$1;
(statearr_36989_37047[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36983 === (24))){
var inst_36942 = (state_36982[(9)]);
var inst_36956 = (state_36982[(10)]);
var inst_36933 = (state_36982[(11)]);
var inst_36956__$1 = inst_36933.call(null,inst_36942);
var state_36982__$1 = (function (){var statearr_36990 = state_36982;
(statearr_36990[(10)] = inst_36956__$1);

return statearr_36990;
})();
if(cljs.core.truth_(inst_36956__$1)){
var statearr_36991_37048 = state_36982__$1;
(statearr_36991_37048[(1)] = (29));

} else {
var statearr_36992_37049 = state_36982__$1;
(statearr_36992_37049[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36983 === (4))){
var inst_36900 = (state_36982[(2)]);
var state_36982__$1 = state_36982;
if(cljs.core.truth_(inst_36900)){
var statearr_36993_37050 = state_36982__$1;
(statearr_36993_37050[(1)] = (8));

} else {
var statearr_36994_37051 = state_36982__$1;
(statearr_36994_37051[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36983 === (15))){
var inst_36927 = (state_36982[(2)]);
var state_36982__$1 = state_36982;
if(cljs.core.truth_(inst_36927)){
var statearr_36995_37052 = state_36982__$1;
(statearr_36995_37052[(1)] = (19));

} else {
var statearr_36996_37053 = state_36982__$1;
(statearr_36996_37053[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36983 === (21))){
var inst_36932 = (state_36982[(12)]);
var inst_36932__$1 = (state_36982[(2)]);
var inst_36933 = cljs.core.get.call(null,inst_36932__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36934 = cljs.core.get.call(null,inst_36932__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36935 = cljs.core.get.call(null,inst_36932__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_36982__$1 = (function (){var statearr_36997 = state_36982;
(statearr_36997[(12)] = inst_36932__$1);

(statearr_36997[(13)] = inst_36934);

(statearr_36997[(11)] = inst_36933);

return statearr_36997;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_36982__$1,(22),inst_36935);
} else {
if((state_val_36983 === (31))){
var inst_36964 = (state_36982[(2)]);
var state_36982__$1 = state_36982;
if(cljs.core.truth_(inst_36964)){
var statearr_36998_37054 = state_36982__$1;
(statearr_36998_37054[(1)] = (32));

} else {
var statearr_36999_37055 = state_36982__$1;
(statearr_36999_37055[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36983 === (32))){
var inst_36941 = (state_36982[(14)]);
var state_36982__$1 = state_36982;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36982__$1,(35),out,inst_36941);
} else {
if((state_val_36983 === (33))){
var inst_36932 = (state_36982[(12)]);
var inst_36909 = inst_36932;
var state_36982__$1 = (function (){var statearr_37000 = state_36982;
(statearr_37000[(7)] = inst_36909);

return statearr_37000;
})();
var statearr_37001_37056 = state_36982__$1;
(statearr_37001_37056[(2)] = null);

(statearr_37001_37056[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36983 === (13))){
var inst_36909 = (state_36982[(7)]);
var inst_36916 = inst_36909.cljs$lang$protocol_mask$partition0$;
var inst_36917 = (inst_36916 & (64));
var inst_36918 = inst_36909.cljs$core$ISeq$;
var inst_36919 = (cljs.core.PROTOCOL_SENTINEL === inst_36918);
var inst_36920 = (inst_36917) || (inst_36919);
var state_36982__$1 = state_36982;
if(cljs.core.truth_(inst_36920)){
var statearr_37002_37057 = state_36982__$1;
(statearr_37002_37057[(1)] = (16));

} else {
var statearr_37003_37058 = state_36982__$1;
(statearr_37003_37058[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36983 === (22))){
var inst_36941 = (state_36982[(14)]);
var inst_36942 = (state_36982[(9)]);
var inst_36940 = (state_36982[(2)]);
var inst_36941__$1 = cljs.core.nth.call(null,inst_36940,(0),null);
var inst_36942__$1 = cljs.core.nth.call(null,inst_36940,(1),null);
var inst_36943 = (inst_36941__$1 == null);
var inst_36944 = cljs.core._EQ_.call(null,inst_36942__$1,change);
var inst_36945 = (inst_36943) || (inst_36944);
var state_36982__$1 = (function (){var statearr_37004 = state_36982;
(statearr_37004[(14)] = inst_36941__$1);

(statearr_37004[(9)] = inst_36942__$1);

return statearr_37004;
})();
if(cljs.core.truth_(inst_36945)){
var statearr_37005_37059 = state_36982__$1;
(statearr_37005_37059[(1)] = (23));

} else {
var statearr_37006_37060 = state_36982__$1;
(statearr_37006_37060[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36983 === (36))){
var inst_36932 = (state_36982[(12)]);
var inst_36909 = inst_36932;
var state_36982__$1 = (function (){var statearr_37007 = state_36982;
(statearr_37007[(7)] = inst_36909);

return statearr_37007;
})();
var statearr_37008_37061 = state_36982__$1;
(statearr_37008_37061[(2)] = null);

(statearr_37008_37061[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36983 === (29))){
var inst_36956 = (state_36982[(10)]);
var state_36982__$1 = state_36982;
var statearr_37009_37062 = state_36982__$1;
(statearr_37009_37062[(2)] = inst_36956);

(statearr_37009_37062[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36983 === (6))){
var state_36982__$1 = state_36982;
var statearr_37010_37063 = state_36982__$1;
(statearr_37010_37063[(2)] = false);

(statearr_37010_37063[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36983 === (28))){
var inst_36952 = (state_36982[(2)]);
var inst_36953 = calc_state.call(null);
var inst_36909 = inst_36953;
var state_36982__$1 = (function (){var statearr_37011 = state_36982;
(statearr_37011[(7)] = inst_36909);

(statearr_37011[(15)] = inst_36952);

return statearr_37011;
})();
var statearr_37012_37064 = state_36982__$1;
(statearr_37012_37064[(2)] = null);

(statearr_37012_37064[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36983 === (25))){
var inst_36978 = (state_36982[(2)]);
var state_36982__$1 = state_36982;
var statearr_37013_37065 = state_36982__$1;
(statearr_37013_37065[(2)] = inst_36978);

(statearr_37013_37065[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36983 === (34))){
var inst_36976 = (state_36982[(2)]);
var state_36982__$1 = state_36982;
var statearr_37014_37066 = state_36982__$1;
(statearr_37014_37066[(2)] = inst_36976);

(statearr_37014_37066[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36983 === (17))){
var state_36982__$1 = state_36982;
var statearr_37015_37067 = state_36982__$1;
(statearr_37015_37067[(2)] = false);

(statearr_37015_37067[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36983 === (3))){
var state_36982__$1 = state_36982;
var statearr_37016_37068 = state_36982__$1;
(statearr_37016_37068[(2)] = false);

(statearr_37016_37068[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36983 === (12))){
var inst_36980 = (state_36982[(2)]);
var state_36982__$1 = state_36982;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36982__$1,inst_36980);
} else {
if((state_val_36983 === (2))){
var inst_36884 = (state_36982[(8)]);
var inst_36889 = inst_36884.cljs$lang$protocol_mask$partition0$;
var inst_36890 = (inst_36889 & (64));
var inst_36891 = inst_36884.cljs$core$ISeq$;
var inst_36892 = (cljs.core.PROTOCOL_SENTINEL === inst_36891);
var inst_36893 = (inst_36890) || (inst_36892);
var state_36982__$1 = state_36982;
if(cljs.core.truth_(inst_36893)){
var statearr_37017_37069 = state_36982__$1;
(statearr_37017_37069[(1)] = (5));

} else {
var statearr_37018_37070 = state_36982__$1;
(statearr_37018_37070[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36983 === (23))){
var inst_36941 = (state_36982[(14)]);
var inst_36947 = (inst_36941 == null);
var state_36982__$1 = state_36982;
if(cljs.core.truth_(inst_36947)){
var statearr_37019_37071 = state_36982__$1;
(statearr_37019_37071[(1)] = (26));

} else {
var statearr_37020_37072 = state_36982__$1;
(statearr_37020_37072[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36983 === (35))){
var inst_36967 = (state_36982[(2)]);
var state_36982__$1 = state_36982;
if(cljs.core.truth_(inst_36967)){
var statearr_37021_37073 = state_36982__$1;
(statearr_37021_37073[(1)] = (36));

} else {
var statearr_37022_37074 = state_36982__$1;
(statearr_37022_37074[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36983 === (19))){
var inst_36909 = (state_36982[(7)]);
var inst_36929 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36909);
var state_36982__$1 = state_36982;
var statearr_37023_37075 = state_36982__$1;
(statearr_37023_37075[(2)] = inst_36929);

(statearr_37023_37075[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36983 === (11))){
var inst_36909 = (state_36982[(7)]);
var inst_36913 = (inst_36909 == null);
var inst_36914 = cljs.core.not.call(null,inst_36913);
var state_36982__$1 = state_36982;
if(inst_36914){
var statearr_37024_37076 = state_36982__$1;
(statearr_37024_37076[(1)] = (13));

} else {
var statearr_37025_37077 = state_36982__$1;
(statearr_37025_37077[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36983 === (9))){
var inst_36884 = (state_36982[(8)]);
var state_36982__$1 = state_36982;
var statearr_37026_37078 = state_36982__$1;
(statearr_37026_37078[(2)] = inst_36884);

(statearr_37026_37078[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36983 === (5))){
var state_36982__$1 = state_36982;
var statearr_37027_37079 = state_36982__$1;
(statearr_37027_37079[(2)] = true);

(statearr_37027_37079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36983 === (14))){
var state_36982__$1 = state_36982;
var statearr_37028_37080 = state_36982__$1;
(statearr_37028_37080[(2)] = false);

(statearr_37028_37080[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36983 === (26))){
var inst_36942 = (state_36982[(9)]);
var inst_36949 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_36942);
var state_36982__$1 = state_36982;
var statearr_37029_37081 = state_36982__$1;
(statearr_37029_37081[(2)] = inst_36949);

(statearr_37029_37081[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36983 === (16))){
var state_36982__$1 = state_36982;
var statearr_37030_37082 = state_36982__$1;
(statearr_37030_37082[(2)] = true);

(statearr_37030_37082[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36983 === (38))){
var inst_36972 = (state_36982[(2)]);
var state_36982__$1 = state_36982;
var statearr_37031_37083 = state_36982__$1;
(statearr_37031_37083[(2)] = inst_36972);

(statearr_37031_37083[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36983 === (30))){
var inst_36942 = (state_36982[(9)]);
var inst_36934 = (state_36982[(13)]);
var inst_36933 = (state_36982[(11)]);
var inst_36959 = cljs.core.empty_QMARK_.call(null,inst_36933);
var inst_36960 = inst_36934.call(null,inst_36942);
var inst_36961 = cljs.core.not.call(null,inst_36960);
var inst_36962 = (inst_36959) && (inst_36961);
var state_36982__$1 = state_36982;
var statearr_37032_37084 = state_36982__$1;
(statearr_37032_37084[(2)] = inst_36962);

(statearr_37032_37084[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36983 === (10))){
var inst_36884 = (state_36982[(8)]);
var inst_36905 = (state_36982[(2)]);
var inst_36906 = cljs.core.get.call(null,inst_36905,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36907 = cljs.core.get.call(null,inst_36905,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36908 = cljs.core.get.call(null,inst_36905,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_36909 = inst_36884;
var state_36982__$1 = (function (){var statearr_37033 = state_36982;
(statearr_37033[(7)] = inst_36909);

(statearr_37033[(16)] = inst_36906);

(statearr_37033[(17)] = inst_36908);

(statearr_37033[(18)] = inst_36907);

return statearr_37033;
})();
var statearr_37034_37085 = state_36982__$1;
(statearr_37034_37085[(2)] = null);

(statearr_37034_37085[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36983 === (18))){
var inst_36924 = (state_36982[(2)]);
var state_36982__$1 = state_36982;
var statearr_37035_37086 = state_36982__$1;
(statearr_37035_37086[(2)] = inst_36924);

(statearr_37035_37086[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36983 === (37))){
var state_36982__$1 = state_36982;
var statearr_37036_37087 = state_36982__$1;
(statearr_37036_37087[(2)] = null);

(statearr_37036_37087[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36983 === (8))){
var inst_36884 = (state_36982[(8)]);
var inst_36902 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36884);
var state_36982__$1 = state_36982;
var statearr_37037_37088 = state_36982__$1;
(statearr_37037_37088[(2)] = inst_36902);

(statearr_37037_37088[(1)] = (10));


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
});})(c__35983__auto___37042,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__35893__auto__,c__35983__auto___37042,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__35894__auto__ = null;
var cljs$core$async$mix_$_state_machine__35894__auto____0 = (function (){
var statearr_37038 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37038[(0)] = cljs$core$async$mix_$_state_machine__35894__auto__);

(statearr_37038[(1)] = (1));

return statearr_37038;
});
var cljs$core$async$mix_$_state_machine__35894__auto____1 = (function (state_36982){
while(true){
var ret_value__35895__auto__ = (function (){try{while(true){
var result__35896__auto__ = switch__35893__auto__.call(null,state_36982);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35896__auto__;
}
break;
}
}catch (e37039){if((e37039 instanceof Object)){
var ex__35897__auto__ = e37039;
var statearr_37040_37089 = state_36982;
(statearr_37040_37089[(5)] = ex__35897__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36982);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37039;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37090 = state_36982;
state_36982 = G__37090;
continue;
} else {
return ret_value__35895__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__35894__auto__ = function(state_36982){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__35894__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__35894__auto____1.call(this,state_36982);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__35894__auto____0;
cljs$core$async$mix_$_state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__35894__auto____1;
return cljs$core$async$mix_$_state_machine__35894__auto__;
})()
;})(switch__35893__auto__,c__35983__auto___37042,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__35985__auto__ = (function (){var statearr_37041 = f__35984__auto__.call(null);
(statearr_37041[(6)] = c__35983__auto___37042);

return statearr_37041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35985__auto__);
});})(c__35983__auto___37042,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__30781__auto__ = (((p == null))?null:p);
var m__30782__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__30781__auto__)]);
if(!((m__30782__auto__ == null))){
return m__30782__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__30782__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__30782__auto____$1 == null))){
return m__30782__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__30781__auto__ = (((p == null))?null:p);
var m__30782__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__30781__auto__)]);
if(!((m__30782__auto__ == null))){
return m__30782__auto__.call(null,p,v,ch);
} else {
var m__30782__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__30782__auto____$1 == null))){
return m__30782__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__37092 = arguments.length;
switch (G__37092) {
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
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__30781__auto__ = (((p == null))?null:p);
var m__30782__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30781__auto__)]);
if(!((m__30782__auto__ == null))){
return m__30782__auto__.call(null,p);
} else {
var m__30782__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30782__auto____$1 == null))){
return m__30782__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__30781__auto__ = (((p == null))?null:p);
var m__30782__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30781__auto__)]);
if(!((m__30782__auto__ == null))){
return m__30782__auto__.call(null,p,v);
} else {
var m__30782__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30782__auto____$1 == null))){
return m__30782__auto____$1.call(null,p,v);
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
var G__37096 = arguments.length;
switch (G__37096) {
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
var or__30048__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__30048__auto__)){
return or__30048__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__30048__auto__,mults){
return (function (p1__37094_SHARP_){
if(cljs.core.truth_(p1__37094_SHARP_.call(null,topic))){
return p1__37094_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__37094_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__30048__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async37097 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37097 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta37098){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta37098 = meta37098;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37097.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_37099,meta37098__$1){
var self__ = this;
var _37099__$1 = this;
return (new cljs.core.async.t_cljs$core$async37097(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta37098__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37097.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_37099){
var self__ = this;
var _37099__$1 = this;
return self__.meta37098;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37097.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37097.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37097.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37097.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37097.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5278__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5278__auto__)){
var m = temp__5278__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37097.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37097.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37097.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta37098","meta37098",1622108424,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37097.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37097.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37097";

cljs.core.async.t_cljs$core$async37097.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__30719__auto__,writer__30720__auto__,opt__30721__auto__){
return cljs.core._write.call(null,writer__30720__auto__,"cljs.core.async/t_cljs$core$async37097");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async37097 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async37097(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37098){
return (new cljs.core.async.t_cljs$core$async37097(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37098));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async37097(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35983__auto___37217 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35983__auto___37217,mults,ensure_mult,p){
return (function (){
var f__35984__auto__ = (function (){var switch__35893__auto__ = ((function (c__35983__auto___37217,mults,ensure_mult,p){
return (function (state_37171){
var state_val_37172 = (state_37171[(1)]);
if((state_val_37172 === (7))){
var inst_37167 = (state_37171[(2)]);
var state_37171__$1 = state_37171;
var statearr_37173_37218 = state_37171__$1;
(statearr_37173_37218[(2)] = inst_37167);

(statearr_37173_37218[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37172 === (20))){
var state_37171__$1 = state_37171;
var statearr_37174_37219 = state_37171__$1;
(statearr_37174_37219[(2)] = null);

(statearr_37174_37219[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37172 === (1))){
var state_37171__$1 = state_37171;
var statearr_37175_37220 = state_37171__$1;
(statearr_37175_37220[(2)] = null);

(statearr_37175_37220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37172 === (24))){
var inst_37150 = (state_37171[(7)]);
var inst_37159 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_37150);
var state_37171__$1 = state_37171;
var statearr_37176_37221 = state_37171__$1;
(statearr_37176_37221[(2)] = inst_37159);

(statearr_37176_37221[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37172 === (4))){
var inst_37102 = (state_37171[(8)]);
var inst_37102__$1 = (state_37171[(2)]);
var inst_37103 = (inst_37102__$1 == null);
var state_37171__$1 = (function (){var statearr_37177 = state_37171;
(statearr_37177[(8)] = inst_37102__$1);

return statearr_37177;
})();
if(cljs.core.truth_(inst_37103)){
var statearr_37178_37222 = state_37171__$1;
(statearr_37178_37222[(1)] = (5));

} else {
var statearr_37179_37223 = state_37171__$1;
(statearr_37179_37223[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37172 === (15))){
var inst_37144 = (state_37171[(2)]);
var state_37171__$1 = state_37171;
var statearr_37180_37224 = state_37171__$1;
(statearr_37180_37224[(2)] = inst_37144);

(statearr_37180_37224[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37172 === (21))){
var inst_37164 = (state_37171[(2)]);
var state_37171__$1 = (function (){var statearr_37181 = state_37171;
(statearr_37181[(9)] = inst_37164);

return statearr_37181;
})();
var statearr_37182_37225 = state_37171__$1;
(statearr_37182_37225[(2)] = null);

(statearr_37182_37225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37172 === (13))){
var inst_37126 = (state_37171[(10)]);
var inst_37128 = cljs.core.chunked_seq_QMARK_.call(null,inst_37126);
var state_37171__$1 = state_37171;
if(inst_37128){
var statearr_37183_37226 = state_37171__$1;
(statearr_37183_37226[(1)] = (16));

} else {
var statearr_37184_37227 = state_37171__$1;
(statearr_37184_37227[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37172 === (22))){
var inst_37156 = (state_37171[(2)]);
var state_37171__$1 = state_37171;
if(cljs.core.truth_(inst_37156)){
var statearr_37185_37228 = state_37171__$1;
(statearr_37185_37228[(1)] = (23));

} else {
var statearr_37186_37229 = state_37171__$1;
(statearr_37186_37229[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37172 === (6))){
var inst_37152 = (state_37171[(11)]);
var inst_37150 = (state_37171[(7)]);
var inst_37102 = (state_37171[(8)]);
var inst_37150__$1 = topic_fn.call(null,inst_37102);
var inst_37151 = cljs.core.deref.call(null,mults);
var inst_37152__$1 = cljs.core.get.call(null,inst_37151,inst_37150__$1);
var state_37171__$1 = (function (){var statearr_37187 = state_37171;
(statearr_37187[(11)] = inst_37152__$1);

(statearr_37187[(7)] = inst_37150__$1);

return statearr_37187;
})();
if(cljs.core.truth_(inst_37152__$1)){
var statearr_37188_37230 = state_37171__$1;
(statearr_37188_37230[(1)] = (19));

} else {
var statearr_37189_37231 = state_37171__$1;
(statearr_37189_37231[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37172 === (25))){
var inst_37161 = (state_37171[(2)]);
var state_37171__$1 = state_37171;
var statearr_37190_37232 = state_37171__$1;
(statearr_37190_37232[(2)] = inst_37161);

(statearr_37190_37232[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37172 === (17))){
var inst_37126 = (state_37171[(10)]);
var inst_37135 = cljs.core.first.call(null,inst_37126);
var inst_37136 = cljs.core.async.muxch_STAR_.call(null,inst_37135);
var inst_37137 = cljs.core.async.close_BANG_.call(null,inst_37136);
var inst_37138 = cljs.core.next.call(null,inst_37126);
var inst_37112 = inst_37138;
var inst_37113 = null;
var inst_37114 = (0);
var inst_37115 = (0);
var state_37171__$1 = (function (){var statearr_37191 = state_37171;
(statearr_37191[(12)] = inst_37113);

(statearr_37191[(13)] = inst_37112);

(statearr_37191[(14)] = inst_37114);

(statearr_37191[(15)] = inst_37115);

(statearr_37191[(16)] = inst_37137);

return statearr_37191;
})();
var statearr_37192_37233 = state_37171__$1;
(statearr_37192_37233[(2)] = null);

(statearr_37192_37233[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37172 === (3))){
var inst_37169 = (state_37171[(2)]);
var state_37171__$1 = state_37171;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37171__$1,inst_37169);
} else {
if((state_val_37172 === (12))){
var inst_37146 = (state_37171[(2)]);
var state_37171__$1 = state_37171;
var statearr_37193_37234 = state_37171__$1;
(statearr_37193_37234[(2)] = inst_37146);

(statearr_37193_37234[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37172 === (2))){
var state_37171__$1 = state_37171;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37171__$1,(4),ch);
} else {
if((state_val_37172 === (23))){
var state_37171__$1 = state_37171;
var statearr_37194_37235 = state_37171__$1;
(statearr_37194_37235[(2)] = null);

(statearr_37194_37235[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37172 === (19))){
var inst_37152 = (state_37171[(11)]);
var inst_37102 = (state_37171[(8)]);
var inst_37154 = cljs.core.async.muxch_STAR_.call(null,inst_37152);
var state_37171__$1 = state_37171;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37171__$1,(22),inst_37154,inst_37102);
} else {
if((state_val_37172 === (11))){
var inst_37126 = (state_37171[(10)]);
var inst_37112 = (state_37171[(13)]);
var inst_37126__$1 = cljs.core.seq.call(null,inst_37112);
var state_37171__$1 = (function (){var statearr_37195 = state_37171;
(statearr_37195[(10)] = inst_37126__$1);

return statearr_37195;
})();
if(inst_37126__$1){
var statearr_37196_37236 = state_37171__$1;
(statearr_37196_37236[(1)] = (13));

} else {
var statearr_37197_37237 = state_37171__$1;
(statearr_37197_37237[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37172 === (9))){
var inst_37148 = (state_37171[(2)]);
var state_37171__$1 = state_37171;
var statearr_37198_37238 = state_37171__$1;
(statearr_37198_37238[(2)] = inst_37148);

(statearr_37198_37238[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37172 === (5))){
var inst_37109 = cljs.core.deref.call(null,mults);
var inst_37110 = cljs.core.vals.call(null,inst_37109);
var inst_37111 = cljs.core.seq.call(null,inst_37110);
var inst_37112 = inst_37111;
var inst_37113 = null;
var inst_37114 = (0);
var inst_37115 = (0);
var state_37171__$1 = (function (){var statearr_37199 = state_37171;
(statearr_37199[(12)] = inst_37113);

(statearr_37199[(13)] = inst_37112);

(statearr_37199[(14)] = inst_37114);

(statearr_37199[(15)] = inst_37115);

return statearr_37199;
})();
var statearr_37200_37239 = state_37171__$1;
(statearr_37200_37239[(2)] = null);

(statearr_37200_37239[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37172 === (14))){
var state_37171__$1 = state_37171;
var statearr_37204_37240 = state_37171__$1;
(statearr_37204_37240[(2)] = null);

(statearr_37204_37240[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37172 === (16))){
var inst_37126 = (state_37171[(10)]);
var inst_37130 = cljs.core.chunk_first.call(null,inst_37126);
var inst_37131 = cljs.core.chunk_rest.call(null,inst_37126);
var inst_37132 = cljs.core.count.call(null,inst_37130);
var inst_37112 = inst_37131;
var inst_37113 = inst_37130;
var inst_37114 = inst_37132;
var inst_37115 = (0);
var state_37171__$1 = (function (){var statearr_37205 = state_37171;
(statearr_37205[(12)] = inst_37113);

(statearr_37205[(13)] = inst_37112);

(statearr_37205[(14)] = inst_37114);

(statearr_37205[(15)] = inst_37115);

return statearr_37205;
})();
var statearr_37206_37241 = state_37171__$1;
(statearr_37206_37241[(2)] = null);

(statearr_37206_37241[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37172 === (10))){
var inst_37113 = (state_37171[(12)]);
var inst_37112 = (state_37171[(13)]);
var inst_37114 = (state_37171[(14)]);
var inst_37115 = (state_37171[(15)]);
var inst_37120 = cljs.core._nth.call(null,inst_37113,inst_37115);
var inst_37121 = cljs.core.async.muxch_STAR_.call(null,inst_37120);
var inst_37122 = cljs.core.async.close_BANG_.call(null,inst_37121);
var inst_37123 = (inst_37115 + (1));
var tmp37201 = inst_37113;
var tmp37202 = inst_37112;
var tmp37203 = inst_37114;
var inst_37112__$1 = tmp37202;
var inst_37113__$1 = tmp37201;
var inst_37114__$1 = tmp37203;
var inst_37115__$1 = inst_37123;
var state_37171__$1 = (function (){var statearr_37207 = state_37171;
(statearr_37207[(12)] = inst_37113__$1);

(statearr_37207[(13)] = inst_37112__$1);

(statearr_37207[(14)] = inst_37114__$1);

(statearr_37207[(15)] = inst_37115__$1);

(statearr_37207[(17)] = inst_37122);

return statearr_37207;
})();
var statearr_37208_37242 = state_37171__$1;
(statearr_37208_37242[(2)] = null);

(statearr_37208_37242[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37172 === (18))){
var inst_37141 = (state_37171[(2)]);
var state_37171__$1 = state_37171;
var statearr_37209_37243 = state_37171__$1;
(statearr_37209_37243[(2)] = inst_37141);

(statearr_37209_37243[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37172 === (8))){
var inst_37114 = (state_37171[(14)]);
var inst_37115 = (state_37171[(15)]);
var inst_37117 = (inst_37115 < inst_37114);
var inst_37118 = inst_37117;
var state_37171__$1 = state_37171;
if(cljs.core.truth_(inst_37118)){
var statearr_37210_37244 = state_37171__$1;
(statearr_37210_37244[(1)] = (10));

} else {
var statearr_37211_37245 = state_37171__$1;
(statearr_37211_37245[(1)] = (11));

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
});})(c__35983__auto___37217,mults,ensure_mult,p))
;
return ((function (switch__35893__auto__,c__35983__auto___37217,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__35894__auto__ = null;
var cljs$core$async$state_machine__35894__auto____0 = (function (){
var statearr_37212 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37212[(0)] = cljs$core$async$state_machine__35894__auto__);

(statearr_37212[(1)] = (1));

return statearr_37212;
});
var cljs$core$async$state_machine__35894__auto____1 = (function (state_37171){
while(true){
var ret_value__35895__auto__ = (function (){try{while(true){
var result__35896__auto__ = switch__35893__auto__.call(null,state_37171);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35896__auto__;
}
break;
}
}catch (e37213){if((e37213 instanceof Object)){
var ex__35897__auto__ = e37213;
var statearr_37214_37246 = state_37171;
(statearr_37214_37246[(5)] = ex__35897__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37171);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37213;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37247 = state_37171;
state_37171 = G__37247;
continue;
} else {
return ret_value__35895__auto__;
}
break;
}
});
cljs$core$async$state_machine__35894__auto__ = function(state_37171){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35894__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35894__auto____1.call(this,state_37171);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35894__auto____0;
cljs$core$async$state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35894__auto____1;
return cljs$core$async$state_machine__35894__auto__;
})()
;})(switch__35893__auto__,c__35983__auto___37217,mults,ensure_mult,p))
})();
var state__35985__auto__ = (function (){var statearr_37215 = f__35984__auto__.call(null);
(statearr_37215[(6)] = c__35983__auto___37217);

return statearr_37215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35985__auto__);
});})(c__35983__auto___37217,mults,ensure_mult,p))
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
var G__37249 = arguments.length;
switch (G__37249) {
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
var G__37252 = arguments.length;
switch (G__37252) {
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
var G__37255 = arguments.length;
switch (G__37255) {
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
var c__35983__auto___37322 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35983__auto___37322,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__35984__auto__ = (function (){var switch__35893__auto__ = ((function (c__35983__auto___37322,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_37294){
var state_val_37295 = (state_37294[(1)]);
if((state_val_37295 === (7))){
var state_37294__$1 = state_37294;
var statearr_37296_37323 = state_37294__$1;
(statearr_37296_37323[(2)] = null);

(statearr_37296_37323[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37295 === (1))){
var state_37294__$1 = state_37294;
var statearr_37297_37324 = state_37294__$1;
(statearr_37297_37324[(2)] = null);

(statearr_37297_37324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37295 === (4))){
var inst_37258 = (state_37294[(7)]);
var inst_37260 = (inst_37258 < cnt);
var state_37294__$1 = state_37294;
if(cljs.core.truth_(inst_37260)){
var statearr_37298_37325 = state_37294__$1;
(statearr_37298_37325[(1)] = (6));

} else {
var statearr_37299_37326 = state_37294__$1;
(statearr_37299_37326[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37295 === (15))){
var inst_37290 = (state_37294[(2)]);
var state_37294__$1 = state_37294;
var statearr_37300_37327 = state_37294__$1;
(statearr_37300_37327[(2)] = inst_37290);

(statearr_37300_37327[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37295 === (13))){
var inst_37283 = cljs.core.async.close_BANG_.call(null,out);
var state_37294__$1 = state_37294;
var statearr_37301_37328 = state_37294__$1;
(statearr_37301_37328[(2)] = inst_37283);

(statearr_37301_37328[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37295 === (6))){
var state_37294__$1 = state_37294;
var statearr_37302_37329 = state_37294__$1;
(statearr_37302_37329[(2)] = null);

(statearr_37302_37329[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37295 === (3))){
var inst_37292 = (state_37294[(2)]);
var state_37294__$1 = state_37294;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37294__$1,inst_37292);
} else {
if((state_val_37295 === (12))){
var inst_37280 = (state_37294[(8)]);
var inst_37280__$1 = (state_37294[(2)]);
var inst_37281 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_37280__$1);
var state_37294__$1 = (function (){var statearr_37303 = state_37294;
(statearr_37303[(8)] = inst_37280__$1);

return statearr_37303;
})();
if(cljs.core.truth_(inst_37281)){
var statearr_37304_37330 = state_37294__$1;
(statearr_37304_37330[(1)] = (13));

} else {
var statearr_37305_37331 = state_37294__$1;
(statearr_37305_37331[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37295 === (2))){
var inst_37257 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_37258 = (0);
var state_37294__$1 = (function (){var statearr_37306 = state_37294;
(statearr_37306[(7)] = inst_37258);

(statearr_37306[(9)] = inst_37257);

return statearr_37306;
})();
var statearr_37307_37332 = state_37294__$1;
(statearr_37307_37332[(2)] = null);

(statearr_37307_37332[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37295 === (11))){
var inst_37258 = (state_37294[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_37294,(10),Object,null,(9));
var inst_37267 = chs__$1.call(null,inst_37258);
var inst_37268 = done.call(null,inst_37258);
var inst_37269 = cljs.core.async.take_BANG_.call(null,inst_37267,inst_37268);
var state_37294__$1 = state_37294;
var statearr_37308_37333 = state_37294__$1;
(statearr_37308_37333[(2)] = inst_37269);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37294__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37295 === (9))){
var inst_37258 = (state_37294[(7)]);
var inst_37271 = (state_37294[(2)]);
var inst_37272 = (inst_37258 + (1));
var inst_37258__$1 = inst_37272;
var state_37294__$1 = (function (){var statearr_37309 = state_37294;
(statearr_37309[(10)] = inst_37271);

(statearr_37309[(7)] = inst_37258__$1);

return statearr_37309;
})();
var statearr_37310_37334 = state_37294__$1;
(statearr_37310_37334[(2)] = null);

(statearr_37310_37334[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37295 === (5))){
var inst_37278 = (state_37294[(2)]);
var state_37294__$1 = (function (){var statearr_37311 = state_37294;
(statearr_37311[(11)] = inst_37278);

return statearr_37311;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37294__$1,(12),dchan);
} else {
if((state_val_37295 === (14))){
var inst_37280 = (state_37294[(8)]);
var inst_37285 = cljs.core.apply.call(null,f,inst_37280);
var state_37294__$1 = state_37294;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37294__$1,(16),out,inst_37285);
} else {
if((state_val_37295 === (16))){
var inst_37287 = (state_37294[(2)]);
var state_37294__$1 = (function (){var statearr_37312 = state_37294;
(statearr_37312[(12)] = inst_37287);

return statearr_37312;
})();
var statearr_37313_37335 = state_37294__$1;
(statearr_37313_37335[(2)] = null);

(statearr_37313_37335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37295 === (10))){
var inst_37262 = (state_37294[(2)]);
var inst_37263 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_37294__$1 = (function (){var statearr_37314 = state_37294;
(statearr_37314[(13)] = inst_37262);

return statearr_37314;
})();
var statearr_37315_37336 = state_37294__$1;
(statearr_37315_37336[(2)] = inst_37263);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37294__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37295 === (8))){
var inst_37276 = (state_37294[(2)]);
var state_37294__$1 = state_37294;
var statearr_37316_37337 = state_37294__$1;
(statearr_37316_37337[(2)] = inst_37276);

(statearr_37316_37337[(1)] = (5));


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
});})(c__35983__auto___37322,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__35893__auto__,c__35983__auto___37322,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__35894__auto__ = null;
var cljs$core$async$state_machine__35894__auto____0 = (function (){
var statearr_37317 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37317[(0)] = cljs$core$async$state_machine__35894__auto__);

(statearr_37317[(1)] = (1));

return statearr_37317;
});
var cljs$core$async$state_machine__35894__auto____1 = (function (state_37294){
while(true){
var ret_value__35895__auto__ = (function (){try{while(true){
var result__35896__auto__ = switch__35893__auto__.call(null,state_37294);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35896__auto__;
}
break;
}
}catch (e37318){if((e37318 instanceof Object)){
var ex__35897__auto__ = e37318;
var statearr_37319_37338 = state_37294;
(statearr_37319_37338[(5)] = ex__35897__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37294);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37318;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37339 = state_37294;
state_37294 = G__37339;
continue;
} else {
return ret_value__35895__auto__;
}
break;
}
});
cljs$core$async$state_machine__35894__auto__ = function(state_37294){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35894__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35894__auto____1.call(this,state_37294);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35894__auto____0;
cljs$core$async$state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35894__auto____1;
return cljs$core$async$state_machine__35894__auto__;
})()
;})(switch__35893__auto__,c__35983__auto___37322,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__35985__auto__ = (function (){var statearr_37320 = f__35984__auto__.call(null);
(statearr_37320[(6)] = c__35983__auto___37322);

return statearr_37320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35985__auto__);
});})(c__35983__auto___37322,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__37342 = arguments.length;
switch (G__37342) {
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
var c__35983__auto___37396 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35983__auto___37396,out){
return (function (){
var f__35984__auto__ = (function (){var switch__35893__auto__ = ((function (c__35983__auto___37396,out){
return (function (state_37374){
var state_val_37375 = (state_37374[(1)]);
if((state_val_37375 === (7))){
var inst_37354 = (state_37374[(7)]);
var inst_37353 = (state_37374[(8)]);
var inst_37353__$1 = (state_37374[(2)]);
var inst_37354__$1 = cljs.core.nth.call(null,inst_37353__$1,(0),null);
var inst_37355 = cljs.core.nth.call(null,inst_37353__$1,(1),null);
var inst_37356 = (inst_37354__$1 == null);
var state_37374__$1 = (function (){var statearr_37376 = state_37374;
(statearr_37376[(9)] = inst_37355);

(statearr_37376[(7)] = inst_37354__$1);

(statearr_37376[(8)] = inst_37353__$1);

return statearr_37376;
})();
if(cljs.core.truth_(inst_37356)){
var statearr_37377_37397 = state_37374__$1;
(statearr_37377_37397[(1)] = (8));

} else {
var statearr_37378_37398 = state_37374__$1;
(statearr_37378_37398[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37375 === (1))){
var inst_37343 = cljs.core.vec.call(null,chs);
var inst_37344 = inst_37343;
var state_37374__$1 = (function (){var statearr_37379 = state_37374;
(statearr_37379[(10)] = inst_37344);

return statearr_37379;
})();
var statearr_37380_37399 = state_37374__$1;
(statearr_37380_37399[(2)] = null);

(statearr_37380_37399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37375 === (4))){
var inst_37344 = (state_37374[(10)]);
var state_37374__$1 = state_37374;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37374__$1,(7),inst_37344);
} else {
if((state_val_37375 === (6))){
var inst_37370 = (state_37374[(2)]);
var state_37374__$1 = state_37374;
var statearr_37381_37400 = state_37374__$1;
(statearr_37381_37400[(2)] = inst_37370);

(statearr_37381_37400[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37375 === (3))){
var inst_37372 = (state_37374[(2)]);
var state_37374__$1 = state_37374;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37374__$1,inst_37372);
} else {
if((state_val_37375 === (2))){
var inst_37344 = (state_37374[(10)]);
var inst_37346 = cljs.core.count.call(null,inst_37344);
var inst_37347 = (inst_37346 > (0));
var state_37374__$1 = state_37374;
if(cljs.core.truth_(inst_37347)){
var statearr_37383_37401 = state_37374__$1;
(statearr_37383_37401[(1)] = (4));

} else {
var statearr_37384_37402 = state_37374__$1;
(statearr_37384_37402[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37375 === (11))){
var inst_37344 = (state_37374[(10)]);
var inst_37363 = (state_37374[(2)]);
var tmp37382 = inst_37344;
var inst_37344__$1 = tmp37382;
var state_37374__$1 = (function (){var statearr_37385 = state_37374;
(statearr_37385[(10)] = inst_37344__$1);

(statearr_37385[(11)] = inst_37363);

return statearr_37385;
})();
var statearr_37386_37403 = state_37374__$1;
(statearr_37386_37403[(2)] = null);

(statearr_37386_37403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37375 === (9))){
var inst_37354 = (state_37374[(7)]);
var state_37374__$1 = state_37374;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37374__$1,(11),out,inst_37354);
} else {
if((state_val_37375 === (5))){
var inst_37368 = cljs.core.async.close_BANG_.call(null,out);
var state_37374__$1 = state_37374;
var statearr_37387_37404 = state_37374__$1;
(statearr_37387_37404[(2)] = inst_37368);

(statearr_37387_37404[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37375 === (10))){
var inst_37366 = (state_37374[(2)]);
var state_37374__$1 = state_37374;
var statearr_37388_37405 = state_37374__$1;
(statearr_37388_37405[(2)] = inst_37366);

(statearr_37388_37405[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37375 === (8))){
var inst_37355 = (state_37374[(9)]);
var inst_37354 = (state_37374[(7)]);
var inst_37353 = (state_37374[(8)]);
var inst_37344 = (state_37374[(10)]);
var inst_37358 = (function (){var cs = inst_37344;
var vec__37349 = inst_37353;
var v = inst_37354;
var c = inst_37355;
return ((function (cs,vec__37349,v,c,inst_37355,inst_37354,inst_37353,inst_37344,state_val_37375,c__35983__auto___37396,out){
return (function (p1__37340_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__37340_SHARP_);
});
;})(cs,vec__37349,v,c,inst_37355,inst_37354,inst_37353,inst_37344,state_val_37375,c__35983__auto___37396,out))
})();
var inst_37359 = cljs.core.filterv.call(null,inst_37358,inst_37344);
var inst_37344__$1 = inst_37359;
var state_37374__$1 = (function (){var statearr_37389 = state_37374;
(statearr_37389[(10)] = inst_37344__$1);

return statearr_37389;
})();
var statearr_37390_37406 = state_37374__$1;
(statearr_37390_37406[(2)] = null);

(statearr_37390_37406[(1)] = (2));


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
});})(c__35983__auto___37396,out))
;
return ((function (switch__35893__auto__,c__35983__auto___37396,out){
return (function() {
var cljs$core$async$state_machine__35894__auto__ = null;
var cljs$core$async$state_machine__35894__auto____0 = (function (){
var statearr_37391 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37391[(0)] = cljs$core$async$state_machine__35894__auto__);

(statearr_37391[(1)] = (1));

return statearr_37391;
});
var cljs$core$async$state_machine__35894__auto____1 = (function (state_37374){
while(true){
var ret_value__35895__auto__ = (function (){try{while(true){
var result__35896__auto__ = switch__35893__auto__.call(null,state_37374);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35896__auto__;
}
break;
}
}catch (e37392){if((e37392 instanceof Object)){
var ex__35897__auto__ = e37392;
var statearr_37393_37407 = state_37374;
(statearr_37393_37407[(5)] = ex__35897__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37374);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37392;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37408 = state_37374;
state_37374 = G__37408;
continue;
} else {
return ret_value__35895__auto__;
}
break;
}
});
cljs$core$async$state_machine__35894__auto__ = function(state_37374){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35894__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35894__auto____1.call(this,state_37374);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35894__auto____0;
cljs$core$async$state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35894__auto____1;
return cljs$core$async$state_machine__35894__auto__;
})()
;})(switch__35893__auto__,c__35983__auto___37396,out))
})();
var state__35985__auto__ = (function (){var statearr_37394 = f__35984__auto__.call(null);
(statearr_37394[(6)] = c__35983__auto___37396);

return statearr_37394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35985__auto__);
});})(c__35983__auto___37396,out))
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
var G__37410 = arguments.length;
switch (G__37410) {
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
var c__35983__auto___37455 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35983__auto___37455,out){
return (function (){
var f__35984__auto__ = (function (){var switch__35893__auto__ = ((function (c__35983__auto___37455,out){
return (function (state_37434){
var state_val_37435 = (state_37434[(1)]);
if((state_val_37435 === (7))){
var inst_37416 = (state_37434[(7)]);
var inst_37416__$1 = (state_37434[(2)]);
var inst_37417 = (inst_37416__$1 == null);
var inst_37418 = cljs.core.not.call(null,inst_37417);
var state_37434__$1 = (function (){var statearr_37436 = state_37434;
(statearr_37436[(7)] = inst_37416__$1);

return statearr_37436;
})();
if(inst_37418){
var statearr_37437_37456 = state_37434__$1;
(statearr_37437_37456[(1)] = (8));

} else {
var statearr_37438_37457 = state_37434__$1;
(statearr_37438_37457[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37435 === (1))){
var inst_37411 = (0);
var state_37434__$1 = (function (){var statearr_37439 = state_37434;
(statearr_37439[(8)] = inst_37411);

return statearr_37439;
})();
var statearr_37440_37458 = state_37434__$1;
(statearr_37440_37458[(2)] = null);

(statearr_37440_37458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37435 === (4))){
var state_37434__$1 = state_37434;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37434__$1,(7),ch);
} else {
if((state_val_37435 === (6))){
var inst_37429 = (state_37434[(2)]);
var state_37434__$1 = state_37434;
var statearr_37441_37459 = state_37434__$1;
(statearr_37441_37459[(2)] = inst_37429);

(statearr_37441_37459[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37435 === (3))){
var inst_37431 = (state_37434[(2)]);
var inst_37432 = cljs.core.async.close_BANG_.call(null,out);
var state_37434__$1 = (function (){var statearr_37442 = state_37434;
(statearr_37442[(9)] = inst_37431);

return statearr_37442;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37434__$1,inst_37432);
} else {
if((state_val_37435 === (2))){
var inst_37411 = (state_37434[(8)]);
var inst_37413 = (inst_37411 < n);
var state_37434__$1 = state_37434;
if(cljs.core.truth_(inst_37413)){
var statearr_37443_37460 = state_37434__$1;
(statearr_37443_37460[(1)] = (4));

} else {
var statearr_37444_37461 = state_37434__$1;
(statearr_37444_37461[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37435 === (11))){
var inst_37411 = (state_37434[(8)]);
var inst_37421 = (state_37434[(2)]);
var inst_37422 = (inst_37411 + (1));
var inst_37411__$1 = inst_37422;
var state_37434__$1 = (function (){var statearr_37445 = state_37434;
(statearr_37445[(10)] = inst_37421);

(statearr_37445[(8)] = inst_37411__$1);

return statearr_37445;
})();
var statearr_37446_37462 = state_37434__$1;
(statearr_37446_37462[(2)] = null);

(statearr_37446_37462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37435 === (9))){
var state_37434__$1 = state_37434;
var statearr_37447_37463 = state_37434__$1;
(statearr_37447_37463[(2)] = null);

(statearr_37447_37463[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37435 === (5))){
var state_37434__$1 = state_37434;
var statearr_37448_37464 = state_37434__$1;
(statearr_37448_37464[(2)] = null);

(statearr_37448_37464[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37435 === (10))){
var inst_37426 = (state_37434[(2)]);
var state_37434__$1 = state_37434;
var statearr_37449_37465 = state_37434__$1;
(statearr_37449_37465[(2)] = inst_37426);

(statearr_37449_37465[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37435 === (8))){
var inst_37416 = (state_37434[(7)]);
var state_37434__$1 = state_37434;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37434__$1,(11),out,inst_37416);
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
});})(c__35983__auto___37455,out))
;
return ((function (switch__35893__auto__,c__35983__auto___37455,out){
return (function() {
var cljs$core$async$state_machine__35894__auto__ = null;
var cljs$core$async$state_machine__35894__auto____0 = (function (){
var statearr_37450 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37450[(0)] = cljs$core$async$state_machine__35894__auto__);

(statearr_37450[(1)] = (1));

return statearr_37450;
});
var cljs$core$async$state_machine__35894__auto____1 = (function (state_37434){
while(true){
var ret_value__35895__auto__ = (function (){try{while(true){
var result__35896__auto__ = switch__35893__auto__.call(null,state_37434);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35896__auto__;
}
break;
}
}catch (e37451){if((e37451 instanceof Object)){
var ex__35897__auto__ = e37451;
var statearr_37452_37466 = state_37434;
(statearr_37452_37466[(5)] = ex__35897__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37434);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37451;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37467 = state_37434;
state_37434 = G__37467;
continue;
} else {
return ret_value__35895__auto__;
}
break;
}
});
cljs$core$async$state_machine__35894__auto__ = function(state_37434){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35894__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35894__auto____1.call(this,state_37434);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35894__auto____0;
cljs$core$async$state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35894__auto____1;
return cljs$core$async$state_machine__35894__auto__;
})()
;})(switch__35893__auto__,c__35983__auto___37455,out))
})();
var state__35985__auto__ = (function (){var statearr_37453 = f__35984__auto__.call(null);
(statearr_37453[(6)] = c__35983__auto___37455);

return statearr_37453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35985__auto__);
});})(c__35983__auto___37455,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async37469 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37469 = (function (f,ch,meta37470){
this.f = f;
this.ch = ch;
this.meta37470 = meta37470;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37469.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37471,meta37470__$1){
var self__ = this;
var _37471__$1 = this;
return (new cljs.core.async.t_cljs$core$async37469(self__.f,self__.ch,meta37470__$1));
});

cljs.core.async.t_cljs$core$async37469.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37471){
var self__ = this;
var _37471__$1 = this;
return self__.meta37470;
});

cljs.core.async.t_cljs$core$async37469.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37469.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async37469.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async37469.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37469.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async37472 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37472 = (function (f,ch,meta37470,_,fn1,meta37473){
this.f = f;
this.ch = ch;
this.meta37470 = meta37470;
this._ = _;
this.fn1 = fn1;
this.meta37473 = meta37473;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37472.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_37474,meta37473__$1){
var self__ = this;
var _37474__$1 = this;
return (new cljs.core.async.t_cljs$core$async37472(self__.f,self__.ch,self__.meta37470,self__._,self__.fn1,meta37473__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async37472.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_37474){
var self__ = this;
var _37474__$1 = this;
return self__.meta37473;
});})(___$1))
;

cljs.core.async.t_cljs$core$async37472.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37472.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async37472.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async37472.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__37468_SHARP_){
return f1.call(null,(((p1__37468_SHARP_ == null))?null:self__.f.call(null,p1__37468_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async37472.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37470","meta37470",-2031466700,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async37469","cljs.core.async/t_cljs$core$async37469",307813874,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta37473","meta37473",-1266200644,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async37472.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37472.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37472";

cljs.core.async.t_cljs$core$async37472.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__30719__auto__,writer__30720__auto__,opt__30721__auto__){
return cljs.core._write.call(null,writer__30720__auto__,"cljs.core.async/t_cljs$core$async37472");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async37472 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async37472(f__$1,ch__$1,meta37470__$1,___$2,fn1__$1,meta37473){
return (new cljs.core.async.t_cljs$core$async37472(f__$1,ch__$1,meta37470__$1,___$2,fn1__$1,meta37473));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async37472(self__.f,self__.ch,self__.meta37470,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__30036__auto__ = ret;
if(cljs.core.truth_(and__30036__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__30036__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async37469.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37469.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async37469.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37470","meta37470",-2031466700,null)], null);
});

cljs.core.async.t_cljs$core$async37469.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37469.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37469";

cljs.core.async.t_cljs$core$async37469.cljs$lang$ctorPrWriter = (function (this__30719__auto__,writer__30720__auto__,opt__30721__auto__){
return cljs.core._write.call(null,writer__30720__auto__,"cljs.core.async/t_cljs$core$async37469");
});

cljs.core.async.__GT_t_cljs$core$async37469 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async37469(f__$1,ch__$1,meta37470){
return (new cljs.core.async.t_cljs$core$async37469(f__$1,ch__$1,meta37470));
});

}

return (new cljs.core.async.t_cljs$core$async37469(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async37475 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37475 = (function (f,ch,meta37476){
this.f = f;
this.ch = ch;
this.meta37476 = meta37476;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37475.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37477,meta37476__$1){
var self__ = this;
var _37477__$1 = this;
return (new cljs.core.async.t_cljs$core$async37475(self__.f,self__.ch,meta37476__$1));
});

cljs.core.async.t_cljs$core$async37475.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37477){
var self__ = this;
var _37477__$1 = this;
return self__.meta37476;
});

cljs.core.async.t_cljs$core$async37475.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37475.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async37475.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37475.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async37475.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37475.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async37475.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37476","meta37476",1217978181,null)], null);
});

cljs.core.async.t_cljs$core$async37475.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37475.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37475";

cljs.core.async.t_cljs$core$async37475.cljs$lang$ctorPrWriter = (function (this__30719__auto__,writer__30720__auto__,opt__30721__auto__){
return cljs.core._write.call(null,writer__30720__auto__,"cljs.core.async/t_cljs$core$async37475");
});

cljs.core.async.__GT_t_cljs$core$async37475 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async37475(f__$1,ch__$1,meta37476){
return (new cljs.core.async.t_cljs$core$async37475(f__$1,ch__$1,meta37476));
});

}

return (new cljs.core.async.t_cljs$core$async37475(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async37478 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37478 = (function (p,ch,meta37479){
this.p = p;
this.ch = ch;
this.meta37479 = meta37479;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37478.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37480,meta37479__$1){
var self__ = this;
var _37480__$1 = this;
return (new cljs.core.async.t_cljs$core$async37478(self__.p,self__.ch,meta37479__$1));
});

cljs.core.async.t_cljs$core$async37478.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37480){
var self__ = this;
var _37480__$1 = this;
return self__.meta37479;
});

cljs.core.async.t_cljs$core$async37478.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37478.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async37478.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async37478.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37478.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async37478.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37478.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async37478.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37479","meta37479",-1669601936,null)], null);
});

cljs.core.async.t_cljs$core$async37478.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37478.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37478";

cljs.core.async.t_cljs$core$async37478.cljs$lang$ctorPrWriter = (function (this__30719__auto__,writer__30720__auto__,opt__30721__auto__){
return cljs.core._write.call(null,writer__30720__auto__,"cljs.core.async/t_cljs$core$async37478");
});

cljs.core.async.__GT_t_cljs$core$async37478 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async37478(p__$1,ch__$1,meta37479){
return (new cljs.core.async.t_cljs$core$async37478(p__$1,ch__$1,meta37479));
});

}

return (new cljs.core.async.t_cljs$core$async37478(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__37482 = arguments.length;
switch (G__37482) {
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
var c__35983__auto___37522 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35983__auto___37522,out){
return (function (){
var f__35984__auto__ = (function (){var switch__35893__auto__ = ((function (c__35983__auto___37522,out){
return (function (state_37503){
var state_val_37504 = (state_37503[(1)]);
if((state_val_37504 === (7))){
var inst_37499 = (state_37503[(2)]);
var state_37503__$1 = state_37503;
var statearr_37505_37523 = state_37503__$1;
(statearr_37505_37523[(2)] = inst_37499);

(statearr_37505_37523[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37504 === (1))){
var state_37503__$1 = state_37503;
var statearr_37506_37524 = state_37503__$1;
(statearr_37506_37524[(2)] = null);

(statearr_37506_37524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37504 === (4))){
var inst_37485 = (state_37503[(7)]);
var inst_37485__$1 = (state_37503[(2)]);
var inst_37486 = (inst_37485__$1 == null);
var state_37503__$1 = (function (){var statearr_37507 = state_37503;
(statearr_37507[(7)] = inst_37485__$1);

return statearr_37507;
})();
if(cljs.core.truth_(inst_37486)){
var statearr_37508_37525 = state_37503__$1;
(statearr_37508_37525[(1)] = (5));

} else {
var statearr_37509_37526 = state_37503__$1;
(statearr_37509_37526[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37504 === (6))){
var inst_37485 = (state_37503[(7)]);
var inst_37490 = p.call(null,inst_37485);
var state_37503__$1 = state_37503;
if(cljs.core.truth_(inst_37490)){
var statearr_37510_37527 = state_37503__$1;
(statearr_37510_37527[(1)] = (8));

} else {
var statearr_37511_37528 = state_37503__$1;
(statearr_37511_37528[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37504 === (3))){
var inst_37501 = (state_37503[(2)]);
var state_37503__$1 = state_37503;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37503__$1,inst_37501);
} else {
if((state_val_37504 === (2))){
var state_37503__$1 = state_37503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37503__$1,(4),ch);
} else {
if((state_val_37504 === (11))){
var inst_37493 = (state_37503[(2)]);
var state_37503__$1 = state_37503;
var statearr_37512_37529 = state_37503__$1;
(statearr_37512_37529[(2)] = inst_37493);

(statearr_37512_37529[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37504 === (9))){
var state_37503__$1 = state_37503;
var statearr_37513_37530 = state_37503__$1;
(statearr_37513_37530[(2)] = null);

(statearr_37513_37530[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37504 === (5))){
var inst_37488 = cljs.core.async.close_BANG_.call(null,out);
var state_37503__$1 = state_37503;
var statearr_37514_37531 = state_37503__$1;
(statearr_37514_37531[(2)] = inst_37488);

(statearr_37514_37531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37504 === (10))){
var inst_37496 = (state_37503[(2)]);
var state_37503__$1 = (function (){var statearr_37515 = state_37503;
(statearr_37515[(8)] = inst_37496);

return statearr_37515;
})();
var statearr_37516_37532 = state_37503__$1;
(statearr_37516_37532[(2)] = null);

(statearr_37516_37532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37504 === (8))){
var inst_37485 = (state_37503[(7)]);
var state_37503__$1 = state_37503;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37503__$1,(11),out,inst_37485);
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
});})(c__35983__auto___37522,out))
;
return ((function (switch__35893__auto__,c__35983__auto___37522,out){
return (function() {
var cljs$core$async$state_machine__35894__auto__ = null;
var cljs$core$async$state_machine__35894__auto____0 = (function (){
var statearr_37517 = [null,null,null,null,null,null,null,null,null];
(statearr_37517[(0)] = cljs$core$async$state_machine__35894__auto__);

(statearr_37517[(1)] = (1));

return statearr_37517;
});
var cljs$core$async$state_machine__35894__auto____1 = (function (state_37503){
while(true){
var ret_value__35895__auto__ = (function (){try{while(true){
var result__35896__auto__ = switch__35893__auto__.call(null,state_37503);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35896__auto__;
}
break;
}
}catch (e37518){if((e37518 instanceof Object)){
var ex__35897__auto__ = e37518;
var statearr_37519_37533 = state_37503;
(statearr_37519_37533[(5)] = ex__35897__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37518;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37534 = state_37503;
state_37503 = G__37534;
continue;
} else {
return ret_value__35895__auto__;
}
break;
}
});
cljs$core$async$state_machine__35894__auto__ = function(state_37503){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35894__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35894__auto____1.call(this,state_37503);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35894__auto____0;
cljs$core$async$state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35894__auto____1;
return cljs$core$async$state_machine__35894__auto__;
})()
;})(switch__35893__auto__,c__35983__auto___37522,out))
})();
var state__35985__auto__ = (function (){var statearr_37520 = f__35984__auto__.call(null);
(statearr_37520[(6)] = c__35983__auto___37522);

return statearr_37520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35985__auto__);
});})(c__35983__auto___37522,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__37536 = arguments.length;
switch (G__37536) {
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
var c__35983__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35983__auto__){
return (function (){
var f__35984__auto__ = (function (){var switch__35893__auto__ = ((function (c__35983__auto__){
return (function (state_37599){
var state_val_37600 = (state_37599[(1)]);
if((state_val_37600 === (7))){
var inst_37595 = (state_37599[(2)]);
var state_37599__$1 = state_37599;
var statearr_37601_37639 = state_37599__$1;
(statearr_37601_37639[(2)] = inst_37595);

(statearr_37601_37639[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37600 === (20))){
var inst_37565 = (state_37599[(7)]);
var inst_37576 = (state_37599[(2)]);
var inst_37577 = cljs.core.next.call(null,inst_37565);
var inst_37551 = inst_37577;
var inst_37552 = null;
var inst_37553 = (0);
var inst_37554 = (0);
var state_37599__$1 = (function (){var statearr_37602 = state_37599;
(statearr_37602[(8)] = inst_37551);

(statearr_37602[(9)] = inst_37552);

(statearr_37602[(10)] = inst_37554);

(statearr_37602[(11)] = inst_37576);

(statearr_37602[(12)] = inst_37553);

return statearr_37602;
})();
var statearr_37603_37640 = state_37599__$1;
(statearr_37603_37640[(2)] = null);

(statearr_37603_37640[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37600 === (1))){
var state_37599__$1 = state_37599;
var statearr_37604_37641 = state_37599__$1;
(statearr_37604_37641[(2)] = null);

(statearr_37604_37641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37600 === (4))){
var inst_37540 = (state_37599[(13)]);
var inst_37540__$1 = (state_37599[(2)]);
var inst_37541 = (inst_37540__$1 == null);
var state_37599__$1 = (function (){var statearr_37605 = state_37599;
(statearr_37605[(13)] = inst_37540__$1);

return statearr_37605;
})();
if(cljs.core.truth_(inst_37541)){
var statearr_37606_37642 = state_37599__$1;
(statearr_37606_37642[(1)] = (5));

} else {
var statearr_37607_37643 = state_37599__$1;
(statearr_37607_37643[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37600 === (15))){
var state_37599__$1 = state_37599;
var statearr_37611_37644 = state_37599__$1;
(statearr_37611_37644[(2)] = null);

(statearr_37611_37644[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37600 === (21))){
var state_37599__$1 = state_37599;
var statearr_37612_37645 = state_37599__$1;
(statearr_37612_37645[(2)] = null);

(statearr_37612_37645[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37600 === (13))){
var inst_37551 = (state_37599[(8)]);
var inst_37552 = (state_37599[(9)]);
var inst_37554 = (state_37599[(10)]);
var inst_37553 = (state_37599[(12)]);
var inst_37561 = (state_37599[(2)]);
var inst_37562 = (inst_37554 + (1));
var tmp37608 = inst_37551;
var tmp37609 = inst_37552;
var tmp37610 = inst_37553;
var inst_37551__$1 = tmp37608;
var inst_37552__$1 = tmp37609;
var inst_37553__$1 = tmp37610;
var inst_37554__$1 = inst_37562;
var state_37599__$1 = (function (){var statearr_37613 = state_37599;
(statearr_37613[(8)] = inst_37551__$1);

(statearr_37613[(9)] = inst_37552__$1);

(statearr_37613[(10)] = inst_37554__$1);

(statearr_37613[(14)] = inst_37561);

(statearr_37613[(12)] = inst_37553__$1);

return statearr_37613;
})();
var statearr_37614_37646 = state_37599__$1;
(statearr_37614_37646[(2)] = null);

(statearr_37614_37646[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37600 === (22))){
var state_37599__$1 = state_37599;
var statearr_37615_37647 = state_37599__$1;
(statearr_37615_37647[(2)] = null);

(statearr_37615_37647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37600 === (6))){
var inst_37540 = (state_37599[(13)]);
var inst_37549 = f.call(null,inst_37540);
var inst_37550 = cljs.core.seq.call(null,inst_37549);
var inst_37551 = inst_37550;
var inst_37552 = null;
var inst_37553 = (0);
var inst_37554 = (0);
var state_37599__$1 = (function (){var statearr_37616 = state_37599;
(statearr_37616[(8)] = inst_37551);

(statearr_37616[(9)] = inst_37552);

(statearr_37616[(10)] = inst_37554);

(statearr_37616[(12)] = inst_37553);

return statearr_37616;
})();
var statearr_37617_37648 = state_37599__$1;
(statearr_37617_37648[(2)] = null);

(statearr_37617_37648[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37600 === (17))){
var inst_37565 = (state_37599[(7)]);
var inst_37569 = cljs.core.chunk_first.call(null,inst_37565);
var inst_37570 = cljs.core.chunk_rest.call(null,inst_37565);
var inst_37571 = cljs.core.count.call(null,inst_37569);
var inst_37551 = inst_37570;
var inst_37552 = inst_37569;
var inst_37553 = inst_37571;
var inst_37554 = (0);
var state_37599__$1 = (function (){var statearr_37618 = state_37599;
(statearr_37618[(8)] = inst_37551);

(statearr_37618[(9)] = inst_37552);

(statearr_37618[(10)] = inst_37554);

(statearr_37618[(12)] = inst_37553);

return statearr_37618;
})();
var statearr_37619_37649 = state_37599__$1;
(statearr_37619_37649[(2)] = null);

(statearr_37619_37649[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37600 === (3))){
var inst_37597 = (state_37599[(2)]);
var state_37599__$1 = state_37599;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37599__$1,inst_37597);
} else {
if((state_val_37600 === (12))){
var inst_37585 = (state_37599[(2)]);
var state_37599__$1 = state_37599;
var statearr_37620_37650 = state_37599__$1;
(statearr_37620_37650[(2)] = inst_37585);

(statearr_37620_37650[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37600 === (2))){
var state_37599__$1 = state_37599;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37599__$1,(4),in$);
} else {
if((state_val_37600 === (23))){
var inst_37593 = (state_37599[(2)]);
var state_37599__$1 = state_37599;
var statearr_37621_37651 = state_37599__$1;
(statearr_37621_37651[(2)] = inst_37593);

(statearr_37621_37651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37600 === (19))){
var inst_37580 = (state_37599[(2)]);
var state_37599__$1 = state_37599;
var statearr_37622_37652 = state_37599__$1;
(statearr_37622_37652[(2)] = inst_37580);

(statearr_37622_37652[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37600 === (11))){
var inst_37565 = (state_37599[(7)]);
var inst_37551 = (state_37599[(8)]);
var inst_37565__$1 = cljs.core.seq.call(null,inst_37551);
var state_37599__$1 = (function (){var statearr_37623 = state_37599;
(statearr_37623[(7)] = inst_37565__$1);

return statearr_37623;
})();
if(inst_37565__$1){
var statearr_37624_37653 = state_37599__$1;
(statearr_37624_37653[(1)] = (14));

} else {
var statearr_37625_37654 = state_37599__$1;
(statearr_37625_37654[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37600 === (9))){
var inst_37587 = (state_37599[(2)]);
var inst_37588 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_37599__$1 = (function (){var statearr_37626 = state_37599;
(statearr_37626[(15)] = inst_37587);

return statearr_37626;
})();
if(cljs.core.truth_(inst_37588)){
var statearr_37627_37655 = state_37599__$1;
(statearr_37627_37655[(1)] = (21));

} else {
var statearr_37628_37656 = state_37599__$1;
(statearr_37628_37656[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37600 === (5))){
var inst_37543 = cljs.core.async.close_BANG_.call(null,out);
var state_37599__$1 = state_37599;
var statearr_37629_37657 = state_37599__$1;
(statearr_37629_37657[(2)] = inst_37543);

(statearr_37629_37657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37600 === (14))){
var inst_37565 = (state_37599[(7)]);
var inst_37567 = cljs.core.chunked_seq_QMARK_.call(null,inst_37565);
var state_37599__$1 = state_37599;
if(inst_37567){
var statearr_37630_37658 = state_37599__$1;
(statearr_37630_37658[(1)] = (17));

} else {
var statearr_37631_37659 = state_37599__$1;
(statearr_37631_37659[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37600 === (16))){
var inst_37583 = (state_37599[(2)]);
var state_37599__$1 = state_37599;
var statearr_37632_37660 = state_37599__$1;
(statearr_37632_37660[(2)] = inst_37583);

(statearr_37632_37660[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37600 === (10))){
var inst_37552 = (state_37599[(9)]);
var inst_37554 = (state_37599[(10)]);
var inst_37559 = cljs.core._nth.call(null,inst_37552,inst_37554);
var state_37599__$1 = state_37599;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37599__$1,(13),out,inst_37559);
} else {
if((state_val_37600 === (18))){
var inst_37565 = (state_37599[(7)]);
var inst_37574 = cljs.core.first.call(null,inst_37565);
var state_37599__$1 = state_37599;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37599__$1,(20),out,inst_37574);
} else {
if((state_val_37600 === (8))){
var inst_37554 = (state_37599[(10)]);
var inst_37553 = (state_37599[(12)]);
var inst_37556 = (inst_37554 < inst_37553);
var inst_37557 = inst_37556;
var state_37599__$1 = state_37599;
if(cljs.core.truth_(inst_37557)){
var statearr_37633_37661 = state_37599__$1;
(statearr_37633_37661[(1)] = (10));

} else {
var statearr_37634_37662 = state_37599__$1;
(statearr_37634_37662[(1)] = (11));

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
});})(c__35983__auto__))
;
return ((function (switch__35893__auto__,c__35983__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__35894__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__35894__auto____0 = (function (){
var statearr_37635 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37635[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__35894__auto__);

(statearr_37635[(1)] = (1));

return statearr_37635;
});
var cljs$core$async$mapcat_STAR__$_state_machine__35894__auto____1 = (function (state_37599){
while(true){
var ret_value__35895__auto__ = (function (){try{while(true){
var result__35896__auto__ = switch__35893__auto__.call(null,state_37599);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35896__auto__;
}
break;
}
}catch (e37636){if((e37636 instanceof Object)){
var ex__35897__auto__ = e37636;
var statearr_37637_37663 = state_37599;
(statearr_37637_37663[(5)] = ex__35897__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37599);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37636;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37664 = state_37599;
state_37599 = G__37664;
continue;
} else {
return ret_value__35895__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__35894__auto__ = function(state_37599){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__35894__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__35894__auto____1.call(this,state_37599);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__35894__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__35894__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__35894__auto__;
})()
;})(switch__35893__auto__,c__35983__auto__))
})();
var state__35985__auto__ = (function (){var statearr_37638 = f__35984__auto__.call(null);
(statearr_37638[(6)] = c__35983__auto__);

return statearr_37638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35985__auto__);
});})(c__35983__auto__))
);

return c__35983__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__37666 = arguments.length;
switch (G__37666) {
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
var G__37669 = arguments.length;
switch (G__37669) {
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
var G__37672 = arguments.length;
switch (G__37672) {
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
var c__35983__auto___37719 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35983__auto___37719,out){
return (function (){
var f__35984__auto__ = (function (){var switch__35893__auto__ = ((function (c__35983__auto___37719,out){
return (function (state_37696){
var state_val_37697 = (state_37696[(1)]);
if((state_val_37697 === (7))){
var inst_37691 = (state_37696[(2)]);
var state_37696__$1 = state_37696;
var statearr_37698_37720 = state_37696__$1;
(statearr_37698_37720[(2)] = inst_37691);

(statearr_37698_37720[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37697 === (1))){
var inst_37673 = null;
var state_37696__$1 = (function (){var statearr_37699 = state_37696;
(statearr_37699[(7)] = inst_37673);

return statearr_37699;
})();
var statearr_37700_37721 = state_37696__$1;
(statearr_37700_37721[(2)] = null);

(statearr_37700_37721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37697 === (4))){
var inst_37676 = (state_37696[(8)]);
var inst_37676__$1 = (state_37696[(2)]);
var inst_37677 = (inst_37676__$1 == null);
var inst_37678 = cljs.core.not.call(null,inst_37677);
var state_37696__$1 = (function (){var statearr_37701 = state_37696;
(statearr_37701[(8)] = inst_37676__$1);

return statearr_37701;
})();
if(inst_37678){
var statearr_37702_37722 = state_37696__$1;
(statearr_37702_37722[(1)] = (5));

} else {
var statearr_37703_37723 = state_37696__$1;
(statearr_37703_37723[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37697 === (6))){
var state_37696__$1 = state_37696;
var statearr_37704_37724 = state_37696__$1;
(statearr_37704_37724[(2)] = null);

(statearr_37704_37724[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37697 === (3))){
var inst_37693 = (state_37696[(2)]);
var inst_37694 = cljs.core.async.close_BANG_.call(null,out);
var state_37696__$1 = (function (){var statearr_37705 = state_37696;
(statearr_37705[(9)] = inst_37693);

return statearr_37705;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37696__$1,inst_37694);
} else {
if((state_val_37697 === (2))){
var state_37696__$1 = state_37696;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37696__$1,(4),ch);
} else {
if((state_val_37697 === (11))){
var inst_37676 = (state_37696[(8)]);
var inst_37685 = (state_37696[(2)]);
var inst_37673 = inst_37676;
var state_37696__$1 = (function (){var statearr_37706 = state_37696;
(statearr_37706[(10)] = inst_37685);

(statearr_37706[(7)] = inst_37673);

return statearr_37706;
})();
var statearr_37707_37725 = state_37696__$1;
(statearr_37707_37725[(2)] = null);

(statearr_37707_37725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37697 === (9))){
var inst_37676 = (state_37696[(8)]);
var state_37696__$1 = state_37696;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37696__$1,(11),out,inst_37676);
} else {
if((state_val_37697 === (5))){
var inst_37676 = (state_37696[(8)]);
var inst_37673 = (state_37696[(7)]);
var inst_37680 = cljs.core._EQ_.call(null,inst_37676,inst_37673);
var state_37696__$1 = state_37696;
if(inst_37680){
var statearr_37709_37726 = state_37696__$1;
(statearr_37709_37726[(1)] = (8));

} else {
var statearr_37710_37727 = state_37696__$1;
(statearr_37710_37727[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37697 === (10))){
var inst_37688 = (state_37696[(2)]);
var state_37696__$1 = state_37696;
var statearr_37711_37728 = state_37696__$1;
(statearr_37711_37728[(2)] = inst_37688);

(statearr_37711_37728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37697 === (8))){
var inst_37673 = (state_37696[(7)]);
var tmp37708 = inst_37673;
var inst_37673__$1 = tmp37708;
var state_37696__$1 = (function (){var statearr_37712 = state_37696;
(statearr_37712[(7)] = inst_37673__$1);

return statearr_37712;
})();
var statearr_37713_37729 = state_37696__$1;
(statearr_37713_37729[(2)] = null);

(statearr_37713_37729[(1)] = (2));


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
});})(c__35983__auto___37719,out))
;
return ((function (switch__35893__auto__,c__35983__auto___37719,out){
return (function() {
var cljs$core$async$state_machine__35894__auto__ = null;
var cljs$core$async$state_machine__35894__auto____0 = (function (){
var statearr_37714 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37714[(0)] = cljs$core$async$state_machine__35894__auto__);

(statearr_37714[(1)] = (1));

return statearr_37714;
});
var cljs$core$async$state_machine__35894__auto____1 = (function (state_37696){
while(true){
var ret_value__35895__auto__ = (function (){try{while(true){
var result__35896__auto__ = switch__35893__auto__.call(null,state_37696);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35896__auto__;
}
break;
}
}catch (e37715){if((e37715 instanceof Object)){
var ex__35897__auto__ = e37715;
var statearr_37716_37730 = state_37696;
(statearr_37716_37730[(5)] = ex__35897__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37696);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37715;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37731 = state_37696;
state_37696 = G__37731;
continue;
} else {
return ret_value__35895__auto__;
}
break;
}
});
cljs$core$async$state_machine__35894__auto__ = function(state_37696){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35894__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35894__auto____1.call(this,state_37696);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35894__auto____0;
cljs$core$async$state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35894__auto____1;
return cljs$core$async$state_machine__35894__auto__;
})()
;})(switch__35893__auto__,c__35983__auto___37719,out))
})();
var state__35985__auto__ = (function (){var statearr_37717 = f__35984__auto__.call(null);
(statearr_37717[(6)] = c__35983__auto___37719);

return statearr_37717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35985__auto__);
});})(c__35983__auto___37719,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__37733 = arguments.length;
switch (G__37733) {
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
var c__35983__auto___37799 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35983__auto___37799,out){
return (function (){
var f__35984__auto__ = (function (){var switch__35893__auto__ = ((function (c__35983__auto___37799,out){
return (function (state_37771){
var state_val_37772 = (state_37771[(1)]);
if((state_val_37772 === (7))){
var inst_37767 = (state_37771[(2)]);
var state_37771__$1 = state_37771;
var statearr_37773_37800 = state_37771__$1;
(statearr_37773_37800[(2)] = inst_37767);

(statearr_37773_37800[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37772 === (1))){
var inst_37734 = (new Array(n));
var inst_37735 = inst_37734;
var inst_37736 = (0);
var state_37771__$1 = (function (){var statearr_37774 = state_37771;
(statearr_37774[(7)] = inst_37736);

(statearr_37774[(8)] = inst_37735);

return statearr_37774;
})();
var statearr_37775_37801 = state_37771__$1;
(statearr_37775_37801[(2)] = null);

(statearr_37775_37801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37772 === (4))){
var inst_37739 = (state_37771[(9)]);
var inst_37739__$1 = (state_37771[(2)]);
var inst_37740 = (inst_37739__$1 == null);
var inst_37741 = cljs.core.not.call(null,inst_37740);
var state_37771__$1 = (function (){var statearr_37776 = state_37771;
(statearr_37776[(9)] = inst_37739__$1);

return statearr_37776;
})();
if(inst_37741){
var statearr_37777_37802 = state_37771__$1;
(statearr_37777_37802[(1)] = (5));

} else {
var statearr_37778_37803 = state_37771__$1;
(statearr_37778_37803[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37772 === (15))){
var inst_37761 = (state_37771[(2)]);
var state_37771__$1 = state_37771;
var statearr_37779_37804 = state_37771__$1;
(statearr_37779_37804[(2)] = inst_37761);

(statearr_37779_37804[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37772 === (13))){
var state_37771__$1 = state_37771;
var statearr_37780_37805 = state_37771__$1;
(statearr_37780_37805[(2)] = null);

(statearr_37780_37805[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37772 === (6))){
var inst_37736 = (state_37771[(7)]);
var inst_37757 = (inst_37736 > (0));
var state_37771__$1 = state_37771;
if(cljs.core.truth_(inst_37757)){
var statearr_37781_37806 = state_37771__$1;
(statearr_37781_37806[(1)] = (12));

} else {
var statearr_37782_37807 = state_37771__$1;
(statearr_37782_37807[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37772 === (3))){
var inst_37769 = (state_37771[(2)]);
var state_37771__$1 = state_37771;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37771__$1,inst_37769);
} else {
if((state_val_37772 === (12))){
var inst_37735 = (state_37771[(8)]);
var inst_37759 = cljs.core.vec.call(null,inst_37735);
var state_37771__$1 = state_37771;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37771__$1,(15),out,inst_37759);
} else {
if((state_val_37772 === (2))){
var state_37771__$1 = state_37771;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37771__$1,(4),ch);
} else {
if((state_val_37772 === (11))){
var inst_37751 = (state_37771[(2)]);
var inst_37752 = (new Array(n));
var inst_37735 = inst_37752;
var inst_37736 = (0);
var state_37771__$1 = (function (){var statearr_37783 = state_37771;
(statearr_37783[(7)] = inst_37736);

(statearr_37783[(8)] = inst_37735);

(statearr_37783[(10)] = inst_37751);

return statearr_37783;
})();
var statearr_37784_37808 = state_37771__$1;
(statearr_37784_37808[(2)] = null);

(statearr_37784_37808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37772 === (9))){
var inst_37735 = (state_37771[(8)]);
var inst_37749 = cljs.core.vec.call(null,inst_37735);
var state_37771__$1 = state_37771;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37771__$1,(11),out,inst_37749);
} else {
if((state_val_37772 === (5))){
var inst_37736 = (state_37771[(7)]);
var inst_37739 = (state_37771[(9)]);
var inst_37735 = (state_37771[(8)]);
var inst_37744 = (state_37771[(11)]);
var inst_37743 = (inst_37735[inst_37736] = inst_37739);
var inst_37744__$1 = (inst_37736 + (1));
var inst_37745 = (inst_37744__$1 < n);
var state_37771__$1 = (function (){var statearr_37785 = state_37771;
(statearr_37785[(12)] = inst_37743);

(statearr_37785[(11)] = inst_37744__$1);

return statearr_37785;
})();
if(cljs.core.truth_(inst_37745)){
var statearr_37786_37809 = state_37771__$1;
(statearr_37786_37809[(1)] = (8));

} else {
var statearr_37787_37810 = state_37771__$1;
(statearr_37787_37810[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37772 === (14))){
var inst_37764 = (state_37771[(2)]);
var inst_37765 = cljs.core.async.close_BANG_.call(null,out);
var state_37771__$1 = (function (){var statearr_37789 = state_37771;
(statearr_37789[(13)] = inst_37764);

return statearr_37789;
})();
var statearr_37790_37811 = state_37771__$1;
(statearr_37790_37811[(2)] = inst_37765);

(statearr_37790_37811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37772 === (10))){
var inst_37755 = (state_37771[(2)]);
var state_37771__$1 = state_37771;
var statearr_37791_37812 = state_37771__$1;
(statearr_37791_37812[(2)] = inst_37755);

(statearr_37791_37812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37772 === (8))){
var inst_37735 = (state_37771[(8)]);
var inst_37744 = (state_37771[(11)]);
var tmp37788 = inst_37735;
var inst_37735__$1 = tmp37788;
var inst_37736 = inst_37744;
var state_37771__$1 = (function (){var statearr_37792 = state_37771;
(statearr_37792[(7)] = inst_37736);

(statearr_37792[(8)] = inst_37735__$1);

return statearr_37792;
})();
var statearr_37793_37813 = state_37771__$1;
(statearr_37793_37813[(2)] = null);

(statearr_37793_37813[(1)] = (2));


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
});})(c__35983__auto___37799,out))
;
return ((function (switch__35893__auto__,c__35983__auto___37799,out){
return (function() {
var cljs$core$async$state_machine__35894__auto__ = null;
var cljs$core$async$state_machine__35894__auto____0 = (function (){
var statearr_37794 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37794[(0)] = cljs$core$async$state_machine__35894__auto__);

(statearr_37794[(1)] = (1));

return statearr_37794;
});
var cljs$core$async$state_machine__35894__auto____1 = (function (state_37771){
while(true){
var ret_value__35895__auto__ = (function (){try{while(true){
var result__35896__auto__ = switch__35893__auto__.call(null,state_37771);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35896__auto__;
}
break;
}
}catch (e37795){if((e37795 instanceof Object)){
var ex__35897__auto__ = e37795;
var statearr_37796_37814 = state_37771;
(statearr_37796_37814[(5)] = ex__35897__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37771);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37795;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37815 = state_37771;
state_37771 = G__37815;
continue;
} else {
return ret_value__35895__auto__;
}
break;
}
});
cljs$core$async$state_machine__35894__auto__ = function(state_37771){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35894__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35894__auto____1.call(this,state_37771);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35894__auto____0;
cljs$core$async$state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35894__auto____1;
return cljs$core$async$state_machine__35894__auto__;
})()
;})(switch__35893__auto__,c__35983__auto___37799,out))
})();
var state__35985__auto__ = (function (){var statearr_37797 = f__35984__auto__.call(null);
(statearr_37797[(6)] = c__35983__auto___37799);

return statearr_37797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35985__auto__);
});})(c__35983__auto___37799,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__37817 = arguments.length;
switch (G__37817) {
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
var c__35983__auto___37887 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35983__auto___37887,out){
return (function (){
var f__35984__auto__ = (function (){var switch__35893__auto__ = ((function (c__35983__auto___37887,out){
return (function (state_37859){
var state_val_37860 = (state_37859[(1)]);
if((state_val_37860 === (7))){
var inst_37855 = (state_37859[(2)]);
var state_37859__$1 = state_37859;
var statearr_37861_37888 = state_37859__$1;
(statearr_37861_37888[(2)] = inst_37855);

(statearr_37861_37888[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37860 === (1))){
var inst_37818 = [];
var inst_37819 = inst_37818;
var inst_37820 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_37859__$1 = (function (){var statearr_37862 = state_37859;
(statearr_37862[(7)] = inst_37819);

(statearr_37862[(8)] = inst_37820);

return statearr_37862;
})();
var statearr_37863_37889 = state_37859__$1;
(statearr_37863_37889[(2)] = null);

(statearr_37863_37889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37860 === (4))){
var inst_37823 = (state_37859[(9)]);
var inst_37823__$1 = (state_37859[(2)]);
var inst_37824 = (inst_37823__$1 == null);
var inst_37825 = cljs.core.not.call(null,inst_37824);
var state_37859__$1 = (function (){var statearr_37864 = state_37859;
(statearr_37864[(9)] = inst_37823__$1);

return statearr_37864;
})();
if(inst_37825){
var statearr_37865_37890 = state_37859__$1;
(statearr_37865_37890[(1)] = (5));

} else {
var statearr_37866_37891 = state_37859__$1;
(statearr_37866_37891[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37860 === (15))){
var inst_37849 = (state_37859[(2)]);
var state_37859__$1 = state_37859;
var statearr_37867_37892 = state_37859__$1;
(statearr_37867_37892[(2)] = inst_37849);

(statearr_37867_37892[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37860 === (13))){
var state_37859__$1 = state_37859;
var statearr_37868_37893 = state_37859__$1;
(statearr_37868_37893[(2)] = null);

(statearr_37868_37893[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37860 === (6))){
var inst_37819 = (state_37859[(7)]);
var inst_37844 = inst_37819.length;
var inst_37845 = (inst_37844 > (0));
var state_37859__$1 = state_37859;
if(cljs.core.truth_(inst_37845)){
var statearr_37869_37894 = state_37859__$1;
(statearr_37869_37894[(1)] = (12));

} else {
var statearr_37870_37895 = state_37859__$1;
(statearr_37870_37895[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37860 === (3))){
var inst_37857 = (state_37859[(2)]);
var state_37859__$1 = state_37859;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37859__$1,inst_37857);
} else {
if((state_val_37860 === (12))){
var inst_37819 = (state_37859[(7)]);
var inst_37847 = cljs.core.vec.call(null,inst_37819);
var state_37859__$1 = state_37859;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37859__$1,(15),out,inst_37847);
} else {
if((state_val_37860 === (2))){
var state_37859__$1 = state_37859;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37859__$1,(4),ch);
} else {
if((state_val_37860 === (11))){
var inst_37827 = (state_37859[(10)]);
var inst_37823 = (state_37859[(9)]);
var inst_37837 = (state_37859[(2)]);
var inst_37838 = [];
var inst_37839 = inst_37838.push(inst_37823);
var inst_37819 = inst_37838;
var inst_37820 = inst_37827;
var state_37859__$1 = (function (){var statearr_37871 = state_37859;
(statearr_37871[(7)] = inst_37819);

(statearr_37871[(8)] = inst_37820);

(statearr_37871[(11)] = inst_37839);

(statearr_37871[(12)] = inst_37837);

return statearr_37871;
})();
var statearr_37872_37896 = state_37859__$1;
(statearr_37872_37896[(2)] = null);

(statearr_37872_37896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37860 === (9))){
var inst_37819 = (state_37859[(7)]);
var inst_37835 = cljs.core.vec.call(null,inst_37819);
var state_37859__$1 = state_37859;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37859__$1,(11),out,inst_37835);
} else {
if((state_val_37860 === (5))){
var inst_37820 = (state_37859[(8)]);
var inst_37827 = (state_37859[(10)]);
var inst_37823 = (state_37859[(9)]);
var inst_37827__$1 = f.call(null,inst_37823);
var inst_37828 = cljs.core._EQ_.call(null,inst_37827__$1,inst_37820);
var inst_37829 = cljs.core.keyword_identical_QMARK_.call(null,inst_37820,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_37830 = (inst_37828) || (inst_37829);
var state_37859__$1 = (function (){var statearr_37873 = state_37859;
(statearr_37873[(10)] = inst_37827__$1);

return statearr_37873;
})();
if(cljs.core.truth_(inst_37830)){
var statearr_37874_37897 = state_37859__$1;
(statearr_37874_37897[(1)] = (8));

} else {
var statearr_37875_37898 = state_37859__$1;
(statearr_37875_37898[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37860 === (14))){
var inst_37852 = (state_37859[(2)]);
var inst_37853 = cljs.core.async.close_BANG_.call(null,out);
var state_37859__$1 = (function (){var statearr_37877 = state_37859;
(statearr_37877[(13)] = inst_37852);

return statearr_37877;
})();
var statearr_37878_37899 = state_37859__$1;
(statearr_37878_37899[(2)] = inst_37853);

(statearr_37878_37899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37860 === (10))){
var inst_37842 = (state_37859[(2)]);
var state_37859__$1 = state_37859;
var statearr_37879_37900 = state_37859__$1;
(statearr_37879_37900[(2)] = inst_37842);

(statearr_37879_37900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37860 === (8))){
var inst_37819 = (state_37859[(7)]);
var inst_37827 = (state_37859[(10)]);
var inst_37823 = (state_37859[(9)]);
var inst_37832 = inst_37819.push(inst_37823);
var tmp37876 = inst_37819;
var inst_37819__$1 = tmp37876;
var inst_37820 = inst_37827;
var state_37859__$1 = (function (){var statearr_37880 = state_37859;
(statearr_37880[(7)] = inst_37819__$1);

(statearr_37880[(8)] = inst_37820);

(statearr_37880[(14)] = inst_37832);

return statearr_37880;
})();
var statearr_37881_37901 = state_37859__$1;
(statearr_37881_37901[(2)] = null);

(statearr_37881_37901[(1)] = (2));


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
});})(c__35983__auto___37887,out))
;
return ((function (switch__35893__auto__,c__35983__auto___37887,out){
return (function() {
var cljs$core$async$state_machine__35894__auto__ = null;
var cljs$core$async$state_machine__35894__auto____0 = (function (){
var statearr_37882 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37882[(0)] = cljs$core$async$state_machine__35894__auto__);

(statearr_37882[(1)] = (1));

return statearr_37882;
});
var cljs$core$async$state_machine__35894__auto____1 = (function (state_37859){
while(true){
var ret_value__35895__auto__ = (function (){try{while(true){
var result__35896__auto__ = switch__35893__auto__.call(null,state_37859);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35896__auto__;
}
break;
}
}catch (e37883){if((e37883 instanceof Object)){
var ex__35897__auto__ = e37883;
var statearr_37884_37902 = state_37859;
(statearr_37884_37902[(5)] = ex__35897__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37859);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37883;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37903 = state_37859;
state_37859 = G__37903;
continue;
} else {
return ret_value__35895__auto__;
}
break;
}
});
cljs$core$async$state_machine__35894__auto__ = function(state_37859){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35894__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35894__auto____1.call(this,state_37859);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35894__auto____0;
cljs$core$async$state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35894__auto____1;
return cljs$core$async$state_machine__35894__auto__;
})()
;})(switch__35893__auto__,c__35983__auto___37887,out))
})();
var state__35985__auto__ = (function (){var statearr_37885 = f__35984__auto__.call(null);
(statearr_37885[(6)] = c__35983__auto___37887);

return statearr_37885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35985__auto__);
});})(c__35983__auto___37887,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1510655882936
