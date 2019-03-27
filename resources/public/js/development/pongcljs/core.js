// Compiled by ClojureScript 1.10.439 {}
goog.provide('pongcljs.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('pongcljs.hex_rgb');
pongcljs.core.color_palettes = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"geometric-glow","geometric-glow",1515910716),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#08F7FE","#09FBD3","#FE53BB","#F5D300"], null),new cljs.core.Keyword(null,"neon-lights","neon-lights",-1699040319),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#FFACFC","#F148FB","#7122FA","#560A86"], null),new cljs.core.Keyword(null,"psychedelic-pattern","psychedelic-pattern",-620153073),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#75D5FD","#B76CFD","#FF2281","#011FFD"], null),new cljs.core.Keyword(null,"vivid-ferns","vivid-ferns",616025766),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#FDC7D7","#FF9DE6","#A5D8F3","#E8E500"], null),new cljs.core.Keyword(null,"abstract-wall","abstract-wall",-1341975856),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#00FECA","#FDF200","#FF85EA","#7B61F8"], null),new cljs.core.Keyword(null,"colorful-cottage","colorful-cottage",119603377),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#FFD300","#DE38C8","#652EC7","#33135C"], null),new cljs.core.Keyword(null,"luminous-lines","luminous-lines",-38368017),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#01FFC3","#01FFFF","#FFB3FD","#9D72FF"], null),new cljs.core.Keyword(null,"bright-bokeh","bright-bokeh",-175500004),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#FCF340","#7FFF00","#FB33DB","#0310EA"], null)], null);
pongcljs.core.color_palette = new cljs.core.Keyword(null,"colorful-cottage","colorful-cottage",119603377).cljs$core$IFn$_invoke$arity$1(pongcljs.core.color_palettes);
pongcljs.core.color_a = cljs.core.first.call(null,pongcljs.core.color_palette);
pongcljs.core.color_b = cljs.core.second.call(null,pongcljs.core.color_palette);
pongcljs.core.color_c = cljs.core.nth.call(null,pongcljs.core.color_palette,(2));
pongcljs.core.color_d = cljs.core.last.call(null,pongcljs.core.color_palette);
pongcljs.core.update_boss = (function pongcljs$core$update_boss(state){
var w = quil.core.width.call(null);
var boss = new cljs.core.Keyword(null,"boss","boss",1863078663).cljs$core$IFn$_invoke$arity$1(state);
var boss_x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(boss);
var boss_y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(boss);
var paddle_width = new cljs.core.Keyword(null,"paddle-width","paddle-width",-372712236).cljs$core$IFn$_invoke$arity$1(state);
var boss_angle = new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(boss);
var scalar = (w * 0.2);
var speed = (20);
var x = (((quil.core.sin.call(null,(quil.core.radians.call(null,boss_angle) / (10))) * scalar) + (w / (2))) - (paddle_width / (2)));
var y = (((quil.core.sin.call(null,(quil.core.radians.call(null,boss_angle) / (2))) / 5.5) * scalar) + (110));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"paddle-width","paddle-width",-372712236),paddle_width,new cljs.core.Keyword(null,"paddle-height","paddle-height",1526614935),new cljs.core.Keyword(null,"paddle-height","paddle-height",1526614935).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"boss","boss",1863078663),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"angle","angle",1622094254),(boss_angle + speed)], null),new cljs.core.Keyword(null,"dots","dots",714343900),new cljs.core.Keyword(null,"dots","dots",714343900).cljs$core$IFn$_invoke$arity$1(state)], null);
});
pongcljs.core.update_game = (function pongcljs$core$update_game(state){
return pongcljs.core.update_boss.call(null,state);
});
pongcljs.core.mouse_x_pos = (function pongcljs$core$mouse_x_pos(){
var m = quil.core.mouse_x.call(null);
var w = quil.core.width.call(null);
if((m < (10))){
return (10);
} else {
if((m > w)){
return w;
} else {
return m;

}
}
});
pongcljs.core.mouse_y_pos = (function pongcljs$core$mouse_y_pos(){
var m = quil.core.mouse_y.call(null);
var h = quil.core.height.call(null);
var playing_area_max_height = (h * ((2) / (3)));
if((m < (10))){
return (10);
} else {
if((m > playing_area_max_height)){
return m;
} else {
return playing_area_max_height;

}
}
});
pongcljs.core.draw_ground = (function pongcljs$core$draw_ground(){
pongcljs.hex_rgb.fill.call(null,pongcljs.core.color_c);

return quil.core.rect.call(null,(0),(quil.core.height.call(null) / (6)),(quil.core.width.call(null) - (0)),(quil.core.height.call(null) - (0)));
});
pongcljs.core.draw_tennis_court = (function pongcljs$core$draw_tennis_court(){
var h = quil.core.height.call(null);
var w = quil.core.width.call(null);
var centre_x = (w / (2));
var centre_y = (h / (2));
var court_top = (h / (6));
quil.core.fill.call(null,(0));

pongcljs.hex_rgb.stroke.call(null,pongcljs.core.color_a);

quil.core.stroke_weight.call(null,(3));

quil.core.quad.call(null,(200),court_top,(650),court_top,w,h,(0),h);

quil.core.line.call(null,(172),(h / 3.5),(677),(h / 3.5));

quil.core.ellipse.call(null,centre_x,centre_y,(200),(75));

quil.core.line.call(null,(55),(h / 1.3),(794),(h / 1.3));

quil.core.stroke.call(null,(0));

return quil.core.stroke_weight.call(null,(1));
});
/**
 * The player is a pong bat, but could be a character like Mario or Space Harrier
 */
