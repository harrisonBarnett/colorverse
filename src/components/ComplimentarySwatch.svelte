<script>
    import tinycolor from 'tinycolor2'

    export let color
</script>

<div class='palette-item'>
    <p>Complimentary Palette</p>
    <div class='palette-item-group'>
        <div class='palette-item-hex' style='background: {tinycolor(color).complement().spin(90).toHexString()}'>{tinycolor(color).complement().spin(90).toHexString()}</div>
        <div class='palette-item-hex' style='background: {tinycolor(color).complement().spin(45).toHexString()}'>{tinycolor(color).complement().spin(45).toHexString()}</div>
        <div class='palette-item-hex' style='background: {tinycolor(color).complement().toHexString()}'>{tinycolor(color).complement().toHexString()}</div>
        <div class='palette-item-hex' style='background: {tinycolor(color).complement().spin(135).toHexString()}'>{tinycolor(color).complement().spin(135).toHexString()}</div>
        <div class='palette-item-hex' style='background: {tinycolor(color).complement().spin(180).toHexString()}'>{tinycolor(color).complement().spin(180).toHexString()}</div>
    </div>
</div>

<style>
</style>