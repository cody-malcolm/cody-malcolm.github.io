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
/* space from nav bar */
.inner-container.desktop {
    margin-top: 2rem;
}

.inner-container.mobile {
    margin-top: 0.5rem;
}

/* set text size and position */
.p {
    font-size: 1.75rem;
}

.p.desktop {
    margin: 2rem 0;
}

.p.mobile {
    text-align: center;
    margin: 1rem 0;
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
