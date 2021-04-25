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
        // returns true when no category is selected
        mainSkillsPage: function() {
            return this.$route.name === 'skills';
        }
    }
}
</script>

<style lang="css" scoped>
/* set text size and positioning for this and child components */
.category::v-deep .p, .category::v-deep .li, .p {
    font-size: 1.75rem;
    margin: 1rem 0;
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

/* special handling for file formats, they can fit 3 across even on mobile */
.category::v-deep .li.mobile.ff {
    width: 33%;
}

.category::v-deep .list {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
}
</style>
