<script>
    import { createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher()
    function handlePaletteClick() {
        dispatch('handlePaletteClick')
    }

    export let mainColor
</script> 

<main id='hero-container'>
    <nav>
        <img id='navbar-logo' src='./static/images/color-space-logo.png' alt='The colorspace logo'/>
        <p id='navbar-styled-text'>ColorSpace</p>
        <ul>
            <li>Palettes</li>
            <li>Gradient</li>
            <li>3-Color-Gradient</li>
            <li>Contact</li>
            <li>Info</li>
            <img id='navbar-twitter-logo' src='...' alt='The twitter logo'/>
        </ul>
    </nav>
    <button 
        on:click={handlePaletteClick}
        style='background: {mainColor}'>generate a palette</button>
</main>

<style>
    main {
        height: 100vh;
        width: 100vw;
        background: seagreen;
    }
    nav {
        border: 1px solid red;
        width: 100%;
        height: 5vmax;

        display: flex;
        align-items: center;
        justify-content: center;
    }
    #navbar-logo {
        height: 2vmax;
        margin-left: 10%;
    }
    #navbar-styled-text {
        font-weight: 700;
    }
    ul {
        margin-left: auto;
        margin-right: 10%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2vmax;
    }

</style>