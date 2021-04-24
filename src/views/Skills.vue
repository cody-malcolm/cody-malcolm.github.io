<template lang="html">
<div>
    <SkillsNav />
    <router-view />
</div>
</template>

<script>
import SkillsNav from '@/components/Skills/SkillsNav.vue';

export default {
    name: 'Skills',
    components: {
        SkillsNav
    }
}

</script>
<style lang="css" scoped>

</style>
