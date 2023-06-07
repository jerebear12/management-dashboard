<script lang="ts">
    export let text: string;
    export let href: string;

    function navigate() {
        if (href) window.location.href = href;
    }
</script>

<div class="flex w-full">
    <div class="btn font-bold text-lg mr-auto py-2" on:click={() => navigate()} on:keypress={() => console.log()}>{text}</div>
</div>