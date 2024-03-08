<script lang="ts">
    import Dialog from "./Dialog.svelte";
    import qrcode from "@assets/pix.qrcode.jpg";
    export let dialog: HTMLDialogElement;

    const copy = async () => {
        await navigator.clipboard.writeText("00020126370014br.gov.bcb.pix0115stolen@duck.com5204000053039865802BR5925Victor Hugo Bezerra Furta6009Sao Paulo62070503***63040FC0")
            .then(()=>alert("Copiado!"))
            .catch(()=>alert("Deu algo errado, mas por favor não desiste!"));
    }
    const close = () => dialog.close();
</script>

<Dialog bind:dialog>
    <div class="wrapper">
        <button on:click={close} class="close">❌</button>
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
        padding: 1rem 2rem;
    }

    .wrapper img {
        width: 80vw;
    }

    .wrapper button {
        padding: 0.2rem 0.5rem;
    }

    .close {
        align-self: flex-end;
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit;
    }
</style>
