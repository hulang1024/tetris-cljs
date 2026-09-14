goog.provide('malli.error');

malli.error._pr_str = (function malli$error$_pr_str(v){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v));
});
malli.error._pred_min_max_error_fn = (function malli$error$_pred_min_max_error_fn(p__37646){
var map__37647 = p__37646;
var map__37647__$1 = cljs.core.__destructure_map(map__37647);
var pred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37647__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37647__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return (function (p__37649,_){
var map__37650 = p__37649;
var map__37650__$1 = cljs.core.__destructure_map(map__37650);
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37650__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37650__$1,new cljs.core.Keyword(null,"value","value",305978217));
var negated = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37650__$1,new cljs.core.Keyword(null,"negated","negated",-273117033));
var map__37652 = malli.core.properties.cljs$core$IFn$_invoke$arity$1(schema);
var map__37652__$1 = cljs.core.__destructure_map(map__37652);
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37652__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37652__$1,new cljs.core.Keyword(null,"max","max",61366548));
if(cljs.core.not((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(value) : pred.call(null,value)))){
return message;
} else {
if(cljs.core.truth_((function (){var and__5160__auto__ = min;
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(min,max);
} else {
return and__5160__auto__;
}
})())){
return (""+"should be "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(min));
} else {
if(cljs.core.truth_((function (){var and__5160__auto__ = min;
if(cljs.core.truth_(and__5160__auto__)){
var fexpr__37653 = (cljs.core.truth_(negated)?cljs.core._GT__EQ_:cljs.core._LT_);
return (fexpr__37653.cljs$core$IFn$_invoke$arity$2 ? fexpr__37653.cljs$core$IFn$_invoke$arity$2(value,min) : fexpr__37653.call(null,value,min));
} else {
return and__5160__auto__;
}
})())){
return (""+"should be at least "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(min));
} else {
if(cljs.core.truth_(max)){
return (""+"should be at most "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(max));
} else {
if(cljs.core.truth_(negated)){
return message;
} else {
return null;
}
}
}
}
}
});
});
var prefix_38005 = (""+"-en-humanize-negation-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()));
malli.error._en_humanize_negation = (function malli$error$_en_humanize_negation(p__37661,options){
var map__37663 = p__37661;
var map__37663__$1 = cljs.core.__destructure_map(map__37663);
var error = map__37663__$1;
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37663__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var negated = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37663__$1,new cljs.core.Keyword(null,"negated","negated",-273117033));
if(cljs.core.truth_(negated)){
var G__37664 = (function (){var G__37665 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(error,new cljs.core.Keyword(null,"negated","negated",-273117033));
var G__37666 = options;
return (malli.error.error_message.cljs$core$IFn$_invoke$arity$2 ? malli.error.error_message.cljs$core$IFn$_invoke$arity$2(G__37665,G__37666) : malli.error.error_message.call(null,G__37665,G__37666));
})();
return (negated.cljs$core$IFn$_invoke$arity$1 ? negated.cljs$core$IFn$_invoke$arity$1(G__37664) : negated.call(null,G__37664));
} else {
var remove_prefix = (function (p1__37654_SHARP_){
return clojure.string.replace_first(p1__37654_SHARP_,prefix_38005,"");
});
var negated_QMARK_ = (function (p1__37655_SHARP_){
return clojure.string.starts_with_QMARK_(p1__37655_SHARP_,prefix_38005);
});
var schema__$1 = schema;
while(true){
var or__5162__auto__ = (function (){var temp__5829__auto__ = (function (){var G__37679 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(error,new cljs.core.Keyword(null,"negated","negated",-273117033),((function (schema__$1,remove_prefix,negated_QMARK_,map__37663,map__37663__$1,error,schema,negated,prefix_38005){
return (function (p1__37657_SHARP_){
var G__37681 = p1__37657_SHARP_;
if((G__37681 == null)){
return null;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix_38005)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37681));
}
});})(schema__$1,remove_prefix,negated_QMARK_,map__37663,map__37663__$1,error,schema,negated,prefix_38005))
);
var G__37680 = options;
return (malli.error.error_message.cljs$core$IFn$_invoke$arity$2 ? malli.error.error_message.cljs$core$IFn$_invoke$arity$2(G__37679,G__37680) : malli.error.error_message.call(null,G__37679,G__37680));
})();
if((temp__5829__auto__ == null)){
return null;
} else {
var s = temp__5829__auto__;
if(negated_QMARK_(s)){
return remove_prefix(s);
} else {
var or__5162__auto__ = ((((typeof s === 'string') && (clojure.string.starts_with_QMARK_(s,"should not "))))?clojure.string.replace_first(s,"should not","should"):null);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
if(((typeof s === 'string') && (clojure.string.starts_with_QMARK_(s,"should ")))){
return clojure.string.replace_first(s,"should","should not");
} else {
return null;
}
}
}
}
})();
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var dschema = malli.core.deref.cljs$core$IFn$_invoke$arity$1(schema__$1);
if((schema__$1 === dschema)){
return null;
} else {
var G__38009 = dschema;
schema__$1 = G__38009;
continue;
}
}
break;
}
}
});
malli.error._forward_negation = (function malli$error$_forward_negation(_QMARK_schema,p__37686,options){
var map__37687 = p__37686;
var map__37687__$1 = cljs.core.__destructure_map(map__37687);
var error = map__37687__$1;
var negated = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37687__$1,new cljs.core.Keyword(null,"negated","negated",-273117033));
var schema = malli.core.schema.cljs$core$IFn$_invoke$arity$2(_QMARK_schema,options);
var G__37688 = (function (){var G__37689 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(error,new cljs.core.Keyword(null,"negated","negated",-273117033)),new cljs.core.Keyword(null,"schema","schema",-1582001791),schema);
var G__37690 = options;
return (malli.error.error_message.cljs$core$IFn$_invoke$arity$2 ? malli.error.error_message.cljs$core$IFn$_invoke$arity$2(G__37689,G__37690) : malli.error.error_message.call(null,G__37689,G__37690));
})();
return (negated.cljs$core$IFn$_invoke$arity$1 ? negated.cljs$core$IFn$_invoke$arity$1(G__37688) : negated.call(null,G__37688));
});
malli.error.default_errors = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("malli.core","extra-key","malli.core/extra-key",574816512),new cljs.core.Symbol(null,"true?","true?",-1600332395,null),new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"qualified-symbol","qualified-symbol",-665513695),new cljs.core.Symbol(null,"uri?","uri?",2029475116,null),new cljs.core.Symbol(null,"simple-keyword?","simple-keyword?",-367134735,null),new cljs.core.Keyword(null,"<=","<=",-395636158),new cljs.core.Keyword(null,"double","double",884886883),new cljs.core.Symbol(null,"uuid?","uuid?",400077689,null),new cljs.core.Symbol(null,"inst?","inst?",1614698981,null),new cljs.core.Symbol(null,"simple-ident?","simple-ident?",194189851,null),new cljs.core.Keyword(null,"not=","not=",-173995323),new cljs.core.Symbol(null,"int?","int?",1799729645,null),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.Keyword(null,">",">",-555517146),new cljs.core.Symbol(null,"float?","float?",673884616,null),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"any?","any?",-318999933,null),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Symbol(null,"false?","false?",-1522377573,null),new cljs.core.Symbol(null,"associative?","associative?",-141666771,null),new cljs.core.Keyword(null,"re","re",228676202),new cljs.core.Symbol(null,"ident?","ident?",-2061359468,null),new cljs.core.Keyword(null,"qualified-keyword","qualified-keyword",736041675),new cljs.core.Keyword(null,"not","not",-595976884),new cljs.core.Symbol(null,"char?","char?",-1072221244,null),new cljs.core.Symbol(null,"neg-int?","neg-int?",-1610409390,null),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Symbol(null,"symbol?","symbol?",1820680511,null),new cljs.core.Keyword(null,">=",">=",-623615505),new cljs.core.Symbol(null,"list?","list?",-1494629,null),new cljs.core.Keyword("malli.error","misspelled-value","malli.error/misspelled-value",-1135752848),new cljs.core.Symbol(null,"qualified-ident?","qualified-ident?",-928894763,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Keyword("malli.core","limits","malli.core/limits",-1343466863),new cljs.core.Symbol(null,"simple-symbol?","simple-symbol?",1408454822,null),new cljs.core.Symbol(null,"empty?","empty?",76408555,null),new cljs.core.Symbol(null,"integer?","integer?",1303791671,null),new cljs.core.Keyword("malli.core","missing-key","malli.core/missing-key",1439107666),new cljs.core.Keyword("malli.core","tuple-size","malli.core/tuple-size",-1004468077),new cljs.core.Symbol(null,"zero?","zero?",325758897,null),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Symbol(null,"qualified-keyword?","qualified-keyword?",375456001,null),new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Keyword("malli.core","end-of-input","malli.core/end-of-input",-491237771),new cljs.core.Symbol(null,"qualified-symbol?","qualified-symbol?",98763807,null),new cljs.core.Keyword("malli.core","input-remaining","malli.core/input-remaining",372310422),new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),new cljs.core.Symbol(null,"nat-int?","nat-int?",-1879663400,null),new cljs.core.Symbol(null,"set?","set?",1636014792,null),new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"boolean?","boolean?",1790940868,null),new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null),new cljs.core.Keyword(null,"uuid","uuid",-2145095719),new cljs.core.Keyword("malli.error","unknown","malli.error/unknown",594142330),new cljs.core.Symbol(null,"number?","number?",-1747282210,null),new cljs.core.Keyword("malli.core","invalid-dispatch-value","malli.core/invalid-dispatch-value",516707675),new cljs.core.Symbol(null,"double?","double?",-2146564276,null),new cljs.core.Symbol(null,"seqable?","seqable?",72462495,null),new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"<","<",-646864291),new cljs.core.Symbol(null,"neg?","neg?",-1902175577,null),new cljs.core.Keyword("malli.error","misspelled-key","malli.error/misspelled-key",616486174),new cljs.core.Keyword("malli.core","invalid-type","malli.core/invalid-type",-1367388450),new cljs.core.Symbol(null,"pos-int?","pos-int?",-1205815015,null),new cljs.core.Keyword(null,"any","any",1705907423),new cljs.core.Symbol(null,"indexed?","indexed?",1234610384,null)],[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"disallowed key"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be true"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","fn","error/fn",-1263293860),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),(function (p__37701,_){
var map__37702 = p__37701;
var map__37702__$1 = cljs.core.__destructure_map(map__37702);
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37702__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
return (""+"should be "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(malli.core.children.cljs$core$IFn$_invoke$arity$1(schema))))?malli.error._pr_str(cljs.core.first(malli.core.children.cljs$core$IFn$_invoke$arity$1(schema))):(""+"either "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.error._pr_str,cljs.core.butlast(malli.core.children.cljs$core$IFn$_invoke$arity$1(schema)))))+" or "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(malli.error._pr_str(cljs.core.last(malli.core.children.cljs$core$IFn$_invoke$arity$1(schema))))))));
})], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a qualified symbol"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a uri"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a simple keyword"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","fn","error/fn",-1263293860),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),(function (p__37706,options){
var map__37707 = p__37706;
var map__37707__$1 = cljs.core.__destructure_map(map__37707);
var error = map__37707__$1;
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37707__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37707__$1,new cljs.core.Keyword(null,"value","value",305978217));
var negated = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37707__$1,new cljs.core.Keyword(null,"negated","negated",-273117033));
if(cljs.core.truth_(negated)){
return malli.error._forward_negation(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),cljs.core.first(malli.core.children.cljs$core$IFn$_invoke$arity$1(schema))], null),error,options);
} else {
if(typeof value === 'number'){
return (""+"should be at most "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(malli.core.children.cljs$core$IFn$_invoke$arity$1(schema))));
} else {
return "should be a number";
}
}
})], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","fn","error/fn",-1263293860),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),malli.error._pred_min_max_error_fn(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.double_QMARK_,new cljs.core.Keyword(null,"message","message",-406056002),"should be a double"], null))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a uuid"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be an inst"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a simple ident"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","fn","error/fn",-1263293860),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),(function (p__37711,_){
var map__37713 = p__37711;
var map__37713__$1 = cljs.core.__destructure_map(map__37713);
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37713__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
return (""+"should not be "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(malli.error._pr_str(cljs.core.first(malli.core.children.cljs$core$IFn$_invoke$arity$1(schema)))));
})], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be an int"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be nil"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","fn","error/fn",-1263293860),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),malli.error._pred_min_max_error_fn(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.int_QMARK_,new cljs.core.Keyword(null,"message","message",-406056002),"should be an integer"], null))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","fn","error/fn",-1263293860),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),(function (p__37715,options){
var map__37716 = p__37715;
var map__37716__$1 = cljs.core.__destructure_map(map__37716);
var error = map__37716__$1;
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37716__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37716__$1,new cljs.core.Keyword(null,"value","value",305978217));
var negated = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37716__$1,new cljs.core.Keyword(null,"negated","negated",-273117033));
if(cljs.core.truth_(negated)){
return malli.error._forward_negation(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<=","<=",-395636158),cljs.core.first(malli.core.children.cljs$core$IFn$_invoke$arity$1(schema))], null),error,options);
} else {
if(typeof value === 'number'){
return (""+"should be larger than "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(malli.core.children.cljs$core$IFn$_invoke$arity$1(schema))));
} else {
return "should be a number";
}
}
})], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a float"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be an ifn"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a map"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a vector"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be any"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","fn","error/fn",-1263293860),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),malli.error._pred_min_max_error_fn(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.float_QMARK_,new cljs.core.Keyword(null,"message","message",-406056002),"should be a float"], null))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a symbol"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be false"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be associative"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should match regex"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be an ident"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a qualified keyword"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","fn","error/fn",-1263293860),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),(function (p__37718,options){
var map__37719 = p__37718;
var map__37719__$1 = cljs.core.__destructure_map(map__37719);
var error = map__37719__$1;
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37719__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
return malli.error._en_humanize_negation(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(error,new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.first(malli.core.children.cljs$core$IFn$_invoke$arity$1(schema))),options);
})], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a char"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a negative int"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","fn","error/fn",-1263293860),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),(function (p__37725,_){
var map__37726 = p__37725;
var map__37726__$1 = cljs.core.__destructure_map(map__37726);
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37726__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37726__$1,new cljs.core.Keyword(null,"value","value",305978217));
var negated = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37726__$1,new cljs.core.Keyword(null,"negated","negated",-273117033));
var map__37729 = malli.core.properties.cljs$core$IFn$_invoke$arity$1(schema);
var map__37729__$1 = cljs.core.__destructure_map(map__37729);
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37729__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37729__$1,new cljs.core.Keyword(null,"max","max",61366548));
if((!(typeof value === 'string'))){
return "should be a string";
} else {
if(cljs.core.truth_((function (){var and__5160__auto__ = min;
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(min,max);
} else {
return and__5160__auto__;
}
})())){
return (""+"should be "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(min)+" character"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((1),min))?"s":null)));
} else {
if(cljs.core.truth_((function (){var and__5160__auto__ = min;
if(cljs.core.truth_(and__5160__auto__)){
var G__37740 = cljs.core.count(value);
var G__37741 = min;
var fexpr__37739 = (cljs.core.truth_(negated)?cljs.core._GT__EQ_:cljs.core._LT_);
return (fexpr__37739.cljs$core$IFn$_invoke$arity$2 ? fexpr__37739.cljs$core$IFn$_invoke$arity$2(G__37740,G__37741) : fexpr__37739.call(null,G__37740,G__37741));
} else {
return and__5160__auto__;
}
})())){
return (""+"should be at least "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(min)+" character"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((1),min))?"s":null)));
} else {
if(cljs.core.truth_(max)){
return (""+"should be at most "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(max)+" character"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((1),max))?"s":null)));
} else {
if(cljs.core.truth_(negated)){
return "should be a string";
} else {
return null;
}
}
}
}
}
})], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a symbol"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","fn","error/fn",-1263293860),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),(function (p__37743,options){
var map__37744 = p__37743;
var map__37744__$1 = cljs.core.__destructure_map(map__37744);
var error = map__37744__$1;
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37744__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37744__$1,new cljs.core.Keyword(null,"value","value",305978217));
var negated = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37744__$1,new cljs.core.Keyword(null,"negated","negated",-273117033));
if(cljs.core.truth_(negated)){
return malli.error._forward_negation(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<","<",-646864291),cljs.core.first(malli.core.children.cljs$core$IFn$_invoke$arity$1(schema))], null),error,options);
} else {
if(typeof value === 'number'){
return (""+"should be at least "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(malli.core.children.cljs$core$IFn$_invoke$arity$1(schema))));
} else {
return "should be a number";
}
}
})], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a list"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","fn","error/fn",-1263293860),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),(function (p__37748,_){
var map__37750 = p__37748;
var map__37750__$1 = cljs.core.__destructure_map(map__37750);
var likely_misspelling_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37750__$1,new cljs.core.Keyword("malli.error","likely-misspelling-of","malli.error/likely-misspelling-of",1504085033));
return (""+"did you mean "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" or ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(malli.error._pr_str,cljs.core.last),likely_misspelling_of))));
})], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a qualified ident"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a coll"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a valid function"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a keyword"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","fn","error/fn",-1263293860),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),(function (p__37751,_){
var map__37752 = p__37751;
var map__37752__$1 = cljs.core.__destructure_map(map__37752);
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37752__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37752__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__37753 = malli.core.properties.cljs$core$IFn$_invoke$arity$1(schema);
var map__37753__$1 = cljs.core.__destructure_map(map__37753);
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37753__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37753__$1,new cljs.core.Keyword(null,"max","max",61366548));
if(cljs.core.truth_((function (){var and__5160__auto__ = min;
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(min,max);
} else {
return and__5160__auto__;
}
})())){
return (""+"should have "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(min)+" elements");
} else {
if(cljs.core.truth_((function (){var and__5160__auto__ = min;
if(cljs.core.truth_(and__5160__auto__)){
return (cljs.core.count(value) < min);
} else {
return and__5160__auto__;
}
})())){
return (""+"should have at least "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(min)+" elements");
} else {
if(cljs.core.truth_(max)){
return (""+"should have at most "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(max)+" elements");
} else {
return null;
}
}
}
})], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a simple symbol"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be empty"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be an integer"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"missing required key"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","fn","error/fn",-1263293860),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),(function (p__37758,_){
var map__37759 = p__37758;
var map__37759__$1 = cljs.core.__destructure_map(map__37759);
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37759__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37759__$1,new cljs.core.Keyword(null,"value","value",305978217));
var size = cljs.core.count(malli.core.children.cljs$core$IFn$_invoke$arity$1(schema));
return (""+"invalid tuple size "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(value))+", expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(size));
})], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be zero"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a keyword"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be nil"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a qualified keyword"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a string"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"end of input"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a qualified symbol"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"input remaining"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a seq"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a non-negative int"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a set"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be some"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be positive"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a boolean"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a fn"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be sequential"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a uuid"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"unknown error"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a number"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"invalid dispatch value"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a double"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be seqable"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","fn","error/fn",-1263293860),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),(function (p__37764,_){
var map__37765 = p__37764;
var map__37765__$1 = cljs.core.__destructure_map(map__37765);
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37765__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
return (""+"should be "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(malli.error._pr_str(cljs.core.first(malli.core.children.cljs$core$IFn$_invoke$arity$1(schema)))));
})], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a boolean"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","fn","error/fn",-1263293860),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),(function (p__37767,options){
var map__37769 = p__37767;
var map__37769__$1 = cljs.core.__destructure_map(map__37769);
var error = map__37769__$1;
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37769__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37769__$1,new cljs.core.Keyword(null,"value","value",305978217));
var negated = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37769__$1,new cljs.core.Keyword(null,"negated","negated",-273117033));
if(cljs.core.truth_(negated)){
return malli.error._forward_negation(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">=",">=",-623615505),cljs.core.first(malli.core.children.cljs$core$IFn$_invoke$arity$1(schema))], null),error,options);
} else {
if(typeof value === 'number'){
return (""+"should be smaller than "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(malli.core.children.cljs$core$IFn$_invoke$arity$1(schema))));
} else {
return "should be a number";
}
}
})], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be negative"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","fn","error/fn",-1263293860),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),(function (p__37772,_){
var map__37774 = p__37772;
var map__37774__$1 = cljs.core.__destructure_map(map__37774);
var likely_misspelling_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37774__$1,new cljs.core.Keyword("malli.error","likely-misspelling-of","malli.error/likely-misspelling-of",1504085033));
return (""+"should be spelled "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" or ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(malli.error._pr_str,cljs.core.last),likely_misspelling_of))));
})], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"invalid type"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a positive int"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be any"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be indexed"], null)], null)]);
malli.error._maybe_localized = (function malli$error$_maybe_localized(x,locale){
if(cljs.core.map_QMARK_(x)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(x,locale);
} else {
return x;
}
});
malli.error._message = (function malli$error$_message(error,props,locale,options){
var options__$1 = (function (){var or__5162__auto__ = options;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return malli.core.options.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(error));
}
})();
if(cljs.core.truth_(props)){
var or__5162__auto__ = (function (){var temp__5825__auto__ = malli.error._maybe_localized(new cljs.core.Keyword("error","fn","error/fn",-1263293860).cljs$core$IFn$_invoke$arity$1(props),locale);
if(cljs.core.truth_(temp__5825__auto__)){
var fn = temp__5825__auto__;
var fexpr__37789 = malli.core.eval.cljs$core$IFn$_invoke$arity$2(fn,options__$1);
return (fexpr__37789.cljs$core$IFn$_invoke$arity$2 ? fexpr__37789.cljs$core$IFn$_invoke$arity$2(error,options__$1) : fexpr__37789.call(null,error,options__$1));
} else {
return null;
}
})();
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return malli.error._maybe_localized(new cljs.core.Keyword("error","message","error/message",-502809098).cljs$core$IFn$_invoke$arity$1(props),locale);
}
} else {
return null;
}
});
malli.error._error = (function malli$error$_error(e){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("malli.error","error","malli.error/error",-522553785),true], null));
});
malli.error._error_QMARK_ = (function malli$error$_error_QMARK_(x){
return new cljs.core.Keyword("malli.error","error","malli.error/error",-522553785).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(x));
});
malli.error._get = (function malli$error$_get(x,k){
if(((cljs.core.set_QMARK_(x)) || (cljs.core.associative_QMARK_(x)))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(x,k);
} else {
if(cljs.core.sequential_QMARK_(x)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(x),k);
} else {
return null;
}
}
});
malli.error._concat = (function malli$error$_concat(x,y){
var G__37799 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(x,y);
if((((!((x == null)))) && ((!(cljs.core.seq_QMARK_(x)))))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(x),G__37799);
} else {
return G__37799;
}
});
malli.error._fill = (function malli$error$_fill(x,i,fill){
return malli.error._concat(x,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((i - cljs.core.count(x)),fill));
});
malli.error._push = (function malli$error$_push(x,k,v,fill){
var x_SINGLEQUOTE_ = (function (){var G__37805 = x;
if(((cljs.core.int_QMARK_(k)) && (((cljs.core.sequential_QMARK_(x)) && ((k > cljs.core.count(x))))))){
return malli.error._fill(G__37805,k,fill);
} else {
return G__37805;
}
})();
if((((x_SINGLEQUOTE_ == null)) || (cljs.core.associative_QMARK_(x_SINGLEQUOTE_)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x_SINGLEQUOTE_,k,v);
} else {
if(cljs.core.set_QMARK_(x_SINGLEQUOTE_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(x_SINGLEQUOTE_,v);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(x_SINGLEQUOTE_),k,v));

}
}
});
malli.error._push_in = (function malli$error$_push_in(a,v,p__37812,e){
var vec__37813 = p__37812;
var seq__37814 = cljs.core.seq(vec__37813);
var first__37815 = cljs.core.first(seq__37814);
var seq__37814__$1 = cljs.core.next(seq__37814);
var p = first__37815;
var ps = seq__37814__$1;
var v_SINGLEQUOTE_ = malli.error._get(v,p);
var a_SINGLEQUOTE_ = (function (){var or__5162__auto__ = a;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
if(cljs.core.sequential_QMARK_(v)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core.record_QMARK_(v)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.empty(v);

}
}
}
})();
if(cljs.core.truth_((function (){var and__5160__auto__ = p;
if(cljs.core.truth_(and__5160__auto__)){
return malli.error._error_QMARK_(a_SINGLEQUOTE_);
} else {
return and__5160__auto__;
}
})())){
return a;
} else {
if(cljs.core.truth_(p)){
return malli.error._push(a_SINGLEQUOTE_,p,(function (){var G__37819 = malli.error._get(a_SINGLEQUOTE_,p);
var G__37820 = v_SINGLEQUOTE_;
var G__37821 = ps;
var G__37822 = e;
return (malli.error._push_in.cljs$core$IFn$_invoke$arity$4 ? malli.error._push_in.cljs$core$IFn$_invoke$arity$4(G__37819,G__37820,G__37821,G__37822) : malli.error._push_in.call(null,G__37819,G__37820,G__37821,G__37822));
})(),null);
} else {
if(cljs.core.map_QMARK_(a)){
var G__37823 = a_SINGLEQUOTE_;
var G__37824 = v;
var G__37825 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","error","malli/error",-1152359159)], null);
var G__37826 = e;
return (malli.error._push_in.cljs$core$IFn$_invoke$arity$4 ? malli.error._push_in.cljs$core$IFn$_invoke$arity$4(G__37823,G__37824,G__37825,G__37826) : malli.error._push_in.call(null,G__37823,G__37824,G__37825,G__37826));
} else {
if(cljs.core.truth_(malli.error._error_QMARK_(a_SINGLEQUOTE_))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(a_SINGLEQUOTE_,e);
} else {
if(cljs.core.vector_QMARK_(cljs.core.not_empty(a_SINGLEQUOTE_))){
return a_SINGLEQUOTE_;
} else {
return malli.error._error(e);

}
}
}
}
}
});
malli.error._path = (function malli$error$_path(p__37827,p__37828){
var map__37829 = p__37827;
var map__37829__$1 = cljs.core.__destructure_map(map__37829);
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37829__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var map__37830 = p__37828;
var map__37830__$1 = cljs.core.__destructure_map(map__37830);
var locale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37830__$1,new cljs.core.Keyword(null,"locale","locale",-2115712697));
var default_locale = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37830__$1,new cljs.core.Keyword(null,"default-locale","default-locale",-677515761),new cljs.core.Keyword(null,"en","en",88457073));
var properties = malli.core.properties.cljs$core$IFn$_invoke$arity$1(schema);
var or__5162__auto__ = malli.error._maybe_localized(new cljs.core.Keyword("error","path","error/path",-419192760).cljs$core$IFn$_invoke$arity$1(properties),locale);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return malli.error._maybe_localized(new cljs.core.Keyword("error","path","error/path",-419192760).cljs$core$IFn$_invoke$arity$1(properties),default_locale);
}
});
malli.error._replace_in = (function malli$error$_replace_in(a,v,p__37832,e,fill){
var vec__37836 = p__37832;
var seq__37837 = cljs.core.seq(vec__37836);
var first__37838 = cljs.core.first(seq__37837);
var seq__37837__$1 = cljs.core.next(seq__37837);
var p = first__37838;
var ps = seq__37837__$1;
var a_SINGLEQUOTE_ = (function (){var or__5162__auto__ = a;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
if(cljs.core.record_QMARK_(v)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.empty(v);
}
}
})();
if(cljs.core.truth_(p)){
return malli.error._push((function (){var G__37841 = a_SINGLEQUOTE_;
if(cljs.core.set_QMARK_(a_SINGLEQUOTE_)){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(G__37841,p);
} else {
return G__37841;
}
})(),p,(function (){var G__37842 = malli.error._get(a_SINGLEQUOTE_,p);
var G__37843 = malli.error._get(v,p);
var G__37844 = ps;
var G__37845 = e;
var G__37846 = fill;
return (malli.error._replace_in.cljs$core$IFn$_invoke$arity$5 ? malli.error._replace_in.cljs$core$IFn$_invoke$arity$5(G__37842,G__37843,G__37844,G__37845,G__37846) : malli.error._replace_in.call(null,G__37842,G__37843,G__37844,G__37845,G__37846));
})(),fill);
} else {
return e;
}
});
malli.error._error_value = (function malli$error$_error_value(p__37850,options){
var map__37851 = p__37850;
var map__37851__$1 = cljs.core.__destructure_map(map__37851);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37851__$1,new cljs.core.Keyword(null,"errors","errors",-908790718));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37851__$1,new cljs.core.Keyword(null,"value","value",305978217));
var mask = new cljs.core.Keyword("malli.error","mask-valid-values","malli.error/mask-valid-values",1682135332).cljs$core$IFn$_invoke$arity$1(options);
var accept = new cljs.core.Keyword("malli.error","accept-error","malli.error/accept-error",-1477373739).cljs$core$IFn$_invoke$arity$2(options,(function (p1__37849_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__37849_SHARP_),new cljs.core.Keyword("malli.core","missing-key","malli.core/missing-key",1439107666));
}));
var wrap = new cljs.core.Keyword("malli.error","wrap-error","malli.error/wrap-error",173149242).cljs$core$IFn$_invoke$arity$2(options,new cljs.core.Keyword(null,"value","value",305978217));
var acc = (cljs.core.truth_(new cljs.core.Keyword("malli.error","keep-valid-values","malli.error/keep-valid-values",691578138).cljs$core$IFn$_invoke$arity$1(options))?value:null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc__$1,error){
var G__37853 = acc__$1;
if(cljs.core.truth_((accept.cljs$core$IFn$_invoke$arity$1 ? accept.cljs$core$IFn$_invoke$arity$1(error) : accept.call(null,error)))){
return malli.error._replace_in(G__37853,value,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(error),(wrap.cljs$core$IFn$_invoke$arity$1 ? wrap.cljs$core$IFn$_invoke$arity$1(error) : wrap.call(null,error)),mask);
} else {
return G__37853;
}
}),acc,errors);
});
malli.error._masked = (function malli$error$_masked(mask,x,y){
var nested = ((cljs.core.map_QMARK_(x)) && (((cljs.core.map_QMARK_(y)) || ((y == null)))));
if(nested){
return cljs.core.reduce_kv((function (acc,k,v){
var e = cljs.core.find(y,k);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,(cljs.core.truth_(e)?(function (){var G__37856 = mask;
var G__37857 = v;
var G__37858 = cljs.core.val(e);
return (malli.error._masked.cljs$core$IFn$_invoke$arity$3 ? malli.error._masked.cljs$core$IFn$_invoke$arity$3(G__37856,G__37857,G__37858) : malli.error._masked.call(null,G__37856,G__37857,G__37858));
})():mask));
}),y,x);
} else {
if(cljs.core.set_QMARK_(x)){
var G__37860 = y;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),cljs.core.count(y))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__37860,mask);
} else {
return G__37860;
}
} else {
if(cljs.core.sequential_QMARK_(x)){
return malli.error._fill(y,cljs.core.count(x),mask);
} else {
return y;

}
}
}
});
malli.error._length__GT_threshold = (function malli$error$_length__GT_threshold(len){
var pred__37863 = (function (p1__37862_SHARP_,p2__37861_SHARP_){
return (p2__37861_SHARP_ <= p1__37862_SHARP_);
});
var expr__37864 = len;
if(pred__37863((2),expr__37864)){
return (0);
} else {
if(pred__37863((5),expr__37864)){
return (1);
} else {
if(pred__37863((6),expr__37864)){
return (2);
} else {
if(pred__37863((11),expr__37864)){
return (3);
} else {
if(pred__37863((20),expr__37864)){
return (4);
} else {
return ((0.2 * len) | 0);
}
}
}
}
}
});
malli.error._next_row = (function malli$error$_next_row(previous,current,other_seq){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (row,p__37867){
var vec__37868 = p__37867;
var diagonal = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37868,(0),null);
var above = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37868,(1),null);
var other = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37868,(2),null);
var update_val = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(other,current))?diagonal:(cljs.core.min.cljs$core$IFn$_invoke$arity$variadic(diagonal,above,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.peek(row)], 0)) + (1)));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(row,update_val);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.first(previous) + (1))], null),cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,previous,cljs.core.next(previous),other_seq));
});
malli.error._levenshtein = (function malli$error$_levenshtein(sequence1,sequence2){
return cljs.core.peek(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (previous,current){
return malli.error._next_row(previous,current,sequence2);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__37873_SHARP_,p2__37872_SHARP_){
return cljs.core.identity(p2__37872_SHARP_);
}),cljs.core.cons(null,sequence2),cljs.core.range.cljs$core$IFn$_invoke$arity$0()),sequence1));
});
malli.error._similar_key = (function malli$error$_similar_key(ky,ky2){
var min_len = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.core._comp.cljs$core$IFn$_invoke$arity$3(cljs.core.count,(function (p1__37876_SHARP_){
if(clojure.string.starts_with_QMARK_(p1__37876_SHARP_,":")){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p1__37876_SHARP_,(1));
} else {
return p1__37876_SHARP_;
}
}),cljs.core.str),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ky,ky2], null)));
var dist = malli.error._levenshtein((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ky)),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ky2)));
if((dist <= malli.error._length__GT_threshold(min_len))){
return dist;
} else {
return null;
}
});
malli.error._likely_misspelled = (function malli$error$_likely_misspelled(keys,known_keys,key){
if(cljs.core.truth_((known_keys.cljs$core$IFn$_invoke$arity$1 ? known_keys.cljs$core$IFn$_invoke$arity$1(key) : known_keys.call(null,key)))){
return null;
} else {
return cljs.core.not_empty(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(keys,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__37877_SHARP_){
return malli.error._similar_key(p1__37877_SHARP_,key);
}),known_keys)));
}
});
malli.error._most_similar_to = (function malli$error$_most_similar_to(keys,key,known_keys){
return cljs.core.not_empty(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2((function (p1__37880_SHARP_){
return malli.error._levenshtein((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37880_SHARP_)),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)));
}),cljs.core.identity),malli.error._likely_misspelled(keys,known_keys,key))))));
});
malli.error.error_path = (function malli$error$error_path(var_args){
var G__37882 = arguments.length;
switch (G__37882) {
case 1:
return malli.error.error_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.error.error_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(malli.error.error_path.cljs$core$IFn$_invoke$arity$1 = (function (error){
return malli.error.error_path.cljs$core$IFn$_invoke$arity$2(error,null);
}));

(malli.error.error_path.cljs$core$IFn$_invoke$arity$2 = (function (error,options){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(error),malli.error._path(error,options));
}));

(malli.error.error_path.cljs$lang$maxFixedArity = 2);

malli.error.error_message = (function malli$error$error_message(var_args){
var G__37888 = arguments.length;
switch (G__37888) {
case 1:
return malli.error.error_message.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.error.error_message.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(malli.error.error_message.cljs$core$IFn$_invoke$arity$1 = (function (error){
return malli.error.error_message.cljs$core$IFn$_invoke$arity$2(error,null);
}));

(malli.error.error_message.cljs$core$IFn$_invoke$arity$2 = (function (p__37891,p__37892){
var map__37893 = p__37891;
var map__37893__$1 = cljs.core.__destructure_map(map__37893);
var error = map__37893__$1;
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37893__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37893__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var map__37894 = p__37892;
var map__37894__$1 = cljs.core.__destructure_map(map__37894);
var options = map__37894__$1;
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37894__$1,new cljs.core.Keyword(null,"errors","errors",-908790718),malli.error.default_errors);
var unknown = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37894__$1,new cljs.core.Keyword(null,"unknown","unknown",-935977881),true);
var locale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37894__$1,new cljs.core.Keyword(null,"locale","locale",-2115712697));
var default_locale = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37894__$1,new cljs.core.Keyword(null,"default-locale","default-locale",-677515761),new cljs.core.Keyword(null,"en","en",88457073));
var or__5162__auto__ = malli.error._message(error,malli.core.properties.cljs$core$IFn$_invoke$arity$1(schema),locale,options);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var or__5162__auto____$1 = malli.error._message(error,malli.core.type_properties.cljs$core$IFn$_invoke$arity$1(schema),locale,options);
if(cljs.core.truth_(or__5162__auto____$1)){
return or__5162__auto____$1;
} else {
var or__5162__auto____$2 = malli.error._message(error,(errors.cljs$core$IFn$_invoke$arity$1 ? errors.cljs$core$IFn$_invoke$arity$1(type) : errors.call(null,type)),locale,options);
if(cljs.core.truth_(or__5162__auto____$2)){
return or__5162__auto____$2;
} else {
var or__5162__auto____$3 = malli.error._message(error,(function (){var G__37895 = malli.core.type.cljs$core$IFn$_invoke$arity$1(schema);
return (errors.cljs$core$IFn$_invoke$arity$1 ? errors.cljs$core$IFn$_invoke$arity$1(G__37895) : errors.call(null,G__37895));
})(),locale,options);
if(cljs.core.truth_(or__5162__auto____$3)){
return or__5162__auto____$3;
} else {
var or__5162__auto____$4 = malli.error._message(error,malli.core.properties.cljs$core$IFn$_invoke$arity$1(schema),default_locale,options);
if(cljs.core.truth_(or__5162__auto____$4)){
return or__5162__auto____$4;
} else {
var or__5162__auto____$5 = malli.error._message(error,malli.core.type_properties.cljs$core$IFn$_invoke$arity$1(schema),default_locale,options);
if(cljs.core.truth_(or__5162__auto____$5)){
return or__5162__auto____$5;
} else {
var or__5162__auto____$6 = malli.error._message(error,(errors.cljs$core$IFn$_invoke$arity$1 ? errors.cljs$core$IFn$_invoke$arity$1(type) : errors.call(null,type)),default_locale,options);
if(cljs.core.truth_(or__5162__auto____$6)){
return or__5162__auto____$6;
} else {
var or__5162__auto____$7 = malli.error._message(error,(function (){var G__37898 = malli.core.type.cljs$core$IFn$_invoke$arity$1(schema);
return (errors.cljs$core$IFn$_invoke$arity$1 ? errors.cljs$core$IFn$_invoke$arity$1(G__37898) : errors.call(null,G__37898));
})(),default_locale,options);
if(cljs.core.truth_(or__5162__auto____$7)){
return or__5162__auto____$7;
} else {
var or__5162__auto____$8 = (function (){var and__5160__auto__ = unknown;
if(cljs.core.truth_(and__5160__auto__)){
return malli.error._message(error,(errors.cljs$core$IFn$_invoke$arity$1 ? errors.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("malli.error","unknown","malli.error/unknown",594142330)) : errors.call(null,new cljs.core.Keyword("malli.error","unknown","malli.error/unknown",594142330))),locale,options);
} else {
return and__5160__auto__;
}
})();
if(cljs.core.truth_(or__5162__auto____$8)){
return or__5162__auto____$8;
} else {
var and__5160__auto__ = unknown;
if(cljs.core.truth_(and__5160__auto__)){
return malli.error._message(error,(errors.cljs$core$IFn$_invoke$arity$1 ? errors.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("malli.error","unknown","malli.error/unknown",594142330)) : errors.call(null,new cljs.core.Keyword("malli.error","unknown","malli.error/unknown",594142330))),default_locale,options);
} else {
return and__5160__auto__;
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
}));

(malli.error.error_message.cljs$lang$maxFixedArity = 2);

malli.error._resolve_direct_error = (function malli$error$_resolve_direct_error(_,error,options){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [malli.error.error_path.cljs$core$IFn$_invoke$arity$2(error,options),malli.error.error_message.cljs$core$IFn$_invoke$arity$2(error,options)], null);
});
malli.error._resolve_root_error = (function malli$error$_resolve_root_error(p__37903,p__37904,options){
var map__37905 = p__37903;
var map__37905__$1 = cljs.core.__destructure_map(map__37905);
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37905__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var map__37906 = p__37904;
var map__37906__$1 = cljs.core.__destructure_map(map__37906);
var error = map__37906__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37906__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var in$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37906__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
var options__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"unknown","unknown",-935977881),false);
var path__$1 = path;
var l = null;
var mp = path__$1;
var p = malli.core.properties.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(error));
var m = malli.error.error_message.cljs$core$IFn$_invoke$arity$2(error,options__$1);
while(true){
var vec__37924 = (function (){var or__5162__auto__ = (function (){var schema__$1 = malli.util.get_in.cljs$core$IFn$_invoke$arity$2(schema,path__$1);
var temp__5825__auto__ = malli.error.error_message.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1], null),options__$1);
if(cljs.core.truth_(temp__5825__auto__)){
var m_SINGLEQUOTE_ = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [path__$1,m_SINGLEQUOTE_,malli.core.properties.cljs$core$IFn$_invoke$arity$1(schema__$1)], null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var or__5162__auto____$1 = (function (){var res = (function (){var and__5160__auto__ = l;
if(cljs.core.truth_(and__5160__auto__)){
return malli.util.find.cljs$core$IFn$_invoke$arity$2(malli.util.get_in.cljs$core$IFn$_invoke$arity$2(schema,path__$1),l);
} else {
return and__5160__auto__;
}
})();
if(cljs.core.vector_QMARK_(res)){
var vec__37927 = res;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37927,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37927,(1),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37927,(2),null);
var schema__$2 = malli.util.update_properties.cljs$core$IFn$_invoke$arity$variadic(schema__$1,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props], 0));
var message = malli.error.error_message.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$2], null),options__$1);
if(cljs.core.truth_(message)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path__$1,l),message,malli.core.properties.cljs$core$IFn$_invoke$arity$1(schema__$2)], null);
} else {
return null;
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__5162__auto____$1)){
return or__5162__auto____$1;
} else {
if(cljs.core.truth_(m)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mp,m,p], null);
} else {
return null;
}
}
}
})();
var path_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37924,(0),null);
var m_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37924,(1),null);
var p_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37924,(2),null);
if(cljs.core.seq(path__$1)){
var G__38079 = cljs.core.pop(path__$1);
var G__38080 = cljs.core.last(path__$1);
var G__38081 = path_SINGLEQUOTE_;
var G__38082 = p_SINGLEQUOTE_;
var G__38083 = m_SINGLEQUOTE_;
path__$1 = G__38079;
l = G__38080;
mp = G__38081;
p = G__38082;
m = G__38083;
continue;
} else {
if(cljs.core.truth_(m)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.seq(in$))?malli.util.path__GT_in(schema,path_SINGLEQUOTE_):malli.error.error_path.cljs$core$IFn$_invoke$arity$2(error,options__$1)),m_SINGLEQUOTE_,p_SINGLEQUOTE_], null);
} else {
return null;
}
}
break;
}
});
malli.error.with_error_message = (function malli$error$with_error_message(var_args){
var G__37935 = arguments.length;
switch (G__37935) {
case 1:
return malli.error.with_error_message.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.error.with_error_message.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(malli.error.with_error_message.cljs$core$IFn$_invoke$arity$1 = (function (error){
return malli.error.with_error_message.cljs$core$IFn$_invoke$arity$2(error,null);
}));

(malli.error.with_error_message.cljs$core$IFn$_invoke$arity$2 = (function (error,options){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(error,new cljs.core.Keyword(null,"message","message",-406056002),malli.error.error_message.cljs$core$IFn$_invoke$arity$2(error,options));
}));

(malli.error.with_error_message.cljs$lang$maxFixedArity = 2);

malli.error.with_error_messages = (function malli$error$with_error_messages(var_args){
var G__37941 = arguments.length;
switch (G__37941) {
case 1:
return malli.error.with_error_messages.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.error.with_error_messages.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(malli.error.with_error_messages.cljs$core$IFn$_invoke$arity$1 = (function (explanation){
return malli.error.with_error_messages.cljs$core$IFn$_invoke$arity$2(explanation,null);
}));

(malli.error.with_error_messages.cljs$core$IFn$_invoke$arity$2 = (function (explanation,p__37944){
var map__37945 = p__37944;
var map__37945__$1 = cljs.core.__destructure_map(map__37945);
var options = map__37945__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37945__$1,new cljs.core.Keyword(null,"wrap","wrap",851669987),cljs.core.identity);
if(cljs.core.truth_(explanation)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(explanation,new cljs.core.Keyword(null,"errors","errors",-908790718),(function (errors){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37938_SHARP_){
var G__37947 = malli.error.with_error_message.cljs$core$IFn$_invoke$arity$2(p1__37938_SHARP_,options);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__37947) : f.call(null,G__37947));
}),errors));
}));
} else {
return null;
}
}));

