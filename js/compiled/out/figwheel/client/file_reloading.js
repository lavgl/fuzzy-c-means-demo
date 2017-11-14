// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__30048__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__30048__auto__){
return or__30048__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__30048__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__30048__auto__)){
return or__30048__auto__;
} else {
var or__30048__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__30048__auto____$1)){
return or__30048__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__45000_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__45000_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__45001 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__45002 = null;
var count__45003 = (0);
var i__45004 = (0);
while(true){
if((i__45004 < count__45003)){
var n = cljs.core._nth.call(null,chunk__45002,i__45004);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__45005 = seq__45001;
var G__45006 = chunk__45002;
var G__45007 = count__45003;
var G__45008 = (i__45004 + (1));
seq__45001 = G__45005;
chunk__45002 = G__45006;
count__45003 = G__45007;
i__45004 = G__45008;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__45001);
if(temp__5278__auto__){
var seq__45001__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45001__$1)){
var c__30979__auto__ = cljs.core.chunk_first.call(null,seq__45001__$1);
var G__45009 = cljs.core.chunk_rest.call(null,seq__45001__$1);
var G__45010 = c__30979__auto__;
var G__45011 = cljs.core.count.call(null,c__30979__auto__);
var G__45012 = (0);
seq__45001 = G__45009;
chunk__45002 = G__45010;
count__45003 = G__45011;
i__45004 = G__45012;
continue;
} else {
var n = cljs.core.first.call(null,seq__45001__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__45013 = cljs.core.next.call(null,seq__45001__$1);
var G__45014 = null;
var G__45015 = (0);
var G__45016 = (0);
seq__45001 = G__45013;
chunk__45002 = G__45014;
count__45003 = G__45015;
i__45004 = G__45016;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__45026_45034 = cljs.core.seq.call(null,deps);
var chunk__45027_45035 = null;
var count__45028_45036 = (0);
var i__45029_45037 = (0);
while(true){
if((i__45029_45037 < count__45028_45036)){
var dep_45038 = cljs.core._nth.call(null,chunk__45027_45035,i__45029_45037);
topo_sort_helper_STAR_.call(null,dep_45038,(depth + (1)),state);

var G__45039 = seq__45026_45034;
var G__45040 = chunk__45027_45035;
var G__45041 = count__45028_45036;
var G__45042 = (i__45029_45037 + (1));
seq__45026_45034 = G__45039;
chunk__45027_45035 = G__45040;
count__45028_45036 = G__45041;
i__45029_45037 = G__45042;
continue;
} else {
var temp__5278__auto___45043 = cljs.core.seq.call(null,seq__45026_45034);
if(temp__5278__auto___45043){
var seq__45026_45044__$1 = temp__5278__auto___45043;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45026_45044__$1)){
var c__30979__auto___45045 = cljs.core.chunk_first.call(null,seq__45026_45044__$1);
var G__45046 = cljs.core.chunk_rest.call(null,seq__45026_45044__$1);
var G__45047 = c__30979__auto___45045;
var G__45048 = cljs.core.count.call(null,c__30979__auto___45045);
var G__45049 = (0);
seq__45026_45034 = G__45046;
chunk__45027_45035 = G__45047;
count__45028_45036 = G__45048;
i__45029_45037 = G__45049;
continue;
} else {
var dep_45050 = cljs.core.first.call(null,seq__45026_45044__$1);
topo_sort_helper_STAR_.call(null,dep_45050,(depth + (1)),state);

var G__45051 = cljs.core.next.call(null,seq__45026_45044__$1);
var G__45052 = null;
var G__45053 = (0);
var G__45054 = (0);
seq__45026_45034 = G__45051;
chunk__45027_45035 = G__45052;
count__45028_45036 = G__45053;
i__45029_45037 = G__45054;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__45030){
var vec__45031 = p__45030;
var seq__45032 = cljs.core.seq.call(null,vec__45031);
var first__45033 = cljs.core.first.call(null,seq__45032);
var seq__45032__$1 = cljs.core.next.call(null,seq__45032);
var x = first__45033;
var xs = seq__45032__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__45031,seq__45032,first__45033,seq__45032__$1,x,xs,get_deps__$1){
return (function (p1__45017_SHARP_){
return clojure.set.difference.call(null,p1__45017_SHARP_,x);
});})(vec__45031,seq__45032,first__45033,seq__45032__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__45055 = cljs.core.seq.call(null,provides);
var chunk__45056 = null;
var count__45057 = (0);
var i__45058 = (0);
while(true){
if((i__45058 < count__45057)){
var prov = cljs.core._nth.call(null,chunk__45056,i__45058);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__45059_45067 = cljs.core.seq.call(null,requires);
var chunk__45060_45068 = null;
var count__45061_45069 = (0);
var i__45062_45070 = (0);
while(true){
if((i__45062_45070 < count__45061_45069)){
var req_45071 = cljs.core._nth.call(null,chunk__45060_45068,i__45062_45070);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_45071,prov);

var G__45072 = seq__45059_45067;
var G__45073 = chunk__45060_45068;
var G__45074 = count__45061_45069;
var G__45075 = (i__45062_45070 + (1));
seq__45059_45067 = G__45072;
chunk__45060_45068 = G__45073;
count__45061_45069 = G__45074;
i__45062_45070 = G__45075;
continue;
} else {
var temp__5278__auto___45076 = cljs.core.seq.call(null,seq__45059_45067);
if(temp__5278__auto___45076){
var seq__45059_45077__$1 = temp__5278__auto___45076;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45059_45077__$1)){
var c__30979__auto___45078 = cljs.core.chunk_first.call(null,seq__45059_45077__$1);
var G__45079 = cljs.core.chunk_rest.call(null,seq__45059_45077__$1);
var G__45080 = c__30979__auto___45078;
var G__45081 = cljs.core.count.call(null,c__30979__auto___45078);
var G__45082 = (0);
seq__45059_45067 = G__45079;
chunk__45060_45068 = G__45080;
count__45061_45069 = G__45081;
i__45062_45070 = G__45082;
continue;
} else {
var req_45083 = cljs.core.first.call(null,seq__45059_45077__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_45083,prov);

var G__45084 = cljs.core.next.call(null,seq__45059_45077__$1);
var G__45085 = null;
var G__45086 = (0);
var G__45087 = (0);
seq__45059_45067 = G__45084;
chunk__45060_45068 = G__45085;
count__45061_45069 = G__45086;
i__45062_45070 = G__45087;
continue;
}
} else {
}
}
break;
}

var G__45088 = seq__45055;
var G__45089 = chunk__45056;
var G__45090 = count__45057;
var G__45091 = (i__45058 + (1));
seq__45055 = G__45088;
chunk__45056 = G__45089;
count__45057 = G__45090;
i__45058 = G__45091;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__45055);
if(temp__5278__auto__){
var seq__45055__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45055__$1)){
var c__30979__auto__ = cljs.core.chunk_first.call(null,seq__45055__$1);
var G__45092 = cljs.core.chunk_rest.call(null,seq__45055__$1);
var G__45093 = c__30979__auto__;
var G__45094 = cljs.core.count.call(null,c__30979__auto__);
var G__45095 = (0);
seq__45055 = G__45092;
chunk__45056 = G__45093;
count__45057 = G__45094;
i__45058 = G__45095;
continue;
} else {
var prov = cljs.core.first.call(null,seq__45055__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__45063_45096 = cljs.core.seq.call(null,requires);
var chunk__45064_45097 = null;
var count__45065_45098 = (0);
var i__45066_45099 = (0);
while(true){
if((i__45066_45099 < count__45065_45098)){
var req_45100 = cljs.core._nth.call(null,chunk__45064_45097,i__45066_45099);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_45100,prov);

var G__45101 = seq__45063_45096;
var G__45102 = chunk__45064_45097;
var G__45103 = count__45065_45098;
var G__45104 = (i__45066_45099 + (1));
seq__45063_45096 = G__45101;
chunk__45064_45097 = G__45102;
count__45065_45098 = G__45103;
i__45066_45099 = G__45104;
continue;
} else {
var temp__5278__auto___45105__$1 = cljs.core.seq.call(null,seq__45063_45096);
if(temp__5278__auto___45105__$1){
var seq__45063_45106__$1 = temp__5278__auto___45105__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45063_45106__$1)){
var c__30979__auto___45107 = cljs.core.chunk_first.call(null,seq__45063_45106__$1);
var G__45108 = cljs.core.chunk_rest.call(null,seq__45063_45106__$1);
var G__45109 = c__30979__auto___45107;
var G__45110 = cljs.core.count.call(null,c__30979__auto___45107);
var G__45111 = (0);
seq__45063_45096 = G__45108;
chunk__45064_45097 = G__45109;
count__45065_45098 = G__45110;
i__45066_45099 = G__45111;
continue;
} else {
var req_45112 = cljs.core.first.call(null,seq__45063_45106__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_45112,prov);

var G__45113 = cljs.core.next.call(null,seq__45063_45106__$1);
var G__45114 = null;
var G__45115 = (0);
var G__45116 = (0);
seq__45063_45096 = G__45113;
chunk__45064_45097 = G__45114;
count__45065_45098 = G__45115;
i__45066_45099 = G__45116;
continue;
}
} else {
}
}
break;
}

