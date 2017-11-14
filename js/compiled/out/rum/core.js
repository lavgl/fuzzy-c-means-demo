// Compiled by ClojureScript 1.9.908 {}
goog.provide('rum.core');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('sablono.core');
goog.require('rum.cursor');
goog.require('rum.util');
goog.require('rum.derived_atom');
/**
 * Given React component, returns Rum state associated with it
 */
rum.core.state = (function rum$core$state(comp){
return (comp.state[":rum/state"]);
});
rum.core.build_class = (function rum$core$build_class(render,mixins,display_name){
var init = rum.util.collect.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),mixins);
var will_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var render__$1 = render;
var wrap_render = rum.util.collect.call(null,new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),mixins);
var wrapped_render = cljs.core.reduce.call(null,((function (init,will_mount,render__$1,wrap_render){
return (function (p1__34301_SHARP_,p2__34300_SHARP_){
return p2__34300_SHARP_.call(null,p1__34301_SHARP_);
});})(init,will_mount,render__$1,wrap_render))
,render__$1,wrap_render);
var did_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_remount = rum.util.collect.call(null,new cljs.core.Keyword(null,"did-remount","did-remount",1362550500),mixins);
var should_update = rum.util.collect.call(null,new cljs.core.Keyword(null,"should-update","should-update",-1292781795),mixins);
var will_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-update","will-update",328062998),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var did_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-update","did-update",-2143702256),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var will_unmount = rum.util.collect.call(null,new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),mixins);
var child_context = rum.util.collect.call(null,new cljs.core.Keyword(null,"child-context","child-context",-1375270295),mixins);
var class_props = cljs.core.reduce.call(null,cljs.core.merge,rum.util.collect.call(null,new cljs.core.Keyword(null,"class-properties","class-properties",1351279702),mixins));
return React.createClass(cljs.core.clj__GT_js.call(null,rum.util.filter_vals.call(null,cljs.core.some_QMARK_,cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),new cljs.core.Keyword(null,"displayName","displayName",-809144601),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"getChildContext","getChildContext",-1321948108),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619)],[((cljs.core.empty_QMARK_.call(null,did_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (_,___$1){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),display_name,((cljs.core.empty_QMARK_.call(null,will_unmount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_unmount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (next_props){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var state = cljs.core.merge.call(null,old_state,(next_props[":rum/initial-state"]));
var next_state = cljs.core.reduce.call(null,((function (old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__34303_SHARP_,p2__34302_SHARP_){
return p2__34302_SHARP_.call(null,old_state,p1__34303_SHARP_);
});})(old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,state,did_remount);
return this$.setState(({":rum/state": cljs.core.volatile_BANG_.call(null,next_state)}));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,should_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var new_state = cljs.core.deref.call(null,(next_state[":rum/state"]));
var or__30048__auto__ = cljs.core.some.call(null,((function (old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__34304_SHARP_){
return p1__34304_SHARP_.call(null,old_state,new_state);
});})(old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,should_update);
if(cljs.core.truth_(or__30048__auto__)){
return or__30048__auto__;
} else {
return false;
}
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var state = rum.core.state.call(null,this$);
var vec__34306 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__34306,(0),null);
var next_state = cljs.core.nth.call(null,vec__34306,(1),null);
cljs.core.vreset_BANG_.call(null,state,next_state);

return dom;
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,child_context))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
return cljs.core.clj__GT_js.call(null,cljs.core.transduce.call(null,cljs.core.map.call(null,((function (state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__34305_SHARP_){
return p1__34305_SHARP_.call(null,state);
});})(state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((cljs.core.empty_QMARK_.call(null,will_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (_,next_state){
var this$ = this;
var new_state = (next_state[":rum/state"]);
return cljs.core._vreset_BANG_.call(null,new_state,rum.util.call_all.call(null,cljs.core._deref.call(null,new_state),will_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var props = this$.props;
var state = rum.util.call_all.call(null,cljs.core.assoc.call(null,(props[":rum/initial-state"]),new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$),init,props);
return ({":rum/state": cljs.core.volatile_BANG_.call(null,state)});
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,did_mount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((cljs.core.empty_QMARK_.call(null,will_mount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
)]),class_props))));
});
rum.core.build_ctor = (function rum$core$build_ctor(render,mixins,display_name){
var class$ = rum.core.build_class.call(null,render,mixins,display_name);
var key_fn = cljs.core.first.call(null,rum.util.collect.call(null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),mixins));
var ctor = ((!((key_fn == null)))?((function (class$,key_fn){
return (function() { 
var G__34309__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.call(null,key_fn,args)});
return React.createElement(class$,props);
};
var G__34309 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34310__i = 0, G__34310__a = new Array(arguments.length -  0);
while (G__34310__i < G__34310__a.length) {G__34310__a[G__34310__i] = arguments[G__34310__i + 0]; ++G__34310__i;}
  args = new cljs.core.IndexedSeq(G__34310__a,0,null);
} 
return G__34309__delegate.call(this,args);};
G__34309.cljs$lang$maxFixedArity = 0;
G__34309.cljs$lang$applyTo = (function (arglist__34311){
var args = cljs.core.seq(arglist__34311);
return G__34309__delegate(args);
});
G__34309.cljs$core$IFn$_invoke$arity$variadic = G__34309__delegate;
return G__34309;
})()
;})(class$,key_fn))
:((function (class$,key_fn){
return (function() { 
var G__34312__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)});
return React.createElement(class$,props);
};
var G__34312 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34313__i = 0, G__34313__a = new Array(arguments.length -  0);
while (G__34313__i < G__34313__a.length) {G__34313__a[G__34313__i] = arguments[G__34313__i + 0]; ++G__34313__i;}
  args = new cljs.core.IndexedSeq(G__34313__a,0,null);
} 
return G__34312__delegate.call(this,args);};
G__34312.cljs$lang$maxFixedArity = 0;
G__34312.cljs$lang$applyTo = (function (arglist__34314){
var args = cljs.core.seq(arglist__34314);
return G__34312__delegate(args);
});
G__34312.cljs$core$IFn$_invoke$arity$variadic = G__34312__delegate;
return G__34312;
})()
;})(class$,key_fn))
);
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
});
rum.core.build_defc = (function rum$core$build_defc(render_body,mixins,display_name){
if(cljs.core.empty_QMARK_.call(null,mixins)){
var class$ = (function (props){
return cljs.core.apply.call(null,render_body,(props[":rum/args"]));
});
var _ = (class$["displayName"] = display_name);
var ctor = ((function (class$,_){
return (function() { 
var G__34315__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__34315 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34316__i = 0, G__34316__a = new Array(arguments.length -  0);
while (G__34316__i < G__34316__a.length) {G__34316__a[G__34316__i] = arguments[G__34316__i + 0]; ++G__34316__i;}
  args = new cljs.core.IndexedSeq(G__34316__a,0,null);
} 
return G__34315__delegate.call(this,args);};
G__34315.cljs$lang$maxFixedArity = 0;
G__34315.cljs$lang$applyTo = (function (arglist__34317){
var args = cljs.core.seq(arglist__34317);
return G__34315__delegate(args);
});
G__34315.cljs$core$IFn$_invoke$arity$variadic = G__34315__delegate;
return G__34315;
})()
;})(class$,_))
;
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
} else {
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
}
});
rum.core.build_defcs = (function rum$core$build_defcs(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,state,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.build_defcc = (function rum$core$build_defcc(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.schedule = (function (){var or__30048__auto__ = (function (){var and__30036__auto__ = typeof window !== 'undefined';
if(and__30036__auto__){
var or__30048__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__30048__auto__)){
return or__30048__auto__;
} else {
var or__30048__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__30048__auto____$1)){
return or__30048__auto____$1;
} else {
var or__30048__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__30048__auto____$2)){
return or__30048__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__30036__auto__;
}
})();
if(cljs.core.truth_(or__30048__auto__)){
return or__30048__auto__;
} else {
return ((function (or__30048__auto__){
return (function (p1__34318_SHARP_){
return setTimeout(p1__34318_SHARP_,(16));
});
;})(or__30048__auto__))
}
})();
rum.core.batch = (function (){var or__30048__auto__ = ((typeof ReactNative !== 'undefined')?ReactNative.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__30048__auto__)){
return or__30048__auto__;
} else {
var or__30048__auto____$1 = ((typeof ReactDOM !== 'undefined')?ReactDOM.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__30048__auto____$1)){
return or__30048__auto____$1;
} else {
return ((function (or__30048__auto____$1,or__30048__auto__){
return (function (f,a){
return f.call(null,a);
});
;})(or__30048__auto____$1,or__30048__auto__))
}
}
})();
rum.core.empty_queue = cljs.core.PersistentVector.EMPTY;
rum.core.render_queue = cljs.core.volatile_BANG_.call(null,rum.core.empty_queue);
rum.core.render_all = (function rum$core$render_all(queue){
var seq__34319 = cljs.core.seq.call(null,queue);
var chunk__34321 = null;
var count__34322 = (0);
var i__34323 = (0);
while(true){
if((i__34323 < count__34322)){
var comp = cljs.core._nth.call(null,chunk__34321,i__34323);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__34325 = seq__34319;
var G__34326 = chunk__34321;
var G__34327 = count__34322;
var G__34328 = (i__34323 + (1));
seq__34319 = G__34325;
chunk__34321 = G__34326;
count__34322 = G__34327;
i__34323 = G__34328;
continue;
} else {
var G__34329 = seq__34319;
var G__34330 = chunk__34321;
var G__34331 = count__34322;
var G__34332 = (i__34323 + (1));
seq__34319 = G__34329;
chunk__34321 = G__34330;
count__34322 = G__34331;
i__34323 = G__34332;
continue;
}
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__34319);
if(temp__5278__auto__){
var seq__34319__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34319__$1)){
var c__30979__auto__ = cljs.core.chunk_first.call(null,seq__34319__$1);
var G__34333 = cljs.core.chunk_rest.call(null,seq__34319__$1);
var G__34334 = c__30979__auto__;
var G__34335 = cljs.core.count.call(null,c__30979__auto__);
var G__34336 = (0);
seq__34319 = G__34333;
chunk__34321 = G__34334;
count__34322 = G__34335;
i__34323 = G__34336;
continue;
} else {
var comp = cljs.core.first.call(null,seq__34319__$1);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__34337 = cljs.core.next.call(null,seq__34319__$1);
var G__34338 = null;
var G__34339 = (0);
var G__34340 = (0);
seq__34319 = G__34337;
chunk__34321 = G__34338;
count__34322 = G__34339;
i__34323 = G__34340;
continue;
} else {
var G__34341 = cljs.core.next.call(null,seq__34319__$1);
var G__34342 = null;
var G__34343 = (0);
var G__34344 = (0);
seq__34319 = G__34341;
chunk__34321 = G__34342;
count__34322 = G__34343;
i__34323 = G__34344;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.render = (function rum$core$render(){
var queue = cljs.core.deref.call(null,rum.core.render_queue);
cljs.core.vreset_BANG_.call(null,rum.core.render_queue,rum.core.empty_queue);

return rum.core.batch.call(null,rum.core.render_all,queue);
});
/**
 * Schedules react component to be rendered on next animation frame
 */
rum.core.request_render = (function rum$core$request_render(component){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,rum.core.render_queue))){
rum.core.schedule.call(null,rum.core.render);
} else {
}

return cljs.core._vreset_BANG_.call(null,rum.core.render_queue,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core.render_queue),component));
});
/**
 * Add component to the DOM tree. Idempotent. Subsequent mounts will just update component
 */
