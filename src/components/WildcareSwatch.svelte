<script>
    import tinycolor from 'tinycolor2'

    export let color
</script>

<div class='palette-item'>
    <p>Wildcard Palette</p>
    <div class='palette-item-group'>
        <div class='palette-item-hex' style='background: {tinycolor(color).spin(90).toHexString()}'>{tinycolor(color).spin(90).toHexString()}</div>
        <div class='palette-item-hex' style='background: {tinycolor(color).spin(45).toHexString()}'>{tinycolor(color).spin(45).toHexString()}</div>
        <div class='palette-item-hex' style='background: {color.toHexString()}'>{color.toHexString()}</div>
        <div class='palette-item-hex' style='background: {tinycolor(color).spin(135).toHexString()}'>{tinycolor(color).spin(135).toHexString()}</div>
        <div class='palette-item-hex' style='background: {tinycolor(color).spin(180).toHexString()}'>{tinycolor(color).spin(180).toHexString()}</div>
    </div>
</div>

<style>
</style>