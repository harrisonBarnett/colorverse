<script>
    import SideNav from './SideNav.svelte'
    import ColorInput from './ColorInput.svelte'

    function handleNavToggle() {
        const sideNav = document.querySelector('.sidenav-list')
        sideNav.classList.toggle('show')
    }
</script>

<main class='sidebar'>
    <SideNav />
    <ColorInput className='palette-section-input'/>
</main>

<style>
    .sidebar {
        position: fixed;
        z-index: 999;
        right: 2vmax;
        top: 2vmax;
        display: flex;
        flex-direction: column;
        gap: 1em;
    }
</style>