// Compiled by ClojureScript 1.9.908 {}
goog.provide('fuzzy_c_means_demo.core');
goog.require('cljs.core');
goog.require('cljsjs.material_ui');
goog.require('cljs.core.async');
goog.require('fuzzy_c_means_demo.ui');
goog.require('fuzzy_c_means_demo.c_means');
goog.require('fuzzy_c_means_demo.utils');
goog.require('goog.Timer');
goog.require('goog.events');
cljs.core.enable_console_print_BANG_.call(null);
fuzzy_c_means_demo.core.points = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(-3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-3),(-2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-3),(-3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-4),(-3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-4),(-2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-4),(-3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-2),(-3)], null)], null);
if(typeof fuzzy_c_means_demo.core.state !== 'undefined'){
} else {
fuzzy_c_means_demo.core.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"points","points",-1486596883),fuzzy_c_means_demo.core.points,new cljs.core.Keyword(null,"clusters-number","clusters-number",-1025077435),(3),new cljs.core.Keyword(null,"fuzzyness-param","fuzzyness-param",391384644),(2),new cljs.core.Keyword(null,"history","history",-247395220),null,new cljs.core.Keyword(null,"current-iteration","current-iteration",-419162574),(0),new cljs.core.Keyword(null,"playing?","playing?",-1884542863),false,new cljs.core.Keyword(null,"colors","colors",1157174732),null], null));
}
fuzzy_c_means_demo.core.event_bus = cljs.core.async.chan.call(null);
fuzzy_c_means_demo.core.event_bus_pub = cljs.core.async.pub.call(null,fuzzy_c_means_demo.core.event_bus,cljs.core.first);
fuzzy_c_means_demo.core.on_js_reload = (function fuzzy_c_means_demo$core$on_js_reload(){
return null;
});
var ch__45634__auto___45664 = cljs.core.async.chan.call(null);
cljs.core.async.sub.call(null,fuzzy_c_means_demo.core.event_bus_pub,new cljs.core.Keyword(null,"change-clusters-number","change-clusters-number",1618728662),ch__45634__auto___45664);

