goog.provide('malli.clj_kondo');
if((typeof malli !== 'undefined') && (typeof malli.clj_kondo !== 'undefined') && (typeof malli.clj_kondo.accept !== 'undefined')){
} else {
malli.clj_kondo.accept = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("malli.clj-kondo","default","malli.clj-kondo/default",-1721650952)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__59218 = cljs.core.get_global_hierarchy;
return (fexpr__59218.cljs$core$IFn$_invoke$arity$0 ? fexpr__59218.cljs$core$IFn$_invoke$arity$0() : fexpr__59218.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("malli.clj-kondo","accept"),(function (name,_schema,_children,_options){
return name;
}),new cljs.core.Keyword("malli.clj-kondo","default","malli.clj-kondo/default",-1721650952),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("malli.clj-kondo","default","malli.clj-kondo/default",-1721650952),(function (_,schema,___$1,___$2){
if(cljs.core.truth_(malli.core._function_schema_QMARK_(schema))){
return new cljs.core.Keyword(null,"fn","fn",-1175266204);
} else {
return new cljs.core.Keyword(null,"any","any",1705907423);
}
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"any?","any?",-318999933,null),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"any","any",1705907423);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"some?","some?",234752293,null),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"any","any",1705907423);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"number?","number?",-1747282210,null),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"number","number",1570378438);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"integer?","integer?",1303791671,null),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"int","int",-1741416922);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"int?","int?",1799729645,null),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"int","int",-1741416922);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"pos-int?","pos-int?",-1205815015,null),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"pos-int","pos-int",15030207);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"neg-int?","neg-int?",-1610409390,null),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"neg-int","neg-int",-2021796658);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"nat-int?","nat-int?",-1879663400,null),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"nat-int","nat-int",313429715);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"nat-int?","nat-int?",-1879663400,null),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"nat-int","nat-int",313429715);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"pos-int","pos-int",15030207);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"neg?","neg?",-1902175577,null),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"neg-int","neg-int",-2021796658);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"float?","float?",673884616,null),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"double","double",884886883);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"double?","double?",-2146564276,null),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"double","double",884886883);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"boolean?","boolean?",1790940868,null),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"boolean","boolean",-1919418404);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"string?","string?",-1129175764,null),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"string","string",-1989541586);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"ident?","ident?",-2061359468,null),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"symbol","symbol",-1038572696);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"simple-ident?","simple-ident?",194189851,null),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"symbol","symbol",-1038572696);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"qualified-ident?","qualified-ident?",-928894763,null),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"symbol","symbol",-1038572696);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"keyword","keyword",811389747);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"simple-keyword?","simple-keyword?",-367134735,null),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"keyword","keyword",811389747);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"qualified-keyword?","qualified-keyword?",375456001,null),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"keyword","keyword",811389747);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"symbol?","symbol?",1820680511,null),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"symbol","symbol",-1038572696);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"simple-symbol?","simple-symbol?",1408454822,null),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"symbol","symbol",-1038572696);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"qualified-symbol?","qualified-symbol?",98763807,null),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"symbol","symbol",-1038572696);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"uuid?","uuid?",400077689,null),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"any","any",1705907423);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"uri?","uri?",2029475116,null),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"any","any",1705907423);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"decimal?","decimal?",687666240,null),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"double","double",884886883);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"inst?","inst?",1614698981,null),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"any","any",1705907423);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"seqable?","seqable?",72462495,null),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"seqable","seqable",-1305253818);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"indexed?","indexed?",1234610384,null),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"vector","vector",1902966158);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"map?","map?",-1780568534,null),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"map","map",1371690461);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"vector","vector",1902966158);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"list?","list?",-1494629,null),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"list","list",765357683);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"seq","seq",-1817803783);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"char?","char?",-1072221244,null),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"char","char",-641587586);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"set?","set?",1636014792,null),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"set","set",304602554);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"nil","nil",99600501);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"false?","false?",-1522377573,null),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"boolean","boolean",-1919418404);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"true?","true?",-1600332395,null),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"boolean","boolean",-1919418404);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"zero?","zero?",325758897,null),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"int","int",-1741416922);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"coll","coll",1647737163);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"empty?","empty?",76408555,null),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"seq","seq",-1817803783);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"associative?","associative?",-141666771,null),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"associative","associative",-619293911);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"ratio?","ratio?",-498643049,null),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"int","int",-1741416922);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"bytes?","bytes?",-1745721485,null),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"char-sequence","char-sequence",1501456115);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"ifn","ifn",230683491);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"fn","fn",-1175266204);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,">",">",-555517146),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"number","number",1570378438);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,">=",">=",-623615505),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"number","number",1570378438);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"<","<",-646864291),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"number","number",1570378438);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"<=","<=",-395636158),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"number","number",1570378438);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"=","=",1152933628),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"any","any",1705907423);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"not=","not=",-173995323),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"any","any",1705907423);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"and","and",-971899817),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"any","any",1705907423);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"andn","andn",-872949990),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"any","any",1705907423);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"or","or",235744169),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"any","any",1705907423);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"orn","orn",738436484),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"any","any",1705907423);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"not","not",-595976884),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"any","any",1705907423);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map","map",1371690461),(function (_,___$1,children,___$2){
var map__59299 = cljs.core.group_by(malli.core._comp.cljs$core$IFn$_invoke$arity$3(cljs.core.not,new cljs.core.Keyword(null,"optional","optional",2053951509),cljs.core.second),children);
var map__59299__$1 = cljs.core.__destructure_map(map__59299);
var req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59299__$1,true);
var opt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59299__$1,false);
var opt__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__59303){
var vec__59306 = p__59303;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59306,(0),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59306,(1),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59306,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,s], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opt], 0)));
var req__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__59313){
var vec__59315 = p__59313;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59315,(0),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59315,(1),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59315,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,s], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req], 0)));
var G__59318 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"keys","keys",1068423698)], null);
var G__59318__$1 = ((cljs.core.seq(opt__$1))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59318,new cljs.core.Keyword(null,"opt","opt",-794706369),opt__$1):G__59318);
if(cljs.core.seq(req__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59318__$1,new cljs.core.Keyword(null,"req","req",-326448303),req__$1);
} else {
return G__59318__$1;
}
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map-of","map-of",1189682355),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"map","map",1371690461);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"vector","vector",1902966158);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"sequential","sequential",-1082983960),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set","set",304602554),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"set","set",304602554);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"enum","enum",1679018432),(function (_,___$1,children,___$2){
var types = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.type,children));
if(((1) < cljs.core.count(types))){
return new cljs.core.Keyword(null,"any","any",1705907423);
} else {
var child = cljs.core.first(children);
if(typeof child === 'string'){
return new cljs.core.Keyword(null,"string","string",-1989541586);
} else {
if((child instanceof cljs.core.Keyword)){
return new cljs.core.Keyword(null,"keyword","keyword",811389747);
} else {
if(cljs.core.integer_QMARK_(child)){
return new cljs.core.Keyword(null,"int","int",-1741416922);
} else {
if(cljs.core.char_QMARK_(child)){
return new cljs.core.Keyword(null,"char","char",-641587586);
} else {
if(typeof child === 'number'){
return new cljs.core.Keyword(null,"number","number",1570378438);
} else {
if((child instanceof cljs.core.Symbol)){
return new cljs.core.Keyword(null,"symbol","symbol",-1038572696);
} else {
return new cljs.core.Keyword(null,"any","any",1705907423);

}
}
}
}
}
}
}
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"maybe","maybe",-314397560),(function (_,___$1,p__59339,___$2){
var vec__59341 = p__59339;
var child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59341,(0),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(child))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(child,new cljs.core.Keyword(null,"nilable","nilable",1842307102),true);
} else {
if((((child instanceof cljs.core.Keyword)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"any","any",1705907423),child)))){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("nilable",cljs.core.name(child));
} else {
return child;

}
}
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"tuple","tuple",-472667284),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"seqable","seqable",-1305253818);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"multi","multi",-190293005),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"any","any",1705907423);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"re","re",228676202),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"string","string",-1989541586);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"any","any",1705907423);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ref","ref",1289896967),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"any","any",1705907423);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),(function (_,schema,___$1,options){
var G__59357 = malli.core.deref.cljs$core$IFn$_invoke$arity$1(schema);
var G__59358 = options;
return (malli.clj_kondo.transform.cljs$core$IFn$_invoke$arity$2 ? malli.clj_kondo.transform.cljs$core$IFn$_invoke$arity$2(G__59357,G__59358) : malli.clj_kondo.transform.call(null,G__59357,G__59358));
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("malli.core","schema","malli.core/schema",-1780373863),(function (_,schema,___$1,options){
var G__59361 = malli.core.deref.cljs$core$IFn$_invoke$arity$1(schema);
var G__59362 = options;
return (malli.clj_kondo.transform.cljs$core$IFn$_invoke$arity$2 ? malli.clj_kondo.transform.cljs$core$IFn$_invoke$arity$2(G__59361,G__59362) : malli.clj_kondo.transform.call(null,G__59361,G__59362));
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("malli.core","val","malli.core/val",39501268),(function (_,___$1,children,___$2){
return cljs.core.first(children);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"any","any",1705907423),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"any","any",1705907423);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"nil","nil",99600501),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"nil","nil",99600501);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"string","string",-1989541586),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"string","string",-1989541586);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"int","int",-1741416922),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"int","int",-1741416922);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"double","double",884886883),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"double","double",884886883);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"boolean","boolean",-1919418404),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"boolean","boolean",-1919418404);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"keyword","keyword",811389747),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"keyword","keyword",811389747);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"qualified-keyword","qualified-keyword",736041675),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"keyword","keyword",811389747);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"symbol","symbol",-1038572696);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"qualified-symbol","qualified-symbol",-665513695),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"symbol","symbol",-1038572696);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"uuid","uuid",-2145095719),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"any","any",1705907423);
}));
malli.clj_kondo._seqable_or_rest = (function malli$clj_kondo$_seqable_or_rest(p__59375,p__59376){
var vec__59377 = p__59375;
var child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59377,(0),null);
var map__59380 = p__59376;
var map__59380__$1 = cljs.core.__destructure_map(map__59380);
var arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59380__$1,new cljs.core.Keyword(null,"arity","arity",-1808556135));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arity,new cljs.core.Keyword(null,"varargs","varargs",1030150858))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"rest","rest",-1241696419),new cljs.core.Keyword(null,"spec","spec",347520401),child], null);
} else {
return new cljs.core.Keyword(null,"seqable","seqable",-1305253818);
}
});
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"+","+",1913524883),(function (_,___$1,children,options){
return malli.clj_kondo._seqable_or_rest(children,options);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"*","*",-1294732318),(function (_,___$1,children,options){
return malli.clj_kondo._seqable_or_rest(children,options);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"?","?",-1703165233),(function (_,___$1,children,options){
return malli.clj_kondo._seqable_or_rest(children,options);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"repeat","repeat",832692087),(function (_,___$1,children,options){
return malli.clj_kondo._seqable_or_rest(children,options);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"cat","cat",-1457810207),(function (_,___$1,children,___$2){
return children;
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"catn","catn",-48807277),(function (_,___$1,children,___$2){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.last,children);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"alt","alt",-3214426),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"any","any",1705907423);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"altn","altn",1717854417),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword(null,"any","any",1705907423);
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"merge","merge",-1804319409),(function (_,schema,___$1,options){
var G__59387 = malli.core.deref.cljs$core$IFn$_invoke$arity$1(schema);
var G__59388 = options;
return (malli.clj_kondo.transform.cljs$core$IFn$_invoke$arity$2 ? malli.clj_kondo.transform.cljs$core$IFn$_invoke$arity$2(G__59387,G__59388) : malli.clj_kondo.transform.call(null,G__59387,G__59388));
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"union","union",2142937499),(function (_,schema,___$1,options){
var G__59391 = malli.core.deref.cljs$core$IFn$_invoke$arity$1(schema);
var G__59392 = options;
return (malli.clj_kondo.transform.cljs$core$IFn$_invoke$arity$2 ? malli.clj_kondo.transform.cljs$core$IFn$_invoke$arity$2(G__59391,G__59392) : malli.clj_kondo.transform.call(null,G__59391,G__59392));
}));
malli.clj_kondo.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"select-keys","select-keys",1945879180),(function (_,schema,___$1,options){
var G__59397 = malli.core.deref.cljs$core$IFn$_invoke$arity$1(schema);
var G__59398 = options;
return (malli.clj_kondo.transform.cljs$core$IFn$_invoke$arity$2 ? malli.clj_kondo.transform.cljs$core$IFn$_invoke$arity$2(G__59397,G__59398) : malli.clj_kondo.transform.call(null,G__59397,G__59398));
}));
malli.clj_kondo._walk = (function malli$clj_kondo$_walk(schema,_,children,options){
return malli.clj_kondo.accept.cljs$core$IFn$_invoke$arity$4(malli.core.type.cljs$core$IFn$_invoke$arity$1(schema),schema,children,options);
});
malli.clj_kondo._transform = (function malli$clj_kondo$_transform(_QMARK_schema,options){
return malli.core.walk.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,malli.clj_kondo._walk,options);
});
malli.clj_kondo.transform = (function malli$clj_kondo$transform(var_args){
var G__59401 = arguments.length;
switch (G__59401) {
case 1:
return malli.clj_kondo.transform.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.clj_kondo.transform.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(malli.clj_kondo.transform.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_schema){
return malli.clj_kondo.transform.cljs$core$IFn$_invoke$arity$2(_QMARK_schema,null);
}));

(malli.clj_kondo.transform.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,options){
return malli.clj_kondo._transform(_QMARK_schema,options);
}));

