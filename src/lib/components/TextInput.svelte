<script lang="ts">
    import type { textInputTypes } from "../types/inputType";

    export let name: string;
    export let label: string = name;
    export let inputType: textInputTypes = "text"
</script>

<div class="wrapper">
    <label for={name}>{label}</label>
    <input name={name} id={name} type={inputType} width="100%">
</div>

<style>
    .wrapper {
        border-radius: 8px;
        margin: 1rem 0;
        padding: 0 1rem;
        background-color: var(--color-text);
    }

    .wrapper label {
        text-transform:capitalize;
        text-align: center;
    }

    .wrapper * {
        color: var(--color-text-contrast);
    }

    .wrapper input {
        width: 100%;
        border-color: transparent;
        background-color: var(--color-text);
        margin-bottom: .5rem;
        font-size: large;
    }

    .wrapper input:focus {
        outline: 0;
    }

    .wrapper:has(input:focus){
        outline: auto;
    }
</style>
