<template lang="html">
<div class="outer-container">
    <div class="inner-container">
        <p class="p centered">
            Welcome to my portfolio showcase.
        </p>
        <p class="p left">
            Check out my <router-link class="a" to="/projects">projects,</router-link>
        </p>
        <p class="p centered">
            see my <router-link class="a" to="/skills">skills,</router-link>
        </p>
        <p class="p right">
            and <router-link class="a" to="/about">learn more</router-link> about me,
        </p>
        <p class="p centered">
            then <router-link class="a" to="/contact">get in touch</router-link>
            and let me know how I can help.
        </p>
    </div>
</div>
</template>

<script type="text/javascript">
// export default {
//     name: 'Welcome',
//     components: {
//     }
// }
//
</script>

<style lang="css" scoped>

.outer-container {
    width: 100%;
    display: flex;
    justify-content: center;
}

.inner-container {
    width: 60%;
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
}

.p {
    color: hsl(0, 0%, 70%);
    font-family: "Manifold Extended";
    font-size: 1.75rem;
    margin: 2rem 0;
    word-spacing: 0.25rem;
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
