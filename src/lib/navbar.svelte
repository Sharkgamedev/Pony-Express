<script>
    import nav from '$lib/assets/icons/navigation.svg';
    import chev from '$lib/assets/icons/chevron.svg';
</script>

<header class="container">
    <div class="controls">
        <figure class="logo"><a style="color: black; font-weight: normal;" href="/">The Pony Express</a></figure>
        <label for="menu"><img alt="hamburger menu" class="nav" src={nav}></label>
    </div>
    <nav>
        <input type="checkbox" style="display: none" id="menu">
        <ul class="list">
            <a href="/"><img class="chev" alt="chevron down" src={chev}><li>Home</li></a>
            <a href="/games"><img class="chev" alt="chevron down" src={chev}><li>Games</li></a>
            <a href="https://sharks-interactive.github.io/Silveny-Speech"><img class="chev" alt="chevron down" src={chev}><li>Translator</li></a>
            <a href="/print" style="border: none;"><img class="chev" alt="chevron down" src={chev}><li>Print Edition</li></a>
        </ul>
    </nav>
</header>

<style>
    .container {
        width: 100%;
        padding: 15px;

        border-bottom: 1px solid #c2c2c2;
        box-sizing: border-box;
    }

    .controls {
        display: flex;
    }

    .logo {
        margin: 0;

        width: 100%;
        text-align: center;
    }

    .nav {
        margin: 5px;
        width: 30px;
    }

    .list {
        width: 100%;
        display: flex;

        justify-content: space-around;
        align-items: center;

        margin: 0;
        padding: 0;

        box-sizing: border-box;
    }

    label, input {
        display: none;
        float: right;
    }

    ul a {
      text-decoration: none;
      list-style: none;

      font-size: 1.5em;

      color: black;
    }

    .chev {
        display: none;
    }

    @media screen and (max-width: 568px) {
        .controls {
            display: flex;
            flex-direction: row;

            justify-content: center;
            align-items: center;
        }

        .logo {
            font-size: 2em;
        }

        label {
            display: block;
        }

        .list {
            max-height: 0;
            overflow: hidden;

            flex-direction: column;

            padding: 0 10px 0 0px;
        }

        ul a {
            text-align: right;
            width: 100%;
            height: 50px;

            border-bottom: 1px solid #D3D3D3;

            display: flex;

            align-items: center;
            justify-content: space-between;
        }

        .chev {
            display: initial;
        }

        nav {
            width: 100%;
            height: auto;
        }

        input:checked ~ .list {
            max-height: 300px !important;
        }
    }

    @media screen and (max-width: 320px) {
        .logo {
            font-size: 1.2em;
        }

        .list {
            padding: 0;
        }

        ul a {
            font-size: 1em;
        }
    }
</style>

