<script lang="ts">
    import Header from "@lib/partials/Header.svelte";
    import Footer from "@lib/partials/Footer.svelte";

    import type { ISection } from "@lib/utils";
    import Button from "@lib/components/Button.svelte";
    import Card from "@lib/components/Card.svelte";
    import TextInput from "@lib/components/TextInput.svelte";
    import ArrInput from "@lib/components/ArrInput.svelte";

    import defaultForm from "@lib/forms/default.json";
    import { download } from "@lib/utils/SaveFileFn";

    const form: ISection[] = defaultForm as unknown as ISection[];
    const imgs: Record<string, { default: any }> = import.meta.glob(
        "@assets/*.svg",
        {
            eager: true,
        },
    );

    const onSubmit = (
        e: SubmitEvent & { currentTarget: EventTarget & HTMLFormElement },
    ) => {
        const formData = new FormData(e.currentTarget);

        const data: Record<string, any> = {};
        for (let field of formData) {
            const [key, value] = field;
            data[key] = value;
        }

        // @ts-ignore
        switch (e.submitter?.['name']) {
            case 'export':
                download(data);
                break;
            default:
                break;
        }
        console.log(data);
    }

    const reset = () => window.location.reload();
</script>

<Header />
<form class="form" on:submit|preventDefault={onSubmit}>
    {#each form as { icon, inputs, title }}
        <Card {title} icon={imgs[`/src/assets/${icon}`].default}>
            {#each inputs as input}
                {#if input.type?.includes("Array")}
                    <ArrInput
                        inputType={input.type}
                        inputs={input.conf?.inputs}
                        name={input.name}
                        label={input.label}
                        placeholder={input.conf?.placeholder}
                        icon={imgs[`/src/assets/${input.conf?.icon}`].default}
                    />
                {:else}
                    <TextInput
                        name={input.name}
                        label={input.label}
                        inputType={input.type}
                    />
                {/if}
            {/each}
        </Card>
    {/each}
    <Card
        title="Salvar Currículo"
        icon={imgs["/src/assets/savedoc.icon.svg"].default}
    >
        <div class="button-wrapper">
            <Button
                disabled={true}
                type="submit"
                icon={imgs["/src/assets/pdfdoc.icon.svg"].default}
                variant="highlight">SALVAR PDF</Button
            >
            <Button
                disabled={true}
                icon={imgs["/src/assets/pendoc.icon.svg"].default}
                variant="primary">IMPORTAR DADOS</Button
            >
            <Button
                name="export"
                type="submit"
                icon={imgs["/src/assets/exportdoc.icon.svg"].default}
                variant="warning">EXPORTAR DADOS</Button
            >
            <Button
                on:click={reset}
                icon={imgs["/src/assets/closedoc.icon.svg"].default}
                variant="danger">LIMPAR CURRÍCULO</Button
            >
        </div>
    </Card>
</form>
<Footer />

<style>
    .form {
        overflow-y: auto;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        height: 100%;
        padding: 1rem 1.2rem;
    }

    .button-wrapper {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    @media (max-width: 500px) {
        .form {
            flex-wrap: nowrap;
            flex-direction: column;
        }
    }
</style>
