<script lang="ts">
    import Header from "./lib/partials/Header.svelte";
    import Footer from "./lib/partials/Footer.svelte";

    import Button from "./lib/components/Button.svelte";
    import Card from "./lib/components/Card.svelte";
    import TextInput from "./lib/components/TextInput.svelte";

    import UserDocIcon from "./assets/userdoc.icon.svg";
    import LinkDocIcon from "./assets/linkdoc.icon.svg";
    import UpDocIcon from "./assets/updoc.icon.svg";
    import TargetDocIcon from "./assets/targetdoc.icon.svg";
    import RibbonDocIcon from "./assets/ribbondoc.icon.svg";
    import WorkDocIcon from "./assets/workdoc.icon.svg";
    import SaveDocIcon from "./assets/savedoc.icon.svg";
</script>

<Header />
<form class="form">
    <Card title="Informações Básicas" icon={UserDocIcon}>
        <TextInput name="nome" />
        <TextInput name="email" inputType="email" />
        <TextInput name="telefone" inputType="tel" />
    </Card>

    <Card title="Links de Portifólio" icon={LinkDocIcon}></Card>
    <Card title="Competências" icon={UpDocIcon}></Card>
    <Card title="Objetivo" icon={TargetDocIcon}></Card>
    <Card title="Formação" icon={RibbonDocIcon}></Card>
    <Card title="Experiências" icon={WorkDocIcon}></Card>
    <Card title="Salvar Currículo" icon={SaveDocIcon}>
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
