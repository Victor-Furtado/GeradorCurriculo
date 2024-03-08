<script lang="ts">
    import Header from "./lib/partials/Header.svelte";
    import Footer from "./lib/partials/Footer.svelte";

    import UserDocIcon from "./assets/userdoc.icon.svg";
    import LinkDocIcon from "./assets/linkdoc.icon.svg";

    import Card from "./lib/components/Card.svelte";
    import TextInput from "./lib/components/TextInput.svelte";
</script>

<Header />
<form class="form">
    
    <Card title="Informações Básicas" icon={UserDocIcon}>
        <TextInput name="nome" />
        <TextInput name="email" inputType="email" />
        <TextInput name="telefone" inputType="tel" />
    </Card>

    <Card title="Links de Portifólio" icon={LinkDocIcon}>
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
</style>
