<template lang="html">
<div class="outer-container">
    <div class="inner-container">
        <VueSlickCarousel class="carousel" ref="carousel" v-bind="settings">
            <Me class="slide" />
            <Clean class="slide" />
            <Robust class="slide" />
            <Efficient class="slide" />
            <Designs class="slide" />
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
            <button @click="pause" ref="pauseButton" class="auto button" style="display: none;">Pause</button>
            <button @click="autoplay" ref="autoplayButton" class="auto button">Autoplay</button>
        </div>
    </div>
</div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';

import Me from '@/components/About/Me.vue';
import Clean from '@/components/About/Clean.vue';
import Robust from '@/components/About/Robust.vue';
import Efficient from '@/components/About/Efficient.vue';
import Designs from '@/components/About/Designs.vue';

const settings = {
    dots: false,
    arrows: false,
    fade: true,
    infinite: true,
    speed: 350,
    autoplay: false,
    autoplaySpeed: 20000,
    pauseOnHover: false
};

export default {
    name: 'About',
    components: {
        VueSlickCarousel,
        Me,
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
.slide {
    outline: none;
}

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
    cursor: pointer;
}

.carousel::v-deep .em {
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
    margin: 1rem 0;
    word-spacing: 0.5rem;
    text-align: justify;
}

.carousel::v-deep .title {
    color: hsl(0, 0%, 70%);
    font-family: "Manifold Extended";
    font-size: 0.75rem;
    word-spacing: 0.5rem;
    text-align: center;
}

.carousel::v-deep .snippet-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.carousel::v-deep .snippet {
    background-color: hsl(0, 0%, 8%);
    border: 3px solid hsl(0, 0%, 0%);
    border-radius: 0.5rem;
    margin: 1rem 0;
    padding: 0.5rem;
}

.carousel::v-deep .code {
    font-family: monospace;
    font-size: 1rem;
    color: hsl(0, 0%, 90%);
}
</style>
