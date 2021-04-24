<template lang="html">
<div class="outer-container">
    <div class="inner-container">
        <p class="p">
            I've built projects using the following frameworks and
            libraries:
        </p>
        <ul class="list">
            <li class="li" v-for="framework in frameworks" :key="framework">
                {{ framework }}
            </li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            frameworks: [
                "React",
                "Vue",
                "Express",
                "Bootstrap",
                "Bulma",
                "JavaFX",
                "Numpy"
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
