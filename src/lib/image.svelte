<script lang="ts">
    import { type articlemeta } from '$lib/articles.ts';
    
    export let article: articlemeta;

    export let arr: string;
</script>

<a style="grid-area: {arr}" href="/articles/{article.slug}" title={article.title}>
    <img src={article.image} alt={article.alt}>

    <p>{article.credit}</p>
</a>

<style>
    div {
        box-sizing: border-box;
    }

    img {
        max-width: 100%;
        height: auto;
    }
</style>

