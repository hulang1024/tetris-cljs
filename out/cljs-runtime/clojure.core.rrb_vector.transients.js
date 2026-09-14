goog.provide('clojure.core.rrb_vector.transients');
clojure.core.rrb_vector.transients.ensure_editable = (function clojure$core$rrb_vector$transients$ensure_editable(edit,node){
if((node.edit === edit)){
return node;
} else {
var new_arr = cljs.core.aclone(node.arr);
if(((33) === new_arr.length)){
(new_arr[(32)] = cljs.core.aclone((new_arr[(32)])));
} else {
}

return (new cljs.core.VectorNode(edit,new_arr));
}
});
clojure.core.rrb_vector.transients.editable_root = (function clojure$core$rrb_vector$transients$editable_root(root){
var new_arr = cljs.core.aclone(root.arr);
if(((33) === new_arr.length)){
(new_arr[(32)] = cljs.core.aclone((new_arr[(32)])));
} else {
}

return (new cljs.core.VectorNode(({}),new_arr));
});
clojure.core.rrb_vector.transients.editable_tail = (function clojure$core$rrb_vector$transients$editable_tail(tail){
var ret = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
cljs.core.array_copy(tail,(0),ret,(0),tail.length);

return ret;
});
clojure.core.rrb_vector.transients.push_tail_BANG_ = (function clojure$core$rrb_vector$transients$push_tail_BANG_(shift,cnt,root_edit,current_node,tail_node){
var ret = clojure.core.rrb_vector.transients.ensure_editable(root_edit,current_node);
if(clojure.core.rrb_vector.nodes.regular_QMARK_(ret)){
var n_27100 = ret;
var shift_27101__$1 = shift;
while(true){
var arr_27107 = n_27100.arr;
var subidx_27108 = (((cnt - (1)) >> shift_27101__$1) & (31));
if((shift_27101__$1 === (5))){
(arr_27107[subidx_27108] = tail_node);
} else {
var child_27109 = (arr_27107[subidx_27108]);
if((child_27109 == null)){
(arr_27107[subidx_27108] = clojure.core.rrb_vector.trees.new_path(tail_node.arr,root_edit,(shift_27101__$1 - (5)),tail_node));
} else {
var editable_child_27111 = clojure.core.rrb_vector.transients.ensure_editable(root_edit,child_27109);
(arr_27107[subidx_27108] = editable_child_27111);

var G__27114 = editable_child_27111;
var G__27115 = (shift_27101__$1 - (5));
n_27100 = G__27114;
shift_27101__$1 = G__27115;
continue;
}
}
break;
}

return ret;
} else {
var arr = ret.arr;
var rngs = clojure.core.rrb_vector.nodes.node_ranges(ret);
var li = ((rngs[(32)]) - (1));
var cret = (((shift === (5)))?null:(function (){var child = clojure.core.rrb_vector.transients.ensure_editable(root_edit,(arr[li]));
var ccnt = ((((li > (0)))?((rngs[li]) - (rngs[(li - (1))])):(rngs[(0)])) + (32));
if((!(clojure.core.rrb_vector.nodes.overflow_QMARK_(child,(shift - (5)),ccnt)))){
var G__27031 = (shift - (5));
var G__27032 = ccnt;
var G__27033 = root_edit;
var G__27034 = child;
var G__27035 = tail_node;
return (clojure.core.rrb_vector.transients.push_tail_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.transients.push_tail_BANG_.cljs$core$IFn$_invoke$arity$5(G__27031,G__27032,G__27033,G__27034,G__27035) : clojure.core.rrb_vector.transients.push_tail_BANG_.call(null,G__27031,G__27032,G__27033,G__27034,G__27035));
} else {
return null;
}
})());
if(cljs.core.truth_(cret)){
(arr[li] = cret);

(rngs[li] = ((rngs[li]) + (32)));

return ret;
} else {
if((li >= (31))){
var msg_27133 = (""+"Assigning index "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((li + (1)))+" of vector"+" object array to become a node, when that"+" index should only be used for storing"+" range arrays.");
var data_27134 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"shift","shift",997140064),shift,new cljs.core.Keyword(null,"cnd","cnd",-521882032),cnt,new cljs.core.Keyword(null,"current-node","current-node",-814308842),current_node,new cljs.core.Keyword(null,"tail-node","tail-node",-1373693221),tail_node,new cljs.core.Keyword(null,"rngs","rngs",-8039697),rngs,new cljs.core.Keyword(null,"li","li",723558921),li,new cljs.core.Keyword(null,"cret","cret",2090504467),cret], null);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(msg_27133,data_27134);
} else {
}

(arr[(li + (1))] = clojure.core.rrb_vector.trees.new_path(tail_node.arr,root_edit,(shift - (5)),tail_node));

(rngs[(li + (1))] = ((rngs[li]) + (32)));

(rngs[(32)] = ((rngs[(32)]) + (1)));

return ret;
}
}
});
clojure.core.rrb_vector.transients.pop_tail_BANG_ = (function clojure$core$rrb_vector$transients$pop_tail_BANG_(shift,cnt,root_edit,current_node){
var ret = clojure.core.rrb_vector.transients.ensure_editable(root_edit,current_node);
if(clojure.core.rrb_vector.nodes.regular_QMARK_(ret)){
var subidx = (((cnt - (2)) >> shift) & (31));
if((shift > (5))){
var child = (function (){var G__27038 = (shift - (5));
var G__27039 = cnt;
var G__27040 = root_edit;
var G__27041 = (ret.arr[subidx]);
return (clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4(G__27038,G__27039,G__27040,G__27041) : clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,G__27038,G__27039,G__27040,G__27041));
})();
if((((child == null)) && ((subidx === (0))))){
return null;
} else {
var arr = ret.arr;
(arr[subidx] = child);

return ret;
}
} else {
if((subidx === (0))){
return null;
} else {
var arr = ret.arr;
(arr[subidx] = null);

return ret;

}
}
} else {
var rngs = clojure.core.rrb_vector.nodes.node_ranges(ret);
var subidx = ((rngs[(32)]) - (1));
if((shift > (5))){
var child = (ret.arr[subidx]);
var child_cnt = (((subidx === (0)))?(rngs[(0)]):((rngs[subidx]) - (rngs[(subidx - (1))])));
var new_child = (function (){var G__27052 = (shift - (5));
var G__27053 = child_cnt;
var G__27054 = root_edit;
var G__27055 = child;
return (clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4(G__27052,G__27053,G__27054,G__27055) : clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,G__27052,G__27053,G__27054,G__27055));
})();
if((((new_child == null)) && ((subidx === (0))))){
return null;
} else {
if(clojure.core.rrb_vector.nodes.regular_QMARK_(child)){
var arr = ret.arr;
(rngs[subidx] = ((rngs[subidx]) - (32)));

(arr[subidx] = new_child);

if((new_child == null)){
(rngs[(32)] = ((rngs[(32)]) - (1)));
} else {
}

return ret;
} else {
var rng = clojure.core.rrb_vector.nodes.last_range(child);
var diff = (rng - (cljs.core.truth_(new_child)?clojure.core.rrb_vector.nodes.last_range(new_child):(0)));
var arr = ret.arr;
(rngs[subidx] = ((rngs[subidx]) - diff));

(arr[subidx] = new_child);

if((new_child == null)){
(rngs[(32)] = ((rngs[(32)]) - (1)));
} else {
}

return ret;

}
}
} else {
if((subidx === (0))){
return null;
} else {
var arr = ret.arr;
var child = (arr[subidx]);
(arr[subidx] = null);

(rngs[subidx] = (0));

(rngs[(32)] = ((rngs[(32)]) - (1)));

return ret;

}
}
}
});
clojure.core.rrb_vector.transients.do_assoc_BANG_ = (function clojure$core$rrb_vector$transients$do_assoc_BANG_(shift,root_edit,current_node,i,val){
var ret = clojure.core.rrb_vector.transients.ensure_editable(root_edit,current_node);
if(clojure.core.rrb_vector.nodes.regular_QMARK_(ret)){
var shift_27161__$1 = shift;
var node_27162 = ret;
while(true){
if((shift_27161__$1 === (0))){
var arr_27163 = node_27162.arr;
(arr_27163[(i & (31))] = val);
} else {
var arr_27164 = node_27162.arr;
var subidx_27165 = ((i >> shift_27161__$1) & (31));
var child_27166 = clojure.core.rrb_vector.transients.ensure_editable(root_edit,(arr_27164[subidx_27165]));
(arr_27164[subidx_27165] = child_27166);

var G__27167 = (shift_27161__$1 - (5));
var G__27168 = child_27166;
shift_27161__$1 = G__27167;
node_27162 = G__27168;
continue;
}
break;
}
} else {
var arr_27169 = ret.arr;
var rngs_27170 = clojure.core.rrb_vector.nodes.node_ranges(ret);
var subidx_27171 = ((i >> shift) & (31));
var subidx_27172__$1 = (function (){var subidx_27172__$1 = subidx_27171;
while(true){
if((i < ((rngs_27170[subidx_27172__$1]) | 0))){
return subidx_27172__$1;
} else {
var G__27174 = (subidx_27172__$1 + (1));
subidx_27172__$1 = G__27174;
continue;
}
break;
}
})();
var i_27173__$1 = (((subidx_27172__$1 === (0)))?i:(i - (rngs_27170[(subidx_27172__$1 - (1))])));
(arr_27169[subidx_27172__$1] = (function (){var G__27081 = (shift - (5));
var G__27082 = root_edit;
var G__27083 = (arr_27169[subidx_27172__$1]);
var G__27084 = i_27173__$1;
var G__27085 = val;
return (clojure.core.rrb_vector.transients.do_assoc_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.transients.do_assoc_BANG_.cljs$core$IFn$_invoke$arity$5(G__27081,G__27082,G__27083,G__27084,G__27085) : clojure.core.rrb_vector.transients.do_assoc_BANG_.call(null,G__27081,G__27082,G__27083,G__27084,G__27085));
})());
}

return ret;
});

//# sourceMappingURL=clojure.core.rrb_vector.transients.js.map
