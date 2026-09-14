
shadow.cljs.devtools.client.env.module_loaded('main');

try { tetris.main.init(); } catch (e) { console.error("An error occurred when calling (tetris.main/init)"); console.error(e); }