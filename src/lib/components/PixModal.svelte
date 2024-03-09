<script lang="ts">
    import Dialog from "./Dialog.svelte";
    import qrcode from "@assets/pix.qrcode.jpg";
    export let dialog: HTMLDialogElement;

    const copy = async () => {
        await navigator.clipboard
            .writeText(
                "00020126370014br.gov.bcb.pix0115stolen@duck.com5204000053039865802BR5925Victor Hugo Bezerra Furta6009Sao Paulo62070503***63040FC0",
            )
            .then(() => alert("Copiado!"))
            .catch(() => alert("Deu algo errado, mas por favor não desiste!"));
    };
    const close = () => dialog.close();
</script>

<Dialog bind:dialog>
    <div class="wrapper">
        <div class="header">
            <p>Me ajude a continuar! Faz um PIX</p>
            <button on:click={close} class="close btn-unstyled">❌</button>
        </div>
        <img class="qrcode" src={qrcode} alt="PIX QRCODE" />
        <button on:click={copy}>Copiar Chave Pix</button>
    </div>
</Dialog>

<style>
    .wrapper {
        display: flex;
        gap: 1rem;
        flex-direction: column;
        align-items: center;
        padding-bottom: 2rem;
    }
    
    .header {
        align-self: stretch;
        display: flex;
        align-items: center;
        justify-content: space-between;   
        border-radius: 8px 8px 0 0;
        padding: 0.5rem 1.2rem;
        background-color: var(--color-surface-1);
    }

    .wrapper img {
        max-width: 20rem;
        width: 80vw;
        padding: 1rem 2rem;
    }

    .wrapper button {
        padding: 0.2rem 0.5rem;
    }

</style>
