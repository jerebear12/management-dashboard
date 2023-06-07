import { D as DeleteServer } from "../../../../../chunks/index3.js";
const DELETE = (event) => {
  const name = event.url.searchParams.get("name");
  let body;
  let status;
  if (name != null) {
    DeleteServer(name);
    body = "Successfully deleted server.";
    status = 200;
  } else {
    body = "No name specified";
    status = 400;
  }
  const headers = new Headers({
    "content-type": "application/json"
  });
  return new Response(body, { headers, status });
};
export {
  DELETE
};
