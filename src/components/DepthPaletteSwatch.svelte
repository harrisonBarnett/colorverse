<script>
    import tinycolor from 'tinycolor2'

    export let color
</script>

<div class='palette-item'>
    <p>Depth Palette</p>
    <div class='palette-item-group'>
        <div class='palette-item-hex' style='background: {tinycolor(color).lighten(40)}'>{tinycolor(color).lighten(40)}</div>
        <div class='palette-item-hex' style='background: {tinycolor(color).lighten(20)}'>{tinycolor(color).lighten(20)}</div>
        <div class='palette-item-hex' style='background: {color}'>{color}</div>
        <div class='palette-item-hex' style='background: {tinycolor(color).darken(20)}'>{tinycolor(color).darken(20)}</div>
        <div class='palette-item-hex' style='background: {tinycolor(color).darken(40)}'>{tinycolor(color).darken(40)}</div>
    </div>
</div>

<style>
</style>