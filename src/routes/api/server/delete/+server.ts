import { DeleteServer } from '$lib/server/db';
import type { RequestEvent, RequestHandler } from '../../$types';

/**
 * Handles a DELETE request for deleting a server with the specified name.
 *
 * @param {RequestEvent} event - the event object containing the request information
 * @return {Promise<Response>} a Promise that resolves to a Response object with the appropriate status code and message to indicate whether the server was successfully deleted or not
 */
export const DELETE: RequestHandler = (event: RequestEvent): Response => {
    const name = event.url.searchParams.get('name');
    let body: string;
    let status: number;
  
    if (name != null) {
      DeleteServer(name);
      body = "Successfully deleted server.";
      status = 200;
    } else {
      body = "No name specified";
      status = 400;
    }
  
    const headers = new Headers({
      'content-type': 'application/json',
    });
  
    return new Response(body, {headers, status});
};