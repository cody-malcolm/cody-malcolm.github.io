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
    margin: 1rem 0;
    word-spacing: 0.25rem;
    text-align: center;
}

.category::v-deep .p.mobile {
    font-size: 1rem;
}

.category::v-deep .li.desktop {
    font-size: 1.25rem;
    width: 33%;
}

.category::v-deep .li.mobile {
    font-size: 1rem;
    width: 50%;
}

.category::v-deep .li.mobile.ff {
    width: 33%;
}

.category::v-deep .list {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
}

/* this is the top-level item of router-view */
.outer-container {
    width: 100%;
    display: flex;
    justify-content: center;
}

.category::v-deep .inner-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.category::v-deep .inner-container.desktop {
    width: 60%;
}

.category::v-deep .inner-container.mobile {
    width: 95%;
}
</style>
