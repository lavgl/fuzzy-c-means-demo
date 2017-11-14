// Compiled by ClojureScript 1.9.908 {}
goog.provide('oops.config');
goog.require('cljs.core');
oops.config.get_initial_runtime_config = (function oops$config$get_initial_runtime_config(){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"unexpected-empty-selector","unexpected-empty-selector",-572791900),new cljs.core.Keyword(null,"warning-reporting","warning-reporting",-319054391),new cljs.core.Keyword(null,"use-envelope","use-envelope",-2007197780),new cljs.core.Keyword(null,"error-reporting","error-reporting",1274700782),new cljs.core.Keyword(null,"expected-function-value","expected-function-value",-1399123630),new cljs.core.Keyword(null,"child-factory","child-factory",-1019029066),new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.Keyword(null,"unexpected-punching-selector","unexpected-punching-selector",-1934135338),new cljs.core.Keyword(null,"throw-errors-from-macro-call-sites","throw-errors-from-macro-call-sites",-1338743049),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.Keyword(null,"unexpected-soft-selector","unexpected-soft-selector",-1117708580),new cljs.core.Keyword(null,"missing-object-key","missing-object-key",-1300201731)],[new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"console","console",1228072057),true,new cljs.core.Keyword(null,"throw","throw",-1044625833),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"js-obj","js-obj",-1298148277),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"warn","warn",-436710552),true,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"error","error",-978969032)]);
});
oops.config._STAR_runtime_config_STAR_ = oops.config.get_initial_runtime_config.call(null);
oops.config.set_current_runtime_config_BANG_ = (function oops$config$set_current_runtime_config_BANG_(new_config){
if(cljs.core.map_QMARK_.call(null,new_config)){
} else {
throw (new Error("Assert failed: (map? new-config)"));
}

oops.config._STAR_runtime_config_STAR_ = new_config;

return new_config;
});
oops.config.get_current_runtime_config = (function oops$config$get_current_runtime_config(){
return oops.config._STAR_runtime_config_STAR_;
});
oops.config.update_current_runtime_config_BANG_ = (function oops$config$update_current_runtime_config_BANG_(var_args){
var args__31332__auto__ = [];
var len__31325__auto___32410 = arguments.length;
var i__31326__auto___32411 = (0);
while(true){
if((i__31326__auto___32411 < len__31325__auto___32410)){
args__31332__auto__.push((arguments[i__31326__auto___32411]));

var G__32412 = (i__31326__auto___32411 + (1));
i__31326__auto___32411 = G__32412;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((1) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((1)),(0),null)):null);
return oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31333__auto__);
});

oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f_or_map,args){
if(cljs.core.map_QMARK_.call(null,f_or_map)){
return oops.config.update_current_runtime_config_BANG_.call(null,cljs.core.merge,f_or_map);
} else {
return oops.config.set_current_runtime_config_BANG_.call(null,cljs.core.apply.call(null,f_or_map,oops.config.get_current_runtime_config.call(null),args));
}
});

oops.config.update_current_runtime_config_BANG_.cljs$lang$maxFixedArity = (1);

oops.config.update_current_runtime_config_BANG_.cljs$lang$applyTo = (function (seq32408){
var G__32409 = cljs.core.first.call(null,seq32408);
var seq32408__$1 = cljs.core.next.call(null,seq32408);
return oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32409,seq32408__$1);
});

oops.config.get_config_key = (function oops$config$get_config_key(var_args){
var args__31332__auto__ = [];
var len__31325__auto___32419 = arguments.length;
var i__31326__auto___32420 = (0);
while(true){
if((i__31326__auto___32420 < len__31325__auto___32419)){
args__31332__auto__.push((arguments[i__31326__auto___32420]));

var G__32421 = (i__31326__auto___32420 + (1));
i__31326__auto___32420 = G__32421;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((1) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((1)),(0),null)):null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31333__auto__);
});

oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic = (function (key,p__32415){
var vec__32416 = p__32415;
var config = cljs.core.nth.call(null,vec__32416,(0),null);
return key.call(null,(function (){var or__30048__auto__ = config;
if(cljs.core.truth_(or__30048__auto__)){
return or__30048__auto__;
} else {
return oops.config.get_current_runtime_config.call(null);
}
})());
});

oops.config.get_config_key.cljs$lang$maxFixedArity = (1);

