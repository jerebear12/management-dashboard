<script lang="ts">
	import ServerInfoPanel from "$lib/components/ServerInfoPanel.svelte";
	import { modalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings } from '@skeletonlabs/skeleton';
	import { TabGroup, Tab } from '@skeletonlabs/skeleton';
	import { Icon } from "svelte-awesome";
	import plus from 'svelte-awesome/icons/plus';
	import minus from 'svelte-awesome/icons/minus';
	import { servers } from "$lib/stores/ServerStore";
	import { tabSet } from "$lib/stores/TabSet";
	import { Toaster } from "svelte-french-toast";
	import { ModalComponentNames } from "$lib/constants/ComponentRegistry";
	import { ApiRoutes } from "$lib/constants/ApiRoutes";
	import { page } from "$app/stores";
	

	const modal: ModalSettings = {
		type: 'component',
		component: ModalComponentNames.addServerModal,
	};

	function AddNewServer() {
		modalStore.trigger(modal);
	}

	const deleteModal: ModalSettings = {
		type: 'confirm',
		title: 'Please Confirm',
		body: 'Are you sure you wish to delete the selected server?',
		// TRUE if confirm pressed, FALSE if cancel pressed
		response: (confirmed: boolean) => { 
			if (confirmed) {
				RemoveServer($servers[$tabSet].name);
			}
		},
	};

	function RemoveServer(name: string) {
		$tabSet = $tabSet - 1;
		servers.deleteOne(name);

		let url = new URL($page.url.protocol + $page.url.hostname + ":" + $page.url.port + ApiRoutes.API_SERVER_DELETE);
		url.searchParams.append('name', name);
		let response = fetch(url, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			}
		})
		.catch((error) => {
			console.error(error);
			console.log(response);
		})
	}
	
</script>

<div class="m-4 bg-surface-900">
	<div class="mx-auto container relative">
		<h1 class="p-2">Servers Dashboard</h1>
		<TabGroup>
			{#each $servers as s}
				<Tab name="{s.name}" bind:group={$tabSet} value={$servers.indexOf(s)}>{s.name}</Tab>
			{/each}
			<div class="flex absolute right-0">
				<div class="btn bg-secondary-500 flex-1" on:click={() => AddNewServer()} on:keydown={() => console.log()}>
					<div>
						<Icon data={plus}/>
					</div>
				</div>
				<div class="btn bg-error-500 flex-1" on:click={() => modalStore.trigger(deleteModal)} on:keydown={() => console.log()}>
					<div>
						<Icon data={minus}/>
					</div>
				</div>
			</div>
			<svelte:fragment slot="panel">
				{#if $servers[$tabSet] != undefined}
					<ServerInfoPanel server={$servers[$tabSet]}/>
				{:else}
					<div class="p-4">
						<div class="mt-4 text-center">
							Hi there! Add a server to see it's current instance data. <br>
							You can also add/start/stop server instances on each server <br>
							via the dashboard. 
						</div>
					</div>
				{/if}
			</svelte:fragment>
		</TabGroup>
	</div>
</div>
<Toaster />