rum.core.mount = (function rum$core$mount(component,node){
ReactDOM.render(component,node);

return null;
});
/**
 * Removes component from the DOM tree
 */
rum.core.unmount = (function rum$core$unmount(node){
return ReactDOM.unmountComponentAtNode(node);
});
/**
 * Adds React key to component
 */
rum.core.with_key = (function rum$core$with_key(component,key){
return React.cloneElement(component,({"key": key}),null);
});
/**
 * Adds React ref (string or callback) to component
 */
rum.core.with_ref = (function rum$core$with_ref(component,ref){
return React.cloneElement(component,({"ref": ref}),null);
});
/**
 * Given state, returns top-level DOM node. Can’t be called during render
 */
rum.core.dom_node = (function rum$core$dom_node(state){
return ReactDOM.findDOMNode(new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});
/**
 * Given state and ref handle, returns React component
 */
rum.core.ref = (function rum$core$ref(state,key){
return ((new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state)["refs"])[cljs.core.name.call(null,key)]);
});
/**
 * Given state and ref handle, returns DOM node associated with ref
 */
rum.core.ref_node = (function rum$core$ref_node(state,key){
return ReactDOM.findDOMNode(rum.core.ref.call(null,state,cljs.core.name.call(null,key)));
});
/**
 * Mixin. Will avoid re-render if none of component’s arguments have changed.
 * Does equality check (=) on all arguments
 */
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Mixin constructor. Adds an atom to component’s state that can be used to keep stuff
 * during component’s lifecycle. Component will be re-rendered if atom’s value changes.
 * Atom is stored under user-provided key or under `:rum/local` by default
 */
