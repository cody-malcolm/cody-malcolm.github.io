<template lang="html">
<div class="outer-container">
    <div class="inner-container" :class="$mq">
        <p class="p centered" :class="$mq">
            Welcome to my portfolio showcase.
        </p>
        <p class="p left" :class="$mq">
            Check out my <router-link class="a" to="/projects">projects,</router-link>
        </p>
        <p class="p centered" :class="$mq">
            see my <router-link class="a" to="/skills">skills,</router-link>
        </p>
        <p class="p right" :class="$mq">
            and <router-link class="a" to="/about">learn more</router-link> about me,
        </p>
        <p class="p centered" :class="$mq">
            then <router-link class="a" to="/contact">get in touch</router-link>
            and let me know how I can help.
        </p>
    </div>
</div>
</template>

<style lang="css" scoped>

.outer-container {
    width: 100%;
    display: flex;
    justify-content: center;
}

.inner-container {
    display: flex;
    flex-direction: column;
}

.inner-container.desktop {
    width: 60%;
    margin-top: 2rem;
}

.inner-container.mobile {
    width: 95%;
    margin-top: 0.5rem;
}

.p {
    color: hsl(0, 0%, 70%);
    font-family: "Manifold Extended";
    font-size: 1.75rem;
    word-spacing: 0.25rem;
}

.p.desktop {
    margin: 2rem 0;
}

.p.mobile {
    text-align: center;
    margin: 1rem 0;
}

.a {
    color: hsl(0, 0%, 55%);
    text-decoration: none;
    word-spacing: 0.25rem;
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