oops.config.get_config_key.cljs$lang$applyTo = (function (seq32413){
var G__32414 = cljs.core.first.call(null,seq32413);
var seq32413__$1 = cljs.core.next.call(null,seq32413);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(G__32414,seq32413__$1);
});

oops.config.has_config_key_QMARK_ = (function oops$config$has_config_key_QMARK_(var_args){
var args__31332__auto__ = [];
var len__31325__auto___32428 = arguments.length;
var i__31326__auto___32429 = (0);
while(true){
if((i__31326__auto___32429 < len__31325__auto___32428)){
args__31332__auto__.push((arguments[i__31326__auto___32429]));

var G__32430 = (i__31326__auto___32429 + (1));
i__31326__auto___32429 = G__32430;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((1) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((1)),(0),null)):null);
return oops.config.has_config_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31333__auto__);
});

oops.config.has_config_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (key,p__32424){
var vec__32425 = p__32424;
var config = cljs.core.nth.call(null,vec__32425,(0),null);
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("oops.config","not-found","oops.config/not-found",105443457),cljs.core.get.call(null,(function (){var or__30048__auto__ = config;
if(cljs.core.truth_(or__30048__auto__)){
return or__30048__auto__;
} else {
return oops.config.get_current_runtime_config.call(null);
}
})(),key,new cljs.core.Keyword("oops.config","not-found","oops.config/not-found",105443457)));
});

oops.config.has_config_key_QMARK_.cljs$lang$maxFixedArity = (1);

oops.config.has_config_key_QMARK_.cljs$lang$applyTo = (function (seq32422){
var G__32423 = cljs.core.first.call(null,seq32422);
var seq32422__$1 = cljs.core.next.call(null,seq32422);
return oops.config.has_config_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic(G__32423,seq32422__$1);
});

oops.config.get_error_reporting = (function oops$config$get_error_reporting(var_args){
var args__31332__auto__ = [];
var len__31325__auto___32436 = arguments.length;
var i__31326__auto___32437 = (0);
while(true){
if((i__31326__auto___32437 < len__31325__auto___32436)){
args__31332__auto__.push((arguments[i__31326__auto___32437]));

var G__32438 = (i__31326__auto___32437 + (1));
i__31326__auto___32437 = G__32438;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((0) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((0)),(0),null)):null);
return oops.config.get_error_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__31333__auto__);
});

oops.config.get_error_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__32432){
var vec__32433 = p__32432;
var config = cljs.core.nth.call(null,vec__32433,(0),null);
return oops.config.get_config_key.call(null,new cljs.core.Keyword(null,"error-reporting","error-reporting",1274700782),config);
});

oops.config.get_error_reporting.cljs$lang$maxFixedArity = (0);

oops.config.get_error_reporting.cljs$lang$applyTo = (function (seq32431){
return oops.config.get_error_reporting.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32431));
});

oops.config.get_warning_reporting = (function oops$config$get_warning_reporting(var_args){
var args__31332__auto__ = [];
var len__31325__auto___32444 = arguments.length;
var i__31326__auto___32445 = (0);
while(true){
if((i__31326__auto___32445 < len__31325__auto___32444)){
args__31332__auto__.push((arguments[i__31326__auto___32445]));

var G__32446 = (i__31326__auto___32445 + (1));
i__31326__auto___32445 = G__32446;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((0) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((0)),(0),null)):null);
return oops.config.get_warning_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__31333__auto__);
});

oops.config.get_warning_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__32440){
var vec__32441 = p__32440;
var config = cljs.core.nth.call(null,vec__32441,(0),null);
return oops.config.get_config_key.call(null,new cljs.core.Keyword(null,"warning-reporting","warning-reporting",-319054391),config);
});

oops.config.get_warning_reporting.cljs$lang$maxFixedArity = (0);

oops.config.get_warning_reporting.cljs$lang$applyTo = (function (seq32439){
return oops.config.get_warning_reporting.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32439));
});

oops.config.get_suppress_reporting = (function oops$config$get_suppress_reporting(var_args){
var args__31332__auto__ = [];
var len__31325__auto___32452 = arguments.length;
var i__31326__auto___32453 = (0);
while(true){
if((i__31326__auto___32453 < len__31325__auto___32452)){
args__31332__auto__.push((arguments[i__31326__auto___32453]));

var G__32454 = (i__31326__auto___32453 + (1));
i__31326__auto___32453 = G__32454;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((0) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((0)),(0),null)):null);
return oops.config.get_suppress_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__31333__auto__);
});

