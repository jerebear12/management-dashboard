<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
    import type { TableSource } from '@skeletonlabs/skeleton';
	import { modalStore } from '@skeletonlabs/skeleton';
	import type { InstanceInfoType } from '$lib/types/InstanceInfoType';
	import type { ServerInfoType } from '$lib/types/ServerInfoType';
    import { Table, tableMapperValues } from '@skeletonlabs/skeleton';
	import type { ModalSettings } from '@skeletonlabs/skeleton';
	import { ModalComponentNames } from '$lib/constants/ComponentRegistry';
	import { ApiRoutes } from '$lib/constants/ApiRoutes';
	import toast, { Toaster } from 'svelte-french-toast';
	import type { HttpError } from '@sveltejs/kit';
	import { ServerTypeConverterNum } from '$lib/utils/ServerTypeConverter';
	import { Icon } from 'svelte-awesome';
    import refresh from "svelte-awesome/icons/refresh"
	import { instances } from '$lib/stores/InstanceStore';

    const TableHeaders: string[] = ['Name', 'Type', 'Running', 'Exit Code', 'Metrics Port', 'Commands Port', 'Process ID'];
    const TableValues: string[] = ['name', 'type', 'isRunning', 'exitCode', 'metricsPort', 'commandsPort', 'processId'];

    export let server: ServerInfoType;

    let serverIsReached: boolean = false;

    let instancesList: InstanceInfoType[] = [];

    $: loadingClasses = instancesList === null ? "" : "animate-pulse";  // animates the div on loading state

    let tableSimple: TableSource = {
        head: TableHeaders,
        body: tableMapperValues(instancesList, TableValues),
    };

    async function GetServerInstanceInfo(): Promise<InstanceInfoType[]> {
        const url = new URL("https://" + server.ip + ":" + server.port + ApiRoutes.SERVERS_INFO);
        return await fetch(url)
                .then((res) => res.json())
                .catch((err: HttpError) => { 
                    if (err.toString() === "TypeError: Failed to fetch") {
                        toast.error("Failed to reach server.");
                    } else {
                        toast.error("Failed to fetch server info: " + err.toString());
                    }
                    return null;
                });
    }

    async function InitDataTable() {
        instancesList = [];
        tableSimple = {
            head: TableHeaders,
            body: tableMapperValues(instancesList, TableValues),
        }
        instancesList = await GetServerInstanceInfo();
        // This makes sure the table will display info.
        // If these fields are in number type,
        // they simply will not be displayed
        // in the table. Same with the boolean.
        if (instancesList !== null && instancesList.length > 0) {
            instancesList.forEach((d) => {  
                d.isRunning = d.isRunning.toString();
                d.exitCode = d.exitCode.toString();
                d.type = ServerTypeConverterNum(parseInt(d.type));
                instances.addOne(d);
            })
            tableSimple = {
                head: TableHeaders,
                body: tableMapperValues(instancesList, TableValues),
            }
            serverIsReached = true;
        } else {
            loadingClasses = ""; // stop loading animation
            serverIsReached = false;
        }
    }

    // Load new instance data on server change
    $: if (server) {
        if (browser) {
            InitDataTable();
        }
    }

    onMount(() => {
        InitDataTable()
    });

	const AddModal: ModalSettings = {
		type: 'component',
		component: ModalComponentNames.createInstanceModal,
	};

    const StartModal: ModalSettings = {
		type: 'component',
		component: ModalComponentNames.startInstanceModal,
	};

    const StopModal: ModalSettings = {
		type: 'component',
		component: ModalComponentNames.stopInstanceModal,
	};

    const DeleteModal: ModalSettings = {
		type: 'component',
		component: ModalComponentNames.deleteInstanceModal,
	};

    function Create() {
        if (serverIsReached) {
            modalStore.trigger(AddModal);
        } else {
            toast.error("Cannot perform actions on a server that cannot be reached.");
        }
    }

    function Start() {
        if (serverIsReached) {
            modalStore.trigger(StartModal);
        } else {
            toast.error("Cannot perform actions on a server that cannot be reached.");
        }
    }

    function Stop() {
        if (serverIsReached) {
            modalStore.trigger(StopModal);
        } else {
            toast.error("Cannot perform actions on a server that cannot be reached.");
        }
    }

    function Delete() {
        if (serverIsReached) {
            modalStore.trigger(DeleteModal);
        } else {
            toast.error("Cannot perform actions on a server that cannot be reached.");
        }
    }

</script>

<div class="p-2">
    <div class="font-bold ml-2">{server.name}</div>
    <div class="ml-2">IP: {server.ip}</div>
    <div class="ml-2">Port: {server.port}</div>
    <div class="ml-2">Description: {server.description}</div>
    <div class="flex relative">
        <h2 class="m-2">Instances</h2>
        <div class="btn absolute mr-2 right-0 border" on:click={() => InitDataTable()} on:keydown={() => console.log()}>
            <Icon data={refresh} />
        </div>
    </div>
    {#if instancesList && instancesList.length > 0}
        <div class="mx-2">
            <Table source={tableSimple} />
        </div>
    {:else}
        <div class="mx-2">
                <div class="placeholder h-20 {loadingClasses}"></div>
                <div>
                    <div class="flex placeholder h-14 w-full {loadingClasses}">
                        <div class="placeholder w-1/7 h-24 {loadingClasses}"></div>
                        <div class="placeholder w-1/7 {loadingClasses}"></div>
                        <div class="placeholder w-1/7 {loadingClasses}"></div>
                        <div class="placeholder w-1/7 {loadingClasses}"></div>
                        <div class="placeholder w-1/7 {loadingClasses}"></div>
                        <div class="placeholder w-1/7 {loadingClasses}"></div>
                        <div class="placeholder w-1/7 {loadingClasses}"></div>
                    </div>
                </div>
        </div>
    {/if}
    
</div>
<div class="flex">
    <div class="mx-auto w-40 flex flex-wrap mx-0 w-full">
        <div class="btn w-36 mb-2 mx-auto bg-secondary-500" on:click={() => Create()} on:keydown={() => console.log()}>
            Create Instance
        </div>
        <div class="btn w-36 mb-2 mx-auto bg-success-700" on:click={() => Start()} on:keydown={() => console.log()}>
            Start Instance
        </div>
        <div class="btn w-36 mb-2 mx-auto bg-warning-600 text-black" on:click={() => Stop()} on:keydown={() => console.log()}>
            Stop Instance
        </div>
        <div class="btn w-36 mb-2 mx-auto bg-error-500" on:click={() => Delete()} on:keydown={() => console.log()}>
            Delete Instance
        </div>
    </div>
</div>
<Toaster />
