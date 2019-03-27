// Compiled by ClojureScript 1.10.439 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.18";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e34818){if((e34818 instanceof Error)){
var e = e34818;
return "Error: Unable to stringify";
} else {
throw e34818;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__34821 = arguments.length;
switch (G__34821) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__34819_SHARP_){
if(typeof p1__34819_SHARP_ === 'string'){
return p1__34819_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__34819_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4647__auto__ = [];
var len__4641__auto___34824 = arguments.length;
var i__4642__auto___34825 = (0);
while(true){
if((i__4642__auto___34825 < len__4641__auto___34824)){
args__4647__auto__.push((arguments[i__4642__auto___34825]));

var G__34826 = (i__4642__auto___34825 + (1));
i__4642__auto___34825 = G__34826;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq34823){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34823));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4647__auto__ = [];
var len__4641__auto___34828 = arguments.length;
var i__4642__auto___34829 = (0);
while(true){
if((i__4642__auto___34829 < len__4641__auto___34828)){
args__4647__auto__.push((arguments[i__4642__auto___34829]));

var G__34830 = (i__4642__auto___34829 + (1));
i__4642__auto___34829 = G__34830;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq34827){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34827));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__34831){
var map__34832 = p__34831;
var map__34832__$1 = (((((!((map__34832 == null))))?(((((map__34832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34832.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34832):map__34832);
var message = cljs.core.get.call(null,map__34832__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__34832__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4047__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4036__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4036__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4036__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__27212__auto___34911 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27212__auto___34911,ch){
return (function (){
var f__27213__auto__ = (function (){var switch__27045__auto__ = ((function (c__27212__auto___34911,ch){
return (function (state_34883){
var state_val_34884 = (state_34883[(1)]);
if((state_val_34884 === (7))){
var inst_34879 = (state_34883[(2)]);
var state_34883__$1 = state_34883;
var statearr_34885_34912 = state_34883__$1;
(statearr_34885_34912[(2)] = inst_34879);

(statearr_34885_34912[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34884 === (1))){
var state_34883__$1 = state_34883;
var statearr_34886_34913 = state_34883__$1;
(statearr_34886_34913[(2)] = null);

(statearr_34886_34913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34884 === (4))){
var inst_34836 = (state_34883[(7)]);
var inst_34836__$1 = (state_34883[(2)]);
var state_34883__$1 = (function (){var statearr_34887 = state_34883;
(statearr_34887[(7)] = inst_34836__$1);

return statearr_34887;
})();
if(cljs.core.truth_(inst_34836__$1)){
var statearr_34888_34914 = state_34883__$1;
(statearr_34888_34914[(1)] = (5));

} else {
var statearr_34889_34915 = state_34883__$1;
(statearr_34889_34915[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34884 === (15))){
var inst_34843 = (state_34883[(8)]);
var inst_34858 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34843);
var inst_34859 = cljs.core.first.call(null,inst_34858);
var inst_34860 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_34859);
var inst_34861 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34860)].join('');
var inst_34862 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_34861);
var state_34883__$1 = state_34883;
var statearr_34890_34916 = state_34883__$1;
(statearr_34890_34916[(2)] = inst_34862);

(statearr_34890_34916[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34884 === (13))){
var inst_34867 = (state_34883[(2)]);
var state_34883__$1 = state_34883;
var statearr_34891_34917 = state_34883__$1;
(statearr_34891_34917[(2)] = inst_34867);

(statearr_34891_34917[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34884 === (6))){
var state_34883__$1 = state_34883;
var statearr_34892_34918 = state_34883__$1;
(statearr_34892_34918[(2)] = null);

(statearr_34892_34918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34884 === (17))){
var inst_34865 = (state_34883[(2)]);
var state_34883__$1 = state_34883;
var statearr_34893_34919 = state_34883__$1;
(statearr_34893_34919[(2)] = inst_34865);

(statearr_34893_34919[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34884 === (3))){
var inst_34881 = (state_34883[(2)]);
var state_34883__$1 = state_34883;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34883__$1,inst_34881);
} else {
if((state_val_34884 === (12))){
var inst_34842 = (state_34883[(9)]);
var inst_34856 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_34842,opts);
var state_34883__$1 = state_34883;
if(inst_34856){
var statearr_34894_34920 = state_34883__$1;
(statearr_34894_34920[(1)] = (15));

} else {
var statearr_34895_34921 = state_34883__$1;
(statearr_34895_34921[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34884 === (2))){
var state_34883__$1 = state_34883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34883__$1,(4),ch);
} else {
if((state_val_34884 === (11))){
var inst_34843 = (state_34883[(8)]);
var inst_34848 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34849 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_34843);
var inst_34850 = cljs.core.async.timeout.call(null,(1000));
var inst_34851 = [inst_34849,inst_34850];
var inst_34852 = (new cljs.core.PersistentVector(null,2,(5),inst_34848,inst_34851,null));
var state_34883__$1 = state_34883;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34883__$1,(14),inst_34852);
} else {
if((state_val_34884 === (9))){
var inst_34843 = (state_34883[(8)]);
var inst_34869 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_34870 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34843);
var inst_34871 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34870);
var inst_34872 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34871)].join('');
var inst_34873 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_34872);
var state_34883__$1 = (function (){var statearr_34896 = state_34883;
(statearr_34896[(10)] = inst_34869);

return statearr_34896;
})();
var statearr_34897_34922 = state_34883__$1;
(statearr_34897_34922[(2)] = inst_34873);

(statearr_34897_34922[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34884 === (5))){
var inst_34836 = (state_34883[(7)]);
var inst_34838 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_34839 = (new cljs.core.PersistentArrayMap(null,2,inst_34838,null));
var inst_34840 = (new cljs.core.PersistentHashSet(null,inst_34839,null));
var inst_34841 = figwheel.client.focus_msgs.call(null,inst_34840,inst_34836);
var inst_34842 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_34841);
var inst_34843 = cljs.core.first.call(null,inst_34841);
var inst_34844 = figwheel.client.autoload_QMARK_.call(null);
var state_34883__$1 = (function (){var statearr_34898 = state_34883;
(statearr_34898[(8)] = inst_34843);

(statearr_34898[(9)] = inst_34842);

return statearr_34898;
})();
if(cljs.core.truth_(inst_34844)){
var statearr_34899_34923 = state_34883__$1;
(statearr_34899_34923[(1)] = (8));

} else {
var statearr_34900_34924 = state_34883__$1;
(statearr_34900_34924[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34884 === (14))){
var inst_34854 = (state_34883[(2)]);
var state_34883__$1 = state_34883;
var statearr_34901_34925 = state_34883__$1;
(statearr_34901_34925[(2)] = inst_34854);

(statearr_34901_34925[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34884 === (16))){
var state_34883__$1 = state_34883;
var statearr_34902_34926 = state_34883__$1;
(statearr_34902_34926[(2)] = null);

(statearr_34902_34926[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34884 === (10))){
var inst_34875 = (state_34883[(2)]);
var state_34883__$1 = (function (){var statearr_34903 = state_34883;
(statearr_34903[(11)] = inst_34875);

return statearr_34903;
})();
var statearr_34904_34927 = state_34883__$1;
(statearr_34904_34927[(2)] = null);

(statearr_34904_34927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34884 === (8))){
var inst_34842 = (state_34883[(9)]);
var inst_34846 = figwheel.client.reload_file_state_QMARK_.call(null,inst_34842,opts);
var state_34883__$1 = state_34883;
if(cljs.core.truth_(inst_34846)){
var statearr_34905_34928 = state_34883__$1;
(statearr_34905_34928[(1)] = (11));

} else {
var statearr_34906_34929 = state_34883__$1;
(statearr_34906_34929[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27212__auto___34911,ch))
;
return ((function (switch__27045__auto__,c__27212__auto___34911,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__27046__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27046__auto____0 = (function (){
var statearr_34907 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34907[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27046__auto__);

(statearr_34907[(1)] = (1));

return statearr_34907;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27046__auto____1 = (function (state_34883){
while(true){
var ret_value__27047__auto__ = (function (){try{while(true){
var result__27048__auto__ = switch__27045__auto__.call(null,state_34883);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27048__auto__;
}
break;
}
}catch (e34908){if((e34908 instanceof Object)){
var ex__27049__auto__ = e34908;
var statearr_34909_34930 = state_34883;
(statearr_34909_34930[(5)] = ex__27049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34883);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34908;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34931 = state_34883;
state_34883 = G__34931;
continue;
} else {
return ret_value__27047__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27046__auto__ = function(state_34883){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27046__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27046__auto____1.call(this,state_34883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__27046__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27046__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27046__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27046__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27046__auto__;
})()
;})(switch__27045__auto__,c__27212__auto___34911,ch))
})();
var state__27214__auto__ = (function (){var statearr_34910 = f__27213__auto__.call(null);
(statearr_34910[(6)] = c__27212__auto___34911);

return statearr_34910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27214__auto__);
});})(c__27212__auto___34911,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__34932_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__34932_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_34938 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_34938){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34934 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34935 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34936 = true;
var _STAR_print_fn_STAR__temp_val__34937 = ((function (_STAR_print_newline_STAR__orig_val__34934,_STAR_print_fn_STAR__orig_val__34935,_STAR_print_newline_STAR__temp_val__34936,sb,base_path_34938){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__34934,_STAR_print_fn_STAR__orig_val__34935,_STAR_print_newline_STAR__temp_val__34936,sb,base_path_34938))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34936;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34937;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34935;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34934;
}}catch (e34933){if((e34933 instanceof Error)){
var e = e34933;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_34938], null));
} else {
var e = e34933;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_34938))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__34939){
var map__34940 = p__34939;
var map__34940__$1 = (((((!((map__34940 == null))))?(((((map__34940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34940.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34940):map__34940);
var opts = map__34940__$1;
var build_id = cljs.core.get.call(null,map__34940__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__34940,map__34940__$1,opts,build_id){
return (function (p__34942){
var vec__34943 = p__34942;
var seq__34944 = cljs.core.seq.call(null,vec__34943);
var first__34945 = cljs.core.first.call(null,seq__34944);
var seq__34944__$1 = cljs.core.next.call(null,seq__34944);
var map__34946 = first__34945;
var map__34946__$1 = (((((!((map__34946 == null))))?(((((map__34946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34946.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34946):map__34946);
var msg = map__34946__$1;
var msg_name = cljs.core.get.call(null,map__34946__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34944__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__34943,seq__34944,first__34945,seq__34944__$1,map__34946,map__34946__$1,msg,msg_name,_,map__34940,map__34940__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__34943,seq__34944,first__34945,seq__34944__$1,map__34946,map__34946__$1,msg,msg_name,_,map__34940,map__34940__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__34940,map__34940__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__34948){
var vec__34949 = p__34948;
var seq__34950 = cljs.core.seq.call(null,vec__34949);
var first__34951 = cljs.core.first.call(null,seq__34950);
var seq__34950__$1 = cljs.core.next.call(null,seq__34950);
var map__34952 = first__34951;
var map__34952__$1 = (((((!((map__34952 == null))))?(((((map__34952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34952):map__34952);
var msg = map__34952__$1;
var msg_name = cljs.core.get.call(null,map__34952__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34950__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__34954){
var map__34955 = p__34954;
var map__34955__$1 = (((((!((map__34955 == null))))?(((((map__34955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34955.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34955):map__34955);
var on_compile_warning = cljs.core.get.call(null,map__34955__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__34955__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__34955,map__34955__$1,on_compile_warning,on_compile_fail){
return (function (p__34957){
var vec__34958 = p__34957;
var seq__34959 = cljs.core.seq.call(null,vec__34958);
var first__34960 = cljs.core.first.call(null,seq__34959);
var seq__34959__$1 = cljs.core.next.call(null,seq__34959);
var map__34961 = first__34960;
var map__34961__$1 = (((((!((map__34961 == null))))?(((((map__34961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34961.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34961):map__34961);
var msg = map__34961__$1;
var msg_name = cljs.core.get.call(null,map__34961__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34959__$1;
var pred__34963 = cljs.core._EQ_;
var expr__34964 = msg_name;
if(cljs.core.truth_(pred__34963.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__34964))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__34963.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__34964))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__34955,map__34955__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__27212__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27212__auto__,msg_hist,msg_names,msg){
return (function (){
var f__27213__auto__ = (function (){var switch__27045__auto__ = ((function (c__27212__auto__,msg_hist,msg_names,msg){
return (function (state_35053){
var state_val_35054 = (state_35053[(1)]);
if((state_val_35054 === (7))){
var inst_34973 = (state_35053[(2)]);
var state_35053__$1 = state_35053;
if(cljs.core.truth_(inst_34973)){
var statearr_35055_35102 = state_35053__$1;
(statearr_35055_35102[(1)] = (8));

} else {
var statearr_35056_35103 = state_35053__$1;
(statearr_35056_35103[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35054 === (20))){
var inst_35047 = (state_35053[(2)]);
var state_35053__$1 = state_35053;
var statearr_35057_35104 = state_35053__$1;
(statearr_35057_35104[(2)] = inst_35047);

(statearr_35057_35104[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35054 === (27))){
var inst_35043 = (state_35053[(2)]);
var state_35053__$1 = state_35053;
var statearr_35058_35105 = state_35053__$1;
(statearr_35058_35105[(2)] = inst_35043);

(statearr_35058_35105[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35054 === (1))){
var inst_34966 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_35053__$1 = state_35053;
if(cljs.core.truth_(inst_34966)){
var statearr_35059_35106 = state_35053__$1;
(statearr_35059_35106[(1)] = (2));

} else {
var statearr_35060_35107 = state_35053__$1;
(statearr_35060_35107[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35054 === (24))){
var inst_35045 = (state_35053[(2)]);
var state_35053__$1 = state_35053;
var statearr_35061_35108 = state_35053__$1;
(statearr_35061_35108[(2)] = inst_35045);

(statearr_35061_35108[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35054 === (4))){
var inst_35051 = (state_35053[(2)]);
var state_35053__$1 = state_35053;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35053__$1,inst_35051);
} else {
if((state_val_35054 === (15))){
var inst_35049 = (state_35053[(2)]);
var state_35053__$1 = state_35053;
var statearr_35062_35109 = state_35053__$1;
(statearr_35062_35109[(2)] = inst_35049);

(statearr_35062_35109[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35054 === (21))){
var inst_35002 = (state_35053[(2)]);
var inst_35003 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35004 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35003);
var state_35053__$1 = (function (){var statearr_35063 = state_35053;
(statearr_35063[(7)] = inst_35002);

return statearr_35063;
})();
var statearr_35064_35110 = state_35053__$1;
(statearr_35064_35110[(2)] = inst_35004);

(statearr_35064_35110[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35054 === (31))){
var inst_35032 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_35053__$1 = state_35053;
if(inst_35032){
var statearr_35065_35111 = state_35053__$1;
(statearr_35065_35111[(1)] = (34));

} else {
var statearr_35066_35112 = state_35053__$1;
(statearr_35066_35112[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35054 === (32))){
var inst_35041 = (state_35053[(2)]);
var state_35053__$1 = state_35053;
var statearr_35067_35113 = state_35053__$1;
(statearr_35067_35113[(2)] = inst_35041);

(statearr_35067_35113[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35054 === (33))){
var inst_35028 = (state_35053[(2)]);
var inst_35029 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35030 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35029);
var state_35053__$1 = (function (){var statearr_35068 = state_35053;
(statearr_35068[(8)] = inst_35028);

return statearr_35068;
})();
var statearr_35069_35114 = state_35053__$1;
(statearr_35069_35114[(2)] = inst_35030);

(statearr_35069_35114[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35054 === (13))){
var inst_34987 = figwheel.client.heads_up.clear.call(null);
var state_35053__$1 = state_35053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35053__$1,(16),inst_34987);
} else {
if((state_val_35054 === (22))){
var inst_35008 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35009 = figwheel.client.heads_up.append_warning_message.call(null,inst_35008);
var state_35053__$1 = state_35053;
var statearr_35070_35115 = state_35053__$1;
(statearr_35070_35115[(2)] = inst_35009);

(statearr_35070_35115[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35054 === (36))){
var inst_35039 = (state_35053[(2)]);
var state_35053__$1 = state_35053;
var statearr_35071_35116 = state_35053__$1;
(statearr_35071_35116[(2)] = inst_35039);

(statearr_35071_35116[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35054 === (29))){
var inst_35019 = (state_35053[(2)]);
var inst_35020 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35021 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35020);
var state_35053__$1 = (function (){var statearr_35072 = state_35053;
(statearr_35072[(9)] = inst_35019);

return statearr_35072;
})();
var statearr_35073_35117 = state_35053__$1;
(statearr_35073_35117[(2)] = inst_35021);

(statearr_35073_35117[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35054 === (6))){
var inst_34968 = (state_35053[(10)]);
var state_35053__$1 = state_35053;
var statearr_35074_35118 = state_35053__$1;
(statearr_35074_35118[(2)] = inst_34968);

(statearr_35074_35118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35054 === (28))){
var inst_35015 = (state_35053[(2)]);
var inst_35016 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35017 = figwheel.client.heads_up.display_warning.call(null,inst_35016);
var state_35053__$1 = (function (){var statearr_35075 = state_35053;
(statearr_35075[(11)] = inst_35015);

return statearr_35075;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35053__$1,(29),inst_35017);
} else {
if((state_val_35054 === (25))){
var inst_35013 = figwheel.client.heads_up.clear.call(null);
var state_35053__$1 = state_35053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35053__$1,(28),inst_35013);
} else {
if((state_val_35054 === (34))){
var inst_35034 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35053__$1 = state_35053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35053__$1,(37),inst_35034);
} else {
if((state_val_35054 === (17))){
var inst_34993 = (state_35053[(2)]);
var inst_34994 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34995 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34994);
var state_35053__$1 = (function (){var statearr_35076 = state_35053;
(statearr_35076[(12)] = inst_34993);

return statearr_35076;
})();
var statearr_35077_35119 = state_35053__$1;
(statearr_35077_35119[(2)] = inst_34995);

(statearr_35077_35119[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35054 === (3))){
var inst_34985 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_35053__$1 = state_35053;
if(inst_34985){
var statearr_35078_35120 = state_35053__$1;
(statearr_35078_35120[(1)] = (13));

} else {
var statearr_35079_35121 = state_35053__$1;
(statearr_35079_35121[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35054 === (12))){
var inst_34981 = (state_35053[(2)]);
var state_35053__$1 = state_35053;
var statearr_35080_35122 = state_35053__$1;
(statearr_35080_35122[(2)] = inst_34981);

(statearr_35080_35122[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35054 === (2))){
var inst_34968 = (state_35053[(10)]);
var inst_34968__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_35053__$1 = (function (){var statearr_35081 = state_35053;
(statearr_35081[(10)] = inst_34968__$1);

return statearr_35081;
})();
if(cljs.core.truth_(inst_34968__$1)){
var statearr_35082_35123 = state_35053__$1;
(statearr_35082_35123[(1)] = (5));

} else {
var statearr_35083_35124 = state_35053__$1;
(statearr_35083_35124[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35054 === (23))){
var inst_35011 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_35053__$1 = state_35053;
if(inst_35011){
var statearr_35084_35125 = state_35053__$1;
(statearr_35084_35125[(1)] = (25));

} else {
var statearr_35085_35126 = state_35053__$1;
(statearr_35085_35126[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35054 === (35))){
var state_35053__$1 = state_35053;
var statearr_35086_35127 = state_35053__$1;
(statearr_35086_35127[(2)] = null);

(statearr_35086_35127[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35054 === (19))){
var inst_35006 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_35053__$1 = state_35053;
if(inst_35006){
var statearr_35087_35128 = state_35053__$1;
(statearr_35087_35128[(1)] = (22));

} else {
var statearr_35088_35129 = state_35053__$1;
(statearr_35088_35129[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35054 === (11))){
var inst_34977 = (state_35053[(2)]);
var state_35053__$1 = state_35053;
var statearr_35089_35130 = state_35053__$1;
(statearr_35089_35130[(2)] = inst_34977);

(statearr_35089_35130[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35054 === (9))){
var inst_34979 = figwheel.client.heads_up.clear.call(null);
var state_35053__$1 = state_35053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35053__$1,(12),inst_34979);
} else {
if((state_val_35054 === (5))){
var inst_34970 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_35053__$1 = state_35053;
var statearr_35090_35131 = state_35053__$1;
(statearr_35090_35131[(2)] = inst_34970);

(statearr_35090_35131[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35054 === (14))){
var inst_34997 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_35053__$1 = state_35053;
if(inst_34997){
var statearr_35091_35132 = state_35053__$1;
(statearr_35091_35132[(1)] = (18));

} else {
var statearr_35092_35133 = state_35053__$1;
(statearr_35092_35133[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35054 === (26))){
var inst_35023 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_35053__$1 = state_35053;
if(inst_35023){
var statearr_35093_35134 = state_35053__$1;
(statearr_35093_35134[(1)] = (30));

} else {
var statearr_35094_35135 = state_35053__$1;
(statearr_35094_35135[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35054 === (16))){
var inst_34989 = (state_35053[(2)]);
var inst_34990 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34991 = figwheel.client.heads_up.display_exception.call(null,inst_34990);
var state_35053__$1 = (function (){var statearr_35095 = state_35053;
(statearr_35095[(13)] = inst_34989);

return statearr_35095;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35053__$1,(17),inst_34991);
} else {
if((state_val_35054 === (30))){
var inst_35025 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35026 = figwheel.client.heads_up.display_warning.call(null,inst_35025);
var state_35053__$1 = state_35053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35053__$1,(33),inst_35026);
} else {
if((state_val_35054 === (10))){
var inst_34983 = (state_35053[(2)]);
var state_35053__$1 = state_35053;
var statearr_35096_35136 = state_35053__$1;
(statearr_35096_35136[(2)] = inst_34983);

(statearr_35096_35136[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35054 === (18))){
var inst_34999 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35000 = figwheel.client.heads_up.display_exception.call(null,inst_34999);
var state_35053__$1 = state_35053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35053__$1,(21),inst_35000);
} else {
if((state_val_35054 === (37))){
var inst_35036 = (state_35053[(2)]);
var state_35053__$1 = state_35053;
var statearr_35097_35137 = state_35053__$1;
(statearr_35097_35137[(2)] = inst_35036);

(statearr_35097_35137[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35054 === (8))){
var inst_34975 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35053__$1 = state_35053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35053__$1,(11),inst_34975);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27212__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__27045__auto__,c__27212__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27046__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27046__auto____0 = (function (){
var statearr_35098 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35098[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27046__auto__);

(statearr_35098[(1)] = (1));

return statearr_35098;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27046__auto____1 = (function (state_35053){
while(true){
var ret_value__27047__auto__ = (function (){try{while(true){
var result__27048__auto__ = switch__27045__auto__.call(null,state_35053);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27048__auto__;
}
break;
}
}catch (e35099){if((e35099 instanceof Object)){
var ex__27049__auto__ = e35099;
var statearr_35100_35138 = state_35053;
(statearr_35100_35138[(5)] = ex__27049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35053);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35099;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35139 = state_35053;
state_35053 = G__35139;
continue;
} else {
return ret_value__27047__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27046__auto__ = function(state_35053){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27046__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27046__auto____1.call(this,state_35053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27046__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27046__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27046__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27046__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27046__auto__;
})()
;})(switch__27045__auto__,c__27212__auto__,msg_hist,msg_names,msg))
})();
var state__27214__auto__ = (function (){var statearr_35101 = f__27213__auto__.call(null);
(statearr_35101[(6)] = c__27212__auto__);

return statearr_35101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27214__auto__);
});})(c__27212__auto__,msg_hist,msg_names,msg))
);

return c__27212__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27212__auto___35168 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27212__auto___35168,ch){
return (function (){
var f__27213__auto__ = (function (){var switch__27045__auto__ = ((function (c__27212__auto___35168,ch){
return (function (state_35154){
var state_val_35155 = (state_35154[(1)]);
if((state_val_35155 === (1))){
var state_35154__$1 = state_35154;
var statearr_35156_35169 = state_35154__$1;
(statearr_35156_35169[(2)] = null);

(statearr_35156_35169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35155 === (2))){
var state_35154__$1 = state_35154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35154__$1,(4),ch);
} else {
if((state_val_35155 === (3))){
var inst_35152 = (state_35154[(2)]);
var state_35154__$1 = state_35154;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35154__$1,inst_35152);
} else {
if((state_val_35155 === (4))){
var inst_35142 = (state_35154[(7)]);
var inst_35142__$1 = (state_35154[(2)]);
var state_35154__$1 = (function (){var statearr_35157 = state_35154;
(statearr_35157[(7)] = inst_35142__$1);

return statearr_35157;
})();
if(cljs.core.truth_(inst_35142__$1)){
var statearr_35158_35170 = state_35154__$1;
(statearr_35158_35170[(1)] = (5));

} else {
var statearr_35159_35171 = state_35154__$1;
(statearr_35159_35171[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35155 === (5))){
var inst_35142 = (state_35154[(7)]);
var inst_35144 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_35142);
var state_35154__$1 = state_35154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35154__$1,(8),inst_35144);
} else {
if((state_val_35155 === (6))){
var state_35154__$1 = state_35154;
var statearr_35160_35172 = state_35154__$1;
(statearr_35160_35172[(2)] = null);

(statearr_35160_35172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35155 === (7))){
var inst_35150 = (state_35154[(2)]);
var state_35154__$1 = state_35154;
var statearr_35161_35173 = state_35154__$1;
(statearr_35161_35173[(2)] = inst_35150);

(statearr_35161_35173[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35155 === (8))){
var inst_35146 = (state_35154[(2)]);
var state_35154__$1 = (function (){var statearr_35162 = state_35154;
(statearr_35162[(8)] = inst_35146);

return statearr_35162;
})();
var statearr_35163_35174 = state_35154__$1;
(statearr_35163_35174[(2)] = null);

(statearr_35163_35174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__27212__auto___35168,ch))
;
return ((function (switch__27045__auto__,c__27212__auto___35168,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__27046__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27046__auto____0 = (function (){
var statearr_35164 = [null,null,null,null,null,null,null,null,null];
(statearr_35164[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27046__auto__);

(statearr_35164[(1)] = (1));

return statearr_35164;
});
var figwheel$client$heads_up_plugin_$_state_machine__27046__auto____1 = (function (state_35154){
while(true){
var ret_value__27047__auto__ = (function (){try{while(true){
var result__27048__auto__ = switch__27045__auto__.call(null,state_35154);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27048__auto__;
}
break;
}
}catch (e35165){if((e35165 instanceof Object)){
var ex__27049__auto__ = e35165;
var statearr_35166_35175 = state_35154;
(statearr_35166_35175[(5)] = ex__27049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35154);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35165;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35176 = state_35154;
state_35154 = G__35176;
continue;
} else {
return ret_value__27047__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27046__auto__ = function(state_35154){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27046__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27046__auto____1.call(this,state_35154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__27046__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27046__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27046__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27046__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27046__auto__;
})()
;})(switch__27045__auto__,c__27212__auto___35168,ch))
})();
var state__27214__auto__ = (function (){var statearr_35167 = f__27213__auto__.call(null);
(statearr_35167[(6)] = c__27212__auto___35168);

return statearr_35167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27214__auto__);
});})(c__27212__auto___35168,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27212__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27212__auto__){
return (function (){
var f__27213__auto__ = (function (){var switch__27045__auto__ = ((function (c__27212__auto__){
return (function (state_35182){
var state_val_35183 = (state_35182[(1)]);
if((state_val_35183 === (1))){
var inst_35177 = cljs.core.async.timeout.call(null,(3000));
var state_35182__$1 = state_35182;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35182__$1,(2),inst_35177);
} else {
if((state_val_35183 === (2))){
var inst_35179 = (state_35182[(2)]);
var inst_35180 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_35182__$1 = (function (){var statearr_35184 = state_35182;
(statearr_35184[(7)] = inst_35179);

return statearr_35184;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35182__$1,inst_35180);
} else {
return null;
}
}
});})(c__27212__auto__))
;
return ((function (switch__27045__auto__,c__27212__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__27046__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__27046__auto____0 = (function (){
var statearr_35185 = [null,null,null,null,null,null,null,null];
(statearr_35185[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27046__auto__);

(statearr_35185[(1)] = (1));

return statearr_35185;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27046__auto____1 = (function (state_35182){
while(true){
var ret_value__27047__auto__ = (function (){try{while(true){
var result__27048__auto__ = switch__27045__auto__.call(null,state_35182);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27048__auto__;
}
break;
}
}catch (e35186){if((e35186 instanceof Object)){
var ex__27049__auto__ = e35186;
var statearr_35187_35189 = state_35182;
(statearr_35187_35189[(5)] = ex__27049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35182);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35186;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35190 = state_35182;
state_35182 = G__35190;
continue;
} else {
return ret_value__27047__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27046__auto__ = function(state_35182){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27046__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27046__auto____1.call(this,state_35182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__27046__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27046__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27046__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27046__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27046__auto__;
})()
;})(switch__27045__auto__,c__27212__auto__))
})();
var state__27214__auto__ = (function (){var statearr_35188 = f__27213__auto__.call(null);
(statearr_35188[(6)] = c__27212__auto__);

return statearr_35188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27214__auto__);
});})(c__27212__auto__))
);

return c__27212__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5720__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5720__auto__)){
var figwheel_version = temp__5720__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27212__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27212__auto__,figwheel_version,temp__5720__auto__){
return (function (){
var f__27213__auto__ = (function (){var switch__27045__auto__ = ((function (c__27212__auto__,figwheel_version,temp__5720__auto__){
return (function (state_35197){
var state_val_35198 = (state_35197[(1)]);
if((state_val_35198 === (1))){
var inst_35191 = cljs.core.async.timeout.call(null,(2000));
var state_35197__$1 = state_35197;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35197__$1,(2),inst_35191);
} else {
if((state_val_35198 === (2))){
var inst_35193 = (state_35197[(2)]);
var inst_35194 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_35195 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_35194);
var state_35197__$1 = (function (){var statearr_35199 = state_35197;
(statearr_35199[(7)] = inst_35193);

return statearr_35199;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35197__$1,inst_35195);
} else {
return null;
}
}
});})(c__27212__auto__,figwheel_version,temp__5720__auto__))
;
return ((function (switch__27045__auto__,c__27212__auto__,figwheel_version,temp__5720__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27046__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27046__auto____0 = (function (){
var statearr_35200 = [null,null,null,null,null,null,null,null];
(statearr_35200[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27046__auto__);

(statearr_35200[(1)] = (1));

return statearr_35200;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27046__auto____1 = (function (state_35197){
while(true){
var ret_value__27047__auto__ = (function (){try{while(true){
var result__27048__auto__ = switch__27045__auto__.call(null,state_35197);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27048__auto__;
}
break;
}
}catch (e35201){if((e35201 instanceof Object)){
var ex__27049__auto__ = e35201;
var statearr_35202_35204 = state_35197;
(statearr_35202_35204[(5)] = ex__27049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35197);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35201;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35205 = state_35197;
state_35197 = G__35205;
continue;
} else {
return ret_value__27047__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27046__auto__ = function(state_35197){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27046__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27046__auto____1.call(this,state_35197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27046__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27046__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27046__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27046__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27046__auto__;
})()
;})(switch__27045__auto__,c__27212__auto__,figwheel_version,temp__5720__auto__))
})();
var state__27214__auto__ = (function (){var statearr_35203 = f__27213__auto__.call(null);
(statearr_35203[(6)] = c__27212__auto__);

return statearr_35203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27214__auto__);
});})(c__27212__auto__,figwheel_version,temp__5720__auto__))
);

return c__27212__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__35206){
var map__35207 = p__35206;
var map__35207__$1 = (((((!((map__35207 == null))))?(((((map__35207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35207.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35207):map__35207);
var file = cljs.core.get.call(null,map__35207__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__35207__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__35207__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__35209 = "";
var G__35209__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35209),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__35209);
var G__35209__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35209__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__35209__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = line;
if(cljs.core.truth_(and__4036__auto__)){
return column;
} else {
return and__4036__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35209__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__35209__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__35210){
var map__35211 = p__35210;
var map__35211__$1 = (((((!((map__35211 == null))))?(((((map__35211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35211.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35211):map__35211);
var ed = map__35211__$1;
var exception_data = cljs.core.get.call(null,map__35211__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__35211__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_35214 = (function (){var G__35213 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35213)," Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,exception_data))].join('');
} else {
return G__35213;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_35214);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__35215){
var map__35216 = p__35215;
var map__35216__$1 = (((((!((map__35216 == null))))?(((((map__35216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35216):map__35216);
var w = map__35216__$1;
var message = cljs.core.get.call(null,map__35216__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/development/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/development/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4036__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4036__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__35218 = cljs.core.seq.call(null,plugins);
var chunk__35219 = null;
var count__35220 = (0);
var i__35221 = (0);
while(true){
if((i__35221 < count__35220)){
var vec__35222 = cljs.core._nth.call(null,chunk__35219,i__35221);
var k = cljs.core.nth.call(null,vec__35222,(0),null);
var plugin = cljs.core.nth.call(null,vec__35222,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35228 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35218,chunk__35219,count__35220,i__35221,pl_35228,vec__35222,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_35228.call(null,msg_hist);
});})(seq__35218,chunk__35219,count__35220,i__35221,pl_35228,vec__35222,k,plugin))
);
} else {
}


var G__35229 = seq__35218;
var G__35230 = chunk__35219;
var G__35231 = count__35220;
var G__35232 = (i__35221 + (1));
seq__35218 = G__35229;
chunk__35219 = G__35230;
count__35220 = G__35231;
i__35221 = G__35232;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__35218);
if(temp__5720__auto__){
var seq__35218__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35218__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__35218__$1);
var G__35233 = cljs.core.chunk_rest.call(null,seq__35218__$1);
var G__35234 = c__4461__auto__;
var G__35235 = cljs.core.count.call(null,c__4461__auto__);
var G__35236 = (0);
seq__35218 = G__35233;
chunk__35219 = G__35234;
count__35220 = G__35235;
i__35221 = G__35236;
continue;
} else {
var vec__35225 = cljs.core.first.call(null,seq__35218__$1);
var k = cljs.core.nth.call(null,vec__35225,(0),null);
var plugin = cljs.core.nth.call(null,vec__35225,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35237 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35218,chunk__35219,count__35220,i__35221,pl_35237,vec__35225,k,plugin,seq__35218__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_35237.call(null,msg_hist);
});})(seq__35218,chunk__35219,count__35220,i__35221,pl_35237,vec__35225,k,plugin,seq__35218__$1,temp__5720__auto__))
);
} else {
}


var G__35238 = cljs.core.next.call(null,seq__35218__$1);
var G__35239 = null;
var G__35240 = (0);
var G__35241 = (0);
seq__35218 = G__35238;
chunk__35219 = G__35239;
count__35220 = G__35240;
i__35221 = G__35241;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__35243 = arguments.length;
switch (G__35243) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__35244_35249 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__35245_35250 = null;
var count__35246_35251 = (0);
var i__35247_35252 = (0);
while(true){
if((i__35247_35252 < count__35246_35251)){
var msg_35253 = cljs.core._nth.call(null,chunk__35245_35250,i__35247_35252);
figwheel.client.socket.handle_incoming_message.call(null,msg_35253);


var G__35254 = seq__35244_35249;
var G__35255 = chunk__35245_35250;
var G__35256 = count__35246_35251;
var G__35257 = (i__35247_35252 + (1));
seq__35244_35249 = G__35254;
chunk__35245_35250 = G__35255;
count__35246_35251 = G__35256;
i__35247_35252 = G__35257;
continue;
} else {
var temp__5720__auto___35258 = cljs.core.seq.call(null,seq__35244_35249);
if(temp__5720__auto___35258){
var seq__35244_35259__$1 = temp__5720__auto___35258;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35244_35259__$1)){
var c__4461__auto___35260 = cljs.core.chunk_first.call(null,seq__35244_35259__$1);
var G__35261 = cljs.core.chunk_rest.call(null,seq__35244_35259__$1);
var G__35262 = c__4461__auto___35260;
var G__35263 = cljs.core.count.call(null,c__4461__auto___35260);
var G__35264 = (0);
seq__35244_35249 = G__35261;
chunk__35245_35250 = G__35262;
count__35246_35251 = G__35263;
i__35247_35252 = G__35264;
continue;
} else {
var msg_35265 = cljs.core.first.call(null,seq__35244_35259__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_35265);


var G__35266 = cljs.core.next.call(null,seq__35244_35259__$1);
var G__35267 = null;
var G__35268 = (0);
var G__35269 = (0);
seq__35244_35249 = G__35266;
chunk__35245_35250 = G__35267;
count__35246_35251 = G__35268;
i__35247_35252 = G__35269;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4647__auto__ = [];
var len__4641__auto___35274 = arguments.length;
var i__4642__auto___35275 = (0);
while(true){
if((i__4642__auto___35275 < len__4641__auto___35274)){
args__4647__auto__.push((arguments[i__4642__auto___35275]));

var G__35276 = (i__4642__auto___35275 + (1));
i__4642__auto___35275 = G__35276;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__35271){
var map__35272 = p__35271;
var map__35272__$1 = (((((!((map__35272 == null))))?(((((map__35272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35272):map__35272);
var opts = map__35272__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq35270){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35270));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e35277){if((e35277 instanceof Error)){
var e = e35277;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e35277;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__35278){
var map__35279 = p__35278;
var map__35279__$1 = (((((!((map__35279 == null))))?(((((map__35279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35279.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35279):map__35279);
var msg_name = cljs.core.get.call(null,map__35279__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1553581604925
