<script>

    export let show
</script>

<main id='footer-container' style='display: {show ? 'block' : 'none'}'>
    <div id='info-container'>
        <div id='title-1'>
            <h1>Color Space</h1>
            <h2>Color Palettes Generator</h2>
        </div>
        <div id='title-2'>
            <h3>Your space for everything that has to do with color</h3>
        </div>
        <p>We have set ourselves the task to create one place where you can find matching colors, generate nice color palettes and learn more about color conversions and meaning. Sometimes it is hard to find inspiration for a good color scheme or you do not have the time to experiment until you find matching colors. To facilitate this process, we investigated this set of tools and want to share it with you.</p>
        <p>Feel free to use the color palettes or gradients in your project. If you want, you can recommend our site or refer it to your friends and workmates. We are always happy to hear from you.</p>
        <p> Our collection of tools has just been released and is currently in beta. At the moment, you can generate color palettes or <a href='#'>create nice CSS gradients</a> from colors of your choice. A whole new set of different tools is currently in work. There will also be an App for Android. If you want to stay up to date, have any questions, or even suggestions, please do not hesitate to <a href='#'>contact us!</a></p>
    </div>
    <img src='./static/images/space-station.svg'/>
</main>

<style>
    main {
        position: relative;
        background-image: var(--secondary-gradient);
    }
    img {
        width: 75%;
    }
</style>