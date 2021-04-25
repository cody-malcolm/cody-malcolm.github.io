<template lang="html">
<div class="outer-container">
    <div class="inner-container" :class="$mq">
        <p class="p" :class="$mq">
            I've built projects using the following frameworks and
            libraries:
        </p>
        <ul class="list">
            <li class="li" :class="$mq" v-for="framework in frameworks" :key="framework">
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
