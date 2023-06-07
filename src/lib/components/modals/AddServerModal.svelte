<script lang="ts">
	import { Icon } from "svelte-awesome";
    import close from 'svelte-awesome/icons/close';
    import { modalStore } from '@skeletonlabs/skeleton';
    import { servers } from "$lib/stores/ServerStore";
	import { ApiRoutes } from "$lib/constants/ApiRoutes";
	import { page } from "$app/stores";
	import toast from "svelte-french-toast";

    let name: string = "Your server's name";
    let ip: string = "localhost";
    let port: string = "7000";
    let description: string = "This server is for testing.";

    async function CreateServerRemote() {
        let url = new URL($page.url.protocol + $page.url.hostname + ":" + $page.url.port + ApiRoutes.API_SERVER_ADD);
		url.searchParams.append('name', name);
        url.searchParams.append('ip', ip);
        url.searchParams.append('port', port);
        url.searchParams.append('description', description);
		let response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			}
		})
        .then(() => toast.success("Server added."))
        .catch((error) => {
			console.error(error);
			console.log(response);
            toast.error("Failed to add server.");
		})
        return response;
    }

    async function CreateServer() {
        servers.addOne({
            "name": name,
            "ip": ip,
            "port": port,
            "description": description
        })
        await CreateServerRemote();
        modalStore.clear();
        modalStore.close();
    }

    function ClearForm() {
        name = "";
        ip = "";
        port = "";
        description = "";
    }
</script>

<div class="bg-surface-900 sm:max-w-xl">
    <div class="flex flex-row-reverse mx-4">
        <div class="btn" on:click={() => modalStore.close()} on:keydown={() => console.log()}>
            <Icon data={close}/>
        </div>
        <h2 class="h-12 pt-2 text-2xl mx-auto pl-6">Create Server</h2>
    </div>
    <div class="flex mx-4 mb-4">
        <div class="w-2/5">
            <div class="label mb-2">Name:</div>
            <div class="label mb-2">Ip:</div>
            <div class="label mb-2">Port:</div>
            <div class="label mb-2">Description:</div>
        </div>
        <div class="w-3/5">
            <input class="input mb-2 pl-1" bind:value={name}>
            <input class="input mb-2 pl-1" bind:value={ip}>
            <input class="input mb-2 pl-1" bind:value={port}>
            <input class="input mb-2 pl-1" bind:value={description}>
        </div>
    </div>
    <div class="flex">
        <div class="mx-auto">
            <div class="btn mb-2 bg-secondary-500" on:click={() => CreateServer()} on:keydown={() => console.log()}>Create</div>
            <div class="btn mb-2 variant-ghost-warning" on:click={() => ClearForm()} on:keydown={() => console.log()}>Clear</div>
        </div>
    </div>
    
</div>