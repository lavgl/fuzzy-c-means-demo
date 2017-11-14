// Compiled by ClojureScript 1.9.908 {}
goog.provide('fuzzy_c_means_demo.utils');
goog.require('cljs.core');
goog.require('sablono.util');
fuzzy_c_means_demo.utils.adapt_react_class = (function fuzzy_c_means_demo$utils$adapt_react_class(react_class){
return (function() { 
var G__39183__delegate = function (args){
var vec__39180 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args),cljs.core.rest.call(null,args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args], null));
var opts = cljs.core.nth.call(null,vec__39180,(0),null);
var children = cljs.core.nth.call(null,vec__39180,(1),null);
var type_SHARP_ = cljs.core.first.call(null,children);
var new_children = ((cljs.core.vector_QMARK_.call(null,type_SHARP_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,children)], null):children);
return cljs.core.apply.call(null,React.createElement,react_class,cljs.core.clj__GT_js.call(null,sablono.util.html_to_dom_attrs.call(null,opts)),new_children);
};
var G__39183 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39184__i = 0, G__39184__a = new Array(arguments.length -  0);
while (G__39184__i < G__39184__a.length) {G__39184__a[G__39184__i] = arguments[G__39184__i + 0]; ++G__39184__i;}
  args = new cljs.core.IndexedSeq(G__39184__a,0,null);
} 
return G__39183__delegate.call(this,args);};
G__39183.cljs$lang$maxFixedArity = 0;
G__39183.cljs$lang$applyTo = (function (arglist__39185){
var args = cljs.core.seq(arglist__39185);
return G__39183__delegate(args);
});
G__39183.cljs$core$IFn$_invoke$arity$variadic = G__39183__delegate;
return G__39183;
})()
;
});
fuzzy_c_means_demo.utils.has_history_QMARK_ = (function fuzzy_c_means_demo$utils$has_history_QMARK_(state){
return cljs.core.seq.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(state));
});
fuzzy_c_means_demo.utils.iterations_count = (function fuzzy_c_means_demo$utils$iterations_count(state){
if(cljs.core.truth_(fuzzy_c_means_demo.utils.has_history_QMARK_.call(null,state))){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(state));
} else {
return (1);
}
});
fuzzy_c_means_demo.utils.generate_n_colors = (function fuzzy_c_means_demo$utils$generate_n_colors(n){
var angle = ((360) / n);
var rotate = ((function (angle){
return (function (p1__39186_SHARP_){
return (p1__39186_SHARP_ + angle);
});})(angle))
;
var angles = cljs.core.iterate.call(null,rotate,(0));
var colors = cljs.core.map.call(null,((function (angle,rotate,angles){
return (function (p1__39187_SHARP_){
return ["hsl(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__39187_SHARP_),",100%,50%)"].join('');
});})(angle,rotate,angles))
,angles);
return cljs.core.vec.call(null,cljs.core.take.call(null,n,colors));
});

//# sourceMappingURL=utils.js.map?rel=1510655885116
