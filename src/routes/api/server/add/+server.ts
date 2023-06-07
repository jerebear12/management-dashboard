import { AddServer } from '$lib/server/db';
import type { ServerInfoType } from '$lib/types/ServerInfoType';
import type { RequestEvent, RequestHandler } from '../../$types';

/**
 * Handles a DELETE request for deleting a server with the specified name.
 *
 * @param {RequestEvent} event - the event object containing the request information
 * @return {Promise<Response>} a Promise that resolves to a Response object with the appropriate status code and message to indicate whether the server was successfully deleted or not
 */
export const POST: RequestHandler = (event: RequestEvent): Response => {
    let body: string;
    let status: number;
  
    const name = event.url.searchParams.get('name');
    const ip = event.url.searchParams.get('ip');
    const port = event.url.searchParams.get('port');
    const description = event.url.searchParams.get('description');

    const headers = new Headers({
        'content-type': 'application/json',
    });

    if (name == null || ip == null || port == null || description == null) { 
        body = "One of the required parameters specified is null.";
        status = 400;
    } else {
        const server: ServerInfoType = { name, ip, port, description };
        body = "Successfully added server.";
        status = 200;
        try {
            AddServer(server);
        } catch {
            body = "Failed to add server.";
            status = 500;
        }
    }
    return new Response(body, {headers, status});
};