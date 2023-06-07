<script lang="ts">
	import { page } from '$app/stores';
	import ServerInfoPanel from '$lib/components/ServerInfoPanel.svelte';
    import { servers } from '$lib/stores/ServerStore';
	import type { ServerInfoType } from '$lib/types/ServerInfoType';

    let found = $servers.find(s => s.name === $page.params.slug)
    let server: ServerInfoType
    if (found != null && found != undefined) {
        server = found;
    }
    
</script>

<p>
    {#if server != null}
        <div class="m-4">
            <div class="card">
                <ServerInfoPanel server={server} />
            </div>
        </div>
    {/if}
</p>