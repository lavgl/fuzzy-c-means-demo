// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs_react_material_ui.rum');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('cljs_react_material_ui.core');
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.selectable_list = (function() { 
var cljs_react_material_ui$rum$selectable_list__delegate = function (args__39487__auto__){
var vec__39499 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__39487__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__39487__auto__),cljs.core.rest.call(null,args__39487__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__39487__auto__], null));
var opts__39488__auto__ = cljs.core.nth.call(null,vec__39499,(0),null);
var children__39489__auto__ = cljs.core.nth.call(null,vec__39499,(1),null);
var type__39490__auto__ = cljs.core.first.call(null,children__39489__auto__);
var new_children__39491__auto__ = ((cljs.core.vector_QMARK_.call(null,type__39490__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__39489__auto__))], null):children__39489__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,(MaterialUI["makeSelectable"]).call(null,(MaterialUI["List"])),cljs.core.cons.call(null,opts__39488__auto__,new_children__39491__auto__));
};
var cljs_react_material_ui$rum$selectable_list = function (var_args){
var args__39487__auto__ = null;
if (arguments.length > 0) {
var G__39502__i = 0, G__39502__a = new Array(arguments.length -  0);
while (G__39502__i < G__39502__a.length) {G__39502__a[G__39502__i] = arguments[G__39502__i + 0]; ++G__39502__i;}
  args__39487__auto__ = new cljs.core.IndexedSeq(G__39502__a,0,null);
} 
return cljs_react_material_ui$rum$selectable_list__delegate.call(this,args__39487__auto__);};
cljs_react_material_ui$rum$selectable_list.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$selectable_list.cljs$lang$applyTo = (function (arglist__39503){
var args__39487__auto__ = cljs.core.seq(arglist__39503);
return cljs_react_material_ui$rum$selectable_list__delegate(args__39487__auto__);
});
cljs_react_material_ui$rum$selectable_list.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$selectable_list__delegate;
return cljs_react_material_ui$rum$selectable_list;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.app_bar = (function() { 
var cljs_react_material_ui$rum$app_bar__delegate = function (args__39487__auto__){
var vec__39504 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__39487__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__39487__auto__),cljs.core.rest.call(null,args__39487__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__39487__auto__], null));
var opts__39488__auto__ = cljs.core.nth.call(null,vec__39504,(0),null);
var children__39489__auto__ = cljs.core.nth.call(null,vec__39504,(1),null);
var type__39490__auto__ = cljs.core.first.call(null,children__39489__auto__);
var new_children__39491__auto__ = ((cljs.core.vector_QMARK_.call(null,type__39490__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__39489__auto__))], null):children__39489__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,(MaterialUI["AppBar"]),cljs.core.cons.call(null,opts__39488__auto__,new_children__39491__auto__));
};
var cljs_react_material_ui$rum$app_bar = function (var_args){
var args__39487__auto__ = null;
if (arguments.length > 0) {
var G__39507__i = 0, G__39507__a = new Array(arguments.length -  0);
while (G__39507__i < G__39507__a.length) {G__39507__a[G__39507__i] = arguments[G__39507__i + 0]; ++G__39507__i;}
  args__39487__auto__ = new cljs.core.IndexedSeq(G__39507__a,0,null);
} 
return cljs_react_material_ui$rum$app_bar__delegate.call(this,args__39487__auto__);};
cljs_react_material_ui$rum$app_bar.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$app_bar.cljs$lang$applyTo = (function (arglist__39508){
var args__39487__auto__ = cljs.core.seq(arglist__39508);
return cljs_react_material_ui$rum$app_bar__delegate(args__39487__auto__);
});
cljs_react_material_ui$rum$app_bar.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$app_bar__delegate;
return cljs_react_material_ui$rum$app_bar;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.auto_complete = (function() { 
var cljs_react_material_ui$rum$auto_complete__delegate = function (args__39487__auto__){
var vec__39509 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__39487__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__39487__auto__),cljs.core.rest.call(null,args__39487__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__39487__auto__], null));
var opts__39488__auto__ = cljs.core.nth.call(null,vec__39509,(0),null);
var children__39489__auto__ = cljs.core.nth.call(null,vec__39509,(1),null);
var type__39490__auto__ = cljs.core.first.call(null,children__39489__auto__);
var new_children__39491__auto__ = ((cljs.core.vector_QMARK_.call(null,type__39490__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__39489__auto__))], null):children__39489__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,(MaterialUI["AutoComplete"]),cljs.core.cons.call(null,opts__39488__auto__,new_children__39491__auto__));
};
var cljs_react_material_ui$rum$auto_complete = function (var_args){
var args__39487__auto__ = null;
if (arguments.length > 0) {
var G__39512__i = 0, G__39512__a = new Array(arguments.length -  0);
while (G__39512__i < G__39512__a.length) {G__39512__a[G__39512__i] = arguments[G__39512__i + 0]; ++G__39512__i;}
  args__39487__auto__ = new cljs.core.IndexedSeq(G__39512__a,0,null);
} 
return cljs_react_material_ui$rum$auto_complete__delegate.call(this,args__39487__auto__);};
cljs_react_material_ui$rum$auto_complete.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$auto_complete.cljs$lang$applyTo = (function (arglist__39513){
var args__39487__auto__ = cljs.core.seq(arglist__39513);
return cljs_react_material_ui$rum$auto_complete__delegate(args__39487__auto__);
});
cljs_react_material_ui$rum$auto_complete.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$auto_complete__delegate;
return cljs_react_material_ui$rum$auto_complete;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.avatar = (function() { 
var cljs_react_material_ui$rum$avatar__delegate = function (args__39487__auto__){
var vec__39514 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__39487__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__39487__auto__),cljs.core.rest.call(null,args__39487__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__39487__auto__], null));
var opts__39488__auto__ = cljs.core.nth.call(null,vec__39514,(0),null);
var children__39489__auto__ = cljs.core.nth.call(null,vec__39514,(1),null);
var type__39490__auto__ = cljs.core.first.call(null,children__39489__auto__);
var new_children__39491__auto__ = ((cljs.core.vector_QMARK_.call(null,type__39490__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__39489__auto__))], null):children__39489__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,(MaterialUI["Avatar"]),cljs.core.cons.call(null,opts__39488__auto__,new_children__39491__auto__));
};
var cljs_react_material_ui$rum$avatar = function (var_args){
var args__39487__auto__ = null;
if (arguments.length > 0) {
var G__39517__i = 0, G__39517__a = new Array(arguments.length -  0);
while (G__39517__i < G__39517__a.length) {G__39517__a[G__39517__i] = arguments[G__39517__i + 0]; ++G__39517__i;}
  args__39487__auto__ = new cljs.core.IndexedSeq(G__39517__a,0,null);
} 
return cljs_react_material_ui$rum$avatar__delegate.call(this,args__39487__auto__);};
cljs_react_material_ui$rum$avatar.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$avatar.cljs$lang$applyTo = (function (arglist__39518){
var args__39487__auto__ = cljs.core.seq(arglist__39518);
return cljs_react_material_ui$rum$avatar__delegate(args__39487__auto__);
});
cljs_react_material_ui$rum$avatar.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$avatar__delegate;
return cljs_react_material_ui$rum$avatar;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.badge = (function() { 
var cljs_react_material_ui$rum$badge__delegate = function (args__39487__auto__){
var vec__39519 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__39487__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__39487__auto__),cljs.core.rest.call(null,args__39487__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__39487__auto__], null));
var opts__39488__auto__ = cljs.core.nth.call(null,vec__39519,(0),null);
var children__39489__auto__ = cljs.core.nth.call(null,vec__39519,(1),null);
var type__39490__auto__ = cljs.core.first.call(null,children__39489__auto__);
var new_children__39491__auto__ = ((cljs.core.vector_QMARK_.call(null,type__39490__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__39489__auto__))], null):children__39489__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,(MaterialUI["Badge"]),cljs.core.cons.call(null,opts__39488__auto__,new_children__39491__auto__));
};
var cljs_react_material_ui$rum$badge = function (var_args){
var args__39487__auto__ = null;
if (arguments.length > 0) {
var G__39522__i = 0, G__39522__a = new Array(arguments.length -  0);
while (G__39522__i < G__39522__a.length) {G__39522__a[G__39522__i] = arguments[G__39522__i + 0]; ++G__39522__i;}
  args__39487__auto__ = new cljs.core.IndexedSeq(G__39522__a,0,null);
} 
return cljs_react_material_ui$rum$badge__delegate.call(this,args__39487__auto__);};
cljs_react_material_ui$rum$badge.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$badge.cljs$lang$applyTo = (function (arglist__39523){
var args__39487__auto__ = cljs.core.seq(arglist__39523);
return cljs_react_material_ui$rum$badge__delegate(args__39487__auto__);
});
cljs_react_material_ui$rum$badge.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$badge__delegate;
return cljs_react_material_ui$rum$badge;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.bottom_navigation = (function() { 
var cljs_react_material_ui$rum$bottom_navigation__delegate = function (args__39487__auto__){
var vec__39524 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__39487__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__39487__auto__),cljs.core.rest.call(null,args__39487__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__39487__auto__], null));
var opts__39488__auto__ = cljs.core.nth.call(null,vec__39524,(0),null);
var children__39489__auto__ = cljs.core.nth.call(null,vec__39524,(1),null);
var type__39490__auto__ = cljs.core.first.call(null,children__39489__auto__);
var new_children__39491__auto__ = ((cljs.core.vector_QMARK_.call(null,type__39490__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__39489__auto__))], null):children__39489__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,(MaterialUI["BottomNavigation"]),cljs.core.cons.call(null,opts__39488__auto__,new_children__39491__auto__));
};
var cljs_react_material_ui$rum$bottom_navigation = function (var_args){
var args__39487__auto__ = null;
if (arguments.length > 0) {
var G__39527__i = 0, G__39527__a = new Array(arguments.length -  0);
while (G__39527__i < G__39527__a.length) {G__39527__a[G__39527__i] = arguments[G__39527__i + 0]; ++G__39527__i;}
  args__39487__auto__ = new cljs.core.IndexedSeq(G__39527__a,0,null);
} 
return cljs_react_material_ui$rum$bottom_navigation__delegate.call(this,args__39487__auto__);};
cljs_react_material_ui$rum$bottom_navigation.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$bottom_navigation.cljs$lang$applyTo = (function (arglist__39528){
var args__39487__auto__ = cljs.core.seq(arglist__39528);
return cljs_react_material_ui$rum$bottom_navigation__delegate(args__39487__auto__);
});
cljs_react_material_ui$rum$bottom_navigation.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$bottom_navigation__delegate;
return cljs_react_material_ui$rum$bottom_navigation;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.bottom_navigation_item = (function() { 
var cljs_react_material_ui$rum$bottom_navigation_item__delegate = function (args__39487__auto__){
var vec__39529 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__39487__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__39487__auto__),cljs.core.rest.call(null,args__39487__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__39487__auto__], null));
var opts__39488__auto__ = cljs.core.nth.call(null,vec__39529,(0),null);
var children__39489__auto__ = cljs.core.nth.call(null,vec__39529,(1),null);
var type__39490__auto__ = cljs.core.first.call(null,children__39489__auto__);
var new_children__39491__auto__ = ((cljs.core.vector_QMARK_.call(null,type__39490__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__39489__auto__))], null):children__39489__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,(MaterialUI["BottomNavigationItem"]),cljs.core.cons.call(null,opts__39488__auto__,new_children__39491__auto__));
};
var cljs_react_material_ui$rum$bottom_navigation_item = function (var_args){
var args__39487__auto__ = null;
if (arguments.length > 0) {
var G__39532__i = 0, G__39532__a = new Array(arguments.length -  0);
while (G__39532__i < G__39532__a.length) {G__39532__a[G__39532__i] = arguments[G__39532__i + 0]; ++G__39532__i;}
  args__39487__auto__ = new cljs.core.IndexedSeq(G__39532__a,0,null);
} 
return cljs_react_material_ui$rum$bottom_navigation_item__delegate.call(this,args__39487__auto__);};
cljs_react_material_ui$rum$bottom_navigation_item.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$bottom_navigation_item.cljs$lang$applyTo = (function (arglist__39533){
var args__39487__auto__ = cljs.core.seq(arglist__39533);
return cljs_react_material_ui$rum$bottom_navigation_item__delegate(args__39487__auto__);
});
cljs_react_material_ui$rum$bottom_navigation_item.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$bottom_navigation_item__delegate;
return cljs_react_material_ui$rum$bottom_navigation_item;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.card = (function() { 
var cljs_react_material_ui$rum$card__delegate = function (args__39487__auto__){
var vec__39534 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__39487__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__39487__auto__),cljs.core.rest.call(null,args__39487__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__39487__auto__], null));
var opts__39488__auto__ = cljs.core.nth.call(null,vec__39534,(0),null);
var children__39489__auto__ = cljs.core.nth.call(null,vec__39534,(1),null);
var type__39490__auto__ = cljs.core.first.call(null,children__39489__auto__);
var new_children__39491__auto__ = ((cljs.core.vector_QMARK_.call(null,type__39490__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__39489__auto__))], null):children__39489__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,(MaterialUI["Card"]),cljs.core.cons.call(null,opts__39488__auto__,new_children__39491__auto__));
};
var cljs_react_material_ui$rum$card = function (var_args){
var args__39487__auto__ = null;
if (arguments.length > 0) {
var G__39537__i = 0, G__39537__a = new Array(arguments.length -  0);
while (G__39537__i < G__39537__a.length) {G__39537__a[G__39537__i] = arguments[G__39537__i + 0]; ++G__39537__i;}
  args__39487__auto__ = new cljs.core.IndexedSeq(G__39537__a,0,null);
} 
return cljs_react_material_ui$rum$card__delegate.call(this,args__39487__auto__);};
cljs_react_material_ui$rum$card.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$card.cljs$lang$applyTo = (function (arglist__39538){
var args__39487__auto__ = cljs.core.seq(arglist__39538);
return cljs_react_material_ui$rum$card__delegate(args__39487__auto__);
});
cljs_react_material_ui$rum$card.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$card__delegate;
return cljs_react_material_ui$rum$card;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.card_actions = (function() { 
var cljs_react_material_ui$rum$card_actions__delegate = function (args__39487__auto__){
var vec__39539 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__39487__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__39487__auto__),cljs.core.rest.call(null,args__39487__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__39487__auto__], null));
var opts__39488__auto__ = cljs.core.nth.call(null,vec__39539,(0),null);
var children__39489__auto__ = cljs.core.nth.call(null,vec__39539,(1),null);
var type__39490__auto__ = cljs.core.first.call(null,children__39489__auto__);
var new_children__39491__auto__ = ((cljs.core.vector_QMARK_.call(null,type__39490__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__39489__auto__))], null):children__39489__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,(MaterialUI["CardActions"]),cljs.core.cons.call(null,opts__39488__auto__,new_children__39491__auto__));
};
var cljs_react_material_ui$rum$card_actions = function (var_args){
var args__39487__auto__ = null;
if (arguments.length > 0) {
var G__39542__i = 0, G__39542__a = new Array(arguments.length -  0);
while (G__39542__i < G__39542__a.length) {G__39542__a[G__39542__i] = arguments[G__39542__i + 0]; ++G__39542__i;}
  args__39487__auto__ = new cljs.core.IndexedSeq(G__39542__a,0,null);
} 
return cljs_react_material_ui$rum$card_actions__delegate.call(this,args__39487__auto__);};
cljs_react_material_ui$rum$card_actions.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$card_actions.cljs$lang$applyTo = (function (arglist__39543){
var args__39487__auto__ = cljs.core.seq(arglist__39543);
return cljs_react_material_ui$rum$card_actions__delegate(args__39487__auto__);
});
cljs_react_material_ui$rum$card_actions.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$card_actions__delegate;
return cljs_react_material_ui$rum$card_actions;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.card_header = (function() { 
var cljs_react_material_ui$rum$card_header__delegate = function (args__39487__auto__){
var vec__39544 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__39487__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__39487__auto__),cljs.core.rest.call(null,args__39487__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__39487__auto__], null));
var opts__39488__auto__ = cljs.core.nth.call(null,vec__39544,(0),null);
var children__39489__auto__ = cljs.core.nth.call(null,vec__39544,(1),null);
var type__39490__auto__ = cljs.core.first.call(null,children__39489__auto__);
var new_children__39491__auto__ = ((cljs.core.vector_QMARK_.call(null,type__39490__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__39489__auto__))], null):children__39489__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,(MaterialUI["CardHeader"]),cljs.core.cons.call(null,opts__39488__auto__,new_children__39491__auto__));
};
var cljs_react_material_ui$rum$card_header = function (var_args){
var args__39487__auto__ = null;
if (arguments.length > 0) {
var G__39547__i = 0, G__39547__a = new Array(arguments.length -  0);
while (G__39547__i < G__39547__a.length) {G__39547__a[G__39547__i] = arguments[G__39547__i + 0]; ++G__39547__i;}
  args__39487__auto__ = new cljs.core.IndexedSeq(G__39547__a,0,null);
} 
return cljs_react_material_ui$rum$card_header__delegate.call(this,args__39487__auto__);};
cljs_react_material_ui$rum$card_header.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$card_header.cljs$lang$applyTo = (function (arglist__39548){
var args__39487__auto__ = cljs.core.seq(arglist__39548);
return cljs_react_material_ui$rum$card_header__delegate(args__39487__auto__);
});
cljs_react_material_ui$rum$card_header.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$card_header__delegate;
return cljs_react_material_ui$rum$card_header;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.card_media = (function() { 
var cljs_react_material_ui$rum$card_media__delegate = function (args__39487__auto__){
var vec__39549 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__39487__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__39487__auto__),cljs.core.rest.call(null,args__39487__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__39487__auto__], null));
var opts__39488__auto__ = cljs.core.nth.call(null,vec__39549,(0),null);
var children__39489__auto__ = cljs.core.nth.call(null,vec__39549,(1),null);
var type__39490__auto__ = cljs.core.first.call(null,children__39489__auto__);
var new_children__39491__auto__ = ((cljs.core.vector_QMARK_.call(null,type__39490__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__39489__auto__))], null):children__39489__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,(MaterialUI["CardMedia"]),cljs.core.cons.call(null,opts__39488__auto__,new_children__39491__auto__));
};
var cljs_react_material_ui$rum$card_media = function (var_args){
var args__39487__auto__ = null;
if (arguments.length > 0) {
var G__39552__i = 0, G__39552__a = new Array(arguments.length -  0);
while (G__39552__i < G__39552__a.length) {G__39552__a[G__39552__i] = arguments[G__39552__i + 0]; ++G__39552__i;}
  args__39487__auto__ = new cljs.core.IndexedSeq(G__39552__a,0,null);
} 
return cljs_react_material_ui$rum$card_media__delegate.call(this,args__39487__auto__);};
cljs_react_material_ui$rum$card_media.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$card_media.cljs$lang$applyTo = (function (arglist__39553){
var args__39487__auto__ = cljs.core.seq(arglist__39553);
return cljs_react_material_ui$rum$card_media__delegate(args__39487__auto__);
});
cljs_react_material_ui$rum$card_media.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$card_media__delegate;
return cljs_react_material_ui$rum$card_media;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.card_title = (function() { 
var cljs_react_material_ui$rum$card_title__delegate = function (args__39487__auto__){
var vec__39554 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__39487__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__39487__auto__),cljs.core.rest.call(null,args__39487__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__39487__auto__], null));
var opts__39488__auto__ = cljs.core.nth.call(null,vec__39554,(0),null);
var children__39489__auto__ = cljs.core.nth.call(null,vec__39554,(1),null);
var type__39490__auto__ = cljs.core.first.call(null,children__39489__auto__);
var new_children__39491__auto__ = ((cljs.core.vector_QMARK_.call(null,type__39490__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__39489__auto__))], null):children__39489__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,(MaterialUI["CardTitle"]),cljs.core.cons.call(null,opts__39488__auto__,new_children__39491__auto__));
};
var cljs_react_material_ui$rum$card_title = function (var_args){
var args__39487__auto__ = null;
if (arguments.length > 0) {
var G__39557__i = 0, G__39557__a = new Array(arguments.length -  0);
while (G__39557__i < G__39557__a.length) {G__39557__a[G__39557__i] = arguments[G__39557__i + 0]; ++G__39557__i;}
  args__39487__auto__ = new cljs.core.IndexedSeq(G__39557__a,0,null);
} 
return cljs_react_material_ui$rum$card_title__delegate.call(this,args__39487__auto__);};
cljs_react_material_ui$rum$card_title.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$card_title.cljs$lang$applyTo = (function (arglist__39558){
var args__39487__auto__ = cljs.core.seq(arglist__39558);
return cljs_react_material_ui$rum$card_title__delegate(args__39487__auto__);
});
cljs_react_material_ui$rum$card_title.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$card_title__delegate;
return cljs_react_material_ui$rum$card_title;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.card_text = (function() { 
var cljs_react_material_ui$rum$card_text__delegate = function (args__39487__auto__){
var vec__39559 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__39487__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__39487__auto__),cljs.core.rest.call(null,args__39487__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__39487__auto__], null));
var opts__39488__auto__ = cljs.core.nth.call(null,vec__39559,(0),null);
var children__39489__auto__ = cljs.core.nth.call(null,vec__39559,(1),null);
var type__39490__auto__ = cljs.core.first.call(null,children__39489__auto__);
var new_children__39491__auto__ = ((cljs.core.vector_QMARK_.call(null,type__39490__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__39489__auto__))], null):children__39489__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,(MaterialUI["CardText"]),cljs.core.cons.call(null,opts__39488__auto__,new_children__39491__auto__));
};
var cljs_react_material_ui$rum$card_text = function (var_args){
var args__39487__auto__ = null;
if (arguments.length > 0) {
var G__39562__i = 0, G__39562__a = new Array(arguments.length -  0);
while (G__39562__i < G__39562__a.length) {G__39562__a[G__39562__i] = arguments[G__39562__i + 0]; ++G__39562__i;}
  args__39487__auto__ = new cljs.core.IndexedSeq(G__39562__a,0,null);
} 
return cljs_react_material_ui$rum$card_text__delegate.call(this,args__39487__auto__);};
cljs_react_material_ui$rum$card_text.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$card_text.cljs$lang$applyTo = (function (arglist__39563){
var args__39487__auto__ = cljs.core.seq(arglist__39563);
return cljs_react_material_ui$rum$card_text__delegate(args__39487__auto__);
});
cljs_react_material_ui$rum$card_text.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$card_text__delegate;
return cljs_react_material_ui$rum$card_text;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.checkbox = (function() { 
var cljs_react_material_ui$rum$checkbox__delegate = function (args__39487__auto__){
var vec__39564 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__39487__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__39487__auto__),cljs.core.rest.call(null,args__39487__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__39487__auto__], null));
var opts__39488__auto__ = cljs.core.nth.call(null,vec__39564,(0),null);
var children__39489__auto__ = cljs.core.nth.call(null,vec__39564,(1),null);
var type__39490__auto__ = cljs.core.first.call(null,children__39489__auto__);
var new_children__39491__auto__ = ((cljs.core.vector_QMARK_.call(null,type__39490__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__39489__auto__))], null):children__39489__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,(MaterialUI["Checkbox"]),cljs.core.cons.call(null,opts__39488__auto__,new_children__39491__auto__));
};
var cljs_react_material_ui$rum$checkbox = function (var_args){
var args__39487__auto__ = null;
if (arguments.length > 0) {
var G__39567__i = 0, G__39567__a = new Array(arguments.length -  0);
while (G__39567__i < G__39567__a.length) {G__39567__a[G__39567__i] = arguments[G__39567__i + 0]; ++G__39567__i;}
  args__39487__auto__ = new cljs.core.IndexedSeq(G__39567__a,0,null);
} 
return cljs_react_material_ui$rum$checkbox__delegate.call(this,args__39487__auto__);};
cljs_react_material_ui$rum$checkbox.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$checkbox.cljs$lang$applyTo = (function (arglist__39568){
var args__39487__auto__ = cljs.core.seq(arglist__39568);
return cljs_react_material_ui$rum$checkbox__delegate(args__39487__auto__);
});
cljs_react_material_ui$rum$checkbox.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$checkbox__delegate;
return cljs_react_material_ui$rum$checkbox;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.chip = (function() { 
var cljs_react_material_ui$rum$chip__delegate = function (args__39487__auto__){
var vec__39569 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__39487__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__39487__auto__),cljs.core.rest.call(null,args__39487__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__39487__auto__], null));
var opts__39488__auto__ = cljs.core.nth.call(null,vec__39569,(0),null);
var children__39489__auto__ = cljs.core.nth.call(null,vec__39569,(1),null);
var type__39490__auto__ = cljs.core.first.call(null,children__39489__auto__);
var new_children__39491__auto__ = ((cljs.core.vector_QMARK_.call(null,type__39490__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__39489__auto__))], null):children__39489__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,(MaterialUI["Chip"]),cljs.core.cons.call(null,opts__39488__auto__,new_children__39491__auto__));
};
var cljs_react_material_ui$rum$chip = function (var_args){
var args__39487__auto__ = null;
if (arguments.length > 0) {
var G__39572__i = 0, G__39572__a = new Array(arguments.length -  0);
while (G__39572__i < G__39572__a.length) {G__39572__a[G__39572__i] = arguments[G__39572__i + 0]; ++G__39572__i;}
  args__39487__auto__ = new cljs.core.IndexedSeq(G__39572__a,0,null);
} 
return cljs_react_material_ui$rum$chip__delegate.call(this,args__39487__auto__);};
cljs_react_material_ui$rum$chip.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$chip.cljs$lang$applyTo = (function (arglist__39573){
var args__39487__auto__ = cljs.core.seq(arglist__39573);
return cljs_react_material_ui$rum$chip__delegate(args__39487__auto__);
});
cljs_react_material_ui$rum$chip.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$chip__delegate;
return cljs_react_material_ui$rum$chip;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.circular_progress = (function() { 
var cljs_react_material_ui$rum$circular_progress__delegate = function (args__39487__auto__){
var vec__39574 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__39487__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__39487__auto__),cljs.core.rest.call(null,args__39487__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__39487__auto__], null));
var opts__39488__auto__ = cljs.core.nth.call(null,vec__39574,(0),null);
var children__39489__auto__ = cljs.core.nth.call(null,vec__39574,(1),null);
var type__39490__auto__ = cljs.core.first.call(null,children__39489__auto__);
var new_children__39491__auto__ = ((cljs.core.vector_QMARK_.call(null,type__39490__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__39489__auto__))], null):children__39489__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,(MaterialUI["CircularProgress"]),cljs.core.cons.call(null,opts__39488__auto__,new_children__39491__auto__));
};
var cljs_react_material_ui$rum$circular_progress = function (var_args){
var args__39487__auto__ = null;
if (arguments.length > 0) {
var G__39577__i = 0, G__39577__a = new Array(arguments.length -  0);
while (G__39577__i < G__39577__a.length) {G__39577__a[G__39577__i] = arguments[G__39577__i + 0]; ++G__39577__i;}
  args__39487__auto__ = new cljs.core.IndexedSeq(G__39577__a,0,null);
} 
return cljs_react_material_ui$rum$circular_progress__delegate.call(this,args__39487__auto__);};
cljs_react_material_ui$rum$circular_progress.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$circular_progress.cljs$lang$applyTo = (function (arglist__39578){
var args__39487__auto__ = cljs.core.seq(arglist__39578);
return cljs_react_material_ui$rum$circular_progress__delegate(args__39487__auto__);
});
cljs_react_material_ui$rum$circular_progress.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$circular_progress__delegate;
return cljs_react_material_ui$rum$circular_progress;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.date_picker = (function() { 
var cljs_react_material_ui$rum$date_picker__delegate = function (args__39487__auto__){
var vec__39579 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__39487__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__39487__auto__),cljs.core.rest.call(null,args__39487__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__39487__auto__], null));
var opts__39488__auto__ = cljs.core.nth.call(null,vec__39579,(0),null);
var children__39489__auto__ = cljs.core.nth.call(null,vec__39579,(1),null);
var type__39490__auto__ = cljs.core.first.call(null,children__39489__auto__);
var new_children__39491__auto__ = ((cljs.core.vector_QMARK_.call(null,type__39490__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__39489__auto__))], null):children__39489__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,(MaterialUI["DatePicker"]),cljs.core.cons.call(null,opts__39488__auto__,new_children__39491__auto__));
};
var cljs_react_material_ui$rum$date_picker = function (var_args){
var args__39487__auto__ = null;
if (arguments.length > 0) {
var G__39582__i = 0, G__39582__a = new Array(arguments.length -  0);
while (G__39582__i < G__39582__a.length) {G__39582__a[G__39582__i] = arguments[G__39582__i + 0]; ++G__39582__i;}
  args__39487__auto__ = new cljs.core.IndexedSeq(G__39582__a,0,null);
} 
return cljs_react_material_ui$rum$date_picker__delegate.call(this,args__39487__auto__);};
cljs_react_material_ui$rum$date_picker.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$date_picker.cljs$lang$applyTo = (function (arglist__39583){
var args__39487__auto__ = cljs.core.seq(arglist__39583);
return cljs_react_material_ui$rum$date_picker__delegate(args__39487__auto__);
});
cljs_react_material_ui$rum$date_picker.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$date_picker__delegate;
return cljs_react_material_ui$rum$date_picker;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.dialog = (function() { 
var cljs_react_material_ui$rum$dialog__delegate = function (args__39487__auto__){
var vec__39584 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__39487__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__39487__auto__),cljs.core.rest.call(null,args__39487__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__39487__auto__], null));
var opts__39488__auto__ = cljs.core.nth.call(null,vec__39584,(0),null);
var children__39489__auto__ = cljs.core.nth.call(null,vec__39584,(1),null);
var type__39490__auto__ = cljs.core.first.call(null,children__39489__auto__);
var new_children__39491__auto__ = ((cljs.core.vector_QMARK_.call(null,type__39490__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__39489__auto__))], null):children__39489__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,(MaterialUI["Dialog"]),cljs.core.cons.call(null,opts__39488__auto__,new_children__39491__auto__));
};
var cljs_react_material_ui$rum$dialog = function (var_args){
var args__39487__auto__ = null;
if (arguments.length > 0) {
var G__39587__i = 0, G__39587__a = new Array(arguments.length -  0);
while (G__39587__i < G__39587__a.length) {G__39587__a[G__39587__i] = arguments[G__39587__i + 0]; ++G__39587__i;}
  args__39487__auto__ = new cljs.core.IndexedSeq(G__39587__a,0,null);
} 
return cljs_react_material_ui$rum$dialog__delegate.call(this,args__39487__auto__);};
cljs_react_material_ui$rum$dialog.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$dialog.cljs$lang$applyTo = (function (arglist__39588){
var args__39487__auto__ = cljs.core.seq(arglist__39588);
return cljs_react_material_ui$rum$dialog__delegate(args__39487__auto__);
});
cljs_react_material_ui$rum$dialog.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$dialog__delegate;
return cljs_react_material_ui$rum$dialog;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.divider = (function() { 
var cljs_react_material_ui$rum$divider__delegate = function (args__39487__auto__){
var vec__39589 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__39487__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__39487__auto__),cljs.core.rest.call(null,args__39487__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__39487__auto__], null));
var opts__39488__auto__ = cljs.core.nth.call(null,vec__39589,(0),null);
var children__39489__auto__ = cljs.core.nth.call(null,vec__39589,(1),null);
var type__39490__auto__ = cljs.core.first.call(null,children__39489__auto__);
var new_children__39491__auto__ = ((cljs.core.vector_QMARK_.call(null,type__39490__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__39489__auto__))], null):children__39489__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,(MaterialUI["Divider"]),cljs.core.cons.call(null,opts__39488__auto__,new_children__39491__auto__));
};
var cljs_react_material_ui$rum$divider = function (var_args){
var args__39487__auto__ = null;
if (arguments.length > 0) {
var G__39592__i = 0, G__39592__a = new Array(arguments.length -  0);
while (G__39592__i < G__39592__a.length) {G__39592__a[G__39592__i] = arguments[G__39592__i + 0]; ++G__39592__i;}
  args__39487__auto__ = new cljs.core.IndexedSeq(G__39592__a,0,null);
} 
return cljs_react_material_ui$rum$divider__delegate.call(this,args__39487__auto__);};
cljs_react_material_ui$rum$divider.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$divider.cljs$lang$applyTo = (function (arglist__39593){
var args__39487__auto__ = cljs.core.seq(arglist__39593);
return cljs_react_material_ui$rum$divider__delegate(args__39487__auto__);
});
cljs_react_material_ui$rum$divider.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$divider__delegate;
return cljs_react_material_ui$rum$divider;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.drawer = (function() { 
var cljs_react_material_ui$rum$drawer__delegate = function (args__39487__auto__){
var vec__39594 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__39487__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__39487__auto__),cljs.core.rest.call(null,args__39487__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__39487__auto__], null));
var opts__39488__auto__ = cljs.core.nth.call(null,vec__39594,(0),null);
var children__39489__auto__ = cljs.core.nth.call(null,vec__39594,(1),null);
var type__39490__auto__ = cljs.core.first.call(null,children__39489__auto__);
var new_children__39491__auto__ = ((cljs.core.vector_QMARK_.call(null,type__39490__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__39489__auto__))], null):children__39489__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,(MaterialUI["Drawer"]),cljs.core.cons.call(null,opts__39488__auto__,new_children__39491__auto__));
};
var cljs_react_material_ui$rum$drawer = function (var_args){
var args__39487__auto__ = null;
if (arguments.length > 0) {
var G__39597__i = 0, G__39597__a = new Array(arguments.length -  0);
while (G__39597__i < G__39597__a.length) {G__39597__a[G__39597__i] = arguments[G__39597__i + 0]; ++G__39597__i;}
  args__39487__auto__ = new cljs.core.IndexedSeq(G__39597__a,0,null);
} 
return cljs_react_material_ui$rum$drawer__delegate.call(this,args__39487__auto__);};
cljs_react_material_ui$rum$drawer.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$drawer.cljs$lang$applyTo = (function (arglist__39598){
var args__39487__auto__ = cljs.core.seq(arglist__39598);
return cljs_react_material_ui$rum$drawer__delegate(args__39487__auto__);
});
cljs_react_material_ui$rum$drawer.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$drawer__delegate;
return cljs_react_material_ui$rum$drawer;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.drop_down_menu = (function() { 
var cljs_react_material_ui$rum$drop_down_menu__delegate = function (args__39487__auto__){
var vec__39599 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__39487__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__39487__auto__),cljs.core.rest.call(null,args__39487__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__39487__auto__], null));
var opts__39488__auto__ = cljs.core.nth.call(null,vec__39599,(0),null);
var children__39489__auto__ = cljs.core.nth.call(null,vec__39599,(1),null);
var type__39490__auto__ = cljs.core.first.call(null,children__39489__auto__);
var new_children__39491__auto__ = ((cljs.core.vector_QMARK_.call(null,type__39490__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__39489__auto__))], null):children__39489__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,(MaterialUI["DropDownMenu"]),cljs.core.cons.call(null,opts__39488__auto__,new_children__39491__auto__));
};
var cljs_react_material_ui$rum$drop_down_menu = function (var_args){
var args__39487__auto__ = null;
if (arguments.length > 0) {
var G__39602__i = 0, G__39602__a = new Array(arguments.length -  0);
while (G__39602__i < G__39602__a.length) {G__39602__a[G__39602__i] = arguments[G__39602__i + 0]; ++G__39602__i;}
  args__39487__auto__ = new cljs.core.IndexedSeq(G__39602__a,0,null);
} 
return cljs_react_material_ui$rum$drop_down_menu__delegate.call(this,args__39487__auto__);};
cljs_react_material_ui$rum$drop_down_menu.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$drop_down_menu.cljs$lang$applyTo = (function (arglist__39603){
var args__39487__auto__ = cljs.core.seq(arglist__39603);
return cljs_react_material_ui$rum$drop_down_menu__delegate(args__39487__auto__);
});
cljs_react_material_ui$rum$drop_down_menu.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$drop_down_menu__delegate;
return cljs_react_material_ui$rum$drop_down_menu;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.flat_button = (function() { 
var cljs_react_material_ui$rum$flat_button__delegate = function (args__39487__auto__){
var vec__39604 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__39487__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__39487__auto__),cljs.core.rest.call(null,args__39487__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__39487__auto__], null));
var opts__39488__auto__ = cljs.core.nth.call(null,vec__39604,(0),null);
var children__39489__auto__ = cljs.core.nth.call(null,vec__39604,(1),null);
var type__39490__auto__ = cljs.core.first.call(null,children__39489__auto__);
var new_children__39491__auto__ = ((cljs.core.vector_QMARK_.call(null,type__39490__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__39489__auto__))], null):children__39489__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,(MaterialUI["FlatButton"]),cljs.core.cons.call(null,opts__39488__auto__,new_children__39491__auto__));
};
var cljs_react_material_ui$rum$flat_button = function (var_args){
var args__39487__auto__ = null;
if (arguments.length > 0) {
var G__39607__i = 0, G__39607__a = new Array(arguments.length -  0);
while (G__39607__i < G__39607__a.length) {G__39607__a[G__39607__i] = arguments[G__39607__i + 0]; ++G__39607__i;}
  args__39487__auto__ = new cljs.core.IndexedSeq(G__39607__a,0,null);
} 
return cljs_react_material_ui$rum$flat_button__delegate.call(this,args__39487__auto__);};
cljs_react_material_ui$rum$flat_button.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$flat_button.cljs$lang$applyTo = (function (arglist__39608){
var args__39487__auto__ = cljs.core.seq(arglist__39608);
return cljs_react_material_ui$rum$flat_button__delegate(args__39487__auto__);
});
cljs_react_material_ui$rum$flat_button.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$flat_button__delegate;
return cljs_react_material_ui$rum$flat_button;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.floating_action_button = (function() { 
var cljs_react_material_ui$rum$floating_action_button__delegate = function (args__39487__auto__){
var vec__39609 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__39487__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__39487__auto__),cljs.core.rest.call(null,args__39487__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__39487__auto__], null));
var opts__39488__auto__ = cljs.core.nth.call(null,vec__39609,(0),null);
var children__39489__auto__ = cljs.core.nth.call(null,vec__39609,(1),null);
var type__39490__auto__ = cljs.core.first.call(null,children__39489__auto__);
var new_children__39491__auto__ = ((cljs.core.vector_QMARK_.call(null,type__39490__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__39489__auto__))], null):children__39489__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,(MaterialUI["FloatingActionButton"]),cljs.core.cons.call(null,opts__39488__auto__,new_children__39491__auto__));
};
var cljs_react_material_ui$rum$floating_action_button = function (var_args){
var args__39487__auto__ = null;
if (arguments.length > 0) {
var G__39612__i = 0, G__39612__a = new Array(arguments.length -  0);
while (G__39612__i < G__39612__a.length) {G__39612__a[G__39612__i] = arguments[G__39612__i + 0]; ++G__39612__i;}
  args__39487__auto__ = new cljs.core.IndexedSeq(G__39612__a,0,null);
} 
return cljs_react_material_ui$rum$floating_action_button__delegate.call(this,args__39487__auto__);};
cljs_react_material_ui$rum$floating_action_button.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$floating_action_button.cljs$lang$applyTo = (function (arglist__39613){
var args__39487__auto__ = cljs.core.seq(arglist__39613);
return cljs_react_material_ui$rum$floating_action_button__delegate(args__39487__auto__);
});
cljs_react_material_ui$rum$floating_action_button.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$floating_action_button__delegate;
return cljs_react_material_ui$rum$floating_action_button;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.font_icon = (function() { 
var cljs_react_material_ui$rum$font_icon__delegate = function (args__39487__auto__){
var vec__39614 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__39487__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__39487__auto__),cljs.core.rest.call(null,args__39487__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__39487__auto__], null));
var opts__39488__auto__ = cljs.core.nth.call(null,vec__39614,(0),null);
var children__39489__auto__ = cljs.core.nth.call(null,vec__39614,(1),null);
var type__39490__auto__ = cljs.core.first.call(null,children__39489__auto__);
var new_children__39491__auto__ = ((cljs.core.vector_QMARK_.call(null,type__39490__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__39489__auto__))], null):children__39489__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,(MaterialUI["FontIcon"]),cljs.core.cons.call(null,opts__39488__auto__,new_children__39491__auto__));
};
var cljs_react_material_ui$rum$font_icon = function (var_args){
var args__39487__auto__ = null;
if (arguments.length > 0) {
var G__39617__i = 0, G__39617__a = new Array(arguments.length -  0);
while (G__39617__i < G__39617__a.length) {G__39617__a[G__39617__i] = arguments[G__39617__i + 0]; ++G__39617__i;}
  args__39487__auto__ = new cljs.core.IndexedSeq(G__39617__a,0,null);
} 
return cljs_react_material_ui$rum$font_icon__delegate.call(this,args__39487__auto__);};
cljs_react_material_ui$rum$font_icon.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$font_icon.cljs$lang$applyTo = (function (arglist__39618){
var args__39487__auto__ = cljs.core.seq(arglist__39618);
return cljs_react_material_ui$rum$font_icon__delegate(args__39487__auto__);
});
cljs_react_material_ui$rum$font_icon.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$font_icon__delegate;
return cljs_react_material_ui$rum$font_icon;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.grid_list = (function() { 
var cljs_react_material_ui$rum$grid_list__delegate = function (args__39487__auto__){
var vec__39619 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__39487__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__39487__auto__),cljs.core.rest.call(null,args__39487__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__39487__auto__], null));
var opts__39488__auto__ = cljs.core.nth.call(null,vec__39619,(0),null);
var children__39489__auto__ = cljs.core.nth.call(null,vec__39619,(1),null);
var type__39490__auto__ = cljs.core.first.call(null,children__39489__auto__);
var new_children__39491__auto__ = ((cljs.core.vector_QMARK_.call(null,type__39490__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__39489__auto__))], null):children__39489__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,(MaterialUI["GridList"]),cljs.core.cons.call(null,opts__39488__auto__,new_children__39491__auto__));
};
var cljs_react_material_ui$rum$grid_list = function (var_args){
var args__39487__auto__ = null;
if (arguments.length > 0) {
var G__39622__i = 0, G__39622__a = new Array(arguments.length -  0);
while (G__39622__i < G__39622__a.length) {G__39622__a[G__39622__i] = arguments[G__39622__i + 0]; ++G__39622__i;}
  args__39487__auto__ = new cljs.core.IndexedSeq(G__39622__a,0,null);
} 
return cljs_react_material_ui$rum$grid_list__delegate.call(this,args__39487__auto__);};
cljs_react_material_ui$rum$grid_list.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$grid_list.cljs$lang$applyTo = (function (arglist__39623){
var args__39487__auto__ = cljs.core.seq(arglist__39623);
return cljs_react_material_ui$rum$grid_list__delegate(args__39487__auto__);
});
cljs_react_material_ui$rum$grid_list.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$grid_list__delegate;
return cljs_react_material_ui$rum$grid_list;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.grid_tile = (function() { 
var cljs_react_material_ui$rum$grid_tile__delegate = function (args__39487__auto__){
var vec__39624 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__39487__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__39487__auto__),cljs.core.rest.call(null,args__39487__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__39487__auto__], null));
var opts__39488__auto__ = cljs.core.nth.call(null,vec__39624,(0),null);
var children__39489__auto__ = cljs.core.nth.call(null,vec__39624,(1),null);
var type__39490__auto__ = cljs.core.first.call(null,children__39489__auto__);
var new_children__39491__auto__ = ((cljs.core.vector_QMARK_.call(null,type__39490__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__39489__auto__))], null):children__39489__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,(MaterialUI["GridTile"]),cljs.core.cons.call(null,opts__39488__auto__,new_children__39491__auto__));
};
var cljs_react_material_ui$rum$grid_tile = function (var_args){
var args__39487__auto__ = null;
if (arguments.length > 0) {
var G__39627__i = 0, G__39627__a = new Array(arguments.length -  0);
while (G__39627__i < G__39627__a.length) {G__39627__a[G__39627__i] = arguments[G__39627__i + 0]; ++G__39627__i;}
  args__39487__auto__ = new cljs.core.IndexedSeq(G__39627__a,0,null);
} 
return cljs_react_material_ui$rum$grid_tile__delegate.call(this,args__39487__auto__);};
cljs_react_material_ui$rum$grid_tile.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$grid_tile.cljs$lang$applyTo = (function (arglist__39628){
var args__39487__auto__ = cljs.core.seq(arglist__39628);
return cljs_react_material_ui$rum$grid_tile__delegate(args__39487__auto__);
});
cljs_react_material_ui$rum$grid_tile.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$grid_tile__delegate;
return cljs_react_material_ui$rum$grid_tile;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.icon_button = (function() { 
var cljs_react_material_ui$rum$icon_button__delegate = function (args__39487__auto__){
var vec__39629 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__39487__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__39487__auto__),cljs.core.rest.call(null,args__39487__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__39487__auto__], null));
var opts__39488__auto__ = cljs.core.nth.call(null,vec__39629,(0),null);
var children__39489__auto__ = cljs.core.nth.call(null,vec__39629,(1),null);
var type__39490__auto__ = cljs.core.first.call(null,children__39489__auto__);
var new_children__39491__auto__ = ((cljs.core.vector_QMARK_.call(null,type__39490__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__39489__auto__))], null):children__39489__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,(MaterialUI["IconButton"]),cljs.core.cons.call(null,opts__39488__auto__,new_children__39491__auto__));
};
var cljs_react_material_ui$rum$icon_button = function (var_args){
var args__39487__auto__ = null;
if (arguments.length > 0) {
var G__39632__i = 0, G__39632__a = new Array(arguments.length -  0);
while (G__39632__i < G__39632__a.length) {G__39632__a[G__39632__i] = arguments[G__39632__i + 0]; ++G__39632__i;}
  args__39487__auto__ = new cljs.core.IndexedSeq(G__39632__a,0,null);
} 
return cljs_react_material_ui$rum$icon_button__delegate.call(this,args__39487__auto__);};
cljs_react_material_ui$rum$icon_button.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$icon_button.cljs$lang$applyTo = (function (arglist__39633){
var args__39487__auto__ = cljs.core.seq(arglist__39633);
return cljs_react_material_ui$rum$icon_button__delegate(args__39487__auto__);
});
cljs_react_material_ui$rum$icon_button.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$icon_button__delegate;
return cljs_react_material_ui$rum$icon_button;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.icon_menu = (function() { 
var cljs_react_material_ui$rum$icon_menu__delegate = function (args__39487__auto__){
var vec__39634 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__39487__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__39487__auto__),cljs.core.rest.call(null,args__39487__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__39487__auto__], null));
var opts__39488__auto__ = cljs.core.nth.call(null,vec__39634,(0),null);
var children__39489__auto__ = cljs.core.nth.call(null,vec__39634,(1),null);
var type__39490__auto__ = cljs.core.first.call(null,children__39489__auto__);
var new_children__39491__auto__ = ((cljs.core.vector_QMARK_.call(null,type__39490__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__39489__auto__))], null):children__39489__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,(MaterialUI["IconMenu"]),cljs.core.cons.call(null,opts__39488__auto__,new_children__39491__auto__));
};
var cljs_react_material_ui$rum$icon_menu = function (var_args){
var args__39487__auto__ = null;
if (arguments.length > 0) {
var G__39637__i = 0, G__39637__a = new Array(arguments.length -  0);
while (G__39637__i < G__39637__a.length) {G__39637__a[G__39637__i] = arguments[G__39637__i + 0]; ++G__39637__i;}
  args__39487__auto__ = new cljs.core.IndexedSeq(G__39637__a,0,null);
} 
return cljs_react_material_ui$rum$icon_menu__delegate.call(this,args__39487__auto__);};
cljs_react_material_ui$rum$icon_menu.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$icon_menu.cljs$lang$applyTo = (function (arglist__39638){
var args__39487__auto__ = cljs.core.seq(arglist__39638);
return cljs_react_material_ui$rum$icon_menu__delegate(args__39487__auto__);
});
cljs_react_material_ui$rum$icon_menu.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$icon_menu__delegate;
return cljs_react_material_ui$rum$icon_menu;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.linear_progress = (function() { 
var cljs_react_material_ui$rum$linear_progress__delegate = function (args__39487__auto__){
var vec__39639 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__39487__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__39487__auto__),cljs.core.rest.call(null,args__39487__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__39487__auto__], null));
var opts__39488__auto__ = cljs.core.nth.call(null,vec__39639,(0),null);
var children__39489__auto__ = cljs.core.nth.call(null,vec__39639,(1),null);
var type__39490__auto__ = cljs.core.first.call(null,children__39489__auto__);
var new_children__39491__auto__ = ((cljs.core.vector_QMARK_.call(null,type__39490__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__39489__auto__))], null):children__39489__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,(MaterialUI["LinearProgress"]),cljs.core.cons.call(null,opts__39488__auto__,new_children__39491__auto__));
};
var cljs_react_material_ui$rum$linear_progress = function (var_args){
var args__39487__auto__ = null;
if (arguments.length > 0) {
var G__39642__i = 0, G__39642__a = new Array(arguments.length -  0);
while (G__39642__i < G__39642__a.length) {G__39642__a[G__39642__i] = arguments[G__39642__i + 0]; ++G__39642__i;}
  args__39487__auto__ = new cljs.core.IndexedSeq(G__39642__a,0,null);
} 
return cljs_react_material_ui$rum$linear_progress__delegate.call(this,args__39487__auto__);};
cljs_react_material_ui$rum$linear_progress.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$linear_progress.cljs$lang$applyTo = (function (arglist__39643){
var args__39487__auto__ = cljs.core.seq(arglist__39643);
return cljs_react_material_ui$rum$linear_progress__delegate(args__39487__auto__);
});
cljs_react_material_ui$rum$linear_progress.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$linear_progress__delegate;
return cljs_react_material_ui$rum$linear_progress;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.list = (function() { 
var cljs_react_material_ui$rum$list__delegate = function (args__39487__auto__){
var vec__39644 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__39487__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__39487__auto__),cljs.core.rest.call(null,args__39487__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__39487__auto__], null));
var opts__39488__auto__ = cljs.core.nth.call(null,vec__39644,(0),null);
var children__39489__auto__ = cljs.core.nth.call(null,vec__39644,(1),null);
var type__39490__auto__ = cljs.core.first.call(null,children__39489__auto__);
var new_children__39491__auto__ = ((cljs.core.vector_QMARK_.call(null,type__39490__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__39489__auto__))], null):children__39489__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,(MaterialUI["List"]),cljs.core.cons.call(null,opts__39488__auto__,new_children__39491__auto__));
};
var cljs_react_material_ui$rum$list = function (var_args){
var args__39487__auto__ = null;
if (arguments.length > 0) {
var G__39647__i = 0, G__39647__a = new Array(arguments.length -  0);
while (G__39647__i < G__39647__a.length) {G__39647__a[G__39647__i] = arguments[G__39647__i + 0]; ++G__39647__i;}
  args__39487__auto__ = new cljs.core.IndexedSeq(G__39647__a,0,null);
} 
return cljs_react_material_ui$rum$list__delegate.call(this,args__39487__auto__);};
cljs_react_material_ui$rum$list.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$list.cljs$lang$applyTo = (function (arglist__39648){
var args__39487__auto__ = cljs.core.seq(arglist__39648);
return cljs_react_material_ui$rum$list__delegate(args__39487__auto__);
});
cljs_react_material_ui$rum$list.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$list__delegate;
return cljs_react_material_ui$rum$list;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.list_item = (function() { 
var cljs_react_material_ui$rum$list_item__delegate = function (args__39487__auto__){
var vec__39649 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__39487__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__39487__auto__),cljs.core.rest.call(null,args__39487__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__39487__auto__], null));
var opts__39488__auto__ = cljs.core.nth.call(null,vec__39649,(0),null);
var children__39489__auto__ = cljs.core.nth.call(null,vec__39649,(1),null);
var type__39490__auto__ = cljs.core.first.call(null,children__39489__auto__);
var new_children__39491__auto__ = ((cljs.core.vector_QMARK_.call(null,type__39490__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__39489__auto__))], null):children__39489__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,(MaterialUI["ListItem"]),cljs.core.cons.call(null,opts__39488__auto__,new_children__39491__auto__));
};
var cljs_react_material_ui$rum$list_item = function (var_args){
var args__39487__auto__ = null;
if (arguments.length > 0) {
var G__39652__i = 0, G__39652__a = new Array(arguments.length -  0);
while (G__39652__i < G__39652__a.length) {G__39652__a[G__39652__i] = arguments[G__39652__i + 0]; ++G__39652__i;}
  args__39487__auto__ = new cljs.core.IndexedSeq(G__39652__a,0,null);
} 
return cljs_react_material_ui$rum$list_item__delegate.call(this,args__39487__auto__);};
cljs_react_material_ui$rum$list_item.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$list_item.cljs$lang$applyTo = (function (arglist__39653){
var args__39487__auto__ = cljs.core.seq(arglist__39653);
return cljs_react_material_ui$rum$list_item__delegate(args__39487__auto__);
});
cljs_react_material_ui$rum$list_item.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$list_item__delegate;
return cljs_react_material_ui$rum$list_item;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.menu = (function() { 
var cljs_react_material_ui$rum$menu__delegate = function (args__39487__auto__){
var vec__39654 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__39487__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__39487__auto__),cljs.core.rest.call(null,args__39487__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__39487__auto__], null));
var opts__39488__auto__ = cljs.core.nth.call(null,vec__39654,(0),null);
var children__39489__auto__ = cljs.core.nth.call(null,vec__39654,(1),null);
var type__39490__auto__ = cljs.core.first.call(null,children__39489__auto__);
var new_children__39491__auto__ = ((cljs.core.vector_QMARK_.call(null,type__39490__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__39489__auto__))], null):children__39489__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,(MaterialUI["Menu"]),cljs.core.cons.call(null,opts__39488__auto__,new_children__39491__auto__));
};
var cljs_react_material_ui$rum$menu = function (var_args){
var args__39487__auto__ = null;
if (arguments.length > 0) {
var G__39657__i = 0, G__39657__a = new Array(arguments.length -  0);
while (G__39657__i < G__39657__a.length) {G__39657__a[G__39657__i] = arguments[G__39657__i + 0]; ++G__39657__i;}
  args__39487__auto__ = new cljs.core.IndexedSeq(G__39657__a,0,null);
} 
return cljs_react_material_ui$rum$menu__delegate.call(this,args__39487__auto__);};
cljs_react_material_ui$rum$menu.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$menu.cljs$lang$applyTo = (function (arglist__39658){
var args__39487__auto__ = cljs.core.seq(arglist__39658);
return cljs_react_material_ui$rum$menu__delegate(args__39487__auto__);
});
cljs_react_material_ui$rum$menu.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$menu__delegate;
return cljs_react_material_ui$rum$menu;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.menu_item = (function() { 
var cljs_react_material_ui$rum$menu_item__delegate = function (args__39487__auto__){
var vec__39659 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__39487__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__39487__auto__),cljs.core.rest.call(null,args__39487__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__39487__auto__], null));
var opts__39488__auto__ = cljs.core.nth.call(null,vec__39659,(0),null);
var children__39489__auto__ = cljs.core.nth.call(null,vec__39659,(1),null);
var type__39490__auto__ = cljs.core.first.call(null,children__39489__auto__);
var new_children__39491__auto__ = ((cljs.core.vector_QMARK_.call(null,type__39490__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__39489__auto__))], null):children__39489__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,(MaterialUI["MenuItem"]),cljs.core.cons.call(null,opts__39488__auto__,new_children__39491__auto__));
};
var cljs_react_material_ui$rum$menu_item = function (var_args){
var args__39487__auto__ = null;
if (arguments.length > 0) {
var G__39662__i = 0, G__39662__a = new Array(arguments.length -  0);
while (G__39662__i < G__39662__a.length) {G__39662__a[G__39662__i] = arguments[G__39662__i + 0]; ++G__39662__i;}
  args__39487__auto__ = new cljs.core.IndexedSeq(G__39662__a,0,null);
} 
return cljs_react_material_ui$rum$menu_item__delegate.call(this,args__39487__auto__);};
cljs_react_material_ui$rum$menu_item.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$menu_item.cljs$lang$applyTo = (function (arglist__39663){
var args__39487__auto__ = cljs.core.seq(arglist__39663);
return cljs_react_material_ui$rum$menu_item__delegate(args__39487__auto__);
});
cljs_react_material_ui$rum$menu_item.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$menu_item__delegate;
return cljs_react_material_ui$rum$menu_item;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.mui_theme_provider = (function() { 
var cljs_react_material_ui$rum$mui_theme_provider__delegate = function (args__39487__auto__){
var vec__39664 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__39487__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__39487__auto__),cljs.core.rest.call(null,args__39487__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__39487__auto__], null));
var opts__39488__auto__ = cljs.core.nth.call(null,vec__39664,(0),null);
var children__39489__auto__ = cljs.core.nth.call(null,vec__39664,(1),null);
var type__39490__auto__ = cljs.core.first.call(null,children__39489__auto__);
var new_children__39491__auto__ = ((cljs.core.vector_QMARK_.call(null,type__39490__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__39489__auto__))], null):children__39489__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,(MaterialUI["MuiThemeProvider"]),cljs.core.cons.call(null,opts__39488__auto__,new_children__39491__auto__));
};
var cljs_react_material_ui$rum$mui_theme_provider = function (var_args){
var args__39487__auto__ = null;
if (arguments.length > 0) {
var G__39667__i = 0, G__39667__a = new Array(arguments.length -  0);
while (G__39667__i < G__39667__a.length) {G__39667__a[G__39667__i] = arguments[G__39667__i + 0]; ++G__39667__i;}
  args__39487__auto__ = new cljs.core.IndexedSeq(G__39667__a,0,null);
} 
return cljs_react_material_ui$rum$mui_theme_provider__delegate.call(this,args__39487__auto__);};
cljs_react_material_ui$rum$mui_theme_provider.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$mui_theme_provider.cljs$lang$applyTo = (function (arglist__39668){
var args__39487__auto__ = cljs.core.seq(arglist__39668);
return cljs_react_material_ui$rum$mui_theme_provider__delegate(args__39487__auto__);
});
cljs_react_material_ui$rum$mui_theme_provider.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$mui_theme_provider__delegate;
return cljs_react_material_ui$rum$mui_theme_provider;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.paper = (function() { 
var cljs_react_material_ui$rum$paper__delegate = function (args__39487__auto__){
var vec__39669 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__39487__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__39487__auto__),cljs.core.rest.call(null,args__39487__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__39487__auto__], null));
var opts__39488__auto__ = cljs.core.nth.call(null,vec__39669,(0),null);
var children__39489__auto__ = cljs.core.nth.call(null,vec__39669,(1),null);
var type__39490__auto__ = cljs.core.first.call(null,children__39489__auto__);
var new_children__39491__auto__ = ((cljs.core.vector_QMARK_.call(null,type__39490__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__39489__auto__))], null):children__39489__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,(MaterialUI["Paper"]),cljs.core.cons.call(null,opts__39488__auto__,new_children__39491__auto__));
};
var cljs_react_material_ui$rum$paper = function (var_args){
var args__39487__auto__ = null;
if (arguments.length > 0) {
var G__39672__i = 0, G__39672__a = new Array(arguments.length -  0);
while (G__39672__i < G__39672__a.length) {G__39672__a[G__39672__i] = arguments[G__39672__i + 0]; ++G__39672__i;}
  args__39487__auto__ = new cljs.core.IndexedSeq(G__39672__a,0,null);
} 
return cljs_react_material_ui$rum$paper__delegate.call(this,args__39487__auto__);};
cljs_react_material_ui$rum$paper.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$paper.cljs$lang$applyTo = (function (arglist__39673){
var args__39487__auto__ = cljs.core.seq(arglist__39673);
return cljs_react_material_ui$rum$paper__delegate(args__39487__auto__);
});
cljs_react_material_ui$rum$paper.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$paper__delegate;
return cljs_react_material_ui$rum$paper;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.popover = (function() { 
var cljs_react_material_ui$rum$popover__delegate = function (args__39487__auto__){
var vec__39674 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__39487__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__39487__auto__),cljs.core.rest.call(null,args__39487__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__39487__auto__], null));
var opts__39488__auto__ = cljs.core.nth.call(null,vec__39674,(0),null);
var children__39489__auto__ = cljs.core.nth.call(null,vec__39674,(1),null);
var type__39490__auto__ = cljs.core.first.call(null,children__39489__auto__);
var new_children__39491__auto__ = ((cljs.core.vector_QMARK_.call(null,type__39490__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__39489__auto__))], null):children__39489__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,(MaterialUI["Popover"]),cljs.core.cons.call(null,opts__39488__auto__,new_children__39491__auto__));
};
var cljs_react_material_ui$rum$popover = function (var_args){
var args__39487__auto__ = null;
if (arguments.length > 0) {
var G__39677__i = 0, G__39677__a = new Array(arguments.length -  0);
while (G__39677__i < G__39677__a.length) {G__39677__a[G__39677__i] = arguments[G__39677__i + 0]; ++G__39677__i;}
  args__39487__auto__ = new cljs.core.IndexedSeq(G__39677__a,0,null);
} 
return cljs_react_material_ui$rum$popover__delegate.call(this,args__39487__auto__);};
cljs_react_material_ui$rum$popover.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$popover.cljs$lang$applyTo = (function (arglist__39678){
var args__39487__auto__ = cljs.core.seq(arglist__39678);
return cljs_react_material_ui$rum$popover__delegate(args__39487__auto__);
});
cljs_react_material_ui$rum$popover.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$popover__delegate;
return cljs_react_material_ui$rum$popover;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.radio_button = (function() { 
var cljs_react_material_ui$rum$radio_button__delegate = function (args__39487__auto__){
var vec__39679 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__39487__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__39487__auto__),cljs.core.rest.call(null,args__39487__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__39487__auto__], null));
var opts__39488__auto__ = cljs.core.nth.call(null,vec__39679,(0),null);
var children__39489__auto__ = cljs.core.nth.call(null,vec__39679,(1),null);
var type__39490__auto__ = cljs.core.first.call(null,children__39489__auto__);
var new_children__39491__auto__ = ((cljs.core.vector_QMARK_.call(null,type__39490__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__39489__auto__))], null):children__39489__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,(MaterialUI["RadioButton"]),cljs.core.cons.call(null,opts__39488__auto__,new_children__39491__auto__));
};
var cljs_react_material_ui$rum$radio_button = function (var_args){
var args__39487__auto__ = null;
if (arguments.length > 0) {
var G__39682__i = 0, G__39682__a = new Array(arguments.length -  0);
while (G__39682__i < G__39682__a.length) {G__39682__a[G__39682__i] = arguments[G__39682__i + 0]; ++G__39682__i;}
  args__39487__auto__ = new cljs.core.IndexedSeq(G__39682__a,0,null);
} 
return cljs_react_material_ui$rum$radio_button__delegate.call(this,args__39487__auto__);};
cljs_react_material_ui$rum$radio_button.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$radio_button.cljs$lang$applyTo = (function (arglist__39683){
var args__39487__auto__ = cljs.core.seq(arglist__39683);
return cljs_react_material_ui$rum$radio_button__delegate(args__39487__auto__);
});
cljs_react_material_ui$rum$radio_button.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$radio_button__delegate;
return cljs_react_material_ui$rum$radio_button;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.radio_button_group = (function() { 
var cljs_react_material_ui$rum$radio_button_group__delegate = function (args__39487__auto__){
var vec__39684 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__39487__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__39487__auto__),cljs.core.rest.call(null,args__39487__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__39487__auto__], null));
var opts__39488__auto__ = cljs.core.nth.call(null,vec__39684,(0),null);
var children__39489__auto__ = cljs.core.nth.call(null,vec__39684,(1),null);
var type__39490__auto__ = cljs.core.first.call(null,children__39489__auto__);
var new_children__39491__auto__ = ((cljs.core.vector_QMARK_.call(null,type__39490__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__39489__auto__))], null):children__39489__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,(MaterialUI["RadioButtonGroup"]),cljs.core.cons.call(null,opts__39488__auto__,new_children__39491__auto__));
};
var cljs_react_material_ui$rum$radio_button_group = function (var_args){
var args__39487__auto__ = null;
if (arguments.length > 0) {
var G__39687__i = 0, G__39687__a = new Array(arguments.length -  0);
while (G__39687__i < G__39687__a.length) {G__39687__a[G__39687__i] = arguments[G__39687__i + 0]; ++G__39687__i;}
  args__39487__auto__ = new cljs.core.IndexedSeq(G__39687__a,0,null);
} 
return cljs_react_material_ui$rum$radio_button_group__delegate.call(this,args__39487__auto__);};
cljs_react_material_ui$rum$radio_button_group.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$radio_button_group.cljs$lang$applyTo = (function (arglist__39688){
var args__39487__auto__ = cljs.core.seq(arglist__39688);
return cljs_react_material_ui$rum$radio_button_group__delegate(args__39487__auto__);
});
cljs_react_material_ui$rum$radio_button_group.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$radio_button_group__delegate;
return cljs_react_material_ui$rum$radio_button_group;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.raised_button = (function() { 
var cljs_react_material_ui$rum$raised_button__delegate = function (args__39487__auto__){
var vec__39689 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__39487__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__39487__auto__),cljs.core.rest.call(null,args__39487__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__39487__auto__], null));
var opts__39488__auto__ = cljs.core.nth.call(null,vec__39689,(0),null);
var children__39489__auto__ = cljs.core.nth.call(null,vec__39689,(1),null);
var type__39490__auto__ = cljs.core.first.call(null,children__39489__auto__);
var new_children__39491__auto__ = ((cljs.core.vector_QMARK_.call(null,type__39490__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__39489__auto__))], null):children__39489__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,(MaterialUI["RaisedButton"]),cljs.core.cons.call(null,opts__39488__auto__,new_children__39491__auto__));
};
var cljs_react_material_ui$rum$raised_button = function (var_args){
var args__39487__auto__ = null;
if (arguments.length > 0) {
var G__39692__i = 0, G__39692__a = new Array(arguments.length -  0);
while (G__39692__i < G__39692__a.length) {G__39692__a[G__39692__i] = arguments[G__39692__i + 0]; ++G__39692__i;}
  args__39487__auto__ = new cljs.core.IndexedSeq(G__39692__a,0,null);
} 
return cljs_react_material_ui$rum$raised_button__delegate.call(this,args__39487__auto__);};
cljs_react_material_ui$rum$raised_button.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$raised_button.cljs$lang$applyTo = (function (arglist__39693){
var args__39487__auto__ = cljs.core.seq(arglist__39693);
return cljs_react_material_ui$rum$raised_button__delegate(args__39487__auto__);
});
cljs_react_material_ui$rum$raised_button.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$raised_button__delegate;
return cljs_react_material_ui$rum$raised_button;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.refresh_indicator = (function() { 
var cljs_react_material_ui$rum$refresh_indicator__delegate = function (args__39487__auto__){
var vec__39694 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__39487__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__39487__auto__),cljs.core.rest.call(null,args__39487__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__39487__auto__], null));
var opts__39488__auto__ = cljs.core.nth.call(null,vec__39694,(0),null);
var children__39489__auto__ = cljs.core.nth.call(null,vec__39694,(1),null);
var type__39490__auto__ = cljs.core.first.call(null,children__39489__auto__);
var new_children__39491__auto__ = ((cljs.core.vector_QMARK_.call(null,type__39490__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__39489__auto__))], null):children__39489__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,(MaterialUI["RefreshIndicator"]),cljs.core.cons.call(null,opts__39488__auto__,new_children__39491__auto__));
};
var cljs_react_material_ui$rum$refresh_indicator = function (var_args){
var args__39487__auto__ = null;
if (arguments.length > 0) {
var G__39697__i = 0, G__39697__a = new Array(arguments.length -  0);
while (G__39697__i < G__39697__a.length) {G__39697__a[G__39697__i] = arguments[G__39697__i + 0]; ++G__39697__i;}
  args__39487__auto__ = new cljs.core.IndexedSeq(G__39697__a,0,null);
} 
return cljs_react_material_ui$rum$refresh_indicator__delegate.call(this,args__39487__auto__);};
cljs_react_material_ui$rum$refresh_indicator.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$refresh_indicator.cljs$lang$applyTo = (function (arglist__39698){
var args__39487__auto__ = cljs.core.seq(arglist__39698);
return cljs_react_material_ui$rum$refresh_indicator__delegate(args__39487__auto__);
});
cljs_react_material_ui$rum$refresh_indicator.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$refresh_indicator__delegate;
return cljs_react_material_ui$rum$refresh_indicator;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.select_field = (function() { 
var cljs_react_material_ui$rum$select_field__delegate = function (args__39487__auto__){
var vec__39699 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__39487__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__39487__auto__),cljs.core.rest.call(null,args__39487__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__39487__auto__], null));
var opts__39488__auto__ = cljs.core.nth.call(null,vec__39699,(0),null);
var children__39489__auto__ = cljs.core.nth.call(null,vec__39699,(1),null);
var type__39490__auto__ = cljs.core.first.call(null,children__39489__auto__);
var new_children__39491__auto__ = ((cljs.core.vector_QMARK_.call(null,type__39490__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__39489__auto__))], null):children__39489__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,(MaterialUI["SelectField"]),cljs.core.cons.call(null,opts__39488__auto__,new_children__39491__auto__));
};
var cljs_react_material_ui$rum$select_field = function (var_args){
var args__39487__auto__ = null;
if (arguments.length > 0) {
var G__39702__i = 0, G__39702__a = new Array(arguments.length -  0);
while (G__39702__i < G__39702__a.length) {G__39702__a[G__39702__i] = arguments[G__39702__i + 0]; ++G__39702__i;}
  args__39487__auto__ = new cljs.core.IndexedSeq(G__39702__a,0,null);
} 
return cljs_react_material_ui$rum$select_field__delegate.call(this,args__39487__auto__);};
cljs_react_material_ui$rum$select_field.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$select_field.cljs$lang$applyTo = (function (arglist__39703){
var args__39487__auto__ = cljs.core.seq(arglist__39703);
return cljs_react_material_ui$rum$select_field__delegate(args__39487__auto__);
});
cljs_react_material_ui$rum$select_field.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$select_field__delegate;
return cljs_react_material_ui$rum$select_field;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.slider = (function() { 
var cljs_react_material_ui$rum$slider__delegate = function (args__39487__auto__){
var vec__39704 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__39487__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__39487__auto__),cljs.core.rest.call(null,args__39487__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__39487__auto__], null));
var opts__39488__auto__ = cljs.core.nth.call(null,vec__39704,(0),null);
var children__39489__auto__ = cljs.core.nth.call(null,vec__39704,(1),null);
var type__39490__auto__ = cljs.core.first.call(null,children__39489__auto__);
var new_children__39491__auto__ = ((cljs.core.vector_QMARK_.call(null,type__39490__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__39489__auto__))], null):children__39489__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,(MaterialUI["Slider"]),cljs.core.cons.call(null,opts__39488__auto__,new_children__39491__auto__));
};
var cljs_react_material_ui$rum$slider = function (var_args){
var args__39487__auto__ = null;
if (arguments.length > 0) {
var G__39707__i = 0, G__39707__a = new Array(arguments.length -  0);
while (G__39707__i < G__39707__a.length) {G__39707__a[G__39707__i] = arguments[G__39707__i + 0]; ++G__39707__i;}
  args__39487__auto__ = new cljs.core.IndexedSeq(G__39707__a,0,null);
} 
return cljs_react_material_ui$rum$slider__delegate.call(this,args__39487__auto__);};
cljs_react_material_ui$rum$slider.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$slider.cljs$lang$applyTo = (function (arglist__39708){
var args__39487__auto__ = cljs.core.seq(arglist__39708);
return cljs_react_material_ui$rum$slider__delegate(args__39487__auto__);
});
cljs_react_material_ui$rum$slider.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$slider__delegate;
return cljs_react_material_ui$rum$slider;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.subheader = (function() { 
var cljs_react_material_ui$rum$subheader__delegate = function (args__39487__auto__){
var vec__39709 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__39487__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__39487__auto__),cljs.core.rest.call(null,args__39487__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__39487__auto__], null));
var opts__39488__auto__ = cljs.core.nth.call(null,vec__39709,(0),null);
var children__39489__auto__ = cljs.core.nth.call(null,vec__39709,(1),null);
var type__39490__auto__ = cljs.core.first.call(null,children__39489__auto__);
var new_children__39491__auto__ = ((cljs.core.vector_QMARK_.call(null,type__39490__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__39489__auto__))], null):children__39489__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,(MaterialUI["Subheader"]),cljs.core.cons.call(null,opts__39488__auto__,new_children__39491__auto__));
};
var cljs_react_material_ui$rum$subheader = function (var_args){
var args__39487__auto__ = null;
if (arguments.length > 0) {
var G__39712__i = 0, G__39712__a = new Array(arguments.length -  0);
while (G__39712__i < G__39712__a.length) {G__39712__a[G__39712__i] = arguments[G__39712__i + 0]; ++G__39712__i;}
  args__39487__auto__ = new cljs.core.IndexedSeq(G__39712__a,0,null);
} 
return cljs_react_material_ui$rum$subheader__delegate.call(this,args__39487__auto__);};
cljs_react_material_ui$rum$subheader.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$subheader.cljs$lang$applyTo = (function (arglist__39713){
var args__39487__auto__ = cljs.core.seq(arglist__39713);
return cljs_react_material_ui$rum$subheader__delegate(args__39487__auto__);
});
cljs_react_material_ui$rum$subheader.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$subheader__delegate;
return cljs_react_material_ui$rum$subheader;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.svg_icon = (function() { 
var cljs_react_material_ui$rum$svg_icon__delegate = function (args__39487__auto__){
var vec__39714 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__39487__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__39487__auto__),cljs.core.rest.call(null,args__39487__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__39487__auto__], null));
var opts__39488__auto__ = cljs.core.nth.call(null,vec__39714,(0),null);
var children__39489__auto__ = cljs.core.nth.call(null,vec__39714,(1),null);
var type__39490__auto__ = cljs.core.first.call(null,children__39489__auto__);
var new_children__39491__auto__ = ((cljs.core.vector_QMARK_.call(null,type__39490__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__39489__auto__))], null):children__39489__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,(MaterialUI["SvgIcon"]),cljs.core.cons.call(null,opts__39488__auto__,new_children__39491__auto__));
};
var cljs_react_material_ui$rum$svg_icon = function (var_args){
var args__39487__auto__ = null;
if (arguments.length > 0) {
var G__39717__i = 0, G__39717__a = new Array(arguments.length -  0);
while (G__39717__i < G__39717__a.length) {G__39717__a[G__39717__i] = arguments[G__39717__i + 0]; ++G__39717__i;}
  args__39487__auto__ = new cljs.core.IndexedSeq(G__39717__a,0,null);
} 
return cljs_react_material_ui$rum$svg_icon__delegate.call(this,args__39487__auto__);};
cljs_react_material_ui$rum$svg_icon.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$svg_icon.cljs$lang$applyTo = (function (arglist__39718){
var args__39487__auto__ = cljs.core.seq(arglist__39718);
return cljs_react_material_ui$rum$svg_icon__delegate(args__39487__auto__);
});
cljs_react_material_ui$rum$svg_icon.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$svg_icon__delegate;
return cljs_react_material_ui$rum$svg_icon;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.step = (function() { 
var cljs_react_material_ui$rum$step__delegate = function (args__39487__auto__){
var vec__39719 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__39487__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__39487__auto__),cljs.core.rest.call(null,args__39487__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__39487__auto__], null));
var opts__39488__auto__ = cljs.core.nth.call(null,vec__39719,(0),null);
var children__39489__auto__ = cljs.core.nth.call(null,vec__39719,(1),null);
var type__39490__auto__ = cljs.core.first.call(null,children__39489__auto__);
var new_children__39491__auto__ = ((cljs.core.vector_QMARK_.call(null,type__39490__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__39489__auto__))], null):children__39489__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,(MaterialUI["Step"]),cljs.core.cons.call(null,opts__39488__auto__,new_children__39491__auto__));
};
var cljs_react_material_ui$rum$step = function (var_args){
var args__39487__auto__ = null;
if (arguments.length > 0) {
var G__39722__i = 0, G__39722__a = new Array(arguments.length -  0);
while (G__39722__i < G__39722__a.length) {G__39722__a[G__39722__i] = arguments[G__39722__i + 0]; ++G__39722__i;}
  args__39487__auto__ = new cljs.core.IndexedSeq(G__39722__a,0,null);
} 
return cljs_react_material_ui$rum$step__delegate.call(this,args__39487__auto__);};
cljs_react_material_ui$rum$step.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$step.cljs$lang$applyTo = (function (arglist__39723){
var args__39487__auto__ = cljs.core.seq(arglist__39723);
return cljs_react_material_ui$rum$step__delegate(args__39487__auto__);
});
cljs_react_material_ui$rum$step.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$step__delegate;
return cljs_react_material_ui$rum$step;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.step_button = (function() { 
var cljs_react_material_ui$rum$step_button__delegate = function (args__39487__auto__){
var vec__39724 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__39487__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__39487__auto__),cljs.core.rest.call(null,args__39487__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__39487__auto__], null));
var opts__39488__auto__ = cljs.core.nth.call(null,vec__39724,(0),null);
var children__39489__auto__ = cljs.core.nth.call(null,vec__39724,(1),null);
var type__39490__auto__ = cljs.core.first.call(null,children__39489__auto__);
var new_children__39491__auto__ = ((cljs.core.vector_QMARK_.call(null,type__39490__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__39489__auto__))], null):children__39489__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,(MaterialUI["StepButton"]),cljs.core.cons.call(null,opts__39488__auto__,new_children__39491__auto__));
};
var cljs_react_material_ui$rum$step_button = function (var_args){
var args__39487__auto__ = null;
if (arguments.length > 0) {
var G__39727__i = 0, G__39727__a = new Array(arguments.length -  0);
while (G__39727__i < G__39727__a.length) {G__39727__a[G__39727__i] = arguments[G__39727__i + 0]; ++G__39727__i;}
  args__39487__auto__ = new cljs.core.IndexedSeq(G__39727__a,0,null);
} 
return cljs_react_material_ui$rum$step_button__delegate.call(this,args__39487__auto__);};
cljs_react_material_ui$rum$step_button.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$step_button.cljs$lang$applyTo = (function (arglist__39728){
var args__39487__auto__ = cljs.core.seq(arglist__39728);
return cljs_react_material_ui$rum$step_button__delegate(args__39487__auto__);
});
cljs_react_material_ui$rum$step_button.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$step_button__delegate;
return cljs_react_material_ui$rum$step_button;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.step_content = (function() { 
var cljs_react_material_ui$rum$step_content__delegate = function (args__39487__auto__){
var vec__39729 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__39487__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__39487__auto__),cljs.core.rest.call(null,args__39487__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__39487__auto__], null));
var opts__39488__auto__ = cljs.core.nth.call(null,vec__39729,(0),null);
var children__39489__auto__ = cljs.core.nth.call(null,vec__39729,(1),null);
var type__39490__auto__ = cljs.core.first.call(null,children__39489__auto__);
var new_children__39491__auto__ = ((cljs.core.vector_QMARK_.call(null,type__39490__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__39489__auto__))], null):children__39489__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,(MaterialUI["StepContent"]),cljs.core.cons.call(null,opts__39488__auto__,new_children__39491__auto__));
};
var cljs_react_material_ui$rum$step_content = function (var_args){
var args__39487__auto__ = null;
if (arguments.length > 0) {
var G__39732__i = 0, G__39732__a = new Array(arguments.length -  0);
while (G__39732__i < G__39732__a.length) {G__39732__a[G__39732__i] = arguments[G__39732__i + 0]; ++G__39732__i;}
  args__39487__auto__ = new cljs.core.IndexedSeq(G__39732__a,0,null);
} 
return cljs_react_material_ui$rum$step_content__delegate.call(this,args__39487__auto__);};
cljs_react_material_ui$rum$step_content.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$step_content.cljs$lang$applyTo = (function (arglist__39733){
var args__39487__auto__ = cljs.core.seq(arglist__39733);
return cljs_react_material_ui$rum$step_content__delegate(args__39487__auto__);
});
cljs_react_material_ui$rum$step_content.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$step_content__delegate;
return cljs_react_material_ui$rum$step_content;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.step_label = (function() { 
var cljs_react_material_ui$rum$step_label__delegate = function (args__39487__auto__){
var vec__39734 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__39487__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__39487__auto__),cljs.core.rest.call(null,args__39487__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__39487__auto__], null));
var opts__39488__auto__ = cljs.core.nth.call(null,vec__39734,(0),null);
var children__39489__auto__ = cljs.core.nth.call(null,vec__39734,(1),null);
var type__39490__auto__ = cljs.core.first.call(null,children__39489__auto__);
var new_children__39491__auto__ = ((cljs.core.vector_QMARK_.call(null,type__39490__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__39489__auto__))], null):children__39489__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,(MaterialUI["StepLabel"]),cljs.core.cons.call(null,opts__39488__auto__,new_children__39491__auto__));
};
var cljs_react_material_ui$rum$step_label = function (var_args){
var args__39487__auto__ = null;
if (arguments.length > 0) {
var G__39737__i = 0, G__39737__a = new Array(arguments.length -  0);
while (G__39737__i < G__39737__a.length) {G__39737__a[G__39737__i] = arguments[G__39737__i + 0]; ++G__39737__i;}
  args__39487__auto__ = new cljs.core.IndexedSeq(G__39737__a,0,null);
} 
return cljs_react_material_ui$rum$step_label__delegate.call(this,args__39487__auto__);};
cljs_react_material_ui$rum$step_label.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$step_label.cljs$lang$applyTo = (function (arglist__39738){
var args__39487__auto__ = cljs.core.seq(arglist__39738);
return cljs_react_material_ui$rum$step_label__delegate(args__39487__auto__);
});
cljs_react_material_ui$rum$step_label.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$step_label__delegate;
return cljs_react_material_ui$rum$step_label;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.stepper = (function() { 
var cljs_react_material_ui$rum$stepper__delegate = function (args__39487__auto__){
var vec__39739 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__39487__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__39487__auto__),cljs.core.rest.call(null,args__39487__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__39487__auto__], null));
var opts__39488__auto__ = cljs.core.nth.call(null,vec__39739,(0),null);
var children__39489__auto__ = cljs.core.nth.call(null,vec__39739,(1),null);
var type__39490__auto__ = cljs.core.first.call(null,children__39489__auto__);
var new_children__39491__auto__ = ((cljs.core.vector_QMARK_.call(null,type__39490__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__39489__auto__))], null):children__39489__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,(MaterialUI["Stepper"]),cljs.core.cons.call(null,opts__39488__auto__,new_children__39491__auto__));
};
var cljs_react_material_ui$rum$stepper = function (var_args){
var args__39487__auto__ = null;
if (arguments.length > 0) {
var G__39742__i = 0, G__39742__a = new Array(arguments.length -  0);
while (G__39742__i < G__39742__a.length) {G__39742__a[G__39742__i] = arguments[G__39742__i + 0]; ++G__39742__i;}
  args__39487__auto__ = new cljs.core.IndexedSeq(G__39742__a,0,null);
} 
return cljs_react_material_ui$rum$stepper__delegate.call(this,args__39487__auto__);};
cljs_react_material_ui$rum$stepper.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$stepper.cljs$lang$applyTo = (function (arglist__39743){
var args__39487__auto__ = cljs.core.seq(arglist__39743);
return cljs_react_material_ui$rum$stepper__delegate(args__39487__auto__);
});
cljs_react_material_ui$rum$stepper.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$stepper__delegate;
return cljs_react_material_ui$rum$stepper;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.snackbar = (function() { 
var cljs_react_material_ui$rum$snackbar__delegate = function (args__39487__auto__){
var vec__39744 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__39487__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__39487__auto__),cljs.core.rest.call(null,args__39487__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__39487__auto__], null));
var opts__39488__auto__ = cljs.core.nth.call(null,vec__39744,(0),null);
var children__39489__auto__ = cljs.core.nth.call(null,vec__39744,(1),null);
var type__39490__auto__ = cljs.core.first.call(null,children__39489__auto__);
var new_children__39491__auto__ = ((cljs.core.vector_QMARK_.call(null,type__39490__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__39489__auto__))], null):children__39489__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,(MaterialUI["Snackbar"]),cljs.core.cons.call(null,opts__39488__auto__,new_children__39491__auto__));
};
var cljs_react_material_ui$rum$snackbar = function (var_args){
var args__39487__auto__ = null;
if (arguments.length > 0) {
var G__39747__i = 0, G__39747__a = new Array(arguments.length -  0);
while (G__39747__i < G__39747__a.length) {G__39747__a[G__39747__i] = arguments[G__39747__i + 0]; ++G__39747__i;}
  args__39487__auto__ = new cljs.core.IndexedSeq(G__39747__a,0,null);
} 
return cljs_react_material_ui$rum$snackbar__delegate.call(this,args__39487__auto__);};
cljs_react_material_ui$rum$snackbar.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$snackbar.cljs$lang$applyTo = (function (arglist__39748){
var args__39487__auto__ = cljs.core.seq(arglist__39748);
return cljs_react_material_ui$rum$snackbar__delegate(args__39487__auto__);
});
cljs_react_material_ui$rum$snackbar.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$snackbar__delegate;
return cljs_react_material_ui$rum$snackbar;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.tabs = (function() { 
var cljs_react_material_ui$rum$tabs__delegate = function (args__39487__auto__){
var vec__39749 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__39487__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__39487__auto__),cljs.core.rest.call(null,args__39487__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__39487__auto__], null));
var opts__39488__auto__ = cljs.core.nth.call(null,vec__39749,(0),null);
var children__39489__auto__ = cljs.core.nth.call(null,vec__39749,(1),null);
var type__39490__auto__ = cljs.core.first.call(null,children__39489__auto__);
var new_children__39491__auto__ = ((cljs.core.vector_QMARK_.call(null,type__39490__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__39489__auto__))], null):children__39489__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,(MaterialUI["Tabs"]),cljs.core.cons.call(null,opts__39488__auto__,new_children__39491__auto__));
};
var cljs_react_material_ui$rum$tabs = function (var_args){
var args__39487__auto__ = null;
if (arguments.length > 0) {
var G__39752__i = 0, G__39752__a = new Array(arguments.length -  0);
while (G__39752__i < G__39752__a.length) {G__39752__a[G__39752__i] = arguments[G__39752__i + 0]; ++G__39752__i;}
  args__39487__auto__ = new cljs.core.IndexedSeq(G__39752__a,0,null);
} 
return cljs_react_material_ui$rum$tabs__delegate.call(this,args__39487__auto__);};
cljs_react_material_ui$rum$tabs.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$tabs.cljs$lang$applyTo = (function (arglist__39753){
var args__39487__auto__ = cljs.core.seq(arglist__39753);
return cljs_react_material_ui$rum$tabs__delegate(args__39487__auto__);
});
cljs_react_material_ui$rum$tabs.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$tabs__delegate;
return cljs_react_material_ui$rum$tabs;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.tab = (function() { 
var cljs_react_material_ui$rum$tab__delegate = function (args__39487__auto__){
var vec__39754 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__39487__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__39487__auto__),cljs.core.rest.call(null,args__39487__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__39487__auto__], null));
var opts__39488__auto__ = cljs.core.nth.call(null,vec__39754,(0),null);
var children__39489__auto__ = cljs.core.nth.call(null,vec__39754,(1),null);
var type__39490__auto__ = cljs.core.first.call(null,children__39489__auto__);
var new_children__39491__auto__ = ((cljs.core.vector_QMARK_.call(null,type__39490__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__39489__auto__))], null):children__39489__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,(MaterialUI["Tab"]),cljs.core.cons.call(null,opts__39488__auto__,new_children__39491__auto__));
};
var cljs_react_material_ui$rum$tab = function (var_args){
var args__39487__auto__ = null;
if (arguments.length > 0) {
var G__39757__i = 0, G__39757__a = new Array(arguments.length -  0);
while (G__39757__i < G__39757__a.length) {G__39757__a[G__39757__i] = arguments[G__39757__i + 0]; ++G__39757__i;}
  args__39487__auto__ = new cljs.core.IndexedSeq(G__39757__a,0,null);
} 
return cljs_react_material_ui$rum$tab__delegate.call(this,args__39487__auto__);};
cljs_react_material_ui$rum$tab.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$tab.cljs$lang$applyTo = (function (arglist__39758){
var args__39487__auto__ = cljs.core.seq(arglist__39758);
return cljs_react_material_ui$rum$tab__delegate(args__39487__auto__);
});
cljs_react_material_ui$rum$tab.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$tab__delegate;
return cljs_react_material_ui$rum$tab;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.table = (function() { 
var cljs_react_material_ui$rum$table__delegate = function (args__39487__auto__){
var vec__39759 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__39487__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__39487__auto__),cljs.core.rest.call(null,args__39487__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__39487__auto__], null));
var opts__39488__auto__ = cljs.core.nth.call(null,vec__39759,(0),null);
var children__39489__auto__ = cljs.core.nth.call(null,vec__39759,(1),null);
var type__39490__auto__ = cljs.core.first.call(null,children__39489__auto__);
var new_children__39491__auto__ = ((cljs.core.vector_QMARK_.call(null,type__39490__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__39489__auto__))], null):children__39489__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,(MaterialUI["Table"]),cljs.core.cons.call(null,opts__39488__auto__,new_children__39491__auto__));
};
var cljs_react_material_ui$rum$table = function (var_args){
var args__39487__auto__ = null;
if (arguments.length > 0) {
var G__39762__i = 0, G__39762__a = new Array(arguments.length -  0);
while (G__39762__i < G__39762__a.length) {G__39762__a[G__39762__i] = arguments[G__39762__i + 0]; ++G__39762__i;}
  args__39487__auto__ = new cljs.core.IndexedSeq(G__39762__a,0,null);
} 
return cljs_react_material_ui$rum$table__delegate.call(this,args__39487__auto__);};
cljs_react_material_ui$rum$table.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$table.cljs$lang$applyTo = (function (arglist__39763){
var args__39487__auto__ = cljs.core.seq(arglist__39763);
return cljs_react_material_ui$rum$table__delegate(args__39487__auto__);
});
cljs_react_material_ui$rum$table.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$table__delegate;
return cljs_react_material_ui$rum$table;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.table_body = (function() { 
var cljs_react_material_ui$rum$table_body__delegate = function (args__39487__auto__){
var vec__39764 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__39487__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__39487__auto__),cljs.core.rest.call(null,args__39487__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__39487__auto__], null));
var opts__39488__auto__ = cljs.core.nth.call(null,vec__39764,(0),null);
var children__39489__auto__ = cljs.core.nth.call(null,vec__39764,(1),null);
var type__39490__auto__ = cljs.core.first.call(null,children__39489__auto__);
var new_children__39491__auto__ = ((cljs.core.vector_QMARK_.call(null,type__39490__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__39489__auto__))], null):children__39489__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,(MaterialUI["TableBody"]),cljs.core.cons.call(null,opts__39488__auto__,new_children__39491__auto__));
};
var cljs_react_material_ui$rum$table_body = function (var_args){
var args__39487__auto__ = null;
if (arguments.length > 0) {
var G__39767__i = 0, G__39767__a = new Array(arguments.length -  0);
while (G__39767__i < G__39767__a.length) {G__39767__a[G__39767__i] = arguments[G__39767__i + 0]; ++G__39767__i;}
  args__39487__auto__ = new cljs.core.IndexedSeq(G__39767__a,0,null);
} 
return cljs_react_material_ui$rum$table_body__delegate.call(this,args__39487__auto__);};
cljs_react_material_ui$rum$table_body.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$table_body.cljs$lang$applyTo = (function (arglist__39768){
var args__39487__auto__ = cljs.core.seq(arglist__39768);
return cljs_react_material_ui$rum$table_body__delegate(args__39487__auto__);
});
cljs_react_material_ui$rum$table_body.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$table_body__delegate;
return cljs_react_material_ui$rum$table_body;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.table_footer = (function() { 
var cljs_react_material_ui$rum$table_footer__delegate = function (args__39487__auto__){
var vec__39769 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__39487__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__39487__auto__),cljs.core.rest.call(null,args__39487__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__39487__auto__], null));
var opts__39488__auto__ = cljs.core.nth.call(null,vec__39769,(0),null);
var children__39489__auto__ = cljs.core.nth.call(null,vec__39769,(1),null);
var type__39490__auto__ = cljs.core.first.call(null,children__39489__auto__);
var new_children__39491__auto__ = ((cljs.core.vector_QMARK_.call(null,type__39490__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__39489__auto__))], null):children__39489__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,(MaterialUI["TableFooter"]),cljs.core.cons.call(null,opts__39488__auto__,new_children__39491__auto__));
};
var cljs_react_material_ui$rum$table_footer = function (var_args){
var args__39487__auto__ = null;
if (arguments.length > 0) {
var G__39772__i = 0, G__39772__a = new Array(arguments.length -  0);
while (G__39772__i < G__39772__a.length) {G__39772__a[G__39772__i] = arguments[G__39772__i + 0]; ++G__39772__i;}
  args__39487__auto__ = new cljs.core.IndexedSeq(G__39772__a,0,null);
} 
return cljs_react_material_ui$rum$table_footer__delegate.call(this,args__39487__auto__);};
cljs_react_material_ui$rum$table_footer.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$table_footer.cljs$lang$applyTo = (function (arglist__39773){
var args__39487__auto__ = cljs.core.seq(arglist__39773);
return cljs_react_material_ui$rum$table_footer__delegate(args__39487__auto__);
});
cljs_react_material_ui$rum$table_footer.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$table_footer__delegate;
return cljs_react_material_ui$rum$table_footer;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.table_header = (function() { 
var cljs_react_material_ui$rum$table_header__delegate = function (args__39487__auto__){
var vec__39774 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__39487__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__39487__auto__),cljs.core.rest.call(null,args__39487__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__39487__auto__], null));
var opts__39488__auto__ = cljs.core.nth.call(null,vec__39774,(0),null);
var children__39489__auto__ = cljs.core.nth.call(null,vec__39774,(1),null);
var type__39490__auto__ = cljs.core.first.call(null,children__39489__auto__);
var new_children__39491__auto__ = ((cljs.core.vector_QMARK_.call(null,type__39490__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__39489__auto__))], null):children__39489__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,(MaterialUI["TableHeader"]),cljs.core.cons.call(null,opts__39488__auto__,new_children__39491__auto__));
};
var cljs_react_material_ui$rum$table_header = function (var_args){
var args__39487__auto__ = null;
if (arguments.length > 0) {
var G__39777__i = 0, G__39777__a = new Array(arguments.length -  0);
while (G__39777__i < G__39777__a.length) {G__39777__a[G__39777__i] = arguments[G__39777__i + 0]; ++G__39777__i;}
  args__39487__auto__ = new cljs.core.IndexedSeq(G__39777__a,0,null);
} 
return cljs_react_material_ui$rum$table_header__delegate.call(this,args__39487__auto__);};
cljs_react_material_ui$rum$table_header.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$table_header.cljs$lang$applyTo = (function (arglist__39778){
var args__39487__auto__ = cljs.core.seq(arglist__39778);
return cljs_react_material_ui$rum$table_header__delegate(args__39487__auto__);
});
cljs_react_material_ui$rum$table_header.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$table_header__delegate;
return cljs_react_material_ui$rum$table_header;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.table_header_column = (function() { 
var cljs_react_material_ui$rum$table_header_column__delegate = function (args__39487__auto__){
var vec__39779 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__39487__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__39487__auto__),cljs.core.rest.call(null,args__39487__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__39487__auto__], null));
var opts__39488__auto__ = cljs.core.nth.call(null,vec__39779,(0),null);
var children__39489__auto__ = cljs.core.nth.call(null,vec__39779,(1),null);
var type__39490__auto__ = cljs.core.first.call(null,children__39489__auto__);
var new_children__39491__auto__ = ((cljs.core.vector_QMARK_.call(null,type__39490__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__39489__auto__))], null):children__39489__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,(MaterialUI["TableHeaderColumn"]),cljs.core.cons.call(null,opts__39488__auto__,new_children__39491__auto__));
};
var cljs_react_material_ui$rum$table_header_column = function (var_args){
var args__39487__auto__ = null;
if (arguments.length > 0) {
var G__39782__i = 0, G__39782__a = new Array(arguments.length -  0);
while (G__39782__i < G__39782__a.length) {G__39782__a[G__39782__i] = arguments[G__39782__i + 0]; ++G__39782__i;}
  args__39487__auto__ = new cljs.core.IndexedSeq(G__39782__a,0,null);
} 
return cljs_react_material_ui$rum$table_header_column__delegate.call(this,args__39487__auto__);};
cljs_react_material_ui$rum$table_header_column.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$table_header_column.cljs$lang$applyTo = (function (arglist__39783){
var args__39487__auto__ = cljs.core.seq(arglist__39783);
return cljs_react_material_ui$rum$table_header_column__delegate(args__39487__auto__);
});
cljs_react_material_ui$rum$table_header_column.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$table_header_column__delegate;
return cljs_react_material_ui$rum$table_header_column;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.table_row = (function() { 
var cljs_react_material_ui$rum$table_row__delegate = function (args__39487__auto__){
var vec__39784 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__39487__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__39487__auto__),cljs.core.rest.call(null,args__39487__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__39487__auto__], null));
var opts__39488__auto__ = cljs.core.nth.call(null,vec__39784,(0),null);
var children__39489__auto__ = cljs.core.nth.call(null,vec__39784,(1),null);
var type__39490__auto__ = cljs.core.first.call(null,children__39489__auto__);
var new_children__39491__auto__ = ((cljs.core.vector_QMARK_.call(null,type__39490__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__39489__auto__))], null):children__39489__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,(MaterialUI["TableRow"]),cljs.core.cons.call(null,opts__39488__auto__,new_children__39491__auto__));
};
var cljs_react_material_ui$rum$table_row = function (var_args){
var args__39487__auto__ = null;
if (arguments.length > 0) {
var G__39787__i = 0, G__39787__a = new Array(arguments.length -  0);
while (G__39787__i < G__39787__a.length) {G__39787__a[G__39787__i] = arguments[G__39787__i + 0]; ++G__39787__i;}
  args__39487__auto__ = new cljs.core.IndexedSeq(G__39787__a,0,null);
} 
return cljs_react_material_ui$rum$table_row__delegate.call(this,args__39487__auto__);};
cljs_react_material_ui$rum$table_row.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$table_row.cljs$lang$applyTo = (function (arglist__39788){
var args__39487__auto__ = cljs.core.seq(arglist__39788);
return cljs_react_material_ui$rum$table_row__delegate(args__39487__auto__);
});
cljs_react_material_ui$rum$table_row.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$table_row__delegate;
return cljs_react_material_ui$rum$table_row;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.table_row_column = (function() { 
var cljs_react_material_ui$rum$table_row_column__delegate = function (args__39487__auto__){
var vec__39789 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__39487__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__39487__auto__),cljs.core.rest.call(null,args__39487__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__39487__auto__], null));
var opts__39488__auto__ = cljs.core.nth.call(null,vec__39789,(0),null);
var children__39489__auto__ = cljs.core.nth.call(null,vec__39789,(1),null);
var type__39490__auto__ = cljs.core.first.call(null,children__39489__auto__);
var new_children__39491__auto__ = ((cljs.core.vector_QMARK_.call(null,type__39490__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__39489__auto__))], null):children__39489__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,(MaterialUI["TableRowColumn"]),cljs.core.cons.call(null,opts__39488__auto__,new_children__39491__auto__));
};
var cljs_react_material_ui$rum$table_row_column = function (var_args){
var args__39487__auto__ = null;
if (arguments.length > 0) {
var G__39792__i = 0, G__39792__a = new Array(arguments.length -  0);
while (G__39792__i < G__39792__a.length) {G__39792__a[G__39792__i] = arguments[G__39792__i + 0]; ++G__39792__i;}
  args__39487__auto__ = new cljs.core.IndexedSeq(G__39792__a,0,null);
} 
return cljs_react_material_ui$rum$table_row_column__delegate.call(this,args__39487__auto__);};
cljs_react_material_ui$rum$table_row_column.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$table_row_column.cljs$lang$applyTo = (function (arglist__39793){
var args__39487__auto__ = cljs.core.seq(arglist__39793);
return cljs_react_material_ui$rum$table_row_column__delegate(args__39487__auto__);
});
cljs_react_material_ui$rum$table_row_column.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$table_row_column__delegate;
return cljs_react_material_ui$rum$table_row_column;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.text_field = (function() { 
var cljs_react_material_ui$rum$text_field__delegate = function (args__39487__auto__){
var vec__39794 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__39487__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__39487__auto__),cljs.core.rest.call(null,args__39487__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__39487__auto__], null));
var opts__39488__auto__ = cljs.core.nth.call(null,vec__39794,(0),null);
var children__39489__auto__ = cljs.core.nth.call(null,vec__39794,(1),null);
var type__39490__auto__ = cljs.core.first.call(null,children__39489__auto__);
var new_children__39491__auto__ = ((cljs.core.vector_QMARK_.call(null,type__39490__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__39489__auto__))], null):children__39489__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,(MaterialUI["TextField"]),cljs.core.cons.call(null,opts__39488__auto__,new_children__39491__auto__));
};
var cljs_react_material_ui$rum$text_field = function (var_args){
var args__39487__auto__ = null;
if (arguments.length > 0) {
var G__39797__i = 0, G__39797__a = new Array(arguments.length -  0);
while (G__39797__i < G__39797__a.length) {G__39797__a[G__39797__i] = arguments[G__39797__i + 0]; ++G__39797__i;}
  args__39487__auto__ = new cljs.core.IndexedSeq(G__39797__a,0,null);
} 
return cljs_react_material_ui$rum$text_field__delegate.call(this,args__39487__auto__);};
cljs_react_material_ui$rum$text_field.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$text_field.cljs$lang$applyTo = (function (arglist__39798){
var args__39487__auto__ = cljs.core.seq(arglist__39798);
return cljs_react_material_ui$rum$text_field__delegate(args__39487__auto__);
});
cljs_react_material_ui$rum$text_field.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$text_field__delegate;
return cljs_react_material_ui$rum$text_field;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.time_picker = (function() { 
var cljs_react_material_ui$rum$time_picker__delegate = function (args__39487__auto__){
var vec__39799 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__39487__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__39487__auto__),cljs.core.rest.call(null,args__39487__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__39487__auto__], null));
var opts__39488__auto__ = cljs.core.nth.call(null,vec__39799,(0),null);
var children__39489__auto__ = cljs.core.nth.call(null,vec__39799,(1),null);
var type__39490__auto__ = cljs.core.first.call(null,children__39489__auto__);
var new_children__39491__auto__ = ((cljs.core.vector_QMARK_.call(null,type__39490__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__39489__auto__))], null):children__39489__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,(MaterialUI["TimePicker"]),cljs.core.cons.call(null,opts__39488__auto__,new_children__39491__auto__));
};
var cljs_react_material_ui$rum$time_picker = function (var_args){
var args__39487__auto__ = null;
if (arguments.length > 0) {
var G__39802__i = 0, G__39802__a = new Array(arguments.length -  0);
while (G__39802__i < G__39802__a.length) {G__39802__a[G__39802__i] = arguments[G__39802__i + 0]; ++G__39802__i;}
  args__39487__auto__ = new cljs.core.IndexedSeq(G__39802__a,0,null);
} 
return cljs_react_material_ui$rum$time_picker__delegate.call(this,args__39487__auto__);};
cljs_react_material_ui$rum$time_picker.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$time_picker.cljs$lang$applyTo = (function (arglist__39803){
var args__39487__auto__ = cljs.core.seq(arglist__39803);
return cljs_react_material_ui$rum$time_picker__delegate(args__39487__auto__);
});
cljs_react_material_ui$rum$time_picker.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$time_picker__delegate;
return cljs_react_material_ui$rum$time_picker;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.toggle = (function() { 
var cljs_react_material_ui$rum$toggle__delegate = function (args__39487__auto__){
var vec__39804 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__39487__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__39487__auto__),cljs.core.rest.call(null,args__39487__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__39487__auto__], null));
var opts__39488__auto__ = cljs.core.nth.call(null,vec__39804,(0),null);
var children__39489__auto__ = cljs.core.nth.call(null,vec__39804,(1),null);
var type__39490__auto__ = cljs.core.first.call(null,children__39489__auto__);
var new_children__39491__auto__ = ((cljs.core.vector_QMARK_.call(null,type__39490__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__39489__auto__))], null):children__39489__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,(MaterialUI["Toggle"]),cljs.core.cons.call(null,opts__39488__auto__,new_children__39491__auto__));
};
var cljs_react_material_ui$rum$toggle = function (var_args){
var args__39487__auto__ = null;
if (arguments.length > 0) {
var G__39807__i = 0, G__39807__a = new Array(arguments.length -  0);
while (G__39807__i < G__39807__a.length) {G__39807__a[G__39807__i] = arguments[G__39807__i + 0]; ++G__39807__i;}
  args__39487__auto__ = new cljs.core.IndexedSeq(G__39807__a,0,null);
} 
return cljs_react_material_ui$rum$toggle__delegate.call(this,args__39487__auto__);};
cljs_react_material_ui$rum$toggle.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$toggle.cljs$lang$applyTo = (function (arglist__39808){
var args__39487__auto__ = cljs.core.seq(arglist__39808);
return cljs_react_material_ui$rum$toggle__delegate(args__39487__auto__);
});
cljs_react_material_ui$rum$toggle.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$toggle__delegate;
return cljs_react_material_ui$rum$toggle;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.toolbar = (function() { 
var cljs_react_material_ui$rum$toolbar__delegate = function (args__39487__auto__){
var vec__39809 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__39487__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__39487__auto__),cljs.core.rest.call(null,args__39487__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__39487__auto__], null));
var opts__39488__auto__ = cljs.core.nth.call(null,vec__39809,(0),null);
var children__39489__auto__ = cljs.core.nth.call(null,vec__39809,(1),null);
var type__39490__auto__ = cljs.core.first.call(null,children__39489__auto__);
var new_children__39491__auto__ = ((cljs.core.vector_QMARK_.call(null,type__39490__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__39489__auto__))], null):children__39489__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,(MaterialUI["Toolbar"]),cljs.core.cons.call(null,opts__39488__auto__,new_children__39491__auto__));
};
var cljs_react_material_ui$rum$toolbar = function (var_args){
var args__39487__auto__ = null;
if (arguments.length > 0) {
var G__39812__i = 0, G__39812__a = new Array(arguments.length -  0);
while (G__39812__i < G__39812__a.length) {G__39812__a[G__39812__i] = arguments[G__39812__i + 0]; ++G__39812__i;}
  args__39487__auto__ = new cljs.core.IndexedSeq(G__39812__a,0,null);
} 
return cljs_react_material_ui$rum$toolbar__delegate.call(this,args__39487__auto__);};
cljs_react_material_ui$rum$toolbar.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$toolbar.cljs$lang$applyTo = (function (arglist__39813){
var args__39487__auto__ = cljs.core.seq(arglist__39813);
return cljs_react_material_ui$rum$toolbar__delegate(args__39487__auto__);
});
cljs_react_material_ui$rum$toolbar.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$toolbar__delegate;
return cljs_react_material_ui$rum$toolbar;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.toolbar_group = (function() { 
var cljs_react_material_ui$rum$toolbar_group__delegate = function (args__39487__auto__){
var vec__39814 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__39487__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__39487__auto__),cljs.core.rest.call(null,args__39487__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__39487__auto__], null));
var opts__39488__auto__ = cljs.core.nth.call(null,vec__39814,(0),null);
var children__39489__auto__ = cljs.core.nth.call(null,vec__39814,(1),null);
var type__39490__auto__ = cljs.core.first.call(null,children__39489__auto__);
var new_children__39491__auto__ = ((cljs.core.vector_QMARK_.call(null,type__39490__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__39489__auto__))], null):children__39489__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,(MaterialUI["ToolbarGroup"]),cljs.core.cons.call(null,opts__39488__auto__,new_children__39491__auto__));
};
var cljs_react_material_ui$rum$toolbar_group = function (var_args){
var args__39487__auto__ = null;
if (arguments.length > 0) {
var G__39817__i = 0, G__39817__a = new Array(arguments.length -  0);
while (G__39817__i < G__39817__a.length) {G__39817__a[G__39817__i] = arguments[G__39817__i + 0]; ++G__39817__i;}
  args__39487__auto__ = new cljs.core.IndexedSeq(G__39817__a,0,null);
} 
return cljs_react_material_ui$rum$toolbar_group__delegate.call(this,args__39487__auto__);};
cljs_react_material_ui$rum$toolbar_group.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$toolbar_group.cljs$lang$applyTo = (function (arglist__39818){
var args__39487__auto__ = cljs.core.seq(arglist__39818);
return cljs_react_material_ui$rum$toolbar_group__delegate(args__39487__auto__);
});
cljs_react_material_ui$rum$toolbar_group.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$toolbar_group__delegate;
return cljs_react_material_ui$rum$toolbar_group;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.toolbar_separator = (function() { 
var cljs_react_material_ui$rum$toolbar_separator__delegate = function (args__39487__auto__){
var vec__39819 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__39487__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__39487__auto__),cljs.core.rest.call(null,args__39487__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__39487__auto__], null));
var opts__39488__auto__ = cljs.core.nth.call(null,vec__39819,(0),null);
var children__39489__auto__ = cljs.core.nth.call(null,vec__39819,(1),null);
var type__39490__auto__ = cljs.core.first.call(null,children__39489__auto__);
var new_children__39491__auto__ = ((cljs.core.vector_QMARK_.call(null,type__39490__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__39489__auto__))], null):children__39489__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,(MaterialUI["ToolbarSeparator"]),cljs.core.cons.call(null,opts__39488__auto__,new_children__39491__auto__));
};
var cljs_react_material_ui$rum$toolbar_separator = function (var_args){
var args__39487__auto__ = null;
if (arguments.length > 0) {
var G__39822__i = 0, G__39822__a = new Array(arguments.length -  0);
while (G__39822__i < G__39822__a.length) {G__39822__a[G__39822__i] = arguments[G__39822__i + 0]; ++G__39822__i;}
  args__39487__auto__ = new cljs.core.IndexedSeq(G__39822__a,0,null);
} 
return cljs_react_material_ui$rum$toolbar_separator__delegate.call(this,args__39487__auto__);};
cljs_react_material_ui$rum$toolbar_separator.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$toolbar_separator.cljs$lang$applyTo = (function (arglist__39823){
var args__39487__auto__ = cljs.core.seq(arglist__39823);
return cljs_react_material_ui$rum$toolbar_separator__delegate(args__39487__auto__);
});
cljs_react_material_ui$rum$toolbar_separator.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$toolbar_separator__delegate;
return cljs_react_material_ui$rum$toolbar_separator;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.toolbar_title = (function() { 
var cljs_react_material_ui$rum$toolbar_title__delegate = function (args__39487__auto__){
var vec__39824 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__39487__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__39487__auto__),cljs.core.rest.call(null,args__39487__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__39487__auto__], null));
var opts__39488__auto__ = cljs.core.nth.call(null,vec__39824,(0),null);
var children__39489__auto__ = cljs.core.nth.call(null,vec__39824,(1),null);
var type__39490__auto__ = cljs.core.first.call(null,children__39489__auto__);
var new_children__39491__auto__ = ((cljs.core.vector_QMARK_.call(null,type__39490__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__39489__auto__))], null):children__39489__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,(MaterialUI["ToolbarTitle"]),cljs.core.cons.call(null,opts__39488__auto__,new_children__39491__auto__));
};
var cljs_react_material_ui$rum$toolbar_title = function (var_args){
var args__39487__auto__ = null;
if (arguments.length > 0) {
var G__39827__i = 0, G__39827__a = new Array(arguments.length -  0);
while (G__39827__i < G__39827__a.length) {G__39827__a[G__39827__i] = arguments[G__39827__i + 0]; ++G__39827__i;}
  args__39487__auto__ = new cljs.core.IndexedSeq(G__39827__a,0,null);
} 
return cljs_react_material_ui$rum$toolbar_title__delegate.call(this,args__39487__auto__);};
cljs_react_material_ui$rum$toolbar_title.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$toolbar_title.cljs$lang$applyTo = (function (arglist__39828){
var args__39487__auto__ = cljs.core.seq(arglist__39828);
return cljs_react_material_ui$rum$toolbar_title__delegate(args__39487__auto__);
});
cljs_react_material_ui$rum$toolbar_title.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$toolbar_title__delegate;
return cljs_react_material_ui$rum$toolbar_title;
})()
;

//# sourceMappingURL=rum.js.map?rel=1510655885806
