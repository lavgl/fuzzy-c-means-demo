// Compiled by ClojureScript 1.9.908 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__33107 = arguments.length;
switch (G__33107) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.call(null,refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__33108 = opts;
var map__33108__$1 = ((((!((map__33108 == null)))?((((map__33108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33108.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33108):map__33108);
var ref = cljs.core.get.call(null,map__33108__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__33108__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__33110 = cljs.core.count.call(null,refs);
switch (G__33110) {
case (1):
var vec__33111 = refs;
var a = cljs.core.nth.call(null,vec__33111,(0),null);
return ((function (vec__33111,a,G__33110,map__33108,map__33108__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});
;})(vec__33111,a,G__33110,map__33108,map__33108__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__33114 = refs;
var a = cljs.core.nth.call(null,vec__33114,(0),null);
var b = cljs.core.nth.call(null,vec__33114,(1),null);
return ((function (vec__33114,a,b,G__33110,map__33108,map__33108__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});
;})(vec__33114,a,b,G__33110,map__33108,map__33108__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__33117 = refs;
var a = cljs.core.nth.call(null,vec__33117,(0),null);
var b = cljs.core.nth.call(null,vec__33117,(1),null);
var c = cljs.core.nth.call(null,vec__33117,(2),null);
return ((function (vec__33117,a,b,c,G__33110,map__33108,map__33108__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});
;})(vec__33117,a,b,c,G__33110,map__33108,map__33108__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__33110,map__33108,map__33108__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});
;})(G__33110,map__33108,map__33108__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__33120 = ref;
cljs.core.reset_BANG_.call(null,G__33120,recalc.call(null));

return G__33120;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__33108,map__33108__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
});})(map__33108,map__33108__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__33108,map__33108__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
});})(map__33108,map__33108__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__33121_33127 = cljs.core.seq.call(null,refs);
var chunk__33122_33128 = null;
var count__33123_33129 = (0);
var i__33124_33130 = (0);
while(true){
if((i__33124_33130 < count__33123_33129)){
var ref_33131__$1 = cljs.core._nth.call(null,chunk__33122_33128,i__33124_33130);
cljs.core.add_watch.call(null,ref_33131__$1,key,watch);

var G__33132 = seq__33121_33127;
var G__33133 = chunk__33122_33128;
var G__33134 = count__33123_33129;
var G__33135 = (i__33124_33130 + (1));
seq__33121_33127 = G__33132;
chunk__33122_33128 = G__33133;
count__33123_33129 = G__33134;
i__33124_33130 = G__33135;
continue;
} else {
var temp__5278__auto___33136 = cljs.core.seq.call(null,seq__33121_33127);
if(temp__5278__auto___33136){
var seq__33121_33137__$1 = temp__5278__auto___33136;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33121_33137__$1)){
var c__30979__auto___33138 = cljs.core.chunk_first.call(null,seq__33121_33137__$1);
var G__33139 = cljs.core.chunk_rest.call(null,seq__33121_33137__$1);
var G__33140 = c__30979__auto___33138;
var G__33141 = cljs.core.count.call(null,c__30979__auto___33138);
var G__33142 = (0);
seq__33121_33127 = G__33139;
chunk__33122_33128 = G__33140;
count__33123_33129 = G__33141;
i__33124_33130 = G__33142;
continue;
} else {
var ref_33143__$1 = cljs.core.first.call(null,seq__33121_33137__$1);
cljs.core.add_watch.call(null,ref_33143__$1,key,watch);

var G__33144 = cljs.core.next.call(null,seq__33121_33137__$1);
var G__33145 = null;
var G__33146 = (0);
var G__33147 = (0);
seq__33121_33127 = G__33144;
chunk__33122_33128 = G__33145;
count__33123_33129 = G__33146;
i__33124_33130 = G__33147;
continue;
}
} else {
}
}
break;
}

return sink;
});

rum.derived_atom.derived_atom.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=derived_atom.js.map?rel=1510655880040
