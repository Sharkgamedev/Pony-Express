<script lang="ts">
    import { type articlemeta } from '$lib/articles.ts';

    export let article: articlemeta;

    export let arr;
</script>

<a href="/articles/{article.slug}" style="grid-area: {arr}" title={article.title}>
    <div>
        <h2>{article.title}</h2>
        <p>{article.preview}</p>
        <span>{article.time} min read</span>
    </div>
</a>

<style>
    div {
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;

        align-items: left;
        justify-content: start;

        box-sizing: border-box;

        border-bottom: 1px solid #c2c2c2;

        cursor: pointer;

        color: black;
        font-weight: normal;

        gap: 3px;

        margin: 5px;
    }

    h2, p, span {
        margin: 0;
    }

    span {
        color: grey;
    }

    div:hover h2 {
        text-decoration: underline;
    }
</style>

