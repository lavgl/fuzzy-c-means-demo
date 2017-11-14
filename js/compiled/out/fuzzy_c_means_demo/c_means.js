// Compiled by ClojureScript 1.9.908 {}
goog.provide('fuzzy_c_means_demo.c_means');
goog.require('cljs.core');
fuzzy_c_means_demo.c_means.d = (function fuzzy_c_means_demo$c_means$d(c,x){
return Math.sqrt((Math.pow((cljs.core.first.call(null,x) - cljs.core.first.call(null,c)),(2)) + Math.pow((cljs.core.second.call(null,x) - cljs.core.second.call(null,c)),(2))));
});
fuzzy_c_means_demo.c_means.indexed = (function fuzzy_c_means_demo$c_means$indexed(coll){
return cljs.core.map_indexed.call(null,cljs.core.vector,coll);
});
fuzzy_c_means_demo.c_means.mmap = (function fuzzy_c_means_demo$c_means$mmap(cb,matrix){
return cljs.core.map_indexed.call(null,(function (i,row){
return cljs.core.map_indexed.call(null,(function (j,elem){
return cb.call(null,elem,i,j,matrix);
}),row);
}),matrix);
});
fuzzy_c_means_demo.c_means.mmax = (function fuzzy_c_means_demo$c_means$mmax(matrix){
return cljs.core.apply.call(null,cljs.core.max,cljs.core.flatten.call(null,matrix));
});
fuzzy_c_means_demo.c_means.msub = (function fuzzy_c_means_demo$c_means$msub(m1,m2){
return fuzzy_c_means_demo.c_means.mmap.call(null,(function (p1__32815_SHARP_,p2__32816_SHARP_,p3__32817_SHARP_){
return (p1__32815_SHARP_ - cljs.core.get_in.call(null,m2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p2__32816_SHARP_,p3__32817_SHARP_], null)));
}),m1);
});
fuzzy_c_means_demo.c_means.normalize_by_sum = (function fuzzy_c_means_demo$c_means$normalize_by_sum(coll){
var sum = cljs.core.apply.call(null,cljs.core._PLUS_,coll);
return cljs.core.map.call(null,((function (sum){
return (function (p1__32818_SHARP_){
return (p1__32818_SHARP_ / sum);
});})(sum))
,coll);
});
fuzzy_c_means_demo.c_means.generateU0 = (function fuzzy_c_means_demo$c_means$generateU0(points_number,clusters_number){
var make_row = (function fuzzy_c_means_demo$c_means$generateU0_$_make_row(){
return cljs.core.vec.call(null,fuzzy_c_means_demo.c_means.normalize_by_sum.call(null,cljs.core.repeatedly.call(null,clusters_number,(function (){
return cljs.core.rand.call(null);
}))));
});
return cljs.core.vec.call(null,cljs.core.repeatedly.call(null,points_number,make_row));
});
fuzzy_c_means_demo.c_means.calculate_center_dimension = (function fuzzy_c_means_demo$c_means$calculate_center_dimension(m,cluster_index,matrix_u,dimension_values){
var numerator_reducer = (function fuzzy_c_means_demo$c_means$calculate_center_dimension_$_numerator_reducer(sum,p__32827){
var vec__32828 = p__32827;
var index = cljs.core.nth.call(null,vec__32828,(0),null);
var value = cljs.core.nth.call(null,vec__32828,(1),null);
var u = cljs.core.get_in.call(null,matrix_u,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,cluster_index], null));
return (sum + (value * Math.pow(u,m)));
});
var denumerator_reducer = (function fuzzy_c_means_demo$c_means$calculate_center_dimension_$_denumerator_reducer(sum,p__32831){
var vec__32832 = p__32831;
var index = cljs.core.nth.call(null,vec__32832,(0),null);
var u = cljs.core.get_in.call(null,matrix_u,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,cluster_index], null));
return (sum + Math.pow(u,m));
});
var indexed_coll = fuzzy_c_means_demo.c_means.indexed.call(null,dimension_values);
var numerator = cljs.core.reduce.call(null,numerator_reducer,(0),indexed_coll);
var denumerator = cljs.core.reduce.call(null,denumerator_reducer,(0),indexed_coll);
return (numerator / denumerator);
});
fuzzy_c_means_demo.c_means.calculate_centers = (function fuzzy_c_means_demo$c_means$calculate_centers(m,matrix_u,points){
var clusters_number = cljs.core.count.call(null,cljs.core.first.call(null,matrix_u));
var dimension_getters = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first,cljs.core.second], null);
var make_inner_map_fn = ((function (clusters_number,dimension_getters){
return (function fuzzy_c_means_demo$c_means$calculate_centers_$_make_inner_map_fn(cluster_index){
return ((function (clusters_number,dimension_getters){
return (function (dimension){
return fuzzy_c_means_demo.c_means.calculate_center_dimension.call(null,m,cluster_index,matrix_u,cljs.core.map.call(null,dimension,points));
});
;})(clusters_number,dimension_getters))
});})(clusters_number,dimension_getters))
;
var outer_map_fn = ((function (clusters_number,dimension_getters){
return (function fuzzy_c_means_demo$c_means$calculate_centers_$_outer_map_fn(i){
return cljs.core.vec.call(null,cljs.core.map.call(null,make_inner_map_fn.call(null,i),dimension_getters));
});})(clusters_number,dimension_getters))
;
return cljs.core.vec.call(null,cljs.core.map.call(null,outer_map_fn,cljs.core.range.call(null,clusters_number)));
});
fuzzy_c_means_demo.c_means.calculate_u_datum = (function fuzzy_c_means_demo$c_means$calculate_u_datum(m,centers,point,center_index){
var denumerator_reducer = (function fuzzy_c_means_demo$c_means$calculate_u_datum_$_denumerator_reducer(sum,center){
return (sum + Math.pow((fuzzy_c_means_demo.c_means.d.call(null,cljs.core.get.call(null,centers,center_index),point) / fuzzy_c_means_demo.c_means.d.call(null,center,point)),((2) / (m - (1)))));
});
return ((1) / cljs.core.reduce.call(null,denumerator_reducer,(0),centers));
});
fuzzy_c_means_demo.c_means.calculate_u_matrix = (function fuzzy_c_means_demo$c_means$calculate_u_matrix(m,centers,points){
var make_centers_mapper = (function fuzzy_c_means_demo$c_means$calculate_u_matrix_$_make_centers_mapper(point){
return (function (center_index){
return fuzzy_c_means_demo.c_means.calculate_u_datum.call(null,m,centers,point,center_index);
});
});
var point_mapper = (function fuzzy_c_means_demo$c_means$calculate_u_matrix_$_point_mapper(point){
return cljs.core.vec.call(null,cljs.core.map_indexed.call(null,make_centers_mapper.call(null,point),centers));
});
return cljs.core.vec.call(null,cljs.core.map.call(null,point_mapper,points));
});
fuzzy_c_means_demo.c_means.append_history = (function fuzzy_c_means_demo$c_means$append_history(centers,U,history){
return cljs.core.conj.call(null,history,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"u","u",-1156634785),new cljs.core.Keyword(null,"centers","centers",-1028023766)],[U,centers]));
});
fuzzy_c_means_demo.c_means.continue_QMARK_ = (function fuzzy_c_means_demo$c_means$continue_QMARK_(e,history){
if((cljs.core.count.call(null,history) < (2))){
return true;
} else {
var last_U = new cljs.core.Keyword(null,"u","u",-1156634785).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,history));
var llast_U = new cljs.core.Keyword(null,"u","u",-1156634785).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,cljs.core.butlast.call(null,history)));
var max_diff = Math.abs(fuzzy_c_means_demo.c_means.mmax.call(null,fuzzy_c_means_demo.c_means.msub.call(null,last_U,llast_U)));
return (max_diff > e);
}
});
fuzzy_c_means_demo.c_means.calculate = (function fuzzy_c_means_demo$c_means$calculate(p__32835,points){
var map__32836 = p__32835;
var map__32836__$1 = ((((!((map__32836 == null)))?((((map__32836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32836.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32836):map__32836);
var clusters_number = cljs.core.get.call(null,map__32836__$1,new cljs.core.Keyword(null,"clusters-number","clusters-number",-1025077435));
var e = cljs.core.get.call(null,map__32836__$1,new cljs.core.Keyword(null,"e","e",1381269198));
var m = cljs.core.get.call(null,map__32836__$1,new cljs.core.Keyword(null,"m","m",1632677161));
var centers = cljs.core.PersistentVector.EMPTY;
var matrix_u = fuzzy_c_means_demo.c_means.generateU0.call(null,cljs.core.count.call(null,points),clusters_number);
var history = fuzzy_c_means_demo.c_means.append_history.call(null,centers,matrix_u,cljs.core.PersistentVector.EMPTY);
while(true){
if(cljs.core.not.call(null,fuzzy_c_means_demo.c_means.continue_QMARK_.call(null,e,history))){
return history;
} else {
var centers__$1 = fuzzy_c_means_demo.c_means.calculate_centers.call(null,m,matrix_u,points);
var matrix_u__$1 = fuzzy_c_means_demo.c_means.calculate_u_matrix.call(null,m,centers__$1,points);
var G__32838 = centers__$1;
var G__32839 = matrix_u__$1;
var G__32840 = fuzzy_c_means_demo.c_means.append_history.call(null,centers__$1,matrix_u__$1,history);
centers = G__32838;
matrix_u = G__32839;
history = G__32840;
continue;
}
break;
}
});

//# sourceMappingURL=c_means.js.map?rel=1510655879212
