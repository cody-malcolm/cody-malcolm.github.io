<template>
    <Nav />
    <div class="main-display">
        <router-view />
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

<style>
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
    height: 75vh;
}
</style>
