<script lang="ts">
    import { type articlemeta } from '$lib/articles.ts';

    export let article: articlemeta;
</script>

<svelte:head>
    <title>{article.title} - The Pony Express</title>
    <meta property="og:title" content="{article.title} - The Pony Express" />
    <meta property="og:type" content="article" />
    <meta property="og:image" content="{article.image}" />
</svelte:head>

<div>
    <h1>{article.title}</h1>
    <h2>{article.preview}</h2>
    <h3>By {article.byline}</h3>

    <img src={article.image} alt={article.alt} />

    <slot />
</div>

<style>
    div {
        max-width: 600px;
        margin: auto;

        font-family: 'Miller, Georgia, Times, Times New Roman, serif';

        text-align: left;
    }

    h2 {
        font-weight: normal;
        font-size: 1.3em;
    }
    
    h3 {
        font-weight: normal;
    }
</style>

