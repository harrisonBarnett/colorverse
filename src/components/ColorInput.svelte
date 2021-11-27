<script>
    import { primaryColor } from '../stores.js'
    import tinycolor from 'tinycolor2'

    export let className
</script>

<input
    class='color-input {className}'
    bind:value={$primaryColor}
    style='background: {$primaryColor}; color: {tinycolor($primaryColor).isLight() ? 'black' : 'white'};'
    placeholder='#000000' 
/>
<style>
    input {
        box-sizing: border-box;
        width: 250px;
        height: 50px;
        outline: none;
        border: none;
        background: black;
        border-radius: 12vmax;
        text-transform: uppercase;
        text-align: center;
    }
</style>