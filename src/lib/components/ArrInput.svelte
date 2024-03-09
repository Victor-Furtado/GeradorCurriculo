<script lang="ts">
    import Button from "./Button.svelte";

    export let name: string;
    export let label: string = name;
    export let placeholder: string = name;
    export let inputType: "textArray" | string = "textArray";
    export let icon: string | null = null;

    let inputArr: string[] = [];
    const addInput = () => (inputArr = [...inputArr, ""]);
    const delInput = (i: number) => () => {
        inputArr.splice(i, 1);
        inputArr = inputArr;
    };
</script>

<div class="wrapper">
    <Button type="button" on:click={addInput} {icon}>
        <span class="btn">Adicionar {label}</span>
    </Button>
    {#each inputArr as input, index}
        <div class="input-wrapper">
            <button
                type="button"
                on:click={delInput(index)}
                class="btn-unstyled">❌</button
            >
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

    .input {
        flex: 3;
        border-radius: 8px;
        background-color: white;
    }

    .innerInput {
        border-radius: 8px;
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

    .label {
        position: relative;
        font-size: large;
        color: black;
        border-radius: 8px;
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
