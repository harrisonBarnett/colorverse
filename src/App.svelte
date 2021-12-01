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

	<!-- INTERSECTION OBSERVERS -->
	<script>
		// intersection observer 'lazily loads' the palettes as they come into view
		const palettes = document.querySelectorAll('.palette-item')
        let paletteObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    let lazyPalette = entry.target
                    lazyPalette.classList.remove('lazy')
                    lazyPalette.classList.add('loaded')
                    paletteObserver.unobserve(lazyPalette)
                }
            })
        })

        palettes.forEach(palette => {
            paletteObserver.observe(palette)
        })
        // sliding color input from side when scrolled into palettes view
        const options = {
            threshold: 1
        }
        const sideBar = document.querySelector('.sidebar')
		const sidenavItems = document.querySelectorAll('.sidenav-item')
        const colorInput = document.querySelector('.palette-section-input')
        const paletteZone = document.querySelector('#palette-zone')
        let inputObserver = new IntersectionObserver((entries, options) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    sideBar.id = 'sidebar-show'
                    colorInput.id = 'palette-section-input-show'
					sidenavItems.forEach(item => {
						item.id='sidenav-item-show'
					})
                } else {
                    sideBar.id = 'sidebar-hide'
                    colorInput.id = 'palette-section-input-hide'
					sidenavItems.forEach(item => {
						item.id='sidenav-item-hide'
					})
                }
            })
        })
        inputObserver.observe(paletteZone)
	</script>
</main>

<style>

</style>