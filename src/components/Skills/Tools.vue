<template lang="html">
<div class="outer-container">
    <div class="inner-container">
        <p class="p">
            Some miscellaneous tools I'm familiar with are:
        </p>
        <ul class="list">
            <li class="li" v-for="tool in tools" :key="tool">
                {{ tool }}
            </li>
        </ul>
        <p class="p">
            I also have experience writing to and reading from the following
            file formats:
        </p>
        <ul class="list">
            <li class="li" v-for="fileFormat in fileFormats" :key="fileFormat">
                {{ fileFormat }}
            </li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            tools: [
                "Git",
                "Bash",
                "Node.js",
                "Gradle",
                "MongoDB",
                "Atom",
                "IntelliJ"
            ],
            fileFormats: [
                ".json",
                ".csv",
                ".xml"
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
