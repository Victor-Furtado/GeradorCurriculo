<script lang="ts">
    import Header from "./lib/partials/Header.svelte";
    import Footer from "./lib/partials/Footer.svelte";
</script>

<Header />
<form class="form">
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
