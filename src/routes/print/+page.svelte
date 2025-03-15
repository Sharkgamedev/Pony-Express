<script lang="ts">
    import Print from '$lib/print.svelte';

    let editions = [
        "December 30th, 2022",
        "May 14th, 2023",
        "October 23rd, 2023",
        "December 27th, 2023",
        "June 5th, 2024",
    ];
</script>

<svelte:head>
    <title>The Pony Express - Print Editions</title>
</svelte:head>

<div class="container">
    <h1 style="margin: 0">Print Editions</h1>
    <p class="reader">
        The Pony Express is regulated by export control laws on Pony Planet, and thus, not every print article is available
        to humanity. The editors try their hardest to get at least one print edition approved for export per quarter.
    </p>
    <div class="prints">
        {#each editions as edition}
            <Print {edition}></Print>
        {/each}
    </div>
</div>

<style>
    .container {
        display: flex;

        flex-direction: column;

        align-items: center;
        justify-content: center;

        padding: 0 15px 0 15px;

        margin: auto;
        height: 100%;

        text-align: center;
    }

    .prints {
        display: flex;
        flex-direction: row;

        align-items: space-between;
        justify-content: center;

        column-gap: 50px;
        row-gap: 20px;

        flex-wrap: wrap;
    }
</style>

