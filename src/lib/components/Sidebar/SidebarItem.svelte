<script lang="ts">
    export let text: string;
    export let href: string;

    function navigate() {
        if (href) window.location.href = href;
    }
</script>

<div class="flex w-full">
    <div class="btn ml-4 mr-1 py-1 px-4" on:click={() => navigate()} on:keypress={() => console.log()}>{text}</div>
</div>