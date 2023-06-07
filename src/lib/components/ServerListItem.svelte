<script lang="ts">
    import Icon from 'svelte-awesome';
    import server from 'svelte-awesome/icons/server';

    export let srvr: any;
</script>

<div class="flex mb-2 pb-2">
    <div class="ml-4">
        <Icon data="{server}"/>
    </div>
    <div class="ml-4">
        <p>{srvr.name}</p>
    </div>
</div>