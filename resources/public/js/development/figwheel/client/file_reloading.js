// Compiled by ClojureScript 1.10.439 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4047__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4047__auto__){
return or__4047__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4047__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__31748_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__31748_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__31749 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__31750 = null;
var count__31751 = (0);
var i__31752 = (0);
while(true){
if((i__31752 < count__31751)){
var n = cljs.core._nth.call(null,chunk__31750,i__31752);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__31753 = seq__31749;
var G__31754 = chunk__31750;
var G__31755 = count__31751;
var G__31756 = (i__31752 + (1));
seq__31749 = G__31753;
chunk__31750 = G__31754;
count__31751 = G__31755;
i__31752 = G__31756;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__31749);
if(temp__5720__auto__){
var seq__31749__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31749__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__31749__$1);
var G__31757 = cljs.core.chunk_rest.call(null,seq__31749__$1);
var G__31758 = c__4461__auto__;
var G__31759 = cljs.core.count.call(null,c__4461__auto__);
var G__31760 = (0);
seq__31749 = G__31757;
chunk__31750 = G__31758;
count__31751 = G__31759;
i__31752 = G__31760;
continue;
} else {
var n = cljs.core.first.call(null,seq__31749__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__31761 = cljs.core.next.call(null,seq__31749__$1);
var G__31762 = null;
var G__31763 = (0);
var G__31764 = (0);
seq__31749 = G__31761;
chunk__31750 = G__31762;
count__31751 = G__31763;
i__31752 = G__31764;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__31765){
var vec__31766 = p__31765;
var _ = cljs.core.nth.call(null,vec__31766,(0),null);
var v = cljs.core.nth.call(null,vec__31766,(1),null);
var and__4036__auto__ = v;
if(cljs.core.truth_(and__4036__auto__)){
return v.call(null,dep);
} else {
return and__4036__auto__;
}
}),cljs.core.filter.call(null,(function (p__31769){
var vec__31770 = p__31769;
var k = cljs.core.nth.call(null,vec__31770,(0),null);
var v = cljs.core.nth.call(null,vec__31770,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__31782_31790 = cljs.core.seq.call(null,deps);
var chunk__31783_31791 = null;
var count__31784_31792 = (0);
var i__31785_31793 = (0);
while(true){
if((i__31785_31793 < count__31784_31792)){
var dep_31794 = cljs.core._nth.call(null,chunk__31783_31791,i__31785_31793);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_31794;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_31794));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_31794,(depth + (1)),state);
} else {
}


var G__31795 = seq__31782_31790;
var G__31796 = chunk__31783_31791;
var G__31797 = count__31784_31792;
var G__31798 = (i__31785_31793 + (1));
seq__31782_31790 = G__31795;
chunk__31783_31791 = G__31796;
count__31784_31792 = G__31797;
i__31785_31793 = G__31798;
continue;
} else {
var temp__5720__auto___31799 = cljs.core.seq.call(null,seq__31782_31790);
if(temp__5720__auto___31799){
var seq__31782_31800__$1 = temp__5720__auto___31799;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31782_31800__$1)){
var c__4461__auto___31801 = cljs.core.chunk_first.call(null,seq__31782_31800__$1);
var G__31802 = cljs.core.chunk_rest.call(null,seq__31782_31800__$1);
var G__31803 = c__4461__auto___31801;
var G__31804 = cljs.core.count.call(null,c__4461__auto___31801);
var G__31805 = (0);
seq__31782_31790 = G__31802;
chunk__31783_31791 = G__31803;
count__31784_31792 = G__31804;
i__31785_31793 = G__31805;
continue;
} else {
var dep_31806 = cljs.core.first.call(null,seq__31782_31800__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_31806;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_31806));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_31806,(depth + (1)),state);
} else {
}


var G__31807 = cljs.core.next.call(null,seq__31782_31800__$1);
var G__31808 = null;
var G__31809 = (0);
var G__31810 = (0);
seq__31782_31790 = G__31807;
chunk__31783_31791 = G__31808;
count__31784_31792 = G__31809;
i__31785_31793 = G__31810;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__31786){
var vec__31787 = p__31786;
var seq__31788 = cljs.core.seq.call(null,vec__31787);
var first__31789 = cljs.core.first.call(null,seq__31788);
var seq__31788__$1 = cljs.core.next.call(null,seq__31788);
var x = first__31789;
var xs = seq__31788__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__31787,seq__31788,first__31789,seq__31788__$1,x,xs,get_deps__$1){
return (function (p1__31773_SHARP_){
return clojure.set.difference.call(null,p1__31773_SHARP_,x);
});})(vec__31787,seq__31788,first__31789,seq__31788__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__31811 = cljs.core.seq.call(null,provides);
var chunk__31812 = null;
var count__31813 = (0);
var i__31814 = (0);
while(true){
if((i__31814 < count__31813)){
var prov = cljs.core._nth.call(null,chunk__31812,i__31814);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31815_31823 = cljs.core.seq.call(null,requires);
var chunk__31816_31824 = null;
var count__31817_31825 = (0);
var i__31818_31826 = (0);
while(true){
if((i__31818_31826 < count__31817_31825)){
var req_31827 = cljs.core._nth.call(null,chunk__31816_31824,i__31818_31826);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31827,prov);


var G__31828 = seq__31815_31823;
var G__31829 = chunk__31816_31824;
var G__31830 = count__31817_31825;
var G__31831 = (i__31818_31826 + (1));
seq__31815_31823 = G__31828;
chunk__31816_31824 = G__31829;
count__31817_31825 = G__31830;
i__31818_31826 = G__31831;
continue;
} else {
var temp__5720__auto___31832 = cljs.core.seq.call(null,seq__31815_31823);
if(temp__5720__auto___31832){
var seq__31815_31833__$1 = temp__5720__auto___31832;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31815_31833__$1)){
var c__4461__auto___31834 = cljs.core.chunk_first.call(null,seq__31815_31833__$1);
var G__31835 = cljs.core.chunk_rest.call(null,seq__31815_31833__$1);
var G__31836 = c__4461__auto___31834;
var G__31837 = cljs.core.count.call(null,c__4461__auto___31834);
var G__31838 = (0);
seq__31815_31823 = G__31835;
chunk__31816_31824 = G__31836;
count__31817_31825 = G__31837;
i__31818_31826 = G__31838;
continue;
} else {
var req_31839 = cljs.core.first.call(null,seq__31815_31833__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31839,prov);


var G__31840 = cljs.core.next.call(null,seq__31815_31833__$1);
var G__31841 = null;
var G__31842 = (0);
var G__31843 = (0);
seq__31815_31823 = G__31840;
chunk__31816_31824 = G__31841;
count__31817_31825 = G__31842;
i__31818_31826 = G__31843;
continue;
}
} else {
}
}
break;
}


