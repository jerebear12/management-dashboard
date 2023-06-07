import { G as GetServers } from './index3-882c144c.js';
import 'better-sqlite3';

const load = async () => {
  return { ...GetServers() };
};

var _layout_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 0;
const component = async () => (await import('./_layout.svelte-95b6cf6c.js')).default;
const server_id = "src/routes/+layout.server.ts";
const imports = ["_app/immutable/nodes/0.a19cf09d.js","_app/immutable/chunks/index.426091fe.js","_app/immutable/chunks/ComponentRegistry.211d853a.js","_app/immutable/chunks/singletons.4db9a175.js","_app/immutable/chunks/stores.7c0e6951.js"];
const stylesheets = ["_app/immutable/assets/0.185e8734.css","_app/immutable/assets/ComponentRegistry.6faa9e4c.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=0-19f76e5d.js.map
