import { G as GetServers } from "../../chunks/index3.js";
const load = async () => {
  return { ...GetServers() };
};
export {
  load
};