(malli.error.with_error_messages.cljs$lang$maxFixedArity = 2);

malli.error.with_spell_checking = (function malli$error$with_spell_checking(var_args){
var G__37951 = arguments.length;
switch (G__37951) {
case 1:
return malli.error.with_spell_checking.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.error.with_spell_checking.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(malli.error.with_spell_checking.cljs$core$IFn$_invoke$arity$1 = (function (explanation){
return malli.error.with_spell_checking.cljs$core$IFn$_invoke$arity$2(explanation,null);
}));

(malli.error.with_spell_checking.cljs$core$IFn$_invoke$arity$2 = (function (explanation,p__37953){
var map__37954 = p__37953;
var map__37954__$1 = cljs.core.__destructure_map(map__37954);
var keep_likely_misspelled_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37954__$1,new cljs.core.Keyword(null,"keep-likely-misspelled-of","keep-likely-misspelled-of",288878171));
if(cljs.core.truth_(explanation)){
var _BANG_likely_misspelling_of = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var handle_invalid_value = (function (schema,_,value){
var dispatch = new cljs.core.Keyword(null,"dispatch","dispatch",1319337009).cljs$core$IFn$_invoke$arity$1(malli.core.properties.cljs$core$IFn$_invoke$arity$1(schema));
if((dispatch instanceof cljs.core.Keyword)){
var value__$1 = dispatch.cljs$core$IFn$_invoke$arity$1(value);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli.error","misspelled-value","malli.error/misspelled-value",-1135752848),value__$1,cljs.core.PersistentHashSet.createAsIfByAssoc([value__$1])], null);
} else {
return null;
}
});
var types = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("malli.core","extra-key","malli.core/extra-key",574816512),(function (_,path,value){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli.error","misspelled-key","malli.error/misspelled-key",616486174),cljs.core.last(path),(function (){var or__5162__auto__ = cljs.core.set(cljs.core.keys(value));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})()], null);
}),new cljs.core.Keyword("malli.core","invalid-dispatch-value","malli.core/invalid-dispatch-value",516707675),handle_invalid_value], null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(explanation,new cljs.core.Keyword(null,"errors","errors",-908790718),(function (errors){
var $ = errors;
var $__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__37960){
var map__37962 = p__37960;
var map__37962__$1 = cljs.core.__destructure_map(map__37962);
var error = map__37962__$1;
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37962__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37962__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37962__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var temp__5823__auto__ = (types.cljs$core$IFn$_invoke$arity$1 ? types.cljs$core$IFn$_invoke$arity$1(type) : types.call(null,type));
if(cljs.core.truth_(temp__5823__auto__)){
var get_keys = temp__5823__auto__;
var known_keys = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,malli.core.entries.cljs$core$IFn$_invoke$arity$1(schema)));
var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(explanation),cljs.core.butlast(path));
var vec__37965 = (get_keys.cljs$core$IFn$_invoke$arity$3 ? get_keys.cljs$core$IFn$_invoke$arity$3(schema,path,value) : get_keys.call(null,schema,path,value));
var error_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37965,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37965,(1),null);
var keys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37965,(2),null);
var similar = malli.error._most_similar_to(keys,key,known_keys);
var likely_misspelling_of = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__37949_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.butlast(path)),p1__37949_SHARP_);
}),cljs.core.vec(similar));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_BANG_likely_misspelling_of,cljs.core.into,likely_misspelling_of);

