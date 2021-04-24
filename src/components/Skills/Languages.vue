<template lang="html">
<div class="outer-container">
    <div class="inner-container">
        <p class="p">I have recent experience with the following languages:</p>
        <ul class="list">
            <li class="li" v-for="language in languages" :key="language">
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

.outer-container {
    width: 100%;
    display: flex;
    justify-content: center;
}

.inner-container {
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

</style>