var G__45117 = cljs.core.next.call(null,seq__45055__$1);
var G__45118 = null;
var G__45119 = (0);
var G__45120 = (0);
seq__45055 = G__45117;
chunk__45056 = G__45118;
count__45057 = G__45119;
i__45058 = G__45120;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__45121_45125 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__45122_45126 = null;
var count__45123_45127 = (0);
var i__45124_45128 = (0);
while(true){
if((i__45124_45128 < count__45123_45127)){
var ns_45129 = cljs.core._nth.call(null,chunk__45122_45126,i__45124_45128);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_45129);

var G__45130 = seq__45121_45125;
var G__45131 = chunk__45122_45126;
var G__45132 = count__45123_45127;
var G__45133 = (i__45124_45128 + (1));
seq__45121_45125 = G__45130;
chunk__45122_45126 = G__45131;
count__45123_45127 = G__45132;
i__45124_45128 = G__45133;
continue;
} else {
var temp__5278__auto___45134 = cljs.core.seq.call(null,seq__45121_45125);
if(temp__5278__auto___45134){
var seq__45121_45135__$1 = temp__5278__auto___45134;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45121_45135__$1)){
var c__30979__auto___45136 = cljs.core.chunk_first.call(null,seq__45121_45135__$1);
var G__45137 = cljs.core.chunk_rest.call(null,seq__45121_45135__$1);
var G__45138 = c__30979__auto___45136;
var G__45139 = cljs.core.count.call(null,c__30979__auto___45136);
var G__45140 = (0);
seq__45121_45125 = G__45137;
chunk__45122_45126 = G__45138;
count__45123_45127 = G__45139;
i__45124_45128 = G__45140;
continue;
} else {
var ns_45141 = cljs.core.first.call(null,seq__45121_45135__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_45141);

var G__45142 = cljs.core.next.call(null,seq__45121_45135__$1);
var G__45143 = null;
var G__45144 = (0);
var G__45145 = (0);
seq__45121_45125 = G__45142;
chunk__45122_45126 = G__45143;
count__45123_45127 = G__45144;
i__45124_45128 = G__45145;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__30048__auto__ = goog.require__;
if(cljs.core.truth_(or__30048__auto__)){
return or__30048__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__45146__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__45146 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45147__i = 0, G__45147__a = new Array(arguments.length -  0);
while (G__45147__i < G__45147__a.length) {G__45147__a[G__45147__i] = arguments[G__45147__i + 0]; ++G__45147__i;}
  args = new cljs.core.IndexedSeq(G__45147__a,0,null);
} 
return G__45146__delegate.call(this,args);};
G__45146.cljs$lang$maxFixedArity = 0;
G__45146.cljs$lang$applyTo = (function (arglist__45148){
var args = cljs.core.seq(arglist__45148);
return G__45146__delegate(args);
});
G__45146.cljs$core$IFn$_invoke$arity$variadic = G__45146__delegate;
return G__45146;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__45149_SHARP_,p2__45150_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__45149_SHARP_)].join('')),p2__45150_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__45151_SHARP_,p2__45152_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__45151_SHARP_)].join(''),p2__45152_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__45153 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__45153.addCallback(((function (G__45153){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__45153))
);

G__45153.addErrback(((function (G__45153){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__45153))
);

return G__45153;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__45154 = cljs.core._EQ_;
var expr__45155 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__45154.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__45155))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__45154,expr__45155){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__45154,expr__45155))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__45154,expr__45155){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e45157){if((e45157 instanceof Error)){
var e = e45157;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e45157;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__45154,expr__45155))
} else {
if(cljs.core.truth_(pred__45154.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__45155))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__45154.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__45155))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__45154.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__45155))){
return ((function (pred__45154,expr__45155){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e45158){if((e45158 instanceof Error)){
var e = e45158;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e45158;

}
}})());
});
;})(pred__45154,expr__45155))
} else {
return ((function (pred__45154,expr__45155){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__45154,expr__45155))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__45159,callback){
var map__45160 = p__45159;
var map__45160__$1 = ((((!((map__45160 == null)))?((((map__45160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45160.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45160):map__45160);
var file_msg = map__45160__$1;
var request_url = cljs.core.get.call(null,map__45160__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__45160,map__45160__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__45160,map__45160__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__35983__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35983__auto__){
return (function (){
var f__35984__auto__ = (function (){var switch__35893__auto__ = ((function (c__35983__auto__){
return (function (state_45184){
var state_val_45185 = (state_45184[(1)]);
if((state_val_45185 === (7))){
var inst_45180 = (state_45184[(2)]);
var state_45184__$1 = state_45184;
var statearr_45186_45203 = state_45184__$1;
(statearr_45186_45203[(2)] = inst_45180);

(statearr_45186_45203[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45185 === (1))){
var state_45184__$1 = state_45184;
var statearr_45187_45204 = state_45184__$1;
(statearr_45187_45204[(2)] = null);

(statearr_45187_45204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45185 === (4))){
var inst_45164 = (state_45184[(7)]);
var inst_45164__$1 = (state_45184[(2)]);
var state_45184__$1 = (function (){var statearr_45188 = state_45184;
(statearr_45188[(7)] = inst_45164__$1);

return statearr_45188;
})();
if(cljs.core.truth_(inst_45164__$1)){
var statearr_45189_45205 = state_45184__$1;
(statearr_45189_45205[(1)] = (5));

} else {
var statearr_45190_45206 = state_45184__$1;
(statearr_45190_45206[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45185 === (6))){
var state_45184__$1 = state_45184;
var statearr_45191_45207 = state_45184__$1;
(statearr_45191_45207[(2)] = null);

(statearr_45191_45207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45185 === (3))){
var inst_45182 = (state_45184[(2)]);
var state_45184__$1 = state_45184;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45184__$1,inst_45182);
} else {
if((state_val_45185 === (2))){
var state_45184__$1 = state_45184;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45184__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_45185 === (11))){
var inst_45176 = (state_45184[(2)]);
var state_45184__$1 = (function (){var statearr_45192 = state_45184;
(statearr_45192[(8)] = inst_45176);

return statearr_45192;
})();
var statearr_45193_45208 = state_45184__$1;
(statearr_45193_45208[(2)] = null);

(statearr_45193_45208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45185 === (9))){
var inst_45170 = (state_45184[(9)]);
var inst_45168 = (state_45184[(10)]);
var inst_45172 = inst_45170.call(null,inst_45168);
var state_45184__$1 = state_45184;
var statearr_45194_45209 = state_45184__$1;
(statearr_45194_45209[(2)] = inst_45172);

(statearr_45194_45209[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45185 === (5))){
var inst_45164 = (state_45184[(7)]);
var inst_45166 = figwheel.client.file_reloading.blocking_load.call(null,inst_45164);
var state_45184__$1 = state_45184;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45184__$1,(8),inst_45166);
} else {
if((state_val_45185 === (10))){
var inst_45168 = (state_45184[(10)]);
var inst_45174 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_45168);
var state_45184__$1 = state_45184;
var statearr_45195_45210 = state_45184__$1;
(statearr_45195_45210[(2)] = inst_45174);

(statearr_45195_45210[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45185 === (8))){
var inst_45164 = (state_45184[(7)]);
var inst_45170 = (state_45184[(9)]);
var inst_45168 = (state_45184[(2)]);
var inst_45169 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_45170__$1 = cljs.core.get.call(null,inst_45169,inst_45164);
var state_45184__$1 = (function (){var statearr_45196 = state_45184;
(statearr_45196[(9)] = inst_45170__$1);

(statearr_45196[(10)] = inst_45168);

return statearr_45196;
})();
if(cljs.core.truth_(inst_45170__$1)){
var statearr_45197_45211 = state_45184__$1;
(statearr_45197_45211[(1)] = (9));

} else {
var statearr_45198_45212 = state_45184__$1;
(statearr_45198_45212[(1)] = (10));

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
});})(c__35983__auto__))
;
return ((function (switch__35893__auto__,c__35983__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__35894__auto__ = null;
var figwheel$client$file_reloading$state_machine__35894__auto____0 = (function (){
var statearr_45199 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45199[(0)] = figwheel$client$file_reloading$state_machine__35894__auto__);

(statearr_45199[(1)] = (1));

return statearr_45199;
});
var figwheel$client$file_reloading$state_machine__35894__auto____1 = (function (state_45184){
while(true){
var ret_value__35895__auto__ = (function (){try{while(true){
var result__35896__auto__ = switch__35893__auto__.call(null,state_45184);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35896__auto__;
}
break;
}
}catch (e45200){if((e45200 instanceof Object)){
var ex__35897__auto__ = e45200;
var statearr_45201_45213 = state_45184;
(statearr_45201_45213[(5)] = ex__35897__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45184);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45200;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45214 = state_45184;
state_45184 = G__45214;
continue;
} else {
return ret_value__35895__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__35894__auto__ = function(state_45184){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__35894__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__35894__auto____1.call(this,state_45184);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__35894__auto____0;
figwheel$client$file_reloading$state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__35894__auto____1;
return figwheel$client$file_reloading$state_machine__35894__auto__;
})()
;})(switch__35893__auto__,c__35983__auto__))
})();
var state__35985__auto__ = (function (){var statearr_45202 = f__35984__auto__.call(null);
(statearr_45202[(6)] = c__35983__auto__);

return statearr_45202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35985__auto__);
});})(c__35983__auto__))
);

return c__35983__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__45215,callback){
var map__45216 = p__45215;
var map__45216__$1 = ((((!((map__45216 == null)))?((((map__45216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45216.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45216):map__45216);
var file_msg = map__45216__$1;
var namespace = cljs.core.get.call(null,map__45216__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__45216,map__45216__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__45216,map__45216__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__45218){
var map__45219 = p__45218;
var map__45219__$1 = ((((!((map__45219 == null)))?((((map__45219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45219.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45219):map__45219);
var file_msg = map__45219__$1;
var namespace = cljs.core.get.call(null,map__45219__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__45221){
var map__45222 = p__45221;
var map__45222__$1 = ((((!((map__45222 == null)))?((((map__45222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45222.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45222):map__45222);
var file_msg = map__45222__$1;
var namespace = cljs.core.get.call(null,map__45222__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__30036__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__30036__auto__){
var or__30048__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30048__auto__)){
return or__30048__auto__;
} else {
var or__30048__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30048__auto____$1)){
return or__30048__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__30036__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__45224,callback){
var map__45225 = p__45224;
var map__45225__$1 = ((((!((map__45225 == null)))?((((map__45225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45225.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45225):map__45225);
var file_msg = map__45225__$1;
var request_url = cljs.core.get.call(null,map__45225__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__45225__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__35983__auto___45275 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35983__auto___45275,out){
return (function (){
var f__35984__auto__ = (function (){var switch__35893__auto__ = ((function (c__35983__auto___45275,out){
return (function (state_45260){
var state_val_45261 = (state_45260[(1)]);
if((state_val_45261 === (1))){
var inst_45234 = cljs.core.seq.call(null,files);
var inst_45235 = cljs.core.first.call(null,inst_45234);
var inst_45236 = cljs.core.next.call(null,inst_45234);
var inst_45237 = files;
var state_45260__$1 = (function (){var statearr_45262 = state_45260;
(statearr_45262[(7)] = inst_45236);

(statearr_45262[(8)] = inst_45235);

(statearr_45262[(9)] = inst_45237);

return statearr_45262;
})();
var statearr_45263_45276 = state_45260__$1;
(statearr_45263_45276[(2)] = null);

(statearr_45263_45276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45261 === (2))){
var inst_45237 = (state_45260[(9)]);
var inst_45243 = (state_45260[(10)]);
var inst_45242 = cljs.core.seq.call(null,inst_45237);
var inst_45243__$1 = cljs.core.first.call(null,inst_45242);
var inst_45244 = cljs.core.next.call(null,inst_45242);
var inst_45245 = (inst_45243__$1 == null);
var inst_45246 = cljs.core.not.call(null,inst_45245);
var state_45260__$1 = (function (){var statearr_45264 = state_45260;
(statearr_45264[(11)] = inst_45244);

(statearr_45264[(10)] = inst_45243__$1);

return statearr_45264;
})();
if(inst_45246){
var statearr_45265_45277 = state_45260__$1;
(statearr_45265_45277[(1)] = (4));

} else {
var statearr_45266_45278 = state_45260__$1;
(statearr_45266_45278[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45261 === (3))){
var inst_45258 = (state_45260[(2)]);
var state_45260__$1 = state_45260;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45260__$1,inst_45258);
} else {
if((state_val_45261 === (4))){
var inst_45243 = (state_45260[(10)]);
var inst_45248 = figwheel.client.file_reloading.reload_js_file.call(null,inst_45243);
var state_45260__$1 = state_45260;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45260__$1,(7),inst_45248);
} else {
if((state_val_45261 === (5))){
var inst_45254 = cljs.core.async.close_BANG_.call(null,out);
var state_45260__$1 = state_45260;
var statearr_45267_45279 = state_45260__$1;
(statearr_45267_45279[(2)] = inst_45254);

(statearr_45267_45279[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45261 === (6))){
var inst_45256 = (state_45260[(2)]);
var state_45260__$1 = state_45260;
var statearr_45268_45280 = state_45260__$1;
(statearr_45268_45280[(2)] = inst_45256);

(statearr_45268_45280[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45261 === (7))){
var inst_45244 = (state_45260[(11)]);
var inst_45250 = (state_45260[(2)]);
var inst_45251 = cljs.core.async.put_BANG_.call(null,out,inst_45250);
var inst_45237 = inst_45244;
var state_45260__$1 = (function (){var statearr_45269 = state_45260;
(statearr_45269[(9)] = inst_45237);

(statearr_45269[(12)] = inst_45251);

return statearr_45269;
})();
var statearr_45270_45281 = state_45260__$1;
(statearr_45270_45281[(2)] = null);

(statearr_45270_45281[(1)] = (2));


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
});})(c__35983__auto___45275,out))
;
return ((function (switch__35893__auto__,c__35983__auto___45275,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35894__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35894__auto____0 = (function (){
var statearr_45271 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45271[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35894__auto__);

(statearr_45271[(1)] = (1));

return statearr_45271;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35894__auto____1 = (function (state_45260){
while(true){
var ret_value__35895__auto__ = (function (){try{while(true){
var result__35896__auto__ = switch__35893__auto__.call(null,state_45260);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35896__auto__;
}
break;
}
}catch (e45272){if((e45272 instanceof Object)){
var ex__35897__auto__ = e45272;
var statearr_45273_45282 = state_45260;
(statearr_45273_45282[(5)] = ex__35897__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45260);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45272;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45283 = state_45260;
state_45260 = G__45283;
continue;
} else {
return ret_value__35895__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35894__auto__ = function(state_45260){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35894__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35894__auto____1.call(this,state_45260);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35894__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35894__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35894__auto__;
})()
;})(switch__35893__auto__,c__35983__auto___45275,out))
})();
var state__35985__auto__ = (function (){var statearr_45274 = f__35984__auto__.call(null);
(statearr_45274[(6)] = c__35983__auto___45275);

return statearr_45274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35985__auto__);
});})(c__35983__auto___45275,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__45284,opts){
var map__45285 = p__45284;
var map__45285__$1 = ((((!((map__45285 == null)))?((((map__45285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45285.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45285):map__45285);
var eval_body = cljs.core.get.call(null,map__45285__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__45285__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__30036__auto__ = eval_body;
if(cljs.core.truth_(and__30036__auto__)){
return typeof eval_body === 'string';
} else {
return and__30036__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e45287){var e = e45287;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5276__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__45288_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__45288_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5276__auto__)){
var file_msg = temp__5276__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__45289){
var vec__45290 = p__45289;
var k = cljs.core.nth.call(null,vec__45290,(0),null);
var v = cljs.core.nth.call(null,vec__45290,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__45293){
var vec__45294 = p__45293;
var k = cljs.core.nth.call(null,vec__45294,(0),null);
var v = cljs.core.nth.call(null,vec__45294,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__45300,p__45301){
var map__45302 = p__45300;
var map__45302__$1 = ((((!((map__45302 == null)))?((((map__45302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45302.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45302):map__45302);
var opts = map__45302__$1;
var before_jsload = cljs.core.get.call(null,map__45302__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__45302__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__45302__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__45303 = p__45301;
var map__45303__$1 = ((((!((map__45303 == null)))?((((map__45303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45303.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45303):map__45303);
var msg = map__45303__$1;
var files = cljs.core.get.call(null,map__45303__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__45303__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__45303__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__35983__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35983__auto__,map__45302,map__45302__$1,opts,before_jsload,on_jsload,reload_dependents,map__45303,map__45303__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__35984__auto__ = (function (){var switch__35893__auto__ = ((function (c__35983__auto__,map__45302,map__45302__$1,opts,before_jsload,on_jsload,reload_dependents,map__45303,map__45303__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_45457){
var state_val_45458 = (state_45457[(1)]);
if((state_val_45458 === (7))){
var inst_45317 = (state_45457[(7)]);
var inst_45320 = (state_45457[(8)]);
var inst_45318 = (state_45457[(9)]);
var inst_45319 = (state_45457[(10)]);
var inst_45325 = cljs.core._nth.call(null,inst_45318,inst_45320);
var inst_45326 = figwheel.client.file_reloading.eval_body.call(null,inst_45325,opts);
var inst_45327 = (inst_45320 + (1));
var tmp45459 = inst_45317;
var tmp45460 = inst_45318;
var tmp45461 = inst_45319;
var inst_45317__$1 = tmp45459;
var inst_45318__$1 = tmp45460;
var inst_45319__$1 = tmp45461;
var inst_45320__$1 = inst_45327;
var state_45457__$1 = (function (){var statearr_45462 = state_45457;
(statearr_45462[(7)] = inst_45317__$1);

(statearr_45462[(8)] = inst_45320__$1);

(statearr_45462[(9)] = inst_45318__$1);

(statearr_45462[(10)] = inst_45319__$1);

(statearr_45462[(11)] = inst_45326);

return statearr_45462;
})();
var statearr_45463_45546 = state_45457__$1;
(statearr_45463_45546[(2)] = null);

(statearr_45463_45546[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45458 === (20))){
var inst_45360 = (state_45457[(12)]);
var inst_45368 = figwheel.client.file_reloading.sort_files.call(null,inst_45360);
var state_45457__$1 = state_45457;
var statearr_45464_45547 = state_45457__$1;
(statearr_45464_45547[(2)] = inst_45368);

(statearr_45464_45547[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45458 === (27))){
var state_45457__$1 = state_45457;
var statearr_45465_45548 = state_45457__$1;
(statearr_45465_45548[(2)] = null);

(statearr_45465_45548[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45458 === (1))){
var inst_45309 = (state_45457[(13)]);
var inst_45306 = before_jsload.call(null,files);
var inst_45307 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_45308 = (function (){return ((function (inst_45309,inst_45306,inst_45307,state_val_45458,c__35983__auto__,map__45302,map__45302__$1,opts,before_jsload,on_jsload,reload_dependents,map__45303,map__45303__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__45297_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__45297_SHARP_);
});
;})(inst_45309,inst_45306,inst_45307,state_val_45458,c__35983__auto__,map__45302,map__45302__$1,opts,before_jsload,on_jsload,reload_dependents,map__45303,map__45303__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45309__$1 = cljs.core.filter.call(null,inst_45308,files);
var inst_45310 = cljs.core.not_empty.call(null,inst_45309__$1);
var state_45457__$1 = (function (){var statearr_45466 = state_45457;
(statearr_45466[(14)] = inst_45306);

(statearr_45466[(13)] = inst_45309__$1);

(statearr_45466[(15)] = inst_45307);

return statearr_45466;
})();
if(cljs.core.truth_(inst_45310)){
var statearr_45467_45549 = state_45457__$1;
(statearr_45467_45549[(1)] = (2));

} else {
var statearr_45468_45550 = state_45457__$1;
(statearr_45468_45550[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45458 === (24))){
var state_45457__$1 = state_45457;
var statearr_45469_45551 = state_45457__$1;
(statearr_45469_45551[(2)] = null);

(statearr_45469_45551[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45458 === (39))){
var inst_45410 = (state_45457[(16)]);
var state_45457__$1 = state_45457;
var statearr_45470_45552 = state_45457__$1;
(statearr_45470_45552[(2)] = inst_45410);

(statearr_45470_45552[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45458 === (46))){
var inst_45452 = (state_45457[(2)]);
var state_45457__$1 = state_45457;
var statearr_45471_45553 = state_45457__$1;
(statearr_45471_45553[(2)] = inst_45452);

(statearr_45471_45553[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45458 === (4))){
var inst_45354 = (state_45457[(2)]);
var inst_45355 = cljs.core.List.EMPTY;
var inst_45356 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_45355);
var inst_45357 = (function (){return ((function (inst_45354,inst_45355,inst_45356,state_val_45458,c__35983__auto__,map__45302,map__45302__$1,opts,before_jsload,on_jsload,reload_dependents,map__45303,map__45303__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__45298_SHARP_){
var and__30036__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__45298_SHARP_);
if(cljs.core.truth_(and__30036__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__45298_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__45298_SHARP_)));
} else {
return and__30036__auto__;
}
});
;})(inst_45354,inst_45355,inst_45356,state_val_45458,c__35983__auto__,map__45302,map__45302__$1,opts,before_jsload,on_jsload,reload_dependents,map__45303,map__45303__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45358 = cljs.core.filter.call(null,inst_45357,files);
var inst_45359 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_45360 = cljs.core.concat.call(null,inst_45358,inst_45359);
var state_45457__$1 = (function (){var statearr_45472 = state_45457;
(statearr_45472[(17)] = inst_45354);

(statearr_45472[(18)] = inst_45356);

(statearr_45472[(12)] = inst_45360);

return statearr_45472;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_45473_45554 = state_45457__$1;
(statearr_45473_45554[(1)] = (16));

} else {
var statearr_45474_45555 = state_45457__$1;
(statearr_45474_45555[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45458 === (15))){
var inst_45344 = (state_45457[(2)]);
var state_45457__$1 = state_45457;
var statearr_45475_45556 = state_45457__$1;
(statearr_45475_45556[(2)] = inst_45344);

(statearr_45475_45556[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45458 === (21))){
var inst_45370 = (state_45457[(19)]);
var inst_45370__$1 = (state_45457[(2)]);
var inst_45371 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_45370__$1);
var state_45457__$1 = (function (){var statearr_45476 = state_45457;
(statearr_45476[(19)] = inst_45370__$1);

return statearr_45476;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45457__$1,(22),inst_45371);
} else {
if((state_val_45458 === (31))){
var inst_45455 = (state_45457[(2)]);
var state_45457__$1 = state_45457;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45457__$1,inst_45455);
} else {
if((state_val_45458 === (32))){
var inst_45410 = (state_45457[(16)]);
var inst_45415 = inst_45410.cljs$lang$protocol_mask$partition0$;
var inst_45416 = (inst_45415 & (64));
var inst_45417 = inst_45410.cljs$core$ISeq$;
var inst_45418 = (cljs.core.PROTOCOL_SENTINEL === inst_45417);
var inst_45419 = (inst_45416) || (inst_45418);
var state_45457__$1 = state_45457;
if(cljs.core.truth_(inst_45419)){
var statearr_45477_45557 = state_45457__$1;
(statearr_45477_45557[(1)] = (35));

} else {
var statearr_45478_45558 = state_45457__$1;
(statearr_45478_45558[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45458 === (40))){
var inst_45432 = (state_45457[(20)]);
var inst_45431 = (state_45457[(2)]);
var inst_45432__$1 = cljs.core.get.call(null,inst_45431,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_45433 = cljs.core.get.call(null,inst_45431,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_45434 = cljs.core.not_empty.call(null,inst_45432__$1);
var state_45457__$1 = (function (){var statearr_45479 = state_45457;
(statearr_45479[(20)] = inst_45432__$1);

(statearr_45479[(21)] = inst_45433);

return statearr_45479;
})();
if(cljs.core.truth_(inst_45434)){
var statearr_45480_45559 = state_45457__$1;
(statearr_45480_45559[(1)] = (41));

} else {
var statearr_45481_45560 = state_45457__$1;
(statearr_45481_45560[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45458 === (33))){
var state_45457__$1 = state_45457;
var statearr_45482_45561 = state_45457__$1;
(statearr_45482_45561[(2)] = false);

(statearr_45482_45561[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45458 === (13))){
var inst_45330 = (state_45457[(22)]);
var inst_45334 = cljs.core.chunk_first.call(null,inst_45330);
var inst_45335 = cljs.core.chunk_rest.call(null,inst_45330);
var inst_45336 = cljs.core.count.call(null,inst_45334);
var inst_45317 = inst_45335;
var inst_45318 = inst_45334;
var inst_45319 = inst_45336;
var inst_45320 = (0);
var state_45457__$1 = (function (){var statearr_45483 = state_45457;
(statearr_45483[(7)] = inst_45317);

(statearr_45483[(8)] = inst_45320);

(statearr_45483[(9)] = inst_45318);

(statearr_45483[(10)] = inst_45319);

return statearr_45483;
})();
var statearr_45484_45562 = state_45457__$1;
(statearr_45484_45562[(2)] = null);

(statearr_45484_45562[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45458 === (22))){
var inst_45378 = (state_45457[(23)]);
var inst_45373 = (state_45457[(24)]);
var inst_45374 = (state_45457[(25)]);
var inst_45370 = (state_45457[(19)]);
var inst_45373__$1 = (state_45457[(2)]);
var inst_45374__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_45373__$1);
var inst_45375 = (function (){var all_files = inst_45370;
var res_SINGLEQUOTE_ = inst_45373__$1;
var res = inst_45374__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_45378,inst_45373,inst_45374,inst_45370,inst_45373__$1,inst_45374__$1,state_val_45458,c__35983__auto__,map__45302,map__45302__$1,opts,before_jsload,on_jsload,reload_dependents,map__45303,map__45303__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__45299_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__45299_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_45378,inst_45373,inst_45374,inst_45370,inst_45373__$1,inst_45374__$1,state_val_45458,c__35983__auto__,map__45302,map__45302__$1,opts,before_jsload,on_jsload,reload_dependents,map__45303,map__45303__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45376 = cljs.core.filter.call(null,inst_45375,inst_45373__$1);
var inst_45377 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_45378__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_45377);
var inst_45379 = cljs.core.not_empty.call(null,inst_45378__$1);
var state_45457__$1 = (function (){var statearr_45485 = state_45457;
(statearr_45485[(23)] = inst_45378__$1);

(statearr_45485[(24)] = inst_45373__$1);

(statearr_45485[(26)] = inst_45376);

(statearr_45485[(25)] = inst_45374__$1);

return statearr_45485;
})();
if(cljs.core.truth_(inst_45379)){
var statearr_45486_45563 = state_45457__$1;
(statearr_45486_45563[(1)] = (23));

} else {
var statearr_45487_45564 = state_45457__$1;
(statearr_45487_45564[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45458 === (36))){
var state_45457__$1 = state_45457;
var statearr_45488_45565 = state_45457__$1;
(statearr_45488_45565[(2)] = false);

(statearr_45488_45565[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45458 === (41))){
var inst_45432 = (state_45457[(20)]);
var inst_45436 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_45437 = cljs.core.map.call(null,inst_45436,inst_45432);
var inst_45438 = cljs.core.pr_str.call(null,inst_45437);
var inst_45439 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_45438)].join('');
var inst_45440 = figwheel.client.utils.log.call(null,inst_45439);
var state_45457__$1 = state_45457;
var statearr_45489_45566 = state_45457__$1;
(statearr_45489_45566[(2)] = inst_45440);

(statearr_45489_45566[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45458 === (43))){
var inst_45433 = (state_45457[(21)]);
var inst_45443 = (state_45457[(2)]);
var inst_45444 = cljs.core.not_empty.call(null,inst_45433);
var state_45457__$1 = (function (){var statearr_45490 = state_45457;
(statearr_45490[(27)] = inst_45443);

return statearr_45490;
})();
if(cljs.core.truth_(inst_45444)){
var statearr_45491_45567 = state_45457__$1;
(statearr_45491_45567[(1)] = (44));

} else {
var statearr_45492_45568 = state_45457__$1;
(statearr_45492_45568[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45458 === (29))){
var inst_45378 = (state_45457[(23)]);
var inst_45373 = (state_45457[(24)]);
var inst_45376 = (state_45457[(26)]);
var inst_45374 = (state_45457[(25)]);
var inst_45410 = (state_45457[(16)]);
var inst_45370 = (state_45457[(19)]);
var inst_45406 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_45409 = (function (){var all_files = inst_45370;
var res_SINGLEQUOTE_ = inst_45373;
var res = inst_45374;
var files_not_loaded = inst_45376;
var dependencies_that_loaded = inst_45378;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45378,inst_45373,inst_45376,inst_45374,inst_45410,inst_45370,inst_45406,state_val_45458,c__35983__auto__,map__45302,map__45302__$1,opts,before_jsload,on_jsload,reload_dependents,map__45303,map__45303__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__45408){
var map__45493 = p__45408;
var map__45493__$1 = ((((!((map__45493 == null)))?((((map__45493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45493.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45493):map__45493);
var namespace = cljs.core.get.call(null,map__45493__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45378,inst_45373,inst_45376,inst_45374,inst_45410,inst_45370,inst_45406,state_val_45458,c__35983__auto__,map__45302,map__45302__$1,opts,before_jsload,on_jsload,reload_dependents,map__45303,map__45303__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45410__$1 = cljs.core.group_by.call(null,inst_45409,inst_45376);
var inst_45412 = (inst_45410__$1 == null);
var inst_45413 = cljs.core.not.call(null,inst_45412);
var state_45457__$1 = (function (){var statearr_45495 = state_45457;
(statearr_45495[(16)] = inst_45410__$1);

(statearr_45495[(28)] = inst_45406);

return statearr_45495;
})();
if(inst_45413){
var statearr_45496_45569 = state_45457__$1;
(statearr_45496_45569[(1)] = (32));

} else {
var statearr_45497_45570 = state_45457__$1;
(statearr_45497_45570[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45458 === (44))){
var inst_45433 = (state_45457[(21)]);
var inst_45446 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_45433);
var inst_45447 = cljs.core.pr_str.call(null,inst_45446);
var inst_45448 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_45447)].join('');
var inst_45449 = figwheel.client.utils.log.call(null,inst_45448);
var state_45457__$1 = state_45457;
var statearr_45498_45571 = state_45457__$1;
(statearr_45498_45571[(2)] = inst_45449);

(statearr_45498_45571[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45458 === (6))){
var inst_45351 = (state_45457[(2)]);
var state_45457__$1 = state_45457;
var statearr_45499_45572 = state_45457__$1;
(statearr_45499_45572[(2)] = inst_45351);

(statearr_45499_45572[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45458 === (28))){
var inst_45376 = (state_45457[(26)]);
var inst_45403 = (state_45457[(2)]);
var inst_45404 = cljs.core.not_empty.call(null,inst_45376);
var state_45457__$1 = (function (){var statearr_45500 = state_45457;
(statearr_45500[(29)] = inst_45403);

return statearr_45500;
})();
if(cljs.core.truth_(inst_45404)){
var statearr_45501_45573 = state_45457__$1;
(statearr_45501_45573[(1)] = (29));

} else {
var statearr_45502_45574 = state_45457__$1;
(statearr_45502_45574[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45458 === (25))){
var inst_45374 = (state_45457[(25)]);
var inst_45390 = (state_45457[(2)]);
var inst_45391 = cljs.core.not_empty.call(null,inst_45374);
var state_45457__$1 = (function (){var statearr_45503 = state_45457;
(statearr_45503[(30)] = inst_45390);

return statearr_45503;
})();
if(cljs.core.truth_(inst_45391)){
var statearr_45504_45575 = state_45457__$1;
(statearr_45504_45575[(1)] = (26));

} else {
var statearr_45505_45576 = state_45457__$1;
(statearr_45505_45576[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45458 === (34))){
var inst_45426 = (state_45457[(2)]);
var state_45457__$1 = state_45457;
if(cljs.core.truth_(inst_45426)){
var statearr_45506_45577 = state_45457__$1;
(statearr_45506_45577[(1)] = (38));

} else {
var statearr_45507_45578 = state_45457__$1;
(statearr_45507_45578[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45458 === (17))){
var state_45457__$1 = state_45457;
var statearr_45508_45579 = state_45457__$1;
(statearr_45508_45579[(2)] = recompile_dependents);

(statearr_45508_45579[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45458 === (3))){
var state_45457__$1 = state_45457;
var statearr_45509_45580 = state_45457__$1;
(statearr_45509_45580[(2)] = null);

(statearr_45509_45580[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45458 === (12))){
var inst_45347 = (state_45457[(2)]);
var state_45457__$1 = state_45457;
var statearr_45510_45581 = state_45457__$1;
(statearr_45510_45581[(2)] = inst_45347);

(statearr_45510_45581[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45458 === (2))){
var inst_45309 = (state_45457[(13)]);
var inst_45316 = cljs.core.seq.call(null,inst_45309);
var inst_45317 = inst_45316;
var inst_45318 = null;
var inst_45319 = (0);
var inst_45320 = (0);
var state_45457__$1 = (function (){var statearr_45511 = state_45457;
(statearr_45511[(7)] = inst_45317);

(statearr_45511[(8)] = inst_45320);

(statearr_45511[(9)] = inst_45318);

(statearr_45511[(10)] = inst_45319);

return statearr_45511;
})();
var statearr_45512_45582 = state_45457__$1;
(statearr_45512_45582[(2)] = null);

(statearr_45512_45582[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45458 === (23))){
var inst_45378 = (state_45457[(23)]);
var inst_45373 = (state_45457[(24)]);
var inst_45376 = (state_45457[(26)]);
var inst_45374 = (state_45457[(25)]);
var inst_45370 = (state_45457[(19)]);
var inst_45381 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_45383 = (function (){var all_files = inst_45370;
var res_SINGLEQUOTE_ = inst_45373;
var res = inst_45374;
var files_not_loaded = inst_45376;
var dependencies_that_loaded = inst_45378;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45378,inst_45373,inst_45376,inst_45374,inst_45370,inst_45381,state_val_45458,c__35983__auto__,map__45302,map__45302__$1,opts,before_jsload,on_jsload,reload_dependents,map__45303,map__45303__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__45382){
var map__45513 = p__45382;
var map__45513__$1 = ((((!((map__45513 == null)))?((((map__45513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45513.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45513):map__45513);
var request_url = cljs.core.get.call(null,map__45513__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45378,inst_45373,inst_45376,inst_45374,inst_45370,inst_45381,state_val_45458,c__35983__auto__,map__45302,map__45302__$1,opts,before_jsload,on_jsload,reload_dependents,map__45303,map__45303__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45384 = cljs.core.reverse.call(null,inst_45378);
var inst_45385 = cljs.core.map.call(null,inst_45383,inst_45384);
var inst_45386 = cljs.core.pr_str.call(null,inst_45385);
var inst_45387 = figwheel.client.utils.log.call(null,inst_45386);
var state_45457__$1 = (function (){var statearr_45515 = state_45457;
(statearr_45515[(31)] = inst_45381);

return statearr_45515;
})();
var statearr_45516_45583 = state_45457__$1;
(statearr_45516_45583[(2)] = inst_45387);

(statearr_45516_45583[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45458 === (35))){
var state_45457__$1 = state_45457;
var statearr_45517_45584 = state_45457__$1;
(statearr_45517_45584[(2)] = true);

(statearr_45517_45584[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45458 === (19))){
var inst_45360 = (state_45457[(12)]);
var inst_45366 = figwheel.client.file_reloading.expand_files.call(null,inst_45360);
var state_45457__$1 = state_45457;
var statearr_45518_45585 = state_45457__$1;
(statearr_45518_45585[(2)] = inst_45366);

(statearr_45518_45585[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45458 === (11))){
var state_45457__$1 = state_45457;
var statearr_45519_45586 = state_45457__$1;
(statearr_45519_45586[(2)] = null);

(statearr_45519_45586[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45458 === (9))){
var inst_45349 = (state_45457[(2)]);
var state_45457__$1 = state_45457;
var statearr_45520_45587 = state_45457__$1;
(statearr_45520_45587[(2)] = inst_45349);

(statearr_45520_45587[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45458 === (5))){
var inst_45320 = (state_45457[(8)]);
var inst_45319 = (state_45457[(10)]);
var inst_45322 = (inst_45320 < inst_45319);
var inst_45323 = inst_45322;
var state_45457__$1 = state_45457;
if(cljs.core.truth_(inst_45323)){
var statearr_45521_45588 = state_45457__$1;
(statearr_45521_45588[(1)] = (7));

} else {
var statearr_45522_45589 = state_45457__$1;
(statearr_45522_45589[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45458 === (14))){
var inst_45330 = (state_45457[(22)]);
var inst_45339 = cljs.core.first.call(null,inst_45330);
var inst_45340 = figwheel.client.file_reloading.eval_body.call(null,inst_45339,opts);
var inst_45341 = cljs.core.next.call(null,inst_45330);
var inst_45317 = inst_45341;
var inst_45318 = null;
var inst_45319 = (0);
var inst_45320 = (0);
var state_45457__$1 = (function (){var statearr_45523 = state_45457;
(statearr_45523[(7)] = inst_45317);

(statearr_45523[(8)] = inst_45320);

(statearr_45523[(32)] = inst_45340);

(statearr_45523[(9)] = inst_45318);

(statearr_45523[(10)] = inst_45319);

return statearr_45523;
})();
var statearr_45524_45590 = state_45457__$1;
(statearr_45524_45590[(2)] = null);

(statearr_45524_45590[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45458 === (45))){
var state_45457__$1 = state_45457;
var statearr_45525_45591 = state_45457__$1;
(statearr_45525_45591[(2)] = null);

(statearr_45525_45591[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45458 === (26))){
var inst_45378 = (state_45457[(23)]);
var inst_45373 = (state_45457[(24)]);
var inst_45376 = (state_45457[(26)]);
var inst_45374 = (state_45457[(25)]);
var inst_45370 = (state_45457[(19)]);
var inst_45393 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_45395 = (function (){var all_files = inst_45370;
var res_SINGLEQUOTE_ = inst_45373;
var res = inst_45374;
var files_not_loaded = inst_45376;
var dependencies_that_loaded = inst_45378;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45378,inst_45373,inst_45376,inst_45374,inst_45370,inst_45393,state_val_45458,c__35983__auto__,map__45302,map__45302__$1,opts,before_jsload,on_jsload,reload_dependents,map__45303,map__45303__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__45394){
var map__45526 = p__45394;
var map__45526__$1 = ((((!((map__45526 == null)))?((((map__45526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45526.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45526):map__45526);
var namespace = cljs.core.get.call(null,map__45526__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__45526__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45378,inst_45373,inst_45376,inst_45374,inst_45370,inst_45393,state_val_45458,c__35983__auto__,map__45302,map__45302__$1,opts,before_jsload,on_jsload,reload_dependents,map__45303,map__45303__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45396 = cljs.core.map.call(null,inst_45395,inst_45374);
var inst_45397 = cljs.core.pr_str.call(null,inst_45396);
var inst_45398 = figwheel.client.utils.log.call(null,inst_45397);
var inst_45399 = (function (){var all_files = inst_45370;
var res_SINGLEQUOTE_ = inst_45373;
var res = inst_45374;
var files_not_loaded = inst_45376;
var dependencies_that_loaded = inst_45378;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45378,inst_45373,inst_45376,inst_45374,inst_45370,inst_45393,inst_45395,inst_45396,inst_45397,inst_45398,state_val_45458,c__35983__auto__,map__45302,map__45302__$1,opts,before_jsload,on_jsload,reload_dependents,map__45303,map__45303__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45378,inst_45373,inst_45376,inst_45374,inst_45370,inst_45393,inst_45395,inst_45396,inst_45397,inst_45398,state_val_45458,c__35983__auto__,map__45302,map__45302__$1,opts,before_jsload,on_jsload,reload_dependents,map__45303,map__45303__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45400 = setTimeout(inst_45399,(10));
var state_45457__$1 = (function (){var statearr_45528 = state_45457;
(statearr_45528[(33)] = inst_45393);

(statearr_45528[(34)] = inst_45398);

return statearr_45528;
})();
var statearr_45529_45592 = state_45457__$1;
(statearr_45529_45592[(2)] = inst_45400);

(statearr_45529_45592[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45458 === (16))){
var state_45457__$1 = state_45457;
var statearr_45530_45593 = state_45457__$1;
(statearr_45530_45593[(2)] = reload_dependents);

(statearr_45530_45593[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45458 === (38))){
var inst_45410 = (state_45457[(16)]);
var inst_45428 = cljs.core.apply.call(null,cljs.core.hash_map,inst_45410);
var state_45457__$1 = state_45457;
var statearr_45531_45594 = state_45457__$1;
(statearr_45531_45594[(2)] = inst_45428);

(statearr_45531_45594[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45458 === (30))){
var state_45457__$1 = state_45457;
var statearr_45532_45595 = state_45457__$1;
(statearr_45532_45595[(2)] = null);

(statearr_45532_45595[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45458 === (10))){
var inst_45330 = (state_45457[(22)]);
var inst_45332 = cljs.core.chunked_seq_QMARK_.call(null,inst_45330);
var state_45457__$1 = state_45457;
if(inst_45332){
var statearr_45533_45596 = state_45457__$1;
(statearr_45533_45596[(1)] = (13));

} else {
var statearr_45534_45597 = state_45457__$1;
(statearr_45534_45597[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45458 === (18))){
var inst_45364 = (state_45457[(2)]);
var state_45457__$1 = state_45457;
if(cljs.core.truth_(inst_45364)){
var statearr_45535_45598 = state_45457__$1;
(statearr_45535_45598[(1)] = (19));

} else {
var statearr_45536_45599 = state_45457__$1;
(statearr_45536_45599[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45458 === (42))){
var state_45457__$1 = state_45457;
var statearr_45537_45600 = state_45457__$1;
(statearr_45537_45600[(2)] = null);

(statearr_45537_45600[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45458 === (37))){
var inst_45423 = (state_45457[(2)]);
var state_45457__$1 = state_45457;
var statearr_45538_45601 = state_45457__$1;
(statearr_45538_45601[(2)] = inst_45423);

(statearr_45538_45601[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45458 === (8))){
var inst_45317 = (state_45457[(7)]);
var inst_45330 = (state_45457[(22)]);
var inst_45330__$1 = cljs.core.seq.call(null,inst_45317);
var state_45457__$1 = (function (){var statearr_45539 = state_45457;
(statearr_45539[(22)] = inst_45330__$1);

return statearr_45539;
})();
if(inst_45330__$1){
var statearr_45540_45602 = state_45457__$1;
(statearr_45540_45602[(1)] = (10));

} else {
var statearr_45541_45603 = state_45457__$1;
(statearr_45541_45603[(1)] = (11));

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
});})(c__35983__auto__,map__45302,map__45302__$1,opts,before_jsload,on_jsload,reload_dependents,map__45303,map__45303__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__35893__auto__,c__35983__auto__,map__45302,map__45302__$1,opts,before_jsload,on_jsload,reload_dependents,map__45303,map__45303__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35894__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35894__auto____0 = (function (){
var statearr_45542 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45542[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__35894__auto__);

(statearr_45542[(1)] = (1));

return statearr_45542;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35894__auto____1 = (function (state_45457){
while(true){
var ret_value__35895__auto__ = (function (){try{while(true){
var result__35896__auto__ = switch__35893__auto__.call(null,state_45457);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35896__auto__;
}
break;
}
}catch (e45543){if((e45543 instanceof Object)){
var ex__35897__auto__ = e45543;
var statearr_45544_45604 = state_45457;
(statearr_45544_45604[(5)] = ex__35897__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45543;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45605 = state_45457;
state_45457 = G__45605;
continue;
} else {
return ret_value__35895__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__35894__auto__ = function(state_45457){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35894__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35894__auto____1.call(this,state_45457);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__35894__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__35894__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__35894__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35894__auto__;
})()
;})(switch__35893__auto__,c__35983__auto__,map__45302,map__45302__$1,opts,before_jsload,on_jsload,reload_dependents,map__45303,map__45303__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__35985__auto__ = (function (){var statearr_45545 = f__35984__auto__.call(null);
(statearr_45545[(6)] = c__35983__auto__);

return statearr_45545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35985__auto__);
});})(c__35983__auto__,map__45302,map__45302__$1,opts,before_jsload,on_jsload,reload_dependents,map__45303,map__45303__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__35983__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__45608,link){
var map__45609 = p__45608;
var map__45609__$1 = ((((!((map__45609 == null)))?((((map__45609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45609.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45609):map__45609);
var file = cljs.core.get.call(null,map__45609__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5278__auto__ = link.href;
if(cljs.core.truth_(temp__5278__auto__)){
var link_href = temp__5278__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5278__auto__,map__45609,map__45609__$1,file){
return (function (p1__45606_SHARP_,p2__45607_SHARP_){
if(cljs.core._EQ_.call(null,p1__45606_SHARP_,p2__45607_SHARP_)){
return p1__45606_SHARP_;
} else {
return false;
}
});})(link_href,temp__5278__auto__,map__45609,map__45609__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5278__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__45612){
var map__45613 = p__45612;
var map__45613__$1 = ((((!((map__45613 == null)))?((((map__45613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45613.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45613):map__45613);
var match_length = cljs.core.get.call(null,map__45613__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__45613__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__45611_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__45611_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5278__auto__)){
var res = temp__5278__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__45615_SHARP_,p2__45616_SHARP_){
return cljs.core.assoc.call(null,p1__45615_SHARP_,cljs.core.get.call(null,p2__45616_SHARP_,key),p2__45616_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5276__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5276__auto__)){
var link = temp__5276__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5276__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5276__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_45617 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_45617);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_45617);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__45618,p__45619){
var map__45620 = p__45618;
var map__45620__$1 = ((((!((map__45620 == null)))?((((map__45620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45620.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45620):map__45620);
var on_cssload = cljs.core.get.call(null,map__45620__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__45621 = p__45619;
var map__45621__$1 = ((((!((map__45621 == null)))?((((map__45621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45621.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45621):map__45621);
var files_msg = map__45621__$1;
var files = cljs.core.get.call(null,map__45621__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5278__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5278__auto__)){
var f_datas = temp__5278__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1510655894292
