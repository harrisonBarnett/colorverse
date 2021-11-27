<script>
	import { primaryColor } from './stores.js'
	import Hero from './components/Hero.svelte'
	import Palettes from './components/Palettes.svelte'
	import Footer from './components/Footer.svelte'

	let showPalettes = false
	function handleShowPalettes() {
		showPalettes = true
	}

	let paletteColor
	primaryColor.subscribe(value => {
		paletteColor = value
	})
</script>

<main>
	<Hero 
	handleGenerateClick={handleShowPalettes}/>
	<Palettes 
	show={showPalettes}
	color={paletteColor}/>
	<Footer
	show={showPalettes}
	/>
</main>

<style>

</style>