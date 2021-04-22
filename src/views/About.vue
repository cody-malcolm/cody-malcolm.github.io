<template lang="html">
<div class="outer-container">
    <div class="inner-container">
        <VueSlickCarousel class="carousel" ref="carousel" v-bind="settings">
            <AboutMe />
            <Clean />
            <Robust />
            <Efficient />
            <Designs />
        </VueSlickCarousel>
        <div class="controls">
            <button @click="previous" class="button">Previous</button>
            <div>
                <button @click="goTo(0)" class="button">About</button>
                <button @click="goTo(1)" class="button">Clean</button>
                <button @click="goTo(2)" class="button">Robust</button>
                <button @click="goTo(3)" class="button">Efficient</button>
                <button @click="goTo(4)" class="button">Designs</button>
            </div>
            <button @click="next" class="button">Next</button>
        </div>
        <div class="auto-controls">
            <button @click="pause" ref="pauseButton" class="auto button">Pause</button>
            <button @click="autoplay" ref="autoplayButton" class="auto button" style="display: none;">Autoplay</button>
        </div>
    </div>
</div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import '../assets/carousel.css';

import AboutMe from '@/components/AboutMe.vue';
import Clean from '@/components/Clean.vue';
import Robust from '@/components/Robust.vue';
import Efficient from '@/components/Efficient.vue';
import Designs from '@/components/Designs.vue';

const settings = {
    dots: false,
    arrows: false,
    fade: true,
    infinite: true,
    speed: 350,
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: false
};

export default {
    name: 'About',
    components: {
        VueSlickCarousel,
        AboutMe,
        Clean,
        Robust,
        Efficient,
        Designs
    },
    data() {
        return {
            settings: settings
        }
    },
    methods: {
        next() {
            this.$refs.carousel.next();
        },
        previous() {
            this.$refs.carousel.prev();
        },
        goTo(index) {
            this.$refs.carousel.goTo(index);
        },
        autoplay() {
            this.$refs.carousel.play();
            this.$refs.carousel.next();
            this.$refs.autoplayButton.style.display = "none";
            this.$refs.pauseButton.style.display = "inline";
        },
        pause() {
            this.$refs.carousel.pause();
            this.$refs.autoplayButton.style.display = "inline";
            this.$refs.pauseButton.style.display = "none";
        },
    }
}
</script>

<style lang="css" scoped>

.carousel {
    width: 100vw;
}

.slick-slider {
    width: 100%;
}

.controls {
    display: flex;
    justify-content: space-between;
}

.auto-controls {
    display: flex;
    justify-content: center;
}

.button {
    outline: none;
    width: 8.5rem;
    background-color: hsl(0, 0%, 0%);
    color: hsl(0, 0%, 70%);
    font-family: "Manifold Extended";
    font-size: 1.25rem;
}

.button:hover {
    color: hsl(0, 0%, 55%);
}

.em {
    font-style: italic;
}

.outer-container {
    width: 100%;
    display: flex;
    justify-content: center;
}

.inner-container {
    width: 80%;
    display: flex;
    flex-direction: column;
}

.carousel::v-deep .p {
    color: hsl(0, 0%, 70%);
    font-family: "Manifold Extended";
    font-size: 1.75rem;
    margin: 2rem 0;
    word-spacing: 0.5rem;
    text-align: justify;
}
</style>
