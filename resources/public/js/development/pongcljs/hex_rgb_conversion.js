// Compiled by ClojureScript 1.10.439 {}
goog.provide('pongcljs.hex_rgb_conversion');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
/**
 * Turn a string in hex format into a decimal number
 */
pongcljs.hex_rgb_conversion.hex__GT_num = (function pongcljs$hex_rgb_conversion$hex__GT_num(s){
return parseInt(s,(16));
});
/**
 * Turn css hex in '#abcdef' format into RGB seq
 */
pongcljs.hex_rgb_conversion.hex__GT_rgb_long = (function pongcljs$hex_rgb_conversion$hex__GT_rgb_long(s){
return cljs.core.map.call(null,pongcljs.hex_rgb_conversion.hex__GT_num,cljs.core.map.call(null,(function (p1__21320_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,p1__21320_SHARP_);
}),cljs.core.partition.call(null,(2),cljs.core.rest.call(null,s))));
});
/**
 * Turn css hex in the shorthand form of '#abc' into RGB seq
 */
pongcljs.hex_rgb_conversion.hex__GT_rgb_short = (function pongcljs$hex_rgb_conversion$hex__GT_rgb_short(s){
return cljs.core.map.call(null,pongcljs.hex_rgb_conversion.hex__GT_num,cljs.core.map.call(null,(function (p1__21321_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,p1__21321_SHARP_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,p1__21321_SHARP_))].join('');
}),cljs.core.partition.call(null,(1),cljs.core.rest.call(null,s))));
});
/**
 * Turn css hex into RGB seq
 */
pongcljs.hex_rgb_conversion.hex__GT_rgb = (function pongcljs$hex_rgb_conversion$hex__GT_rgb(s){
var pred__21322 = cljs.core._EQ_;
var expr__21323 = cljs.core.count.call(null,s);
if(cljs.core.truth_(pred__21322.call(null,(7),expr__21323))){
return pongcljs.hex_rgb_conversion.hex__GT_rgb_long.call(null,s);
} else {
return pongcljs.hex_rgb_conversion.hex__GT_rgb_short.call(null,s);
}
});

//# sourceMappingURL=hex_rgb_conversion.js.map?rel=1553581801312
