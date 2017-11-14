// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.13";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e46190){if((e46190 instanceof Error)){
var e = e46190;
return "Error: Unable to stringify";
} else {
throw e46190;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__46193 = arguments.length;
switch (G__46193) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__46191_SHARP_){
if(typeof p1__46191_SHARP_ === 'string'){
return p1__46191_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__46191_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__31332__auto__ = [];
var len__31325__auto___46196 = arguments.length;
var i__31326__auto___46197 = (0);
while(true){
if((i__31326__auto___46197 < len__31325__auto___46196)){
args__31332__auto__.push((arguments[i__31326__auto___46197]));

var G__46198 = (i__31326__auto___46197 + (1));
i__31326__auto___46197 = G__46198;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((0) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31333__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq46195){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46195));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__31332__auto__ = [];
var len__31325__auto___46200 = arguments.length;
var i__31326__auto___46201 = (0);
while(true){
if((i__31326__auto___46201 < len__31325__auto___46200)){
args__31332__auto__.push((arguments[i__31326__auto___46201]));

var G__46202 = (i__31326__auto___46201 + (1));
i__31326__auto___46201 = G__46202;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((0) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31333__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq46199){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46199));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__46203){
var map__46204 = p__46203;
var map__46204__$1 = ((((!((map__46204 == null)))?((((map__46204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46204.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46204):map__46204);
var message = cljs.core.get.call(null,map__46204__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__46204__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__30048__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__30048__auto__)){
return or__30048__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__30036__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__30036__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__30036__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__35983__auto___46283 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35983__auto___46283,ch){
return (function (){
var f__35984__auto__ = (function (){var switch__35893__auto__ = ((function (c__35983__auto___46283,ch){
return (function (state_46255){
var state_val_46256 = (state_46255[(1)]);
if((state_val_46256 === (7))){
var inst_46251 = (state_46255[(2)]);
var state_46255__$1 = state_46255;
var statearr_46257_46284 = state_46255__$1;
(statearr_46257_46284[(2)] = inst_46251);

(statearr_46257_46284[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46256 === (1))){
var state_46255__$1 = state_46255;
var statearr_46258_46285 = state_46255__$1;
(statearr_46258_46285[(2)] = null);

(statearr_46258_46285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46256 === (4))){
var inst_46208 = (state_46255[(7)]);
var inst_46208__$1 = (state_46255[(2)]);
var state_46255__$1 = (function (){var statearr_46259 = state_46255;
(statearr_46259[(7)] = inst_46208__$1);

return statearr_46259;
})();
if(cljs.core.truth_(inst_46208__$1)){
var statearr_46260_46286 = state_46255__$1;
(statearr_46260_46286[(1)] = (5));

} else {
var statearr_46261_46287 = state_46255__$1;
(statearr_46261_46287[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46256 === (15))){
var inst_46215 = (state_46255[(8)]);
var inst_46230 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_46215);
var inst_46231 = cljs.core.first.call(null,inst_46230);
var inst_46232 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_46231);
var inst_46233 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_46232)].join('');
var inst_46234 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_46233);
var state_46255__$1 = state_46255;
var statearr_46262_46288 = state_46255__$1;
(statearr_46262_46288[(2)] = inst_46234);

(statearr_46262_46288[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46256 === (13))){
var inst_46239 = (state_46255[(2)]);
var state_46255__$1 = state_46255;
var statearr_46263_46289 = state_46255__$1;
(statearr_46263_46289[(2)] = inst_46239);

(statearr_46263_46289[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46256 === (6))){
var state_46255__$1 = state_46255;
var statearr_46264_46290 = state_46255__$1;
(statearr_46264_46290[(2)] = null);

(statearr_46264_46290[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46256 === (17))){
var inst_46237 = (state_46255[(2)]);
var state_46255__$1 = state_46255;
var statearr_46265_46291 = state_46255__$1;
(statearr_46265_46291[(2)] = inst_46237);

(statearr_46265_46291[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46256 === (3))){
var inst_46253 = (state_46255[(2)]);
var state_46255__$1 = state_46255;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46255__$1,inst_46253);
} else {
if((state_val_46256 === (12))){
var inst_46214 = (state_46255[(9)]);
var inst_46228 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_46214,opts);
var state_46255__$1 = state_46255;
if(cljs.core.truth_(inst_46228)){
var statearr_46266_46292 = state_46255__$1;
(statearr_46266_46292[(1)] = (15));

} else {
var statearr_46267_46293 = state_46255__$1;
(statearr_46267_46293[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46256 === (2))){
var state_46255__$1 = state_46255;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46255__$1,(4),ch);
} else {
if((state_val_46256 === (11))){
var inst_46215 = (state_46255[(8)]);
var inst_46220 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46221 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_46215);
var inst_46222 = cljs.core.async.timeout.call(null,(1000));
var inst_46223 = [inst_46221,inst_46222];
var inst_46224 = (new cljs.core.PersistentVector(null,2,(5),inst_46220,inst_46223,null));
var state_46255__$1 = state_46255;
return cljs.core.async.ioc_alts_BANG_.call(null,state_46255__$1,(14),inst_46224);
} else {
if((state_val_46256 === (9))){
var inst_46215 = (state_46255[(8)]);
var inst_46241 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_46242 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_46215);
var inst_46243 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_46242);
var inst_46244 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_46243)].join('');
var inst_46245 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_46244);
var state_46255__$1 = (function (){var statearr_46268 = state_46255;
(statearr_46268[(10)] = inst_46241);

return statearr_46268;
})();
var statearr_46269_46294 = state_46255__$1;
(statearr_46269_46294[(2)] = inst_46245);

(statearr_46269_46294[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46256 === (5))){
var inst_46208 = (state_46255[(7)]);
var inst_46210 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_46211 = (new cljs.core.PersistentArrayMap(null,2,inst_46210,null));
var inst_46212 = (new cljs.core.PersistentHashSet(null,inst_46211,null));
var inst_46213 = figwheel.client.focus_msgs.call(null,inst_46212,inst_46208);
var inst_46214 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_46213);
var inst_46215 = cljs.core.first.call(null,inst_46213);
var inst_46216 = figwheel.client.autoload_QMARK_.call(null);
var state_46255__$1 = (function (){var statearr_46270 = state_46255;
(statearr_46270[(9)] = inst_46214);

(statearr_46270[(8)] = inst_46215);

return statearr_46270;
})();
if(cljs.core.truth_(inst_46216)){
var statearr_46271_46295 = state_46255__$1;
(statearr_46271_46295[(1)] = (8));

} else {
var statearr_46272_46296 = state_46255__$1;
(statearr_46272_46296[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46256 === (14))){
var inst_46226 = (state_46255[(2)]);
var state_46255__$1 = state_46255;
var statearr_46273_46297 = state_46255__$1;
(statearr_46273_46297[(2)] = inst_46226);

(statearr_46273_46297[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46256 === (16))){
var state_46255__$1 = state_46255;
var statearr_46274_46298 = state_46255__$1;
(statearr_46274_46298[(2)] = null);

(statearr_46274_46298[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46256 === (10))){
var inst_46247 = (state_46255[(2)]);
var state_46255__$1 = (function (){var statearr_46275 = state_46255;
(statearr_46275[(11)] = inst_46247);

return statearr_46275;
})();
var statearr_46276_46299 = state_46255__$1;
(statearr_46276_46299[(2)] = null);

(statearr_46276_46299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46256 === (8))){
var inst_46214 = (state_46255[(9)]);
var inst_46218 = figwheel.client.reload_file_state_QMARK_.call(null,inst_46214,opts);
var state_46255__$1 = state_46255;
if(cljs.core.truth_(inst_46218)){
var statearr_46277_46300 = state_46255__$1;
(statearr_46277_46300[(1)] = (11));

} else {
var statearr_46278_46301 = state_46255__$1;
(statearr_46278_46301[(1)] = (12));

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
});})(c__35983__auto___46283,ch))
;
return ((function (switch__35893__auto__,c__35983__auto___46283,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__35894__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__35894__auto____0 = (function (){
var statearr_46279 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46279[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__35894__auto__);

(statearr_46279[(1)] = (1));

return statearr_46279;
});
var figwheel$client$file_reloader_plugin_$_state_machine__35894__auto____1 = (function (state_46255){
while(true){
var ret_value__35895__auto__ = (function (){try{while(true){
var result__35896__auto__ = switch__35893__auto__.call(null,state_46255);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35896__auto__;
}
break;
}
}catch (e46280){if((e46280 instanceof Object)){
var ex__35897__auto__ = e46280;
var statearr_46281_46302 = state_46255;
(statearr_46281_46302[(5)] = ex__35897__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46255);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46280;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46303 = state_46255;
state_46255 = G__46303;
continue;
} else {
return ret_value__35895__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__35894__auto__ = function(state_46255){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__35894__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__35894__auto____1.call(this,state_46255);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__35894__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__35894__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__35894__auto__;
})()
;})(switch__35893__auto__,c__35983__auto___46283,ch))
})();
var state__35985__auto__ = (function (){var statearr_46282 = f__35984__auto__.call(null);
(statearr_46282[(6)] = c__35983__auto___46283);

return statearr_46282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35985__auto__);
});})(c__35983__auto___46283,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__46304_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__46304_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_46306 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_46306){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e46305){if((e46305 instanceof Error)){
var e = e46305;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_46306], null));
} else {
var e = e46305;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_46306))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__46307){
var map__46308 = p__46307;
var map__46308__$1 = ((((!((map__46308 == null)))?((((map__46308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46308.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46308):map__46308);
var opts = map__46308__$1;
var build_id = cljs.core.get.call(null,map__46308__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__46308,map__46308__$1,opts,build_id){
return (function (p__46310){
var vec__46311 = p__46310;
var seq__46312 = cljs.core.seq.call(null,vec__46311);
var first__46313 = cljs.core.first.call(null,seq__46312);
var seq__46312__$1 = cljs.core.next.call(null,seq__46312);
var map__46314 = first__46313;
var map__46314__$1 = ((((!((map__46314 == null)))?((((map__46314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46314.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46314):map__46314);
var msg = map__46314__$1;
var msg_name = cljs.core.get.call(null,map__46314__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__46312__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__46311,seq__46312,first__46313,seq__46312__$1,map__46314,map__46314__$1,msg,msg_name,_,map__46308,map__46308__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__46311,seq__46312,first__46313,seq__46312__$1,map__46314,map__46314__$1,msg,msg_name,_,map__46308,map__46308__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__46308,map__46308__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__46316){
var vec__46317 = p__46316;
var seq__46318 = cljs.core.seq.call(null,vec__46317);
var first__46319 = cljs.core.first.call(null,seq__46318);
var seq__46318__$1 = cljs.core.next.call(null,seq__46318);
var map__46320 = first__46319;
var map__46320__$1 = ((((!((map__46320 == null)))?((((map__46320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46320.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46320):map__46320);
var msg = map__46320__$1;
var msg_name = cljs.core.get.call(null,map__46320__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__46318__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__46322){
var map__46323 = p__46322;
var map__46323__$1 = ((((!((map__46323 == null)))?((((map__46323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46323.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46323):map__46323);
var on_compile_warning = cljs.core.get.call(null,map__46323__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__46323__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__46323,map__46323__$1,on_compile_warning,on_compile_fail){
return (function (p__46325){
var vec__46326 = p__46325;
var seq__46327 = cljs.core.seq.call(null,vec__46326);
var first__46328 = cljs.core.first.call(null,seq__46327);
var seq__46327__$1 = cljs.core.next.call(null,seq__46327);
var map__46329 = first__46328;
var map__46329__$1 = ((((!((map__46329 == null)))?((((map__46329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46329.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46329):map__46329);
var msg = map__46329__$1;
var msg_name = cljs.core.get.call(null,map__46329__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__46327__$1;
var pred__46331 = cljs.core._EQ_;
var expr__46332 = msg_name;
if(cljs.core.truth_(pred__46331.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__46332))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__46331.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__46332))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__46323,map__46323__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__35983__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35983__auto__,msg_hist,msg_names,msg){
return (function (){
var f__35984__auto__ = (function (){var switch__35893__auto__ = ((function (c__35983__auto__,msg_hist,msg_names,msg){
return (function (state_46421){
var state_val_46422 = (state_46421[(1)]);
if((state_val_46422 === (7))){
var inst_46341 = (state_46421[(2)]);
var state_46421__$1 = state_46421;
if(cljs.core.truth_(inst_46341)){
var statearr_46423_46470 = state_46421__$1;
(statearr_46423_46470[(1)] = (8));

} else {
var statearr_46424_46471 = state_46421__$1;
(statearr_46424_46471[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46422 === (20))){
var inst_46415 = (state_46421[(2)]);
var state_46421__$1 = state_46421;
var statearr_46425_46472 = state_46421__$1;
(statearr_46425_46472[(2)] = inst_46415);

(statearr_46425_46472[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46422 === (27))){
var inst_46411 = (state_46421[(2)]);
var state_46421__$1 = state_46421;
var statearr_46426_46473 = state_46421__$1;
(statearr_46426_46473[(2)] = inst_46411);

(statearr_46426_46473[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46422 === (1))){
var inst_46334 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_46421__$1 = state_46421;
if(cljs.core.truth_(inst_46334)){
var statearr_46427_46474 = state_46421__$1;
(statearr_46427_46474[(1)] = (2));

} else {
var statearr_46428_46475 = state_46421__$1;
(statearr_46428_46475[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46422 === (24))){
var inst_46413 = (state_46421[(2)]);
var state_46421__$1 = state_46421;
var statearr_46429_46476 = state_46421__$1;
(statearr_46429_46476[(2)] = inst_46413);

(statearr_46429_46476[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46422 === (4))){
var inst_46419 = (state_46421[(2)]);
var state_46421__$1 = state_46421;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46421__$1,inst_46419);
} else {
if((state_val_46422 === (15))){
var inst_46417 = (state_46421[(2)]);
var state_46421__$1 = state_46421;
var statearr_46430_46477 = state_46421__$1;
(statearr_46430_46477[(2)] = inst_46417);

(statearr_46430_46477[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46422 === (21))){
var inst_46370 = (state_46421[(2)]);
var inst_46371 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46372 = figwheel.client.auto_jump_to_error.call(null,opts,inst_46371);
var state_46421__$1 = (function (){var statearr_46431 = state_46421;
(statearr_46431[(7)] = inst_46370);

return statearr_46431;
})();
var statearr_46432_46478 = state_46421__$1;
(statearr_46432_46478[(2)] = inst_46372);

(statearr_46432_46478[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46422 === (31))){
var inst_46400 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_46421__$1 = state_46421;
if(cljs.core.truth_(inst_46400)){
var statearr_46433_46479 = state_46421__$1;
(statearr_46433_46479[(1)] = (34));

} else {
var statearr_46434_46480 = state_46421__$1;
(statearr_46434_46480[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46422 === (32))){
var inst_46409 = (state_46421[(2)]);
var state_46421__$1 = state_46421;
var statearr_46435_46481 = state_46421__$1;
(statearr_46435_46481[(2)] = inst_46409);

(statearr_46435_46481[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46422 === (33))){
var inst_46396 = (state_46421[(2)]);
var inst_46397 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46398 = figwheel.client.auto_jump_to_error.call(null,opts,inst_46397);
var state_46421__$1 = (function (){var statearr_46436 = state_46421;
(statearr_46436[(8)] = inst_46396);

return statearr_46436;
})();
var statearr_46437_46482 = state_46421__$1;
(statearr_46437_46482[(2)] = inst_46398);

(statearr_46437_46482[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46422 === (13))){
var inst_46355 = figwheel.client.heads_up.clear.call(null);
var state_46421__$1 = state_46421;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46421__$1,(16),inst_46355);
} else {
if((state_val_46422 === (22))){
var inst_46376 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46377 = figwheel.client.heads_up.append_warning_message.call(null,inst_46376);
var state_46421__$1 = state_46421;
var statearr_46438_46483 = state_46421__$1;
(statearr_46438_46483[(2)] = inst_46377);

(statearr_46438_46483[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46422 === (36))){
var inst_46407 = (state_46421[(2)]);
var state_46421__$1 = state_46421;
var statearr_46439_46484 = state_46421__$1;
(statearr_46439_46484[(2)] = inst_46407);

(statearr_46439_46484[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46422 === (29))){
var inst_46387 = (state_46421[(2)]);
var inst_46388 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46389 = figwheel.client.auto_jump_to_error.call(null,opts,inst_46388);
var state_46421__$1 = (function (){var statearr_46440 = state_46421;
(statearr_46440[(9)] = inst_46387);

return statearr_46440;
})();
var statearr_46441_46485 = state_46421__$1;
(statearr_46441_46485[(2)] = inst_46389);

(statearr_46441_46485[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46422 === (6))){
var inst_46336 = (state_46421[(10)]);
var state_46421__$1 = state_46421;
var statearr_46442_46486 = state_46421__$1;
(statearr_46442_46486[(2)] = inst_46336);

(statearr_46442_46486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46422 === (28))){
var inst_46383 = (state_46421[(2)]);
var inst_46384 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46385 = figwheel.client.heads_up.display_warning.call(null,inst_46384);
var state_46421__$1 = (function (){var statearr_46443 = state_46421;
(statearr_46443[(11)] = inst_46383);

return statearr_46443;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46421__$1,(29),inst_46385);
} else {
if((state_val_46422 === (25))){
var inst_46381 = figwheel.client.heads_up.clear.call(null);
var state_46421__$1 = state_46421;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46421__$1,(28),inst_46381);
} else {
if((state_val_46422 === (34))){
var inst_46402 = figwheel.client.heads_up.flash_loaded.call(null);
var state_46421__$1 = state_46421;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46421__$1,(37),inst_46402);
} else {
if((state_val_46422 === (17))){
var inst_46361 = (state_46421[(2)]);
var inst_46362 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46363 = figwheel.client.auto_jump_to_error.call(null,opts,inst_46362);
var state_46421__$1 = (function (){var statearr_46444 = state_46421;
(statearr_46444[(12)] = inst_46361);

return statearr_46444;
})();
var statearr_46445_46487 = state_46421__$1;
(statearr_46445_46487[(2)] = inst_46363);

(statearr_46445_46487[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46422 === (3))){
var inst_46353 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_46421__$1 = state_46421;
if(cljs.core.truth_(inst_46353)){
var statearr_46446_46488 = state_46421__$1;
(statearr_46446_46488[(1)] = (13));

} else {
var statearr_46447_46489 = state_46421__$1;
(statearr_46447_46489[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46422 === (12))){
var inst_46349 = (state_46421[(2)]);
var state_46421__$1 = state_46421;
var statearr_46448_46490 = state_46421__$1;
(statearr_46448_46490[(2)] = inst_46349);

(statearr_46448_46490[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46422 === (2))){
var inst_46336 = (state_46421[(10)]);
var inst_46336__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_46421__$1 = (function (){var statearr_46449 = state_46421;
(statearr_46449[(10)] = inst_46336__$1);

return statearr_46449;
})();
if(cljs.core.truth_(inst_46336__$1)){
var statearr_46450_46491 = state_46421__$1;
(statearr_46450_46491[(1)] = (5));

} else {
var statearr_46451_46492 = state_46421__$1;
(statearr_46451_46492[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46422 === (23))){
var inst_46379 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_46421__$1 = state_46421;
if(cljs.core.truth_(inst_46379)){
var statearr_46452_46493 = state_46421__$1;
(statearr_46452_46493[(1)] = (25));

} else {
var statearr_46453_46494 = state_46421__$1;
(statearr_46453_46494[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46422 === (35))){
var state_46421__$1 = state_46421;
var statearr_46454_46495 = state_46421__$1;
(statearr_46454_46495[(2)] = null);

(statearr_46454_46495[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46422 === (19))){
var inst_46374 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_46421__$1 = state_46421;
if(cljs.core.truth_(inst_46374)){
var statearr_46455_46496 = state_46421__$1;
(statearr_46455_46496[(1)] = (22));

} else {
var statearr_46456_46497 = state_46421__$1;
(statearr_46456_46497[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46422 === (11))){
var inst_46345 = (state_46421[(2)]);
var state_46421__$1 = state_46421;
var statearr_46457_46498 = state_46421__$1;
(statearr_46457_46498[(2)] = inst_46345);

(statearr_46457_46498[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46422 === (9))){
var inst_46347 = figwheel.client.heads_up.clear.call(null);
var state_46421__$1 = state_46421;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46421__$1,(12),inst_46347);
} else {
if((state_val_46422 === (5))){
var inst_46338 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_46421__$1 = state_46421;
var statearr_46458_46499 = state_46421__$1;
(statearr_46458_46499[(2)] = inst_46338);

(statearr_46458_46499[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46422 === (14))){
var inst_46365 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_46421__$1 = state_46421;
if(cljs.core.truth_(inst_46365)){
var statearr_46459_46500 = state_46421__$1;
(statearr_46459_46500[(1)] = (18));

} else {
var statearr_46460_46501 = state_46421__$1;
(statearr_46460_46501[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46422 === (26))){
var inst_46391 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_46421__$1 = state_46421;
if(cljs.core.truth_(inst_46391)){
var statearr_46461_46502 = state_46421__$1;
(statearr_46461_46502[(1)] = (30));

} else {
var statearr_46462_46503 = state_46421__$1;
(statearr_46462_46503[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46422 === (16))){
var inst_46357 = (state_46421[(2)]);
var inst_46358 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46359 = figwheel.client.heads_up.display_exception.call(null,inst_46358);
var state_46421__$1 = (function (){var statearr_46463 = state_46421;
(statearr_46463[(13)] = inst_46357);

return statearr_46463;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46421__$1,(17),inst_46359);
} else {
if((state_val_46422 === (30))){
var inst_46393 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46394 = figwheel.client.heads_up.display_warning.call(null,inst_46393);
var state_46421__$1 = state_46421;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46421__$1,(33),inst_46394);
} else {
if((state_val_46422 === (10))){
var inst_46351 = (state_46421[(2)]);
var state_46421__$1 = state_46421;
var statearr_46464_46504 = state_46421__$1;
(statearr_46464_46504[(2)] = inst_46351);

(statearr_46464_46504[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46422 === (18))){
var inst_46367 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46368 = figwheel.client.heads_up.display_exception.call(null,inst_46367);
var state_46421__$1 = state_46421;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46421__$1,(21),inst_46368);
} else {
if((state_val_46422 === (37))){
var inst_46404 = (state_46421[(2)]);
var state_46421__$1 = state_46421;
var statearr_46465_46505 = state_46421__$1;
(statearr_46465_46505[(2)] = inst_46404);

(statearr_46465_46505[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46422 === (8))){
var inst_46343 = figwheel.client.heads_up.flash_loaded.call(null);
var state_46421__$1 = state_46421;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46421__$1,(11),inst_46343);
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
});})(c__35983__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__35893__auto__,c__35983__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35894__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35894__auto____0 = (function (){
var statearr_46466 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46466[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35894__auto__);

(statearr_46466[(1)] = (1));

return statearr_46466;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35894__auto____1 = (function (state_46421){
while(true){
var ret_value__35895__auto__ = (function (){try{while(true){
var result__35896__auto__ = switch__35893__auto__.call(null,state_46421);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35896__auto__;
}
break;
}
}catch (e46467){if((e46467 instanceof Object)){
var ex__35897__auto__ = e46467;
var statearr_46468_46506 = state_46421;
(statearr_46468_46506[(5)] = ex__35897__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46421);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46467;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46507 = state_46421;
state_46421 = G__46507;
continue;
} else {
return ret_value__35895__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35894__auto__ = function(state_46421){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35894__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35894__auto____1.call(this,state_46421);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35894__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35894__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35894__auto__;
})()
;})(switch__35893__auto__,c__35983__auto__,msg_hist,msg_names,msg))
})();
var state__35985__auto__ = (function (){var statearr_46469 = f__35984__auto__.call(null);
(statearr_46469[(6)] = c__35983__auto__);

return statearr_46469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35985__auto__);
});})(c__35983__auto__,msg_hist,msg_names,msg))
);

return c__35983__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__35983__auto___46536 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35983__auto___46536,ch){
return (function (){
var f__35984__auto__ = (function (){var switch__35893__auto__ = ((function (c__35983__auto___46536,ch){
return (function (state_46522){
var state_val_46523 = (state_46522[(1)]);
if((state_val_46523 === (1))){
var state_46522__$1 = state_46522;
var statearr_46524_46537 = state_46522__$1;
(statearr_46524_46537[(2)] = null);

(statearr_46524_46537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46523 === (2))){
var state_46522__$1 = state_46522;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46522__$1,(4),ch);
} else {
if((state_val_46523 === (3))){
var inst_46520 = (state_46522[(2)]);
var state_46522__$1 = state_46522;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46522__$1,inst_46520);
} else {
if((state_val_46523 === (4))){
var inst_46510 = (state_46522[(7)]);
var inst_46510__$1 = (state_46522[(2)]);
var state_46522__$1 = (function (){var statearr_46525 = state_46522;
(statearr_46525[(7)] = inst_46510__$1);

return statearr_46525;
})();
if(cljs.core.truth_(inst_46510__$1)){
var statearr_46526_46538 = state_46522__$1;
(statearr_46526_46538[(1)] = (5));

} else {
var statearr_46527_46539 = state_46522__$1;
(statearr_46527_46539[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46523 === (5))){
var inst_46510 = (state_46522[(7)]);
var inst_46512 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_46510);
var state_46522__$1 = state_46522;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46522__$1,(8),inst_46512);
} else {
if((state_val_46523 === (6))){
var state_46522__$1 = state_46522;
var statearr_46528_46540 = state_46522__$1;
(statearr_46528_46540[(2)] = null);

(statearr_46528_46540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46523 === (7))){
var inst_46518 = (state_46522[(2)]);
var state_46522__$1 = state_46522;
var statearr_46529_46541 = state_46522__$1;
(statearr_46529_46541[(2)] = inst_46518);

(statearr_46529_46541[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46523 === (8))){
var inst_46514 = (state_46522[(2)]);
var state_46522__$1 = (function (){var statearr_46530 = state_46522;
(statearr_46530[(8)] = inst_46514);

return statearr_46530;
})();
var statearr_46531_46542 = state_46522__$1;
(statearr_46531_46542[(2)] = null);

(statearr_46531_46542[(1)] = (2));


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
});})(c__35983__auto___46536,ch))
;
return ((function (switch__35893__auto__,c__35983__auto___46536,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__35894__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__35894__auto____0 = (function (){
var statearr_46532 = [null,null,null,null,null,null,null,null,null];
(statearr_46532[(0)] = figwheel$client$heads_up_plugin_$_state_machine__35894__auto__);

(statearr_46532[(1)] = (1));

return statearr_46532;
});
var figwheel$client$heads_up_plugin_$_state_machine__35894__auto____1 = (function (state_46522){
while(true){
var ret_value__35895__auto__ = (function (){try{while(true){
var result__35896__auto__ = switch__35893__auto__.call(null,state_46522);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35896__auto__;
}
break;
}
}catch (e46533){if((e46533 instanceof Object)){
var ex__35897__auto__ = e46533;
var statearr_46534_46543 = state_46522;
(statearr_46534_46543[(5)] = ex__35897__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46522);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46533;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46544 = state_46522;
state_46522 = G__46544;
continue;
} else {
return ret_value__35895__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__35894__auto__ = function(state_46522){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__35894__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__35894__auto____1.call(this,state_46522);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__35894__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__35894__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__35894__auto__;
})()
;})(switch__35893__auto__,c__35983__auto___46536,ch))
})();
var state__35985__auto__ = (function (){var statearr_46535 = f__35984__auto__.call(null);
(statearr_46535[(6)] = c__35983__auto___46536);

return statearr_46535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35985__auto__);
});})(c__35983__auto___46536,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__35983__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35983__auto__){
return (function (){
var f__35984__auto__ = (function (){var switch__35893__auto__ = ((function (c__35983__auto__){
return (function (state_46550){
var state_val_46551 = (state_46550[(1)]);
if((state_val_46551 === (1))){
var inst_46545 = cljs.core.async.timeout.call(null,(3000));
var state_46550__$1 = state_46550;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46550__$1,(2),inst_46545);
} else {
if((state_val_46551 === (2))){
var inst_46547 = (state_46550[(2)]);
var inst_46548 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_46550__$1 = (function (){var statearr_46552 = state_46550;
(statearr_46552[(7)] = inst_46547);

return statearr_46552;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46550__$1,inst_46548);
} else {
return null;
}
}
});})(c__35983__auto__))
;
return ((function (switch__35893__auto__,c__35983__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__35894__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__35894__auto____0 = (function (){
var statearr_46553 = [null,null,null,null,null,null,null,null];
(statearr_46553[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__35894__auto__);

(statearr_46553[(1)] = (1));

return statearr_46553;
});
var figwheel$client$enforce_project_plugin_$_state_machine__35894__auto____1 = (function (state_46550){
while(true){
var ret_value__35895__auto__ = (function (){try{while(true){
var result__35896__auto__ = switch__35893__auto__.call(null,state_46550);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35896__auto__;
}
break;
}
}catch (e46554){if((e46554 instanceof Object)){
var ex__35897__auto__ = e46554;
var statearr_46555_46557 = state_46550;
(statearr_46555_46557[(5)] = ex__35897__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46550);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46554;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46558 = state_46550;
state_46550 = G__46558;
continue;
} else {
return ret_value__35895__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__35894__auto__ = function(state_46550){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__35894__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__35894__auto____1.call(this,state_46550);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__35894__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__35894__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__35894__auto__;
})()
;})(switch__35893__auto__,c__35983__auto__))
})();
var state__35985__auto__ = (function (){var statearr_46556 = f__35984__auto__.call(null);
(statearr_46556[(6)] = c__35983__auto__);

return statearr_46556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35985__auto__);
});})(c__35983__auto__))
);

return c__35983__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5278__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5278__auto__)){
var figwheel_version = temp__5278__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__35983__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35983__auto__,figwheel_version,temp__5278__auto__){
return (function (){
var f__35984__auto__ = (function (){var switch__35893__auto__ = ((function (c__35983__auto__,figwheel_version,temp__5278__auto__){
return (function (state_46565){
var state_val_46566 = (state_46565[(1)]);
if((state_val_46566 === (1))){
var inst_46559 = cljs.core.async.timeout.call(null,(2000));
var state_46565__$1 = state_46565;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46565__$1,(2),inst_46559);
} else {
if((state_val_46566 === (2))){
var inst_46561 = (state_46565[(2)]);
var inst_46562 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_46563 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_46562);
var state_46565__$1 = (function (){var statearr_46567 = state_46565;
(statearr_46567[(7)] = inst_46561);

return statearr_46567;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46565__$1,inst_46563);
} else {
return null;
}
}
});})(c__35983__auto__,figwheel_version,temp__5278__auto__))
;
return ((function (switch__35893__auto__,c__35983__auto__,figwheel_version,temp__5278__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35894__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35894__auto____0 = (function (){
var statearr_46568 = [null,null,null,null,null,null,null,null];
(statearr_46568[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35894__auto__);

(statearr_46568[(1)] = (1));

return statearr_46568;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35894__auto____1 = (function (state_46565){
while(true){
var ret_value__35895__auto__ = (function (){try{while(true){
var result__35896__auto__ = switch__35893__auto__.call(null,state_46565);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35896__auto__;
}
break;
}
}catch (e46569){if((e46569 instanceof Object)){
var ex__35897__auto__ = e46569;
var statearr_46570_46572 = state_46565;
(statearr_46570_46572[(5)] = ex__35897__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46565);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46569;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46573 = state_46565;
state_46565 = G__46573;
continue;
} else {
return ret_value__35895__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35894__auto__ = function(state_46565){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35894__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35894__auto____1.call(this,state_46565);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35894__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35894__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35894__auto__;
})()
;})(switch__35893__auto__,c__35983__auto__,figwheel_version,temp__5278__auto__))
})();
var state__35985__auto__ = (function (){var statearr_46571 = f__35984__auto__.call(null);
(statearr_46571[(6)] = c__35983__auto__);

return statearr_46571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35985__auto__);
});})(c__35983__auto__,figwheel_version,temp__5278__auto__))
);

return c__35983__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__46574){
var map__46575 = p__46574;
var map__46575__$1 = ((((!((map__46575 == null)))?((((map__46575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46575.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46575):map__46575);
var file = cljs.core.get.call(null,map__46575__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__46575__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__46575__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__46577 = "";
var G__46577__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46577),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__46577);
var G__46577__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46577__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__46577__$1);
if(cljs.core.truth_((function (){var and__30036__auto__ = line;
if(cljs.core.truth_(and__30036__auto__)){
return column;
} else {
return and__30036__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46577__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__46577__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__46578){
var map__46579 = p__46578;
var map__46579__$1 = ((((!((map__46579 == null)))?((((map__46579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46579.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46579):map__46579);
var ed = map__46579__$1;
var formatted_exception = cljs.core.get.call(null,map__46579__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__46579__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__46579__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__46581_46585 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__46582_46586 = null;
var count__46583_46587 = (0);
var i__46584_46588 = (0);
while(true){
if((i__46584_46588 < count__46583_46587)){
var msg_46589 = cljs.core._nth.call(null,chunk__46582_46586,i__46584_46588);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_46589);

var G__46590 = seq__46581_46585;
var G__46591 = chunk__46582_46586;
var G__46592 = count__46583_46587;
var G__46593 = (i__46584_46588 + (1));
seq__46581_46585 = G__46590;
chunk__46582_46586 = G__46591;
count__46583_46587 = G__46592;
i__46584_46588 = G__46593;
continue;
} else {
var temp__5278__auto___46594 = cljs.core.seq.call(null,seq__46581_46585);
if(temp__5278__auto___46594){
var seq__46581_46595__$1 = temp__5278__auto___46594;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46581_46595__$1)){
var c__30979__auto___46596 = cljs.core.chunk_first.call(null,seq__46581_46595__$1);
var G__46597 = cljs.core.chunk_rest.call(null,seq__46581_46595__$1);
var G__46598 = c__30979__auto___46596;
var G__46599 = cljs.core.count.call(null,c__30979__auto___46596);
var G__46600 = (0);
seq__46581_46585 = G__46597;
chunk__46582_46586 = G__46598;
count__46583_46587 = G__46599;
i__46584_46588 = G__46600;
continue;
} else {
var msg_46601 = cljs.core.first.call(null,seq__46581_46595__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_46601);

var G__46602 = cljs.core.next.call(null,seq__46581_46595__$1);
var G__46603 = null;
var G__46604 = (0);
var G__46605 = (0);
seq__46581_46585 = G__46602;
chunk__46582_46586 = G__46603;
count__46583_46587 = G__46604;
i__46584_46588 = G__46605;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__46606){
var map__46607 = p__46606;
var map__46607__$1 = ((((!((map__46607 == null)))?((((map__46607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46607.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46607):map__46607);
var w = map__46607__$1;
var message = cljs.core.get.call(null,map__46607__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__30036__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__30036__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__30036__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__46609 = cljs.core.seq.call(null,plugins);
var chunk__46610 = null;
var count__46611 = (0);
var i__46612 = (0);
while(true){
if((i__46612 < count__46611)){
var vec__46613 = cljs.core._nth.call(null,chunk__46610,i__46612);
var k = cljs.core.nth.call(null,vec__46613,(0),null);
var plugin = cljs.core.nth.call(null,vec__46613,(1),null);
if(cljs.core.truth_(plugin)){
var pl_46619 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__46609,chunk__46610,count__46611,i__46612,pl_46619,vec__46613,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_46619.call(null,msg_hist);
});})(seq__46609,chunk__46610,count__46611,i__46612,pl_46619,vec__46613,k,plugin))
);
} else {
}

var G__46620 = seq__46609;
var G__46621 = chunk__46610;
var G__46622 = count__46611;
var G__46623 = (i__46612 + (1));
seq__46609 = G__46620;
chunk__46610 = G__46621;
count__46611 = G__46622;
i__46612 = G__46623;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__46609);
if(temp__5278__auto__){
var seq__46609__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46609__$1)){
var c__30979__auto__ = cljs.core.chunk_first.call(null,seq__46609__$1);
var G__46624 = cljs.core.chunk_rest.call(null,seq__46609__$1);
var G__46625 = c__30979__auto__;
var G__46626 = cljs.core.count.call(null,c__30979__auto__);
var G__46627 = (0);
seq__46609 = G__46624;
chunk__46610 = G__46625;
count__46611 = G__46626;
i__46612 = G__46627;
continue;
} else {
var vec__46616 = cljs.core.first.call(null,seq__46609__$1);
var k = cljs.core.nth.call(null,vec__46616,(0),null);
var plugin = cljs.core.nth.call(null,vec__46616,(1),null);
if(cljs.core.truth_(plugin)){
var pl_46628 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__46609,chunk__46610,count__46611,i__46612,pl_46628,vec__46616,k,plugin,seq__46609__$1,temp__5278__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_46628.call(null,msg_hist);
});})(seq__46609,chunk__46610,count__46611,i__46612,pl_46628,vec__46616,k,plugin,seq__46609__$1,temp__5278__auto__))
);
} else {
}

var G__46629 = cljs.core.next.call(null,seq__46609__$1);
var G__46630 = null;
var G__46631 = (0);
var G__46632 = (0);
seq__46609 = G__46629;
chunk__46610 = G__46630;
count__46611 = G__46631;
i__46612 = G__46632;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__46634 = arguments.length;
switch (G__46634) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__46635_46640 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__46636_46641 = null;
var count__46637_46642 = (0);
var i__46638_46643 = (0);
while(true){
if((i__46638_46643 < count__46637_46642)){
var msg_46644 = cljs.core._nth.call(null,chunk__46636_46641,i__46638_46643);
figwheel.client.socket.handle_incoming_message.call(null,msg_46644);

var G__46645 = seq__46635_46640;
var G__46646 = chunk__46636_46641;
var G__46647 = count__46637_46642;
var G__46648 = (i__46638_46643 + (1));
seq__46635_46640 = G__46645;
chunk__46636_46641 = G__46646;
count__46637_46642 = G__46647;
i__46638_46643 = G__46648;
continue;
} else {
var temp__5278__auto___46649 = cljs.core.seq.call(null,seq__46635_46640);
if(temp__5278__auto___46649){
var seq__46635_46650__$1 = temp__5278__auto___46649;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46635_46650__$1)){
var c__30979__auto___46651 = cljs.core.chunk_first.call(null,seq__46635_46650__$1);
var G__46652 = cljs.core.chunk_rest.call(null,seq__46635_46650__$1);
var G__46653 = c__30979__auto___46651;
var G__46654 = cljs.core.count.call(null,c__30979__auto___46651);
var G__46655 = (0);
seq__46635_46640 = G__46652;
chunk__46636_46641 = G__46653;
count__46637_46642 = G__46654;
i__46638_46643 = G__46655;
continue;
} else {
var msg_46656 = cljs.core.first.call(null,seq__46635_46650__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_46656);

var G__46657 = cljs.core.next.call(null,seq__46635_46650__$1);
var G__46658 = null;
var G__46659 = (0);
var G__46660 = (0);
seq__46635_46640 = G__46657;
chunk__46636_46641 = G__46658;
count__46637_46642 = G__46659;
i__46638_46643 = G__46660;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__31332__auto__ = [];
var len__31325__auto___46665 = arguments.length;
var i__31326__auto___46666 = (0);
while(true){
if((i__31326__auto___46666 < len__31325__auto___46665)){
args__31332__auto__.push((arguments[i__31326__auto___46666]));

var G__46667 = (i__31326__auto___46666 + (1));
i__31326__auto___46666 = G__46667;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((0) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__31333__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__46662){
var map__46663 = p__46662;
var map__46663__$1 = ((((!((map__46663 == null)))?((((map__46663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46663.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46663):map__46663);
var opts = map__46663__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq46661){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46661));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e46668){if((e46668 instanceof Error)){
var e = e46668;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e46668;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__46669){
var map__46670 = p__46669;
var map__46670__$1 = ((((!((map__46670 == null)))?((((map__46670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46670.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46670):map__46670);
var msg_name = cljs.core.get.call(null,map__46670__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1510655895235
