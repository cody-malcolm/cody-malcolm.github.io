<template lang="html">
<div>
    <Nav />
    <div class="main-display" :class="$mq">
        <router-view />
    </div>
</div>
</template>

<script>
import Nav from '@/components/Nav.vue';

export default {
    name: 'App',
    components: {
        Nav
    }
}
</script>

<style lang="css">
/* Set up fonts that will be used */
@font-face {
    font-family: 'Manifold Extended Heavy';
    src: local('Manifold Extended Heavy'), local('Manifold-Extended-Heavy'),
        url('./assets/fonts/ManifoldExtendedCF-Heavy.woff2') format('woff2'),
        url('./assets/fonts/ManifoldExtendedCF-Heavy.woff') format('woff'),
        url('./assets/fonts/ManifoldExtendedCF-Heavy.ttf') format('truetype');
    font-weight: 900;
    font-style: normal;
}

@font-face {
    font-family: 'Manifold Extended';
    src: local('Manifold Extended Bold'), local('Manifold-Extended-Bold'),
        url('./assets/fonts/ManifoldExtendedCF-Bold.woff2') format('woff2'),
        url('./assets/fonts/ManifoldExtendedCF-Bold.woff') format('woff'),
        url('./assets/fonts/ManifoldExtendedCF-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
  }

/* fix page height to viewport height */
#app {
    height: 100vh;
}

/* set background and height of content display */
.main-display {
    background-image: url('./assets/images/background.jpg');
    background-color: hsl(0, 0%, 0%);
    /* for when min-height is too small, especially mobile contact form w/keyboard */
    height: 100%;
}

/* for usual case where not all of height is completely used */
.main-display.desktop {
    min-height: 81vh;
}

.main-display.mobile {
    min-height: 90vh;
}

/* set basic common styling of elements */
.p, .li, .label, .title, .img {
    color: hsl(0, 0%, 70%);
    font-family: "Manifold Extended";
    word-spacing: 0.25rem;
}

.a {
    color: hsl(0, 0%, 55%);
    text-decoration: none;
    word-spacing: 0.25rem;
}

.a:hover {
    color: hsl(0, 0%, 45%);
}

.button, .input {
    outline: none;
    font-family: "Manifold Extended";
}

.button {
    color: hsl(0, 0%, 70%);
    background-color: hsl(0, 0%, 0%);
}

.button:hover {
    color: hsl(0, 0%, 55%);
    cursor: pointer;
}

/* animation for nav links */
@keyframes pulsing {
    0% {
        box-shadow: 0 0 0.25rem hsl(0, 0%, 55%), inset 0 0 0.25rem hsl(0, 0%, 55%);
    }
    100% {
        box-shadow: 0 0 0.75rem hsl(0, 0%, 70%), inset 0 0 0.75rem hsl(0, 0%, 70%);
    }
}

.nav {
    font-family: "Manifold Extended Heavy";
    font-size: 1.5rem;
    color: hsl(0, 0%, 70%);
    text-decoration: none;
    padding: 0.75rem 1.25rem;
    border-radius: 100rem;
}

.nav:hover {
    color: hsl(0, 0%, 55%);
	animation: pulsing 800ms ease-out infinite alternate;
	border-color: hsl(0, 0%, 0%);
}

/* many components use these containers for layout - note: 75rem = 1200px */
.outer-container {
    width: 100%;
    display: flex;
    justify-content: center;
}

.inner-container {
    display: flex;
    flex-direction: column;
    width: 95%;
    max-width: 75rem;
}

</style>
