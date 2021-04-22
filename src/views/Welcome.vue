<template lang="html">
<div class="outer-container">
    <div class="inner-container">
        <p class="p centered">
            Welcome to my portfolio showcase.
        </p>
        <p class="p left">
            <router-link class="a" to="/projects">
                Check out my projects,
            </router-link>
        </p>
        <p class="p centered">
            <router-link class="a" to="/skills">
                see my skills,
            </router-link>
        </p>
        <p class="p right">
            <router-link class="a" to="/about">
                and learn more about me,
            </router-link>
        </p>
        <p class="p centered">
            <router-link class="a" to="/contact">
                then get in touch and let me know how I can help.
            </router-link>
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
    padding-top: 4rem;
}

.p {
    color: hsl(0, 0%, 70%);
    font-family: "Manifold Extended";
    font-size: 1.75rem;
    margin: 2rem 0;
}

.a {
    color: inherit;
    text-decoration: none;
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