rum.core.local = (function rum$core$local(var_args){
var G__34346 = arguments.length;
switch (G__34346) {
case 1:
return rum.core.local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rum.core.local.cljs$core$IFn$_invoke$arity$1 = (function (initial){
return rum.core.local.call(null,initial,new cljs.core.Keyword("rum","local","rum/local",-1497916586));
});

rum.core.local.cljs$core$IFn$_invoke$arity$2 = (function (initial,key){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
var local_state = cljs.core.atom.call(null,initial);
var component = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch.call(null,local_state,key,((function (local_state,component){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,component);
});})(local_state,component))
);

return cljs.core.assoc.call(null,state,key,local_state);
})], null);
});

rum.core.local.cljs$lang$maxFixedArity = 2;

/**
 * Mixin. Works in conjunction with `rum.core/react`
 */
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state,props){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142),cljs.core.random_uuid.call(null));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var _STAR_reactions_STAR_34348 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__34349 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__34349,(0),null);
var next_state = cljs.core.nth.call(null,vec__34349,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__34352_34364 = cljs.core.seq.call(null,old_reactions);
var chunk__34353_34365 = null;
var count__34354_34366 = (0);
var i__34355_34367 = (0);
while(true){
if((i__34355_34367 < count__34354_34366)){
var ref_34368 = cljs.core._nth.call(null,chunk__34353_34365,i__34355_34367);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_34368)){
} else {
cljs.core.remove_watch.call(null,ref_34368,key);
}

var G__34369 = seq__34352_34364;
var G__34370 = chunk__34353_34365;
var G__34371 = count__34354_34366;
var G__34372 = (i__34355_34367 + (1));
seq__34352_34364 = G__34369;
chunk__34353_34365 = G__34370;
count__34354_34366 = G__34371;
i__34355_34367 = G__34372;
continue;
} else {
var temp__5278__auto___34373 = cljs.core.seq.call(null,seq__34352_34364);
if(temp__5278__auto___34373){
var seq__34352_34374__$1 = temp__5278__auto___34373;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34352_34374__$1)){
var c__30979__auto___34375 = cljs.core.chunk_first.call(null,seq__34352_34374__$1);
var G__34376 = cljs.core.chunk_rest.call(null,seq__34352_34374__$1);
var G__34377 = c__30979__auto___34375;
var G__34378 = cljs.core.count.call(null,c__30979__auto___34375);
var G__34379 = (0);
seq__34352_34364 = G__34376;
chunk__34353_34365 = G__34377;
count__34354_34366 = G__34378;
i__34355_34367 = G__34379;
continue;
} else {
var ref_34380 = cljs.core.first.call(null,seq__34352_34374__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_34380)){
} else {
cljs.core.remove_watch.call(null,ref_34380,key);
}

