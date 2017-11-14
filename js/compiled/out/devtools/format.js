// Compiled by ClojureScript 1.9.908 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__30781__auto__ = (((value == null))?null:value);
var m__30782__auto__ = (devtools.format._header[goog.typeOf(x__30781__auto__)]);
if(!((m__30782__auto__ == null))){
return m__30782__auto__.call(null,value);
} else {
var m__30782__auto____$1 = (devtools.format._header["_"]);
if(!((m__30782__auto____$1 == null))){
return m__30782__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__30781__auto__ = (((value == null))?null:value);
var m__30782__auto__ = (devtools.format._has_body[goog.typeOf(x__30781__auto__)]);
if(!((m__30782__auto__ == null))){
return m__30782__auto__.call(null,value);
} else {
var m__30782__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__30782__auto____$1 == null))){
return m__30782__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__30781__auto__ = (((value == null))?null:value);
var m__30782__auto__ = (devtools.format._body[goog.typeOf(x__30781__auto__)]);
if(!((m__30782__auto__ == null))){
return m__30782__auto__.call(null,value);
} else {
var m__30782__auto____$1 = (devtools.format._body["_"]);
if(!((m__30782__auto____$1 == null))){
return m__30782__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__5276__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var o47771 = temp__5276__auto__;
var temp__5276__auto____$1 = (o47771["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o47772 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o47772["templating"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o47773 = temp__5276__auto____$2;
return (o47773["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5276__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var o47774 = temp__5276__auto__;
var temp__5276__auto____$1 = (o47774["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o47775 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o47775["templating"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o47776 = temp__5276__auto____$2;
return (o47776["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5276__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var o47777 = temp__5276__auto__;
var temp__5276__auto____$1 = (o47777["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o47778 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o47778["templating"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o47779 = temp__5276__auto____$2;
return (o47779["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5276__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var o47780 = temp__5276__auto__;
var temp__5276__auto____$1 = (o47780["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o47781 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o47781["templating"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o47782 = temp__5276__auto____$2;
return (o47782["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5276__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var o47783 = temp__5276__auto__;
var temp__5276__auto____$1 = (o47783["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o47784 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o47784["templating"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o47785 = temp__5276__auto____$2;
return (o47785["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5276__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var o47786 = temp__5276__auto__;
var temp__5276__auto____$1 = (o47786["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o47787 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o47787["markup"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o47788 = temp__5276__auto____$2;
return (o47788["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5276__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var o47789 = temp__5276__auto__;
var temp__5276__auto____$1 = (o47789["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o47790 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o47790["markup"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o47791 = temp__5276__auto____$2;
return (o47791["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__31332__auto__ = [];
var len__31325__auto___47793 = arguments.length;
var i__31326__auto___47794 = (0);
while(true){
if((i__31326__auto___47794 < len__31325__auto___47793)){
args__31332__auto__.push((arguments[i__31326__auto___47794]));

var G__47795 = (i__31326__auto___47794 + (1));
i__31326__auto___47794 = G__47795;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((0) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__31333__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq47792){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47792));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__31332__auto__ = [];
var len__31325__auto___47797 = arguments.length;
var i__31326__auto___47798 = (0);
while(true){
if((i__31326__auto___47798 < len__31325__auto___47797)){
args__31332__auto__.push((arguments[i__31326__auto___47798]));

var G__47799 = (i__31326__auto___47798 + (1));
i__31326__auto___47798 = G__47799;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((0) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__31333__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq47796){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47796));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__31332__auto__ = [];
var len__31325__auto___47801 = arguments.length;
var i__31326__auto___47802 = (0);
while(true){
if((i__31326__auto___47802 < len__31325__auto___47801)){
args__31332__auto__.push((arguments[i__31326__auto___47802]));

var G__47803 = (i__31326__auto___47802 + (1));
i__31326__auto___47802 = G__47803;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((0) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__31333__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq47800){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47800));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__31332__auto__ = [];
var len__31325__auto___47805 = arguments.length;
var i__31326__auto___47806 = (0);
while(true){
if((i__31326__auto___47806 < len__31325__auto___47805)){
args__31332__auto__.push((arguments[i__31326__auto___47806]));

var G__47807 = (i__31326__auto___47806 + (1));
i__31326__auto___47806 = G__47807;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((0) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__31333__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq47804){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47804));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__31332__auto__ = [];
var len__31325__auto___47809 = arguments.length;
var i__31326__auto___47810 = (0);
while(true){
if((i__31326__auto___47810 < len__31325__auto___47809)){
args__31332__auto__.push((arguments[i__31326__auto___47810]));

var G__47811 = (i__31326__auto___47810 + (1));
i__31326__auto___47810 = G__47811;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((0) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__31333__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq47808){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47808));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__31332__auto__ = [];
var len__31325__auto___47813 = arguments.length;
var i__31326__auto___47814 = (0);
while(true){
if((i__31326__auto___47814 < len__31325__auto___47813)){
args__31332__auto__.push((arguments[i__31326__auto___47814]));

var G__47815 = (i__31326__auto___47814 + (1));
i__31326__auto___47814 = G__47815;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((0) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__31333__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq47812){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47812));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__31332__auto__ = [];
var len__31325__auto___47817 = arguments.length;
var i__31326__auto___47818 = (0);
while(true){
if((i__31326__auto___47818 < len__31325__auto___47817)){
args__31332__auto__.push((arguments[i__31326__auto___47818]));

var G__47819 = (i__31326__auto___47818 + (1));
i__31326__auto___47818 = G__47819;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((0) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__31333__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq47816){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47816));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__31332__auto__ = [];
var len__31325__auto___47827 = arguments.length;
var i__31326__auto___47828 = (0);
while(true){
if((i__31326__auto___47828 < len__31325__auto___47827)){
args__31332__auto__.push((arguments[i__31326__auto___47828]));

var G__47829 = (i__31326__auto___47828 + (1));
i__31326__auto___47828 = G__47829;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((1) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31333__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__47823){
var vec__47824 = p__47823;
var state_override = cljs.core.nth.call(null,vec__47824,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__47824,state_override){
return (function (p1__47820_SHARP_){
return cljs.core.merge.call(null,p1__47820_SHARP_,state_override);
});})(vec__47824,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq47821){
var G__47822 = cljs.core.first.call(null,seq47821);
var seq47821__$1 = cljs.core.next.call(null,seq47821);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__47822,seq47821__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__31332__auto__ = [];
var len__31325__auto___47831 = arguments.length;
var i__31326__auto___47832 = (0);
while(true){
if((i__31326__auto___47832 < len__31325__auto___47831)){
args__31332__auto__.push((arguments[i__31326__auto___47832]));

var G__47833 = (i__31326__auto___47832 + (1));
i__31326__auto___47832 = G__47833;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((0) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__31333__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq47830){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47830));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__31332__auto__ = [];
var len__31325__auto___47836 = arguments.length;
var i__31326__auto___47837 = (0);
while(true){
if((i__31326__auto___47837 < len__31325__auto___47836)){
args__31332__auto__.push((arguments[i__31326__auto___47837]));

var G__47838 = (i__31326__auto___47837 + (1));
i__31326__auto___47837 = G__47838;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((1) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31333__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq47834){
var G__47835 = cljs.core.first.call(null,seq47834);
var seq47834__$1 = cljs.core.next.call(null,seq47834);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__47835,seq47834__$1);
});


//# sourceMappingURL=format.js.map?rel=1510655897625
