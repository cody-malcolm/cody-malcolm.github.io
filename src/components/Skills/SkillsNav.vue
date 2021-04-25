<template lang="html">
<div>
    <div class="links-container" :class="$mq">
        <div class="link-container">
            <router-link class="nav" :class="$mq" to="/skills/languages">Languages</router-link>
        </div>
        <div class="link-container">
            <router-link class="nav" :class="$mq" to="/skills/frameworks">Frameworks</router-link>
        </div>
        <div class="link-container">
            <router-link class="nav" :class="$mq" to="/skills/tools">Tools</router-link>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'SkillsNav'
}
</script>

<style lang="css" scoped>
/* .a {
    color: hsl(0, 0%, 70%);
    font-family: "Manifold Extended";
    font-size: 1.5rem;
    text-decoration: none;
    border-radius: 100rem;
} */
.nav.desktop {
    font-size: 1.5rem;
    padding: 0.75rem 1.25rem;
}
.nav.mobile {
    font-size: 1.5rem;
    padding: 0.25rem 0.5rem;
    margin: 0.25rem 0;
}

/* .a:hover {
    color: hsl(0, 0%, 55%);
	animation: pulsing 800ms ease-out infinite alternate;
	border-color: hsl(0, 0%, 0%);
} */

.links-container {
    display: flex;
    background-color: hsl(0, 0%, 0%);
}

.links-container.desktop {
    justify-content: center;
    height: 7vh;
}

.links-container.mobile {
    flex-direction: column;
    align-items: center;
}

.link-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
}
</style>
