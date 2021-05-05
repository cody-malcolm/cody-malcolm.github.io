<template lang="html">
<div class="outer-container">
    <div class="inner-container">
        <!-- 3 parts - carousel slides, github link, and navigation buttons  -->
        <!-- Note:  It would be semantically preferable to have the github link
                    be part of the slides. This is unfortunately not possible
                    because of the way vue-slick-carousel is implemented, links
                    don't appear where they display within the carousel. -->
        <!-- carousel slides  -->
        <VueSlickCarousel class="carousel" ref="carousel" v-bind="settings">
            <ProjectSlide   v-for="project in projects"
                            v-bind:project="project"
                            :key="project.name" />
        </VueSlickCarousel>
        <!-- github link  -->
        <div class="github">
            <p class="p">
                See the
                <a class="a" :href="projects[index].github" target="_blank">
                    Github repository
                </a>
                for more details.
            </p>
        </div>
        <!-- navigation buttons  -->
        <!-- only desktop shows direct navigation buttons -->
        <mq-layout mq="desktop">
            <div class="controls">
                <div class="step-controls">
                    <button @click="previous" class="button desktop">
                        Previous
                    </button>
                    <button @click="next" class="button desktop">
                        Next
                    </button>
                </div>
                <div class="jump-controls">
                    <button @click="goTo(0)" class="button desktop">
                        Ataxx<br />Java/JavaFX
                    </button>
                    <button @click="goTo(1)" class="button desktop">
                        FileSharer<br />Java/JavaFX
                    </button>
                    <button @click="goTo(2)" class="button desktop">
                        Mastermind<br />Ruby
                    </button>
                    <button @click="goTo(3)" class="button desktop">
                        Twitter Clone<br />Full Stack Web
                    </button>
                    <button @click="goTo(4)" class="button desktop">
                        Etch a Sketch<br />Front End Web
                    </button>
                    <button @click="goTo(5)" class="button desktop">
                        Portfolio Website<br />Vue and Node
                    </button>
                </div>
            </div>
        </mq-layout>
        <mq-layout mq="mobile">
            <div class="controls">
                <button @click="previous" class="button mobile">
                    Prev
                </button>
                <button @click="next" class="button mobile">
                    Next
                </button>
            </div>
        </mq-layout>
    </div>
</div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import ProjectSlide from '@/components/Projects/ProjectSlide.vue';

// settings for carousel
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
                    name: 'Mastermind',
                    techs: ['Ruby'],
                    description: `In this project, I implemented a CLI Mastermind
                                application in Ruby. I was strongly motivated to
                                go above and beyond with this project, so I
                                implemented a variety of extra features including
                                the ability to play matches, the option to play
                                against several different AI strength levels, and
                                a secret Easter Egg. There is a link to a live
                                demo in the README.`,
                    img: 'mastermind.png',
                    github: 'https://github.com/cody-malcolm/odin-mastermind'
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
                    description: `One of the front-end projects in the Odin
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
            index: 0 // tracks the current index to use correct github link
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
/* position github container */
.github {
    display: flex;
    justify-content: center;
    margin: 1rem 0;
}

/* position and style github text */
.p {
    font-size: 1.25rem;
    text-align: center;
}

/* carousel position and styling */
.carousel {
    width: 25rem;
}

.slide {
    outline: none;
}

.slick-slider {
    width: 100%;
}

/* position control container children */
.controls {
    display: flex;
    justify-content: space-around;
}

/* positioning of prev/next buttons */
.step-controls {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 1rem;
}

/* positioning of direct project link buttons */
.jump-controls {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

/* size and positioning of buttons */
.button {
    font-size: 1.25rem;
    margin: 0.25rem;
}

.button.desktop {
    width: 16rem;
}

.button.mobile {
    width: 8rem;
}
</style>
