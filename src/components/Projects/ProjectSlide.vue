<template lang="html">
<div class="container">
    <div class="left-container">
        <div class="section">
            <p class="p">
                Project name: {{ project.name }}
            </p>
        </div>
        <div class="section">
            <p class="p">
                Technologies used:
            </p>
            <ul class="list">
                <li class="li" v-for="tech in project.techs" :key="tech">
                    {{ tech }}
                </li>
            </ul>
        </div>
        <div class="section">
            <p class="p">
                Description:
            </p>
            <p class="p">
                {{ project.description }}
            </p>
        </div>
    </div>
    <div class="right-container">
        <img class="img" :src="require('@/assets/images/projects/' + project.img)" :alt="'screenshot of ' + project.name">
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

.container {
    display: flex !important;
}
.section {
    margin: 1rem 0;
}

.list {
    display: flex;
    flex-wrap: wrap;
}
.li {
    margin-right: 2rem;
}

.p, .list {
    color: hsl(0, 0%, 70%);
    font-family: "Manifold Extended";
    font-size: 1.25rem;
    word-spacing: 0.5rem;
    margin: 0.5rem 0;
}


.left-container {
    width: 50%;
    padding-right: 0.25rem;
}

.right-container {
    width: 50%;
    padding-left: 0.25rem;
    display: flex;
    align-items: center;
    max-height: 575px;
}

.img {
    font-family: "Manifold Extended";
    color: hsl(0, 0%, 70%);
    width: 100%;
    border: 1px solid hsl(0, 0%, 40%);
    max-height: 24rem;
}

</style>
