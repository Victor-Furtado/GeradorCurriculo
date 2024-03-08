<script lang="ts">
    import Header from "./lib/partials/Header.svelte";
    import Footer from "./lib/partials/Footer.svelte";

    import Card from "./lib/components/Card.svelte";

    import UserDocIcon from "./assets/userdoc.icon.svg";


</script>

<Header />
<form class="form">
    <Card title="Informações Básicas" icon={UserDocIcon}>
        <input type="text" name="name" id="name">
        <input type="email" name="email" id="email">
        <input type="tel" name="telefone" id="telefone">
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
