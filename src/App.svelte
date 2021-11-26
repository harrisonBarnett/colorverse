<script>
	import { primaryColor, showPalettes } from './stores.js'
	import Hero from './components/Hero.svelte'
	import Palettes from './components/Palettes.svelte'

	function handleShowPalettes() {
		$showPalettes = true
	}

	let paletteColor
	primaryColor.subscribe(value => {
		paletteColor = value
	})
</script>

<main>
	<Hero 
	handleShowPalettes={()=>handleShowPalettes}/>
	<Palettes 
	show={$showPalettes}
	color={paletteColor}/>
</main>

<style>

</style>