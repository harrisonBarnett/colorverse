<script>

</script>


<nav>
    <a href='#' id='nav-logo-group'>
        <img id='navbar-logo' src='./static/images/color-space-logo.png' alt='The colorspace logo'/>
        <h1 id='navbar-styled-text'>ColorVerse</h1>
    </a>
    <ul>
        <a href='#'><li id='current-page'>Palettes</li></a>
        <a href='#'><li class='nav-link'>Gradient</li></a>
        <a href='#'><li class='nav-link'>3-Color-Gradient</li></a>
        <a href='#'><li class='nav-link'>Contact</li></a>
        <a href='#'><li class='nav-link'>Info</li></a>
        <a href='#'><img id='navbar-twitter-logo' src='./static/images/twitter-icon.svg' alt='The twitter logo'/></a>
    </ul>
</nav>


<style>
        /* NAVBAR styles */
    nav {
        position: absolute;
        top: 40px;
        left: 8%;
        right: 8%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    #nav-logo-group {
        display: flex;
        align-items: center;
        gap: 1em;
    }
    #navbar-logo {
        height: 2em;
        max-height: 40px;
    }
    #navbar-styled-text {
        font-size: 1em;
        letter-spacing: 1px;
        color: white;
        font-weight: 900;
    }
    ul {
        margin-left: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2vmax;
    }
    li {
        position: relative;
        font-size: .7em;
        letter-spacing: 2px;
        color: white;
        text-transform: uppercase;
    }
    li:hover {
        cursor: pointer;
    }
    #current-page {
        position: relative;
    }
    #current-page:after,
    #current-page:before {
        position: absolute;
        content: '';
        width: 100%;
        height: 3px;
        bottom: -.65em;
        left: 0;
    }
    #current-page:after {
        background: var(--link-color);
    }
    #current-page:before {
        z-index: 999;
        background: var(--color-purple);
        transform: scaleX(0);
        transform-origin: bottom right;
        transition: transform 250ms ease-in-out;
    }
    #current-page:hover:before {
        z-index: 999;
        transform: scaleX(1);
        transform-origin: bottom left;
    }
    .nav-link:after,
    .nav-link:before {
        position: absolute;
        content: '';
        width: 100%;
        height: 3px;
        bottom: -.65em;
        left: 0;
        transform: scaleX(0);
        transform-origin: bottom right;
        transition: transform 250ms ease-in-out;
    }
    .nav-link:after {
        background: var(--link-color);
    }
    .nav-link:before {
        background: var(--color-purple);
        transition-delay: 250ms;
    }
    .nav-link:hover:after,
    .nav-link:hover:before {
        transform: scaleX(1);
        transform-origin: bottom left;
    }   
    #navbar-twitter-logo {
        height: 1em;
    }
</style>