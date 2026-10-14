goog.provide('tetris.options_store');
tetris.options_store.Handling = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"das","das",-1801456200),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"arr","arr",474961448),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sdf","sdf",-844168232),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)], null)], null)], null);
tetris.options_store.Button = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"keyboard","keyboard",-617357087),new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.Keyword(null,"gamepad","gamepad",1856451262)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null);
tetris.options_store.ButtonSlots = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),tetris.options_store.Button], null)], null);
tetris.options_store.Controls = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"soft-drop","soft-drop",-123150289),tetris.options_store.ButtonSlots], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-left","move-left",-271562811),tetris.options_store.ButtonSlots], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-right","move-right",1661359569),tetris.options_store.ButtonSlots], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotate-cw","rotate-cw",83272937),tetris.options_store.ButtonSlots], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotate-ccw","rotate-ccw",885172263),tetris.options_store.ButtonSlots], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotate-180","rotate-180",605917905),tetris.options_store.ButtonSlots], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hard-drop","hard-drop",1211458322),tetris.options_store.ButtonSlots], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hold","hold",-1621118005),tetris.options_store.ButtonSlots], null)], null);
tetris.options_store.Options = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handling","handling",349360979),tetris.options_store.Handling], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),tetris.options_store.Controls], null)], null);
tetris.options_store.default_options = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handling","handling",349360979),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"das","das",-1801456200),(8),new cljs.core.Keyword(null,"arr","arr",474961448),(2),new cljs.core.Keyword(null,"sdf","sdf",-844168232),(8)], null),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"soft-drop","soft-drop",-123150289),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyboard","keyboard",-617357087),new cljs.core.Keyword(null,"button","button",1456579943),"ArrowDown"], null)], null),new cljs.core.Keyword(null,"move-left","move-left",-271562811),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyboard","keyboard",-617357087),new cljs.core.Keyword(null,"button","button",1456579943),"ArrowLeft"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyboard","keyboard",-617357087),new cljs.core.Keyword(null,"button","button",1456579943),"Num4"], null)], null),new cljs.core.Keyword(null,"move-right","move-right",1661359569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyboard","keyboard",-617357087),new cljs.core.Keyword(null,"button","button",1456579943),"ArrowRight"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyboard","keyboard",-617357087),new cljs.core.Keyword(null,"button","button",1456579943),"Num6"], null)], null),new cljs.core.Keyword(null,"rotate-cw","rotate-cw",83272937),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyboard","keyboard",-617357087),new cljs.core.Keyword(null,"button","button",1456579943),"KeyX"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyboard","keyboard",-617357087),new cljs.core.Keyword(null,"button","button",1456579943),"ArrowUp"], null)], null),new cljs.core.Keyword(null,"rotate-ccw","rotate-ccw",885172263),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyboard","keyboard",-617357087),new cljs.core.Keyword(null,"button","button",1456579943),"KeyZ"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyboard","keyboard",-617357087),new cljs.core.Keyword(null,"button","button",1456579943),"ControlLeft"], null)], null),new cljs.core.Keyword(null,"rotate-180","rotate-180",605917905),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyboard","keyboard",-617357087),new cljs.core.Keyword(null,"button","button",1456579943),"KeyV"], null)], null),new cljs.core.Keyword(null,"hard-drop","hard-drop",1211458322),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyboard","keyboard",-617357087),new cljs.core.Keyword(null,"button","button",1456579943),"Space"], null)], null),new cljs.core.Keyword(null,"hold","hold",-1621118005),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyboard","keyboard",-617357087),new cljs.core.Keyword(null,"button","button",1456579943),"KeyC"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyboard","keyboard",-617357087),new cljs.core.Keyword(null,"button","button",1456579943),"ShiftLeft"], null)], null)], null)], null);
tetris.options_store.slotify_controls = (function tetris$options_store$slotify_controls(controls){
return cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((2),null)))));
}),cljs.core.PersistentArrayMap.EMPTY,controls);
});
tetris.options_store.read_options = (function tetris$options_store$read_options(){
var object = JSON.parse(localStorage.getItem("tetris"));
if(cljs.core.truth_(object)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(object,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], null)], 0)),new cljs.core.Keyword(null,"controls","controls",1340701452),(function (cs){
return cljs.core.update_vals(cs,(function (v){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__26990_SHARP_){
if(cljs.core.truth_(p1__26990_SHARP_)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__26990_SHARP_,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.keyword);
} else {
return null;
}
}),v);
}));
}));
} else {
return tetris.options_store.default_options;
}
});
tetris.options_store.options = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(tetris.options_store.read_options());
tetris.options_store.get_options = (function tetris$options_store$get_options(var_args){
var G__27044 = arguments.length;
switch (G__27044) {
case 0:
return tetris.options_store.get_options.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tetris.options_store.get_options.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(tetris.options_store.get_options.cljs$core$IFn$_invoke$arity$0 = (function (){
return tetris.options_store.read_options();
}));

(tetris.options_store.get_options.cljs$core$IFn$_invoke$arity$1 = (function (category){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(tetris.options_store.read_options(),category);
}));

(tetris.options_store.get_options.cljs$lang$maxFixedArity = 1);

tetris.options_store.save_options_BANG_ = (function tetris$options_store$save_options_BANG_(category,sub_options){
var opts = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tetris.options_store.get_options.cljs$core$IFn$_invoke$arity$0(),category,sub_options);
var json = JSON.stringify(cljs.core.clj__GT_js(opts));
localStorage.setItem("tetris",json);

return cljs.core.reset_BANG_(tetris.options_store.options,opts);
});

//# sourceMappingURL=tetris.options_store.js.map
