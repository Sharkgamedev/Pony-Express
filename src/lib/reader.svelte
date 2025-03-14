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

<div class="reader">
    
    {#if article.tag != undefined}
        <div class="banner">
            This article is part of a series on <strong>{article?.tag}</strong>
        </div>
    {/if}

    <h1>{article.title}</h1>
    <h2>{article.preview}</h2>
    <h3>By {article.byline}</h3>
    <h4>{article.date}</h4>
    
    {#if article.image != undefined}
        <img src={article.image} alt={article.alt} />
    {:else}
        <div style="min-height: 50px;"></div>
    {/if}

    <slot />

</div>

<style>
    .reader {
        max-width: 600px;
        margin: auto;

        font-family: 'Miller, Georgia, Times, Times New Roman, serif';

        text-align: left;
    }

    .banner {
        min-width: 100%;
        text-align: center;

        padding: 5px;

        background-color: orange;
    }

    img {
        max-width: 100%;
    }

    h2 {
        font-weight: normal;
        font-size: 1.3em;
    }
    
    h3, h4 {
        font-weight: normal;
    }

    h4 {
        margin: 0;
    }
</style>

