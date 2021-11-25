<script>
	import { primaryColor, showPalettes } from './stores.js'
	import Hero from './components/Hero.svelte'
	import Palettes from './components/Palettes.svelte'

	function generatePalettes() {
		$showPalettes = true
	}
</script>

<main>
	<Hero handlePaletteClick={()=>generatePalettes}/>
	<Palettes show={$showPalettes}/>
</main>

<style>

</style>