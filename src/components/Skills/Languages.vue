<template lang="html">
<div class="outer-container">
    <div class="inner-container" :class="$mq">
        <p class="p" :class="$mq">I have recent experience with the following languages:</p>
        <ul class="list">
            <li class="li" :class="$mq" v-for="language in languages" :key="language">
                {{ language }}
            </li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            languages: [
                "Ruby",
                "Java",
                "Javascript",
                "HTML5",
                "CSS3",
                "Python",
                "C++",
                "SQLite"
            ]
        }
    }
}

</script>

<style lang="css" scoped>

</style>
