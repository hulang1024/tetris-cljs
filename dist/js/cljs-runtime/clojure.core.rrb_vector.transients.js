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
var n_53828 = ret;
var shift_53829__$1 = shift;
while(true){
var arr_53830 = n_53828.arr;
var subidx_53831 = (((cnt - (1)) >> shift_53829__$1) & (31));
if((shift_53829__$1 === (5))){
(arr_53830[subidx_53831] = tail_node);
} else {
var child_53833 = (arr_53830[subidx_53831]);
if((child_53833 == null)){
(arr_53830[subidx_53831] = clojure.core.rrb_vector.trees.new_path(tail_node.arr,root_edit,(shift_53829__$1 - (5)),tail_node));
} else {
var editable_child_53834 = clojure.core.rrb_vector.transients.ensure_editable(root_edit,child_53833);
(arr_53830[subidx_53831] = editable_child_53834);

var G__53835 = editable_child_53834;
var G__53836 = (shift_53829__$1 - (5));
n_53828 = G__53835;
shift_53829__$1 = G__53836;
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
var G__53764 = (shift - (5));
var G__53765 = ccnt;
var G__53766 = root_edit;
var G__53767 = child;
var G__53768 = tail_node;
return (clojure.core.rrb_vector.transients.push_tail_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.transients.push_tail_BANG_.cljs$core$IFn$_invoke$arity$5(G__53764,G__53765,G__53766,G__53767,G__53768) : clojure.core.rrb_vector.transients.push_tail_BANG_.call(null,G__53764,G__53765,G__53766,G__53767,G__53768));
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
var msg_53840 = (""+"Assigning index "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((li + (1)))+" of vector"+" object array to become a node, when that"+" index should only be used for storing"+" range arrays.");
var data_53841 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"shift","shift",997140064),shift,new cljs.core.Keyword(null,"cnd","cnd",-521882032),cnt,new cljs.core.Keyword(null,"current-node","current-node",-814308842),current_node,new cljs.core.Keyword(null,"tail-node","tail-node",-1373693221),tail_node,new cljs.core.Keyword(null,"rngs","rngs",-8039697),rngs,new cljs.core.Keyword(null,"li","li",723558921),li,new cljs.core.Keyword(null,"cret","cret",2090504467),cret], null);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(msg_53840,data_53841);
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
var child = (function (){var G__53784 = (shift - (5));
var G__53785 = cnt;
var G__53786 = root_edit;
var G__53787 = (ret.arr[subidx]);
return (clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4(G__53784,G__53785,G__53786,G__53787) : clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,G__53784,G__53785,G__53786,G__53787));
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
var new_child = (function (){var G__53803 = (shift - (5));
var G__53804 = child_cnt;
var G__53805 = root_edit;
var G__53806 = child;
return (clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4(G__53803,G__53804,G__53805,G__53806) : clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,G__53803,G__53804,G__53805,G__53806));
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
var shift_53856__$1 = shift;
var node_53857 = ret;
while(true){
if((shift_53856__$1 === (0))){
var arr_53858 = node_53857.arr;
(arr_53858[(i & (31))] = val);
} else {
var arr_53859 = node_53857.arr;
var subidx_53860 = ((i >> shift_53856__$1) & (31));
var child_53861 = clojure.core.rrb_vector.transients.ensure_editable(root_edit,(arr_53859[subidx_53860]));
(arr_53859[subidx_53860] = child_53861);

var G__53862 = (shift_53856__$1 - (5));
var G__53863 = child_53861;
shift_53856__$1 = G__53862;
node_53857 = G__53863;
continue;
}
break;
}
} else {
var arr_53864 = ret.arr;
var rngs_53865 = clojure.core.rrb_vector.nodes.node_ranges(ret);
var subidx_53866 = ((i >> shift) & (31));
var subidx_53867__$1 = (function (){var subidx_53867__$1 = subidx_53866;
while(true){
if((i < ((rngs_53865[subidx_53867__$1]) | 0))){
return subidx_53867__$1;
} else {
var G__53869 = (subidx_53867__$1 + (1));
subidx_53867__$1 = G__53869;
continue;
}
break;
}
})();
var i_53868__$1 = (((subidx_53867__$1 === (0)))?i:(i - (rngs_53865[(subidx_53867__$1 - (1))])));
(arr_53864[subidx_53867__$1] = (function (){var G__53815 = (shift - (5));
var G__53816 = root_edit;
var G__53817 = (arr_53864[subidx_53867__$1]);
var G__53818 = i_53868__$1;
var G__53819 = val;
return (clojure.core.rrb_vector.transients.do_assoc_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.transients.do_assoc_BANG_.cljs$core$IFn$_invoke$arity$5(G__53815,G__53816,G__53817,G__53818,G__53819) : clojure.core.rrb_vector.transients.do_assoc_BANG_.call(null,G__53815,G__53816,G__53817,G__53818,G__53819));
})());
}

return ret;
});

//# sourceMappingURL=clojure.core.rrb_vector.transients.js.map
