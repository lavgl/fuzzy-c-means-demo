// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__45902){
var map__45903 = p__45902;
var map__45903__$1 = ((((!((map__45903 == null)))?((((map__45903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45903.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45903):map__45903);
var m = map__45903__$1;
var n = cljs.core.get.call(null,map__45903__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__45903__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5278__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5278__auto__)){
var ns = temp__5278__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__45905_45927 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45906_45928 = null;
var count__45907_45929 = (0);
var i__45908_45930 = (0);
while(true){
if((i__45908_45930 < count__45907_45929)){
var f_45931 = cljs.core._nth.call(null,chunk__45906_45928,i__45908_45930);
cljs.core.println.call(null,"  ",f_45931);

var G__45932 = seq__45905_45927;
var G__45933 = chunk__45906_45928;
var G__45934 = count__45907_45929;
var G__45935 = (i__45908_45930 + (1));
seq__45905_45927 = G__45932;
chunk__45906_45928 = G__45933;
count__45907_45929 = G__45934;
i__45908_45930 = G__45935;
continue;
} else {
var temp__5278__auto___45936 = cljs.core.seq.call(null,seq__45905_45927);
if(temp__5278__auto___45936){
var seq__45905_45937__$1 = temp__5278__auto___45936;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45905_45937__$1)){
var c__30979__auto___45938 = cljs.core.chunk_first.call(null,seq__45905_45937__$1);
var G__45939 = cljs.core.chunk_rest.call(null,seq__45905_45937__$1);
var G__45940 = c__30979__auto___45938;
var G__45941 = cljs.core.count.call(null,c__30979__auto___45938);
var G__45942 = (0);
seq__45905_45927 = G__45939;
chunk__45906_45928 = G__45940;
count__45907_45929 = G__45941;
i__45908_45930 = G__45942;
continue;
} else {
var f_45943 = cljs.core.first.call(null,seq__45905_45937__$1);
cljs.core.println.call(null,"  ",f_45943);

var G__45944 = cljs.core.next.call(null,seq__45905_45937__$1);
var G__45945 = null;
var G__45946 = (0);
var G__45947 = (0);
seq__45905_45927 = G__45944;
chunk__45906_45928 = G__45945;
count__45907_45929 = G__45946;
i__45908_45930 = G__45947;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_45948 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__30048__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__30048__auto__)){
return or__30048__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_45948);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_45948)))?cljs.core.second.call(null,arglists_45948):arglists_45948));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__45909_45949 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45910_45950 = null;
var count__45911_45951 = (0);
var i__45912_45952 = (0);
while(true){
if((i__45912_45952 < count__45911_45951)){
var vec__45913_45953 = cljs.core._nth.call(null,chunk__45910_45950,i__45912_45952);
var name_45954 = cljs.core.nth.call(null,vec__45913_45953,(0),null);
var map__45916_45955 = cljs.core.nth.call(null,vec__45913_45953,(1),null);
var map__45916_45956__$1 = ((((!((map__45916_45955 == null)))?((((map__45916_45955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45916_45955.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45916_45955):map__45916_45955);
var doc_45957 = cljs.core.get.call(null,map__45916_45956__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45958 = cljs.core.get.call(null,map__45916_45956__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_45954);

cljs.core.println.call(null," ",arglists_45958);

if(cljs.core.truth_(doc_45957)){
cljs.core.println.call(null," ",doc_45957);
} else {
}

var G__45959 = seq__45909_45949;
var G__45960 = chunk__45910_45950;
var G__45961 = count__45911_45951;
var G__45962 = (i__45912_45952 + (1));
seq__45909_45949 = G__45959;
chunk__45910_45950 = G__45960;
count__45911_45951 = G__45961;
i__45912_45952 = G__45962;
continue;
} else {
var temp__5278__auto___45963 = cljs.core.seq.call(null,seq__45909_45949);
if(temp__5278__auto___45963){
var seq__45909_45964__$1 = temp__5278__auto___45963;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45909_45964__$1)){
var c__30979__auto___45965 = cljs.core.chunk_first.call(null,seq__45909_45964__$1);
var G__45966 = cljs.core.chunk_rest.call(null,seq__45909_45964__$1);
var G__45967 = c__30979__auto___45965;
var G__45968 = cljs.core.count.call(null,c__30979__auto___45965);
var G__45969 = (0);
seq__45909_45949 = G__45966;
chunk__45910_45950 = G__45967;
count__45911_45951 = G__45968;
i__45912_45952 = G__45969;
continue;
} else {
var vec__45918_45970 = cljs.core.first.call(null,seq__45909_45964__$1);
var name_45971 = cljs.core.nth.call(null,vec__45918_45970,(0),null);
var map__45921_45972 = cljs.core.nth.call(null,vec__45918_45970,(1),null);
var map__45921_45973__$1 = ((((!((map__45921_45972 == null)))?((((map__45921_45972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45921_45972.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45921_45972):map__45921_45972);
var doc_45974 = cljs.core.get.call(null,map__45921_45973__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45975 = cljs.core.get.call(null,map__45921_45973__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_45971);

cljs.core.println.call(null," ",arglists_45975);

if(cljs.core.truth_(doc_45974)){
cljs.core.println.call(null," ",doc_45974);
} else {
}

var G__45976 = cljs.core.next.call(null,seq__45909_45964__$1);
var G__45977 = null;
var G__45978 = (0);
var G__45979 = (0);
seq__45909_45949 = G__45976;
chunk__45910_45950 = G__45977;
count__45911_45951 = G__45978;
i__45912_45952 = G__45979;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5278__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5278__auto__)){
var fnspec = temp__5278__auto__;
cljs.core.print.call(null,"Spec");

var seq__45923 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__45924 = null;
var count__45925 = (0);
var i__45926 = (0);
while(true){
if((i__45926 < count__45925)){
var role = cljs.core._nth.call(null,chunk__45924,i__45926);
var temp__5278__auto___45980__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___45980__$1)){
var spec_45981 = temp__5278__auto___45980__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_45981));
} else {
}

var G__45982 = seq__45923;
var G__45983 = chunk__45924;
var G__45984 = count__45925;
var G__45985 = (i__45926 + (1));
seq__45923 = G__45982;
chunk__45924 = G__45983;
count__45925 = G__45984;
i__45926 = G__45985;
continue;
} else {
var temp__5278__auto____$1 = cljs.core.seq.call(null,seq__45923);
if(temp__5278__auto____$1){
var seq__45923__$1 = temp__5278__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45923__$1)){
var c__30979__auto__ = cljs.core.chunk_first.call(null,seq__45923__$1);
var G__45986 = cljs.core.chunk_rest.call(null,seq__45923__$1);
var G__45987 = c__30979__auto__;
var G__45988 = cljs.core.count.call(null,c__30979__auto__);
var G__45989 = (0);
seq__45923 = G__45986;
chunk__45924 = G__45987;
count__45925 = G__45988;
i__45926 = G__45989;
continue;
} else {
var role = cljs.core.first.call(null,seq__45923__$1);
var temp__5278__auto___45990__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___45990__$2)){
var spec_45991 = temp__5278__auto___45990__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_45991));
} else {
}

var G__45992 = cljs.core.next.call(null,seq__45923__$1);
var G__45993 = null;
var G__45994 = (0);
var G__45995 = (0);
seq__45923 = G__45992;
chunk__45924 = G__45993;
count__45925 = G__45994;
i__45926 = G__45995;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1510655894561
