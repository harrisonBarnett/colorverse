<script>
    import tinycolor from 'tinycolor2'
    import ColorInput from './ColorInput.svelte'
    import Sidebar from './Sidebar.svelte'

    export let show
    export let color

    const randomColor = tinycolor.random()
    $: palettes =  [
        {   name: 'Classic',
            colors: [
                tinycolor(color).spin(90).toHexString(),
                tinycolor(color).spin(45).toHexString(),
                color,
                tinycolor(color).spin(135).toHexString(),
                tinycolor(color).spin(180).toHexString()
            ]
        },
        {   name: 'Palewave',
            colors: [
                tinycolor(color).spin(90).lighten(20).desaturate(10).toHexString(),
                tinycolor(color).spin(45).lighten(20).desaturate(10).toHexString(),
                color,
                tinycolor(color).spin(135).lighten(20).desaturate(10).toHexString(),
                tinycolor(color).spin(180).lighten(20).desaturate(10).toHexString()
            ]
        },
        {   name: 'Depth',
            colors: [
                tinycolor(color).lighten(40),
                tinycolor(color).lighten(20),
                color,
                tinycolor(color).darken(20),
                tinycolor(color).darken(40)
            ]
        },
        {   name: 'Complimentary',
            colors: [
                tinycolor(color).complement().spin(90).toHexString(),
                tinycolor(color).complement().spin(45).toHexString(),
                tinycolor(color).complement().toHexString(),
                tinycolor(color).complement().spin(135).toHexString(),
                tinycolor(color).complement().spin(180).toHexString()
            ]
        },
        {   name: 'Wildcard',
            colors: [
               tinycolor.random().toHexString(),
               tinycolor.random().toHexString(),
               tinycolor.random().toHexString(),
               tinycolor.random().toHexString(),
               tinycolor.random().toHexString()
            ]
        },
    ]
</script>

<main id='palette-zone' style='display: {show ? 'flex' : 'none'}'>
    <!-- <ColorInput className='palette-section-input'/>     -->
    <Sidebar />
    {#each palettes as palette}
        <div class='palette-item lazy'>
            <p>{palette.name}</p>
            <div class='palette-item-group'>
                {#each palette.colors as newColor}
                <div class='palette-item-pair'>
                    <div class='palette-item-hex' style='background: {newColor}'></div>
                    <p>{newColor}</p>
                </div>
                {/each}
            </div>
        </div>
    {/each}
</main>

<style>
    main {
        position: relative;
        margin-top: 40px;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .palette-item {
        position: relative;
        width: fit-content;
        margin: 20px auto;
        padding-bottom: 60px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        text-align: center;
        font-weight: 700;
    }
    .palette-item:after {
        position: absolute;
        left: 50%;
        bottom: 0;
        content: '';
        height: 1px;
        width: 100%;
        transform: translateX(-50%);
        background: rgba(0,0,0,.1);
    }
    #palette-zone .palette-item:last-of-type:after {
        display: none;
    }
    .palette-item p {
        font-size: 1.4em;
        text-align: center;
        font-weight: 700;
    }
    .palette-item-pair p {
        font-size: .9em;
        font-weight: 200;
        text-transform: uppercase;
    }
    .palette-item-pair {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .palette-item-group {
        display: flex;
        gap: .5em;
    }
    .palette-item-hex {
        position: relative;
        width: 100px;
        height: 100px;

        border-radius: .5em;
        box-shadow: 1px 1px 2px rgba(0,0,0,.1);
    }
    @media screen and (max-width: 600px) {
        .palette-item {
            margin: 20px auto 20px 60px;
        }
        .palette-item p {
            text-align: left;
        }
        .palette-item:after {
            display: none;
        }
        .palette-item-pair {
            flex-direction: row;
        }
        .palette-item-group {
            flex-direction: column;
        }
        .palette-item-hex {
            width: 50vw;
        }
    }
</style>