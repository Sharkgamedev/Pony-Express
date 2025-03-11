<script lang="ts">
    export let title: string;
    export let preview: string;

    export let minutes: number;

    export let arr;
</script>

<a href="/" style="grid-area: {arr}">
    <div>
        <h2>{title}</h2>
        <p>{preview}</p>
        <span>{minutes} min read</span>
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