var c__35983__auto___45665 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35983__auto___45665,ch__45634__auto___45664){
return (function (){
var f__35984__auto__ = (function (){var switch__35893__auto__ = ((function (c__35983__auto___45665,ch__45634__auto___45664){
return (function (state_45655){
var state_val_45656 = (state_45655[(1)]);
if((state_val_45656 === (1))){
var state_45655__$1 = state_45655;
var statearr_45657_45666 = state_45655__$1;
(statearr_45657_45666[(2)] = null);

(statearr_45657_45666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45656 === (2))){
var state_45655__$1 = state_45655;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45655__$1,(4),ch__45634__auto___45664);
} else {
if((state_val_45656 === (3))){
var inst_45653 = (state_45655[(2)]);
var state_45655__$1 = state_45655;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45655__$1,inst_45653);
} else {
if((state_val_45656 === (4))){
var inst_45647 = (state_45655[(2)]);
var inst_45648 = cljs.core.nth.call(null,inst_45647,(0),null);
var inst_45649 = cljs.core.nth.call(null,inst_45647,(1),null);
var inst_45650 = cljs.core.swap_BANG_.call(null,fuzzy_c_means_demo.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"clusters-number","clusters-number",-1025077435),inst_45649);
var state_45655__$1 = (function (){var statearr_45658 = state_45655;
(statearr_45658[(7)] = inst_45650);

(statearr_45658[(8)] = inst_45648);

return statearr_45658;
})();
var statearr_45659_45667 = state_45655__$1;
(statearr_45659_45667[(2)] = null);

(statearr_45659_45667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__35983__auto___45665,ch__45634__auto___45664))
;
return ((function (switch__35893__auto__,c__35983__auto___45665,ch__45634__auto___45664){
return (function() {
var fuzzy_c_means_demo$core$state_machine__35894__auto__ = null;
var fuzzy_c_means_demo$core$state_machine__35894__auto____0 = (function (){
var statearr_45660 = [null,null,null,null,null,null,null,null,null];
(statearr_45660[(0)] = fuzzy_c_means_demo$core$state_machine__35894__auto__);

(statearr_45660[(1)] = (1));

return statearr_45660;
});
var fuzzy_c_means_demo$core$state_machine__35894__auto____1 = (function (state_45655){
while(true){
var ret_value__35895__auto__ = (function (){try{while(true){
var result__35896__auto__ = switch__35893__auto__.call(null,state_45655);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35896__auto__;
}
break;
}
}catch (e45661){if((e45661 instanceof Object)){
var ex__35897__auto__ = e45661;
var statearr_45662_45668 = state_45655;
(statearr_45662_45668[(5)] = ex__35897__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45655);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45661;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45669 = state_45655;
state_45655 = G__45669;
continue;
} else {
return ret_value__35895__auto__;
}
break;
}
});
fuzzy_c_means_demo$core$state_machine__35894__auto__ = function(state_45655){
switch(arguments.length){
case 0:
return fuzzy_c_means_demo$core$state_machine__35894__auto____0.call(this);
case 1:
return fuzzy_c_means_demo$core$state_machine__35894__auto____1.call(this,state_45655);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
fuzzy_c_means_demo$core$state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$0 = fuzzy_c_means_demo$core$state_machine__35894__auto____0;
fuzzy_c_means_demo$core$state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$1 = fuzzy_c_means_demo$core$state_machine__35894__auto____1;
return fuzzy_c_means_demo$core$state_machine__35894__auto__;
})()
;})(switch__35893__auto__,c__35983__auto___45665,ch__45634__auto___45664))
})();
var state__35985__auto__ = (function (){var statearr_45663 = f__35984__auto__.call(null);
(statearr_45663[(6)] = c__35983__auto___45665);

return statearr_45663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35985__auto__);
});})(c__35983__auto___45665,ch__45634__auto___45664))
);

var ch__45634__auto___45692 = cljs.core.async.chan.call(null);
cljs.core.async.sub.call(null,fuzzy_c_means_demo.core.event_bus_pub,new cljs.core.Keyword(null,"change-fuzzyness-param","change-fuzzyness-param",1990016689),ch__45634__auto___45692);

var c__35983__auto___45693 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35983__auto___45693,ch__45634__auto___45692){
return (function (){
var f__35984__auto__ = (function (){var switch__35893__auto__ = ((function (c__35983__auto___45693,ch__45634__auto___45692){
return (function (state_45683){
var state_val_45684 = (state_45683[(1)]);
if((state_val_45684 === (1))){
var state_45683__$1 = state_45683;
var statearr_45685_45694 = state_45683__$1;
(statearr_45685_45694[(2)] = null);

(statearr_45685_45694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (2))){
var state_45683__$1 = state_45683;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45683__$1,(4),ch__45634__auto___45692);
} else {
if((state_val_45684 === (3))){
var inst_45681 = (state_45683[(2)]);
var state_45683__$1 = state_45683;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45683__$1,inst_45681);
} else {
if((state_val_45684 === (4))){
var inst_45675 = (state_45683[(2)]);
var inst_45676 = cljs.core.nth.call(null,inst_45675,(0),null);
var inst_45677 = cljs.core.nth.call(null,inst_45675,(1),null);
var inst_45678 = cljs.core.swap_BANG_.call(null,fuzzy_c_means_demo.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"fuzzyness-param","fuzzyness-param",391384644),inst_45677);
var state_45683__$1 = (function (){var statearr_45686 = state_45683;
(statearr_45686[(7)] = inst_45676);

(statearr_45686[(8)] = inst_45678);

return statearr_45686;
})();
var statearr_45687_45695 = state_45683__$1;
(statearr_45687_45695[(2)] = null);

(statearr_45687_45695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__35983__auto___45693,ch__45634__auto___45692))
;
return ((function (switch__35893__auto__,c__35983__auto___45693,ch__45634__auto___45692){
return (function() {
var fuzzy_c_means_demo$core$state_machine__35894__auto__ = null;
var fuzzy_c_means_demo$core$state_machine__35894__auto____0 = (function (){
var statearr_45688 = [null,null,null,null,null,null,null,null,null];
(statearr_45688[(0)] = fuzzy_c_means_demo$core$state_machine__35894__auto__);

(statearr_45688[(1)] = (1));

return statearr_45688;
});
var fuzzy_c_means_demo$core$state_machine__35894__auto____1 = (function (state_45683){
while(true){
var ret_value__35895__auto__ = (function (){try{while(true){
var result__35896__auto__ = switch__35893__auto__.call(null,state_45683);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35896__auto__;
}
break;
}
}catch (e45689){if((e45689 instanceof Object)){
var ex__35897__auto__ = e45689;
var statearr_45690_45696 = state_45683;
(statearr_45690_45696[(5)] = ex__35897__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45683);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45689;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45697 = state_45683;
state_45683 = G__45697;
continue;
} else {
return ret_value__35895__auto__;
}
break;
}
});
fuzzy_c_means_demo$core$state_machine__35894__auto__ = function(state_45683){
switch(arguments.length){
case 0:
return fuzzy_c_means_demo$core$state_machine__35894__auto____0.call(this);
case 1:
return fuzzy_c_means_demo$core$state_machine__35894__auto____1.call(this,state_45683);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
fuzzy_c_means_demo$core$state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$0 = fuzzy_c_means_demo$core$state_machine__35894__auto____0;
fuzzy_c_means_demo$core$state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$1 = fuzzy_c_means_demo$core$state_machine__35894__auto____1;
return fuzzy_c_means_demo$core$state_machine__35894__auto__;
})()
;})(switch__35893__auto__,c__35983__auto___45693,ch__45634__auto___45692))
})();
var state__35985__auto__ = (function (){var statearr_45691 = f__35984__auto__.call(null);
(statearr_45691[(6)] = c__35983__auto___45693);

return statearr_45691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35985__auto__);
});})(c__35983__auto___45693,ch__45634__auto___45692))
);

var ch__45634__auto___45732 = cljs.core.async.chan.call(null);
cljs.core.async.sub.call(null,fuzzy_c_means_demo.core.event_bus_pub,new cljs.core.Keyword(null,"file-uploaded","file-uploaded",-1464442207),ch__45634__auto___45732);

var c__35983__auto___45733 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35983__auto___45733,ch__45634__auto___45732){
return (function (){
var f__35984__auto__ = (function (){var switch__35893__auto__ = ((function (c__35983__auto___45733,ch__45634__auto___45732){
return (function (state_45718){
var state_val_45719 = (state_45718[(1)]);
if((state_val_45719 === (1))){
var state_45718__$1 = state_45718;
var statearr_45720_45734 = state_45718__$1;
(statearr_45720_45734[(2)] = null);

(statearr_45720_45734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45719 === (2))){
var state_45718__$1 = state_45718;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45718__$1,(4),ch__45634__auto___45732);
} else {
if((state_val_45719 === (3))){
var inst_45716 = (state_45718[(2)]);
var state_45718__$1 = state_45718;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45718__$1,inst_45716);
} else {
if((state_val_45719 === (4))){
var inst_45706 = (state_45718[(7)]);
var inst_45703 = (state_45718[(2)]);
var inst_45704 = cljs.core.nth.call(null,inst_45703,(0),null);
var inst_45705 = cljs.core.nth.call(null,inst_45703,(1),null);
var inst_45706__$1 = cljs.reader.read_string.call(null,inst_45705);
var inst_45707 = cljs.core.vector_QMARK_.call(null,inst_45706__$1);
var state_45718__$1 = (function (){var statearr_45721 = state_45718;
(statearr_45721[(8)] = inst_45704);

(statearr_45721[(7)] = inst_45706__$1);

return statearr_45721;
})();
if(inst_45707){
var statearr_45722_45735 = state_45718__$1;
(statearr_45722_45735[(1)] = (5));

} else {
var statearr_45723_45736 = state_45718__$1;
(statearr_45723_45736[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45719 === (5))){
var inst_45706 = (state_45718[(7)]);
var inst_45709 = cljs.core.swap_BANG_.call(null,fuzzy_c_means_demo.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"points","points",-1486596883),inst_45706);
var state_45718__$1 = state_45718;
var statearr_45724_45737 = state_45718__$1;
(statearr_45724_45737[(2)] = inst_45709);

(statearr_45724_45737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45719 === (6))){
var inst_45711 = alert("Please, load file with correct points!");
var state_45718__$1 = state_45718;
var statearr_45725_45738 = state_45718__$1;
(statearr_45725_45738[(2)] = inst_45711);

(statearr_45725_45738[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45719 === (7))){
var inst_45713 = (state_45718[(2)]);
var state_45718__$1 = (function (){var statearr_45726 = state_45718;
(statearr_45726[(9)] = inst_45713);

return statearr_45726;
})();
var statearr_45727_45739 = state_45718__$1;
(statearr_45727_45739[(2)] = null);

(statearr_45727_45739[(1)] = (2));


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
});})(c__35983__auto___45733,ch__45634__auto___45732))
;
return ((function (switch__35893__auto__,c__35983__auto___45733,ch__45634__auto___45732){
return (function() {
var fuzzy_c_means_demo$core$state_machine__35894__auto__ = null;
var fuzzy_c_means_demo$core$state_machine__35894__auto____0 = (function (){
var statearr_45728 = [null,null,null,null,null,null,null,null,null,null];
(statearr_45728[(0)] = fuzzy_c_means_demo$core$state_machine__35894__auto__);

(statearr_45728[(1)] = (1));

return statearr_45728;
});
var fuzzy_c_means_demo$core$state_machine__35894__auto____1 = (function (state_45718){
while(true){
var ret_value__35895__auto__ = (function (){try{while(true){
var result__35896__auto__ = switch__35893__auto__.call(null,state_45718);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35896__auto__;
}
break;
}
}catch (e45729){if((e45729 instanceof Object)){
var ex__35897__auto__ = e45729;
var statearr_45730_45740 = state_45718;
(statearr_45730_45740[(5)] = ex__35897__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45718);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45729;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45741 = state_45718;
state_45718 = G__45741;
continue;
} else {
return ret_value__35895__auto__;
}
break;
}
});
fuzzy_c_means_demo$core$state_machine__35894__auto__ = function(state_45718){
switch(arguments.length){
case 0:
return fuzzy_c_means_demo$core$state_machine__35894__auto____0.call(this);
case 1:
return fuzzy_c_means_demo$core$state_machine__35894__auto____1.call(this,state_45718);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
fuzzy_c_means_demo$core$state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$0 = fuzzy_c_means_demo$core$state_machine__35894__auto____0;
fuzzy_c_means_demo$core$state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$1 = fuzzy_c_means_demo$core$state_machine__35894__auto____1;
return fuzzy_c_means_demo$core$state_machine__35894__auto__;
})()
;})(switch__35893__auto__,c__35983__auto___45733,ch__45634__auto___45732))
})();
var state__35985__auto__ = (function (){var statearr_45731 = f__35984__auto__.call(null);
(statearr_45731[(6)] = c__35983__auto___45733);

return statearr_45731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35985__auto__);
});})(c__35983__auto___45733,ch__45634__auto___45732))
);

var ch__45634__auto___45777 = cljs.core.async.chan.call(null);
cljs.core.async.sub.call(null,fuzzy_c_means_demo.core.event_bus_pub,new cljs.core.Keyword(null,"calculate","calculate",-1224644403),ch__45634__auto___45777);

var c__35983__auto___45778 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35983__auto___45778,ch__45634__auto___45777){
return (function (){
var f__35984__auto__ = (function (){var switch__35893__auto__ = ((function (c__35983__auto___45778,ch__45634__auto___45777){
return (function (state_45768){
var state_val_45769 = (state_45768[(1)]);
if((state_val_45769 === (1))){
var state_45768__$1 = state_45768;
var statearr_45770_45779 = state_45768__$1;
(statearr_45770_45779[(2)] = null);

(statearr_45770_45779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45769 === (2))){
var state_45768__$1 = state_45768;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45768__$1,(4),ch__45634__auto___45777);
} else {
if((state_val_45769 === (3))){
var inst_45766 = (state_45768[(2)]);
var state_45768__$1 = state_45768;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45768__$1,inst_45766);
} else {
if((state_val_45769 === (4))){
var inst_45747 = (state_45768[(2)]);
var inst_45748 = cljs.core.deref.call(null,fuzzy_c_means_demo.core.state);
var inst_45749 = new cljs.core.Keyword(null,"clusters-number","clusters-number",-1025077435).cljs$core$IFn$_invoke$arity$1(inst_45748);
var inst_45750 = parseInt(inst_45749);
var inst_45751 = cljs.core.deref.call(null,fuzzy_c_means_demo.core.state);
var inst_45752 = new cljs.core.Keyword(null,"fuzzyness-param","fuzzyness-param",391384644).cljs$core$IFn$_invoke$arity$1(inst_45751);
var inst_45753 = parseFloat(inst_45752);
var inst_45754 = cljs.core.deref.call(null,fuzzy_c_means_demo.core.state);
var inst_45755 = new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(inst_45754);
var inst_45756 = fuzzy_c_means_demo.utils.generate_n_colors.call(null,inst_45750);
var inst_45757 = [new cljs.core.Keyword(null,"clusters-number","clusters-number",-1025077435),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"m","m",1632677161)];
var inst_45758 = [inst_45750,0.01,inst_45753];
var inst_45759 = cljs.core.PersistentHashMap.fromArrays(inst_45757,inst_45758);
var inst_45760 = fuzzy_c_means_demo.c_means.calculate.call(null,inst_45759,inst_45755);
var inst_45761 = cljs.core.swap_BANG_.call(null,fuzzy_c_means_demo.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"history","history",-247395220),inst_45760);
var inst_45762 = cljs.core.swap_BANG_.call(null,fuzzy_c_means_demo.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"current-iteration","current-iteration",-419162574),(0));
var inst_45763 = cljs.core.swap_BANG_.call(null,fuzzy_c_means_demo.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"colors","colors",1157174732),inst_45756);
var state_45768__$1 = (function (){var statearr_45771 = state_45768;
(statearr_45771[(7)] = inst_45762);

(statearr_45771[(8)] = inst_45763);

(statearr_45771[(9)] = inst_45747);

(statearr_45771[(10)] = inst_45761);

return statearr_45771;
})();
var statearr_45772_45780 = state_45768__$1;
(statearr_45772_45780[(2)] = null);

(statearr_45772_45780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__35983__auto___45778,ch__45634__auto___45777))
;
return ((function (switch__35893__auto__,c__35983__auto___45778,ch__45634__auto___45777){
return (function() {
var fuzzy_c_means_demo$core$state_machine__35894__auto__ = null;
var fuzzy_c_means_demo$core$state_machine__35894__auto____0 = (function (){
var statearr_45773 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45773[(0)] = fuzzy_c_means_demo$core$state_machine__35894__auto__);

(statearr_45773[(1)] = (1));

return statearr_45773;
});
var fuzzy_c_means_demo$core$state_machine__35894__auto____1 = (function (state_45768){
while(true){
var ret_value__35895__auto__ = (function (){try{while(true){
var result__35896__auto__ = switch__35893__auto__.call(null,state_45768);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35896__auto__;
}
break;
}
}catch (e45774){if((e45774 instanceof Object)){
var ex__35897__auto__ = e45774;
var statearr_45775_45781 = state_45768;
(statearr_45775_45781[(5)] = ex__35897__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45774;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45782 = state_45768;
state_45768 = G__45782;
continue;
} else {
return ret_value__35895__auto__;
}
break;
}
});
fuzzy_c_means_demo$core$state_machine__35894__auto__ = function(state_45768){
switch(arguments.length){
case 0:
return fuzzy_c_means_demo$core$state_machine__35894__auto____0.call(this);
case 1:
return fuzzy_c_means_demo$core$state_machine__35894__auto____1.call(this,state_45768);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
fuzzy_c_means_demo$core$state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$0 = fuzzy_c_means_demo$core$state_machine__35894__auto____0;
fuzzy_c_means_demo$core$state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$1 = fuzzy_c_means_demo$core$state_machine__35894__auto____1;
return fuzzy_c_means_demo$core$state_machine__35894__auto__;
})()
;})(switch__35893__auto__,c__35983__auto___45778,ch__45634__auto___45777))
})();
var state__35985__auto__ = (function (){var statearr_45776 = f__35984__auto__.call(null);
(statearr_45776[(6)] = c__35983__auto___45778);

return statearr_45776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35985__auto__);
});})(c__35983__auto___45778,ch__45634__auto___45777))
);

var ch__45634__auto___45805 = cljs.core.async.chan.call(null);
cljs.core.async.sub.call(null,fuzzy_c_means_demo.core.event_bus_pub,new cljs.core.Keyword(null,"select-iteration","select-iteration",1845419374),ch__45634__auto___45805);

var c__35983__auto___45806 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35983__auto___45806,ch__45634__auto___45805){
return (function (){
var f__35984__auto__ = (function (){var switch__35893__auto__ = ((function (c__35983__auto___45806,ch__45634__auto___45805){
return (function (state_45796){
var state_val_45797 = (state_45796[(1)]);
if((state_val_45797 === (1))){
var state_45796__$1 = state_45796;
var statearr_45798_45807 = state_45796__$1;
(statearr_45798_45807[(2)] = null);

(statearr_45798_45807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45797 === (2))){
var state_45796__$1 = state_45796;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45796__$1,(4),ch__45634__auto___45805);
} else {
if((state_val_45797 === (3))){
var inst_45794 = (state_45796[(2)]);
var state_45796__$1 = state_45796;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45796__$1,inst_45794);
} else {
if((state_val_45797 === (4))){
var inst_45788 = (state_45796[(2)]);
var inst_45789 = cljs.core.nth.call(null,inst_45788,(0),null);
var inst_45790 = cljs.core.nth.call(null,inst_45788,(1),null);
var inst_45791 = cljs.core.swap_BANG_.call(null,fuzzy_c_means_demo.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"current-iteration","current-iteration",-419162574),inst_45790);
var state_45796__$1 = (function (){var statearr_45799 = state_45796;
(statearr_45799[(7)] = inst_45789);

(statearr_45799[(8)] = inst_45791);

return statearr_45799;
})();
var statearr_45800_45808 = state_45796__$1;
(statearr_45800_45808[(2)] = null);

(statearr_45800_45808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__35983__auto___45806,ch__45634__auto___45805))
;
return ((function (switch__35893__auto__,c__35983__auto___45806,ch__45634__auto___45805){
return (function() {
var fuzzy_c_means_demo$core$state_machine__35894__auto__ = null;
var fuzzy_c_means_demo$core$state_machine__35894__auto____0 = (function (){
var statearr_45801 = [null,null,null,null,null,null,null,null,null];
(statearr_45801[(0)] = fuzzy_c_means_demo$core$state_machine__35894__auto__);

(statearr_45801[(1)] = (1));

return statearr_45801;
});
var fuzzy_c_means_demo$core$state_machine__35894__auto____1 = (function (state_45796){
while(true){
var ret_value__35895__auto__ = (function (){try{while(true){
var result__35896__auto__ = switch__35893__auto__.call(null,state_45796);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35896__auto__;
}
break;
}
}catch (e45802){if((e45802 instanceof Object)){
var ex__35897__auto__ = e45802;
var statearr_45803_45809 = state_45796;
(statearr_45803_45809[(5)] = ex__35897__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45796);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45802;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45810 = state_45796;
state_45796 = G__45810;
continue;
} else {
return ret_value__35895__auto__;
}
break;
}
});
fuzzy_c_means_demo$core$state_machine__35894__auto__ = function(state_45796){
switch(arguments.length){
case 0:
return fuzzy_c_means_demo$core$state_machine__35894__auto____0.call(this);
case 1:
return fuzzy_c_means_demo$core$state_machine__35894__auto____1.call(this,state_45796);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
fuzzy_c_means_demo$core$state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$0 = fuzzy_c_means_demo$core$state_machine__35894__auto____0;
fuzzy_c_means_demo$core$state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$1 = fuzzy_c_means_demo$core$state_machine__35894__auto____1;
return fuzzy_c_means_demo$core$state_machine__35894__auto__;
})()
;})(switch__35893__auto__,c__35983__auto___45806,ch__45634__auto___45805))
})();
var state__35985__auto__ = (function (){var statearr_45804 = f__35984__auto__.call(null);
(statearr_45804[(6)] = c__35983__auto___45806);

return statearr_45804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35985__auto__);
});})(c__35983__auto___45806,ch__45634__auto___45805))
);

var ch__45634__auto___45847 = cljs.core.async.chan.call(null);
cljs.core.async.sub.call(null,fuzzy_c_means_demo.core.event_bus_pub,new cljs.core.Keyword(null,"next-iteration","next-iteration",-1113095718),ch__45634__auto___45847);

var c__35983__auto___45848 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35983__auto___45848,ch__45634__auto___45847){
return (function (){
var f__35984__auto__ = (function (){var switch__35893__auto__ = ((function (c__35983__auto___45848,ch__45634__auto___45847){
return (function (state_45833){
var state_val_45834 = (state_45833[(1)]);
if((state_val_45834 === (1))){
var state_45833__$1 = state_45833;
var statearr_45835_45849 = state_45833__$1;
(statearr_45835_45849[(2)] = null);

(statearr_45835_45849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45834 === (2))){
var state_45833__$1 = state_45833;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45833__$1,(4),ch__45634__auto___45847);
} else {
if((state_val_45834 === (3))){
var inst_45831 = (state_45833[(2)]);
var state_45833__$1 = state_45833;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45833__$1,inst_45831);
} else {
if((state_val_45834 === (4))){
var inst_45816 = (state_45833[(2)]);
var inst_45817 = cljs.core.deref.call(null,fuzzy_c_means_demo.core.state);
var inst_45818 = fuzzy_c_means_demo.utils.iterations_count.call(null,inst_45817);
var inst_45819 = (inst_45818 - (1));
var inst_45820 = cljs.core.deref.call(null,fuzzy_c_means_demo.core.state);
var inst_45821 = new cljs.core.Keyword(null,"current-iteration","current-iteration",-419162574).cljs$core$IFn$_invoke$arity$1(inst_45820);
var inst_45822 = cljs.core._EQ_.call(null,inst_45821,inst_45819);
var state_45833__$1 = (function (){var statearr_45836 = state_45833;
(statearr_45836[(7)] = inst_45816);

return statearr_45836;
})();
if(inst_45822){
var statearr_45837_45850 = state_45833__$1;
(statearr_45837_45850[(1)] = (5));

} else {
var statearr_45838_45851 = state_45833__$1;
(statearr_45838_45851[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45834 === (5))){
var inst_45824 = cljs.core.swap_BANG_.call(null,fuzzy_c_means_demo.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"current-iteration","current-iteration",-419162574),(0));
var state_45833__$1 = state_45833;
var statearr_45839_45852 = state_45833__$1;
(statearr_45839_45852[(2)] = inst_45824);

(statearr_45839_45852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45834 === (6))){
var inst_45826 = cljs.core.swap_BANG_.call(null,fuzzy_c_means_demo.core.state,cljs.core.update,new cljs.core.Keyword(null,"current-iteration","current-iteration",-419162574),cljs.core.inc);
var state_45833__$1 = state_45833;
var statearr_45840_45853 = state_45833__$1;
(statearr_45840_45853[(2)] = inst_45826);

(statearr_45840_45853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45834 === (7))){
var inst_45828 = (state_45833[(2)]);
var state_45833__$1 = (function (){var statearr_45841 = state_45833;
(statearr_45841[(8)] = inst_45828);

return statearr_45841;
})();
var statearr_45842_45854 = state_45833__$1;
(statearr_45842_45854[(2)] = null);

(statearr_45842_45854[(1)] = (2));


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
});})(c__35983__auto___45848,ch__45634__auto___45847))
;
return ((function (switch__35893__auto__,c__35983__auto___45848,ch__45634__auto___45847){
return (function() {
var fuzzy_c_means_demo$core$state_machine__35894__auto__ = null;
var fuzzy_c_means_demo$core$state_machine__35894__auto____0 = (function (){
var statearr_45843 = [null,null,null,null,null,null,null,null,null];
(statearr_45843[(0)] = fuzzy_c_means_demo$core$state_machine__35894__auto__);

(statearr_45843[(1)] = (1));

return statearr_45843;
});
var fuzzy_c_means_demo$core$state_machine__35894__auto____1 = (function (state_45833){
while(true){
var ret_value__35895__auto__ = (function (){try{while(true){
var result__35896__auto__ = switch__35893__auto__.call(null,state_45833);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35896__auto__;
}
break;
}
}catch (e45844){if((e45844 instanceof Object)){
var ex__35897__auto__ = e45844;
var statearr_45845_45855 = state_45833;
(statearr_45845_45855[(5)] = ex__35897__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45833);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45844;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45856 = state_45833;
state_45833 = G__45856;
continue;
} else {
return ret_value__35895__auto__;
}
break;
}
});
fuzzy_c_means_demo$core$state_machine__35894__auto__ = function(state_45833){
switch(arguments.length){
case 0:
return fuzzy_c_means_demo$core$state_machine__35894__auto____0.call(this);
case 1:
return fuzzy_c_means_demo$core$state_machine__35894__auto____1.call(this,state_45833);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
fuzzy_c_means_demo$core$state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$0 = fuzzy_c_means_demo$core$state_machine__35894__auto____0;
fuzzy_c_means_demo$core$state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$1 = fuzzy_c_means_demo$core$state_machine__35894__auto____1;
return fuzzy_c_means_demo$core$state_machine__35894__auto__;
})()
;})(switch__35893__auto__,c__35983__auto___45848,ch__45634__auto___45847))
})();
var state__35985__auto__ = (function (){var statearr_45846 = f__35984__auto__.call(null);
(statearr_45846[(6)] = c__35983__auto___45848);

return statearr_45846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35985__auto__);
});})(c__35983__auto___45848,ch__45634__auto___45847))
);

fuzzy_c_means_demo.core.timer = (new goog.Timer((100)));
goog.events.listen(fuzzy_c_means_demo.core.timer,goog.Timer.TICK,(function (){
return cljs.core.async.put_BANG_.call(null,fuzzy_c_means_demo.core.event_bus,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-iteration","next-iteration",-1113095718)], null));
}));
var ch__45634__auto___45890 = cljs.core.async.chan.call(null);
cljs.core.async.sub.call(null,fuzzy_c_means_demo.core.event_bus_pub,new cljs.core.Keyword(null,"toggle-playing","toggle-playing",1789382367),ch__45634__auto___45890);

var c__35983__auto___45891 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35983__auto___45891,ch__45634__auto___45890){
return (function (){
var f__35984__auto__ = (function (){var switch__35893__auto__ = ((function (c__35983__auto___45891,ch__45634__auto___45890){
return (function (state_45876){
var state_val_45877 = (state_45876[(1)]);
if((state_val_45877 === (1))){
var state_45876__$1 = state_45876;
var statearr_45878_45892 = state_45876__$1;
(statearr_45878_45892[(2)] = null);

(statearr_45878_45892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45877 === (2))){
var state_45876__$1 = state_45876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45876__$1,(4),ch__45634__auto___45890);
} else {
if((state_val_45877 === (3))){
var inst_45874 = (state_45876[(2)]);
var state_45876__$1 = state_45876;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45876__$1,inst_45874);
} else {
if((state_val_45877 === (4))){
var inst_45862 = (state_45876[(2)]);
var inst_45863 = cljs.core.swap_BANG_.call(null,fuzzy_c_means_demo.core.state,cljs.core.update,new cljs.core.Keyword(null,"playing?","playing?",-1884542863),cljs.core.not);
var inst_45864 = cljs.core.deref.call(null,fuzzy_c_means_demo.core.state);
var inst_45865 = new cljs.core.Keyword(null,"playing?","playing?",-1884542863).cljs$core$IFn$_invoke$arity$1(inst_45864);
var state_45876__$1 = (function (){var statearr_45879 = state_45876;
(statearr_45879[(7)] = inst_45863);

(statearr_45879[(8)] = inst_45862);

return statearr_45879;
})();
if(cljs.core.truth_(inst_45865)){
var statearr_45880_45893 = state_45876__$1;
(statearr_45880_45893[(1)] = (5));

} else {
var statearr_45881_45894 = state_45876__$1;
(statearr_45881_45894[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45877 === (5))){
var inst_45867 = fuzzy_c_means_demo.core.timer.start();
var state_45876__$1 = state_45876;
var statearr_45882_45895 = state_45876__$1;
(statearr_45882_45895[(2)] = inst_45867);

(statearr_45882_45895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45877 === (6))){
var inst_45869 = fuzzy_c_means_demo.core.timer.stop();
var state_45876__$1 = state_45876;
var statearr_45883_45896 = state_45876__$1;
(statearr_45883_45896[(2)] = inst_45869);

(statearr_45883_45896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45877 === (7))){
var inst_45871 = (state_45876[(2)]);
var state_45876__$1 = (function (){var statearr_45884 = state_45876;
(statearr_45884[(9)] = inst_45871);

return statearr_45884;
})();
var statearr_45885_45897 = state_45876__$1;
(statearr_45885_45897[(2)] = null);

(statearr_45885_45897[(1)] = (2));


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
});})(c__35983__auto___45891,ch__45634__auto___45890))
;
return ((function (switch__35893__auto__,c__35983__auto___45891,ch__45634__auto___45890){
return (function() {
var fuzzy_c_means_demo$core$state_machine__35894__auto__ = null;
var fuzzy_c_means_demo$core$state_machine__35894__auto____0 = (function (){
var statearr_45886 = [null,null,null,null,null,null,null,null,null,null];
(statearr_45886[(0)] = fuzzy_c_means_demo$core$state_machine__35894__auto__);

(statearr_45886[(1)] = (1));

return statearr_45886;
});
var fuzzy_c_means_demo$core$state_machine__35894__auto____1 = (function (state_45876){
while(true){
var ret_value__35895__auto__ = (function (){try{while(true){
var result__35896__auto__ = switch__35893__auto__.call(null,state_45876);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35896__auto__;
}
break;
}
}catch (e45887){if((e45887 instanceof Object)){
var ex__35897__auto__ = e45887;
var statearr_45888_45898 = state_45876;
(statearr_45888_45898[(5)] = ex__35897__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45876);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45887;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45899 = state_45876;
state_45876 = G__45899;
continue;
} else {
return ret_value__35895__auto__;
}
break;
}
});
fuzzy_c_means_demo$core$state_machine__35894__auto__ = function(state_45876){
switch(arguments.length){
case 0:
return fuzzy_c_means_demo$core$state_machine__35894__auto____0.call(this);
case 1:
return fuzzy_c_means_demo$core$state_machine__35894__auto____1.call(this,state_45876);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
fuzzy_c_means_demo$core$state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$0 = fuzzy_c_means_demo$core$state_machine__35894__auto____0;
fuzzy_c_means_demo$core$state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$1 = fuzzy_c_means_demo$core$state_machine__35894__auto____1;
return fuzzy_c_means_demo$core$state_machine__35894__auto__;
})()
;})(switch__35893__auto__,c__35983__auto___45891,ch__45634__auto___45890))
})();
var state__35985__auto__ = (function (){var statearr_45889 = f__35984__auto__.call(null);
(statearr_45889[(6)] = c__35983__auto___45891);

return statearr_45889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35985__auto__);
});})(c__35983__auto___45891,ch__45634__auto___45890))
);

fuzzy_c_means_demo.ui.mount.call(null,fuzzy_c_means_demo.core.state,fuzzy_c_means_demo.core.event_bus);

//# sourceMappingURL=core.js.map?rel=1510655894498
