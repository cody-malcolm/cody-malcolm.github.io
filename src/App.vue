<template>
    <Nav />
    <router-view />
</template>

<script>
import Nav from '@/components/Nav.vue'

export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>

<style>
@font-face {
    font-family: 'Manifold Extended';
    src: local('Manifold Extended Heavy'), local('Manifold-Extended-Heavy'),
        url('./assets/fonts/ManifoldExtendedCF-Heavy.woff2') format('woff2'),
        url('./assets/fonts/ManifoldExtendedCF-Heavy.woff') format('woff'),
        url('./assets/fonts/ManifoldExtendedCF-Heavy.ttf') format('truetype');
    font-weight: 900;
    font-style: normal;
}
</style>
