<template lang="html">
<section class="section">
    <p class="p" :class="$mq">
        I always strive to make my programs as robust as possible,
        guarding against incorrect or malicious user input, edge cases,
        and other possible exceptions.
    </p>
    <div class="snippet-container" v-if="$mq === 'desktop'">
        <div class="snippet">
            <p class="title">
                File I/O Lab Assignment - C++ - Programming Workshop II
            </p>
            <br />
            <pre><code class="code">// verify correct number of command line arguments
if (argc != 2) {
    cerr &lt;&lt; "Please give only the input file as an argument." &lt;&lt; endl;
    return 1;
}

// initialize and open file
ifstream fin(argv[1]);

// confirm file open was successful
if (fin.fail()) {
    cerr &lt;&lt; "There was an error opening \'" &lt;&lt; argv[1] &lt;&lt; "\'." &lt;&lt; endl;
    return 1;
}</code></pre>
        </div>
        <div class="snippet">
            <p class="title">
                FileSharer - Java - Software Systems Development
            </p>
            <br />
            <pre><code class="code">// guard is to deal with an edge case
ObservableList&lt;Node&gt; previewNodes = previewContainer.getChildren();

if (previewNodes.size() &gt; 1) {
    // remove the second child of the preview container's children
    previewNodes.remove(1);
}

// guard against files with extensions suggesting binary types
if (Utils.detectBinary(selectedFilename)) {
    hardClear();
    giveFeedback("Unfortunately, binary-based file formats are not ...
    return;
}</code></pre>
        </div>
    </div>
</section>
</template>

<script>
export default {
    name: 'Robust'
}
</script>

<style lang="css" scoped>
</style>