(malli.clj_kondo.transform.cljs$lang$maxFixedArity = 2);

malli.clj_kondo.from = (function malli$clj_kondo$from(p__59409){
var map__59410 = p__59409;
var map__59410__$1 = cljs.core.__destructure_map(map__59410);
var _QMARK_schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59410__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59410__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59410__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var ns_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)));
var schema = malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(_QMARK_schema);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,schema__$1){
var map__59415 = malli.core._function_info(schema__$1);
var map__59415__$1 = cljs.core.__destructure_map(map__59415);
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59415__$1,new cljs.core.Keyword(null,"input","input",556931961));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59415__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
var arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59415__$1,new cljs.core.Keyword(null,"arity","arity",-1808556135));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59415__$1,new cljs.core.Keyword(null,"min","min",444991522));
var args = malli.clj_kondo.transform.cljs$core$IFn$_invoke$arity$2(input,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arity","arity",-1808556135),arity], null));
var ret = malli.clj_kondo.transform.cljs$core$IFn$_invoke$arity$1(output);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,(function (){var G__59427 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ns","ns",441598760),ns_name,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"arity","arity",-1808556135),arity,new cljs.core.Keyword(null,"args","args",1315556576),args,new cljs.core.Keyword(null,"ret","ret",-468222814),ret], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arity,new cljs.core.Keyword(null,"varargs","varargs",1030150858))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59427,new cljs.core.Keyword(null,"min-arity","min-arity",-1319331358),min);
} else {
return G__59427;
}
})());
}),cljs.core.PersistentVector.EMPTY,(function (){var or__5162__auto__ = cljs.core.seq(malli.core._function_schema_arities(schema));
if(or__5162__auto__){
return or__5162__auto__;
} else {
return malli.core._fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli.clj-kondo","from-requires-function-schema","malli.clj-kondo/from-requires-function-schema",649306947),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema], null));
}
})());
});
malli.clj_kondo.collect = (function malli$clj_kondo$collect(var_args){
var G__59443 = arguments.length;
switch (G__59443) {
case 0:
return malli.clj_kondo.collect.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return malli.clj_kondo.collect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(malli.clj_kondo.collect.cljs$core$IFn$_invoke$arity$0 = (function (){
return malli.clj_kondo.collect.cljs$core$IFn$_invoke$arity$1(null);
}));

(malli.clj_kondo.collect.cljs$core$IFn$_invoke$arity$1 = (function (ns){
var _collect = (function (k){
return (((ns == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns))))));
});
var iter__5649__auto__ = (function malli$clj_kondo$iter__59451(s__59452){
return (new cljs.core.LazySeq(null,(function (){
var s__59452__$1 = s__59452;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__59452__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var vec__59460 = cljs.core.first(xs__6385__auto__);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59460,(0),null);
var vs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59460,(1),null);
if(_collect(k)){
var iterys__5645__auto__ = ((function (s__59452__$1,vec__59460,k,vs,xs__6385__auto__,temp__5825__auto__,_collect){
return (function malli$clj_kondo$iter__59451_$_iter__59453(s__59454){
return (new cljs.core.LazySeq(null,((function (s__59452__$1,vec__59460,k,vs,xs__6385__auto__,temp__5825__auto__,_collect){
return (function (){
var s__59454__$1 = s__59454;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__59454__$1);
if(temp__5825__auto____$1){
var xs__6385__auto____$1 = temp__5825__auto____$1;
var vec__59467 = cljs.core.first(xs__6385__auto____$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59467,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59467,(1),null);
var iterys__5645__auto__ = ((function (s__59454__$1,s__59452__$1,vec__59467,_,v,xs__6385__auto____$1,temp__5825__auto____$1,vec__59460,k,vs,xs__6385__auto__,temp__5825__auto__,_collect){
return (function malli$clj_kondo$iter__59451_$_iter__59453_$_iter__59455(s__59456){
return (new cljs.core.LazySeq(null,((function (s__59454__$1,s__59452__$1,vec__59467,_,v,xs__6385__auto____$1,temp__5825__auto____$1,vec__59460,k,vs,xs__6385__auto__,temp__5825__auto__,_collect){
return (function (){
var s__59456__$1 = s__59456;
while(true){
var temp__5825__auto____$2 = cljs.core.seq(s__59456__$1);
if(temp__5825__auto____$2){
var s__59456__$2 = temp__5825__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__59456__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__59456__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__59458 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__59457 = (0);
while(true){
if((i__59457 < size__5648__auto__)){
var v__$1 = cljs.core._nth(c__5647__auto__,i__59457);
cljs.core.chunk_append(b__59458,v__$1);

var G__59627 = (i__59457 + (1));
i__59457 = G__59627;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59458),malli$clj_kondo$iter__59451_$_iter__59453_$_iter__59455(cljs.core.chunk_rest(s__59456__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59458),null);
}
} else {
var v__$1 = cljs.core.first(s__59456__$2);
return cljs.core.cons(v__$1,malli$clj_kondo$iter__59451_$_iter__59453_$_iter__59455(cljs.core.rest(s__59456__$2)));
}
} else {
return null;
}
break;
}
});})(s__59454__$1,s__59452__$1,vec__59467,_,v,xs__6385__auto____$1,temp__5825__auto____$1,vec__59460,k,vs,xs__6385__auto__,temp__5825__auto__,_collect))
,null,null));
});})(s__59454__$1,s__59452__$1,vec__59467,_,v,xs__6385__auto____$1,temp__5825__auto____$1,vec__59460,k,vs,xs__6385__auto__,temp__5825__auto__,_collect))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__(malli.clj_kondo.from(v)));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,malli$clj_kondo$iter__59451_$_iter__59453(cljs.core.rest(s__59454__$1)));
} else {
var G__59629 = cljs.core.rest(s__59454__$1);
s__59454__$1 = G__59629;
continue;
}
} else {
return null;
}
break;
}
});})(s__59452__$1,vec__59460,k,vs,xs__6385__auto__,temp__5825__auto__,_collect))
,null,null));
});})(s__59452__$1,vec__59460,k,vs,xs__6385__auto__,temp__5825__auto__,_collect))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__(vs));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,malli$clj_kondo$iter__59451(cljs.core.rest(s__59452__$1)));
} else {
var G__59630 = cljs.core.rest(s__59452__$1);
s__59452__$1 = G__59630;
continue;
}
} else {
var G__59631 = cljs.core.rest(s__59452__$1);
s__59452__$1 = G__59631;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(malli.core.function_schemas.cljs$core$IFn$_invoke$arity$0());
}));

