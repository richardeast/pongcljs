// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__33885){
var map__33886 = p__33885;
var map__33886__$1 = (((((!((map__33886 == null))))?(((((map__33886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33886.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33886):map__33886);
var m = map__33886__$1;
var n = cljs.core.get.call(null,map__33886__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__33886__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__33888_33910 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33889_33911 = null;
var count__33890_33912 = (0);
var i__33891_33913 = (0);
while(true){
if((i__33891_33913 < count__33890_33912)){
var f_33914 = cljs.core._nth.call(null,chunk__33889_33911,i__33891_33913);
cljs.core.println.call(null,"  ",f_33914);


var G__33915 = seq__33888_33910;
var G__33916 = chunk__33889_33911;
var G__33917 = count__33890_33912;
var G__33918 = (i__33891_33913 + (1));
seq__33888_33910 = G__33915;
chunk__33889_33911 = G__33916;
count__33890_33912 = G__33917;
i__33891_33913 = G__33918;
continue;
} else {
var temp__5720__auto___33919 = cljs.core.seq.call(null,seq__33888_33910);
if(temp__5720__auto___33919){
var seq__33888_33920__$1 = temp__5720__auto___33919;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33888_33920__$1)){
var c__4461__auto___33921 = cljs.core.chunk_first.call(null,seq__33888_33920__$1);
var G__33922 = cljs.core.chunk_rest.call(null,seq__33888_33920__$1);
var G__33923 = c__4461__auto___33921;
var G__33924 = cljs.core.count.call(null,c__4461__auto___33921);
var G__33925 = (0);
seq__33888_33910 = G__33922;
chunk__33889_33911 = G__33923;
count__33890_33912 = G__33924;
i__33891_33913 = G__33925;
continue;
} else {
var f_33926 = cljs.core.first.call(null,seq__33888_33920__$1);
cljs.core.println.call(null,"  ",f_33926);


var G__33927 = cljs.core.next.call(null,seq__33888_33920__$1);
var G__33928 = null;
var G__33929 = (0);
var G__33930 = (0);
seq__33888_33910 = G__33927;
chunk__33889_33911 = G__33928;
count__33890_33912 = G__33929;
i__33891_33913 = G__33930;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_33931 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_33931);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_33931)))?cljs.core.second.call(null,arglists_33931):arglists_33931));
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

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__33892_33932 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33893_33933 = null;
var count__33894_33934 = (0);
var i__33895_33935 = (0);
while(true){
if((i__33895_33935 < count__33894_33934)){
var vec__33896_33936 = cljs.core._nth.call(null,chunk__33893_33933,i__33895_33935);
var name_33937 = cljs.core.nth.call(null,vec__33896_33936,(0),null);
var map__33899_33938 = cljs.core.nth.call(null,vec__33896_33936,(1),null);
var map__33899_33939__$1 = (((((!((map__33899_33938 == null))))?(((((map__33899_33938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33899_33938.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33899_33938):map__33899_33938);
var doc_33940 = cljs.core.get.call(null,map__33899_33939__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33941 = cljs.core.get.call(null,map__33899_33939__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_33937);

cljs.core.println.call(null," ",arglists_33941);

if(cljs.core.truth_(doc_33940)){
cljs.core.println.call(null," ",doc_33940);
} else {
}


var G__33942 = seq__33892_33932;
var G__33943 = chunk__33893_33933;
var G__33944 = count__33894_33934;
var G__33945 = (i__33895_33935 + (1));
seq__33892_33932 = G__33942;
chunk__33893_33933 = G__33943;
count__33894_33934 = G__33944;
i__33895_33935 = G__33945;
continue;
} else {
var temp__5720__auto___33946 = cljs.core.seq.call(null,seq__33892_33932);
if(temp__5720__auto___33946){
var seq__33892_33947__$1 = temp__5720__auto___33946;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33892_33947__$1)){
var c__4461__auto___33948 = cljs.core.chunk_first.call(null,seq__33892_33947__$1);
var G__33949 = cljs.core.chunk_rest.call(null,seq__33892_33947__$1);
var G__33950 = c__4461__auto___33948;
var G__33951 = cljs.core.count.call(null,c__4461__auto___33948);
var G__33952 = (0);
seq__33892_33932 = G__33949;
chunk__33893_33933 = G__33950;
count__33894_33934 = G__33951;
i__33895_33935 = G__33952;
continue;
} else {
var vec__33901_33953 = cljs.core.first.call(null,seq__33892_33947__$1);
var name_33954 = cljs.core.nth.call(null,vec__33901_33953,(0),null);
var map__33904_33955 = cljs.core.nth.call(null,vec__33901_33953,(1),null);
var map__33904_33956__$1 = (((((!((map__33904_33955 == null))))?(((((map__33904_33955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33904_33955.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33904_33955):map__33904_33955);
var doc_33957 = cljs.core.get.call(null,map__33904_33956__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33958 = cljs.core.get.call(null,map__33904_33956__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_33954);

cljs.core.println.call(null," ",arglists_33958);

if(cljs.core.truth_(doc_33957)){
cljs.core.println.call(null," ",doc_33957);
} else {
}


var G__33959 = cljs.core.next.call(null,seq__33892_33947__$1);
var G__33960 = null;
var G__33961 = (0);
var G__33962 = (0);
seq__33892_33932 = G__33959;
chunk__33893_33933 = G__33960;
count__33894_33934 = G__33961;
i__33895_33935 = G__33962;
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
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__33906 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__33907 = null;
var count__33908 = (0);
var i__33909 = (0);
while(true){
if((i__33909 < count__33908)){
var role = cljs.core._nth.call(null,chunk__33907,i__33909);
var temp__5720__auto___33963__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___33963__$1)){
var spec_33964 = temp__5720__auto___33963__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_33964));
} else {
}


var G__33965 = seq__33906;
var G__33966 = chunk__33907;
var G__33967 = count__33908;
var G__33968 = (i__33909 + (1));
seq__33906 = G__33965;
chunk__33907 = G__33966;
count__33908 = G__33967;
i__33909 = G__33968;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__33906);
if(temp__5720__auto____$1){
var seq__33906__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33906__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__33906__$1);
var G__33969 = cljs.core.chunk_rest.call(null,seq__33906__$1);
var G__33970 = c__4461__auto__;
var G__33971 = cljs.core.count.call(null,c__4461__auto__);
var G__33972 = (0);
seq__33906 = G__33969;
chunk__33907 = G__33970;
count__33908 = G__33971;
i__33909 = G__33972;
continue;
} else {
var role = cljs.core.first.call(null,seq__33906__$1);
var temp__5720__auto___33973__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___33973__$2)){
var spec_33974 = temp__5720__auto___33973__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_33974));
} else {
}


var G__33975 = cljs.core.next.call(null,seq__33906__$1);
var G__33976 = null;
var G__33977 = (0);
var G__33978 = (0);
seq__33906 = G__33975;
chunk__33907 = G__33976;
count__33908 = G__33977;
i__33909 = G__33978;
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

//# sourceMappingURL=repl.js.map?rel=1553581603552
