<script lang="ts">
    import type { IInput } from "@lib/utils";
    import Button from "./Button.svelte";
    import TextInput from "./TextInput.svelte";

    export let name: string;
    export let label: string = name;
    export let placeholder: string = name;
    export let inputType: "textArray" | "multiTextArray" | string = "textArray";
    export let icon: string | null = null;
    export let inputs: IInput[] | null = null;

    let inputArr: string[] = [];
    const addInput = () => (inputArr = [...inputArr, ""]);
    const delInput = (i: number) => () => {
        inputArr.splice(i, 1);
        inputArr = inputArr;
    };
</script>

<div class="wrapper">
    <Button variant="success" on:click={addInput} {icon}>
        <span class="btn">Adicionar {label}</span>
    </Button>
    {#each inputArr as input, index}
        <div class="input-wrapper">
            <button
                type="button"
                on:click={delInput(index)}
                class="btn-unstyled">❌</button
            >
            {#if inputType.includes("multi")}
                <fieldset class="multi-wrapper">
                    <legend>
                        <input
                            bind:value={input}
                            type="text"
                            class="label full"
                            placeholder={label}
                        />
                    </legend>
                    {#if inputs}
                        {#each inputs as input}
                            <TextInput
                                name={input + "." + input.name}
                                label={input.label || input.name}
                                inputType={input.type}
                            />
                        {/each}
                    {/if}
                </fieldset>
            {:else}
                <fieldset class="input">
                    <legend>
                        <input
                            bind:value={input}
                            type="text"
                            class="label"
                            placeholder={label}
                        />
                    </legend>
                    <input
                        name={`${name}.${input}`}
                        type="text"
                        class="innerInput"
                        {placeholder}
                    />
                </fieldset>
            {/if}
        </div>
    {/each}
</div>

<!-- <div class="wrapper">
    <label for={name}>{label}</label>
    <input name={name} id={name} type={inputType} width="100%">
</div> -->

<style>
    .wrapper {
        display: flex;
        gap: 1rem;
        flex-direction: column;
    }

    .input-wrapper {
        display: flex;
        gap: 1rem;
        align-items: center;
    }

    .multi-wrapper {
        flex: 3;
        padding-top: 0.5rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        border-radius: var(--border-radius);
    }

    .input {
        flex: 3;
        border-radius: var(--border-radius);
        background-color: white;
    }

    .innerInput {
        border-radius: var(--border-radius);
        background-color: white;
        color: black;
        width: 95%;
        font-size: large;
        padding-left: 1rem;
        margin-top: -0.8rem;
        padding-top: 1.2rem;
        padding-bottom: 0.5rem;
        border: 0;
        z-index: 0;
    }

    /* .full {
        width: 100%;
    } */

    .label {
        position: relative;
        font-size: large;
        color: black;
        border-radius: var(--border-radius);
        margin-left: 0.5rem;
        padding: 0 0.3rem;
        width: 8rem;
        background-color: white;
        z-index: 9999;
    }

    .btn {
        text-transform: capitalize;
    }
</style>
