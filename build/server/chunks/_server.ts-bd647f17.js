import { A as AddServer } from './index3-882c144c.js';
import 'better-sqlite3';

const POST = (event) => {
  let body;
  let status;
  const name = event.url.searchParams.get("name");
  const ip = event.url.searchParams.get("ip");
  const port = event.url.searchParams.get("port");
  const description = event.url.searchParams.get("description");
  const headers = new Headers({
    "content-type": "application/json"
  });
  if (name == null || ip == null || port == null || description == null) {
    body = "One of the required parameters specified is null.";
    status = 400;
  } else {
    const server = { name, ip, port, description };
    body = "Successfully added server.";
    status = 200;
    try {
      AddServer(server);
    } catch {
      body = "Failed to add server.";
      status = 500;
    }
  }
  return new Response(body, { headers, status });
};

export { POST };
//# sourceMappingURL=_server.ts-bd647f17.js.map
