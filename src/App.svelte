<script>
	import Hero from './components/Hero.svelte'
	import { primaryColor } from './stores.js'
	import { onDestroy } from 'svelte'
	let primaryColor = '#845ec2'
	const generatePalettes = (newColor) => {
		alert('hello from the dispatched function')
		primaryColor = newColor
	}
</script>

<main>
	<Hero 
		on:handlePaletteClick={generatePalettes}
		mainColor={primaryColor}/>
</main>

<style>
	
</style>