oops.config.get_suppress_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__32448){
var vec__32449 = p__32448;
var config = cljs.core.nth.call(null,vec__32449,(0),null);
return oops.config.get_config_key.call(null,new cljs.core.Keyword(null,"suppress-reporting","suppress-reporting",43885458),config);
});

oops.config.get_suppress_reporting.cljs$lang$maxFixedArity = (0);

oops.config.get_suppress_reporting.cljs$lang$applyTo = (function (seq32447){
return oops.config.get_suppress_reporting.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32447));
});

oops.config.get_child_factory = (function oops$config$get_child_factory(var_args){
var args__31332__auto__ = [];
var len__31325__auto___32460 = arguments.length;
var i__31326__auto___32461 = (0);
while(true){
if((i__31326__auto___32461 < len__31325__auto___32460)){
args__31332__auto__.push((arguments[i__31326__auto___32461]));

var G__32462 = (i__31326__auto___32461 + (1));
i__31326__auto___32461 = G__32462;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((0) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((0)),(0),null)):null);
return oops.config.get_child_factory.cljs$core$IFn$_invoke$arity$variadic(argseq__31333__auto__);
});

oops.config.get_child_factory.cljs$core$IFn$_invoke$arity$variadic = (function (p__32456){
var vec__32457 = p__32456;
var config = cljs.core.nth.call(null,vec__32457,(0),null);
return oops.config.get_config_key.call(null,new cljs.core.Keyword(null,"child-factory","child-factory",-1019029066),config);
});

oops.config.get_child_factory.cljs$lang$maxFixedArity = (0);

oops.config.get_child_factory.cljs$lang$applyTo = (function (seq32455){
return oops.config.get_child_factory.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32455));
});

oops.config.set_child_factory_BANG_ = (function oops$config$set_child_factory_BANG_(new_factory_fn){
return oops.config.update_current_runtime_config_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"child-factory","child-factory",-1019029066),new_factory_fn], null));
});
oops.config.throw_errors_from_macro_call_sites_QMARK_ = (function oops$config$throw_errors_from_macro_call_sites_QMARK_(var_args){
var args__31332__auto__ = [];
var len__31325__auto___32468 = arguments.length;
var i__31326__auto___32469 = (0);
while(true){
if((i__31326__auto___32469 < len__31325__auto___32468)){
args__31332__auto__.push((arguments[i__31326__auto___32469]));

var G__32470 = (i__31326__auto___32469 + (1));
i__31326__auto___32469 = G__32470;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((0) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((0)),(0),null)):null);
return oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__31333__auto__);
});

oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (p__32464){
var vec__32465 = p__32464;
var config = cljs.core.nth.call(null,vec__32465,(0),null);
return oops.config.get_config_key.call(null,new cljs.core.Keyword(null,"throw-errors-from-macro-call-sites","throw-errors-from-macro-call-sites",-1338743049),config) === true;
});

oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$lang$maxFixedArity = (0);

oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$lang$applyTo = (function (seq32463){
return oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32463));
});

oops.config.use_envelope_QMARK_ = (function oops$config$use_envelope_QMARK_(var_args){
var args__31332__auto__ = [];
var len__31325__auto___32476 = arguments.length;
var i__31326__auto___32477 = (0);
while(true){
if((i__31326__auto___32477 < len__31325__auto___32476)){
args__31332__auto__.push((arguments[i__31326__auto___32477]));

var G__32478 = (i__31326__auto___32477 + (1));
i__31326__auto___32477 = G__32478;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((0) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((0)),(0),null)):null);
return oops.config.use_envelope_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__31333__auto__);
});

oops.config.use_envelope_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (p__32472){
var vec__32473 = p__32472;
var config = cljs.core.nth.call(null,vec__32473,(0),null);
return oops.config.get_config_key.call(null,new cljs.core.Keyword(null,"use-envelope","use-envelope",-2007197780),config) === true;
});

oops.config.use_envelope_QMARK_.cljs$lang$maxFixedArity = (0);

oops.config.use_envelope_QMARK_.cljs$lang$applyTo = (function (seq32471){
return oops.config.use_envelope_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32471));
});


//# sourceMappingURL=config.js.map?rel=1510655878160