var G__31844 = seq__31811;
var G__31845 = chunk__31812;
var G__31846 = count__31813;
var G__31847 = (i__31814 + (1));
seq__31811 = G__31844;
chunk__31812 = G__31845;
count__31813 = G__31846;
i__31814 = G__31847;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__31811);
if(temp__5720__auto__){
var seq__31811__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31811__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__31811__$1);
var G__31848 = cljs.core.chunk_rest.call(null,seq__31811__$1);
var G__31849 = c__4461__auto__;
var G__31850 = cljs.core.count.call(null,c__4461__auto__);
var G__31851 = (0);
seq__31811 = G__31848;
chunk__31812 = G__31849;
count__31813 = G__31850;
i__31814 = G__31851;
continue;
} else {
var prov = cljs.core.first.call(null,seq__31811__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31819_31852 = cljs.core.seq.call(null,requires);
var chunk__31820_31853 = null;
var count__31821_31854 = (0);
var i__31822_31855 = (0);
while(true){
if((i__31822_31855 < count__31821_31854)){
var req_31856 = cljs.core._nth.call(null,chunk__31820_31853,i__31822_31855);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31856,prov);


var G__31857 = seq__31819_31852;
var G__31858 = chunk__31820_31853;
var G__31859 = count__31821_31854;
var G__31860 = (i__31822_31855 + (1));
seq__31819_31852 = G__31857;
chunk__31820_31853 = G__31858;
count__31821_31854 = G__31859;
i__31822_31855 = G__31860;
continue;
} else {
var temp__5720__auto___31861__$1 = cljs.core.seq.call(null,seq__31819_31852);
if(temp__5720__auto___31861__$1){
var seq__31819_31862__$1 = temp__5720__auto___31861__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31819_31862__$1)){
var c__4461__auto___31863 = cljs.core.chunk_first.call(null,seq__31819_31862__$1);
var G__31864 = cljs.core.chunk_rest.call(null,seq__31819_31862__$1);
var G__31865 = c__4461__auto___31863;
var G__31866 = cljs.core.count.call(null,c__4461__auto___31863);
var G__31867 = (0);
seq__31819_31852 = G__31864;
chunk__31820_31853 = G__31865;
count__31821_31854 = G__31866;
i__31822_31855 = G__31867;
continue;
} else {
var req_31868 = cljs.core.first.call(null,seq__31819_31862__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31868,prov);


var G__31869 = cljs.core.next.call(null,seq__31819_31862__$1);
var G__31870 = null;
var G__31871 = (0);
var G__31872 = (0);
seq__31819_31852 = G__31869;
chunk__31820_31853 = G__31870;
count__31821_31854 = G__31871;
i__31822_31855 = G__31872;
continue;
}
} else {
}
}
break;
}


