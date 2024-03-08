<script lang="ts">
    import Header from "@lib/partials/Header.svelte";
    import Footer from "@lib/partials/Footer.svelte";

    import Button from "@lib/components/Button.svelte";
    import Card from "@lib/components/Card.svelte";
    import TextInput from "@lib/components/TextInput.svelte";

    import form from "@lib/forms/default.json";

    const imgs: Record<string, { default: any }> = import.meta.glob(
        "@assets/*.svg",
        {
            eager: true,
        },
    );

    function onSubmit(e: SubmitEvent & { currentTarget: EventTarget & HTMLFormElement; }) {
        const formData = new FormData(e.currentTarget);

        const data: Record<string, any> = {};
        for (let field of formData) {
            const [key, value] = field;
            data[key] = value;
        }
        console.log(data);
    }
</script>

<Header />
<form class="form" on:submit|preventDefault={onSubmit}>
    {#each form as { icon, inputs, title }}
        <Card {title} icon={imgs[`/src/assets/${icon}`].default}>
            {#each inputs as input}
                <TextInput
                    name={input.name}
                    label={input.label}
                    inputType={input.type}
                />
            {/each}
        </Card>
    {/each}
    <Card
        title="Salvar Currículo"
        icon={imgs["/src/assets/savedoc.icon.svg"].default}
    >
        <div class="button-wrapper">
            <Button
                type="submit"
                icon={imgs["/src/assets/pdfdoc.icon.svg"].default}
                variant="success">SALVAR PDF</Button
            >
            <Button
                icon={imgs["/src/assets/closedoc.icon.svg"].default}
                variant="primary">IMPORTAR DADOS</Button
            >
            <Button
                icon={imgs["/src/assets/exportdoc.icon.svg"].default}
                variant="warning">EXPORTAR DADOS</Button
            >
            <Button
                icon={imgs["/src/assets/pendoc.icon.svg"].default}
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
