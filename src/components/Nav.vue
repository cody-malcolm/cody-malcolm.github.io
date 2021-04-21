<template>
<header>
    <div class="name-container">
        <h1>Cody Malcolm</h1>
    </div>
    <div class="links-container">
        <div class="link-container">
            <router-link to="/">Welcome</router-link>
        </div>
        <div class="link-container">
            <router-link to="/projects">Projects</router-link>
        </div>
        <div class="link-container">
            <router-link to="/skills">Skills</router-link>
        </div>
        <div class="link-container">
            <router-link to="/about">About</router-link>
        </div>
        <div class="link-container">
            <router-link to="/contact">Contact</router-link>
        </div>
    </div>
</header>
</template>

<script>
export default {
    name: 'Nav'
}
</script>

<style scoped>
header {
    background-color: hsl(0, 0%, 0%);
    color: hsl(0, 0%, 70%);
}

h1 {
    font-family: "Manifold Extended";
    font-size: 3rem;
    cursor: default;
    user-select: none;
}

a {
    font-family: "Manifold Extended";
    font-size: 1.5rem;
    color: hsl(0, 0%, 70%);
    text-decoration: none;
    padding: 0.5rem;
}

a:hover {
    color: hsl(0, 0%, 55%);
	animation: pulsing 800ms ease-out infinite alternate;
	border-color: hsl(0, 0%, 0%);
    border-radius: 100rem;
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
    justify-content: space-around;
    height: 10vh;
}

.link-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
}

.name-container {
    height: 15vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>
