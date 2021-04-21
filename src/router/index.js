import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from '../views/Welcome.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Welcome',
        component: Welcome,
        meta: {
            title: 'Welcome'
        }
    },
    {
        path: '/projects',
        name: 'Projects',
        component: () => import('../views/Projects.vue'),
        meta: {
            title: 'Projects'
        }
    },
    {
        path: '/skills',
        name: 'Skills',
        component: () => import('../views/Skills.vue'),
        meta: {
            title: 'Skills'
        }
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue'),
        meta: {
            title: 'About'
        }
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import('../views/Contact.vue'),
        meta: {
            title: 'Contact'
        }
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach(route => {
    document.title = route.meta.title;
});

export default router;