var G__31873 = cljs.core.next.call(null,seq__31811__$1);
var G__31874 = null;
var G__31875 = (0);
var G__31876 = (0);
seq__31811 = G__31873;
chunk__31812 = G__31874;
count__31813 = G__31875;
i__31814 = G__31876;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__31877_31881 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__31878_31882 = null;
var count__31879_31883 = (0);
var i__31880_31884 = (0);
while(true){
if((i__31880_31884 < count__31879_31883)){
var ns_31885 = cljs.core._nth.call(null,chunk__31878_31882,i__31880_31884);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31885);


var G__31886 = seq__31877_31881;
var G__31887 = chunk__31878_31882;
var G__31888 = count__31879_31883;
var G__31889 = (i__31880_31884 + (1));
seq__31877_31881 = G__31886;
chunk__31878_31882 = G__31887;
count__31879_31883 = G__31888;
i__31880_31884 = G__31889;
continue;
} else {
var temp__5720__auto___31890 = cljs.core.seq.call(null,seq__31877_31881);
if(temp__5720__auto___31890){
var seq__31877_31891__$1 = temp__5720__auto___31890;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31877_31891__$1)){
var c__4461__auto___31892 = cljs.core.chunk_first.call(null,seq__31877_31891__$1);
var G__31893 = cljs.core.chunk_rest.call(null,seq__31877_31891__$1);
var G__31894 = c__4461__auto___31892;
var G__31895 = cljs.core.count.call(null,c__4461__auto___31892);
var G__31896 = (0);
seq__31877_31881 = G__31893;
chunk__31878_31882 = G__31894;
count__31879_31883 = G__31895;
i__31880_31884 = G__31896;
continue;
} else {
var ns_31897 = cljs.core.first.call(null,seq__31877_31891__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31897);


var G__31898 = cljs.core.next.call(null,seq__31877_31891__$1);
var G__31899 = null;
var G__31900 = (0);
var G__31901 = (0);
seq__31877_31881 = G__31898;
chunk__31878_31882 = G__31899;
count__31879_31883 = G__31900;
i__31880_31884 = G__31901;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4047__auto__ = goog.require__;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__31902__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__31902 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31903__i = 0, G__31903__a = new Array(arguments.length -  0);
while (G__31903__i < G__31903__a.length) {G__31903__a[G__31903__i] = arguments[G__31903__i + 0]; ++G__31903__i;}
  args = new cljs.core.IndexedSeq(G__31903__a,0,null);
} 
return G__31902__delegate.call(this,args);};
G__31902.cljs$lang$maxFixedArity = 0;
G__31902.cljs$lang$applyTo = (function (arglist__31904){
var args = cljs.core.seq(arglist__31904);
return G__31902__delegate(args);
});
G__31902.cljs$core$IFn$_invoke$arity$variadic = G__31902__delegate;
return G__31902;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__31905_SHARP_,p2__31906_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__31905_SHARP_)),p2__31906_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__31907_SHARP_,p2__31908_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__31907_SHARP_),p2__31908_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__31909 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__31909.addCallback(((function (G__31909){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__31909))
);

G__31909.addErrback(((function (G__31909){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__31909))
);

return G__31909;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e31910){if((e31910 instanceof Error)){
var e = e31910;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e31910;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e31911){if((e31911 instanceof Error)){
var e = e31911;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e31911;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__31912 = cljs.core._EQ_;
var expr__31913 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__31912.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__31913))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__31912.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__31913))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__31912.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__31913))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__31912,expr__31913){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__31912,expr__31913))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__31915,callback){
var map__31916 = p__31915;
var map__31916__$1 = (((((!((map__31916 == null))))?(((((map__31916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31916.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31916):map__31916);
var file_msg = map__31916__$1;
var request_url = cljs.core.get.call(null,map__31916__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4047__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__31916,map__31916__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__31916,map__31916__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__27212__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27212__auto__){
return (function (){
var f__27213__auto__ = (function (){var switch__27045__auto__ = ((function (c__27212__auto__){
return (function (state_31954){
var state_val_31955 = (state_31954[(1)]);
if((state_val_31955 === (7))){
var inst_31950 = (state_31954[(2)]);
var state_31954__$1 = state_31954;
var statearr_31956_31982 = state_31954__$1;
(statearr_31956_31982[(2)] = inst_31950);

(statearr_31956_31982[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31955 === (1))){
var state_31954__$1 = state_31954;
var statearr_31957_31983 = state_31954__$1;
(statearr_31957_31983[(2)] = null);

(statearr_31957_31983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31955 === (4))){
var inst_31920 = (state_31954[(7)]);
var inst_31920__$1 = (state_31954[(2)]);
var state_31954__$1 = (function (){var statearr_31958 = state_31954;
(statearr_31958[(7)] = inst_31920__$1);

return statearr_31958;
})();
if(cljs.core.truth_(inst_31920__$1)){
var statearr_31959_31984 = state_31954__$1;
(statearr_31959_31984[(1)] = (5));

} else {
var statearr_31960_31985 = state_31954__$1;
(statearr_31960_31985[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31955 === (15))){
var inst_31933 = (state_31954[(8)]);
var inst_31935 = (state_31954[(9)]);
var inst_31937 = inst_31935.call(null,inst_31933);
var state_31954__$1 = state_31954;
var statearr_31961_31986 = state_31954__$1;
(statearr_31961_31986[(2)] = inst_31937);

(statearr_31961_31986[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31955 === (13))){
var inst_31944 = (state_31954[(2)]);
var state_31954__$1 = state_31954;
var statearr_31962_31987 = state_31954__$1;
(statearr_31962_31987[(2)] = inst_31944);

(statearr_31962_31987[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31955 === (6))){
var state_31954__$1 = state_31954;
var statearr_31963_31988 = state_31954__$1;
(statearr_31963_31988[(2)] = null);

(statearr_31963_31988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31955 === (17))){
var inst_31941 = (state_31954[(2)]);
var state_31954__$1 = state_31954;
var statearr_31964_31989 = state_31954__$1;
(statearr_31964_31989[(2)] = inst_31941);

(statearr_31964_31989[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31955 === (3))){
var inst_31952 = (state_31954[(2)]);
var state_31954__$1 = state_31954;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31954__$1,inst_31952);
} else {
if((state_val_31955 === (12))){
var state_31954__$1 = state_31954;
var statearr_31965_31990 = state_31954__$1;
(statearr_31965_31990[(2)] = null);

(statearr_31965_31990[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31955 === (2))){
var state_31954__$1 = state_31954;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31954__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_31955 === (11))){
var inst_31925 = (state_31954[(10)]);
var inst_31931 = figwheel.client.file_reloading.blocking_load.call(null,inst_31925);
var state_31954__$1 = state_31954;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31954__$1,(14),inst_31931);
} else {
if((state_val_31955 === (9))){
var inst_31925 = (state_31954[(10)]);
var state_31954__$1 = state_31954;
if(cljs.core.truth_(inst_31925)){
var statearr_31966_31991 = state_31954__$1;
(statearr_31966_31991[(1)] = (11));

} else {
var statearr_31967_31992 = state_31954__$1;
(statearr_31967_31992[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31955 === (5))){
var inst_31926 = (state_31954[(11)]);
var inst_31920 = (state_31954[(7)]);
var inst_31925 = cljs.core.nth.call(null,inst_31920,(0),null);
var inst_31926__$1 = cljs.core.nth.call(null,inst_31920,(1),null);
var state_31954__$1 = (function (){var statearr_31968 = state_31954;
(statearr_31968[(11)] = inst_31926__$1);

(statearr_31968[(10)] = inst_31925);

return statearr_31968;
})();
if(cljs.core.truth_(inst_31926__$1)){
var statearr_31969_31993 = state_31954__$1;
(statearr_31969_31993[(1)] = (8));

} else {
var statearr_31970_31994 = state_31954__$1;
(statearr_31970_31994[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31955 === (14))){
var inst_31935 = (state_31954[(9)]);
var inst_31925 = (state_31954[(10)]);
var inst_31933 = (state_31954[(2)]);
var inst_31934 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_31935__$1 = cljs.core.get.call(null,inst_31934,inst_31925);
var state_31954__$1 = (function (){var statearr_31971 = state_31954;
(statearr_31971[(8)] = inst_31933);

(statearr_31971[(9)] = inst_31935__$1);

return statearr_31971;
})();
if(cljs.core.truth_(inst_31935__$1)){
var statearr_31972_31995 = state_31954__$1;
(statearr_31972_31995[(1)] = (15));

} else {
var statearr_31973_31996 = state_31954__$1;
(statearr_31973_31996[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31955 === (16))){
var inst_31933 = (state_31954[(8)]);
var inst_31939 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_31933);
var state_31954__$1 = state_31954;
var statearr_31974_31997 = state_31954__$1;
(statearr_31974_31997[(2)] = inst_31939);

(statearr_31974_31997[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31955 === (10))){
var inst_31946 = (state_31954[(2)]);
var state_31954__$1 = (function (){var statearr_31975 = state_31954;
(statearr_31975[(12)] = inst_31946);

return statearr_31975;
})();
var statearr_31976_31998 = state_31954__$1;
(statearr_31976_31998[(2)] = null);

(statearr_31976_31998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31955 === (8))){
var inst_31926 = (state_31954[(11)]);
var inst_31928 = eval(inst_31926);
var state_31954__$1 = state_31954;
var statearr_31977_31999 = state_31954__$1;
(statearr_31977_31999[(2)] = inst_31928);

(statearr_31977_31999[(1)] = (10));


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
});})(c__27212__auto__))
;
return ((function (switch__27045__auto__,c__27212__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__27046__auto__ = null;
var figwheel$client$file_reloading$state_machine__27046__auto____0 = (function (){
var statearr_31978 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31978[(0)] = figwheel$client$file_reloading$state_machine__27046__auto__);

(statearr_31978[(1)] = (1));

return statearr_31978;
});
var figwheel$client$file_reloading$state_machine__27046__auto____1 = (function (state_31954){
while(true){
var ret_value__27047__auto__ = (function (){try{while(true){
var result__27048__auto__ = switch__27045__auto__.call(null,state_31954);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27048__auto__;
}
break;
}
}catch (e31979){if((e31979 instanceof Object)){
var ex__27049__auto__ = e31979;
var statearr_31980_32000 = state_31954;
(statearr_31980_32000[(5)] = ex__27049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31954);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31979;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32001 = state_31954;
state_31954 = G__32001;
continue;
} else {
return ret_value__27047__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27046__auto__ = function(state_31954){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27046__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27046__auto____1.call(this,state_31954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__27046__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27046__auto____0;
figwheel$client$file_reloading$state_machine__27046__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27046__auto____1;
return figwheel$client$file_reloading$state_machine__27046__auto__;
})()
;})(switch__27045__auto__,c__27212__auto__))
})();
var state__27214__auto__ = (function (){var statearr_31981 = f__27213__auto__.call(null);
(statearr_31981[(6)] = c__27212__auto__);

return statearr_31981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27214__auto__);
});})(c__27212__auto__))
);

return c__27212__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__32003 = arguments.length;
switch (G__32003) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__32005,callback){
var map__32006 = p__32005;
var map__32006__$1 = (((((!((map__32006 == null))))?(((((map__32006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32006.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32006):map__32006);
var file_msg = map__32006__$1;
var namespace = cljs.core.get.call(null,map__32006__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__32006,map__32006__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__32006,map__32006__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__32008){
var map__32009 = p__32008;
var map__32009__$1 = (((((!((map__32009 == null))))?(((((map__32009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32009.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32009):map__32009);
var file_msg = map__32009__$1;
var namespace = cljs.core.get.call(null,map__32009__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__32011){
var map__32012 = p__32011;
var map__32012__$1 = (((((!((map__32012 == null))))?(((((map__32012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32012.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32012):map__32012);
var file_msg = map__32012__$1;
var namespace = cljs.core.get.call(null,map__32012__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4036__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4036__auto__){
var or__4047__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
var or__4047__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4047__auto____$2)){
return or__4047__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4036__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__32014,callback){
var map__32015 = p__32014;
var map__32015__$1 = (((((!((map__32015 == null))))?(((((map__32015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32015.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32015):map__32015);
var file_msg = map__32015__$1;
var request_url = cljs.core.get.call(null,map__32015__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__32015__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__27212__auto___32065 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27212__auto___32065,out){
return (function (){
var f__27213__auto__ = (function (){var switch__27045__auto__ = ((function (c__27212__auto___32065,out){
return (function (state_32050){
var state_val_32051 = (state_32050[(1)]);
if((state_val_32051 === (1))){
var inst_32024 = cljs.core.seq.call(null,files);
var inst_32025 = cljs.core.first.call(null,inst_32024);
var inst_32026 = cljs.core.next.call(null,inst_32024);
var inst_32027 = files;
var state_32050__$1 = (function (){var statearr_32052 = state_32050;
(statearr_32052[(7)] = inst_32027);

(statearr_32052[(8)] = inst_32025);

(statearr_32052[(9)] = inst_32026);

return statearr_32052;
})();
var statearr_32053_32066 = state_32050__$1;
(statearr_32053_32066[(2)] = null);

(statearr_32053_32066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32051 === (2))){
var inst_32033 = (state_32050[(10)]);
var inst_32027 = (state_32050[(7)]);
var inst_32032 = cljs.core.seq.call(null,inst_32027);
var inst_32033__$1 = cljs.core.first.call(null,inst_32032);
var inst_32034 = cljs.core.next.call(null,inst_32032);
var inst_32035 = (inst_32033__$1 == null);
var inst_32036 = cljs.core.not.call(null,inst_32035);
var state_32050__$1 = (function (){var statearr_32054 = state_32050;
(statearr_32054[(11)] = inst_32034);

(statearr_32054[(10)] = inst_32033__$1);

return statearr_32054;
})();
if(inst_32036){
var statearr_32055_32067 = state_32050__$1;
(statearr_32055_32067[(1)] = (4));

} else {
var statearr_32056_32068 = state_32050__$1;
(statearr_32056_32068[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32051 === (3))){
var inst_32048 = (state_32050[(2)]);
var state_32050__$1 = state_32050;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32050__$1,inst_32048);
} else {
if((state_val_32051 === (4))){
var inst_32033 = (state_32050[(10)]);
var inst_32038 = figwheel.client.file_reloading.reload_js_file.call(null,inst_32033);
var state_32050__$1 = state_32050;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32050__$1,(7),inst_32038);
} else {
if((state_val_32051 === (5))){
var inst_32044 = cljs.core.async.close_BANG_.call(null,out);
var state_32050__$1 = state_32050;
var statearr_32057_32069 = state_32050__$1;
(statearr_32057_32069[(2)] = inst_32044);

(statearr_32057_32069[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32051 === (6))){
var inst_32046 = (state_32050[(2)]);
var state_32050__$1 = state_32050;
var statearr_32058_32070 = state_32050__$1;
(statearr_32058_32070[(2)] = inst_32046);

(statearr_32058_32070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32051 === (7))){
var inst_32034 = (state_32050[(11)]);
var inst_32040 = (state_32050[(2)]);
var inst_32041 = cljs.core.async.put_BANG_.call(null,out,inst_32040);
var inst_32027 = inst_32034;
var state_32050__$1 = (function (){var statearr_32059 = state_32050;
(statearr_32059[(7)] = inst_32027);

(statearr_32059[(12)] = inst_32041);

return statearr_32059;
})();
var statearr_32060_32071 = state_32050__$1;
(statearr_32060_32071[(2)] = null);

(statearr_32060_32071[(1)] = (2));


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
});})(c__27212__auto___32065,out))
;
return ((function (switch__27045__auto__,c__27212__auto___32065,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27046__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27046__auto____0 = (function (){
var statearr_32061 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32061[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27046__auto__);

(statearr_32061[(1)] = (1));

return statearr_32061;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27046__auto____1 = (function (state_32050){
while(true){
var ret_value__27047__auto__ = (function (){try{while(true){
var result__27048__auto__ = switch__27045__auto__.call(null,state_32050);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27048__auto__;
}
break;
}
}catch (e32062){if((e32062 instanceof Object)){
var ex__27049__auto__ = e32062;
var statearr_32063_32072 = state_32050;
(statearr_32063_32072[(5)] = ex__27049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32050);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32062;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32073 = state_32050;
state_32050 = G__32073;
continue;
} else {
return ret_value__27047__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27046__auto__ = function(state_32050){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27046__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27046__auto____1.call(this,state_32050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27046__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27046__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27046__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27046__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27046__auto__;
})()
;})(switch__27045__auto__,c__27212__auto___32065,out))
})();
var state__27214__auto__ = (function (){var statearr_32064 = f__27213__auto__.call(null);
(statearr_32064[(6)] = c__27212__auto___32065);

return statearr_32064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27214__auto__);
});})(c__27212__auto___32065,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__32074,opts){
var map__32075 = p__32074;
var map__32075__$1 = (((((!((map__32075 == null))))?(((((map__32075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32075.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32075):map__32075);
var eval_body = cljs.core.get.call(null,map__32075__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__32075__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4036__auto__ = eval_body;
if(cljs.core.truth_(and__4036__auto__)){
return typeof eval_body === 'string';
} else {
return and__4036__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e32077){var e = e32077;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__32078_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32078_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5718__auto__)){
var file_msg = temp__5718__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__32079){
var vec__32080 = p__32079;
var k = cljs.core.nth.call(null,vec__32080,(0),null);
var v = cljs.core.nth.call(null,vec__32080,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__32083){
var vec__32084 = p__32083;
var k = cljs.core.nth.call(null,vec__32084,(0),null);
var v = cljs.core.nth.call(null,vec__32084,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__32090,p__32091){
var map__32092 = p__32090;
var map__32092__$1 = (((((!((map__32092 == null))))?(((((map__32092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32092):map__32092);
var opts = map__32092__$1;
var before_jsload = cljs.core.get.call(null,map__32092__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__32092__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__32092__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__32093 = p__32091;
var map__32093__$1 = (((((!((map__32093 == null))))?(((((map__32093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32093):map__32093);
var msg = map__32093__$1;
var files = cljs.core.get.call(null,map__32093__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__32093__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__32093__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27212__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27212__auto__,map__32092,map__32092__$1,opts,before_jsload,on_jsload,reload_dependents,map__32093,map__32093__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__27213__auto__ = (function (){var switch__27045__auto__ = ((function (c__27212__auto__,map__32092,map__32092__$1,opts,before_jsload,on_jsload,reload_dependents,map__32093,map__32093__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_32247){
var state_val_32248 = (state_32247[(1)]);
if((state_val_32248 === (7))){
var inst_32108 = (state_32247[(7)]);
var inst_32109 = (state_32247[(8)]);
var inst_32107 = (state_32247[(9)]);
var inst_32110 = (state_32247[(10)]);
var inst_32115 = cljs.core._nth.call(null,inst_32108,inst_32110);
var inst_32116 = figwheel.client.file_reloading.eval_body.call(null,inst_32115,opts);
var inst_32117 = (inst_32110 + (1));
var tmp32249 = inst_32108;
var tmp32250 = inst_32109;
var tmp32251 = inst_32107;
var inst_32107__$1 = tmp32251;
var inst_32108__$1 = tmp32249;
var inst_32109__$1 = tmp32250;
var inst_32110__$1 = inst_32117;
var state_32247__$1 = (function (){var statearr_32252 = state_32247;
(statearr_32252[(7)] = inst_32108__$1);

(statearr_32252[(8)] = inst_32109__$1);

(statearr_32252[(9)] = inst_32107__$1);

(statearr_32252[(11)] = inst_32116);

(statearr_32252[(10)] = inst_32110__$1);

return statearr_32252;
})();
var statearr_32253_32336 = state_32247__$1;
(statearr_32253_32336[(2)] = null);

(statearr_32253_32336[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (20))){
var inst_32150 = (state_32247[(12)]);
var inst_32158 = figwheel.client.file_reloading.sort_files.call(null,inst_32150);
var state_32247__$1 = state_32247;
var statearr_32254_32337 = state_32247__$1;
(statearr_32254_32337[(2)] = inst_32158);

(statearr_32254_32337[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (27))){
var state_32247__$1 = state_32247;
var statearr_32255_32338 = state_32247__$1;
(statearr_32255_32338[(2)] = null);

(statearr_32255_32338[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (1))){
var inst_32099 = (state_32247[(13)]);
var inst_32096 = before_jsload.call(null,files);
var inst_32097 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_32098 = (function (){return ((function (inst_32099,inst_32096,inst_32097,state_val_32248,c__27212__auto__,map__32092,map__32092__$1,opts,before_jsload,on_jsload,reload_dependents,map__32093,map__32093__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32087_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32087_SHARP_);
});
;})(inst_32099,inst_32096,inst_32097,state_val_32248,c__27212__auto__,map__32092,map__32092__$1,opts,before_jsload,on_jsload,reload_dependents,map__32093,map__32093__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32099__$1 = cljs.core.filter.call(null,inst_32098,files);
var inst_32100 = cljs.core.not_empty.call(null,inst_32099__$1);
var state_32247__$1 = (function (){var statearr_32256 = state_32247;
(statearr_32256[(14)] = inst_32097);

(statearr_32256[(13)] = inst_32099__$1);

(statearr_32256[(15)] = inst_32096);

return statearr_32256;
})();
if(cljs.core.truth_(inst_32100)){
var statearr_32257_32339 = state_32247__$1;
(statearr_32257_32339[(1)] = (2));

} else {
var statearr_32258_32340 = state_32247__$1;
(statearr_32258_32340[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (24))){
var state_32247__$1 = state_32247;
var statearr_32259_32341 = state_32247__$1;
(statearr_32259_32341[(2)] = null);

(statearr_32259_32341[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (39))){
var inst_32200 = (state_32247[(16)]);
var state_32247__$1 = state_32247;
var statearr_32260_32342 = state_32247__$1;
(statearr_32260_32342[(2)] = inst_32200);

(statearr_32260_32342[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (46))){
var inst_32242 = (state_32247[(2)]);
var state_32247__$1 = state_32247;
var statearr_32261_32343 = state_32247__$1;
(statearr_32261_32343[(2)] = inst_32242);

(statearr_32261_32343[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (4))){
var inst_32144 = (state_32247[(2)]);
var inst_32145 = cljs.core.List.EMPTY;
var inst_32146 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_32145);
var inst_32147 = (function (){return ((function (inst_32144,inst_32145,inst_32146,state_val_32248,c__27212__auto__,map__32092,map__32092__$1,opts,before_jsload,on_jsload,reload_dependents,map__32093,map__32093__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32088_SHARP_){
var and__4036__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32088_SHARP_);
if(cljs.core.truth_(and__4036__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32088_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__32088_SHARP_))));
} else {
return and__4036__auto__;
}
});
;})(inst_32144,inst_32145,inst_32146,state_val_32248,c__27212__auto__,map__32092,map__32092__$1,opts,before_jsload,on_jsload,reload_dependents,map__32093,map__32093__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32148 = cljs.core.filter.call(null,inst_32147,files);
var inst_32149 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_32150 = cljs.core.concat.call(null,inst_32148,inst_32149);
var state_32247__$1 = (function (){var statearr_32262 = state_32247;
(statearr_32262[(17)] = inst_32144);

(statearr_32262[(18)] = inst_32146);

(statearr_32262[(12)] = inst_32150);

return statearr_32262;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_32263_32344 = state_32247__$1;
(statearr_32263_32344[(1)] = (16));

} else {
var statearr_32264_32345 = state_32247__$1;
(statearr_32264_32345[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (15))){
var inst_32134 = (state_32247[(2)]);
var state_32247__$1 = state_32247;
var statearr_32265_32346 = state_32247__$1;
(statearr_32265_32346[(2)] = inst_32134);

(statearr_32265_32346[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (21))){
var inst_32160 = (state_32247[(19)]);
var inst_32160__$1 = (state_32247[(2)]);
var inst_32161 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_32160__$1);
var state_32247__$1 = (function (){var statearr_32266 = state_32247;
(statearr_32266[(19)] = inst_32160__$1);

return statearr_32266;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32247__$1,(22),inst_32161);
} else {
if((state_val_32248 === (31))){
var inst_32245 = (state_32247[(2)]);
var state_32247__$1 = state_32247;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32247__$1,inst_32245);
} else {
if((state_val_32248 === (32))){
var inst_32200 = (state_32247[(16)]);
var inst_32205 = inst_32200.cljs$lang$protocol_mask$partition0$;
var inst_32206 = (inst_32205 & (64));
var inst_32207 = inst_32200.cljs$core$ISeq$;
var inst_32208 = (cljs.core.PROTOCOL_SENTINEL === inst_32207);
var inst_32209 = ((inst_32206) || (inst_32208));
var state_32247__$1 = state_32247;
if(cljs.core.truth_(inst_32209)){
var statearr_32267_32347 = state_32247__$1;
(statearr_32267_32347[(1)] = (35));

} else {
var statearr_32268_32348 = state_32247__$1;
(statearr_32268_32348[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (40))){
var inst_32222 = (state_32247[(20)]);
var inst_32221 = (state_32247[(2)]);
var inst_32222__$1 = cljs.core.get.call(null,inst_32221,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_32223 = cljs.core.get.call(null,inst_32221,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_32224 = cljs.core.not_empty.call(null,inst_32222__$1);
var state_32247__$1 = (function (){var statearr_32269 = state_32247;
(statearr_32269[(21)] = inst_32223);

(statearr_32269[(20)] = inst_32222__$1);

return statearr_32269;
})();
if(cljs.core.truth_(inst_32224)){
var statearr_32270_32349 = state_32247__$1;
(statearr_32270_32349[(1)] = (41));

} else {
var statearr_32271_32350 = state_32247__$1;
(statearr_32271_32350[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (33))){
var state_32247__$1 = state_32247;
var statearr_32272_32351 = state_32247__$1;
(statearr_32272_32351[(2)] = false);

(statearr_32272_32351[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (13))){
var inst_32120 = (state_32247[(22)]);
var inst_32124 = cljs.core.chunk_first.call(null,inst_32120);
var inst_32125 = cljs.core.chunk_rest.call(null,inst_32120);
var inst_32126 = cljs.core.count.call(null,inst_32124);
var inst_32107 = inst_32125;
var inst_32108 = inst_32124;
var inst_32109 = inst_32126;
var inst_32110 = (0);
var state_32247__$1 = (function (){var statearr_32273 = state_32247;
(statearr_32273[(7)] = inst_32108);

(statearr_32273[(8)] = inst_32109);

(statearr_32273[(9)] = inst_32107);

(statearr_32273[(10)] = inst_32110);

return statearr_32273;
})();
var statearr_32274_32352 = state_32247__$1;
(statearr_32274_32352[(2)] = null);

(statearr_32274_32352[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (22))){
var inst_32160 = (state_32247[(19)]);
var inst_32164 = (state_32247[(23)]);
var inst_32163 = (state_32247[(24)]);
var inst_32168 = (state_32247[(25)]);
var inst_32163__$1 = (state_32247[(2)]);
var inst_32164__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32163__$1);
var inst_32165 = (function (){var all_files = inst_32160;
var res_SINGLEQUOTE_ = inst_32163__$1;
var res = inst_32164__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_32160,inst_32164,inst_32163,inst_32168,inst_32163__$1,inst_32164__$1,state_val_32248,c__27212__auto__,map__32092,map__32092__$1,opts,before_jsload,on_jsload,reload_dependents,map__32093,map__32093__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32089_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__32089_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_32160,inst_32164,inst_32163,inst_32168,inst_32163__$1,inst_32164__$1,state_val_32248,c__27212__auto__,map__32092,map__32092__$1,opts,before_jsload,on_jsload,reload_dependents,map__32093,map__32093__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32166 = cljs.core.filter.call(null,inst_32165,inst_32163__$1);
var inst_32167 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_32168__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32167);
var inst_32169 = cljs.core.not_empty.call(null,inst_32168__$1);
var state_32247__$1 = (function (){var statearr_32275 = state_32247;
(statearr_32275[(23)] = inst_32164__$1);

(statearr_32275[(24)] = inst_32163__$1);

(statearr_32275[(26)] = inst_32166);

(statearr_32275[(25)] = inst_32168__$1);

return statearr_32275;
})();
if(cljs.core.truth_(inst_32169)){
var statearr_32276_32353 = state_32247__$1;
(statearr_32276_32353[(1)] = (23));

} else {
var statearr_32277_32354 = state_32247__$1;
(statearr_32277_32354[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (36))){
var state_32247__$1 = state_32247;
var statearr_32278_32355 = state_32247__$1;
(statearr_32278_32355[(2)] = false);

(statearr_32278_32355[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (41))){
var inst_32222 = (state_32247[(20)]);
var inst_32226 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_32227 = cljs.core.map.call(null,inst_32226,inst_32222);
var inst_32228 = cljs.core.pr_str.call(null,inst_32227);
var inst_32229 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32228)].join('');
var inst_32230 = figwheel.client.utils.log.call(null,inst_32229);
var state_32247__$1 = state_32247;
var statearr_32279_32356 = state_32247__$1;
(statearr_32279_32356[(2)] = inst_32230);

(statearr_32279_32356[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (43))){
var inst_32223 = (state_32247[(21)]);
var inst_32233 = (state_32247[(2)]);
var inst_32234 = cljs.core.not_empty.call(null,inst_32223);
var state_32247__$1 = (function (){var statearr_32280 = state_32247;
(statearr_32280[(27)] = inst_32233);

return statearr_32280;
})();
if(cljs.core.truth_(inst_32234)){
var statearr_32281_32357 = state_32247__$1;
(statearr_32281_32357[(1)] = (44));

} else {
var statearr_32282_32358 = state_32247__$1;
(statearr_32282_32358[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (29))){
var inst_32160 = (state_32247[(19)]);
var inst_32164 = (state_32247[(23)]);
var inst_32163 = (state_32247[(24)]);
var inst_32166 = (state_32247[(26)]);
var inst_32200 = (state_32247[(16)]);
var inst_32168 = (state_32247[(25)]);
var inst_32196 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_32199 = (function (){var all_files = inst_32160;
var res_SINGLEQUOTE_ = inst_32163;
var res = inst_32164;
var files_not_loaded = inst_32166;
var dependencies_that_loaded = inst_32168;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32160,inst_32164,inst_32163,inst_32166,inst_32200,inst_32168,inst_32196,state_val_32248,c__27212__auto__,map__32092,map__32092__$1,opts,before_jsload,on_jsload,reload_dependents,map__32093,map__32093__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32198){
var map__32283 = p__32198;
var map__32283__$1 = (((((!((map__32283 == null))))?(((((map__32283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32283.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32283):map__32283);
var namespace = cljs.core.get.call(null,map__32283__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32160,inst_32164,inst_32163,inst_32166,inst_32200,inst_32168,inst_32196,state_val_32248,c__27212__auto__,map__32092,map__32092__$1,opts,before_jsload,on_jsload,reload_dependents,map__32093,map__32093__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32200__$1 = cljs.core.group_by.call(null,inst_32199,inst_32166);
var inst_32202 = (inst_32200__$1 == null);
var inst_32203 = cljs.core.not.call(null,inst_32202);
var state_32247__$1 = (function (){var statearr_32285 = state_32247;
(statearr_32285[(28)] = inst_32196);

(statearr_32285[(16)] = inst_32200__$1);

return statearr_32285;
})();
if(inst_32203){
var statearr_32286_32359 = state_32247__$1;
(statearr_32286_32359[(1)] = (32));

} else {
var statearr_32287_32360 = state_32247__$1;
(statearr_32287_32360[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (44))){
var inst_32223 = (state_32247[(21)]);
var inst_32236 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32223);
var inst_32237 = cljs.core.pr_str.call(null,inst_32236);
var inst_32238 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32237)].join('');
var inst_32239 = figwheel.client.utils.log.call(null,inst_32238);
var state_32247__$1 = state_32247;
var statearr_32288_32361 = state_32247__$1;
(statearr_32288_32361[(2)] = inst_32239);

(statearr_32288_32361[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (6))){
var inst_32141 = (state_32247[(2)]);
var state_32247__$1 = state_32247;
var statearr_32289_32362 = state_32247__$1;
(statearr_32289_32362[(2)] = inst_32141);

(statearr_32289_32362[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (28))){
var inst_32166 = (state_32247[(26)]);
var inst_32193 = (state_32247[(2)]);
var inst_32194 = cljs.core.not_empty.call(null,inst_32166);
var state_32247__$1 = (function (){var statearr_32290 = state_32247;
(statearr_32290[(29)] = inst_32193);

return statearr_32290;
})();
if(cljs.core.truth_(inst_32194)){
var statearr_32291_32363 = state_32247__$1;
(statearr_32291_32363[(1)] = (29));

} else {
var statearr_32292_32364 = state_32247__$1;
(statearr_32292_32364[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (25))){
var inst_32164 = (state_32247[(23)]);
var inst_32180 = (state_32247[(2)]);
var inst_32181 = cljs.core.not_empty.call(null,inst_32164);
var state_32247__$1 = (function (){var statearr_32293 = state_32247;
(statearr_32293[(30)] = inst_32180);

return statearr_32293;
})();
if(cljs.core.truth_(inst_32181)){
var statearr_32294_32365 = state_32247__$1;
(statearr_32294_32365[(1)] = (26));

} else {
var statearr_32295_32366 = state_32247__$1;
(statearr_32295_32366[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (34))){
var inst_32216 = (state_32247[(2)]);
var state_32247__$1 = state_32247;
if(cljs.core.truth_(inst_32216)){
var statearr_32296_32367 = state_32247__$1;
(statearr_32296_32367[(1)] = (38));

} else {
var statearr_32297_32368 = state_32247__$1;
(statearr_32297_32368[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (17))){
var state_32247__$1 = state_32247;
var statearr_32298_32369 = state_32247__$1;
(statearr_32298_32369[(2)] = recompile_dependents);

(statearr_32298_32369[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (3))){
var state_32247__$1 = state_32247;
var statearr_32299_32370 = state_32247__$1;
(statearr_32299_32370[(2)] = null);

(statearr_32299_32370[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (12))){
var inst_32137 = (state_32247[(2)]);
var state_32247__$1 = state_32247;
var statearr_32300_32371 = state_32247__$1;
(statearr_32300_32371[(2)] = inst_32137);

(statearr_32300_32371[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (2))){
var inst_32099 = (state_32247[(13)]);
var inst_32106 = cljs.core.seq.call(null,inst_32099);
var inst_32107 = inst_32106;
var inst_32108 = null;
var inst_32109 = (0);
var inst_32110 = (0);
var state_32247__$1 = (function (){var statearr_32301 = state_32247;
(statearr_32301[(7)] = inst_32108);

(statearr_32301[(8)] = inst_32109);

(statearr_32301[(9)] = inst_32107);

(statearr_32301[(10)] = inst_32110);

return statearr_32301;
})();
var statearr_32302_32372 = state_32247__$1;
(statearr_32302_32372[(2)] = null);

(statearr_32302_32372[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (23))){
var inst_32160 = (state_32247[(19)]);
var inst_32164 = (state_32247[(23)]);
var inst_32163 = (state_32247[(24)]);
var inst_32166 = (state_32247[(26)]);
var inst_32168 = (state_32247[(25)]);
var inst_32171 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_32173 = (function (){var all_files = inst_32160;
var res_SINGLEQUOTE_ = inst_32163;
var res = inst_32164;
var files_not_loaded = inst_32166;
var dependencies_that_loaded = inst_32168;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32160,inst_32164,inst_32163,inst_32166,inst_32168,inst_32171,state_val_32248,c__27212__auto__,map__32092,map__32092__$1,opts,before_jsload,on_jsload,reload_dependents,map__32093,map__32093__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32172){
var map__32303 = p__32172;
var map__32303__$1 = (((((!((map__32303 == null))))?(((((map__32303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32303.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32303):map__32303);
var request_url = cljs.core.get.call(null,map__32303__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32160,inst_32164,inst_32163,inst_32166,inst_32168,inst_32171,state_val_32248,c__27212__auto__,map__32092,map__32092__$1,opts,before_jsload,on_jsload,reload_dependents,map__32093,map__32093__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32174 = cljs.core.reverse.call(null,inst_32168);
var inst_32175 = cljs.core.map.call(null,inst_32173,inst_32174);
var inst_32176 = cljs.core.pr_str.call(null,inst_32175);
var inst_32177 = figwheel.client.utils.log.call(null,inst_32176);
var state_32247__$1 = (function (){var statearr_32305 = state_32247;
(statearr_32305[(31)] = inst_32171);

return statearr_32305;
})();
var statearr_32306_32373 = state_32247__$1;
(statearr_32306_32373[(2)] = inst_32177);

(statearr_32306_32373[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (35))){
var state_32247__$1 = state_32247;
var statearr_32307_32374 = state_32247__$1;
(statearr_32307_32374[(2)] = true);

(statearr_32307_32374[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (19))){
var inst_32150 = (state_32247[(12)]);
var inst_32156 = figwheel.client.file_reloading.expand_files.call(null,inst_32150);
var state_32247__$1 = state_32247;
var statearr_32308_32375 = state_32247__$1;
(statearr_32308_32375[(2)] = inst_32156);

(statearr_32308_32375[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (11))){
var state_32247__$1 = state_32247;
var statearr_32309_32376 = state_32247__$1;
(statearr_32309_32376[(2)] = null);

(statearr_32309_32376[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (9))){
var inst_32139 = (state_32247[(2)]);
var state_32247__$1 = state_32247;
var statearr_32310_32377 = state_32247__$1;
(statearr_32310_32377[(2)] = inst_32139);

(statearr_32310_32377[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (5))){
var inst_32109 = (state_32247[(8)]);
var inst_32110 = (state_32247[(10)]);
var inst_32112 = (inst_32110 < inst_32109);
var inst_32113 = inst_32112;
var state_32247__$1 = state_32247;
if(cljs.core.truth_(inst_32113)){
var statearr_32311_32378 = state_32247__$1;
(statearr_32311_32378[(1)] = (7));

} else {
var statearr_32312_32379 = state_32247__$1;
(statearr_32312_32379[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (14))){
var inst_32120 = (state_32247[(22)]);
var inst_32129 = cljs.core.first.call(null,inst_32120);
var inst_32130 = figwheel.client.file_reloading.eval_body.call(null,inst_32129,opts);
var inst_32131 = cljs.core.next.call(null,inst_32120);
var inst_32107 = inst_32131;
var inst_32108 = null;
var inst_32109 = (0);
var inst_32110 = (0);
var state_32247__$1 = (function (){var statearr_32313 = state_32247;
(statearr_32313[(32)] = inst_32130);

(statearr_32313[(7)] = inst_32108);

(statearr_32313[(8)] = inst_32109);

(statearr_32313[(9)] = inst_32107);

(statearr_32313[(10)] = inst_32110);

return statearr_32313;
})();
var statearr_32314_32380 = state_32247__$1;
(statearr_32314_32380[(2)] = null);

(statearr_32314_32380[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (45))){
var state_32247__$1 = state_32247;
var statearr_32315_32381 = state_32247__$1;
(statearr_32315_32381[(2)] = null);

(statearr_32315_32381[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (26))){
var inst_32160 = (state_32247[(19)]);
var inst_32164 = (state_32247[(23)]);
var inst_32163 = (state_32247[(24)]);
var inst_32166 = (state_32247[(26)]);
var inst_32168 = (state_32247[(25)]);
var inst_32183 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_32185 = (function (){var all_files = inst_32160;
var res_SINGLEQUOTE_ = inst_32163;
var res = inst_32164;
var files_not_loaded = inst_32166;
var dependencies_that_loaded = inst_32168;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32160,inst_32164,inst_32163,inst_32166,inst_32168,inst_32183,state_val_32248,c__27212__auto__,map__32092,map__32092__$1,opts,before_jsload,on_jsload,reload_dependents,map__32093,map__32093__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32184){
var map__32316 = p__32184;
var map__32316__$1 = (((((!((map__32316 == null))))?(((((map__32316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32316):map__32316);
var namespace = cljs.core.get.call(null,map__32316__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__32316__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32160,inst_32164,inst_32163,inst_32166,inst_32168,inst_32183,state_val_32248,c__27212__auto__,map__32092,map__32092__$1,opts,before_jsload,on_jsload,reload_dependents,map__32093,map__32093__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32186 = cljs.core.map.call(null,inst_32185,inst_32164);
var inst_32187 = cljs.core.pr_str.call(null,inst_32186);
var inst_32188 = figwheel.client.utils.log.call(null,inst_32187);
var inst_32189 = (function (){var all_files = inst_32160;
var res_SINGLEQUOTE_ = inst_32163;
var res = inst_32164;
var files_not_loaded = inst_32166;
var dependencies_that_loaded = inst_32168;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32160,inst_32164,inst_32163,inst_32166,inst_32168,inst_32183,inst_32185,inst_32186,inst_32187,inst_32188,state_val_32248,c__27212__auto__,map__32092,map__32092__$1,opts,before_jsload,on_jsload,reload_dependents,map__32093,map__32093__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32160,inst_32164,inst_32163,inst_32166,inst_32168,inst_32183,inst_32185,inst_32186,inst_32187,inst_32188,state_val_32248,c__27212__auto__,map__32092,map__32092__$1,opts,before_jsload,on_jsload,reload_dependents,map__32093,map__32093__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32190 = setTimeout(inst_32189,(10));
var state_32247__$1 = (function (){var statearr_32318 = state_32247;
(statearr_32318[(33)] = inst_32188);

(statearr_32318[(34)] = inst_32183);

return statearr_32318;
})();
var statearr_32319_32382 = state_32247__$1;
(statearr_32319_32382[(2)] = inst_32190);

(statearr_32319_32382[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (16))){
var state_32247__$1 = state_32247;
var statearr_32320_32383 = state_32247__$1;
(statearr_32320_32383[(2)] = reload_dependents);

(statearr_32320_32383[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (38))){
var inst_32200 = (state_32247[(16)]);
var inst_32218 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32200);
var state_32247__$1 = state_32247;
var statearr_32321_32384 = state_32247__$1;
(statearr_32321_32384[(2)] = inst_32218);

(statearr_32321_32384[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (30))){
var state_32247__$1 = state_32247;
var statearr_32322_32385 = state_32247__$1;
(statearr_32322_32385[(2)] = null);

(statearr_32322_32385[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (10))){
var inst_32120 = (state_32247[(22)]);
var inst_32122 = cljs.core.chunked_seq_QMARK_.call(null,inst_32120);
var state_32247__$1 = state_32247;
if(inst_32122){
var statearr_32323_32386 = state_32247__$1;
(statearr_32323_32386[(1)] = (13));

} else {
var statearr_32324_32387 = state_32247__$1;
(statearr_32324_32387[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (18))){
var inst_32154 = (state_32247[(2)]);
var state_32247__$1 = state_32247;
if(cljs.core.truth_(inst_32154)){
var statearr_32325_32388 = state_32247__$1;
(statearr_32325_32388[(1)] = (19));

} else {
var statearr_32326_32389 = state_32247__$1;
(statearr_32326_32389[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (42))){
var state_32247__$1 = state_32247;
var statearr_32327_32390 = state_32247__$1;
(statearr_32327_32390[(2)] = null);

(statearr_32327_32390[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (37))){
var inst_32213 = (state_32247[(2)]);
var state_32247__$1 = state_32247;
var statearr_32328_32391 = state_32247__$1;
(statearr_32328_32391[(2)] = inst_32213);

(statearr_32328_32391[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (8))){
var inst_32107 = (state_32247[(9)]);
var inst_32120 = (state_32247[(22)]);
var inst_32120__$1 = cljs.core.seq.call(null,inst_32107);
var state_32247__$1 = (function (){var statearr_32329 = state_32247;
(statearr_32329[(22)] = inst_32120__$1);

return statearr_32329;
})();
if(inst_32120__$1){
var statearr_32330_32392 = state_32247__$1;
(statearr_32330_32392[(1)] = (10));

} else {
var statearr_32331_32393 = state_32247__$1;
(statearr_32331_32393[(1)] = (11));

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
});})(c__27212__auto__,map__32092,map__32092__$1,opts,before_jsload,on_jsload,reload_dependents,map__32093,map__32093__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__27045__auto__,c__27212__auto__,map__32092,map__32092__$1,opts,before_jsload,on_jsload,reload_dependents,map__32093,map__32093__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27046__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27046__auto____0 = (function (){
var statearr_32332 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32332[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27046__auto__);

(statearr_32332[(1)] = (1));

return statearr_32332;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27046__auto____1 = (function (state_32247){
while(true){
var ret_value__27047__auto__ = (function (){try{while(true){
var result__27048__auto__ = switch__27045__auto__.call(null,state_32247);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27048__auto__;
}
break;
}
}catch (e32333){if((e32333 instanceof Object)){
var ex__27049__auto__ = e32333;
var statearr_32334_32394 = state_32247;
(statearr_32334_32394[(5)] = ex__27049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32247);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32333;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32395 = state_32247;
state_32247 = G__32395;
continue;
} else {
return ret_value__27047__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27046__auto__ = function(state_32247){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27046__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27046__auto____1.call(this,state_32247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27046__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27046__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27046__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27046__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27046__auto__;
})()
;})(switch__27045__auto__,c__27212__auto__,map__32092,map__32092__$1,opts,before_jsload,on_jsload,reload_dependents,map__32093,map__32093__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__27214__auto__ = (function (){var statearr_32335 = f__27213__auto__.call(null);
(statearr_32335[(6)] = c__27212__auto__);

return statearr_32335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27214__auto__);
});})(c__27212__auto__,map__32092,map__32092__$1,opts,before_jsload,on_jsload,reload_dependents,map__32093,map__32093__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__27212__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__32398,link){
var map__32399 = p__32398;
var map__32399__$1 = (((((!((map__32399 == null))))?(((((map__32399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32399.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32399):map__32399);
var file = cljs.core.get.call(null,map__32399__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5720__auto__,map__32399,map__32399__$1,file){
return (function (p1__32396_SHARP_,p2__32397_SHARP_){
if(cljs.core._EQ_.call(null,p1__32396_SHARP_,p2__32397_SHARP_)){
return p1__32396_SHARP_;
} else {
return false;
}
});})(link_href,temp__5720__auto__,map__32399,map__32399__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__32402){
var map__32403 = p__32402;
var map__32403__$1 = (((((!((map__32403 == null))))?(((((map__32403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32403.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32403):map__32403);
var match_length = cljs.core.get.call(null,map__32403__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__32403__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__32401_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__32401_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5720__auto__)){
var res = temp__5720__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__32405_SHARP_,p2__32406_SHARP_){
return cljs.core.assoc.call(null,p1__32405_SHARP_,cljs.core.get.call(null,p2__32406_SHARP_,key),p2__32406_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5718__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5718__auto__)){
var link = temp__5718__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5718__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5718__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_32407 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_32407);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_32407);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__32408,p__32409){
var map__32410 = p__32408;
var map__32410__$1 = (((((!((map__32410 == null))))?(((((map__32410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32410.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32410):map__32410);
var on_cssload = cljs.core.get.call(null,map__32410__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__32411 = p__32409;
var map__32411__$1 = (((((!((map__32411 == null))))?(((((map__32411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32411.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32411):map__32411);
var files_msg = map__32411__$1;
var files = cljs.core.get.call(null,map__32411__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5720__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5720__auto__)){
var f_datas = temp__5720__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1553581600097
