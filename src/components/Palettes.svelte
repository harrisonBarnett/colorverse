<script>
    const palettes = [
        {   // a simple, standard gradient
            name: 'Simple Gradient',
            offsets: [1, 2, 3, 4, 5]
        },
        {   // a palette based on the opposite of primarycolor
            name: 'Complimentary Gradient',
            offsets: [1, 2, 3, 4, 5]
        },
        {   // randomized
            name: 'Wildcare Palette',
            offsets: [1, 2, 3, 4, 5]
        },
        {   // grays of a similar shade
            name: 'Grays Palette',
            offsets: [1, 2, 3]
        },
        {   // light/dark shades of the same color
            // as would be used in shadows, highlights
            name: 'Depth Palette',
            offsets: [1, 2, 3]
        },
    ]
    export let show;
</script>

<main id='palette-zone'style='display: {show ? 'block' : 'none'}'>
    {#each palettes as palette}
        <div class='palette-item'>
            <p>{palette.name}</p>
            <div class='palette-item-group'>
                {#each palette.offsets as offset}
                    <div class='palette-item-hex'>{offset}</div>
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
        border: 1px solid black;
        width: 120px;
        height: 120px;

        border-radius: .5em;
    }
</style>