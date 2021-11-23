<script>
	import Hero from './components/Hero.svelte'

	let primaryColor = '#0000FF'
	const generatePalettes = (newColor) => {
		alert('hello from the dispatched function')
		color = newColor
	}
</script>

<main>
	<Hero 
		on:handlePaletteClick={generatePalettes}
		mainColor={primaryColor}/>
</main>

<style>
	
</style>