var G__34381 = cljs.core.next.call(null,seq__34352_34374__$1);
var G__34382 = null;
var G__34383 = (0);
var G__34384 = (0);
seq__34352_34364 = G__34381;
chunk__34353_34365 = G__34382;
count__34354_34366 = G__34383;
i__34355_34367 = G__34384;
continue;
}
} else {
}
}
break;
}

var seq__34356_34385 = cljs.core.seq.call(null,new_reactions);
var chunk__34357_34386 = null;
var count__34358_34387 = (0);
var i__34359_34388 = (0);
while(true){
if((i__34359_34388 < count__34358_34387)){
var ref_34389 = cljs.core._nth.call(null,chunk__34357_34386,i__34359_34388);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_34389)){
} else {
cljs.core.add_watch.call(null,ref_34389,key,((function (seq__34356_34385,chunk__34357_34386,count__34358_34387,i__34359_34388,ref_34389,comp,old_reactions,vec__34349,dom,next_state,new_reactions,key,_STAR_reactions_STAR_34348){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__34356_34385,chunk__34357_34386,count__34358_34387,i__34359_34388,ref_34389,comp,old_reactions,vec__34349,dom,next_state,new_reactions,key,_STAR_reactions_STAR_34348))
);
}

var G__34390 = seq__34356_34385;
var G__34391 = chunk__34357_34386;
var G__34392 = count__34358_34387;
var G__34393 = (i__34359_34388 + (1));
seq__34356_34385 = G__34390;
chunk__34357_34386 = G__34391;
count__34358_34387 = G__34392;
i__34359_34388 = G__34393;
continue;
} else {
var temp__5278__auto___34394 = cljs.core.seq.call(null,seq__34356_34385);
if(temp__5278__auto___34394){
var seq__34356_34395__$1 = temp__5278__auto___34394;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34356_34395__$1)){
var c__30979__auto___34396 = cljs.core.chunk_first.call(null,seq__34356_34395__$1);
var G__34397 = cljs.core.chunk_rest.call(null,seq__34356_34395__$1);
var G__34398 = c__30979__auto___34396;
var G__34399 = cljs.core.count.call(null,c__30979__auto___34396);
var G__34400 = (0);
seq__34356_34385 = G__34397;
chunk__34357_34386 = G__34398;
count__34358_34387 = G__34399;
i__34359_34388 = G__34400;
continue;
} else {
var ref_34401 = cljs.core.first.call(null,seq__34356_34395__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_34401)){
} else {
cljs.core.add_watch.call(null,ref_34401,key,((function (seq__34356_34385,chunk__34357_34386,count__34358_34387,i__34359_34388,ref_34401,seq__34356_34395__$1,temp__5278__auto___34394,comp,old_reactions,vec__34349,dom,next_state,new_reactions,key,_STAR_reactions_STAR_34348){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__34356_34385,chunk__34357_34386,count__34358_34387,i__34359_34388,ref_34401,seq__34356_34395__$1,temp__5278__auto___34394,comp,old_reactions,vec__34349,dom,next_state,new_reactions,key,_STAR_reactions_STAR_34348))
);
}

var G__34402 = cljs.core.next.call(null,seq__34356_34395__$1);
var G__34403 = null;
var G__34404 = (0);
var G__34405 = (0);
seq__34356_34385 = G__34402;
chunk__34357_34386 = G__34403;
count__34358_34387 = G__34404;
i__34359_34388 = G__34405;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_34348;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_34406 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__34360_34407 = cljs.core.seq.call(null,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__34361_34408 = null;
var count__34362_34409 = (0);
var i__34363_34410 = (0);
while(true){
if((i__34363_34410 < count__34362_34409)){
var ref_34411 = cljs.core._nth.call(null,chunk__34361_34408,i__34363_34410);
cljs.core.remove_watch.call(null,ref_34411,key_34406);

var G__34412 = seq__34360_34407;
var G__34413 = chunk__34361_34408;
var G__34414 = count__34362_34409;
var G__34415 = (i__34363_34410 + (1));
seq__34360_34407 = G__34412;
chunk__34361_34408 = G__34413;
count__34362_34409 = G__34414;
i__34363_34410 = G__34415;
continue;
} else {
var temp__5278__auto___34416 = cljs.core.seq.call(null,seq__34360_34407);
if(temp__5278__auto___34416){
var seq__34360_34417__$1 = temp__5278__auto___34416;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34360_34417__$1)){
var c__30979__auto___34418 = cljs.core.chunk_first.call(null,seq__34360_34417__$1);
var G__34419 = cljs.core.chunk_rest.call(null,seq__34360_34417__$1);
var G__34420 = c__30979__auto___34418;
var G__34421 = cljs.core.count.call(null,c__30979__auto___34418);
var G__34422 = (0);
seq__34360_34407 = G__34419;
chunk__34361_34408 = G__34420;
count__34362_34409 = G__34421;
i__34363_34410 = G__34422;
continue;
} else {
var ref_34423 = cljs.core.first.call(null,seq__34360_34417__$1);
cljs.core.remove_watch.call(null,ref_34423,key_34406);

var G__34424 = cljs.core.next.call(null,seq__34360_34417__$1);
var G__34425 = null;
var G__34426 = (0);
var G__34427 = (0);
seq__34360_34407 = G__34424;
chunk__34361_34408 = G__34425;
count__34362_34409 = G__34426;
i__34363_34410 = G__34427;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.call(null,state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142));
})], null);
/**
 * Works in conjunction with `rum.core/reactive` mixin. Use this function instead of
 * `deref` inside render, and your component will subscribe to changes happening
 * to the derefed atom.
 */
