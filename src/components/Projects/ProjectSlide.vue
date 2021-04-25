<template lang="html">
<div class="">
    <mq-layout mq="laptop+">
        <div class="container">
            <div class="left-container">
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
                        <li class="li" :class="$mq" v-for="tech in project.techs" :key="tech">
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
            <div class="right-container">
                <img class="img" :src="require('@/assets/images/projects/' + project.img)" :alt="'screenshot of ' + project.name">
            </div>
        </div>
    </mq-layout>
    <mq-layout mq="mobile">
        <div class="mobile-container">
            <div>
                <p class="p centered" :class="$mq">
                    Project name:
                </p>
                <p class="p centered" :class="$mq">
                    {{ project.name }}
                </p>
            </div>
            <div>
                <p class="p centered" :class="$mq">
                    Technologies used:
                </p>
                <ul class="list" :class="$mq">
                    <li class="li" :class="$mq" v-for="tech in project.techs" :key="tech">
                        {{ tech }}
                    </li>
                </ul>
            </div>
            <div>
                <p class="p centered" :class="$mq">
                    Description:
                </p>
                <p class="p" :class="$mq">
                    {{ project.description }}
                </p>
            </div>
        </div>
    </mq-layout>
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
    justify-content: center;
    text-align: center;
}

.li {
    margin: 0 1rem;
}

.p, .list {
    margin: 0.5rem 0;
}

.centered {
    text-align: center;
}

.p.desktop, .list.desktop {
    font-size: 1.25rem;
    word-spacing: 0.5rem;
    margin: 0.5rem 0;
}

.p.mobile, .list.mobile {
    font-size: 1.0rem;
    word-spacing: 0.5rem;
    margin: 0.5rem 0;
}

.mobile-container {
    display: flex;
    flex-direction: column;
    align-items: center;
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
    width: auto;
    border: 1px solid hsl(0, 0%, 40%);
    max-height: 24rem;
}

</style>
