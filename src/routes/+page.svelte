<script lang="ts">
    import Card from '$lib/card.svelte';
    import Image from '$lib/image.svelte';
    import { type articlemeta, shunned, cookie, iwdstatement, lisasu, thought, moose, draft } from '$lib/articles.ts';

    let articles: articlemeta[] = [
        shunned,
        iwdstatement,
        lisasu,
        cookie,
        thought,
        moose,
        draft
    ];
</script>

<svelte:head>
    <title>The Pony Express</title>
</svelte:head>

<div class="container">
    {#each articles as article, i}
        {#if article.image != undefined}
            <Image arr={String.fromCharCode(97 + i)} {article}></Image>
        {:else}
            <Card arr={String.fromCharCode(97 + i)} {article}></Card>
        {/if}
    {/each}
</div>

<style>
    .container {
        display: grid;
        grid-template-areas:
          "a b c"
          "d b e"
          "f g h";
        gap: 35px;

        box-sizing: border-box;
    }

    @media screen and (max-width: 700px) {
        .container {
            grid-template-columns: 1fr;
            grid-template-areas: unset;
            grid-template-areas:
              "a"
              "b"
              "c"
              "d"
              "e"
              "f"
              "g";

            padding: 5px 4% 5px 4%;
        }
    }
</style>

