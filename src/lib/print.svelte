<script lang="ts">
    export let edition: string;
</script>

<a title={edition} href="/editions/{edition}.pdf">
    <img src="/editions-previews/{edition}.png" {edition} alt="The {edition} edition" />
    <h2>{edition} Edition</h2>
</a>

<style>
    a {
        display: flex;
        flex-direction: column;

        align-items: center;
        justify-content: start;

        width: 100%;
        height: min-content;

        max-width: 300px;

        border-radius: 20px;
        
        transform: scale(1);
        transition-duration: 0.2s;

        box-shadow: 0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2);
        padding: 15px;
    }

    a:hover {
        cursor: hover;

        transform: scale(1.1);
        transition-duration: 0.2s;
    }

    img {
        max-width: 100%;
    }

    h2 {
        font-size: 1.2rem;
        text-wrap: nowrap;

        margin: 0;
    }

    @media screen and (max-width: 350px) {
        a {
            max-width: 150px;
        }

        h2 {
            text-wrap: wrap;
        }
    }
</style>

