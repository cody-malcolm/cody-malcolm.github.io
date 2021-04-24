<template lang="html">
<div class="outer-container">
    <div class="inner-container">
        <p class="p">I'm familiar with the following languages:</p>
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
                "SQLite",
                "MongoDB"
            ]
        }
    }
}

</script>

<style lang="css" scoped>

.p, .li {
    color: hsl(0, 0%, 70%);
    font-family: "Manifold Extended";
    font-size: 1.75rem;
    margin: 2rem 0;
    word-spacing: 0.25rem;
    text-align: center;
}

.li {
    width: 33%;
}

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

.list {
    display: flex;
    flex-wrap: wrap;
}

</style>
