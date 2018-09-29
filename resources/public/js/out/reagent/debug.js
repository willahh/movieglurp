// Compiled by ClojureScript 1.10.238 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__24824__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__24824 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24825__i = 0, G__24825__a = new Array(arguments.length -  0);
while (G__24825__i < G__24825__a.length) {G__24825__a[G__24825__i] = arguments[G__24825__i + 0]; ++G__24825__i;}
  args = new cljs.core.IndexedSeq(G__24825__a,0,null);
} 
return G__24824__delegate.call(this,args);};
G__24824.cljs$lang$maxFixedArity = 0;
G__24824.cljs$lang$applyTo = (function (arglist__24826){
var args = cljs.core.seq(arglist__24826);
return G__24824__delegate(args);
});
G__24824.cljs$core$IFn$_invoke$arity$variadic = G__24824__delegate;
return G__24824;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__24827__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__24827 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24828__i = 0, G__24828__a = new Array(arguments.length -  0);
while (G__24828__i < G__24828__a.length) {G__24828__a[G__24828__i] = arguments[G__24828__i + 0]; ++G__24828__i;}
  args = new cljs.core.IndexedSeq(G__24828__a,0,null);
} 
return G__24827__delegate.call(this,args);};
G__24827.cljs$lang$maxFixedArity = 0;
G__24827.cljs$lang$applyTo = (function (arglist__24829){
var args = cljs.core.seq(arglist__24829);
return G__24827__delegate(args);
});
G__24827.cljs$core$IFn$_invoke$arity$variadic = G__24827__delegate;
return G__24827;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1529089807794
