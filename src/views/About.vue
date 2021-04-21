<template>
<div class="outer-container">
    <div class="inner-container">
        <section class="section" id="my">
            <p class="centered">
                My name is Cody Malcolm and I'm an undergraduate studying Computer
                Science with a minor in Mathematics at
                <a href="https://ontariotechu.ca/" target="_blank">Ontario Tech
                University</a>. Although I am only in my third year, I am
                <span class="em">super</span>-talented.
            </p>
            <p class="centered">
                It takes a lot of confidence to make a statement like that, but if
                you've already seen my <router-link to="/projects">project showcase
                </router-link> then I'm sure you'll agree the claim is justified.
            </p>
        </section>
        <section class="section" id="clean">
            <p class="centered">
                I pride myself on writing code that is clean, semantic, and
                well-documented both internally and externally. I always adhere to
                best practices, even though it is fun to write brilliant one-line
                methods on websites like
                <a href="https://www.codewars.com/users/cody-malcolm">Code Wars</a>.
            </p>
        </section>
        <section class="section" id="robust">
            <p class="centered">
                I always strive to make my programs as robust as possible,
                guarding against incorrect or malicious user input, edge cases,
                and other possible exceptions.
            </p>
        </section>
        <section class="section" id="efficient">
            <p class="centered">
                I chose a minor in Mathematics because it's also important to me
                that the software I write is efficient, logically sound, and behaves
                as expected. For this, I've taken classes in Statistics, Discrete
                Mathematics, Computational Science, Optimization, and (this
                September) Probability - with demonstrated success comparable to
                that of my programming classes.
            </p>
        </section>
        <section class="section" id="designs">
            <p class="centered">
                When designing an application, I make sure to properly utilize all
                <a href="/projects">object-oriented design principles</a> in order
                to produce a project that is modular, maintainable, and DRY. My
                <router-link to="/projects">project showcase</router-link> contains
                numerous examples of my deep understanding of these principles.
            </p>
        </section>
    </div>
</div>
</template>

<style scoped>
.em {
    font-style: italic;
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
    padding-top: 4rem;
}

p {
    color: hsl(0, 0%, 70%);
    font-family: "Manifold Extended";
    font-size: 1.75rem;
    margin: 2rem 0;
    word-spacing: 0.5rem;
    text-align: justify;
}

a {
    color: inherit;
    text-decoration: none;
}

.centered {
    align-self: center;
}

.left {
    align-self: flex-start;
}

.right {
    align-self: flex-end;
}
</style>
