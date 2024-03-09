<script>
    export let dialog
</script>

<dialog bind:this={dialog} on:close>
        <slot/>
</dialog>

<style>
    dialog {
        margin-top: auto;
        margin-right: auto;
        margin-bottom: auto;
        margin-left: auto;

        border-radius: var(--border-radius);
        background-color: var(--color-surface-3);
    }
</style>