var G__37973 = error;
if(cljs.core.truth_(similar)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__37973,new cljs.core.Keyword(null,"type","type",1174270348),error_type,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("malli.error","likely-misspelling-of","malli.error/likely-misspelling-of",1504085033),likely_misspelling_of], 0));
} else {
return G__37973;
}
} else {
return error;
}
}),$);
if(cljs.core.not(keep_likely_misspelled_of)){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__37974){
var map__37975 = p__37974;
var map__37975__$1 = cljs.core.__destructure_map(map__37975);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37975__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37975__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var and__5160__auto__ = (function (){var fexpr__37977 = cljs.core.deref(_BANG_likely_misspelling_of);
return (fexpr__37977.cljs$core$IFn$_invoke$arity$1 ? fexpr__37977.cljs$core$IFn$_invoke$arity$1(path) : fexpr__37977.call(null,path));
})();
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword("malli.core","missing-key","malli.core/missing-key",1439107666));
} else {
return and__5160__auto__;
}
}),$__$1);
} else {
return $__$1;
}
}));
} else {
return null;
}
}));

(malli.error.with_spell_checking.cljs$lang$maxFixedArity = 2);

/**
 * Humanized a explanation. Accepts the following options:
 * 
 *   - `:wrap`, a function of `error -> message`, defaulting to `:message`
 *   - `:resolve`, a function of `explanation error options -> path message`
 */
