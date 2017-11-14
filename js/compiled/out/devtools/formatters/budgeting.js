// Compiled by ClojureScript 1.9.908 {}
goog.provide('devtools.formatters.budgeting');
goog.require('cljs.core');
goog.require('devtools.formatters.templating');
goog.require('devtools.formatters.state');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.markup');
devtools.formatters.budgeting.header_expander_depth_cost = (2);
devtools.formatters.budgeting.over_budget_values = ((typeof WeakSet !== 'undefined')?(new WeakSet()):cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY));
devtools.formatters.budgeting.add_over_budget_value_BANG_ = (function devtools$formatters$budgeting$add_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_.call(null,devtools.formatters.budgeting.over_budget_values,cljs.core.conj.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__47735__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__47735__auto__["add"]).call(o__47735__auto__,value);
}
});
devtools.formatters.budgeting.delete_over_budget_value_BANG_ = (function devtools$formatters$budgeting$delete_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_.call(null,devtools.formatters.budgeting.over_budget_values,cljs.core.disj.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__47735__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__47735__auto__["delete"]).call(o__47735__auto__,value);
}
});
devtools.formatters.budgeting.has_over_budget_value_QMARK_ = (function devtools$formatters$budgeting$has_over_budget_value_QMARK_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value);
} else {
var o__47735__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__47735__auto__["has"]).call(o__47735__auto__,value);
}
});
devtools.formatters.budgeting.object_reference_QMARK_ = (function devtools$formatters$budgeting$object_reference_QMARK_(json_ml){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,json_ml),"object");
});
devtools.formatters.budgeting.determine_depth = (function devtools$formatters$budgeting$determine_depth(json_ml){
if(cljs.core.array_QMARK_.call(null,json_ml)){
return (cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,devtools.formatters.budgeting.determine_depth,json_ml)) + (1));
} else {
return (0);
}
});
devtools.formatters.budgeting.has_any_object_reference_QMARK_ = (function devtools$formatters$budgeting$has_any_object_reference_QMARK_(json_ml){
if(cljs.core.array_QMARK_.call(null,json_ml)){
if(cljs.core.truth_(devtools.formatters.budgeting.object_reference_QMARK_.call(null,json_ml))){
return true;
} else {
return cljs.core.some.call(null,devtools.formatters.budgeting.has_any_object_reference_QMARK_,json_ml);
}
} else {
return null;
}
});
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_ = (function devtools$formatters$budgeting$transfer_remaining_depth_budget_BANG_(object_reference,depth_budget){
if(!((depth_budget < (0)))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

var data = cljs.core.second.call(null,object_reference);
var _ = ((cljs.core.object_QMARK_.call(null,data))?null:(function(){throw (new Error("Assert failed: (object? data)"))})());
var config = (data["config"]);
var G__49023 = data;
var target__47740__auto__ = G__49023;
if(cljs.core.truth_(target__47740__auto__)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["unable to locate object path ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(null)," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49023)].join('')),"\n","target__47740__auto__"].join('')));
}

(target__47740__auto__["config"] = devtools.formatters.state.set_depth_budget.call(null,config,depth_budget));

return G__49023;
});
devtools.formatters.budgeting.distribute_budget_BANG_ = (function devtools$formatters$budgeting$distribute_budget_BANG_(json_ml,depth_budget){
if(!((depth_budget < (0)))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

if(cljs.core.array_QMARK_.call(null,json_ml)){
var new_depth_budget_49028 = (depth_budget - (1));
if(cljs.core.truth_(devtools.formatters.budgeting.object_reference_QMARK_.call(null,json_ml))){
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_.call(null,json_ml,new_depth_budget_49028);
} else {
var seq__49024_49029 = cljs.core.seq.call(null,json_ml);
var chunk__49025_49030 = null;
var count__49026_49031 = (0);
var i__49027_49032 = (0);
while(true){
if((i__49027_49032 < count__49026_49031)){
var item_49033 = cljs.core._nth.call(null,chunk__49025_49030,i__49027_49032);
devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_49033,new_depth_budget_49028);

var G__49034 = seq__49024_49029;
var G__49035 = chunk__49025_49030;
var G__49036 = count__49026_49031;
var G__49037 = (i__49027_49032 + (1));
seq__49024_49029 = G__49034;
chunk__49025_49030 = G__49035;
count__49026_49031 = G__49036;
i__49027_49032 = G__49037;
continue;
} else {
var temp__5278__auto___49038 = cljs.core.seq.call(null,seq__49024_49029);
if(temp__5278__auto___49038){
var seq__49024_49039__$1 = temp__5278__auto___49038;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49024_49039__$1)){
var c__30979__auto___49040 = cljs.core.chunk_first.call(null,seq__49024_49039__$1);
var G__49041 = cljs.core.chunk_rest.call(null,seq__49024_49039__$1);
var G__49042 = c__30979__auto___49040;
var G__49043 = cljs.core.count.call(null,c__30979__auto___49040);
var G__49044 = (0);
seq__49024_49029 = G__49041;
chunk__49025_49030 = G__49042;
count__49026_49031 = G__49043;
i__49027_49032 = G__49044;
continue;
} else {
var item_49045 = cljs.core.first.call(null,seq__49024_49039__$1);
devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_49045,new_depth_budget_49028);

var G__49046 = cljs.core.next.call(null,seq__49024_49039__$1);
var G__49047 = null;
var G__49048 = (0);
var G__49049 = (0);
seq__49024_49029 = G__49046;
chunk__49025_49030 = G__49047;
count__49026_49031 = G__49048;
i__49027_49032 = G__49049;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return json_ml;
});
devtools.formatters.budgeting.was_over_budget_QMARK__BANG_ = (function devtools$formatters$budgeting$was_over_budget_QMARK__BANG_(value){
if(cljs.core.truth_(devtools.formatters.budgeting.has_over_budget_value_QMARK_.call(null,value))){
devtools.formatters.budgeting.delete_over_budget_value_BANG_.call(null,value);

return true;
} else {
return null;
}
});
devtools.formatters.budgeting.alter_json_ml_to_fit_in_remaining_budget_BANG_ = (function devtools$formatters$budgeting$alter_json_ml_to_fit_in_remaining_budget_BANG_(value,json_ml){
var temp__5276__auto__ = devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"initial-hierarchy-depth-budget","initial-hierarchy-depth-budget",-482715807));
if(cljs.core.truth_(temp__5276__auto__)){
var initial_hierarchy_depth_budget = temp__5276__auto__;
var remaining_depth_budget = (function (){var or__30048__auto__ = devtools.formatters.state.get_depth_budget.call(null);
if(cljs.core.truth_(or__30048__auto__)){
return or__30048__auto__;
} else {
return (initial_hierarchy_depth_budget - (1));
}
})();
var depth = devtools.formatters.budgeting.determine_depth.call(null,json_ml);
var final_QMARK_ = cljs.core.not.call(null,devtools.formatters.budgeting.has_any_object_reference_QMARK_.call(null,json_ml));
var needed_depth = ((final_QMARK_)?depth:(depth + devtools.formatters.budgeting.header_expander_depth_cost));
if((remaining_depth_budget >= needed_depth)){
return devtools.formatters.budgeting.distribute_budget_BANG_.call(null,json_ml,remaining_depth_budget);
} else {
var expander_ml = devtools.formatters.templating.render_markup.call(null,devtools.formatters.markup._LT_header_expander_GT_.call(null,value));
devtools.formatters.budgeting.add_over_budget_value_BANG_.call(null,value);

return expander_ml;
}
} else {
return json_ml;
}
});

//# sourceMappingURL=budgeting.js.map?rel=1510655899268
