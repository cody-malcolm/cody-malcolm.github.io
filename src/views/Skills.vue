<template lang="html">
<div>
    <SkillsNav />
    <router-view class="category" />
    <p v-if="mainSkillsPage" class="p">
        Please select a category
    </p>
</div>
</template>

<script>
import SkillsNav from '@/components/Skills/SkillsNav.vue';

export default {
    name: 'Skills',
    components: {
        SkillsNav
    },
    computed: {
        mainSkillsPage: function() {
            return this.$route.name === 'skills';
        }
    }
}

</script>
<style lang="css" scoped>

.category::v-deep .p, .category::v-deep .li, .p {
    color: hsl(0, 0%, 70%);
    font-family: "Manifold Extended";
    font-size: 1.75rem;
    margin: 2rem 0;
    word-spacing: 0.25rem;
    text-align: center;
}

.category::v-deep .li {
    width: 33%;
}


.category::v-deep .list {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
}
</style>
