// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__26749){
var map__26750 = p__26749;
var map__26750__$1 = ((((!((map__26750 == null)))?(((((map__26750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26750.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26750):map__26750);
var m = map__26750__$1;
var n = cljs.core.get.call(null,map__26750__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__26750__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
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
var seq__26752_26774 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26753_26775 = null;
var count__26754_26776 = (0);
var i__26755_26777 = (0);
while(true){
if((i__26755_26777 < count__26754_26776)){
var f_26778 = cljs.core._nth.call(null,chunk__26753_26775,i__26755_26777);
cljs.core.println.call(null,"  ",f_26778);


var G__26779 = seq__26752_26774;
var G__26780 = chunk__26753_26775;
var G__26781 = count__26754_26776;
var G__26782 = (i__26755_26777 + (1));
seq__26752_26774 = G__26779;
chunk__26753_26775 = G__26780;
count__26754_26776 = G__26781;
i__26755_26777 = G__26782;
continue;
} else {
var temp__5457__auto___26783 = cljs.core.seq.call(null,seq__26752_26774);
if(temp__5457__auto___26783){
var seq__26752_26784__$1 = temp__5457__auto___26783;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26752_26784__$1)){
var c__4319__auto___26785 = cljs.core.chunk_first.call(null,seq__26752_26784__$1);
var G__26786 = cljs.core.chunk_rest.call(null,seq__26752_26784__$1);
var G__26787 = c__4319__auto___26785;
var G__26788 = cljs.core.count.call(null,c__4319__auto___26785);
var G__26789 = (0);
seq__26752_26774 = G__26786;
chunk__26753_26775 = G__26787;
count__26754_26776 = G__26788;
i__26755_26777 = G__26789;
continue;
} else {
var f_26790 = cljs.core.first.call(null,seq__26752_26784__$1);
cljs.core.println.call(null,"  ",f_26790);


var G__26791 = cljs.core.next.call(null,seq__26752_26784__$1);
var G__26792 = null;
var G__26793 = (0);
var G__26794 = (0);
seq__26752_26774 = G__26791;
chunk__26753_26775 = G__26792;
count__26754_26776 = G__26793;
i__26755_26777 = G__26794;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_26795 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_26795);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_26795)))?cljs.core.second.call(null,arglists_26795):arglists_26795));
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
var seq__26756_26796 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26757_26797 = null;
var count__26758_26798 = (0);
var i__26759_26799 = (0);
while(true){
if((i__26759_26799 < count__26758_26798)){
var vec__26760_26800 = cljs.core._nth.call(null,chunk__26757_26797,i__26759_26799);
var name_26801 = cljs.core.nth.call(null,vec__26760_26800,(0),null);
var map__26763_26802 = cljs.core.nth.call(null,vec__26760_26800,(1),null);
var map__26763_26803__$1 = ((((!((map__26763_26802 == null)))?(((((map__26763_26802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26763_26802.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26763_26802):map__26763_26802);
var doc_26804 = cljs.core.get.call(null,map__26763_26803__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_26805 = cljs.core.get.call(null,map__26763_26803__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_26801);

cljs.core.println.call(null," ",arglists_26805);

if(cljs.core.truth_(doc_26804)){
cljs.core.println.call(null," ",doc_26804);
} else {
}


var G__26806 = seq__26756_26796;
var G__26807 = chunk__26757_26797;
var G__26808 = count__26758_26798;
var G__26809 = (i__26759_26799 + (1));
seq__26756_26796 = G__26806;
chunk__26757_26797 = G__26807;
count__26758_26798 = G__26808;
i__26759_26799 = G__26809;
continue;
} else {
var temp__5457__auto___26810 = cljs.core.seq.call(null,seq__26756_26796);
if(temp__5457__auto___26810){
var seq__26756_26811__$1 = temp__5457__auto___26810;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26756_26811__$1)){
var c__4319__auto___26812 = cljs.core.chunk_first.call(null,seq__26756_26811__$1);
var G__26813 = cljs.core.chunk_rest.call(null,seq__26756_26811__$1);
var G__26814 = c__4319__auto___26812;
var G__26815 = cljs.core.count.call(null,c__4319__auto___26812);
var G__26816 = (0);
seq__26756_26796 = G__26813;
chunk__26757_26797 = G__26814;
count__26758_26798 = G__26815;
i__26759_26799 = G__26816;
continue;
} else {
var vec__26765_26817 = cljs.core.first.call(null,seq__26756_26811__$1);
var name_26818 = cljs.core.nth.call(null,vec__26765_26817,(0),null);
var map__26768_26819 = cljs.core.nth.call(null,vec__26765_26817,(1),null);
var map__26768_26820__$1 = ((((!((map__26768_26819 == null)))?(((((map__26768_26819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26768_26819.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26768_26819):map__26768_26819);
var doc_26821 = cljs.core.get.call(null,map__26768_26820__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_26822 = cljs.core.get.call(null,map__26768_26820__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_26818);

cljs.core.println.call(null," ",arglists_26822);

if(cljs.core.truth_(doc_26821)){
cljs.core.println.call(null," ",doc_26821);
} else {
}


var G__26823 = cljs.core.next.call(null,seq__26756_26811__$1);
var G__26824 = null;
var G__26825 = (0);
var G__26826 = (0);
seq__26756_26796 = G__26823;
chunk__26757_26797 = G__26824;
count__26758_26798 = G__26825;
i__26759_26799 = G__26826;
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
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__26770 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__26771 = null;
var count__26772 = (0);
var i__26773 = (0);
while(true){
if((i__26773 < count__26772)){
var role = cljs.core._nth.call(null,chunk__26771,i__26773);
var temp__5457__auto___26827__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___26827__$1)){
var spec_26828 = temp__5457__auto___26827__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_26828));
} else {
}


var G__26829 = seq__26770;
var G__26830 = chunk__26771;
var G__26831 = count__26772;
var G__26832 = (i__26773 + (1));
seq__26770 = G__26829;
chunk__26771 = G__26830;
count__26772 = G__26831;
i__26773 = G__26832;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__26770);
if(temp__5457__auto____$1){
var seq__26770__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26770__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__26770__$1);
var G__26833 = cljs.core.chunk_rest.call(null,seq__26770__$1);
var G__26834 = c__4319__auto__;
var G__26835 = cljs.core.count.call(null,c__4319__auto__);
var G__26836 = (0);
seq__26770 = G__26833;
chunk__26771 = G__26834;
count__26772 = G__26835;
i__26773 = G__26836;
continue;
} else {
var role = cljs.core.first.call(null,seq__26770__$1);
var temp__5457__auto___26837__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___26837__$2)){
var spec_26838 = temp__5457__auto___26837__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_26838));
} else {
}


var G__26839 = cljs.core.next.call(null,seq__26770__$1);
var G__26840 = null;
var G__26841 = (0);
var G__26842 = (0);
seq__26770 = G__26839;
chunk__26771 = G__26840;
count__26772 = G__26841;
i__26773 = G__26842;
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

//# sourceMappingURL=repl.js.map?rel=1529089811399
