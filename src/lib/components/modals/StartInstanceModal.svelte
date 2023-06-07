<script lang="ts">
	import { Icon } from "svelte-awesome";
    import close from 'svelte-awesome/icons/close';
    import { RadioGroup, RadioItem, modalStore } from '@skeletonlabs/skeleton';
    import { servers } from "$lib/stores/ServerStore";
	import { tabSet } from "$lib/stores/TabSet";
	import type { HttpError } from "@sveltejs/kit";
	import { ApiRoutes } from "$lib/constants/ApiRoutes";
	import toast, { Toaster } from "svelte-french-toast";
    import { instances } from "$lib/stores/InstanceStore";

    let server = $servers[$tabSet];

    let name: string = "";

    async function StartInstance(ip: string, port: string, name: string) {
        const url = new URL("https://" + ip + ":" + port + ApiRoutes.SERVER_START);
        url.searchParams.append("name", name);
        let response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(() => toast.success("Server instance started."))
        .catch((err: HttpError) => { 
            console.log("caught error: ", err);
            if (err.toString() === "TypeError: Failed to fetch") {
                toast.error("Failed to reach server.");
            } else {
                toast.error("Failed to start server instance: " + err.toString());
            }
            return null;
        })
        return response;
    }

    function Start() {
        StartInstance(server.ip, server.port, name);
        modalStore.clear();
        modalStore.close();
    }
</script>

<div class="bg-surface-900 sm:max-w-xl">
    <div class="flex flex-row-reverse mx-4">
        <div class="btn" on:click={() => modalStore.close()} on:keydown={() => console.log()}>
            <Icon data={close}/>
        </div>
        <h2 class="h-12 pt-2 text-2xl mx-auto pl-6">Start Instance</h2>
    </div>
    <div class="flex mx-4 my-2">
        <RadioGroup display="flex-col mx-auto">
            {#each $instances as instance}
                {#if instance.isRunning === "false"}
                    <RadioItem bind:group={name} value={instance.name} name="justify">{instance.name}</RadioItem>
                {/if}
            {/each}
        </RadioGroup>
    </div>
    <div class="flex">
        <div class="btn mx-auto mb-2 bg-success-700" on:click={() => Start()} on:keydown={() => console.log()}>Start</div>
    </div>
</div>
<Toaster />