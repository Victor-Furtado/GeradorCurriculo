<script lang="ts">
    export let title: string;
    export let icon: string | null = null;
</script>

<div class="card">
    <div class="card-header">
        {#if !!icon}
            <img src={icon} alt={`Ícone de ${title}`} height="20" />
        {/if}
        <p>{title}</p>
    </div>
    <p class="card-body">
        <slot />
    </p>
</div>

<style>
    .card {
        border-radius: 8px;
        /* padding: .5rem .8rem; */
        background-color: var(--color-surface-3);

        will-change: filter;
        transition: filter 300ms;
    }

    .card:has(*:focus),
    .card:has(*:focus-visible),
    .card:hover {
        filter: drop-shadow(0 0 1em var(--color-highlight));
    }

    .card-header {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        border-radius: 8px 8px 0 0;
        padding: 0.5rem 1.2rem;
        background-color: var(--color-surface-1);
    }

    .card-body {
        padding: 0.5rem 1.2rem;
    }
</style>
