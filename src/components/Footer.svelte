<script>

    export let show
</script>

<main id='footer-container' style='display: {show ? 'flex' : 'none'}'>
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
    <div id='img-container'>
        <img src='./static/images/space-station.svg'/>
    </div>
</main>

<style>
    main {
        padding: 80px 0;
        position: relative;
        justify-content: space-around;
        background-image: var(--secondary-gradient);
    }
    h1, h2, h3 {
        color: white;
        font-weight: 900;
        text-shadow: 3px 3px 0 #898999;
    }
    p {
        color: white;
    }
    a {
        text-decoration: underline;
        color: var(--link-color);
    }
    #info-container {
        width: 25%;
        display: flex;
        flex-direction: column;
        gap: 1.5em;
        line-height: 1.4;
    }
    #img-container {
        position: relative;
        width: 33%;
    }
    img {
        position: absolute;
        animation-name: hover;
        animation-duration: 3s;
        animation-iteration-count: infinite;
    }
    @keyframes hover {
        0% {transform: translateY(0)}
        50% {transform: translateY(2%)}
        100% {transform: translateY(0)}
    }
</style>