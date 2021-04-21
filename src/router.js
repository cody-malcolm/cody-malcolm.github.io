import Vue from "vue";
import Router from "vue-router";

import Welcome from './views/Welcome.vue';
import Projects from './views/Projects.vue';
import Skills from './views/Skills.vue';
import About from './views/About.vue';
import Contact from './views/Contact.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {path: '/', name: 'welcome', component: Welcome},
        {path: '/projects', name: 'projects', component: Projects},
        {path: '/skills', name: 'skills', component: Skills},
        {path: '/about', name: 'about', component: About},
        {path: '/contact', name: 'contact', component: Contact}
    ]
});
