// Compiled by ClojureScript 1.10.238 {}
goog.provide('glurps.component.form.select');
goog.require('cljs.core');
glurps.component.form.select.select_html = (function glurps$component$form$select$select_html(var_args){
var args__4502__auto__ = [];
var len__4499__auto___25682 = arguments.length;
var i__4500__auto___25683 = (0);
while(true){
if((i__4500__auto___25683 < len__4499__auto___25682)){
args__4502__auto__.push((arguments[i__4500__auto___25683]));

var G__25684 = (i__4500__auto___25683 + (1));
i__4500__auto___25683 = G__25684;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return glurps.component.form.select.select_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

glurps.component.form.select.select_html.cljs$core$IFn$_invoke$arity$variadic = (function (field_name,selected_value,options,conf){
var selected_option = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p1__25673_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__25673_SHARP_),selected_value);
}),options));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"ui selection dropdown",new cljs.core.Keyword(null,"style","style",-496642736),"min-width: 1em;"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"hidden",new cljs.core.Keyword(null,"name","name",1843675177),field_name,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(selected_option)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown icon"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text"], null),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(selected_option)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"menu",new cljs.core.Keyword(null,"style","style",-496642736),"min-width: 20em;"], null),(function (){var iter__4292__auto__ = ((function (selected_option){
return (function glurps$component$form$select$iter__25678(s__25679){
return (new cljs.core.LazySeq(null,((function (selected_option){
return (function (){
var s__25679__$1 = s__25679;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__25679__$1);
if(temp__5457__auto__){
var s__25679__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25679__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__25679__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__25681 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__25680 = (0);
while(true){
if((i__25680 < size__4291__auto__)){
var option = cljs.core._nth.call(null,c__4290__auto__,i__25680);
cljs.core.chunk_append.call(null,b__25681,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.conj.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"item",new cljs.core.Keyword(null,"data-value","data-value",-1897915206),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(option),new cljs.core.Keyword(null,"data-name","data-name",-1319407959),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(option)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(option))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onclick","onclick",1297553739),new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(option)], null):null)),(cljs.core.truth_(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(option))?new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(option):null),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(option)], null));

var G__25685 = (i__25680 + (1));
i__25680 = G__25685;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25681),glurps$component$form$select$iter__25678.call(null,cljs.core.chunk_rest.call(null,s__25679__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25681),null);
}
} else {
var option = cljs.core.first.call(null,s__25679__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.conj.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"item",new cljs.core.Keyword(null,"data-value","data-value",-1897915206),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(option),new cljs.core.Keyword(null,"data-name","data-name",-1319407959),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(option)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(option))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onclick","onclick",1297553739),new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(option)], null):null)),(cljs.core.truth_(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(option))?new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(option):null),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(option)], null),glurps$component$form$select$iter__25678.call(null,cljs.core.rest.call(null,s__25679__$2)));
}
} else {
return null;
}
break;
}
});})(selected_option))
,null,null));
});})(selected_option))
;
return iter__4292__auto__.call(null,options);
})()], null)], null);
});

glurps.component.form.select.select_html.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
glurps.component.form.select.select_html.cljs$lang$applyTo = (function (seq25674){
var G__25675 = cljs.core.first.call(null,seq25674);
var seq25674__$1 = cljs.core.next.call(null,seq25674);
var G__25676 = cljs.core.first.call(null,seq25674__$1);
var seq25674__$2 = cljs.core.next.call(null,seq25674__$1);
var G__25677 = cljs.core.first.call(null,seq25674__$2);
var seq25674__$3 = cljs.core.next.call(null,seq25674__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25675,G__25676,G__25677,seq25674__$3);
});


//# sourceMappingURL=select.js.map?rel=1529089809291
