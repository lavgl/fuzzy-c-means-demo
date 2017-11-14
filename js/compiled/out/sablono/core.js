// Compiled by ClojureScript 1.9.908 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__33733__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__33730 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__33731 = cljs.core.seq.call(null,vec__33730);
var first__33732 = cljs.core.first.call(null,seq__33731);
var seq__33731__$1 = cljs.core.next.call(null,seq__33731);
var tag = first__33732;
var body = seq__33731__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__33733 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33734__i = 0, G__33734__a = new Array(arguments.length -  0);
while (G__33734__i < G__33734__a.length) {G__33734__a[G__33734__i] = arguments[G__33734__i + 0]; ++G__33734__i;}
  args = new cljs.core.IndexedSeq(G__33734__a,0,null);
} 
return G__33733__delegate.call(this,args);};
G__33733.cljs$lang$maxFixedArity = 0;
G__33733.cljs$lang$applyTo = (function (arglist__33735){
var args = cljs.core.seq(arglist__33735);
return G__33733__delegate(args);
});
G__33733.cljs$core$IFn$_invoke$arity$variadic = G__33733__delegate;
return G__33733;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__30930__auto__ = (function sablono$core$update_arglists_$_iter__33736(s__33737){
return (new cljs.core.LazySeq(null,(function (){
var s__33737__$1 = s__33737;
while(true){
var temp__5278__auto__ = cljs.core.seq.call(null,s__33737__$1);
if(temp__5278__auto__){
var s__33737__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33737__$2)){
var c__30928__auto__ = cljs.core.chunk_first.call(null,s__33737__$2);
var size__30929__auto__ = cljs.core.count.call(null,c__30928__auto__);
var b__33739 = cljs.core.chunk_buffer.call(null,size__30929__auto__);
if((function (){var i__33738 = (0);
while(true){
if((i__33738 < size__30929__auto__)){
var args = cljs.core._nth.call(null,c__30928__auto__,i__33738);
cljs.core.chunk_append.call(null,b__33739,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__33740 = (i__33738 + (1));
i__33738 = G__33740;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33739),sablono$core$update_arglists_$_iter__33736.call(null,cljs.core.chunk_rest.call(null,s__33737__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33739),null);
}
} else {
var args = cljs.core.first.call(null,s__33737__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__33736.call(null,cljs.core.rest.call(null,s__33737__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__30930__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__31332__auto__ = [];
var len__31325__auto___33746 = arguments.length;
var i__31326__auto___33747 = (0);
while(true){
if((i__31326__auto___33747 < len__31325__auto___33746)){
args__31332__auto__.push((arguments[i__31326__auto___33747]));

var G__33748 = (i__31326__auto___33747 + (1));
i__31326__auto___33747 = G__33748;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((0) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__31333__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__30930__auto__ = (function sablono$core$iter__33742(s__33743){
return (new cljs.core.LazySeq(null,(function (){
var s__33743__$1 = s__33743;
while(true){
var temp__5278__auto__ = cljs.core.seq.call(null,s__33743__$1);
if(temp__5278__auto__){
var s__33743__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33743__$2)){
var c__30928__auto__ = cljs.core.chunk_first.call(null,s__33743__$2);
var size__30929__auto__ = cljs.core.count.call(null,c__30928__auto__);
var b__33745 = cljs.core.chunk_buffer.call(null,size__30929__auto__);
if((function (){var i__33744 = (0);
while(true){
if((i__33744 < size__30929__auto__)){
var style = cljs.core._nth.call(null,c__30928__auto__,i__33744);
cljs.core.chunk_append.call(null,b__33745,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__33749 = (i__33744 + (1));
i__33744 = G__33749;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33745),sablono$core$iter__33742.call(null,cljs.core.chunk_rest.call(null,s__33743__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33745),null);
}
} else {
var style = cljs.core.first.call(null,s__33743__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__33742.call(null,cljs.core.rest.call(null,s__33743__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__30930__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq33741){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33741));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to33750 = (function sablono$core$link_to33750(var_args){
var args__31332__auto__ = [];
var len__31325__auto___33753 = arguments.length;
var i__31326__auto___33754 = (0);
while(true){
if((i__31326__auto___33754 < len__31325__auto___33753)){
args__31332__auto__.push((arguments[i__31326__auto___33754]));

var G__33755 = (i__31326__auto___33754 + (1));
i__31326__auto___33754 = G__33755;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((1) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to33750.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31333__auto__);
});

sablono.core.link_to33750.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to33750.cljs$lang$maxFixedArity = (1);

sablono.core.link_to33750.cljs$lang$applyTo = (function (seq33751){
var G__33752 = cljs.core.first.call(null,seq33751);
var seq33751__$1 = cljs.core.next.call(null,seq33751);
return sablono.core.link_to33750.cljs$core$IFn$_invoke$arity$variadic(G__33752,seq33751__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to33750);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to33756 = (function sablono$core$mail_to33756(var_args){
var args__31332__auto__ = [];
var len__31325__auto___33763 = arguments.length;
var i__31326__auto___33764 = (0);
while(true){
if((i__31326__auto___33764 < len__31325__auto___33763)){
args__31332__auto__.push((arguments[i__31326__auto___33764]));

var G__33765 = (i__31326__auto___33764 + (1));
i__31326__auto___33764 = G__33765;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((1) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to33756.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31333__auto__);
});

sablono.core.mail_to33756.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__33759){
var vec__33760 = p__33759;
var content = cljs.core.nth.call(null,vec__33760,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__30048__auto__ = content;
if(cljs.core.truth_(or__30048__auto__)){
return or__30048__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to33756.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to33756.cljs$lang$applyTo = (function (seq33757){
var G__33758 = cljs.core.first.call(null,seq33757);
var seq33757__$1 = cljs.core.next.call(null,seq33757);
return sablono.core.mail_to33756.cljs$core$IFn$_invoke$arity$variadic(G__33758,seq33757__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to33756);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list33766 = (function sablono$core$unordered_list33766(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__30930__auto__ = (function sablono$core$unordered_list33766_$_iter__33767(s__33768){
return (new cljs.core.LazySeq(null,(function (){
var s__33768__$1 = s__33768;
while(true){
var temp__5278__auto__ = cljs.core.seq.call(null,s__33768__$1);
if(temp__5278__auto__){
var s__33768__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33768__$2)){
var c__30928__auto__ = cljs.core.chunk_first.call(null,s__33768__$2);
var size__30929__auto__ = cljs.core.count.call(null,c__30928__auto__);
var b__33770 = cljs.core.chunk_buffer.call(null,size__30929__auto__);
if((function (){var i__33769 = (0);
while(true){
if((i__33769 < size__30929__auto__)){
var x = cljs.core._nth.call(null,c__30928__auto__,i__33769);
cljs.core.chunk_append.call(null,b__33770,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__33771 = (i__33769 + (1));
i__33769 = G__33771;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33770),sablono$core$unordered_list33766_$_iter__33767.call(null,cljs.core.chunk_rest.call(null,s__33768__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33770),null);
}
} else {
var x = cljs.core.first.call(null,s__33768__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list33766_$_iter__33767.call(null,cljs.core.rest.call(null,s__33768__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__30930__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list33766);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list33772 = (function sablono$core$ordered_list33772(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__30930__auto__ = (function sablono$core$ordered_list33772_$_iter__33773(s__33774){
return (new cljs.core.LazySeq(null,(function (){
var s__33774__$1 = s__33774;
while(true){
var temp__5278__auto__ = cljs.core.seq.call(null,s__33774__$1);
if(temp__5278__auto__){
var s__33774__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33774__$2)){
var c__30928__auto__ = cljs.core.chunk_first.call(null,s__33774__$2);
var size__30929__auto__ = cljs.core.count.call(null,c__30928__auto__);
var b__33776 = cljs.core.chunk_buffer.call(null,size__30929__auto__);
if((function (){var i__33775 = (0);
while(true){
if((i__33775 < size__30929__auto__)){
var x = cljs.core._nth.call(null,c__30928__auto__,i__33775);
cljs.core.chunk_append.call(null,b__33776,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__33777 = (i__33775 + (1));
i__33775 = G__33777;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33776),sablono$core$ordered_list33772_$_iter__33773.call(null,cljs.core.chunk_rest.call(null,s__33774__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33776),null);
}
} else {
var x = cljs.core.first.call(null,s__33774__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list33772_$_iter__33773.call(null,cljs.core.rest.call(null,s__33774__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__30930__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list33772);
/**
 * Create an image element.
 */
sablono.core.image33778 = (function sablono$core$image33778(var_args){
var G__33780 = arguments.length;
switch (G__33780) {
case 1:
return sablono.core.image33778.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image33778.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image33778.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image33778.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image33778.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image33778);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__33782_SHARP_,p2__33783_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__33782_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__33783_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__33784_SHARP_,p2__33785_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__33784_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__33785_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__30048__auto__ = value;
if(cljs.core.truth_(or__30048__auto__)){
return or__30048__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field33786 = (function sablono$core$color_field33786(var_args){
var G__33788 = arguments.length;
switch (G__33788) {
case 1:
return sablono.core.color_field33786.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field33786.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field33786.cljs$core$IFn$_invoke$arity$1 = (function (name__33720__auto__){
return sablono.core.color_field33786.call(null,name__33720__auto__,null);
});

sablono.core.color_field33786.cljs$core$IFn$_invoke$arity$2 = (function (name__33720__auto__,value__33721__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__33720__auto__,value__33721__auto__);
});

sablono.core.color_field33786.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field33786);

/**
 * Creates a date input field.
 */
sablono.core.date_field33789 = (function sablono$core$date_field33789(var_args){
var G__33791 = arguments.length;
switch (G__33791) {
case 1:
return sablono.core.date_field33789.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field33789.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field33789.cljs$core$IFn$_invoke$arity$1 = (function (name__33720__auto__){
return sablono.core.date_field33789.call(null,name__33720__auto__,null);
});

sablono.core.date_field33789.cljs$core$IFn$_invoke$arity$2 = (function (name__33720__auto__,value__33721__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__33720__auto__,value__33721__auto__);
});

sablono.core.date_field33789.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field33789);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field33792 = (function sablono$core$datetime_field33792(var_args){
var G__33794 = arguments.length;
switch (G__33794) {
case 1:
return sablono.core.datetime_field33792.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field33792.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field33792.cljs$core$IFn$_invoke$arity$1 = (function (name__33720__auto__){
return sablono.core.datetime_field33792.call(null,name__33720__auto__,null);
});

sablono.core.datetime_field33792.cljs$core$IFn$_invoke$arity$2 = (function (name__33720__auto__,value__33721__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__33720__auto__,value__33721__auto__);
});

sablono.core.datetime_field33792.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field33792);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field33795 = (function sablono$core$datetime_local_field33795(var_args){
var G__33797 = arguments.length;
switch (G__33797) {
case 1:
return sablono.core.datetime_local_field33795.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field33795.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field33795.cljs$core$IFn$_invoke$arity$1 = (function (name__33720__auto__){
return sablono.core.datetime_local_field33795.call(null,name__33720__auto__,null);
});

sablono.core.datetime_local_field33795.cljs$core$IFn$_invoke$arity$2 = (function (name__33720__auto__,value__33721__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__33720__auto__,value__33721__auto__);
});

sablono.core.datetime_local_field33795.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field33795);

/**
 * Creates a email input field.
 */
sablono.core.email_field33798 = (function sablono$core$email_field33798(var_args){
var G__33800 = arguments.length;
switch (G__33800) {
case 1:
return sablono.core.email_field33798.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field33798.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field33798.cljs$core$IFn$_invoke$arity$1 = (function (name__33720__auto__){
return sablono.core.email_field33798.call(null,name__33720__auto__,null);
});

sablono.core.email_field33798.cljs$core$IFn$_invoke$arity$2 = (function (name__33720__auto__,value__33721__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__33720__auto__,value__33721__auto__);
});

sablono.core.email_field33798.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field33798);

/**
 * Creates a file input field.
 */
sablono.core.file_field33801 = (function sablono$core$file_field33801(var_args){
var G__33803 = arguments.length;
switch (G__33803) {
case 1:
return sablono.core.file_field33801.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field33801.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field33801.cljs$core$IFn$_invoke$arity$1 = (function (name__33720__auto__){
return sablono.core.file_field33801.call(null,name__33720__auto__,null);
});

sablono.core.file_field33801.cljs$core$IFn$_invoke$arity$2 = (function (name__33720__auto__,value__33721__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__33720__auto__,value__33721__auto__);
});

sablono.core.file_field33801.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field33801);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field33804 = (function sablono$core$hidden_field33804(var_args){
var G__33806 = arguments.length;
switch (G__33806) {
case 1:
return sablono.core.hidden_field33804.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field33804.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field33804.cljs$core$IFn$_invoke$arity$1 = (function (name__33720__auto__){
return sablono.core.hidden_field33804.call(null,name__33720__auto__,null);
});

sablono.core.hidden_field33804.cljs$core$IFn$_invoke$arity$2 = (function (name__33720__auto__,value__33721__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__33720__auto__,value__33721__auto__);
});

sablono.core.hidden_field33804.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field33804);

/**
 * Creates a month input field.
 */
sablono.core.month_field33807 = (function sablono$core$month_field33807(var_args){
var G__33809 = arguments.length;
switch (G__33809) {
case 1:
return sablono.core.month_field33807.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field33807.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field33807.cljs$core$IFn$_invoke$arity$1 = (function (name__33720__auto__){
return sablono.core.month_field33807.call(null,name__33720__auto__,null);
});

sablono.core.month_field33807.cljs$core$IFn$_invoke$arity$2 = (function (name__33720__auto__,value__33721__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__33720__auto__,value__33721__auto__);
});

sablono.core.month_field33807.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field33807);

/**
 * Creates a number input field.
 */
sablono.core.number_field33810 = (function sablono$core$number_field33810(var_args){
var G__33812 = arguments.length;
switch (G__33812) {
case 1:
return sablono.core.number_field33810.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field33810.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field33810.cljs$core$IFn$_invoke$arity$1 = (function (name__33720__auto__){
return sablono.core.number_field33810.call(null,name__33720__auto__,null);
});

sablono.core.number_field33810.cljs$core$IFn$_invoke$arity$2 = (function (name__33720__auto__,value__33721__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__33720__auto__,value__33721__auto__);
});

sablono.core.number_field33810.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field33810);

/**
 * Creates a password input field.
 */
sablono.core.password_field33813 = (function sablono$core$password_field33813(var_args){
var G__33815 = arguments.length;
switch (G__33815) {
case 1:
return sablono.core.password_field33813.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field33813.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field33813.cljs$core$IFn$_invoke$arity$1 = (function (name__33720__auto__){
return sablono.core.password_field33813.call(null,name__33720__auto__,null);
});

sablono.core.password_field33813.cljs$core$IFn$_invoke$arity$2 = (function (name__33720__auto__,value__33721__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__33720__auto__,value__33721__auto__);
});

sablono.core.password_field33813.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field33813);

/**
 * Creates a range input field.
 */
sablono.core.range_field33816 = (function sablono$core$range_field33816(var_args){
var G__33818 = arguments.length;
switch (G__33818) {
case 1:
return sablono.core.range_field33816.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field33816.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field33816.cljs$core$IFn$_invoke$arity$1 = (function (name__33720__auto__){
return sablono.core.range_field33816.call(null,name__33720__auto__,null);
});

sablono.core.range_field33816.cljs$core$IFn$_invoke$arity$2 = (function (name__33720__auto__,value__33721__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__33720__auto__,value__33721__auto__);
});

sablono.core.range_field33816.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field33816);

/**
 * Creates a search input field.
 */
sablono.core.search_field33819 = (function sablono$core$search_field33819(var_args){
var G__33821 = arguments.length;
switch (G__33821) {
case 1:
return sablono.core.search_field33819.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field33819.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field33819.cljs$core$IFn$_invoke$arity$1 = (function (name__33720__auto__){
return sablono.core.search_field33819.call(null,name__33720__auto__,null);
});

sablono.core.search_field33819.cljs$core$IFn$_invoke$arity$2 = (function (name__33720__auto__,value__33721__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__33720__auto__,value__33721__auto__);
});

sablono.core.search_field33819.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field33819);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field33822 = (function sablono$core$tel_field33822(var_args){
var G__33824 = arguments.length;
switch (G__33824) {
case 1:
return sablono.core.tel_field33822.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field33822.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field33822.cljs$core$IFn$_invoke$arity$1 = (function (name__33720__auto__){
return sablono.core.tel_field33822.call(null,name__33720__auto__,null);
});

sablono.core.tel_field33822.cljs$core$IFn$_invoke$arity$2 = (function (name__33720__auto__,value__33721__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__33720__auto__,value__33721__auto__);
});

sablono.core.tel_field33822.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field33822);

/**
 * Creates a text input field.
 */
sablono.core.text_field33825 = (function sablono$core$text_field33825(var_args){
var G__33827 = arguments.length;
switch (G__33827) {
case 1:
return sablono.core.text_field33825.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field33825.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field33825.cljs$core$IFn$_invoke$arity$1 = (function (name__33720__auto__){
return sablono.core.text_field33825.call(null,name__33720__auto__,null);
});

sablono.core.text_field33825.cljs$core$IFn$_invoke$arity$2 = (function (name__33720__auto__,value__33721__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__33720__auto__,value__33721__auto__);
});

sablono.core.text_field33825.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field33825);

/**
 * Creates a time input field.
 */
sablono.core.time_field33828 = (function sablono$core$time_field33828(var_args){
var G__33830 = arguments.length;
switch (G__33830) {
case 1:
return sablono.core.time_field33828.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field33828.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field33828.cljs$core$IFn$_invoke$arity$1 = (function (name__33720__auto__){
return sablono.core.time_field33828.call(null,name__33720__auto__,null);
});

sablono.core.time_field33828.cljs$core$IFn$_invoke$arity$2 = (function (name__33720__auto__,value__33721__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__33720__auto__,value__33721__auto__);
});

sablono.core.time_field33828.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field33828);

/**
 * Creates a url input field.
 */
sablono.core.url_field33831 = (function sablono$core$url_field33831(var_args){
var G__33833 = arguments.length;
switch (G__33833) {
case 1:
return sablono.core.url_field33831.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field33831.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field33831.cljs$core$IFn$_invoke$arity$1 = (function (name__33720__auto__){
return sablono.core.url_field33831.call(null,name__33720__auto__,null);
});

sablono.core.url_field33831.cljs$core$IFn$_invoke$arity$2 = (function (name__33720__auto__,value__33721__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__33720__auto__,value__33721__auto__);
});

sablono.core.url_field33831.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field33831);

/**
 * Creates a week input field.
 */
sablono.core.week_field33834 = (function sablono$core$week_field33834(var_args){
var G__33836 = arguments.length;
switch (G__33836) {
case 1:
return sablono.core.week_field33834.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field33834.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field33834.cljs$core$IFn$_invoke$arity$1 = (function (name__33720__auto__){
return sablono.core.week_field33834.call(null,name__33720__auto__,null);
});

sablono.core.week_field33834.cljs$core$IFn$_invoke$arity$2 = (function (name__33720__auto__,value__33721__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__33720__auto__,value__33721__auto__);
});

sablono.core.week_field33834.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field33834);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box33854 = (function sablono$core$check_box33854(var_args){
var G__33856 = arguments.length;
switch (G__33856) {
case 1:
return sablono.core.check_box33854.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box33854.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box33854.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box33854.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box33854.call(null,name,null);
});

sablono.core.check_box33854.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box33854.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box33854.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__30048__auto__ = value;
if(cljs.core.truth_(or__30048__auto__)){
return or__30048__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box33854.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box33854);
/**
 * Creates a radio button.
 */
sablono.core.radio_button33858 = (function sablono$core$radio_button33858(var_args){
var G__33860 = arguments.length;
switch (G__33860) {
case 1:
return sablono.core.radio_button33858.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button33858.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button33858.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button33858.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button33858.call(null,group,null);
});

sablono.core.radio_button33858.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button33858.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button33858.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__30048__auto__ = value;
if(cljs.core.truth_(or__30048__auto__)){
return or__30048__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button33858.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button33858);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options33862 = (function sablono$core$select_options33862(coll){
var iter__30930__auto__ = (function sablono$core$select_options33862_$_iter__33863(s__33864){
return (new cljs.core.LazySeq(null,(function (){
var s__33864__$1 = s__33864;
while(true){
var temp__5278__auto__ = cljs.core.seq.call(null,s__33864__$1);
if(temp__5278__auto__){
var s__33864__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33864__$2)){
var c__30928__auto__ = cljs.core.chunk_first.call(null,s__33864__$2);
var size__30929__auto__ = cljs.core.count.call(null,c__30928__auto__);
var b__33866 = cljs.core.chunk_buffer.call(null,size__30929__auto__);
if((function (){var i__33865 = (0);
while(true){
if((i__33865 < size__30929__auto__)){
var x = cljs.core._nth.call(null,c__30928__auto__,i__33865);
cljs.core.chunk_append.call(null,b__33866,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__33867 = x;
var text = cljs.core.nth.call(null,vec__33867,(0),null);
var val = cljs.core.nth.call(null,vec__33867,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__33867,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options33862.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__33873 = (i__33865 + (1));
i__33865 = G__33873;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33866),sablono$core$select_options33862_$_iter__33863.call(null,cljs.core.chunk_rest.call(null,s__33864__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33866),null);
}
} else {
var x = cljs.core.first.call(null,s__33864__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__33870 = x;
var text = cljs.core.nth.call(null,vec__33870,(0),null);
var val = cljs.core.nth.call(null,vec__33870,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__33870,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options33862.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options33862_$_iter__33863.call(null,cljs.core.rest.call(null,s__33864__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__30930__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options33862);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down33874 = (function sablono$core$drop_down33874(var_args){
var G__33876 = arguments.length;
switch (G__33876) {
case 2:
return sablono.core.drop_down33874.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down33874.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down33874.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down33874.call(null,name,options,null);
});

sablono.core.drop_down33874.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down33874.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down33874);
/**
 * Creates a text area element.
 */
sablono.core.text_area33878 = (function sablono$core$text_area33878(var_args){
var G__33880 = arguments.length;
switch (G__33880) {
case 1:
return sablono.core.text_area33878.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area33878.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area33878.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area33878.call(null,name,null);
});

sablono.core.text_area33878.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__30048__auto__ = value;
if(cljs.core.truth_(or__30048__auto__)){
return or__30048__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area33878.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area33878);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label33882 = (function sablono$core$label33882(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label33882);
/**
 * Creates a submit button.
 */
sablono.core.submit_button33883 = (function sablono$core$submit_button33883(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button33883);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button33884 = (function sablono$core$reset_button33884(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button33884);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to33885 = (function sablono$core$form_to33885(var_args){
var args__31332__auto__ = [];
var len__31325__auto___33892 = arguments.length;
var i__31326__auto___33893 = (0);
while(true){
if((i__31326__auto___33893 < len__31325__auto___33892)){
args__31332__auto__.push((arguments[i__31326__auto___33893]));

var G__33894 = (i__31326__auto___33893 + (1));
i__31326__auto___33893 = G__33894;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((1) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to33885.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31333__auto__);
});

sablono.core.form_to33885.cljs$core$IFn$_invoke$arity$variadic = (function (p__33888,body){
var vec__33889 = p__33888;
var method = cljs.core.nth.call(null,vec__33889,(0),null);
var action = cljs.core.nth.call(null,vec__33889,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to33885.cljs$lang$maxFixedArity = (1);

sablono.core.form_to33885.cljs$lang$applyTo = (function (seq33886){
var G__33887 = cljs.core.first.call(null,seq33886);
var seq33886__$1 = cljs.core.next.call(null,seq33886);
return sablono.core.form_to33885.cljs$core$IFn$_invoke$arity$variadic(G__33887,seq33886__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to33885);

//# sourceMappingURL=core.js.map?rel=1510655880545
