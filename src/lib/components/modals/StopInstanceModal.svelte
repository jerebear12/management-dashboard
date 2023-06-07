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

    let server = $servers[$tabSet];

    let name: string = "";

    async function StopInstance(ip: string, port: number, name: string) {
        const url = new URL("https://" + ip + ":" + port + ApiRoutes.SERVER_STOP);
        url.searchParams.append("name", name);
        let response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(() => toast.success("Server instance stopped."))
        .catch((err: HttpError) => { 
            if (err.toString() === "TypeError: Failed to fetch") {
                toast.error("Failed to reach server.");
            } else {
                toast.error("Failed to stop server instance: " + err.toString());
            }
            return null;
        })
        return response;
    }

    function Stop() {
        instances.deleteOne(name);
        StopInstance(server.ip, parseInt(server.port), name);
        modalStore.clear();
        modalStore.close();
    }
</script>

<div class="bg-surface-900 sm:max-w-xl">
    <div class="flex flex-row-reverse mx-4">
        <div class="btn" on:click={() => modalStore.close()} on:keydown={() => console.log()}>
            <Icon data={close}/>
        </div>
        <h2 class="h-12 pt-2 text-2xl mx-auto pl-6">Stop Instance</h2>
    </div>
    <div class="flex mx-4 my-2">
        <RadioGroup display="flex-col mx-auto">
            {#each $instances as instance}
                {#if instance.isRunning === "true"}
                    <RadioItem bind:group={name} value={instance.name} name="justify">{instance.name}</RadioItem>
                {/if}
            {/each}
        </RadioGroup>
    </div>
    <div class="flex">
        <div class="btn mx-auto mb-2 bg-warning-600 text-black" on:click={() => Stop()} on:keydown={() => console.log()}>Stop</div>
    </div>
</div>
<Toaster />