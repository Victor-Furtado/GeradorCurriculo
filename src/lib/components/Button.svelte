<script lang="ts">
    export let icon: string | null = null;
    export let type: "button" | "submit" | "reset" | null | undefined =
        undefined;
    export let variant:
        | "highlight"
        | "primary"
        | "success"
        | "warning"
        | "danger" = "primary";
</script>

<button class="btn {variant}" {type} on:click>
    {#if !!icon}
        <img src={icon} alt={`Ícone de botão`} height="32" class="icon" />
    {/if}
    <slot />
    <div />
</button>

<style>
    .btn {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        cursor: pointer;
        will-change: border;
        transition: border 300ms;
    }

    .primary {
        background-color: var(--color-brand);
    }

    .success {
        background-color: var(--color-success);
    }

    .warning {
        background-color: var(--color-warning);
    }

    .danger {
        background-color: var(--color-danger);
    }

    .highlight {
        background-color: var(--color-highlight);
    }

    .btn:hover {
        border-color: var(--color-highlight);
    }

    .btn:focus,
    .btn:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
    }
</style>
