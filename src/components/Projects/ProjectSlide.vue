<template lang="html">
<div class="container">
    <!-- apply left container class only on desktop -->
    <div v-bind:class="{'left-container': $mq === 'desktop'}">
        <div class="section">
            <p class="p centered" :class="$mq">
                Project name: {{ project.name }}
            </p>
        </div>
        <div class="section">
            <p class="p centered" :class="$mq">
                Technologies used:
            </p>
            <ul class="list" :class="$mq">
                <li class="li"
                    :class="$mq"
                    v-for="tech in project.techs"
                    :key="tech">
                    {{ tech }}
                </li>
            </ul>
        </div>
        <div class="section">
            <p class="p centered" :class="$mq">
                Description:
            </p>
            <p class="p" :class="$mq">
                {{ project.description }}
            </p>
        </div>
    </div>
    <!-- only render right container (image) on desktop  -->
    <div class="right-container" v-if="$mq === 'desktop'">
        <img    class="img"
                :src="require('@/assets/images/projects/' + project.img)"
                :alt="'screenshot of ' + project.name">
    </div>
</div>
</template>

<script>
export default {
    name: 'ProjectSlide',
    props: {
        project: Object
    }
}
</script>

<style lang="css" scoped>
/* the main container for a project slide */
.container {
    display: flex !important;
}

/* padding in between sections */
.section {
    margin: 1rem 0;
}

/* style and positioning for list and p elements */
.list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
}

.li {
    margin: 0 1rem;
}

.p,
.list {
    margin: 0.5rem 0;
}

.p.desktop,
.list.desktop {
    font-size: 1.25rem;
    word-spacing: 0.5rem;
    margin: 0.5rem 0;
}

.p.mobile,
.list.mobile {
    font-size: 1.0rem;
    word-spacing: 0.5rem;
    margin: 0.5rem 0;
}

.centered {
    text-align: center;
}

/* positioning and layout for the desktop subcontainers */
.left-container {
    width: 50%;
    padding-right: 0.25rem;
}

.right-container {
    width: 50%;
    padding-left: 0.25rem;
    display: flex;
    align-items: center;
}

/* size control for the image  */
.img {
    width: auto;
    border: 1px solid hsl(0, 0%, 40%);
    max-height: 24rem;
}

</style>
