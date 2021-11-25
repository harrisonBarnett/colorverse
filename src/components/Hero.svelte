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
        <h1 id='navbar-styled-text'>ColorSpace</h1>
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
        <p id='title-1'>Never waste Hours on finding the perfect Color Palette again!</p>
        <p id='title-2'>JUST ENTER A COLOR!</p>
        <p id='title-3'>And Generate nice Color Palettes</p>
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
        align-items: center;
        gap: .5em;
        font-size: 3vmax;
        font-weight: 700;
        text-align: center;
    }
    #title-3 {
        font-size: 2vmax;
        font-weight: 400;
    }
    #color-input,
    #generate-btn {
        padding: 1.2em;
        box-sizing: border-box;
        width: 12vmax;
        min-width: 200px;
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