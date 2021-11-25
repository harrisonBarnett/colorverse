<script>
    import { primaryColor } from '../stores.js'
    import tinycolor from 'tinycolor2'

    export let show

    let randomColor = tinycolor.random()
    const palettes = [
        {   // a simple, standard gradient
            name: 'Simple Gradient',
            colors: [
                $primaryColor, 
                tinycolor($primaryColor).spin(45).toHexString(), 
                tinycolor($primaryColor).spin(90).toHexString(), 
                tinycolor($primaryColor).spin(135).toHexString(), 
                tinycolor($primaryColor).spin(180).toHexString()
            ]
        },
        {   // a palette based on the opposite of primarycolor
            name: 'Complimentary Gradient',
            colors: [
                tinycolor($primaryColor).complement().toHexString(), 
                tinycolor($primaryColor).complement().spin(45).toHexString(), 
                tinycolor($primaryColor).complement().spin(90).toHexString(), 
                tinycolor($primaryColor).complement().spin(135).toHexString(), 
                tinycolor($primaryColor).complement().spin(180).toHexString()
            ]
        },
        {   // randomized
            name: 'Wildcare Palette',
            colors: [
                randomColor.toHexString(), 
                tinycolor($primaryColor).complement().spin(45).toHexString(), 
                tinycolor($primaryColor).complement().spin(90).toHexString(), 
                tinycolor($primaryColor).complement().spin(135).toHexString(), 
                tinycolor($primaryColor).complement().spin(180).toHexString()
            ]
        },
        {   // grays of a similar shade
            name: 'Palewave',
            colors: [
                $primaryColor, 
                tinycolor($primaryColor).spin(45).lighten(20).desaturate(10).toHexString(), 
                tinycolor($primaryColor).spin(90).lighten(20).desaturate(10).toHexString(), 
                tinycolor($primaryColor).spin(135).lighten(20).desaturate(10).toHexString(), 
                tinycolor($primaryColor).spin(180).lighten(20).desaturate(10).toHexString()
            ]
        },
        {   // light/dark shades of the same color
            // as would be used in shadows, highlights
            name: 'Depth Palette',
            colors: [
                $primaryColor, 
                tinycolor($primaryColor).lighten(40),
                tinycolor($primaryColor).lighten(20),
                tinycolor($primaryColor).darken(20),
                tinycolor($primaryColor).darken(40)
            ]
        },
    ]
</script>

<main id='palette-zone'style='display: {show ? 'block' : 'none'}'>
    {#each palettes as palette}
        <div class='palette-item'>
            <p>{palette.name}</p>
            <div class='palette-item-group'>
                {#each palette.colors as color}
                    <div class='palette-item-hex' style='background: {color}'>{color}</div>
                {/each}
            </div>
        </div>
    {/each}
</main>

<style>
    main {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;

    }
    .palette-item {
        width: fit-content;
        margin: 0 auto;
        padding: 50px;
    }
    .palette-item p {
        text-align: center;
        font-weight: 700;
    }
    .palette-item-group {
        display: flex;
        gap: .5em;
    }
    .palette-item-hex {
        width: 120px;
        height: 120px;

        border-radius: .5em;
        box-shadow: 1px 1px 2px rgba(0,0,0,.1);
    }
</style>