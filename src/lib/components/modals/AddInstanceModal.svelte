<script lang="ts">
	import { Icon } from "svelte-awesome";
    import down from "svelte-awesome/icons/chevronDown"
    import close from 'svelte-awesome/icons/close';
    import { ListBox, ListBoxItem, modalStore, popup, type PopupSettings } from '@skeletonlabs/skeleton';
    import { instances } from "$lib/stores/InstanceStore";
	import { servers } from "$lib/stores/ServerStore";
	import { tabSet } from "$lib/stores/TabSet";
	import type { ServerInfoType } from "$lib/types/ServerInfoType";
	import type { InstanceInfoType } from "$lib/types/InstanceInfoType";
	import type { HttpError } from "@sveltejs/kit";
	import toast, { Toaster } from "svelte-french-toast";
	import { ApiRoutes } from "$lib/constants/ApiRoutes";
	import { ServerTypeEnum } from "$lib/types/ServerTypeEnum";
	import { ServerTypeConverterStr } from "$lib/utils/ServerTypeConverter";

    export const server: ServerInfoType = $servers[$tabSet];

    const popupCombobox: PopupSettings = {
        event: 'focus-click',
        target: 'popupCombobox',
        placement: 'bottom',
        closeQuery: '.listbox-item'
    };

    let name: string = "";
    let type: string = "";
    let port: number = 7000;
    let metricsPort: number = 1234;
    let commandsPort: number = 8000;

    async function CreateInstance(ip: string, port: number, instance: InstanceInfoType) {
        const url = new URL("https://" + ip + ":" + port + ApiRoutes.SERVER_CREATE);
        url.searchParams.append("name", instance.name);
        url.searchParams.append("type", instance.type);
        url.searchParams.append("port", instance.port.toString());
        url.searchParams.append("metricsPort", instance.metricsPort.toString());
        url.searchParams.append("commandsPort", instance.commandsPort.toString());

        let response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(instance)
        })
        .then(() => toast.success("Server instance added."))
        .catch((err: HttpError) => { 
            if (err.toString() === "TypeError: Failed to fetch") {
                toast.error("Failed to reach server.");
            } else {
                toast.error("Failed to create server instance: " + err.toString());
            }
            return null;
        });
        return response;
    }

    function Create() {
        const instance: InstanceInfoType = {
            name: name,
            type: ServerTypeConverterStr(type).toString(),
            port: port,
            metricsPort: metricsPort,
            commandsPort: commandsPort,
            processId: 0,
            exitCode: "0",
            isRunning: "false",
        };
        instances.addOne(instance)
        CreateInstance(server.ip, parseInt(server.port), instance);
        modalStore.clear();
        modalStore.close();
    }


	function ClearForm() {
        name = "";
        type = "";
        port = 7000;
        metricsPort = 1234;
        commandsPort = 8000;
	}
</script>

<div class="bg-surface-900 sm:max-w-xl">
    <div class="flex flex-row-reverse mx-4">
        <div class="btn" on:click={() => modalStore.close()} on:keydown={() => console.log()}>
            <Icon data={close}/>
        </div>
        <h2 class="h-12 pt-2 text-2xl mx-auto pl-6">Create Instance</h2>
    </div>
    <div class="flex mx-4 mb-4">
        <div class="w-2/5">
            <div class="label mb-2">Name:</div>
            <div class="label mb-2">Type:</div>
            <div class="label mb-2">Port:</div>
            <div class="label mb-2">Metrics Port:</div>
            <div class="label mb-2">Commands Port:</div>
        </div>
        <div class="w-3/5">
            <input class="input mb-2 pl-1" bind:value={name}>
            <!--<input class="input mb-2" bind:value={type}>-->
            
            <button class="btn bg-surface-700 pl-1 h-6 w-full mb-2 justify-between" use:popup={popupCombobox}>
                <span class="capitalize">{type ?? 'Select'}</span>
                <span>
                    <Icon data={down} />
                </span>
            </button>
					
            <input class="input mb-2 pl-1" bind:value={port}>
            <input class="input mb-2 pl-1" bind:value={metricsPort}>
            <input class="input mb-2 pl-1" bind:value={commandsPort}>
        </div>
    </div>
    <div class="flex">
        <div class="mx-auto">
            <div class="btn mb-2 bg-secondary-500" on:click={() => Create()} on:keydown={() => console.log()}>Create</div>
            <div class="btn mb-2 variant-ghost-warning" on:click={() => ClearForm()} on:keydown={() => console.log()}>Clear</div>
        </div>
    </div>
</div>
<!-- Drop down list for server type -->
<div class="card w-48 shadow-xl py-2" data-popup="popupCombobox">
	<ListBox rounded="rounded-none">
		<ListBoxItem bind:group={type} name="medium" value={ServerTypeEnum.Data}>Data</ListBoxItem>
		<ListBoxItem bind:group={type} name="medium" value={ServerTypeEnum.User}>User</ListBoxItem>
		<ListBoxItem bind:group={type} name="medium" value={ServerTypeEnum.Community}>Community</ListBoxItem>
	</ListBox>
	<div class="arrow bg-surface-100-800-token" />
</div>
<Toaster />