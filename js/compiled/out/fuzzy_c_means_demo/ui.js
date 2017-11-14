// Compiled by ClojureScript 1.9.908 {}
goog.provide('fuzzy_c_means_demo.ui');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('rum.core');
goog.require('cljs_react_material_ui.rum');
goog.require('cljs_react_material_ui.core');
goog.require('cljs_react_material_ui.icons');
goog.require('cljsjs.victory');
goog.require('fuzzy_c_means_demo.utils');
goog.require('oops.core');
fuzzy_c_means_demo.ui.VictoryChart = fuzzy_c_means_demo.utils.adapt_react_class.call(null,Victory.VictoryChart);
fuzzy_c_means_demo.ui.VictoryScatter = fuzzy_c_means_demo.utils.adapt_react_class.call(null,Victory.VictoryScatter);
fuzzy_c_means_demo.ui.VictoryLegend = fuzzy_c_means_demo.utils.adapt_react_class.call(null,Victory.VictoryLegend);
fuzzy_c_means_demo.ui.VictoryTooltip = fuzzy_c_means_demo.utils.adapt_react_class.call(null,Victory.VictoryTooltip);
fuzzy_c_means_demo.ui.theme = Victory.VictoryTheme.material;
fuzzy_c_means_demo.ui.abs_max = (function fuzzy_c_means_demo$ui$abs_max(coll){
return cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,Math.abs,coll));
});
fuzzy_c_means_demo.ui.domain = (function fuzzy_c_means_demo$ui$domain(xs){
var max_STAR_ = fuzzy_c_means_demo.ui.abs_max.call(null,xs);
if(cljs.core._EQ_.call(null,max_STAR_,(0))){
return (3);
} else {
return max_STAR_;
}
});
fuzzy_c_means_demo.ui.label = (function fuzzy_c_means_demo$ui$label(p__43692){
var vec__43693 = p__43692;
var x = cljs.core.nth.call(null,vec__43693,(0),null);
var y = cljs.core.nth.call(null,vec__43693,(1),null);
return ["x: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"\ny: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join('');
});
fuzzy_c_means_demo.ui.__GT_fielded_point = (function fuzzy_c_means_demo$ui$__GT_fielded_point(point){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)],[cljs.core.first.call(null,point),cljs.core.second.call(null,point)]);
});
fuzzy_c_means_demo.ui.mark_point = (function fuzzy_c_means_demo$ui$mark_point(point){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,point,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"point","point",1813198264)),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),"circle");
});
fuzzy_c_means_demo.ui.mark_center = (function fuzzy_c_means_demo$ui$mark_center(center){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,center,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"center","center",-748944368)),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),"diamond");
});
fuzzy_c_means_demo.ui.make_mark_center_color = (function fuzzy_c_means_demo$ui$make_mark_center_color(state){
return (function (index,center){
var color = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"colors","colors",1157174732),index], null));
return cljs.core.assoc.call(null,center,new cljs.core.Keyword(null,"color","color",1011675173),color);
});
});
fuzzy_c_means_demo.ui.make_mark_point_color = (function fuzzy_c_means_demo$ui$make_mark_point_color(state){
return (function (index,point){
var history = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(state);
var iter = new cljs.core.Keyword(null,"current-iteration","current-iteration",-419162574).cljs$core$IFn$_invoke$arity$1(state);
var colors = new cljs.core.Keyword(null,"colors","colors",1157174732).cljs$core$IFn$_invoke$arity$1(state);
var u = cljs.core.get_in.call(null,history,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [iter,new cljs.core.Keyword(null,"u","u",-1156634785)], null));
var point_u = cljs.core.get.call(null,u,index);
var max_u = cljs.core.apply.call(null,cljs.core.max,point_u);
var indexed_point_u = cljs.core.map_indexed.call(null,cljs.core.vector,point_u);
var with_max_QMARK_ = cljs.core.map.call(null,((function (history,iter,colors,u,point_u,max_u,indexed_point_u){
return (function (elem){
return cljs.core.conj.call(null,elem,cljs.core._EQ_.call(null,cljs.core.second.call(null,elem),max_u));
});})(history,iter,colors,u,point_u,max_u,indexed_point_u))
,indexed_point_u);
var max_u_vec = cljs.core.first.call(null,cljs.core.filter.call(null,((function (history,iter,colors,u,point_u,max_u,indexed_point_u,with_max_QMARK_){
return (function (p1__43696_SHARP_){
return cljs.core.identity.call(null,cljs.core.nth.call(null,p1__43696_SHARP_,(2)));
});})(history,iter,colors,u,point_u,max_u,indexed_point_u,with_max_QMARK_))
,with_max_QMARK_));
var max_index = cljs.core.first.call(null,max_u_vec);
var center_color = cljs.core.nth.call(null,colors,(function (){
cljs.core.println.call(null,"max index",max_index,cljs.core.type.call(null,max_index));

return max_index;
})()
);
return cljs.core.assoc.call(null,point,new cljs.core.Keyword(null,"color","color",1011675173),center_color);
});
});
fuzzy_c_means_demo.ui.make_file_upload_handler = (function fuzzy_c_means_demo$ui$make_file_upload_handler(handler){
return (function (e){
var file = (function (){var target_obj_43697 = e;
var _STAR_runtime_state_STAR_43701 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_43697,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_43698 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_43697,(0),"target",true))?(target_obj_43697["target"]):null);
var next_obj_43699 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_43698,(0),"files",true))?(next_obj_43698["files"]):null);
var next_obj_43700 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_43699,(0),"0",true))?(next_obj_43699["0"]):null);
return next_obj_43700;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_43701;
}})();
var reader = (new FileReader());
var target_obj_43702_43710 = reader;
var _STAR_runtime_state_STAR_43704_43711 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_43702_43710,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var parent_obj_43703_43712 = target_obj_43702_43710;
if(oops.core.validate_object_access_dynamically.call(null,parent_obj_43703_43712,(0),"onloadend",true)){
(parent_obj_43703_43712["onloadend"] = ((function (parent_obj_43703_43712,_STAR_runtime_state_STAR_43704_43711,target_obj_43702_43710,file,reader){
return (function (){
var result = (reader["result"]);
return handler.call(null,result);
});})(parent_obj_43703_43712,_STAR_runtime_state_STAR_43704_43711,target_obj_43702_43710,file,reader))
);
} else {
}

}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_43704_43711;
}
if(cljs.core.boolean$.call(null,file)){
var target_obj_43705 = reader;
var _STAR_runtime_state_STAR_43709 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_43705,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_43707 = [target_obj_43705,(function (){var next_obj_43708 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_43705,(0),"readAsText",true))?(target_obj_43705["readAsText"]):null);
return next_obj_43708;
})()];
var fn_43706 = (call_info_43707[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_43706,oops.state.get_last_access_modifier.call(null))){
if(!((fn_43706 == null))){
return fn_43706.call((call_info_43707[(0)]),file);
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_43709;
}} else {
return handler.call(null,null);
}
});
});
fuzzy_c_means_demo.ui.make_text_change_handler = (function fuzzy_c_means_demo$ui$make_text_change_handler(event_bus,kw){
return (function (e){
return cljs.core.async.put_BANG_.call(null,event_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kw,(function (){var target_obj_43713 = e;
var _STAR_runtime_state_STAR_43716 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_43713,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_43714 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_43713,(0),"target",true))?(target_obj_43713["target"]):null);
var next_obj_43715 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_43714,(0),"value",true))?(next_obj_43714["value"]):null);
return next_obj_43715;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_43716;
}})()], null));
});
});
fuzzy_c_means_demo.ui.__GT_prepared_points = (function fuzzy_c_means_demo$ui$__GT_prepared_points(state){
var mark_color = fuzzy_c_means_demo.ui.make_mark_point_color.call(null,state);
var has_history_QMARK_ = fuzzy_c_means_demo.utils.has_history_QMARK_.call(null,state);
var s = state;
var s__$1 = new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(s);
var s__$2 = cljs.core.map.call(null,fuzzy_c_means_demo.ui.__GT_fielded_point,s__$1);
var s__$3 = cljs.core.map.call(null,fuzzy_c_means_demo.ui.mark_point,s__$2);
if(cljs.core.truth_(has_history_QMARK_)){
return cljs.core.map_indexed.call(null,mark_color,s__$3);
} else {
return cljs.core.map.call(null,cljs.core.identity,s__$3);
}
});
fuzzy_c_means_demo.ui.slider_enabled_QMARK_ = fuzzy_c_means_demo.utils.has_history_QMARK_;
fuzzy_c_means_demo.ui.max_slider_value = (function fuzzy_c_means_demo$ui$max_slider_value(state){
return (fuzzy_c_means_demo.utils.iterations_count.call(null,state) - (1));
});
fuzzy_c_means_demo.ui.current_centers = (function fuzzy_c_means_demo$ui$current_centers(state){
var history = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(state);
var current_iteration = new cljs.core.Keyword(null,"current-iteration","current-iteration",-419162574).cljs$core$IFn$_invoke$arity$1(state);
var centers = cljs.core.get_in.call(null,history,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_iteration,new cljs.core.Keyword(null,"centers","centers",-1028023766)], null));
var mark_color = fuzzy_c_means_demo.ui.make_mark_center_color.call(null,state);
return cljs.core.map_indexed.call(null,mark_color,cljs.core.map.call(null,fuzzy_c_means_demo.ui.mark_center,cljs.core.map.call(null,fuzzy_c_means_demo.ui.__GT_fielded_point,centers)));
});
fuzzy_c_means_demo.ui.Chart = rum.core.build_defc.call(null,(function (points){
var xs = cljs.core.map.call(null,new cljs.core.Keyword(null,"x","x",2099068185),points);
var ys = cljs.core.map.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),points);
var domain_x = fuzzy_c_means_demo.ui.domain.call(null,xs);
var domain_y = fuzzy_c_means_demo.ui.domain.call(null,ys);
return sablono.interpreter.interpret.call(null,fuzzy_c_means_demo.ui.VictoryChart.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theme","theme",-1247880880),fuzzy_c_means_demo.ui.theme,new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- domain_x),domain_x], null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- domain_y),domain_y], null)], null)], null),fuzzy_c_means_demo.ui.VictoryScatter.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data","data",-232669377),points,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),((function (xs,ys,domain_x,domain_y){
return (function (p1__43717_SHARP_){
var target_obj_43718 = p1__43717_SHARP_;
var _STAR_runtime_state_STAR_43720 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_43718,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_43719 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_43718,(1),"color",true))?(target_obj_43718["color"]):null);
if(!((next_obj_43719 == null))){
return next_obj_43719;
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_43720;
}});})(xs,ys,domain_x,domain_y))
], null)], null),new cljs.core.Keyword(null,"label-component","label-component",-479800325),fuzzy_c_means_demo.ui.VictoryTooltip.call(null)], null))));
}),null,"Chart");
fuzzy_c_means_demo.ui.InputSection = rum.core.build_defc.call(null,(function (state,event_bus){
var clusters_number = new cljs.core.Keyword(null,"clusters-number","clusters-number",-1025077435).cljs$core$IFn$_invoke$arity$1(state);
var fuzzyness_param = new cljs.core.Keyword(null,"fuzzyness-param","fuzzyness-param",391384644).cljs$core$IFn$_invoke$arity$1(state);
return React.createElement("div",({"className": "input-section"}),(function (){var attrs43722 = cljs_react_material_ui.rum.text_field.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"floating-label-text","floating-label-text",740415797),"Clusters number",new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"default-value","default-value",232220170),clusters_number,new cljs.core.Keyword(null,"on-change","on-change",-732046149),fuzzy_c_means_demo.ui.make_text_change_handler.call(null,event_bus,new cljs.core.Keyword(null,"change-clusters-number","change-clusters-number",1618728662))], null));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs43722))?sablono.interpreter.attributes.call(null,attrs43722):null),((cljs.core.map_QMARK_.call(null,attrs43722))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43722)], null)));
})(),(function (){var attrs43723 = cljs_react_material_ui.rum.text_field.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"floating-label-text","floating-label-text",740415797),"Fuzzyness parameter (m):",new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"step","step",1288888124),0.01,new cljs.core.Keyword(null,"default-value","default-value",232220170),fuzzyness_param,new cljs.core.Keyword(null,"on-change","on-change",-732046149),fuzzy_c_means_demo.ui.make_text_change_handler.call(null,event_bus,new cljs.core.Keyword(null,"change-fuzzyness-param","change-fuzzyness-param",1990016689))], null));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs43723))?sablono.interpreter.attributes.call(null,attrs43723):null),((cljs.core.map_QMARK_.call(null,attrs43723))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43723)], null)));
})(),React.createElement("div",({"className": "file-input-block"}),React.createElement("div",null,React.createElement("label",null,"Points file")),React.createElement("div",({"className": "file-input"}),sablono.interpreter.create_element.call(null,"input",({"type": "file", "onChange": fuzzy_c_means_demo.ui.make_file_upload_handler.call(null,((function (clusters_number,fuzzyness_param){
return (function (p1__43721_SHARP_){
return cljs.core.async.put_BANG_.call(null,event_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-uploaded","file-uploaded",-1464442207),p1__43721_SHARP_], null));
});})(clusters_number,fuzzyness_param))
)})))),(function (){var attrs43724 = cljs_react_material_ui.rum.raised_button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Calculate",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (clusters_number,fuzzyness_param){
return (function (){
return cljs.core.async.put_BANG_.call(null,event_bus,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"calculate","calculate",-1224644403)], null));
});})(clusters_number,fuzzyness_param))
], null));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs43724))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["submit-button"], null)], null),attrs43724)):({"className": "submit-button"})),((cljs.core.map_QMARK_.call(null,attrs43724))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43724)], null)));
})());
}),null,"InputSection");
fuzzy_c_means_demo.ui.PlayButton = rum.core.build_defc.call(null,(function (state,event_bus){
if(cljs.core.truth_(fuzzy_c_means_demo.ui.slider_enabled_QMARK_.call(null,state))){
var playing_QMARK_ = new cljs.core.Keyword(null,"playing?","playing?",-1884542863).cljs$core$IFn$_invoke$arity$1(state);
return sablono.interpreter.interpret.call(null,cljs_react_material_ui.rum.icon_button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (playing_QMARK_){
return (function (){
return cljs.core.async.put_BANG_.call(null,event_bus,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-playing","toggle-playing",1789382367)], null));
});})(playing_QMARK_))
], null),(cljs.core.truth_(playing_QMARK_)?cljs_react_material_ui.icons.av_pause.call(null):cljs_react_material_ui.icons.av_play_arrow.call(null))));
} else {
return sablono.interpreter.interpret.call(null,cljs_react_material_ui.rum.icon_button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),cljs_react_material_ui.icons.av_play_arrow.call(null)));
}
}),null,"PlayButton");
fuzzy_c_means_demo.ui.Slider = rum.core.build_defc.call(null,(function (state,event_bus){
if(cljs.core.truth_(fuzzy_c_means_demo.ui.slider_enabled_QMARK_.call(null,state))){
return sablono.interpreter.interpret.call(null,cljs_react_material_ui.rum.slider.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"current-iteration","current-iteration",-419162574).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"step","step",1288888124),(1),new cljs.core.Keyword(null,"max","max",61366548),fuzzy_c_means_demo.ui.max_slider_value.call(null,state),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__43728_SHARP_,p2__43727_SHARP_){
return cljs.core.async.put_BANG_.call(null,event_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-iteration","select-iteration",1845419374),p2__43727_SHARP_], null));
})], null)));
} else {
return sablono.interpreter.interpret.call(null,cljs_react_material_ui.rum.slider.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)));
}
}),null,"Slider");
fuzzy_c_means_demo.ui.ControlPanel = rum.core.build_defc.call(null,(function (state,event_bus){
return React.createElement("div",({"className": "control-panel"}),(function (){var attrs43729 = fuzzy_c_means_demo.ui.Slider.call(null,state,event_bus);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs43729))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["slider"], null)], null),attrs43729)):({"className": "slider"})),((cljs.core.map_QMARK_.call(null,attrs43729))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43729)], null)));
})(),(function (){var attrs43730 = fuzzy_c_means_demo.ui.PlayButton.call(null,state,event_bus);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs43730))?sablono.interpreter.attributes.call(null,attrs43730):null),((cljs.core.map_QMARK_.call(null,attrs43730))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43730)], null)));
})());
}),null,"ControlPanel");
fuzzy_c_means_demo.ui.Layout = rum.core.build_defc.call(null,(function (state,event_bus){
var points = fuzzy_c_means_demo.ui.__GT_prepared_points.call(null,state);
var centers = fuzzy_c_means_demo.ui.current_centers.call(null,state);
var chart_data = cljs.core.concat.call(null,points,centers);
return sablono.interpreter.interpret.call(null,cljs_react_material_ui.rum.mui_theme_provider.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mui-theme","mui-theme",-164636823),cljs_react_material_ui.core.get_mui_theme.call(null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".layout",".layout",1147910632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".chart-section",".chart-section",1282257730),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".chart",".chart",2074775659),fuzzy_c_means_demo.ui.Chart.call(null,chart_data)], null),fuzzy_c_means_demo.ui.ControlPanel.call(null,state,event_bus)], null),fuzzy_c_means_demo.ui.InputSection.call(null,state,event_bus)], null)));
}),null,"Layout");
fuzzy_c_means_demo.ui.App = rum.core.build_defc.call(null,(function (state_atom,event_bus){
var state = rum.core.react.call(null,state_atom);
return sablono.interpreter.interpret.call(null,fuzzy_c_means_demo.ui.Layout.call(null,state,event_bus));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"App");
fuzzy_c_means_demo.ui.mount = (function fuzzy_c_means_demo$ui$mount(state,event_bus){
return rum.core.mount.call(null,fuzzy_c_means_demo.ui.App.call(null,state,event_bus),document.getElementById("app"));
});

//# sourceMappingURL=ui.js.map?rel=1510655891339
