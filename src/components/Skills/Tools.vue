<template lang="html">
<div class="outer-container">
    <div class="inner-container" :class="$mq">
        <p class="p" :class="$mq">
            Some miscellaneous tools I'm familiar with are:
        </p>
        <ul class="list">
            <li class="li"
                :class="$mq"
                v-for="tool in tools"
                :key="tool">
                {{ tool }}
            </li>
        </ul>
        <p class="p" :class="$mq">
            I also have experience writing to and reading from the following
            file formats:
        </p>
        <ul class="list">
            <li class="li ff"
                :class="$mq"
                v-for="fileFormat in fileFormats"
                :key="fileFormat">
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
