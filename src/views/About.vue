<template>
<div class="outer-container">
    <div class="inner-container">
        <VueSlickCarousel class="carousel" ref="carousel" v-bind="settings">
            <div class="section" id="my">
                <p class="centered">
                    My name is Cody Malcolm and I'm an undergraduate studying Computer
                    Science with a minor in Mathematics at
                    <a href="https://ontariotechu.ca/" target="_blank">Ontario Tech
                    University</a>. Although I am only in my third year, I am
                    <span class="em">super</span>-talented.
                </p>
                <p class="centered">
                    It takes a lot of confidence to make a statement like that, but if
                    you've already seen my <router-link to="/projects">project showcase
                    </router-link> then I'm sure you'll agree the claim is justified.
                </p>
            </div>
            <div class="section" id="clean">
                <p class="centered">
                    I pride myself on writing code that is clean, semantic, and
                    well-documented both internally and externally. I always adhere to
                    best practices, even though it is fun to write brilliant one-line
                    methods on websites like
                    <a href="https://www.codewars.com/users/cody-malcolm">Code Wars</a>.
                </p>
            </div>
            <div class="section" id="robust">
                <p class="centered">
                    I always strive to make my programs as robust as possible,
                    guarding against incorrect or malicious user input, edge cases,
                    and other possible exceptions.
                </p>
            </div>
            <div class="section" id="efficient">
                <p class="centered">
                    I chose a minor in Mathematics because it's also important to me
                    that the software I write is efficient, logically sound, and behaves
                    as expected. For this, I've taken classes in Statistics, Discrete
                    Mathematics, Computational Science, Optimization, and soon
                    Probability - with demonstrated success comparable to
                    that of my programming classes.
                </p>
            </div>
            <div class="section" id="designs">
                <p class="centered">
                    When designing an application, I make sure to properly utilize all
                    <a href="/projects">object-oriented design principles</a> in order
                    to produce a project that is modular, maintainable, and DRY. My
                    <router-link to="/projects">project showcase</router-link> contains
                    numerous examples of my deep understanding of these principles.
                </p>
            </div>
        </VueSlickCarousel>
        <div class="controls">
            <button @click="previous" class="previous">Previous</button>
            <div>
                <button @click="goTo(0)" class="about">About</button>
                <button @click="goTo(1)" class="clean">Clean</button>
                <button @click="goTo(2)" class="robust">Robust</button>
                <button @click="goTo(3)" class="efficient">Efficient</button>
                <button @click="goTo(4)" class="designs">Designs</button>
            </div>
            <button @click="next" class="next">Next</button>
        </div>
        <div class="auto-controls">
            <button @click="pause" ref="pauseButton" class="auto">Pause</button>
            <button @click="autoplay" ref="autoplayButton" class="auto" style="display: none;">Autoplay</button>
        </div>
    </div>
</div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import '../assets/carousel.css';

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
        VueSlickCarousel
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

<style scoped>

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

button {
    outline: none;
    width: 8.5rem;
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
    padding-top: 4rem;
}

p {
    color: hsl(0, 0%, 70%);
    font-family: "Manifold Extended";
    font-size: 1.75rem;
    margin: 2rem 0;
    word-spacing: 0.5rem;
    text-align: justify;
}

button {
    background-color: hsl(0, 0%, 0%);
    color: hsl(0, 0%, 70%);
    font-family: "Manifold Extended";
    font-size: 1.25rem;
}

a {
    color: inherit;
    text-decoration: none;
}

.centered {
    align-self: center;
}

.left {
    align-self: flex-start;
}

.right {
    align-self: flex-end;
}
</style>