malli.error.humanize = (function malli$error$humanize(var_args){
var G__37983 = arguments.length;
switch (G__37983) {
case 1:
return malli.error.humanize.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.error.humanize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(malli.error.humanize.cljs$core$IFn$_invoke$arity$1 = (function (explanation){
return malli.error.humanize.cljs$core$IFn$_invoke$arity$2(explanation,null);
}));

(malli.error.humanize.cljs$core$IFn$_invoke$arity$2 = (function (p__37985,p__37986){
var map__37987 = p__37985;
var map__37987__$1 = cljs.core.__destructure_map(map__37987);
var explanation = map__37987__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37987__$1,new cljs.core.Keyword(null,"value","value",305978217));
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37987__$1,new cljs.core.Keyword(null,"errors","errors",-908790718));
var map__37988 = p__37986;
var map__37988__$1 = cljs.core.__destructure_map(map__37988);
var options = map__37988__$1;
var wrap = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37988__$1,new cljs.core.Keyword(null,"wrap","wrap",851669987),new cljs.core.Keyword(null,"message","message",-406056002));
var resolve = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37988__$1,new cljs.core.Keyword(null,"resolve","resolve",-1584445482),malli.error._resolve_direct_error);
if(cljs.core.truth_(errors)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,error){
var vec__37990 = (resolve.cljs$core$IFn$_invoke$arity$3 ? resolve.cljs$core$IFn$_invoke$arity$3(explanation,error,options) : resolve.call(null,explanation,error,options));
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37990,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37990,(1),null);
return malli.error._push_in(acc,value,path,(function (){var G__37994 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(error,new cljs.core.Keyword(null,"message","message",-406056002),message);
return (wrap.cljs$core$IFn$_invoke$arity$1 ? wrap.cljs$core$IFn$_invoke$arity$1(G__37994) : wrap.call(null,G__37994));
})());
}),null,errors);
} else {
return null;
}
}));

