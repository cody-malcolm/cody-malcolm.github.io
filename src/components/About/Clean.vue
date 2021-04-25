<template lang="html">
<section class="section">
    <p class="p" :class="$mq">
        I pride myself on writing code that is clean, semantic, and
        well-documented both internally and externally. I always adhere to best
        practices, even though it is fun to write brilliant one-line methods on
        websites like Code Wars.
    </p>
    <div class="snippet-container" v-if="$mq === 'desktop'">
        <div class="snippet">
            <p class="title">
                "Monster" Battle Simulator - Java - Data Structures
            </p>
            <br />
            <pre><code class="code">// ------------- Helper methods -------------------------
// Monster -> float
// Calculates the speed multiplier from status effects, if any
private float speedMultiplier() {
    float multiplier = 1.0f;      // initialise multiplier

    if (this.hasStatus("ShellSmash")) multiplier *= 1.5f;
    if (this.hasStatus("Curse")) multiplier *= (1f/1.5f);
    if (this.hasStatus("Paralyze")) multiplier *= (0.5f);

    return multiplier;
}</code></pre>
        </div>
        <div class="snippet">
            <p class="title">
                FileSharer - Java - Software Systems Development
            </p>
            <br />
            <pre><code class="code">private static void stopListening(boolean notify) {
    // if server is listening,
    if (listening) {
        // close the socket
        serverListener.closeSocket();

        // update the listening flag
        listening = false;

        // print an appropriate message
        System.out.println("The server has stopped listening for requests.");
    } else {
        // code style note: don't like else-if here for semantic reasons
        // server was already stopped - print status message if notify flag ...
        if (notify) {
            printStatus();
        }
    }
}</code></pre>
        </div>
    </div>
</section>
</template>

<script>
export default {
    name: 'Clean'
}
</script>

<style lang="css" scoped>

</style>
