<script lang="ts">
    import type { textInputTypes } from "../utils";

    export let name: string;
    export let label: string = name;
    export let inputType: textInputTypes | string = "text";
</script>

<div class="wrapper">
    <label for={name}>{label}</label>
    {#if inputType === "textarea"}
        <textarea {name} id={name} rows="10"></textarea>
    {:else}
        <input {name} id={name} type={inputType} width="100%" />
    {/if}
</div>

<style>
    .wrapper {
        border-radius: var(--border-radius);
        padding: 0 1rem;
        background-color: white;
    }

    .wrapper label {
        text-transform: capitalize;
        text-align: center;
    }

    .wrapper * {
        color: black;
    }

    .wrapper input {
        width: 100%;
        border-color: transparent;
        background-color: white;
        margin-bottom: 0.5rem;
        font-size: large;
    }

    .wrapper textarea {
        resize: none;
        width: 100%;
        border-color: transparent;
        background-color: white;
        margin-bottom: 0.5rem;
        font-size: large;
    }

    .wrapper textarea:focus,
    .wrapper input:focus {
        outline: 0;
    }

    .wrapper:has(textarea:focus),
    .wrapper:has(input:focus) {
        outline: auto;
    }
</style>
