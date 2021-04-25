<template lang="html">
<section class="section">
    <p class="p" :class="$mq">
        My name is Cody Malcolm and I'm an undergraduate studying Computer
        Science with a minor in Mathematics at Ontario Tech University. Although
        I am only in my third year, I am <span class="em">super</span>-talented.
    </p>
    <p class="p" :class="$mq">
        It takes a lot of confidence to make a statement like that, but if
        you've already seen my project showcase then I'm sure you'll
        agree<span v-if="$mq !== 'mobile'"> the claim is justified</span>.
    </p>
    <p class="p" :class="$mq">
        I still have lots to learn (a process which never ends), but I'm a quick
        study and have been putting effort into getting familiar with as many
        different development technologies as I can.
    </p>
    <p class="p" :class="$mq">
        Recent additions include JavaFX, Gradle, socket communications, Node,
        React, Vue, Express, SQLite, and MongoDB. You can see many of these
        skills on display in the Ataxx and Twitter Clone projects.
        <span v-if="$mq !== 'mobile'"> This summer, my primary focus will be Ruby
            on Rails and building out my portfolio.</span>
    </p>
</section>
</template>

<script>
export default {
    name: 'Me'
}
</script>

<style lang="css" scoped>
</style>
