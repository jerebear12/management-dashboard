import { c as create_ssr_component, b as subscribe, v as validate_component } from './index2-b5d428a2.js';
import { p as page } from './stores-da85ecfa.js';
import { S as ServerInfoPanel } from './ServerInfoPanel-0de7ae2e.js';
import { s as servers } from './Toaster-a5a96028.js';
import './index-bfd7eb6f.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $servers, $$unsubscribe_servers;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_servers = subscribe(servers, (value) => $servers = value);
  let found = $servers.find((s) => s.name === $page.params.slug);
  let server;
  if (found != null && found != void 0) {
    server = found;
  }
  $$unsubscribe_page();
  $$unsubscribe_servers();
  return `<p>${server != null ? `<div class="m-4"><div class="card">${validate_component(ServerInfoPanel, "ServerInfoPanel").$$render($$result, { server }, {}, {})}</div></div>` : ``}</p>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-63c127e6.js.map
