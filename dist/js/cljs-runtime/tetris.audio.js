goog.provide('tetris.audio');
var module$node_modules$howler$dist$howler=shadow.js.require("module$node_modules$howler$dist$howler", {});
tetris.audio.sounds = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
tetris.audio.sound = (function tetris$audio$sound(id){
var G__56138 = cljs.core.deref(tetris.audio.sounds);
return (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(G__56138) : id.call(null,G__56138));
});
tetris.audio.log = (function tetris$audio$log(s){
return cljs.core.tap_GT_((""+"aduio - "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)));
});
tetris.audio.load_sounds = (function tetris$audio$load_sounds(){
cljs.core.tap_GT_("load sounds");

var seq__56139 = cljs.core.seq(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rotate","land","hard-drop","lock","hold","clear-1"], null));
var chunk__56141 = null;
var count__56142 = (0);
var i__56143 = (0);
while(true){
if((i__56143 < count__56142)){
var name = chunk__56141.cljs$core$IIndexed$_nth$arity$2(null,i__56143);
var id_56145 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+"effect/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)));
var src_56146 = (""+"assets/gameplay/effect/chiptune/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+".ogg");
var sound_56147 = (new module$node_modules$howler$dist$howler.Howl(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [src_56146], null),new cljs.core.Keyword(null,"volume","volume",1900330799),0.1], null))));
sound_56147.once("load",((function (seq__56139,chunk__56141,count__56142,i__56143,id_56145,src_56146,sound_56147,name){
return (function (_){
return tetris.audio.log((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(src_56146)+" loaded"));
});})(seq__56139,chunk__56141,count__56142,i__56143,id_56145,src_56146,sound_56147,name))
);

sound_56147.on("play",((function (seq__56139,chunk__56141,count__56142,i__56143,id_56145,src_56146,sound_56147,name){
return (function (_){
return tetris.audio.log((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_56145)+" played"));
});})(seq__56139,chunk__56141,count__56142,i__56143,id_56145,src_56146,sound_56147,name))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tetris.audio.sounds,cljs.core.assoc,id_56145,sound_56147);


var G__56148 = seq__56139;
var G__56149 = chunk__56141;
var G__56150 = count__56142;
var G__56151 = (i__56143 + (1));
seq__56139 = G__56148;
chunk__56141 = G__56149;
count__56142 = G__56150;
i__56143 = G__56151;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__56139);
if(temp__5825__auto__){
var seq__56139__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56139__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__56139__$1);
var G__56152 = cljs.core.chunk_rest(seq__56139__$1);
var G__56153 = c__5694__auto__;
var G__56154 = cljs.core.count(c__5694__auto__);
var G__56155 = (0);
seq__56139 = G__56152;
chunk__56141 = G__56153;
count__56142 = G__56154;
i__56143 = G__56155;
continue;
} else {
var name = cljs.core.first(seq__56139__$1);
var id_56156 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+"effect/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)));
var src_56157 = (""+"assets/gameplay/effect/chiptune/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+".ogg");
var sound_56158 = (new module$node_modules$howler$dist$howler.Howl(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [src_56157], null),new cljs.core.Keyword(null,"volume","volume",1900330799),0.1], null))));
sound_56158.once("load",((function (seq__56139,chunk__56141,count__56142,i__56143,id_56156,src_56157,sound_56158,name,seq__56139__$1,temp__5825__auto__){
return (function (_){
return tetris.audio.log((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(src_56157)+" loaded"));
});})(seq__56139,chunk__56141,count__56142,i__56143,id_56156,src_56157,sound_56158,name,seq__56139__$1,temp__5825__auto__))
);

sound_56158.on("play",((function (seq__56139,chunk__56141,count__56142,i__56143,id_56156,src_56157,sound_56158,name,seq__56139__$1,temp__5825__auto__){
return (function (_){
return tetris.audio.log((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_56156)+" played"));
});})(seq__56139,chunk__56141,count__56142,i__56143,id_56156,src_56157,sound_56158,name,seq__56139__$1,temp__5825__auto__))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tetris.audio.sounds,cljs.core.assoc,id_56156,sound_56158);


var G__56159 = cljs.core.next(seq__56139__$1);
var G__56160 = null;
var G__56161 = (0);
var G__56162 = (0);
seq__56139 = G__56159;
chunk__56141 = G__56160;
count__56142 = G__56161;
i__56143 = G__56162;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=tetris.audio.js.map
