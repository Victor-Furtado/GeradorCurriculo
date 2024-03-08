<script lang="ts">
    import GitHubIcon from "../../assets/github.icon.svg";
    import CopyLeftIcon from "../../assets/copyleft.icon.svg";
</script>

<footer class="footer">
    <a href="https://github.com/">
        <img src={GitHubIcon} alt="github" />
    </a>
    <p>
        Victor Furtado <img src={CopyLeftIcon} height="12" alt="copyleft" /> 2022
    </p>
</footer>

<style>
    .footer {
        display: flex;
        justify-content: space-between;
        padding: 0.1rem 0.5rem;
        background-color: var(--color-surface-1);
        filter: drop-shadow(0 0 1em #000000);
    }
</style>
