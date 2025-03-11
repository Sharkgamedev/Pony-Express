<script>
    import Card from '$lib/card.svelte';
    import Image from '$lib/image.svelte';
</script>

<div class="container">
    <Card arr="a" title="She got him elected. Then she was shunned." preview="Thirty years ago, this whale helped Shamudy rise to power. This is the story of how he betrayed her." minutes="5"></Card>
    <Image arr="b" src="/gilly.png" caption="Office of the President Photo"></Image>
    <Card arr="c" title="This company was destined to fail. She saved it." preview="A spotlight on Dr. Lisa Su, the incredible mind behind AMD's recent resurgence." minutes="3"></Card>
    <Card arr="d" title="Pres. Cookie is the single greatest threat to our freedom." preview="How mismanagement, unintellgient policy, and a lack of basic economic understanding endanger us all." minutes="2"></Card>
</div>

<style>
    .container {
        display: grid;
        grid-template-areas:
          "a b c"
          "d b e";
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

