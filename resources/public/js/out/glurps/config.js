// Compiled by ClojureScript 1.10.238 {}
goog.provide('glurps.config');
goog.require('cljs.core');
goog.require('glurps.config.config_edn');
glurps.config.getconf = (function glurps$config$getconf(key){
var conf = glurps.config.config_edn.data;
return cljs.core.keyword.call(null,key).call(null,conf);
});

//# sourceMappingURL=config.js.map?rel=1529089809313
