<script lang="ts">
    import GitHubIcon from "@assets/github.icon.svg";
    import CopyLeftIcon from "@assets/copyleft.icon.svg";
    import PixIcon from "@assets/pix.icon.svg";
    import PixModal from "@lib/components/PixModal.svelte";

    const github = () => window.open('https://github.com/Victor-Furtado/GeradorCurriculo', '_blank');

    let dialog: HTMLDialogElement;
    const pixModal = () => dialog.showModal();
</script>

<footer class="footer">
    <span class="icons">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <img class="icon" on:click={github} src={GitHubIcon} alt="github" />
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <img class="icon" on:click={pixModal} src={PixIcon} alt="pix" />
    </span>
    <p>
        Victor Furtado <img class="icon" src={CopyLeftIcon} height="12" alt="copyleft" /> 2024
    </p>
</footer>

<PixModal bind:dialog />

<style>
    .footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.1rem 0.5rem;
        background-color: var(--color-surface-1);
        filter: drop-shadow(0 0 1em #000000);
    }

    .icons {
        display: flex;
        gap: .5rem;
        /* align-items: center; */
    }

    .icons * {
        cursor: pointer;
    }
</style>
