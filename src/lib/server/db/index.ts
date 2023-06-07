import Database from 'better-sqlite3';
//import { DB_PATH } from '$env/static/private';
import type { ServerInfoType } from '$lib/types/ServerInfoType';


export const DB_PATH = "database/servers.db";
export const db = new Database(DB_PATH, { verbose: console.log });
console.log(DB_PATH);
db.pragma('journal_mode = WAL');

/**
 * Retrieves server information from the database.
 *
 * @param {number} limit - The maximum number of rows to return. Defaults to 50.
 * @return {ServerInfoType[]} An array of server information objects.
 */
export function GetServers(limit = 50): ServerInfoType[] {
    const sql = `SELECT * FROM servers`;
    const stmnt = db.prepare(sql);
    const rows = stmnt.all({ limit });
    return rows as ServerInfoType[];
}
/**
 * Adds a new server to the database.
 *
 * @param {ServerInfoType} server - The server information to be added.
 * @return {void} Returns nothing.
 */
export function AddServer(server: ServerInfoType): void {
    const sql = `INSERT INTO servers (name, ip, port, description) VALUES (?, ?, ?, ?)`;
    const stmnt = db.prepare(sql);
    stmnt.run(server.name, server.ip, server.port, server.name);
}
/**
 * Deletes a server from the database by name.
 *
 * @param {string} name - The name of the server to be deleted.
 * @return {void} This function does not return anything.
 */
export function DeleteServer(name: string): void {
    const sql = `DELETE FROM servers WHERE name = ?`;
    const stmnt = db.prepare(sql);
    stmnt.run(name);
}