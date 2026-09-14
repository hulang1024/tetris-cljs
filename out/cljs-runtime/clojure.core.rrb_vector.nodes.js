goog.provide('clojure.core.rrb_vector.nodes');
clojure.core.rrb_vector.nodes.empty_node = cljs.core.PersistentVector.EMPTY_NODE;
clojure.core.rrb_vector.nodes.clone = (function clojure$core$rrb_vector$nodes$clone(shift,node){
return (new cljs.core.VectorNode(node.edit,cljs.core.aclone(node.arr)));
});
clojure.core.rrb_vector.nodes.regular_QMARK_ = (function clojure$core$rrb_vector$nodes$regular_QMARK_(node){
return (!((node.arr.length === (33))));
});
clojure.core.rrb_vector.nodes.node_ranges = (function clojure$core$rrb_vector$nodes$node_ranges(node){
return (node.arr[(32)]);
});
clojure.core.rrb_vector.nodes.last_range = (function clojure$core$rrb_vector$nodes$last_range(node){
var rngs = clojure.core.rrb_vector.nodes.node_ranges(node);
var i = ((rngs[(32)]) - (1));
return (rngs[i]);
});
clojure.core.rrb_vector.nodes.regular_ranges = (function clojure$core$rrb_vector$nodes$regular_ranges(shift,cnt){
var step = ((1) << shift);
var rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var i = (0);
var r = step;
while(true){
if((r < cnt)){
(rngs[i] = r);

var G__26929 = (i + (1));
var G__26930 = (r + step);
i = G__26929;
r = G__26930;
continue;
} else {
(rngs[i] = cnt);

(rngs[(32)] = (i + (1)));

return rngs;
}
break;
}
});
clojure.core.rrb_vector.nodes.overflow_QMARK_ = (function clojure$core$rrb_vector$nodes$overflow_QMARK_(root,shift,cnt){
while(true){
if(clojure.core.rrb_vector.nodes.regular_QMARK_(root)){
return ((cnt >> (5)) > ((1) << shift));
} else {
var rngs = clojure.core.rrb_vector.nodes.node_ranges(root);
var slc = (rngs[(32)]);
var and__5160__auto__ = (slc === (32));
if(and__5160__auto__){
var or__5162__auto__ = (shift === (5));
if(or__5162__auto__){
return or__5162__auto__;
} else {
var G__26936 = (root.arr[(slc - (1))]);
var G__26937 = (shift - (5));
var G__26938 = (((rngs[(31)]) - (rngs[(30)])) + (32));
root = G__26936;
shift = G__26937;
cnt = G__26938;
continue;
}
} else {
return and__5160__auto__;
}
}
break;
}
});
clojure.core.rrb_vector.nodes.index_of_0 = (function clojure$core$rrb_vector$nodes$index_of_0(arr){
var l = (0);
var h = (31);
while(true){
if((l >= (h - (1)))){
if((((arr[l]) | 0) === (0))){
return l;
} else {
if((((arr[h]) | 0) === (0))){
return h;
} else {
return (32);
}
}
} else {
var mid = (l + ((h - l) >> (1)));
if((((arr[mid]) | 0) === (0))){
var G__26940 = l;
var G__26941 = mid;
l = G__26940;
h = G__26941;
continue;
} else {
var G__26942 = (mid + (1));
var G__26943 = h;
l = G__26942;
h = G__26943;
continue;
}
}
break;
}
});
clojure.core.rrb_vector.nodes.index_of_nil = (function clojure$core$rrb_vector$nodes$index_of_nil(arr){
var l = (0);
var h = (31);
while(true){
if((l >= (h - (1)))){
if(((arr[l]) == null)){
return l;
} else {
if(((arr[h]) == null)){
return h;
} else {
return (32);
}
}
} else {
var mid = (l + ((h - l) >> (1)));
if(((arr[mid]) == null)){
var G__26946 = l;
var G__26947 = mid;
l = G__26946;
h = G__26947;
continue;
} else {
var G__26948 = (mid + (1));
var G__26949 = h;
l = G__26948;
h = G__26949;
continue;
}
}
break;
}
});
clojure.core.rrb_vector.nodes.first_child = (function clojure$core$rrb_vector$nodes$first_child(node){
return (node.arr[(0)]);
});
clojure.core.rrb_vector.nodes.last_child = (function clojure$core$rrb_vector$nodes$last_child(node){
var arr = node.arr;
if(clojure.core.rrb_vector.nodes.regular_QMARK_(node)){
return (arr[(clojure.core.rrb_vector.nodes.index_of_nil(arr) - (1))]);
} else {
return (arr[((clojure.core.rrb_vector.nodes.node_ranges(node)[(32)]) - (1))]);
}
});
clojure.core.rrb_vector.nodes.remove_leftmost_child = (function clojure$core$rrb_vector$nodes$remove_leftmost_child(shift,parent){
var arr = parent.arr;
if(((arr[(1)]) == null)){
return null;
} else {
var r_QMARK_ = clojure.core.rrb_vector.nodes.regular_QMARK_(parent);
var new_arr = (new Array(((r_QMARK_)?(32):(33))));
cljs.core.array_copy(arr,(1),new_arr,(0),(31));

if((!(r_QMARK_))){
var rngs_26950 = clojure.core.rrb_vector.nodes.node_ranges(parent);
var rng0_26951 = (rngs_26950[(0)]);
var new_rngs_26952 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var lim_26953 = (rngs_26950[(32)]);
cljs.core.array_copy(rngs_26950,(1),new_rngs_26952,(0),(lim_26953 - (1)));

var i_26959 = (0);
while(true){
if((i_26959 < lim_26953)){
(new_rngs_26952[i_26959] = ((new_rngs_26952[i_26959]) - rng0_26951));

var G__26961 = (i_26959 + (1));
i_26959 = G__26961;
continue;
} else {
}
break;
}

(new_rngs_26952[(32)] = ((rngs_26950[(32)]) - (1)));

(new_rngs_26952[((rngs_26950[(32)]) - (1))] = (0));

(new_arr[(32)] = new_rngs_26952);
} else {
}

return cljs.core.__GT_VectorNode(parent.edit,new_arr);
}
});
clojure.core.rrb_vector.nodes.replace_leftmost_child = (function clojure$core$rrb_vector$nodes$replace_leftmost_child(shift,parent,pcnt,child,d){
if(clojure.core.rrb_vector.nodes.regular_QMARK_(parent)){
var step = ((1) << shift);
var rng0 = (step - d);
var ncnt = (pcnt - d);
var li = ((shift >> (pcnt - (1))) & (31));
var arr = parent.arr;
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(new_arr[(0)] = child);

cljs.core.array_copy(arr,(1),new_arr,(1),li);

(new_arr[(32)] = new_rngs);

(new_rngs[(0)] = rng0);

(new_rngs[li] = ncnt);

(new_rngs[(32)] = (li + (1)));

var i_26962 = (1);
while(true){
if((i_26962 <= li)){
(new_rngs[i_26962] = ((new_rngs[(i_26962 - (1))]) + step));

var G__26963 = (i_26962 + (1));
i_26962 = G__26963;
continue;
} else {
}
break;
}

return cljs.core.__GT_VectorNode(null,new_arr);
} else {
var new_arr = cljs.core.aclone(parent.arr);
var rngs = clojure.core.rrb_vector.nodes.node_ranges(parent);
var new_rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var li = ((rngs[(32)]) - (1));
(new_rngs[(32)] = (rngs[(32)]));

(new_arr[(32)] = new_rngs);

(new_arr[(0)] = child);

var i_26964 = (0);
while(true){
if((i_26964 <= li)){
(new_rngs[i_26964] = ((rngs[i_26964]) - d));

var G__26965 = (i_26964 + (1));
i_26964 = G__26965;
continue;
} else {
}
break;
}

return cljs.core.__GT_VectorNode(null,new_arr);
}
});
clojure.core.rrb_vector.nodes.replace_rightmost_child = (function clojure$core$rrb_vector$nodes$replace_rightmost_child(shift,parent,child,d){
if(clojure.core.rrb_vector.nodes.regular_QMARK_(parent)){
var arr = parent.arr;
var i = (clojure.core.rrb_vector.nodes.index_of_nil(arr) - (1));
if(clojure.core.rrb_vector.nodes.regular_QMARK_(child)){
var new_arr = cljs.core.aclone(arr);
(new_arr[i] = child);

return cljs.core.__GT_VectorNode(null,new_arr);
} else {
var arr__$1 = parent.arr;
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var step = ((1) << shift);
var rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(rngs[(32)] = (i + (1)));

(new_arr[(32)] = rngs);

cljs.core.array_copy(arr__$1,(0),new_arr,(0),i);

(new_arr[i] = child);

var j_26972 = (0);
var r_26973 = step;
while(true){
if((j_26972 <= i)){
(rngs[j_26972] = r_26973);

var G__26977 = (j_26972 + (1));
var G__26978 = (r_26973 + step);
j_26972 = G__26977;
r_26973 = G__26978;
continue;
} else {
}
break;
}

(rngs[i] = clojure.core.rrb_vector.nodes.last_range(child));

return cljs.core.__GT_VectorNode(null,new_arr);
}
} else {
var rngs = clojure.core.rrb_vector.nodes.node_ranges(parent);
var new_rngs = cljs.core.aclone(rngs);
var i = ((rngs[(32)]) - (1));
var new_arr = cljs.core.aclone(parent.arr);
(new_arr[i] = child);

(new_arr[(32)] = new_rngs);

(new_rngs[i] = ((rngs[i]) + d));

return cljs.core.__GT_VectorNode(null,new_arr);
}
});
clojure.core.rrb_vector.nodes.new_path_STAR_ = (function clojure$core$rrb_vector$nodes$new_path_STAR_(shift,node){
var reg_QMARK_ = ((32) === node.arr.length);
var len = ((reg_QMARK_)?(32):(33));
var arr = (new Array(len));
var rngs = (((!(reg_QMARK_)))?(function (){var G__26904 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(G__26904[(0)] = node.arr.length);

(G__26904[(32)] = (1));

return G__26904;
})():null);
var ret = cljs.core.__GT_VectorNode(null,arr);
var arr_26983__$1 = arr;
var shift_26984__$1 = shift;
while(true){
if((shift_26984__$1 === (5))){
if((!(reg_QMARK_))){
(arr_26983__$1[(32)] = rngs);
} else {
}

(arr_26983__$1[(0)] = node);
} else {
var a_26985 = (new Array(len));
var e_26986 = cljs.core.__GT_VectorNode(null,a_26985);
(arr_26983__$1[(0)] = e_26986);

if((!(reg_QMARK_))){
(arr_26983__$1[(32)] = rngs);
} else {
}

var G__26987 = a_26985;
var G__26988 = (shift_26984__$1 - (5));
arr_26983__$1 = G__26987;
shift_26984__$1 = G__26988;
continue;
}
break;
}

return ret;
});
clojure.core.rrb_vector.nodes.fold_tail = (function clojure$core$rrb_vector$nodes$fold_tail(node,shift,cnt,tail){
var tlen = tail.length;
var reg_QMARK_ = ((clojure.core.rrb_vector.nodes.regular_QMARK_(node)) && ((tlen === (32))));
var arr = node.arr;
var li = clojure.core.rrb_vector.nodes.index_of_nil(arr);
var new_arr = (new Array(((reg_QMARK_)?(32):(33))));
var rngs = (((!(clojure.core.rrb_vector.nodes.regular_QMARK_(node))))?clojure.core.rrb_vector.nodes.node_ranges(node):null);
var cret = (((shift === (5)))?cljs.core.__GT_VectorNode(null,tail):(function (){var G__26913 = (arr[(li - (1))]);
var G__26914 = (shift - (5));
var G__26915 = ((clojure.core.rrb_vector.nodes.regular_QMARK_(node))?cljs.core.mod(cnt,((1) << shift)):(function (){var li__$1 = ((rngs[(32)]) - (1));
if((li__$1 > (0))){
return ((rngs[li__$1]) - (rngs[(li__$1 - (1))]));
} else {
return (rngs[(0)]);
}
})());
var G__26916 = tail;
return (clojure.core.rrb_vector.nodes.fold_tail.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.nodes.fold_tail.cljs$core$IFn$_invoke$arity$4(G__26913,G__26914,G__26915,G__26916) : clojure.core.rrb_vector.nodes.fold_tail.call(null,G__26913,G__26914,G__26915,G__26916));
})());
var new_rngs = (((!(reg_QMARK_)))?(cljs.core.truth_(rngs)?cljs.core.aclone(rngs):clojure.core.rrb_vector.nodes.regular_ranges(shift,cnt)):null);
if((((((cret == null)) || ((shift === (5))))) && ((li === (32))))){
return null;
} else {
cljs.core.array_copy(arr,(0),new_arr,(0),li);

if(reg_QMARK_){
} else {
if((((cret == null)) || ((shift === (5))))){
(new_rngs[li] = ((((li > (0)))?(new_rngs[(li - (1))]):((0) | 0)) + tlen));

(new_rngs[(32)] = (li + (1)));
} else {
if((li > (0))){
(new_rngs[(li - (1))] = ((new_rngs[(li - (1))]) + tlen));
} else {
}

(new_rngs[(32)] = li);
}
}

if((!(reg_QMARK_))){
(new_arr[(32)] = new_rngs);
} else {
}

if((cret == null)){
(new_arr[li] = clojure.core.rrb_vector.nodes.new_path_STAR_((shift - (5)),cljs.core.__GT_VectorNode(null,tail)));
} else {
(new_arr[(((shift === (5)))?li:(li - (1)))] = cret);
}

return cljs.core.__GT_VectorNode(null,new_arr);
}
});

//# sourceMappingURL=clojure.core.rrb_vector.nodes.js.map
