import { GetServers } from '$lib/server/db';
import type { LayoutServerLoad } from './$types';

export const load = (async () => {
    return { ...GetServers() };
}) satisfies LayoutServerLoad;