rum.core.react = (function rum$core$react(ref){
if(cljs.core.truth_(rum.core._STAR_reactions_STAR_)){
} else {
throw (new Error(["Assert failed: ","rum.core/react is only supported in conjunction with rum.core/reactive","\n","*reactions*"].join('')));
}

cljs.core._vreset_BANG_.call(null,rum.core._STAR_reactions_STAR_,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core._STAR_reactions_STAR_),ref));

return cljs.core.deref.call(null,ref);
});
/**
 * Use this to create “chains” and acyclic graphs of dependent atoms.
 * `derived-atom` will:
 *  - Take N “source” refs
 *  - Set up a watch on each of them
 *  - Create “sink” atom
 *  - When any of source refs changes:
 *     - re-run function `f`, passing N dereferenced values of source refs
 *     - `reset!` result of `f` to the sink atom
 *  - return sink atom
 * 
 *  (def *a (atom 0))
 *  (def *b (atom 1))
 *  (def *x (derived-atom [*a *b] ::key
 *            (fn [a b]
 *              (str a ":" b))))
 *  (type *x) ;; => clojure.lang.Atom
 *  \@*x     ;; => 0:1
 *  (swap! *a inc)
 *  \@*x     ;; => 1:1
 *  (reset! *b 7)
 *  \@*x     ;; => 1:7
 * 
 * Arguments:
 *   refs - sequence of source refs
 *   key  - unique key to register watcher, see `clojure.core/add-watch`
 *   f    - function that must accept N arguments (same as number of source refs)
 *          and return a value to be written to the sink ref.
 *          Note: `f` will be called with already dereferenced values
 *   opts - optional. Map of:
 *     :ref           - Use this as sink ref. By default creates new atom
 *     :check-equals? - Do an equality check on each update: `(= @sink (f new-vals))`.
 *                      If result of `f` is equal to the old one, do not call `reset!`.
 *                      Defaults to `true`. Set to false if calling `=` would be expensive
 */
