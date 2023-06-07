import Database from 'better-sqlite3';

const DB_PATH = "database/servers.db";
const db = new Database(DB_PATH, { verbose: console.log });
console.log(DB_PATH);
db.pragma("journal_mode = WAL");
function GetServers(limit = 50) {
  const sql = `SELECT * FROM servers`;
  const stmnt = db.prepare(sql);
  const rows = stmnt.all({ limit });
  return rows;
}
function AddServer(server) {
  const sql = `INSERT INTO servers (name, ip, port, description) VALUES (?, ?, ?, ?)`;
  const stmnt = db.prepare(sql);
  stmnt.run(server.name, server.ip, server.port, server.name);
}
function DeleteServer(name) {
  const sql = `DELETE FROM servers WHERE name = ?`;
  const stmnt = db.prepare(sql);
  stmnt.run(name);
}

export { AddServer as A, DeleteServer as D, GetServers as G };
//# sourceMappingURL=index3-882c144c.js.map
