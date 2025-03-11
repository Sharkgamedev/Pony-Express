<script>
    import '../app.css';
    import Navbar from '../lib/navbar.svelte';
</script>

<div>
    <span>
        <Navbar></Navbar>

        <div style="min-height: 25px"></div>

        <slot />
    </span>

    <footer>
        <span>© Pony Express, Pony Express Editors</span>
        <a>Translate into Neighlish</a>
    </footer>
</div>

<style>
    div {
        display: flex;

        min-height: 100vh;

        flex-direction: column;
        justify-content: space-between;
    }

    footer {
        display: flex;
        flex-direction: column;

        justify-content: space-around;
        align-items: center;

        border-top: 1px solid #c2c2c2;

        padding: 15px 0 15px 0;

        min-height: 70px;
    }
</style>

