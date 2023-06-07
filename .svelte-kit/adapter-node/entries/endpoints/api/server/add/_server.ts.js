import { A as AddServer } from "../../../../../chunks/index3.js";
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
export {
  POST
};
