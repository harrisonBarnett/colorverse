<script></script>

<nav>
    <a href='#' id='nav-logo-group'>
        <img id='navbar-logo' src='./static/images/color-space-logo.png' alt='The colorspace logo'/>
        <h1 id='navbar-styled-text'>ColorVerse</h1>
    </a>
    <ul>
        <li class='nav-link'><a href='#'>www.sunbear.online</a></li>
        <li>made with <span>&hearts;</span> by harrison</li>
        <li class='nav-link'><a href='#'>Contact</a></li>
    </ul>
</nav>

<style>
    nav {
        padding: 2em 0;
        width: 100%;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2em;

        border-top: 1px solid rgba(255, 255, 255, .5);
        background: rgba(255, 255, 255, .15);
    }
    #nav-logo-group {
        margin-left: 5%;
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
        margin-right: 5%;
        display: flex;
        gap: 1em;
    }
    a {
        color: white;
    }
    li {
        font-size: .8em;
    }
    li:nth-child(2) {
        color: var(--link-color);
    }
    li:nth-child(3){
        margin-left: auto;
    }
    .nav-link {
        position: relative;
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
    @media screen and (max-width: 600px) {
        #nav-logo-group {
            flex-direction: column;
        }
        li.nav-link:nth-child(3) {
            display: none;
        }
    }
    @media screen and (max-width: 400px) {
        nav {
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        #nav-logo-group {
            margin: 0;
        }
        li.nav-link:nth-child(3) {
            display: none;
        }
        ul {
            margin: 0;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
        }
    }
</style>