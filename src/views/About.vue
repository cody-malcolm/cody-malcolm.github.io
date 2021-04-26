<template lang="html">
<div class="outer-container">
    <div class="inner-container" :class="$mq">
        <VueSlickCarousel class="carousel" ref="carousel" v-bind="settings">
            <Me class="slide" />
            <Clean class="slide" />
            <Robust class="slide" />
            <Efficient class="slide" />
            <Designs class="slide" />
        </VueSlickCarousel>
        <div class="controls" :class="$mq">
            <button @click="previous" class="button">Previous</button>
            <div v-if="$mq === 'desktop'">
                <button @click="goTo(0)" class="button">About</button>
                <button @click="goTo(1)" class="button">Clean</button>
                <button @click="goTo(2)" class="button">Robust</button>
                <button @click="goTo(3)" class="button">Efficient</button>
                <button @click="goTo(4)" class="button">Designs</button>
            </div>
            <button @click="next" class="button">Next</button>
        </div>
        <div class="auto-controls" v-if="$mq === 'desktop'">
            <button @click="pause"
                    ref="pauseButton"
                    class="auto button"
                    style="display: none;">
                Pause
            </button>
            <button @click="autoplay"
                    ref="autoplayButton"
                    class="auto button">
                Autoplay
            </button>
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

// carousel settings
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
        };
    },
    methods: {
        // advance to next slide
        next() {
            this.$refs.carousel.next();
        },
        // return to previous slide
        previous() {
            this.$refs.carousel.prev();
        },
        // goto specific slide
        goTo(index) {
            this.$refs.carousel.goTo(index);
        },
        // turn autoplay on, hide autoplay button, show pause button, advance slide
        autoplay() {
            this.$refs.carousel.play();
            this.$refs.carousel.next();
            this.$refs.autoplayButton.style.display = "none";
            this.$refs.pauseButton.style.display = "inline";
        },
        // turn autoplay off, hide pause button, show autoplay button
        pause() {
            this.$refs.carousel.pause();
            this.$refs.autoplayButton.style.display = "inline";
            this.$refs.pauseButton.style.display = "none";
        },
    }
}
</script>

<style lang="css" scoped>
/* carousel styling */
.carousel {
    width: 100vw;
}

.slide {
    outline: none;
}

.slick-slider {
    width: 100%;
}

/* controls styling */
.controls.desktop {
    display: flex;
    justify-content: space-between;
}

.controls.mobile {
    display: flex;
    justify-content: space-around;
}

.auto-controls {
    display: flex;
    justify-content: center;
}

.button {
    width: 8.5rem;
    font-size: 1.25rem;
}

/* styling for child components */
/* styling and positioning of text content */
.carousel::v-deep .em {
    font-style: italic;
}

.carousel::v-deep .p.desktop {
    font-size: 1.25rem;
    margin: 1rem 0;
    text-align: justify;
}

.carousel::v-deep .p.mobile {
    font-size: 1rem;
    margin: 0.75rem 0;
}

/* positioning and styling of code snippets */
.carousel::v-deep .title {
    font-size: 0.75rem;
    text-align: center;
}

.carousel::v-deep .snippet-container.desktop {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.carousel::v-deep .snippet {
    background-color: hsl(0, 0%, 8%);
    border: 3px solid hsl(0, 0%, 0%);
    border-radius: 0.5rem;
    padding: 0.5rem;
}

.carousel::v-deep .snippet.desktop {
    margin: 1rem 0;
}

.carousel::v-deep .snippet.mobile {
    margin: 0.5rem 0;
}

.carousel::v-deep .code {
    font-family: monospace;
    color: hsl(0, 0%, 90%);

}
.carousel::v-deep .code.desktop {
    font-size: 1rem;
}

.carousel::v-deep .code.mobile {
    font-size: 0.65rem;
}
</style>
