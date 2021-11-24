<script>
    import { primaryColor } from '../stores.js'

    function handleInputChange(e) {
        $primaryColor = e.target.value
    }
    export let handlePaletteClick = ()=> {}
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
    <div id='input-group'>
        <input 
        id='color-input'
        value={$primaryColor}
        style='background: {$primaryColor}'
        on:change={handleInputChange}/>
        <button 
            id='generate-btn'
            on:click={handlePaletteClick()}>
            generate
        </button>
    </div>

</main>

<style>
    main {
        height: 100vh;
        width: 100vw;
        background-image: var(--primary-gradient);
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
    #input-group {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        gap: 1em;
    }
    #color-input,
    #generate-btn {
        padding: 1em;
        box-sizing: border-box;
        width: 20vmax;
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