(malli.error.humanize.cljs$lang$maxFixedArity = 2);

/**
 * Returns the parts of value that are in error. Accepts the following options:
 * 
 *   - `::mask-valid-values`, value to mask valid values with
 *   - `::keep-valid-values`, keep valid values (overrides mask)
 *   - `::accept-error`, function to accept errors
 *   - `::wrap-error`, function to wrap the error map (default: `:value`)
 */
malli.error.error_value = (function malli$error$error_value(var_args){
var G__37999 = arguments.length;
switch (G__37999) {
case 1:
return malli.error.error_value.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.error.error_value.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(malli.error.error_value.cljs$core$IFn$_invoke$arity$1 = (function (explanation){
return malli.error.error_value.cljs$core$IFn$_invoke$arity$2(explanation,null);
}));

(malli.error.error_value.cljs$core$IFn$_invoke$arity$2 = (function (explanation,p__38002){
var map__38003 = p__38002;
var map__38003__$1 = cljs.core.__destructure_map(map__38003);
var options = map__38003__$1;
var mask = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38003__$1,new cljs.core.Keyword("malli.error","mask-valid-values","malli.error/mask-valid-values",1682135332));
var G__38004 = malli.error._error_value(explanation,options);
if(cljs.core.truth_(mask)){
return malli.error._masked(mask,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(explanation),G__38004);
} else {
return G__38004;
}
}));

(malli.error.error_value.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=malli.error.js.map