(malli.clj_kondo.collect.cljs$lang$maxFixedArity = 1);

malli.clj_kondo.linter_config = (function malli$clj_kondo$linter_config(xs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__59497){
var map__59498 = p__59497;
var map__59498__$1 = cljs.core.__destructure_map(map__59498);
var data = map__59498__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59498__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59498__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59498__$1,new cljs.core.Keyword(null,"arity","arity",-1808556135));
return cljs.core.assoc_in(acc,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linters","linters",-1624120140),new cljs.core.Keyword(null,"type-mismatch","type-mismatch",-1785261567),new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns,name,new cljs.core.Keyword(null,"arities","arities",-1781122917),arity], null),cljs.core.select_keys(data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"min-arity","min-arity",-1319331358)], null)));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"linters","linters",-1624120140),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unresolved-symbol","unresolved-symbol",-580492564),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"exclude","exclude",-1230250334),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("malli.core","=>","malli.core/=>",-721861537,null))], null)], null)], null)], null),xs);
});
malli.clj_kondo.collect_cljs = (function malli$clj_kondo$collect_cljs(var_args){
var G__59509 = arguments.length;
switch (G__59509) {
case 0:
return malli.clj_kondo.collect_cljs.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return malli.clj_kondo.collect_cljs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(malli.clj_kondo.collect_cljs.cljs$core$IFn$_invoke$arity$0 = (function (){
return malli.clj_kondo.collect_cljs.cljs$core$IFn$_invoke$arity$1(null);
}));

(malli.clj_kondo.collect_cljs.cljs$core$IFn$_invoke$arity$1 = (function (ns){
var _collect = (function (k){
return (((ns == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns))))));
});
var iter__5649__auto__ = (function malli$clj_kondo$iter__59515(s__59516){
return (new cljs.core.LazySeq(null,(function (){
var s__59516__$1 = s__59516;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__59516__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var vec__59528 = cljs.core.first(xs__6385__auto__);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59528,(0),null);
var vs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59528,(1),null);
if(_collect(k)){
var iterys__5645__auto__ = ((function (s__59516__$1,vec__59528,k,vs,xs__6385__auto__,temp__5825__auto__,_collect){
return (function malli$clj_kondo$iter__59515_$_iter__59517(s__59518){
return (new cljs.core.LazySeq(null,((function (s__59516__$1,vec__59528,k,vs,xs__6385__auto__,temp__5825__auto__,_collect){
return (function (){
var s__59518__$1 = s__59518;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__59518__$1);
if(temp__5825__auto____$1){
var xs__6385__auto____$1 = temp__5825__auto____$1;
var vec__59537 = cljs.core.first(xs__6385__auto____$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59537,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59537,(1),null);
var iterys__5645__auto__ = ((function (s__59518__$1,s__59516__$1,vec__59537,_,v,xs__6385__auto____$1,temp__5825__auto____$1,vec__59528,k,vs,xs__6385__auto__,temp__5825__auto__,_collect){
return (function malli$clj_kondo$iter__59515_$_iter__59517_$_iter__59519(s__59520){
return (new cljs.core.LazySeq(null,((function (s__59518__$1,s__59516__$1,vec__59537,_,v,xs__6385__auto____$1,temp__5825__auto____$1,vec__59528,k,vs,xs__6385__auto__,temp__5825__auto__,_collect){
return (function (){
var s__59520__$1 = s__59520;
while(true){
var temp__5825__auto____$2 = cljs.core.seq(s__59520__$1);
if(temp__5825__auto____$2){
var s__59520__$2 = temp__5825__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__59520__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__59520__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__59522 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__59521 = (0);
while(true){
if((i__59521 < size__5648__auto__)){
var v__$1 = cljs.core._nth(c__5647__auto__,i__59521);
cljs.core.chunk_append(b__59522,v__$1);

var G__59637 = (i__59521 + (1));
i__59521 = G__59637;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59522),malli$clj_kondo$iter__59515_$_iter__59517_$_iter__59519(cljs.core.chunk_rest(s__59520__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59522),null);
}
} else {
var v__$1 = cljs.core.first(s__59520__$2);
return cljs.core.cons(v__$1,malli$clj_kondo$iter__59515_$_iter__59517_$_iter__59519(cljs.core.rest(s__59520__$2)));
}
} else {
return null;
}
break;
}
});})(s__59518__$1,s__59516__$1,vec__59537,_,v,xs__6385__auto____$1,temp__5825__auto____$1,vec__59528,k,vs,xs__6385__auto__,temp__5825__auto__,_collect))
,null,null));
});})(s__59518__$1,s__59516__$1,vec__59537,_,v,xs__6385__auto____$1,temp__5825__auto____$1,vec__59528,k,vs,xs__6385__auto__,temp__5825__auto__,_collect))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__(malli.clj_kondo.from(v)));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,malli$clj_kondo$iter__59515_$_iter__59517(cljs.core.rest(s__59518__$1)));
} else {
var G__59646 = cljs.core.rest(s__59518__$1);
s__59518__$1 = G__59646;
continue;
}
} else {
return null;
}
break;
}
});})(s__59516__$1,vec__59528,k,vs,xs__6385__auto__,temp__5825__auto__,_collect))
,null,null));
});})(s__59516__$1,vec__59528,k,vs,xs__6385__auto__,temp__5825__auto__,_collect))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__(vs));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,malli$clj_kondo$iter__59515(cljs.core.rest(s__59516__$1)));
} else {
var G__59647 = cljs.core.rest(s__59516__$1);
s__59516__$1 = G__59647;
continue;
}
} else {
var G__59648 = cljs.core.rest(s__59516__$1);
s__59516__$1 = G__59648;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(malli.core.function_schemas.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"cljs","cljs",1492417629)));
}));

(malli.clj_kondo.collect_cljs.cljs$lang$maxFixedArity = 1);

malli.clj_kondo.get_kondo_config = (function malli$clj_kondo$get_kondo_config(){
return malli.clj_kondo.linter_config(malli.clj_kondo.collect_cljs.cljs$core$IFn$_invoke$arity$0());
});
malli.clj_kondo.print_BANG__STAR_ = (function malli$clj_kondo$print_BANG__STAR_(config){
return console.log((function (){var sb__5816__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__59554_59649 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__59555_59650 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__59556_59651 = true;
var _STAR_print_fn_STAR__temp_val__59557_59652 = (function (x__5817__auto__){
return sb__5816__auto__.append(x__5817__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__59556_59651);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__59557_59652);

try{fipp.edn.pprint.cljs$core$IFn$_invoke$arity$2(config,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(120)], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__59555_59650);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__59554_59649);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5816__auto__));
})());
});
malli.clj_kondo.print_cljs_BANG_ = (function malli$clj_kondo$print_cljs_BANG_(){
malli.clj_kondo.print_BANG__STAR_(malli.clj_kondo.get_kondo_config());

return null;
});

//# sourceMappingURL=malli.clj_kondo.js.map
