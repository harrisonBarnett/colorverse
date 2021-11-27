<script>
    // swatch templates
    import SimpleGradientSwatch from './SimpleGradientSwatch.svelte'
    import PalewaveSwatch from './PalewaveSwatch.svelte'
    import DepthPaletteSwatch from './DepthPaletteSwatch.svelte'
    import ComplimentarySwatch from './ComplimentarySwatch.svelte'
    import WildcardSwatch from './WildcareSwatch.svelte'
    import tinycolor from 'tinycolor2'

    export let show
    export let color


    // TODO: IMPLIMENT AN INTERSECTION OBSERVER SUCH AS BELOW TO "LAZILY LOAD" THE PALETTES ON SCROLL
    // const palettes = document.querySelectorAll('.palette-item')
    // let paletteObserver = new IntersectionObserver(function(entries, observer) {
    //     entires.forEach(entry => {
    //         if(entry.isIntersecting) {
    //             let lazyPalette = entry.target
    //             lazyPalette.classList.remove('lazy')
    //             lazyPalette.classList.add('loaded')
    //             paletteObserver.unobserve(lazyPalette)
    //         }
    //     })
    // })

    // palettes.forEach(palette => {
    //     paletteObserver.observe(palette)
    // })
</script>

<main id='palette-zone'style='display: {show ? 'block' : 'none'}'>
    <SimpleGradientSwatch color={color}/>
    <PalewaveSwatch color={color}/>
    <DepthPaletteSwatch color={color}/>
    <ComplimentarySwatch color={color}/>
    <WildcardSwatch color={tinycolor.random()} />
</main>

<style>
    main {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;

    }
    * :global(.palette-item) {
        width: fit-content;
        margin: 0 auto;
        padding: 50px;
    }
    * :global(.palette-item p) {
        text-align: center;
        font-weight: 700;
    }
    * :global(.palette-item-group) {
        display: flex;
        gap: .5em;
    }
    * :global(.palette-item-hex) {
        width: 120px;
        height: 120px;

        border-radius: .5em;
        box-shadow: 1px 1px 2px rgba(0,0,0,.1);
    }
</style>