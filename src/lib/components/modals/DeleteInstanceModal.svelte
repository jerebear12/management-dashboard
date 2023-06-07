<script lang="ts">
	import { Icon } from "svelte-awesome";
    import close from 'svelte-awesome/icons/close';
    import { RadioGroup, RadioItem, modalStore } from '@skeletonlabs/skeleton';
    import { servers } from "$lib/stores/ServerStore";
	import { tabSet } from "$lib/stores/TabSet";
	import { instances } from "$lib/stores/InstanceStore";
	import { ApiRoutes } from "$lib/constants/ApiRoutes";
	import type { HttpError } from "@sveltejs/kit";
	import toast, { Toaster } from "svelte-french-toast";
	import { onMount } from "svelte";

    let server = $servers[$tabSet];

    let name: string = "";

    async function DeleteInstance(ip: string, port: number, name: string) {
        const url = new URL("https://" + ip + ":" + port + ApiRoutes.SERVER_DELETE);
        url.searchParams.append("name", name);
        let response = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(() => toast.success("Server instance deleted."))
        .catch((err: HttpError) => { 
            if (err.toString() === "TypeError: Failed to fetch") {
                toast.error("Failed to reach server.");
            } else {
                toast.error("Failed to delete server instance: " + err.toString());
            }
            return null;
        })
        return response;
    }

    function Delete() {
        if (name === "") {
            toast.error("Please select an instance to delete.");
            return;
        }
        instances.deleteOne(name);
        DeleteInstance(server.ip, parseInt(server.port), name);
        modalStore.clear();
        modalStore.close();
    }
</script>

<div class="bg-surface-900 sm:max-w-xl">
    <div class="flex flex-row-reverse mx-4">
        <div class="btn" on:click={() => modalStore.close()} on:keydown={() => console.log()}>
            <Icon data={close}/>
        </div>
        <h2 class="h-12 pt-2 text-2xl mx-auto pl-6">Delete Instance</h2>
    </div>
    <div class="flex mx-4 mt-2 mb-4">
        <RadioGroup display="flex-col mx-auto">
            {#each $instances as instance}
                <RadioItem bind:group={name} value={instance.name} name="justify">{instance.name}</RadioItem>
            {/each}
        </RadioGroup>
    </div>
    
    <div class="flex">
        <div class="btn mx-auto mb-4 bg-error-500" on:click={() => Delete()} on:keydown={() => console.log()}>Delete</div>
    </div>
</div>
<Toaster />