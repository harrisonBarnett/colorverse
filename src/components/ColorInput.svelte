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
        z-index: 999;
        box-sizing: border-box;
        width: 180px;
        height: 50px;
        text-transform: uppercase;
        text-align: center;
        outline: none;
        border: none;
        background: black;
        border-radius: 12vmax;
        box-shadow: 6px 8px 10px rgba(0,0,0,.2);
    }
</style>