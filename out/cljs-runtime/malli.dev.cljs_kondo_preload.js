goog.provide('malli.dev.cljs_kondo_preload');
/**
 * During development sends the clj-kondo config data for all collected functions with malli schemas to the shadow-cljs clojure runtime which writes it to disk.
 */
malli.dev.cljs_kondo_preload.send_kondo_config_to_shadow_BANG_ = (function malli$dev$cljs_kondo_preload$send_kondo_config_to_shadow_BANG_(){
return shadow.remote.runtime.shared.relay_msg(cljs.core.deref(shadow.cljs.devtools.client.shared.runtime_ref),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword("malli.clj-kondo","write-config","malli.clj-kondo/write-config",549987749),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"build-id","build-id",1642831089),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.build_id),new cljs.core.Keyword(null,"data","data",-232669377),malli.clj_kondo.get_kondo_config()], null));
});
shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("malli.dev.cljs-kondo-preload","client","malli.dev.cljs-kondo-preload/client",-368414141),cljs.core.PersistentHashSet.EMPTY,(function (p__37352){
var map__37353 = p__37352;
var map__37353__$1 = cljs.core.__destructure_map(map__37353);
var env = map__37353__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37353__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("malli.dev.cljs-kondo-preload","client","malli.dev.cljs-kondo-preload/client",-368414141),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
return malli.dev.cljs_kondo_preload.send_kondo_config_to_shadow_BANG_();
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
return null;
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return malli.dev.cljs_kondo_preload.send_kondo_config_to_shadow_BANG_();
})], null));

return env;
}),(function (p__37354){
var map__37355 = p__37354;
var map__37355__$1 = cljs.core.__destructure_map(map__37355);
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37355__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("malli.dev.cljs-kondo-preload","client","malli.dev.cljs-kondo-preload/client",-368414141));
}));

//# sourceMappingURL=malli.dev.cljs_kondo_preload.js.map
