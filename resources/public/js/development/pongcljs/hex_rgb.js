// Compiled by ClojureScript 1.10.439 {}
goog.provide('pongcljs.hex_rgb');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('pongcljs.hex_rgb_conversion');
pongcljs.hex_rgb.opaque = (255);
/**
 * helper function to call a quil function. All the calling functions needed to transform hex to rgb, therefore we can do it all in one go here.
 * A lot of quil color functions follow the pattern of (Function Red Green Blue Alpha)
 */
pongcljs.hex_rgb.call = (function pongcljs$hex_rgb$call(f,s,alpha){
var vec__26947 = pongcljs.hex_rgb_conversion.hex__GT_rgb.call(null,s);
var r = cljs.core.nth.call(null,vec__26947,(0),null);
var g = cljs.core.nth.call(null,vec__26947,(1),null);
var b = cljs.core.nth.call(null,vec__26947,(2),null);
return f.call(null,r,g,b,alpha);
});
/**
 * Set css hex color to fill shapes. Same as http://quil.info/api/color/setting#fill, but using hex.
 */
pongcljs.hex_rgb.fill = (function pongcljs$hex_rgb$fill(var_args){
var G__26951 = arguments.length;
switch (G__26951) {
case 1:
return pongcljs.hex_rgb.fill.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return pongcljs.hex_rgb.fill.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

pongcljs.hex_rgb.fill.cljs$core$IFn$_invoke$arity$1 = (function (s){
return pongcljs.hex_rgb.fill.call(null,s,pongcljs.hex_rgb.opaque);
});

pongcljs.hex_rgb.fill.cljs$core$IFn$_invoke$arity$2 = (function (s,alpha){
return pongcljs.hex_rgb.call.call(null,quil.core.fill,s,alpha);
});

pongcljs.hex_rgb.fill.cljs$lang$maxFixedArity = 2;

/**
 * Set css hex color to stroke. Same as http://quil.info/api/color/setting#stroke, but using hex.
 */
pongcljs.hex_rgb.stroke = (function pongcljs$hex_rgb$stroke(var_args){
var G__26954 = arguments.length;
switch (G__26954) {
case 1:
return pongcljs.hex_rgb.stroke.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return pongcljs.hex_rgb.stroke.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

pongcljs.hex_rgb.stroke.cljs$core$IFn$_invoke$arity$1 = (function (s){
return pongcljs.hex_rgb.stroke.call(null,s,pongcljs.hex_rgb.opaque);
});

pongcljs.hex_rgb.stroke.cljs$core$IFn$_invoke$arity$2 = (function (s,alpha){
return pongcljs.hex_rgb.call.call(null,quil.core.stroke,s,alpha);
});

pongcljs.hex_rgb.stroke.cljs$lang$maxFixedArity = 2;

/**
 * Set css hex color to the background. Same as http://quil.info/api/color/setting#background but using hex.
 */
pongcljs.hex_rgb.background = (function pongcljs$hex_rgb$background(var_args){
var G__26957 = arguments.length;
switch (G__26957) {
case 1:
return pongcljs.hex_rgb.background.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return pongcljs.hex_rgb.background.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

pongcljs.hex_rgb.background.cljs$core$IFn$_invoke$arity$1 = (function (s){
return pongcljs.hex_rgb.background.call(null,s,pongcljs.hex_rgb.opaque);
});

pongcljs.hex_rgb.background.cljs$core$IFn$_invoke$arity$2 = (function (s,alpha){
return pongcljs.hex_rgb.call.call(null,quil.core.background,s,alpha);
});

pongcljs.hex_rgb.background.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=hex_rgb.js.map?rel=1553582016790
