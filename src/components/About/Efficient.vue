<template lang="html">
<section class="section">
    <p class="p">
        I chose a minor in Mathematics because it's also important to me
        that the software I write is efficient, logically sound, and behaves
        as expected. For this, I've taken classes in Statistics, Discrete
        Mathematics, Computational Science, Optimization, and soon
        Probability - with demonstrated success comparable to
        that of my programming classes.
    </p>
    <div class="snippet-container">
        <div class="image">
            <img src="@/assets/images/lower_triangular_mult.png" alt="LaTeX pseudocode" />
        </div>
        <div class="snippet">
            <p class="title">
                Lower Triangular Multiplication - Python - Computational Science
            </p>
            <br />
            <pre><code class="code">import numpy as np

def lower_mult(A, B):
    n = np.shape(A)[0]
    C = np.zeros((n,n))
    for r in range(n):
        for c in range(r+1):
            C[r, c] = A[r,c]*B[c,c]
            for col in range(1,r-c+1):
                C[r, c] += A[r, c+col]*B[c+col,c]
    return C</code></pre>
        </div>
    </div>
</section>
</template>

<script>
export default {
    name: 'Efficient'
}
</script>

<style lang="css" scoped>
</style>
