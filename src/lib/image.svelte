<script>
    export let src;

    export let caption;
    export let arr;
</script>

<div style="grid-area: {arr}">
    <img src={src}>

    <p>{caption}</p>
</div>

<style>
    div {
        box-sizing: border-box;
    }

    img {
        max-width: 100%;
        height: auto;
    }
</style>

