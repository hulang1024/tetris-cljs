goog.provide('tetr.scenes.gameplay.piece');
var module$node_modules$excalibur$build$dist$excalibur=shadow.js.require("module$node_modules$excalibur$build$dist$excalibur", {});
tetr.scenes.gameplay.piece.get_positions = (function tetr$scenes$gameplay$piece$get_positions(shape){
var gap = (1);
var step = ((20) + gap);
var iter__5649__auto__ = (function tetr$scenes$gameplay$piece$get_positions_$_iter__38338(s__38339){
return (new cljs.core.LazySeq(null,(function (){
var s__38339__$1 = s__38339;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__38339__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var vec__38344 = cljs.core.first(xs__6385__auto__);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38344,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38344,(1),null);
var iterys__5645__auto__ = ((function (s__38339__$1,vec__38344,r,row,xs__6385__auto__,temp__5825__auto__,gap,step){
return (function tetr$scenes$gameplay$piece$get_positions_$_iter__38338_$_iter__38340(s__38341){
return (new cljs.core.LazySeq(null,((function (s__38339__$1,vec__38344,r,row,xs__6385__auto__,temp__5825__auto__,gap,step){
return (function (){
var s__38341__$1 = s__38341;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__38341__$1);
if(temp__5825__auto____$1){
var s__38341__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38341__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__38341__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__38343 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__38342 = (0);
while(true){
if((i__38342 < size__5648__auto__)){
var vec__38347 = cljs.core._nth(c__5647__auto__,i__38342);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38347,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38347,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(b,(0))){
cljs.core.chunk_append(b__38343,(new module$node_modules$excalibur$build$dist$excalibur.Vector((c * step),(r * step))));

var G__38375 = (i__38342 + (1));
i__38342 = G__38375;
continue;
} else {
var G__38376 = (i__38342 + (1));
i__38342 = G__38376;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38343),tetr$scenes$gameplay$piece$get_positions_$_iter__38338_$_iter__38340(cljs.core.chunk_rest(s__38341__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38343),null);
}
} else {
var vec__38350 = cljs.core.first(s__38341__$2);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38350,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38350,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(b,(0))){
return cljs.core.cons((new module$node_modules$excalibur$build$dist$excalibur.Vector((c * step),(r * step))),tetr$scenes$gameplay$piece$get_positions_$_iter__38338_$_iter__38340(cljs.core.rest(s__38341__$2)));
} else {
var G__38377 = cljs.core.rest(s__38341__$2);
s__38341__$1 = G__38377;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__38339__$1,vec__38344,r,row,xs__6385__auto__,temp__5825__auto__,gap,step))
,null,null));
});})(s__38339__$1,vec__38344,r,row,xs__6385__auto__,temp__5825__auto__,gap,step))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,row)));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,tetr$scenes$gameplay$piece$get_positions_$_iter__38338(cljs.core.rest(s__38339__$1)));
} else {
var G__38378 = cljs.core.rest(s__38339__$1);
s__38339__$1 = G__38378;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,shape));
});
tetr.scenes.gameplay.piece.create_blocks = (function tetr$scenes$gameplay$piece$create_blocks(piece_type,shape){
var colors = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"s","s",1705939918),"#59b101",new cljs.core.Keyword(null,"z","z",-789527183),"#d71037",new cljs.core.Keyword(null,"l","l",1395893423),"#e35b03",new cljs.core.Keyword(null,"j","j",-1397974765),"#2242c6",new cljs.core.Keyword(null,"i","i",-1386841315),"#0f9bd7",new cljs.core.Keyword(null,"o","o",-1350007228),"#e39f04",new cljs.core.Keyword(null,"t","t",-1397832519),"#af298a"], null);
var rect = (new module$node_modules$excalibur$build$dist$excalibur.Rectangle(({"width": (20), "height": (20), "color": module$node_modules$excalibur$build$dist$excalibur.Color.fromHex((colors.cljs$core$IFn$_invoke$arity$1 ? colors.cljs$core$IFn$_invoke$arity$1(piece_type) : colors.call(null,piece_type)))})));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (pos){
return (new module$node_modules$excalibur$build$dist$excalibur.Actor(({"pos": pos, "graphic": rect})));
}),tetr.scenes.gameplay.piece.get_positions(shape));
});
tetr.scenes.gameplay.piece.Piece = class tetr$scenes$gameplay$piece$Piece extends module$node_modules$excalibur$build$dist$excalibur.Actor {
  constructor(G__38353,G__38354) {
var piece_type_38379__$1 = G__38353;
var dir_38380 = G__38354;
super();
var self__ = this;

malli.core.coerce.cljs$core$IFn$_invoke$arity$4(tetr.core.schema.PieceType,piece_type_38379__$1,null,null);

malli.core.coerce.cljs$core$IFn$_invoke$arity$4(tetr.core.schema.Dir,dir_38380,null,null);

(self__.piece_type = piece_type_38379__$1);

(self__.blocks = tetr.scenes.gameplay.piece.create_blocks(piece_type_38379__$1,tetr.core.logic.get_piece_shape(piece_type_38379__$1,dir_38380)));

var seq__38355_38381 = cljs.core.seq(self__.blocks);
var chunk__38356_38382 = null;
var count__38357_38383 = (0);
var i__38358_38384 = (0);
while(true){
if((i__38358_38384 < count__38357_38383)){
var b_38385 = chunk__38356_38382.cljs$core$IIndexed$_nth$arity$2(null,i__38358_38384);
self__.addChild(b_38385);


var G__38386 = seq__38355_38381;
var G__38387 = chunk__38356_38382;
var G__38388 = count__38357_38383;
var G__38389 = (i__38358_38384 + (1));
seq__38355_38381 = G__38386;
chunk__38356_38382 = G__38387;
count__38357_38383 = G__38388;
i__38358_38384 = G__38389;
continue;
} else {
var temp__5825__auto___38390 = cljs.core.seq(seq__38355_38381);
if(temp__5825__auto___38390){
var seq__38355_38391__$1 = temp__5825__auto___38390;
if(cljs.core.chunked_seq_QMARK_(seq__38355_38391__$1)){
var c__5694__auto___38392 = cljs.core.chunk_first(seq__38355_38391__$1);
var G__38393 = cljs.core.chunk_rest(seq__38355_38391__$1);
var G__38394 = c__5694__auto___38392;
var G__38395 = cljs.core.count(c__5694__auto___38392);
var G__38396 = (0);
seq__38355_38381 = G__38393;
chunk__38356_38382 = G__38394;
count__38357_38383 = G__38395;
i__38358_38384 = G__38396;
continue;
} else {
var b_38397 = cljs.core.first(seq__38355_38391__$1);
self__.addChild(b_38397);


var G__38398 = cljs.core.next(seq__38355_38391__$1);
var G__38399 = null;
var G__38400 = (0);
var G__38401 = (0);
seq__38355_38381 = G__38398;
chunk__38356_38382 = G__38399;
count__38357_38383 = G__38400;
i__38358_38384 = G__38401;
continue;
}
} else {
}
}
break;
}
  }
};
(tetr.scenes.gameplay.piece.Piece.prototype.set_dir = (function (dir){
var self__ = this;
var this$ = this;
malli.core.coerce.cljs$core$IFn$_invoke$arity$4(tetr.core.schema.Dir,dir,null,null);

var shape = tetr.core.logic.get_piece_shape(this$.piece_type,dir);
var positions = tetr.scenes.gameplay.piece.get_positions(shape);
var seq__38359 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,this$.blocks,positions));
var chunk__38360 = null;
var count__38361 = (0);
var i__38362 = (0);
while(true){
if((i__38362 < count__38361)){
var vec__38369 = chunk__38360.cljs$core$IIndexed$_nth$arity$2(null,i__38362);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38369,(0),null);
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38369,(1),null);
(b.pos = pos);


var G__38402 = seq__38359;
var G__38403 = chunk__38360;
var G__38404 = count__38361;
var G__38405 = (i__38362 + (1));
seq__38359 = G__38402;
chunk__38360 = G__38403;
count__38361 = G__38404;
i__38362 = G__38405;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__38359);
if(temp__5825__auto__){
var seq__38359__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38359__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__38359__$1);
var G__38406 = cljs.core.chunk_rest(seq__38359__$1);
var G__38407 = c__5694__auto__;
var G__38408 = cljs.core.count(c__5694__auto__);
var G__38409 = (0);
seq__38359 = G__38406;
chunk__38360 = G__38407;
count__38361 = G__38408;
i__38362 = G__38409;
continue;
} else {
var vec__38372 = cljs.core.first(seq__38359__$1);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38372,(0),null);
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38372,(1),null);
(b.pos = pos);


var G__38410 = cljs.core.next(seq__38359__$1);
var G__38411 = null;
var G__38412 = (0);
var G__38413 = (0);
seq__38359 = G__38410;
chunk__38360 = G__38411;
count__38361 = G__38412;
i__38362 = G__38413;
continue;
}
} else {
return null;
}
}
break;
}
}));

//# sourceMappingURL=tetr.scenes.gameplay.piece.js.map