rum.core.derived_atom = rum.derived_atom.derived_atom;
/**
 * Given atom with deep nested value and path inside it, creates an atom-like structure
 * that can be used separately from main atom, but will sync changes both ways:
 *   
 *   (def db (atom { :users { "Ivan" { :age 30 }}}))
 *   (def ivan (rum/cursor db [:users "Ivan"]))
 *   \@ivan ;; => { :age 30 }
 *   (swap! ivan update :age inc) ;; => { :age 31 }
 *   \@db ;; => { :users { "Ivan" { :age 31 }}}
 *   (swap! db update-in [:users "Ivan" :age] inc) ;; => { :users { "Ivan" { :age 32 }}}
 *   \@ivan ;; => { :age 32 }
 *   
 *   Returned value supports deref, swap!, reset!, watches and metadata.
 *   The only supported option is `:meta`
 */
rum.core.cursor_in = (function rum$core$cursor_in(var_args){
var args__31332__auto__ = [];
var len__31325__auto___34434 = arguments.length;
var i__31326__auto___34435 = (0);
while(true){
if((i__31326__auto___34435 < len__31325__auto___34434)){
args__31332__auto__.push((arguments[i__31326__auto___34435]));

var G__34436 = (i__31326__auto___34435 + (1));
i__31326__auto___34435 = G__34436;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((2) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__31333__auto__);
});

rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__34431){
var map__34432 = p__34431;
var map__34432__$1 = ((((!((map__34432 == null)))?((((map__34432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34432.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34432):map__34432);
var options = map__34432__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.call(null,ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
});

rum.core.cursor_in.cljs$lang$maxFixedArity = (2);

rum.core.cursor_in.cljs$lang$applyTo = (function (seq34428){
var G__34429 = cljs.core.first.call(null,seq34428);
var seq34428__$1 = cljs.core.next.call(null,seq34428);
var G__34430 = cljs.core.first.call(null,seq34428__$1);
var seq34428__$2 = cljs.core.next.call(null,seq34428__$1);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic(G__34429,G__34430,seq34428__$2);
});

/**
 * Same as `rum.core/cursor-in` but accepts single key instead of path vector
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__31332__auto__ = [];
var len__31325__auto___34440 = arguments.length;
var i__31326__auto___34441 = (0);
while(true){
if((i__31326__auto___34441 < len__31325__auto___34440)){
args__31332__auto__.push((arguments[i__31326__auto___34441]));

var G__34442 = (i__31326__auto___34441 + (1));
i__31326__auto___34441 = G__34442;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((2) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((2)),(0),null)):null);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__31333__auto__);
});

rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (ref,key,options){
return cljs.core.apply.call(null,rum.core.cursor_in,ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),options);
});

rum.core.cursor.cljs$lang$maxFixedArity = (2);

rum.core.cursor.cljs$lang$applyTo = (function (seq34437){
var G__34438 = cljs.core.first.call(null,seq34437);
var seq34437__$1 = cljs.core.next.call(null,seq34437);
var G__34439 = cljs.core.first.call(null,seq34437__$1);
var seq34437__$2 = cljs.core.next.call(null,seq34437__$1);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic(G__34438,G__34439,seq34437__$2);
});


//# sourceMappingURL=core.js.map?rel=1510655881034
