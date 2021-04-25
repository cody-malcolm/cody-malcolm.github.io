<template lang="html">
<header class="header">
    <div class="name-container" :class="$mq">
        <h1 class="h1" :class="$mq">
            Cody Malcolm
        </h1>
    </div>
    <!-- desktop layout -->
    <mq-layout mq="desktop">
        <div class="links-container">
            <div class="link-container">
                <router-link class="nav" to="/">Welcome</router-link>
            </div>
            <div class="link-container">
                <router-link class="nav" to="/projects">Projects</router-link>
            </div>
            <div class="link-container">
                <router-link class="nav" to="/skills">Skills</router-link>
            </div>
            <div class="link-container">
                <router-link class="nav" to="/about">About</router-link>
            </div>
            <div class="link-container">
                <router-link class="nav" to="/contact">Contact</router-link>
            </div>
        </div>
    </mq-layout>
    <!-- mobile burger menu -->
    <mq-layout mq="mobile">
        <div class="links-menu">
            <div class="burger" @click="toggle">
                <div class="top" v-bind:class="{active: active}" />
                <div class="mid" v-bind:class="{active: active}" />
                <div class="bot" v-bind:class="{active: active}" />
            </div>
            <div class="mobile-menu" v-if="active">
                <div class="mobile-link-container">
                    <router-link class="nav" to="/" @click.native="toggle">Welcome</router-link>
                </div>
                <div class="mobile-link-container">
                    <router-link class="nav" to="/projects" @click.native="toggle">Projects</router-link>
                </div>
                <div class="mobile-link-container">
                    <router-link class="nav" to="/skills" @click.native="toggle">Skills</router-link>
                </div>
                <div class="mobile-link-container">
                    <router-link class="nav" to="/about" @click.native="toggle">About</router-link>
                </div>
                <div class="mobile-link-container">
                    <router-link class="nav" to="/contact" @click.native="toggle">Contact</router-link>
                </div>
            </div>
        </div>
    </mq-layout>
</header>
</template>

<script>
export default {
    name: 'Nav',
    data() {
        return {
            // whether the burger menu is active ie. displayed
            active: false
        };
    },
    methods: {
        // toggle display of burger menu
        toggle: function() {
            this.active = !this.active;
        }
    }
}
</script>

<style lang="css" scoped>
/* style name and header */
.h1 {
    font-family: "Manifold Extended Heavy";
    cursor: default;
    user-select: none;
    text-align: center;
}

.h1.desktop {
    font-size: 3rem;
}

.h1.mobile {
    font-size: 1rem;
}

.header {
    background-color: hsl(0, 0%, 0%);
    color: hsl(0, 0%, 70%);
}

/* style full width link container */
.links-container {
    display: flex;
    justify-content: space-around;
    height: 7vh;
}

/* an individual link container */
.link-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
}

/* for the burger menu */
.links-menu {
    height: 5vh;
    display: flex;
    justify-content: center;
}

/* style and position name container */
.name-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.name-container.desktop {
    height: 12vh;
}

.name-container.mobile {
    height: 5vh;
}

/* burger menu */
.burger {
    width: 33px;
    height: 33px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.top, .mid, .bot {
    background-color: hsl(0, 0%, 70%);
    height: 3px;
    border-radius: 1rem;
    width: 33px;
}

.top.active {
    transform: translateY(11px) rotateZ(-45deg);
}

.mid.active {
    visibility: hidden;
}

.bot.active {
    transform: translateY(-11px) rotateZ(45deg);
}

/* mobile menu */
.mobile-menu {
    position: absolute;
    top: 66px;
    background-color: hsl(0, 0%, 0%);
    z-index: 1; /* needed for projects/about due to carousel side effects */
}

.mobile-link-container {
    padding: 1rem;
    text-align: center;
}
</style>
