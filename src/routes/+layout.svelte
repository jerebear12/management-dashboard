<script lang='ts'>	
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-rocket.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, AppBar, Modal } from '@skeletonlabs/skeleton';
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import Sidebar from '$lib/components/Sidebar/Sidebar.svelte';
	import type { PageData } from './$types';
	import { servers } from '$lib/stores/ServerStore';
	import { ModalComponentRegistry } from '$lib/constants/ComponentRegistry';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	export let data: PageData;
	for (let item in data) {
		servers.addOne(data[item]);
	}
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar background="bg-surface-600">
			<svelte:fragment slot="lead">
				<strong class="text-xl">Server Management Dashboard</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<div class="bg-surface-800 h-full">
			<Sidebar />
		</div>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
<Modal components={ModalComponentRegistry} />
