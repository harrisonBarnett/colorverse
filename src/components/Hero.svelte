<script>
    import ColorInput from './ColorInput.svelte'
    import NavBar from './NavBar.svelte'

    export let handleGenerateClick = ()=> {}
</script> 

<main id='hero-container'>
    <!-- bg images -->
    <img class='hero-bg-img'id='hero-bg-left' src='./static/images/astronaut-left.svg'alt='an astronaut floating above a planet'/>
    <img class='hero-bg-img'id='hero-bg-right' src='./static/images/astronaut-right.svg' alt='an astronaut floating in space'/>
    <NavBar />
    <div id='input-group'>
        <p id='title-1'>Never waste Hours on finding the perfect Color Palette again!</p>
        <p id='title-2'>JUST ENTER A COLOR!</p>
        <p id='title-3'>And Generate nice Color Palettes</p>
        <ColorInput className='hero-color-input'/>
        <button 
            id='generate-btn'
            on:click={() => handleGenerateClick()}>
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
        background-attachment: fixed;
    }
    .hero-bg-img {
        position: absolute;
        bottom: 0;
        height: 65vmin;
        min-height: 400px;
    }
    #hero-bg-right {
        right: 40px;
    }
    /* MAIN INPUTS styles */
    #input-group {
        width: 100%;
        max-width: 800px;
        position: absolute;
        left: 50%;
        top: 15%;
        transform: translateX(-50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1em;
        font-weight: 700;
        text-align: center;
    }
    #title-1, #title-2 {
        font-size: 35px;
        font-weight: 900;
        color: white;
        text-shadow: 3px 3px 0 #898999;
    }
    #title-2 {
        font-size: 40px;
    }
    #title-3 {
        font-size: 20px;
        font-weight: 200;
        color: white;
    }
    button {
        font-size: 16px;
        font-weight: 300;
    }
    #generate-btn {
        box-sizing: border-box;
        width: 180px;
        height: 50px;
        color: white;
        text-transform: uppercase;
        text-align: center;
        outline: none;
        border: none;
        border-radius: 12vmax;
        background: var(--color-teal);
        box-shadow: 6px 8px 10px rgba(0,0,0,.2);
        transition: all 500ms ease;
    }
    #generate-btn:hover {
        cursor: pointer;
        box-shadow: none;
        transition: all 500ms ease;
    }
    @media screen and (max-width: 700px) {
        #title-1 {
            display: none;
        }
        #title-2 {
            font-size: 7vmin;
        }
        #hero-bg-right {
            display: none;
        }
    }
</style>