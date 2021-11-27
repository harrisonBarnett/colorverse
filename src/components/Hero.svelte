<script>
    import { primaryColor } from '../stores.js'
    import tinycolor from 'tinycolor2'

    export let handleShowPalettes = ()=> {}
</script> 

<main id='hero-container'>
    <!-- bg images -->
    <img class='hero-bg-img'id='hero-bg-left' src='./static/images/astronaut-left.svg'alt='an astronaut floating above a planet'/>
    <img class='hero-bg-img'id='hero-bg-right' src='./static/images/astronaut-right.svg' alt='an astronaut floating in space'/>
    <nav>
        <a href='#' id='nav-logo-group'>
            <img id='navbar-logo' src='./static/images/color-space-logo.png' alt='The colorspace logo'/>
            <h1 id='navbar-styled-text'>ColorSpace</h1>
        </a>
        <ul>
            <a href='#'><li>Palettes</li></a>
            <a href='#'><li>Gradient</li></a>
            <a href='#'><li>3-Color-Gradient</li></a>
            <a href='#'><li>Contact</li></a>
            <a href='#'><li>Info</li></a>
            <a href='#'><img id='navbar-twitter-logo' src='./static/images/twitter-icon.svg' alt='The twitter logo'/></a>
        </ul>
    </nav>
    <div id='input-group'>
        <p id='title-1'>Never waste Hours on finding the perfect Color Palette again!</p>
        <p id='title-2'>JUST ENTER A COLOR!</p>
        <p id='title-3'>And Generate nice Color Palettes</p>
        <input 
        id='color-input'
        bind:value={$primaryColor}
        style='background: {$primaryColor}; color: {tinycolor($primaryColor).isLight() ? 'black' : 'white'};'
        placeholder='#000000'/>
        <button 
            id='generate-btn'
            on:click={handleShowPalettes()}>
            generate
        </button>
    </div>

</main>

<style>
    main {
        position: relative;
        height: 100vh;
        width: 100vw;   
        background-image: var(--primary-gradient);
    }
    .hero-bg-img {
        position: absolute;
        bottom: 0;
        height: 75vh;
    }
    #hero-bg-right {
        right: 40px;
    }
    /* NAVBAR styles */
    nav {
        position: absolute;
        top: 40px;
        left: 0;
        right: 0;


        display: flex;
        align-items: center;
        justify-content: center;
    }
    #nav-logo-group {
        display: flex;
        align-items: center;
        gap: 1em;
    }
    #navbar-logo {
        height: 4vmax;
        max-height: 40px;
        margin-left: 10%;
    }
    #navbar-styled-text {
        font-size: 1em;
        color: white;
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
    li {
        font-size: .75em;
        color: white;
        text-transform: uppercase;
    }
    #navbar-twitter-logo {
        height: 1em;
    }
    /* MAIN INPUTS styles */
    #input-group {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: .5em;
        font-weight: 700;
        text-align: center;
    }
    #title-1, #title-2 {
        font-size: 35px;
        font-weight: 700;
        color: white;
        text-shadow: 3px 3px 0 #898999;
    }
    #title-3 {
        font-size: 20px;
        font-weight: 200;
        color: white;
    }
    input, button {
        font-size: 16px;
        font-weight: 200;
    }
    input {
        background: black;
    }
    #color-input,
    #generate-btn {
        box-sizing: border-box;
        width: 250px;
        height: 50px;
        outline: none;
        border: none;
        border-radius: 12vmax;
        text-transform: uppercase;
        text-align: center;
    }
    #generate-btn {
        text-transform: uppercase;
        color: white;
        background: var(--color-teal);
    }

</style>