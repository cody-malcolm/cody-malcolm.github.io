# Portfolio Website

## Project Overview

After being unsuccessful securing a co-op placement for the summer despite a
perfect GPA, through a co-op workshop I managed to speak with a senior dev who
is involved in hiring decisions at a mid-size game development company. Two of
the major take-aways I got from that conversation were:

- A strong portfolio is even more important than I thought it was, and,

- Aptitude in one (or several) languages is not perceived as particularly
transferable to other languages

This is unfortunate as my school doesn't have _any_ projects that are allowed to
be shared in a public portfolio until late in one 2nd year course. Luckily, I
took the 3rd year course Web Application Development as my elective this term,
so in addition to the Java projects from Systems, I also have a full stack web
application in addition to my previous hobby front-end work.

I decided that my first step should be to put my newly improved web development
skills to the test and get a portfolio website set up and deployed to GitHub
Pages, showcasing the projects I already have. Then, I can find hobby projects
in a variety of languages to show a more diverse range of languages, frameworks,
and tools.

In this spirit, even though I'd just built a Twitter clone with React, which I
would have been _very_ comfortable using again, I decided to use a different
framework that I had no real experience with to build the portfolio website -
Vue.

## Reflections

As with every project where I'm learning a new technology, there were challenges
to sort out and bugs to squash. Thankfully, it was not too difficult to find a
simple workflow to deploy the page to GitHub Pages, and then it was just a
matter of banging out the components. I had to switch from Vue 3 to Vue 2.6 in
order to utilize the 'vue-slick-carousel' Node.js package for the carousels used
in the Projects and About pages, as it doesn't yet support Vue 3.

In hindsight, I used no terribly complicated mechanics provided by the carousel,
and could have easily implemented a comparable effect myself with CSS and
Javascript. This would have saved me some time debugging issues related to the
way the carousel positions things on the page behind the scenes, for example
when implementing the mobile "hamburger" menu I had to identify why I was not
getting the expected behaviour when implementing toggle on menu selection, and
it was because the carousel was covering parts (but not all) of the mobile
drop-down. Once I recognized that the issue only existed on the "Projects" page
and the "About" page, I immediately realized the carousel was the issue and my
first idea to resolve it - using CSS z-index - fixed the issue. With that said,
I'm glad I used the carousel because it demonstrates ability to read and make
use of 3rd party APIs.
