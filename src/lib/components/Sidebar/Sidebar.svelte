<script lang="ts">
    import { servers } from "../../stores/ServerStore";
	import SidebarHeader from "./SidebarHeader.svelte";
	import SidebarItem from "./SidebarItem.svelte";
</script>

<div>
    <SidebarHeader text="Servers" href="/"/>
    {#each $servers as server}
        <SidebarItem text={server.name} href={`/${server.name}`}/>
    {/each}
</div>