pongcljs.core.draw_player = (function pongcljs$core$draw_player(state){
pongcljs.hex_rgb.fill.call(null,pongcljs.core.color_a,(200));

var x = pongcljs.core.mouse_x_pos.call(null);
var y = pongcljs.core.mouse_y_pos.call(null);
var w = new cljs.core.Keyword(null,"paddle-width","paddle-width",-372712236).cljs$core$IFn$_invoke$arity$1(state);
var h = new cljs.core.Keyword(null,"paddle-height","paddle-height",1526614935).cljs$core$IFn$_invoke$arity$1(state);
return quil.core.rect.call(null,x,y,w,h);
});
/**
 * The opponent
 */
pongcljs.core.draw_boss = (function pongcljs$core$draw_boss(state){
pongcljs.hex_rgb.fill.call(null,pongcljs.core.color_b);

var boss = new cljs.core.Keyword(null,"boss","boss",1863078663).cljs$core$IFn$_invoke$arity$1(state);
var x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(boss);
var y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(boss);
var w = new cljs.core.Keyword(null,"paddle-width","paddle-width",-372712236).cljs$core$IFn$_invoke$arity$1(state);
var h = new cljs.core.Keyword(null,"paddle-height","paddle-height",1526614935).cljs$core$IFn$_invoke$arity$1(state);
return quil.core.rect.call(null,x,y,w,h);
});
pongcljs.core.draw_game_world = (function pongcljs$core$draw_game_world(){
pongcljs.core.draw_ground.call(null);

return pongcljs.core.draw_tennis_court.call(null);
});
pongcljs.core.draw = (function pongcljs$core$draw(state){
pongcljs.hex_rgb.background.call(null,pongcljs.core.color_d);

pongcljs.core.draw_game_world.call(null);

pongcljs.core.draw_boss.call(null,state);

return pongcljs.core.draw_player.call(null,state);
});
pongcljs.core.setup = (function pongcljs$core$setup(){
quil.core.frame_rate.call(null,(60));

quil.core.smooth.call(null);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"paddle-width","paddle-width",-372712236),(100),new cljs.core.Keyword(null,"paddle-height","paddle-height",1526614935),(30),new cljs.core.Keyword(null,"boss","boss",1863078663),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"angle","angle",1622094254),0.0,new cljs.core.Keyword(null,"flip","flip",2033871302),(4)], null),new cljs.core.Keyword(null,"dots","dots",714343900),cljs.core.List.EMPTY], null);
});
quil.core.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"pongjs",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(850),(600)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),pongcljs.core.setup,new cljs.core.Keyword(null,"update","update",1045576396),pongcljs.core.update_game,new cljs.core.Keyword(null,"draw","draw",1358331674),pongcljs.core.draw,new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null));

//# sourceMappingURL=core.js.map?rel=1553689969194
