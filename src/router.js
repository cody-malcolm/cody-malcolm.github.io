import Vue from "vue";
import Router from "vue-router";

import Welcome from './views/Welcome.vue';

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'welcome',
            component: Welcome,
            meta: {
                title: 'Welcome'
            }
        },
        {
            path: '/projects',
            name: 'projects',
            component: () => import('./views/Projects.vue'),
            meta: {
                title: 'Projects'
            }
        },
        {
            path: '/skills',
            name: 'skills',
            component: () => import('./views/Skills.vue'),
            meta: {
                title: 'Skills'
            }
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('./views/About.vue'),
            meta: {
                title: 'About'
            }
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import('./views/Contact.vue'),
            meta: {
                title: 'Contact'
            }
        }
    ],
    mode: 'history',
    base: process.env.BASE_URL
});

router.beforeEach((to, from, next) => {
    const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

    if(nearestWithTitle) {
        document.title = nearestWithTitle.meta.title;
    }

    next();
});

export default router;
