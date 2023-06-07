import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.a19cf09d.js","_app/immutable/chunks/index.426091fe.js","_app/immutable/chunks/ComponentRegistry.211d853a.js","_app/immutable/chunks/singletons.4db9a175.js","_app/immutable/chunks/stores.7c0e6951.js"];
export const stylesheets = ["_app/immutable/assets/0.185e8734.css","_app/immutable/assets/ComponentRegistry.6faa9e4c.css"];
export const fonts = [];
