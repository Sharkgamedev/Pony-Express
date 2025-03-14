<script lang="ts">
    import Card from '$lib/card.svelte';
    import Image from '$lib/image.svelte';
    import { type articlemeta, shunned, cookie, iwdstatement, lisasu, normal, thought, moose, draft, whalewar, eels, plead, socialmedia, march, planet, civilwar, livessaved, spiral, corruption } from '$lib/articles.ts';

    let articles: articlemeta[] = [
        shunned,
        iwdstatement,
        lisasu,
        normal,
        eels,
        whalewar,
        cookie,
        corruption,
        civilwar,
        plead,
        planet,
        thought,
        moose,
        march,
        livessaved,
        socialmedia,
        draft,
        spiral,
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
          "f g h"
          "i j k"
          "l m n"
          "o p q"
          "r s t";
        gap: 35px;

        box-sizing: border-box;
    }

    @media screen and (max-width: 700px) {
        .container {
            /* Temp. */
            grid-template-columns: 1fr;
            grid-template-areas: unset;
            grid-template-areas:
              "a"
              "b"
              "c"
              "d"
              "e"
              "f"
              "g"
              "h"
              "i"
              "j"
              "k"
              "l"
              "m"
              "n"
              "o"
              "p"
              "q"
              "r";

            padding: 5px 4% 5px 4%;
        }
    }
</style>

