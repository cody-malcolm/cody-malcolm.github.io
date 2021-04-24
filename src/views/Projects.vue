<template lang="html">
<div class="outer-container">
    <div class="inner-container">
        <VueSlickCarousel class="carousel" ref="carousel" v-bind="settings">
            <ProjectSlide v-for="project in projects" v-bind:project="project" :key="project.name" />
        </VueSlickCarousel>
        <div class="github">
            <p class="p">
                See the
                <a class="a" :href="projects[index].github" target="_blank">
                    Github repository
                </a>
                for more details.
            </p>
        </div>
        <div class="controls">
            <div class="step-controls">
                <button @click="previous" class="button">Previous</button>
                <button @click="next" class="button">Next</button>
            </div>
            <div class="jump-controls">
                <button @click="goTo(0)" class="button">Ataxx<br />Java/JavaFX</button>
                <button @click="goTo(1)" class="button">FileSharer<br />Java/JavaFX</button>
                <button @click="goTo(2)" class="button">Twitter Clone<br />Full Stack Web</button>
                <button @click="goTo(3)" class="button">Etch a Sketch<br />Front End Web</button>
                <button @click="goTo(4)" class="button">Portfolio Website<br />Vue and Node</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';

import ProjectSlide from '@/components/Projects/ProjectSlide.vue';

const settings = {
    dots: false,
    arrows: false,
    fade: true,
    infinite: true,
    speed: 350,
    autoplay: false
};

export default {
    name: 'Projects',
    components: {
        VueSlickCarousel,
        ProjectSlide
    },
    data() {
        return {
            settings: settings,
            projects: [
                {
                    name: 'Ataxx',
                    techs: ['Java', 'JavaFX', 'Gradle'],
                    description: `In this group project, we implemented the
                                arcade game Ataxx using JavaFX. The game uses
                                socket communications to facilitate play of one
                                or more simultaneous games using a server-client
                                relationship. The game includes chat
                                functionality and support for spectators.`,
                    img: 'ataxx.png',
                    github: 'https://github.com/cody-malcolm/Ataxx'
                },
                {
                    name: 'FileSharer',
                    techs: ['Java', 'JavaFX', 'Gradle'],
                    description: `In this project, I built a file sharing
                                application. The project had limited
                                requirements beyond using multi-threading to
                                facilitate a client-server relationship, but
                                students were expected to implement
                                enhancements. I implemented many enhancements
                                including a preview pane, filename conflict
                                resolution, and a server-side menu for the
                                admin.`,
                    img: 'filesharer.png',
                    github: 'https://github.com/cody-malcolm/FileSharer'
                },
                {
                    name: 'Twitter Clone',
                    techs: ['React', 'Node.js', 'Express.js', 'SQLite'],
                    description: `In this group project, we were to build a web
                                application to demonstrate what we had learned
                                in the course, including both front-end and
                                back-end concepts. Additionally we were to
                                select an utilize an additional technology not
                                taught in the course. We chose to build a
                                Twitter clone and used React for our additional
                                technology.`,
                    img: 'twitterclone.png',
                    github: 'https://github.com/CSCI3230U/majorgroupproject-frede-avril-cody'
                },
                {
                    name: 'Etch a Sketch',
                    techs: ['Javascript', 'HTML5', 'CSS3'],
                    description: `One of the front-end projects for the Odin
                                Project curriculum is to build an Etch-A-Sketch.
                                I went considerably above and beyond the base
                                requirements and implemented all the suggested
                                extras, then made some modifications and added a
                                few more quality of life improvements based on
                                user testing and feedback. Agile development
                                works!`,
                    img: 'etchasketch.png',
                    github: 'https://github.com/cody-malcolm/odin_etch_a_sketch'
                },
                {
                    name: 'Portfolio Website',
                    techs: ['Vue', 'Node.js'],
                    description: `One of the topics covered in Web Application
                                Development that I didn't get a lot of exposure
                                to was Vue (because we used React on the final
                                project). So in order to consolidate my
                                learning, I chose to build my portfolio website
                                with Vue, despite greater comfort with React. As
                                always, I learned a lot from the experience.`,
                    img: 'portfolio.png',
                    github: 'https://github.com/cody-malcolm/cody-malcolm.github.io'
                }
            ],
            index: 0
        }
    },
    methods: {
        next() {
            this.$refs.carousel.next();
            this.index += 1;
            this.index %= 5;
        },
        previous() {
            this.$refs.carousel.prev();
            this.index += 4;
            this.index %= 5;
        },
        goTo(index) {
            this.$refs.carousel.goTo(index);
            this.index = index;
        }
    }
}
</script>

<style lang="css" scoped>
.github {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
}

.p {
    color: hsl(0, 0%, 70%);
    font-family: "Manifold Extended";
    font-size: 1.75rem;
    word-spacing: 0.25rem;
}

.a {
    color: hsl(0, 0%, 55%);
    text-decoration: none;
    word-spacing: 0.25rem;
}
.carousel {
    width: 25rem;
}
.slide {
    outline: none;
}

.slick-slider {
    width: 100%;
}

.controls {
    display: flex;
    justify-content: space-around;
}

.step-controls {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 1rem;
}

.jump-controls {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

/* .controls-inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
} */

.auto-controls {
    display: flex;
    justify-content: center;
}

.button {
    outline: none;
    width: 16rem;
    background-color: hsl(0, 0%, 0%);
    color: hsl(0, 0%, 70%);
    font-family: "Manifold Extended";
    font-size: 1.25rem;
    margin: 0.25rem;
}

.button:hover {
    color: hsl(0, 0%, 55%);
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
    width: 90%;
}
</style>
