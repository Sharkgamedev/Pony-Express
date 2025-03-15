<script lang="ts">
    import { type articlemeta } from '$lib/articles.ts';

    export let article: articlemeta;
</script>

<svelte:head>

    <title>{article.title} - The Pony Express</title>
    <meta property="og:title" content="{article.title} - The Pony Express" />
    <meta property="og:type" content="article" />
    {#if article.image != undefined}
        <meta property="og:image" content="{article.image}" />
    {/if}

</svelte:head>

<div class="reader-box">
    
    {#if article.tag != undefined}
        <div class="banner">
            This article is part of a series on <strong>{article?.tag}</strong>
        </div>
    {/if}

    <h1>{article.title}</h1>
    <h2>{article.preview}</h2>
    <h3>By {article.byline} on {article.date}</h3>
    
    {#if article.image != undefined}
        <img src={article.image} alt={article.alt} />
    {:else}
        <div style="min-height: 1vw;"></div>
    {/if}

    <slot />

</div>

<style>
    .reader-box {
        max-width: 600px;
        margin: auto;

        font-family: 'Miller, Georgia, Times, Times New Roman, serif';

        text-align: left;
    }

    .banner {
        min-width: calc(100% - 10px);
        text-align: center;

        box-sizing: border-box;
        padding: 5px;

        margin: auto;

        background-color: orange;
    }

    img {
        max-width: 100%;
    }

    h1 {
        margin-bottom: 5px;
    }

    h2 {
        font-weight: normal;
        font-size: 1.3em;

        margin: 0;
    }
    
    h3 {
        font-weight: normal;
    }

    h3 {
        color: #3A3B3C;
        font-size: 1em;
    }

    @media screen and (max-width: 420px) {
        .banner {
            margin-left: 5px;
            margin-right: 5px;

            min-width: calc(100% - 20px);

            font-size: 0.8em;
            line-height: 1em;
        }

        .reader-box {
            padding-left: 10px;
            padding-right: 10px;
        }

        h1 {
            font-size: 1.4em;
            margin-bottom: 0;
        }

        h2 {
            font-size: 1em;
        }

        h3 {
            font-size: 0.8em;
        }
    }
</style>

