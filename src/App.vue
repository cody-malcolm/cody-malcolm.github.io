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

#app {
    height: 100vh;
}

.main-display {
    background-image: url('./assets/images/background.jpg');
    background-color: hsl(0, 0%, 0%);
    height: 100%;
}

.main-display.desktop {
    min-height: 81vh;
}

.main-display.mobile {
    min-height: 90vh;
}

.p, .li, .label, .title {
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
