// Compiled by ClojureScript 1.9.908 {}
goog.provide('oops.core');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.object');
goog.require('oops.sdefs');
goog.require('oops.state');
goog.require('oops.config');
goog.require('oops.messages');
goog.require('oops.helpers');
goog.require('oops.schema');
oops.core.report_error_dynamically = (function oops$core$report_error_dynamically(msg,data){
if(oops.state.was_error_reported_QMARK_.call(null)){
return null;
} else {
oops.state.mark_error_reported_BANG_.call(null);

var G__39056 = oops.config.get_error_reporting.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),G__39056)){
throw oops.state.prepare_error_from_call_site.call(null,msg,(function (){var data__38803__auto__ = data;
var or__30048__auto__ = ((oops.config.use_envelope_QMARK_.call(null))?(function (){var temp__5276__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var devtools__38804__auto__ = temp__5276__auto__;
var temp__5276__auto____$1 = (devtools__38804__auto__["toolbox"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var toolbox__38805__auto__ = temp__5276__auto____$1;
var temp__5276__auto____$2 = (toolbox__38805__auto__["envelope"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var envelope__38806__auto__ = temp__5276__auto____$2;
if(cljs.core.fn_QMARK_.call(null,envelope__38806__auto__)){
return envelope__38806__auto__.call(null,data__38803__auto__,"details");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__30048__auto__)){
return or__30048__auto__;
} else {
return data__38803__auto__;
}
})());
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"console","console",1228072057),G__39056)){
return oops.state.get_console_reporter.call(null).call(null,(console["error"]),msg,(function (){var data__38803__auto__ = data;
var or__30048__auto__ = ((oops.config.use_envelope_QMARK_.call(null))?(function (){var temp__5276__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var devtools__38804__auto__ = temp__5276__auto__;
var temp__5276__auto____$1 = (devtools__38804__auto__["toolbox"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var toolbox__38805__auto__ = temp__5276__auto____$1;
var temp__5276__auto____$2 = (toolbox__38805__auto__["envelope"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var envelope__38806__auto__ = temp__5276__auto____$2;
if(cljs.core.fn_QMARK_.call(null,envelope__38806__auto__)){
return envelope__38806__auto__.call(null,data__38803__auto__,"details");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__30048__auto__)){
return or__30048__auto__;
} else {
return data__38803__auto__;
}
})());
} else {
if(cljs.core._EQ_.call(null,false,G__39056)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39056)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__39057 = oops.config.get_warning_reporting.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),G__39057)){
throw oops.state.prepare_error_from_call_site.call(null,msg,(function (){var data__38803__auto__ = data;
var or__30048__auto__ = ((oops.config.use_envelope_QMARK_.call(null))?(function (){var temp__5276__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var devtools__38804__auto__ = temp__5276__auto__;
var temp__5276__auto____$1 = (devtools__38804__auto__["toolbox"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var toolbox__38805__auto__ = temp__5276__auto____$1;
var temp__5276__auto____$2 = (toolbox__38805__auto__["envelope"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var envelope__38806__auto__ = temp__5276__auto____$2;
if(cljs.core.fn_QMARK_.call(null,envelope__38806__auto__)){
return envelope__38806__auto__.call(null,data__38803__auto__,"details");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__30048__auto__)){
return or__30048__auto__;
} else {
return data__38803__auto__;
}
})());
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"console","console",1228072057),G__39057)){
return oops.state.get_console_reporter.call(null).call(null,(console["warn"]),msg,(function (){var data__38803__auto__ = data;
var or__30048__auto__ = ((oops.config.use_envelope_QMARK_.call(null))?(function (){var temp__5276__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var devtools__38804__auto__ = temp__5276__auto__;
var temp__5276__auto____$1 = (devtools__38804__auto__["toolbox"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var toolbox__38805__auto__ = temp__5276__auto____$1;
var temp__5276__auto____$2 = (toolbox__38805__auto__["envelope"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var envelope__38806__auto__ = temp__5276__auto____$2;
if(cljs.core.fn_QMARK_.call(null,envelope__38806__auto__)){
return envelope__38806__auto__.call(null,data__38803__auto__,"details");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__30048__auto__)){
return or__30048__auto__;
} else {
return data__38803__auto__;
}
})());
} else {
if(cljs.core._EQ_.call(null,false,G__39057)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39057)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__31332__auto__ = [];
var len__31325__auto___39065 = arguments.length;
var i__31326__auto___39066 = (0);
while(true){
if((i__31326__auto___39066 < len__31325__auto___39065)){
args__31332__auto__.push((arguments[i__31326__auto___39066]));

var G__39067 = (i__31326__auto___39066 + (1));
i__31326__auto___39066 = G__39067;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((1) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31333__auto__);
});

oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__39060){
var vec__39061 = p__39060;
var info = cljs.core.nth.call(null,vec__39061,(0),null);

if(!(cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),msg_id))){
var G__39064_39068 = oops.config.get_config_key.call(null,msg_id);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),G__39064_39068)){
oops.core.report_warning_dynamically.call(null,oops.messages.runtime_message.call(null,msg_id,info),info);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),G__39064_39068)){
oops.core.report_error_dynamically.call(null,oops.messages.runtime_message.call(null,msg_id,info),info);
} else {
if(cljs.core._EQ_.call(null,false,G__39064_39068)){
} else {
if(cljs.core._EQ_.call(null,null,G__39064_39068)){
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39064_39068)].join('')));

}
}
}
}
} else {
}

return null;
});

oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1);

oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq39058){
var G__39059 = cljs.core.first.call(null,seq39058);
var seq39058__$1 = cljs.core.next.call(null,seq39058);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(G__39059,seq39058__$1);
});

oops.core.punch_key_dynamically_BANG_ = (function oops$core$punch_key_dynamically_BANG_(obj,key){
var child_factory_39070 = oops.config.get_child_factory.call(null);
var child_factory_39070__$1 = (function (){var G__39071 = child_factory_39070;
var G__39071__$1 = (((G__39071 instanceof cljs.core.Keyword))?G__39071.fqn:null);
switch (G__39071__$1) {
case "js-obj":
return ((function (G__39071,G__39071__$1,child_factory_39070){
return (function (){
return {};
});
;})(G__39071,G__39071__$1,child_factory_39070))

break;
case "js-array":
return ((function (G__39071,G__39071__$1,child_factory_39070){
return (function (){
return [];
});
;})(G__39071,G__39071__$1,child_factory_39070))

break;
default:
return child_factory_39070;

}
})();

var child_obj_39069 = child_factory_39070__$1.call(null,obj,key);
(obj[key] = child_obj_39069);

return child_obj_39069;
});
oops.core.validate_object_access_dynamically = (function oops$core$validate_object_access_dynamically(obj,mode,key,check_key_QMARK_){
if((((cljs.core._EQ_.call(null,mode,(0))) && ((void 0 === obj)))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"undefined",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):(((cljs.core._EQ_.call(null,mode,(0))) && ((obj == null)))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"nil",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):(cljs.core.truth_(goog.isBoolean(obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"boolean",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):(cljs.core.truth_(goog.isNumber(obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"number",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):(cljs.core.truth_(goog.isString(obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"string",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):((cljs.core.not.call(null,goog.isObject(obj)))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"non-object",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):(cljs.core.truth_(goog.isDateLike(obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"date-like",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_type_QMARK_.call(null,obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"cljs type",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_instance_QMARK_.call(null,obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"cljs instance",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return true;
})()
):true
)))))))))){
oops.state.add_key_to_current_path_BANG_.call(null,key);

oops.state.set_last_access_modifier_BANG_.call(null,mode);

if(cljs.core.truth_(check_key_QMARK_)){
if((cljs.core._EQ_.call(null,mode,(0))) && (cljs.core.not.call(null,goog.object.containsKey(obj,key)))){
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"missing-object-key","missing-object-key",-1300201731),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));
} else {
return true;
}
} else {
return true;
}
} else {
return null;
}
});
oops.core.validate_fn_call_dynamically = (function oops$core$validate_fn_call_dynamically(fn,mode){
if((cljs.core._EQ_.call(null,mode,(1))) && ((fn == null))){
return true;
} else {
if(cljs.core.truth_(goog.isFunction(fn))){
return true;
} else {
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"expected-function-value","expected-function-value",-1399123630),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"soft?","soft?",-1339668477),cljs.core._EQ_.call(null,mode,(1)),new cljs.core.Keyword(null,"fn","fn",-1175266204),fn,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

}
}
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword))){
var selector_path_39075 = [];
oops.schema.prepare_simple_path_BANG_.call(null,selector,selector_path_39075);

return selector_path_39075;
} else {
var selector_path_39076 = [];
oops.schema.prepare_path_BANG_.call(null,selector,selector_path_39076);

return selector_path_39076;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5276__auto__ = oops.schema.check_dynamic_path_BANG_.call(null,path,op);
if(cljs.core.truth_(temp__5276__auto__)){
var issue_39077 = temp__5276__auto__;
return cljs.core.apply.call(null,oops.core.report_if_needed_dynamically,issue_39077);
} else {
return null;
}
});
oops.core.get_key_dynamically = (function oops$core$get_key_dynamically(obj,key,mode){
if(oops.core.validate_object_access_dynamically.call(null,obj,mode,key,true)){
return (obj[key]);
} else {
return null;
}
});
oops.core.set_key_dynamically = (function oops$core$set_key_dynamically(obj,key,val,mode){
if(oops.core.validate_object_access_dynamically.call(null,obj,mode,key,true)){
return (obj[key] = val);
} else {
return null;
}
});
oops.core.get_selector_dynamically = (function oops$core$get_selector_dynamically(obj,selector){
if(cljs.core.truth_(((cljs.core.not.call(null,cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector)))?(function (){var explanation_39086 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_39086,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_39079 = (function (){var path_39078 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_39078,(0));

return path_39078;
})();
var len_39080 = path_39079.length;
var i_39081 = (0);
var obj_39082 = obj;
while(true){
if((i_39081 < len_39080)){
var mode_39083 = (path_39079[i_39081]);
var key_39084 = (path_39079[(i_39081 + (1))]);
var next_obj_39085 = oops.core.get_key_dynamically.call(null,obj_39082,key_39084,mode_39083);
var G__39087 = mode_39083;
switch (G__39087) {
case (0):
var G__39089 = (i_39081 + (2));
var G__39090 = next_obj_39085;
i_39081 = G__39089;
obj_39082 = G__39090;
continue;

break;
case (1):
if(!((next_obj_39085 == null))){
var G__39091 = (i_39081 + (2));
var G__39092 = next_obj_39085;
i_39081 = G__39091;
obj_39082 = G__39092;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_39085 == null))){
var G__39093 = (i_39081 + (2));
var G__39094 = next_obj_39085;
i_39081 = G__39093;
obj_39082 = G__39094;
continue;
} else {
var G__39095 = (i_39081 + (2));
var G__39096 = oops.core.punch_key_dynamically_BANG_.call(null,obj_39082,key_39084);
i_39081 = G__39095;
obj_39082 = G__39096;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39087)].join('')));

}
} else {
return obj_39082;
}
break;
}
} else {
return null;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
if(cljs.core.truth_(((cljs.core.not.call(null,cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector)))?(function (){var explanation_39122 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_39122,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_39098 = (function (){var path_39097 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_39097,(0));

return path_39097;
})();
var len_39099 = path_39098.length;
if((len_39099 < (4))){
return [obj,(function (){var path_39101 = path_39098;
var len_39102 = path_39101.length;
var i_39103 = (0);
var obj_39104 = obj;
while(true){
if((i_39103 < len_39102)){
var mode_39105 = (path_39101[i_39103]);
var key_39106 = (path_39101[(i_39103 + (1))]);
var next_obj_39107 = oops.core.get_key_dynamically.call(null,obj_39104,key_39106,mode_39105);
var G__39123 = mode_39105;
switch (G__39123) {
case (0):
var G__39127 = (i_39103 + (2));
var G__39128 = next_obj_39107;
i_39103 = G__39127;
obj_39104 = G__39128;
continue;

break;
case (1):
if(!((next_obj_39107 == null))){
var G__39129 = (i_39103 + (2));
var G__39130 = next_obj_39107;
i_39103 = G__39129;
obj_39104 = G__39130;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_39107 == null))){
var G__39131 = (i_39103 + (2));
var G__39132 = next_obj_39107;
i_39103 = G__39131;
obj_39104 = G__39132;
continue;
} else {
var G__39133 = (i_39103 + (2));
var G__39134 = oops.core.punch_key_dynamically_BANG_.call(null,obj_39104,key_39106);
i_39103 = G__39133;
obj_39104 = G__39134;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39123)].join('')));

}
} else {
return obj_39104;
}
break;
}
})()];
} else {
var target_obj_39100 = (function (){var path_39108 = path_39098.slice((0),(len_39099 - (2)));
var len_39109 = path_39108.length;
var i_39110 = (0);
var obj_39111 = obj;
while(true){
if((i_39110 < len_39109)){
var mode_39112 = (path_39108[i_39110]);
var key_39113 = (path_39108[(i_39110 + (1))]);
var next_obj_39114 = oops.core.get_key_dynamically.call(null,obj_39111,key_39113,mode_39112);
var G__39124 = mode_39112;
switch (G__39124) {
case (0):
var G__39136 = (i_39110 + (2));
var G__39137 = next_obj_39114;
i_39110 = G__39136;
obj_39111 = G__39137;
continue;

break;
case (1):
if(!((next_obj_39114 == null))){
var G__39138 = (i_39110 + (2));
var G__39139 = next_obj_39114;
i_39110 = G__39138;
obj_39111 = G__39139;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_39114 == null))){
var G__39140 = (i_39110 + (2));
var G__39141 = next_obj_39114;
i_39110 = G__39140;
obj_39111 = G__39141;
continue;
} else {
var G__39142 = (i_39110 + (2));
var G__39143 = oops.core.punch_key_dynamically_BANG_.call(null,obj_39111,key_39113);
i_39110 = G__39142;
obj_39111 = G__39143;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39124)].join('')));

}
} else {
return obj_39111;
}
break;
}
})();
return [target_obj_39100,(function (){var path_39115 = [(path_39098[(len_39099 - (2))]),(path_39098[(len_39099 - (1))])];
var len_39116 = path_39115.length;
var i_39117 = (0);
var obj_39118 = target_obj_39100;
while(true){
if((i_39117 < len_39116)){
var mode_39119 = (path_39115[i_39117]);
var key_39120 = (path_39115[(i_39117 + (1))]);
var next_obj_39121 = oops.core.get_key_dynamically.call(null,obj_39118,key_39120,mode_39119);
var G__39125 = mode_39119;
switch (G__39125) {
case (0):
var G__39145 = (i_39117 + (2));
var G__39146 = next_obj_39121;
i_39117 = G__39145;
obj_39118 = G__39146;
continue;

break;
case (1):
if(!((next_obj_39121 == null))){
var G__39147 = (i_39117 + (2));
var G__39148 = next_obj_39121;
i_39117 = G__39147;
obj_39118 = G__39148;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_39121 == null))){
var G__39149 = (i_39117 + (2));
var G__39150 = next_obj_39121;
i_39117 = G__39149;
obj_39118 = G__39150;
continue;
} else {
var G__39151 = (i_39117 + (2));
var G__39152 = oops.core.punch_key_dynamically_BANG_.call(null,obj_39118,key_39120);
i_39117 = G__39151;
obj_39118 = G__39152;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39125)].join('')));

}
} else {
return obj_39118;
}
break;
}
})()];
}
} else {
return null;
}
});
oops.core.set_selector_dynamically = (function oops$core$set_selector_dynamically(obj,selector,val){
if(cljs.core.truth_(((cljs.core.not.call(null,cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector)))?(function (){var explanation_39167 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_39167,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_39154 = (function (){var path_39153 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_39153,(1));

return path_39153;
})();
var len_39157 = path_39154.length;
var parent_obj_path_39158 = path_39154.slice((0),(len_39157 - (2)));
var key_39155 = (path_39154[(len_39157 - (1))]);
var mode_39156 = (path_39154[(len_39157 - (2))]);
var parent_obj_39159 = (function (){var path_39160 = parent_obj_path_39158;
var len_39161 = path_39160.length;
var i_39162 = (0);
var obj_39163 = obj;
while(true){
if((i_39162 < len_39161)){
var mode_39164 = (path_39160[i_39162]);
var key_39165 = (path_39160[(i_39162 + (1))]);
var next_obj_39166 = oops.core.get_key_dynamically.call(null,obj_39163,key_39165,mode_39164);
var G__39168 = mode_39164;
switch (G__39168) {
case (0):
var G__39170 = (i_39162 + (2));
var G__39171 = next_obj_39166;
i_39162 = G__39170;
obj_39163 = G__39171;
continue;

break;
case (1):
if(!((next_obj_39166 == null))){
var G__39172 = (i_39162 + (2));
var G__39173 = next_obj_39166;
i_39162 = G__39172;
obj_39163 = G__39173;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_39166 == null))){
var G__39174 = (i_39162 + (2));
var G__39175 = next_obj_39166;
i_39162 = G__39174;
obj_39163 = G__39175;
continue;
} else {
var G__39176 = (i_39162 + (2));
var G__39177 = oops.core.punch_key_dynamically_BANG_.call(null,obj_39163,key_39165);
i_39162 = G__39176;
obj_39163 = G__39177;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39168)].join('')));

}
} else {
return obj_39163;
}
break;
}
})();
return oops.core.set_key_dynamically.call(null,parent_obj_39159,key_39155,val,mode_39156);
} else {
return null;
}
});

//# sourceMappingURL=core.js.map?rel=1510655885090
