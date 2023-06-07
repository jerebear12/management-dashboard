import type { ServerInfoType } from '$lib/types/ServerInfoType';
import { writable } from 'svelte/store';

const server: ServerInfoType[] = [
    // {
    //     "name": "Alpha",
    //     "ip": "localhost",
    //     "description": "This is the alpha server",
    //     "port": "44314"
    // }
];

/**
 * Returns an object with methods to subscribe to server updates and modify the server list.
 *
 * @return {object} An object with the following methods:
 *   - subscribe: A method to subscribe to server updates.
 *   - addOne: A method to add a single unique server to the list.
 *   - updateOne: A method to update a single server in the list.
 *   - deleteOne: A method to delete a single server from the list.
 */
function createServers() {
	const { subscribe, update } = writable(server);

	return {
		subscribe,
        addOne: (server: ServerInfoType) => update(originalList => {
            if (originalList.find(s => s.name === server.name)) {
                return originalList;
            }
            originalList.push(server);
            return originalList;
        }),
		updateOne: (server: ServerInfoType) => update(originalList => {
            const origIndex = originalList.findIndex((s => s.name === server.name));
            originalList[origIndex] = server;
            return originalList;
        }),
		deleteOne: (name: string) => update(originalList => {
            const origIndex = originalList.findIndex((s => s.name === name));
            originalList.splice(origIndex, 1);
            return originalList;
        })
	};
}

export const servers = createServers();