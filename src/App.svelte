<script>
	import Hero from './components/Hero.svelte'
	import { primaryColor, showPalettes } from './stores.js'

	function generatePalettes() {
		$showPalettes = true
	}
</script>

<main>
	<!-- remove before prod -->
	<h3 style='color: {$primaryColor}'>primary color</h3>
	<h1 id='test-text' style='display: {$showPalettes ? 'block' : 'none'}'>test</h1>
	<Hero handlePaletteClick={()=>generatePalettes()}/>
</main>

<style>
	#test-text {
		position: absolute;
		top: 50%;
		left: 50%;
		z-index: 999;
	}
	h3 {
		position: absolute;
		left: 0;
		top: 25%;
		border: 1px solid red;
	}
</style>