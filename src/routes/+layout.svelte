<script>
    import '../app.css';
    import Navbar from '../lib/navbar.svelte';

    async function translate() {
        let translator = await import('$lib/translator.ts');
        translator.translate();
    }
</script>

<div>
    <span>
        <Navbar></Navbar>

        <div style="min-height: 25px"></div>

        <slot />
    </span>

    <footer>
        <span>© Pony Express, Pony Express Editors</span>
        <button on:click={() => translate()}>Translate into Neighlish</button>
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

    button {
        border: none;
        outline: none;

        background-color: unset;
        color: #147d58;

        cusor: pointer;

        font-size: 1em;
        font-weight: bold;
    }

    button:hover {
        text-decoration: underline;
        cusor: pointer;
    }
</style>

