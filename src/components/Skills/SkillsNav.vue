<template lang="html">
<div class="links-container">
    <div class="link-container">
        <router-link class="a" to="/skills/languages">Languages</router-link>
    </div>
    <div class="link-container">
        <router-link class="a" to="/skills/frameworks">Frameworks</router-link>
    </div>
    <div class="link-container">
        <router-link class="a" to="/skills/tools">Tools</router-link>
    </div>
</div>
</template>

<script>
export default {
    name: 'SkillsNav'
}
</script>

<style lang="css" scoped>
.a {
    font-family: "Manifold Extended Heavy";
    font-size: 1.5rem;
    color: hsl(0, 0%, 70%);
    text-decoration: none;
    padding: 0.75rem 1.25rem;
    border-radius: 100rem;
}

.a:hover {
    color: hsl(0, 0%, 55%);
	animation: pulsing 800ms ease-out infinite alternate;
	border-color: hsl(0, 0%, 0%);
}

@keyframes pulsing {
    0% {
        box-shadow: 0 0 0.25rem hsl(0, 0%, 55%), inset 0 0 0.25rem hsl(0, 0%, 55%);
    }
    100% {
        box-shadow: 0 0 0.75rem hsl(0, 0%, 70%), inset 0 0 0.75rem hsl(0, 0%, 70%);
    }
}

.links-container {
    display: flex;
    justify-content: center;
    height: 7vh;
    background-color: hsl(0, 0%, 0%);
}

.link-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
}
</style>
