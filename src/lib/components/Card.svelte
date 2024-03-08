<script lang="ts">
    export let title: string;
    export let icon: string | null = null;
</script>

<div class="card">
    <div class="card-header">
        {#if !!icon}
            <img src={icon} alt={`${title} icon`}>
        {/if}
        {title}
    </div>
    <p class="card-body">
        <slot />
    </p>
</div>

<style>
    .card {
        min-width: 300;
        height: fit-content;
        border-radius: 2rem;
        /* padding: .5rem .8rem; */
        background-color: var(--color-surface-3);
    }

    .card-header {
        border-radius: 2rem 2rem 0 0;
        padding: 0.5rem 1.2rem;
        background-color: var(--color-surface-1);
    }

    .card-body {
        padding: 0.5rem 1.2rem;
    }
</style>
