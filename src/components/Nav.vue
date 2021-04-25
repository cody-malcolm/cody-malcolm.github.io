<template lang="html">
<header class="header">
    <div class="name-container" :class="$mq">
        <h1 class="h1" :class="$mq">
            Cody Malcolm
        </h1>
    </div>
    <mq-layout mq="laptop+">
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
            active: false
        };
    },
    methods: {
        toggle: function() {
            this.active = !this.active;
        }
    }
}
</script>

<style lang="css" scoped>

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

/* @keyframes pulsing {
    0% {
        box-shadow: 0 0 0.25rem hsl(0, 0%, 55%), inset 0 0 0.25rem hsl(0, 0%, 55%);
    }
    100% {
        box-shadow: 0 0 0.75rem hsl(0, 0%, 70%), inset 0 0 0.75rem hsl(0, 0%, 70%);
    }
} */

.links-container {
    display: flex;
    justify-content: space-around;
    height: 7vh;
}

.link-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
}

.links-menu {
    height: 5vh;
    display: flex;
    justify-content: center;
}

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

.mobile-menu {
    position: absolute;
    top: 66px;
    background-color: hsl(0, 0%, 0%);
    z-index: 1;
}

.mobile-link-container {
    padding: 1rem;
    text-align: center;
}
</style>
